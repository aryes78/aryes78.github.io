var counter = 0;
$('.todos-container').on('click', '.delete-button', (event) => {
    //console.log($(event.target.parentElement));
    $(event.target.parentElement).remove();
});

$('.todos-container').on('click', '.checked-button', (event) => {
    console.log($(event.target).attr('src'));
    $(event.target.parentElement).toggleClass('athuzott');
    if ($(event.target).attr('src') == './res/unchecked.svg')
        $(event.target).attr('src', './res/checked.svg');
    else
        $(event.target).attr('src', './res/unchecked.svg');
});

$('#addtodo').click(addTodo);

function addTodo(e) {
    $('.todos-container').append('<li><p>' + $('#todo').val() + '</p><img src="./res/delete.svg" alt="" class="delete-button"><img src="./res/unchecked.svg" alt="" class="checked-button"></li>');
    $('#todo').val('');
}

$('#increase').click(() => {
    counter++;
    $('#counter').text(counter);
});

$('#decrease').click(() => {
    counter--;
    $('#counter').text(counter);
});

$("#todo").keypress(function (event) {
    if (event.which == 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        $('#addtodo').click();
        $("#todo").focus();
    }
});

$('body').mouseup(function () { 
    $("#todo").focus();
});

$(function() {
    $( "ul" ).sortable();
    $( "ul" ).disableSelection();
  });