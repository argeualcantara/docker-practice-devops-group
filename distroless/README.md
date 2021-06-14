# Distroless

Distroless docker images hands on

## Anchore

Docker compose is an anchore server to analyse images

### Install anchor clli

```bash
sudo apt-get install python-pip
pip install anchorecli
export PATH="$HOME/.local/bin/:$PATH"
export ANCHORE_CLI_USER=admin
export ANCHORE_CLI_PASS=foobar
```


### How to run

`docker-compose up -d`

`anchore-cli system feeds list`

