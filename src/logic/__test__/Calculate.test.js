/* eslint-disable import/extensions */
import calculate from '../calculate';

test('Testing calculate functions', () => {
  expect(calculate({ next: '2', operation: '+', total: '3' }, 'AC')).toEqual({
    next: null,
    operation: null,
    total: null,
  });
  expect(calculate({ next: '2', operation: '+', total: '3' }, '+')).toEqual({
    next: null,
    operation: '+',
    total: '5',
  });
  expect(calculate({ next: '2', operation: 'x', total: '5' }, 'x')).toEqual({
    next: null,
    operation: 'x',
    total: '10',
  });
  expect(calculate({ next: '5', operation: '%', total: '0' }, '%')).toEqual({
    next: null,
    operation: '%',
    total: '0',
  });
});
