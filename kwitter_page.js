const firebaseConfig = {
    apiKey: "AIzaSyC72h0G6GrU-0qQM1biQzjqrwTa0a-r2qQ",
    authDomain: "let-s-chat-app-800a3.firebaseapp.com",
    projectId: "let-s-chat-app-800a3",
    storageBucket: "let-s-chat-app-800a3.appspot.com",
    messagingSenderId: "962622187199",
    appId: "1:962622187199:web:37631b831636aadba6480a",
    measurementId: "G-CJH2QCB4HB"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}
function getData() {
    firebase.database().ref("/"+room_name).on('value',function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
        childKey = childsnapshot.Key;
        childData = childsnapshot.value();
        
        if(childKey != "purpose") {
            firebase_message_id = childKey;
            message_data = childData;
//Start Code
            console.log(firebase_message_id);
            console.log(message_data);
            name = message_data['name'];
            message = message_data['message']
            like = message_data['like'];
            
        });});
        getData();
