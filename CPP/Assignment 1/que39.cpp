#include <bits/stdc++.h>
using namespace std;

int main()
{
    int arr[10];

    cout << "Enter 10 integers:" << endl;

    for (int i = 0; i < 10; i++)
    {
        cin >> arr[i];
    }

    cout << "You entered:" << endl;

    for (int i = 0; i < 10; i++)
    {
        cout << arr[i] << " ";
    }

    cout << endl;
    return 0;
}