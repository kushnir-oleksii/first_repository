import React, { useState, useEffect, useMemo } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
function App() {
  const [coffe, setCoffe] = useLocalStorage("coffe", 0);
  const [sugar, setSugar] = useLocalStorage("sugar", 0);
  const [tooMuch, setTooMuch] = useState(false);
  const [countValue, setCountValue] = useState(1);

  const longCount = useMemo(() => {
    let i = 0;
    while (i < countValue) i++;
    return true;
  }, [countValue]);

  const addCoffe = () => {
    if (longCount) {
      setCoffe(coffe + 1);
    }
    setCountValue(1);
  };

  const addSugar = () => {
    if (longCount) {
      tooMuch ? false : setSugar(sugar + 1);
    }
    setCountValue(1);
  };

  const save = () => {
    localStorage.setItem("coffe", coffe);
    localStorage.setItem("sugar", sugar);
  };
  const clear = () => {
    localStorage.removeItem("coffe");
    localStorage.removeItem("sugar");
    setCoffe(0);
    setSugar(0);
  };
  // useEffect(() => {
  //   if (localStorage.getItem("coffe")) {
  //     setCoffe(+localStorage.getItem("coffe"));
  //     setSugar(+localStorage.getItem("sugar"));
  //   }
  // }, []);
  useEffect(() => {
    setTooMuch(sugar >= 5);
  }, [sugar]);
  return (
    <div className="wrapper">
      <div className="list">
        <h1>Product list</h1>
        <div className="product">
          <span>{`Coffe: ${coffe}`}</span>
          <button onClick={addCoffe}>Add</button>
        </div>
        <div className="product">
          <span>{`Sugar: ${sugar}`}</span>
          <button onClick={addSugar}>Add</button>
        </div>
        <div className="save">
          <button onClick={save}>Save</button>
          <button onClick={clear}>Clear</button>
        </div>
      </div>
    </div>
  );
}
export default App;
// import React, { useState } from "react";

// function App() {
//   const [products, setProducts] = useState({ coffe: 0, sugar: 0 });
//   const addCoffe = () =>
//     setProducts((prevState) => {
//       return {
//         ...prevState,
//         coffe: prevState.coffe + 1,
//       };
//     });
//   const addShugar = () =>
//     setProducts((prevState) => {
//       return {
//         ...prevState,
//         sugar: prevState.sugar + 1,
//       };
//     });

//   return (
//     <div className="wrapper">
//       <div className="list">
//         <h1>Product list</h1>
//         <div className="product">
//           <span>{`Coffe: ${products.coffe}`}</span>
//           <button onClick={addCoffe}>Add</button>
//         </div>
//         <div className="product">
//           <span>{`Sugar: ${products.sugar}`}</span>
//           <button onClick={addShugar}>Add</button>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default App;
