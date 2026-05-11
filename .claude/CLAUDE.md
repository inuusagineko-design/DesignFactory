# Design Factory — Cloudflare Migration & Enhancement

## プロジェクト概要
WordPressから**Cloudflareへの移行**を目指すポートフォリオサイト。
個人事業（デザイン・UI/UX・RPA開発など）向けのプロフェッショナルサイト。

### 事業者情報
- **屋号**: デザインファクトリー西村典泰（日本語表記）
- **電話**: 080-522-92618
- **メール**: inu.usagi.neko@Gmail.com
- **住所**: 岐阜県岐阜市則武中2-14-1
- **公開URL**: 未定（保留）

### サイトタイトル＆キャッチフレーズ
**Design Factory**
> デザインは最後に決まる。条件整理から始めます。要件を整理し、仮説を立て、検証する。その先に、伝わる形が見えてくる。

### 業種カテゴリ
- WEBデザイン
- 広告代理
- UI/UXマネージメント
- RPAアプリ開発

---

## 修正予定項目

### 1. ヘッダーナビゲーション
**修正内容**: 以下の構成に統一
```
Design Factory | HOME | Projects | Works | Gallery | Report | About | お問い合わせ
```
- お問い合わせボタン：テキストのみまたはアイコンのみに統一

### 2. フッター部分
**修正内容**:
- Portfolio → **デザインファクトリー西村典泰** に変更
- 住所表記を追加：岐阜県岐阜市則武中2-14-1
- デザイン改善・プラス思考での修正はOK

### 3. 著作権表記（Footer下部）
**現状**: `© 2026 Portfolio. All rights reserved. Built in collaboration with Claude AI`  
**修正内容**:
- 表記を見直し・更新が必要
- 罫線下の天地幅が広すぎるので調整

### 4. Cloudflare環境対応
- **メールフォーム**: Cloudflare環境でのメール送信方法を相談・検討
- **決済サービス**: 外部リンク経由での導入予定（相談）

### 5. SEO・構造化データ
- Cloudflareでの公開を見据えたSEO対策
- 構造化データ（JSON-LD）の実装を希望

---

## ディレクトリ構成
```
Design Factory/
├── .claude/              （設定・ドキュメント）
│   ├── CLAUDE.md
│   ├── settings.json
│   └── notes/
├── index.html
├── about.html
├── contact.html
├── gallery.html
├── projects.html
├── report.html
├── css/
├── js/
├── images/
├── assets/
└── _works/               （作業用ドキュメント）
```

---

## 作業ガイドライン

### Cloudflareに関する注意点
- 初めての利用のため、詳細な説明・相談が必要
- メールフォーム・決済機能などの実装は、Cloudflare環境を踏まえた提案を検討

### デザイン・修正方針
- 屋号・住所・連絡先は**日本語表記**を優先
- メールアドレスは画像扱いでの表記も検討（スパム対策）
- デザイン面での改善提案は積極的に検討

---

**作成日**: 2026-05-11
