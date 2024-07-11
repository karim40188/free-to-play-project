import { details } from "./details.js";

export class ui {
  constructor() {
    this.home = document.getElementById("home");
    this.detailsInstance = new details();
    console.log(this.detailsInstance);
  }

displayData(data) {
    let gameBox = ``;
    for (let i = 0; i < data.length; i++) {
      gameBox += `  <div class="col-md-4">
              <div id=${data[i].id} class="card">
                <img class="card-img-top" src=${data[i].thumbnail} alt="Title" />
                <div class="card-body">
                <div class='d-flex justify-content-between'>
                   <h4 class="card-title small">${data[i].title}</h4>
                  <span class='badge text-center p-2 text-bg-primary'>free</span>
                </div>
                  <p class="card-text small opacity-50 text-center mt-1">${data[i].short_description}</p>
                </div>
              </div>
            </div>

     `;
    }
    document.querySelector(".cards").innerHTML = gameBox;
  }
}

