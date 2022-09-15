import { useState } from 'react';

import './styles/main.css';

import logoImg from './assets/logo-nlw-esports.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';

function App() {
  const [hasUserClickedOnButton, setHasUserClickedOnButton] = useState(false);

  function handleButtonClick() {
    setHasUserClickedOnButton(true);
  }

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20" >
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20" >
        Seu <span className="bg-nlw-gradient text-transparent bg-clip-text" >duo</span> está aqui
      </h1>

      <button onClick={handleButtonClick}>Clique aqui</button>

      { hasUserClickedOnButton ? "usuário clicou" : null }

      <div className="grid grid-cols-6 gap-6 mt-16" >
        <GameBanner  bannerUrl="/game-1.png" title="League of Legends" adsCount={5} />
        <GameBanner  bannerUrl="/game-2.png" title="Dota 2" adsCount={2} />
      </div>

      <CreateAdBanner />
    </div>
  );
}

export default App
