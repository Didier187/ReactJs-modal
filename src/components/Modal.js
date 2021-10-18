import React, {useState,useContext} from 'react';
import {Context} from './Context'

export default function Modal(){
    const {setDisplayStyle, displayStyle} = useContext(Context);

    function handleClick(){
        setDisplayStyle('hidden');
    }

    return (
    <div className="modal-overlay" style={{visibility:displayStyle}} onClick={handleClick}>

        <div className="modal">
            <div>
                <h2 className="modal-title">This is a react modal</h2>
                <p className="modal-body">
                    You can find us in city at 222 Broadway Road, shop 99
                    Buy bits and pieces from us, right now you
        
                </p>
            </div>
            <span className="modal-close" onClick={handleClick}>close</span>
        </div>

    </div>)
}
