import React, {useState} from 'react';
import styled from 'styled-components';


const InputContainer = styled.div`
    width: 100%;
    font-size: .8rem;
    padding: .5rem 0;
    display: flex;
    flex-direction: column-reverse;  
    position:relative;
    

    & > input {
      
        font-size: 1.2rem;
        border: 2px solid gray;
        border-radius: 0px;
        padding: .6rem .8rem;        

        &:focus {            
            border-width: 2px;
            border-style: solid;
            border-image: 
                linear-gradient(
                    to right,
                    #00DBDE,                    
                    #0225B5
                ) 1 100%
            ;
            border-image-slice: 1;
            color: darkblue;
            outline: none;
        }

        &:focus + label {
            color: #00DBDE;
        }

        &:focus ~ button[type="button"]        {
            background-color:  #0225B5; 
            border: 2px solid #0225B5;
            outline:none;
        }

        &:focus + label > .hint {
            visibility: visible;
        }

        &:invalid {
            border: 2px solid red;
        }

        &:invalid + label {
            color: red;
        }
        
    }

    & > label {        
        display: block;
        color: gray;
        padding-bottom: .2rem;
        text-transform: uppercase;       
        font-weight: bold;
        letter-spacing: 2px;
        transition: color .4s ease;
        
        & .hint {
            font-size: 80%;
            display:block;         
            text-transform: none;
            letter-spacing:0px;
        }
    }


    & > button[type="button"] {
        padding: .1rem 1rem;
        box-sizing: border-box;
        position: absolute;
        height: 2.7rem;
        right: 0px;
        margin-bottom: 1px;
        border: 2px solid gray;
        background: white;
        text-transform: uppercase;
        font-size: 80%;
        font-weight: bold;
        color: white;
        background: gray;
        outline: none;
        cursor: pointer;      
    }

    & > button[type="button"]:focus, & > button[type="button"]:active {
        border: 2px solid gray;
        outline:none;
        box-shadow: inset 0 0 0 2px gray, inset 0 0 0 5px white;
    }
    
    
`;

const CleanTextInput = (props) => {
   
const { type, name } = props;
const [inputType, setInputType] = useState(type);

const showHidePassword = (e) => {
    if(e.target.type === 'button') {
    inputType === 'password' ?
    setInputType("text") :
    setInputType("password")
    }
}


return (
        <InputContainer {...props}>            
            <input id={name} name={name} type={inputType}/>
            <label>
            <span>{props.label}</span>
            {
                props.hint ?
                <span className="hint">{props.hint}</span> :
                null
            }
            </label>
            {
                props.type === 'password' ? 
                <button onClick={(e) => showHidePassword(e)} type='button'>Show Password</button> :
                null
            }
        </InputContainer>
    );

}

export default CleanTextInput;