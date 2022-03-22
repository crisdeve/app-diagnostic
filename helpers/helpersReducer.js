
/* get key and value for type question selected */
export const getKey_Value_ChoiceSelected = (selectSelected) => {

  let keyChoice = 'placeholder';
  let valueChoice = 'placeholder';

  if(selectSelected === 'Multiple_image'){
    keyChoice = 'image';
    valueChoice = '/static/imagePrev.png';
  }

  if(selectSelected === 'Multiple_color') {
    keyChoice = 'color';
    valueChoice = '#000000';
  }

  return {
    keyChoice,
    valueChoice
  }
}