const imagens = ["./IMG/captura1.PNG", "./IMG/captura2.PNG", "./IMG/captura3.PNG"]; // Substitua pelos caminhos das suas imagens
    let indice = 0;
    let tempoRestante = 60; // tempo em segundos (10 minutos)

    function atualizarImagem() {
      indice = (indice + 1) % imagens.length;
      document.getElementById("imagem").src = imagens[indice];
      tempoRestante = 60; // reinicia o timer
    }

    function atualizarTimer() {
      const minutos = Math.floor(tempoRestante / 60);
      const segundos = tempoRestante % 60;
      document.getElementById("timer").textContent = 
        `Próxima imagem em: ${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
      
      if (tempoRestante > 0) {
        tempoRestante--;
      } else {
        atualizarImagem();
      }
    }

    setInterval(atualizarTimer, 1000); // atualiza o timer a cada segundo