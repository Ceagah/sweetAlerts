import Swal from 'sweetalert2'

export function Error() {
    Swal.fire({
        title: 'Error',
        text: 'message',
        icon: 'error',
        confirmButtonText: 'Ok',
    });
}

export function Success() {
    Swal.fire(
        'Parabens !',
        'Nada mudou na sua vida!',
        'success'
    )
}

export function Oops() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo de errado nao está certo!',
        footer: '<a href>Que foi que eu fiz da minha vida senhor?</a>'
    })
}
