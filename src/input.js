import React from 'react';
import './CSS.css';
import Display from './Lista';

class Content extends React.Component{
	
	constructor(){
		super();
		this.state={in:null};
		this.agregar=this.agregar.bind(this);
	}

	render(){
		return(
			<div>
				<div className="principal">
					{/*<Contenedor/>*/}
					<div className="wrap">
				{/*<Formulario/>*/}
						<form className="formulario">
							<input type="text"placeholder="Agrega tu tarea" id="in"/>
							<input type="button"value="agregar" className="boton" onClick={this.agregar}/>
						</form>
					</div>
				</div>
				<div>
					{<Display value={this.state.in} adding={this.state.in}/>}
				</div>
			</div>
		);
	}
	agregar(){
		let val = document.getElementById('in').value;
		this.setState({in:val});
		document.getElementById('in').value = '';
	}
}

export default Content;