import React, { createRef, useEffect } from 'react';
import './editPost.scss'

const EditPostModal = (props) => {

    const closeButton = createRef();
    const publichButton = createRef();

    const { closeModal, isModalOppened } = props;

    const handlePublish = () => {
        closeButton.current.click()
    }

    const downHandler = ({ key }) => {
        if(key == "Enter" && isModalOppened ){
            publichButton.current.click()   
        } 
    }

    useEffect(() => {
        window.addEventListener('keydown', downHandler);

        return () => {
          window.removeEventListener('keydown', downHandler);
        };
    }, []);

    return (
        <div className="editPostModalContainer">
            <div className="editPostModalSection">
                <div>
                    <div></div>
                    <div>
                        Edit post
                    </div>
                    <div>
                        <span onClick={closeModal} ref={closeButton} >X</span>
                    </div>
                </div>
                <div>
                    <img src="./fbLogo.png" alt="user image" />
                    <p>Rudolf Gabrielyan</p>
                </div>
                <div>
                    <textarea placeholder="What's new Rudolf" value="It is my first post" />
                </div>
                <div>
                    <div>
                        <img src="./images/imageUpload.png" alt="upload image" />
                        <p>Upload image</p>
                    </div>
                </div>
                <div>
                    <button onClick={handlePublish} ref={publichButton} >Edit</button>
                </div>

            </div>
        </div>
    )
}

export default EditPostModal