var work, rest, sets;

init();

function validate(i) {
  // validate input - this should be done better to show popup or something
  if (isNaN(i)) {
    return 1
  } else if (i < 0 || i > 600) {
    return 2
  }
  return 0
}

document.querySelector('.btn-start').addEventListener('click', async function() {
  console.log('start button clicked')
  var work = Number(document.querySelector('.work').value);
  var rest = Number(document.querySelector('.rest').value);
  var sets = Number(document.querySelector('.sets').value);
  console.log(work)
  console.log(rest)
  console.log(sets)
//  console.log('validating...')
  /*
  var w1 = validate(work);
  var r1 = validate(rest);
  var s1 = validate(sets);

// validating and alerting on working and resting seconds
  if (w1 = 1) {
    alert('work value is not a number - please input time in seconds between 1 and 600');
    init()
    return
  } else if (w1 = 2) {
    alert('work value is either too high or too low - please input time in seconds between 1 and 600');
    init()
    return
  }
  if (r1 = 1) {
    alert('rest value is not a number - please input time in seconds between 1 and 600');
    init()
    return
  } else if (r1 = 2) {
    alert('rest value is either too high or too low - please input time in seconds between 1 and 600');
    init()
    return
  }
  // validating sets - needs to be different due - needs lower upper limit (as you wouldnt want to do 600 sets of anything!!!)
  if (s1 = 1) {
    alert('sets value is not a number - please input number of sets you wish to do');
    init()
    return
  }
  if (s1 < 0 || s1 > 20) {
    alert('sets value is either too high or too low - please input number of sets between 1 and 20');
    init()
    return
  }  */




  document.getElementById('text-0').textContent = 'starting in...';
  console.log('prestart')
  for (var i = 5; i > 0; i--) {
    console.log(i)
    document.getElementById('score-0').textContent = i;
    await new Promise(r => setTimeout(r, 1000));
  }

  // sets loop
  for (var s = sets; s > 0; s--) {
    console.log('set')
    console.log(s)
    document.getElementById('current-0').textContent = s;
    // working loop
    for (var w = work; w > 0; w--) {
      console.log('working')
      document.getElementById('text-0').textContent = 'working';
      document.getElementById('score-0').textContent = w;
      await new Promise(r => setTimeout(r, 1000));
    }
    // resting loop
    for (var re = rest; re > 0; re--) {
      console.log('resting')
      document.getElementById('text-0').textContent = 'resting';
      document.getElementById('score-0').textContent = re;
      await new Promise(r => setTimeout(r, 1000));
    }
  }
  document.getElementById('text-0').textContent = 'DONE!';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('current-0').textContent = '0';

});


function load() {
  // load configs from file
}

function save() {
  // save configs to file
}


document.querySelector('.btn-load').addEventListener('click', load);
document.querySelector('.btn-save').addEventListener('click', save);
document.querySelector('.btn-reset').addEventListener('click', init);

function init() {

  console.log('init')

  document.getElementById('score-0').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('text-0').textContent = 'ready';

  document.querySelector('.sets').value = '';
  document.querySelector('.work').value = '';
  document.querySelector('.rest').value = '';

  // check for 
}
