
const firebaseConfig = {
      apiKey: "AIzaSyBMXp2gLUFuaAdagK6u1RP3Hq3_hzKYJOE",
      authDomain: "kwitter-d8206.firebaseapp.com",
      databaseURL: "https://kwitter-d8206-default-rtdb.firebaseio.com",
      projectId: "kwitter-d8206",
      storageBucket: "kwitter-d8206.appspot.com",
      messagingSenderId: "910064033084",
      appId: "1:910064033084:web:ada306f27a4def12719239"
    };

   firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
     function addRoom()
      { 
            room_name = document.getElementById("room_name").value;
             firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
              localStorage.setItem("room_name", room_name);
               window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
        console.log("Room Name - " + Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
      });});}
getData();
      function redirectToRoomName(name)
       { console.log(name); localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
       }

       function logout() {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
             window.location = "index.html";
       }
