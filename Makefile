version?=dev
name=acmecorp

.PHONY: deps
deps:
	corepack enable || true
	yarn install --immutable || yarn install

.PHONY: develop
develop: deps
	yarn dev

.PHONY: run
run:
	yarn dev

.PHONY: preview
preview: deps
	yarn preview

.PHONY: build
build: deps
	yarn build

.PHONY: clean
clean:
	rm -rf node_modules .next out

# Back-compat similar to Caramil naming
.PHONY: develop-site preview-site build-site
develop-site: develop
preview-site: preview
build-site: build


