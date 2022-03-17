//Clas Libro
function Libro(titulo, autor, editorial, anioPublicacion, signatura) {
    this.titulo = titulo;
    this.autor = autor;
    this.editorial = editorial;
    this.anioPublicacion = anioPublicacion;
    this.signatura = signatura;

    Libro.prototype.toString = function UserrtoString() {
        return "Título: " + this.titulo +
            "<br>Autor: " + this.autor +
            "<br>Editorial: " + this.editorial +
            "<br>Año Publicación: " + this.anioPublicacion +
            "<br>Signatura: " + this.signatura;
    }

}

var form;
var inputs = [];
document.addEventListener('DOMContentLoaded', asignarEventos, false);

function asignarEventos() {
    btn = document.getElementById('btn');
    form = document.getElementsByTagName('input');
    btn.addEventListener('click', gestionarRespuesta1, true);
}

function gestionarRespuesta1(evento) {
    for (i = 0; i < form.length; i++) {
        inputs.push(form[i].value);
    }

    let libro = new Libro(form[0].value, form[1].value, form[2].value, form[3].value, form[4].value);

    xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', gestionarRespuesta, false);
    xhr.open('POST', 'php-biblioteca.php', true);
    xhr.setRequestHeader("content-type", "application/json");
    xhr.send(JSON.stringify(libro));
}

function gestionarRespuesta(evento) {
    if (evento.target.readyState == 4 && evento.target.status == 200) {
        let libro = new Libro();
        objetoRespuesta = JSON.parse(evento.target.responseText);
        libro2 = Object.assign(libro, objetoRespuesta);

        document.body.innerHTML += libro2;
    }
}