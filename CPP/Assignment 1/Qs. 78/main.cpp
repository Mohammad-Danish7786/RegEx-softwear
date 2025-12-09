#include <bits/stdc++.h>
using namespace std;

int main() {
    int num;
    
    cout << "Enter number: ";
    cin >> num;
    
    if(num < 0){
        cout << num << " is not a integer";
        return 0;
    }
    
    if(num == 0){
        cout << num << " is a zero";
    }
    else if(num%2 == 0){
        cout << num << " is a even number";
    }else{
        cout << num << " is a odd number";
    }
    
    return 0;
}
