// content.js
(function() {
  const extractUserInfo = () => {
    // Extract basic user information from the webpage
    const userIdElement = document.getElementById('user-id');
    const mainColorElement = document.getElementById('main-color');
    const secondaryColorElement = document.getElementById('secondary-color');

    if (userIdElement && mainColorElement && secondaryColorElement) {
      const userData = {
        user_id: userIdElement.textContent,
        active_customizations: {
         player_color_primary: { color: mainColorElement.textContent.split(', ') },
          player_color_secondary: { color: secondaryColorElement.textContent.split(', ') }
        }
        // Add other relevant data extraction
      };

      // Send the user data to the background script
      chrome.runtime.sendMessage({ action: 'extractUserInfo', data: userData });
    }
  };

  extractUserInfo();
})();
