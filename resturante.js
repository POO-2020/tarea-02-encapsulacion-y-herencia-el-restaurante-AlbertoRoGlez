import Pedido from './pedido.js';
import Producto from './producto.js';
import Direccion from './direccion.js';

export default class Restaurante {
  _nombre;
  _telefono;
  _dirección;
  _productos;
  _pedidos;
  /**
   * @param {string} nombre
   * @param {number} telefono
   * @param {Direccion} dirección
   */
  constructor(nombre, telefono, dirección) {
    this._nombre = nombre;
    this._telefono = telefono;
    this._dirección = dirección;
    this._productos = new Array();
    this._pedidos = new Array();
  }

  registrarProductos(producto) {
    this._productos.push(producto);
  }

  listarProductos() {
    this._productos.forEach(producto => {
      console.log(`${producto.getDescripcion()}`);
    });
  }

  registrarPedido(pedido) {
    this._pedidos.push(pedido);
  }

  listarPedido() {
    this._pedidos.forEach(pedido => {
      console.log(`${pedido.getDescripcion()}`);
    });
  }
}
