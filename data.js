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

// saklar utama makan
function lampuUtamaMakan(lamps) {
  let toggleUtamaMakan = document.getElementById("default-toggle-size-makan");
  let toggleMakan1 = document.getElementById("small-toggle-makan1");
  let makan1 = document.getElementById("makan1");

  if (toggleUtamaMakan.checked) {
    toggleMakan1.checked = true;
    makan1.src = "assets/images/on.gif";
  } else {
    toggleMakan1.checked = false;
    makan1.src = "assets/images/off.gif";
  }
}

// saklar biasa makan
function lampuMakan(lamps) {
  let toggleUtamaMakan = document.getElementById("default-toggle-size-makan");
  let toggleMakan1 = document.getElementById("small-toggle-makan1");
  let makan1 = document.getElementById("makan1");

  if (toggleMakan1.checked) {
    makan1.src = "assets/images/on.gif";
  }
  if (toggleMakan1.checked == false) {
    makan1.src = "assets/images/off.gif";
  }
  if (toggleMakan1.checked) {
    toggleUtamaMakan.checked = true;
  } else if (toggleMakan1.checked == false) {
    toggleUtamaMakan.checked = false;
  }
}

// saklar utama tidur
function lampuUtamaTidur(lamps) {
  let toggleUtamaTidur = document.getElementById("default-toggle-size-tidur");
  let toggleTidur1 = document.getElementById("small-toggle-tidur1");
  let toggleTidur2 = document.getElementById("small-toggle-tidur2");
  let tidur1 = document.getElementById("tidur1");
  let tidur2 = document.getElementById("tidur2");

  if (toggleUtamaTidur.checked) {
    toggleTidur1.checked = true;
    tidur1.src = "assets/images/on.gif";
    toggleTidur2.checked = true;
    tidur2.src = "assets/images/on.gif";
  } else {
    toggleTidur1.checked = false;
    tidur1.src = "assets/images/off.gif";
    toggleTidur2.checked = false;
    tidur2.src = "assets/images/off.gif";
  }
}

// saklar biasa tidur
function lampuTidur(lamps) {
  let toggleUtamaTidur = document.getElementById("default-toggle-size-tidur");
  let toggleTidur1 = document.getElementById("small-toggle-tidur1");
  let toggleTidur2 = document.getElementById("small-toggle-tidur2");
  let tidur1 = document.getElementById("tidur1");
  let tidur2 = document.getElementById("tidur2");

  if (toggleTidur1.checked) {
    tidur1.src = "assets/images/on.gif";
  }
  if (toggleTidur2.checked) {
    tidur2.src = "assets/images/on.gif";
  }
  if (toggleTidur1.checked == false) {
    tidur1.src = "assets/images/off.gif";
  }
  if (toggleTidur2.checked == false) {
    tidur2.src = "assets/images/off.gif";
  }
  if (toggleTidur1.checked && toggleTidur2.checked) {
    toggleUtamaTidur.checked = true;
  } else if (toggleTidur1.checked == false) {
    toggleUtamaTidur.checked = false;
  } else if (toggleTidur2.checked == false) {
    toggleUtamaTidur.checked = false;
  }
}

// saklar utama
function lampuUtamaTamu(lamps) {
  let toggleUtamaTamu = document.getElementById("default-toggle-size-tamu");
  let toggleTamu1 = document.getElementById("small-toggle-tamu1");
  let toggleTamu2 = document.getElementById("small-toggle-tamu2");
  let toggleTamu3 = document.getElementById("small-toggle-tamu3");
  let toggleTamu4 = document.getElementById("small-toggle-tamu4");
  let tamu1 = document.getElementById("tamu1");
  let tamu2 = document.getElementById("tamu2");
  let tamu3 = document.getElementById("tamu3");
  let tamu4 = document.getElementById("tamu4");

  if (toggleUtamaTamu.checked) {
    toggleTamu1.checked = true;
    tamu1.src = "assets/images/on.gif";
    toggleTamu2.checked = true;
    tamu2.src = "assets/images/on.gif";
    toggleTamu3.checked = true;
    tamu3.src = "assets/images/on.gif";
    toggleTamu4.checked = true;
    tamu4.src = "assets/images/on.gif";
  } else {
    toggleTamu1.checked = false;
    tamu1.src = "assets/images/off.gif";
    toggleTamu2.checked = false;
    tamu2.src = "assets/images/off.gif";
    toggleTamu3.checked = false;
    tamu3.src = "assets/images/off.gif";
    toggleTamu4.checked = false;
    tamu4.src = "assets/images/off.gif";
  }
}

// saklar biasa
function lampuTamu(lamps) {
  let toggleUtamaTamu = document.getElementById("default-toggle-size-tamu");
  let toggleTamu1 = document.getElementById("small-toggle-tamu1");
  let toggleTamu2 = document.getElementById("small-toggle-tamu2");
  let toggleTamu3 = document.getElementById("small-toggle-tamu3");
  let toggleTamu4 = document.getElementById("small-toggle-tamu4");
  let tamu1 = document.getElementById("tamu1");
  let tamu2 = document.getElementById("tamu2");
  let tamu3 = document.getElementById("tamu3");
  let tamu4 = document.getElementById("tamu4");

  if (toggleTamu1.checked) {
    tamu1.src = "assets/images/on.gif";
  }
  if (toggleTamu2.checked) {
    tamu2.src = "assets/images/on.gif";
  }
  if (toggleTamu3.checked) {
    tamu3.src = "assets/images/on.gif";
  }
  if (toggleTamu4.checked) {
    tamu4.src = "assets/images/on.gif";
  }
  if (toggleTamu1.checked == false) {
    tamu1.src = "assets/images/off.gif";
  }
  if (toggleTamu2.checked == false) {
    tamu2.src = "assets/images/off.gif";
  }
  if (toggleTamu3.checked == false) {
    tamu3.src = "assets/images/off.gif";
  }
  if (toggleTamu4.checked == false) {
    tamu4.src = "assets/images/off.gif";
  }
  if (toggleTamu1.checked && toggleTamu2.checked && toggleTamu3.checked && toggleTamu4.checked) {
    toggleUtamaTamu.checked = true;
  } else if (toggleTamu1.checked || toggleTamu2.checked || toggleTamu3.checked || toggleTamu4.checked == false) {
    toggleUtamaTamu.checked = false;
  }
}
