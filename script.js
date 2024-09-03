document
  .getElementById("getKitten")
  .addEventListener("click", getKittenByAxios);

function getKittenByAxios() {
  axios
    .get("https://api.thecatapi.com/v1/images/search")
    .then((response) => {
      const kittenImageUrl = response.data[0].url;

      const img = document.createElement("img");
      img.src = kittenImageUrl;
      img.alt = "Obrazek kota";

      const kittenContainer = document.getElementById("kittenContainer");
      kittenContainer.innerHTML = "";

      kittenContainer.appendChild(img);
    })
    .catch((error) => {
      console.error("Błąd podczas pobierania kota:", error);
    });
}
