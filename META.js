// from https://github.com/xixu-me/META

function extractFavicon(domain) {
    return `https://www.google.com/s2/favicons?sz=256&domain=${domain}`;
}

// ################################################### this section can be flexibly customized ###################################################

const BASE_ICON_SET_URL =
    "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/";

const LOCATION_ICON_SET_URL = "https://img.icons8.com/color/144/";

const services = [
    // Routing rules are matched in order from top to bottom, with the rule at the top of the list taking precedence over the rules below it.
    {
        name: "YouTube",
        icon: `${BASE_ICON_SET_URL}YouTube.png`,
    },
    {
        name: "bilibili",
        icon: `${BASE_ICON_SET_URL}bilibili_2.png`,
    },
    {
        name: "Telegram",
        icon: `${BASE_ICON_SET_URL}Telegram_X.png`,
    },
    {
        name: "X",
        icon: `${BASE_ICON_SET_URL}X.png`,
        alias: "Twitter",
    },
    {
        name: "OKX",
        icon: extractFavicon("www.okx.com"),
    },
    {
        name: "Binance",
        icon: extractFavicon("www.binance.com"),
    },
    {
        name: "Perplexity",
        icon: extractFavicon("www.perplexity.ai"),
    },
    {
        name: "OpenAI",
        icon: extractFavicon("openai.com"),
    },
    {
        name: "Gemini",
        icon: extractFavicon("gemini.google.com"),
        alias: "Google-Gemini",
    },
    {
        name: "Anthropic",
        icon: extractFavicon("www.anthropic.com"),
    },
    {
        name: "Apple",
        icon: `${BASE_ICON_SET_URL}Apple_1.png`,
    },
    {
        name: "Google",
        icon: `${BASE_ICON_SET_URL}Google_Search.png`,
    },
    {
        name: "Microsoft",
        icon: `${BASE_ICON_SET_URL}Microsoft.png`,
    },
    {
        name: "Cloudflare",
        icon: `${BASE_ICON_SET_URL}Cloudflare.png`,
    },
];

const locations = [
    {
        name: "Argentina 🇦🇷",
        icon: `${LOCATION_ICON_SET_URL}argentina`,
        filter: "(?i)\u963f\u6839\u5ef7|Argentina|ARG|AR|argentina|arg|ar|🇦🇷",
    },
    {
        name: "Canada 🇨🇦",
        icon: `${LOCATION_ICON_SET_URL}canada`,
        filter: "(?i)\u52a0\u62ff\u5927|Canada|CAN|CA|canada|ca|🇨🇦",
    },
    {
        name: "Finland 🇫🇮",
        icon: `${LOCATION_ICON_SET_URL}finland`,
        filter: "(?i)\u82ac\u5170|Finland|FIN|FI|finland|fin|fi|🇫🇮",
    },
    {
        name: "France 🇫🇷",
        icon: `${LOCATION_ICON_SET_URL}france`,
        filter: "(?i)\u6cd5\u56fd|France|FR|france|fr|🇫🇷",
    },
    {
        name: "Germany 🇩🇪",
        icon: `${LOCATION_ICON_SET_URL}germany`,
        filter: "(?i)\u5fb7\u56fd|Germany|GER|DE|germany|ger|de|🇩🇪",
    },
    {
        name: "Hong Kong, China 🇭🇰",
        icon: `${LOCATION_ICON_SET_URL}hongkong-circular`,
        filter: "(?i)\u9999\u6e2f|Hong Kong|HK|hong kong|hk|🇭🇰",
    },
    {
        name: "Iraq 🇮🇶",
        icon: `${LOCATION_ICON_SET_URL}iraq`,
        filter: "(?i)\u4f0a\u62c9\u514b|Iraq|IRQ|IQ|iraq|iq|🇮🇶",
    },
    {
        name: "Japan 🇯🇵",
        icon: `${LOCATION_ICON_SET_URL}japan`,
        filter: "(?i)\u65e5\u672c|Japan|japan|ja|🇯🇵",
    },
    {
        name: "Korea 🇰🇷",
        icon: `${LOCATION_ICON_SET_URL}south-korea`,
        filter: "(?i)\u97e9\u56fd|Korea|KR|korea|kr|🇰🇷",
    },
    {
        name: "Russia 🇷🇺",
        icon: `${LOCATION_ICON_SET_URL}russian-federation`,
        filter: "(?i)\u4fc4\u7f57\u65af|Russia Federation|Russia|RU|russia federation|russia|ru|🇷🇺",
    },
    {
        name: "Singapore 🇸🇬",
        icon: `${LOCATION_ICON_SET_URL}singapore`,
        filter: "(?i)\u65b0\u52a0\u5761|Singapore|singapore|sg|🇸🇬",
    },
    {
        name: "Taiwan, China 🇨🇳",
        icon: `${LOCATION_ICON_SET_URL}china-circular`,
        filter: "(?i)\u53f0\u6e7e|Taiwan|TW|taiwan|tw|\uD83C\uDDF9\uD83C\uDDFC",
    },
    {
        name: "Thailand 🇹🇭",
        icon: `${LOCATION_ICON_SET_URL}thailand`,
        filter: "(?i)\u6cf0\u56fd|Thailand|TH|thailand|th|🇹🇭",
    },
    {
        name: "Türkiye 🇹🇷",
        icon: `${LOCATION_ICON_SET_URL}turkey`,
        filter: "(?i)\u571f\u8033\u5176|Türkiye|Turkey|TUR|TR|türkiye|turkey|tur|tr|🇹🇷",
    },
    {
        name: "Ukraine 🇺🇦",
        icon: `${LOCATION_ICON_SET_URL}ukraine`,
        filter: "(?i)\u4e4c\u514b\u5170|Ukraine|UKR|UA|ukraine|ukr|ua|🇺🇦",
    },
    {
        name: "United Kingdom 🇬🇧",
        icon: `${LOCATION_ICON_SET_URL}great-britain`,
        filter: "(?i)\u82f1\u56fd|United Kingdom|Great Britain|UK|GB|united kingdom|great britain|uk|gb|🇬🇧",
    },
    {
        name: "United States 🇺🇸",
        icon: `${LOCATION_ICON_SET_URL}usa`,
        filter: "(?i)\u7f8e\u56fd|United States of America|United States|USA|US|united states of america|united states|usa|us|🇺🇸",
    },
    {
        name: "Global 🌐",
        icon: "https://img.icons8.com/?size=144&id=3685&format=png&color=7bbbe9",
        filter: "(?i)Global|GL|global|gl|Cloudflare|CF|cloudflare|cf|🌐",
    },
];

