build:
	@echo building version: $(VERSION)
	docker build -f Dockerfile -t openworklabs/glif-home:$(VERSION) .

push:
	docker push openworklabs/glif-home