// @flow

/**
* Return the type of triangle that three provided lengths would form.
*
* @param a
*            length of the first side
* @param b
*            length of the second side
* @param c
*            length of the third side
*
* @return
*         <ul>
*         <li>INVALID if the three lengths do not form a triangle.
*         <li>EQUILATERAL if the three lengths are equal.
*         <li>ISOSCELES if two lengths are equal.
*         <li>SCALENE if all three lengths are different.
*         </ul>
*
*/

export type TriangleType = 'INVALID' | 'EQUILATERAL' | 'ISOSCELES' | 'SCALENE';

/**
* To form a triangle, the sum of the lengths of any two sides must be greater than or equal
* (i.e., degenerate) to the length of the third side. However, this implementation treats the
* degenerate case (a + b = c) as invalid.
*
* @return True if the sum of the lengths of any two sides is greater than the length of the
*         third side.
*
* TODO: Avoid overflow when side lengths == MAXINT
*/
const sidesFormATriangle = (a:number, b:number, c:number):boolean => {
    return a + b > c && b + c > a && a + c > b;
}

const allSidesAreEqual = (a:number, b:number, c:number):boolean => {
    return a == b && b == c;
}

const twoSidesAreEqual = (a:number, b:number, c:number):boolean => {
    return a == b || b == c || c == a;
}

export const getTriangleType = (a:number, b:number, c:number):TriangleType => {
    if (sidesFormATriangle(a, b, c)) {
        if (allSidesAreEqual(a, b, c)) {
            return 'EQUILATERAL';
        }
        else if (twoSidesAreEqual(a, b, c)) {
            return 'ISOSCELES';
        }
        else {
            return 'SCALENE';
        }
    }
    else {
        return 'INVALID';
    }
}
