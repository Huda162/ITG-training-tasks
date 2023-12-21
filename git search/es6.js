var searchedUsers = [];

function getUser() {
    var usernameInput =  document.getElementById("username");
    var username = usernameInput.value;
    if (username.trim() === "") {
        alert("please enter a username")
        return;
    }
    for (var i = 0; i < searchedUsers.length; i++) {
        if (searchedUsers[i] === username) {
            var userContainer = document.getElementById(username);
            var containerPosition = userContainer.offsetTop - 20;
            window.scrollTo({ top: containerPosition, behavior: 'smooth' });
            usernameInput.value = '';
            return;
        }
    }
    searchedUsers.push(username);
    fetchUser(username);
    usernameInput.value = '';

}

function fetchUser(username) {
    fetch("https://api.github.com/users/" + username)
        .then(res => {
            if (!res.ok) {
                throw new Error('user not found');
            }
            return res.json();
        })
        .then(data => {
            displayUserInfo(data);
        })
        .catch(error => {
            alert("Error: ", error);
        })
}

function displayUserInfo(user) {
    var display = document.getElementById("results");
    display.innerHTML += `<div class="user" id="${user.login}">
    <div class="left-container">
        <img src="${user.avatar_url}" alt="user avatar" class="avatar">
        <p class="user-login">@${user.login}</p>
    </div>
    <div class="right-container">
        <p>Name: ${user.name || "Unknown"}</p>
        <p>Company: ${user.company || "Unknown"}</p>
        <p>Email: ${user.email || "Unknown"}</p>
        <p>Followers: ${user.followers}</p>
        <p>Following: ${user.following}</p>
        <p>Public Repositories: ${user.public_repos}</p>
    </div>
</div>`;


window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'})

}