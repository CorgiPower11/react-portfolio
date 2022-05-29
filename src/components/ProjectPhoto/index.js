import React, { useState } from 'react';
// import Modal from '../Modal';

const ProjectPhoto = ({ category }) => {
    const [photos] = useState([
      {
        name: 'Grocery aisle',
        category: 'portfolio',
      },
      {
        name: 'Grocery booth',
        category: 'portfolio',
      },
    ]);
  
    const currentPhotos = photos.filter(photo => photo.category === category);
  
    return (
      <div>
        <div className="flex-row">
          {currentPhotos.map((image, i) => (
            <img
              src={require(`../../assets/small/${category}/${i}.jpg`)}
              alt={image.name}
              className="img-thumbnail mx-1"
              key={image.name}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default ProjectPhoto;