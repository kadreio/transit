FROM golang

RUN apt update
RUN apt install -y git default-jdk maven
RUN apt install zip unzip
RUN mkdir /scratch

RUN (cd /scratch && git clone --depth=1 https://github.com/apache/pulsar.git)
RUN (cd /scratch/pulsar && mvn install -DskipTests)

RUN apt install -y \
  apt-transport-https \
  ca-certificates \
  curl \
  gnupg2 \
  software-properties-common

RUN curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -
RUN add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/debian \
   $(lsb_release -cs) \
   stable"
RUN apt update
RUN apt install -y docker-ce

VOLUME /var/run/docker.sock /var/run/docker.sock


RUN (cd /scratch/pulsar &&  bash pulsar-client-cpp/pkg/deb/docker-build-deb.sh)

ARG app_env
ENV APP_ENV $app_env


COPY ./app /go/src/github.com/user/myProject/app
WORKDIR /go/src/github.com/user/myProject/app

RUN go get -u github.com/apache/incubator-pulsar/pulsar-client-go/pulsar

RUN go get ./
RUN go build

CMD if [ ${APP_ENV} = production ]; \
	then \
	app; \
	else \
	go get github.com/pilu/fresh && \
	fresh; \
	fi

EXPOSE 8080
