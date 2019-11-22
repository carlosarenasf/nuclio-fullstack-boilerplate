import React, {useEffect, useState} from 'react';

function Index(props) {
  //Example: hola estudiar react mola mucho / Hola Estudiar React Mola Mucho
  const capitelize = input => {
    return input.split(" ").map(w => w.charAt(0).toUpperCase() + w.substring(1)).reduce((acc, curr) => `${acc} ${curr}`);
  };

  //Example: hola estudiar react mola mucho / HOLA estudiar REACT mola MUCHO
  const swapCase = input => {
    const result = input;
    //Code here
    return result;
  };

  //Example: hola estudiar react mola mucho / {h: 2, o: 3, l: 2, a: 4, " ": 4, …}
  const countLetters = input => {
    //Code here
  };

  useEffect(() => {
    const test = "hola estudiar react mola mucho";
    console.log(capitelize(test));
    console.log(swapCase(test));
    console.log(countLetters(test));
  }, []);

  return (
    <div>
      <h1>Examples</h1>
    </div>
  );
}

export default Index;