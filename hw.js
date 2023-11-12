function apiFun() {
    fetch('https://rickandmortyapi.com/api/character',{
        method:"get"
    })
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            for(let i = 0 ; i < data.results.length; i++) {
                let Getdata=document.getElementById("Getdata")
                let cont = document.createElement("div");
                cont.className = "P"; 
                cont.innerHTML =`<h3>${data.results[i].name}</h3>
                <img src="${data.results[i].image}" alt="${data.results[i].name}">`;
                Getdata.appendChild(cont)
            }
        })
        .catch((err)=> console.log(`the err is ${err}`))
    }
    apiFun()