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
},
{
    id:3, 
    image:'./images/image-bob.jpg', 
    name:'Bob Razvoski',
    alt:"Bob Razvoski- Junior Back-end developer",
    job:'Junior Back-end developer',
    text: 'Si vous souhaitez poser les meilleures bases possibles, je vous recommande de suivre ce cours. Il m’a aidé à prendre confiance en moi et à devenir un meilleur développeur.'
},
{
    id:4, 
    image:'./images/image-toto.jpg', 
    name:'Toto',
    alt:"Toto- Developer",
    job:'Developer',
    text: `La programmation m'intéressait depuis un certain temps mais je n’avais jamais sauté le pas. Ce cours a été une révélation pour moi. Il m’a permis d’obtenir le job de mes rêves.`
}
]

let index = 0

function modifierHtml (){

    const tableauIndex = tableauImage[index%4];

    images.setAttribute('src',tableauIndex.image)
    images.setAttribute('alt',tableauIndex.alt)
    prénom.textContent = tableauIndex.name
    métier.textContent = tableauIndex.job
    texte.textContent = tableauIndex.text
}

    next.addEventListener('click',()=>{
        nextFunction()
    })
    
    previous.addEventListener('click',()=>{
        previousFunction()
    })


    document.addEventListener('keydown',(event)=>{
        switch(event.key){
            case 'ArrowLeft':
                previousFunction()
                break;
            case 'ArrowRight':
                nextFunction()
        }
    })


    let interval = setInterval(()=>{
        index++
        modifierHtml()
    },10000)


    function previousFunction(){
        index--
        if(index === -1){
            index=tableauImage.length-1
        }
        modifierHtml ()
        clearInterval(interval)
        interval = setInterval(()=>{
            index++
            modifierHtml()
        },10000)
    }

    function nextFunction (){
        index++
        modifierHtml ()
        clearInterval(interval)
        interval = setInterval(()=>{
            index++
            modifierHtml()
        },10000)
    }