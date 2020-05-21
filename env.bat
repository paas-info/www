@ECHO OFF
echo I will start all services needed this project ...
start ..\jloads-Load\start.bat
start ..\jloads-js\start.bat
start ..\jloads-php\start.bat
::cd .. &&  jloads-php\start.bat
start start.bat

