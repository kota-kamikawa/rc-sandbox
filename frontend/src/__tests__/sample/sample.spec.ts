import { describe, expect, it } from 'vitest';

import { add } from './sample';

describe('add', () => {
  it('1 + 2 = 3', () => {
    const result = add(1, 2);

    expect(result).toBe(3);
  });
});
