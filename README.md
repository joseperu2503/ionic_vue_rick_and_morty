
ionic cap sync android
npx cap sync android
<!-- npx @capacitor/assets generate -->

<!-- Modificar en el archivo styles.xml -->

<style name="AppTheme.NoActionBarLaunch" parent="Theme.SplashScreen">
    <item name="android:windowBackground">@drawable/splash</item>
</style>

npx @capacitor/assets generate --splashBackgroundColor "#000000" --splashBackgroundColorDark "#000000"


para ios

navegar a la carpeta ios/App y ejecuta
pod install

en la raiz del proyecto ejecutar
npm run build
npx cap sync ios
npx cap open ios  para abrir xcode


