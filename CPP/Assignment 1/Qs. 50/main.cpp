#include <bits/stdc++.h>
using namespace std;

int main()
{
    float a, b, c, d, e, min;
    
    cout << "Enter Values of a, b, c, d, e... \n";
    cin >> a >> b >> c >> d >> e;
    
    min = a;
    
    if(min>b){
        min = b;
    }
    
    if(min > c){
        min = c;
    }
    
    if(min > d){
        min = d;
    }
    
    if(min > e){
        min = e;
    }
    
    cout << min;
    
    return 0;
}