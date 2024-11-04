const iteam = document.querySelector("#iteam")
const toDoBox = document.querySelector("#to-do-box")

iteam.addEventListener(
    "keyup",
    function(event) {
        if (event.key === "Enter"){
            addToDo(this.value)
            this.value = ""
        }
    }
    
)

const addToDo = (iteam) => {
    const listIteam = document.createElement("li");
    listIteam.innerHTML = `
    ${iteam}
    <i class="fas fa-times"><i>`

    listIteam.addEventListener(
        "click",
        function(){
            this.classList.toggle("done")
        }
    )

    listIteam.querySelector("i").addEventListener(
        "click",
        function () {
             listIteam.remove()
        }
    )

    toDoBox.appendChild(listIteam)
}