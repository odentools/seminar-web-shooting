/**
 * seminar-web-shooting - 飛行機オブジェクト スクリプト
 */


var Airplane = function ($elem) {

	// 機体のDOM要素
	this.$elem = $elem;

	// 座標をリセット
	this.moveTo(100, 100);

};


/**
 * 指定した座標へ移動
 * @param  {Number} x X座標
 * @param  {Number} y Y座標
 */
Airplane.prototype.moveTo = function (x, y) {

	var self = this;

	self.$elem.css({
		left: x,
		top: y
	});

};


/**
 * 弾を発射
 */
Airplane.prototype.fire = function () {

	var self = this;

	// 弾のDOM要素を生成
	var $ball = $('<div />');

	// 弾のDOM要素を <div id="view"> へ追加
	$('#view').append($ball);

	// 弾の画像とサイズを指定
	$ball.css({
		backgroundImage: 'url(/images/ball.png)',
		backgroundSize: 'contain',
		height: 50,
		width: 50,
		position: 'absolute'
	});

	// 弾の位置を指定
	var ball_x = self.getX() + 25; // 機体の中心となるX座標
	var ball_y = self.getY(); // 機体と同じY座標
	$ball.css({
		left: ball_x,
		top: ball_y
	});

	// 弾を前へ移動させていく
	var interval = setInterval(function () {

		// 弾のY座標を指定
		$ball.css({
			top: ball_y
		});

		// 弾のY座標を減らす
		ball_y -= 5;

		// 弾が画面外になったら自分自身を消す
		if (ball_y < 0) {
			$ball.remove();
		}

	}, 10);

};


/**
 * 機体のX座標の取得
 * @return {Number} X座標
 */
Airplane.prototype.getX = function (opt_speed) {

	var self = this;

	return parseInt(self.$elem.css('left').replace(/(\D+)/, ''));

};


/**
 * 機体のX座標の取得
* @return {Number} Y座標
 */
Airplane.prototype.getY = function (opt_speed) {

	var self = this;

	return parseInt(self.$elem.css('top').replace(/(\D+)/, ''));

};


/**
 * 前へ移動
 * @param  {Number} opt_speed 速度 (オプション)
 */
Airplane.prototype.moveFront = function (opt_speed) {

	var self = this;

	self.moveTo(self.getX(), self.getY() - 10);

};


/**
 * 後ろへ移動
 * @param  {Number} opt_speed 速度 (オプション)
 */
Airplane.prototype.moveBack = function (opt_speed) {

	var self = this;

	self.moveTo(self.getX(), self.getY() + 10);

};


/**
 * 左へ移動
 * @param  {Number} opt_speed 速度 (オプション)
 */
Airplane.prototype.moveLeft = function (opt_speed) {

	var self = this;

	self.moveTo(self.getX() - 10, self.getY());

};


/**
 * 右へ移動
 * @param  {Number} opt_speed 速度 (オプション)
 */
Airplane.prototype.moveRight = function (opt_speed) {

	var self = this;

	self.moveTo(self.getX() + 10, self.getY());

};
