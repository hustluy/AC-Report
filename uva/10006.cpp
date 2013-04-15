// 10006 Carmichael Numbers

#include <stdlib.h>

#include <iostream>
#include <cmath>
using namespace std;

bool isprime(int n)
{
    int k = sqrt(n);
    for (int i = 2; i <= k; ++i)
        if (0 == n % i) return false;
    return true;
}

int powermod(int k, int n, int p)
{
    if (!n) return 1;
    int r = powermod((k*k) % p, n >> 1, p);
    if (n & 1) r = (r * k) % p;
    return r;
}

bool carmichael(int k)
{
    for (int i = 2; i < k; ++i)
        if (powermod(i, k, k) != i) return false;
    return true;
}

int main()
{
    int k;
    // while (cin >> k && k) {
    for (int k = 3; k < 65000; ++k) {
        if (!isprime(k) && carmichael(k))
            cout << "The number " << k << " is a Carmichael number." << endl;
        else
            cout << k << " is normal." << endl;
    }
    return 0;
}
