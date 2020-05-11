import Message from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("Message", () => {
  it("should render correctly", () => {
    let MessageSnapshot = shallow(<Message/>);
    expect(MessageSnapshot).toMatchSnapshot();
  });
});