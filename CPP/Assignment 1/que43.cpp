#include <bits/stdc++.h>
using namespace std;

int main()
{
    int a, b;

    cout << "Enter two numbers: ";
    cin >> a >> b;

    int diff = a - b;
    diff = abs(diff); // Convert negative result to positive

    cout << "The absolute difference is: " << diff << endl;

    return 0;
}