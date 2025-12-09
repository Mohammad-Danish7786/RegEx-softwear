#include <bits/stdc++.h>
using namespace std;

int main() {
    int a, b;
    
    cout << "Enter two numbers: " << endl;
    cin >> a >> b;
    
    int smaller;
    (a<b) ? smaller = a : smaller = b;
    
    int gcd = 1;
    for(int i=1; i<=smaller; i++){
        if(a%i == 0 && b%i == 0){
            gcd = i;
        }
    }
    
    cout << "GCD of " << a << " and " << b << " is: " << gcd;
    return 0;
}
