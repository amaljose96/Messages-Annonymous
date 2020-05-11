import Login from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("Login", () => {
  it("should render correctly", () => {
    let LoginSnapshot = shallow(<Login/>);
    expect(LoginSnapshot).toMatchSnapshot();
  });
});