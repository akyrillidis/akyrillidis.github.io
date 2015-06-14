#!/bin/bash
set -e
( sleep 1 && open 'http://localhost:3000/' ) &
jekyll serve --limit_posts 10 --watch --host localhost --port 3000
