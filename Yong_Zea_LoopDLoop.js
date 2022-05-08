
for (var i=1; i<=10; i++) {
//entrega de caramelos
   if(i > 0 && i %3===0){
    console.log(i +'km ten caramelo :)')

}
}


/*¿Cómo sabemos que necesitamos un bucle aquí?
Porque necesitamos hace una tarea repetitiva que cada 3km dé un caramelo y pare en el 10km.  

¿Cuál es el punto de partida del bucle?
A partir del kilometro 3.

¿Cuándo debe detenerse el bucle?
Cuando i sobre pase a <=10.

¿Cómo sabrá parar?
el bucle termina cuando es igual a 11.

¿Cuál es el incremento para cada iteración del bucle?
Incrmentá en uno ya que le di el sgt codig: i++

¿Qué variables necesitamos?
i=km recorrido.
*/


//hasta que kilometro correr
var velocidadimput = 9.1; //9 k/h

for (var i=1; i<=10; i++) {
    //entrega de caramelos
       if(i > 0 && i %3===0 && velocidadimput>9){
        console.log(i +'km ten caramelo :)')
    
    }
    }
