export class details {
  constructor() {}

  async getDetails(id) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "8029373d6fmsh83216cc0e976ff4p134235jsnc36087b709a6",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    let detailsApi = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    let response = await detailsApi.json();
    this.displayDetails(response);
    document.querySelector(".x-mark").addEventListener("click", () => {
      document.querySelector(".details").classList.add("d-none");
      document.querySelector("nav").classList.remove("d-none");
      document.querySelector(".home").classList.remove("d-none");
    });
    console.log(response);
  }

  displayDetails(game) {
    let gameDetails = `
     <h3>Details Game</h3>
       <i class='fas fa-xmark x-mark  position-absolute'> </i>
   <div class="col-md-6">
                <img
                  class="w-100"
                  src="${game.thumbnail}"
                  alt=""
                />
              </div>
              <div class="col-md-6">
                <div class="game-content">
                  <h2>Title:${game.title}</h2>
                  <p>Getegory:${game.category}</p>
                  <p>Platform:${game.platform}</p>
                  <p>${game.status}</p>
                  <p class="small">
                    ${game.short_description}
                  </p>
                  <button class="btn btn-outline-warning">Show Game</button>
                </div>
              </div>`;

    document.querySelector(".game").innerHTML = gameDetails;
  }
}
