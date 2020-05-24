@ECHO OFF
echo I will start all services needed this project ...
start start.bat > faas.log
cd .. & cd jloads-Load & start start.bat > load.log & cd ..
cd .. & cd jloads-js & start start.bat > js.log  & cd ..
cd .. & cd jloads-php & start start.bat > php.log  & cd ..
::cd .. &&  jloads-php\start.bat

