#include <bits/stdc++.h>
using namespace std;

int main()
{
    string str;
    cout << "Enter a string: ";
    getline(cin, str);

    int maxLen = 0, currLen = 0;
    string longestWord = "", currentWord = "";

    for (int i = 0; i <= str.length(); i++)
    {
        if (isalpha(str[i]))
        {
            currentWord += str[i];
            currLen++;
        }
        else
        {
            if (currLen > maxLen)
            {
                maxLen = currLen;
                longestWord = currentWord;
            }
            currentWord = "";
            currLen = 0;
        }
    }

    cout << "Longest word: " << longestWord << endl;
    cout << "Length: " << maxLen << endl;

    return 0;
}
