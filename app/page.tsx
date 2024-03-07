export default function Home() {
  return (
    <div
      className="flex h-full my-auto bg-red-400 justify-center"
      style={{
        height: "100vh",
        maxHeight: "1000px",
      }}
    >
      <div className="max-w-7xl bg-blue-500 my-auto text-center">
        <p className="text-3xl font-extralight">
          Welcome to our PokeApp <br /> Let's find your favorite pokemon
        </p>

      </div>
    </div>
  );
}
