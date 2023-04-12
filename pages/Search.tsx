import Link from "next/link";
import { useState } from "react";
import Sresult from "./Sresult";

const Search = () => {
  const [img, setImg] = useState("");

  const eventValue = (event: any) => {
    const data = event.target.value;
    setImg(data);
  };
  return (
    <>
      <div className=" bg-slate-400 py-4 px-4 flex justify-around">
        <Link href={"/"}>Home</Link>
        <Link href={"/About"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/Search"}>Search</Link>
      </div>
      <div className="text-center mt-6">
        <input
          placeholder="Search"
          className="shadow py-1 px-4 bg-slate-300 rounded-full text-black"
          value={img}
          onChange={eventValue}
        ></input>

        {img === "" ? "" : <Sresult name={img} />}
      </div>
    </>
  );
};

export default Search;
