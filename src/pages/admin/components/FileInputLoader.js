import React, { useEffect, useState } from 'react';

const FileInputLoader = (props) => {
    const [fileInputs, setFileInputs] = useState([]);

    const handleButtonClick = (e) => {
        e.preventDefault()
        // Add a new file input element to the state
        setFileInputs([...fileInputs, { id: Date.now(), file: null }]);
    };

    const handleFileChange = (id, event) => {
        event.preventDefault()
        // Update the file in the corresponding file input
        const updatedFileInputs = fileInputs.map(input =>
            input.id === id ? { ...input, file: event.target.files[0] } : input
        );
        setFileInputs(updatedFileInputs);
    };

    useEffect(()=>{
        // debugger
        // console.log(props.selected);
    })
    return (
        <div>
            <button onClick={handleButtonClick}>Add File Input</button>
            <div>
                {fileInputs.map(input => (
                    <div key={input.id}>    
                        <input
                            type="file"
                            onChange={(event) => props.imageSet(input.id, event)}
                        />
                        <input type='checkbox' checked={input.id ===props.selected}  onChange={()=>props.selectImage(input.id)}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FileInputLoader;