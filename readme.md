# Melhor IDADE SA

Contem a documentacao de apoio do projeto.

# Configuracao da pasta web

Para rodar o projeto primeiramente lembre-se voce precisa ter instalado em sua maquina o Nodejs com NPM e tambem precisa ter o bower instalado, caso tudo esteja
instalado entao voce deve executar na pasta do projeto /web o seguinte comando

  bower install --allow-root
  npm install

Agora que voce instalou entao podera executar no terminal:

  node web.js

# Configuracao da pasta API

Para rodar o projeto da api basta voce instalar os pacotes node da seguinte maneira:

  npm install

Agora voce ja esta apto a executar a api da seguinte maneira:

  node api.js



# Configuracao do servidor apache2

O servidor apache no projeto e utilizado para dar nome ao melhor idade, ou seja,
voce ira chamar o melhor idade a partir da URL: www.melhoridade.com.br e a API da seguinte maneira: api.melhoridade.com.br. Para isso voce deve inserir o sites-avalible da seguinte maneira, lembre-se siga o passo a passo sem pular NADA!

	cd /etc/apache2/sites-available
	vi portal.conf

Agora voce ira inserir no portal.conf a seguinte instrucao:

```
 <VirtualHost *:80>
     ServerName melhoridade.com.br
 </VirtualHost>
```

Agora voce devera executar no terminal as instrucoes:

  a2ensite portal.conf
  service apache2 restart