class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
        <img src="./images/heros/hero-image_2.jpg"
            alt="Gambar macam-macam makanan">
        <div class="inner">
            <h1 class="title">Voila</h1>
            <p class="subtitle">
                Jelajahi Pengalaman Rasa Terbaik di Sekitarmu
            </p>
        </div>
      </div>
      `;
  }
}

customElements.define('app-hero', AppHero);
