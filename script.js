function getKittenByAxios() {
  return axios
    .get("https://api.thecatapi.com/v1/images/search")
    .then((response) => {
      if (
        !response.data ||
        !Array.isArray(response.data) ||
        response.data.length === 0 ||
        !response.data[0].url
      ) {
        throw new Error("Niepoprawna odpowiedź API");
      }

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
