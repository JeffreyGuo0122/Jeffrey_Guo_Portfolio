const contentGridElement = document.getElementById('contentGrid');

const jsonDatabase = [
  {
    "title": "Home Sweet Home",
    "picture_url": "https://i.imghippo.com/files/BLUl5570lz.jpg",
    "favorite_color": "#154c79",
    "elements": ["peg board", "bed", "shelf"]
  },
  {
    "title": "Boat in the Sky",
    "picture_url": "https://i.imghippo.com/files/eb9760iLo.jpg",
    "favorite_color": "#154c79",
    "elements": ["powerplant", "Red hook", "NYC Subway"]
  },
  {
    "title": "1998 Ford Chinook",
    "picture_url": "https://i.imghippo.com/files/auG5029Ab.jpg",
    "favorite_color": "#154c79",
    "elements": ["Wall", "Bed", "Sink"]
  }
];

// Create each item in the database
jsonDatabase.forEach((item) => {
  createElementProper(item);
});

// Function to build the HTML structure for an item
function createElementProper(data) {
  const contentItem = document.createElement('div');
  contentItem.classList.add('contentItem');
  contentItem.style.backgroundColor = data.favorite_color;

  const title = document.createElement('h3');
  title.innerText = data.title;
  contentItem.appendChild(title);

  const elementHeader = document.createElement('h4');
  elementHeader.innerText = "Elements:";
  contentItem.appendChild(elementHeader);

  const elementList = document.createElement('ul');
  data. elements.forEach((element) => {
    const elementItem = document.createElement('li');
    elementItem.innerText = element;
    elementList.appendChild(elementItem);
  });
  contentItem.appendChild(elementList);

  const image = document.createElement('img');
  image.classList.add('footerImage');
  image.src = data.picture_url;
  contentItem.appendChild(image);

  contentGridElement.appendChild(contentItem);
}
