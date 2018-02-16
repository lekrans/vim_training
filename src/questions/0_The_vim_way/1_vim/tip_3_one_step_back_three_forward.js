/* One step back and three step forward

  KEY:  s,
        to use f to prepare the ';' command (repeat movement)
        to 'replace' something instead of adding several times.. like here.. replacing '+' with = ' + ' instead of insert spaces on each side (which is not repeatable)

  Sometimes it is better to 'start over' or delete MORE .. like here if we want to substitute '+' with ' + '
  it might be better to remove the original + and start over.. its probably faster, but it also produce a repeatable
  action
*/

/*  start at beginning of line
  f+
  s␣+␣<Esc>
  ;
  .
  ;.
  ;.
*/

var foo = "method("+argument1+","+argument2+")";

/* result
  var foo = "method(" + argument1 + "," + argument2 + ")";
*/
