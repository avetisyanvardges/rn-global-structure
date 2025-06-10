# React Native Custom Template

A powerful and scalable custom template for initializing new React Native projects with a clean architecture, built-in localization, and splash screen integration. Perfect for rapid development with a well-organized structure and essential tooling.

## 📦 React Native Version

This template uses the latest stable version of React Native:  
**React Native `0.79.x`**

> Stay up-to-date with [official React Native releases](https://reactnative.dev/)

---

## 🚀 Features

- **📁 Components**: Reusable UI components  
  → `MButton`, `MIcons`, `MInput`, `MText`

- **🧩 Constants**: Global constants used across the app

- **🌍 i18n**: Internationalization via `i18next`  
  → Integrated with Google Sheets for dynamic translation loading

- **🏁 Splash Screen**: Built-in splash screen support for Android and iOS  
  → Just replace the image assets (details below)

- **🚦 Navigation**: Pre-configured React Navigation  
  → Stack and Tab navigators

- **📱 Screens**: Feature layers  
  → `AppLayer`, `AuthLayer`

- **🛠 Services**: Business logic and shared services  
  → `API`, `Navigation`

- **🎨 Styles**: Global design system (colors, fonts, spacing)

- **⚙️ Utils**: Helpful utility functions  
  → `DeviceInfo`, `Endpoint`, `Normalize`

---

## 🧪 Getting Started

Create a new app using this template:

```bash
npx @react-native-community/cli@latest init YourAppName --template rn-global-structure
```


## ✨ Splash Screen
Splash screens are already fully integrated.

✅ To Customize:
- **Android**

  Replace images in:

```bash
android/app/src/main/res/
  ├── mipmap-mdpi/splash.png
  ├── mipmap-hdpi/splash.png
  ├── mipmap-xhdpi/splash.png
  ├── mipmap-xxhdpi/splash.png
  └── mipmap-xxxhdpi/splash.png
```
- **iOS**

  Replace images in:

```swift
ios/YourAppName/Images.xcassets/Splash.imageset
```

No extra configuration needed — just swap the images and rebuild the app.


## 📁 Folder Structure

```bash
src/
│
├── api/               # API configuration and calls
├── assets/            # Images, fonts, icons
├── components/        # Reusable UI components
├── constants/         # Global constants (colors, fonts, etc.)
├── hooks/             # Custom React hooks
├── i18n/              # Localization setup
├── navigation/        # React Navigation config
├── screens/           # App screens by layers (AppLayer, AuthLayer)
├── services/          # Shared services (e.g., API, Navigation)
├── styles/            # Theming and style tokens
├── utils/             # Utility functions
└── main/index.js      # App entry point
```
## 👤 Author
- **Vardges Avetisyan**

  GitHub: @avetisyanvardges

## 📝 License

MIT — free to use, modify, and distribute.

```yaml

---

Let me know if you want this saved as a file or want badges like `npm`, `MIT`, or `Made with ❤️`.
```

