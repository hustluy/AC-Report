
# Time-stamp: <2012-11-06 17:46:58 CST gongzhitaao>

SHELL=/bin/bash

CXX=g++
CXXFLAGS=-lm -lcrypt -O2 -pipe -Wall

PROGRAM=1009
TEST=$(PROGRAM)-test

define run-test-batch
LIMIT=1000; \
GOOD=0; \
FAIL=1; \
STAT=0; \
for ((i = 0; i < LIMIT; ++i)); do \
	./$(TEST); \
	diff <(./$(PROGRAM) < $(PROGRAM).in) $(PROGRAM).out; \
	let "STAT = $$?"; \
	if [[ $$STAT -eq $$FAIL ]]; then \
		break; \
	fi; \
done; \
if [[ $$STAT -eq $$FAIL ]]; then \
	./$(PROGRAM) < $(PROGRAM).in > ill.out; \
	echo "$$i WA, see $(PROGRAM).in and $(PROGRAM).out for test data,\
and ill.out for bad output"; \
else \
	rm -rf *.in *.out; \
	echo "AC"; \
fi
endef

define run-test-single
if [[ -e $(PROGRAM).in ]] && [[ -e $(PROGRAM).out ]]; then \
	diff <(./$(PROGRAM) < $(PROGRAM).in | tee ill.out) $(PROGRAM).out; \
	if [[ $$GOOD -ne $$? ]]; then \
		echo "WA, check again please"; \
	else \
		echo "AC"; \
	fi; \
else \
	echo "There are no WA data."; \
	echo "1) the $(PROGRAM) passed all current tests. OR"; \
	echo "2) make test"; \
fi
endef

.PHONY: clean test

all: $(PROGRAM)

clean:
	rm -rf $(PROGRAM) $(TEST) *.o *.out *.in

test: $(PROGRAM) $(TEST)
	@$(run-test-batch)

valid: $(PROGRAM)
	@$(run-test-single)
