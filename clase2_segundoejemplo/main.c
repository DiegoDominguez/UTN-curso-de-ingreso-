#include <stdio.h>
#include <stdlib.h>

int main()
{
    char letra;
        for(;;)
        {
        scanf("%c",&letra);
        printf("%c",letra);
        if (letra=='s')
        break;
        }

    return 0;
}
