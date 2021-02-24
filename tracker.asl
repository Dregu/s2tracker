state("Spel2") {}

startup {
  settings.Add("ms", true, "Miscellaneous");
  settings.Add("tracker", false, "Enable journal tracker support", "ms");
}

init {
  vars.ptr = IntPtr.Zero;
  vars.state = new MemoryWatcherList();
  vars.checksum = 0;
  do {
    var gameDir = Path.GetDirectoryName(modules.First().FileName);
    var path = gameDir + "\\" + "savegame.sav";
    try {
      FileStream fs = new FileStream(path, FileMode.Open, FileAccess.Read);
      byte[] data = new byte[fs.Length];
      int numBytesToRead = (int)fs.Length;
      int numBytesRead = 0;
      while (numBytesToRead > 0) {
        int n = fs.Read(data, numBytesRead, numBytesToRead);
        if (n == 0) break;
        numBytesRead += n;
        numBytesToRead -= n;
      }
      print("Read "+data.Length.ToString());
      byte[] pattern = data.Skip(2).Take(1024).ToArray();
      foreach (var page in game.MemoryPages(true)) {
        var scanner = new SignatureScanner(game, page.BaseAddress, (int) page.RegionSize);
        IntPtr findptr = scanner.Scan(new SigScanTarget(0, pattern));
        if (findptr != IntPtr.Zero) {
          vars.ptr = findptr;
        }
      }
    } catch {
      print("Can't open savegame.sav");
    }
  } while (vars.ptr == IntPtr.Zero);
  print("Savedata: "+vars.ptr.ToString("x"));
}

update {
  if (settings["tracker"]) {
    vars.journal = game.ReadBytes((IntPtr)vars.ptr, 0xd1);
    int sum = 0;
    Array.ForEach((System.Byte[])vars.journal, i => sum += i);
    if (sum != vars.checksum) {
      vars.checksum = sum;
      var post = "journal="+string.Join(",", vars.journal);
      byte[] bytes = Encoding.ASCII.GetBytes(post);
      System.Net.WebRequest req = System.Net.WebRequest.Create("http://localhost:27122/");
      req.Method = "POST";
      req.ContentType = "application/x-www-form-urlencoded";
      Stream dataStream = req.GetRequestStream();
      dataStream.Write(bytes, 0, bytes.Length);
      dataStream.Close();
      System.Net.WebResponse res = req.GetResponse();
      print(((System.Net.HttpWebResponse)res).StatusDescription);
    }
  }
}
