// GitHub URL: https://github.com/Project-MCG

// ################################################### this section can be flexibly customized ###################################################

const ICON_SET_URL =
    "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/";

const services = [
    // Routing rules are matched in order from top to bottom, with the rule at the top of the list taking precedence over the rules below it.
    // Default services: Apple, iCloud, Google, Telegram.
    {
        name: "bilibili",
        alias: "BiliBili",
        icon: `${ICON_SET_URL}bilibili_2.png`,
    },
    { name: "Binance", icon: "https://img.icons8.com/arcade/100/binance.png" },
    { name: "OpenAI", icon: `${ICON_SET_URL}ChatGPT.png` },
    { name: "Copilot", icon: `${ICON_SET_URL}Copilot.png` },
    { name: "Microsoft", icon: `${ICON_SET_URL}Microsoft.png` },
    { name: "YouTube", icon: `${ICON_SET_URL}YouTube.png` },
];

const locations = [
    {
        name: "Argentina",
        filter: "(?i)阿根廷|Argentina|ARG|AR|argentina|arg|ar|🇦🇷",
        icon: `${ICON_SET_URL}Argentina.png`,
    },
    {
        name: "Finland",
        filter: "(?i)芬兰|Finland|FIN|FI|finland|fin|fi|🇫🇮",
        icon: `${ICON_SET_URL}Finland.png`,
    },
    {
        name: "France",
        filter: "(?i)法国|France|FR|france|fr|🇫🇷",
        icon: `${ICON_SET_URL}France.png`,
    },
    {
        name: "Germany",
        filter: "(?i)德国|Germany|GER|DE|germany|ger|de|🇩🇪",
        icon: `${ICON_SET_URL}Germany.png`,
    },
    {
        name: "Hong Kong, China",
        filter: "(?i)香港|Hong Kong|HK|hong kong|hk|🇭🇰",
        icon: `${ICON_SET_URL}Hong_Kong.png`,
    },
    {
        name: "Iraq",
        filter: "(?i)伊拉克|Iraq|IRQ|IQ|iraq|iq|🇮🇶",
        icon: "https://img.icons8.com/fluency/96/iraq.png",
    },
    {
        name: "Japan",
        filter: "(?i)日本|Japan|japan|ja|🇯🇵",
        icon: `${ICON_SET_URL}Japan.png`,
    },
    {
        name: "Korea",
        filter: "(?i)韩国|Korea|KR|korea|kr|🇰🇷",
        icon: `${ICON_SET_URL}Korea.png`,
    },
    {
        name: "Russia",
        filter: "(?i)俄罗斯|Russia|RU|russia|ru|🇷🇺",
        icon: `${ICON_SET_URL}Russia.png`,
    },
    {
        name: "Singapore",
        filter: "(?i)新加坡|Singapore|singapore|sg|🇸🇬",
        icon: `${ICON_SET_URL}Singapore.png`,
    },
    {
        name: "Taiwan, China",
        filter: "(?i)台湾|Taiwan|TW|taiwan|tw|🇹🇼",
        icon: `${ICON_SET_URL}China.png`,
    },
    {
        name: "Thailand",
        filter: "(?i)泰国|Thailand|TH|thailand|th|🇹🇭",
        icon: `${ICON_SET_URL}Thailand.png`,
    },
    {
        name: "Türkiye",
        filter: "(?i)土耳其|Türkiye|Turkey|TUR|TR|türkiye|turkey|tur|tr|🇹🇷",
        icon: `${ICON_SET_URL}Turkey.png`,
    },
    {
        name: "United Kingdom",
        filter: "(?i)英国|United Kingdom|Great Britain|UK|GB|united kingdom|great britain|uk|gb|🇬🇧",
        icon: `${ICON_SET_URL}United_Kingdom.png`,
    },
    {
        name: "United States",
        filter: "(?i)美国|United States of America|United States|USA|US|united states of america|united states|usa|us|🇺🇸",
        icon: `${ICON_SET_URL}United_States.png`,
    },
    {
        name: "Cloudflare",
        filter: "(?i)Cloudflare|CF|cloudflare|cf",
        icon: `${ICON_SET_URL}Cloudflare.png`,
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
    "geodata-mode": false,
    "geodata-loader": "memconservative",
    "geo-auto-update": true,
    "geo-update-interval": 24,
    "geox-url": {
        geosite:
            "https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geosite.dat",
        mmdb: "https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/country-lite.mmdb",
    },
    "global-ua": "\u0063\u006c\u0061\u0073\u0068.meta",
    "etag-support": true,
};

// DNS

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
    "nameserver-policy": {
        "geosite:private,cn,geolocation-cn": chineseNameservers,
        "geosite:geolocation-!cn": internationalNameservers,
    },
    nameserver: [...chineseNameservers, ...internationalNameservers],
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

const proxyGroupCommon = {
    url: "https://www.gstatic.com/generate_204",
    interval: 300,
    lazy: true,
    timeout: 5000,
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

function createProxyGroups(items, commonConfig, type, extraProps = {}) {
    return items.map(({ name, icon, filter }) => ({
        ...commonConfig,
        name,
        type,
        icon,
        filter,
        ...extraProps,
    }));
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
        icon: `${ICON_SET_URL}Proxy.png`,
    },
    {
        ...proxyGroupCommon,
        name: "AUTO",
        type: "url-test",
        tolerance: 50,
        proxies: [...locations.map(({ name }) => name)],
        icon: `${ICON_SET_URL}Auto.png`,
    },
    {
        ...proxyGroupCommon,
        name: "FALLBACK",
        type: "fallback",
        proxies: [...locations.map(({ name }) => name)],
        icon: `${ICON_SET_URL}Available.png`,
    },
    {
        ...proxyGroupCommon,
        name: "LOAD BALANCING (Consistent hashing)",
        type: "load-balance",
        strategy: "consistent-hashing",
        proxies: [...locations.map(({ name }) => name)],
        icon: `${ICON_SET_URL}Round_Robin_1.png`,
    },
    {
        ...proxyGroupCommon,
        name: "LOAD BALANCING (Round robin)",
        type: "load-balance",
        strategy: "round-robin",
        proxies: [...locations.map(({ name }) => name)],
        icon: `${ICON_SET_URL}Round_Robin.png`,
    },
    ...createProxyGroups(services, proxyGroupCommon, "select", {
        proxies: serviceProxyGroupProxies,
    }),
    {
        ...proxyGroupCommon,
        name: "Apple",
        type: "select",
        proxies: [...serviceProxyGroupProxies],
        icon: `${ICON_SET_URL}Apple_1.png`,
    },
    {
        ...proxyGroupCommon,
        name: "iCloud",
        type: "select",
        proxies: [...serviceProxyGroupProxies],
        icon: `${ICON_SET_URL}iCloud.png`,
    },
    {
        ...proxyGroupCommon,
        name: "Google",
        type: "select",
        proxies: [...serviceProxyGroupProxies],
        icon: `${ICON_SET_URL}Google_Search.png`,
    },
    {
        ...proxyGroupCommon,
        name: "Telegram",
        type: "select",
        proxies: [...serviceProxyGroupProxies],
        icon: `${ICON_SET_URL}Telegram_X.png`,
    },
    {
        ...proxyGroupCommon,
        name: "Others",
        type: "select",
        proxies: [...serviceProxyGroupProxies],
        icon: `${ICON_SET_URL}Final.png`,
    },
    {
        ...proxyGroupCommon,
        name: "Advertising",
        type: "select",
        proxies: ["REJECT", "DIRECT"],
        icon: `${ICON_SET_URL}Advertising.png`,
    },
    ...createProxyGroups(locations, locationProxyGroupCommon, "url-test"),
];

// Routing Rules

function createServiceRules(services) {
    return services.map(({ name }) => `RULE-SET,${name.toLowerCase()},${name}`);
}

const rules = [
    ...createServiceRules(services),
    "RULE-SET,applications,DIRECT",
    "RULE-SET,private,DIRECT",
    "RULE-SET,reject,Advertising",
    "GEOSITE,win-spy,Advertising",
    "GEOSITE,win-extra,Advertising",
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

// Rule Providers

const ruleProviderCommon = {
    type: "http",
    interval: 86400,
    proxy: "DIRECT",
    format: "yaml",
};

function createServiceRuleProviders(services, commonConfig) {
    return services.reduce((acc, { name, alias }) => {
        const ruleName = alias || name;
        acc[name.toLowerCase()] = {
            ...commonConfig,
            behavior: "classical",
            url: `https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/\u0043\u006c\u0061\u0073\u0068/${ruleName}/${ruleName}.yaml`,
            path: `./ruleset/blackmatrix7/${name.toLowerCase()}.yaml`,
        };
        return acc;
    }, {});
}

const DEFAULT_RULE_PROVIDER_BASE_URL =
    "https://cdn.jsdelivr.net/gh/Loyalsoldier/\u0063\u006c\u0061\u0073\u0068-rules@release/";

const ruleProviders = {
    direct: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: `${DEFAULT_RULE_PROVIDER_BASE_URL}direct.txt`,
        path: "./ruleset/loyalsoldier/direct.yaml",
    },
    proxy: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: `${DEFAULT_RULE_PROVIDER_BASE_URL}proxy.txt`,
        path: "./ruleset/loyalsoldier/proxy.yaml",
    },
    reject: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: `${DEFAULT_RULE_PROVIDER_BASE_URL}reject.txt`,
        path: "./ruleset/loyalsoldier/reject.yaml",
    },
    private: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: `${DEFAULT_RULE_PROVIDER_BASE_URL}private.txt`,
        path: "./ruleset/loyalsoldier/private.yaml",
    },
    apple: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: `${DEFAULT_RULE_PROVIDER_BASE_URL}apple.txt`,
        path: "./ruleset/loyalsoldier/apple.yaml",
    },
    icloud: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: `${DEFAULT_RULE_PROVIDER_BASE_URL}icloud.txt`,
        path: "./ruleset/loyalsoldier/icloud.yaml",
    },
    google: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: `${DEFAULT_RULE_PROVIDER_BASE_URL}google.txt`,
        path: "./ruleset/loyalsoldier/google.yaml",
    },
    gfw: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: `${DEFAULT_RULE_PROVIDER_BASE_URL}gfw.txt`,
        path: "./ruleset/loyalsoldier/gfw.yaml",
    },
    "tld-not-cn": {
        ...ruleProviderCommon,
        behavior: "domain",
        url: `${DEFAULT_RULE_PROVIDER_BASE_URL}tld-not-cn.txt`,
        path: "./ruleset/loyalsoldier/tld-not-cn.yaml",
    },
    telegramcidr: {
        ...ruleProviderCommon,
        behavior: "ipcidr",
        url: `${DEFAULT_RULE_PROVIDER_BASE_URL}telegramcidr.txt`,
        path: "./ruleset/loyalsoldier/telegramcidr.yaml",
    },
    lancidr: {
        ...ruleProviderCommon,
        behavior: "ipcidr",
        url: `${DEFAULT_RULE_PROVIDER_BASE_URL}lancidr.txt`,
        path: "./ruleset/loyalsoldier/lancidr.yaml",
    },
    cncidr: {
        ...ruleProviderCommon,
        behavior: "ipcidr",
        url: `${DEFAULT_RULE_PROVIDER_BASE_URL}cncidr.txt`,
        path: "./ruleset/loyalsoldier/cncidr.yaml",
    },
    applications: {
        ...ruleProviderCommon,
        behavior: "classical",
        url: `${DEFAULT_RULE_PROVIDER_BASE_URL}applications.txt`,
        path: "./ruleset/loyalsoldier/applications.yaml",
    },
    ...createServiceRuleProviders(services, ruleProviderCommon),
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
            "The original configuration must contain a non-empty proxies array (https://wiki.metacubex.one/config/proxies/) or a proxy-providers object with at least one property (https://wiki.metacubex.one/config/proxy-providers/)"
        );
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
