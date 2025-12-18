#include <bits/stdc++.h>
using namespace std;

bool isduplicate(char ch, string str){
    for(char s: str){
        if(s == ch){
            return true;
        }
    }

    return false;
}

string upperCase(string str) {
    string res = "";

    for(char &ch: str){
        if(islower(ch)){
            ch = toupper(ch);
        }

        if(!isduplicate(ch, res)){
            res += ch;
        }
    }

    return res;
}


int reverseNum(int num) {
    int rev = 0;
    while (num != 0) {
        rev = rev * 10 + (num % 10);
        num /= 10;
    }
    return rev;
}

int convertNum(string str) {
    int num = stoi(str);
    return num;
}

int main() {
    string str;
    cout << "Enter a string: ";
    cin >> str;

    string alpha, nums;
    for(char ch: str){
        if(isdigit(ch)){
            nums += ch;
        }else {
            alpha += ch;
        }
    }
    
    int num = convertNum(nums);
    
    string res_alpha = upperCase(alpha);
    int res_nums = reverseNum(num);

    cout << "alpha: " << res_alpha << endl;
    cout << "nums: " << res_nums << endl;

    return 0;
}