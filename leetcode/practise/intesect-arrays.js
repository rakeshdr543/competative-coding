while (i < n && j < m)
{
    if (a[i] > b[j])
    {
        j++;
    }
    else if (b[j] > a[i])
    {
        i++;
    }
    else
    {
        // when both are equal
        document.write(a[i] + " ");
        i++;
        j++;
    }
}