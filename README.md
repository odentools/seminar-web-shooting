# seminar-web-shooting
勉強会用資料 - シューティングゲーム

HTML5 + JavaScript + CSS3 をベースとしたシューティングゲームです．

描画のためにCanvasを扱わず，あえてCSSだけを用いることで，Webの基本的な要素を学べるように配慮しています．


# 開発に必要なソフトウェア
* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/download/)


# 開発のはじめかた

## 1. リポジトリのフォーク
GitHubアカウントでログインして，このページの画面右上にある [Fork] ボタンをクリックします．

## 2. リポジトリのクローン
端末を開き，以下のように ``git clone`` コマンドを用いて，リポジトリをクローンします．
これにより，手元のコンピュータ に```seminar-web-shooting``` というディレクトリが作成されます．これを作業ディレクトリといいます．

```
$ git clone https://github.com/odentools/seminar-web-shooting.git
```

次に，``cd`` コマンドを用いて，その作業ディレクトリへ移動しましょう．

```
$ cd seminar-web-shooting/
```

## 3. ファイルの確認

この時点で ``ls`` コマンドを実行すると，作業ディレクトリ内のファイルリストが表示されます．
以下のようなファイル名が表示されるはずです．

```
$ ls
README.md  index.js  package.json public
```

各々のファイルの役割は以下のとおりです．
* README.md
	* 今読んでいるこのドキュメントです．
	* Markdown という言語で記述されています．
* index.js
	* シューティングゲームのサーバが実装されたプログラムです．
	* JavaScript という開発言語で記述されており，Node.js 上で実行できるようになっています．
* package.json
	* プログラムを実行するために必要なライブラリの名前などが記述されています．
	* JSON という言語で記述されています．
* public
	* サーバ上で公開したいファイルを入れておくためのディレクトリです．
	* Webブラウザ上で実行するための JavaScript，CSS および HTMLなどのファイルが含まれています．

## 4. サーバの起動
Node.js には ``npm`` (Node Package Manager) というコマンドが同梱されています．この ``npm`` コマンドを用いることで，Node.jsで書かれたアプリケーションを実行したり，ライブラリなどのパッケージをインストールすることができます．

まずは，``npm install`` コマンドを実行しましょう．
これにより，``node_modules`` というディレクトリが作成され，アプリケーションの動作に必要なライブラリがそこにインストールされます．
```
$ npm install
```

次に，``npm start`` コマンドを実行して，アプリケーションを起動しましょう．
これにより，アプリケーション内に実装されたサーバが起動し，手元のコンピュータの 3000番ポートで 待ち受けを開始します．
```
$ npm start
```

## 5. ゲームの開始
Webブラウザで http://localhost:3000/ を開いてください．


# Licenses
```
The MIT License (MIT).
Copyright (c) 2016 OdenTools Project.
```
