var input = File.ReadAllText("sample");

var lines = input
  .Split("\n")
  .Select(line => line
    .Split(" -> ")
    .Select(coords => coords
      .Split(",")
      .Select(num => Int32.Parse(num))));

Console.WriteLine(input);
