const action = require('./Operations');


test('adds 1 + 2 to equal 3', () => {
  expect(action.sum(1, 2)).toBe(3);
});

test('multiply 5 and 2 to equal 10', () => {
    expect(action.mul(5, 2)).toBe(10);
  });


