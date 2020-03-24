class Fecha extends Date {
  getAños = () => {
    let a = new Date();
    let years = (this - a) / 31540000000;
    return Math.trunc(years);
  };

  getMeses = () => {
    let a = new Date();
    let mes = (this - a) / 2628000000;
    return Math.trunc(mes);
  };

  getSemanas = () => {
    let a = new Date();
    let semana = (this - a) / 604800000;
    return Math.trunc(semana);
  };

  getDias = () => {
    let a = new Date();
    let dia = (this - a) / 86400000;
    return Math.trunc(dia);
  };

  getFecha = () =>
    `${this.getDate()}/${meses[this.getMonth()]}/${this.getFullYear()}`;

  getDiaFecha = () => `${dias[this.getDate()]}`;
}


const dias = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sabado'
];

const meses = [
  'Ene',
  'Feb',
  'Mar',
  'Abr',
  'May',
  'Jun',
  'Jul',
  'Ago',
  'Sep',
  'Oct',
  'Nov',
  'Dic'
];

export default Fecha;