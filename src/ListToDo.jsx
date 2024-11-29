import React from "react";

const ListToDo = ({ listToDo }) => {
  return (
    <>
      <div className="list-todo mt-5  min-h-[calc(100vh-1200px)]">
        <h5 className="text-center mb-5">List of To do</h5>
        <ul className="px-10 max-h-[20vh] overflow-scroll overflow-x-hidden">
          {listToDo >= 0 ? (
            <h3 className="text-center"></h3>
          ) : (
            listToDo.map((item, key) => (
              <li
                className="p-2 border-b border-white mb-1 text-center"
                key={key}
              >
                {item.description}
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
};

export default ListToDo;
