"use client";
import React, { useState } from 'react'

import Header from './components/Header';

const App = () => {
  const[user,setUser]= useState("Atharva");
  return (
    <div>
     <Header user={user} />
     {user}

      <p className="tt">dildo</p>
    </div>
  )
}

export default App

