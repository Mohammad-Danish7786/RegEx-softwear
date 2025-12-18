

#include <bits/stdc++.h>
using namespace std;

int main()
{
    // Convert all lowercase letters to uppercase manually (ASCII).

    string str;
    cout << "Enter a string: ";
    getline(cin, str);

    for (auto ch : str)
    {
        if (isalpha(ch))
        {
            
            if (ch >= 'a' && ch <= 'z')
            {
                ch = ch - 32;
            }
        }
        cout << ch;
    }
    return 0;
}
