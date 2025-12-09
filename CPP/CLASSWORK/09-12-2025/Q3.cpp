#include <bits/stdc++.h>
using namespace std;

int main()
{
    int jump = 3;
    string s;

    cout << "enter your value of jump: \n";
    cin >> jump;

    if (jump < 0 || jump >= 6)
    {
        cout << "user has entered an invailid input \n";
        return 0;
    }
    cout << "Enter the value of string \n";
    cin >> s;

    if (s.length() < jump)
    {
        cout << "-1";
        return 0;
    }
    for (int i = 0; i < s.length(); i += jump)
    {
        cout << s[i];
    }
    return 0;
}