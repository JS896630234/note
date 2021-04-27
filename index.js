$(function(){
load();
//显示与隐藏
var createform = document.querySelector('#create-form');
var createbg = document.querySelector('#create-bg');
var creabtn = document.querySelector(".creabtn");

$(".creabtn").on("click", function () {
    $('#create-form').show();
    $('#create-bg').show();
});
$(".editpic").on("click", function () {
    $('#create-form').show();
    $('#create-bg').show();
});


$(".delbtn").on("click", ".delpic", function () {
    $("#del-form,#del-bg").show();
   var i =this;
    $(".delete-confirm").on('click', function () {
        var data = getData();
        //修改数据，利用索引号index
        //this是指delpic
        var index = $(i).attr('id');
        data.splice(index, 1);
        saveData(data);
        $("#del-form,#del-bg").hide();
        location.reload()
    });
    $(".delte-confirm").attr('id', index);
});




$(".cancel").on('click', function () {
    $('#create-form').hide();
    $('#create-bg').hide();

})
$(".delete-cancel").on('click', function () {
    $("#del-form,#del-bg").hide();
})





$(".confirm").on('click', function () {
    var local = getData();
    local.push({
        title: $('.title-contain').val(), info: $(".create-contain").val(),
        date: $(".create-time").val()
    });
    //把数组保存到本地存储
    saveData(local);
    $('#create-form').hide();
    $('#create-bg').hide();
    location.reload()
})

//得到数据，保存为数组形式
function getData() {
    var data = localStorage.getItem('infolist');
    if (data !== null) {
        return JSON.parse(data);

    }
    else {
        return [];
    }
}


//渲染加载数据到界面
function load() {
    var data = getData();
    // 先清空info里的信息
    $(".datalist").empty();
    $.each(data, function (i, n) {
        $(".datalist").prepend(" <div class='info'><span class='del'><button class='delbtn' type='button'><img class='delpic' src='images/delete.png' id=" + i + "></button></span><span class='edit'><img class='editpic' src='images/edit.png' id=" + i + "></span><ul class='list-content'><div class='title'>" + n.title + "</div><li>" + n.info + "</li><li class = 'date'>" + n.date + "</li></ul></div>");
    })
    
}


//保存数据到本地
function saveData(data) {
    localStorage.setItem('infolist', JSON.stringify(data));
}
function change_color() {
    var color = document.querySelectorAll(".list-content");
    for (var i = 0; i < color.length; i++) {
        color[i].style.backgroundColor = 'rgb((10 * i) % 255, (20 * i) % 255, (30 * i) % 255)';       console.log(11);
    }
}
change_color();

});