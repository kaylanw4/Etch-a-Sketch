/**
 * First removes previous grid, prompts user for a number between 1-100 
 * then calls showGrid to display the grid with the size given by input
 */

function getSize(){
    let dim = 500
    container.innerHTML = ''
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

function clearGrid(){
    const cells = document.querySelectorAll('.gridElement')
    cells.forEach(cell => {
        if (cell.classList.contains('hover')){
            cell.classList.remove('hover')
        }
    })
}


/**
 * creates a dim x dim grid of divs that change color on mouseenter
 * @param {int} dim dimensions of the grid to be displayed
 */
function showGrid(dim){
    const cellSize = 500 / dim

    for (let i = 0; i < dim * dim; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList = 'gridElement'
        gridElement.style.cssText = `width: ${cellSize}px; height: ${cellSize}px`
        gridElement.addEventListener("mouseenter", paint)
        container.appendChild(gridElement)
    }
}


function paint(e){
    this.classList.add('hover')
}


const container = document.querySelector('.container')

const btnSize = document.querySelector('#size')
btnSize.addEventListener('click', getSize)

const btnClear = document.querySelector('#clear')
btnClear.addEventListener('click', clearGrid)



