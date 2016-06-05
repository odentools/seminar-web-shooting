/**
 * seminar-web-shooting - フロントエンド スクリプト
 */

$(function () { // ページの読み込み(正しくはDOMの構築)が完了したとき

	/**
	* 飛行機オブジェクトの初期化
	*/

	// 自機
	var player = new Airplane($('#player'));

	/**
	 * キーが押されたときのイベントハンドラ
	 */

	$(window).keydown(function (event) {

		var keycode = event.keyCode;
		if (!keycode) return;

		if (keycode == 37) { // カーソルキーの左(←)ならば
			// 左へ移動
			player.moveLeft();
		} else if (keycode == 38) { // カーソルキーの上(↑)ならば
			// 前へ移動
			player.moveFront();
		} else if (keycode == 40) { // カーソルキーの下(↓)ならば
			// 後へ移動
			player.moveBack();
		} else if (keycode == 39) { // カーソルキーの右(→)ならば
			// 右へ移動
			player.moveRight();
		} else if (keycode == 32) { // スペースキーならば
			// 弾を発射
			player.fire();
		}

	});

});
