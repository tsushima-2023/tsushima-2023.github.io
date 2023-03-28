//必ずbxslider関数を呼び出す(サイトからstep3をコピーしてもってくる)
$('.bxslider').bxSlider({
    mode: 'fade', //画像が切り替わるモードの設定
    auto: true, //自動で切り替わる設定
    pause: 3800, //切り替わる速さの設定
    controls: false, //矢印を消す設定
    pager: false, //黒い丸を消す設定
    touchEnabled: false, //スマホ時のスライドを無効
});

//ajaxで外部ファイルを呼び出す(news.txt)
$('#news-list').load('news.txt');

//ハンバーガーメニュー
$('#g-nav').hide();
$('#ham-btn').on('click',function(){
    $(this).toggleClass('is-active');
    $('#g-nav').fadeToggle(200);
});

//ナビボタンをクリックしたらナビを消す
$('#g-nav a').on('click',function(){
    $('#g-nav').hide();
    $('#ham-btn').removeClass('is-active');
});

//西暦を取得
let fullyear = new Date().getFullYear();
console.log(fullyear);
//2024年以降は2023-2024と表示させたい
if(fullyear > 2023){
    $('#this-year').text('2023-'+fullyear);
}else{
    $('#this-year').text(fullyear);
}