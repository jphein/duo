# Discord <> Ulitma Online Bridge 
Discord & Ultima Online bridge using EasyUO. This Ultima Online Discord Bot will allow you to both send and receive messages from your Ultima online charactor using Discord chat service. Also included is a simple vendor search. This can be combined with IFTTT.com and Google Assistant to control your char and dictate your messages using your voice. If you use Discords tts (Text to Speech) feature, any responses in game can be read back to you in real time. [[https://support.discordapp.com/hc/en-us/articles/212517297-Text-to-Speech-101]]

## Javascript Discord Bot
* discord2easyuo.js
* auth.json

## EasyUO Scripts 
* say.txt
* journal.txt
* vendorsearch.txt

## Bash Scripts
* easyuo2discord

## Dependencies
* Windows 10
* Ultima Online Classic Client [[http://web.cdn.eamythic.com/us/uo/installers/20120309/UOClassicSetup_7_0_24_0.exe]]
* EasyUO [[http://www.easyuo.com/forum/download/file.php?id=6826&sid=40837823159df0477bd9d831f1ea9b4b]]
* NOTE: EasyUO is probably considered by EA an UNAUTHORIZED 3rd party program. 
* node.js [[https://nodejs.org/dist/v10.16.3/node-v10.16.3-x86.msi]]
* nircmd.exe [[https://www.nirsoft.net/utils/nircmd.zip]]
* WSL - Windows Subsystem for Linux [[https://www.microsoft.com/en-us/p/ubuntu/9nblggh4msv6]]
* curl (sudo apt get install curl)
* jq (sudo apt get install jq)

## Bot Commands
* '!say MSG\n Will simply say messages outloud.\n'
* '!say \\MSG\n Will message in the guild chat.\n' 
* '!say /MSG\n Will message in the party chat.\n' 
* '!say ,MSG\n Will message in the general chat.\n'https://github.com/jphein/duo
* '!vendor SEARCH ITEM\n Will post a screenshot of the first page of the vendor search.'
* '!help Will display this message.' 
* '!help say" will tell more about the say.' 

## Instructions
* Install
* Enable Discord TTS for bot channel
