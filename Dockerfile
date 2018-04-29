FROM reg.qiniu.com/jt/nginx-rewrite:alpine
  
MAINTAINER Leon liufengnian@ehousechina.com

COPY dist/ /usr/share/nginx/html/

RUN echo 'localhost www.local.com' >> /etc/hosts

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
