import { useContext } from "react";
import { ContextA, ContextB } from "../App";
import CompC from "./CompC";

function CompB() {
  const a = useContext(ContextA);
  const obj = useContext(ContextB);

  return (
    <>
      <div>
        name: {obj.name}
        <br />
        email:{obj.email}
      </div>
      <h2>
        a= {a}, b={obj.value} sum ={a + obj.value}
      </h2>
    </>
  );
}
export default CompB;
