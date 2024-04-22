const button = document.querySelector(".btn-1")
const table = document.querySelector('#tab')

button.addEventListener("click",handleClick);
const div = document.querySelector(".container")

function handleClick(){
    fetch(`https://p-9x7e.onrender.com/products/products`)
    .then(response => response.json())
    .then(res => {
        console.log(res.data);
        for (let i = 0; i < res.data.length; i++) {
            const tr = document.createElement("tr")
            const td1 = document.createElement("td")
            const td2 = document.createElement("td")
            const td3 = document.createElement("td")
            const td4 = document.createElement("td")
            const td5 = document.createElement("td")
            td1.innerText = res.data[i]._id
            td2.innerText = res.data[i].pName
            td3.innerText = res.data[i].pDesc
            td4.innerText = res.data[i].pPrice
            td5.innerText = res.data[i].pImg

            tr.append(td1, td2, td3, td4, td5)

            table.append(tr)
        }
    })
}