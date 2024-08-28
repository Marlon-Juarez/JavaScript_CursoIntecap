    let nombreUsuario;

    //metodo para manejar el inicio de sesion, es llamado por 'index.html'
    function manejoInicioSesion(){

        datosPrueba();

        let info = new manejoInformacion();
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
        
            // Obtener valores de los campos de entrada
            const correo = document.querySelector('input[name="username"]').value;
            const password = document.querySelector('input[name="password"]').value;
        
            
        
        
            if (correo === '' || password === '') {
                alert('Por favor, completa todos los campos.');
            } else if (info.validarUsuarioAdministrador(correo, password)){

                let id = info.buscarUsuario(correo, password);

                guardarNombreUsuario(info.lst[id].name + ' ' + info.lst[id].last_name);

                window.location.href = 'archivos_HTML/vistaAdministrador.html';

                alert('Bienvenido');
                
            }else {
                alert('Datos invalidos');
            }
        });
        
    }

    // Guarda el nombre de usuario en localStorage
    function guardarNombreUsuario(nombreUsuario) {
        localStorage.setItem('nombreUsuario', nombreUsuario);
    }

    // Función para recuperar el nombre de usuario desde localStorage
    function obtenerNombreUsuario() {
        return localStorage.getItem('nombreUsuario');
    }

    //funcion para generar los datos de prueba
    function datosPrueba(){
        let info = new manejoInformacion();
        
        info.vaciarLista();
                    //  Nombre --- apellido --- direccion ---   rol  --- fechan nacimiento ---   correo   --- contraseñia --- telefono
        info.guardarInfo('Juan', 'Alvarez', 'Calle 1234', 'administrador', '1998-12-16', 'juan.perez@hotelesgt.com', '1234', '22334455');
        info.guardarInfo('Maria', 'Batz', 'Calle 4321', 'administrador', '1990-03-20', 'maria.batz@hotelesgt.com', '1234', '33445566');
        info.guardarInfo('Daniel', 'Cortez', 'Calle 7891', 'recepcionista', '2002-01-01', 'daniel.cortez@hotelesgt.com', '1234', '44556677');
        info.guardarInfo('Antonio', 'Dardon', 'Calle 4521', 'administrador', '1999-03-08', 'antonio.dardon@hotelesgt.com', '1234', '55667788');
        info.guardarInfo('Nicolas', 'Estrada', 'Calle 7531', 'recepcionista', '2001-05-17', 'nicolas.estrada@hotelesgt.com', '1234', '66778899');
        info.guardarInfo('Martha', 'Flores', 'Calle 6261', 'recepcionista', '2005-10-26', 'martha.flores@hotelesgt.com', '1234', '66778899');
        info.guardarInfo('Luis', 'Pablo', 'Calle 8961', 'recepcionista', '2002-09-30', 'Luis.pablo@hotelesgt.com', '1234', '11223344');
        info.guardarInfo('Benjamin', 'Barrera', 'Calle 7821', 'administrador', '1997-08-25', 'benjamin.barrera@hotelesgt.com', '1234', '22446611');
    }


    // metodo para cargar la informacion de los usuarios en una tabla, es llamada por 'vistaAdministrador.html'
    function cargarInfoTabla(){
        // Extraer el username de la URL
        const params = new URLSearchParams(window.location.search);
        const username = params.get('username');
        
        // Colocar el username en el párrafo
        document.getElementById('usuario').textContent = `Usuario: ${obtenerNombreUsuario()}`;

        let info = new manejoInformacion();
        info.mostrarInformacion();
    }

    // metodo para borrar un usuario, es llamado por 'formularioBorrar.html'
    function borrarUsuario() {
        const params = new URLSearchParams(window.location.search);
        document.getElementById('id').value = params.get('id');
        document.getElementById('nombre').value = params.get('nombre');
        document.getElementById('apellido').value = params.get('apellido');
        document.getElementById('telefono').value = params.get('telefono');
        document.getElementById('direccion').value = params.get('direccion');
        document.getElementById('correo').value = params.get('correo');
        document.getElementById('fecha_na').value = params.get('fecha_na');
        document.getElementById('contrasenia').value = params.get('contrasenia');


        document.getElementById('borrarForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const userId = document.getElementById('id').value;  
            let info = new manejoInformacion();
            info.borrarUsuario(userId); 
            
            window.location.href = '../archivos_HTML/vistaAdministrador.html';
        });

    }

    // metodo para cargar informacion de un usuario, es llamado por 'formularioEditar.html'
    function cargarInformacionFormulario(){

        actualizarInformacion();

        const params = new URLSearchParams(window.location.search);
        document.getElementById('id').value = params.get('id');
        document.getElementById('nombre').value = params.get('nombre');
        document.getElementById('apellido').value = params.get('apellido');
        document.getElementById('telefono').value = params.get('telefono');
        document.getElementById('direccion').value = params.get('direccion');
        document.getElementById('correo').value = params.get('correo');
        document.getElementById('fecha_na').value = params.get('fecha_na');
        document.getElementById('contrasenia').value = params.get('contrasenia');

    }

    // metodo para editar un usuario, este metodo es llamado por 'formularioEditar.html'
    function actualizarInformacion() {
        let info = new manejoInformacion();
        document.getElementById('actuForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Obtener valores de los campos de entrada usando `id`
            const id = document.querySelector('input[id="id"]').value;
            const nombre = document.querySelector('input[id="nombre"]').value;
            const apellido = document.querySelector('input[id="apellido"]').value;
            const telefono = document.querySelector('input[id="telefono"]').value;
            const direccion = document.querySelector('input[id="direccion"]').value;
            const correo = document.querySelector('input[id="correo"]').value;
            const fecha_na = document.querySelector('input[id="fecha_na"]').value;
            const contrasenia = document.querySelector('input[id="contrasenia"]').value;
            
            // Llamada a la función de manejo de información o actualización
            info.actualizarInfoUsuario(id, nombre, apellido, telefono, direccion, correo, fecha_na, contrasenia);
    
            // Redireccionar a "vistaAdministrador.html"
            window.location.href = '../archivos_HTML/vistaAdministrador.html';
        });
    }

    // metodo para agregar usuario, este metodo es llamado por 'formularioAgregar.html'
    function agregarUsuarioFormulario() {
        let info = new manejoInformacion();
        document.getElementById('agregForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const nombre = document.querySelector('input[id="nombre"]').value;
            const apellido = document.querySelector('input[id="apellido"]').value;
            const telefono = document.querySelector('input[id="telefono"]').value;
            const direccion = document.querySelector('input[id="direccion"]').value;
            const correo = document.querySelector('input[id="correo"]').value;
            const fecha_na = document.querySelector('input[id="fecha_na"]').value;
            const contrasenia = document.querySelector('input[id="contrasenia"]').value;

            
            if( nombre == '' || apellido == '' || telefono == '' || direccion == '' || correo == '' || fecha_na == '' || contrasenia == ''){
                alert('Porfavor complete todos los campos');
            }else{
                info.guardarInfo(nombre, apellido, direccion, 'gerente', fecha_na, correo, contrasenia, telefono);
                window.location.href = '../archivos_HTML/vistaAdministrador.html';
            }            
        });
    }

    function generarCorreo() {
        let nombre = document.getElementById("nombre").value.trim();
        let apellido = document.getElementById("apellido").value.trim();
        let correo = document.getElementById("correo");
    
        // Verifica si ambos campos tienen algún valor
        if (nombre && apellido) {
            // Genera el correo electrónico con el formato deseado
            let correoGenerado = `${nombre.toLowerCase()}.${apellido.toLowerCase()}@hotelesgt.com`;
            // Asigna el correo generado al campo de correo
            correo.value = correoGenerado;
        } else {
            // Si alguno de los campos está vacío, limpia el campo de correo
            correo.value = "";
        }
    }
    