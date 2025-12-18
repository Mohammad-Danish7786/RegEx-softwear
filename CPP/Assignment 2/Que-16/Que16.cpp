// Count words in a sentence (handle multiple spaces).
#include <bits/stdc++.h>
using namespace std;

int main()
{

    string str;
    cout << "Enter a string: ";
    getline(cin, str);
    int count = 0;

    for (auto &ch : str)
    {
        if (!isspace(ch))
        {
            count++;
        }
    }
    cout << "count character in a string: " << count;

    return 0;
}
