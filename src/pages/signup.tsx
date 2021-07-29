import React, { useState } from 'react';
import Head from 'next/head';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';

import { api } from '../services/Api';

import { Anchor } from '../components/Anchor';
import { Button } from '../components/Button';

import { AuthContainer } from '../styles/pages/Auth';

const SignUp: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (isLoading) return;

    e.preventDefault();

    setLoading(true);

    const signUpPromise = new Promise<void>((resolve, reject) => {
      api
        .post('/user', {
          username,
          email,
          password,
        })
        .then(() => {
          setLoading(false);
          resolve();
        })
        .catch(({ response, ...err }: AxiosError) => {
          setLoading(false);

          if (response) {
            reject(
              response.data.errors[0] ||
                response.data.error ||
                response.data.message
            );
          }

          reject('Erro inesperado...');
        });
    });

    toast
      .promise(signUpPromise, {
        loading: 'Aguarde...',
        success: 'Faça login para terminar seu cadastro.',
        error: (err: string) => err,
      })
      .then(async () => {
        router.push('/signin');
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
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">
            <FiMail />
            E-mail
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">
            <FiLock />
            Senha
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="button-group">
          <Button onClick={() => router.back()}>Voltar</Button>
          <Button isPrimary type="submit" disabled={isLoading}>
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
