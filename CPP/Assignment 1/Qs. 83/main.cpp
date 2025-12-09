#include <bits/stdc++.h>
using namespace std;

int main() {
    int num;
    
    int max = 0;
    
    for(int i=1; i<=5; i++){
        cout << "Enter number " << i << endl;
        cin >> num;
        
        if(num > max){
            max = num;
        }
    }
    
    cout << "Largest number is: " << max;
    
    
    return 0;
}
