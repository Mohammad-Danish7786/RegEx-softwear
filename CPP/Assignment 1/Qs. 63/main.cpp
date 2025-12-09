#include <bits/stdc++.h>
using namespace std;

int main()
{
    int a;
    cout << "Enter a: ";
    cin >> a;
    
    int temp = a, fact = 1;
    while(temp>1){
        fact *= temp;
        temp--;
    }
    
    cout << "Factorial of " << a << " is " << fact;
    return 0;
}