// ####################################### DO NOT MODIFY THE CODE BELOW UNLESS YOU KNOW WHAT YOU ARE DOING #######################################

// General Configuration

const generalConfig = {
    "allow-lan": false,
    mode: "rule",
    "log-level": "info",
    ipv6: true,
    "find-process-mode": "strict",
    "external-controller": "",
    profile: {
        "store-selected": true,
        "store-fake-ip": true,
    },
    "unified-delay": true,
    "tcp-concurrent": true,
    "global-client-fingerprint": "chrome",
    "global-ua": "\u0063\u006c\u0061\u0073\u0068.\u006D\u0065\u0074\u0061",
    "etag-support": true,
};

// DNS

const chineseNameservers = [
    "https://doh.pub/dns-query",
    "https://dns.alidns.com/dns-query",
];

const internationalNameservers = [
    "quic://unfiltered.adguard-dns.com:784",
    "https://dns.google/dns-query",
    "https://doh.dns.sb/dns-query",
    "https://dns.quad9.net/dns-query",
    "https://doh.opendns.com/dns-query",
    "https://dns.mullvad.net/dns-query",
    "https://doh.umbrella.com/dns-query",
    "https://wikimedia-dns.org/dns-query",
    "https://doh.dns.apple.com/dns-query",
    "https://cloudflare-dns.com/dns-query",
    "https://common.dot.dns.yandex.net/dns-query",
    "https://unfiltered.adguard-dns.com/dns-query",
];

const adguardDefaultNameservers = [
    "quic://dns.adguard-dns.com:784",
    "https://dns.adguard-dns.com/dns-query",
];

const adguardFamilyNameservers = [
    "quic://family.adguard-dns.com:784",
    "https://family.adguard-dns.com/dns-query",
];

const dns = {
    enable: true,
    "prefer-h3": true,
    "use-hosts": true,
    "use-system-hosts": false,
    "respect-rules": false,
    listen: "0.0.0.0:1053",
    ipv6: true,
    "enhanced-mode": "fake-ip",
    "fake-ip-range": "198.18.0.1/16",
    "fake-ip-filter-mode": "blacklist",
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
    "default-nameserver": [
        "119.29.29.29",
        "223.5.5.5",
        "223.6.6.6",
        "8.8.8.8",
        "8.8.4.4",
        "1.1.1.1",
        "1.0.0.1",
        "9.9.9.9",
        "149.112.112.112",
        "208.67.222.222",
        "208.67.220.220",
    ],
    "nameserver-policy": {
        "rule-set:private,direct,geolocation-cn": chineseNameservers,
        "rule-set:proxy": internationalNameservers,
    },
    nameserver: [
        ...chineseNameservers,
        ...internationalNameservers,
        // ...adguardDefaultNameservers,
        // ...adguardFamilyNameservers,
    ],
};

