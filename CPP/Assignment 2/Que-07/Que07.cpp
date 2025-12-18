// Count digits (characters between '0'–'9').


#include <bits/stdc++.h>
using namespace std;

int main()
{

    string str;
    cout << "Enter a string: ";
    getline(cin, str);
    int count = 0;
    for(auto ch:str){
        if(isdigit(ch)){
            count++;
        }
    }
    cout<<"Count of digits in string: "<<count;

    return 0;
}
