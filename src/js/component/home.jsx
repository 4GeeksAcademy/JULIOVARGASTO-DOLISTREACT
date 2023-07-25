import React, { useState } from "react";
import './home.css';
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tarea, setTarea] = useState("")
	const [lista, setLista] = useState([])
	
	function agregar(e){
		e.preventDefault()
		setLista([
			...lista, tarea
		])
	setTarea("")
	}
	
	function eliminarTarea(id){
		let nuevaLista = []
		nuevaLista = lista.filter((item,index)=>{
			if (index != id){
				return item
			}
		})
	setLista(nuevaLista)
	
	}

	
	return (
		<div className="text-center container">
			<h1 className="text-center mt-5">LISTA DE TAREAS</h1>
			<div className="d-flex" style={{marginLeft: "360px"}}>
				<input type="text" className="form-control w-50"
				style={{marginRight:"20px"}}
				value= {tarea} 
				onChange={(e)=> setTarea(e.target.value)}/>
				<button className="btn btn-outline-dark" onClick={agregar}>Agregar Tarea</button>
			</div>
			<br/>
			<br/>
			<ul className="list-group">
				{lista.map((item, id)=> (
					<li className="list-group-item listaItem" key={id}>{item}
					onClick
					<button className="btn btn-outline-dark float-end" onClick={()=>eliminarTarea(id)}>X</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
