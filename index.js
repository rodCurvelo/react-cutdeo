import React from 'react';
import { render } from 'react-dom';

// "Change Hello World" Exercise
// Instructions
// 1) Rename App() function name to Hello() or any name you choose
// 2) Rename "<App />" on the final line to match your new function name.
// 3) Change the "Hello World" string to another message
// 4) Rename 'root' on the final line to anything else.
// 5) Open index.html and change the div id to match the new Id name

function Hello() {
  return (
    <p>"I love turtles"</p>
  )
}

render(<Hello />, document.getElementById('beer'));
