# sudo touch bg_process.service
# sudo vim bg_process.service

[Unit]
Description=bg_process
After=syslog.target network.target

[Service]
Type=simple
User=root
ExecStart=/usr/bin/python /var/www/scripts/my_bg_script.py
Restart=on-abort

[Install]
WantedBy=multi-user.target
