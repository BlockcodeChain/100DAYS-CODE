//                  1
//             1         1
//         1         2      1
//     1       3        3      1
// 1     4      6      4         1


//0    1             ->0c0
//1    1 1           ->1c0 1c1
//2    1 2 1         ->2c0 2c1 2c2
//3   1 3 3 1        ->3c0 3c1 3c2 3c3
//4   1 4 6 4 1      ->4c0 4c1 4c2  4c3 4c4
//5   1 5 10 10  5 1 ->5c0 5c1 5c2  5c3 5c4 5c5

#include<iostream>
using namespace std;
int factorial(int n ){
    int fact=1;
    for(int i=1;i<=n;i++){
        fact*=i;
    }
    return fact;
}
int combination(int n ,int r){
    int ncr=factorial(n)/(factorial(r)*factorial(n-r));
    return ncr;
}
int main(){
    int n;
    cin>>n;
for(int i=0;i<=n;i++){
    for(int space=0;space<n-i;space++){
        cout<<" ";
    }
for(int j=0;j<=i;j++){
    cout<<combination(i,j)<<" ";
}
cout<<endl;
    
}
}
// time complexicity
// for(int i = 0; i <= n; i++)
// 👉 runs n times

// Inner loop
// cpp
// Copy code
// for(int j = 0; j <= i; j++)
// 👉 total elements printed:

// Copy code
// 1 + 2 + 3 + ... + n = n(n+1)/2
// So printing part = O(n²) ✅

// ⚠️ But factorial is also used!
// factorial(n)
// cpp
// Copy code
// for(int i = 1; i <= n; i++)
// 👉 O(n) time

// And factorial is called 3 times per combination 😬

// Total calls ≈ n²
// O(n² × n) = O(n³)