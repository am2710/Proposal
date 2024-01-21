function toggleNo() {
    alert("Great! More details on text!! Be ready!");
  }
  
  function moveNo() {
    const noButton = document.getElementById("noButton");
    const randomX = Math.floor(Math.random() * 21) - 10; // Random number between -10 and 10
    const randomY = Math.floor(Math.random() * 21) - 10; // Random number between -10 and 10
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
  }
  