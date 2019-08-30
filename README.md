# projectLive

## your own personal streaming server

The scope of this project is to build an easy to setup personal streaming service, with live chat, user count and replay functionality

## Tech Stack

- React / Redux
- Node / Express / EJS
- MongoDB / Mongoose
- PM2
- Material UI
- [NodeMediaServer](https://github.com/illuspas/Node-Media-Server)
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js)

## Description

projectLive is a tool for people to easily setup their own personale streaming server. Each instance will be able to issue streaming keys to use for authentication on the rmtp server.

The project is composed of three parts:

- the server, handling the stream conversion
- the streaming frontend, where users will be able to watch the stream and interact ina  chat window
- the admin dashboard, where the streamer will be able to set the stream title and see all the stream stats (number of viewers etc.)

## Architecture

look at the diagram [here](https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Untitled%20Diagram.drawio#R5Vhdb5swFP01SN3DJmzzlcc26dZprVYpmto9OnALrICRcZqwXz87mBAHmjTrRzY1yoPv4dpcH5%2Fra2ORcb78wmmZXLEIMgvb0dIiEwtj5GBsqb8d1Q3ie24DxDyNtFMHTNPfoEFbo%2FM0gspwFIxlIi1NMGRFAaEwMMo5W5hudywz31rSGHrANKRZH71JI5E0aID9Dr%2BANE7aNyNv1DzJaeusZ1IlNGKLDYicW2TMGRNNK1%2BOIVPktbw0%2FT4%2F8nQdGIdCPKVDzO7I14yGS7i4nomz4CaJv30kzSgPNJvrCV%2BxImasAh20qFsmZPylaoZ1lhYRcIucLZJUwLSkocIXUgASS0SeSQvJ5ozNpWN0OVsDNLyPuUK%2Fz4UcBTSugwAuYPno7NCaMyk2YDkIXksX3cFvadY6cwJtLzZWTUPJ5oK5GqRaKPF66I5L2dB0HkCt22MQIiktbTIuEhazgmbnHXrGG8bkc1tanc8lY6Xm6hcIUes8oXPBTMolW7y%2B1f1Xxk9lfHJbc7LcfDiptdXEqgLczb%2BcD5vzEHbM29FZSnkMYp%2F0%2BuvJIaMifTDjePHFcXq6nwoONE%2BLWMWQi1JNFbjUZG8ZzUXakwMvIG0HmdLGo760ERrStu2%2BEn3%2BO9W29z9o2%2Btp%2B4dUcrWqSYWsV7maNrZPYiiAUzWc2pehiD4cX%2BqOKXWPHF3qo3cq9eCJUneeKfVV11POab3hULK0ENXGyNcK6HSCiGvoxA22zj5b%2FgQ9z584ZEtITcSdrNZT%2F3ulBb28vVQEYvsGZpXMPAt7mVCnKFmSvFi1TmTJCsXx09Y1s5bggaz1h7KWvNbhC6Eemf08LqJTdUNQZ9qMVlUamsRUgrN7GLOM8VUHYq9%2Bb5Kee9POG16QDcbdAcJb7LDs7KUH3tqm23RaD9HsLrrXjjxDtjnQaFsQDQ%2B9gQ7dL7YD9oI3yGdEdpaOghVHrRWPy%2FsFqwjCz9Pz65YRsnVpDJw9ZQEfQ0a4t5WdRvKiIqEJrZIZozz6d0uDbxZSf%2BBajvBQacCHlwZpdp9TGvq7j1Lk%2FA8%3D)

## Story points

### server

- easy to setup (maybe with a cli)

#### rmtp

- stream is protected with stream key check
- stream is recorded on file

#### api

- users can create accounts in order to interact with the chat
- chat should be saved on database
- chat should work with websocket

#### streaming frontend

- users can register
- users can see when the streamer is live
- users can watch replay if streamer is not live
- users can interact with chat

#### admin frontend

- streamer can login
- streamer can set stream title
- streamer can see chat
- streamer can see live viewers

## Project setup

Set upstream for your fork to point to the original repository. [Directions](https://help.github.com/en/articles/fork-a-repo)

Install dependencies in ```rmtp```, ```api```, ```frontend``` and ```admin```

### Database

Make sure to have MongoDB installed locally or connect to your own cloud hosted database

- Local:
	- Installation directions for [Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
	- Installation directions for [Mac](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
	- Installation directions for [Linux](https://docs.mongodb.com/manual/administration/install-on-linux/)
- Cloud:
	- MongoDB [Atlas](https://docs.atlas.mongodb.com/getting-started/)