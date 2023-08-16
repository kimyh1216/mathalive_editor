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
    $('.tools .main .btn-plus, .view-menu-item .btn_close').on('click',function(){
        $('.sliding-panel').toggleClass('slide-on');
    });
    
    $('.dep-2 ul li').click(function() {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.view-menu-item>ul>li').eq(index).addClass('active').siblings().removeClass('active');
    });
    $(".dep-3 ul li").click(function() {
        var allLi = $(this).parents('.dep-3').find('li');
        var liIndex = allLi.index($(this));
        allLi.removeClass('active');
        $(this).addClass('active');
        $(this).parents('.dep-3').next().find('.item-content>ul>li').eq(liIndex).addClass('active').siblings().removeClass('active');
    });

});