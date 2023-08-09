$(document).ready(function(){
    $('.gnb li button').on('click',function(){
        $(this).parent().siblings().find('.submenu').removeClass('active');
        $(this).next().addClass('active');
    })
    $(document).on('click', function(event) {
        var target = $(event.target);

        if (!target.closest('.submenu').length && !target.closest('.gnb li button').length) {
            $('.submenu.active').removeClass('active');
        }
    });
    $('.js-example-basic-single').select2({
        minimumResultsForSearch: -1 // 검색 박스를 비활성화
    });
    $('.tools .main .btn-plus').on('click',function(){
        $('.sliding-panel').toggleClass('slide-on');
    })
});