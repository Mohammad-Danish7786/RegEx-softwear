#include <bits/stdc++.h>
using namespace std;

int main() {
    float num;
    
    float prod = 1;
    for(int i=1; i<=4; i++){
        cout << "Enter float number " << i << ": ";
        cin >> num;
        
        prod *= num;
    }
    
    cout << "Product is " << prod;
    
    return 0;
}
