// document.getElementById('loader').style.display="block"
// document.getElementById('data').style.display="none"


fetch('https://api.github.com/users').then(res=> res.json()).then(data=>{
    console.log(data);
    // document.getElementById('loader').style.display="none"
    // document.getElementById('data').style.display="block"
    data.forEach(user => {
        document.getElementById('data').innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card" style="width: 18rem;">
                <img src="${user.avatar_url}" alt="" srcset="">
                <div class="class-body">
                    <h5 class="card-title">${user.login}</h5>
                    <a href=${user.html_url} class="btn btn-primary"> Vist Profile </a>
                </div>
            </div>
        </div>
        `
        
    });

}).catch(e=>{
    console.log(e);
})
