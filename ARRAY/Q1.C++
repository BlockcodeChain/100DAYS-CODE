// DISPLAY ARRAY
#include<iostream>
using namespace std;
void display(int arr[]){
    for(int i=0;i<6;i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
   
}
void change(int b[]){
    b[2]=100;
}
 int main(){
    int array[]={1,2,3,4,5,6};
    display(array);
    change(array);
    display(array);
 }