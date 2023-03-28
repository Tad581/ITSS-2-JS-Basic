import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSquareCheck } from "@fortawesome/free-solid-svg-icons";

export const Done = ({ task, deleteTodo, toggleComplete }) => {
  return (
    <>
      {task.completed ? (
        <div className="Todo">
          <FontAwesomeIcon
            icon={faSquareCheck}
            onClick={() => toggleComplete(task.id)}
          />
          <p className="completed">{task.task}</p>
          <div>
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
