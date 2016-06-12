/**
 * seminar-web-shooting - フロントエンド スクリプト
 */
 //	難しさ選択
 /*var easy_x = $(window).width() / 10;
 var easy_y = $(window).height() / 10;
 var easy = new level($('#easy'),false, easy_x, easy_y);
 var normal_x = $(window).width() / 10;
 var normal_y = $(window).height() / 8;
 var normal = new level($('#normal'),false, normal_x, normal_y);
 var hard_x = $(window).width() / 10;
 var hard_y = $(window).height() / 6;
 var hard = new level($('#hard'),false, hard_x, hard_y);

 $(function(){
 $("easy").click(function(){
 enemySpeed = 100;
 enemy Burret = 10;
 start();
 })
 })
 */
$(function () { // ページの読み込み(正しくはDOMの構築)が完了したとき





	// 飛行機オブジェクトの初期化 - 自機
	var player_x = $(window).width() / 2;
	var player_y = $(window).height() - 100;
	var player = new Airplane($('#player'), false, player_x, player_y);

	// 飛行機オブジェクトの初期化 - 敵機
	var enemy = new Airplane($('#enemy'), true);

/*
	// インターバル
	var Button_x = $(window).width() / 4;
	var Button_y = $(window).height() /10;
	var levelbth = new Button($('#levelbth'),) false, Button_x, Button_y);
	$("#levelbth").click(function(){

*/
		// 敵機を左右に動かす
		var enemy_direction = true;
		window.setInterval(function () {

			if (enemy_direction) {
				enemy.moveLeft();
			} else {
				enemy.moveRight();
			}


			if (!enemy_direction && enemy.getX() <= 0) {
				// 敵機を反転させる
				enemy_direction = !enemy_direction;
			} else if (enemy_direction && $(window).width() <= enemy.getX()) {
				// 敵機を反転させる
				enemy_direction = !enemy_direction;
			}

		}, 10);

		// 敵機による弾発射
		window.setInterval(function () {

		//		enemy.R_fire();
				enemy.fire();
		}, 300);

		// キーが押されたときのイベントハンドラを定義
		$(window).keydown(function (event) {

			var keycode = event.keyCode;
			if (!keycode) return;

			if (keycode == 37) { // カーソルキーの左(←)ならば
				// 自機を左へ移動
				player.moveLeft();
			} else if (keycode == 38) { // カーソルキーの上(↑)ならば
				// 自機を前へ移動
				player.moveFront();
			} else if (keycode == 40) { // カーソルキーの下(↓)ならば
				// 自機を後へ移動
				player.moveBack();
			} else if (keycode == 39) { // カーソルキーの右(→)ならば
				// 自機を右へ移動
				player.moveRight();
			} else if (keycode == 32) { // スペースキーならば
				// 自機から弾を発射

				player.fire();

			}

		});
//	});
});
