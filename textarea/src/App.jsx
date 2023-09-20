import React from 'react';

function App() {
  const [text, setText] = React.useState();
  return (
    <>
      <p>{text}</p>
      <textarea
        name=""
        value={text}
        onChange={({ target }) => setText(target.value)}
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </>
  );
}

export default App;
