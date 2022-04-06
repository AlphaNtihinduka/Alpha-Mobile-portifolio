const btnPopup = document.querySelectorAll('.popup-btn');
const popupContainer = document.querySelector('.popup-container');
const newElement = document.createElement('div')
popupContainer.append(newElement);
let popupObj = [
    {
        name: 'Tonic',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        featured_image : './images/SnapshootPortfolio.png',
        technologies : ["HTML", "CSS", "JavaScript"],
        link_live : 'https://alphantihinduka.github.io/Alpha-Mobile-portifolio/',
        link_source : 'https://github.com/AlphaNtihinduka/Alpha-Mobile-portifolio'
    },

    {
        name: 'Multi-Post Stories',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        featured_image : './images/SnapshootCard2.png',
        technologies : ["HTML","Ruby on Rail", "CSS", "JavaScript"],
        link_live : 'https://alphantihinduka.github.io/Alpha-Mobile-portifolio/',
        link_source : 'https://github.com/AlphaNtihinduka/Alpha-Mobile-portifolio'
    },

    {
        name: 'Facebook 360',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        featured_image : './images/SnapshootCard3.png',
        technologies : ["HTML","Ruby on Rail", "CSS", "JavaScript"],
        link_live : 'https://alphantihinduka.github.io/Alpha-Mobile-portifolio/',
        link_source : 'https://github.com/AlphaNtihinduka/Alpha-Mobile-portifolio'
    },

    {
        name: 'Uber Navigation',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        featured_image : './images/SnapshootCard4.png',
        technologies : ["HTML","Ruby on Rail", "CSS", "JavaScript"],
        link_live : 'https://alphantihinduka.github.io/Alpha-Mobile-portifolio/',
        link_source : 'https://github.com/AlphaNtihinduka/Alpha-Mobile-portifolio'
    }
]
    for(let i = 0; i < popupObj.length; i++) {
        btnPopup[i].addEventListener('click', function() {
            popupContainer.style.display = "block";
           console.log(popupObj[i])
        })
    }
function displayElement() {
    for(let i = 0; i < popupObj.length; i++) {
        newElement.innerHTML = `
            <h3 class="titleDisplay">${popupObj[i].name}</h3>
            <p class="textPopup">${popupObj[i].description}</p>
        `
    }
}