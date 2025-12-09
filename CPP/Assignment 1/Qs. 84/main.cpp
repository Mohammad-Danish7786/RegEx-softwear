#include <bits/stdc++.h>
using namespace std;

int main() {
    int a;
    
    int sum = 0;
    for(int i=1; i<=6; i++){
        cout << "Enter " << i << " number: " << endl;
        cin >> a;
        
        if(a%2 != 0){
            sum += a;
        }
    }
    
    cout << "sum of odd numbers: " << sum;
    
    return 0;
}
