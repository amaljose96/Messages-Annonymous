import ShareThis from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("ShareThis", () => {
  it("should render correctly", () => {
    let ShareThisSnapshot = shallow(<ShareThis/>);
    expect(ShareThisSnapshot).toMatchSnapshot();
  });
});