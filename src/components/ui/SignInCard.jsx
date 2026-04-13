import { useState } from "react";

export default function SignInCard() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const handleSubmit = () => {
        console.log({ email, password, remember });
    };

    return (
        <div className="relative flex w-96 flex-col rounded-xl bg-white text-gray-700 bg-clip-border shadow-md">
            <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-linear-to-tr from-gray-900 to-gray-400 bg-clip-border text-white shadow-lg shadow-gray-500/40">
                <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                    Iniciar sesión
                </h3>
            </div>

            <div className="flex flex-col gap-4 p-6">
                <div className="relative h-11 w-full min-w-50">
                    <input
                        type="email"
                        placeholder=""
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0"
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500">
                        Correo
                    </label>
                </div>

                <div className="relative h-11 w-full min-w-50">
                    <input
                        type="password"
                        placeholder=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0"
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500">
                        Contraseña
                    </label>
                </div>

                <div className="-ml-2.5 inline-flex items-center gap-2 pl-3">
                    <input
                        id="remember"
                        type="checkbox"
                        checked={remember}
                        onChange={(e) => setRemember(e.target.checked)}
                        className="h-5 w-5 cursor-pointer rounded-md border border-blue-gray-200 checked:border-cyan-500 checked:bg-cyan-500"
                    />
                    <label
                        htmlFor="remember"
                        className="cursor-pointer select-none font-light text-gray-700"
                    >
                        Recordarme
                    </label>
                </div>
            </div>

            <div className="p-6 pt-0">
                <button
                    onClick={handleSubmit}
                    type="button"
                    className="block w-full select-none rounded-lg bg-linear-to-tr from-gray-900 to-gray-400 py-3 px-6 text-center font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 active:opacity-[0.85]"
                >
                    Iniciar
                </button>
                <p className="mt-6 flex justify-center font-sans text-sm font-light text-inherit antialiased">
                    ¿No tienes una cuenta?
                    <a
                        href="#signup"
                        className="ml-1 font-sans text-sm font-bold text-cyan-500 antialiased"
                    >
                        Regístrate
                    </a>
                </p>
            </div>
        </div>
    );
}
