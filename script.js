let list = document.querySelectorAll('.student-list li');
const total_page_num = Math.ceil(list.length / 10);

//print page numbers
const printPageNums = () => {
    //only print page links if there is more than 1 page
    if (total_page_num !== 1) {
        const container = document.querySelector('.page');
        let newDiv = document.createElement('div');
        let pages = '<div class="pagination"><ul>';
        for(let i = 1; i<=total_page_num; i++) {
            if (i === 1) {
                pages += `<li><a class="active" href="#"> ${i} </li>`;
            }
            else {
                pages += `<li><a href="#"> ${i} </li>`;
            }
        }
        pages += '</ul></div>';
        newDiv.innerHTML = pages;
        container.appendChild(newDiv);
    }
};

//show only first 10 students
const showFirst10 = () => {
    for(let i=0; i < list.length; i++) {
        if (!(i >= 0 &&  i <= 9)){
            list[i].className += "student-item cf hide";
        }
    }
};

const showOrHide = (page) => {
    const rangeStart = (page - 1) * 10;
    const rangeEnd = (page - 1) * 10 + 9;
    for(let i=0; i < list.length; i++) {
        if (rangeStart === 0 && i === 0) {
            list[i].className = "student-item cf show";
        }
        else if(i >= rangeStart &&  i <= rangeEnd){
            list[i].className += "student-item cf show";
        }
        else {
            list[i].className += "student-item cf hide";
        }
    }
};

const makeLinkActive = (page) => {
    const pagination = document.querySelectorAll('.pagination ul li');
    for(let i=0; i < pagination.length; i++) {
        if ((i+1) === page){
            pagination[i].innerHTML = `<a class="active" href="#"> ${pagination[i].innerText} </a>`;
        } else {
            pagination[i].innerHTML = `<a href="#"> ${pagination[i].innerText} </a>`;
        }
    }
};

printPageNums();
showFirst10();

const pageContainer = document.querySelector('.pagination');

pageContainer.addEventListener('click', (event) => {
    //If event is an anchor tag, show the students for that page
    if(event.target.tagName === 'A'){
        const page = parseInt(event.target.innerHTML, 10);
        showOrHide(page);
        makeLinkActive(page);
    }
});



