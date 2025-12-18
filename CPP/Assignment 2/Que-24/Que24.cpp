#include <bits/stdc++.h>
using namespace std;

bool isanagram(string str1, string str2)
{
    string str = "";

    int str1_len = str1.length();
    int str2_len = str2.length();

    if (str1_len != str2_len)
    {
        return false;
    }

    sort(str1.begin(), str1.end());
 
    sort(str2.begin(), str2.end());

    if (str1 == str2)
    {
        return true;
    }

    return false;
}

int main()
{
    string str1, str2;
    cout << "Enter a string 1: ";
    cin >> str1;

    cout << "Enter a string 2: ";
    cin >> str2;

    bool is_anagram = isanagram(str1, str2);

    if (is_anagram)
    {
        cout << "Given strings are anagram";
    }
    else
    {
        cout << "Given strings are not anagram";
    }

    return 0;
}