function getSize(){
    let dim = 500
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild)
    }
    while (dim > 100){
        input = parseInt(prompt('Enter a value: (between 1-100)'), 10)
        if (input > 0 && input < 100){
            dim = input
            break
        } else {
            continue
        }
    }
    showGrid(dim)
}

function showGrid(dim){
    for (let i = 0; i < dim; i++) {
        const row = document.createElement('div')
        row.classList = 'row'
        container.appendChild(row)
        for (let j = 0; j < dim; j++){
            const col = document.createElement('div')
            col.classList = 'col'
            col.addEventListener("mouseenter", paint)
            container.children[i].appendChild(col)
        }
    }
}

function paint(e){
    this.classList.add('hover')
}


const container = document.querySelector('.container')

const btn = document.querySelector('.button')
btn.addEventListener('click', getSize)



