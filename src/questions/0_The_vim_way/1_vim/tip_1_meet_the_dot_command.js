/*
  Meet the dot command

  see also:
    tip 9
    tip 23

  KEY: .

  x.
  .
  .
  .

*/

Line one
Line two
Line three
Line four
/*   result

 one
Line two
Line three
Line four

*/

//  start on line 1
//  dd
//  .

Line one
Line two
Line three
Line four

/* result

Line three
Line four
*/


//  start on line 2
//  >G
//  j
//  .
//  j.

Line one
Line two
Line three
Line four

/*
Line one
    Line two
        Line three
            Line four
*/
