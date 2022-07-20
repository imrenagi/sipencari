function telusuri(e) {
  e.preventDefault();

  const kataKunci = document.querySelector("#katakunci");
  const panelhasil = document.querySelector("#hasil");
  const panelhasilinner = document.querySelector("#hasil-inner");
  const source = fetch("/list-of-website.json").then((res) => res.json());
  const blokirSource = fetch("/list-of-blocked-sites.json").then((res) => res.json());

  Promise.all([source, blokirSource])
    .then((res) => {
      const res1 = res[0];
      const res2 = res[1];

      panelhasil.style = "display: none";
      panelhasilinner.innerHTML = null;

      if (kataKunci.value) {
        const hasil = res1.websites.filter(
          (item) =>
            item.url.includes(kataKunci.value) ||
            item.description.includes(kataKunci.value)
        );
        const hasilBlokir = res2.websites.filter(
          (item) =>
            item.url.includes(kataKunci.value) ||
            item.description.includes(kataKunci.value)
        );

        if (hasilBlokir.length > 0) {
          panelhasil.style = "display: block";
          panelhasilinner.innerHTML = `<div class="text-danger">Situs atau kata kunci ini <b>DIBLOKIR!</b>.</div>`;
          return;
        }

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
}

(function main() {
  const form = document.querySelector("#formpencarian");

  form.addEventListener('submit', telusuri);
})();
