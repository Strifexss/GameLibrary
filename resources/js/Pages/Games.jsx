import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head} from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import GameForm from "@/Pages/Games/GameForm.jsx";
import GameCard from "@/Pages/Games/GameCard.jsx";

export default function Games({games}) {
    return (
        <AuthenticatedLayout>
            <Head title="Games" />
            <div className="w-full h-full p-8 md:p-4">
                <GameForm/>
                <div className="w-full flex justify-around items-center gap-2 flex-wrap mt-4">
                    {games.map(game => {
                       return (
                           <GameCard game={game}/>
                       )
                    })}
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
