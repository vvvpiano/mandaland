# Mandaland

## `getting started`
```
git clone https://github.com/vvvpiano/mandaland.git
cd mandaland
./start.sh # 실행 안된다면 "chmod 777 start.sh" 후 다시 한 번 입력
```

## `use three consoles seperately for debugging`

### `1. database 구동`
```
# pwd: .../mandaland
cd database
npm start
```

### `2. backend 구동`
```
# pwd: .../mandaland
cd backend
npm start
```

### `3. client-web 구동`
```
# pwd: .../mandaland
cd client-web
npm start
```

## `terminate background node process`
```
./kill_server.sh # 실행 안된다면 "chmod 777 kill_server.sh" 후 다시 한 번 입력
```