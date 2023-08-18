
let instagramContainer = document.querySelector(".instagram-container");
let x = -1; 
let leftBtn = document.querySelector(".left-btn");

let instagramContent = [
  { img: "002.JPG" },
  { img: "(478).JPG" },
  { img: "23.JPG" },
  { img: "059.JPG" },
  { img: "61.JPG" },
  { img: "357-1024_01_01.jpg" },
  { img: "Amur TruK_01.jpg" },
  { img: "DWTM.jpg" },
  { img: "Helloween_01.jpg" },
  { img: "Nizzle.jpg" },
  { img: "OРЁЛ_01.jpg" },
  { img: "White Cat.jpg" },
  { img: "ПАНТЕРА.jpg" },
  { img: "Лапы в верх!_01.jpg" },
  { img: "Белый тигр!.jpg" }
];

// <div><img src="img/ПАНТЕРА.JPG" alt="img"></div>
// <div><img src="img/Белый тигр!.jpg" alt="img"></div>
function instagramContentFunc() {
  instagramContent.forEach((item) => {
    let row = document.createElement("div");
    row.classList.add("instagram-content");
    row.innerHTML = `
    
  <div class="btn-group">
  <div class="right-btn"><i class='bx bx-chevron-right'></i></div>
  <div class="left-btn"><i class='bx bx-chevron-left'></i></div>
  </div>
      <div class="instagram-content-title">
        <div><img src="img/${item.img}" alt="img"></div>
      </div>`;

    instagramContainer.append(row);
  });
}


function instagramContentClickActive() {
  let instagramContents = document.querySelectorAll(".instagram-content");

  for (let i = 0; i < instagramContents.length; i++) {
    for (let j = 0; j < instagramContents.length; j++) {
      instagramContents[i].addEventListener("click", () => {
        instagramContents[j].querySelector(".instagram-content-title").classList.remove("instagram-content-active");
        instagramContents[j].querySelector(".btn-group").style.display = "none";
        instagramContents[i].querySelector(".instagram-content-title").classList.add("instagram-content-active");
        instagramContents[i].querySelector(".btn-group").style.display = "block";
        x = i;
        instagramContentTransform();
      });
    }
  }
}
instagramContentFunc();
instagramContentClickActive();

function instagramContentTransform() {
  let translateValue = -x * 350;

  document.querySelectorAll(".instagram-content").forEach((item) => {
    item.style.transform = `translateX(${translateValue}px)`;
  });
}


let rightBtn = document.querySelectorAll(".right-btn");
rightBtn.forEach((item) => {
  item.addEventListener("click", rightBtnFunc);

})
function rightBtnFunc() { 
  x++;
  instagramContentTransform()

  console.log(1234);
  console.log(x);
}