import React from 'react';
import './CSS.css';

class Lista extends React.Component{
	constructor(props){
		super();
		this.state={
			listado:[
				/*{id:1,text:'cosa1'},
				{id:2,text:'cosa2'},
				{id:3,text:'cosa3'}*/
			]
		};
	}
	componentWillReceiveProps(nextProps){
		//agarrar el ultimo
		var respaldo = this.state.listado;
		var nuevo_id = (respaldo[respaldo.length-1]).id;
		nuevo_id++;
		console.log(nuevo_id);
		
		fetch(`http://localhost:4000/lista/agregar?id=${nuevo_id}&task=${nextProps.value}`).catch((err)=>{console.log(err)});
		const backup = this.state.listado;
		const identificador = this.state.listado.length+1;
		backup.push({id:identificador,text:nextProps.value});
		this.setState({listado:backup});
		console.log(nextProps.value);
	}

	componentDidMount(){
		this.callDB();
	}

	callDB(){
		fetch('http://localhost:4000/lista')
		.then((response)=>{
			return response.json()
		})
		.then(({data})=>{
			this.setState({listado:data});
			console.log(data);
		})
		.catch((err)=>{console.log(err);});
		//this.setState({listado:db_state});
	}

	render(props){
		return(
				<ul className='lista' id='list'>
					{
						this.state.listado.map((conten)=>{
							return <li key={conten.id} onClick={this.borrar.bind(this,conten)}><a>{conten.text}</a></li>
						})
					}
				</ul>
			);
	}

	borrar(conten){
		var temp = this.state.listado;
		for(var i=0;i<temp.length;i++){
			if (temp[i].id===conten.id) {
				temp.splice(i,1);
			}
		}
		this.setState({listado:temp});
	}
}

class Display extends React.Component{
	render(props){
		return(
				<div className='tareas'>
					<div className='wrap'>
						{<Lista value={this.props.value}/>}
					</div>
				</div>
			);
	}
}

export default Display;