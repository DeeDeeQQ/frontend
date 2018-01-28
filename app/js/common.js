$(document).ready(function()
{
    $('.open').hover
    (
        function() {
            $( this ).addClass('animated');
            $( this ).addClass('pulse');
        },
        function() {
            $( this ).removeClass('animated');
            $( this ).removeClass('pulse');
        }
    );
    $('.exit').hover
    (
        function() {
            $( this ).addClass('animated');
            $( this ).addClass('pulse');
        },
        function() {
            $( this ).removeClass('animated');
            $( this ).removeClass('pulse');
        }
    );
    $(function(){
        $('.open').click(function(){
            $('.hidden').removeClass('bounceOutUp');
            $('.hidden').addClass('active');
            $('.hidden').addClass('animated');
            $('.hidden').addClass('bounceInDown');
            $('.hidden').addClass('view');
        });
    });
    $(function(){
        $('.exit').click(function(){
            $('.hidden').removeClass('bounceInDown');
            $('.hidden').addClass('bounceOutUp');
            setTimeout(fa,600);
            function fa () {
            $('.hidden').removeClass('active');
            $('.hidden').removeClass('animated');
            $('.hidden').removeClass('view');

            };
        });
    });
});
