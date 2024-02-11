import Scene from "../../components/escene";

interface PokedexProps {
  params: {
    pageId: number;
  };
}

const Pokedex = ({ params }: PokedexProps) => {
  return (
    <div className="h-[600px] w-[1200px]">
      <Scene id={params.pageId} />
    </div>
  );
};
export default Pokedex;
