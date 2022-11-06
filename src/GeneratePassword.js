import React, { useState } from 'react'
import {
    numbers,
    upperCaseLetters,
    lowerCaseLetters,
    specialCharacters
} from './Generateletter'


const GeneratePassword = () => {
    const [password, setPassword] = useState('')
    const [passwordLength, setPasswordLength] = useState(20)
    const [includeUppercase, setIncludeUppercase] = useState(false)
    const [includeLowercase, setIncludeLowercase] = useState(false)
    const [includeNumbers, setIncludeNumbers] = useState(false)
    const [includeSymbols, setIncludeSymbols] = useState(false)


    const handleGeneratePassword = (e) => {
        let characterList = ''
        if (includeUppercase) {
            characterList = characterList + upperCaseLetters
        }
        if (includeLowercase) {
            characterList = characterList + lowerCaseLetters
        }
        if (includeNumbers) {
            characterList = characterList + numbers
        }
        if (includeSymbols) {
            characterList = characterList + specialCharacters
        }
        setPassword(createPassword(characterList))
    }

    const createPassword = (characterList)=>{
        let password = ''
        const characterListLength = characterList.length

        for(let i =0 ; i < passwordLength ;i++){
            const characterIndex = Math.round(Math.random()*characterListLength)
            
            password = password + characterList.charAt(characterIndex)
        }
        return password
    }

    const copyToClipboard = () =>{
        const newTextArea = document.createElement('textarea')
        newTextArea.innerText = password
        document.body.appendChild(newTextArea)
        newTextArea.select()
        navigator.clipboard.writeText(password)
        newTextArea.remove()
    }

    const handleCopyPassword = (e)=>{
        copyToClipboard()
    }

    return (
        <div className='mx-2 text-center'>
            <div className='d-flex justify-content-center'>
                Generate Password
            </div>
            <div>
                <p className='border text-center'>{password}
                <i onClick={handleCopyPassword} class="bi bi-clipboard mx-2"></i></p>
            </div>
            <p>Password Length
                <span> <input
                    id='password-strength'
                    defaultValue={passwordLength}
                    type='number'
                    onChange={(e) => setPasswordLength(e.target.value)}
                />
                </span>
            </p>
            <p>Include UpperCase Letter
                <span>
                    <input
                        checked={includeUppercase}
                        onChange={(e) => setIncludeUppercase(e.target.value)}
                        id='uppercase-letters'
                        type='checkbox' />
                </span>
            </p>
            <p>Include Lowercase Letter
                <span>
                    <input
                        checked={includeLowercase}
                        onChange={(e) => setIncludeLowercase(e.target.value)}
                        id='lowercase-letters'
                        type='checkbox' />
                </span>
            </p>
            <p>Include Number
                <span>
                    <input
                        checked={includeNumbers}
                        onChange={(e) => setIncludeNumbers(e.target.value)}
                        id='include-numbers'
                        type='checkbox' />
                </span>
            </p>
            <p>Include Symbols
                <span>
                    <input
                        checked={includeSymbols}
                        onChange={(e) => setIncludeSymbols(e.target.value)}
                        id='include-symbols'
                        type='checkbox' />
                </span>
            </p>
            <button onClick={handleGeneratePassword}>
                Generate Password
            </button>
        </div>

    )
}

export default GeneratePassword