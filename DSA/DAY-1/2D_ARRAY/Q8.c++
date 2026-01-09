// WAP a program to print transpose of matrix entered by user and stored it in a new matrix
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
   

    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
       int result=arr[j][i];
        cout<<result<<" ";
        }
      cout<<endl;
    }
     
}