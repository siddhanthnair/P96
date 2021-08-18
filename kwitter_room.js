
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDtppNKX9t2lgieLFYgZiF9MjVseK1mcQg",
      authDomain: "kwitterproject-6933b.firebaseapp.com",
      databaseURL: "https://kwitterproject-6933b-default-rtdb.firebaseio.com",
      projectId: "kwitterproject-6933b",
      storageBucket: "kwitterproject-6933b.appspot.com",
      messagingSenderId: "383793300574",
      appId: "1:383793300574:web:17b3e6e7dd3ba5fb1420cf"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname"+ Room_names);
      row="<div class ='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#" +Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("roomname", name);
      window.location= "kwitter_page.html";
      }
      
      function logout(){
            localStorage.removeItem("username");
            localStorage.removeItem("roomname");
            window.location="index.html";
            }

       function addroom(){
roomname=document.getElementById("roomname").value;
firebase.database().ref("/").child(roomname).update({
      purpose:"added successfully"
});
localStorage.setItem("roomname" , roomname);
window.location="kwitter_page.html";
       }
       