// Selects the <body> element of the document

const body = document.querySelector("body");

// Selects the hour hand element of the clock

const hour_hand = document.querySelector(".hour");

// Selects the minutes hand element of the clock

const minutes_hand = document.querySelector(".minutes");

// Selects the seconds hand element of the clock

const seconds_hand = document.querySelector(".seconds");

// Selects the mode-switch button element

const mode_switch = document.querySelector(".mode-switch");

// Checks if the saved mode in localStorage is "Dark Mode"------------

if (localStorage.getItem("Mode") === "Dark Mode") {
  // Adds the "dark" class to the <body>, enabling dark mode

  body.classList.add("dark");

  // Updates the mode-switch button text to "Dark Mode"

  mode_switch.textContent = "Light Mode";
}

// Adds an event listener for clicks on the mode-switch button------------

mode_switch.addEventListener("click", () => {
  // Toggles the "dark" class on the <body>

  body.classList.toggle("dark");

  // Checks if dark mode is currently active

  const isDarkmode = body.classList.contains("dark");

  // Updates the mode-switch button text based on the current mode

  mode_switch.textContent = isDarkmode ? "Light Mode" : "Dark Mode";

  // Saves the current mode to localStorage

  localStorage.setItem("Mode", isDarkmode ? "Dark Mode" : "Light Mode");
});

// Defines a function to update the clock hands' positions------------

const Updatetime = () => {
  // Gets the current date and time

  let date = new Date(),
    // Converts the current seconds to degrees

    sectoDeg = Math.trunc((date.getSeconds() / 60) * 360),
    // Converts the current minutes to degrees

    minutestoDeg = (date.getMinutes() / 60) * 360,
    // Converts the current hours to degrees

    hourtoDeg = (date.getHours() / 12) * 360;

  // Rotates the hour hand based on the current hour

  hour_hand.style.transform = `rotate(${hourtoDeg}deg)`;

  // Rotates the minutes hand based on the current minute

  minutes_hand.style.transform = `rotate(${minutestoDeg}deg)`;

  // Rotates the seconds hand based on the current second

  seconds_hand.style.transform = `rotate(${sectoDeg}deg)`;
};

// Calls the Updatetime function every second to update the clock------------

setInterval(Updatetime, 1000);
