#include <bits/stdc++.h>
using namespace std;

int main()
{
    string str;
    cout << "Enter a string: ";
    getline(cin, str);

    int minlen = INT_MAX, currLen = 0;
    string shortword = "", currentWord = "";

    for (int i = 0; i <= str.length(); i++)
    {
        if (isalpha(str[i]))
        {
            currentWord += str[i];
            currLen++;
        }
        else
        {
            if (currLen < minlen && currLen > 0)
            {
                minlen = currLen;
                shortword = currentWord;
            }
            currentWord = "";
            currLen = 0;
        }
    }

    cout << "shortest word: " << shortword << endl;
    cout << "Length: " << minlen << endl;

    return 0;
}
