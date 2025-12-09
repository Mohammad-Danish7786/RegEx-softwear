#include <bits/stdc++.h>
using namespace std;

int main()
{
    int a;
    cout << "Enter a: ";
    cin >> a;
    
    int digit = 0;
    int temp = a;
    while(temp != 0){
        digit++;
        temp /= 10;
    }
    
    cout << digit << endl;
    
    int reverse = 0;
    temp = a;
    while(temp != 0){
        int lastdigit = temp%10;
        int power = 1, val = digit;
        while(val != 1){
            power *= 10;
            val--;
        }
        cout << "power: " << power << "lastdigit" << lastdigit << "digit" << digit << endl;
        
        reverse = reverse + lastdigit * power;
        
        digit--;
        temp /= 10;
    }
    
    cout << reverse << endl;
    if(reverse == a){
        cout << a << " is palindrome number";
    }
    else {
        cout << a << " is not a palindrome number";
    }
    return 0;
}