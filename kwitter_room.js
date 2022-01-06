var firebaseConfig = {
      apiKey: "AIzaSyCgrtu3xOXM__PPNMakdBUlUC2Z2yIRR94",
      authDomain: "lets-chat-app-cef96.firebaseapp.com",
      databaseURL: "https://lets-chat-app-cef96-default-rtdb.firebaseio.com",
      projectId: "lets-chat-app-cef96",
      storageBucket: "lets-chat-app-cef96.appspot.com",
      messagingSenderId: "417510400549",
      appId: "1:417510400549:web:210120f19725ab84ce15cc",
      measurementId: "G-TNM10ZV5MF"
    };
    
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("UserName");
 
    document.getElementById("user_name").innerHTML = "welcome " + user_name + " !!!!";
 
    function addRoom()
   {
      room_name = document.getElementById("room_name").value;
 
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding a room name"
 
      });
        localStorage.setItem("room_name", room_name);
 
        window.location = "kwitter_page.html";
   }  
 
 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       
        row = "<div class='room_name' id="+Room_names+"  onclick='redirectToRoomName(this.id)'  >#"+Room_names+"</div><hr>";
        
        document.getElementById("output").innerHTML += row;
 
       });
   });
 
  
 
 }
 getData();
 
 function redirectToRoomName(name)
 {
       console.log(name);
       localStorage.setItem("room_name", name);
        window.location = "Kwitter_page.html";
        
 }
 
 function logout() 
 {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
        window.location = "index.html";
 
 }