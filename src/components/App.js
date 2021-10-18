import React,{useContext} from "react";
import Modal from "./Modal";
import {Context} from "./Context";
export default function App(){
    const {setDisplayStyle}= useContext(Context)
    function openModal(){
        setDisplayStyle('visible')
    }
    return <div>
            <div className="home-page">
                <h1 className="title">Home of our react app</h1>
                <span className="modal-open" onClick={openModal}>Open Modal</span>
            </div>
            <Modal/>
        </div>
    
}