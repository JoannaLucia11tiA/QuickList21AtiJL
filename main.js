let itens = []
//Aviso que houve correção
function addItem(){
    const itemName = document.querySelector("#item").value
    
    if(itemName === ""){
        alert("Digite um item válido!")
        return
    }

    const item = {
        name: itemName,
        checked: false
    }
    itens.push(item)

    document.querySelector("#item").value = ""

    showItensList()
}

function showItensList(){
    const sectionList = document.querySelector(".list")
    sectionList.textContent = ""

    

    itens.map((item, index) => {
        sectionList.innerHTML += `
                <div class="item">
                <div>
                    <input type="checkbox" name="list" id="item-${index}" ${item.checked && "checked"}>

                   <div class="custom-checkbox" onclick="checkItem('${item.name}')">
                    <img src="./assets/checked.svg" alt="checked">
                   </div>
                   <label for="item-${index}" onclick="checkItem('${item.name}')">${item.name}</label>
                </div>
                <button onclick="removeItem('${item.name}')"><img src="./assets/trash-icon.svg" alt="trash icon"></button>
            </div>
            `
    })

    localStorage.setItem("itens", JSON.stringify(itens))
}

function removeItem(itemName){
    const itemIndex = itens.findIndex((item) => item.name === itemName)

    if(itemName !== -1){
        itens.splice(itemIndex, 1)
    }


    showItensList()
}

function checkItem(itemName){
    const item = itens.find((item) => item.name === itemName)

    /*
    if(item.checked === true){
    item.checked = false
    } else{
    item.checked = true 
    }
    */

    item.checked = !item.checked 

    showItensList()
}

function addHideWarningClass(){
    document.querySelector(".warning").classList.add("hide-warning")
}

function verifyLocalStorageItens(){
    const localStorageItens = localStorage.getItem("itens")

    if(localStorageItens){
        itens = JSON.parse(localStorageItens)
        showItensList()
    }
}
verifyLocalStorageItens()
