#include <bits/stdc++.h>
using namespace std;

string removeSpaces(string str)
{
    string result = "";
    for (int i = 0; i < str.length(); i++)
    {
        if (!isspace(str[i]))
        {
            result += str[i];
        }
    }

    return result;
}

int main()
{
    string str;
    cout << "Enter a string: ";
    getline(cin, str);

    cout << "Removed Spaces from String: " << removeSpaces(str);

    return 0;
}
