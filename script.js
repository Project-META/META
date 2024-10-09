// GitHub repository URL: https://github.com/xixu-me/MCG

// ########################################### This area can be flexibly customized ###########################################

const services = [
    // Routing rules are matched in order from top to bottom, with the rule at the top of the list taking precedence over the rules below it.
    {
        name: "bilibili",
        alias: "BiliBili",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/bilibili_2.png",
    },
    {
        name: "Binance",
        icon: "https://img.icons8.com/arcade/100/binance.png",
    },
    {
        name: "OpenAI",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/ChatGPT.png",
    },
    {
        name: "Microsoft",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Microsoft.png",
    },
    {
        name: "YouTube",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/YouTube.png",
    },
];

const locations = [
    {
        name: "Argentina",
        filter: "(?i)阿根廷|Argentina|ARG|AR|argentina|arg|ar|🇦🇷",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Argentina.png",
    },
    {
        name: "Finland",
        filter: "(?i)芬兰|Finland|FIN|FI|finland|fin|fi|🇫🇮",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Finland.png",
    },
    {
        name: "France",
        filter: "(?i)法国|France|FR|france|fr|🇫🇷",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/France.png",
    },
    {
        name: "Germany",
        filter: "(?i)德国|Germany|GER|DE|germany|ger|de|🇩🇪",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Germany.png",
    },
    {
        name: "Hong Kong, China",
        filter: "(?i)香港|Hong Kong|HK|hong kong|hk|🇭🇰",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Hong_Kong.png",
    },
    {
        name: "Iraq",
        filter: "(?i)伊拉克|Iraq|IRQ|IQ|iraq|iq|🇮🇶",
        icon: "https://img.icons8.com/fluency/96/iraq.png",
    },
    {
        name: "Japan",
        filter: "(?i)日本|Japan|japan|ja|🇯🇵",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Japan.png",
    },
    {
        name: "Korea",
        filter: "(?i)韩国|Korea|KR|korea|kr|🇰🇷",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Korea.png",
    },
    {
        name: "Russia",
        filter: "(?i)俄罗斯|Russia|RU|russia|ru|🇷🇺",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Russia.png",
    },
    {
        name: "Singapore",
        filter: "(?i)新加坡|Singapore|singapore|sg|🇸🇬",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Singapore.png",
    },
    {
        name: "Taiwan, China",
        filter: "(?i)台湾|Taiwan|TW|taiwan|tw|🇹🇼",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/China.png",
    },
    {
        name: "Thailand",
        filter: "(?i)泰国|Thailand|TH|thailand|th|🇹🇭",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Thailand.png",
    },
    {
        name: "Türkiye",
        filter: "(?i)土耳其|Türkiye|Turkey|TUR|TR|türkiye|turkey|tur|tr|🇹🇷",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Turkey.png",
    },
    {
        name: "United Kingdom",
        filter: "(?i)英国|United Kingdom|Great Britain|UK|GB|united kingdom|great britain|uk|gb|🇬🇧",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_Kingdom.png",
    },
    {
        name: "United States",
        filter: "(?i)美国|United States of America|United States|USA|US|united states of america|united states|usa|us|🇺🇸",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_States.png",
    },
    {
        name: "Cloudflare",
        filter: "(?i)Cloudflare|CF|cloudflare|cf",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Cloudflare.png",
    },
];

// ############################## Do Not Modify The Code Below Unless You Know What You Are Doing ##############################

function generateGeneralConfig(config) {
    config["global-client-fingerprint"] = "chrome";
}

const chineseNameservers = [
    "https://dns.alidns.com/dns-query",
    "https://doh.pub/dns-query",
];

const internationalNameservers = [
    "https://1.1.1.1/dns-query",
    "https://1.0.0.1/dns-query",
    "https://208.67.222.222/dns-query",
    "https://208.67.220.220/dns-query",
    "https://194.242.2.2/dns-query",
    "https://194.242.2.3/dns-query",
];

