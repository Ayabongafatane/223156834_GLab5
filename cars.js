// Array of car objects. Each has a name, type, make, and image URL.

const cars = [
  {
    name: "Cabriolet",
    type: "Convertible",
    make: "Ford",
    img: "https://i.ebayimg.com/images/g/fQIAAeSw2uJpJ22P/s-l1600.jpg"
  },
  {
    name: "Golf",
    type: "Hatchback",
    make: "VW",
    img: "https://www.edmunds.com/assets/m/cs/blt6bd0cf7a411912f6/6699a39a490fbcdfc222ee0a/2024-volkswagen-golf-r-f34.jpg"
  },
  {
    name: "Corolla",
    type: "Sedan",
    make: "Toyota",
    img: "https://th.bing.com/th/id/OIP.eMiBhMUmolU0c2AEZGq5vAHaFj?w=267&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7"
  },
  {
    name: "A4",
    type: "Sedan",
    make: "Audi",
    img: "https://i0.wp.com/audicarusa.com/wp-content/uploads/2023/01/2024-Audi-A4-New.webp?resize=1140%2C665&ssl=1.jpg"
  },
  {
    name: "X5",
    type: "SUV",
    make: "BMW",
    img:{
  name: "X5",
  type: "SUV",
  make: "BMW",
  img: "https://www.bing.com/images/search?q=Luxury+SUV+BMW+X5&form=RESTAB&first=1.JPG"

},

  },
  {
    name: "C-Class",
    type: "Sedan",
    make: "Benz",
    img: "https://di-uploads-pod1.dealerinspire.com/mercedesbenzofcherryhill/uploads/2021/07/7-9-cclass.jpg"
  },
  {
    name: "Hilux",
    type: "Pickup",
    make: "Toyota",
    img:"https://static.motor.es/fotos-noticias/2023/03/toyota-hilux-202393801-1679471148_6.jpg"
  },
  {
    name: "Mustang",
    type: "Sports",
    make: "Ford",
    img: "https://i0.wp.com/fordtrend.com/wp-content/uploads/2023/05/2025-Ford-Mustang-2.webp?fit=1200%2C700&ssl=1.jpg"
  }
];
// Counting the  correct and total guesses
let correct = 0;
let total = 0;
let currentCar = null;

// Occupying the dropdown with car makes
function setupDropdown() {
  const makeList = document.getElementById("make-list");
  ["VW", "BMW", "Benz", "Audi", "Ford", "Toyota"].forEach(make => {
    const option = document.createElement("option");
    option.value = make;
    option.textContent = make;
    makeList.appendChild(option);
  });
}

// Picking  a random car from the array
function getRandomCar() {
  return cars[Math.floor(Math.random() * cars.length)];
}

// Displaying the car details and image
function displayCar(car) {
  document.getElementById("car-name").textContent = car.name;
  document.getElementById("car-type").textContent = car.type;
  const img = document.getElementById("car-img");
  img.src = car.img;
  img.classList.remove("hidden");
}

function initGame() {
  setupDropdown();
  currentCar = getRandomCar();
  displayCar(currentCar);
  document.getElementById("guess-btn").classList.remove("disabled");
}

document.addEventListener("DOMContentLoaded", initGame);

// Handling the guess button click
document.getElementById("guess-btn").addEventListener("click", () => {
  const selectedMake = document.getElementById("make-list").value;
  total++;
  if (selectedMake === currentCar.make) {
    correct++;
  }

   // Updating the counting
  document.getElementById("correct").textContent = correct;
  document.getElementById("total").textContent = total;

  // Show a new random car
  currentCar = getRandomCar();
  displayCar(currentCar);
});


document.addEventListener("DOMContentLoaded", initGame);

