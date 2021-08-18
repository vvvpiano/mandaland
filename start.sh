echo "install packages..."
npm install

echo "===== Start MANDALAND ====="

cd database
echo "[Start database server] Listen on port 4001"
npm start&
cd ../backend
echo "[Start backend server] Listen on port 4000"
npm start&
cd ../client-web
echo "[Start client-web server] Listen on port 3000"
npm start&
cd ..