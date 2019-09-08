import formatDate from './format-date';
const ts = 978318000; // 01/01/2001 00:00:00

describe('formatDate', () => {
  test('should return a formatted date ', () => {
    const formatted = formatDate({ ts, format: 'YYYYMMDD'});
    expect(formatted).toEqual('20010101');
  });

  test('should return a date with default format', () => {
    const formatted = formatDate({ ts });
    expect(formatted).toEqual(
      expect.stringContaining('2001-01-01T00:00:00')
    );
  });

  test('should return a relative date ', () => {
    const relative = formatDate({ ts, relative: true});
    expect(relative).toEqual('19 years ago');
  });
});
