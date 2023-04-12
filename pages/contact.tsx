import Link from "next/link";

const Contact = () => {
  return (
    <>
      <div className=" bg-slate-400 py-4 px-4 flex justify-around">
        <Link href={"/"}>Home</Link>
        <Link href={"/About"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/Search"}>Search</Link>
      </div>
      <div>
        <h1>Contact page</h1>
      </div>
    </>
  );
};

export default Contact;
