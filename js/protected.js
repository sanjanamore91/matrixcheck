import { auth } from './firebase-config.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js';

document.addEventListener('DOMContentLoaded', () => {
  const signedInUserDiv = document.getElementById('signedInUser');
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (signedInUserDiv) {
        signedInUserDiv.textContent = user.email;
      }
    } else {
      // Redirect to login if not authenticated
      window.location.href = 'login.html';
    }
  });
});
