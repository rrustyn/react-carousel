import { render } from "@testing-library/react";
import Card from "./Card";

it("makes a card", function () {
  render(<Card caption="pillow" src="img.net" currNum="1" totalNum="1" />);
});

it("matches snapshot", function () {
  const { container } = render(
    <Card caption="pillow" src="img.net" currNum="1" totalNum="1" />
  );
  expect(container).toMatchSnapshot();
});