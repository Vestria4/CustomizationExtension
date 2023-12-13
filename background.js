// background.js
let usersData = [];

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'extractUserInfo') {
    // Add the user data to the array
    usersData.push(request.data);

    // Make API requests to determine admin, moderator, creator status
    makeApiRequests(request.data.user_id);
  }
});

const makeApiRequests = (userId) => {
  // Replace "YOUR_API_ENDPOINT" with your actual API endpoint URL
  const apiUrl = `https://api.slin.dev/grab/v1/get_user_info?user_id=${userId}`;

  // Make API requests to get user roles
  fetch(apiUrl)
    .then(response => response.json())
    .then(userData => {
      // Find the user data in the array and update the roles
      const storedUserData = usersData.find(user => user.user_id === userId);
      if (storedUserData) {
        Object.assign(storedUserData, userData);
        console.log('User roles updated:', storedUserData);

        // Optionally, send the updated user data to the popup
        chrome.runtime.sendMessage({ action: 'updateUserRoles', data: storedUserData });
      }
    })
    .catch(error => {
      console.error('Error fetching user roles:', error);
    });
};
