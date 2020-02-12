export default class Spell {
  constructor(data) {
    this.name = data.name;
    this.description = data.description;
    this.level = data.level;
    this.range = data.range;
    this.components = data.components;
  }

  getButton() {
    if (this.name) {
      return `<button class="btn btn-secondary" onclick="app.spellController.removeSpell()">REMOVE</button>`
    } else {
      return `<button class="btn btn-info" onclick="app.spellController.addSpell()">Add to Book</button>`
    }
  }
  get spellTemplate() {
    return `
          <h4>${this.name}</h4>
          <p><b>Level: ${this.level}</b></p>
          <p><b>Description:</b> ${this.description}</p>
          <p><b>Components:</b> ${this.components}</p>
          <p>Range: ${this.range}</p>
          ${this.getButton()}
    `
  }

  get allSpellTemplate() {
    return `
    <li><i class="fas fa-magic list-wand"></i>${this.name}</li>
    `
  }

  get mySpellTemplate() {
    return `
    <li><i class="fas fa-magic list-wand"></i>${this.name}</li>
    `
  }
}