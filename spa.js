const allPuppies = document.getElementById("allPuppies")
const selectedPuppy = document.getElementById("selectedPuppy")

let puppies= [];

async function fetchData () {
    const allData = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2307/players')
    const json = await allData.json()
    console.log(json)
    puppies =json.data.players
    console.log(puppies)
    
    
    
}


async function render(){
    await fetchData()
    const hash = window.location.hash.slice(1)
    console.log(hash)

    const puppiesHtml = puppies.map((puppy) => {
        
        return `<li> <a href="#${puppy.id}" class="${puppy.id === hash ? 'selected' : ''}"> <h3>Puppy: ${puppy.id}</h3></a> </li>
        `
    })
    allPuppies.innerHTML = puppiesHtml.join('')

    let puppySelection = puppies.find((puppy)=>{
        return puppy.id = hash
        return puppySelection.push(puppy)
        
    })
    
    let hashPuppy = [];
    hashPuppy.push(puppySelection);
    console.log(hashPuppy)
    
    selectedPuppyHtml = hashPuppy.map((info) =>{
        return `Name: ${info.name} <br>
            Breed: ${info.breed} <br>
            <img src ="${info.imageUrl}">
            `
    })
    selectedPuppy.innerHTML = selectedPuppyHtml.join('')

    

    
    
}



window.addEventListener("hashchange", () => {
    
    render()
    
    
})
render()






