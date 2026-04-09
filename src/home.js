export default function loadHome() {
  const content = document.getElementById("content");

  const section = document.createElement("section");
  section.classList.add("page");

  const title = document.createElement("h1");
  title.textContent = "Frank's Kitchen";

  const text = document.createElement("p");
  text.textContent =
    "Fresh food, warm atmosphere, and a restaurant page built with JavaScript modules.";

  const hoursTitle = document.createElement("h2");
  hoursTitle.textContent = "Opening Hours";

  const hoursList = document.createElement("ul");

  const hours = [
    "Monday: 9:00 AM - 8:00 PM",
    "Tuesday: 9:00 AM - 8:00 PM",
    "Wednesday: 9:00 AM - 8:00 PM",
    "Thursday: 9:00 AM - 8:00 PM",
    "Friday: 9:00 AM - 10:00 PM",
    "Saturday: 10:00 AM - 10:00 PM",
    "Sunday: Closed",
  ];

  hours.forEach((hour) => {
    const li = document.createElement("li");
    li.textContent = hour;
    hoursList.appendChild(li);
  });

  section.append(title, text, hoursTitle, hoursList);
  content.appendChild(section);
}