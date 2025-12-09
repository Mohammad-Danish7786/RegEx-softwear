#include <bits/stdc++.h>
using namespace std;

int main()
{
    int arr[5];

    cout << "Enter 5 integers: ";
    for (int i = 0; i < 5; i++)
    {
        cin >> arr[i];
    }

    int smallest = arr[0];

    for (int i = 1; i < 5; i++)
    {
        if (arr[i] < smallest)
        {
            smallest = arr[i];
        }
    }

    cout << "The smallest number is: " << smallest << endl;

    return 0;
}
