class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <p>
        &copy; Copyright 2023 Voila.
      </p>
      `;
  }
}

customElements.define('app-footer', AppFooter);
