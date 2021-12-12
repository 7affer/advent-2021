class Map
{
  private int[][] map;

  public Map(int size)
  {
    map = JaggedArrayGenerator.create(size);
  }

  public void DrawLine(Line line, bool includeDiagonal)
  {
    var length = Math.Max(
      Math.Abs(line.start.x - line.end.x),
      Math.Abs(line.start.y - line.end.y)
    ) + 1;

    var getArr = (Func<Point, int> selector) => Enumerable
      .Range(selector(line.start), length)
      .Select((x, index) =>
      {
        if (selector(line.start) < selector(line.end)) return x;
        else if (selector(line.start) > selector(line.end)) return x - 2 * index;
        return selector(line.start);
      }).ToArray();

    var xArr = getArr(point => point.x);
    var yArr = getArr(point => point.y);

    if (includeDiagonal || (line.start.x == line.end.x || line.start.y == line.end.y))
    {
      foreach (var i in Enumerable.Range(0, xArr.Length)) map[yArr[i]][xArr[i]] += 1;
    }
  }

  public int getScore()
  {
    return map.Sum(row => row.Count(point => point > 1));
  }

  public override string ToString()
  {
    return String.Join(
      "\n",
      map.Select(
        row => String.Join("", row.Select(point => point > 0 ? point.ToString().PadLeft(2) : " ."))
      )
    );
  }
}
