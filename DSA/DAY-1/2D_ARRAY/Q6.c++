// WAP a program to add  matrix
#include<iostream>
#include<climits>
using namespace std;
int main(){
    int m,n;
    cout<<"Enter Row and Column of MATRIX1 and MATRIX2:" ;
    cin>>m>>n;
    cout<<"MATRIX-1"<<endl;
    int arr[m][n];
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            cin>>arr[i][j];
        }
    }
    cout<<endl;
    int arr2[m][n];
   cout<<"MATRIX-2"<<endl;
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            cin>>arr2[i][j];
        }
    }
    cout<<"ADDITION OF 2 MATRIX\n";
   
   
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
        int result=arr[i][j]+arr2[i][j];
        cout<<result<<" ";
        }
      cout<<endl;
    }
     
}