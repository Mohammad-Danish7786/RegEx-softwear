#include <iostream>
#include <sstream>
using namespace std;

int main()
{
    string sentence;
    cout << "Enter a sentence: ";
    getline(cin, sentence);

    string word = "";

    for (char ch : sentence)
    {
        if (ch != ' ')
        {
            word += ch;
        }
        else
        {
            cout << word << endl;
            word = "";
        }
    }
    cout << word << endl;

    return 0;
}
