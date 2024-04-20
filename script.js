
document.getElementById('messageInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default form submission
        addBloon(); // Create a new bloon
    }
});


function addBloon() {
    var message = document.getElementById('messageInput').value;
    var bloonContainer = document.getElementById('bloonContainer');

    // Create bloon element
    var bloon = document.createElement('div');
    bloon.className = 'bloon';
    bloon.textContent = message;
// Identify smiley faces and make them red
var formattedMessage = message.replace(/(\:\)|\:-\)|\:\(|\:-\(|\:\D|<3)/g, '<span style="color: red;">$&</span>');
    
// Set the bloon text with formatted message
bloon.innerHTML = formattedMessage;

   
    // Insert the new bloon at the beginning of the container
    bloonContainer.insertBefore(bloon, bloonContainer.firstChild);



   // Insert the new bloon at the beginning of the container
   bloonContainer.insertBefore(bloon, bloonContainer.firstChild);

    // Clear input field after adding bloon
    document.getElementById('messageInput').value = '';
}




document.getElementById("year").textContent = new Date().getFullYear();