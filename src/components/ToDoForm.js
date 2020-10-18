import React, { useState, useEffect, useRef } from "react";

const ToDoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            className="todo-input edit"
            type="text"
            placeholder="Edit your entry"
            value={input}
            name="text"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button edit">Edit</button>
        </>
      ) : (
        <>
          <input
            className="todo-input"
            type="text"
            placeholder="Add an entry"
            value={input}
            name="text"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">Add</button>
        </>
      )}
    </form>
  );
};

export default ToDoForm;
