FROM golang:buster

COPY ./hello-world.go /app/hello-world.go

WORKDIR /app

RUN go build -o hello-world hello-world.go

EXPOSE 8080

ENTRYPOINT ["./hello-world"]
