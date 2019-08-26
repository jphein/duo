#!/bin/bash
#Run the following bash commands:
#Update
sudo apt update --yes && sudo apt upgrade --yes
#Git if not already installed
sudo apt install --yes git
cd /mnt/c/Users/$USER/Desktop/              #Change to the Desktop
git clone https://github.com/jphein/duo.git #Git clone the duo repository pt install --yes git
cd /mnt/c/Users/$USER/Desktop/duo

#Ultima Online Classic Client 
wget http://web.cdn.eamythic.com/us/uo/installers/20120309/UOClassicSetup_7_0_24_0.exe
#run install

#EasyUO 
wget http://www.easyuo.com/forum/download/file.php?id=6826&sid=40837823159df0477bd9d831f1ea9b4b
#Unzip and move to duo folder

#NOTE: EasyUO is probably considered by EA an UNAUTHORIZED 3rd party program. Use only on servers that allow it.  
#node.js
wget https://nodejs.org/dist/v10.16.3/node-v10.16.3-x86.msi
#run install

#nircmd.exe (for taking screenshots from the cmd line) 
wget https://www.nirsoft.net/utils/nircmd.zip
#Unzip and move to duo folder

#curl 
sudo apt install --yes curl jq
# * jq
#sudo apt get install jq

sudo chmod u+x ./easyuo2discord.sh
npm install --save discord.js
