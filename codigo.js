
class caracteristicas{
	constructor (color, peso, pantalla, camara, ram) {
		this.color=color;
		this.peso=peso;
		this.pantalla=pantalla;
		this.camara=camara;
		this.ram=ram;
		this.info= `El color es   ${color} `+ `<br>`+ `El peso es  ${peso} ` + `<br>`+ `La resolucion de pantalla es
					${pantalla}` + `<br>`+ `La camara es de ${camara}` + `<br>`+ ` La RAM es de ${ram}`
	}
	verInfo(){
		document.write(this.info);
	}
}
class Acciones extends caracteristicas{

	Accion(){
		let opcion=prompt("Escoja una accion en el telefono: 1. Apagar  2. Encender 3. Tomar Fotos 4. Grabar 5. Reiniciar");
		
		if (opcion==1){
			alert("Se Apago")
		}
		else if (opcion==2){
			alert("Encendido")
		}
		else if (opcion==3){
			alert("Se tomo una foto")
		}
		else if (opcion==4){
			alert("Se esta grabando")
		}
		else if (opcion==5){
			alert("Se reinicio")
		}
		else{
			alert("no escogio ninguna opcion")
		}
	}
} 

function opcion (numero) {
	if(numero==1){
		let Huawei= new caracteristicas ("rojo", "1kg","5in", "1040Mpx","4GB" );
		Huawei.verInfo();
		
		let Prueba= new Acciones ();
		Prueba.Accion();
	}
	else if (numero==2) {
		let Samsung= new caracteristicas ("gris", "1.2kg","6in", "700Mpx","8GB" );
		Samsung.verInfo();
		
		let Prueba= new Acciones ();
		Prueba.Accion();
		
	}
	else if (numero==3) {
		let Iphone= new caracteristicas ("negro", "1.5kg","4in", "750Mpx","6GB" );
		Iphone.verInfo();
		
		let Prueba= new Acciones ();
		Prueba.Accion();
	}
	else{
		alert("Escoja una de las opciones")
	}
}

let numero=prompt("Caracteristicas de los celulares 1. Huawei  2. Samsung  3. Iphone");
opcion(numero);
