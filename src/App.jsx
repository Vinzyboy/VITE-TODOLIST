import React from "react";
import AddToDoForm from "./AddToDoForm";
import ListToDo from "./ListToDo";

const App = () => {
  const [listToDo, setListToDo] = React.useState([]);
  console.log(listToDo);
  return (
    <section className="min-h-screen bg-green-950 flex justify-center items-center text-white">
      <div className="max-w-[500px] w-full bg-green-700 rounded-md  p-4">
        <h5 className="text-center mb-5 text-4xl font-semibold">To Do List</h5>
        <AddToDoForm setListToDo={setListToDo} listToDo={listToDo} />

        <ListToDo listToDo={listToDo} />
      </div>
    </section>
  );
};

export default App;
