import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: 'http://localhost:8180',
    realm: 'MyAppRealm',
    clientId: 'my-frontend',
});

export default keycloak;