import Link from "next/link";

const Menu = () => {
  return (
    <>
      <div className=" bg-slate-400 py-4 px-4 flex justify-around">
        <Link href={"/"}>Home</Link>
        <Link href={"/About"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/Search"}>Search</Link>
      </div>

      <h1>Hello i am home</h1>
    </>
  );
};

export default Menu;
