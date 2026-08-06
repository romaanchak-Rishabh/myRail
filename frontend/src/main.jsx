import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Providers from './app/providers.jsx'
import { Auth0Provider } from '@auth0/auth0-react'
import conf from './conf/conf.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain={conf.auth0Domain}
      clientId={conf.auth0ClientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <Providers />
    </Auth0Provider>
  </StrictMode>,
)