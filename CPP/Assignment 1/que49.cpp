#include <bits/stdc++.h>
using namespace std;

int main()
{
    string str1, str2, temp;

    cout << "Enter first string: ";
    cin >> str1;

    cout << "Enter second string: ";
    cin >> str2;

    // Swapping
    temp = str1;
    str1 = str2;
    str2 = temp;

    cout << "After swapping:" << endl;
    cout << "First string: " << str1 << endl;
    cout << "Second string: " << str2 << endl;

    return 0;
}
