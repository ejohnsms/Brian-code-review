// @flow
import { getTriangleType } from "../src/triangles";
import type { TriangleType } from "../src/triangles"

const scalene: TriangleType = 'SCALENE';
const invalid: TriangleType = 'INVALID';
const equilateral: TriangleType = 'EQUILATERAL';
const isosceles: TriangleType = 'ISOSCELES';

test('classify scalene triangle - 3 4 5 when no sides are equal', () => {
  expect(getTriangleType(3,4,5)).toBe(scalene);
});


test('classify invalid triangle - 12 3 24  when sum of two sides less than third side', () => {
  expect(getTriangleType(12,3,24)).toBe(invalid);
});

/*
   Parameterized testing; one code block, multiple sets of data/ expected results
*/

test.each([
  [3,4,5, scalene,' when no sides are equal'],   /* a,b,c inputs for sides, expected result, and extra string appended as part of test name */
  [5,5,5,equilateral,' when all sides are equal'],
  [12,3,24,invalid,' when sum of two sides less than third side'],

  [4,3,3,isosceles,' when two sides are equal'],
  [3,4,3,isosceles,' when two sides are equal'],
  [3,3,4,isosceles,' when two sides are equal'],

  [0,4,5,invalid,' when any side is zero'],
  [4,0,5,invalid,' when any side is zero'],
  [4,5,0,invalid,' when any side is zero'],

  [-1,4,5,invalid,' when any side is negative'],
  [4,-1,5,invalid,' when any side is negative'],
  [4,5,-1,invalid,' when any side is negative'],

  [2,2,4,invalid,' when sum of two sides = third side'],
  [6,3,3,invalid,' when sum of two sides = third side'],
  [4,9,5,invalid,' when sum of two sides = third side'],

  [2,2,5,invalid,' when sum of two sides less than third side'],
  [7,3,3,invalid,' when sum of two sides less than third side'],
  [4,10,5,invalid,' when sum of two sides less than third side'],

  [5,5,5,equilateral,' when all sides are equal'],
  [10,10,10,equilateral,' when all sides are equal'],
  [1,1,1,equilateral,' when all sides are equal'],
  
])('classify(%i,%i,%i) as %s %s', (a,b,c,expected) => {
  expect(getTriangleType(a,b,c)).toBe(expected);
});