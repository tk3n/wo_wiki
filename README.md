# WO Wiki

ホワイトアウトサバイバル（White Out Survival）の非公式Wikiです。

## 技術スタック

- [Astro](https://astro.build/) — 静的サイトジェネレーター
- [Preact](https://preactjs.com/) — UIコンポーネント
- [vanilla-extract](https://vanilla-extract.style/) — CSS-in-TS

## 開発

```bash
npm install
npm run dev
```

## ビルド・デプロイ

```bash
npm run build
```

GitHub Pages にデプロイされます。

## ディレクトリ構成

```
src/
  components/   UIコンポーネント
  data/         ヒーロー・スキルデータ
  pages/        ページ
  styles/       共通スタイル
  types/        型定義
public/
  images/
    heroes/     ヒーローアイコン
    skills/     スキルアイコン
```
