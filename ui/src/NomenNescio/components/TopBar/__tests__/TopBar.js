import TopBar from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("TopBar", () => {
  it("should render correctly", () => {
    let TopBarSnapshot = shallow(<TopBar/>);
    expect(TopBarSnapshot).toMatchSnapshot();
  });
});