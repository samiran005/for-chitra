const numHolder = document.querySelector("#num-hold")
const lock = document.querySelector(".lock")
const keys = document.querySelector(".keys")
const enter = document.querySelector("#enter")
const leftDoor = document.querySelector(".left")
const rightDoor = document.querySelector(".right")

const keyPressHandel = (e)=>{
    let currentElementNumber = Number(e.target.innerText);

    if (!currentElementNumber) return;

    // console.log(currentElementNumber)

    if (!Number(numHolder.innerText)) {
        numHolder.innerText = ""
        numHolder.style.color = "white";
    }

    numHolder.innerText += currentElementNumber
}

keys.addEventListener("click", keyPressHandel)



enter.addEventListener("click", () => {
    if (numHolder.innerText == 25836) {
        numHolder.innerText = "Currect !!";
        numHolder.style.color = "green";

        keys.removeEventListener("click", keyPressHandel)

        setTimeout(()=>{
            lock.style.display = "none"
            leftDoor.style.left = "-800px"
            rightDoor.style.right = "-800px"
        }, 1000)

    } else {
        numHolder.innerText = "Wrong !!";
        numHolder.style.color = "red";
    }
})