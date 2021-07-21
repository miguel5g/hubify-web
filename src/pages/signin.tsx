import React from 'react';
import Head from 'next/head';
import { toast } from 'react-hot-toast';
import { FiLock, FiMail } from 'react-icons/fi';

import { Anchor } from '../components/Anchor';
import { Button } from '../components/Button';

import { AuthContainer } from '../styles/pages/Auth';

const SignIn: React.FC = () => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast('Infelizmente isso ainda não funciona...', {
      icon: '🙁',
    });
  }

  return (
    <AuthContainer>
      <Head>
        <title>Acessar conta - Hubify</title>
      </Head>

      <form onSubmit={handleSubmit}>
        <h1>Acessar conta</h1>

        <div>
          <label htmlFor="email">
            <FiMail />
            E-mail
          </label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">
            <FiLock />
            Senha
          </label>
          <input type="password" name="password" id="password" />
        </div>

        <div className="button-group">
          <Button>Voltar</Button>
          <Button isPrimary type="submit">
            Acessar
          </Button>
        </div>

        <span>
          Não tem uma conta? <Anchor href="/signup">Clique aqui!</Anchor>
        </span>
      </form>
    </AuthContainer>
  );
};

export default SignIn;
