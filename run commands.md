docker build -t trainer:0.0.0.1 .

docker run -d -p 8000:443 --name trainer trainer:0.0.0.1
