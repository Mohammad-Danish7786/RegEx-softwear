

#include <bits/stdc++.h>
using namespace std;

int main()
{
    string str;
    cout << "Enter a string: ";
    getline(cin, str);

    int consonantCount = 0;

    for (char ch : str)
    {
        // Check if character is an alphabet
        if (isalpha(ch))
        {
            ch = tolower(ch);
            // Check if NOT a vowel
            if (ch != 'a' && ch != 'e' && ch != 'i' &&
                ch != 'o' && ch != 'u')
            {
                consonantCount++;
            }
        }
    }

    cout << "Number of consonants: " << consonantCount;
    return 0;
}
