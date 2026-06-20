const bases = [
    {
        th: 4,
        picture: "townhall4-base1.png",
        title: "TH4 Farming base",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH4%3AHV%3AAAAAMAAAAAJ1FElpllTfBBMmryMJCJMH"
    },
    {
        th: 4,
        picture: "townhall4-base2.png",
        title: "TH4 Farming Base",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH4%3AHV%3AAAAAMAAAAAJ1FlhkbZnHM3gqAFX0sO8N"
    },
    {
        th: 4,
        picture: "townhall4-base3.png",
        title: "TH4 War Base",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH4%3AWB%3AAAAAMAAAAAJ1FG_-_UMX44d_lppNovMt"
    },
    {
        th: 4,
        picture: "townhall4-base4.png",
        title: "TH4 farming Base",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH4%3AHV%3AAAAAMAAAAAJCqxH8fqWGQ2lDUjj0H0Rf"
    },
    {
        th: 4,
        picture: "townhall4-base5.png",
        title: "TH4 farming base",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH4%3AHV%3AAAAAMAAAAAHwboNHAZ810rQza2GjWhx9"
    },
    {
        th: 4,
        picture: "townhall4-base6.png",
        title: "TH4 war base",
        link:"https://link.clashofclans.com/en?action=OpenLayout&id=TH4%3AWB%3AAAAAMAAAAAHwbQxCCFovv97RJsZBUuAk"
    },
    {
        th: 4,
        picture: "townhall4-base7.png",
        title: "TH4 farming base",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH4%3AWB%3AAAAAKwAAAAKYMQHjBjszWQrRtzAvFm0c"
    },
    {
        th: 4,
        picture: "townhall4-base8.png",
        title: "TH4 war base",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH4%3AWB%3AAAAAMAAAAAJCsXgZM-9dNxEYP8g5Lcu6"
    },
    {
        th: 4,
        picture: "townhall4-base9.png",
        title: "farming base",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH4%3AHV%3AAAAAMAAAAAJCrs6cxqdBY2RUTPKyOndT"
    },
    {
        th: 4,
        picture: "townhall4-base10.png",
        title: "farming base",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH4%3AWB%3AAAAAKwAAAAKYMdAnZSQj-dmsxsQ0t8dz"
    },
    
    // Town Hall 5 Bases
    {
        th: 5,
        picture: "townhall5-base1.png",
        title: "TH5 War Base",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH5%3AWB%3AAAAAAgAAAAMbx7ckzhT5_80A-GFyCTPz"
    },
    {
        th: 5,
        picture: "townhall5-base2.png",
        title: "TH5 Farming Base",
        link: ""
    },
    {
        th: 5,
        picture: "townhall5-base3.png",
        title: "TH5 War Base",
        link: ""
    },
    
    // Town Hall 6 Bases
    {
        th: 6,
        picture: "townhall6-base1.png",
        title: "TH6 Hybrid Base",
        link: ""
    },
    {
        th: 6,
        picture: "townhall6-base2.png",
        title: "TH6 Defense Base",
        link: ""
    },
    {
        th: 6,
        picture: "townhall6-base3.png",
        title: "TH6 Trophy Base",
        link: ""
    },
    
    // Town Hall 7 Bases
    {
        th: 7,
        picture: "townhall7-base1.png",
        title: "TH7 War Base",
        link: ""
    },
    {
        th: 7,
        picture: "townhall7-base2.png",
        title: "TH7 Farming Base",
        link: ""
    },
    {
        th: 7,
        picture: "townhall7-base3.png",
        title: "TH7 Trophy Base",
        link: ""
    },
    
    // Town Hall 8 Bases
    {
        th: 8,
        picture: "townhall8-base1.png",
        title: "TH8 farming base",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH8%3AHV%3AAAAACAAAAALduqHBraMlSwg-W8zxGNzm"
    },
    {
        th: 8,
        picture: "townhall8-base2.png",
        title: "TH8 Farming Base",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH8%3AHV%3AAAAACAAAAALlbrUtdMfvuXwjwz08O_ov"
    },
    {
        th: 8,
        picture: "townhall8-base3.png",
        title: "TH8 Trophy Base",
        link: ""
    },
    
    // Town Hall 9 Bases
    {
        th: 9,
        picture: "townhall9-base1.png",
        title: "TH9 War Base",
        link: ""
    },
    {
        th: 9,
        picture: "townhall9-base2.png",
        title: "TH9 Trophy Base",
        link: ""
    },
    {
        th: 9,
        picture: "townhall9-base3.png",
        title: "TH9 Farming Base",
        link: ""
    },
    {
        th: 9,
        picture: "townhall9-base4.png",
        title: "TH9 Hybrid Base",
        link: ""
    },
    
    // Town Hall 10 Bases
    {
        th: 10,
        picture: "townhall10-base1.png",
        title: "TH10 War Base",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH10%3AWB%3AAAAAKQAAAAKpdINn1UKknPxGoxgJ6eAM"
    },
    {
        th: 10,
        picture: "townhall10-base2.png",
        title: "TH10 Trophy Base",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH10%3AHV%3AAAAAKQAAAAKpdJoYUSxvx2R43hJlti1J"
    },
    {
        th: 10,
        picture: "townhall10-base3.png",
        title: "TH10 Farming Base",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH10%3AHV%3AAAAAKQAAAAKpdF0jLY7g7Y5TUmTtp7pf"
    },
    {
        th: 10,
        picture: "townhall10-base4.png",
        title: "TH10 Hybrid Base",
        link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH10%3AHV%3AAAAAKQAAAAKpdG-xfgsTgbf-zz9sL2d8"
    },
    
    // Town Hall 11 Bases
    {
        th: 11,
        picture: "townhall11-base1.png",
        title: "TH11 War Base",
        link: ""
    },
    {
        th: 11,
        picture: "townhall11-base2.png",
        title: "TH11 Hybrid Base",
        link: ""
    },
    {
        th: 11,
        picture: "townhall11-base3.png",
        title: "TH11 Farming Base",
        link: ""
    },
    {
        th: 11,
        picture: "townhall11-base4.png",
        title: "TH11 Trophy Base",
        link: ""
    },
    
    // Town Hall 12 Bases
    {
        th: 12,
        picture: "townhall12-base1.png",
        title: "TH12 War Base",
        link: ""
    },
    {
        th: 12,
        picture: "townhall12-base2.png",
        title: "TH12 Trophy Base",
        link: ""
    },
    {
        th: 12,
        picture: "townhall12-base3.png",
        title: "TH12 Farming Base",
        link: ""
    },
    {
        th: 12,
        picture: "townhall12-base4.png",
        title: "TH12 Hybrid Base",
        link: ""
    },
    
    // Town Hall 13 Bases
    {
        th: 13,
        picture: "townhall13-base1.png",
        title: "TH13 Legend Base",
        link: ""
    },
    {
        th: 13,
        picture: "townhall13-base2.png",
        title: "TH13 War Base",
        link: ""
    },
    {
        th: 13,
        picture: "townhall13-base3.png",
        title: "TH13 Trophy Base",
        link: ""
    },
    {
        th: 13,
        picture: "townhall13-base4.png",
        title: "TH13 Hybrid Base",
        link: ""
    },
    
    // Town Hall 14 Bases
    {
        th: 14,
        picture: "townhall14-base1.png",
        title: "TH14 Champion Base",
        link: ""
    },
    {
        th: 14,
        picture: "townhall14-base2.png",
        title: "TH14 War Base",
        link: ""
    },
    {
        th: 14,
        picture: "townhall14-base3.png",
        title: "TH14 farming base",
        link: ""
    },
    {
        th: 14,
        picture: "townhall14-base4.png",
        title: "TH14 Trophy Base",
        link: ""
    },
    
    // Town Hall 15 Bases
    {
        th: 15,
        picture: "townhall15-base1.png",
        title: "TH15 Legend Base",
        link: ""
    },
    {
        th: 15,
        picture: "townhall15-base2.png",
        title: "TH15 War Base",
        link: ""
    },
    {
        th: 15,
        picture: "townhall15-base3.png",
        title: "TH15 Defense Base",
        link: ""
    },
    {
        th: 15,
        picture: "townhall15-base4.png",
        title: "TH15 Trophy Base",
        link: ""
    },
    
    // Town Hall 16 Bases
    {
        th: 16,
        picture: "townhall16-base1.png",
        title: "TH16 Ultimate Base",
        link: ""
    },
    {
        th: 16,
        picture: "townhall16-base2.png",
        title: "TH16 War Base",
        link: ""
    },
    {
        th: 16,
        picture: "townhall16-base3.png",
        title: "TH16 Trophy Base",
        link: ""
    },
    {
        th: 16,
        picture: "townhall16-base4.png",
        title: "TH16 Hybrid Base",
        link: ""
    },
    
    // Town Hall 17 Bases
    {
        th: 17,
        picture: "townhall17-base1.png",
        title: "TH17 Pro Base",
        link: ""
    },
    {
        th: 17,
        picture: "townhall17-base2.png",
        title: "TH17 Legend Base",
        link: ""
    },
    {
        th: 17,
        picture: "townhall17-base3.png",
        title: "TH17 War Base",
        link: ""
    },
    {
        th: 17,
        picture: "townhall17-base4.png",
        title: "TH17 Trophy Base",
        link: ""
    },
    
    // Town Hall 18 Bases
    {
        th: 18,
        picture: "townhall18-base1.png",
        title: "TH18 Max Base",
        link: ""
    },
    {
        th: 18,
        picture: "townhall18-base2.png",
        title: "TH18 Ultimate War Base",
        link: ""
    },
    {
        th: 18,
        picture: "townhall18-base3.png",
        title: "TH18 Champion Base",
        link: ""
    },
    {
        th: 18,
        picture: "townhall18-base4.png",
        title: "TH18 Trophy Base",
        link: ""
    }
];

