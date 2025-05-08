//Imprime un mensaje en la consola
console.log("Sistema EBAC de Registro de Alumnos");

//Se define un arreglo de registro con datos de alumnos en EBAC
var registro = [

    //Se muestra lista de alumnos por medio de objetos
    {nombre: "Angel Mond", zonaResidencia: "Villahermosa", edad: "28", nombrePrograma: "Desarrollador Front End de cero a pro", email: "amontes.d@outlook.com"},
    {nombre: "Maria Huber", zonaResidencia: "CDMX", edad: "30", nombrePrograma: "Desarrollador Back End con Python", email: "maria@ebac.mx"},
    {nombre: "Pedro Guerra", zonaResidencia: "La Paz", edad: "22", nombrePrograma: "Desarrollador Back End con Java", email: "p.guerra@outlook.com"},
    {nombre: "Sonia Herrera", zonaResidencia: "Guadalajara", edad: "35", nombrePrograma: "Analista de Datos", email: "sonnia@hotmail.com"},
    {nombre: "Juana Hernández", zonaResidencia: "Mérida", edad: "29", nombrePrograma: "Modelado 3D", email: "juanaher@gmail.com"},
];

//Función que permite agregar un nuevo alumno al arreglo de registro
function agregarAlumno(){

    //Se le solicita información al usuario para el registro de un nuevo alumno
    var nombre = prompt("Ingresa el nombre del nuevo alumno");
    var zonaResidencia = prompt("Ingresa la zona de residencia del alumno");
    var edad = prompt("Ingresa edad del alumno");
    var nombrePrograma = prompt("Ingresa programa a estudiar");
    var email = prompt("Ingresa correo electrónico"); 
    
    //Crea un objetoo que se llama nuevoAlumno con los datos ing
    var nuevoAlumno = {nombre: nombre, zonaResidencia: zonaResidencia, edad: edad, nombrePrograma: nombrePrograma, email: email};

    //Agrega la información nuevoAlumno al arreglo
    registro.push(nuevoAlumno);

};

//Función para consultar los registros de los alumnos
function consultarRegistros(){

    //este ciclo for itera sobre cada uno de los registros del arreglo
    for(var i = 0; i < registro.length; i++){

        //Esta lista de console.log permite ver al usuario el registro en la consola
        console.log("Nombre: " + registro[i].nombre);
        console.log("Zona de residencia: " + registro[i].zonaResidencia);
        console.log("Edad: " + registro[i].edad);
        console.log("Nombre del Programa: " + registro[i].nombrePrograma);
        console.log("Email: " + registro[i].email);
    };
};

//Esta función permite generar un nuevo arreglo que noo contenga la información del alumno deseado
function eliminarAlumno(){

    //Solicita al usuario el nombre del alumno a eliminar
    var nombreAeliminar = prompt("Ingresa el nombre del alumno a eliminar");

    //Utiliza el método filter para crear un nuevo arreglo sin el alumno a eliminar
    registro = registro.filter(alumno => alumno.nombre !== nombreAeliminar);
}

var edadMayora20 = >20

if (edadMayora20años > 20){
    console.log("Mayor de 20 años");
}
else{
    console.log("Menor de 20 años");
}

//Ciclo do while permite repetir el menú cuando es indicado hasta que no se cumpla la condición
do{

    //Variable que toma la elección del usuario para ejecutar la función indicada
var opcion = prompt("Seleccione una opción: \n1. Agregar registro \n2. Consultar registro de alumnos \n3. Eliminar registro \n4. Salir");


//Se declara este if para dar a elegir al usuario la opción que quiera
if (opcion === "1"){
    agregarAlumno();
} else if(opcion === "2"){
    consultarRegistros();
} else if(opcion === "3"){
    eliminarAlumno();
} else if("Salida"){
    alert("Salir del sistema");
} else{
    alert("Opción invalida, elige otra.");
}

//Esta variable nos permite elegir si hacemos otra acción o cerramos el ciclo
 var continuar = prompt("¿Deseas hacer otra acción? (S/N)");

 //while que se encarga de cerrar el ciclo
} while(continuar === "s");







