// popup.js
function getAllUserData() {
  chrome.runtime.sendMessage({ action: 'getAllUserData' }, function(response) {
    console.log('All user data:', response);
  });
}

// Optionally, add a function to clear user data when needed
function clearUserData() {
  chrome.runtime.sendMessage({ action: 'clearUserData' });
}

// Listen for updates to user roles from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'updateUserRoles') {
    console.log('User roles updated in popup:', request.data);
    // Display or handle the updated user roles in the popup as needed
  }
});
