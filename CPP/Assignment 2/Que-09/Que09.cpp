// Count special characters (not letters, digits, spaces).

#include <bits/stdc++.h>
using namespace std;

int main()
{

    string str;
    cout << "Enter a string: ";
    getline(cin, str);
    int count = 0;
    for (auto ch : str)
    {
        if (!isalpha(ch) && !isdigit(ch) && !isspace(ch))
        {
            count++;
        }
    }
    cout << "Count of special character in string: " << count;

    return 0;
}
