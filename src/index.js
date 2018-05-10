import React from 'react';
import ReactDOM from 'react-dom';
import Content from './input';
//import Display from './Lista';

function Test (){
		return (
				<div>
					<Content/>
				{/*<Display/>*/}
				</div>
			);
}

ReactDOM.render(
	<Test/>,
	document.getElementById('root')
);