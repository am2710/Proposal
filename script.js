
  function moveNo() {
    const noButton = document.getElementById("noButton");
    const randomX = Math.floor(Math.random() * 21) - 10; // Random number between -10 and 10
    const randomY = Math.floor(Math.random() * 21) - 10; // Random number between -10 and 10
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
  }

function toggleNo() {
    
  const name = prompt("Great! What's your name?");
  if (name) {
    alert(`Thank you, ${name}! Looking forward to our Valentine's date!\nMore Detail's on text Kiddo <3!!`);

  }
}

function runAway() {
  alert("Oh no! The 'No' option ran away!");
}

function moveNo() {
  const noButton = document.getElementById("noButton");
  const randomX = Math.floor(Math.random() * 21) - 10; // Random number between -10 and 10
  const randomY = Math.floor(Math.random() * 21) - 10; // Random number between -10 and 10
  noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}
