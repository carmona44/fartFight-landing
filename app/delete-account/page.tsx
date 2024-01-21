import Image from "next/image";

export default function DeleteAccount() {
    return (
        <main className="flex min-h-screen flex-col items-center p-10">
            <h1 className="text-xl font-bold underline underline-offset-8 text-center">PASOS PARA BORRAR UN USUARIO</h1>
            <h4 className="mt-10 mb-10">1️⃣) Estando en la pestaña de "Cuescos", pulsar en el icono de las tres rayas en el margen izquierdo de la barra superior:</h4>
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                src="/first-step.jpeg"
                alt="First step to delete user account"
                width={250}
                height={100}
            />
            <h4 className="mt-10 mb-10">2️⃣) Al completar el paso anterior se habrá desplegado un menú lateral que en la parte inferior tiene dos botones. Para borrar el usuario pulsa en "BORRAR USUARIO":</h4>
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                src="/second-step.jpeg"
                alt="Second step to delete user account"
                width={250}
                height={100}
            />
            <h4 className="mt-10 mb-10">3️⃣) Se nos abrirá un modal en el que tendremos que confirmar que queremos borrar nuestro usuario pulsando en el botón de "BORRAR". Este proceso es irreversible y borrará todos los datos del usuario así como el contenido multimedia que haya generado:</h4>
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                src="/third-step.jpeg"
                alt="Third step to delete user account"
                width={250}
                height={100}
            />
            <h4 className="mt-10 mb-10">Si todo ha ido correctamente, el usuario y todo su contenido se habrá borrado de manera exitosa y la aplicación nos llevará de nuevo a la página de login.</h4>
            <h1 className="text-xl font-bold underline underline-offset-8 text-center">EN CASO DE ERROR</h1>
            <h4 className="mt-10 mb-10">Es posible que al realizar el paso 3️⃣ nos de el siguiente error:</h4>
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                src="/error-deleting.jpeg"
                alt="Error deleting user account"
                width={250}
                height={100}
            />
            <h4 className="mt-10 mb-10">Para solucionarlo tan solo tendremos que cerrar sesión, loguearnos de nuevo (para refrescar la autenticación del usuario) y repetir los pasos anteriormente descritos</h4>
        </main>
    )
}
