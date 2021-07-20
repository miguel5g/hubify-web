import React from 'react';
import Head from 'next/head';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';

import { Anchor } from '../components/Anchor';
import { Button } from '../components/Button';

import { SignUpContainer } from '../styles/pages/SignUp';

const SignUp: React.FC = () => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <SignUpContainer>
      <Head>
        <title>Hubify - Criar conta</title>
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
          <Button>Voltar</Button>
          <Button isPrimary type="submit">
            Registrar
          </Button>
        </div>

        <span>
          Já tem uma conta? <Anchor href="/signin">Clique aqui!</Anchor>
        </span>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
