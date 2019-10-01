
function factorial(n) {
  if (n < 0) return;

  if (n === 0) return 1;

  return n * factorial(n - 1);
  // var array = [i, n];
  // for (var i = 1; i <= n; i++) {
  // console.log(n)
  // if (i < n) {
  //   array.push(i);
  //   console.log(array);
  };
// };
// };

  $(document).ready(function() {
    $('#inputs form').submit(function(event) {
      event.preventDefault();

      var n = parseInt($('input#int').val());
      result = factorial(n);
console.log(result)

    });
  });
