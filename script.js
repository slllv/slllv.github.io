// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyUwogdfIdrbs9ZvTIHMMLDonh6W9C-JI",
  authDomain: "sonder-73a5b.firebaseapp.com",
  databaseURL: "https://sonder-73a5b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sonder-73a5b",
  storageBucket: "sonder-73a5b.appspot.com",
  messagingSenderId: "416310519588",
  appId: "1:416310519588:web:0e9c18d0ea365e3cf4b5b1",
  measurementId: "G-44Y39CCTWW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function addBloon() {
    // Retrieve bloon text from input field
    var bloonText = document.getElementById('messageInput').value;

    // Create a new bloon element
    var bloon = document.createElement('div');
    bloon.classList.add('bloon');

    // Firebase database reference
    var database = firebase.database();
    var bloonsRef = database.ref('bloons');

    // Create a new bloon object
    var newBloon = {
        text: bloonText,
        createdAt: firebase.database.ServerValue.TIMESTAMP
    };

    // Push the new bloon to the database
    bloonsRef.push(newBloon)
        .then(function() {
            console.log("Bloon added successfully!");
            // Clear input field after adding bloon
            document.getElementById('messageInput').value = '';

            // Set the bloon text with formatted message
            var formattedMessage = bloonText.replace(/(\:\)|\:-\)|\:\(|\:-\(|\:\D|<3)/g, '<span style="color: red;">$&</span>');
            bloon.innerHTML = formattedMessage;

            // Append the new bloon to the container
            var bloonContainer = document.getElementById('bloonContainer');
            bloonContainer.insertBefore(bloon, bloonContainer.firstChild);
        })
        .catch(function(error) {
            console.error("Error adding bloon: ", error);
        });
}




document.getElementById("year").textContent = new Date().getFullYear();
