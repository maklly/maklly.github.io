import axios from 'axios';

// Base URL
const baseUrl = 'http://localhost:5213/api/';

// Get all users
export const getUsers = () => {
  return axios.get(baseUrl + 'user/GetUser')
    .then(response => response.data)
    .catch(error => console.error('Error:', error));
}

// Add a user
export const addUser = (user) => {
  return axios.post(baseUrl + 'user/AddUser', user)
    .then(response => response.data)
    .catch(error => console.error('Error:', error));
}

export const sendMessage = (userId, message) => {
  return axios.post(baseUrl + 'Chat/send', { userId, message })
    .then(response => response.data)
    .catch(error => console.error('Error:', error));
}

// And so on for UpdateUser, DeleteUser, and Login