import Sum from "./sum";

import renderer from "react-test-renderer";

test("state has to be 0", () => {
  let SumData = renderer.create(<Sum />).getInstance();

  //SumData.change(2)

  expect(SumData.change(2).toEqual(20));
});
