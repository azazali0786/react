import { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  let myObj={
    username: "Chaman",
    age: 52
  }
  let newArr = [1,2,3];
  return (
    <>
      <Card username="Chameli" url = "https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"btnText="click me"/>
      <Card username="Champa" url = "https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    </>
  );
}

export default App;