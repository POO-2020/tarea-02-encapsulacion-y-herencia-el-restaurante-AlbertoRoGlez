export default class Precio {
  _precio;
  /**
   *
   * @param {number} valor El valor del producto
   */
  constructor(valor) {
    this._valor = valor;
  }

  getPrecio() {
    return this._valor.toLocaleString('en-US', {
      style: 'currency',
      currency: 'MXN'
    });
  }
}
