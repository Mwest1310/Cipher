import React, {useState} from 'react';


function Cipher(){
    const [message, setMessage] = useState("");
    const[number, setNumber] = useState(0);
    const[prevNum, setPrevNum] = useState(null);
    const[cipher, setCipher] = useState("");

    

    function handleMessageChange(event){
        setMessage(event.target.value);
    }

    function handleNumberChange(event) {
        setNumber(event.target.value);
    }

    function handleClick(){

        //sets everything to upper case for ease of use
        let msg = message.toUpperCase();
        //will contain the new message
        let newMsg = "";
        let num = Number(number); //number wasn't an integer. Think it was a string
        //the alphabet in upper case for consistency with the message
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        //loops through msg
        for(let i = 0; i < msg.length; i++){
            //if the character is not in the alphabet, simply add the character as-is
            if(alphabet.indexOf(msg[i]) < 0){
                newMsg+=msg[i];
            }
            //further loops through alphabet
             for(let j = 0; j < alphabet.length; j++){
                //when it finds a match, the following code is executed
                if(msg[i] === alphabet[j]){
                    //checks if the number shifts the letter past Z
                    if(!alphabet[j+num]){
                        //if it does, then it is reset back to A, then shifted by the given number
                        newMsg+=alphabet[(j-26) + num];
                        //if not, then it is simply shifted
                    } else{
                        newMsg+=alphabet[j+num];
                    }
                    
                } 
            }
            
            
        }
        
        //sets the cipher state variable to the new message
        setCipher(newMsg);
        
        
    }

    return(
        <div id = "cipher-box">
            <h1>Cipher</h1>
            
            <div id = "message-text">
            <label>Please input your message and specify how far you wish your characters to be spread:</label> <br />
                <textarea id="text" value={message} onChange={handleMessageChange} />
            </div>
            
            <div id = "specifications">
                <input id="number" value={number} type="number" onChange={handleNumberChange} />
                <input id="submit" type="submit" onClick={handleClick} />
                
            </div>
            <div id = "output">
                <p>{cipher}</p>
            </div>
        </div>
    )
}


export default Cipher;