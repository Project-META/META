# META Enhances Tailored Automation (META)

**Original ｜ [Chinese](https://t.me/Project_META/12)**

## Overview

***M***ETA is a JavaScript-based script that simplifies and optimizes the configuration of the ***M***ulti-function network tool — a cross-platform, rule-based utility for managing network and application traffic. It provides extensive support for advanced features and custom configurations.

So, what exactly does the Multi-functional network tool refer to? Well, if you are asking this question, this repository may not be for you because you probably don’t need the Multi-function network tool at all.

## Key Features

- **Dynamic Service and Location Management**
  - **Service Configuration**: Easily manage a diverse range of services with customizable icons and aliases. Services are defined using a flexible structure, enabling swift updates and seamless additions to accommodate evolving requirements.
  - **Location-Based Policies**: Implement granular, location-specific rules and icons, supporting a comprehensive list of countries and regions. This feature allows for precise traffic management tailored to geographic locations, enhancing both performance and user experience.

- **Advanced Proxy Group Management**
  - **Custom Proxy Groups**: Create and manage proxy groups with a variety of strategies such as `select`, `url-test`, `fallback`, and `load-balance`. This flexibility ensures optimized routing and robust failover mechanisms, enhancing network reliability.
  - **Service and Location Proxy Groups**: Automatically generate proxy groups for each service and location, ensuring traffic is efficiently routed through the most appropriate channels based on predefined policies.

- **Comprehensive DNS Configuration**
  - **Enhanced DNS Settings**: Supports both Chinese and international nameservers with robust options for DNS over HTTPS (DoH) and DNS over QUIC (DoQ), significantly improving privacy and security. Easily switch between different DNS providers to optimize performance and reliability.
  - **Fake IP Mode**: Utilize customizable fake IP ranges to enhance user privacy and prevent DNS leaks. The system includes advanced filtering capabilities to exclude specific domains, ensuring that only trusted traffic is managed through fake IPs.
  - **Dynamic Nameserver Policies**: Implement sophisticated nameserver policies that adapt based on rulesets and geolocation, providing intelligent DNS resolution tailored to your network's needs.

- **Robust Rule Management**
  - **Integration with MRS Format Rulesets**: Seamlessly integrates with our meticulously designed ***[Rulesets in MRS Format](https://github.com/Project-META/rules-mrs)***. The compact MRS format ensures efficient matching and enhanced performance.
  - **Service-Specific Rules**: Automatically generate and manage rules for each service, ensuring that traffic is consistently routed according to predefined policies and enhancing overall network control.
  - **Dynamic Rule Providers**: Integrate with external rule providers to keep your configuration up-to-date with the latest domain and IP rules. This ensures that your network remains resilient against emerging threats and changes.

- **Flexible Configuration Options**
  - **Comprehensive General Configuration**: Customize global settings such as logging levels, LAN access control, and IPv6 support. These foundational settings allow you to tailor the tool to fit a wide range of network environments and requirements.
  - **TUN and Sniffer Support**: Enable TUN mode for advanced routing capabilities and domain sniffing for enhanced traffic analysis. These features provide deeper insights and greater control over network traffic.

- **Error Handling and Validation**
  - **Built-in Configuration Validation**: Utilize built-in validation functions to ensure that configurations are correct and complete before application. This reduces the risk of errors and ensures smooth deployment.
  - **Detailed Error Reporting**: Receive clear and informative error messages to assist in troubleshooting and configuration adjustments, making it easier to maintain a stable and efficient network setup.

- **Extensible and Customizable**
  - **Open Source and Community-Driven**: As an public repository, META encourages community contributions and customization. Users can tailor the tool to their specific requirements, fostering a collaborative and innovative development environment.
  - **Modular Design Architecture**: The codebase is structured for easy integration of new features and services. This modularity ensures that the tool can adapt to future needs and incorporate the latest advancements in network management.

- **Optimized Performance and Security**
  - **Efficient Resource Utilization**: Designed to optimize system resources, ensuring minimal impact on performance while providing robust network management capabilities.
  - **Enhanced Security Protocols**: Incorporates advanced security measures to protect against DNS vulnerabilities, unauthorized access, and other potential threats, ensuring a secure networking environment.

By leveraging these key features, META delivers a powerful, flexible, and secure network management solution tailored to meet the diverse needs of its users.

## Demo

***A demo that use META to generate a configuration for the Multi-function network tool is available at 👉 <https://github.com/user-attachments/assets/279d0db0-e007-4c3d-ba32-f6e0746aff5a> 👈.***

## Quick Start

Choose one of the following URLs to import the META script:

| Source | URL |
| ------------------------- | --- |
| **GitHub Raw** | [https://raw.githubusercontent.com/Project-META/META/refs/heads/script/META.js](https://raw.githubusercontent.com/Project-META/META/refs/heads/script/META.js) |
| **Xget** | [https://xget.us.kg/gh/Project-META/META/raw/refs/heads/script/META.js](https://xget.us.kg/gh/Project-META/META/raw/refs/heads/script/META.js) |
| **Xi Xu's Proxy Everything** | [https://proxy.xi-xu.me/?url=https%3A%2F%2Fraw.githubusercontent.com%2FProject-META%2FMETA%2Frefs%2Fheads%2Fscript%2FMETA.js](https://proxy.xi-xu.me/?url=https%3A%2F%2Fraw.githubusercontent.com%2FProject-META%2FMETA%2Frefs%2Fheads%2Fscript%2FMETA.js) |
| **jsDelivr** | [https://cdn.jsdelivr.net/gh/Project-META/META@script/META.js](https://cdn.jsdelivr.net/gh/Project-META/META@script/META.js) |
| **GitHub Proxy** | [https://ghp.ci/https://raw.githubusercontent.com/Project-META/META/refs/heads/script/META.js](https://ghp.ci/https://raw.githubusercontent.com/Project-META/META/refs/heads/script/META.js) |

## Usage Guide

Follow these steps to use META:

### 1. Prepare Base Configuration

Start with a valid configuration file of the Multi-function network tool containing at least one proxy or proxy provider, typically generated by importing a subscription URL into your client.

### 2. Import META Script

- **For M.P.**:
  1. Go to "Override" in the sidebar.
  2. Import the META script via one of the accessible URLs above.
  3. Click the three dots on the script's card, click "Edit File", edit and save the script, if needed.
  
- **For C.V.**:
  1. Navigate to the "Profiles" page.
  2. Visit one of the above URLs, select all, and copy to get the current META script content.
  3. Add META script content to the editor opened by double-clicking the "Global Extend Script" card.
  4. Edit before saving if needed.

### 3. Apply and Update Configuration

- For M.P., click the three dots on the script's card, click "Edit Info", turn on the "Globally Enabled" option, and save.
- For C.V., click "Reactivate Profiles" button in the upper right side of the window.

### 4. Verify the Configuration

Check the client's "Execution Log" or "Script Console" to ensure that the META script executed successfully to generate the new configuration:

- If your base configuration is correct, it will output the number of identified proxies and proxy providers, and the generated configuration in JSON format.
- If there are errors, correct your basic configuration according to the error and the URL in the output.

For other clients, please refer to the official documentation of the corresponding clients.

## Customization Guide

META is highly customizable. Below are some key areas you can modify:

### 1. **Icon Set URL**

Change the `BASE_ICON_SET_URL` or `LOCATION_ICON_SET_URL` constants to use a different icon set.

### 2. **Services**

Modify the `services` array to add or remove services:

- `name`: Service name.
- `icon`: URL of the service icon.
- `alias`: Must be set to the rule set file name when inconsistent with the name.

### 3. **Locations**

Customize the `locations` array to define geographical locations:

- `name`: Location name.
- `icon`: URL of the location icon.
- `filter`: Regex pattern for matching.

### 4. **General Configuration**

Adjust `generalConfig` object, for example:

- `allow-lan`: Set to `true` for LAN access.
- `log-level`: Set logging level (`silent`, `error`, `warning`, `info`, `debug`).
- `ipv6`: Enable/disable IPv6 support.

### 5. **DNS**

Modify the `dns` object to change nameservers and DNS policies.

### 6. **Hosts**

Add custom hosts in the `hosts` object.

### 7. **Domain Sniffing**

Enable and configure domain sniffing in the `sniffer` object.

### 8. **TUN**

Customize TUN settings in the `tun` object.

### 9. **Proxy Groups (be cautious)**

Customize the `proxyGroups` array to set proxy strategy according to actual needs.

### 10. **Routing Rules (be cautious)**

Customize the `rules` array for traffic management.

### 11. **Rule Providers (be cautious)**

Add custom rule providers in the `ruleProviders` object.

It is strongly recommended to refer to the official documentation of the Multi-function network tool when customizing META scripts, especially the areas marked "be cautious".

## Prerequisites

- A valid configuration file with at least one proxy or proxy provider defined.
- A compatible client that supports JavaScript overrides.

## Disclaimer

1. This repository is strictly for educational and research purposes.
2. Use at your own risk. The repository assumes no responsibility for potential issues.
3. No guarantee of accuracy, completeness, or reliability.
4. Not liable for data loss or damages.
5. Ensure compliance with relevant licenses and legal regulations.
6. No endorsement of third-party hardware/software.
7. User modifications are their own responsibility.
8. Terms may change at any time. By using this repository, you agree to these terms.

## License

Copyright &copy; 2024 [Project META](https://github.com/Project-META). All rights reserved.

Licensed under the [GPL-3.0](https://github.com/Project-META/META/blob/main/LICENSE) license.  
