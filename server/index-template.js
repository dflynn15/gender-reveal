export default html =>
  `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
	<script src="/socket.io/socket.io.js"></script>
  <script>
    //Cue barfing
    var host = "www.inlikebabyflynn.com";
    if ((host == window.location.host) && (window.location.protocol != "https:")){
      window.location.protocol = "https";
    }
  </script>
  <title>Gender Reveal</title>
</head>

<body>
	<div id="app">
    ${html}
  </div>
  <script src="/dist/main.js"></script>
</body>

</html>
`;
