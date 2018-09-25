import {storage} from '../firebase';
import toastr from 'toastr';

/**
 * Metodo para subir archivos a storage
 * @returns {String} URL de descarga de la imagen
 * @param {String} ref Nodo de storage donde se almacenara el archivo.
 * @param {File} file Archivo a almacenar en el storage.
 * @param {callback} setProgress CallBack para definir progreso en el estado de componentes.
 */
export const uploadFile = (ref, file, setProgress) => {
    var uploadTask = storage.ref(ref).put(file);
    return uploadTask.on("state_changed", function (snap) {
        var progress = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(progress);
    },function (error) {
        toastr.success("Error al cargar la imagen");
        console.log(error);
    },() => {
        toastr.success("Imagen guardada correctamente");
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            return downloadURL;
        });
    });
}

/**
 * Metodo para obtener URL de descarga de un archivo
 * @returns {String} URL de descarga del archivo
 * @param {String} ref Nodo de storage donde buscara el archivo
 * @param {String} fileName Nombre del archivo a buscar
 */
export const getDownloadURL = (ref, fileName) => {
    return storage.ref(ref).child(fileName).getDownloadURL().then(function (downloadURL) {
        return downloadURL;
    });
}