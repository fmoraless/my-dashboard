interface Props {
  params: { id: string };
}
export default function PokemonPage({ params }: Props) {
  console.log({ params });
  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
}
