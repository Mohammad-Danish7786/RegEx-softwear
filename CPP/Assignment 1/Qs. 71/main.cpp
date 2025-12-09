#include <bits/stdc++.h>
using namespace std;

int main() {
    float num;
    
    float sum, average;
    cout << "Enter floating numbers: ";
    for(int i=0; i<7; i++){
        cin >> num;
        sum += num;
    }
    
    average = sum/7;
    
    cout << average;
    
    
    return 0;
}