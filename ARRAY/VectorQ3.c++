// wap to copy the content of one array into another in reverse order using stack
#include<iostream>
#include<stack>
using namespace std;

int main(){
    stack<int>v;
    
     
      int array[]={1,2,3,4,5};
      int arr2[5];
      for(int i=0;i<5;i++){
        v.push(array[i]);
      }
    // Pop from stack and store into arr2 (reverse order)
    for(int i = 0; i < 5; i++) {
        arr2[i] = v.top();
        v.pop();
    }

    // Print reversed array
    cout << "Reversed Array: ";
    for(int i = 0; i < 5; i++) {
        cout << arr2[i] << " ";
    }

    
}