import Link from "next/link";

const About = () => {
  return (
    <>
      <div className=" bg-slate-400 py-4 px-4 flex justify-around">
        <Link href={"/"}>Home</Link>
        <Link href={"/About"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/Search"}>Search</Link>
      </div>
      <div>
        <h1>About page</h1>
      </div>
    </>
  );
};

export default About;
