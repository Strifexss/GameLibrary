export default function GameCard({ game }) {
    return (
        <div className="w-full h-[40rem] md:h-[30rem] md:w-[15rem] flex flex-col items-start p-2">
            <img
                src={game.image}
                alt={game.name}
                className="w-full h-[80%] object-cover rounded-md"
            />
            <section className="flex flex-row justify-between w-full font-bold">
                <p className="text-black text-center mt-2">{game.name}</p>
                <p className="text-black text-center mt-2">Nota: {game.nota}</p>
            </section>
        </div>
    );
}
