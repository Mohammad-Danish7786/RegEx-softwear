#include <bits/stdc++.h>
using namespace std;

int main() {
    int nums[8];
    
    cout << "Enter Number: ";
    for(int i=0; i<8; i++){
        cin >> nums[i];
    }
    
    for(int i=0; i<8; i++){
        for(int j=i+1; j<8; j++){
            if(nums[i] < nums[j]){
                int temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    
    cout << "Numbers in descending order: ";
    for(int i=0; i<8; i++){
        cout << nums[i] << " ";
    }
}