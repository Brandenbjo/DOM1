let header = document.createElement('div');
header.className = 'header-container';

let head1 = document.createElement('h1');
let headertext = document.createTextNode('This is an h1');
head1.appendChild(headertext);
header.appendChild(head1);
head1.className = 'header'

let head2 = document.createElement('h2');
let headertext2 = document.createTextNode('This is an h2');
head2.appendChild(headertext2);
header.appendChild(head2);
head2.className = 'header'

let head3 = document.createElement('h3');
let headertext3 = document.createTextNode('This is an h3');
head3.appendChild(headertext3);
header.appendChild(head3);
head3.className = 'header'

let head4 = document.createElement('h4');
let headertext4 = document.createTextNode('This is an h4');
head4.appendChild(headertext4);
header.appendChild(head4);
head4.className = 'header'

let head5 = document.createElement('h5');
let headertext5 = document.createTextNode('This is an h5');
head5.appendChild(headertext5);
header.appendChild(head5);
head5.className = 'header'

let head6 = document.createElement('h6');
let headertext6 = document.createTextNode('This is an h6');
head6.appendChild(headertext6);
header.appendChild(head6);
head6.className = 'header'
document.body.appendChild(header);


let colors = ["red", "blue", "green", "yellow", "brown", "purple", "orange", "grey"];

let head = document.getElementsByClassName('header');

// changes header color on double click

for (let i = 0; i < head.length; i++) {


    head[i].addEventListener("dblclick", (e) => {
        let random = colors[Math.floor(Math.random() * colors.length)];

        e.target.style.color = random;
    })


};

// adds new list item

let btn = document.getElementById("btn");

btn.addEventListener('click', addlistitem);


let num = 1

let colorlist = document.getElementsByClassName('colored');

function addlistitem() {
    let list = document.createElement('li');
    let listitem = document.createTextNode('This is list item ' + num);

    list.addEventListener("click", (e) => {
        let random = colors[Math.floor(Math.random() * colors.length)];

        
        
        e.target.style.color = random;
    })
    list.addEventListener("dblclick", (e)=>{
            e.target.remove();
        })

    list.className = 'colored';

    listitem.className = 'item';

    header.appendChild(list);
    list.appendChild(listitem);

    num++

};


// function removelist() {
//     let div = document.getElementsByClassName('header-container');
//     let test = document.getElementsByClassName('colored');

//     div.removeChild(test);
// }

let div = document.getElementsByClassName('header-container');


// colorlist.addEventListener('dblclick', removelist())




