// content.js
// Injected script for https://grabvr.quest/levels*
(function() {
  // Check if the URL contains the required parameters
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('user_id');

  if (userId) {
    // Fetch user data or perform necessary actions
    // You can make API requests or manipulate the page DOM as needed
    const userData = {
      user_id: userId,
      // Add other relevant data
    };

    // Display information on the page
    const displayInfo = () => {
      // Modify the page DOM to display user information, colors, roles, etc.
      // Example: Display user ID and colors in a div
      const infoDiv = document.createElement('div');
      infoDiv.innerHTML = `
        <p>User ID: ${userData.user_id}</p>
        <p>Main Color: ${userData.active_customizations.player_color_primary.color.join(', ')}</p>
        <p>Secondary Color: ${userData.active_customizations.player_color_secondary.color.join(', ')}</p>
        <p>Is Admin: ${userData.is_admin ? 'Yes' : 'No'}</p>
        <p>Is Moderator: ${userData.is_moderator ? 'Yes' : 'No'}</p>
        <p>Is Creator: ${userData.is_creator ? 'Yes' : 'No'}</p>
      `;

      // Append the information to the body or a specific container on the page
      document.body.appendChild(infoDiv);
    };

    // Call the displayInfo function
    displayInfo();
  }
})();
