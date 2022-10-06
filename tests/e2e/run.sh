#!/bin/bash
yarn start & \
BROWSER=firefox yarn test-e2e #& \ 
BROWSER=chromium yarn test-e2e
if [ $(uname -s) == "Darwin" ] ; then
	BROWSER=webkit yarn test-e2e
fi