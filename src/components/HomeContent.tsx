import React from 'react';

import { ProjectDetailsAside } from './ProjectDetailsAside';

import { HomeContentContainer } from '../styles/components/HomeContent';

export const HomeContent: React.FC = () => {
  return (
    <HomeContentContainer>
      <div>
        <section>
          <h2>Imagens</h2>
        </section>

        <section>
          <h2>Sobre</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            adipisci iusto fugiat doloremque nobis aliquid. Sint deserunt eos
            delectus minus dolorum, libero facilis dicta enim magni tenetur
            obcaecati natus. Voluptatibus!
          </p>
        </section>

        <section>
          <h2>Motivos</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            adipisci iusto fugiat doloremque nobis aliquid. Sint deserunt eos
            delectus minus dolorum, libero facilis dicta enim magni tenetur
            obcaecati natus. Voluptatibus!
          </p>
        </section>

        <section>
          <h2>Resultados</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            adipisci iusto fugiat doloremque nobis aliquid. Sint deserunt eos
            delectus minus dolorum, libero facilis dicta enim magni tenetur
            obcaecati natus. Voluptatibus!
          </p>
        </section>

        <section>
          <h2>Objetivos</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            adipisci iusto fugiat doloremque nobis aliquid. Sint deserunt eos
            delectus minus dolorum, libero facilis dicta enim magni tenetur
            obcaecati natus. Voluptatibus!
          </p>
        </section>

        <section>
          <h2>Recursos</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            adipisci iusto fugiat doloremque nobis aliquid. Sint deserunt eos
            delectus minus dolorum, libero facilis dicta enim magni tenetur
            obcaecati natus. Voluptatibus!
          </p>

          <ul>
            <li>Envio de mensagens</li>
            <li>Envio de fotos</li>
            <li>Envio de videos</li>
            <li>Chamdas ao vivo</li>
            <li>Chamdas ao vivo em grupo</li>
          </ul>
        </section>

        <section>
          <h2>Tarefas</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            adipisci iusto fugiat doloremque nobis aliquid. Sint deserunt eos
            delectus minus dolorum, libero facilis dicta enim magni tenetur
            obcaecati natus. Voluptatibus!
          </p>

          <ul>
            <li>Desenvolver a ideaia</li>
            <li>Criar um grupo para desenvolver</li>
            <li>Encontrar pessoas dispostas a custear as despesas</li>
          </ul>
        </section>
      </div>

      <div className="aside-wrapper">
        <ProjectDetailsAside />
      </div>
    </HomeContentContainer>
  );
};
