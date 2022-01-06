//YOUR FIREBASE LINKS
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
   room_name = localStorage.getItem("room_name");

   function addMessage()
   {
         msg = document.getElementById("message").value;
         firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
         });

         document.getElementById("message").value = " ";
        
         
   }

   function getData() 
   { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
   firebase_message_id = childKey; message_data = childData;
   
   console.log(firebase_message_id);
   console.log(message_data);
   name = message_data['name'];
   message = message_data['message'];
   like = message_data['like'];
   name_with_tag = "<h4> "+name+"<img class='user_tick' src='tick.png'></h4>";
   message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
   like_button = "<button class='btn btn-waring' id="+firebase_message_id+ "value="+like+"onlick='updateLike(this.id)'>";
   span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
   
   row = name_with_tag + message_with_tag + span_with_tag;
   document.getElementById("output").innerHTML += row

   } }); }); }

   getData();

   function updateLike(message_id)
   {
         console.log("clicked on like button - "+ message_id);
         button_id = message_id;
         likes = document.getElementById(button_id).value;
         updated_likes = Number(likes) + 1;
         console.log(updated_likes);

         firebase.database().ref(room_name).child(message_id).update({
             like = updated_likes  
         });
   }
   function logout() 
 {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
        window.location = "index.html";
 
 }