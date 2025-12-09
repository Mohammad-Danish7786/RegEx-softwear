#include <bits/stdc++.h>
using namespace std;

int main() {
    float arr[10];
    
    cout << "Enter 10 float numbers: ";
    for(int i=0; i<10; i++){
        cin >> arr[i];
    }
    
    cout << "10 Float input numbers: " << endl;
    for(int i=0; i<10; i++){
        cout << arr[i] << " ";
    }
    
    return 0;
}
