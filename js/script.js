function telusuri(e) {
  e.preventDefault();

  const kataKunci = document.querySelector("#katakunci");
  const panelhasil = document.querySelector("#hasil");
  const panelhasilinner = document.querySelector("#hasil-inner");
  const source = fetch("/list-of-website.json");

  source.then((res) => {
    res.json().then((data) => {
      panelhasil.style = "display: none";
      panelhasilinner.innerHTML = null;

      if (kataKunci.value) {
        const hasil = data.websites.filter(
          (item) =>
            item.url.includes(kataKunci.value) ||
            item.description.includes(kataKunci.value)
        );

        if (hasil.length > 0) {
          panelhasil.style = "display: block";

          hasil.forEach((item) => {
            panelhasilinner.innerHTML += `<div>
              <div>${item.url}</div>
              <div>${item.description}</div>
            </div>`;
          });
        } else {
          panelhasil.style = "display: block";
          panelhasilinner.innerHTML = `<div>Tidak ada hasil pencarian.</div>`;
        }
      } else {
        panelhasil.style = "display: block";
        panelhasilinner.innerHTML = `<div>Tidak ada hasil pencarian.</div>`;
      }
    });
  });
}

function handleFeelingLucky() {
  console.log('Mimicking a click on the "Feeling Lucky" button except it does nothing, just like your average government website buttons.');
}

(function main() {
  const form = document.querySelector("#formpencarian");
  const feelingLucky = document.querySelector("#feelinglucky");
  
  form.addEventListener('submit', telusuri);
  feelingLucky.addEventListener('click', handleFeelingLucky);
})();
