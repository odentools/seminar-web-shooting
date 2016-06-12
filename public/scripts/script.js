/**
 * seminar-web-shooting - フロントエンド スクリプト
 */

$(function () { // ページの読み込み(正しくはDOMの構築)が完了したとき


	// 飛行機オブジェクトの初期化 - 自機
	var player_x = $(window).width() / 2;
	var player_y = $(window).height() - 100;
	var player = new Airplane($('#player'), false, player_x, player_y);

	// 敵機による弾発射
	window.setInterval(function () {


	}, 1500);

	// キーが押されたときのイベントハンドラを定義
	$("#view").bind("touchstart", function(e) {
		e.preventDefault();
		// タッチ位置を取得する
		var touchX =  e.originalEvent.changedTouches[0].pageX ;	// X座標
		var touchY =  e.originalEvent.changedTouches[0].pageY ;	// Y座標
		player.moveTo(touchX, touchY);
	});

	// キーが押されたときのイベントハンドラを定義
	$("#view").bind("touchmove", function(e) {
		e.preventDefault();
		// タッチ位置を取得する
		var touchX =  e.originalEvent.changedTouches[0].pageX ;	// X座標
		var touchY =  e.originalEvent.changedTouches[0].pageY ;	// Y座標
		player.moveTo(touchX, touchY);
	});


});
