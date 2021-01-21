# Ava 

Algunas cosas a destacar de la funcionalidad de aplicación:

- Es posible filtrar los cards según el tipo de producto haciendo click sobre los nombres del los productos en la barra de resumen
- Se pueden ocultar y mostrar los productos relacionados a otros bancos a través del toggle
- Se puede cambiar el idioma desde la barra de menú lateral haciendo click sobre el nombre correspondiente al idioma deseado


---------

Sobre la construcción de la aplicación

La aplicación se compone de modulos que contienen pipes, servicios, componentes, interfaces y enums :metal:


- Algunos componentes visuales fueron separados en una librería (aval-styles) pensando en la 
reutilización de ellos en esta y otras apps ya que generalmente las aplicaciones
 empresariales suelen tener unas mismas  guias  de estilos
- El CSS se escribió con la metodologia BEM
- No se utilizaron frameworks de css 
- Los componentes son modulares
- Se usó un observable sencillo en el servicio que retorna los datos mock 
- Se agregó un modulo de traducciones


---------

Configuración para levantar la aplicación.

1. Instalar paquetes NPM `npm i`
2. Generar librería `ng build aval-styles --watch`
3. Levantar servidor de desarrollo ` ng serve `
