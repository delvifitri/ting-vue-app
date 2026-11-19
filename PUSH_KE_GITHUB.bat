@echo off
title Push Update ke GitHub & Netlify
cd /d "C:\Users\System Analys\Desktop\ting-vue-app"
echo =======================================================
echo   Push Update Otomatis ke GitHub ^& Netlify
echo =======================================================
echo.
set /p msg="Tulis pesan update (tekan Enter untuk default): "
if "%msg%"=="" set msg=update tampilan website
echo.
echo 1. Menyimpan perubahan...
git add .
git commit -m "%msg%"
echo.
echo 2. Mengirim ke GitHub...
git push
echo.
echo =======================================================
echo   Sukses! Netlify otomatis mendeteksi push ini dan
echo   mengupdate link website Anda dalam beberapa detik.
echo =======================================================
pause
