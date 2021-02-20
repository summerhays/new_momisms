document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      // do this
    document.body.innerHTML = document.body.innerHTML.replace("// 'wholeWords': true", "'wholeWords': true");
    document.body.innerHTML = document.body.innerHTML.replace("Poke Around", "Go me");
	    console.log('hi');
    } else {
      // do that
    document.body.innerHTML = document.body.innerHTML.replace("'wholeWords': true", "// 'wholeWords': true");
	    console.log('there');
    }
  });
});
