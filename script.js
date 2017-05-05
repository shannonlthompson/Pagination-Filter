let student_list = document.querySelector('.student-list');

//does this need to be a global var?
const total_page_num = Math.ceil(student_list.childElementCount / 10); 

const container = document.querySelector('.page');

const printPageNums = () => {
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `<div class="pagination">
                            <ul>
                              <li>
                                <a class="active" href="#">1</a>
                              </li>
                               <li>
                                <a href="#">2</a>
                              </li>
                               <li>
                                <a href="#">3</a>
                              </li>
                               <li>
                                <a href="#">4</a>
                              </li>
                               <li>
                                <a href="#">5</a>
                              </li>
                            </ul>
                        </div>`;
    container.appendChild(newDiv);
};
printPageNums();
const pageContainer = document.querySelector(.pagination);
//pageContainer.addEventListener('click', )


