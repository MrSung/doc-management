# [WIP] Doc Management

## これは？

ドキュメント管理システムの動くサンプル

DB 論理設計を、実際のアプリケーションに落とし込んでみたもの。動くもので検証することで、設計の確からしさを検証する。

## スタック

- Next.js
- Prisma
- SQLite

## スクリプト

サンプルデータのシーディング（最初に行うとサンプルデータが入り、確認しやすい）

```sh
yarn prisma:db:seed
```

開発サーバ起動

```sh
yarn dev
```

DB テーブルの確認

```sh
yarn prisma:studio
```

DB マイグレーション

```sh
yarn prisma:migrate:dev
```
