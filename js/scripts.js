let topo = document.getElementById('topo')
let caixa_topo = document.getElementById('caixa-topo')
let sobre = document.getElementById('sobre')
let menu = document.getElementById('menu')
let clientes = document.getElementById('clientes')
let mapa = document.getElementById('mapa')

let scroll_Pagina = 0
let x = 0

let largura = 0
let altura = 0

function animacaoTopo(){

    topo.style.backgroundImage = 'url(img/home-img.png)'
    topo.style.opacity = '1'

    caixa_topo.classList.remove('invis-topo')
    caixa_topo.classList.add('visi-topo')
}

function sectionsAparecer(){

    largura = window.innerWidth
    altura = window.innerHeight

    scroll_Pagina = scrollY

    if(largura >= 578){
        if(scroll_Pagina >= 100){
            sobre.classList.remove('invis')
            sobre.classList.add('visi')
        }
    } else {
        if(scroll_Pagina >= 120){
            sobre.classList.remove('invis')
            sobre.classList.add('visi')
        }
    }

    if(largura >= 578){
        if(scroll_Pagina >= 1000){
            menu.classList.remove('invis')
            menu.classList.add('visi')
        }
    } else {
        if(scroll_Pagina >= 1300){
            menu.classList.remove('invis')
            menu.classList.add('visi')
        }
    }

    if(largura >= 578){
        if(scroll_Pagina >= 2000){
            clientes.classList.remove('invis')
            clientes.classList.add('visi')
        }
    } 

    if(largura >= 578){
        if(scroll_Pagina >= 3000){
            mapa.classList.remove('invis')
            mapa.classList.add('visi')
        }
    } else {
        if(scroll_Pagina >= 3400){
            mapa.classList.remove('invis')
            mapa.classList.add('visi')
        }
    }

}

//Nav

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
