# Progressive Web App - Matera Produtos

Passos básicos para transformar uma WebApp configurada com webpack em uma PWA.

- Garantir que a aplicação funcione em todos dispositivos, tenha uma boa performance e seja oferecida em ambiente seguro (HTTPS)

- Definir a meta tag com a cor tema da aplicação
```html
<meta name="theme-color" content="#185ea2" />
```

- Gerar um manifesto
```js
{
  name: 'Matera Produtos',
  short_name: 'MProdutos',
  description: 'Webapp de exemplo para treinamento interno de PWA.',
  theme_color: '#185ea2',
  background_color: '#185ea2',
  display: 'standalone',
  scope: '/matera-produtos-pwa/',
  start_url: '/matera-produtos-pwa/',
  lang: 'pt-BR',
  orientation: 'any',
  icons: [
    {
      src: path.resolve('src/assets/images/favicon-512x512.png'),
      size: '512x512'
    }
  ]
}
```

- Gerar um service worker
```js
{
  swDest: 'sw.js',
  clientsClaim: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: new RegExp('https://spreadsheets.google.com/feeds/list/'),
      handler: 'CacheFirst'
    }
  ]
}
```
