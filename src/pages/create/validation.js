const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const expresionRegular = /^(?=.{1,35}$).+/;

const regexTexto = /^[a-zA-Z0-9\s!:]+$/;

const textnume = /^[a-zA-Z0-9\s!-,]+$/;
const regexfloat = /^([0-5](\.[0-9])?|[0-4]\.)$/;

const regexImage = /^(ftp|http|https):\/\/[^ "]+$/;

const regexFecha =  /^\d{4}-\d{2}-\d{2}$/;

function validation(data) {
   const errors = {}; 
 // Validacion de nombre de juego  
   if (!regexTexto.test(data.name)) {
    errors.name = 'Sólo puede contener letras, números y algunos simbolos'
   }else{ errors.name= ""; }
   if (!expresionRegular.test(data.name)) {
    errors.name = 'Longitud debe ser entre 1 - 35 caracteres'
   }else{ errors.name= ""; }
   if (data.name === "") errors.name="";
// validacion de imagen 
   if (!regexImage.test(data.image)) {
    errors.image = 'Debe ingresar una URL válida"'
   }else{ errors.image = ""; }
   if (data.image === "") errors.image="";   
// validacion descripcion

if (!regexTexto.test(data.description)) {
    errors.description = 'Sólo puede contener letras, números y algunos simbolos"'
   }else{ errors.description = ""; }
   if (data.description === "") errors.description="";  
// Validacion de Plataformas
if (!textnume.test(data.platform)) {
    errors.platform = 'Sólo puede contener letras, números'
   }else{ errors.platform = ""; }
   if (data.platform === "") errors.platform="";
// validacion fecha de lansamiento
if (!regexFecha.test(data.released)) {
    //console.log(data.released);
    errors.released = 'Formato de fecha inválido. '
    }else{ errors.released = ""; }
    if (data.released === "") errors.released="";
// validacion de Rating
if (!regexfloat.test(data.rating)) {
    errors.rating = 'Ingrese un número válido entre 0 y 5'
   }else{ errors.rating = ""; }
   if (data.rating === "") errors.rating="";    


// Verificar la entrada del mes
   
    
return errors
}
export default validation