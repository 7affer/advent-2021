var lines = ReadInput.parse("sample");
var size = lines.Max(line =>
  (new int[] { line.start.x, line.start.y, line.end.x, line.end.y, }).Max()
);
var map = new Map(size);

foreach (var line in lines) map.DrawLine(line, true);

Console.WriteLine(map.ToString());
Console.WriteLine($"Score: {map.getScore()}");
