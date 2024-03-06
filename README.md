## Description

Tugas Recruitment Web Development Backend Ristek 2024  
To see documentation about this API access in `http://localhost:[PORT]/api` when SWAGGER_ENABLE in env is true

## Installation

1. Clone this project `git clone https://github.com/restuaar/okk-ristek.git` in terminal
2. Go to folder with `cd okk-ristek` and run install in terminal.

```bash
$ npm install
```

> Make sure you have installed and setup the Postgresql database.

## Setup Environtment

1. Look at the .env.example file, you can create a new file with the name .env and fill your envontment variables accordingly like .env.example
2. Then after filling in .env, migrate the Prisma database with
   `npx prisma migrate dev` in terminal for sync with your Postgresql schema
3. You can seed your database with dummy data with `npx prisma db seed`.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
