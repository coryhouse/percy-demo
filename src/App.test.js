import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import renderer from "react-test-renderer";
import { render } from "react-testing-library";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("matches snapshot", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("contains a paragraph", () => {
  const { getByText } = render(<App />);
  getByText("Learn React again and again.");
});
