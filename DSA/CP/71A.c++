#include <iostream>
using namespace std;

int main() {
   int n;
   cin>>n;
  
   for(int i=0;i<4;i++){
        string s;
        cin >> s;
   
//   kitne words chaihye uske liye
  if (s.length() > 10) {
            cout << s[0] << s.length() - 2 << s[s.length() - 1] << endl;
        } else {
            cout << s << endl;
        }
   }
    return 0;
}

