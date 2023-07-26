import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  handleClick = (type) => {
    switch (type) {
      case 'info':
        console.info('Esto es un mensaje de información.');
        break;
      case 'warning':
        console.warn('Esto es un mensaje de advertencia.');
        break;
      case 'error':
        console.error('Esto es un mensaje de error.');
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="container mt-5">

        <div className="row">
          <h1 className="display-4 center">Logging Node.js</h1>
        </div>

        <div className="row">
          <button
            className="btn btn-info mr-2" // Clase de Bootstrap para botón azul
            onClick={() => this.handleClick('info')}
          >
            Info
          </button>
        </div>
        <div className="row">
          <button
            className="btn btn-warning mr-2" // Clase de Bootstrap para botón amarillo
            onClick={() => this.handleClick('warning')}
          >
            Warning
          </button>
        </div>
        <div className="row">
          <button
            className="btn btn-danger" // Clase de Bootstrap para botón rojo
            onClick={() => this.handleClick('error')}
          >
            Error
          </button>
        </div>
      </div>
    );
  }
}

export default App;
