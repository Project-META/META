// GitHub repository URL: https://github.com/xixu-me/MCG

function genGeneralConfig(config) {
    config["global-client-fingerprint"] = "chrome";
}

const domesticNameservers = [
    "https://dns.alidns.com/dns-query",
    "https://doh.pub/dns-query",
];

const foreignNameservers = [
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
    nameserver: [...domesticNameservers, ...foreignNameservers],
    "proxy-server-nameserver": [...domesticNameservers, ...foreignNameservers],
    "nameserver-policy": {
        "geosite:private,cn,geolocation-cn": domesticNameservers,
        "geosite:google,youtube,telegram,gfw,geolocation-!cn":
            foreignNameservers,
    },
};

const ruleProviderCommon = {
    type: "http",
    interval: 86400,
    format: "yaml",
};

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
    bilibili: {
        ...ruleProviderCommon,
        behavior: "classical",
        url: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/BiliBili/BiliBili.yaml",
        path: "./ruleset/blackmatrix7/bilibili.yaml",
    },
    binance: {
        ...ruleProviderCommon,
        behavior: "classical",
        url: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Binance/Binance.yaml",
        path: "./ruleset/blackmatrix7/binance.yaml",
    },
    microsoft: {
        ...ruleProviderCommon,
        behavior: "classical",
        url: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Microsoft/Microsoft.yaml",
        path: "./ruleset/blackmatrix7/microsoft.yaml",
    },
    openai: {
        ...ruleProviderCommon,
        behavior: "classical",
        url: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/OpenAI/OpenAI.yaml",
        path: "./ruleset/blackmatrix7/openai.yaml",
    },
    youtube: {
        ...ruleProviderCommon,
        behavior: "classical",
        url: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/YouTube/YouTube.yaml",
        path: "./ruleset/blackmatrix7/youtube.yaml",
    },
};

