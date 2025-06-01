@echo off
cd /d E:\Reader
start /B python generate_json.py
start /B python -m http.server 8000
start firefox -private-window http://localhost:8000/
timeout /t 1
powershell -command "$wshell = New-Object -ComObject wscript.shell; $wshell.AppActivate('Firefox'); Start-Sleep -Milliseconds 500; $wshell.SendKeys('{F11}')"