const allPuppies = document.getElementById("allPuppies")


async function fetchData () {
    const allData = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2307-ftb-et-web-ft/players')
    const json = await allData.json()
    const puppies =json.data 
    console.log(puppies)
}

function render() {
    const htmlPuppies = puppies.map((id) = {
        return `<h3> ${} </h3>`
    })
}

fetchData()

