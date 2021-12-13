import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disable } = props;
  return (
    <div className="input-area">
      <input
        disable={disable}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
