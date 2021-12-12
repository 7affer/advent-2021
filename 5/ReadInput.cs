struct Point
{
  public int x;
  public int y;
}

struct Line
{
  public Point start;
  public Point end;
}

static class ReadInput
{
  public static Line[] parse(string fileName)
  {
    var input = File.ReadAllText(fileName);
    return input
      .Split("\n")
      .Where(line => line.Length > 0)
      .Select(line =>
      {
        var points = line.Split(" -> ")
          .Select(coords =>
          {
            var point = coords
              .Split(",")
              .Select(num => Int32.Parse(num))
              .ToArray();
            return new Point { x = point[0], y = point[1] };
          })
          .ToArray();
        return new Line { start = points[0], end = points[1] };
      })
      .ToArray();
  }
}
