import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { AuthContextProvider } from "../context/AuthContext";
import AuthContext from "../context/AuthContext";

configure({ adapter: new Adapter() });

describe("AuthContextProvider", () => {
  it("should render children components", () => {
    const wrapper = shallow(
      <AuthContextProvider>
        <div>Hello World!</div>
      </AuthContextProvider>
    );
    expect(wrapper.contains(<div>Hello World!</div>)).toBe(true);
  });
});
