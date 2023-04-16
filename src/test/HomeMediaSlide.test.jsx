import { shallow, configure } from 'enzyme';
import HomeMediaSlide from '../components/HomeMediaSlide';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import "jest-extended";
import React, { useState } from 'react';
import { getMediaList } from "../api/axiosClient";

jest.mock("../api/axiosClient");

configure({ adapter: new Adapter() });

describe('HomeMediaSlide component', () => {
  let wrapper;
  const props = {
    type: 'movie',
    MediaName: 'Popular',
  };

  beforeAll(() => {
    wrapper = shallow(<HomeMediaSlide {...props} />);
  });

  it("should fetch media items on mount", async () => {
    const type = "movie";
    const mediaName = "popular";
    const mockMediaList = [{ id: 1, title: "Movie 1" }, { id: 2, title: "Movie 2" }];
    getMediaList.mockResolvedValue(mockMediaList);

    const wrapper = shallow(<HomeMediaSlide type={type} MediaName={mediaName} />);
    expect(getMediaList).toHaveBeenCalledWith(type, mediaName);
    await flushPromises();
    expect(wrapper.state("items")).toEqual(mockMediaList);
  });
});

// Helper function to resolve promises in component
const flushPromises = () => {
  return new Promise((resolve) => {
    setImmediate(resolve);
  });
}

