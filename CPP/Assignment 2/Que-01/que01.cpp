#include <bits/stdc++.h>
using namespace std;
int main()
{
    //  Reverse a string without using std::reverse() or substr().
    string str = "hello danish";

    string rev = "";
    for (char ch : str)
    {
        rev = ch + rev;
    }
    cout << "reverese string : " << rev;
}

