import { formatRating } from './store-util-formatters';

describe('formatRating', () => {
  it('should work', () => {
    expect(formatRating(0.0140)).toEqual('0.1 / 10');
  });
});
