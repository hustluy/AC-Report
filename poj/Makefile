# Time-stamp: <2013-07-01 15:54:02 CDT gongzhitaao>

CXXFLAGS=-lm -lcrypt -g -pipe -Wall -std=c++11
TEST_FLAGS=-lgtest_main -lgtest -pthread

PROG=1014
TEST=test.$(PROG)

.PHONY: all clean test

all: $(PROG)

clean:
	rm -rf $(PROG) a.out

test : test/$(PROG).cpp
	$(CXX) $(CXXFLAGS) $< $(TEST_FLAGS)
