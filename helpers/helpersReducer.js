
import image from '../public/imagePrev.png'

/* get key and value for type question selected */
export const getKey_Value_ChoiceSelected = (selectSelected) => {

  let keyChoice = 'placeholder';
  let valueChoice = 'placeholder';

  if(selectSelected === 'image'){
    keyChoice = 'image';
    valueChoice = image.src;
  }

  if(selectSelected === 'color') {
    keyChoice = 'color';
    valueChoice = '#000000';
  }

  return {
    keyChoice,
    valueChoice
  }
}