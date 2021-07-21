import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';

import { Anchor } from '../components/Anchor';
import { Button } from '../components/Button';

import { AuthContainer } from '../styles/pages/Auth';

const SignUp: React.FC = () => {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast('Infelizmente isso ainda não funciona...', {
      icon: '🙁',
    });
  }

  return (
    <AuthContainer>
      <Head>
        <title>Criar conta - Hubify</title>
      </Head>

      <form onSubmit={handleSubmit}>
        <h1>Criar conta</h1>

        <div>
          <label htmlFor="username">
            <FiUser />
            Usuário
          </label>
          <input type="text" name="username" id="username" />
        </div>

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
          <Button onClick={() => router.back()}>Voltar</Button>
          <Button isPrimary type="submit">
            Registrar
          </Button>
        </div>

        <span>
          Já tem uma conta? <Anchor href="/signin">Clique aqui!</Anchor>
        </span>
      </form>
    </AuthContainer>
  );
};

export default SignUp;
