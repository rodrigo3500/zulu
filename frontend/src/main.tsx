import ReactDOM from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import App from '@/App.tsx'
import '@/css/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />,
)
