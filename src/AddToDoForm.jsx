import React from "react";

const AddToDoForm = ({ setListToDo, listToDo }) => {
  const refDescription = React.useRef(null);
  const handleAddToDo = () => {
    setListToDo([
      ...listToDo,
      {
        description: refDescription.current.value,
      },
    ]);
  };
  return (
    <>
      <div>
        <form action="">
          <label htmlFor="" className="block ">
            Add Task
          </label>
          <input
            type="text"
            className="px-2 py-3 rounded-md border border-green-400 w-full text-black outline-none"
            ref={refDescription}
          />
          <button
            className="px2 py-3 rounded-md bg-green-300 text-black font-bold w-full hover:bg-green-400 mt-4"
            type="reset"
            onClick={handleAddToDo}
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddToDoForm;