// Hosts

const hosts = {};

// Domain Sniffing

const sniffer = {
    enable: false,
};

// TUN

const tun = {
    enable: true,
    stack: "mixed",
    "auto-route": true,
    "auto-redirect": true,
    "auto-detect-interface": true,
    "strict-route": true,
    "dns-hijack": ["any:53", "tcp://any:53"],
};

// Proxy Groups

const proxyGroupDefaults = {
    url: "https://www.gstatic.com/generate_204",
    interval: 300,
    lazy: true,
    timeout: 5000,
    "max-failed-times": 5,
};

const serviceProxyGroupProxies = [
    "PROXY",
    "AUTO",
    "STATIC",
    "DIRECT",
    "Mainland China 🇨🇳",
    ...locations.map(({ name }) => name),
];

const locationPolicyProxyGroupDefaults = {
    ...proxyGroupDefaults,
    proxies: ["REJECT"],
    "include-all": true,
};

function generateServiceProxyGroups(items, defaultConfig) {
    return items.map(({ name, icon }) => ({
        ...defaultConfig,
        name,
        icon,
        type: "select",
        proxies: serviceProxyGroupProxies,
    }));
}

function generateLocationPolicyProxyGroups(
    items,
    defaultConfig,
    type,
    extraProps = {}
) {
    const getStrategyName = (type, strategy) => {
        switch (type) {
            case "url-test":
                return "AUTO";
            case "fallback":
                return "FALLBACK";
            case "load-balance":
                switch (strategy) {
                    case "consistent-hashing":
                        return "LOAD BALANCING (consistent hashing)";
                    case "round-robin":
                        return "LOAD BALANCING (round-robin)";
                    case "sticky-sessions":
                        return "LOAD BALANCING (sticky sessions)";
                    default:
                        return "LOAD BALANCING";
                }
            default:
                return type.toUpperCase();
        }
    };
    return items.map(({ name, icon, filter }) => {
        const strategyName = getStrategyName(type, extraProps.strategy);
        const emoji = name.split(" ").pop();
        const newName = `${strategyName} ${emoji}`;
        return {
            ...defaultConfig,
            name: newName,
            type,
            icon,
            filter,
            hidden: true,
            ...extraProps,
        };
    });
}

function generateLocationSelectProxyGroups() {
    return locations.map(({ name, icon }) => ({
        ...proxyGroupDefaults,
        name,
        type: "select",
        icon,
        proxies: [
            `AUTO ${name.split(" ").pop()}`,
            `FALLBACK ${name.split(" ").pop()}`,
            `LOAD BALANCING (consistent hashing) ${name.split(" ").pop()}`,
            `LOAD BALANCING (round-robin) ${name.split(" ").pop()}`,
            `LOAD BALANCING (sticky sessions) ${name.split(" ").pop()}`,
        ],
    }));
}

