async function getImages(query) {
  const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=ml6bRDnz2_FsW11E0KfUf9fJ6_Kw0vR2s9laeDaTvIc`);

  const json = await response.json();
console.log(json);
// return the image
renderImages(json.results);
}

function renderImages(data) {
  // remove old images
  document.getElementById("images").innerHTML = "";

  data.forEach(function (imageObj) {
    const img = document.createElement("img");

    img.src = imageObj.urls.full;
    img.alt = imageObj.alt_description;

    document.getElementById("images").appendChild(img);
  });
}

const form = document.getElementById("searchForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const mySearch = event.target.mySearch.value;
  getImages(mySearch);
});
getImages("Desert")

