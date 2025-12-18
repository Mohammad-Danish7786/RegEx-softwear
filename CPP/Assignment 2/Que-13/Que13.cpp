#include <bits/stdc++.h>
using namespace std;

int main()
{

    string str;
    cout << "Enter a string: ";
    getline(cin, str);

    for (auto &ch : str)
    {
        if (isalpha(ch))
        {
            if (islower(ch))
            {
                ch = ch - 32;
            }
            else if (isupper(ch))
            {
                ch = ch + 32;
            }
        }
    }
    cout << "Toggle character of  string: " << str;

    return 0;
}
