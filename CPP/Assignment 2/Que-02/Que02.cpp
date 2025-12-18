#include <bits/stdc++.h>
using namespace std;
int main()
{
    // Count vowels using loops only.
    string s = "Danish";

    int count = 0;
    for (char ch : s)
    {
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
        {
            count++;
        }
    }
    cout << "count of vowels : " << count;
}

string s;
getline(cin,s);

vowels[] = {}