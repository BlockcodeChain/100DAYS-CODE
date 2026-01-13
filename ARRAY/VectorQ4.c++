// rotate given array a by k step where k is non negative
#include<iostream>
#include<vector>
using namespace std;

// Reverse function
void reverse(vector<int>& v, int start, int end) {
    while(start < end) {
        swap(v[start], v[end]);
        start++;
        end--;
    }
}

// Rotate function
void rotate(vector<int>& v, int k) {
    int n = v.size();

    // Step 1: reverse whole array
    reverse(v, 0, n - 1);

    // Step 2: reverse first k elements
    reverse(v, 0, k - 1);

    // Step 3: reverse remaining elements
    reverse(v, k, n - 1);
}

int main() {
    vector<int> v;
    int num;
    cin >> num;

    for(int i = 0; i < num; i++) {
        int x;
        cin >> x;
        v.push_back(x);
    }

    int k;
    cout << "Enter k: ";
    cin >> k;

    k = k % num;   // important step

    rotate(v, k);

    // Print result
    for(int i = 0; i < num; i++) {
        cout << v[i] << " ";
    }

    return 0;
}
