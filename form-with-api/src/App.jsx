import React from 'react';

const formField = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'CEP',
    type: 'text',
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'Número',
    type: 'text',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  },
];

function App() {
  const [form, setForm] = React.useState(
    formField.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: '',
      };
    }, {}),
  );
  const [response, setResponse] = React.useState(null);

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {formField.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id}>{field.label}</label>
            <input
              id={field.id}
              type={field.type}
              name={field.id}
              value={form[field.id]}
              onChange={handleChange}
            />
          </div>
        ))}
        {response && response.ok && <p>Formulário Enviado...</p>}
        <button>Enviar</button>
      </form>
    </>
  );
}

export default App;