const dns = {
    enable: true,
    listen: "0.0.0.0:1053",
    ipv6: false,
    "use-system-hosts": false,
    "enhanced-mode": "fake-ip",
    "fake-ip-range": "198.18.0.1/16",
    "fake-ip-filter": [
        "*",
        "+.lan",
        "+.local",
        "time.*.com",
        "ntp.*.com",
        "+.msftconnecttest.com",
        "+.msftncsi.com",
        "localhost.ptlogin2.qq.com",
        "localhost.sec.qq.com",
        "localhost.work.weixin.qq.com",
    ],
    "default-nameserver": ["223.5.5.5", "119.29.29.29", "1.1.1.1", "8.8.8.8"],
    nameserver: [...chineseNameservers, ...internationalNameservers],
    "proxy-server-nameserver": [
        ...chineseNameservers,
        ...internationalNameservers,
    ],
    "nameserver-policy": {
        "geosite:private,cn,geolocation-cn": chineseNameservers,
        "geosite:google,youtube,telegram,gfw,geolocation-!cn":
            internationalNameservers,
    },
};

const ruleProviderCommon = {
    type: "http",
    interval: 86400,
    format: "yaml",
};

function serviceRuleProviders(services, ruleProviderCommon) {
    const ruleProviders = {};
    for (const { name, alias } of services) {
        const ruleName = alias ? alias : name;
        ruleProviders[name.toLowerCase()] = {
            ...ruleProviderCommon,
            behavior: "classical",
            url: `https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/${ruleName}/${ruleName}.yaml`,
            path: `./ruleset/blackmatrix7/${name.toLowerCase()}.yaml`,
        };
    }
    return ruleProviders;
}

const ruleProviders = {
    direct: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
        path: "./ruleset/loyalsoldier/direct.yaml",
    },
    proxy: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt",
        path: "./ruleset/loyalsoldier/proxy.yaml",
    },
    reject: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",
        path: "./ruleset/loyalsoldier/reject.yaml",
    },
    private: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",
        path: "./ruleset/loyalsoldier/private.yaml",
    },
    apple: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt",
        path: "./ruleset/loyalsoldier/apple.yaml",
    },
    icloud: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt",
        path: "./ruleset/loyalsoldier/icloud.yaml",
    },
    google: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt",
        path: "./ruleset/loyalsoldier/google.yaml",
    },
    gfw: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt",
        path: "./ruleset/loyalsoldier/gfw.yaml",
    },
    "tld-not-cn": {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt",
        path: "./ruleset/loyalsoldier/tld-not-cn.yaml",
    },
    telegramcidr: {
        ...ruleProviderCommon,
        behavior: "ipcidr",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt",
        path: "./ruleset/loyalsoldier/telegramcidr.yaml",
    },
    lancidr: {
        ...ruleProviderCommon,
        behavior: "ipcidr",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
        path: "./ruleset/loyalsoldier/lancidr.yaml",
    },
    cncidr: {
        ...ruleProviderCommon,
        behavior: "ipcidr",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
        path: "./ruleset/loyalsoldier/cncidr.yaml",
    },
    applications: {
        ...ruleProviderCommon,
        behavior: "classical",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt",
        path: "./ruleset/loyalsoldier/applications.yaml",
    },
    ...serviceRuleProviders(services, ruleProviderCommon),
};

function serviceRules(services) {
    const rules = [];
    for (const { name } of services)
        rules.push(`RULE-SET,${name.toLowerCase()},${name}`);
    return rules;
}

const rules = [
    ...serviceRules(services),
    "RULE-SET,applications,DIRECT",
    "RULE-SET,private,DIRECT",
    "RULE-SET,reject,Advertising",
    "RULE-SET,icloud,iCloud",
    "RULE-SET,apple,Apple",
    "RULE-SET,google,Google",
    "RULE-SET,proxy,PROXY",
    "RULE-SET,gfw,PROXY",
    "RULE-SET,tld-not-cn,PROXY",
    "RULE-SET,direct,DIRECT",
    "RULE-SET,lancidr,DIRECT,no-resolve",
    "RULE-SET,cncidr,DIRECT,no-resolve",
    "RULE-SET,telegramcidr,Telegram,no-resolve",
    "GEOIP,LAN,DIRECT,no-resolve",
    "GEOIP,CN,DIRECT,no-resolve",
    "MATCH,Others",
];

const proxyGroupCommon = {
    interval: 300,
    lazy: true,
    "max-failed-times": 5,
    hidden: false,
};

