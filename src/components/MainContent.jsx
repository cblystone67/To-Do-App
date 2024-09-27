/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import ChecklistItem from "./ChecklistItem";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const MainContent = () => {
  const [checked, setChecked] = useState([]); // State to manage todo items
  const [inputValue, setInputValue] = useState(""); // State for input field
  const [editInputValue, setEditInputValue] = useState(""); // State for edit input field
  const [isEditClicked, setIsEditClicked] = useState(false); // State to track if an item is being edited
  const [editItemId, setEditItemId] = useState(null); // State to track which item is being edited

  // Fetch all todos from the backend when the component mounts
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          "https://todo-app-backend-0iqe.onrender.com/todos"
        ); // Adjust backend URL accordingly
        const data = await response.json();
        setChecked(data.todos); // Update state with fetched todos
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };
    fetchTodos();
  }, []); // Empty dependency array means this will run once when the component mounts

  // Handle checkbox toggle
  const handleUserClick = (id) => {
    setChecked((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Handle adding a new item (Switch this logic to make a POST call to your backend)
  const handleAddItem = async () => {
    if (!inputValue.trim()) return; // Prevent empty inputs
    const newItem = {
      id: checked.length + 1,
      text: inputValue,
      completed: false,
    };

    try {
      const response = await fetch(
        "https://todo-app-backend-0iqe.onrender.com/add-item",
        {
          method: "POST",
          headers: { "Content-Type": "application.json" },
          body: JSON.stringify(newItem),
        }
      ); // Adjust backend URL accordingly
      const createdItem = await response.json();
      setChecked([...checked, createdItem]); // Update state with fetched todos
    } catch (error) {
      console.error("Failed to fetch todos:", error);
    }
    setInputValue(""); // Clear input field after adding
  };

  // Handle editing an item (Switch this logic to make a POST call to update an item on your backend)
  const handleEdit = async (id) => {
    let newItem = [...checked].find((item) => item.id === id);
    newItem.text === editInputValue;
    try {
      await fetch(
        `https://todo-app-backend-0iqe.onrender.com/edit-item/${id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application.json" },
          body: JSON.stringify(newItem),
        }
      ); // Adjust backend URL accordingly
      const updatedTodo = await response.json();
      setChecked((prev) =>
        prev.map(
          (item) => (item.id === id ? updatedTodo : item) // Update the state with the modified todo
        )
      );
    } catch (error) {
      console.error("Failed to fetch todos:", error);
    }
    setIsEditClicked(false); // Close edit mode after editing
  };

  // Handle deleting an item (Switch this logic to make a DELETE call to your backend)
  const handleDelete = async (id) => {
    setChecked((prev) => prev.filter((item) => item.id !== id));
    try {
      await fetch(
        `https://todo-app-backend-0iqe.onrender.com/delete-item/${id}`,
        {
          method: "DELETE",
        }
      ); // Adjust backend URL accordingly
      //const data = await response.json();
      //setChecked(data.todos); // Update state with fetched todos
    } catch (error) {
      console.error("Failed to fetch todos:", error);
    }
  };

  // Map through todo items to render them
  const mappingToDoList = checked.map((item) => (
    <ChecklistItem
      key={item.id}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      handleUserClick={() => handleUserClick(item.id)}
      {...item}
      isEditClicked={isEditClicked}
      setIsEditClicked={setIsEditClicked}
      editInputValue={editInputValue}
      setEditInputValue={setEditInputValue}
      editItemId={editItemId}
      setEditItemId={setEditItemId}
    />
  ));

  return (
    <>
      {/* Input field for adding new tasks */}
      <TextField
        type="text"
        value={inputValue}
        name="addToDo"
        onChange={(e) => setInputValue(e.target.value)}
        variant="filled"
        placeholder="Add new task"
      />
      <Button onClick={handleAddItem} variant="contained" sx={{ mt: 2 }}>
        + Add
      </Button>
      {/* Render the list of todo items */}
      {mappingToDoList}
    </>
  );
};

export default MainContent;
