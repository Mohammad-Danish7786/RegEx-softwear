// Check if a string is a palindrome without reverse().

#include <bits/stdc++.h>
using namespace std;

int main()
{

    string str;
    cout << "Enter a string: ";
    getline(cin, str);

    bool ispalindrom = true;

    int left = 0;
    int right = str.length() - 1;

    while (left < right)
    {
        if (str[left] != str[right])
        {
            ispalindrom = false;
            break;
        }
        left++;
        right--;
    }

    if (ispalindrom)
    {
        cout << "Palindrom";
    }
    else
    {
        cout << "Not palindrom";
    }
    return 0;
}

