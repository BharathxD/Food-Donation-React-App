#!/bin/bash

INSTALL_DEPENDENCIES="npm install"
CD_CLIENT="cd client"
NPM_START="npm start"

echo Open new terminal and run ./server.sh

sleep 3

$CD_CLIENT
$INSTALL_DEPENDENCIES
$NPM_START