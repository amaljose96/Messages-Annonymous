import Wall from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("Wall", () => {
  it("should render correctly", () => {
    let WallSnapshot = shallow(<Wall/>);
    expect(WallSnapshot).toMatchSnapshot();
  });
});