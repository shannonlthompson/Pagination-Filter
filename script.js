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

//print page numbers
const refreshPageNums = (count) => {
    const refresh_count = Math.ceil(count / 10);
    let page_num = document.querySelector('.pagination');
    if (count <= 10) {
        //do not print page numbers
        page_num.innerHTML = "";
    } else {
        let pages = '<div class="pagination"><ul>';
        for(let i = 1; i<=refresh_count; i++) {
            if (i === 1) {
                pages += `<li><a class="active" href="#"> ${i} </li>`;
            }
            else {
                pages += `<li><a href="#"> ${i} </li>`;
            }
        }
        pages += '</ul></div>';
        page_num.innerHTML = pages;
    }
};

//show only first 10 students in list
const showFirst10 = () => {
    let length = list.length;
    for(let i=0; i < list.length; i++) {
        if (!(i >= 0 &&  i <= 9)){
            list[i].className += "student-item cf hide";
        } else {
            list[i].className += "student-item cf show";
        }
    }
};

//add search bar
const addSearch = () => {
    let page_header = document.querySelector('.page-header');
    let new_search_div = document.createElement('div');
    let search_bar = `<div class="student-search">
<input placeholder="Search for students...">
<button>Search</button>
</div>`;
    new_search_div.innerHTML = search_bar;
    page_header.appendChild(new_search_div);
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

//show page 1
const show_page_one = () => {
    showOrHide(1);
    makeLinkActive(1);
};

printPageNums();
showFirst10();
addSearch();

const pageContainer = document.querySelector('.pagination');
const searchButton = document.querySelector('.student-search button');

//user clicks a page link
pageContainer.addEventListener('click', (event) => {
    //If event is an anchor tag, show the students for that page
    if(event.target.tagName === 'A'){
        const page = parseInt(event.target.innerHTML, 10);
        showOrHide(page);
        makeLinkActive(page);
    }
});

//user clicks Search button
searchButton.addEventListener('click', (event) => {
    let error = document.querySelector('.error');
    if(error !== null) {
        error.className = "error hide";
    }
    const input = document.querySelector('.student-search input');
    const inputText = input.value;
    //user searches for nothing
    if(inputText === "") {
        pageContainer.value = "";
        let pages = document.querySelector('.pagination');
        pages.className = "pagination show";
        showFirst10();
        makeLinkActive(1);
    }
    //user enters some text
    else {
        let count = 0;
        //hide page numbers
        let pages = document.querySelector('.pagination');
        pages.className = "pagination hide";
        for(let i=0; i < list.length; i++) {
            let h3 = list[i].querySelector('h3');
            let text = h3.textContent;
            let result = text.search(inputText);
            //hide
            if(result === -1) {
                list[i].className += "student-item cf hide";
            }
            //show
            else {
                list[i].className = "student-item cf show";
                count++;
            }
        }
        if(count===0){
            if(error !== null) {
                error.className = "error show";
                let msg = '<p class="error">There are no matches for "'+ inputText +
                '"</p>';
                error.innerHTML = msg;
            } else {
            let page_header = document.querySelector('.student-list');
            let new_msg_div = document.createElement('p');
            let msg = '<p class="error">There are no matches for "'+ inputText +
                '"</p>';
            new_msg_div.innerHTML = msg;
            page_header.appendChild(new_msg_div);
            }
        }
    }
});



