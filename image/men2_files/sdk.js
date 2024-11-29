(function () {
  const widgetId = document.currentScript.getAttribute('data-widget-id');

  const baseUrl = 'https://cdn.apigateway.co/webchat-client.9223372035125752111.prod/';

  const isProdEnvironment = baseUrl.includes('prod');
  globalThis.environment = isProdEnvironment ? 'prod' : 'demo';
  const createEl = (tag, props) => Object.assign(document.createElement(tag), props);
  const body = document.body;

  const polyfills = createEl('script', { src: baseUrl + 'polyfills.js', type: 'module' });
  const mainScript = createEl('script', { src: baseUrl + 'main.js', type: 'module' });

  const webchatRoot = document.createElement('webchat-root');
  webchatRoot.setAttribute('widget-id', widgetId);

  body.appendChild(webchatRoot);
  body.appendChild(mainScript);
  body.appendChild(polyfills);
})();
