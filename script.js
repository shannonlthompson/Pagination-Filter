let list = document.querySelectorAll('.student-list li');

//print page numbers
const printPageNums = () => {
    const total_page_num = Math.ceil(list.length / 10);
    console.log("total pages" + total_page_num);
    const container = document.querySelector('.page');
    let newDiv = document.createElement('div');
    let pages = '<div class="pagination"><ul>';
    for(let i = 1; i<=total_page_num; i++) {
        pages += `<li><a class="active" href="#"> ${i} </li>`;
    }
    pages += '</ul></div>';
    newDiv.innerHTML = pages;
    container.appendChild(newDiv);
};
printPageNums();
const pageContainer = document.querySelector('.pagination');

pageContainer.addEventListener('click', (event) => {
    const page = event.target.innerHTML;
    console.log("page #: " + page);

    const rangeStart = (page - 1) * 10;
    const rangeEnd = (page - 1) * 10 + 9;
    for(let i=0; i < list.length; i++) {
        if (rangeStart === 0 && i === 0) {
            console.log("showing: " + i);
            list[i].className = "student-item cf show";
        }
        else if(i >= rangeStart &&  i <= rangeEnd){
            console.log("showing: " + i);
            list[i].className += "student-item cf show";
        }
        else {
            console.log("hiding: " + i);
            list[i].className += "student-item cf hide";
        }
    }
});



