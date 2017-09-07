$(function () {
    var trgts = $('.mainnav__link:eq(0)').attr('trgt');
    var CategoryId = $('.mainnav__link:eq(0)').attr('data-id');
    console.log(CategoryId);
    bindsubcategory(CategoryId,trgts);
    console.log(trgts);
    if (trgts.replace("#", "").toUpperCase() == "THEME") {
        GetThemeLatest(0);
        GetThemeTrending(0);
    }
    $('.mainnav__link').click(function () {
        var trgts = $(this).attr('trgt');
        var CategoryId = $(this).attr('data-id');
        bindsubcategory(CategoryId,trgts);

    });

    function bindsubcategory(CategoryId, trgts) {
        trgts = trgts.replace("#", "");
        $.ajax({
            cache: false,
            type: "POST",
            url: SubPath,
            data: { categoryid: CategoryId },
            success: function (data) {
               // $(".mainnav-row li div").hide();
                $('#subnav_'+trgts).html('');
                $('#subnav_' + trgts).html(data);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert('Failed subcategories.');
            }
        });
    }
});
function GetTheme(ctrl) {
    var SubCategoryId = $(ctrl).attr('data-id');
    GetThemeLatest(SubCategoryId);
    GetThemeTrending(SubCategoryId);
}

function GetThemeLatest(SubCategoryId) {
    $.ajax({
        cache: false,
        type: "POST",
        url: ThemePath,
        data: { SubCategoryId: SubCategoryId },
        async:false,
        success: function (data) {
            $('#ThemeLatest').html('');
            $('#ThemeLatest').html(data);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(thrownError);
        }
    });
}

function GetThemeTrending(SubCategoryId) {
    $.ajax({
        cache: false,
        type: "POST",
        url: ThemeTrendingPath,
        data: { SubCategoryId: SubCategoryId },
        async: false,
        success: function (data) {
            $('#ThemeTrending').html('');
            $('#ThemeTrending').html(data);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(thrownError);
        }
    });
}

function GetThemeRelated(SubCategoryId) {
    $.ajax({
        cache: false,
        type: "POST",
        url: ThemeRelated,
        data: { SubCategoryId: SubCategoryId },
        async: false,
        success: function (data) {
            $('#ThemeRelated').html('');
            $('#ThemeRelated').html(data);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert('Failed to retrieve books.');
        }
    });
}