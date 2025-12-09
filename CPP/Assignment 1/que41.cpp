#include <bits/stdc++.h>
using namespace std;

int main()
{
    string name, city, college;

    cout << "Enter your name: ";
    getline(cin, name);

    cout << "Enter your city: ";
    getline(cin, city);

    cout << "Enter your college: ";
    getline(cin, college);

    cout << "Hello, myself " << name
         << ". I am from " << city
         << ". I have completed BTech from " << college << "." << endl;

    return 0;
}