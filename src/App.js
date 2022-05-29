import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';

function App() {
  const [categories] = useState([
    {
      name: 'portfolio',
      description: 'My Projects',
    },
    { name: 'Resume', description: 'My resume' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
