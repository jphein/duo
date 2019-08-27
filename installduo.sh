#!/bin/bash
#Run the following bash commands:
#Update
sudo apt update --yes && sudo apt upgrade --yes
#Git if not already installed
#sudo apt install --yes git
#Unzip
sudo apt install --yes unzip
#curl 
sudo apt install --yes curl
# jq
sudo apt install --yes jq
#Install duo
cd /mnt/c/Users/$USER/Desktop/              #Change to the Desktop
git clone https://github.com/jphein/duo.git #Git clone the duo repository pt install --yes git
cd /mnt/c/Users/$USER/Desktop/duo
#Ultima Online Classic Client 
curl -o uoc.exe http://web.cdn.eamythic.com/us/uo/installers/20120309/UOClassicSetup_7_0_24_0.exe
#run install
./uoc.exe
#EasyUO 
curl -o easyuo.zip http://www.easyuo.com/forum/download/file.php?id=6826
#Unzip and move to duo folder
unzip easyuo.zip
#NOTE: EasyUO is probably considered by EA an UNAUTHORIZED 3rd party program. Use only on servers that allow it.  
#node.js
curl -o node.msi https://nodejs.org/dist/v10.16.3/node-v10.16.3-x86.msi
#run install
cmd.exe /c node.msi
#nircmd.exe (for taking screenshots from the cmd line) 
curl -o nircmd.zip https://www.nirsoft.net/utils/nircmd.zip
#Unzip and move to duo folder
unzip nircmd.zip
#Make dicord executalle 
sudo chmod u+x ./easyuo2discord.sh
#Install discord.js depency
npm install --save discord.js
#Run discord bot
Node.exe discord2easyuo.js
