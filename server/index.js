// Simple Socket.IO server for local development
const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer((req, res) => {
  // Simple health-check for browser requests
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('socket server running');
});

const io = new Server(server, {
  cors: { origin: '*' },
});

// Store connected users
const users = new Map();
const messages = [];

// Helper function to generate random color
const getRandomColor = () => {
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];
  return colors[Math.floor(Math.random() * colors.length)];
};

// Helper function to generate random avatar
const getRandomAvatar = (username) => {
  // Using DiceBear API for random avatars
  const styles = ['avataaars', 'bottts', 'lorelei', 'micah', 'miniavs', 'personas'];
  const randomStyle = styles[Math.floor(Math.random() * styles.length)];
  const seed = username || Math.random().toString(36).substring(7);
  return `https://api.dicebear.com/7.x/${randomStyle}/svg?seed=${seed}`;
};

io.on('connection', (socket) => {
  console.log('Socket connected:', socket.id);

  // receive username from client via query param
  const username = socket.handshake.query?.username || 'Anonymous';
  console.log('username:', username);

  // Create user object
  const user = {
    socketId: socket.id,
    name: username,
    color: getRandomColor(),
    avatar: getRandomAvatar(username),
    pos: { x: 0, y: 0 },
    location: '',
    flag: ''
  };

  // Add user to map
  users.set(socket.id, user);

  // Send initial messages to the new user
  socket.emit('msgs-receive-init', messages);

  // Broadcast updated user list to everyone
  io.emit('users-update', Array.from(users.values()));

  console.log(`Total users online: ${users.size}`);

  // Handle username change
  socket.on('username-change', (data) => {
    const user = users.get(socket.id);
    if (user) {
      user.name = data.username;
      users.set(socket.id, user);
      io.emit('users-update', Array.from(users.values()));
      console.log(`User ${socket.id} changed name to ${data.username}`);
    }
  });

  // Handle message send
  socket.on('msg-send', (payload) => {
    const user = users.get(socket.id);
    const message = {
      socketId: socket.id,
      username: user?.name || 'Anonymous',
      content: payload.content,
      time: new Date()
    };
    messages.push(message);
    // Broadcast to all users including sender
    io.emit('msg-receive', message);
    console.log('msg-send:', message);
  });

  // Handle cursor position updates
  socket.on('cursor-move', (data) => {
    const user = users.get(socket.id);
    if (user) {
      user.pos = data.pos;
      users.set(socket.id, user);
      socket.broadcast.emit('cursor-update', user);
    }
  });

  // Handle disconnect
  socket.on('disconnect', (reason) => {
    users.delete(socket.id);
    io.emit('users-update', Array.from(users.values()));
    console.log(`Socket disconnected: ${socket.id}, reason: ${reason}`);
    console.log(`Total users online: ${users.size}`);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`Socket.IO server listening on ${PORT}`));
