import React from 'react'
import Modal from 'react-modal';
import { AiOutlineClose, AiOutlineDownload } from "react-icons/ai";


Modal.setAppElement('#root');
function ImageModal({opener, closer, item, theme}) {

	let overlay = (theme == "light") ? "rgba(0,0,0, 0.5)" : "rgba(255,255,255, 0.5)" ;
	let cl = (theme == "light") ? "#f1f1f1" : "#242424" ;
	let bs = (theme == "light") ? "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" : "0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)" ;


	const customStyles = {
	  content : {
	    background:cl,
	    boxShadow:bs,
	    width:item.webformatWidth,
	  },
	  overlay : {
	  	background:overlay
	  }
	};

	return (
		<Modal
          isOpen={opener}
          onRequestClose={()=>closer(item.id)}
          closeTimeoutMS={1000}
          style={customStyles}
          contentLabel="Example Modal"
        >
        	<div className="text-3xl flex justify-between  pb-2">
        		<span className="text-blue-500 cursor-pointer" onClick={()=>window.open(item.largeImageURL, '_blank')}><AiOutlineDownload/></span>
        		<span className="text-red-500 cursor-pointer" onClick={()=>closer(item.id)}><AiOutlineClose/></span> 
			</div>		
        	<img src={item.webformatURL} alt="largeImageURL" style={{width:"100%",height:"100%"}} />
        </Modal>
	)
}

export default ImageModal
