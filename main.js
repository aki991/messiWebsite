$(document).on("click", ".work-preview", function() {
    var workId = $(this).attr('data-work-id');
    var modalId = 'work-' + workId;
    $('#' + modalId).show();
    $('.work-detail-fade').show();
    $('.work-detail-container').show();
    $('body').addClass('detail-open');
});

$(document).on("click", ".work-detail-close", function() {
    $('.work-detail-fade').hide();
    $('.work-detail-container').hide();
    $('.work-detail').hide();
    $('body').removeClass('detail-open');
});



