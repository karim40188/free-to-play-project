import { details } from "../details.js";
import { ui } from '../ui.js'



export class Home {
  constructor() {
    this.loader = document.querySelector(".overlay");
    console.log(this.loader);
    this.ui = new ui();

    this.navLinks = document.querySelectorAll(".nav-link");
    this.getGames("shooter");
    this.changeActiveLink();
  }

  async getGames(cat) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "8029373d6fmsh83216cc0e976ff4p134235jsnc36087b709a6",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    this.loader.classList.replace("d-none", "d-flex");

    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,
      options
    );
    const response = await api.json();

    this.ui.displayData(response);

    let cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.addEventListener("click", (e) => {
        let detailsInstance = new details();
        detailsInstance.getDetails(e.currentTarget.id);
        document.getElementById("home").classList.add("d-none");
        document.querySelector("nav").classList.add("d-none");

        document
          .querySelector(".details")
          .classList.replace("d-none", "d-block");
      });
    });

    console.log(response);
    this.loader.classList.replace("d-flex", "d-none");
  }

  changeActiveLink() {
    this.navLinks.forEach((activeLink) => {
      activeLink.addEventListener("click", (e) => {
        document.querySelector("nav ul li a.active").classList.remove("active");
        e.target.classList.add("active");
        this.getGames(activeLink.getAttribute("data-category"));
        console.log(activeLink.getAttribute("data-category"));
      });
    });
  }
}
