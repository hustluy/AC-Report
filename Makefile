
all : commit

commit:
	git add .
	git commit
	git push origin gh-pages

.PHONY : all commit
