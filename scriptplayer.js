document.addEventListener('DOMContentLoaded', function () {
  const audioPlayer = document.getElementById('audioPlayer');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const playPauseIcon = document.getElementById('playPauseIcon');
  const stopBtn = document.getElementById('stopBtn');
  const currentTrackDisplay = document.getElementById('currentTrack');
  const progressSlider = document.getElementById('progressSlider');
  const volumeSlider = document.getElementById('volumeSlider');
  const currentTimeDisplay = document.getElementById('currentTime');
  const durationDisplay = document.getElementById('duration');

  const playlist = [
  { src: 'https://archive.org/download/musicacatolicagpp/A%20Adora%C3%A7%C3%A3o.mp3', title: 'A Adoração' },
  { src: 'https://archive.org/download/musicacatolicagpp/A%20Alegria%20%28Aer%C3%B3bica%20Do%20Senhor%29%20%28Ao%20Vivo%29.mp3', title: 'A Alegria (Aeróbica Do Senhor)' },
  { src: 'https://archive.org/download/musicacatolicagpp/A%20Cura.mp3', title: 'A Cura' },
  { src: 'https://archive.org/download/musicacatolicagpp/A%20Dor.mp3', title: 'A Dor' },
  { src: 'https://archive.org/download/musicacatolicagpp/A%20Espera%20da%20M%C3%A3e.mp3', title: 'A Espera da Mãe' },
  { src: 'https://archive.org/download/musicacatolicagpp/A%20Esperan%C3%A7a%20Vive.mp3', title: 'A Esperança Vive' },
  { src: 'https://archive.org/download/musicacatolicagpp/A%20Felicidade%20Mora%20Aqui%20%28Ao%20Vivo%29.mp3', title: 'A Felicidade Mora Aqui (Ao Vivo)' },
  { src: 'https://archive.org/download/musicacatolicagpp/A%20Quase%20Trag%C3%A9dia.mp3', title: 'A Quase Tragédia' },
  { src: 'https://archive.org/download/musicacatolicagpp/A%20S%C3%B3s%20Contigo%20%E2%A7%B8%20Amar-Te%20Mais.mp3', title: 'A Sós Contigo ⧸ Amar-Te Mais' },
  { src: 'https://archive.org/download/musicacatolicagpp/A%20Tua%20Ternura%20-%20Mission%C3%A1rio%20Shalom%20%26%20Adriana%20Arydes.mp3', title: 'A Tua Ternura - Missionário Shalom & Adriana Arydes' },
  { src: 'https://archive.org/download/musicacatolicagpp/Acredite.mp3', title: 'Acredite' },
  { src: 'https://archive.org/download/musicacatolicagpp/Adriana%20Melo%20feat.%20@pezezinhoscj%20-%20Eu%20gritei%20teu%20nome%20santo%20%28Clipe%20Oficial%29.mp3', title: 'Adriana Melo feat. @pezezinhoscj – Eu gritei teu nome santo (Clipe Oficial)' },
  { src: 'https://archive.org/download/musicacatolicagpp/Aline%20Brasil%20-%20Confio%20em%20Ti%20%28Conf%C3%ADo%20en%20Ti%29.mp3', title: 'Aline Brasil – Confio em Ti (Confío en Ti)' },
  { src: 'https://archive.org/download/musicacatolicagpp/Aline%20Brasil%20-%20Entra.mp3', title: 'Aline Brasil – Entra' },
  { src: 'https://archive.org/download/musicacatolicagpp/Aline%20Brasil%20-%20Gratid%C3%A3o.mp3', title: 'Aline Brasil – Gratidão' },
  { src: 'https://archive.org/download/musicacatolicagpp/Aline%20Brasil%20-%20Paci%C3%AAncia.mp3', title: 'Aline Brasil – Paciência' },
  { src: 'https://archive.org/download/musicacatolicagpp/Aline%20Brasil%2C%20Adriana%20Arydes%20-%20Acalma%20o%20Meu%20Cora%C3%A7%C3%A3o.mp3', title: 'Aline Brasil, Adriana Arydes – Acalma o Meu Coração' },
  { src: 'https://archive.org/download/musicacatolicagpp/Aline%20Brasil%2C%20Irm%C3%A3%20Kelly%20Patr%C3%ADcia%20-%20M%C3%A3e%2C%20Me%20Defende%20do%20Mal.mp3', title: 'Aline Brasil, Irmã Kelly Patrícia – Mãe, Me Defende do Mal' },
  { src: 'https://archive.org/download/musicacatolicagpp/Alma%20de%20Cristo.mp3', title: 'Alma de Cristo' },
  { src: 'https://archive.org/download/musicacatolicagpp/Alvaro%20%26%20Daniel%20-%20Tua%20Paix%C3%A3o%20%28Clipe%20Oficial%29.mp3', title: 'Alvaro & Daniel – Tua Paixão (Clipe Oficial)' },
  { src: 'https://archive.org/download/musicacatolicagpp/Anjos%20De%20Deus%20%28Ao%20Vivo%29.mp3', title: 'Anjos De Deus (Ao Vivo)' },
  { src: 'https://archive.org/download/musicacatolicagpp/Ao%20Teu%20Encontro%20%28Ao%20Vivo%29.mp3', title: 'Ao Teu Encontro (Ao Vivo)' },
  { src: 'https://archive.org/download/musicacatolicagpp/Ao%20Teu%20Encontro.mp3', title: 'Ao Teu Encontro' },
  { src: 'https://archive.org/download/musicacatolicagpp/%C3%81gua%20Humilde.mp3', title: 'Água Humilde' },
  { src: 'https://archive.org/download/musicacatolicagpp/Banquete%20Eterno.mp3', title: 'Banquete Eterno' },
  { src: 'https://archive.org/download/musicacatolicagpp/Barco%20a%20Vela%20%28Ao%20Vivo%29.mp3', title: 'Barco a Vela (Ao Vivo)' },
  { src: 'https://archive.org/download/musicacatolicagpp/Barco%20a%20Vela.mp3', title: 'Barco a Vela' },
  { src: 'https://archive.org/download/musicacatolicagpp/Basta%20Querer%20%28Ao%20Vivo%29.mp3', title: 'Basta Querer (Ao Vivo)' },
  { src: 'https://archive.org/download/musicacatolicagpp/CASA%20%E2%80%94%20GERA%C3%87%C3%83O%2019%20%28SINGLE%20OFICIAL%29%20%E2%A7%B8%E2%A7%B8%20COLO%20DE%20DEUS.mp3', title: 'CASA — GERAÇÃO 19 (SINGLE OFICIAL) ⧸⧸ COLO DE DEUS' },
  { src: 'https://archive.org/download/musicacatolicagpp/Canthares%2C%20Padre%20Rodrigo%20Natal%2C%20Ana%20Gabriela%20-%20Aguenta%20Firme.mp3', title: 'Canthares, Padre Rodrigo Natal, Ana Gabriela – Aguenta Firme' },
  { src: 'https://archive.org/download/musicacatolicagpp/Celebra%20a%20Vit%C3%B3ria.mp3', title: 'Celebra a Vitória' },
  { src: 'https://archive.org/download/musicacatolicagpp/Chagas%20De%20Amor.mp3', title: 'Chagas De Amor' },
  { src: 'https://archive.org/download/musicacatolicagpp/Chuva%20de%20Gra%C3%A7a%20%28Ao%20Vivo%29.mp3', title: 'Chuva de Graça (Ao Vivo)' },
  { src: 'https://archive.org/download/musicacatolicagpp/Clamarei.mp3', title: 'Clamarei' },
  { src: 'https://archive.org/download/musicacatolicagpp/Colo%20de%20M%C3%A3e%20%28Ao%20Vivo%29%20%28feat.%20Som%20do%20Monte%29.mp3', title: 'Colo de Mãe (Ao Vivo) (feat. Som do Monte)' },
  { src: 'https://archive.org/download/musicacatolicagpp/Colo%20de%20M%C3%A3e.mp3', title: 'Colo de Mãe' },
  { src: 'https://archive.org/download/musicacatolicagpp/Como%20N%C3%A3o%20Falar%20do%20Seu%20Amor.mp3', title: 'Como Não Falar do Seu Amor' },
  { src: 'https://archive.org/download/musicacatolicagpp/Como%20%C3%89s%20Lindo.mp3', title: 'Como És Lindo' },
  { src: 'https://archive.org/download/musicacatolicagpp/Confia%20em%20Mim.mp3', title: 'Confia em Mim' },
  { src: 'https://archive.org/download/musicacatolicagpp/Consagrado%20para%20Amar%20%28Ao%20Vivo%29.mp3', title: 'Consagrado para Amar (Ao Vivo)' },
  { src: 'https://archive.org/download/musicacatolicagpp/Continuar%20%28Playback%29.mp3', title: 'Continuar (Playback)' },
  { src: 'https://archive.org/download/musicacatolicagpp/Corsa.mp3', title: 'Corsa' },
  { src: 'https://archive.org/download/musicacatolicagpp/Cristo%20Rei.mp3', title: 'Cristo Rei' },
  { src: 'https://archive.org/download/musicacatolicagpp/Cura-Me.mp3', title: 'Cura-Me' },
  { src: 'https://archive.org/download/musicacatolicagpp/Daniel%20-%20Ningu%C3%A9m%20Explica%20Deus%20%5BClipe%20oficial%5D.mp3', title: 'Daniel - Ninguém Explica Deus (Clipe Oficial)' },
  { src: 'https://archive.org/download/musicacatolicagpp/Declaramos.mp3', title: 'Declaramos' },
  { src: 'https://archive.org/download/musicacatolicagpp/Desce%20Sobre%20N%C3%B3s.mp3', title: 'Desce Sobre Nós' },
  { src: 'https://archive.org/download/musicacatolicagpp/Deus%20Acredita%20em%20Voc%C3%AA.mp3', title: 'Deus Acredita em Você' },
  { src: 'https://archive.org/download/musicacatolicagpp/Deus%20Imenso.mp3', title: 'Deus Imenso' },
  { src: 'https://archive.org/download/musicacatolicagpp/Deus%20Quero%20Louvar-Te%2C%20Eu%20Vou%20Caminhando.mp3', title: 'Deus Quero Louvar-Te, Eu Vou Caminhando' },
  { src: 'https://archive.org/download/musicacatolicagpp/Deus%20Te%20V%C3%AA%20%28Ao%20Vivo%29.mp3', title: 'Deus Te Vê (Ao Vivo)' },
  { src: 'https://archive.org/download/musicacatolicagpp/Deus%20Te%20V%C3%AA.mp3', title: 'Deus Te Vê' },
  { src: 'https://archive.org/download/musicacatolicagpp/Deus%20%C3%89%20Capaz%20%28Playback%29.mp3', title: 'Deus É Capaz (Playback)' },
  { src: 'https://archive.org/download/musicacatolicagpp/Dia%20de%20Festa%20%28Ao%20Vivo%29.mp3', title: 'Dia de Festa (Ao Vivo)' },
  { src: 'https://archive.org/download/musicacatolicagpp/Diante%20do%20Rei.mp3', title: 'Diante do Rei' },
  { src: 'https://archive.org/download/musicacatolicagpp/Duas%20Vozes%20%EF%BD%9C%20Daniel%20%26%20Seu%20Jorge%20%EF%BD%9C%20Romaria%20%5BClipe%20Oficial%5D.mp3', title: 'Duas Vozes | Daniel & Seu Jorge | Romaria (Clipe Oficial)' },
  { src: 'https://archive.org/download/musicacatolicagpp/Dudu%20e%20Eliseo%20Pasquali%20-%20Nossa%20Senhora%20%28Clipe%20Oficial%29.mp3', title: 'Dudu e Eliseo Pasquali - Nossa Senhora (Clipe Oficial)' },
  { src: 'https://archive.org/download/musicacatolicagpp/EU%20EM%20SEU%20LUGAR%20%EF%BD%9C%20COLO%20DE%20DEUS%20%28Clipe%20Oficial%29.mp3', title: 'EU EM SEU LUGAR | COLO DE DEUS (Clipe Oficial)' }
];

  let currentTrackIndex = Math.floor(Math.random() * playlist.length);

  function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }

  function loadTrack(index) {
    if (!playlist[index]) {
      console.error('Faixa inválida:', index);
      currentTrackIndex = (index + 1) % playlist.length;
      return loadTrack(currentTrackIndex);
    }
    audioPlayer.src = playlist[index].src;
    currentTrackDisplay.textContent = playlist[index].title || 'Desconhecido';
    audioPlayer.load();
    currentTimeDisplay.textContent = '0:00';
    durationDisplay.textContent = '0:00';
  }

  function playPause() {
    if (audioPlayer.paused) {
      audioPlayer.play().catch((error) => {
        console.error('Erro ao reproduzir áudio:', error);
        currentTrackDisplay.textContent = 'Erro ao carregar faixa';
      });
      playPauseIcon.classList.replace('fa-play', 'fa-pause');
    } else {
      audioPlayer.pause();
      playPauseIcon.classList.replace('fa-pause', 'fa-play');
    }
  }

  function stopAudio() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    playPauseIcon.classList.replace('fa-pause', 'fa-play');
    currentTrackIndex = Math.floor(Math.random() * playlist.length);
    loadTrack(currentTrackIndex);
  }

  audioPlayer.addEventListener('loadedmetadata', () => {
    durationDisplay.textContent = formatTime(audioPlayer.duration);
  });

  audioPlayer.addEventListener('timeupdate', () => {
    if (!isNaN(audioPlayer.duration)) {
      const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
      progressSlider.value = progress || 0;
      currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
    }
  });

  audioPlayer.addEventListener('ended', () => {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length; // Sequencial
    loadTrack(currentTrackIndex);
    audioPlayer.play().catch((error) => {
      console.error('Erro ao reproduzir próxima faixa:', error);
      currentTrackDisplay.textContent = 'Erro ao carregar faixa';
    });
  });

  audioPlayer.addEventListener('error', () => {
    console.error('Erro ao carregar áudio:', audioPlayer.error);
    currentTrackDisplay.textContent = 'Erro ao carregar faixa';
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
  });

  progressSlider.addEventListener('input', () => {
    if (!isNaN(audioPlayer.duration)) {
      const seekTime = (progressSlider.value / 100) * audioPlayer.duration;
      audioPlayer.currentTime = seekTime;
    }
  });

  volumeSlider.addEventListener('input', () => {
    audioPlayer.volume = volumeSlider.value / 100;
  });

  playPauseBtn.addEventListener('click', playPause);
  stopBtn.addEventListener('click', stopAudio);

  // Validação inicial da playlist
  if (!playlist || playlist.length === 0) {
    console.error('Playlist vazia ou não definida');
    currentTrackDisplay.textContent = 'Nenhuma faixa disponível';
  } else {
    loadTrack(currentTrackIndex);
  }
});