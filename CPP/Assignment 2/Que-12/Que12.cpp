// Count lowercase characters in a string.

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
        if (isalpha(ch))
        {
            if(islower(ch)){

                count++;
            }
        }
    }
    cout << "Count of lowercase in string: " << count;

    return 0;
}
