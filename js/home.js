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

window.FilterNumLetters = function (letter) {
  let filter1 = showsData.filter((show) => {
    return show.title.charAt() == letter;
  });
  console.log(filter1);

  if (filter1.length !== 0) {
    showsList.innerHTML = "";
    DisplayShows(filter1);
  } else {
    //alert("Show not Found!");
    window.onload = function () {
      let myModal = new bootstrap.Modal(
        document.getElementById("showTrackerModal")
      );
      myModal.show();
    };

    onload();
  }
};
