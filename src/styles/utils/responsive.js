/* eslint-disable */
import { css } from '@emotion/core';
import omit from 'lodash/omit';

import mq from './media';

export const makeResponsive = (responsiveBlock) => {
  const reducedMq = omit(mq, 'xsm');
  const deltas = responsiveBlock.map(item => ({
    ...item,
    delta: (item.max - item.min) / 3,
    first: `
        ${item.property}: ${item.min}${item.unit || ''};
      `
  }));

  return Object.keys(reducedMq).reduce(
    (acc, breakpoint, idx) => css`
      ${acc} ${reducedMq[breakpoint](css`
        ${deltas.reduce(
          (group, delta) => `
              ${group}
              ${delta.property}: ${delta.min +
            delta.delta * (idx + 1)}${delta.unit || ''};
            `,
          ''
        )};
      `)};
    `,
    deltas.reduce(
      (firsts, delta) => css`${firsts} ${delta.first};`,
      ''
    )
  );
};
