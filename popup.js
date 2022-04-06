const btnPopup1 = document.querySelector(".card-1-btn");
const btnPopup2 = document.querySelector(".card-2-btn");
const btnPopup3 = document.querySelector(".card-3-btn");
const btnPopup4 = document.querySelector(".card-4-btn");
const crossBtn = document.querySelector(".fa-times");
const anypop = document.querySelectorAll(".popup-container")
const popupContainer = document.querySelector(".popup-container");
const newElement = document.createElement("div");
popupContainer.append(newElement);
newElement.setAttribute("class", "pop-container-child");
let popupObj = [
  {
    name: "Tonic",
    canopy_title: "CANOPY",
    back_end: "Back End Dev",
    year : "2015",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featured_image: "./images/SnapshootPortfolio.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    link_live: "https://alphantihinduka.github.io/Alpha-Mobile-portifolio/",
    link_source: "https://github.com/AlphaNtihinduka/Alpha-Mobile-portifolio",
    live_icon: "./images/icon.png",
    source_icon: "./images/vector.png"
  },

  {
    name: "Multi-Post Stories",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featured_image: "./images/SnapshootCard2.png",
    technologies: ["HTML", "Ruby on Rail", "CSS", "JavaScript"],
    link_live: "https://alphantihinduka.github.io/Alpha-Mobile-portifolio/",
    link_source: "https://github.com/AlphaNtihinduka/Alpha-Mobile-portifolio",
  },

  {
    name: "Facebook 360",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featured_image: "./images/SnapshootCard3.png",
    technologies: ["HTML", "Ruby on Rail", "CSS", "JavaScript"],
    link_live: "https://alphantihinduka.github.io/Alpha-Mobile-portifolio/",
    link_source: "https://github.com/AlphaNtihinduka/Alpha-Mobile-portifolio",
  },

  {
    name: "Uber Navigation",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featured_image: "./images/SnapshootCard4.png",
    technologies: ["HTML", "Ruby on Rail", "CSS", "JavaScript"],
    link_live: "https://alphantihinduka.github.io/Alpha-Mobile-portifolio/",
    link_source: "https://github.com/AlphaNtihinduka/Alpha-Mobile-portifolio",
  },
];

let objtracker;

btnPopup1.addEventListener("click", () => {
  objtracker = 0;

  let output = "";

  popupObj[objtracker].technologies.forEach((techContent) => {
    output += `
        <span> ${techContent} </span>
    `;
  });

  newElement.innerHTML = `
        <i class="fa fa-times" id="times"></i>
        <h2 class="popup_title">${popupObj[objtracker].name}</h2>
        <div class="prjct-info">
        <h6 class="canopy client-name">${popupObj[objtracker].canopy_title}</h6>
        <div class="dot-popup"></div>
        <h6 class="client-name">${popupObj[objtracker].back_end}</h6>
        <div class="dot-popup"></div>
        <h6 class="client-name">${popupObj[objtracker].year}</h6>
      </div>
        <div class="pop-img-container">
        <img src = ${popupObj[objtracker].featured_image} class="popup-img">
        </div>

       <div class="desc-link-container">
        <p class="popup_description">${popupObj[objtracker].description}</p>
            <div class="link-btn-container">
            <div class="skills-popup"> ${output} </div>
            <a href = ${popupObj[objtracker].link_live} target="__blank" class="pop-link"> <button> SEE LIVE <span> <img src="${popupObj[objtracker].live_icon}" class="icon-img"></span></button> </a> 
            <a href = ${popupObj[objtracker].link_source} target="__blank" class="pop-link"> <button> SEE SOURCE <span> <img src="${popupObj[objtracker].source_icon}"></span> </button> </a> 
            </div>
        </div>
   `;

  popupContainer.style.display = "block";
});
anypop.forEach(n => n.addEventListener("click", () => {
    popupContainer.style.display ="none";
  }))

btnPopup2.addEventListener("click", () => {
  objtracker = 1;

  let output = "";

  popupObj[objtracker].technologies.forEach((techContent) => {
    output += `
          <span> ${techContent} </span>
      `;
  });

  newElement.innerHTML = `
          <h2>${popupObj[objtracker].name}</h2>
  
          <p>${popupObj[objtracker].description}</p>
  
           <img src = ${popupObj[objtracker].featured_image}>
  
          <div> ${output} </div>
  
          <a href = ${popupObj[objtracker].link_live} target="__blank"> <button> SEE LIVE </button> </a> 
          <a href = ${popupObj[objtracker].link_source} target="__blank"> <button> SEE SOURCE </button> </a> 
     
     `;

  popupContainer.style.display = "block";
});

btnPopup3.addEventListener("click", () => {
  objtracker = 2;

  let output = "";

  popupObj[objtracker].technologies.forEach((techContent) => {
    output += `
          <span> ${techContent} </span>
      `;
  });

  newElement.innerHTML = `
  
          <h2>${popupObj[objtracker].name}</h2>
  
          <p>${popupObj[objtracker].description}</p>
  
           <img src = ${popupObj[objtracker].featured_image}>
  
          <div> ${output} </div>
  
          <a href = ${popupObj[objtracker].link_live} target="__blank"> <button> SEE LIVE </button> </a> 
          <a href = ${popupObj[objtracker].link_source} target="__blank"> <button> SEE SOURCE </button> </a> 
     
     `;

  popupContainer.style.display = "block";
});

btnPopup4.addEventListener("click", () => {
  objtracker = 3;

  let output = "";

  popupObj[objtracker].technologies.forEach((techContent) => {
    output += `
          <span> ${techContent} </span>
      `;
  });

  newElement.innerHTML = `
          <h2>${popupObj[objtracker].name}</h2>
          <p>${popupObj[objtracker].description}</p>
           <img src = ${popupObj[objtracker].featured_image}>
          <div> ${output} </div>
  
          <a href = ${popupObj[objtracker].link_live} target="__blank"> <button> SEE LIVE </button> </a> 
          <a href = ${popupObj[objtracker].link_source} target="__blank"> <button> SEE SOURCE </button> </a> 
     
     `;

  popupContainer.style.display = "block";
});


//     for(let i = 0; i < popupObj.length; i++) {
//         btnPopup[i].addEventListener('click', function() {
//             popupContainer.style.display = "block";
//            console.log(popupObj[i])
//         })
//     }
// function displayElement() {
//     for(let i = 0; i < popupObj.length; i++) {
//         newElement.innerHTML = `
//             <h3 class="titleDisplay">${popupObj[i].name}</h3>
//             <p class="textPopup">${popupObj[i].description}</p>
//         `
//     }
// }
