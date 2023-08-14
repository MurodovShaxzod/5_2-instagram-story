let instagramContainer = document.querySelector(".instagram-container");

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
  { img: "The Messenger, Bald Eagle.jpg" },
  { img: "White Cat.jpg" },
  { img: "ПАНТЕРА.jpg" },
  { img: "Лапы в верх!_01.jpg" },
  { img: "Белый тигр!.jpg" }
];

function instagramContentFunc() {
  instagramContent.forEach((item) => {
    let row = document.createElement("div");
    row.classList.add("instagram-content");
    row.innerHTML = `
      <div class="instagram-content-title">
        <img src="img/${item.img}" alt="img">
      </div>
    `
    instagramContainer.append(row)
  })
}

function instagramContentClickFunc() {
  let instagramContents = document.querySelectorAll(".instagram-content"), x = 0;
  for (let i = 0; i < instagramContents.length; i++) {
    instagramContents[i].addEventListener("click", (e) => {
      for (let j = 0; j < instagramContents.length; j++) {
        instagramContents[j].classList.remove("instagram-content-active");
        instagramContents[i].classList.add("instagram-content-active");
      }

      if(e.clientX > 900 && e.clientX < 1150) {
        instagramContainer.style.transform = `translateX(-${x += 350}px)`
      } else if (e.clientX > 1150) {
        instagramContainer.style.transform = `translateX(-${x += 700}px)`
      }
      if(e.clientX > 200 && e.clientX < 450) {
        instagramContainer.style.transform = `translateX(-${x -= 350}px)`
      } else if (e.clientX < 200) {
        instagramContainer.style.transform = `translateX(-${x -= 700}px)`
      }
      console.log(x);
    })
  }
}

instagramContentFunc();
instagramContentClickFunc()
