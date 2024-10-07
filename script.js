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

const dnsConfig = {
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
    "DOMAIN,metacubex.github.io,DIRECT",
    "DOMAIN,yacd.metacubex.one,DIRECT",
    "RULE-SET,bilibili,bilibili",
    "RULE-SET,binance,Binance",
    "RULE-SET,openai,OpenAI",
    "RULE-SET,microsoft,Microsoft",
    "RULE-SET,youtube,YouTube",
    "RULE-SET,applications,DIRECT",
    "RULE-SET,private,DIRECT",
    "RULE-SET,reject,Reject",
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

const groupBaseOption = {
    url: "https://www.google.com/generate_204",
    interval: 300,
    lazy: true,
    timeout: 3000,
    "max-failed-times": 3,
    hidden: false,
};

function main(config) {
    const proxyCount = config?.proxies?.length ?? 0;
    const proxyProviderCount =
        typeof config?.["proxy-providers"] === "object"
            ? Object.keys(config["proxy-providers"]).length
            : 0;
    if (proxyCount === 0 && proxyProviderCount === 0)
        throw new Error("No proxy was found in the profile");
    config["unified-delay"] = true;
    config["tcp-concurrent"] = true;
    config["global-client-fingerprint"] = "chrome";
    config["geo-auto-update"] = true;
    config["geo-update-interval"] = 24;
    config["dns"] = dnsConfig;
    config["proxy-groups"] = [
        {
            ...groupBaseOption,
            name: "PROXY",
            type: "select",
            proxies: [
                "AUTO",
                "FALLBACK",
                "LOAD BALANCING (Consistent hashing)",
                "LOAD BALANCING (Round robin)",
            ],
            "include-all": true,
            icon: "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M18%2C1H6A5%2C5%2C0%2C0%2C0%2C1%2C6V18a5%2C5%2C0%2C0%2C0%2C5%2C5H18a5%2C5%2C0%2C0%2C0%2C5-5V6A5%2C5%2C0%2C0%2C0%2C18%2C1Zm3%2C17a3%2C3%2C0%2C0%2C1-3%2C3H6a3%2C3%2C0%2C0%2C1-3-3V6A3%2C3%2C0%2C0%2C1%2C6%2C3H18a3%2C3%2C0%2C0%2C1%2C3%2C3ZM18%2C7H12.82A3%2C3%2C0%2C0%2C0%2C7.18%2C7H6A1%2C1%2C0%2C0%2C0%2C6%2C9H7.18a3%2C3%2C0%2C0%2C0%2C5.64%2C0H18a1%2C1%2C0%2C0%2C0%2C0-2ZM10%2C9a1%2C1%2C0%2C1%2C1%2C1-1A1%2C1%2C0%2C0%2C1%2C10%2C9Zm8%2C6H16.82a3%2C3%2C0%2C0%2C0-5.64%2C0H6a1%2C1%2C0%2C0%2C0%2C0%2C2h5.18a3%2C3%2C0%2C0%2C0%2C5.64%2C0H18a1%2C1%2C0%2C0%2C0%2C0-2Zm-4%2C2a1%2C1%2C0%2C1%2C1%2C1-1A1%2C1%2C0%2C0%2C1%2C14%2C17Z%22%2F%3E%3C%2Fsvg%3E",
        },
        {
            ...groupBaseOption,
            name: "AUTO",
            type: "url-test",
            tolerance: 100,
            "include-all": true,
            icon: "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20data-name%3D%22Layer%201%22%20viewBox%3D%220%200%2064%2064%22%3E%3Cpath%20d%3D%22M32%208.1a27%2027%200%200%200-27%2027v.89c-.06%2010.72%207.64%2017.94%208%2018.24l.15.11.13.1.2.11.14.07.24.07h.12a2%202%200%200%200%20.75%200h.08a2%202%200%200%200%20.29-.09%202%202%200%200%200%20.3-.16%202%202%200%200%200%20.31-.26l8.49-8.48a2%202%200%200%200%20.26-.32%202%202%200%200%200%20.16-.31s0-.07%200-.1a2%202%200%200%200%20.08-.28s0-.1%200-.15a2%202%200%200%200%200-.25v-.13a2%202%200%200%200%200-.23v-.17a2%202%200%200%200-.08-.21l-.08-.16-.11-.19-.12-.2-.08-.1a11.06%2011.06%200%200%201-1.63-2.1%2016.07%2016.07%200%200%201-1.54-4.56A11.19%2011.19%200%200%201%2021%2035.1%2011%2011%200%200%201%2038.23%2026l-7.64%207.64a2%202%200%201%200%202.83%202.83l7.64-7.64a11%2011%200%200%201-1.81%2014.49%202%202%200%200%200%200%203l8.88%208.14a2%202%200%200%200%202.75%200A27%2027%200%200%200%2032%208.1Zm17.34%2042.1-5.91-5.41A14.92%2014.92%200%200%200%2043.91%2026l3.5-3.5a2%202%200%200%200-2.83-2.83l-3.5%203.5A15%2015%200%200%200%2017.06%2034H9a23%2023%200%200%201%2046%201.1%2022.79%2022.79%200%200%201-5.66%2015.1Z%22%2F%3E%3C%2Fsvg%3E",
        },
        {
            ...groupBaseOption,
            name: "FALLBACK",
            type: "fallback",
            "include-all": true,
            icon: "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M10.5%2C9.5h-1v-1a1%2C1%2C0%2C0%2C0-2%2C0v1h-1a1%2C1%2C0%2C0%2C0%2C0%2C2h1v1a1%2C1%2C0%2C0%2C0%2C2%2C0v-1h1a1%2C1%2C0%2C0%2C0%2C0-2Zm12.43%2C2.15-.06-.11a.61.61%2C0%2C0%2C0-.07-.14L20.4%2C8.2A3%2C3%2C0%2C0%2C0%2C18%2C7H16V6a3%2C3%2C0%2C0%2C0-3-3H4A3%2C3%2C0%2C0%2C0%2C1%2C6V17a1%2C1%2C0%2C0%2C0%2C1%2C1H3a3%2C3%2C0%2C0%2C0%2C6%2C0h6a3%2C3%2C0%2C0%2C0%2C6%2C0h1a1%2C1%2C0%2C0%2C0%2C1-1V12A1%2C1%2C0%2C0%2C0%2C22.93%2C11.65ZM6%2C19a1%2C1%2C0%2C1%2C1%2C1-1A1%2C1%2C0%2C0%2C1%2C6%2C19Zm8-3H8.22a3%2C3%2C0%2C0%2C0-4.44%2C0H3V6A1%2C1%2C0%2C0%2C1%2C4%2C5h9a1%2C1%2C0%2C0%2C1%2C1%2C1Zm2-7h2a1%2C1%2C0%2C0%2C1%2C.8.4L20%2C11H16Zm2%2C10a1%2C1%2C0%2C1%2C1%2C1-1A1%2C1%2C0%2C0%2C1%2C18%2C19Zm3-3h-.78A3%2C3%2C0%2C0%2C0%2C16%2C15.78V13h5Z%22%2F%3E%3C%2Fsvg%3E",
        },
        {
            ...groupBaseOption,
            name: "LOAD BALANCING (Consistent hashing)",
            type: "load-balance",
            strategy: "consistent-hashing",
            "include-all": true,
            icon: "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20enable-background%3D%22new%200%200%2050%2050%22%20viewBox%3D%220%200%2050%2050%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%221.5%22%20d%3D%22M19.8%2034.2c.5%200%20.8.4.8.8v9.8H3.4V35c0-.5.4-.8.8-.8H19.8zM21.1%2048H3c-.2%200-.3-.1-.4-.3L2%2045.4c-.1-.3.1-.6.4-.6h19.2c.3%200%20.5.3.4.6l-.5%202.4C21.5%2047.9%2021.3%2048%2021.1%2048zM45.8%2034.2c.5%200%20.8.4.8.8v9.8H29.3V35c0-.5.4-.8.8-.8H45.8zM47%2048H28.9c-.2%200-.3-.1-.4-.3L28%2045.4c-.1-.3.1-.6.4-.6h19.2c.3%200%20.5.3.4.6l-.5%202.4C47.4%2047.9%2047.2%2048%2047%2048zM48%204v7.9c0%201.1-.9%202-2%202H4c-1.1%200-2-.9-2-2V4c0-1.1.9-2%202-2h42C47.1%202%2048%202.9%2048%204z%22%2F%3E%3Cline%20x1%3D%226%22%20x2%3D%227.3%22%20y1%3D%226%22%20y2%3D%226%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%221.5%22%2F%3E%3Cline%20x1%3D%226%22%20x2%3D%227.3%22%20y1%3D%2210%22%20y2%3D%2210%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%221.5%22%2F%3E%3Cline%20x1%3D%2211%22%20x2%3D%2212.3%22%20y1%3D%226%22%20y2%3D%226%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%221.5%22%2F%3E%3Cline%20x1%3D%2211%22%20x2%3D%2212.3%22%20y1%3D%2210%22%20y2%3D%2210%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%221.5%22%2F%3E%3Cline%20x1%3D%2216%22%20x2%3D%2217.3%22%20y1%3D%226%22%20y2%3D%226%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%221.5%22%2F%3E%3Cline%20x1%3D%2216%22%20x2%3D%2217.3%22%20y1%3D%2210%22%20y2%3D%2210%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%221.5%22%2F%3E%3Cline%20x1%3D%2221%22%20x2%3D%2222.3%22%20y1%3D%226%22%20y2%3D%226%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%221.5%22%2F%3E%3Cline%20x1%3D%2221%22%20x2%3D%2222.3%22%20y1%3D%2210%22%20y2%3D%2210%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%221.5%22%2F%3E%3Cline%20x1%3D%2226%22%20x2%3D%2227.3%22%20y1%3D%226%22%20y2%3D%226%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%221.5%22%2F%3E%3Cline%20x1%3D%2226%22%20x2%3D%2227.3%22%20y1%3D%2210%22%20y2%3D%2210%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%221.5%22%2F%3E%3Ccircle%20cx%3D%2241.8%22%20cy%3D%228%22%20r%3D%222.2%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%221.5%22%2F%3E%3Ccircle%20cx%3D%2233.8%22%20cy%3D%228%22%20r%3D%222.2%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%221.5%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%221.5%22%20d%3D%22M27.9%2C25c0%2C1.6-1.3%2C2.9-2.9%2C2.9c-1.6%2C0-2.9-1.3-2.9-2.9c0-1.6%2C1.3-2.9%2C2.9-2.9C26.6%2C22.1%2C27.9%2C23.4%2C27.9%2C25z%22%2F%3E%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%221.5%22%20points%3D%2227.9%2025%2038%2025%2038%2034.2%22%2F%3E%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%221.5%22%20points%3D%2212%2034.2%2012%2025%2022.1%2025%22%2F%3E%3Cline%20x1%3D%2225%22%20x2%3D%2225%22%20y1%3D%2222.1%22%20y2%3D%2213.9%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%221.5%22%2F%3E%3C%2Fsvg%3E",
        },
        {
            ...groupBaseOption,
            name: "LOAD BALANCING (Round robin)",
            type: "load-balance",
            strategy: "round-robin",
            "include-all": true,
            icon: "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20data-name%3D%22Layer%201%22%20viewBox%3D%220%200%20128%20128%22%3E%3Cpath%20d%3D%22M70.78076%2042.96777a2%202%200%200%200-1.51514-2.38867A24.21189%2024.21189%200%200%200%2064.001%2040H63.9873a24.08977%2024.08977%200%200%200-5.394.61133%202.0002%202.0002%200%200%200%20.44727%203.94922%202.0455%202.0455%200%200%200%20.45117-.05078A20.00237%2020.00237%200%200%201%2063.98828%2044H64a20.11159%2020.11159%200%200%201%204.39258.4834A2.00605%202.00605%200%200%200%2070.78076%2042.96777zM66.96436%2085.89349a2.12006%202.12006%200%200%200%201.94794%201.54773%201.7486%201.7486%200%200%200%20.44659-.04181%2024.06611%2024.06611%200%200%200%209.61621-4.64258%202.00037%202.00037%200%200%200-2.498-3.125A20.03076%2020.03076%200%200%201%2068.46924%2083.499%202.00043%202.00043%200%200%200%2066.96436%2085.89349zM41.99707%2062.04395A2.0001%202.0001%200%200%200%2040.001%2064.04785a23.77209%2023.77209%200%200%200%202.39014%2010.40527A2%202%200%201%200%2045.99072%2072.709%2019.80923%2019.80923%200%200%201%2044.001%2064.04%202.00042%202.00042%200%200%200%2041.99707%2062.04395zM76.09131%2045.50879a2.00045%202.00045%200%200%200%20.32422%202.81055%2020.19232%2020.19232%200%200%201%205.57715%206.93549%202.05576%202.05576%200%200%200%202.67383.92194%201.99985%201.99985%200%200%200%20.92188-2.67383%2024.22213%2024.22213%200%200%200-6.6875-8.31836A2.00324%202.00324%200%200%200%2076.09131%2045.50879zM51.49072%2048.39355a1.99991%201.99991%200%200%200-2.50391-3.11914%2024.2186%2024.2186%200%200%200-6.63818%208.3584%202.00006%202.00006%200%201%200%203.60645%201.73047A20.187%2020.187%200%200%201%2051.49072%2048.39355zM85.62939%2074.41113A23.79514%2023.79514%200%200%200%2087.99951%2063.9668v-.05664A1.96183%201.96183%200%200%200%2086%2061.95508%202.03862%202.03862%200%200%200%2084%2064a19.8005%2019.8005%200%200%201-1.97314%208.67285%202.00078%202.00078%200%200%200%20.93213%202.6709A2.03224%202.03224%200%200%200%2085.62939%2074.41113zM49.06055%2082.78418a24.074%2024.074%200%200%200%209.626%204.625%202.00037%202.00037%200%200%200%20.88184-3.90234%2020.0447%2020.0447%200%200%201-8.0166-3.85156%201.99976%201.99976%200%201%200-2.49121%203.12891zM89.55322%205.30566A63.61751%2063.61751%200%200%200%2079.542%201.90039a1.99985%201.99985%200%201%200-.96777%203.88086%2059.68738%2059.68738%200%200%201%209.37939%203.19043%202.02886%202.02886%200%200%200%202.63281-1.0332A1.99965%201.99965%200%200%200%2089.55322%205.30566zM96.84131%20114.22266a59.97916%2059.97916%200%200%201-8.70166%204.72363%202.00109%202.00109%200%200%200-1.0249%202.63672A2.026%202.026%200%200%200%2089.751%20122.6084a64.08044%2064.08044%200%200%200%209.28271-5.04%202%202%200%200%200-2.19238-3.3457zM78.77539%20122.168a59.94528%2059.94528%200%200%201-9.76855%201.626%202.00015%202.00015%200%200%200-1.8291%202.15723%202.05245%202.05245%200%200%200%202.15723%201.8291%2063.95949%2063.95949%200%200%200%2010.42285-1.73535%201.99974%201.99974%200%201%200-.98242-3.877zM69.11377.2002A65.61741%2065.61741%200%200%200%2058.5542.22949a2.00011%202.00011%200%200%200%20.16553%203.99316c.05664%200%20.11328-.002.17041-.00684a61.15309%2061.15309%200%200%201%209.90918-.02734A2.00033%202.00033%200%200%200%2069.11377.2002zM104.51025%2019.73926a2.05738%202.05738%200%200%200%202.82568-.124%201.999%201.999%200%200%200-.12451-2.8252%2064.52542%2064.52542%200%200%200-8.35254-6.47266%202.00035%202.00035%200%200%200-2.18164%203.35352A60.522%2060.522%200%200%201%20104.51025%2019.73926zM125.999%2061.78516a2.0001%202.0001%200%200%200-2%202L124%2064a60.65036%2060.65036%200%200%201-.80811%209.874%202.03934%202.03934%200%200%200%201.97559%202.32623%202.00033%202.00033%200%200%200%201.9707-1.67383A64.735%2064.735%200%200%200%20128%2063.97266l-.001-.1875A2.0001%202.0001%200%200%200%20125.999%2061.78516zM117.5918%2095.25879a2.03836%202.03836%200%200%200%202.71143-.80566%2063.84418%2063.84418%200%200%200%204.249-9.68066%201.99966%201.99966%200%201%200-3.7832-1.29687%2059.91472%2059.91472%200%200%201-3.98242%209.07129A2.0006%202.0006%200%200%200%20117.5918%2095.25879zM104.53662%20110.95605a2.05192%202.05192%200%200%200%202.82617.11523%2064.471%2064.471%200%200%200%207.15527-7.77441%201.99955%201.99955%200%201%200-3.15527-2.457%2060.53%2060.53%200%200%201-6.71094%207.29A2.00031%202.00031%200%200%200%20104.53662%20110.95605zM38.95728%209.25446a1.89631%201.89631%200%200%200%20.80737-.15875%2059.828%2059.828%200%200%201%209.35889-3.23828%201.99964%201.99964%200%201%200-.98926-3.875A63.70405%2063.70405%200%200%200%2038.14746%205.4375%201.99967%201.99967%200%200%200%2037.127%208.0752%202.06055%202.06055%200%200%200%2038.95728%209.25446zM114.39063%2024.53906a2.00008%202.00008%200%201%200-3.14746%202.46875%2060.24993%2060.24993%200%200%201%205.44873%208.26953%202.02694%202.02694%200%200%200%202.71436.7959%202%202%200%200%200%20.79639-2.71387A64.32973%2064.32973%200%200%200%20114.39063%2024.53906zM3.48389%2084.87793A63.8157%2063.8157%200%200%200%207.74463%2094.542a2.06184%202.06184%200%200%200%202.71289.80078%202.00031%202.00031%200%200%200%20.80078-2.71289%2059.818%2059.818%200%200%201-3.99316-9.05664%202%202%200%200%200-3.78125%201.30469zM20.70654%20111.13477a2.04981%202.04981%200%200%200%202.82568-.11914%202%202%200%200%200-.11963-2.82617%2060.47959%2060.47959%200%200%201-6.72021-7.28027A2.00019%202.00019%200%200%200%2013.54%20103.37207%2064.4529%2064.4529%200%200%200%2020.70654%20111.13477zM38.34473%20122.65039a2.02283%202.02283%200%200%200%202.63477-1.0293%202.00027%202.00027%200%200%200-1.0293-2.63477%2060.10793%2060.10793%200%200%201-8.71533-4.71387%202%202%200%201%200-2.18652%203.34961A64.19815%2064.19815%200%200%200%2038.34473%20122.65039zM125.46289%2055.55859a1.99939%201.99939%200%200%200%201.63867-2.30469A63.78677%2063.78677%200%200%200%20124.48%2043.0166a2%202%200%201%200-3.7793%201.31055%2059.68417%2059.68417%200%200%201%202.45654%209.59277A2.04227%202.04227%200%200%200%20125.46289%2055.55859zM16.22021%2024.43652a1.9991%201.9991%200%200%200-2.80615.35352%2064.23751%2064.23751%200%200%200-5.77051%208.85352%202.00034%202.00034%200%200%200%203.52051%201.90039%2060.19619%2060.19619%200%200%201%205.40918-8.30078A2.0001%202.0001%200%200%200%2016.22021%2024.43652zM46.89795%20123.64551a1.99911%201.99911%200%200%200%201.45166%202.42676A63.986%2063.986%200%200%200%2058.77441%20127.79a1.99967%201.99967%200%201%200%20.32227-3.98633%2060.09287%2060.09287%200%200%201-9.77148-1.61035A2.00243%202.00243%200%200%200%2046.89795%20123.64551zM3.18262%2076.2793A2.00026%202.00026%200%200%200%204.8252%2073.97656%2060.59369%2060.59369%200%200%201%204%2064.10449a2%202%200%201%200-4%20.00586A64.66356%2064.66356%200%200%200%20.87988%2074.63672%202.04493%202.04493%200%200%200%203.18262%2076.2793zM28.87354%2010.49316a64.54434%2064.54434%200%200%200-8.31738%206.51074%202.00083%202.00083%200%200%200%202.71582%202.9375A60.50222%2060.50222%200%200%201%2031.07275%2013.835a2.00026%202.00026%200%200%200-2.19922-3.3418zM5.9502%2042.085A1.998%201.998%200%200%200%203.41162%2043.332%2063.75307%2063.75307%200%200%200%20.84424%2053.582a1.99993%201.99993%200%200%200%203.94727.64648A59.71287%2059.71287%200%200%201%207.19775%2044.623%201.99991%201.99991%200%200%200%205.9502%2042.085zM22.15967%2046.2168a2.00006%202.00006%200%201%200%203.68066%201.56641%2039.86875%2039.86875%200%200%201%208.93945-13.0127%2041.72445%2041.72445%200%200%201%2024.073-11.45166l-2.26685%202.26709a1.99927%201.99927%200%200%200%200%202.82813%202.02585%202.02585%200%200%200%202.82813%200c.295-.2951%205.76343-5.69745%206.12939-6.14575a2.01728%202.01728%200%200%200%20.43713-1.014%202.07624%202.07624%200%200%200-.56781-1.66962l-5.99872-5.99872a1.99979%201.99979%200%200%200-2.82812%202.82813l2.812%202.81219A45.83565%2045.83565%200%200%200%2031.99072%2031.90332%2043.85687%2043.85687%200%200%200%2022.15967%2046.2168zM13.58594%2066.58594a1.99979%201.99979%200%200%200%202.82813%202.82813l2.67377-2.67377A45.7783%2045.7783%200%200%200%2031.90332%2096.00879a43.83033%2043.83033%200%200%200%2014.31293%209.831%202.029%202.029%200%200%200%202.62408-1.05658%201.99975%201.99975%200%200%200-1.05664-2.623A39.88069%2039.88069%200%200%201%2034.77%2093.21973a41.196%2041.196%200%200%201-8.71191-13.40039A41.617%2041.617%200%200%201%2023.111%2066.93915l2.47491%202.47491a2.02516%202.02516%200%200%200%202.82813%200%201.99927%201.99927%200%200%200%200-2.82812l-6-6a1.99927%201.99927%200%200%200-2.82812%200zM68.41406%2099.58594a1.99927%201.99927%200%200%200-2.82812%200l-6%206a1.99927%201.99927%200%200%200%200%202.82813l6%206a2.04456%202.04456%200%200%200%202.82813%200%201.99927%201.99927%200%200%200%200-2.82812L65.78644%20108.958a45.684%2045.684%200%200%200%2015.5329-3.30859%2045.17308%2045.17308%200%200%200%2014.68994-9.55273%2043.85687%2043.85687%200%200%200%209.83105-14.31348%202.00006%202.00006%200%200%200-3.68066-1.56641%2039.86875%2039.86875%200%200%201-8.93945%2013.0127%2041.20284%2041.20284%200%200%201-13.40088%208.71191%2041.70464%2041.70464%200%200%201-13.947%203.01459l2.54169-2.54193A1.99927%201.99927%200%200%200%2068.41406%2099.58594zM80.15967%2023.2168a1.99975%201.99975%200%200%200%201.05664%202.623A39.88069%2039.88069%200%200%201%2094.23%2034.78027a41.196%2041.196%200%200%201%208.71191%2013.40039A41.6958%2041.6958%200%200%201%20105.95612%2062.128l-2.54205-2.54205a1.99979%201.99979%200%200%200-2.82812%202.82813l6%206a1.99927%201.99927%200%200%200%202.82813%200l6-6a1.99979%201.99979%200%200%200-2.82812-2.82812L109.958%2062.21387a45.688%2045.688%200%200%200-3.30811-15.5332%2045.16753%2045.16753%200%200%200-9.55322-14.68945%2043.83011%2043.83011%200%200%200-14.313-9.83105A1.9983%201.9983%200%200%200%2080.15967%2023.2168z%22%2F%3E%3C%2Fsvg%3E",
        },
        {
            ...groupBaseOption,
            name: "iCloud",
            type: "select",
            proxies: [
                "PROXY",
                "AUTO",
                "FALLBACK",
                "LOAD BALANCING (Consistent hashing)",
                "LOAD BALANCING (Round robin)",
                "DIRECT",
            ],
            "include-all": true,
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/icloud.svg",
        },
        {
            ...groupBaseOption,
            name: "OpenAI",
            type: "select",
            proxies: [
                "PROXY",
                "AUTO",
                "FALLBACK",
                "LOAD BALANCING (Consistent hashing)",
                "LOAD BALANCING (Round robin)",
            ],
            "include-all": true,
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/openai.svg",
        },
        {
            ...groupBaseOption,
            name: "Binance",
            type: "select",
            proxies: [
                "PROXY",
                "AUTO",
                "FALLBACK",
                "LOAD BALANCING (Consistent hashing)",
                "LOAD BALANCING (Round robin)",
                "DIRECT",
            ],
            "include-all": true,
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/binance.svg",
        },
        {
            ...groupBaseOption,
            name: "Telegram",
            type: "select",
            proxies: [
                "PROXY",
                "AUTO",
                "FALLBACK",
                "LOAD BALANCING (Consistent hashing)",
                "LOAD BALANCING (Round robin)",
            ],
            "include-all": true,
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/telegram.svg",
        },
        {
            ...groupBaseOption,
            name: "bilibili",
            type: "select",
            proxies: [
                "PROXY",
                "AUTO",
                "FALLBACK",
                "LOAD BALANCING (Consistent hashing)",
                "LOAD BALANCING (Round robin)",
                "DIRECT",
            ],
            "include-all": true,
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/bilibili.svg",
        },
        {
            ...groupBaseOption,
            name: "YouTube",
            type: "select",
            proxies: [
                "PROXY",
                "AUTO",
                "FALLBACK",
                "LOAD BALANCING (Consistent hashing)",
                "LOAD BALANCING (Round robin)",
            ],
            "include-all": true,
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/youtube.svg",
        },
        {
            ...groupBaseOption,
            name: "Apple",
            type: "select",
            proxies: [
                "PROXY",
                "AUTO",
                "FALLBACK",
                "LOAD BALANCING (Consistent hashing)",
                "LOAD BALANCING (Round robin)",
                "DIRECT",
            ],
            "include-all": true,
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/apple.svg",
        },
        {
            ...groupBaseOption,
            name: "Google",
            type: "select",
            proxies: [
                "PROXY",
                "AUTO",
                "FALLBACK",
                "LOAD BALANCING (Consistent hashing)",
                "LOAD BALANCING (Round robin)",
            ],
            "include-all": true,
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/google.svg",
        },
        {
            ...groupBaseOption,
            name: "Microsoft",
            type: "select",
            proxies: [
                "PROXY",
                "AUTO",
                "FALLBACK",
                "LOAD BALANCING (Consistent hashing)",
                "LOAD BALANCING (Round robin)",
                "DIRECT",
            ],
            "include-all": true,
            icon: "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M2%2022h9.5v-9.5H2V22zm0-10.5h9.5V2H2v9.5zM12.5%202v9.5H22V2h-9.5zm0%2020H22v-9.5h-9.5V22z%22%2F%3E%3C%2Fsvg%3E",
        },
        {
            ...groupBaseOption,
            name: "Others",
            type: "select",
            proxies: [
                "PROXY",
                "AUTO",
                "FALLBACK",
                "LOAD BALANCING (Consistent hashing)",
                "LOAD BALANCING (Round robin)",
                "DIRECT",
            ],
            "include-all": true,
            icon: "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20enable-background%3D%22new%200%200%2050%2050%22%20viewBox%3D%220%200%2050%2050%22%3E%3Cpath%20d%3D%22M48.75125%2C24.3071c-0.18-0.2-4.47-5.01-10.86-8.08c-1.62%2C2.61-2.5%2C5.63-2.5%2C8.74s0.88%2C6.13%2C2.5%2C8.75%0D%0A%09%09c6.39-3.07%2C10.68-7.88%2C10.86-8.08C49.08125%2C25.2571%2C49.08125%2C24.6871%2C48.75125%2C24.3071z%20M41.19125%2C25.9671h-0.11%0D%0A%09%09c-0.55%2C0-1-0.44-1-1c0-0.55%2C0.45-1%2C1-1h0.11c0.56%2C0%2C1%2C0.45%2C1%2C1C42.19125%2C25.5271%2C41.75125%2C25.9671%2C41.19125%2C25.9671z%22%2F%3E%3Cpath%20d%3D%22M33.38693%2C24.9709c0-3.3891%2C0.9231-6.6905%2C2.6417-9.5661c-2.1559-0.8651-4.2976-1.3969-6.4378-1.5925l1.24042-1.2752%0D%0A%09%09c0.77-0.79%2C0.83-2.03%2C0.12-2.82c-1.69072-1.9093-7.45192-1.9029-9.3-0.19c-0.85162%2C0.7894-0.91052%2C2.1279-0.08%2C3l1.63218%2C1.7334%0D%0A%09%09c-5.9053%2C1.3372-10.8655%2C4.9449-13.74218%2C7.4666l-6.75-6.75c-0.29-0.29-0.72-0.37-1.09-0.22c-0.37%2C0.16-0.62%2C0.52-0.62%2C0.93v18.74%0D%0A%09%09c0%2C0.4%2C0.24%2C0.77%2C0.61%2C0.92c0.37%2C0.16%2C0.8%2C0.08%2C1.09-0.2l6.93-6.79c2.86148%2C2.4709%2C7.748%2C5.9903%2C13.52868%2C7.3203l-1.57868%2C1.7797%0D%0A%09%09c-0.92%2C0.96-0.68%2C1.86-0.53%2C2.21c0.66%2C1.53%2C3.3%2C2.07%2C5.36%2C2.07c1.2%2C0%2C3.4-0.19%2C4.53-1.46c1.22-1.32%2C0.08-2.67-0.92-3.87%0D%0A%09%09c-0.07722-0.0919-0.16442-0.2012-0.24532-0.2986c2.0497-0.2131%2C4.1415-0.7431%2C6.2487-1.5789%0D%0A%09%09C34.30883%2C31.6557%2C33.38693%2C28.3572%2C33.38693%2C24.9709z%22%2F%3E%3C%2Fsvg%3E",
        },
        {
            ...groupBaseOption,
            name: "Reject",
            type: "select",
            proxies: ["REJECT", "DIRECT", "PROXY"],
            icon: "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20enable-background%3D%22new%200%200%2024%2024%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M12%2C2C6.5%2C2%2C2%2C6.5%2C2%2C12s4.5%2C10%2C10%2C10s10-4.5%2C10-10C22%2C6.5%2C17.5%2C2%2C12%2C2z%20M20%2C12c0%2C1.8-0.6%2C3.5-1.7%2C4.9L7.1%2C5.7%0A%09c3.5-2.7%2C8.5-2.1%2C11.2%2C1.4C19.4%2C8.5%2C20%2C10.2%2C20%2C12z%20M4%2C12c0-1.8%2C0.6-3.5%2C1.7-4.9l11.2%2C11.2c-3.5%2C2.7-8.5%2C2.1-11.2-1.4%0A%09C4.6%2C15.5%2C4%2C13.8%2C4%2C12z%22%2F%3E%3C%2Fsvg%3E",
        },
    ];
    config["rule-providers"] = ruleProviders;
    config["rules"] = rules;
    return config;
}
