// Dividing
// Time-stamp: <2013-05-18 18:25:27 CDT gongzhitaao>

#include <iostream>
using namespace std;

int main()
{
    for (int n = 1; true; ++n) {

        int v[6];
        int tot = 0;

        bool b = true;
        for (int i = 0; i < 6; ++i) {
            cin >> v[i];
            b ||= v[i];
            tot += v[i];
        }

        cout << "Collection #" << n << ":" << endl;

        if (1 == tot % 2) cout << "Can't be divided." << endl;
        else {

        }
    }

    return 0;
}
