const next = document.querySelector('#next')
const previous = document.querySelector('#previous')
const images = document.querySelector('#images')
const prénom = document.querySelector('#prénom')
const métier = document.querySelector('#métier')
const texte = document.querySelector('#texte')

const tableauImage = [{
    id:1, 
    image:'./images/image-tanya.jpg', 
    name:'Tanya Sinclar',
    alt:"Tanya Sinclar - UX Engineer",
    job:'UX Engineer',
    text:`La programmation m'intéressait depuis un certain temps mais je n’avais jamais sauté le pas. Ce cours a été une révélation pour moi. Il m’a permis d’obtenir le job de mes rêves.`
},
{
    id:2, 
    image:'./images/image-john.jpg', 
    name:'John Tarkpor',
    alt:"John Tarkpor- Junior Front-end developer",
    job:'Junior Front-end developer',
    text:'Si vous souhaitez poser les meilleures bases possibles, je vous recommande de suivre ce cours. Il m’a aidé à prendre confiance en moi et à devenir un meilleur développeur.'
}
]

let index = 0


    next.addEventListener('click',()=>{
        index++
        modifierHtml ()
    })
    
    previous.addEventListener('click',()=>{
        index--
        if(index === -1){
            index=tableauImage.length-1
        }
        modifierHtml ()
    })

    function modifierHtml (){
        
        const tableauIndex = tableauImage[index%2];

        images.setAttribute('src',tableauIndex.image)
        images.setAttribute('alt',tableauIndex.alt)
        prénom.textContent = tableauIndex.name
        métier.textContent = tableauIndex.job
        texte.textContent = tableauIndex.text
    }
