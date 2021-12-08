import Textures from './Textures';
import Parts from './Parts';
import Designs from './Designs';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  texture: Textures,
  part: Parts,
  design: Designs,
});

export default allReducers;
