var counter=0;
$('.todos-container').on('click', '.delete-button', (event) => {
    //console.log($(event.target.parentElement));
    $(event.target.parentElement).remove();
});

$('.todos-container').on('click', '.checked-button', (event) => {
console.log($(event.target).attr('src'));
$(event.target.parentElement).toggleClass('athuzott');
if ($(event.target).attr('src') =='./res/unchecked.svg')
    $(event.target).attr('src', './res/checked.svg');
    else
    $(event.target).attr('src', './res/unchecked.svg');
});

$('#addtodo').click(function (e) { 
    $('.todos-container').append('<li><p>'+$('#todo').val()+'</p><img src="./res/delete.svg" alt="" class="delete-button"><img src="./res/unchecked.svg" alt="" class="checked-button"></li>');
    $('#todo').val('');
});

$('#increase').click(() => { 
    counter++;
    $('#counter').text(counter);
});

$('#decrease').click(() => { 
    counter--;
    $('#counter').text(counter);
});

