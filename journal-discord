#!/bin/bash
#$1 = message
#$2 = Discord url
#$3 = search string e.g. [ for general

LINE=$1
api=$2
search=$3

jmsg=`jq -n --arg msg "$LINE" '$msg'`
(echo "$LINE" | grep -e "$search") && curl -H "Content-Type: application/json" -X POST -d "{\"content\": $jmsg}" "$api"
