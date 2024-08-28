class manejoInformacion {

    lst = [];

    constructor() {
          
        this.obtenerLista();
    }

    guardarInfo(Nombre, apellido, direc, rol, fechaNacimiento, correo, contrasenia, telefono) {

        let indexNuevo = this.lst.length;

        if(indexNuevo>0){
            indexNuevo = this.lst[indexNuevo-1].id + 1;
        }

        // Añadir un nuevo registro a el array 'lst'
        this.lst.push(
            new  usuario(
                (indexNuevo),
                Nombre,
                apellido,
                direc,
                rol,
                fechaNacimiento,
                correo,
                contrasenia,
                telefono
            ));


        localStorage.setItem("usuarios", JSON.stringify(this.lst));
        
    }
    obtenerLista(){
        const usuariosString = localStorage.getItem('usuarios');
        this.lst = JSON.parse(usuariosString);            
    }

    vaciarLista(){
        let borrarLST=[];
        localStorage.setItem("usuarios", JSON.stringify(borrarLST));
        this.obtenerLista();
    }

    validarUsuarioAdministrador(usuario, contrasenia){

        for(let i=0; i<this.lst.length; i++){
            if(usuario==this.lst[i].correo && contrasenia==this.lst[i].password && this.lst[i].rol == 'administrador'){
                return true;
            }    
        }
        return false;

    }

    buscarUsuario(usuario, contrasenia){

        for(let i=0; i<this.lst.length; i++){
            if(usuario==this.lst[i].correo && contrasenia==this.lst[i].password && this.lst[i].rol == 'administrador'){
                return this.lst[i].id;
            }    
        }
        return false;

    }

    actualizarInfoUsuario(idUs, nombre, apellido, telefono, direc, correo, fechaNacimiento, contrasenia){
        this.lst.forEach(u => {
            if (u.id == idUs) {
                u.name = nombre;
                u.last_name = apellido;
                u.direccion = direc;
                u.correo = correo;
                u.fecha_na = fechaNacimiento
                u.password = contrasenia;
                u.phone = telefono;
                console.log('Usuario ID :' + idUs);
            }
        });

        this.guardarCambios();
    }

    borrarUsuario(index){
        this.lst.splice(index, 1);
        this.guardarCambios();
        alert('Se borro el usuario');
    }

    guardarCambios(){
        localStorage.setItem("usuarios", JSON.stringify(this.lst));
    }

    mostrarInformacion() {
        // Selecciona el tbody donde se mostrarán los datos
        const tablaBody = document.querySelector('#miTabla tbody');
    
        // Limpiar cualquier contenido previo en la tabla
        tablaBody.innerHTML = '';
    
        // Recorre la lista de registros y genera las filas
        this.lst.forEach((registro, index) => {
            const fila = document.createElement('tr');

            // Propiedades que se quieren mostrar
            const camposAMostrar = [this.lst[index].id, this.lst[index].name, this.lst[index].last_name, this.lst[index].rol, this.lst[index].correo, this.lst[index].phone]; 
            
            // Crear celdas para cada elemento del objeto
            camposAMostrar.values(registro).forEach(valor => {
                const celda = document.createElement('td');
                celda.textContent = valor;
                fila.appendChild(celda);
            });
    
            // Crear celda para el botón "Editar"
            const celdaEditar = document.createElement('td');
            const botonEditar = document.createElement('button');
            botonEditar.textContent = 'Editar';
            botonEditar.onclick = () => this.formularioEditar(index); 
            celdaEditar.appendChild(botonEditar);
            fila.appendChild(celdaEditar);
    
            // Crear celda para el botón "Eliminar"
            const celdaEliminar = document.createElement('td');
            const botonEliminar = document.createElement('button');
            botonEliminar.textContent = 'Eliminar';
            botonEliminar.onclick = () => this.formularioBorrar(index);
            celdaEliminar.appendChild(botonEliminar);
            fila.appendChild(celdaEliminar);
    
            // Añadir la fila a la tabla
            tablaBody.appendChild(fila);
        });
    }

    formularioBorrar(i) {
        const registro = this.lst[i];
        const queryString = new URLSearchParams({
            id: registro.id,
            nombre: registro.name,
            apellido: registro.last_name,
            telefono: registro.phone,
            direccion: registro.direccion,
            correo: registro.correo,
            fecha_na: registro.fecha_na,
            contrasenia: registro.password
        }).toString();
        
        window.location.href = `../archivos_HTML/formularioBorrar.html?${queryString}`;
    }
    
    formularioEditar(i) {
        const registro = this.lst[i];
        const queryString = new URLSearchParams({
            id: registro.id,
            nombre: registro.name,
            apellido: registro.last_name,
            telefono: registro.phone,
            direccion: registro.direccion,
            correo: registro.correo,
            fecha_na: registro.fecha_na,
            contrasenia: registro.password
        }).toString();
        
        window.location.href = `../archivos_HTML/formularioEditar.html?${queryString}`;
    }

}

class usuario{
    id;
    name;
    last_name;
    direccion;
    rol;
    fecha_na;
    correo;
    password;
    phone;

    constructor(id, name, last_name, direccion, rol, fecha_na, correo, password, phone){
        this.id = id;
        this.name = name;
        this.last_name = last_name;
        this.direccion = direccion;
        this.rol = rol;
        this.fecha_na = fecha_na;
        this.correo = correo;
        this.password = password;
        this.phone = phone;

    }

}



