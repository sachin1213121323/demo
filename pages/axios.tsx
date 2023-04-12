import axios from "axios";
import { useEffect, useState } from "react";

const AxisApi = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setmoves] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      setName(res.data.name);
      setmoves(res.data.moves.length);
    };

    getData();
  });

  return (
    <>
      <div className=" text-4xl font-bold text-center mt-10">
        <h1 className="mb-3">
          Thankyou for select You select{" "}
          <span className=" text-green-500">{name}</span>
        </h1>
        <h1 className="mb-3">
          I am your <span className=" text-green-500">{name}</span>
        </h1>
        <h1 className="mb-3">
          I have <span className=" text-green-500">{moves}</span> moves
        </h1>

        <select
          className=" px-16"
          value={num}
          onChange={(event: any) => {
            setNum(event.target.value);
          }}
        >
          <option>1</option>
          <option>2</option>
          <option>25</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
        </select>
      </div>
    </>
  );
};

export default AxisApi;
