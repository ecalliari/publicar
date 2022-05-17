function verificar() {
    
    
    
    var res = document.querySelector('div#res')
    var qua = document.getElementsByName('formatoquadro')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

        if(qua[0].checked) {
                
                img.setAttribute('src', './img/galeria/030x040 oleo sobre tela_pq.jpg')  // Carregando a imagem
                res.innerHTML = ('Pintura Oleo sobre tela (030 X 040 cm)')
                
        }/*else if (qua[1].checked){
            
                img.setAttribute('src', './img/galeria/1.00x070 oleo sob.jpg')
           
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`*/
        res.style.display = 'flex'
        res.appendChild(img)  // Acrescentou a imagem
    }

