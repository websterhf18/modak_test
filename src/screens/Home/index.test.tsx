import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import Component from './index';

describe(`Testing ${Component.name}`, () => {
  test('Smoke test', () => {
    render(<Component />);
  });
});
