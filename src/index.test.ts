import { isFoo } from './index'

test('should return true ONLY if given foo', () => {
  expect(isFoo('foo')).toBe(true)
  expect(isFoo('bar')).toBe(false)
  expect(isFoo('baz')).toBe(false)
})
