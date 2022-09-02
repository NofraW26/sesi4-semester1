// saklar utama
function lampuUtamaKeluarga(lamps) {
  let toggleUtamaKeluarga = document.getElementById("default-toggle-size-keluarga");
  let toggleKeluarga1 = document.getElementById("small-toggle-keluarga1");
  let toggleKeluarga2 = document.getElementById("small-toggle-keluarga2");
  let toggleKeluarga3 = document.getElementById("small-toggle-keluarga3");
  let keluarga1 = document.getElementById("keluarga1");
  let keluarga2 = document.getElementById("keluarga2");
  let keluarga3 = document.getElementById("keluarga3");

  if (toggleUtamaKeluarga.checked) {
    toggleKeluarga1.checked = true;
    keluarga1.src = "assets/images/on.gif";
    toggleKeluarga2.checked = true;
    keluarga2.src = "assets/images/on.gif";
    toggleKeluarga3.checked = true;
    keluarga3.src = "assets/images/on.gif";
  } else {
    toggleKeluarga1.checked = false;
    keluarga1.src = "assets/images/off.gif";
    toggleKeluarga2.checked = false;
    keluarga2.src = "assets/images/off.gif";
    toggleKeluarga3.checked = false;
    keluarga3.src = "assets/images/off.gif";
  }
}

// saklar biasa
function lampuKeluarga(lamps) {
  let toggleUtamaKeluarga = document.getElementById("default-toggle-size-keluarga");
  let toggleKeluarga1 = document.getElementById("small-toggle-keluarga1");
  let toggleKeluarga2 = document.getElementById("small-toggle-keluarga2");
  let toggleKeluarga3 = document.getElementById("small-toggle-keluarga3");
  let keluarga1 = document.getElementById("keluarga1");
  let keluarga2 = document.getElementById("keluarga2");
  let keluarga3 = document.getElementById("keluarga3");

  if (toggleKeluarga1.checked) {
    keluarga1.src = "assets/images/on.gif";
  }
  if (toggleKeluarga2.checked) {
    keluarga2.src = "assets/images/on.gif";
  }
  if (toggleKeluarga3.checked) {
    keluarga3.src = "assets/images/on.gif";
  }
  if (toggleKeluarga1.checked == false) {
    keluarga1.src = "assets/images/off.gif";
  }
  if (toggleKeluarga2.checked == false) {
    keluarga2.src = "assets/images/off.gif";
  }
  if (toggleKeluarga3.checked == false) {
    keluarga3.src = "assets/images/off.gif";
  }
  if (toggleKeluarga1.checked && toggleKeluarga2.checked && toggleKeluarga3.checked) {
    toggleUtamaKeluarga.checked = true;
  } else if (toggleKeluarga1.checked || toggleKeluarga2.checked || toggleKeluarga3.checked == false) {
    toggleUtamaKeluarga.checked = false;
  }
}
