
//cargar el módulo
var express = require('express');
var path=require('path');
//var bodyParser=require('body-parser');
//importamos el overrride
//var methodOverride=require('method-override');


//express se inicializa llamando al metodo express y vuelve a app
var app = express();

//var answer=document.getElementById('respuesta').value;

//app.use(bodyParser.urlencoded({extended:true}));
//app.use(methodOverride('_method'));
//app.use(express.static(path.join(_dirname,'/public')));





//vamos a leer lo que hay en el formulario para enviar

    app.get('/preguntas', function(req, res){
    
            res.send(
                     '<html><body>'
                +'<h1>Cuestionario</h1>'
               +'<form name="formulario1" action="/respuestas" method="get">'
               +'<input type="hidden" name="id" value="ccolon" id="respuesta"/>'   
              +'<label for="america">¿Qui&eacute;n descubri&oacute; Am&eacute;rica?</label>'
               +'<input type="text" name="respuestaamerica"/>'
               +'<input type="submit" value="Enviar respuesta" name="descrubirdoramerica"/>'
            +'</form>'
            +'</br>'
           +' <form name="formulario2" action="/respuestas" method="get">'
            +' <input type="hidden" name="id" value="lisbon" id="respuesta"/>  '
            +'  <label for="capital">Capital de Portugal</label>'
            +'<input type="text" name="respuestaportugal"/>'
            +'<input type="submit" value="Enviar respuesta" name=capitalportugal">'
            +'</form>'
          //  +'<script>var answer= document.getElementbyId("respuesta").value;</script>'
                      
            +'</br>'
            +'</body></html>'
            
            
            );
    });
    
       //aqui evaluamos las resppuestas de la pregunta sobre América
       app.get('/respuestas', function(req, res, next){
                                       
        if  (req.query.respuestaamerica==="Cristóbal Colón"||req.query.respuestaamerica==="Colón")
                                       
                {
                  res.send('Correcto!!!!');
                }
        else
                {
                 next();        
                }
           
        });
    
    
//aqui evaluamos las resppuestas de la pregunta sobre América
       app.get('/respuestas/', function(req, res, next){
                  
                                       
        if  (req.query.respuestaportugal==="Lisboa")
                                       
                {
                  res.send('Correcto!!!!');
                  
                  
                 
                }
        else
                {
                next();
                
                }
           
        });
    
    
     
   
    app.get('/respuestas?:id=', function(req, res)
            {
               /*
               
               if (req.globals.answer===ccolon)
                {
                res.send('Te has equivocado, la respuesta correcta es Cristóbal Colón.');    
                }
                else 
                {
                res.send('Te has equivocado, la respuesta correcta es Lisboa.');        
                }
               */
                //res.send(req.params.id);    
              
                if (req.params.ccolon==='ccolon')
                {
                res.send('Te has equivocado, la respuesta correcta es Cristóbal Colón.');    
                }
                else 
                {
                res.send('Te has equivocado, la respuesta correcta es Lisboa.');        
                }
            
    });
    
    
    
    
    
    

app.listen(8000);
console.log('leyendo en localhost 8000, en preguntas');

