// WAP a program to print transpose of matrix entered by user 
#include<iostream>

using namespace std;
int main(){
    int m,n;
    cout<<"Enter Row and Column of MATRIX:" ;
    cin>>m>>n;

    int arr[m][n];
   cout<<"MATRIX"<<endl;
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            cin>>arr[i][j];
        }
    }
    cout<<"Transpose of MATRIX\n";
   
//    coloumn wise printing
    for(int j=0;j<n;j++){
        for(int i=0;i<m;i++){
        cout<<arr[i][j];
        // cout<<result<<" ";
        }
      cout<<endl;
    }
     
}