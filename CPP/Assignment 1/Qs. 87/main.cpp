#include <bits/stdc++.h>
using namespace std;

int main() {
    string str = "aeiou";
    
    int count = 0;
    for(int i=0; i<str.length(); i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
            count++;
        }
    }
    
    cout << "Number of vowel in " << str << " is " << count;
    
    return 0;
}
