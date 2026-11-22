# Signal Lab Live

Live signals for Deriv synthetic indices. It reads public Deriv market data (no login), checks six conditions each time a
candle closes, and shows BUY / SELL / WAIT with the reasons. It never places trades.

## Quick test (no build)
Open `www/index.html` in Chrome or Edge on a PC. It should say "Live" within a few seconds.

## Windows app (.exe)  - build on a Windows PC
1. Install Node.js LTS from nodejs.org.
2. In this folder: `npm install`
3. Try it: `npm start`
4. Build: `npm run build:exe`  ->  `dist/Signal Lab Live 1.0.0.exe` (portable, no installer)

## Android app (.apk)  - build on a PC with Android Studio
1. Install Node.js LTS and Android Studio (it installs the Android SDK and Java).
2. In this folder: `npm install`
3. `npx cap add android`
4. `npx cap sync android`
5. `npx cap open android`  -> in Android Studio: Build > Build Bundle(s) / APK(s) > Build APK(s)
6. Copy `android/app/build/outputs/apk/debug/app-debug.apk` to your phone and install it
   (allow "install unknown apps" for your file manager or browser).

## No-build option (installs like an app)
Upload the `www` folder to a free host (GitHub Pages, Netlify, Cloudflare Pages). Open the link in Chrome on Android
and choose "Add to Home screen", or in Chrome/Edge on a PC choose "Install app".

## If the data connection fails
Deriv has changed its API before. Open Advanced settings in the app and check the data endpoint against
https://developers.deriv.com (look for "Ticks History", public market data gateway).
