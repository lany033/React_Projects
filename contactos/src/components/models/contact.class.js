export class Contact {
    nombre =  '';
    apellido = '';
    email = '';
    estado = true

    constructor(nombre,apellido,email,estado){
        this.nombre =  nombre;
        this.apellido = apellido;
        this.email = email;
        this.estado = estado
    }
}