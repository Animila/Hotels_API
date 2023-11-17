# API сервер гостиничного комплекса "Байкальский отдых"

> Данный проект разрабатывался в рамках курсовой работы 3 курса.

> <b>Автор:</b> Христофоров И.В. <br/> > <b>Руководитель:</b> Краскова Н.И.

# Стек технологий

Для проекта используется JS в виде фреймворка Fastify JS, под оболочкой Docker и с балансировщиком NGINX. В качестве БД используется PostgreSQL.

# Установка

Склонируйте себе репозиторий

```sh
git clone https://github.com/Animila/Hotels_API.git
cd Hotels_API
```

Заполните все env файлы из шаблонов .env.local

Запустите через Docker-compose

```sh
docker-compose up -d --build
```

# Использование

Перейдя по указанному вами адресу API_DOMAIN вы попадете на Swagger, в котором можете просмотреть все возможности API.
