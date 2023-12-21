const JsonURL = "https://gist.githubusercontent.com/planetoftheweb/98f35786733c8cccf81e/raw/f3dad774ed1fe20b36011b1261bb392ee759b867/data.json"
fetch(JsonURL)
    .then(response => {
        if(!response.ok){
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const container = document.getElementById("container");
        for(let i = 0; i<data.length; i++){
            container.innerHTML += ` <div class="card">
            <h3 class="name">${data[i].name}</h3>
            <small style="color:gray;">@${data[i].shortname}</small>
            <p>${data[i].reknown}</p>
            <div     class="bio">
            <small >${data[i].bio}</small>
            </div   >
        </div>`
        }

    })
    .catch(error => {
        console.error("fetch error:", error);
    })

    