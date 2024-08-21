# early LOUNGE
## ガイドライン
1. 命名規則
   - クラス名・ID名の命名規則：BEM「block__element␣--modifier」で統一。複数語の連結はキャメルケース。
   - ファイル名の命名規則：
     1. 小文字とハイフンを使用：例）header-component.js, main-content.css
     2. 意味のある名前を使用：例）user-profile.js
     3. 拡張子の一貫性：.js .css .scss .html
   - 変数名の命名規則：キャメルケースを使用。例）userName
   - 画像ファイルの命名規則：「ページ名-セクション名-役割に基づいた名前.〇〇」
     例）top-service-icon01.png

2. ディレクトリ構造

my-project/
│  
├── assets/  
│   ├── css/  
│   │   ├── main.css  
│   │   └── reset.css  
│   │  
│   ├── sass/  
│   │   ├── main.scss  
│   │   ├── _variables.scss  
│   │   ├── _mixins.scss  
│   │   └── _layout.scss  
│   │  
│   ├── images/  
│   │   ├── ▲▲.png  
│   │   └── ▲▲.png  
│   │  
│   ├── js/  
│   │   ├── ■■.js  
│   │   └── ■■.js  
│   │  
│   └── fonts/  
│       └── ◆◆.ttf  
│  
├── index.html  
├── ●●.html  
└── ●●.html 
 

フレームワークやライブラリの選定
　- CSS：Sacc(scss)を使用。
　- JavaScriptフレームワーク：jQueryを使用。

ブラウザ対応
　- 対応ブラウザの選定：Google Chrome, Mozilla Firefox, Microsoft Edge, Safari
