(function(){

   function getEdad(){
      return 100+100+100;
   }
   const nombre="kike"
   const edad=23
   const apellido="sosa"

   //const salida = nombre+" "+apellido +" ( " +edad +" )";
   const salida=`
   ${nombre}
   ${apellido} 
   ( ${getEdad()} )`;
   console.log(salida);
})();