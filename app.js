// variations of passwords
let main = ['A','B','C','D','M','N','U','V','W','X','Y','Z',2,8,9,0,5,6,7]
let lowerCase = ['a','b','c','d','n','p','q','r','s','t','u','v']
let signs = ['$','&','*','#','!','(',')']


//targetting input field
const displayTxt = document.getElementById('display')
// targetting radio btns 

const variation = document.querySelectorAll('.variation')
// adding function 
let newArray = []

variation.forEach((item)=>{
    item.addEventListener('click',function(e){
        let type = e.currentTarget.dataset.id
        if(type === 'uplow'){
            newArray = main.concat(lowerCase)
        }else{
             newArray = main.concat(lowerCase, signs)
        }
    })
    
})


// working on lengths
const length = document.querySelectorAll('.length')
let passLength; 

length.forEach((number) => {
    number.addEventListener('click',function(e){
        const targetLength = e.currentTarget.dataset.length
        passLength = parseInt(targetLength ,10)
    })
})


const generate = document.getElementById('generate')

generate.addEventListener('click', function(){
    let pass = ""
    for(let i = 0; i < passLength; i++){
        pass += newArray[getRandom()]
    }
    displayTxt.value = pass
})

function getRandom() {
    return Math.floor(Math.random() * newArray.length)
}