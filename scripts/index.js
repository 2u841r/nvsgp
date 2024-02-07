import data from '../data/data.js'

function createDropdown(parent, obj) {
    const select = document.createElement('select');
    select.classList.add('selectorname')
    select.addEventListener('change', function () {
        const selectedValue = this.value;
        const nextData = obj[selectedValue];
        // Remove subsequent dropdowns
        while (parent.lastChild !== select && parent.lastChild !== null) {
            parent.removeChild(parent.lastChild);
        }
        if (nextData && typeof nextData === 'object') {
            // Create next dropdown
            createDropdown(parent, nextData);
        } else {
            // Reached leaf node, display final value
            const existingFinalValue = parent.querySelector('.final-value');
            if (existingFinalValue) {
                existingFinalValue.textContent = 'Answer: ' + nextData;
            } else {
                const div = document.createElement('div');
                const paragraph = document.createElement('p');
                paragraph.textContent = 'Answer: ' + nextData;
                paragraph.classList.add('final-value');
                paragraph.classList.add('answer');
                div.appendChild(paragraph);
                parent.appendChild(div);
            }
        }
    });

    // Add an empty option as default
    const option = document.createElement('option');
    option.text = '';
    select.add(option);

    // Populate dropdown with object keys
    Object.keys(obj).forEach(key => {
        const option = document.createElement('option');
        option.text = key;
        select.add(option);
    });
    const brElement = document.createElement("br");
    parent.appendChild(brElement);
    parent.appendChild(select);
}

// document.addEventListener("DOMContentLoaded", function() {
//     let lsff = localStorage.getItem('ff');

//     if (lsff) {
//         document.getElementById('myElement').style.fontFamily = lsff;
//     } else {
//         // Set a default font-family
//         document.getElementById('myElement').style.fontFamily = 'Arial, sans-serif';
//     }
// });


window.onload = function () {
    const container = document.getElementById('container');
    createDropdown(container, data);
};


//Matha noshto 
let lsff = localStorage.getItem('ff');
let newFontFamily = lsff ? lsff : 'Arial, sans-serif';

document.documentElement.style.setProperty('--font-family-selectorname', newFontFamily);

