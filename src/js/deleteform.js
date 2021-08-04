/**
 * Hiermit wird erst das Formular geöffnet, um zu Fragen ob Sie wirklich löschen wollen.
 */

//Nötig für das löschen von Datensätzen
var deleteID;

function OpenDeleteForm(id) {
    deleteID = id;
    $('#myModalDelete').modal('show');
}