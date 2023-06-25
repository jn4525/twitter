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
     room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:username,
            message:msg,
            like:0

      });
 document.getElementById("msg").value = "";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4> " + name +"<img class='user_tick' src='tick.png'></h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+ like +"</span></button><hr>";
      

      row = name_with_tag + message_with_tag + like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;


      } });  }); }
 
getData();
function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(like) + 1;

      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes     
      });
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location = "index.html";
 }