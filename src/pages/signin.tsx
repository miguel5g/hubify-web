import React, { useState } from 'react';
import Head from 'next/head';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import { FiLock, FiUser } from 'react-icons/fi';

import { api } from '../services/Api';
import { useAuth } from '../hooks/useAuth';

import { Anchor } from '../components/Anchor';
import { Button } from '../components/Button';

import { AuthContainer } from '../styles/pages/Auth';

const SignIn: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();
  const { refresh } = useAuth();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (isLoading) return;

    e.preventDefault();

    setLoading(true);

    const signInPromise = new Promise<void>((resolve, reject) => {
      api
        .post('/session', {
          username,
          password,
        })
        .then(() => {
          setLoading(false);
          resolve();
        })
        .catch(({ response, ...err }: AxiosError) => {
          setLoading(false);

          if (response) {
            reject(response.data.error || response.data.message);
          }

          reject('Erro inesperado...');
        });
    });

    toast
      .promise(signInPromise, {
        loading: 'Aguarde...',
        success: 'Bem-Vindo!',
        error: (err: string) => err,
      })
      .then(async () => {
        await refresh();
        router.push('/');
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
