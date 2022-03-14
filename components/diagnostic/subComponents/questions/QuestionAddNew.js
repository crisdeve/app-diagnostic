import { 
  Card,
  Select
} from '@shopify/polaris';
import { useCallback, useState } from 'react';
import { contextDiagnostic } from '../../../../src/stateGlobal/diagnostic/DiagnosticProvider';
import RenderTypeQuestion from './RenderTypeQuestion';

import TypeQuestionSelect from './TypeQuestionSelect';
import BtnAddOptions from './utils/BtnAddOptions';
import InputCustom from './typeQuestion/InputCustom';
import SettingQuestion from './utils/SettingQuestion';
import SettingMultiple from './utils/SettingMultiple';

const QuestionAddNew = () => {

  const { actionCreateQuestion_Fn, handleChangeState_Fn, question, selectSelected } = contextDiagnostic();

  const selectMultiple = selectSelected.includes('Multiple');

  const handleChangeText = (e) => {
    const {name , value} = e.target;
    handleChangeState_Fn(name , value , 'question')
  }

  return (

    <Card >
        <Card.Section title="Add questions" actions={[{content: 'List',onAction:() => actionCreateQuestion_Fn(false)}]} >
        </Card.Section>
        <Card.Section>
          <div className='question-primary'>
            <p>Question</p>
            <div className='input-question'>
              <InputCustom
                nameInput="title"
                valueInput={question.title}
                handle={handleChangeText}
              />
            </div>
          </div>
          
          {/* option type question */}
          <TypeQuestionSelect/> {/* select option type question */}
         {  
          selectMultiple
          && <SettingMultiple/> //* setting selected multiple options */
          }     
        </Card.Section>
        {
          selectMultiple
          && <BtnAddOptions/>  // add more option *
        }
              
        <Card.Section>        
          <RenderTypeQuestion/> {/* load type question */}
        </Card.Section>
          <SettingQuestion/>    {/* setting question */}
        
    </Card>
  )
}

export default QuestionAddNew