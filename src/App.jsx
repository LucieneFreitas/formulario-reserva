import './App.css'
import { useState } from 'react'


function App() { 
  const [form, setForm] = useState({
    cliente: '',
    dia: '',
    horario: '',
    wifi: false,
    churrasqueira: false,
    piscina: false,
    obs: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Aqui você pode adicionar a lógica para enviar o formulário
  };

  return (
    
    <div>
      <img src="./assets/restaurante.jpg" alt="" />
    <h2 className="text-center mt-5">Reserva</h2>
    <form onSubmit={handleSubmit} className="p-5">
      <div className="mb-3">
        <label htmlFor="nome" className="fw-bold form-label">Nome Completo</label>
        <input onChange={handleChange} name="cliente" type="text" className="form-control" id="nome" placeholder="Digite aqui" required />
      </div>
      <div className="mb-3">
        <label htmlFor="select" className="fw-bold form-label">Dia da Reserva</label>
        <select onChange={handleChange} name="dia" id="select" className="form-select" required>
          <option value="">Selecione o dia</option>
          <option value="segunda">Segunda</option>
          <option value="terca">Terça</option>
          <option value="quarta">Quarta</option>
          <option value="quinta">Quinta</option>
          <option value="sexta">Sexta</option>
          <option value="sabado">Sábado</option>
          <option value="domingo">Domingo</option>
        </select>
      </div>
      <div className="mb-3">
        <p className="fw-bold">Horário</p>
        <div className="form-check">
          <input onChange={handleChange}className="form-check-input" type="radio" name="horario" value="Manhã" id="flexRadioDefault1" required />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Manhã
          </label>
        </div>
        <div className="form-check">
          <input onChange={handleChange}className="form-check-input" type="radio" name="horario" value="Tarde" id="flexRadioDefault2" required />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Tarde
          </label>
        </div>
        <div className="form-check">
          <input onChange={handleChange}className="form-check-input" type="radio" name="horario" value="Noite" id="flexRadioDefault2" required />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Noite
          </label>
        </div>
      </div>
      <div className="mb-3">
        <p className="fw-bold">Adicionais</p>
        <div className="form-check">
          <input onChange={handleChange} name="wifi" className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Wifi
          </label>
        </div>
        <div className="form-check">
          <input onChange={handleChange}name="churrasqueira" className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Churrasqueira
          </label>
        </div>
        <div className="form-check">
          <input onChange='' name="piscina" className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Piscina
          </label>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="fw-bold form-label">Observações</label>
        <textarea onChange={handleChange} name="obs" placeholder="Deixe sua mensagem" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <input type="submit" value="FAZER RESERVA" className="btn btn-primary" />
    </form>
  </div>
  
  )
}

export default App
