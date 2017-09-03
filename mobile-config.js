App.info({
  id: 'com.shopify.app.lication',
  name: 'Shopify App-Lication',
  description: 'Demo app for job applications at Shopify. Why tell when you can show?',
  author: 'Simeon Gordon',
  email: 'simeon.r.gordon@gmail.com',
  website: 'https://github.com/simeon-r-gordon'
});

App.icons({
  'android_mdpi': 'public/images/favicons/android-icon-48x48.png',
	'android_hdpi': 'public/images/favicons/android-icon-72x72.png',
	'android_xhdpi': 'public/images/favicons/android-icon-96x96.png',
	'android_xxhdpi': 'public/images/favicons/android-icon-144x144.png',
	'android_xxxhdpi': 'public/images/favicons/android-icon-192x192.png'
});

// App.launchScreens({
//   'android_mdpi_portrait': 'public/images/launchscreens/android_mdpi.png',
//   'android_hdpi_portrait': 'public/images/launchscreens/android_hdpi.png',
//   'android_xhdpi_portrait': 'public/images/launchscreens/android_xhdpi.png',
//   'android_xxhdpi_portrait': 'public/images/launchscreens/android_xxhdpi.png',
// });


App.setPreference('BackgroundColor', '0x00000000');
App.setPreference('Orientation', 'portrait');
// App.setPreference('Fullscreen', true);
App.setPreference('AndroidPersistentFileLocation', 'Internal');

App.accessRule('http://*');
App.accessRule('https://*');
