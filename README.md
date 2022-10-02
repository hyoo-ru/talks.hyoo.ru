# $hyoo_talks

Embeddable/standalone offline-first messenger with collaborative abilities and speech recognition.

## Embedding

Use [$mol_chat](https://github.com/hyoo-ru/mam_mol/tree/master/chat) to add button which opens chat.

## Technologies

Application based on [$mol](https://mol.hyoo.ru/) framework in [MAM](https://github.com/hyoo-ru/mam) ecosystem. It uses [$hyoo_sync_server](https://github.com/hyoo-ru/sync.hyoo.ru) to share reactive state between clients and merge changes without conflicts.

## Build

```
git clone https://github.com/hyoo-ru/mam.git ./mam
cd mam
yarn
yarn start hyoo/talks
```

Standalone build will be placed at `mam/hyoo/talks/-`

## Dev Server

```
git clone https://github.com/hyoo-ru/mam.git ./mam
cd mam
yarn
yarn start
```

Open `http://localhost:9080/hyoo/talks/-/test.html`
