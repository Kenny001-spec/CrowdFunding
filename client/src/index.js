import React from 'react';
import  ReactDOM from 'react/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import App from './App';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider desiredChainId={ChainId.sepolia}>
        <Router>
            <App />
        </Router>
    </ThirdwebProvider>
)