export default class Card {
  constructor({ title, body, color = '#ffffff' }) {
    this.title = title;
    this.body = body;
    this.color = color;
    this.element = this.getElement();
  }

  getElement() {
    const div = document.createElement('div');
    div.style.width = '100%';
    div.style.padding = '15px';
    div.style.backgroundColor = this.color;
    div.style.border = '1px solid rgba(0, 0, 0, 0.2)';
    div.style.fontFamily = 'Arial, Helvetica, sans-serif';

    div.innerHTML = `
      <div
        style="margin-bottom:15px; font-size:1.5rem; font-weight: 700"
      >
        ${this.title}
      </div>
      <div style="font-size:1rem, margin-bottom:15px">${this.body}</div>
    `;

    return div;
  }
}
