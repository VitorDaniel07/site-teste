import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Bem-vindo ao site do Vitor!</h1>
          <p>Você está logado como: {user?.signInDetails?.loginId}</p>
          <button 
            onClick={signOut} 
            style={{ 
              marginTop: '20px',
              padding: '10px 20px', 
              fontSize: '16px', 
              cursor: 'pointer' 
            }}
          >
            Sair (Sign Out)
          </button>
        </main>
      )}
    </Authenticator>
  );
}