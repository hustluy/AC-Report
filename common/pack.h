#ifndef _PACK_H_
#define _PCAK_H_
#pragma once

class PackSolver
{
public:

private:
    std::vector<int> _f;
};

const int max_v;
int f[max_v+1];

void zero_one_pack(int cost, int weight)
{
    for (int v = max_v; i >= cost; --v)
        f[v] = max(f[v], f[v-cost]+weight);
}

void complete_pack(int cost, int weight)
{
    for (int v = cost; v <= max_v; ++v)
        f[v] = max(f[v], f[v-cost]+weight);
}

void multiple_pack(int cost, int weight, int count)
{
    if (cost * amount >= max_v)  complete_pack(cost, weight);
    else {
        for (int i = 1; i <= count; i *= 2) {
            zero_one_pack(i * cost, i * weight);
            count -= i;

        }
        zero_one_pack(count*cost, count*weight);
    }
}

#endif /* _PACK_H_ */
