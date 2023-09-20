import React from 'react';

function App() {
  const [form, setForm] = React.useState({
    username: '',
    email: '',
  });
  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange({ target }) {
    const { id, value } = target;
    console.log(id);
    setForm({ ...form, [id]: value });
  }

  return (
    <>
      <p>{form.username}</p>
      <p>{form.email}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="username"
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </form>
      <button>Enviar</button>
    </>
  );
}

export default App;
