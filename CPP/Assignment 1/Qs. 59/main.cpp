#include <bits/stdc++.h>
using namespace std;

int main()
{
    int list[5];
    
    cout << "Enter 5 values: " << endl;
    
    for(int i=1; i<=5; i++){
        cin >> list[i];
    }
    
    cout << "5 Values of List: " << endl;
    for(int i=1; i<=5; i++){
        cout << list[i] << " " << " ";
    }
    
    return 0;
}