const locationProxyGroupCommon = {
    ...proxyGroupCommon,
    type: "url-test",
    tolerance: 50,
    proxies: ["REJECT"],
    "include-all": true,
};

const serviceProxyGroupProxies = [
    "PROXY",
    "AUTO",
    "FALLBACK",
    "LOAD BALANCING (Consistent hashing)",
    "LOAD BALANCING (Round robin)",
    "DIRECT",
    ...locations.map(({ name }) => name),
];

function serviceProxyGroups(
    services,
    proxyGroupCommon,
    serviceProxyGroupProxies
) {
    const proxyGroups = [];
    for (const { name, icon } of services)
        proxyGroups.push({
            ...proxyGroupCommon,
            name: name,
            type: "select",
            proxies: [...serviceProxyGroupProxies],
            icon: icon,
        });
    return proxyGroups;
}

function locationProxyGroups(locations, locationProxyGroupCommon) {
    const proxyGroups = [];
    for (const { name, filter, icon } of locations)
        proxyGroups.push({
            ...locationProxyGroupCommon,
            name: name,
            filter: filter,
            icon: icon,
        });
    return proxyGroups;
}

const proxyGroups = [
    {
        ...proxyGroupCommon,
        name: "PROXY",
        type: "select",
        proxies: [
            "AUTO",
            "FALLBACK",
            "LOAD BALANCING (Consistent hashing)",
            "LOAD BALANCING (Round robin)",
            ...locations.map(({ name }) => name),
        ],
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Proxy.png",
    },
    {
        ...proxyGroupCommon,
        name: "AUTO",
        type: "url-test",
        tolerance: 100,
        proxies: [...locations.map(({ name }) => name)],
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Auto.png",
    },
    {
        ...proxyGroupCommon,
        name: "FALLBACK",
        type: "fallback",
        proxies: [...locations.map(({ name }) => name)],
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Available.png",
    },
    {
        ...proxyGroupCommon,
        name: "LOAD BALANCING (Consistent hashing)",
        type: "load-balance",
        strategy: "consistent-hashing",
        proxies: [...locations.map(({ name }) => name)],
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Round_Robin_1.png",
    },
    {
        ...proxyGroupCommon,
        name: "LOAD BALANCING (Round robin)",
        type: "load-balance",
        strategy: "round-robin",
        proxies: [...locations.map(({ name }) => name)],
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Round_Robin.png",
    },
    ...serviceProxyGroups(services, proxyGroupCommon, serviceProxyGroupProxies),
    {
        ...proxyGroupCommon,
        name: "iCloud",
        type: "select",
        proxies: [...serviceProxyGroupProxies],
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/iCloud.png",
    },
    {
        ...proxyGroupCommon,
        name: "Telegram",
        type: "select",
        proxies: [...serviceProxyGroupProxies],
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Telegram_X.png",
    },
    {
        ...proxyGroupCommon,
        name: "Apple",
        type: "select",
        proxies: [...serviceProxyGroupProxies],
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Apple_1.png",
    },
    {
        ...proxyGroupCommon,
        name: "Google",
        type: "select",
        proxies: [...serviceProxyGroupProxies],
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Google_Search.png",
    },
    {
        ...proxyGroupCommon,
        name: "Others",
        type: "select",
        proxies: [...serviceProxyGroupProxies],
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Final.png",
    },
    {
        ...proxyGroupCommon,
        name: "Advertising",
        type: "select",
        proxies: ["REJECT", "DIRECT"],
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Advertising.png",
    },
    ...locationProxyGroups(locations, locationProxyGroupCommon),
];

function main(config) {
    const proxyCount = config?.proxies?.length ?? 0;
    const proxyProviderCount =
        typeof config?.["proxy-providers"] === "object"
            ? Object.keys(config["proxy-providers"]).length
            : 0;
    if (proxyCount === 0 && proxyProviderCount === 0)
        throw new Error("No proxy was found in the profile");
    generateGeneralConfig(config);
    config["dns"] = dns;
    config["proxy-groups"] = proxyGroups;
    config["rules"] = rules;
    config["rule-providers"] = ruleProviders;
    return config;
}
