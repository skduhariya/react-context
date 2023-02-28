import { ContextA, ContextB } from "../App";

function CompC() {
  return (
    <>
      <ContextA.Consumer>
        {(value) => {
          return (
            <ContextB.Consumer>
              {(valueb) => {
                return (
                  <h1>
                    Sum of two no a = {value} b = {valueb} = {value + valueb}
                  </h1>
                );
              }}
            </ContextB.Consumer>
          );
        }}
      </ContextA.Consumer>
    </>
  );
}
export default CompC;
