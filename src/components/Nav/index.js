import React from 'react';

const categories = [
    {
      name: "Portfolio",
      description:
        "Links to my GitHub Projects",
    },
    { name: "Resume", description: "My Resume" }
  ];

function Nav() {
    function categorySelected() {
        console.log("hello")
      }
      
  return (
    <header>
  <h2>CorgiPower11
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About Me
        </a>
      </li>
      <li>
        <span>Contact</span>
      </li>
      {categories.map((category) => (
        <li
          className="mx-1"
          key={category.name}
        >
          <span onClick={ categorySelected }>
            {category.name}
          </span>
        </li>
      ))}
    </ul>
  </nav>
</header>
  );
}

export default Nav;