const proxyGroups = [
    {
        ...proxyGroupDefaults,
        name: "PROXY",
        type: "select",
        proxies: [
            "AUTO",
            "STATIC",
            "Mainland China 🇨🇳",
            ...locations.map(({ name }) => name),
        ],
        icon: `${BASE_ICON_SET_URL}Proxy.png`,
    },
    {
        ...proxyGroupDefaults,
        name: "AUTO",
        type: "url-test",
        tolerance: 50,
        "include-all": true,
        icon: `${BASE_ICON_SET_URL}Auto.png`,
        hidden: true,
    },
    {
        ...proxyGroupDefaults,
        name: "STATIC",
        type: "select",
        "include-all": true,
        icon: `${BASE_ICON_SET_URL}Static.png`,
    },
    {
        ...proxyGroupDefaults,
        name: "VS Code",
        type: "select",
        proxies: [...serviceProxyGroupProxies],
        icon: extractFavicon("code.visualstudio.com"),
    },
    ...generateServiceProxyGroups(services, proxyGroupDefaults),
    {
        ...proxyGroupDefaults,
        name: "Others",
        type: "select",
        proxies: [...serviceProxyGroupProxies],
        icon: `${BASE_ICON_SET_URL}Final.png`,
    },
    {
        ...proxyGroupDefaults,
        name: "Advertising",
        type: "select",
        proxies: ["REJECT", "DIRECT", "STATIC"],
        icon: `${BASE_ICON_SET_URL}Advertising.png`,
    },
    {
        ...locationPolicyProxyGroupDefaults,
        name: "Mainland China 🇨🇳",
        type: "select",
        icon: `${LOCATION_ICON_SET_URL}china`,
        proxies: ["DIRECT"],
        "include-all": true,
        filter: "(?i)\u5927\u9646|\u4e2d\u56fd|\u7535\u4fe1|\u79fb\u52a8|\u8054\u901a|Mainland|China|CN|mainland|china|cn|🇨🇳",
    },
    ...generateLocationPolicyProxyGroups(
        locations,
        locationPolicyProxyGroupDefaults,
        "url-test",
        {
            tolerance: 50,
        }
    ),
    ...generateLocationPolicyProxyGroups(
        locations,
        locationPolicyProxyGroupDefaults,
        "fallback"
    ),
    ...generateLocationPolicyProxyGroups(
        locations,
        locationPolicyProxyGroupDefaults,
        "load-balance",
        {
            strategy: "round-robin",
        }
    ),
    ...generateLocationPolicyProxyGroups(
        locations,
        locationPolicyProxyGroupDefaults,
        "load-balance",
        {
            strategy: "consistent-hashing",
        }
    ),
    ...generateLocationPolicyProxyGroups(
        locations,
        locationPolicyProxyGroupDefaults,
        "load-balance",
        {
            strategy: "sticky-sessions",
        }
    ),
    ...generateLocationSelectProxyGroups(),
];

// Routing Rules

function generateServiceRules(services) {
    return services.map(({ name }) => `RULE-SET,${name.toLowerCase()},${name}`);
}

const rules = [
    "PROCESS-NAME,Code.exe,VS Code",
    "RULE-SET,applications,DIRECT",
    "RULE-SET,lancidr,DIRECT,no-resolve",
    "RULE-SET,private,DIRECT",
    "RULE-SET,reject,Advertising",
    "RULE-SET,win-spy,Advertising",
    ...generateServiceRules(services),
    "RULE-SET,direct,Mainland China 🇨🇳",
    "RULE-SET,proxy,PROXY",
    "RULE-SET,telegramcidr,Telegram",
    "RULE-SET,xcidr,X",
    "RULE-SET,googlecidr,Google",
    "RULE-SET,cloudflarecidr,Cloudflare",
    "RULE-SET,cncidr,Mainland China 🇨🇳",
    "MATCH,Others",
];

// Rule Providers

const ruleProviderDefaults = {
    type: "http",
    interval: 14400,
};

function generateServiceRuleProviders(services, defaultConfig) {
    return services.reduce((acc, { name, alias }) => {
        const ruleName = alias || name;
        acc[name.toLowerCase()] = {
            ...defaultConfig,
            format: "mrs",
            behavior: "domain",
            url: `https://cdn.jsdelivr.net/gh/xixu-me/rulesets-for-META@universal/${ruleName.toLowerCase()}.mrs`,
            path: `./rulesets/${name.toLowerCase()}.mrs`,
        };
        return acc;
    }, {});
}

