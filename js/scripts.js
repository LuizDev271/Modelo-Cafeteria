let scroll_Pagina = 0
let x = 0

function scrolar(){
    let nav = document.getElementById('barra_de_nav')
    
    scroll_Pagina = scrollY

    if(scroll_Pagina != 0){
        nav.style.borderBottom = '1px solid #a8a260'
    } else {
        nav.style.borderBottom = '1px solid black'
    }

}

function bordaNavMobile(){
    let nav = document.getElementById('barra_de_nav')
    
    scroll_Pagina = scrollY
    
    if(x == 0 && scroll_Pagina == 0){
        nav.style.borderBottom = '1px solid #a8a260'
        x++
    } else if(x != 0 && scroll_Pagina == 0){
        nav.style.borderBottom = '1px solid black'
        x = 0
    }

}