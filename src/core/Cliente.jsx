export default class Cliente {
  #id
  #nome
  #idade

  constructor(nome, idade, id = null) {
    this.#nome = nome
    this.#idade = idade
    this.#id = id
  }

  static vazio () {
    return new Cliente('', 0)
  }

  get id() {
    return this.#id
  }
  set id(valor) {
    this.#id = valor
  }

  get nome() {
    return this.#nome
  }
  set nome(valor) {
    this.#nome = valor
  }

  get idade() {
    return this.#idade
  }
  set idade(valor) {
    this.#idade = valor
  }
}
