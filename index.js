const freelancers = [
{name: 'Jack', occupation: 'Lawyer', price: 75},
{name: 'Kate', occupation: 'Nurse', price: 50}
];

const newFreeLancers = [
{name: 'Matt', occupation: 'Herbalist', price: 42},
{name: 'Carol', occupation: 'Psychic', price: 33},
{name: 'Jane', occupation: 'Astronaut', price: 86},
{name: 'Dr. John', occupation: 'Janitor', price: 28},
{name: 'Mr. Kidney', occupation: 'Back alley doctor', price: 62},
{name: 'Sean', occupation: 'Journalist', price: 18},

];


const div = document.createElement('div');
div.id = 'root';
const body = document.querySelector('body');
body.append(div);

function init() {
    // grab div with root id into new variable root
    const root = document.getElementById('root');

    // create h1 element
    const pageHeader = document.createElement('h1');
    pageHeader.textContent = 'Freelancer Forum';
    root.append(pageHeader);

    const avgPrice = document.createElement('p');
    // calling getaverage function to 2 decimals and assigning it
    const average = getAverage().toFixed(2);
    avgPrice.textContent = `The average starting price is: $${average}`;
    root.append(avgPrice);

    const freelanceHeader = document.createElement('h2');
    freelanceHeader.textContent = 'Freelancers Available for Hire:'
    root.append(freelanceHeader);

    
    // create table

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // creat table headers consists of object keys

    for (const key of Object.keys(freelancers[0])) {

        const th = document.createElement('th');

        // converting from object to string to capitalize table headers
        const headerString = JSON.stringify(key);
        // remove quotes from string using replace and global tag
        const newHeader = headerString.replace(/\"/g, "");  
        const header = document.createTextNode(newHeader.toUpperCase());
        
        // add th and header to thead
        thead.appendChild(th).appendChild(header);
    }
    // add thead to table
    table.appendChild(thead);

    // add tbody to table
    table.appendChild(tbody);

    // add table to root div
    root.appendChild(table);

    renderTable();

}

function renderTable() {

    // select table body
    const tableBody = document.querySelector('tbody');

    // go through array and get elements returned
    const tableElements = freelancers.map(person => {
        const row = document.createElement('tr');

        const cell1 = document.createElement('td');
        cell1.innerText = person.name;

        const cell2 = document.createElement('td');
        cell2.innerText = person.occupation;

        const cell3 = document.createElement('td');
        cell3.innerText = `$${person.price}`;

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);

        return row;
    });
    // const tableElements = freelancers.map(() => {
    //     const row = document.createElement('row');
    //     for(const key in freelancers) {
    //         for(item in freelancers[key]) {
    //             const cell = document.createElement('td');
    //             cell.innerText=freelancers[key][item];
    //             row.appendChild(cell);
    //         }
            
    //     }
    //     return row;
    // });
    tableBody.replaceChildren(...tableElements);

}

function addPerson() {
    // if(newFreeLancers.length>0) {
    //     const newPerson = newFreeLancers.pop()

    //     freelancers.push(newPerson);
    //     renderTable()
    // }
    // else {
    //     return;
    // }
    if(freelancers.length < 10){
    const newPerson = newFreeLancers[Math.floor(Math.random() * newFreeLancers.length)];
    freelancers.push(newPerson);
    renderTable();
    }
    else {
        return;
    }
    // call average when add person function is used and store it
    let average = getAverage().toFixed(2);
    // update average price displayed
    const newText = document.createTextNode(`The average starting price is: $${average}`);
    root.replaceChild(newText, root.childNodes[1]);

}   

function getAverage() {
  let sum = 0;
  for (const person of freelancers) {
    sum += person['price'];
  }
//   returns average price of current freelancers array
    return sum/freelancers.length;
}

setInterval(addPerson, 2000);

init();
