version?=dev
name=acmecorp

.PHONY: deps
deps:
	yarn install --frozen-lockfile || yarn install

.PHONY: develop
develop: deps
	yarn dev

.PHONY: run
run:
	yarn dev

.PHONY: preview
preview: deps
	yarn build && yarn start

.PHONY: build
build: deps
	yarn build

.PHONY: export
export: deps
	yarn build
	mkdir -p dist
	rsync -a out/ dist/

.PHONY: clean
clean:
	rm -rf node_modules .next out

# Back-compat similar to Caramil naming
.PHONY: develop-site preview-site build-site
develop-site: develop
preview-site: preview
build-site: build


