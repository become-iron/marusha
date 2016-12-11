var is_open = false;

/* Set the width of the side navigation to 250px */
function openNav() {
  if (!is_open) {
    $('#menu-items').width("15rem");
    $('#menu-toggle').css('left', '16rem');
    is_open = true;
  }
  else {
    $('#menu-items').width("0");
    $('#menu-toggle').css('left', '1rem');
    is_open = false;
  }
  // document.getElementById("mySidenav")
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  $('#menu-items').width("0");
  is_open = false;
}

var is_open_modal = false;

function toggleModal() {
  if (!is_open_modal) {
    $('#syllable-detail-bg').css('display', 'block');
    $('#syllable-detail').css('display', 'block');
    is_open_modal = true;
  }
  else {
    $('#syllable-detail-bg').css('display', 'none');
    $('#syllable-detail').css('display', 'none');
    is_open_modal = false;
  }
}

var is_open_table = false;

function toggleTable() {
  if (!is_open_table) {
    $('#progress-table-bg').css('display', 'block');
    $('#progress-table').css('display', 'block');
    is_open_table = true;
  }
  else {
    $('#progress-table-bg').css('display', 'none');
    $('#progress-table').css('display', 'none');
    is_open_table = false;
  }
}

