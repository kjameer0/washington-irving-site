import { makeHashLink } from './utils-NavBar';

describe('hash link function', () => {
  test('it should filter by a search term (link)', () => {
    const testString1 = 'Student Corner';
    const testString2 = `Teacher's Hub`;
    const testString3 = `Counselor's Corner?`;
    expect(makeHashLink(testString1)).toBe('#student-corner');
    expect(makeHashLink(testString2)).toBe('#teacher-hub');
    expect(makeHashLink(testString3)).toBe('#counselor-corner');
  });
});
