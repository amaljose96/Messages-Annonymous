import AppBody from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("AppBody", () => {
  it("should render correctly", () => {
    let AppBodySnapshot = shallow(<AppBody/>);
    expect(AppBodySnapshot).toMatchSnapshot();
  });
});