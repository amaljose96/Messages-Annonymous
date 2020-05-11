import AppTitle from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("AppTitle", () => {
  it("should render correctly", () => {
    let AppTitleSnapshot = shallow(<AppTitle/>);
    expect(AppTitleSnapshot).toMatchSnapshot();
  });
});