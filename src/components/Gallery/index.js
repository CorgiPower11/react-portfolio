import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import ProjectPhoto from '../ProjectPhoto';


function Gallery(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <ProjectPhoto category={currentCategory.name} />
    </section>
  );
}
export default Gallery;