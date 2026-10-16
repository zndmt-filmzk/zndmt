ターミナルでの場所の指定
cd ~/Desktop/portforio

Blogの新規作成
npm run new 'ここにパスを入れる'
これをターミナルで実行すると自動で新しいブログのフォルダと写真入れるためのフォルダが作成される。
＊パスは半角英数字ひとまとめで

以下を別のターミナルで実行（サイトの確認用）
npm run dev
終了する場合 control + c


Gitの保存方法

1.ブラウザで表示が崩れていないか確認

2.ターミナルで今の状態を確認
git status
赤字や緑字でファイル名が出れば、まだ保存していない変更があり

3.保存点の作成
git add .
git commit -m "何をしたかのメモ"
git push
メモは、あとで見て分かる言葉にする(例:京都の記事を追加、Aboutを書いた)
git pushで公開となるため、単にgitに保存したい場合は抜く

4.保存できたか確認
git log --oneline
先頭に、3のメモが出ていれば成功

保存するタイミングの目安
* 記事を1本書き終えたとき
* 写真を追加して、表示を確認したとき
* 見た目を大きく変える前(失敗しても戻れるようにするため)

気をつけたい点
* git commit は、手元のパソコンの中に記録するだけです。GitHubやインターネットには、何も送られません
* 写真は、ファイルサイズが大きいと記録も重くなります。以前決めた「長辺2400px・品質80〜85」の書き出しなら問題ありません





その他コマンド
git init	このフォルダを Git で管理するようにする(最初に1回だけ)
git add .	変更したファイルを、次の記録の対象にする(. は全部)
git commit -m "メモ"	現在の状態を記録として保存する。"メモ" は自由に書ける
git branch -M main	ブランチ名を main にする
git remote add origin URL	送り先の GitHub リポジトリを origin という名前で登録する
git push -u origin main	GitHub に送る。-u により、次回から git push だけで済む

git --version	Git が入っているか確認する
git status	変更されたファイルや、まだ記録していないファイルを見る
git log --oneline	記録(コミット)の履歴を短く表示する
git remote -v	送り先の URL を確認する
ls -lh ファイル名	ファイルの大きさを読みやすく表示する
find . -path ./node_modules -prune -o -type f -size +5M -print	5 MB を超える大きなファイルを探す(node_modules は除外)

npm install	必要なパッケージをインストールする(最初と、依存を追加したとき)
npm run dev	手元で確認用のサーバーを起動する。通常は http://localhost:4321 で見られる
npm run build	公開用のサイトを作り、dist フォルダに出力する
npm run preview	ビルドした結果を、手元で確認する
