import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const renderApp = (containerId) => {
  const rootElement = document.getElementById(containerId);
  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  }
};

// Export the render function to be used externally
if (typeof window !== 'undefined') {
  window.WeathearComponent = renderApp;
  console.log('WeathearComponent loaded');
}

// uncomment below line to render the app from this app
// renderApp('root')

export { App, renderApp };
