import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import React from "react";
import AboutUs from "../pages/AboutUs";
import "jest-extended";

configure({ adapter: new Adapter() });

describe("AboutUs component", () => {
  it("should render the component without crashing", () => {
    const wrapper = shallow(<AboutUs />);
    expect(wrapper).toHaveLength(1);
  });

  it("should have a h1 element with text 'About Us'", () => {
    const wrapper = shallow(<AboutUs />);
    expect(wrapper.find("h1").text()).toEqual("About Us");
  });

  it("should have a div with class 'about'", () => {
    const wrapper = shallow(<AboutUs />);
    expect(wrapper.find("section.about")).toHaveLength(1);
  });

  it("should have three 'content' divs", () => {
    const wrapper = shallow(<AboutUs />);
    expect(wrapper.find("div.content")).toHaveLength(3);
  });

  it("should have a 'Developer' progress bar with 80% progress", () => {
    const wrapper = shallow(<AboutUs />);
    const developerProgressBar = wrapper.find(".progress-bar.Developer");
    expect(developerProgressBar).toHaveLength(1);

    const designerLabel = developerProgressBar.find("span");
    expect(designerLabel).toHaveLength(1);
    expect(designerLabel.text()).toEqual("80%");

    const designerHeading = developerProgressBar
      .closest(".progress-wrap")
      .find("h3");
    expect(designerHeading).toHaveLength(1);
    expect(designerHeading.text()).toEqual("Developer");
  });

  it("should have a 'React' progress bar with 100% progress", () => {
    const wrapper = shallow(<AboutUs />);
    const reactProgressBar = wrapper.find(".progress-bar.React");
    expect(reactProgressBar).toHaveLength(1);

    const designerLabel = reactProgressBar.find("span");
    expect(designerLabel).toHaveLength(1);
    expect(designerLabel.text()).toEqual("100%");

    const designerHeading = reactProgressBar
      .closest(".progress-wrap")
      .find("h3");
    expect(designerHeading).toHaveLength(1);
    expect(designerHeading.text()).toEqual("React");
  });

  it("should have a 'Designer' progress bar with 90% progress", () => {
    const wrapper = shallow(<AboutUs />);

    const designerProgressBar = wrapper.find(".progress-bar.Designer");
    expect(designerProgressBar).toHaveLength(1);

    const designerLabel = designerProgressBar.find("span");
    expect(designerLabel).toHaveLength(1);
    expect(designerLabel.text()).toEqual("90%");

    const designerHeading = designerProgressBar
      .closest(".progress-wrap")
      .find("h3");
    expect(designerHeading).toHaveLength(1);
    expect(designerHeading.text()).toEqual("Designer");
  });
});
