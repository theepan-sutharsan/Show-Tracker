function AddShow() {
  let addBox = document.getElementById("showName").value;
  let add = addBox.trim();
  let status = document.getElementById("status");

  if (add !== "" && isNaN(add.charAt(0)) && !/[^A-Za-z0-9]/.test(add)) {
    status.innerHTML = `
       <span class="ps-2 fade show text-success" >TV show <b>${add}</b> has been added.</span>
       `;

    setTimeout(() => {
      status.textContent = "";
      ClearInput("showName");
    }, 2000);
  } else {
    status.innerHTML = `
       <span class="ps-2 text-danger fade show" >Invalid TV show name.</span>
       `;

    setTimeout(() => {
      status.textContent = "";
      ClearInput("showName");
    }, 2000);
  }
}

function ClearInput(id) {
  return (document.getElementById(id).value = "");
}
