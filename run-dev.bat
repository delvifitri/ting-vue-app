@echo off
title Menjalankan Server Vue (Horus - TING)
cd /d "%~dp0"
echo =======================================================
echo   Menjalankan Server Pengembangan Vue.js (Vite)
echo =======================================================
echo.
echo Server sedang dimulai...
echo Browser akan otomatis dibuka di http://localhost:5173
echo (Tekan Ctrl+C di jendela ini jika ingin stop server)
echo.
start http://localhost:5173
npm run dev
pause
