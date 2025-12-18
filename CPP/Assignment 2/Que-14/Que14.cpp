#include <bits/stdc++.h>
using namespace std;

int main()
{

    string str;
    cout << "Enter a string: ";
    getline(cin, str);

    for (auto &ch : str)
    {
        if (isspace(ch))
        {
            ch = '-';
        }
    }
    cout << "replace space with dash string: " << str;

    return 0;
}
