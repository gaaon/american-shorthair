import React from 'react';

import renderer from 'react-test-renderer';

import Home from '../pages';

import { initializeData, InjectStoreContext } from '../store';
import { createLinkStore } from '../store/link';

it('renders correctly', () => {
  const initialStoreData = initializeData();
  initialStoreData.link = createLinkStore();

  const tree = renderer
    .create(
      <InjectStoreContext initialData={initialStoreData}>
        <Home/>
      </InjectStoreContext>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});