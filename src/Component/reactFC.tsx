import React from "react";
type T = number;
const ReactFunction: React.FC<T> = (interger) => {
  // Hãy thay thế PropsType bằng kiểu dữ liệu của props của bạn

  return (
    <div>
      <h1>{interger}</h1>
    </div>
  );
};

export default ReactFunction;
