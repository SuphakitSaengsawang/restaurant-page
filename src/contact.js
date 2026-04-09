export default function loadContact() {
  const content = document.getElementById("content");

  const section = document.createElement("section");
  section.classList.add("page");

  const title = document.createElement("h1");
  title.textContent = "Contact";

  const phone = document.createElement("p");
  phone.textContent = "Phone: 012-345-6789";

  const email = document.createElement("p");
  email.textContent = "Email: hello@frankskitchen.com";

  const address = document.createElement("p");
  address.textContent = "Address: 123 Food Street, Bangkok";

  section.append(title, phone, email, address);
  content.appendChild(section);
}