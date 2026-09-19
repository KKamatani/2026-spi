# 確率過程の統計推測の最近の展開 2026

2026年12月5日（土）10:00–16:15，統計数理研究所 D222講義室（立川）．

2025-spi の研究集会名と背景写真を引き継ぎ，2026-stochastic-analysis-statistics の Jekyll + Bootstrap 5 のデザインを日本語化したサイトです．

## ローカルでの確認

Ruby 3.2.9 と Bundler を使用します．

```sh
bundle install
bundle exec jekyll serve
```

http://127.0.0.1:4000/2026-spi/ を開いてください．

静的ファイルの生成：

```sh
bundle exec jekyll build
```

## 内容の更新

- `_data/event.yml`：開催日，会場，部屋，連絡先．
- `_data/programme.yml`：プログラムの時刻・順序・記念講演の指定．
- `_data/speakers.yml`：講演者名，演題 (`title`)，講演要旨 (`abstract`)．要旨には Markdown を使用できます．
- `index.md`：本文・参加案内．
- `assets/css/site.css`：配色・レイアウト．

演題・要旨が空欄の場合は「後日掲載」と表示します．参加方法の確定時には開催概要のお知らせも更新してください．2025年の参加登録リンクは引き継いでいません．開催概要には JST CREST（JPMJCR2115，研究代表者：吉田朋広）による一部支援を記載しています．

## GitHub Pages

`_config.yml` に `url: "https://kkamatani.github.io"`，`baseurl: "/2026-spi"` を設定済みです．GitHub に `2026-spi` リポジトリを作成してファイルを配置し，Settings → Pages で `main` ブランチのルートを公開元に指定できます．このフォルダーの作成のみでは公開されません．

## 氏名の確認元

2025-spi に掲載済みの氏名に加え，以下の公式プロフィールを確認しています（2026年9月19日）．

- [深澤 正彰](https://www.sigmath.es.osaka-u.ac.jp/~fukasawa/)
- [小池 祐太](https://www.ms.u-tokyo.ac.jp/teacher/koike.html)
- [荻原 哲平](https://www.u-tokyo.ac.jp/focus/ja/people/k0001_02319.html)
- [増田 弘毅](https://www.u-tokyo.ac.jp/focus/en/people/k0001_04486.html)
- [統計数理研究所の住所](https://www.ism.ac.jp/editsec/Nenpou/H29nenpou.pdf)
