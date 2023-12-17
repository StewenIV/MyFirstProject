window.onload = function(){
    const hamdurger = document.getElementById('hamburger');
    hamdurger.onclick = function(){
            let topNav = document.getElementById('topNav');
            if(topNav.className === 'responsive'){
                topNav.className = '';
            }
            else{
                topNav.className = 'responsive';
            }
        }
        const menuList = document.querySelectorAll('.menu-element');
        menuList.forEach((element)=>{
            element.addEventListener('click',function(event){
                const elementLink = element.dataset.link;
                if(elementLink){
                    event.preventDefault()
                    document.getElementById(elementLink).scrollIntoView({behavior:'smooth'});
                }
            })
        })
    }



























    // function Send(){
    //     let login = "Ivan"
    //     let password = "134204"
    //     var formData = new FormData();
    //     formData.append("login",login)
    //     formData.append("password", password)
    //     const data = {
    //         method: "POST",
    //         body: formData
    //     }
    //     fetch("http://localhost:80/api/User/Authorization", data)
    //     .then(response => function(){
    //         console.log(response.json)
    //     })
    // }