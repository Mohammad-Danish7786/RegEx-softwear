#include <bits/stdc++.h>
using namespace std;

int main() {
    string str;
    cout << "Enter a string: ";
    getline(cin, str);

    string word, ans;
    for(char ch: str){
        if(!isspace(ch)){
            word += ch;
        }else {
            if(!word.empty()){
                if(!ans.empty()){
                    ans = " " + ans;
                }
                ans = word + ans;
                word = "";
            }
        }
    }

    if(!word.empty()){
        if(!ans.empty()){
            ans = " " + ans;
        }
        ans = word + ans;
    }

    cout << "Reverse word manual logic: " << ans;

    return 0;
}