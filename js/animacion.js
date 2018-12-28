function saludar ()
{
	var nombre = "Sara";
	alert ("Holaa " + nombre);
}
$ ("#boton1").click (saludar);

function cambiar()
{
	$ ("#titulo").toggleClass ("rojo");
}
$("#boton2").click (cambiar);