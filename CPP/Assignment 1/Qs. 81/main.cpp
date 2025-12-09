#include <bits/stdc++.h>
using namespace std;

int main() {
    int num;
    string str;
    
    cout << "Enter number: ";
    cin >> num;
    
    cin.ignore();
    
    cout << "Enter a string: ";
    getline(cin, str);
    
    for(int i=0; i<num; i++){
        cout << str << endl;
    }
    
    return 0;
}
