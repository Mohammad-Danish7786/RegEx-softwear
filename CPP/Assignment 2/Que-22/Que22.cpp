#include <bits/stdc++.h>
using namespace std;

int main()
{
    string sentence, word;
    cout << "Enter a sentence: ";
    getline(cin, sentence);

    stringstream ss(sentence);

    while (ss >> word)
    {
        reverse(word.begin(), word.end());
        cout << word << " ";
    }

    return 0;
}
