function addUser() {
    user_name = docuement.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location="kwitter_room.html"
}