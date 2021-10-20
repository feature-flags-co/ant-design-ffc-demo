FROM nginx

WORKDIR /usr/share/nginx/html/

COPY /dist /usr/share/nginx/html/

COPY /nginx.conf /etc/nginx/conf.d/default.conf

# COPY --from=builder /usr/src/app/dist  /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]