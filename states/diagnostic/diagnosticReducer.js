import {  getKey_Value_ChoiceSelected } from '../../helpers/helpersReducer';
import { uid } from 'uid';


const diagnosticReducer = (state , action) => {
  
  switch (action.type) {

    case 'HANDLE_TEXT_CHANGE':
      const { name , value, stateCurrent } = action.payload;
      return {
        ...state,
        [stateCurrent] : {...state[stateCurrent], [name] : value }
      }

    case 'CHANGE_SELECTED_TAB':
      return {
        ...state,
        selectedTab: action.payload
      }

    case 'CHANGE_STATUS_CREATE_QUESTION':
      return {
        ...state,
        createQuestion: action.payload
      }

    case 'CHANGE_TYPE_QUESTION_SELECTED': {
      
      const {keyChoice} = getKey_Value_ChoiceSelected(action.payload);
      const typeSelected = action.payload.split('_')[1];

      return {
        ...state,
        selectSelected: action.payload,
        keyChoiceTypeSelected: keyChoice,
        question: {...state.question, type : typeSelected}
      }
    }
      

    case 'ADD_OPTION_QUESTION': {
      const {keyChoice, valueChoice} = getKey_Value_ChoiceSelected(state.selectSelected);
     
      return {
        ...state,
        question: {...state.question , choices: [ ...state.question.choices,{id: uid(), label: valueChoice, [keyChoice]: valueChoice}]}
      }
    }

    case 'RESTAR_STATE_TYPE_QUESTION': {
      /* restar state question.type onchange type selected */
      /* state update -> 
        question {
          type: [reinitialize option added]
      } */
      const {keyChoice, valueChoice} = getKey_Value_ChoiceSelected(state.selectSelected);

      return {
        ...state,
        question: {...state.question , choices: [{id: uid(), label: valueChoice,[keyChoice]: valueChoice }]}
      }
    }

      case 'CHANGE_OPTION_QUESTION_LIST': {
        /* update option added for question  */
        /* state update -> 
          question {
            type: [update]
        } */

        const { name , value, id } = action.payload;
        return {
          ...state,
          question: {...state.question ,  choices : state.question.choices.map( elemen => elemen.id ===  id  ?  {...elemen , label: value, [name] : value} : elemen)}
        }
      }


      case 'CHANGE_STATE_LABEL_EDITABLE': {
        const {name, textContext, id} = action.payload;
    
        return {
          ...state,
          question: {...state.question ,  choices : state.question.choices.map( elemen => elemen.id ===  id ?  {...elemen , [name]: textContext} : elemen)}
        }
      }

      case 'DELETE_STATE_OPTION_QUESTION': {
        return {
          ...state,
          question: {...state.question, choices: state.question.choices.filter(e => e.id !== action.payload)}
        }
      }
      
      default:
        return state;
  }
}

export default diagnosticReducer

