let page1 = document.getElementById("page1")
let page2 = document.getElementById("page2")
let page3 = document.getElementById("page3")
let page4 = document.getElementById("page4")

function showPage1() {
    page1.style.display = "block"
    page2.style.display = "none"
    page3.style.display = "none"
    page4.style.display = "none"
}

function showPage2() {
    page1.style.display = "none"
    page2.style.display = "block"
    page3.style.display = "none"
    page4.style.display = "none"
}

function showPage3() {
    page1.style.display = "none"
    page2.style.display = "none"
    page3.style.display = "block"
    page4.style.display = "none"
}

function showPage4() {
    page1.style.display = "none"
    page2.style.display = "none"
    page3.style.display = "none"
    page4.style.display = "block"
}

showPage1()

function add_plant(e) {
    // this code prevent submitting form (which means that change to empty page)
    e.preventDefault()

    // find <form id="color-form"></form>
    let form = document.getElementById("plant-form");
    // find <ul id="frame"></ul>
    let frame = document.getElementById("frame");

    // create 'li' elements 
    // li_1 --> <li></li>
    // li_2 --> <li></li>
    let li_1 = document.createElement("li");
    let li_2 = document.createElement("li");

    // attach form value to new 'li' elements
    // li_1 --> <li>John</li>
    // li_2 --> <li>Black</li>
    li_1.innerHTML = form.name.value;
    li_2.innerHTML = form.plant.value;

    // attach 'li' elements under the frame (<ul id="frame"></ul>)
    // <ul id="frame">
    //      <li>John</li>
    //      <li>Black</li>
    //</ul>
    frame.appendChild(li_1);
    frame.appendChild(li_2);

    // make form value empty
    form.name.value = "";
    form.plant.value = "";

}