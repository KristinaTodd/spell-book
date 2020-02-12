import spell from "../Models/Spells.js"
import store from "../store.js"

let _spellApi = axios.create({
  baseURL: "//dnd5eapi.co/api",
  timeout: 3000
})

let _myApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/kristina/spells",
  timeout: 3000
})


class SpellService {
  constructor() {
    console.log("service is working")
    console.log(store.State.spell)
  }

  getAllApiSpells() {
    _spellApi
      .get("/spell")
      .then(res => {
        store.commit("spell", res.data.data.results);
      })
      .catch(error => {
        console.error(error);
      })
  }


}

const SPELLSERVICE = new SpellService();
export default SPELLSERVICE;