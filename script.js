    let date = new Date();
    let x = date.getHours();
    let z = "From Jester.";
    if (x >= 2 && x < 12) {
      document.getElementById("l4").innerHTML = "Good Morning! " + z;
    } else if (x >= 12 && x < 17) {
      document.getElementById("l4").innerHTML = "Good Afternoon! " + z;
    } else if (x >= 17 && x < 23) {
      document.getElementById("l4").innerHTML = "Good Evening! " + z;
    } else {
      document.getElementById("l4").innerHTML = "Good Night! " + z;
    }

    let r = 0;
    function darkMode(){
      r++;
      if(r == 1){
      document.getElementById("dark-mode").innerHTML = "🔆";
      document.getElementById("main-avatar").style.backgroundColor = "rgb(159, 217, 217)";
      document.bgColor = "darkgray";
    }
    if(r == 2){
      r = 0;
      document.getElementById("dark-mode").innerHTML = "🌙";
      document.getElementById("main-avatar").style.backgroundColor = "#bbb8c7";
      document.bgColor = "white";
      }
    }