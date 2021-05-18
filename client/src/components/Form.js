import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Form = () => {

    const [text, setText] = useState('')
    const [sentiment, setSetiment] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
       
        // async function getData(){
        //     const res = await axios.get(``)
        // }
    },[])

    return (
        <>
        <form action="" onSubmit={onSubmit}>
            <div>
                <label htmlFor="text">Enter text to check sentiment</label>
                <br />
                <textarea
                name="text"
                cols="30"
                rows="5" 
                id="text"
                value={text}
                onChange= {(e) => setText(e.target.value)} />
            </div>
            <button type="submit">Analyze</button>
        </form>
        </>
    )
}

export default Form
