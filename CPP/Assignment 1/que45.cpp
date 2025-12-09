#include <bits/stdc++.h>
using namespace std;

int main()
{
    int a, b, temp;

    cout << "Enter two integers: ";
    cin >> a >> b;

    // Swapping using a temporary variable
    temp = a;
    a = b;
    b = temp;

    cout << "After swapping:" << endl;
    cout << "a = " << a << endl;
    cout << "b = " << b << endl;

    return 0;
}