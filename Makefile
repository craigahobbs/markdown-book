ifeq '$(wildcard .makefile)' ''
    $(info Downloading base makefile...)
    $(shell curl -s -o .makefile 'https://raw.githubusercontent.com/craigahobbs/chisel/master/static/Makefile.base')
endif
ifeq '$(wildcard package.json)' ''
    $(info Downloading package.json...)
    $(shell curl -s -o package.json 'https://raw.githubusercontent.com/craigahobbs/chisel/master/static/package.json')
endif
ifeq '$(wildcard .eslintrc.js)' ''
    $(info Downloading .eslintrc.js...)
    $(shell curl -s -o .eslintrc.js 'https://raw.githubusercontent.com/craigahobbs/chisel/master/static/.eslintrc.js')
endif
include .makefile

NYC_ARGS := --exclude src/chisel

JSDOC_ARGS := -c jsdoc.json

$(eval $(call COMPILE_CHSL, markdownBookTypes))

help:
	@echo '            [gh-pages]'

clean:
	rm -f .makefile package.json .eslintrc.js

.PHONY: gh-pages
gh-pages: #_clean commit
	if [ ! -d ../$(notdir $(CURDIR)).gh-pages ]; then git clone -b gh-pages `git config --get remote.origin.url` ../$(notdir $(CURDIR)).gh-pages; fi
	cd ../$(notdir $(CURDIR)).gh-pages && git pull
	rsync -rv --delete --exclude=.git/ src/ ../$(notdir $(CURDIR)).gh-pages
	touch ../$(notdir $(CURDIR)).gh-pages/.nojekyll
