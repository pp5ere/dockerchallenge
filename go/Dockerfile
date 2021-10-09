FROM golang:latest as builder
WORKDIR /hello
COPY main.go .
RUN go build -o hello main.go
ENTRYPOINT [ "./hello" ]

FROM scratch
WORKDIR /hello
COPY --from=builder /hello .
ENTRYPOINT [ "./hello" ]