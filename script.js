function toggleMode(){
    const body = document.body
    body.classList.toggle('light')

    const foto = document.querySelector('.profile img')
    if(body.classList.contains('light')){
        foto.setAttribute("src","./assets/avatar-light.png")
    }else{
        foto.setAttribute("src","./assets/avatar.png")
    }
    
}




/*
outro metodo -> pelo body
function toggleMode(){
    const body = document.body
    body.classList.toggle('light')
}

outro metodo -> pelo html

function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')
}

function toggleMode(){
    const body = document.body
    if(body.classList.contains('light')){
        body.classList.remove('light')
    }else{
        body.classList.add('light')
    }
    
}
*/
/* troca de foto de perfil
pegar a imagem e substituir a imagem
*/

