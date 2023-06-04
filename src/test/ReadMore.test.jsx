import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import ReadMore from "../pages/ReadMore";
import "jest-extended";

configure({ adapter: new Adapter() });

describe("ReadMore", () => {
  it("renders without crashing", () => {
    shallow(<ReadMore />);
  });

  
  it("renders the heading correctly", () => {
    const wrapper = shallow(<ReadMore />);
    const heading = wrapper.find("h1");
    expect(heading.text()).toEqual("Extended information about the site");
  });

  it("renders the content paragraphs correctly", () => {
    const wrapper = shallow(<ReadMore />);
    const paragraphs = wrapper.find(".content p");
    expect(paragraphs).toHaveLength(4);
    expect(paragraphs.at(0).text()).toContain("Our site is first and foremost a social site");
    expect(paragraphs.at(1).text()).toContain("After logging in, a profile page is created for you");
    expect(paragraphs.at(2).text()).toContain("On the home page, you can see movies and series");
    expect(paragraphs.at(3).text()).toContain("In the end, the goal of our website is to create a social platform");
  });

  it("renders the background image correctly", () => {
    const wrapper = mount(<ReadMore />);
    const backgroundImage = wrapper.find(".about-img").prop("style").backgroundImage;
    expect(backgroundImage).toContain("socialmedia.png");
  });
});
