import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';
import 'tailwindcss/tailwind.css';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  
  const [name, setName] = useState('');
  const [visitorId, setVisitorId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const nameRef = useRef();
  const visitorIdRef = useRef();
  const phoneNumberRef = useRef();
  const emailRef = useRef();

  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo() {
    const newName = nameRef.current.value;
    const newVisitorId = visitorIdRef.current.value;
    const newPhoneNumber = phoneNumberRef.current.value;
    const newEmail = emailRef.current.value;
  
    if (newName === '' || newVisitorId === '' || newPhoneNumber === '' || newEmail === '') return;
  
    const newTodo = {
      id: uuidv4(),
      name: newName,
      visitorId: newVisitorId,
      phoneNumber: newPhoneNumber,
      email: newEmail,
      complete: false
    };
  
    setTodos(prevTodos => [...prevTodos, newTodo]);
  
    // Clear the input fields
    nameRef.current.value = '';
    visitorIdRef.current.value = '';
    phoneNumberRef.current.value = '';
    emailRef.current.value = '';
  }
  function handleClearTodos(){
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }



  function handleAddTodo2() {
    const newTodo = {
      id: uuidv4(),
      name: name,
      visitorId: visitorId,
      phoneNumber: phoneNumber,
      email: email,
      complete: false
    };
    setTodos(prevTodos => [...prevTodos, newTodo]);
    setName('');
    setVisitorId('');
    setPhoneNumber('');
    setEmail('');
  }

  function handlecleartodos2() {
    setTodos([]);
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input
        ref={nameRef}
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        ref={visitorIdRef}
        type="text"
        value={visitorId}
        onChange={e => setVisitorId(e.target.value)}
        placeholder="Visitor ID"
      />
      <input
        ref={phoneNumberRef}
        type="text"
        value={phoneNumber}
        onChange={e => setPhoneNumber(e.target.value)}
        placeholder="Phone Number"
        />
        <input
        ref={emailRef}
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        />
        <button onClick={handleAddTodo2}>Add Item</button>
        <button onClick={handlecleartodos2}>Clear List</button>
        </>
        );
        }
        export default App;