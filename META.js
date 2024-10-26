// Project META: https://github.com/Project-META

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
        name: "X",
        icon: `${BASE_ICON_SET_URL}X.png`,
        alias: "Twitter",
    },
    {
        name: "bilibili",
        icon: `${BASE_ICON_SET_URL}bilibili_2.png`,
    },
    {
        name: "Netflix",
        icon: `${BASE_ICON_SET_URL}Netflix.png`,
    },
    {
        name: "Prime Video",
        icon: `${BASE_ICON_SET_URL}Prime_Video_2.png`,
        alias: "PrimeVideo",
    },
    {
        name: "Disney",
        icon: `${BASE_ICON_SET_URL}Disney.png`,
    },
    {
        name: "HBO",
        icon: `${BASE_ICON_SET_URL}HBO_1.png`,
    },
    {
        name: "Binance",
        icon: extractFavicon("www.binance.com"),
    },
    {
        name: "OKX",
        icon: extractFavicon("www.okx.com"),
    },
    {
        name: "Anthropic",
        icon: extractFavicon("www.anthropic.com"),
    },
    {
        name: "OpenAI",
        icon: extractFavicon("openai.com"),
    },
    {
        name: "Microsoft",
        icon: `${BASE_ICON_SET_URL}Microsoft.png`,
    },
    {
        name: "Gemini",
        icon: extractFavicon("gemini.google.com"),
        alias: "Google-Gemini",
    },
    {
        name: "YouTube",
        icon: `${BASE_ICON_SET_URL}YouTube.png`,
    },
    {
        name: "Google",
        icon: `${BASE_ICON_SET_URL}Google_Search.png`,
    },
    {
        name: "Telegram",
        icon: `${BASE_ICON_SET_URL}Telegram_X.png`,
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
        name: "Cloudflare 🌐",
        icon: `${BASE_ICON_SET_URL}Cloudflare.png`,
        filter: "(?i)Cloudflare|CF|cloudflare|cf",
    },
];

// ####################################### DO NOT MODIFY THE CODE BELOW UNLESS YOU KNOW WHAT YOU ARE DOING #######################################

// General Configuration

