static class JaggedArrayGenerator
{
  public static int[][] create(int size)
  {
    return Enumerable
      .Range(0, size + 1)
      .Select(_ => Enumerable
        .Range(0, size + 1)
        .Select(_ => 0)
        .ToArray()
      ).ToArray();
  }
}
