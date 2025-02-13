// utils/auth.js
const mockUsers = [
    {
      id: 1,
      email: "user1@example.com",
      password: "password123",
      name: "John Doe",
    },
    {
      id: 2,
      email: "user2@example.com",
      password: "password456",
      name: "Jane Smith",
    },
    {
      id: 3 ,
      email: "admin@example.com",
      password: "admin123",
      name: "Admin User",
    },
  ];
  
  // Function to authenticate a user
  export const authenticateUser = (email, password) => {
    const user = mockUsers.find(
      (user) => user.email === email && user.password === password
    );
    return user ? user : null;
  };
  
  // Function to register a new user
  export const registerUser = (username, email, password) => {
    const newUser = {
      id: mockUsers.length + 1,
      name: username,
      email,
      password,
    };
    mockUsers.push(newUser);
    return newUser;
  };