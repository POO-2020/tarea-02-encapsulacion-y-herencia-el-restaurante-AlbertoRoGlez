import Producto from './producto.js';
import Precio from './precio.js';

export default class ElementoPedido {
  _cantidad;
  _producto;
  _valor;
  _precio;
  /**
   *
   * @param {Producto} producto Producto que se va a comprar
   * @param {number} cantidad Cantidad del producto que se va a comprar
   */
  constructor(cantidad, producto) {
    this._cantidad = cantidad;
    this._producto = producto;
  }
  getCantidad = () => this._cantidad;
  getDescripcion = () => {
    let { getNombre } = this._producto;
    return `${this._cantidad} x ${getNombre()} $${this.getTotal()}`;
  };
  getTotal = () => this._producto.getPrecio() * this._cantidad;
}
