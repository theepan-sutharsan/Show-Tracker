import { showsData } from "./data.js";

let showsList = document.getElementById("showList");
showsList.innerHTML = "";

DisplayShows(showsData);

function DisplayShows(data) {
  data.forEach((show) => {
    showsList.innerHTML += `
       <div class="col-12 col-sm-6 col-md-4 col-lg-3 pb-3">
                      <div class="card text-center shadow">
                        <div class="row">
                          <div class="col-6 col-sm-12">
                            <img
                              src="${show.poster}"
                              alt="gt"
                              class="img-fluid h-100 w-100 rounded"
                            />
                          </div>
                          <div class="col-6 col-sm-12">
                            <div class="card-body">
                              <h6 class="card-title">${show.title}</h6>
                              <p class="card-text text-secondary">Episodes ${show.episodes_count}</p>
                         
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

    `;
  });
}

//Filter Using Numbers & Letters

let letters1 = ["0-9"];

for (let i = 65; i <= 90; i++) {
  letters1.push(String.fromCharCode(i));
}
console.log(letters1);

Letters();

function Letters() {
  letters1.forEach((letter, index) => {
    let numLetters = document.getElementById("numLetters");

    return (numLetters.innerHTML += `
     <li class="list-inline-item">
                <button
                  type="button"
                  onclick="FilterNumLetters(${index})"
                  class="btn text-dark fw-semibold p-1"
                >
                  ${letter}
                </button>
              </li>

    `);
  });

  // console.log(letters);
}

window.FilterNumLetters = function (index) {
  let filter1 = showsData.filter((show) => {
    if (letters1[index] !== "0-9") {
      return show.title.charAt() == letters1[index];
    } else {
      return (
        show.title.charAt() == "1" ||
        show.title.charAt() == "2" ||
        show.title.charAt() == "3" ||
        show.title.charAt() == "4" ||
        show.title.charAt() == "5" ||
        show.title.charAt() == "6" ||
        show.title.charAt() == "7" ||
        show.title.charAt() == "8" ||
        show.title.charAt() == "9"
      );
    }
  });
  console.log(filter1);

  if (filter1.length !== 0) {
    showsList.innerHTML = "";
    DisplayShows(filter1);
  } else {
    //alert("Show not Found!");
    window.onload = function () {
      let myModal = new bootstrap.Modal(
        document.getElementById("showTrackerModal"),
      );
      myModal.show();
    };

    onload();
  }
};

//Filter Using Genres

let genres = [
  "Action",
  "Adventure",
  "Animation",
  "Children",
  "Comedy",
  "Documentary",
  "Family",
  "Fantasy",
  "Home and Garden",
  "Horror",
  "Mini Series",
  "Mystery",
  "Reality",
  "Romance",
  "Sci-Fi",
  "Suspense",
  "Talk Show",
  "Thriller",
  "Travel",
];
Genres();
function Genres() {
  genres.forEach((gen, index) => {
    let genresList = document.getElementById("genresList");

    return (genresList.innerHTML += `
    
              <li class="list-inline-item bg-secondary rounded m-1">
                <button onclick="FilterGenres(${index})" class="btn btn-sm btn-secondary text-dark fw-semibold"
                  >${gen}</button
                >
              </li>
             

    `);
  });
}

window.FilterGenres = function (index) {
  let filter2 = showsData.filter((show) => {
    return show.genre.includes(genres[index]);
  });
  console.log(filter2);
  if (filter2.length !== 0) {
    showsList.innerHTML = "";
    DisplayShows(filter2);
  } else {
    //alert("Show not Found!");
    window.onload = function () {
      let myModal = new bootstrap.Modal(
        document.getElementById("showTrackerModal"),
      );
      myModal.show();
    };

    onload();
  }
};
