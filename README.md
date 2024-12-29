# Tailwind Material

[Documentation](https://www.tailwindmaterial.com/) · [NPM](https://www.npmjs.com/package/tailwind-material)

## How to use

```html
<!-- index.html  -->
<!doctype html>
<html lang="en" data-theme="light">
	<!-- Add data-theme dark for dark mode light for light mode  -->
	<head>
		<meta charset="utf-8" />
		<link rel="icon" href="favicon.png" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body>
		....
	</body>
</html>
```

```ts
import { material } from 'tailwind-material';
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {}
	},
	plugins: [material({ primary: '#000' })] // You can pass the initial pallet obj
};
```

## Contributing

This repo accepts external contributions, but i am definitily new at open source
so please have that in mind.
