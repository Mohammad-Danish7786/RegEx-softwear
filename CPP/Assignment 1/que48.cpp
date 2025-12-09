#include <bits/stdc++.h>
using namespace std;

int main()
{
    float arr[20];

    cout << "Enter 20 float values:" << endl;

    for (int i = 0; i < 20; i++)
    {
        cin >> arr[i];
    }

    cout << "You entered:" << endl;

    for (int i = 0; i < 20; i++)
    {
        cout << arr[i] << " ";
    }

    cout << endl;
    return 0;
}
