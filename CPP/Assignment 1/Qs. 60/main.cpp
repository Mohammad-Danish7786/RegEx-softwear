#include <bits/stdc++.h>
using namespace std;

int main()
{
    int a, b, c, d, e, f;
    
    cout << "Enter 6 values: ";
    cin >> a >> b >> c >> d >> e >> f;
    
    int max = a;
    
    if(max < b){
        max = b;
    }
    
    if(max < c){
        max = c;
    }
    
    if(max < d){
        max = d;
    }
    
    if(max < e){
        max = e;
    }
    
    if(max < f){
        max = f;
    }
    
    
    cout << "Largest number: " << max;
    return 0;
}