// ========================================
// AUTO-GENERATE IDs
// ========================================
// This function automatically adds IDs to all bases
// Just add new bases above and they'll get IDs automatically!
function generateBaseIds() {
    bases.forEach((base, index) => {
        base.id = index + 1; // Auto-increment ID starting from 1
    });
}

// Generate IDs when the script loads
generateBaseIds();

// ========================================
// HELPER FUNCTIONS
// ========================================

// Get a base by ID (now works with auto-generated IDs)
function getBaseById(id) {
    return bases.find(base => base.id === id);
}

// Get bases by Town Hall level
function getBasesByTH(th) {
    return bases.filter(base => base.th === th);
}

// Get all available Town Hall levels
function getAvailableTHLevels() {
    const levels = new Set(bases.map(base => base.th));
    return Array.from(levels).sort((a, b) => a - b);
}

// Get base count per Town Hall
function getBaseCountByTH() {
    const counts = {};
    bases.forEach(base => {
        counts[base.th] = (counts[base.th] || 0) + 1;
    });
    return counts;
}

// Search bases by title or TH
function searchBases(query) {
    const q = query.toLowerCase().trim();
    if (!q) return bases;
    return bases.filter(base => 
        base.title.toLowerCase().includes(q) ||
        base.th.toString().includes(q) ||
        base.picture.toLowerCase().includes(q)
    );
}

// Get total number of bases
function getTotalBases() {
    return bases.length;
}

// Get the most popular Town Hall (most bases)
function getMostPopularTH() {
    const counts = getBaseCountByTH();
    let maxCount = 0;
    let mostPopular = null;
    for (const [th, count] of Object.entries(counts)) {
        if (count > maxCount) {
            maxCount = count;
            mostPopular = parseInt(th);
        }
    }
    return mostPopular;
}

// ========================================
// EXPORT FOR USE IN HTML
// ========================================
// The 'bases' array is already available globally
// You can now easily add new bases without worrying about IDs!

console.log('🏰 Base Database Loaded!');
console.log(`📊 Total Bases: ${getTotalBases()}`);
console.log(`🏠 Available TH Levels: ${getAvailableTHLevels().join(', ')}`);
console.log(`⭐ Most Popular TH: ${getMostPopularTH()}`);
console.log('📝 Just add new bases to the array and IDs will auto-generate!');

// Example: How to add a new base
/*
// Just add this to the bases array above:
{
    th: 19,  // Your town hall level
    picture: "townhall19-base1.png",  // Your image filename
    title: "TH19 Ultimate Base",  // Your base name
    link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH19_BASE1"  // Your Clash link
}
// The ID will be automatically assigned!
*/