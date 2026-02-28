const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('alumni.html', 'utf8');

// Parse the HTML first to build a lookup for LinkedIn links
const yearBlocks = html.split('<h1 class="section-title-01">').slice(1);
const scrapedData = [];

yearBlocks.forEach(block => {
    const cards = block.split('<div class="card">').slice(1);
    cards.forEach(card => {
        const nameMatch = card.match(/<h2>(.*?)<\/h2>/);
        const name = nameMatch ? nameMatch[1].trim() : "Unknown";

        let linkedin = "#";
        const socialMatch = card.match(/<ul class="social-icons">([\s\S]*?)<\/ul>/);
        if (socialMatch) {
            const links = socialMatch[1].match(/href="([^"]+)"/g);
            if (links) {
                for (const linkAttr of links) {
                    const url = linkAttr.replace('href="', '').replace('"', '');
                    if (url.includes('linkedin.com') || url.includes('linkedin')) {
                        linkedin = url;
                        if (!linkedin.startsWith('http')) {
                            if (linkedin.startsWith('www.')) {
                                linkedin = 'https://' + linkedin;
                            } else {
                                linkedin = 'https://www.linkedin.com/in/' + linkedin.replace(/\/$/, "");
                            }
                        }
                        break;
                    }
                }
            }
        }

        scrapedData.push({ name, linkedin });
    });
});

const finalAlumniData = {};

// Now only iterate through local directories
const localDir = path.join(__dirname, 'public', 'Alumni');
if (fs.existsSync(localDir)) {
    const localYears = fs.readdirSync(localDir);

    localYears.forEach(localYear => {
        const localPath = path.join(localDir, localYear);
        if (fs.statSync(localPath).isDirectory()) {

            // map localYear (e.g. "2024 - 25") to our normalized year key (e.g. "2024-25")
            const parts = localYear.split('-').map(s => s.trim());
            let targetYearKey = localYear;
            if (parts.length === 2) {
                targetYearKey = `${parts[0]}-${parts[1]}`;
            }

            finalAlumniData[targetYearKey] = [];

            const files = fs.readdirSync(localPath);
            files.forEach(file => {
                const ext = path.extname(file);
                if (['.jpg', '.jpeg', '.png'].includes(ext.toLowerCase())) {
                    const fileName = path.basename(file, ext);

                    let trueName = fileName;
                    let linkedin = "#";

                    // Try to map to scraped data for LinkedIn link
                    const normalizedFileName = fileName.toLowerCase().replace(/[^a-z]/g, '');
                    for (const person of scrapedData) {
                        const normalizedScrapedName = person.name.toLowerCase().replace(/[^a-z]/g, '');
                        if (normalizedScrapedName.includes(normalizedFileName) || normalizedFileName.includes(normalizedScrapedName)) {
                            linkedin = person.linkedin;
                            trueName = person.name; // Use proper case from HTML if found
                            break;
                        }
                    }

                    finalAlumniData[targetYearKey].push({
                        name: trueName,
                        role: "Coordinator",
                        image: `/Alumni/${localYear}/${file}`,
                        linkedin: linkedin
                    });
                }
            });

            // Sort individuals by name
            finalAlumniData[targetYearKey].sort((a, b) => a.name.localeCompare(b.name));
        }
    });

    // Ensure descending order of years
    const sortedFinalData = {};
    Object.keys(finalAlumniData).sort((a, b) => b.localeCompare(a)).forEach(key => {
        sortedFinalData[key] = finalAlumniData[key];
    });

    fs.writeFileSync('alumni_data_mapped.json', JSON.stringify(sortedFinalData, null, 2));
    console.log("Mapped data written to alumni_data_mapped.json");
}
