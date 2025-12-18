// Print each word on a new line using loops only.

#include <bits/stdc++.h>
using namespace std;

int main()
{

    string str;
    cout << "Enter a string: ";
    getline(cin, str);

    for (auto &ch : str)
    {
        if (!isspace(ch))
        {
            cout << ch;
        }
        else
        {
            cout << endl;
        }
    }

    return 0;
}
