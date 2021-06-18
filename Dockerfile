# Estagio 1 - Será responsavel em construir nossa aplicação
FROM node:14.16.1-slim as node
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY ./ /app/
#ARG env=prod
RUN npm run build --prod

# Estagio 2 - Será responsavel por expor a aplicação
FROM nginx:1.19
COPY --from=node /app/dist/tarefas-app /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

# Configurar PORT para execucao no Heroku via variavel de ambiente
CMD sed -i -e  's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
