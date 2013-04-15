
TAR=10006

G++=g++
CXXFLAGS=-lm -lcrypt -g -pipe -DONLINE_JUDGE -Wall

all : $(TAR)

clean:
	rm -rf $(TAR) *.o

commit:
	git add .
	git commit
	git push origin master

.PHONY : all clean commit
