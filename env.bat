@ECHO OFF
echo I will start all services needed this project ...
start ..\jloads-Load\start.bat > load.log
start ..\jloads-js\start.bat > js.log
start ..\jloads-php\start.bat > php.log
::cd .. &&  jloads-php\start.bat
start start.bat

