#!/usr/bin/env python
import sys
import os

BRANCH_PREFIX = "PR"

parsed = sys.argv[1].split("github.com/")[1].split("/")

repo = parsed[1]
number = parsed[3]
os.chdir("/home/aaron/repos/" + repo)
os.system("git fetch origin \
        +refs/pull/*/head:refs/heads/{}/*".format(BRANCH_PREFIX))
os.system("git checkout {}/{}".format(BRANCH_PREFIX, number))
os.system('notify-send "' + "Repo: {}, Number: {}".format(repo, number) + '"\
 "Parsed: ' + str(parsed) + '"')
