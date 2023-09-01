const allPuppies = document.getElementById("allPuppies")
const selectedPuppy = document.getElementById("selectedPuppy")
const backToTop = document.querySelector("button")

let puppies= [];

async function fetchData () {
    const allData = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2307/players')
    const json = await allData.json()
    console.log(json)
    puppies =json.data.players
    console.log(puppies)
    render()
    
    
}

async function render(){
    
    const hash = window.location.hash.slice(1)*1
    console.log(hash)

    const puppiesHtml = puppies.map((puppy) => {
        
        return `<li> <a href="#${puppy.id}" class="${puppy.id === hash ? 'selected' : ''} "> <h3>Puppy: ${puppy.id}</h3></a> </li>
        `
    })
    allPuppies.innerHTML = puppiesHtml.join('')

    const puppy = puppies.find((puppy)=>{
        return puppy.id === hash
        
    })
    
    if (puppy){
        const detailHtml = `Name: ${puppy.name} <br>
            Breed: ${puppy.breed} <br>
           <img src ="${puppy.imageUrl}" class ="image">
           `;

    selectedPuppy.innerHTML = detailHtml

    console.log(detailHtml)
    }
    else {
        selectedPuppy.innerHTML = ""
    }

    window.scroll({
        top:0,
        left:0,
        behavior: "smooth"
    })
    

    console.log(puppy)
 
}

window.addEventListener("hashchange", () => {
    render()
})

backToTop.addEventListener("click", e => {
    render()
})


fetchData()






