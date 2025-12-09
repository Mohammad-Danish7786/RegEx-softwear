#include <bits/stdc++.h>
using namespace std;

int main()
{
    double num, sum = 0;

    cout << "Enter 5 numbers: ";

    for (int i = 0; i < 5; i++)
    {
        cin >> num;
        sum += num;
    }

    double average = sum / 5;

    cout << "The average is: " << average << endl;

    return 0;
}