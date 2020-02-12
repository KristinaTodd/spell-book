import SpellService from "../Services/SpellsService.js"
import store from "../store.js"

function _draw() {
  let spell = store.State.spell;
  let template = ""

  spell.forEach(s => {
    template += `<li><i class="fas fa-magic list-wand"></i>${p.name}</li>`
  })
  document.getElementById("available-spell").innerHTML = template
}




export default class SpellsController {
  constructor() {
    console.log("controller is working")
    store.subscribe("spell", _draw)
    // store.subscribe("spells", _drawActiveSpell)
    // store.subscribe("spells", _drawMySpell)

    SpellService.getAllApiSpells()
    // SpellService.getMyApiSpells()
  }


}