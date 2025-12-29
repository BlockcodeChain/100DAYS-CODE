#include <iostream>
using namespace std;

int factorial(int n) {
    int fact = 1;
    for (int i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}

int main() {
    int n, r;
    cout << "Enter N and R value: ";
    cin >> n >> r;

    if (r > n) {
        cout << "Invalid input: r cannot be greater than n";
        return 0;
    }

    int result = factorial(n) / (factorial(r) * factorial(n - r));
    cout << "nCr = " << result;
}
