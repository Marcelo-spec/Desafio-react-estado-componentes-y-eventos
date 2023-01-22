import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './Button';

function App() {
  const [ButtonStatus, setButtonStatus] = useState(false);
  const evalInputContent = () => {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    if (name.length > 0 && password.length > 0) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    if (name == 'ADL' && password == '252525') {
      alert('Los datos son correctos')
    } else {
      alert('Los datos son incorrectos')
    }
  };
  return (
    <div className="App container w-50">
      <h1 className="text-center">Desafio estado de los componentes y eventos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input type="text" onChange={evalInputContent} id="name" className="form-control" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" onChange={evalInputContent} id="password" className="form-control" />
        </div>
        <div className="mt-2">{ButtonStatus &&
          <Button text="Iniciar sesión" />}
        </div>
      </form>
    </div>
  );
}

export default App;
