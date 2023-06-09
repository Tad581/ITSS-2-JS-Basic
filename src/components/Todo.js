import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <>
      {!task.completed ? (
        <div className="Todo">
          <FontAwesomeIcon
            icon={faSquare}
            onClick={() => toggleComplete(task.id)}
          />
          {task.task}
          <div>
            <FontAwesomeIcon
              icon={faPenToSquare}
              onClick={() => editTodo(task.id)}
            />
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => deleteTodo(task.id)}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