const generalConfig = {
    "allow-lan": false,
    mode: "rule",
    "log-level": "info",
    ipv6: false,
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
    ipv6: false,
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
    "default-nameserver": ["223.5.5.5", "119.29.29.29", "1.1.1.1", "8.8.8.8"],
    "proxy-server-nameserver": [...chineseNameservers],
    // "nameserver-policy": {
    //     "rule-set:private,direct,geolocation-cn": chineseNameservers,
    //     "rule-set:proxy,tld-!cn": internationalNameservers,
    // },
    nameserver: [
        // ...chineseNameservers,
        // ...internationalNameservers,
        ...adguardDefaultNameservers,
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
        proxies: ["REJECT", "DIRECT"],
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
    "RULE-SET,applications,DIRECT",
    "RULE-SET,lancidr,DIRECT,no-resolve",
    "RULE-SET,private,DIRECT",
    "RULE-SET,ads,Advertising",
    "RULE-SET,win-spy,Advertising",
    ...generateServiceRules(services),
    "RULE-SET,direct,Mainland China 🇨🇳",
    "RULE-SET,proxy,PROXY",
    "RULE-SET,tld-!cn,PROXY",
    "RULE-SET,xcidr,X",
    "RULE-SET,googlecidr,Google",
    "RULE-SET,netflixcidr,Netflix",
    "RULE-SET,telegramcidr,Telegram",
    "RULE-SET,cncidr,Mainland China 🇨🇳",
    "MATCH,Others",
];

// Rule Providers

const ruleProviderDefaults = {
    type: "http",
    interval: 86400,
    proxy: "Mainland China 🇨🇳",
};

function generateServiceRuleProviders(services, defaultConfig) {
    return services.reduce((acc, { name, alias }) => {
        const ruleName = alias || name;
        acc[name.toLowerCase()] = {
            ...defaultConfig,
            format: "mrs",
            behavior: "domain",
            url: `https://cdn.jsdelivr.net/gh/\u004D\u0065\u0074\u0061\u0043\u0075\u0062\u0065\u0058/\u006D\u0065\u0074\u0061-rules-dat@\u006D\u0065\u0074\u0061/geo/geosite/${ruleName.toLowerCase()}.mrs`,
            path: `./ruleset/\u006D\u0065\u0074\u0061\u0063\u0075\u0062\u0065\u0078/${name.toLowerCase()}.mrs`,
        };
        return acc;
    }, {});
}

const ruleProviders = {
    ads: {
        ...ruleProviderDefaults,
        format: "mrs",
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/Project-META/rules-mrs@release/ads.mrs",
        path: "./ruleset/project-meta/ads.mrs",
    },
    applications: {
        ...ruleProviderDefaults,
        format: "yaml",
        behavior: "classical",
        url: "https://cdn.jsdelivr.net/gh/Project-META/rules-mrs@release/applications.yaml",
        path: "./ruleset/project-meta/applications.yaml",
    },
    cncidr: {
        ...ruleProviderDefaults,
        format: "mrs",
        behavior: "ipcidr",
        url: "https://cdn.jsdelivr.net/gh/Project-META/rules-mrs@release/cncidr.mrs",
        path: "./ruleset/project-meta/cncidr.mrs",
    },
    direct: {
        ...ruleProviderDefaults,
        format: "mrs",
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/Project-META/rules-mrs@release/direct.mrs",
        path: "./ruleset/project-meta/direct.mrs",
    },
    lancidr: {
        ...ruleProviderDefaults,
        format: "mrs",
        behavior: "ipcidr",
        url: "https://cdn.jsdelivr.net/gh/Project-META/rules-mrs@release/lancidr.mrs",
        path: "./ruleset/project-meta/lancidr.mrs",
    },
    private: {
        ...ruleProviderDefaults,
        format: "mrs",
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/Project-META/rules-mrs@release/private.mrs",
        path: "./ruleset/project-meta/private.mrs",
    },
    proxy: {
        ...ruleProviderDefaults,
        format: "mrs",
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/Project-META/rules-mrs@release/proxy.mrs",
        path: "./ruleset/project-meta/proxy.mrs",
    },
    telegramcidr: {
        ...ruleProviderDefaults,
        format: "mrs",
        behavior: "ipcidr",
        url: "https://cdn.jsdelivr.net/gh/Project-META/rules-mrs@release/telegramcidr.mrs",
        path: "./ruleset/project-meta/telegramcidr.mrs",
    },
    "tld-!cn": {
        ...ruleProviderDefaults,
        format: "mrs",
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/Project-META/rules-mrs@release/tld-!cn.mrs",
        path: "./ruleset/project-meta/tld-!cn.mrs",
    },
    // "geolocation-cn": {
    //     ...ruleProviderDefaults,
    //     format: "mrs",
    //     behavior: "domain",
    //     url: "https://cdn.jsdelivr.net/gh/\u004D\u0065\u0074\u0061\u0043\u0075\u0062\u0065\u0058/\u006D\u0065\u0074\u0061-rules-dat@\u006D\u0065\u0074\u0061/geo/geosite/geolocation-cn.mrs",
    //     path: "./ruleset/\u006D\u0065\u0074\u0061\u0063\u0075\u0062\u0065\u0078/geolocation-cn.mrs",
    // },
    "win-spy": {
        ...ruleProviderDefaults,
        format: "mrs",
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/\u004D\u0065\u0074\u0061\u0043\u0075\u0062\u0065\u0058/\u006D\u0065\u0074\u0061-rules-dat@\u006D\u0065\u0074\u0061/geo/geosite/win-spy.mrs",
        path: "./ruleset/\u006D\u0065\u0074\u0061\u0063\u0075\u0062\u0065\u0078/win-spy.mrs",
    },
    xcidr: {
        ...ruleProviderDefaults,
        format: "mrs",
        behavior: "ipcidr",
        url: "https://cdn.jsdelivr.net/gh/\u004D\u0065\u0074\u0061\u0043\u0075\u0062\u0065\u0058/\u006D\u0065\u0074\u0061-rules-dat@\u006D\u0065\u0074\u0061/geo/geoip/twitter.mrs",
        path: "./ruleset/\u006D\u0065\u0074\u0061\u0063\u0075\u0062\u0065\u0078/xcidr.mrs",
    },
    googlecidr: {
        ...ruleProviderDefaults,
        format: "mrs",
        behavior: "ipcidr",
        url: "https://cdn.jsdelivr.net/gh/\u004D\u0065\u0074\u0061\u0043\u0075\u0062\u0065\u0058/\u006D\u0065\u0074\u0061-rules-dat@\u006D\u0065\u0074\u0061/geo/geoip/google.mrs",
        path: "./ruleset/\u006D\u0065\u0074\u0061\u0063\u0075\u0062\u0065\u0078/googlecidr.mrs",
    },
    netflixcidr: {
        ...ruleProviderDefaults,
        format: "mrs",
        behavior: "ipcidr",
        url: "https://cdn.jsdelivr.net/gh/\u004D\u0065\u0074\u0061\u0043\u0075\u0062\u0065\u0058/\u006D\u0065\u0074\u0061-rules-dat@\u006D\u0065\u0074\u0061/geo/geoip/netflix.mrs",
        path: "./ruleset/\u006D\u0065\u0074\u0061\u0063\u0075\u0062\u0065\u0078/netflixcidr.mrs",
    },
    ...generateServiceRuleProviders(services, ruleProviderDefaults),
};

// generate configuration using the above settings

function validateOriginalConfig(config) {
    const proxyCount = Array.isArray(config?.proxies)
        ? config?.proxies?.length
        : 0;
    const proxyProviderCount =
        typeof config?.["proxy-providers"] === "object" &&
        config?.["proxy-providers"] !== null
            ? Object.keys(config?.["proxy-providers"])?.length
            : 0;
    if (proxyCount === 0 && proxyProviderCount === 0)
        throw new Error(
            "The original configuration must contain a non-empty proxies array (see https://wiki.\u006D\u0065\u0074\u0061\u0063\u0075\u0062\u0065\u0078.one/en/config/proxies/) or a proxy-providers object with at least one property (see https://wiki.\u006D\u0065\u0074\u0061\u0063\u0075\u0062\u0065\u0078.one/en/config/proxy-providers/)"
        );
    if (proxyCount > 0) {
        const { proxies } = config;
        i = 0;
        proxies.forEach((proxy) => {
            i++;
            if (!proxy.name || !proxy.type || !proxy.server || !proxy.port) {
                throw new Error(
                    `Invalid proxy number ${i} configuration (see https://wiki.\u006D\u0065\u0074\u0061\u0063\u0075\u0062\u0065\u0078.one/en/config/proxies/)`
                );
            }
        });
        console.log(
            `The original configuration contains ${proxyCount} proxies, which will be preserved`
        );
    }
    if (proxyProviderCount > 0) {
        const { "proxy-providers": proxyProviders } = config;
        i = 0;
        Object.values(proxyProviders).forEach((provider) => {
            i++;
            if (
                !provider.name ||
                !provider.type ||
                (provider.type === "http" && !provider.url)
            ) {
                throw new Error(
                    `Invalid proxy provider number ${i} configuration (see https://wiki.\u006D\u0065\u0074\u0061\u0063\u0075\u0062\u0065\u0078.one/en/config/proxy-providers/)`
                );
            }
        });
        console.log(
            `The original configuration contains ${proxyProviderCount} proxy providers, which will be preserved`
        );
    }
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
