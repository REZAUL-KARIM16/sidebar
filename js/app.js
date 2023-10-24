
let sidebarbtn=document.querySelector('.sidebarbtn')

let sidebar=document.querySelector('.sidebar')

sidebarbtn.addEventListener('click',()=>{


    sidebar.classList.add('active')

})

sidebarbtn.addEventListener('dblclick',()=>{


    sidebar.classList.remove('active')

})


let crossbtn=document.querySelector('.crossbtn')


function closesidebar(event){


    if(event.target.classList.contains('sidebar') || event.target.classList.contains('crossbtn')){

        sidebar.classList.remove('active')
    }

}


crossbtn.addEventListener('click',closesidebar)

sidebar.addEventListener('click',closesidebar)

