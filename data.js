function mybutton() {
    let biodata = document.getElementById('biodata');
    let myName = document.getElementById('name').value;
    let myAge = document.getElementById('age').value;
    let myBioData = myName && myAge;

    if (myBioData) {
        if (myAge > 0 && myAge < 10) {
            myConfirm = "keren lu cuy, masih bocil tapi udah belajar pemrograman.";
        }
        if (myAge >= 10 && myAge < 20) {
            myConfirm = "sepangkat kita cuy, wkwkkw.";
        }
        if (myAge >= 20 && myAge < 35) {
            myConfirm = "lebih gede lu bang daripada gw wkwkwk.";
        }
        if (myAge >= 35) {
            myConfirm = "semangat bang, belajar tidak mengenal usia.";
        }
        if (myAge <= 0){
            myConfirm = "umm...error cuy, bener tuh umur lu?";
        }
        
        let nama = (`salam kenal ${myName}, ${myConfirm}`)
        return biodata.innerHTML = nama;
    }
    
    else if(myName){
        let nama = ("umur lu cuy?")
        return biodata.innerHTML = nama;
    }
    
    else if (myAge){
        let nama = ("nama lu cuy?")
        return biodata.innerHTML = nama;
    }
}

