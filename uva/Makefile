
TAR=115

G++=g++
CXXFLAGS=-lm -lcrypt -O2 -pipe -DONLINE_JUDGE -Wall

all : $(TAR)

clean:
	rm -rf $(TAR) *.o

commit:
	git add .
	git commit
	git push origin master

.PHONY : all clean commit