const rules = [
    "RULE-SET,bilibili,bilibili",
    "RULE-SET,binance,Binance",
    "RULE-SET,openai,OpenAI",
    "RULE-SET,microsoft,Microsoft",
    "RULE-SET,youtube,YouTube",
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

const locations = [
    "Argentina",
    "Finland",
    "France",
    "Germany",
    "Hong Kong, China",
    "Iraq",
    "Japan",
    "Korea",
    "Russia",
    "Singapore",
    "Taiwan, China",
    "Thailand",
    "Türkiye",
    "United Kingdom",
    "United States",
    "Cloudflare",
];

const platformProxyGroupProxies = [
    "PROXY",
    "AUTO",
    "FALLBACK",
    "LOAD BALANCING (Consistent hashing)",
    "LOAD BALANCING (Round robin)",
    "DIRECT",
    ...locations,
];

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
            ...locations,
        ],
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Proxy.png",
    },
    {
        ...proxyGroupCommon,
        name: "AUTO",
        type: "url-test",
        tolerance: 100,
        proxies: [...locations],
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Auto.png",
    },
    {
        ...proxyGroupCommon,
        name: "FALLBACK",
        type: "fallback",
        proxies: [...locations],
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Available.png",
    },
    {
        ...proxyGroupCommon,
        name: "LOAD BALANCING (Consistent hashing)",
        type: "load-balance",
        strategy: "consistent-hashing",
        proxies: [...locations],
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Round_Robin_1.png",
    },
    {
        ...proxyGroupCommon,
        name: "LOAD BALANCING (Round robin)",
        type: "load-balance",
        strategy: "round-robin",
        proxies: [...locations],
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Round_Robin.png",
    },
    {
        ...proxyGroupCommon,
        name: "iCloud",
        type: "select",
        proxies: [...platformProxyGroupProxies],
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/iCloud.png",
    },
    {
        ...proxyGroupCommon,
        name: "OpenAI",
        type: "select",
        proxies: [...platformProxyGroupProxies],
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/ChatGPT.png",
    },
    {
        ...proxyGroupCommon,
        name: "Binance",
        type: "select",
        proxies: [...platformProxyGroupProxies],
        icon: "https://img.icons8.com/arcade/100/binance.png",
    },
    {
        ...proxyGroupCommon,
        name: "Telegram",
        type: "select",
        proxies: [...platformProxyGroupProxies],
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Telegram_X.png",
    },
    {
        ...proxyGroupCommon,
        name: "bilibili",
        type: "select",
        proxies: [...platformProxyGroupProxies],
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/bilibili_2.png",
    },
    {
        ...proxyGroupCommon,
        name: "YouTube",
        type: "select",
        proxies: [...platformProxyGroupProxies],
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/YouTube.png",
    },
    {
        ...proxyGroupCommon,
        name: "Apple",
        type: "select",
        proxies: [...platformProxyGroupProxies],
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Apple_1.png",
    },
    {
        ...proxyGroupCommon,
        name: "Google",
        type: "select",
        proxies: [...platformProxyGroupProxies],
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Google_Search.png",
    },
    {
        ...proxyGroupCommon,
        name: "Microsoft",
        type: "select",
        proxies: [...platformProxyGroupProxies],
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Microsoft.png",
    },
    {
        ...proxyGroupCommon,
        name: "Others",
        type: "select",
        proxies: [...platformProxyGroupProxies],
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Final.png",
    },
    {
        ...proxyGroupCommon,
        name: "Advertising",
        type: "select",
        proxies: ["REJECT", "DIRECT"],
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Advertising.png",
    },
    {
        ...locationProxyGroupCommon,
        name: "Argentina",
        filter: "(?i)阿根廷|Argentina|ARG|AR|🇦🇷",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Argentina.png",
    },
    {
        ...locationProxyGroupCommon,
        name: "Finland",
        filter: "(?i)芬兰|Finland|FIN|FI|🇫🇮",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Finland.png",
    },
    {
        ...locationProxyGroupCommon,
        name: "France",
        filter: "(?i)法国|France|FR|🇫🇷",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/France.png",
    },
    {
        ...locationProxyGroupCommon,
        name: "Germany",
        filter: "(?i)德国|Germany|GER|DE|🇩🇪",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Germany.png",
    },
    {
        ...locationProxyGroupCommon,
        name: "Hong Kong, China",
        filter: "(?i)香港|Hong Kong|HK|🇭🇰",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Hong_Kong.png",
    },
    {
        ...locationProxyGroupCommon,
        name: "Iraq",
        filter: "(?i)伊拉克|Iraq|IRQ|IQ|🇮🇶",
        icon: "https://img.icons8.com/fluency/96/iraq.png",
    },
    {
        ...locationProxyGroupCommon,
        name: "Japan",
        filter: "(?i)日本|Japan|🇯🇵",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Japan.png",
    },
    {
        ...locationProxyGroupCommon,
        name: "Korea",
        filter: "(?i)韩国|Korea|South Korea|KR|🇰🇷",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Korea.png",
    },
    {
        ...locationProxyGroupCommon,
        name: "Russia",
        filter: "(?i)俄罗斯|Russia|RU|🇷🇺",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Russia.png",
    },
    {
        ...locationProxyGroupCommon,
        name: "Singapore",
        filter: "(?i)新加坡|Singapore|🇸🇬",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Singapore.png",
    },
    {
        ...locationProxyGroupCommon,
        name: "Taiwan, China",
        filter: "(?i)台湾|Taiwan|TW|🇹🇼",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/China.png",
    },
    {
        ...locationProxyGroupCommon,
        name: "Thailand",
        filter: "(?i)泰国|Thailand|TH|🇹🇭",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Thailand.png",
    },
    {
        ...locationProxyGroupCommon,
        name: "Türkiye",
        filter: "(?i)土耳其|Türkiye|Turkey|TUR|TR|🇹🇷",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Turkey.png",
    },
    {
        ...locationProxyGroupCommon,
        name: "United Kingdom",
        filter: "(?i)英国|United Kingdom|Great Britain|UK|GB|🇬🇧",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_Kingdom.png",
    },
    {
        ...locationProxyGroupCommon,
        name: "United States",
        filter: "(?i)美国|United States of America|United States|USA|US|🇺🇸",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_States.png",
    },
    {
        ...locationProxyGroupCommon,
        name: "Cloudflare",
        filter: "(?i)Cloudflare|CF",
        icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Cloudflare.png",
    },
];

function main(config) {
    const proxyCount = config?.proxies?.length ?? 0;
    const proxyProviderCount =
        typeof config?.["proxy-providers"] === "object"
            ? Object.keys(config["proxy-providers"]).length
            : 0;
    if (proxyCount === 0 && proxyProviderCount === 0)
        throw new Error("No proxy was found in the profile");
    genGeneralConfig(config);
    config["dns"] = dns;
    config["proxy-groups"] = proxyGroups;
    config["rules"] = rules;
    config["rule-providers"] = ruleProviders;
    return config;
}