const ruleProviders = {
    applications: {
        ...ruleProviderDefaults,
        format: "yaml",
        behavior: "classical",
        url: "https://cdn.jsdelivr.net/gh/xixu-me/rulesets-for-META@basic/applications.yaml",
        path: "./rulesets/applications.yaml",
    },
    lancidr: {
        ...ruleProviderDefaults,
        format: "mrs",
        behavior: "ipcidr",
        url: "https://cdn.jsdelivr.net/gh/xixu-me/rulesets-for-META@basic/lancidr.mrs",
        path: "./rulesets/lancidr.mrs",
    },
    cncidr: {
        ...ruleProviderDefaults,
        format: "mrs",
        behavior: "ipcidr",
        url: "https://cdn.jsdelivr.net/gh/xixu-me/rulesets-for-META@basic/cncidr.mrs",
        path: "./rulesets/cncidr.mrs",
    },
    cloudflarecidr: {
        ...ruleProviderDefaults,
        format: "mrs",
        behavior: "ipcidr",
        url: "https://cdn.jsdelivr.net/gh/xixu-me/rulesets-for-META@basic/cloudflarecidr.mrs",
        path: "./rulesets/cloudflarecidr.mrs",
    },
    googlecidr: {
        ...ruleProviderDefaults,
        format: "mrs",
        behavior: "ipcidr",
        url: "https://cdn.jsdelivr.net/gh/xixu-me/rulesets-for-META@basic/googlecidr.mrs",
        path: "./rulesets/googlecidr.mrs",
    },
    telegramcidr: {
        ...ruleProviderDefaults,
        format: "mrs",
        behavior: "ipcidr",
        url: "https://cdn.jsdelivr.net/gh/xixu-me/rulesets-for-META@basic/telegramcidr.mrs",
        path: "./rulesets/telegramcidr.mrs",
    },
    xcidr: {
        ...ruleProviderDefaults,
        format: "mrs",
        behavior: "ipcidr",
        url: "https://cdn.jsdelivr.net/gh/xixu-me/rulesets-for-META@basic/xcidr.mrs",
        path: "./rulesets/xcidr.mrs",
    },
    private: {
        ...ruleProviderDefaults,
        format: "mrs",
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/xixu-me/rulesets-for-META@basic/private.mrs",
        path: "./rulesets/private.mrs",
    },
    direct: {
        ...ruleProviderDefaults,
        format: "mrs",
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/xixu-me/rulesets-for-META@basic/direct.mrs",
        path: "./rulesets/direct.mrs",
    },
    proxy: {
        ...ruleProviderDefaults,
        format: "mrs",
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/xixu-me/rulesets-for-META@basic/proxy.mrs",
        path: "./rulesets/proxy.mrs",
    },
    "geolocation-cn": {
        ...ruleProviderDefaults,
        format: "mrs",
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/xixu-me/rulesets-for-META@universal/geolocation-cn.mrs",
        path: "./rulesets/geolocation-cn.mrs",
    },
    reject: {
        ...ruleProviderDefaults,
        format: "mrs",
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/xixu-me/rulesets-for-META@basic/reject.mrs",
        path: "./rulesets/reject.mrs",
    },
    "win-spy": {
        ...ruleProviderDefaults,
        format: "mrs",
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/xixu-me/rulesets-for-META@universal/win-spy.mrs",
        path: "./rulesets/win-spy.mrs",
    },
    ...generateServiceRuleProviders(services, ruleProviderDefaults),
};

// generate configuration using the above settings

function validateOriginalConfig(config) {
    if (!config)
        throw new Error("Configuration object cannot be null or undefined");
    const proxyCount = Array.isArray(config.proxies)
        ? config.proxies.length
        : 0;
    const proxyProviderCount = Object.keys(
        config["proxy-providers"] || {}
    ).length;
    if (proxyCount === 0 && proxyProviderCount === 0)
        throw new Error(
            "The original configuration must contain a non-empty proxies array (see https://wiki.\u006D\u0065\u0074\u0061\u0063\u0075\u0062\u0065\u0078.one/en/config/proxies/) or a proxy-providers object with at least one property (see https://wiki.\u006D\u0065\u0074\u0061\u0063\u0075\u0062\u0065\u0078.one/en/config/proxy-providers/)"
        );
    if (proxyCount > 0) {
        config.proxies.forEach((proxy, index) => {
            if (!proxy.name || !proxy.type || !proxy.server || !proxy.port) {
                throw new Error(
                    `Invalid proxy number ${
                        index + 1
                    } configuration (see https://wiki.\u006D\u0065\u0074\u0061\u0063\u0075\u0062\u0065\u0078.one/en/config/proxies/)`
                );
            }
        });
        console.log(
            `The original configuration contains ${proxyCount} proxies, which will be preserved`
        );
    }
    if (proxyProviderCount > 0) {
        Object.entries(config["proxy-providers"]).forEach(
            ([name, provider], index) => {
                if (
                    !provider.type ||
                    (provider.type === "http" && !provider.url)
                ) {
                    throw new Error(
                        `Invalid proxy provider number ${
                            index + 1
                        } configuration (see https://wiki.\u006D\u0065\u0074\u0061\u0063\u0075\u0062\u0065\u0078.one/en/config/proxy-providers/)`
                    );
                }
            }
        );
        console.log(
            `The original configuration contains ${proxyProviderCount} proxy providers, which will be preserved`
        );
    }
    return true;
}

function main(config) {
    try {
        validateOriginalConfig(config);
        Object.assign(config, generalConfig, {
            dns,
            hosts,
            sniffer,
            tun,
            "proxy-groups": proxyGroups,
            rules,
            "rule-providers": ruleProviders,
        });
        console.log("The generated configuration is as follows");
        console.log(config);
        return config;
    } catch (error) {
        console.error(
            `An error occurred during configuration generation: ${error.message}`
        );
        return { error: error.message, originalConfig: config };
    }
}
