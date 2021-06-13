import React, {useState} from 'react';

function ImageSearch({serchText}) {
	const [text, setText] = useState("")

	const submitHanlder = (e) =>{
		e.preventDefault();
		serchText(text);
	}

	return (
		<div className="w-9/10 md:max-w-sm rounded overflow-hidden my-10 mx-auto">
			<form onSubmit={submitHanlder} className="w-full max-w-sm">
				<div className="flex items-center border-b border-green-500 py-2">
					<input value={text} onChange={(e) => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 outline-none leading-tight focus:outline-none" type="text" placeholder="Search Image Term..." aria-label="Full name"/>
					<button className="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
					Search
					</button>
				</div>
			</form>
		</div>
	)
}

export default ImageSearch;