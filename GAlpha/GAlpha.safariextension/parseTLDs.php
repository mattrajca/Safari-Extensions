<?php

$supported_domains = file_get_contents('http://www.google.com/supported_domains');
$domains = explode("\n", trim($supported_domains));

echo "Whitelist:\n\n";

foreach ($domains as $domain) {
	echo "<string>http://*$domain/</string>\n";
	echo "<string>https://*$domain/</string>\n";
}

echo "\n\n";
echo "Domains:\n\n";

foreach ($domains as $domain) {
	echo "<string>*$domain</string>\n";
}

echo "\n\n";
