// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyA7Je413fj9OmciiaEPOZ6STQHBF6pr7BU",
      authDomain: "kwitter-cf174.firebaseapp.com",
      databaseURL: "https://kwitter-cf174-default-rtdb.firebaseio.com",
      projectId: "kwitter-cf174",
      storageBucket: "kwitter-cf174.appspot.com",
      messagingSenderId: "1022620791289",
      appId: "1:1022620791289:web:c20bc8096d3cde50184d28"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function add_room() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}

function getData() { firebase.database().ref("/").on('value', function(snapshot) { 
      document.getElementById("output").innerHTML = ""; 
      snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
            Room_names = childKey; 
            console.log("Room Name - " + Room_names); 
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
            document.getElementById("output").innerHTML += row; }); }); } 
            
            getData();


function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
      
}