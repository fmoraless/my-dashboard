interface Props {
  params: { id: string };
}

////TODO: repasar rutas diunamicas, ya que hubo error.
export default function PokemonPage({ params }: Props) {
  console.log({ params });
  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
}
