function calculateCI(p, r, t)
{
      const a= p*(Math.pow((1+r/100),t))

      return (a-p).toFixed(2)
}