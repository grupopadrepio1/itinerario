document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audio-player');
    const playBtn = document.getElementById('play-btn');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    const volumeBar = document.getElementById('volume-bar');
    const musicTitle = document.getElementById('music-title');
    const artistEl = document.getElementById('artist');

    // Playlist de músicas
    const playlist = [
        { src: 'https://archive.org/download/musicacatolicagpp/A%20Adora%C3%A7%C3%A3o.mp3', title: 'A Adoração', artist: 'Música Católica' },
        { src: 'https://archive.org/download/musicacatolicagpp/A%20Cura.mp3', title: 'A Cura', artist: 'Música Católica' },
        { src: 'https://archive.org/download/musicacatolicagpp/A%20Dor.mp3', title: 'A Dor', artist: 'Música Católica' },
        { src: 'https://archive.org/download/musicacatolicagpp/A%20Espera%20da%20M%C3%A3e.mp3', title: 'A Espera da Mãe', artist: 'Música Católica' },
        { src: 'https://archive.org/download/musicacatolicagpp/A%20Esperan%C3%A7a%20Vive.mp3', title: 'A Esperança Vive', artist: 'Música Católica' },
        { src: 'https://archive.org/download/musicacatolicagpp/A%20Felicidade%20Mora%20Aqui%20%28Ao%20Vivo%29.mp3', title: 'A Felicidade Mora Aqui (Ao Vivo)', artist: 'Música Católica' },
        { src: 'https://archive.org/download/musicacatolicagpp/A%20Quase%20Trag%C3%A9dia.mp3', title: 'A Quase Tragédia', artist: 'Música Católica' },
        { src: 'https://archive.org/download/musicacatolicagpp/A%20S%C3%B3s%20Contigo%20%E2%A7%B8%20Amar-Te%20Mais.mp3', title: 'A Sós Contigo ⧸ Amar-Te Mais', artist: 'Música Católica' },
        { src: 'https://archive.org/download/musicacatolicagpp/A%20Tua%20Ternura%20-%20Mission%C3%A1rio%20Shalom%20%26%20Adriana%20Arydes.mp3', title: 'A Tua Ternura', artist: 'Missionário Shalom & Adriana Arydes' },
        { src: 'https://archive.org/download/musicacatolicagpp/Acredite.mp3', title: 'Acredite', artist: 'Música Católica' },
        { src: 'https://archive.org/download/musicacatolicagpp/Adriana%20Melo%20feat.%20@pezezinhoscj%20-%20Eu%20gritei%20teu%20nome%20santo%20%28Clipe%20Oficial%29.mp3', title: 'Eu gritei teu nome santo', artist: 'Adriana Melo' },
        { src: 'https://archive.org/download/musicacatolicagpp/Aline%20Brasil%20-%20Confio%20em%20Ti%20%28Conf%C3%ADo%20en%20Ti%29.mp3', title: 'Confio em Ti', artist: 'Aline Brasil' },
        { src: 'https://archive.org/download/musicacatolicagpp/Aline%20Brasil%20-%20Entra.mp3', title: 'Entra', artist: 'Aline Brasil' }, // vírgula corrigida aqui
        { src: 'https://archive.org/download/musicacatolicagpp/Aline%20Brasil%20-%20Gratid%C3%A3o.mp3', title: 'Gratidão', artist: 'Aline Brasil' },
        { src: 'https://archive.org/download/musicacatolicagpp/Aline%20Brasil%20-%20Paci%C3%AAncia.mp3', title: 'Paciência', artist: 'Aline Brasil' },
        { src: 'https://archive.org/download/musicacatolicagpp/Aline%20Brasil%2C%20Adriana%20Arydes%20-%20Acalma%20o%20Meu%20Cora%C3%A7%C3%A3o.mp3', title: 'Acalma o Meu Coração', artist: 'Aline Brasil, Adriana Arydes' },
        { src: 'https://archive.org/download/musicacatolicagpp/Aline%20Brasil%2C%20Irm%C3%A3%20Kelly%20Patr%C3%ADcia%20-%20M%C3%A3e%2C%20Me%20Defende%20do%20Mal.mp3', title: 'Mãe, Me Defende do Mal', artist: 'Aline Brasil, Irmã Kelly Patrícia' },
        { src: 'https://archive.org/download/musicacatolicagpp/Alma%20de%20Cristo.mp3', title: 'Alma de Cristo', artist: 'Música Católica' },
        { src: 'https://archive.org/download/musicacatolicagpp/Alvaro%20%26%20Daniel%20-%20Tua%20Paix%C3%A3o%20%28Clipe%20Oficial%29.mp3', title: 'Tua Paixão (Clipe Oficial)', artist: 'Alvaro & Daniel' },
        { src: 'https://archive.org/download/musicacatolicagpp/Anjos%20De%20Deus%20%28Ao%20Vivo%29.mp3', title: 'Anjos De Deus (Ao Vivo)', artist: 'Música Católica' },
        { src: 'https://archive.org/download/musicacatolicagpp/Ao%20Teu%20Encontro%20%28Ao%20Vivo%29.mp3', title: 'Ao Teu Encontro (Ao Vivo)', artist: 'Música Católica' },
        { src: 'https://archive.org/download/musicacatolicagpp/Ao%20Teu%20Encontro.mp3', title: 'Ao Teu Encontro', artist: 'Música Católica' },
        { src: 'https://archive.org/download/musicacatolicagpp/%C3%81gua%20Humilde.mp3', title: 'Água Humilde', artist: 'Música Católica' },
        { src: 'https://archive.org/download/musicacatolicagpp/Banquete%20Eterno.mp3', title: 'Banquete Eterno', artist: 'Música Católica' },
        { src: 'https://archive.org/download/musicacatolicagpp/Barco%20a%20Vela%20%28Ao%20Vivo%29.mp3', title: 'Barco a Vela (Ao Vivo)', artist: 'Música Católica' },
        { src: 'https://archive.org/download/musicacatolicagpp/Barco%20a%20Vela.mp3', title: 'Barco a Vela', artist: 'Música Católica' },
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

    // Jingle da rádio
    const jingle = {
        src: './somdafe.mp3',
        title: 'Jingle da Rádio',
        artist: 'Web Rádio',
        fallbackSrc: 'https://archive.org/download/musicacatolicagpp/Acredite.mp3' // Fallback caso somdafe.mp3 falhe
    };

    let currentTrackIndex = 0;
    let isPlaying = false;
    let playCount = 0;
    let isJinglePlaying = false;
    let shuffledPlaylist = [];
    let isFirstTrack = true;

    // Embaralha a playlist
    function shufflePlaylist() {
        shuffledPlaylist = [...playlist];
        for (let i = shuffledPlaylist.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledPlaylist[i], shuffledPlaylist[j]] = [shuffledPlaylist[i], shuffledPlaylist[j]];
        }
    }

    // Carrega uma faixa
    function loadTrack(index) {
        const track = isJinglePlaying ? jingle : shuffledPlaylist[index];
        audioPlayer.src = track.src;
        musicTitle.textContent = track.title;
        artistEl.textContent = track.artist;
        artistEl.classList.remove('buffering');

        const metadataTimeout = setTimeout(() => {
            console.warn("Falha ao carregar metadados");
            durationEl.textContent = "0:00";
            if (isJinglePlaying) {
                artistEl.textContent = 'Erro ao carregar jingle';
                setTimeout(nextTrack, 1000); // Avança após 1 segundo
            }
        }, 10000);

        audioPlayer.addEventListener('loadedmetadata', () => {
            clearTimeout(metadataTimeout);
            durationEl.textContent = formatTime(audioPlayer.duration);
            if (isFirstTrack && !isJinglePlaying) {
                const maxStartPercent = 0.8;
                const randomStart = Math.random() * audioPlayer.duration * maxStartPercent;
                audioPlayer.currentTime = randomStart;
                isFirstTrack = false;
            }
        }, { once: true });

        audioPlayer.addEventListener('ended', nextTrack, { once: true });
        audioPlayer.addEventListener('error', () => {
            console.error("Erro ao carregar áudio:", track.src);
            if (isJinglePlaying && track.fallbackSrc) {
                console.log("Tentando fallback para jingle:", track.fallbackSrc);
                audioPlayer.src = track.fallbackSrc;
                audioPlayer.load();
                if (isPlaying) playTrack();
            } else {
                artistEl.textContent = isJinglePlaying ? 'Erro ao carregar jingle' : 'Erro ao carregar faixa';
                setTimeout(nextTrack, 1000); // Avança após 1 segundo
            }
        }, { once: true });
    }

    // Formata o tempo (mm:ss)
    function formatTime(seconds) {
        if (isNaN(seconds)) return "0:00";
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Atualiza a barra de progresso
    function updateProgress() {
        const { currentTime, duration } = audioPlayer;
        const progressPercent = (currentTime / duration) * 100;
        progressBar.value = progressPercent;
        currentTimeEl.textContent = formatTime(currentTime);
        if (isPlaying) {
            requestAnimationFrame(updateProgress);
        }
    }

    // Toca a faixa atual
    function playTrack() {
        let timeout;
        let retryCount = 0;
        const maxRetries = 3;

        function attemptPlay() {
            timeout = setTimeout(() => {
                console.error("Timeout ao carregar áudio");
                if (retryCount < maxRetries) {
                    retryCount++;
                    console.log(`Tentativa ${retryCount} de ${maxRetries}`);
                    audioPlayer.load();
                    attemptPlay();
                } else {
                    artistEl.textContent = isJinglePlaying ? 'Erro ao carregar jingle' : 'Erro ao carregar faixa';
                    setTimeout(nextTrack, 1000);
                }
            }, 10000);

            audioPlayer.play()
                .then(() => {
                    clearTimeout(timeout);
                    isPlaying = true;
                    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
                    playBtn.setAttribute('aria-label', 'Pausar música');
                })
                .catch(error => {
                    clearTimeout(timeout);
                    console.error("Erro ao reproduzir:", error);
                    if (retryCount < maxRetries) {
                        retryCount++;
                        console.log(`Tentativa ${retryCount} de ${maxRetries}`);
                        audioPlayer.load();
                        attemptPlay();
                    } else {
                        artistEl.textContent = isJinglePlaying ? 'Erro ao carregar jingle' : 'Erro ao carregar faixa';
                        setTimeout(nextTrack, 1000);
                    }
                });
        }

        attemptPlay();

        audioPlayer.addEventListener('waiting', () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                console.error("Timeout ao carregar áudio após buffering");
                if (retryCount < maxRetries) {
                    retryCount++;
                    console.log(`Tentativa ${retryCount} de ${maxRetries}`);
                    audioPlayer.load();
                    attemptPlay();
                } else {
                    artistEl.textContent = isJinglePlaying ? 'Erro ao carregar jingle' : 'Erro ao carregar faixa';
                    setTimeout(nextTrack, 1000);
                }
            }, 10000);
            artistEl.textContent = 'Carregando áudio...';
            artistEl.classList.add('buffering');
        });

        audioPlayer.addEventListener('canplay', () => {
            clearTimeout(timeout);
            retryCount = 0;
            artistEl.textContent = isJinglePlaying ? jingle.artist : shuffledPlaylist[currentTrackIndex].artist;
            artistEl.classList.remove('buffering');
        });
    }

    // Pausa a faixa atual
    function pauseTrack() {
        audioPlayer.pause();
        isPlaying = false;
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        playBtn.setAttribute('aria-label', 'Tocar música');
    }

    // Próxima faixa automática
    function nextTrack() {
        if (isJinglePlaying) {
            isJinglePlaying = false;
            currentTrackIndex = (currentTrackIndex + 1) % shuffledPlaylist.length;
            loadTrack(currentTrackIndex);
            if (isPlaying) playTrack();
            return;
        }

        playCount++;
        if (playCount % 3 === 0) {
            isJinglePlaying = true;
            loadTrack(currentTrackIndex);
            if (isPlaying) playTrack();
        } else {
            currentTrackIndex = (currentTrackIndex + 1) % shuffledPlaylist.length;
            loadTrack(currentTrackIndex);
            if (isPlaying) playTrack();
        }
    }

    // Event Listeners
    playBtn.addEventListener('click', () => {
        if (isPlaying) {
            pauseTrack();
        } else {
            playTrack();
        }
    });

    volumeBar.addEventListener('input', () => {
        audioPlayer.volume = volumeBar.value;
    });

    audioPlayer.addEventListener('timeupdate', () => {
        if (isPlaying) {
            requestAnimationFrame(updateProgress);
        }
    });

    // Inicialização
    shufflePlaylist();
    currentTrackIndex = Math.floor(Math.random() * shuffledPlaylist.length);
    loadTrack(currentTrackIndex);
    audioPlayer.volume = volumeBar.value;
    playTrack();
});