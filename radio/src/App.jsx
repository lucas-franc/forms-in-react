import React from 'react';

function App() {
  const [product, setProduct] = React.useState('');

  function handleChange({ target }) {
    setProduct(target.value);
  }
  return (
    <form>
      <label>
        <input
          type="radio"
          value="notebook"
          checked={product === 'notebook'}
          onChange={handleChange}
        />
        Notebook
      </label>
      <label>
        <input
          type="radio"
          value="smartphone"
          checked={product === 'smartphone'}
          onChange={handleChange}
        />
        Smartphone
      </label>
    </form>
  );
}

export default App;
