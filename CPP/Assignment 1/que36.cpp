#include <bits/stdc++.h>
using namespace std;

int main()
{
    string pref1, pref2;

    cout << "Enter your first preference: ";
    getline(cin, pref1);

    cout << "Enter your second preference: ";
    getline(cin, pref2);

    cout << "I prefer " << pref1 << " over " << pref2 << endl;
    return 0;
}