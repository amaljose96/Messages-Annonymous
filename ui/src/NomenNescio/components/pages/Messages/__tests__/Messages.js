import Messages from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("Messages", () => {
  it("should render correctly", () => {
    let MessagesSnapshot = shallow(<Messages/>);
    expect(MessagesSnapshot).toMatchSnapshot();
  });
});