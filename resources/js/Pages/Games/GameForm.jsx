import { useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

export default function GameForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        nota: '',
        image: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('games'), {
            onFinish: () => reset('name', 'nota', 'image'),
        });
    };

    return (
        <form onSubmit={submit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
                {/* Nome */}
                <div className="flex-1">
                    <InputLabel htmlFor="name" value="Nome" />
                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                {/* Nota */}
                <div className="flex-1">
                    <InputLabel htmlFor="nota" value="Nota" />
                    <TextInput
                        id="nota"
                        type="number"
                        name="nota"
                        min={0}
                        max={10}
                        value={data.nota}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('nota', e.target.value)}
                    />
                    <InputError message={errors.nota} className="mt-2" />
                </div>
            </div>

            {/* Imagem */}
            <div>
                <InputLabel htmlFor="image" value="Imagem" />
                <TextInput
                    id="image"
                    type="text"
                    name="image"
                    value={data.image}
                    className="mt-1 block w-full"
                    onChange={(e) => setData('image', e.target.value)}
                />
                <InputError message={errors.image} className="mt-2" />
            </div>

            {/* Botão */}
            <div className="flex justify-end">
                <PrimaryButton className="ms-4" disabled={processing}>
                    Cadastrar
                </PrimaryButton>
            </div>
        </form>
    );
}
