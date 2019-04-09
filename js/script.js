/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/***
Getting all students-items and store in list variable.
'noOfItems' is a variable to store the number of items to show on each page.
***/

const list = document.getElementsByClassName("student-item");
const noOfItems = 10;
console.log(list.length);

/***
   ShowPage function to hide all of the items in the
   list except for the ten you want to show.

***/
function showPage(list, page) {
  const start = (page - 1) * noOfItems;
  let end = page * noOfItems - 1;
  end = Math.min(end, list.length - 1);
  for (let i = 0; i < list.length; i++) {
    if (i >= start && i <= end) {
      list[i].style.display = "block";
    } else {
      list[i].style.display = "none";
    }
  }
}
/***
 Call the show page function, passing in as arguments,
 the global variable for the list items,
 and the number 1 for the first page, which should be shown initially
 ***/

showPage(list, 1);

/***
  AppendPageLinks function to generate, append, and add
   functionality to the pagination buttons.
***/

const appendPageLinks = list => {
  // A 'page' variable is a store the number of pagination links needs to create.
  let page = Math.ceil(list.length / noOfItems);
  const div = document.createElement("div");
  const pages = document.querySelector(".page");
  div.className = "pagination";
  pages.appendChild(div);
  const ul = document.createElement("ul");
  div.appendChild(ul);

  // This loop is for creating pagination links.
  for (let i = 1; i <= page; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    if (i == 1) {
      a.className = "active";
    } else {
      a.className = "";
    }
    a.textContent = i;
    li.appendChild(a);
    ul.appendChild(li);
    a.addEventListener("click", e => {
      showPage(list, i);
      const allLinks = document.querySelectorAll(".pagination li a");
      for (let j = 0; j < allLinks.length; j++) {
        allLinks[j].className = "";
      }
      e.target.className = "active";
    });
  }
};

appendPageLinks(list);
