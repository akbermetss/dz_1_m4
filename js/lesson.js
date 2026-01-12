const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');

const inputs = [somInput, usdInput, eurInput];

const converter = (element) => {
    element.oninput = () => {
        const requester = new XMLHttpRequest();
        requester.open("GET", "../data/converter.json");
        requester.setRequestHeader("Content-Type", "application/json");
        requester.send();

        requester.onload = () => {
            const data = JSON.parse(requester.response);

            if (element.id === 'som') {
                usdInput.value = (element.value / data.usd).toFixed(2);
                eurInput.value = (element.value / data.eur).toFixed(2);
            }

            if (element.id === 'usd') {
                somInput.value = (element.value * data.usd).toFixed(2);
                eurInput.value = ((element.value * data.usd) / data.eur).toFixed(2);
            }

            if (element.id === 'eur') {
                somInput.value = (element.value * data.eur).toFixed(2);
                usdInput.value = ((element.value * data.eur) / data.usd).toFixed(2);
            }
        };
    };
};

inputs.forEach(converter);