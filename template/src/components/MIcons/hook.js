import React from 'react';
import { ICON_NAMES } from './icon_names';
import CrossIcon from './CrossIcon';

export const ICONS = {
  [ICON_NAMES.CROSS]: ({ width, height, size, color }) => (
    <CrossIcon width={width} height={height} size={size} color={color} />
  ),
};
