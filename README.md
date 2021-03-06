# $hyoo_talks

Embeddable/standalone offline-first messenger with collaborative abilities and speech recognition.

## Technologies

Application based on [$mol](https://mol.hyoo.ru/) framework in [MAM](https://github.com/hyoo-ru/mam) ecosystem. It uses [$hyoo_sync server](https://github.com/hyoo-ru/sync.hyoo.ru) to share reactive state between clients and merge changes without conflicts. It allow to edit same massage by few users in real time.

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

## Speech recognition

There is `speech_to_text` task in the [chat/page/page.view.ts](chat/page/page.view.ts#L271). We use $mol_speech plugin (which uses native [SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) API) to watch recoginition results. On results change we updates draft. And on result finalization we submit new message by current user.

There is `Speech_toggle` property in the [chat/page/page.view.tree](chat/page/page.view.tree#L40). It's implementation of "microphone" toggler.

## Dump messages

There is `dump_blob` property in the [chat/page/page.view.ts](chat/page/page.view.ts#L227). We iterate through all message models in the chat and make CSV text which we convert to blob.

There is `dump_name` property in the [chat/page/page.view.ts](chat/page/page.view.ts#L253). We use chat title as file name to download chat dump.

There is `Dump` property in the [chat/page/page.view.tree](chat/page/page.view.tree#L15). It's implementation of "download" button, which takes blob and file name and enforces file downloading.
