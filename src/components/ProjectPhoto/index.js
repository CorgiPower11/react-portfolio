import React, { useState } from 'react';
import Modal from '../Modal';

const ProjectPhoto = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

    const [photos] = useState([
      {
        name: 'Horiseon',
        category: 'portfolio',
      },
      {
        name: 'Password Generator',
        category: 'portfolio',
      },
      {
        name: 'Kathy Portfolio',
        category: 'portfolio',
      },{
        name: 'Run Buddy',
        category: 'portfolio',
      },
    ]);
  
  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

    return (
      <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
        <div className="flex-row">
          {currentPhotos.map((image, i) => (
            <img
              src={require(`../../assets/small/${category}/${i}.jpg`)}
              alt={image.name}
              className="img-thumbnail mx-1"
              onClick={() => toggleModal(image, i)}
              key={image.name}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default ProjectPhoto;