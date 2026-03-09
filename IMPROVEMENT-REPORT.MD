# 📊 IMPROVEMENT REPORT

Project: NIAGARAHOMEIMPROVEMENT
Date: 3/9/2026, 6:26:46 PM
Total Issues: 269

| Severity | Type | File | Message |
|----------|------|------|---------|
| medium | a11y-missing-viewport | public/media/buttons/drop-down1.html | Missing <meta name="viewport"> tag. Mobile devices may render incorrectly. |
| medium | a11y-missing-viewport | public/media/buttons/drop-down2.html | Missing <meta name="viewport"> tag. Mobile devices may render incorrectly. |
| medium | a11y-missing-viewport | public/media/buttons/drop-up-down.html | Missing <meta name="viewport"> tag. Mobile devices may render incorrectly. |
| medium | a11y-missing-viewport | public/media/buttons/login-icon.html | Missing <meta name="viewport"> tag. Mobile devices may render incorrectly. |
| medium | a11y-missing-viewport | public/media/buttons/pass-icon.html | Missing <meta name="viewport"> tag. Mobile devices may render incorrectly. |
| medium | a11y-missing-viewport | public/media/backgrounds/iphone-bg.html | Missing <meta name="viewport"> tag. Mobile devices may render incorrectly. |
| medium | a11y-missing-viewport | public/media/backgrounds/listing-details-mainimg.html | Missing <meta name="viewport"> tag. Mobile devices may render incorrectly. |
| medium | a11y-missing-viewport | public/media/backgrounds/pm-bg.html | Missing <meta name="viewport"> tag. Mobile devices may render incorrectly. |
| medium | ci-missing-husky | .husky | Husky git hooks not found. Pre-commit hooks are recommended for QC. |
| medium | ci-missing-lint-staged | package.json | lint-staged not configured. Recommended for efficient pre-commit checks. |
| low | ci-missing-github-actions | .github/workflows | GitHub Actions workflows not found. CI/CD automation is recommended. |
| low | ci-missing-lighthouse-config | lighthouserc.js | Lighthouse CI config not found. Automated performance budgets recommended. |
| low | ci-missing-sonar | sonar-project.properties | SonarQube project properties not found. Deep code analysis recommended. |
| low | ci-missing-snyk | .snyk | Snyk configuration not found. Dependency security scanning recommended. |
| low | ci-missing-codeowners | CODEOWNERS | CODEOWNERS file not found. Recommended for repository governance. |
| low | ci-missing-dependabot | .github/dependabot.yml | Dependabot configuration not found. Automated dependency updates recommended. |
| medium | seo-missing-canonical | index.html | SEO: Missing canonical link. |
| medium | seo-no-internal-links | index.html | SEO: No internal links found. |
| medium | a11y-missing-main | index.html | A11y: Missing <main> landmark. |
| medium | heuristic | index.html:65 | SEO mandate requires exactly ONE <h1> per page. Sub-sections must use <h2> or below. Multiple H1 tags confuse search engine heading hierarchy. |
| medium | seo-missing-canonical | postcss.config.js | SEO: Missing canonical link. |
| low | seo-missing-jsonld | postcss.config.js | SEO: No JSON-LD structured data. |
| medium | seo-no-internal-links | postcss.config.js | SEO: No internal links found. |
| medium | a11y-missing-main | postcss.config.js | A11y: Missing <main> landmark. |
| medium | a11y-missing-lang | postcss.config.js | A11y: Missing lang attribute on <html>. |
| medium | seo-missing-canonical | tailwind.config.js | SEO: Missing canonical link. |
| low | seo-missing-jsonld | tailwind.config.js | SEO: No JSON-LD structured data. |
| medium | seo-no-internal-links | tailwind.config.js | SEO: No internal links found. |
| medium | a11y-missing-main | tailwind.config.js | A11y: Missing <main> landmark. |
| medium | a11y-missing-lang | tailwind.config.js | A11y: Missing lang attribute on <html>. |
| medium | heuristic | tsconfig.json:2 | SOTA 2026 TypeScript baseline requires strict: true, noUncheckedIndexedAccess: true, and exactOptionalPropertyTypes: true in tsconfig.json for maximum type safety. |
| medium | heuristic | tsconfig.node.json:2 | SOTA 2026 TypeScript baseline requires strict: true, noUncheckedIndexedAccess: true, and exactOptionalPropertyTypes: true in tsconfig.json for maximum type safety. |
| info | css-custom-properties | src/App.css | CSS: Using custom properties (--variables). |
| info | css-cascade-layers | src/App.css | CSS: Using @layer for cascade management. |
| low | heuristic | src/App.css:119 | Universal selector (*) is slow. Target specific elements. |
| medium | heuristic | src/index.css:2 | Accessibility: Touch targets must be minimum 44x44px. Use min-h-[44px] min-w-[44px] or p-3 |
| medium | heuristic | src/index.css:16 | Use CSS variables (e.g., --glass-blur, --glass-opacity) instead of hardcoded magic numbers for design tokens. |
| medium | heuristic | src/index.css:43 | Accessibility: Touch targets must be minimum 44x44px. Use min-h-[44px] min-w-[44px] or p-3 |
| medium | heuristic | src/index.css:54 | Use CSS variables (e.g., --glass-blur, --glass-opacity) instead of hardcoded magic numbers for design tokens. |
| medium | seo-missing-canonical | src/vite-env.d.ts | SEO: Missing canonical link. |
| low | seo-missing-jsonld | src/vite-env.d.ts | SEO: No JSON-LD structured data. |
| medium | seo-no-internal-links | src/vite-env.d.ts | SEO: No internal links found. |
| medium | a11y-missing-main | src/vite-env.d.ts | A11y: Missing <main> landmark. |
| medium | a11y-missing-lang | src/vite-env.d.ts | A11y: Missing lang attribute on <html>. |
| medium | seo-missing-canonical | src/components/Footer.tsx | SEO: Missing canonical link. |
| low | seo-missing-jsonld | src/components/Footer.tsx | SEO: No JSON-LD structured data. |
| medium | seo-no-internal-links | src/components/Footer.tsx | SEO: No internal links found. |
| medium | a11y-missing-main | src/components/Footer.tsx | A11y: Missing <main> landmark. |
| medium | a11y-missing-lang | src/components/Footer.tsx | A11y: Missing lang attribute on <html>. |
| medium | heuristic | src/components/Footer.tsx:13 | All images must have an alt attribute for accessibility (WCAG 1.1.1). |
| low | heuristic | src/components/Footer.tsx:1 | Large components are hard to maintain. Split into smaller, focused components. |
| medium | heuristic | src/components/Footer.tsx:11 | Icons inside flex containers will squish on narrow viewports. Add flex-shrink-0 (Tailwind: shrink-0) and explicit width/height to prevent distortion. |
| medium | heuristic | src/components/Footer.tsx:13 | Next.js: Use next/image for automatic image optimization (WebP, lazy loading, responsive) |
| info | heuristic | src/components/Footer.tsx:11 | SOTA Master Protocol: AUDIT PARENT HIERARCHY. Check ancestor max-w and overflow before centering. |
| info | heuristic | src/components/Footer.tsx:84 | SOTA Master Protocol: AUDIT PARENT HIERARCHY. Check ancestor max-w and overflow before centering. |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| low | magic-number | src/components/Icons.tsx | N/A |
| medium | seo-title-too-short | src/components/Icons.tsx | SEO: Title too short (10 chars). |
| medium | seo-missing-canonical | src/components/Icons.tsx | SEO: Missing canonical link. |
| low | seo-missing-jsonld | src/components/Icons.tsx | SEO: No JSON-LD structured data. |
| medium | seo-no-internal-links | src/components/Icons.tsx | SEO: No internal links found. |
| medium | a11y-missing-main | src/components/Icons.tsx | A11y: Missing <main> landmark. |
| medium | a11y-missing-lang | src/components/Icons.tsx | A11y: Missing lang attribute on <html>. |
| low | heuristic | src/components/Icons.tsx:1 | Large components are hard to maintain. Split into smaller, focused components. |
| low | heuristic | src/components/Icons.tsx:31 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:31 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:31 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:31 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:31 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:31 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:31 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:31 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:35 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:35 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:35 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:35 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:35 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:35 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:35 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:35 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:35 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:35 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:35 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:35 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:39 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:43 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:43 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:47 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:47 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:51 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:51 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:51 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:51 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:51 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:55 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:55 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:55 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:55 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:55 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:55 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:55 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:59 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| low | heuristic | src/components/Icons.tsx:71 | Hardcoded IPs reduce portability. Use environment variables or DNS. |
| medium | console-log | src/components/Newsletter.tsx:7 | Detected Console Log: console.log(... |
| medium | seo-missing-canonical | src/components/Statistics.tsx | SEO: Missing canonical link. |
| low | seo-missing-jsonld | src/components/Statistics.tsx | SEO: No JSON-LD structured data. |
| medium | seo-no-internal-links | src/components/Statistics.tsx | SEO: No internal links found. |
| medium | a11y-missing-main | src/components/Statistics.tsx | A11y: Missing <main> landmark. |
| medium | a11y-missing-lang | src/components/Statistics.tsx | A11y: Missing lang attribute on <html>. |
| low | heuristic | src/components/Statistics.tsx:1 | Large components are hard to maintain. Split into smaller, focused components. |
| info | heuristic | src/components/Statistics.tsx:30 | SOTA Master Protocol: AUDIT PARENT HIERARCHY. Check ancestor max-w and overflow before centering. |
| medium | seo-title-too-short | public/media/buttons/drop-down1.html | SEO: Title too short (13 chars). |
| medium | seo-missing-canonical | public/media/buttons/drop-down1.html | SEO: Missing canonical link. |
| low | seo-missing-jsonld | public/media/buttons/drop-down1.html | SEO: No JSON-LD structured data. |
| medium | seo-no-internal-links | public/media/buttons/drop-down1.html | SEO: No internal links found. |
| medium | a11y-missing-main | public/media/buttons/drop-down1.html | A11y: Missing <main> landmark. |
| medium | a11y-missing-lang | public/media/buttons/drop-down1.html | A11y: Missing lang attribute on <html>. |
| medium | heuristic | public/media/buttons/drop-down1.html:7 | SEO mandate requires exactly ONE <h1> per page. Sub-sections must use <h2> or below. Multiple H1 tags confuse search engine heading hierarchy. |
| medium | seo-title-too-short | public/media/buttons/drop-down2.html | SEO: Title too short (13 chars). |
| medium | seo-missing-canonical | public/media/buttons/drop-down2.html | SEO: Missing canonical link. |
| low | seo-missing-jsonld | public/media/buttons/drop-down2.html | SEO: No JSON-LD structured data. |
| medium | seo-no-internal-links | public/media/buttons/drop-down2.html | SEO: No internal links found. |
| medium | a11y-missing-main | public/media/buttons/drop-down2.html | A11y: Missing <main> landmark. |
| medium | a11y-missing-lang | public/media/buttons/drop-down2.html | A11y: Missing lang attribute on <html>. |
| medium | heuristic | public/media/buttons/drop-down2.html:7 | SEO mandate requires exactly ONE <h1> per page. Sub-sections must use <h2> or below. Multiple H1 tags confuse search engine heading hierarchy. |
| medium | seo-title-too-short | public/media/buttons/drop-up-down.html | SEO: Title too short (13 chars). |
| medium | seo-missing-canonical | public/media/buttons/drop-up-down.html | SEO: Missing canonical link. |
| low | seo-missing-jsonld | public/media/buttons/drop-up-down.html | SEO: No JSON-LD structured data. |
| medium | seo-no-internal-links | public/media/buttons/drop-up-down.html | SEO: No internal links found. |
| medium | a11y-missing-main | public/media/buttons/drop-up-down.html | A11y: Missing <main> landmark. |
| medium | a11y-missing-lang | public/media/buttons/drop-up-down.html | A11y: Missing lang attribute on <html>. |
| medium | heuristic | public/media/buttons/drop-up-down.html:7 | SEO mandate requires exactly ONE <h1> per page. Sub-sections must use <h2> or below. Multiple H1 tags confuse search engine heading hierarchy. |
| medium | seo-title-too-short | public/media/buttons/login-icon.html | SEO: Title too short (13 chars). |
| medium | seo-missing-canonical | public/media/buttons/login-icon.html | SEO: Missing canonical link. |
| low | seo-missing-jsonld | public/media/buttons/login-icon.html | SEO: No JSON-LD structured data. |
| medium | seo-no-internal-links | public/media/buttons/login-icon.html | SEO: No internal links found. |
| medium | a11y-missing-main | public/media/buttons/login-icon.html | A11y: Missing <main> landmark. |
| medium | a11y-missing-lang | public/media/buttons/login-icon.html | A11y: Missing lang attribute on <html>. |
| medium | heuristic | public/media/buttons/login-icon.html:7 | SEO mandate requires exactly ONE <h1> per page. Sub-sections must use <h2> or below. Multiple H1 tags confuse search engine heading hierarchy. |
| medium | seo-title-too-short | public/media/buttons/pass-icon.html | SEO: Title too short (13 chars). |
| medium | seo-missing-canonical | public/media/buttons/pass-icon.html | SEO: Missing canonical link. |
| low | seo-missing-jsonld | public/media/buttons/pass-icon.html | SEO: No JSON-LD structured data. |
| medium | seo-no-internal-links | public/media/buttons/pass-icon.html | SEO: No internal links found. |
| medium | a11y-missing-main | public/media/buttons/pass-icon.html | A11y: Missing <main> landmark. |
| medium | a11y-missing-lang | public/media/buttons/pass-icon.html | A11y: Missing lang attribute on <html>. |
| medium | heuristic | public/media/buttons/pass-icon.html:7 | SEO mandate requires exactly ONE <h1> per page. Sub-sections must use <h2> or below. Multiple H1 tags confuse search engine heading hierarchy. |
| medium | seo-title-too-short | public/media/backgrounds/iphone-bg.html | SEO: Title too short (13 chars). |
| medium | seo-missing-canonical | public/media/backgrounds/iphone-bg.html | SEO: Missing canonical link. |
| low | seo-missing-jsonld | public/media/backgrounds/iphone-bg.html | SEO: No JSON-LD structured data. |
| medium | seo-no-internal-links | public/media/backgrounds/iphone-bg.html | SEO: No internal links found. |
| medium | a11y-missing-main | public/media/backgrounds/iphone-bg.html | A11y: Missing <main> landmark. |
| medium | a11y-missing-lang | public/media/backgrounds/iphone-bg.html | A11y: Missing lang attribute on <html>. |
| medium | heuristic | public/media/backgrounds/iphone-bg.html:7 | SEO mandate requires exactly ONE <h1> per page. Sub-sections must use <h2> or below. Multiple H1 tags confuse search engine heading hierarchy. |
| low | image-seo-missing-metadata | public/media/200x150/partner1.webp | Image metadata is missing SEO keywords/subject tags. |
| low | image-seo-missing-metadata | public/media/200x150/partner2.webp | Image metadata is missing SEO keywords/subject tags. |
| low | image-seo-missing-metadata | public/media/200x150/partner3.webp | Image metadata is missing SEO keywords/subject tags. |
| low | image-seo-missing-metadata | public/media/200x150/partner4.webp | Image metadata is missing SEO keywords/subject tags. |
| low | image-seo-missing-metadata | public/media/200x150/partner5.webp | Image metadata is missing SEO keywords/subject tags. |
| medium | image-seo-filename | public/media/backgrounds/30.webp | Filename '30' is not SEO-friendly (appears generic or too short). |
| low | image-seo-missing-metadata | public/media/backgrounds/30.webp | Image metadata is missing SEO keywords/subject tags. |
| low | image-seo-missing-metadata | public/media/backgrounds/container-bg.webp | Image metadata is missing SEO keywords/subject tags. |
| low | image-seo-missing-metadata | public/media/backgrounds/home2-bg.webp | Image metadata is missing SEO keywords/subject tags. |
| low | image-seo-missing-metadata | public/media/backgrounds/we-help.webp | Image metadata is missing SEO keywords/subject tags. |
| medium | image-seo-filename | public/media/footer/01.webp | Filename '01' is not SEO-friendly (appears generic or too short). |
| low | image-seo-missing-metadata | public/media/footer/01.webp | Image metadata is missing SEO keywords/subject tags. |
| low | image-seo-missing-metadata | public/media/logo.webp | Image metadata is missing SEO keywords/subject tags. |
| low | image-not-webp | src/assets/cube-leg.png | Image is in 'png' format. Consider using WebP or AVIF for better performance. |
| low | image-seo-missing-metadata | src/assets/cube-leg.png | Image metadata is missing SEO keywords/subject tags. |
| low | image-not-webp | src/assets/growth.png | Image is in 'png' format. Consider using WebP or AVIF for better performance. |
| low | image-seo-missing-metadata | src/assets/growth.png | Image metadata is missing SEO keywords/subject tags. |
| low | image-not-webp | src/assets/icon.png | Image is in 'png' format. Consider using WebP or AVIF for better performance. |
| low | image-seo-missing-metadata | src/assets/icon.png | Image metadata is missing SEO keywords/subject tags. |
| low | image-not-webp | src/assets/looking-ahead.png | Image is in 'png' format. Consider using WebP or AVIF for better performance. |
| low | image-seo-missing-metadata | src/assets/looking-ahead.png | Image metadata is missing SEO keywords/subject tags. |
| low | image-not-webp | src/assets/pilot.png | Image is in 'png' format. Consider using WebP or AVIF for better performance. |
| low | image-seo-missing-metadata | src/assets/pilot.png | Image metadata is missing SEO keywords/subject tags. |
| low | image-not-webp | src/assets/reflecting.png | Image is in 'png' format. Consider using WebP or AVIF for better performance. |
| low | image-seo-missing-metadata | src/assets/reflecting.png | Image metadata is missing SEO keywords/subject tags. |
| medium | seo-title-too-short | public/media/backgrounds/listing-details-mainimg.html | SEO: Title too short (13 chars). |
| medium | seo-missing-canonical | public/media/backgrounds/listing-details-mainimg.html | SEO: Missing canonical link. |
| low | seo-missing-jsonld | public/media/backgrounds/listing-details-mainimg.html | SEO: No JSON-LD structured data. |
| medium | seo-no-internal-links | public/media/backgrounds/listing-details-mainimg.html | SEO: No internal links found. |
| medium | a11y-missing-main | public/media/backgrounds/listing-details-mainimg.html | A11y: Missing <main> landmark. |
| medium | a11y-missing-lang | public/media/backgrounds/listing-details-mainimg.html | A11y: Missing lang attribute on <html>. |
| info | tracking-google-analytics | public/media/backgrounds/listing-details-mainimg.html | Third-Party: Google Analytics detected. |
| medium | heuristic | public/media/backgrounds/listing-details-mainimg.html:7 | SEO mandate requires exactly ONE <h1> per page. Sub-sections must use <h2> or below. Multiple H1 tags confuse search engine heading hierarchy. |
| medium | seo-title-too-short | public/media/backgrounds/pm-bg.html | SEO: Title too short (13 chars). |
| medium | seo-missing-canonical | public/media/backgrounds/pm-bg.html | SEO: Missing canonical link. |
| low | seo-missing-jsonld | public/media/backgrounds/pm-bg.html | SEO: No JSON-LD structured data. |
| medium | seo-no-internal-links | public/media/backgrounds/pm-bg.html | SEO: No internal links found. |
| medium | a11y-missing-main | public/media/backgrounds/pm-bg.html | A11y: Missing <main> landmark. |
| medium | a11y-missing-lang | public/media/backgrounds/pm-bg.html | A11y: Missing lang attribute on <html>. |
| medium | heuristic | public/media/backgrounds/pm-bg.html:7 | SEO mandate requires exactly ONE <h1> per page. Sub-sections must use <h2> or below. Multiple H1 tags confuse search engine heading hierarchy. |
