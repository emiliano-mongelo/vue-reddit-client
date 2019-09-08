import { getEntries } from './reddit-service';

describe('reddit service', () => {
  test('should return a list of entries', async () => {
    const { entries } = await getEntries();
    expect(entries).toHaveLength(10);
  });
});
