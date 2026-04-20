const https = require('https');

https.get('https://lordsmobile.igg.com/project/game_tool/index.php?action=play_content&cate=5&lang=es', (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
        const extractUrls = (html) => {
            let urls = [];
            let m;
            let regex = /<img src="(.*?)"/g;
            while ((m = regex.exec(html)) !== null) {
                urls.push("https://lordsmobile.igg.com" + (m[1].startsWith('/') ? m[1] : '/project/game_tool/' + m[1]));
            }
            return urls;
        }

        // Just get all img tags that are inside that section roughly
        let sectionRegex = /Líderes de infantería:(.*?)Líderes de caballería:(.*?)Líderes de artillería:(.*?)Líderes de máquina de asedio:(.*?)5\. Observar/s;
        let match = data.match(sectionRegex);
        
        if (match) {
            let inf = extractUrls(match[1]);
            let cav = extractUrls(match[2]);
            let art = extractUrls(match[3]);
            let siege = extractUrls(match[4]);
            
            console.log(JSON.stringify({inf, cav, art, siege}, null, 2));
        } else {
            console.log("Regex failed, trying loose matching");
            let images = extractUrls(data);
            console.log("Found " + images.length + " images in total");
        }
    });
}).on("error", (err) => {
    console.log("Error: " + err.message);
});
