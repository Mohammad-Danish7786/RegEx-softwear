#include <bits/stdc++.h>
using namespace std;

int main() {
    int num;
    
    cout << "Enter number: ";
    cin >> num;
    
    cout << "Divisor of number " << num << " is: ";
    for(int i=1; i<=num; i++){
        if(num%i == 0){
            cout << i << " ";
        }
    }
    
    
    return 0;
}
