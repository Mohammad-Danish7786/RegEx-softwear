#include <bits/stdc++.h>
using namespace std;

int main()
{
    float arr[15];

    cout << "Enter 15 float values:" << endl;

    for (int i = 0; i < 15; i++)
    {
        cin >> arr[i];
    }

    cout << "You entered:" << endl;

    for (int i = 0; i < 15; i++)
    {
        cout << arr[i] << " ";
    }

    cout << endl;
    return 0;
}