import React from 'react';

const App = () => {
  const [colors, setColors] = React.useState(['vermelho']);

  function handleChange({ target }) {
    if (target.checked) {
      setColors([...colors, target.value]);
    } else {
      setColors(colors.filter((cor) => cor !== target.value));
    }
  }

  function checkColor(color) {
    return colors.includes(color);
  }
  return (
    <form>
      <label>
        <input
          type="checkbox"
          value="azul"
          checked={checkColor('azul')}
          onChange={handleChange}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="amarelo"
          checked={checkColor('amarelo')}
          onChange={handleChange}
        />
        Amarelo
      </label>
      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={checkColor('vermelho')}
          onChange={handleChange}
        />
        Vermelho
      </label>
    </form>
  );
};

export default App;
