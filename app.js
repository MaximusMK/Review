const reviews = [
    {
    id: 1,
    name: "Susan Smith",
    job: "web developer",
    img: "/person-img/person-1.jpg",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur nobis corrupti quidem. Amet at corporis unde, nisi nulla, tempore quod, ea nobis iusto quas maiores. Quam modi fugiat autem quis!"
},
{
    id: 2,
    name: "Julia Fox",
    job: "java developer",
    img: "/person-img/person-2.jpg",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur nobis corrupti quidem. Amet at corporis unde, nisi nulla, tempore quod, ea nobis iusto quas maiores. Quam modi fugiat autem quis!"
},
{
    id: 3,
    name: "Alexandra Cooper",
    job: "UX Design",
    img: "/person-img/person-3.jpg",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur nobis corrupti quidem. Amet at corporis unde, nisi nulla, tempore quod, ea nobis iusto quas maiores. Quam modi fugiat autem quis!"
},
{
    id: 4,
    name: "Isabella Cox",
    job: "front-end developer",
    img: "/person-img/person-4.jpg",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur nobis corrupti quidem. Amet at corporis unde, nisi nulla, tempore quod, ea nobis iusto quas maiores. Quam modi fugiat autem quis!"
},
{
    id: 5,
    name: "Anna Moore",
    job: "sysadmin",
    img: "/person-img/person-5.jpg",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur nobis corrupti quidem. Amet at corporis unde, nisi nulla, tempore quod, ea nobis iusto quas maiores. Quam modi fugiat autem quis!"
},
{
    id: 6,
    name: "Julia Anderson",
    job: "project manager",
    img: "/person-img/person-6.jpg",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur nobis corrupti quidem. Amet at corporis unde, nisi nulla, tempore quod, ea nobis iusto quas maiores. Quam modi fugiat autem quis!"
},
];

const img = document.getElementById("person-img"),
      author = document.getElementById("author"),
      job = document.getElementById("job"),
      info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn"),
      nextBtn = document.querySelector(".next-btn"),
      randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  showPerson();
});

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
}
nextBtn.addEventListener('click', () => {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson()
});

prevBtn.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson()
});

randomBtn.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson()
});