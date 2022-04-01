import React, { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query';
import { contextDiagnostic } from '../../states/diagnostic/DiagnosticProvider'

import InputCustom from '../Input/InputCustom';
import Message from '../Message/Message';
import MessageConfirm from '../Message/MessageConfirm';
import OptionDelete from '../OptionDelete/OptionDelete';
import OptionItem from '../OptionItem/OptionItem';
import { UploadSvg } from '../Svgs/SvgFiles';
import InputTextarea from '../Textarea/InputTextarea';


const OptionList = () => {

  const {
    question: {choices, type},
    question, 
    selectSelected,
    handleChangeStateSecondKey_Fn, 
    changeStateLabelEditable_Fn,
    deleteStateOption_Fn
  } = contextDiagnostic();

  const [showconfirm, setShowconfirm] = useState({status:false, id:0}) 

  const typeField = type;

  const handleChangeText = (e) => {
    let {name , value, type} = e.target;
   
    if(type === 'file'){
      value = URL.createObjectURL(e.target.files[0]);
    }  

    let id = e.target.dataset.id; 
    /* params : (nameInput, valueInput, objecState, subObjectState  */
    handleChangeStateSecondKey_Fn(name , value , id,'question', 'type')
  }

  const handleTagEditable = (e) => {
    const {textContent} = e.target;

    let id = e.target.dataset.id; 
    let name='label';

    changeStateLabelEditable_Fn(name, textContent, id );
  }


  /* Deleted Options question server */

  const queryClient = useQueryClient();

  const {mutate, isError, isLoading, isSuccess} = 
    useMutation(deleteStateOption_Fn,{
      onSuccess: (list) => {
        setShowconfirm({status:false, id:0});
        queryClient.invalidateQueries(["getlistquestion"])
      },
      onError: (rs) => {
        setShowconfirm({status:false, id:0});
      }
    });

  const deleteValidate = (id_option) => {  
    setShowconfirm({status:true, id:id_option});
  }

  const deletedConfirmQuestion = () => {
    mutate(showconfirm.id);
    //setShowconfirm({status:false, id:0});
  }

  console.log("question:", question);
  console.log("delete", {isLoading, isSuccess, isError});
  /* Deleted Options question server */

  return (
    <>
        {(selectSelected === 'text' || 
          selectSelected === 'number' || 
          selectSelected === 'email')&& 
          
            choices.map((element) => 
              ( 
                <div key={element.id}>                
                      <InputCustom      
                        dataId={element.id}
                        labelText='Placeholders'  
                        typeInput={typeField} 
                        nameInput="placeholder"
                        handle={handleChangeText}
                        valueInput={element.placeholder}            
                      />          
                </div>  
              )              
            )
        }
    

        {(selectSelected === 'choice') &&
          
            choices.map((element) => 
              (      
                <div key={element.id}>
                  <OptionDelete 
                    actionDelete={() => deleteValidate(element.id)}
                    loadingState={isLoading}
                    resetState={showconfirm}
                    >                   
                    <InputCustom      
                      dataId={element.id} 
                      typeInput="text"
                      nameInput="placeholder"
                      handle={handleChangeText}
                      valueInput={element.placeholder}
                      wInput='85%'
                    />
                  </OptionDelete> 
                </div>     
              )    
            )    
        }
    

        {(selectSelected === 'image') &&
          
            choices.map((element) => 
              (      
                <div key={element.id}>
                  <OptionDelete 
                    actionDelete={() => deleteValidate(element.id)}
                    loadingState={isLoading}
                    resetState={showconfirm}
                    >    
                    <OptionItem 
                      urlImg={element.image} 
                      iconSvg={<UploadSvg/>}
                      dataId={element.id} 
                      handleTagEditable={handleTagEditable}
                      textLabel={element.label} 
                    >                     
                        <InputCustom 
                          dataId={element.id} 
                          typeInput="file"
                          nameInput={typeField}
                          handle={handleChangeText}
                          valueInput={element.image}
                          hideValue={true}            
                      />
                    </OptionItem>  
                  </OptionDelete> 
                </div>  
              )    
            )
        }


        {(selectSelected === 'color')&& 
      
            choices.map((element) => 
              (
                <div key={element.id}  >
                  <OptionDelete 
                      actionDelete={() => deleteValidate(element.id)}
                      loadingState={isLoading}
                      resetState={showconfirm}
                      >    
                    <OptionItem 
                      justifyC='flex-start' 
                      dataId={element.id} 
                      handleTagEditable={handleTagEditable}
                      textLabel={element.label} 
                    >  
                      <InputCustom  
                        dataId={element.id}
                        typeInput={typeField} 
                        nameInput={typeField}
                        handle={handleChangeText}
                        valueInput={element.color}
                      /> 
                    </OptionItem>
                  </OptionDelete>
                </div>
              )    
            )
        }


        {(selectSelected === 'textarea')&& 

          choices.map((element) => 
            ( 
              <div key={element.id} className='input-textarea' >
                <InputTextarea
                  dataId={element.id} 
                  nameInput="placeholder"
                  handle={handleChangeText}
                  valueInput={element.placeholder}
                />
              </div>
            )
          )
        }

        {/* Message interactions */}
        { showconfirm.status && 
          <MessageConfirm  
            mesagge="¿You're sure?" 
            actionTitle="Sure" 
            actionChange={deletedConfirmQuestion} 
            changeStateDelete={setShowconfirm} 
          />
        }
        
        { isError && <Message mesagge="Server error" error={true}/>  }
        { isSuccess && <Message mesagge="Delete success" />}
        {/* Message interactions */}

    </>
  )

    
 

}

export default OptionList