@echo off
cd /d %~dp0
echo.
echo ==========================================
echo   RUSH TRACK CORPORATE - LOCAL STARTER
echo ==========================================
echo.
if not exist node_modules (
  echo Installing packages for the first time...
  call npm install
)
echo.
echo Starting website at http://localhost:3000
call npm run dev
pause
