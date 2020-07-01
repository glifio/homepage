all:
	make build VERSION=$(VERSION)
	make push

build:
	@echo building version: $(VERSION)
	docker build -f Dockerfile -t openworklabs/glif-home:$(VERSION) .

push:
	docker push openworklabs/glif-home