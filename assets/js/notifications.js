$(function() {
    toastr.options.closeButton = true;
    toastr.options.closeMethod = 'fadeOut';
    toastr.options.closeDuration = 300;
    toastr.options.closeEasing = 'swing';
    toastr.options.showEasing = 'swing';
    toastr.options.hideEasing = 'linear';
    toastr.options.closeEasing = 'linear';
    toastr.options.showMethod = 'slideDown';
toastr.options.hideMethod = 'slideUp';
toastr.options.closeMethod = 'slideUp';
toastr.options.timeOut = 3000;
toastr.options.progressBar = true;
    toastr.info('Hi! Thanks for visiting');
});

$( '#mywork' ).ready(function() {
    console.log( "Hi! It seems like you love your browser console. Did you knew that this website is open source? Check it out at https://github.com/sergivb01/sergivb01.github.io" );
});