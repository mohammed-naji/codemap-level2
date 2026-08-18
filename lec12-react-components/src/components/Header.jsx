export default function Header({ title, desc = "dd" }) {
  return (
    <>
      <h1 className="bg-teal-100 text-3xl font-bold py-20 text-center">
        {title}
      </h1>
      <p>{desc}</p>
    </>
  );
}
