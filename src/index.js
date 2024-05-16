const summationNode = document.getElementById('summation');
const ingridientsNode = document.querySelectorAll('.ingridient__item');

let summation = +summationNode.textContent.split(' ')[0];

ingridientsNode.forEach((ingridient) => {
    let col = 0;

    const name = ingridient.dataset.name;
    const price = +ingridient.dataset.price;
    const colNode = document.getElementById(`${name}_col`);
    const minusNode = document.getElementById(`${name}_minus`);
    const plusNode = document.getElementById(`${name}_plus`);
    const priceNode = document.getElementById(`${name}_price`);
    
    minusNode.addEventListener('click', () => {
        if (col > 0) {
            if (col === 1) {
                col--;
                colNode.innerText = col;
                priceNode.innerText = ' +0 ₽';

                return;
            }

            col--;
            summation -= price;
            colNode.innerText = col;
            summationNode.innerText = summation + ' ₽';
        }
    })

    plusNode.addEventListener('click', () => {
        if (col < 10) {
            if (col === 0) {
                col++;
                colNode.innerText = col;
                priceNode.innerText = ` +${price} ₽`;

                return;
            }

            col++;
            summation += price;
            colNode.innerText = col;
            summationNode.innerText = summation + ' ₽';
        }
    })
})