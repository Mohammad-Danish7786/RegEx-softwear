#include <bits/stdc++.h>
using namespace std;

int main() {
    int num;
    
    cout << "Enter number: ";
    cin >> num;
    
    if(num <= 0){
        cout << "Perfect number is positive interger";
        return 0;
    }
    
    int sum = 0;
    for(int i=1; i<=num/2; i++){
        if(num%i == 0){
            sum += i;
        }
    }
    
    if(sum == num){
        cout << num << " is a perfect number!";
    }
    else{
        cout << num << " is not perfect number!";
    }
    
    
    return 0;
}
