const numberOfFields = document.querySelector("#number-of-fields")
const sizeOfFields = document.querySelector("#size-of-fields")

const outputnumberOfFields = document.querySelector("#output-number-of-fields")
const outputsizeOfFields = document.querySelector("#output-size-of-fields")
outputnumberOfFields.innerHTML = numberOfFields.value
outputsizeOfFields.innerHTML = sizeOfFields.value

const createButton = document.querySelector("#create")

const chessTable = document.querySelector(".chess-table")

numberOfFields.addEventListener('input', (e) => {
    outputnumberOfFields.innerHTML = e.target.value
})

sizeOfFields.addEventListener('input', (e) => {
    outputsizeOfFields.innerHTML = e.target.value
})

createButton.addEventListener("click", () => {
    createChessTable(numberOfFields.value, sizeOfFields.value, chessTable)
})

const changeTableWidthAndHeight = (size, chessTable) => {
    chessTable.style.width = `${size}px`
    chessTable.style.height = `${size}px`
}

const setColBackground = (div, i, j, color1, color2) => {
    if (i % 2 == 0 && j % 2 == 1) {
        div.style.background = color1
    } else if (i % 2 == 0 && j % 2 == 0) {
        div.style.background = color2
    } else if (i % 2 == 1 && j % 2 == 0) {
        div.style.background = color1
    } else {
        div.style.background = color2
    }
}

const createChessTable = (numberOfFields, sizeOfFields, chessTable) => {
    chessTable.innerHTML = ""
    changeTableWidthAndHeight(numberOfFields * sizeOfFields, chessTable)

    for (let i = 0; i < numberOfFields; i++) {
        for (let j = 0; j < numberOfFields; j++) {
            const div = document.createElement("div")
            div.style.width = `${sizeOfFields}px`
            div.style.height = `${sizeOfFields}px`
            div.classList.add("col")
            div.addEventListener("click", (e) => {
                changeBackground(e.target.style.background)
            })
            if(numberOfFields % 2 == 0){
                setColBackground(div, i, j, "red", "green")
            }
            chessTable.appendChild(div)
        }
    }
}

const changeBackground = (background) => {
    const cols = document.querySelectorAll(".col")
    const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
    cols.forEach(col => {
        if(col.style.background == background){
            col.style.background = randomColor
        }
    })
}