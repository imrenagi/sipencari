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
            panelhasilinner.innerHTML += `<li class="my-4 no-bullets">
            <a href="${item.url}">${item.description}</a>
            </li>`;
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

(function main() {
  const form = document.querySelector("#formpencarian");

  form.addEventListener('submit', telusuri);
})();
