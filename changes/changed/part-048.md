# Changed — Bundle Modifications Report (Part 048 / 056)

- **Updated at**: `2026-11-26T01:33 JST`
- **Part**: `48 / 56` (**393** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 047](part-047.md) · [Part 049 →](part-049.md)

## `bloxd.io` · `bundles/bloxd.io/main.css` (wp3j0a.a13381cf → fo1voe.f743fbcf · continued)

- **File**: `bundles/bloxd.io/main.css` (2564 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1)

#### 143. `bundles/bloxd.io/main.css` (Changed code · before: `L984-L986` → after: `L2084-L2087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2084-L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2084-L2087) · [Before (L984-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L984-L986)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .MinimalAccountButton .HomeHeaderLoginBadge {
-   background-color: #ffb914;
-   right: -.25rem
+ @media(max-width:1100px) {
+   html {
+     font-size: 12px
+   }
```

#### 144. `bundles/bloxd.io/main.css` (Changed code · before: `L989-L991` → after: `L2090-L2093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2090-L2093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2090-L2093) · [Before (L989-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L989-L991)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .LoginButtonContainer .LoginButton {
-   height: 3.5rem;
-   overflow: visible
+ @media(max-height:440px), (max-width:925px) {
+   html {
+     font-size: 10px
+   }
```

#### 145. `bundles/bloxd.io/main.css` (Changed code · before: `L994-L998` → after: `L2096-L2098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2096-L2098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2096-L2098) · [Before (L994-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L994-L998)

```diff
- @media(pointer:coarse) {
-   .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .LoginButtonContainer .LoginButton:before {
-     content: "";
-     inset: min(0px, (100% - 44px)/2) max(.5rem/-2, min(0px, (100% - 44px)/2));
-     position: absolute
+ @media(max-height:430px), (max-width:800px) {
+   html {
+     font-size: 9px
```

#### 146. `bundles/bloxd.io/main.css` (Changed code · before: `L1002-L1007` → after: `L2102-L2105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2102-L2105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2102-L2105) · [Before (L1002-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1002-L1007)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .HomeHeaderAccountIdentity {
-   align-items: stretch;
-   display: flex;
-   flex: 1 1;
-   gap: .5rem;
-   min-width: 0
+ @media(max-height:400px), (max-width:736px) {
+   html {
+     font-size: 8px
+   }
```

#### 147. `bundles/bloxd.io/main.css` (Changed code · before: `L1010-L1011` → after: `L2108-L2111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2108-L2111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2108-L2111) · [Before (L1010-L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1010-L1011)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .HomeHeaderAccountIdentity>:not(.PlayerNamePreview) {
-   flex-shrink: 0
+ @media(max-width:667px) {
+   html {
+     font-size: 7px
+   }
```

#### 148. `bundles/bloxd.io/main.css` (Changed code · before: `L1014-L1016` → after: `L2114-L2117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2114-L2117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2114-L2117) · [Before (L1014-L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1014-L1016)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .HomeHeaderAccountIdentity:has(>.LogoLoader:first-child) .PlayerNamePreview {
-   animation: PlayerNamePreviewShowAnyway 0s 1s forwards;
-   visibility: hidden
+ @media(orientation:portrait) {
+   html {
+     font-size: 16px
+   }
```

#### 149. `bundles/bloxd.io/main.css` (Changed code · before: `L1019-L1039` → after: `L2120-L2123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2120-L2123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2120-L2123) · [Before (L1019-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1019-L1039)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .PlayerNamePreviewLoader {
-   align-items: center;
-   background: none;
-   background-color: rgba(57, 73, 128, .45);
-   border: none;
-   border-radius: 0;
-   box-sizing: content-box;
-   color: inherit;
-   color: #cef3ff;
-   cursor: pointer;
-   display: flex;
-   flex: none;
-   font: inherit;
-   font-size: 1.6rem;
-   letter-spacing: inherit;
-   line-height: inherit;
- ... (5 more removed lines; see GitHub link above)
+ @media(orientation:portrait)and (max-width:900px) {
+   html {
+     font-size: 14px
+   }
```

#### 150. `bundles/bloxd.io/main.css` (Changed code · before: `L1042-L1044` → after: `L2126-L2129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2126-L2129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2126-L2129) · [Before (L1042-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1042-L1044)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .PlayerNamePreviewLoader[data-pressing] {
-   box-shadow: inset 0 0 0 2px #ffb914;
-   transition: none
+ @media(orientation:portrait)and (max-width:600px) {
+   html {
+     font-size: 13px
+   }
```

#### 151. `bundles/bloxd.io/main.css` (Changed code · before: `L1047-L1068` → after: `L2132-L2135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2132-L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2132-L2135) · [Before (L1047-L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1047-L1068)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .PlayerNamePreview {
-   align-items: center;
-   background: none;
-   background-color: rgba(57, 73, 128, .45);
-   border: none;
-   border-radius: 0;
-   box-sizing: content-box;
-   color: inherit;
-   color: #cef3ff;
-   cursor: pointer;
-   display: flex;
-   font: inherit;
-   font-size: 1.6rem;
-   letter-spacing: inherit;
-   line-height: inherit;
-   margin: 0;
- ... (6 more removed lines; see GitHub link above)
+ @media(orientation:portrait)and (max-width:450px) {
+   html {
+     font-size: 12px
+   }
```

#### 152. `bundles/bloxd.io/main.css` (Changed code · before: `L1071-L1075` → after: `L2138-L2140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2138-L2140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2138-L2140) · [Before (L1071-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1071-L1075)

```diff
- @media(pointer:coarse) {
-   .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .PlayerNamePreview:before {
-     content: "";
-     inset: min(0px, (100% - 44px)/2) max(.5rem/-2, min(0px, (100% - 44px)/2));
-     position: absolute
+ @media(orientation:portrait)and (max-width:360px) {
+   html {
+     font-size: 11px
```

#### 153. `bundles/bloxd.io/main.css` (Changed code · before: `L1079-L1080` → after: `L2144-L2145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2144-L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2144-L2145) · [Before (L1079-L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1079-L1080)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .PlayerNamePreview>.TextFromServer {
-   overflow: hidden
+ code {
+   font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace
```

#### 154. `bundles/bloxd.io/main.css` (Changed code · before: `L1083-L1085` → after: `L2148-L2150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2148-L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2148-L2150) · [Before (L1083-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1083-L1085)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .PlayerNamePreview.PlayerNamePreviewLoading {
-   background-color: transparent;
-   pointer-events: none
+ input,
+ input[type=number] {
+   font-family: var(--root-font-family)
```

#### 155. `bundles/bloxd.io/main.css` (Changed code · before: `L1088-L1089` → after: `L2153-L2161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2153-L2161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2153-L2161) · [Before (L1088-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1088-L1089)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .PlayerNamePreview.PlayerNamePreviewWithRanks {
-   padding-right: .3em
+ input[type=number] {
+   background: #303a59;
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   color: #fff;
+   font-size: 1.2rem;
+   font-weight: 600;
+   outline: none;
+   text-align: center
```

#### 156. `bundles/bloxd.io/main.css` (Changed code · before: `L1092-L1093` → after: `L2164-L2165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2164-L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2164-L2165) · [Before (L1092-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1092-L1093)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .PlayerNamePreview.PlayerNamePreviewNoRanks {
-   padding: 0 .3em
+ input[type=number]:focus {
+   border-color: #ffb914
```

#### 157. `bundles/bloxd.io/main.css` (Changed code · before: `L1096-L1098` → after: `L2168-L2170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2168-L2170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2168-L2170) · [Before (L1096-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1096-L1098)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .PlayerNamePreview[data-pressing] {
-   box-shadow: inset 0 0 0 2px #ffb914;
-   transition: none
+ a {
+   color: inherit;
+   text-decoration: none
```

#### 158. `bundles/bloxd.io/main.css` (Changed code · before: `L1101-L1103` → after: `L2173-L2182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2173-L2182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2173-L2182) · [Before (L1101-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1101-L1103)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .PlayerNamePreview .TextFromServerEntityNameWithTags {
-   gap: 0;
-   height: 3.5rem
+ .VisuallyHidden {
+   clip: rect(0, 0, 0, 0);
+   border: 0;
+   height: 1px;
+   margin: -1px;
+   overflow: hidden;
+   padding: 0;
+   position: absolute;
+   white-space: nowrap;
+   width: 1px
```

#### 159. `bundles/bloxd.io/main.css` (Changed code · before: `L1106-L1114` → after: `L2185-L2188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2185-L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2185-L2188) · [Before (L1106-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1106-L1114)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .PlayerNamePreview .TextFromServerEntityNameWithTags .TextFromServerEntityNameTag {
-   align-items: center;
-   align-self: stretch;
-   display: flex;
-   font-size: 2.5rem;
-   justify-content: center;
-   line-height: 2.5rem;
-   padding: 0 .4rem;
-   vertical-align: center
+ ::-webkit-scrollbar-track {
+   background-color: inherit;
+   border-radius: 0;
+   box-shadow: inset 0 0 6px rgba(0, 0, 0, .3)
```

#### 160. `bundles/bloxd.io/main.css` (Changed code · before: `L1117-L1121` → after: `L2191-L2195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2191-L2195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2191-L2195) · [Before (L1117-L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1117-L1121)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .PlayerNamePreview .TextFromServerEntityNameWithTags .TextFromServerEntityNameTag .TextFromServer {
-   align-items: center;
-   display: flex;
-   justify-content: center;
-   line-height: 2.5rem
+ ::-webkit-scrollbar {
+   background-color: inherit;
+   border-radius: 0;
+   max-width: 12px;
+   width: 1.5vmin
```

#### 161. `bundles/bloxd.io/main.css` (Changed code · before: `L1124-L1125` → after: `L2198-L2201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2198-L2201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2198-L2201) · [Before (L1124-L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1124-L1125)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .PlayerNamePreview .TextFromServerEntityNameWithTags .TextFromServerEntityNameTag .TextFromServer .svg-inline--fa {
-   color: #fff !important
+ ::-webkit-scrollbar-thumb {
+   background-color: hsla(0, 0%, 95%, .3);
+   border-radius: 0;
+   box-shadow: inset 0 0 6px rgba(0, 0, 0, .3)
```

#### 162. `bundles/bloxd.io/main.css` (Changed code · before: `L1128-L1129` → after: `L2204-L2208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2204-L2208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2204-L2208) · [Before (L1128-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1128-L1129)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .PlayerNamePreview .TextFromServerEntityNameWithTags .TextFromServerEntityNameTag-developer {
-   background-color: #a4a4a4
+ .FullyFancyText {
+   -webkit-text-stroke: calc(var(--fullyFancyTextStrokeWeight)*2) #303a59;
+   font-weight: 900;
+   paint-order: stroke fill;
+   text-shadow: -1px -1px 0 #303a59, 1px -1px 0 #303a59, -1px 1px 0 #303a59, 1px 1px 0 #303a59, 0 3px 2px #303a59
```

#### 163. `bundles/bloxd.io/main.css` (Changed code · before: `L1132-L1133` → after: `L2211-L2213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2211-L2213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2211-L2213) · [Before (L1132-L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1132-L1133)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .PlayerNamePreview .TextFromServerEntityNameWithTags .TextFromServerEntityNameTag-admin {
-   background-color: #cfcfcf
+ .SmallTextBold {
+   font-weight: 700;
+   text-shadow: -1px -1px 0 #303a59, -1px 0 0 #303a59, -1px 1px 0 #303a59, 0 -1px 0 #303a59, 0 0 0 #303a59, 0 1px 0 #303a59, 1px -1px 0 #303a59, 1px 0 0 #303a59, 1px 1px 0 #303a59
```

#### 164. `bundles/bloxd.io/main.css` (Changed code · before: `L1136-L1137` → after: `L2216-L2218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2216-L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2216-L2218) · [Before (L1136-L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1136-L1137)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .PlayerNamePreview .TextFromServerEntityNameWithTags .TextFromServerEntityNameTag-super {
-   background-color: #ffb914
+ .SmallTextBold .svg-inline--fa,
+ .SmallTextBold.svg-inline--fa {
+   paint-order: stroke fill
```

#### 165. `bundles/bloxd.io/main.css` (Changed code · before: `L1140-L1141` → after: `L2221-L2226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2221-L2226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2221-L2226) · [Before (L1140-L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1140-L1141)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .PlayerNamePreview .TextFromServerEntityNameWithTags .TextFromServerEntityNameTag-youtuber {
-   background-color: #f03
+ .SmallTextBold .svg-inline--fa path:only-of-type,
+ .SmallTextBold.svg-inline--fa path:only-of-type {
+   stroke: #303a59;
+   vector-effect: non-scaling-stroke;
+   stroke-width: 2px;
+   stroke-linejoin: round
```

#### 166. `bundles/bloxd.io/main.css` (Changed code · before: `L1144-L1145` → after: `L2229-L2231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2229-L2231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2229-L2231) · [Before (L1144-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1144-L1145)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .PlayerNamePreview .TextFromServerEntityNameWithTags .TextFromServerEntityNameTag-creatorLevel1 {
-   background-color: #ff7a30
+ .SmallTextLight {
+   font-weight: 600;
+   text-shadow: -1px -1px 0 #303a59, -1px 0 0 #303a59, -1px 1px 0 #303a59, 0 -1px 0 #303a59, 0 0 0 #303a59, 0 1px 0 #303a59, 1px -1px 0 #303a59, 1px 0 0 #303a59, 1px 1px 0 #303a59
```

#### 167. `bundles/bloxd.io/main.css` (Changed code · before: `L1148-L1149` → after: `L2234-L2236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2234-L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2234-L2236) · [Before (L1148-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1148-L1149)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .PlayerNamePreview .TextFromServerEntityNameWithTags .TextFromServerEntityNameTag-creatorLevel2 {
-   background-color: #ff307a
+ .SmallTextLight .svg-inline--fa,
+ .SmallTextLight.svg-inline--fa {
+   paint-order: stroke fill
```

#### 168. `bundles/bloxd.io/main.css` (Changed code · before: `L1152-L1153` → after: `L2239-L2244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2239-L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2239-L2244) · [Before (L1152-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1152-L1153)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .PlayerNamePreview .TextFromServerEntityNameWithTags .TextFromServerEntityNameTag-creatorLevel3 {
-   background-color: #ce63ff
+ .SmallTextLight .svg-inline--fa path:only-of-type,
+ .SmallTextLight.svg-inline--fa path:only-of-type {
+   stroke: #303a59;
+   vector-effect: non-scaling-stroke;
+   stroke-width: 2px;
+   stroke-linejoin: round
```

#### 169. `bundles/bloxd.io/main.css` (Changed code · before: `L1156-L1157` → after: `L2247-L2248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2247-L2248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2247-L2248) · [Before (L1156-L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1156-L1157)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .PlayerNamePreview .TextFromServerEntityNameWithTags .TextFromServerEntityName {
-   margin-left: .4rem
+ .ScaleOnHover {
+   transition: transform .2s
```

#### 170. `bundles/bloxd.io/main.css` (Changed code · before: `L1160-L1166` → after: `L2251-L2252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2251-L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2251-L2252) · [Before (L1160-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1160-L1166)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderRightContainer {
-   align-items: stretch;
-   display: flex;
-   gap: .5rem;
-   height: 3.5rem;
-   justify-content: flex-end;
-   width: calc(50% - var(--logo-size)/2)
+ .ScaleOnHover:hover {
+   transform: scale(1.1)
```

#### 171. `bundles/bloxd.io/main.css` (Changed code · before: `L1169-L1173` → after: `L2255-L2257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2255-L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2255-L2257) · [Before (L1169-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1169-L1173)

```diff
- @media(pointer:coarse)and (orientation:landscape)and (min-width:800px) {
-   .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderRightContainer {
-     --home-link-gap: max(0.5rem, 44px - 3rem);
-     gap: var(--home-link-gap)
-   }
+ .Menu {
+   align-items: stretch;
+   display: flex
```

#### 172. `bundles/bloxd.io/main.css` (Changed code · before: `L1176` → after: `L2260-L2263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2260-L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2260-L2263) · [Before (L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1176)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderRightContainer .HomeLinkButtons {
+ .Menu .MenuSideBar {
+   background-color: #22283b;
+   display: flex;
+   flex-direction: column;
```

#### 173. `bundles/bloxd.io/main.css` (Changed code · before: `L1178` → after: `L2265-L2271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2265-L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2265-L2271) · [Before (L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1178)

```diff
-   gap: var(--home-link-gap, .5rem)
+   font-size: 1.4rem;
+   justify-content: stretch;
+   max-width: calc(13rem + var(--notchLeft));
+   overflow-y: auto;
+   padding-bottom: 4rem;
+   padding-left: var(--notchLeft);
+   padding-top: 4rem
```

#### 174. `bundles/bloxd.io/main.css` (Changed code · before: `L1181-L1183` → after: `L2274-L2279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2274-L2279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2274-L2279) · [Before (L1181-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1181-L1183)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderRightContainer .HomeLinkButtons .HomeLinkButton {
-   flex: 0 0 3rem;
-   position: relative
+ .Menu .MenuSideBar .MenuSideBarBody {
+   box-sizing: border-box;
+   display: flex;
+   flex-direction: column;
+   flex-grow: 1;
+   gap: 1rem
```

#### 175. `bundles/bloxd.io/main.css` (Changed code · before: `L1186-L1191` → after: `L2282-L2285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2282-L2285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2282-L2285) · [Before (L1186-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1186-L1191)

```diff
- @media(pointer:coarse) {
-   .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderRightContainer .HomeLinkButtons .HomeLinkButton:before {
-     content: "";
-     inset: min(0px, (100% - 44px)/2) max(var(--home-link-gap, .5rem)/-2, min(0px, (100% - 44px)/2));
-     position: absolute
-   }
+ .Menu .MenuSideBar .MenuSideBarBody .MenuSideBarSection {
+   display: flex;
+   flex-direction: column;
+   gap: .5rem
```

#### 176. `bundles/bloxd.io/main.css` (Changed code · before: `L1194-L1195` → after: `L2288-L2298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2288-L2298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2288-L2298) · [Before (L1194-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1194-L1195)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderRightContainer .HomeHeaderRight {
-   align-items: center;
+ .Menu .MenuSideBar .MenuSideBarBody .MenuSideBarSection .MenuSideBarSectionTitle {
+   color: #838383;
+   font-size: .85em;
+   font-weight: 800;
+   padding: 0 1rem;
+   text-transform: uppercase
+ }
+ 
+ .Menu .MenuSideBar .MenuSideBarBody .MenuSideBarBodyTab {
+   border-right: .3rem solid #cfcfcf;
+   cursor: pointer;
```

#### 177. `bundles/bloxd.io/main.css` (Changed code · before: `L1197-L1200` → after: `L2300-L2302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2300-L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2300-L2302) · [Before (L1197-L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1197-L1200)

```diff
-   justify-content: flex-end;
-   padding-left: .5rem;
-   padding-right: .75rem;
-   position: relative
+   font-weight: 600;
+   gap: .5rem;
+   padding: .2rem 1rem
```

#### 178. `bundles/bloxd.io/main.css` (Changed code · before: `L1203-L1205` → after: `L2305-L2310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2305-L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2305-L2310) · [Before (L1203-L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1203-L1205)

```diff
- @media(pointer:coarse)and (orientation:landscape)and (min-width:800px) {
-   .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderRightContainer .HomeHeaderRight {
-     padding-right: max(.75rem, (44px - 2.6rem)/2 - var(--home-inner-padding-right, 0px))
+ @media(pointer:coarse) {
+   .Menu .MenuSideBar .MenuSideBarBody .MenuSideBarBodyTab {
+     align-items: center;
+     box-sizing: border-box;
+     min-height: 44px;
+     min-width: 44px
```

#### 179. `bundles/bloxd.io/main.css` (Changed code · before: `L1209-L1210` → after: `L2314-L2318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2314-L2318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2314-L2318) · [Before (L1209-L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1209-L1210)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderRightContainer .HomeHeaderRight.LinkIconList {
-   gap: 1rem
+ @media(hover:hover) {
+   .Menu .MenuSideBar .MenuSideBarBody .MenuSideBarBodyTab:hover {
+     background-color: #3c4b68;
+     border-right: .3rem solid #b6830e
+   }
```

#### 180. `bundles/bloxd.io/main.css` (Changed code · before: `L1213-L1218` → after: `L2321-L2323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2321-L2323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2321-L2323) · [Before (L1213-L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1213-L1218)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderRightContainer .HomeHeaderRight.LinkIconList img {
-   -ms-interpolation-mode: nearest-neighbor;
-   image-rendering: optimizeSpeed;
-   image-rendering: -o-crisp-edges;
-   image-rendering: pixelated;
-   image-rendering: optimize-contrast
+ .Menu .MenuSideBar .MenuSideBarBody .MenuSideBarBodyTab.pad-focused {
+   background-color: #3c4b68;
+   border-right: .3rem solid #b6830e
```

#### 181. `bundles/bloxd.io/main.css` (Changed code · before: `L1221-L1223` → after: `L2326-L2329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2326-L2329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2326-L2329) · [Before (L1221-L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1221-L1223)

```diff
- @keyframes PlayerNamePreviewShowAnyway {
-   to {
-     visibility: visible
+ @media(hover:none) {
+   .Menu .MenuSideBar .MenuSideBarBody .MenuSideBarBodyTab:active {
+     background-color: #3c4b68;
+     border-right: .3rem solid #b6830e
```

#### 182. `bundles/bloxd.io/main.css` (Changed code · before: `L1227-L1240` → after: `L2333-L2335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2333-L2335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2333-L2335) · [Before (L1227-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1227-L1240)

```diff
- .tooltip-container {
-   --tooltipBackground: #fff;
-   --tooltipBorder: silver;
-   --tooltipColor: #000;
-   background-color: var(--tooltipBackground);
-   border: 1px solid var(--tooltipBorder);
-   border-radius: 3px;
-   box-shadow: 0 2px 4px rgba(0, 0, 0, .18);
-   color: var(--tooltipColor);
-   display: flex;
-   flex-direction: column;
-   padding: .4rem;
-   transition: opacity .3s;
-   z-index: 9999
+ .Menu .MenuSideBar .MenuSideBarBody .MenuSideBarBodyTab:focus-visible {
+   outline: 2px solid #ffb914;
+   outline-offset: -2px
```

#### 183. `bundles/bloxd.io/main.css` (Changed code · before: `L1243-L1245` → after: `L2338-L2341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2338-L2341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2338-L2341) · [Before (L1243-L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1243-L1245)

```diff
- .tooltip-arrow,
- .tooltip-container[data-popper-interactive=false] {
-   pointer-events: none
+ .Menu .MenuSideBar .MenuSideBarBody .MenuSideBarBodyTab.ActiveMenuSideBarBodyTab {
+   background-color: rgba(255, 185, 20, .15);
+   border-right: .3rem solid #ffb914;
+   color: #ffb914
```

#### 184. `bundles/bloxd.io/main.css` (Changed code · before: `L1248-L1251` → after: `L2344-L2346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2344-L2346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2344-L2346) · [Before (L1248-L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1248-L1251)

```diff
- .tooltip-arrow {
-   height: 1rem;
-   position: absolute;
-   width: 1rem
+ .Menu .MenuSideBar .MenuSideBarBody .MenuSideBarBodyTab .MenuSideBarBodyTabIcon .svg-inline--fa {
+   font-size: .95em;
+   opacity: .5
```

#### 185. `bundles/bloxd.io/main.css` (Changed code · before: `L1254-L1261` → after: `L2349-L2350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2349-L2350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2349-L2350) · [Before (L1254-L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1254-L1261)

```diff
- .tooltip-arrow:after,
- .tooltip-arrow:before {
-   border-style: solid;
-   content: "";
-   display: block;
-   height: 0;
-   margin: auto;
-   width: 0
+ .Menu .MenuSideBar .MenuSideBarBody .MenuSideBarBodyTab.MenuSideBarLink {
+   align-items: center
```

#### 186. `bundles/bloxd.io/main.css` (Changed code · before: `L1264-L1265` → after: `L2353-L2356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2353-L2356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2353-L2356) · [Before (L1264-L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1264-L1265)

```diff
- .tooltip-arrow:after {
-   position: absolute
+ .Menu .MenuSideBar .MenuSideBarBody .MenuSideBarBodyTab.MenuSideBarLink .MenuSideBarLinkArrow {
+   color: #cfcfcf;
+   font-size: .8em;
+   margin-left: auto
```

#### 187. `bundles/bloxd.io/main.css` (Changed code · before: `L1268-L1271` → after: `L2359-L2363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2359-L2363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2359-L2363) · [Before (L1268-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1268-L1271)

```diff
- .tooltip-container[data-popper-placement*=bottom] .tooltip-arrow {
-   left: 0;
-   margin-top: -.4rem;
-   top: 0
+ .Menu .MenuBody {
+   flex-grow: 1;
+   min-width: 0;
+   padding-bottom: var(--notchBottom);
+   position: relative
```

#### 188. `bundles/bloxd.io/main.css` (Changed code · before: `L1274-L1279` → after: `L2366-L2373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2366-L2373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2366-L2373) · [Before (L1274-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1274-L1279)

```diff
- .tooltip-container[data-popper-placement*=bottom] .tooltip-arrow:before {
-   border-color: transparent transparent var(--tooltipBorder) transparent;
-   border-width: 0 .5rem .4rem;
-   position: absolute;
-   top: -1px
- }
+ @keyframes shiny-button {
+   25% {
+     opacity: 1;
+     transform: translate(-28%, -28%) rotate(30deg);
+     transition-duration: .7s, .7s, .15s;
+     transition-property: transform, opacity;
+     transition-timing-function: ease
+   }
```

#### 189. `bundles/bloxd.io/main.css` (Changed code · before: `L1281-L1283` → after: `L2375-L2385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2375-L2385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2375-L2385) · [Before (L1281-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1281-L1283)

```diff
- .tooltip-container[data-popper-placement*=bottom] .tooltip-arrow:after {
-   border-color: transparent transparent var(--tooltipBackground) transparent;
-   border-width: 0 .5rem .4rem
+   50% {
+     opacity: 0;
+     transform: translate(-28%, -28%) rotate(30deg);
+     transition-property: transform, opacity
+   }
+ 
+   to {
+     opacity: 0;
+     transform: translate(-28%, -28%) rotate(30deg);
+     transition-property: transform, opacity
+   }
```

#### 190. `bundles/bloxd.io/main.css` (Changed code · before: `L1286-L1289` → after: `L2388-L2390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2388-L2390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2388-L2390) · [Before (L1286-L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1286-L1289)

```diff
- .tooltip-container[data-popper-placement*=top] .tooltip-arrow {
-   bottom: 0;
-   left: 0;
-   margin-bottom: -1rem
+ .ExitButton {
+   -webkit-text-stroke: 2px #fff;
+   font-size: 1.5rem
```

#### 191. `bundles/bloxd.io/main.css` (Changed code · before: `L1292-L1296` → after: `L2393-L2394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2393-L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2393-L2394) · [Before (L1292-L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1292-L1296)

```diff
- .tooltip-container[data-popper-placement*=top] .tooltip-arrow:before {
-   border-color: var(--tooltipBorder) transparent transparent transparent;
-   border-width: .4rem .5rem 0;
-   position: absolute;
-   top: 1px
+ .ExitButton .NewButton .ButtonBody {
+   padding: 0
```

#### 192. `bundles/bloxd.io/main.css` (Changed code · before: `L1299-L1301` → after: `L2397-L2399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2397-L2399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2397-L2399) · [Before (L1299-L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1299-L1301)

```diff
- .tooltip-container[data-popper-placement*=top] .tooltip-arrow:after {
-   border-color: var(--tooltipBackground) transparent transparent transparent;
-   border-width: .4rem .5rem 0
+ .ExitButton .NewButton .ButtonBody .ExitButtonInner {
+   padding: .15em .45em;
+   text-shadow: -2px -2px 0 #303a59, -2px -1px 0 #303a59, -2px 0 0 #303a59, -2px 1px 0 #303a59, -2px 2px 0 #303a59, -1px -2px 0 #303a59, -1px -1px 0 #303a59, -1px 0 0 #303a59, -1px 1px 0 #303a59, -1px 2px 0 #303a59, 0 -2px 0 #303a59, 0 -1px 0 #303a59, 0 0 0 #303a59, 0 1px 0 #303a5 … [truncated]
```

#### 193. `bundles/bloxd.io/main.css` (Changed code · before: `L1304-L1306` → after: `L2402-L2404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2402-L2404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2402-L2404) · [Before (L1304-L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1304-L1306)

```diff
- .tooltip-container[data-popper-placement*=right] .tooltip-arrow {
-   left: 0;
-   margin-left: -.7rem
+ .ExitButton .NewButton .ButtonBody .ExitButtonInner .svg-inline--fa,
+ .ExitButton .NewButton .ButtonBody .ExitButtonInner.svg-inline--fa {
+   paint-order: stroke fill
```

#### 194. `bundles/bloxd.io/main.css` (Changed code · before: `L1309-L1311` → after: `L2407-L2412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2407-L2412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2407-L2412) · [Before (L1309-L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1309-L1311)

```diff
- .tooltip-container[data-popper-placement*=right] .tooltip-arrow:before {
-   border-color: transparent var(--tooltipBorder) transparent transparent;
-   border-width: .5rem .4rem .5rem 0
+ .ExitButton .NewButton .ButtonBody .ExitButtonInner .svg-inline--fa path:only-of-type,
+ .ExitButton .NewButton .ButtonBody .ExitButtonInner.svg-inline--fa path:only-of-type {
+   stroke: #303a59;
+   vector-effect: non-scaling-stroke;
+   stroke-width: 4px;
+   stroke-linejoin: round
```

#### 195. `bundles/bloxd.io/main.css` (Changed code · before: `L1314-L1318` → after: `L2415-L2419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2415-L2419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2415-L2419) · [Before (L1314-L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1314-L1318)

```diff
- .tooltip-container[data-popper-placement*=right] .tooltip-arrow:after {
-   border-color: transparent var(--tooltipBackground) transparent transparent;
-   border-width: .5rem .4rem .5rem 0;
-   left: 6px;
-   top: 0
+ .GoldButton {
+   --buttonNormalColour: #ffb914;
+   --buttonHoverColour: #fcd373;
+   --buttonTopColour: #fcd373;
+   --buttonBottomColour: #b6830e
```

#### 196. `bundles/bloxd.io/main.css` (Changed code · before: `L1321-L1323` → after: `L2422-L2426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2422-L2426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2422-L2426) · [Before (L1321-L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1321-L1323)

```diff
- .tooltip-container[data-popper-placement*=left] .tooltip-arrow {
-   margin-right: -.7rem;
-   right: 0
+ .DarkBlueButton {
+   --buttonNormalColour: #3c4b68;
+   --buttonHoverColour: #394980;
+   --buttonTopColour: #394980;
+   --buttonBottomColour: #22283b
```

#### 197. `bundles/bloxd.io/main.css` (Changed code · before: `L1326-L1328` → after: `L2429-L2433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2429-L2433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2429-L2433) · [Before (L1326-L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1326-L1328)

```diff
- .tooltip-container[data-popper-placement*=left] .tooltip-arrow:before {
-   border-color: transparent transparent transparent var(--tooltipBorder);
-   border-width: .5rem 0 .5rem .4em
+ .BlueButton {
+   --buttonNormalColour: #2e80ee;
+   --buttonHoverColour: #4f94f1;
+   --buttonTopColour: #4f94f1;
+   --buttonBottomColour: #2671d7
```

#### 198. `bundles/bloxd.io/main.css` (Changed code · before: `L1331-L1335` → after: `L2436-L2440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2436-L2440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2436-L2440) · [Before (L1331-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1331-L1335)

```diff
- .tooltip-container[data-popper-placement*=left] .tooltip-arrow:after {
-   border-color: transparent transparent transparent var(--tooltipBackground);
-   border-width: .5rem 0 .5rem .4em;
-   left: 3px;
-   top: 0
+ .PurpleButton {
+   --buttonNormalColour: #9b39d5;
+   --buttonHoverColour: #ad50e3;
+   --buttonTopColour: #ad50e3;
+   --buttonBottomColour: #6d2e91
```

#### 199. `bundles/bloxd.io/main.css` (Changed code · before: `L1338-L1340` → after: `L2443-L2447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2443-L2447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2443-L2447) · [Before (L1338-L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1338-L1340)

```diff
- .TurnstileWidgetHeader {
-   font-size: 1.5rem;
-   margin-bottom: 1rem
+ .GreenButton {
+   --buttonNormalColour: #1dd06d;
+   --buttonHoverColour: #36e785;
+   --buttonTopColour: #36e785;
+   --buttonBottomColour: #07940e
```

#### 200. `bundles/bloxd.io/main.css` (Changed code · before: `L1343-L1345` → after: `L2450-L2454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2450-L2454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2450-L2454) · [Before (L1343-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1343-L1345)

```diff
- .TurnstileWidgetBody {
-   position: relative;
-   z-index: 23
+ .RedButton {
+   --buttonNormalColour: #e34f4f;
+   --buttonHoverColour: #fc6464;
+   --buttonTopColour: #fc6464;
+   --buttonBottomColour: #cc1414
```

#### 201. `bundles/bloxd.io/main.css` (Changed code · before: `L1348-L1353` → after: `L2457-L2459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2457-L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2457-L2459) · [Before (L1348-L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1348-L1353)

```diff
- .TurnstileWidgetFooter {
-   align-content: center;
-   display: flex;
-   font-size: 1.25rem;
-   justify-content: center;
-   padding-top: 1rem
+ .RainbowButton {
+   --buttonTopColour: hsla(0, 0%, 100%, .25);
+   --buttonBottomColour: rgba(0, 0, 0, .2)
```

#### 202. `bundles/bloxd.io/main.css` (Changed code · before: `L1356-L1363` → after: `L2462-L2469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2462-L2469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2462-L2469) · [Before (L1356-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1356-L1363)

```diff
- .MiddleScreenPopupBackground {
-   align-items: center;
-   display: flex;
-   height: 100vh;
-   height: 100dvh;
-   justify-content: center;
-   left: 0;
-   position: fixed;
+ .RainbowButton:before {
+   animation: rainbowShimmer 6s linear infinite;
+   background: linear-gradient(90deg, #ff6b9d, #ffa64d, gold, #7dd87d, #6bb5ff, #c084fc, #ff6b9d) 0 0/22.22222% 100%;
+   bottom: 0;
+   content: "";
+   left: -800%;
+   pointer-events: none;
+   position: absolute;
```

#### 203. `bundles/bloxd.io/main.css` (Changed code · before: `L1365-L1367` → after: `L2471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2471) · [Before (L1365-L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1365-L1367)

```diff
-   touch-action: pinch-zoom;
-   width: 100vw;
-   z-index: 1
+   width: 900%
```

#### 204. `bundles/bloxd.io/main.css` (Changed code · before: `L1370-L1371` → after: `L2474-L2477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2474-L2477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2474-L2477) · [Before (L1370-L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1370-L1371)

```diff
- .MiddleScreenPopupBackground.ShowBackground {
-   background-color: rgba(26, 31, 46, .6)
+ @media(hover:hover) {
+   .RainbowButton:hover {
+     filter: brightness(1.15)
+   }
```

#### 205. `bundles/bloxd.io/main.css` (Changed code · before: `L1374-L1376` → after: `L2480-L2481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2480-L2481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2480-L2481) · [Before (L1374-L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1374-L1376)

```diff
- .MiddleScreenPopupBackground.AboveKeyboard {
-   height: var(--visible-height);
-   top: var(--visible-top)
+ .RainbowButton.pad-focused {
+   filter: brightness(1.15)
```

#### 206. `bundles/bloxd.io/main.css` (Changed code · before: `L1379-L1382` → after: `L2484-L2487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2484-L2487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2484-L2487) · [Before (L1379-L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1379-L1382)

```diff
- .MiddleScreenPopupBackground.AboveKeyboard .MiddleScreenPopup {
-   box-sizing: border-box;
-   max-height: 100%;
-   overflow-y: auto
+ @media(hover:none) {
+   .RainbowButton:active {
+     filter: brightness(1.15)
+   }
```

#### 207. `bundles/bloxd.io/main.css` (Changed code · before: `L1385-L1394` → after: `L2490-L2491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2490-L2491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2490-L2491) · [Before (L1385-L1394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1385-L1394)

```diff
- .MiddleScreenPopupBackground .MiddleScreenPopup {
-   background-color: #303a59;
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
-   color: #fff;
-   max-width: 80vw;
-   padding: 1.5rem;
-   text-align: center;
-   z-index: 1
+ .RainbowButton.DisabledNewButton {
+   background: #a4a4a4
```

#### 208. `bundles/bloxd.io/main.css` (Changed code · before: `L1397-L1400` → after: `L2494-L2496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2494-L2496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2494-L2496) · [Before (L1397-L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1397-L1400)

```diff
- @keyframes rotate {
-   0% {
-     transform: rotate(0deg)
-   }
+ .RainbowButton.DisabledNewButton:before {
+   content: none
+ }
```

#### 209. `bundles/bloxd.io/main.css` (Changed code · before: `L1402-L1404` → after: `L2498-L2502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2498-L2502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2498-L2502) · [Before (L1402-L1404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1402-L1404)

```diff
-   to {
-     transform: rotate(1turn)
-   }
+ .DisabledNewButton {
+   --buttonNormalColour: #a4a4a4;
+   --buttonHoverColour: #a4a4a4;
+   --buttonTopColour: #cfcfcf;
+   --buttonBottomColour: #838383
```

#### 210. `bundles/bloxd.io/main.css` (Changed code · before: `L1407-L1411` → after: `L2505-L2511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2505-L2511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2505-L2511) · [Before (L1407-L1411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1407-L1411)

```diff
- .LogoLoader {
-   --border-size: min(0.8rem, 0.15em);
-   aspect-ratio: 1;
-   box-sizing: border-box;
-   height: 1em;
+ .NewButton {
+   align-items: center;
+   background-color: var(--buttonNormalColour);
+   cursor: pointer;
+   display: flex;
+   justify-content: center;
+   overflow: hidden;
```

#### 211. `bundles/bloxd.io/main.css` (Changed code · before: `L1413` → after: `L2513-L2516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2513-L2516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2513-L2516) · [Before (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1413)

```diff
-   width: 1em
+   text-align: center;
+   text-shadow: -1px -1px 0 #303a59, -1px 0 0 #303a59, -1px 1px 0 #303a59, 0 -1px 0 #303a59, 0 0 0 #303a59, 0 1px 0 #303a59, 1px -1px 0 #303a59, 1px 0 0 #303a59, 1px 1px 0 #303a59;
+   transition: transform .2s;
+   z-index: 1
```

#### 212. `bundles/bloxd.io/main.css` (Changed code · before: `L1416-L1418` → after: `L2519-L2521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2519-L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2519-L2521) · [Before (L1416-L1418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1416-L1418)

```diff
- .LogoLoader.LogoLoaderPrimary {
-   --border-color-1: #4f94f1;
-   --border-color-2: #f2f2f2
+ .NewButton .svg-inline--fa,
+ .NewButton.svg-inline--fa {
+   paint-order: stroke fill
```

#### 213. `bundles/bloxd.io/main.css` (Changed code · before: `L1421-L1423` → after: `L2524-L2529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2524-L2529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2524-L2529) · [Before (L1421-L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1421-L1423)

```diff
- .LogoLoader.LogoLoaderSecondary {
-   --border-color-1: #f2f2f2;
-   --border-color-2: #a4a4a4
+ .NewButton .svg-inline--fa path:only-of-type,
+ .NewButton.svg-inline--fa path:only-of-type {
+   stroke: #303a59;
+   vector-effect: non-scaling-stroke;
+   stroke-width: 2px;
+   stroke-linejoin: round
```

#### 214. `bundles/bloxd.io/main.css` (Changed code · before: `L1426-L1428` → after: `L2532-L2535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2532-L2535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2532-L2535) · [Before (L1426-L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1426-L1428)

```diff
- .LogoLoader.LogoLoaderSuccess {
-   --border-color-1: #4f94f1;
-   --border-color-2: #4f94f1
+ .NewButton {
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32)
```

#### 215. `bundles/bloxd.io/main.css` (Changed code · before: `L1431-L1437` → after: `L2538-L2542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2538-L2542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2538-L2542) · [Before (L1431-L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1431-L1437)

```diff
- .LogoLoader .LoaderSantaHat {
-   font-size: .7em;
-   position: absolute;
-   right: -3.5rem;
-   rotate: 20deg;
-   top: -5rem;
-   z-index: 2
+ @media(hover:hover) {
+   .NewButton:hover {
+     background-color: var(--buttonHoverColour);
+     transform: scale(1.05)
+   }
```

#### 216. `bundles/bloxd.io/main.css` (Changed code · before: `L1440-L1442` → after: `L2545-L2547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2545-L2547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2545-L2547) · [Before (L1440-L1442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1440-L1442)

```diff
- .LogoLoader .LoaderSantaHat:before {
-   color: red;
-   z-index: 2
+ .NewButton.pad-focused {
+   background-color: var(--buttonHoverColour);
+   transform: scale(1.05)
```

#### 217. `bundles/bloxd.io/main.css` (Changed code · before: `L1445-L1449` → after: `L2550-L2554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2550-L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2550-L2554) · [Before (L1445-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1445-L1449)

```diff
- .LogoLoader .LoaderSantaHat:after {
-   color: #fff;
-   opacity: 1;
-   position: relative;
-   z-index: 3
+ @media(hover:none) {
+   .NewButton:active {
+     background-color: var(--buttonHoverColour);
+     transform: scale(1.05)
+   }
```

#### 218. `bundles/bloxd.io/main.css` (Changed code · before: `L1452-L1461` → after: `L2557-L2560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2557-L2560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2557-L2560) · [Before (L1452-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1452-L1461)

```diff
- .LogoLoader .LogoLoaderInner {
-   box-sizing: border-box;
-   display: flex;
-   flex-direction: column;
-   height: calc(100% - var(--border-size)*2 - var(--border-size));
-   left: calc(var(--border-size) + var(--border-size)/2);
-   overflow: hidden;
-   position: absolute;
-   top: calc(var(--border-size) + var(--border-size)/2);
-   width: calc(100% - var(--border-size)*2 - var(--border-size))
+ .NewButton:active,
+ .NewButton[data-pressing] {
+   filter: brightness(.92);
+   transform: translateY(1px)
```

#### 219. `bundles/bloxd.io/main.css` (Changed code · before: `L1464-L1468` → after: `L2563-L2564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2563-L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2563-L2564) · [Before (L1464-L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1464-L1468)

```diff
- .LogoLoader .LogoLoaderLoadingBar {
-   box-sizing: border-box;
-   left: 0;
-   top: 0;
-   transition: border .2s, border-top .2s
+ .NewButton[data-pressing] {
+   transition: none
```

#### 220. `bundles/bloxd.io/main.css` (Changed code · before: `L1471-L1475` → after: `L2567-L2569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2567-L2569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2567-L2569) · [Before (L1471-L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1471-L1475)

```diff
- .LogoLoader .LogoLoaderLoadingBar,
- .LogoLoader .LogoLoaderProgressBar {
-   height: 100%;
-   position: absolute;
-   width: 100%
+ .NewButton:focus-visible {
+   outline: 2px solid #ffb914;
+   outline-offset: 2px
```

#### 221. `bundles/bloxd.io/main.css` (Changed code · before: `L1478-L1488` → after: `L2572-L2573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2572-L2573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2572-L2573) · [Before (L1478-L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1478-L1488)

```diff
- .LogoLoader .LogoLoaderProgressBar .LogoLoaderProgressBarText {
-   align-items: center;
-   background-color: rgba(0, 0, 0, .6);
-   box-sizing: border-box;
-   display: flex;
-   height: calc(70% - var(--border-size)*3*.7);
-   inset: 0;
-   justify-content: center;
-   margin: auto;
-   position: absolute;
-   width: calc(70% - var(--border-size)*3*.7)
+ .NewButton.DisabledNewButton {
+   cursor: default
```

#### 222. `bundles/bloxd.io/main.css` (Changed code · before: `L1491-L1494` → after: `L2576-L2580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2576-L2580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2576-L2580) · [Before (L1491-L1494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1491-L1494)

```diff
- .LogoLoader .LogoLoaderProgressBar .LogoLoaderProgressBarText .LogoLoaderProgressBarPercent {
-   color: var(--border-color-2);
-   font-size: .25em;
-   font-weight: 800
+ @media(hover:hover) {
+   .NewButton.DisabledNewButton:hover {
+     background-color: var(--buttonNormalColour);
+     transform: none
+   }
```

#### 223. `bundles/bloxd.io/main.css` (Changed code · before: `L1497-L1502` → after: `L2583-L2585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2583-L2585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2583-L2585) · [Before (L1497-L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1497-L1502)

```diff
- .LogoLoader .LogoLoaderProgressBar svg {
-   color: var(--border-color-1);
-   height: 100%;
-   position: absolute;
-   transform: rotate(-90deg);
-   width: 100%
+ .NewButton.DisabledNewButton.pad-focused {
+   background-color: var(--buttonNormalColour);
+   transform: none
```

#### 224. `bundles/bloxd.io/main.css` (Changed code · before: `L1505-L1510` → after: `L2588-L2592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2588-L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2588-L2592) · [Before (L1505-L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1505-L1510)

```diff
- .LogoLoader.LogoLoaderIsLoading .LogoLoaderInner,
- .LogoLoader.LogoLoaderIsProgressBar .LogoLoaderInner {
-   height: calc(70% - var(--border-size)*3*.7);
-   inset: 0;
-   margin: auto;
-   width: calc(70% - var(--border-size)*3*.7)
+ @media(hover:none) {
+   .NewButton.DisabledNewButton:active {
+     background-color: var(--buttonNormalColour);
+     transform: none
+   }
```

#### 225. `bundles/bloxd.io/main.css` (Changed code · before: `L1513-L1515` → after: `L2595-L2597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2595-L2597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2595-L2597) · [Before (L1513-L1515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1513-L1515)

```diff
- .LogoLoader.LogoLoaderIsProgressBar .LogoLoaderLoadingBar {
-   border: var(--border-size) solid var(--border-color-2);
-   border-radius: 50%
+ .NewButton.DisabledNewButton:active {
+   filter: none;
+   transform: none
```

#### 226. `bundles/bloxd.io/main.css` (Changed code · before: `L1518-L1523` → after: `L2600-L2604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2600-L2604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2600-L2604) · [Before (L1518-L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1518-L1523)

```diff
- .LogoLoader.LogoLoaderIsProgressBar .LogoLoaderInner {
-   -ms-interpolation-mode: nearest-neighbor;
-   image-rendering: optimizeSpeed;
-   image-rendering: -o-crisp-edges;
-   image-rendering: pixelated;
-   image-rendering: optimize-contrast
+ @media(hover:hover) {
+   .NewButton.LoadingNewButton:hover {
+     cursor: auto;
+     transform: none
+   }
```

#### 227. `bundles/bloxd.io/main.css` (Changed code · before: `L1526-L1531` → after: `L2607-L2609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2607-L2609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2607-L2609) · [Before (L1526-L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1526-L1531)

```diff
- .LogoLoader:not(.LogoLoaderIsProgressBar).LogoLoaderIsLoading .LogoLoaderLoadingBar {
-   animation: rotate 1.5s linear infinite;
-   border: var(--border-size) solid var(--border-color-2);
-   border-radius: 50%;
-   border-top: var(--border-size) solid var(--border-color-1);
-   transition: border-color 1s
+ .NewButton.LoadingNewButton.pad-focused {
+   cursor: auto;
+   transform: none
```

#### 228. `bundles/bloxd.io/main.css` (Changed code · before: `L1534-L1536` → after: `L2612-L2616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2612-L2616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2612-L2616) · [Before (L1534-L1536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1534-L1536)

```diff
- .LogoLoader:not(.LogoLoaderIsProgressBar).LogoLoaderIsLoading[data-off-screen] .LogoLoaderLoadingBar,
- html[data-app-covered] .WholeAppWrapper .LogoLoader:not(.LogoLoaderIsProgressBar).LogoLoaderIsLoading .LogoLoaderLoadingBar {
-   animation-play-state: paused
+ @media(hover:none) {
+   .NewButton.LoadingNewButton:active {
+     cursor: auto;
+     transform: none
+   }
```

#### 229. `bundles/bloxd.io/main.css` (Changed code · before: `L1539-L1540` → after: `L2619-L2621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2619-L2621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2619-L2621) · [Before (L1539-L1540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1539-L1540)

```diff
- .LogoLoader:not(.LogoLoaderIsProgressBar):not(.LogoLoaderIsLoading) {
-   --border-size: 0.2rem
+ .NewButton.LoadingNewButton:active {
+   filter: none;
+   transform: none
```

#### 230. `bundles/bloxd.io/main.css` (Changed code · before: `L1543-L1544` → after: `L2624-L2636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2624-L2636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2624-L2636) · [Before (L1543-L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1543-L1544)

```diff
- .LogoLoader:not(.LogoLoaderIsProgressBar):not(.LogoLoaderIsLoading) .LogoLoaderLoadingBar {
-   border: var(--border-size) solid #2e80ee
+ .NewButton.ShinyButton:after {
+   animation-fill-mode: forwards;
+   animation: shiny-button 3s ease-in-out infinite;
+   background: hsla(0, 0%, 100%, .13);
+   background: linear-gradient(90deg, hsla(0, 0%, 100%, .13) 0, hsla(0, 0%, 100%, .13) 77%, hsla(0, 0%, 100%, .8) 92%, hsla(0, 0%, 100%, 0));
+   content: "";
+   height: 450%;
+   left: 0;
+   opacity: 0;
+   position: absolute;
+   top: 0;
+   transform: translate(-109%, -110%) rotate(30deg);
+   width: 300%
```

#### 231. `bundles/bloxd.io/main.css` (Changed code · before: `L1547-L1553` → after: `L2639-L2641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2639-L2641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2639-L2641) · [Before (L1547-L1553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1547-L1553)

```diff
- .GenericVideoWrapper {
-   align-items: center;
-   background-color: #000;
-   display: flex;
-   height: 100vh;
-   height: 100dvh;
-   justify-content: center;
+ .NewButton .ButtonTopBorder {
+   background: var(--buttonTopColour);
+   height: .21em;
```

#### 232. `bundles/bloxd.io/main.css` (Changed code · before: `L1555` → after: `L2643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2643) · [Before (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1555)

```diff
-   position: fixed;
+   position: absolute;
```

#### 233. `bundles/bloxd.io/main.css` (Changed code · before: `L1557-L1558` → after: `L2645-L2646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2645-L2646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2645-L2646) · [Before (L1557-L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1557-L1558)

```diff
-   width: 100vw;
-   z-index: 99
+   width: 100%;
+   z-index: 1
```

#### 234. `bundles/bloxd.io/main.css` (Changed code · before: `L1561-L1563` → after: `L2649-L2653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2649-L2653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2649-L2653) · [Before (L1561-L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1561-L1563)

```diff
- .GenericVideoWrapper .LogoLoader {
-   font-size: 3rem;
-   left: 50%;
+ .NewButton .ButtonBottomBorder {
+   background: var(--buttonBottomColour);
+   bottom: 0;
+   height: .21em;
+   left: 0;
```

#### 235. `bundles/bloxd.io/main.css` (Changed code · before: `L1565-L1566` → after: `L2655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2655) · [Before (L1565-L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1565-L1566)

```diff
-   top: 50%;
-   transform: translate(-50%, -50%);
+   width: 100%;
```

#### 236. `bundles/bloxd.io/main.css` (Changed code · before: `L1570-L1579` → after: `L2659-L2676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2659-L2676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2659-L2676) · [Before (L1570-L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1570-L1579)

```diff
- .GenericVideoWrapper .NitroVideoSkip {
-   background-color: rgba(26, 31, 46, .6);
-   border: 1px solid #0f0f0f;
-   bottom: 1rem;
-   color: #fff;
-   font-size: 1.2rem;
-   font-weight: 600;
-   left: 1rem;
-   padding: .5rem 1rem;
-   pointer-events: none;
+ .NewButton .ButtonBody {
+   gap: .4em;
+   min-width: 0;
+   overflow-x: hidden;
+   padding: .4em .8em;
+   position: relative;
+   text-overflow: ellipsis;
+   white-space: nowrap;
+   z-index: 2
+ }
+ 
+ .NewButton .ButtonLoadingOverlay {
+   align-items: center;
+   background-color: rgba(0, 0, 0, .75);
+   bottom: 0;
+   display: flex;
+ ... (2 more added lines; see GitHub link above)
```

#### 237. `bundles/bloxd.io/main.css` (Changed code · before: `L1584` → after: `L2683-L2693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2683-L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2683-L2693) · [Before (L1584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1584)

```diff
- .GenericVideoWrapper .NitroVideoSkip:not(:disabled) {
+ .RainbowGradientDefs {
+   height: 0;
+   position: absolute;
+   width: 0
+ }
+ 
+ .SecondaryButton {
+   align-items: center;
+   border: max(min(4px, .15em), 2px) solid #cfcfcf;
+   border-radius: 0;
+   color: #cfcfcf;
```

#### 238. `bundles/bloxd.io/main.css` (Changed code · before: `L1586` → after: `L2695-L2701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2695-L2701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2695-L2701) · [Before (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1586)

```diff
-   pointer-events: auto
+   display: flex;
+   gap: .3em;
+   justify-content: center;
+   line-height: 1em;
+   padding: .3em .6em;
+   text-align: center;
+   transition: border-color .2s, color .2s
```

#### 239. `bundles/bloxd.io/main.css` (Changed code · before: `L1590-L1591` → after: `L2705-L2706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2705-L2706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2705-L2706) · [Before (L1590-L1591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1590-L1591)

```diff
-   .GenericVideoWrapper .NitroVideoSkip:not(:disabled):hover {
-     background-color: #394980
+   .SecondaryButton:hover {
+     border-color: #b6830e
```

#### 240. `bundles/bloxd.io/main.css` (Changed code · before: `L1595-L1596` → after: `L2710-L2711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2710-L2711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2710-L2711) · [Before (L1595-L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1595-L1596)

```diff
- .GenericVideoWrapper .NitroVideoSkip:not(:disabled).pad-focused {
-   background-color: #394980
+ .SecondaryButton.pad-focused {
+   border-color: #b6830e
```

#### 241. `bundles/bloxd.io/main.css` (Changed code · before: `L1600-L1601` → after: `L2715-L2716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2715-L2716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2715-L2716) · [Before (L1600-L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1600-L1601)

```diff
-   .GenericVideoWrapper .NitroVideoSkip:not(:disabled):active {
-     background-color: #394980
+   .SecondaryButton:active {
+     border-color: #b6830e
```

#### 242. `bundles/bloxd.io/main.css` (Changed code · before: `L1605-L1630` → after: `L2720-L2722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2720-L2722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2720-L2722) · [Before (L1605-L1630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1605-L1630)

```diff
- .GenericVideoWrapper .GenericVideo {
-   height: 600px;
-   position: relative;
-   width: 900px;
-   z-index: 2
- }
- 
- .GenericVideoWrapper .GenericVideo.AditudeVideo,
- .GenericVideoWrapper .GenericVideo.NitroVideo {
-   aspect-ratio: 16/9;
-   height: auto;
-   width: min(80vw, 160vh)
- }
- 
- .GenericVideoWrapper .GenericVideo .NitroVideoPlacement {
-   height: 100%;
- ... (10 more removed lines; see GitHub link above)
+ .SecondaryButton:focus-visible {
+   outline: 2px solid #ffb914;
+   outline-offset: 2px
```

#### 243. `bundles/bloxd.io/main.css` (Changed code · before: `L1633-L1637` → after: `L2725-L2728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2725-L2728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2725-L2728) · [Before (L1633-L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1633-L1637)

```diff
- .GenericPopup {
-   font-size: 1.5rem;
-   position: relative;
-   white-space: pre-line;
-   z-index: 21
+ .SecondaryButton.ActiveSecondaryButton,
+ .SecondaryButton.GoldSecondaryButton {
+   border-color: #ffb914;
+   color: #ffb914
```

#### 244. `bundles/bloxd.io/main.css` (Changed code · before: `L1640-L1644` → after: `L2731-L2735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2731-L2735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2731-L2735) · [Before (L1640-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1640-L1644)

```diff
- .GenericPopup .GenericPopupWrapper {
-   display: flex;
-   flex-direction: column;
-   padding: 1rem;
-   position: relative
+ @media(hover:hover) {
+   .SecondaryButton.GoldSecondaryButton:hover {
+     border-color: #fcd373;
+     color: #fcd373
+   }
```

#### 245. `bundles/bloxd.io/main.css` (Changed code · before: `L1647-L1652` → after: `L2738-L2740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2738-L2740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2738-L2740) · [Before (L1647-L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1647-L1652)

```diff
- .GenericPopup .GenericPopupWrapper .GenericPopupExitButton {
-   font-size: 2.4rem;
-   position: absolute;
-   right: 0;
-   top: 0;
-   z-index: 10
+ .SecondaryButton.GoldSecondaryButton.pad-focused {
+   border-color: #fcd373;
+   color: #fcd373
```

#### 246. `bundles/bloxd.io/main.css` (Changed code · before: `L1655-L1656` → after: `L2743-L2747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2743-L2747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2743-L2747) · [Before (L1655-L1656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1655-L1656)

```diff
- .PromptGenericPopup {
-   max-width: max(50vw, 40rem)
+ @media(hover:none) {
+   .SecondaryButton.GoldSecondaryButton:active {
+     border-color: #fcd373;
+     color: #fcd373
+   }
```

#### 247. `bundles/bloxd.io/main.css` (Changed code · before: `L1659-L1664` → after: `L2750-L2752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2750-L2752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2750-L2752) · [Before (L1659-L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1659-L1664)

```diff
- .PromptGenericPopup .PromptGenericPopupIcons {
-   align-items: center;
-   display: flex;
-   gap: .5rem;
-   justify-content: center;
-   padding-bottom: 1rem
+ .SecondaryButton.PurpleSecondaryButton {
+   border-color: #6d2e91;
+   color: #d49cf9
```

#### 248. `bundles/bloxd.io/main.css` (Changed code · before: `L1667-L1669` → after: `L2755-L2758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2755-L2758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2755-L2758) · [Before (L1667-L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1667-L1669)

```diff
- .PromptGenericPopup .PromptGenericPopupIcons .svg-inline--fa {
-   color: #a4a4a4;
-   font-size: 3rem
+ @media(hover:hover) {
+   .SecondaryButton.PurpleSecondaryButton:hover {
+     border-color: #ad50e3
+   }
```

#### 249. `bundles/bloxd.io/main.css` (Changed code · before: `L1672-L1673` → after: `L2761-L2762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2761-L2762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2761-L2762) · [Before (L1672-L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1672-L1673)

```diff
- .PromptGenericPopup .PromptGenericPopupIcons .svg-inline--fa:nth-of-type(2) {
-   font-size: 4.5rem
+ .SecondaryButton.PurpleSecondaryButton.pad-focused {
+   border-color: #ad50e3
```

#### 250. `bundles/bloxd.io/main.css` (Changed code · before: `L1676-L1678` → after: `L2765-L2768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2765-L2768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2765-L2768) · [Before (L1676-L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1676-L1678)

```diff
- .PromptGenericPopup .PromptGenericPopupTitle {
-   font-size: 2rem;
-   padding-bottom: .5rem
+ @media(hover:none) {
+   .SecondaryButton.PurpleSecondaryButton:active {
+     border-color: #ad50e3
+   }
```

#### 251. `bundles/bloxd.io/main.css` (Changed code · before: `L1681-L1683` → after: `L2771-L2773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2771-L2773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2771-L2773) · [Before (L1681-L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1681-L1683)

```diff
- .PromptGenericPopup .PromptGenericPopupSubtitle {
-   font-size: 1.25rem;
-   padding-bottom: 1rem
+ .SecondaryButton.RedSecondaryButton {
+   border-color: #800c0c;
+   color: #ff8a80
```

#### 252. `bundles/bloxd.io/main.css` (Changed code · before: `L1686-L1690` → after: `L2776-L2779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2776-L2779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2776-L2779) · [Before (L1686-L1690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1686-L1690)

```diff
- .PromptGenericPopup .PromptGenericPopupTyped {
-   display: flex;
-   flex-direction: column;
-   font-size: 1.25rem;
-   gap: .5rem
+ @media(hover:hover) {
+   .SecondaryButton.RedSecondaryButton:hover {
+     border-color: #fc6464
+   }
```

#### 253. `bundles/bloxd.io/main.css` (Changed code · before: `L1693-L1695` → after: `L2782-L2783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2782-L2783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2782-L2783) · [Before (L1693-L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1693-L1695)

```diff
- .PromptGenericPopup .PromptGenericPopupTyped .PromptGenericPopupTypedInput {
-   font-size: 1.5rem;
-   padding: .5rem
+ .SecondaryButton.RedSecondaryButton.pad-focused {
+   border-color: #fc6464
```

#### 254. `bundles/bloxd.io/main.css` (Changed code · before: `L1698-L1702` → after: `L2786-L2788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2786-L2788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2786-L2788) · [Before (L1698-L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1698-L1702)

```diff
- @media(pointer:coarse) {
-   .PromptGenericPopup .PromptGenericPopupTyped .PromptGenericPopupTypedInput {
-     box-sizing: border-box;
-     min-height: 44px;
-     min-width: 44px
+ @media(hover:none) {
+   .SecondaryButton.RedSecondaryButton:active {
+     border-color: #fc6464
```

#### 255. `bundles/bloxd.io/main.css` (Changed code · before: `L1706-L1710` → after: `L2792-L2795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2792-L2795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2792-L2795) · [Before (L1706-L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1706-L1710)

```diff
- .PromptGenericPopup .PromptGenericPopupBody {
-   align-content: center;
-   display: flex;
-   flex-wrap: wrap;
-   justify-content: center
+ .SecondaryButton.MutedSecondaryButton {
+   border-color: #838383;
+   color: #838383;
+   opacity: .6
```

#### 256. `bundles/bloxd.io/main.css` (Changed code · before: `L1713-L1716` → after: `L2798-L2803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2798-L2803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2798-L2803) · [Before (L1713-L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1713-L1716)

```diff
- .PromptGenericPopup .PromptGenericPopupBody .PromptGenericPopupBodyButtonTooltip {
-   font-size: 1.3rem;
-   padding: .3rem;
-   white-space: pre-line
+ @media(hover:hover) {
+   .SecondaryButton.MutedSecondaryButton:hover {
+     border-color: #b6830e;
+     color: #cfcfcf;
+     opacity: 1
+   }
```

#### 257. `bundles/bloxd.io/main.css` (Changed code · before: `L1719-L1725` → after: `L2806-L2809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2806-L2809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2806-L2809) · [Before (L1719-L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1719-L1725)

```diff
- .PromptGenericPopup .PromptGenericPopupBody .PromptGenericPopupBodyButton {
-   align-items: center;
-   display: flex;
-   flex-direction: column;
-   font-size: 1.5rem;
-   justify-content: center;
-   margin: 1rem 1rem 0
+ .SecondaryButton.MutedSecondaryButton.pad-focused {
+   border-color: #b6830e;
+   color: #cfcfcf;
+   opacity: 1
```

#### 258. `bundles/bloxd.io/main.css` (Changed code · before: `L1728-L1732` → after: `L2812-L2816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2812-L2816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2812-L2816) · [Before (L1728-L1732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1728-L1732)

```diff
- @media(pointer:coarse) {
-   .PromptGenericPopup .PromptGenericPopupBody .PromptGenericPopupBodyButton {
-     box-sizing: border-box;
-     min-height: 44px;
-     min-width: 88px
+ @media(hover:none) {
+   .SecondaryButton.MutedSecondaryButton:active {
+     border-color: #b6830e;
+     color: #cfcfcf;
+     opacity: 1
```

#### 259. `bundles/bloxd.io/main.css` (Changed code · before: `L1736-L1738` → after: `L2820-L2827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2820-L2827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2820-L2827) · [Before (L1736-L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1736-L1738)

```diff
- .PromptGenericPopup .PromptGenericPopupBody .PromptGenericPopupBodyPrimaryButton .ButtonBody {
-   padding-left: 3rem;
-   padding-right: 3rem
+ .SecondaryButton.RainbowSecondaryButton {
+   -webkit-text-fill-color: transparent;
+   background: linear-gradient(90deg, #ff6b9d, #ffa64d, gold, #7dd87d, #6bb5ff, #c084fc, #ff6b9d);
+   -webkit-background-clip: text;
+   background-clip: text;
+   border-image-slice: 1;
+   border-image-source: linear-gradient(90deg, #ff6b9d, #ffa64d, gold, #7dd87d, #6bb5ff, #c084fc, #ff6b9d);
+   color: #f2f2f2
```

#### 260. `bundles/bloxd.io/main.css` (Changed code · before: `L1741-L1746` → after: `L2830-L2831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2830-L2831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2830-L2831) · [Before (L1741-L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1741-L1746)

```diff
- .InputGenericPopup {
-   display: flex;
-   flex-direction: column;
-   gap: 1rem;
-   max-width: max(50vw, 40rem);
-   min-width: min(80vw, 26rem)
+ .SecondaryButton.RainbowSecondaryButton .svg-inline--fa path {
+   fill: url(#RainbowGradient)
```

#### 261. `bundles/bloxd.io/main.css` (Changed code · before: `L1749-L1752` → after: `L2834-L2837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2834-L2837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2834-L2837) · [Before (L1749-L1752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1749-L1752)

```diff
- .InputGenericPopup .InputGenericPopupInputRow {
-   align-items: center;
-   display: flex;
-   gap: .4rem
+ @media(hover:hover) {
+   .SecondaryButton.RainbowSecondaryButton:hover {
+     filter: brightness(120%)
+   }
```

#### 262. `bundles/bloxd.io/main.css` (Changed code · before: `L1755-L1757` → after: `L2840-L2841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2840-L2841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2840-L2841) · [Before (L1755-L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1755-L1757)

```diff
- .InputGenericPopup .InputGenericPopupInputRow .InputGenericPopupPrefix {
-   flex-shrink: 0;
-   opacity: .8
+ .SecondaryButton.RainbowSecondaryButton.pad-focused {
+   filter: brightness(120%)
```

#### 263. `bundles/bloxd.io/main.css` (Changed code · before: `L1760-L1764` → after: `L2844-L2847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2844-L2847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2844-L2847) · [Before (L1760-L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1760-L1764)

```diff
- .InputGenericPopup .InputGenericPopupInputRow .InputGenericPopupInput {
-   flex: 1 1;
-   font-size: 1.5rem;
-   min-width: 0;
-   text-align: left
+ @media(hover:none) {
+   .SecondaryButton.RainbowSecondaryButton:active {
+     filter: brightness(120%)
+   }
```

#### 264. `bundles/bloxd.io/main.css` (Changed code · before: `L1767-L1770` → after: `L2850-L2852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2850-L2852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2850-L2852) · [Before (L1767-L1770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1767-L1770)

```diff
- .InputGenericPopup .InputGenericPopupInputRow .InputGenericPopupInput.Multiline {
-   font-size: 1.2rem;
-   min-height: 8rem;
-   resize: vertical
+ .SecondaryButton.RainbowSecondaryButton[data-pressing] {
+   filter: brightness(75%);
+   transition: none
```

#### 265. `bundles/bloxd.io/main.css` (Changed code · before: `L1773-L1776` → after: `L2855-L2858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2855-L2858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2855-L2858) · [Before (L1773-L1776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1773-L1776)

```diff
- .InputGenericPopup .InputGenericPopupError {
-   color: #ff8a80;
-   font-size: 1.2rem;
-   text-align: center
+ .SecondaryButton:not(.RainbowSecondaryButton)[data-pressing] {
+   background-color: rgba(255, 185, 20, .2);
+   border-color: #ffb914;
+   transition: none
```

#### 266. `bundles/bloxd.io/main.css` (Changed code · before: `L1779-L1783` → after: `L2861-L2869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2861-L2869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2861-L2869) · [Before (L1779-L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1779-L1783)

```diff
- .InputGenericPopup .InputGenericPopupButtons {
-   display: flex;
-   gap: 1rem;
-   justify-content: center;
-   padding-top: 1rem
+ .SecondaryButton.DisabledSecondaryButton {
+   -webkit-text-fill-color: currentColor;
+   background: none;
+   border-color: #838383;
+   border-image-source: none;
+   color: #838383;
+   cursor: default;
+   opacity: .6;
+   pointer-events: none
```

#### 267. `bundles/bloxd.io/main.css` (Changed code · before: `L1786` → after: `L2872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2872) · [Before (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1786)

```diff
- .InputGenericPopup .InputGenericPopupButtons .InputGenericPopupButton {
+ .TabButton {
```

#### 268. `bundles/bloxd.io/main.css` (Changed code · before: `L1789` → after: `L2880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2880) · [Before (L1789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1789)

```diff
-   font-size: 1.4rem;
+   gap: .3em;
```

#### 269. `bundles/bloxd.io/main.css` (Changed code · before: `L1791` → after: `L2882-L2885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2882-L2885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2882-L2885) · [Before (L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1791)

```diff
-   min-width: 9rem
+   line-height: 1em;
+   padding: .3em .6em;
+   text-align: center;
+   transition: border-color .2s, color .2s
```

#### 270. `bundles/bloxd.io/main.css` (Changed code · before: `L1794-L1797` → after: `L2888-L2891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2888-L2891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2888-L2891) · [Before (L1794-L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1794-L1797)

```diff
- .CircleInfo {
-   color: #f2f2f2;
-   cursor: help;
-   text-shadow: -1px -1px 0 #303a59, 1px -1px 0 #303a59, -1px 1px 0 #303a59, 1px 1px 0 #303a59, 0 3px 2px #303a59
+ @media(hover:hover) {
+   .TabButton:hover {
+     border-bottom-color: #b6830e
+   }
```

#### 271. `bundles/bloxd.io/main.css` (Changed code · before: `L1800-L1804` → after: `L2894-L2895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2894-L2895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2894-L2895) · [Before (L1800-L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1800-L1804)

```diff
- .CircleInfoTooltip {
-   line-height: 1.5;
-   max-width: 30rem;
-   padding: .3rem;
-   text-align: center
+ .TabButton.pad-focused {
+   border-bottom-color: #b6830e
```

#### 272. `bundles/bloxd.io/main.css` (Changed code · before: `L1807-L1813` → after: `L2898-L2900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2898-L2900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2898-L2900) · [Before (L1807-L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1807-L1813)

```diff
- @keyframes spin {
-   0% {
-     transform: rotate(0deg)
-   }
- 
-   to {
-     transform: rotate(1turn)
+ @media(hover:none) {
+   .TabButton:active {
+     border-bottom-color: #b6830e
```

#### 273. `bundles/bloxd.io/main.css` (Changed code · before: `L1817-L1822` → after: `L2904-L2906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2904-L2906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2904-L2906) · [Before (L1817-L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1817-L1822)

```diff
- .AnimFadeIn {
-   animation-duration: .3s;
-   animation-fill-mode: backwards;
-   animation-iteration-count: 1;
-   animation-name: fadeIn;
-   isolation: isolate
+ .TabButton:focus-visible {
+   outline: 2px solid #ffb914;
+   outline-offset: 2px
```

#### 274. `bundles/bloxd.io/main.css` (Changed code · before: `L1825-L1830` → after: `L2909-L2911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2909-L2911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2909-L2911) · [Before (L1825-L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1825-L1830)

```diff
- .AnimFadeInScaleUp {
-   animation-duration: .2s;
-   animation-fill-mode: backwards;
-   animation-iteration-count: 1;
-   animation-name: fadeInScaleUp;
-   isolation: isolate
+ .TabButton.ActiveTabButton {
+   border-bottom-color: #ffb914;
+   color: #ffb914
```

#### 275. `bundles/bloxd.io/main.css` (Changed code · before: `L1833-L1838` → after: `L2914-L2919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2914-L2919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2914-L2919) · [Before (L1833-L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1833-L1838)

```diff
- .AnimFadeInScaleUpNoOversize {
-   animation-duration: .2s;
-   animation-fill-mode: backwards;
-   animation-iteration-count: 1;
-   animation-name: fadeInScaleUpNoOversize;
-   isolation: isolate
+ .TabButton.DisabledTabButton {
+   border-bottom-color: #838383;
+   color: #838383;
+   cursor: default;
+   opacity: .6;
+   pointer-events: none
```

#### 276. `bundles/bloxd.io/main.css` (Changed code · before: `L1841-L1842` → after: `L2922-L2933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2922-L2933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2922-L2933) · [Before (L1841-L1842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1841-L1842)

```diff
- .AnimShake {
-   animation: shake 3s infinite
+ .LoadableButton {
+   align-items: center;
+   border-radius: 0;
+   color: #cfcfcf;
+   cursor: pointer;
+   display: flex;
+   flex-shrink: 0;
+   font-size: 1.2rem;
+   gap: .3em;
+   justify-content: center;
+   padding: .2rem .4rem;
+   transition: color .1s, background-color .1s, transform .1s
```

#### 277. `bundles/bloxd.io/main.css` (Changed code · before: `L1845-L1850` → after: `L2936-L2938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2936-L2938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2936-L2938) · [Before (L1845-L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1845-L1850)

```diff
- .PixelatedImage {
-   -ms-interpolation-mode: nearest-neighbor;
-   image-rendering: optimizeSpeed;
-   image-rendering: -o-crisp-edges;
-   image-rendering: pixelated;
-   image-rendering: optimize-contrast
+ .LoadableButton:focus-visible {
+   outline: 2px solid #ffb914;
+   outline-offset: 2px
```

#### 278. `bundles/bloxd.io/main.css` (Changed code · before: `L1853-L1858` → after: `L2941-L2942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2941-L2942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2941-L2942) · [Before (L1853-L1858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1853-L1858)

```diff
- @font-face {
-   font-display: swap;
-   font-family: Local Roboto;
-   font-style: normal;
-   font-weight: 100;
-   src: local("Roboto Thin"), local("Roboto-Thin")
+ .LoadableButton .LoadableButtonIcon {
+   position: relative
```

#### 279. `bundles/bloxd.io/main.css` (Changed code · before: `L1861-L1866` → after: `L2945-L2946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2945-L2946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2945-L2946) · [Before (L1861-L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1861-L1866)

```diff
- @font-face {
-   font-display: swap;
-   font-family: Local Roboto;
-   font-style: italic;
-   font-weight: 100;
-   src: local("Roboto Thin Italic"), local("Roboto-ThinItalic")
+ .LoadableButton.LikeButton {
+   background-color: rgba(128, 12, 12, .5)
```

#### 280. `bundles/bloxd.io/main.css` (Changed code · before: `L1869-L1874` → after: `L2949-L2952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2949-L2952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2949-L2952) · [Before (L1869-L1874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1869-L1874)

```diff
- @font-face {
-   font-display: swap;
-   font-family: Local Roboto;
-   font-style: normal;
-   font-weight: 300;
-   src: local("Roboto Light"), local("Roboto-Light")
+ @media(hover:hover) {
+   .LoadableButton.LikeButton:hover {
+     background-color: hsla(0, 96%, 69%, .4)
+   }
```

#### 281. `bundles/bloxd.io/main.css` (Changed code · before: `L1877-L1882` → after: `L2955-L2956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2955-L2956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2955-L2956) · [Before (L1877-L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1877-L1882)

```diff
- @font-face {
-   font-display: swap;
-   font-family: Local Roboto;
-   font-style: italic;
-   font-weight: 300;
-   src: local("Roboto Light Italic"), local("Roboto-LightItalic")
+ .LoadableButton.LikeButton.pad-focused {
+   background-color: hsla(0, 96%, 69%, .4)
```

#### 282. `bundles/bloxd.io/main.css` (Changed code · before: `L1885-L1890` → after: `L2959-L2962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2959-L2962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2959-L2962) · [Before (L1885-L1890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1885-L1890)

```diff
- @font-face {
-   font-display: swap;
-   font-family: Local Roboto;
-   font-style: normal;
-   font-weight: 400;
-   src: local("Roboto"), local("Roboto Regular"), local("Roboto-Regular")
+ @media(hover:none) {
+   .LoadableButton.LikeButton:active {
+     background-color: hsla(0, 96%, 69%, .4)
+   }
```

#### 283. `bundles/bloxd.io/main.css` (Changed code · before: `L1893-L1898` → after: `L2965-L2967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2965-L2967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2965-L2967) · [Before (L1893-L1898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1893-L1898)

```diff
- @font-face {
-   font-display: swap;
-   font-family: Local Roboto;
-   font-style: italic;
-   font-weight: 400;
-   src: local("Roboto Italic"), local("Roboto-Italic")
+ .LoadableButton.LikeButton.FavouriteCustomLobby {
+   background-color: rgba(204, 20, 20, .5);
+   color: #e73131
```

#### 284. `bundles/bloxd.io/main.css` (Changed code · before: `L1901-L1906` → after: `L2970-L2972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2970-L2972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2970-L2972) · [Before (L1901-L1906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1901-L1906)

```diff
- @font-face {
-   font-display: swap;
-   font-family: Local Roboto;
-   font-style: normal;
-   font-weight: 500 562;
-   src: local("Roboto Medium"), local("Roboto-Medium")
+ .LoadableButton.ReportButton,
+ .LoadableButton.StopRecordingButton {
+   background-color: #3c4b68
```

#### 285. `bundles/bloxd.io/main.css` (Changed code · before: `L1909-L1915` → after: `L2975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2975) · [Before (L1909-L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1909-L1915)

```diff
- @font-face {
-   font-display: swap;
-   font-family: Local Roboto;
-   font-style: italic;
-   font-weight: 500 562;
-   src: local("Roboto Medium Italic"), local("Roboto-MediumItalic")
- }
+ @media(hover:hover) {
```

#### 286. `bundles/bloxd.io/main.css` (Changed code · before: `L1917-L1922` → after: `L2977-L2980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2977-L2980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2977-L2980) · [Before (L1917-L1922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1917-L1922)

```diff
- @font-face {
-   font-display: swap;
-   font-family: Local Roboto;
-   font-style: normal;
-   font-weight: 700 799;
-   src: local("Roboto Bold"), local("Roboto-Bold")
+   .LoadableButton.ReportButton:hover,
+   .LoadableButton.StopRecordingButton:hover {
+     background-color: #394980
+   }
```

#### 287. `bundles/bloxd.io/main.css` (Changed code · before: `L1925-L1930` → after: `L2983-L2985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2983-L2985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2983-L2985) · [Before (L1925-L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1925-L1930)

```diff
- @font-face {
-   font-display: swap;
-   font-family: Local Roboto;
-   font-style: italic;
-   font-weight: 700 799;
-   src: local("Roboto Bold Italic"), local("Roboto-BoldItalic")
+ .LoadableButton.ReportButton.pad-focused,
+ .LoadableButton.StopRecordingButton.pad-focused {
+   background-color: #394980
```

#### 288. `bundles/bloxd.io/main.css` (Changed code · before: `L1933-L1938` → after: `L2988-L2993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2988-L2993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2988-L2993) · [Before (L1933-L1938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1933-L1938)

```diff
- @font-face {
-   font-display: swap;
-   font-family: Local Roboto;
-   font-style: normal;
-   font-weight: 900;
-   src: local("Roboto Black"), local("Roboto-Black"), local("Roboto Bold"), local("Roboto-Bold")
+ @media(hover:none) {
+ 
+   .LoadableButton.ReportButton:active,
+   .LoadableButton.StopRecordingButton:active {
+     background-color: #394980
+   }
```

#### 289. `bundles/bloxd.io/main.css` (Changed code · before: `L1941-L1946` → after: `L2996-L2997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2996-L2997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L2996-L2997) · [Before (L1941-L1946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1941-L1946)

```diff
- @font-face {
-   font-display: swap;
-   font-family: Local Roboto;
-   font-style: italic;
-   font-weight: 900;
-   src: local("Roboto Black Italic"), local("Roboto-BlackItalic"), local("Roboto Bold Italic"), local("Roboto-BoldItalic")
+ .LoadableButton.StopRecordingButton {
+   color: #e34f4f
```

#### 290. `bundles/bloxd.io/main.css` (Changed code · before: `L1949-L1954` → after: `L3000-L3002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3000-L3002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3000-L3002) · [Before (L1949-L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1949-L1954)

```diff
- @font-face {
-   font-display: swap;
-   font-family: Local Ubuntu;
-   font-style: normal;
-   font-weight: 100;
-   src: local("Ubuntu Thin"), local("Ubuntu-Thin")
+ .LoadableButton.StopRecordingButton .StopRecordingButtonLabel {
+   color: #fff;
+   white-space: nowrap
```

#### 291. `bundles/bloxd.io/main.css` (Changed code · before: `L1957-L1962` → after: `L3005-L3008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3005-L3008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3005-L3008) · [Before (L1957-L1962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1957-L1962)

```diff
- @font-face {
-   font-display: swap;
-   font-family: Local Ubuntu;
-   font-style: italic;
-   font-weight: 100;
-   src: local("Ubuntu Thin Italic"), local("Ubuntu-ThinItalic")
+ .LoadableButton.DisabledLoadableButton {
+   cursor: default;
+   opacity: .6;
+   pointer-events: none
```

#### 292. `bundles/bloxd.io/main.css` (Changed code · before: `L1965-L1970` → after: `L3011-L3012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3011-L3012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3011-L3012) · [Before (L1965-L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1965-L1970)

```diff
- @font-face {
-   font-display: swap;
-   font-family: Local Ubuntu;
-   font-style: normal;
-   font-weight: 300;
-   src: local("Ubuntu Light"), local("Ubuntu-Light")
+ .LoadableButton.Loading {
+   pointer-events: none
```

#### 293. `bundles/bloxd.io/main.css` (Changed code · before: `L1973-L1978` → after: `L3015-L3016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3015-L3016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3015-L3016) · [Before (L1973-L1978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1973-L1978)

```diff
- @font-face {
-   font-display: swap;
-   font-family: Local Ubuntu;
-   font-style: italic;
-   font-weight: 300;
-   src: local("Ubuntu Light Italic"), local("Ubuntu-LightItalic")
+ .LoadableButton.Loading .LoadableButtonIcon .svg-inline--fa {
+   opacity: 0
```

#### 294. `bundles/bloxd.io/main.css` (Changed code · before: `L1981-L1986` → after: `L3019-L3030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3019-L3030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3019-L3030) · [Before (L1981-L1986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1981-L1986)

```diff
- @font-face {
-   font-display: swap;
-   font-family: Local Ubuntu;
-   font-style: normal;
-   font-weight: 400;
-   src: local("Ubuntu"), local("Ubuntu Regular"), local("Ubuntu-Regular")
+ .BackButton {
+   align-items: center;
+   border-radius: 0;
+   color: #f2f2f2;
+   cursor: pointer;
+   display: inline-flex;
+   font-weight: 700;
+   gap: .3em;
+   justify-content: center;
+   transition: color .2s;
+   width: -moz-fit-content;
+   width: fit-content
```

#### 295. `bundles/bloxd.io/main.css` (Changed code · before: `L1989-L1994` → after: `L3033-L3035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3033-L3035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3033-L3035) · [Before (L1989-L1994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1989-L1994)

```diff
- @font-face {
-   font-display: swap;
-   font-family: Local Ubuntu;
-   font-style: italic;
-   font-weight: 400;
-   src: local("Ubuntu Italic"), local("Ubuntu-Italic")
+ .BackButton:focus-visible {
+   outline: 2px solid #ffb914;
+   outline-offset: 2px
```

#### 296. `bundles/bloxd.io/main.css` (Changed code · before: `L1997-L2002` → after: `L3038-L3041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3038-L3041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3038-L3041) · [Before (L1997-L2002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L1997-L2002)

```diff
- @font-face {
-   font-display: swap;
-   font-family: Local Ubuntu;
-   font-style: normal;
-   font-weight: 500 562;
-   src: local("Ubuntu Medium"), local("Ubuntu-Medium")
+ .BackButton .svg-inline--fa {
+   color: #fc6464;
+   padding-right: .1rem;
+   transition: transform .2s
```

#### 297. `bundles/bloxd.io/main.css` (Changed code · before: `L2005-L2010` → after: `L3044-L3045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3044-L3045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3044-L3045) · [Before (L2005-L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2005-L2010)

```diff
- @font-face {
-   font-display: swap;
-   font-family: Local Ubuntu;
-   font-style: italic;
-   font-weight: 500 562;
-   src: local("Ubuntu Medium Italic"), local("Ubuntu-MediumItalic")
+ .BackButton.CloseGameInformationSticky {
+   background-color: #303a59
```

#### 298. `bundles/bloxd.io/main.css` (Changed code · before: `L2013-L2018` → after: `L3048-L3055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3048-L3055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3048-L3055) · [Before (L2013-L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2013-L2018)

```diff
- @font-face {
-   font-display: swap;
-   font-family: Local Ubuntu;
-   font-style: normal;
-   font-weight: 700 799;
-   src: local("Ubuntu Bold"), local("Ubuntu-Bold")
+ @media(hover:hover) {
+   .BackButton:hover .svg-inline--fa {
+     transform: translateX(-.1em)
+   }
+ 
+   .BackButton:hover {
+     color: #f2f2f2
+   }
```

#### 299. `bundles/bloxd.io/main.css` (Changed code · before: `L2021-L2026` → after: `L3058-L3059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3058-L3059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3058-L3059) · [Before (L2021-L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2021-L2026)

```diff
- @font-face {
-   font-display: swap;
-   font-family: Local Ubuntu;
-   font-style: italic;
-   font-weight: 700 799;
-   src: local("Ubuntu Bold Italic"), local("Ubuntu-BoldItalic")
+ .BackButton.pad-focused .svg-inline--fa {
+   transform: translateX(-.1em)
```

#### 300. `bundles/bloxd.io/main.css` (Changed code · before: `L2029-L2034` → after: `L3062-L3063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3062-L3063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3062-L3063) · [Before (L2029-L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2029-L2034)

```diff
- @font-face {
-   font-display: swap;
-   font-family: Local Ubuntu;
-   font-style: normal;
-   font-weight: 800;
-   src: local("Ubuntu Extra Bold"), local("Ubuntu-ExtraBold"), local("Ubuntu Bold"), local("Ubuntu-Bold")
+ .BackButton.pad-focused {
+   color: #f2f2f2
```

#### 301. `bundles/bloxd.io/main.css` (Changed code · before: `L2037-L2042` → after: `L3066-L3073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3066-L3073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3066-L3073) · [Before (L2037-L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2037-L2042)

```diff
- @font-face {
-   font-display: swap;
-   font-family: Local Ubuntu;
-   font-style: italic;
-   font-weight: 800;
-   src: local("Ubuntu Extra Bold Italic"), local("Ubuntu-ExtraBoldItalic"), local("Ubuntu Bold Italic"), local("Ubuntu-BoldItalic")
+ @media(hover:none) {
+   .BackButton:active .svg-inline--fa {
+     transform: translateX(-.1em)
+   }
+ 
+   .BackButton:active {
+     color: #f2f2f2
+   }
```

#### 302. `bundles/bloxd.io/main.css` (Changed code · before: `L2045-L2062` → after: `L3076-L3078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3076-L3078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3076-L3078) · [Before (L2045-L2062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2045-L2062)

```diff
- body {
-   --root-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Verdana", "Candara", "Local Roboto", "Oxygen", "Local Ubuntu", "Trebuchet MS", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
-   -webkit-font-smoothing: antialiased;
-   -moz-osx-font-smoothing: grayscale;
-   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
-   background-color: #22283b;
-   color: #fff;
-   font-family: var(--root-font-family);
-   font-weight: 600;
-   letter-spacing: .03rem;
-   margin: 0;
-   overflow-x: hidden;
-   overflow-y: auto;
-   scroll-behavior: auto;
-   user-select: none;
-   -moz-user-select: none;
- ... (2 more removed lines; see GitHub link above)
+ .BackButton[data-pressing] {
+   color: #ffb914;
+   transition: none
```

#### 303. `bundles/bloxd.io/main.css` (Changed code · before: `L2065-L2068` → after: `L3081-L3099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3081-L3099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3081-L3099) · [Before (L2065-L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2065-L2068)

```diff
- @property --notchTop {
-   syntax: "<length>";
-   inherits: true;
-   initial-value: 0
+ @keyframes particles-out {
+   40% {
+     height: .6em;
+     transform: translate(-50%, -50%) rotate(var(--Θ)) translateY(.5em) scale(1)
+   }
+ 
+   40%,
+   50% {
+     height: .6em;
+     transform: translate(-50%, -50%) rotate(var(--Θ)) translateY(1.2em) scale(1)
+   }
+ 
+   50% {
+     height: .2em
+   }
+ 
+ ... (3 more added lines; see GitHub link above)
```

#### 304. `bundles/bloxd.io/main.css` (Changed code · before: `L2071-L2074` → after: `L3102-L3107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3102-L3107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3102-L3107) · [Before (L2071-L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2071-L2074)

```diff
- @property --notchRight {
-   syntax: "<length>";
-   inherits: true;
-   initial-value: 0
+ .Confetti {
+   height: 1px;
+   left: 50%;
+   position: absolute;
+   top: 50%;
+   width: 1px
```

#### 305. `bundles/bloxd.io/main.css` (Changed code · before: `L2077-L2080` → after: `L3110-L3118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3110-L3118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3110-L3118) · [Before (L2077-L2080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2077-L2080)

```diff
- @property --notchBottom {
-   syntax: "<length>";
-   inherits: true;
-   initial-value: 0
+ .Confetti .ConfettiParticle {
+   --percentage: calc(var(--i)/var(--total-particles));
+   --Θ: calc(var(--percentage)*1turn);
+   height: 0;
+   left: 0;
+   position: absolute;
+   top: 0;
+   transform: translate(-50%, -50%) rotate(var(--Θ)) translateY(.5em) scale(0);
+   width: .15em
```

#### 306. `bundles/bloxd.io/main.css` (Changed code · before: `L2083-L2086` → after: `L3121-L3123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3121-L3123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3121-L3123) · [Before (L2083-L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2083-L2086)

```diff
- @property --notchLeft {
-   syntax: "<length>";
-   inherits: true;
-   initial-value: 0
+ .Confetti .ConfettiParticle .DefaultConfettiParticle {
+   height: 100%;
+   width: 100%
```

#### 307. `bundles/bloxd.io/main.css` (Changed code · before: `L2089-L2098` → after: `L3126-L3127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3126-L3127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3126-L3127) · [Before (L2089-L2098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2089-L2098)

```diff
- :root {
-   --hud-viewport-height: 100vh;
-   --hud-auto-inset-top: max(var(--notchTop), 0.25rem);
-   --hud-auto-inset-right: max(var(--notchRight), 0.25rem);
-   --hud-auto-inset-bottom: max(min(3rem, var(--notchBottom)), 0.25rem);
-   --hud-auto-inset-left: max(var(--notchLeft), 0.25rem);
-   --hud-inset-top: var(--hud-safe-top, var(--hud-auto-inset-top));
-   --hud-inset-right: var(--hud-safe-right, var(--hud-auto-inset-right));
-   --hud-inset-bottom: var(--hud-safe-bottom, var(--hud-auto-inset-bottom));
-   --hud-inset-left: var(--hud-safe-left, var(--hud-auto-inset-left))
+ .Confetti .ConfettiParticle:nth-child(odd) .DefaultConfettiParticle {
+   background-color: #ffb914
```

#### 308. `bundles/bloxd.io/main.css` (Changed code · before: `L2101-L2104` → after: `L3130-L3131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3130-L3131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3130-L3131) · [Before (L2101-L2104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2101-L2104)

```diff
- @supports(height:1dvh) {
-   :root {
-     --hud-viewport-height: 100dvh
-   }
+ .Confetti .ConfettiParticle:nth-child(2n) .DefaultConfettiParticle {
+   background-color: #fc6464
```

#### 309. `bundles/bloxd.io/main.css` (Changed code · before: `L2107-L2113` → after: `L3134-L3135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3134-L3135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3134-L3135) · [Before (L2107-L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2107-L2113)

```diff
- html {
-   --fullyFancyTextStrokeWeight: 1px;
-   --notchTop: 0px;
-   --notchRight: 0px;
-   --notchBottom: 0px;
-   --notchLeft: 0px;
-   font-size: 16px
+ .Confetti.ActivatedConfetti .ConfettiParticle {
+   animation: particles-out .5s ease-out
```

#### 310. `bundles/bloxd.io/main.css` (Changed code · before: `L2116-L2119` → after: `L3138-L3145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3138-L3145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3138-L3145) · [Before (L2116-L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2116-L2119)

```diff
- @media(max-width:1800px) {
-   html {
-     font-size: 15px
-   }
+ .TextInput {
+   background: #303a59;
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   color: #fff;
+   font-family: var(--root-font-family);
+   outline: none;
+   text-align: center
```

#### 311. `bundles/bloxd.io/main.css` (Changed code · before: `L2122-L2125` → after: `L3148-L3149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3148-L3149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3148-L3149) · [Before (L2122-L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2122-L2125)

```diff
- @media(max-width:1600px) {
-   html {
-     font-size: 14px
-   }
+ .TextInput:focus {
+   border-color: #ffb914
```

#### 312. `bundles/bloxd.io/main.css` (Changed code · before: `L2128-L2132` → after: `L3152-L3155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3152-L3155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3152-L3155) · [Before (L2128-L2132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2128-L2132)

```diff
- @media(max-width:1200px) {
-   html {
-     --fullyFancyTextStrokeWeight: 0px;
-     font-size: 13px
-   }
+ .TextInput::-webkit-inner-spin-button,
+ .TextInput::-webkit-outer-spin-button {
+   -webkit-appearance: none;
+   margin: 0
```

#### 313. `bundles/bloxd.io/main.css` (Changed code · before: `L2135-L2138` → after: `L3158-L3159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3158-L3159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3158-L3159) · [Before (L2135-L2138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2135-L2138)

```diff
- @media(max-width:1100px) {
-   html {
-     font-size: 12px
-   }
+ .TextInput[type=number] {
+   -moz-appearance: textfield
```

#### 314. `bundles/bloxd.io/main.css` (Changed code · before: `L2141-L2144` → after: `L3162-L3167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3162-L3167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3162-L3167) · [Before (L2141-L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2141-L2144)

```diff
- @media(max-height:440px), (max-width:925px) {
-   html {
-     font-size: 10px
-   }
+ .RewardedCountdownFallback {
+   align-items: center;
+   display: flex;
+   flex-direction: column;
+   gap: .5rem;
+   padding: 1.5rem 3rem
```

#### 315. `bundles/bloxd.io/main.css` (Changed code · before: `L2147-L2150` → after: `L3170-L3171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3170-L3171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3170-L3171) · [Before (L2147-L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2147-L2150)

```diff
- @media(max-height:430px), (max-width:800px) {
-   html {
-     font-size: 9px
-   }
+ .RewardedCountdownFallback .RewardedCountdownFallbackTitle {
+   font-size: 1.6rem
```

#### 316. `bundles/bloxd.io/main.css` (Changed code · before: `L2153-L2156` → after: `L3174-L3177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3174-L3177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3174-L3177) · [Before (L2153-L2156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2153-L2156)

```diff
- @media(max-height:400px), (max-width:736px) {
-   html {
-     font-size: 8px
-   }
+ .RewardedCountdownFallback .RewardedCountdownFallbackTimer {
+   color: #ffb914;
+   font-size: 4rem;
+   font-weight: 900
```

#### 317. `bundles/bloxd.io/main.css` (Changed code · before: `L2159-L2162` → after: `L3180-L3182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3180-L3182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3180-L3182) · [Before (L2159-L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2159-L2162)

```diff
- @media(max-width:667px) {
-   html {
-     font-size: 7px
-   }
+ .TextFromServer {
+   min-width: 0;
+   white-space: pre-wrap
```

#### 318. `bundles/bloxd.io/main.css` (Changed code · before: `L2165-L2168` → after: `L3185-L3187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3185-L3187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3185-L3187) · [Before (L2165-L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2165-L2168)

```diff
- @media(orientation:portrait) {
-   html {
-     font-size: 16px
-   }
+ .IndividualText {
+   display: inline;
+   vertical-align: middle
```

#### 319. `bundles/bloxd.io/main.css` (Changed code · before: `L2171-L2174` → after: `L3190-L3192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3190-L3192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3190-L3192) · [Before (L2171-L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2171-L2174)

```diff
- @media(orientation:portrait)and (max-width:900px) {
-   html {
-     font-size: 14px
-   }
+ .IndividualText.ClickableIndividualText {
+   cursor: pointer;
+   pointer-events: auto
```

#### 320. `bundles/bloxd.io/main.css` (Changed code · before: `L2177-L2180` → after: `L3195-L3200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3195-L3200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3195-L3200) · [Before (L2177-L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2177-L2180)

```diff
- @media(orientation:portrait)and (max-width:600px) {
-   html {
-     font-size: 13px
-   }
+ .TextFromServerEntityNameWithTags {
+   align-items: center;
+   display: inline-flex;
+   gap: .2rem;
+   max-width: 100%;
+   vertical-align: middle
```

#### 321. `bundles/bloxd.io/main.css` (Changed code · before: `L2183-L2186` → after: `L3203-L3208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3203-L3208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3203-L3208) · [Before (L2183-L2186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2183-L2186)

```diff
- @media(orientation:portrait)and (max-width:450px) {
-   html {
-     font-size: 12px
-   }
+ .TextFromServerEntityNameWithTags .TextFromServerEntityName {
+   flex-shrink: 1;
+   overflow-x: hidden;
+   overflow-y: visible;
+   text-overflow: ellipsis;
+   white-space: nowrap
```

#### 322. `bundles/bloxd.io/main.css` (Changed code · before: `L2189-L2192` → after: `L3211-L3213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3211-L3213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3211-L3213) · [Before (L2189-L2192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2189-L2192)

```diff
- @media(orientation:portrait)and (max-width:360px) {
-   html {
-     font-size: 11px
-   }
+ .TextFromServerIngameItem {
+   display: inline-block;
+   vertical-align: middle
```

#### 323. `bundles/bloxd.io/main.css` (Changed code · before: `L2195-L2196` → after: `L3216-L3217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3216-L3217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3216-L3217) · [Before (L2195-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2195-L2196)

```diff
- code {
-   font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace
+ .TextFromServerFontawesomeIcon {
+   vertical-align: middle
```

#### 324. `bundles/bloxd.io/main.css` (Changed code · before: `L2199-L2201` → after: `L3220-L3222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3220-L3222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3220-L3222) · [Before (L2199-L2201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2199-L2201)

```diff
- input,
- input[type=number] {
-   font-family: var(--root-font-family)
+ .TextFromServerGameIcon {
+   display: inline-flex;
+   vertical-align: middle
```

#### 325. `bundles/bloxd.io/main.css` (Changed code · before: `L2204-L2212` → after: `L3225-L3227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3225-L3227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3225-L3227) · [Before (L2204-L2212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2204-L2212)

```diff
- input[type=number] {
-   background: #303a59;
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   color: #fff;
-   font-size: 1.2rem;
-   font-weight: 600;
-   outline: none;
-   text-align: center
+ .TextFromServerGameIcon.GameIcon>* {
+   height: 100%;
+   width: 100%
```

#### 326. `bundles/bloxd.io/main.css` (Changed code · before: `L2215-L2216` → after: `L3230-L3233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3230-L3233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3230-L3233) · [Before (L2215-L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2215-L2216)

```diff
- input[type=number]:focus {
-   border-color: #ffb914
+ .KeyboardButtonRepresentation.TextFromServerKeyBinding {
+   display: inline-flex;
+   margin-bottom: 0;
+   vertical-align: middle
```

#### 327. `bundles/bloxd.io/main.css` (Changed code · before: `L2219-L2221` → after: `L3236-L3237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3236-L3237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3236-L3237) · [Before (L2219-L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2219-L2221)

```diff
- a {
-   color: inherit;
-   text-decoration: none
+ .KeyboardButtonRepresentation.TextFromServerKeyBinding.ControllerButtonRepresentation {
+   --pad-glyph-size: 1.5em
```

#### 328. `bundles/bloxd.io/main.css` (Changed code · before: `L2224-L2228` → after: `L3240-L3243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3240-L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3240-L3243) · [Before (L2224-L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2224-L2228)

```diff
- .VisuallyHidden {
-   clip: rect(0, 0, 0, 0);
-   border: 0;
-   height: 1px;
-   margin: -1px;
+ .TextFromServerProgressBar {
+   box-sizing: content-box;
+   display: inline-block;
+   margin: 0 .35em;
```

#### 329. `bundles/bloxd.io/main.css` (Changed code · before: `L2230-L2233` → after: `L3245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3245) · [Before (L2230-L2233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2230-L2233)

```diff
-   padding: 0;
-   position: absolute;
-   white-space: nowrap;
-   width: 1px
+   vertical-align: middle
```

#### 330. `bundles/bloxd.io/main.css` (Changed code · before: `L2236-L2239` → after: `L3248-L3249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3248-L3249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3248-L3249) · [Before (L2236-L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2236-L2239)

```diff
- ::-webkit-scrollbar-track {
-   background-color: inherit;
-   border-radius: 0;
-   box-shadow: inset 0 0 6px rgba(0, 0, 0, .3)
+ .HudTextPanel.NoBackground .TextFromServerProgressBar {
+   border: 1px solid rgba(48, 58, 89, .4)
```

#### 331. `bundles/bloxd.io/main.css` (Changed code · before: `L2242-L2246` → after: `L3252-L3255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3252-L3255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3252-L3255) · [Before (L2242-L2246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2242-L2246)

```diff
- ::-webkit-scrollbar {
-   background-color: inherit;
-   border-radius: 0;
-   max-width: 12px;
-   width: 1.5vmin
+ .TextFromServerProgressBar .TextFromServerProgressBarFill {
+   display: block;
+   height: 100%;
+   overflow: hidden
```

#### 332. `bundles/bloxd.io/main.css` (Changed code · before: `L2249-L2252` → after: `L3258-L3260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3258-L3260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3258-L3260) · [Before (L2249-L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2249-L2252)

```diff
- ::-webkit-scrollbar-thumb {
-   background-color: hsla(0, 0%, 95%, .3);
-   border-radius: 0;
-   box-shadow: inset 0 0 6px rgba(0, 0, 0, .3)
+ .TextFromServerProgressBar .TextFromServerProgressBarFill .TextFromServerProgressBarFillInner {
+   display: block;
+   height: 100%
```

#### 333. `bundles/bloxd.io/main.css` (Changed code · before: `L2255-L2259` → after: `L3263-L3270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3263-L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3263-L3270) · [Before (L2255-L2259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2255-L2259)

```diff
- .FullyFancyText {
-   -webkit-text-stroke: calc(var(--fullyFancyTextStrokeWeight)*2) #303a59;
-   font-weight: 900;
-   paint-order: stroke fill;
-   text-shadow: -1px -1px 0 #303a59, 1px -1px 0 #303a59, -1px 1px 0 #303a59, 1px 1px 0 #303a59, 0 3px 2px #303a59
+ .ItemSlotBar {
+   background: #1a1f2e;
+   bottom: 8%;
+   height: max(.35rem, 4px);
+   left: 10%;
+   pointer-events: none;
+   position: absolute;
+   right: 10%
```

#### 334. `bundles/bloxd.io/main.css` (Changed code · before: `L2262-L2264` → after: `L3273-L3276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3273-L3276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3273-L3276) · [Before (L2262-L2264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2262-L2264)

```diff
- .SmallTextBold {
-   font-weight: 700;
-   text-shadow: -1px -1px 0 #303a59, -1px 0 0 #303a59, -1px 1px 0 #303a59, 0 -1px 0 #303a59, 0 0 0 #303a59, 0 1px 0 #303a59, 1px -1px 0 #303a59, 1px 0 0 #303a59, 1px 1px 0 #303a59
+ .ItemSlotBar i {
+   background: #3fd2f2;
+   display: block;
+   height: 100%
```

#### 335. `bundles/bloxd.io/main.css` (Changed code · before: `L2267-L2269` → after: `L3279-L3280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3279-L3280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3279-L3280) · [Before (L2267-L2269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2267-L2269)

```diff
- .SmallTextBold .svg-inline--fa,
- .SmallTextBold.svg-inline--fa {
-   paint-order: stroke fill
+ .ItemSlotBar.Mid i {
+   background: #ffb914
```

#### 336. `bundles/bloxd.io/main.css` (Changed code · before: `L2272-L2277` → after: `L3283-L3285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3283-L3285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3283-L3285) · [Before (L2272-L2277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2272-L2277)

```diff
- .SmallTextBold .svg-inline--fa path:only-of-type,
- .SmallTextBold.svg-inline--fa path:only-of-type {
-   stroke: #303a59;
-   vector-effect: non-scaling-stroke;
-   stroke-width: 2px;
-   stroke-linejoin: round
+ .ItemSlotBar.Low i {
+   animation: itemSlotBarLow 1s steps(2, jump-none) infinite;
+   background: #e34f4f
```

#### 337. `bundles/bloxd.io/main.css` (Changed code · before: `L2280-L2282` → after: `L3288-L3291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3288-L3291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3288-L3291) · [Before (L2280-L2282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2280-L2282)

```diff
- .SmallTextLight {
-   font-weight: 600;
-   text-shadow: -1px -1px 0 #303a59, -1px 0 0 #303a59, -1px 1px 0 #303a59, 0 -1px 0 #303a59, 0 0 0 #303a59, 0 1px 0 #303a59, 1px -1px 0 #303a59, 1px 0 0 #303a59, 1px 1px 0 #303a59
+ @keyframes itemSlotBarLow {
+   to {
+     opacity: .35
+   }
```

#### 338. `bundles/bloxd.io/main.css` (Changed code · before: `L2285-L2287` → after: `L3294-L3297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3294-L3297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3294-L3297) · [Before (L2285-L2287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2285-L2287)

```diff
- .SmallTextLight .svg-inline--fa,
- .SmallTextLight.svg-inline--fa {
-   paint-order: stroke fill
+ @media(prefers-reduced-motion:reduce) {
+   .ItemSlotBar.Low i {
+     animation: none
+   }
```

#### 339. `bundles/bloxd.io/main.css` (Changed code · before: `L2290-L2295` → after: `L3300-L3313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3300-L3313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3300-L3313) · [Before (L2290-L2295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2290-L2295)

```diff
- .SmallTextLight .svg-inline--fa path:only-of-type,
- .SmallTextLight.svg-inline--fa path:only-of-type {
-   stroke: #303a59;
-   vector-effect: non-scaling-stroke;
-   stroke-width: 2px;
-   stroke-linejoin: round
+ .KeyboardButtonRepresentation {
+   align-items: center;
+   background-color: #303a59;
+   border: .1em solid #838383;
+   box-shadow: 0 .2em 0 #838383;
+   box-sizing: border-box;
+   color: #fff;
+   display: flex;
+   font-weight: 700;
+   justify-content: center;
+   margin-bottom: .3em;
+   min-width: 2em;
+   padding: .2em .4em;
+   transition: background-color .05s, color .05s, box-shadow .05s, transform .05s
```

#### 340. `bundles/bloxd.io/main.css` (Changed code · before: `L2298-L2299` → after: `L3316-L3318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3316-L3318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3316-L3318) · [Before (L2298-L2299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2298-L2299)

```diff
- .ScaleOnHover {
-   transition: transform .2s
+ .KeyboardButtonRepresentation.Pressed {
+   background-color: #394980;
+   transform: translateY(.2em)
```

#### 341. `bundles/bloxd.io/main.css` (Changed code · before: `L2302-L2303` → after: `L3321-L3327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3321-L3327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3321-L3327) · [Before (L2302-L2303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2302-L2303)

```diff
- .ScaleOnHover:hover {
-   transform: scale(1.1)
+ .KeyboardButtonRepresentation.ControllerButtonRepresentation {
+   --pad-glyph-size: calc(2.1em + clamp(0px, min(100vh, 56.25vw) - 720px, 720px)*0.02);
+   background-color: transparent;
+   border: none;
+   box-shadow: none;
+   min-width: 0;
+   padding: 0
```

#### 342. `bundles/bloxd.io/main.css` (Changed code · before: `L2306-L2308` → after: `L3330-L3338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3330-L3338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3330-L3338) · [Before (L2306-L2308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2306-L2308)

```diff
- .Menu {
-   align-items: stretch;
-   display: flex
+ .FriendBadge {
+   align-items: center;
+   color: #f38ab6;
+   display: inline-flex;
+   flex-shrink: 0;
+   font-size: .75em;
+   margin-left: .3em;
+   opacity: .8;
+   vertical-align: middle
```

#### 343. `bundles/bloxd.io/main.css` (Changed code · before: `L2311-L2312` → after: `L3341-L3342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3341-L3342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3341-L3342) · [Before (L2311-L2312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2311-L2312)

```diff
- .Menu .MenuSideBar {
-   background-color: #22283b;
+ .LoginButtonContainer {
+   align-items: stretch;
```

#### 344. `bundles/bloxd.io/main.css` (Changed code · before: `L2317-L2322` → after: `L3345-L3346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3345-L3346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3345-L3346) · [Before (L2317-L2322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2317-L2322)

```diff
-   justify-content: stretch;
-   max-width: calc(13rem + var(--notchLeft));
-   overflow-y: auto;
-   padding-bottom: 4rem;
-   padding-left: var(--notchLeft);
-   padding-top: 4rem
+   justify-content: center;
+   position: relative
```

#### 345. `bundles/bloxd.io/main.css` (Changed code · before: `L2325-L2326` → after: `L3349-L3351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3349-L3351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3349-L3351) · [Before (L2325-L2326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2325-L2326)

```diff
- .Menu .MenuSideBar .MenuSideBarBody {
-   box-sizing: border-box;
+ .LoginButtonContainer .LoggingInLoader {
+   align-items: center;
+   background-color: rgba(0, 0, 0, .5);
```

#### 346. `bundles/bloxd.io/main.css` (Changed code · before: `L2328-L2330` → after: `L3353-L3360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3353-L3360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3353-L3360) · [Before (L2328-L2330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2328-L2330)

```diff
-   flex-direction: column;
-   flex-grow: 1;
-   gap: 1rem
+   font-size: 2rem;
+   height: 100%;
+   justify-content: center;
+   left: 0;
+   position: absolute;
+   top: 0;
+   width: 100%;
+   z-index: 2
```

#### 347. `bundles/bloxd.io/main.css` (Changed code · before: `L2333` → after: `L3363-L3372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3363-L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3363-L3372) · [Before (L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2333)

```diff
- .Menu .MenuSideBar .MenuSideBarBody .MenuSideBarSection {
+ .LoginButtonContainer .LoginButton {
+   align-items: center;
+   background: none;
+   background-color: #f5f5f5;
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   box-sizing: content-box;
+   color: inherit;
+   color: #000;
+   cursor: pointer;
```

#### 348. `bundles/bloxd.io/main.css` (Changed code · before: `L2335-L2336` → after: `L3374-L3389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3374-L3389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3374-L3389) · [Before (L2335-L2336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2335-L2336)

```diff
-   flex-direction: column;
-   gap: .5rem
+   font: inherit;
+   font-weight: 600;
+   gap: .4em;
+   height: 2.3em;
+   justify-content: flex-start;
+   letter-spacing: inherit;
+   line-height: inherit;
+   margin: 0;
+   overflow: hidden;
+   padding: 0 1rem;
+   position: relative;
+   text-align: inherit;
+   text-shadow: inherit;
+   text-shadow: none;
+   text-transform: inherit;
+   transition: transform .2s, box-shadow .2s, filter .2s
```

#### 349. `bundles/bloxd.io/main.css` (Changed code · before: `L2339-L2344` → after: `L3392-L3395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3392-L3395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3392-L3395) · [Before (L2339-L2344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2339-L2344)

```diff
- .Menu .MenuSideBar .MenuSideBarBody .MenuSideBarSection .MenuSideBarSectionTitle {
-   color: #838383;
-   font-size: .85em;
-   font-weight: 800;
-   padding: 0 1rem;
-   text-transform: uppercase
+ @media(hover:hover) {
+   .LoginButtonContainer .LoginButton:hover {
+     transform: scale(1.05)
+   }
```

#### 350. `bundles/bloxd.io/main.css` (Changed code · before: `L2347-L2353` → after: `L3398-L3399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3398-L3399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3398-L3399) · [Before (L2347-L2353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2347-L2353)

```diff
- .Menu .MenuSideBar .MenuSideBarBody .MenuSideBarBodyTab {
-   border-right: .3rem solid #cfcfcf;
-   cursor: pointer;
-   display: flex;
-   font-weight: 600;
-   gap: .5rem;
-   padding: .2rem 1rem
+ .LoginButtonContainer .LoginButton.pad-focused {
+   transform: scale(1.05)
```

#### 351. `bundles/bloxd.io/main.css` (Changed code · before: `L2356-L2362` → after: `L3402-L3405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3402-L3405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3402-L3405) · [Before (L2356-L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2356-L2362)

```diff
- @media(pointer:coarse) {
-   .Menu .MenuSideBar .MenuSideBarBody .MenuSideBarBodyTab {
-     align-items: center;
-     box-sizing: border-box;
-     min-height: 44px;
-     min-width: 44px
-   }
+ .LoginButtonContainer .LoginButton[data-pressing] {
+   filter: brightness(.8);
+   transform: none;
+   transition: none
```

#### 352. `bundles/bloxd.io/main.css` (Changed code · before: `L2365-L2369` → after: `L3408-L3411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3408-L3411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3408-L3411) · [Before (L2365-L2369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2365-L2369)

```diff
- @media(hover:hover) {
-   .Menu .MenuSideBar .MenuSideBarBody .MenuSideBarBodyTab:hover {
-     background-color: #3c4b68;
-     border-right: .3rem solid #b6830e
-   }
+ .LoginButtonContainer .LoginButton.LoginButtonsLoggedIn {
+   filter: brightness(.7);
+   pointer-events: none;
+   transition: filter .5s
```

#### 353. `bundles/bloxd.io/main.css` (Changed code · before: `L2372-L2374` → after: `L3414-L3415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3414-L3415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3414-L3415) · [Before (L2372-L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2372-L2374)

```diff
- .Menu .MenuSideBar .MenuSideBarBody .MenuSideBarBodyTab.pad-focused {
-   background-color: #3c4b68;
-   border-right: .3rem solid #b6830e
+ .LoginButtonContainer .LoginButton.LoginButtonsLoggedIn:not(.LoginButtonLinked) {
+   border-right: none
```

#### 354. `bundles/bloxd.io/main.css` (Changed code · before: `L2377-L2381` → after: `L3418-L3419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3418-L3419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3418-L3419) · [Before (L2377-L2381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2377-L2381)

```diff
- @media(hover:none) {
-   .Menu .MenuSideBar .MenuSideBarBody .MenuSideBarBodyTab:active {
-     background-color: #3c4b68;
-     border-right: .3rem solid #b6830e
-   }
+ .LoginButtonContainer .LoginButton.LoginButtonsLoggedIn.LoginButtonLinked {
+   filter: brightness(1)
```

#### 355. `bundles/bloxd.io/main.css` (Changed code · before: `L2384-L2386` → after: `L3422-L3426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3422-L3426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3422-L3426) · [Before (L2384-L2386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2384-L2386)

```diff
- .Menu .MenuSideBar .MenuSideBarBody .MenuSideBarBodyTab:focus-visible {
-   outline: 2px solid #ffb914;
-   outline-offset: -2px
+ .LoginButtonContainer .LoginButton .LoginButtonIcon {
+   align-items: center;
+   display: flex;
+   justify-content: center;
+   width: 1.5em
```

#### 356. `bundles/bloxd.io/main.css` (Changed code · before: `L2389-L2392` → after: `L3429-L3436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3429-L3436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3429-L3436) · [Before (L2389-L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2389-L2392)

```diff
- .Menu .MenuSideBar .MenuSideBarBody .MenuSideBarBodyTab.ActiveMenuSideBarBodyTab {
-   background-color: rgba(255, 185, 20, .15);
-   border-right: .3rem solid #ffb914;
-   color: #ffb914
+ .LoginButtonContainer .LoginButton .LoginButtonIcon img {
+   --icon-width: 1.1em;
+   --icon-height: 1.1em;
+   flex: none;
+   height: calc(var(--icon-height) + 6px);
+   margin: -3px;
+   max-width: none;
+   width: calc(var(--icon-width) + 6px)
```

#### 357. `bundles/bloxd.io/main.css` (Changed code · before: `L2395-L2397` → after: `L3439-L3441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3439-L3441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3439-L3441) · [Before (L2395-L2397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2395-L2397)

```diff
- .Menu .MenuSideBar .MenuSideBarBody .MenuSideBarBodyTab .MenuSideBarBodyTabIcon .svg-inline--fa {
-   font-size: .95em;
-   opacity: .5
+ .LoginButtonContainer .LoginButton .LoginButtonIcon img.LoginIconWide {
+   --icon-width: 1.35em;
+   --icon-height: 1.2em
```

#### 358. `bundles/bloxd.io/main.css` (Changed code · before: `L2400-L2401` → after: `L3444-L3446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3444-L3446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3444-L3446) · [Before (L2400-L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2400-L2401)

```diff
- .Menu .MenuSideBar .MenuSideBarBody .MenuSideBarBodyTab.MenuSideBarLink {
-   align-items: center
+ .LoginButtonContainer .LoginButton .LoginButtonIcon img.LoginIconApple {
+   --icon-width: 1.05em;
+   --icon-height: 1.4em
```

#### 359. `bundles/bloxd.io/main.css` (Changed code · before: `L2404-L2407` → after: `L3449-L3451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3449-L3451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3449-L3451) · [Before (L2404-L2407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2404-L2407)

```diff
- .Menu .MenuSideBar .MenuSideBarBody .MenuSideBarBodyTab.MenuSideBarLink .MenuSideBarLinkArrow {
-   color: #cfcfcf;
-   font-size: .8em;
-   margin-left: auto
+ .LoginButtonContainer .LoginButton .LoginButtonIcon img.LoginIconGooglePlay {
+   --icon-width: 0.9625em;
+   --icon-height: 1.1em
```

#### 360. `bundles/bloxd.io/main.css` (Changed code · before: `L2410-L2414` → after: `L3454-L3463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3454-L3463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3454-L3463) · [Before (L2410-L2414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2410-L2414)

```diff
- .Menu .MenuBody {
-   flex-grow: 1;
-   min-width: 0;
-   padding-bottom: var(--notchBottom);
-   position: relative
+ .LoginButtonContainer .LoginButtonAction {
+   align-items: center;
+   box-shadow: none;
+   display: flex;
+   height: 2.3em;
+   justify-content: center;
+   min-width: 4em;
+   overflow-x: hidden;
+   text-overflow: ellipsis;
+   white-space: nowrap
```

#### 361. `bundles/bloxd.io/main.css` (Changed code · before: `L2417-L2424` → after: `L3466-L3470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3466-L3470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3466-L3470) · [Before (L2417-L2424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2417-L2424)

```diff
- @keyframes shiny-button {
-   25% {
-     opacity: 1;
-     transform: translate(-28%, -28%) rotate(30deg);
-     transition-duration: .7s, .7s, .15s;
-     transition-property: transform, opacity;
-     transition-timing-function: ease
-   }
+ .LoginButtonContainer .LoginButtonLinkedLabel,
+ .LoginButtonContainer .LoginButtonUnlink {
+   font-size: 1rem;
+   margin-left: .6rem
+ }
```

#### 362. `bundles/bloxd.io/main.css` (Changed code · before: `L2426-L2430` → after: `L3472-L3475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3472-L3475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3472-L3475) · [Before (L2426-L2430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2426-L2430)

```diff
-   50% {
-     opacity: 0;
-     transform: translate(-28%, -28%) rotate(30deg);
-     transition-property: transform, opacity
-   }
+ .LoginButtonContainer .LoginButtonUnlink {
+   align-self: center;
+   position: relative
+ }
```

#### 363. `bundles/bloxd.io/main.css` (Changed code · before: `L2432-L2435` → after: `L3477-L3481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3477-L3481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3477-L3481) · [Before (L2432-L2435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2432-L2435)

```diff
-   to {
-     opacity: 0;
-     transform: translate(-28%, -28%) rotate(30deg);
-     transition-property: transform, opacity
+ @media(pointer:coarse) {
+   .LoginButtonContainer .LoginButtonUnlink:before {
+     content: "";
+     inset: min(0px, (100% - 44px)/2) min(0px, (100% - 44px)/2);
+     position: absolute
```

#### 364. `bundles/bloxd.io/main.css` (Changed code · before: `L2439-L2441` → after: `L3485-L3490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3485-L3490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3485-L3490) · [Before (L2439-L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2439-L2441)

```diff
- .ExitButton {
-   -webkit-text-stroke: 2px #fff;
-   font-size: 1.5rem
+ .LoginButtonContainer .LoginButtonLinkedLabel {
+   align-items: center;
+   color: #cfcfcf;
+   display: flex;
+   gap: .3em;
+   white-space: nowrap
```

#### 365. `bundles/bloxd.io/main.css` (Changed code · before: `L2444-L2445` → after: `L3493-L3496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3493-L3496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3493-L3496) · [Before (L2444-L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2444-L2445)

```diff
- .ExitButton .NewButton .ButtonBody {
-   padding: 0
+ .TopRightIconsContainer {
+   pointer-events: auto;
+   position: relative;
+   z-index: 14
```

#### 366. `bundles/bloxd.io/main.css` (Changed code · before: `L2448-L2450` → after: `L3499-L3503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3499-L3503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3499-L3503) · [Before (L2448-L2450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2448-L2450)

```diff
- .ExitButton .NewButton .ButtonBody .ExitButtonInner {
-   padding: .15em .45em;
-   text-shadow: -2px -2px 0 #303a59, -2px -1px 0 #303a59, -2px 0 0 #303a59, -2px 1px 0 #303a59, -2px 2px 0 #303a59, -1px -2px 0 #303a59, -1px -1px 0 #303a59, -1px 0 0 #303a59, -1px 1px 0 #303a59, -1px 2px 0 #303a59, 0 -2px 0 #303a59, 0 -1px 0 #303a59, 0 0 0 #303a59, 0 1px 0 #303a5 … [truncated]
+ .TopRightIconsContainer .TopRightIcons {
+   display: flex;
+   flex-direction: row-reverse;
+   font-size: 2.6rem;
+   gap: 1.25rem
```

#### 367. `bundles/bloxd.io/main.css` (Changed code · before: `L2453-L2455` → after: `L3506-L3507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3506-L3507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3506-L3507) · [Before (L2453-L2455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2453-L2455)

```diff
- .ExitButton .NewButton .ButtonBody .ExitButtonInner .svg-inline--fa,
- .ExitButton .NewButton .ButtonBody .ExitButtonInner.svg-inline--fa {
-   paint-order: stroke fill
+ .TopRightIconsContainer .TopRightIcons .TopRightIcon {
+   cursor: pointer
```

#### 368. `bundles/bloxd.io/main.css` (Changed code · before: `L2458-L2464` → after: `L3510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3510) · [Before (L2458-L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2458-L2464)

```diff
- .ExitButton .NewButton .ButtonBody .ExitButtonInner .svg-inline--fa path:only-of-type,
- .ExitButton .NewButton .ButtonBody .ExitButtonInner.svg-inline--fa path:only-of-type {
-   stroke: #303a59;
-   vector-effect: non-scaling-stroke;
-   stroke-width: 4px;
-   stroke-linejoin: round
- }
+ @media(pointer:coarse) {
```

#### 369. `bundles/bloxd.io/main.css` (Changed code · before: `L2466-L2470` → after: `L3512-L3518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3512-L3518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3512-L3518) · [Before (L2466-L2470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2466-L2470)

```diff
- .GoldButton {
-   --buttonNormalColour: #ffb914;
-   --buttonHoverColour: #fcd373;
-   --buttonTopColour: #fcd373;
-   --buttonBottomColour: #b6830e
+   .HomeHeader .TopRightIconsContainer .TopRightIcons .NotificationBell:before,
+   .HomeHeader .TopRightIconsContainer .TopRightIcons .StopRecordingButton:before,
+   .HomeHeader .TopRightIconsContainer .TopRightIcons .TopRightIcon>.UiItemIcon:before {
+     content: "";
+     inset: min(0px, (100% - 44px)/2) max(var(--header-icon-gap, 1.25rem)/-2, min(0px, (100% - 44px)/2));
+     position: absolute
+   }
```

#### 370. `bundles/bloxd.io/main.css` (Changed code · before: `L2473-L2477` → after: `L3521-L3532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3521-L3532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3521-L3532) · [Before (L2473-L2477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2473-L2477)

```diff
- .DarkBlueButton {
-   --buttonNormalColour: #3c4b68;
-   --buttonHoverColour: #394980;
-   --buttonTopColour: #394980;
-   --buttonBottomColour: #22283b
+ @media(pointer:coarse)and (orientation:landscape)and (min-width:800px) {
+   .HomeHeader .TopRightIconsContainer .TopRightIcons {
+     --header-icon-gap: max(1.25rem, 44px - 1em);
+     gap: var(--header-icon-gap)
+   }
+ 
+   .HomeHeader .TopRightIconsContainer .TopRightIcons .NotificationBell,
+   .HomeHeader .TopRightIconsContainer .TopRightIcons .TopRightIcon>.UiItemIcon {
+     display: flex;
+     justify-content: center;
+     min-width: 1em
+   }
```

#### 371. `bundles/bloxd.io/main.css` (Changed code · before: `L2480-L2484` → after: `L3535-L3536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3535-L3536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3535-L3536) · [Before (L2480-L2484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2480-L2484)

```diff
- .BlueButton {
-   --buttonNormalColour: #2e80ee;
-   --buttonHoverColour: #4f94f1;
-   --buttonTopColour: #4f94f1;
-   --buttonBottomColour: #2671d7
+ .HomeHeader .TopRightIconsContainer .TopRightIcons .TopRightStopRecording {
+   align-self: center
```

#### 372. `bundles/bloxd.io/main.css` (Changed code · before: `L2487-L2491` → after: `L3539-L3541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3539-L3541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3539-L3541) · [Before (L2487-L2491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2487-L2491)

```diff
- .PurpleButton {
-   --buttonNormalColour: #9b39d5;
-   --buttonHoverColour: #ad50e3;
-   --buttonTopColour: #ad50e3;
-   --buttonBottomColour: #6d2e91
+ .HomeHeader .TopRightIconsContainer .TopRightIcons .TopRightStopRecording .StopRecordingButton {
+   font-size: 1.6rem;
+   padding: .4rem
```

#### 373. `bundles/bloxd.io/main.css` (Changed code · before: `L2494-L2498` → after: `L3544-L3548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3544-L3548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3544-L3548) · [Before (L2494-L2498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2494-L2498)

```diff
- .GreenButton {
-   --buttonNormalColour: #1dd06d;
-   --buttonHoverColour: #36e785;
-   --buttonTopColour: #36e785;
-   --buttonBottomColour: #07940e
+ .TopRightIconsContainer .TopRightIcons.TouchInGame {
+   --row-icon-box: max(28px, max(36px, 3rem) * var(--hud-menu-scale, 1));
+   align-items: center;
+   font-size: calc(var(--row-icon-box)*.66);
+   gap: 4px
```

#### 374. `bundles/bloxd.io/main.css` (Changed code · before: `L2501-L2505` → after: `L3551-L3556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3551-L3556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3551-L3556) · [Before (L2501-L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2501-L2505)

```diff
- .RedButton {
-   --buttonNormalColour: #e34f4f;
-   --buttonHoverColour: #fc6464;
-   --buttonTopColour: #fc6464;
-   --buttonBottomColour: #cc1414
+ .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightIcon>.UiItemIcon {
+   align-items: center;
+   display: flex;
+   height: var(--row-icon-box);
+   justify-content: center;
+   width: var(--row-icon-box)
```

#### 375. `bundles/bloxd.io/main.css` (Changed code · before: `L2508-L2510` → after: `L3559-L3564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3559-L3564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3559-L3564) · [Before (L2508-L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2508-L2510)

```diff
- .RainbowButton {
-   --buttonTopColour: hsla(0, 0%, 100%, .25);
-   --buttonBottomColour: rgba(0, 0, 0, .2)
+ @media(pointer:coarse) {
+   .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCameraIcon>.UiItemIcon {
+     box-sizing: border-box;
+     min-height: 44px;
+     min-width: 44px
+   }
```

#### 376. `bundles/bloxd.io/main.css` (Changed code · before: `L2513-L2522` → after: `L3567-L3569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3567-L3569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3567-L3569) · [Before (L2513-L2522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2513-L2522)

```diff
- .RainbowButton:before {
-   animation: rainbowShimmer 6s linear infinite;
-   background: linear-gradient(90deg, #ff6b9d, #ffa64d, gold, #7dd87d, #6bb5ff, #c084fc, #ff6b9d) 0 0/22.22222% 100%;
-   bottom: 0;
-   content: "";
-   left: -800%;
-   pointer-events: none;
-   position: absolute;
-   top: 0;
-   width: 900%
+ .TopRightIconsContainer .TopRightIcons.Column {
+   align-items: center;
+   flex-direction: column-reverse
```

#### 377. `bundles/bloxd.io/main.css` (Changed code · before: `L2525-L2528` → after: `L3572-L3573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3572-L3573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3572-L3573) · [Before (L2525-L2528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2525-L2528)

```diff
- @media(hover:hover) {
-   .RainbowButton:hover {
-     filter: brightness(1.15)
-   }
+ .TopRightIconsContainer .TopRightIcons .TopRightTrayToggle {
+   position: relative
```

#### 378. `bundles/bloxd.io/main.css` (Changed code · before: `L2531-L2532` → after: `L3576-L3577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3576-L3577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3576-L3577) · [Before (L2531-L2532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2531-L2532)

```diff
- .RainbowButton.pad-focused {
-   filter: brightness(1.15)
+ .TopRightIconsContainer .TopRightIcons .TopRightTrayToggle.Open>.UiItemIcon {
+   color: #ffb914
```

#### 379. `bundles/bloxd.io/main.css` (Changed code · before: `L2535-L2538` → after: `L3580-L3581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3580-L3581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3580-L3581) · [Before (L2535-L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2535-L2538)

```diff
- @media(hover:none) {
-   .RainbowButton:active {
-     filter: brightness(1.15)
-   }
+ .TopRightIconsContainer .TopRightIcons .TopRightTrayToggle.Empty {
+   visibility: hidden
```

#### 380. `bundles/bloxd.io/main.css` (Changed code · before: `L2541-L2542` → after: `L3584-L3585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3584-L3585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3584-L3585) · [Before (L2541-L2542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2541-L2542)

```diff
- .RainbowButton.DisabledNewButton {
-   background: #a4a4a4
+ .TopRightIconsContainer .TopRightIcons .TopRightTrayToggle.Gone {
+   display: none
```

#### 381. `bundles/bloxd.io/main.css` (Changed code · before: `L2545-L2546` → after: `L3588-L3597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3588-L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3588-L3597) · [Before (L2545-L2546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2545-L2546)

```diff
- .RainbowButton.DisabledNewButton:before {
-   content: none
+ .TopRightIconsContainer .TopRightIcons .TopRightTrayToggle .TopRightTray {
+   background-color: rgba(38, 52, 93, .85);
+   border-radius: 0;
+   display: flex;
+   flex-direction: column;
+   gap: 4px;
+   padding: 4px;
+   position: absolute;
+   right: calc(100% + 4px);
+   top: 0
```

#### 382. `bundles/bloxd.io/main.css` (Changed code · before: `L2549-L2553` → after: `L3600-L3603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3600-L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3600-L3603) · [Before (L2549-L2553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2549-L2553)

```diff
- .DisabledNewButton {
-   --buttonNormalColour: #a4a4a4;
-   --buttonHoverColour: #a4a4a4;
-   --buttonTopColour: #cfcfcf;
-   --buttonBottomColour: #838383
+ .TopRightElements:has(.TopRightIcons.Column) {
+   align-items: flex-end;
+   flex-direction: column-reverse;
+   gap: .25rem
```

#### 383. `bundles/bloxd.io/main.css` (Changed code · before: `L2556-L2567` → after: `L3606-L3607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3606-L3607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3606-L3607) · [Before (L2556-L2567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2556-L2567)

```diff
- .NewButton {
-   align-items: center;
-   background-color: var(--buttonNormalColour);
-   cursor: pointer;
-   display: flex;
-   justify-content: center;
-   overflow: hidden;
-   position: relative;
-   text-align: center;
-   text-shadow: -1px -1px 0 #303a59, -1px 0 0 #303a59, -1px 1px 0 #303a59, 0 -1px 0 #303a59, 0 0 0 #303a59, 0 1px 0 #303a59, 1px -1px 0 #303a59, 1px 0 0 #303a59, 1px 1px 0 #303a59;
-   transition: transform .2s;
-   z-index: 1
+ .TopRightElements:has(.TopRightIcons.Column) .TopRightElementsRight {
+   height: auto
```

#### 384. `bundles/bloxd.io/main.css` (Changed code · before: `L2570-L2572` → after: `L3610-L3611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3610-L3611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3610-L3611) · [Before (L2570-L2572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2570-L2572)

```diff
- .NewButton .svg-inline--fa,
- .NewButton.svg-inline--fa {
-   paint-order: stroke fill
+ .TopRightElements:has(.TopRightIcons.Column) .TopRightElementsRight .SocialBar {
+   position: relative
```

#### 385. `bundles/bloxd.io/main.css` (Changed code · before: `L2575-L2580` → after: `L3614-L3616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3614-L3616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3614-L3616) · [Before (L2575-L2580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2575-L2580)

```diff
- .NewButton .svg-inline--fa path:only-of-type,
- .NewButton.svg-inline--fa path:only-of-type {
-   stroke: #303a59;
-   vector-effect: non-scaling-stroke;
-   stroke-width: 2px;
-   stroke-linejoin: round
+ .HudMove-menu .RightElements .TopRightIconsContainer {
+   left: calc(var(--hud-menu-dx, 0)*100vw);
+   top: calc(var(--hud-menu-dy, 0)*var(--hud-viewport-height))
```

#### 386. `bundles/bloxd.io/main.css` (Changed code · before: `L2583-L2586` → after: `L3619-L3620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3619-L3620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3619-L3620) · [Before (L2583-L2586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2583-L2586)

```diff
- .NewButton {
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32)
+ .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightEmotesIcon>.UiItemIcon>.ScaleOnHover {
+   scale: calc(var(--hud-emotes-scale)/var(--hud-menu-scale, 1))
```

#### 387. `bundles/bloxd.io/main.css` (Changed code · before: `L2589-L2593` → after: `L3623-L3624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3623-L3624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3623-L3624) · [Before (L2589-L2593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2589-L2593)

```diff
- @media(hover:hover) {
-   .NewButton:hover {
-     background-color: var(--buttonHoverColour);
-     transform: scale(1.05)
-   }
+ .HudHide-emotes .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightEmotesIcon {
+   display: none
```

#### 388. `bundles/bloxd.io/main.css` (Changed code · before: `L2596-L2598` → after: `L3627-L3630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3627-L3630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3627-L3630) · [Before (L2596-L2598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2596-L2598)

```diff
- .NewButton.pad-focused {
-   background-color: var(--buttonHoverColour);
-   transform: scale(1.05)
+ .HudMove-emotes .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightEmotesIcon {
+   --row-icon-key: calc(var(--touch-key-size, calc(5 * clamp(1rem, 1.45vw, 1.5rem))) * var(--hud-emotes-scale, 1));
+   height: var(--row-icon-box);
+   width: var(--row-icon-box)
```

#### 389. `bundles/bloxd.io/main.css` (Changed code · before: `L2601-L2604` → after: `L3633-L3635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3633-L3635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3633-L3635) · [Before (L2601-L2604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2601-L2604)

```diff
- @media(hover:none) {
-   .NewButton:active {
-     background-color: var(--buttonHoverColour);
-     transform: scale(1.05)
+ @media(orientation:portrait)and (max-width:600px) {
+   .HudMove-emotes .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightEmotesIcon {
+     --row-icon-key: calc(var(--touch-key-size, calc(5 * min(10px, 2.9vw))) * var(--hud-emotes-scale, 1))
```

#### 390. `bundles/bloxd.io/main.css` (Changed code · before: `L2608-L2611` → after: `L3639-L3644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3639-L3644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3639-L3644) · [Before (L2608-L2611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2608-L2611)

```diff
- .NewButton:active,
- .NewButton[data-pressing] {
-   filter: brightness(.92);
-   transform: translateY(1px)
+ .HudMove-emotes .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightEmotesIcon.OutOfTray {
+   height: 0;
+   min-height: 0;
+   min-width: 0;
+   position: absolute;
+   width: 0
```

#### 391. `bundles/bloxd.io/main.css` (Changed code · before: `L2614-L2615` → after: `L3647-L3657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3647-L3657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3647-L3657) · [Before (L2614-L2615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2614-L2615)

```diff
- .NewButton[data-pressing] {
-   transition: none
+ .HudMove-emotes .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightEmotesIcon>.UiItemIcon {
+   align-items: center;
+   background-color: rgba(60, 75, 104, .72);
+   border: 2px solid #0f0f0f;
+   box-shadow: inset 0 1.5px 0 #586e99, 0 3px 0 #1a1f2e;
+   box-sizing: border-box;
+   color: #fff;
+   display: flex;
+   flex-direction: column;
+   justify-content: center;
+   text-shadow: -1px -1px 0 #000, -1px 0 0 #000, -1px 1px 0 #000, 0 -1px 0 #000, 0 0 0 #000, 0 1px 0 #000, 1px -1px 0 #000, 1px 0 0 #000, 1px 1px 0 #000
```

#### 392. `bundles/bloxd.io/main.css` (Changed code · before: `L2618-L2620` → after: `L3660-L3662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3660-L3662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3660-L3662) · [Before (L2618-L2620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2618-L2620)

```diff
- .NewButton:focus-visible {
-   outline: 2px solid #ffb914;
-   outline-offset: 2px
+ .HudMove-emotes .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightEmotesIcon>.UiItemIcon .svg-inline--fa,
+ .HudMove-emotes .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightEmotesIcon>.UiItemIcon.svg-inline--fa {
+   paint-order: stroke fill
```

#### 393. `bundles/bloxd.io/main.css` (Changed code · before: `L2623-L2624` → after: `L3665-L3670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3665-L3670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3665-L3670) · [Before (L2623-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2623-L2624)

```diff
- .NewButton.DisabledNewButton {
-   cursor: default
+ .HudMove-emotes .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightEmotesIcon>.UiItemIcon .svg-inline--fa path:only-of-type,
+ .HudMove-emotes .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightEmotesIcon>.UiItemIcon.svg-inline--fa path:only-of-type {
+   stroke: #000;
+   vector-effect: non-scaling-stroke;
+   stroke-width: 2px;
+   stroke-linejoin: round
```

#### 394. `bundles/bloxd.io/main.css` (Changed code · before: `L2627-L2631` → after: `L3673-L3682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3673-L3682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3673-L3682) · [Before (L2627-L2631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2627-L2631)

```diff
- @media(hover:hover) {
-   .NewButton.DisabledNewButton:hover {
-     background-color: var(--buttonNormalColour);
-     transform: none
-   }
+ .HudMove-emotes .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightEmotesIcon>.UiItemIcon {
+   font-size: calc(var(--row-icon-key)*.5);
+   height: var(--row-icon-key);
+   min-height: 0;
+   min-width: 0;
+   opacity: var(--hud-key-opacity, 1);
+   position: fixed;
+   right: var(--hud-inset-right);
+   top: var(--hud-inset-top);
+   width: var(--row-icon-key)
```

#### 395. `bundles/bloxd.io/main.css` (Changed code · before: `L2634-L2636` → after: `L3685-L3690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3685-L3690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3685-L3690) · [Before (L2634-L2636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2634-L2636)

```diff
- .NewButton.DisabledNewButton.pad-focused {
-   background-color: var(--buttonNormalColour);
-   transform: none
+ @media(pointer:coarse) {
+   .HudMove-emotes .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightEmotesIcon>.UiItemIcon:before {
+     content: "";
+     inset: min(0px, (100% - 44px)/2) min(0px, (100% - 44px)/2);
+     position: absolute
+   }
```

#### 396. `bundles/bloxd.io/main.css` (Changed code · before: `L2639-L2643` → after: `L3693-L3694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3693-L3694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3693-L3694) · [Before (L2639-L2643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2639-L2643)

```diff
- @media(hover:none) {
-   .NewButton.DisabledNewButton:active {
-     background-color: var(--buttonNormalColour);
-     transform: none
-   }
+ .HudMove-emotes .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightEmotesIcon>.UiItemIcon {
+   translate: calc(var(--hud-emotes-dx, 0)*100vw) calc(var(--hud-emotes-dy, 0)*var(--hud-viewport-height))
```

#### 397. `bundles/bloxd.io/main.css` (Changed code · before: `L2646-L2648` → after: `L3697-L3699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3697-L3699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3697-L3699) · [Before (L2646-L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2646-L2648)

```diff
- .NewButton.DisabledNewButton:active {
-   filter: none;
-   transform: none
+ .HudMove-emotes .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightEmotesIcon>.UiItemIcon .ScaleOnHover {
+   display: flex;
+   scale: none
```

#### 398. `bundles/bloxd.io/main.css` (Changed code · before: `L2651-L2655` → after: `L3702-L3707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3702-L3707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3702-L3707) · [Before (L2651-L2655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2651-L2655)

```diff
- @media(hover:hover) {
-   .NewButton.LoadingNewButton:hover {
-     cursor: auto;
-     transform: none
-   }
+ .HudMove-emotes .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightEmotesIcon>.UiItemIcon[data-pressing] {
+   background-color: rgba(75, 94, 130, .85);
+   box-shadow: inset 0 1.5px 0 #586e99, 0 1px 0 #1a1f2e;
+   opacity: 1;
+   transform: translateY(2px);
+   transition: none
```

#### 399. `bundles/bloxd.io/main.css` (Changed code · before: `L2658-L2659` → after: `L3710-L3711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3710-L3711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3710-L3711) · [Before (L2658-L2659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2658-L2659)

```diff
- .NewButton.LoadingNewButton.pad-focused {
-   cursor: auto;
+ .HudMove-emotes .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightEmotesIcon>.UiItemIcon[data-pressing] .ScaleOnHover {
+   color: inherit;
```

#### 400. `bundles/bloxd.io/main.css` (Changed code · before: `L2663-L2667` → after: `L3715-L3716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3715-L3716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3715-L3716) · [Before (L2663-L2667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2663-L2667)

```diff
- @media(hover:none) {
-   .NewButton.LoadingNewButton:active {
-     cursor: auto;
-     transform: none
-   }
+ .TouchKeysRound.HudMove-emotes .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightEmotesIcon>.UiItemIcon {
+   border-radius: 50%
```

#### 401. `bundles/bloxd.io/main.css` (Changed code · before: `L2670-L2672` → after: `L3719-L3720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3719-L3720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3719-L3720) · [Before (L2670-L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2670-L2672)

```diff
- .NewButton.LoadingNewButton:active {
-   filter: none;
-   transform: none
+ .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCameraIcon>.UiItemIcon>.ScaleOnHover {
+   scale: calc(var(--hud-perspective-scale)/var(--hud-menu-scale, 1))
```

#### 402. `bundles/bloxd.io/main.css` (Changed code · before: `L2675-L2687` → after: `L3723-L3724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3723-L3724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3723-L3724) · [Before (L2675-L2687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2675-L2687)

```diff
- .NewButton.ShinyButton:after {
-   animation-fill-mode: forwards;
-   animation: shiny-button 3s ease-in-out infinite;
-   background: hsla(0, 0%, 100%, .13);
-   background: linear-gradient(90deg, hsla(0, 0%, 100%, .13) 0, hsla(0, 0%, 100%, .13) 77%, hsla(0, 0%, 100%, .8) 92%, hsla(0, 0%, 100%, 0));
-   content: "";
-   height: 450%;
-   left: 0;
-   opacity: 0;
-   position: absolute;
-   top: 0;
-   transform: translate(-109%, -110%) rotate(30deg);
-   width: 300%
+ .HudHide-perspective .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCameraIcon {
+   display: none
```

#### 403. `bundles/bloxd.io/main.css` (Changed code · before: `L2690-L2697` → after: `L3727-L3729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3727-L3729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3727-L3729) · [Before (L2690-L2697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2690-L2697)

```diff
- .NewButton .ButtonTopBorder {
-   background: var(--buttonTopColour);
-   height: .21em;
-   left: 0;
-   position: absolute;
-   top: 0;
-   width: 100%;
-   z-index: 1
+ .HudMove-perspective .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCameraIcon {
+   height: var(--row-icon-box);
+   width: var(--row-icon-box)
```

#### 404. `bundles/bloxd.io/main.css` (Changed code · before: `L2700-L2707` → after: `L3732-L3737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3732-L3737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3732-L3737) · [Before (L2700-L2707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2700-L2707)

```diff
- .NewButton .ButtonBottomBorder {
-   background: var(--buttonBottomColour);
-   bottom: 0;
-   height: .21em;
-   left: 0;
-   position: absolute;
-   width: 100%;
-   z-index: 1
+ @media(pointer:coarse) {
+   .HudMove-perspective .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCameraIcon {
+     box-sizing: border-box;
+     min-height: 44px;
+     min-width: 44px
+   }
```

#### 405. `bundles/bloxd.io/main.css` (Changed code · before: `L2710-L2718` → after: `L3740-L3741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3740-L3741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3740-L3741) · [Before (L2710-L2718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2710-L2718)

```diff
- .NewButton .ButtonBody {
-   gap: .4em;
-   min-width: 0;
-   overflow-x: hidden;
-   padding: .4em .8em;
-   position: relative;
-   text-overflow: ellipsis;
-   white-space: nowrap;
-   z-index: 2
+ .HudMove-perspective .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCameraIcon {
+   --row-icon-key: calc(var(--touch-key-size, calc(5 * clamp(1rem, 1.45vw, 1.5rem))) * var(--hud-perspective-scale, 1))
```

#### 406. `bundles/bloxd.io/main.css` (Changed code · before: `L2721-L2731` → after: `L3744-L3747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3744-L3747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3744-L3747) · [Before (L2721-L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2721-L2731)

```diff
- .NewButton .ButtonLoadingOverlay {
-   align-items: center;
-   background-color: rgba(0, 0, 0, .75);
-   bottom: 0;
-   display: flex;
-   justify-content: center;
-   left: 0;
-   position: absolute;
-   right: 0;
-   top: 0;
-   z-index: 3
+ @media(orientation:portrait)and (max-width:600px) {
+   .HudMove-perspective .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCameraIcon {
+     --row-icon-key: calc(var(--touch-key-size, calc(5 * min(10px, 2.9vw))) * var(--hud-perspective-scale, 1))
+   }
```

#### 407. `bundles/bloxd.io/main.css` (Changed code · before: `L2734` → after: `L3750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3750) · [Before (L2734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2734)

```diff
- .RainbowGradientDefs {
+ .HudMove-perspective .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCameraIcon.OutOfTray {
```

#### 408. `bundles/bloxd.io/main.css` (Changed code · before: `L2740` → after: `L3758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3758) · [Before (L2740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2740)

```diff
- .SecondaryButton {
+ .HudMove-perspective .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCameraIcon>.UiItemIcon {
```

#### 409. `bundles/bloxd.io/main.css` (Changed code · before: `L2742-L2745` → after: `L3760-L3764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3760-L3764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3760-L3764) · [Before (L2742-L2745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2742-L2745)

```diff
-   border: max(min(4px, .15em), 2px) solid #cfcfcf;
-   border-radius: 0;
-   color: #cfcfcf;
-   cursor: pointer;
+   background-color: rgba(60, 75, 104, .72);
+   border: 2px solid #0f0f0f;
+   box-shadow: inset 0 1.5px 0 #586e99, 0 3px 0 #1a1f2e;
+   box-sizing: border-box;
+   color: #fff;
```

#### 410. `bundles/bloxd.io/main.css` (Changed code · before: `L2747` → after: `L3766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3766) · [Before (L2747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2747)

```diff
-   gap: .3em;
+   flex-direction: column;
```

#### 411. `bundles/bloxd.io/main.css` (Changed code · before: `L2749-L2752` → after: `L3768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3768) · [Before (L2749-L2752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2749-L2752)

```diff
-   line-height: 1em;
-   padding: .3em .6em;
-   text-align: center;
-   transition: border-color .2s, color .2s
+   text-shadow: -1px -1px 0 #000, -1px 0 0 #000, -1px 1px 0 #000, 0 -1px 0 #000, 0 0 0 #000, 0 1px 0 #000, 1px -1px 0 #000, 1px 0 0 #000, 1px 1px 0 #000
```

#### 412. `bundles/bloxd.io/main.css` (Changed code · before: `L2755-L2758` → after: `L3771-L3773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3771-L3773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3771-L3773) · [Before (L2755-L2758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2755-L2758)

```diff
- @media(hover:hover) {
-   .SecondaryButton:hover {
-     border-color: #b6830e
-   }
+ .HudMove-perspective .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCameraIcon>.UiItemIcon .svg-inline--fa,
+ .HudMove-perspective .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCameraIcon>.UiItemIcon.svg-inline--fa {
+   paint-order: stroke fill
```

#### 413. `bundles/bloxd.io/main.css` (Changed code · before: `L2761-L2762` → after: `L3776-L3781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3776-L3781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3776-L3781) · [Before (L2761-L2762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2761-L2762)

```diff
- .SecondaryButton.pad-focused {
-   border-color: #b6830e
+ .HudMove-perspective .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCameraIcon>.UiItemIcon .svg-inline--fa path:only-of-type,
+ .HudMove-perspective .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCameraIcon>.UiItemIcon.svg-inline--fa path:only-of-type {
+   stroke: #000;
+   vector-effect: non-scaling-stroke;
+   stroke-width: 2px;
+   stroke-linejoin: round
```

#### 414. `bundles/bloxd.io/main.css` (Changed code · before: `L2765-L2767` → after: `L3784-L3800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3784-L3800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3784-L3800) · [Before (L2765-L2767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2765-L2767)

```diff
- @media(hover:none) {
-   .SecondaryButton:active {
-     border-color: #b6830e
+ .HudMove-perspective .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCameraIcon>.UiItemIcon {
+   font-size: calc(var(--row-icon-key)*.5);
+   height: var(--row-icon-key);
+   min-height: 0;
+   min-width: 0;
+   opacity: var(--hud-key-opacity, 1);
+   position: fixed;
+   right: var(--hud-inset-right);
+   top: var(--hud-inset-top);
+   width: var(--row-icon-key)
+ }
+ 
+ @media(pointer:coarse) {
+   .HudMove-perspective .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCameraIcon>.UiItemIcon:before {
+     content: "";
+     inset: min(0px, (100% - 44px)/2) min(0px, (100% - 44px)/2);
+ ... (1 more added lines; see GitHub link above)
```

#### 415. `bundles/bloxd.io/main.css` (Changed code · before: `L2771-L2773` → after: `L3804-L3805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3804-L3805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3804-L3805) · [Before (L2771-L2773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2771-L2773)

```diff
- .SecondaryButton:focus-visible {
-   outline: 2px solid #ffb914;
-   outline-offset: 2px
+ .HudMove-perspective .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCameraIcon>.UiItemIcon {
+   translate: calc(var(--hud-perspective-dx, 0)*100vw) calc(var(--hud-perspective-dy, 0)*var(--hud-viewport-height))
```

#### 416. `bundles/bloxd.io/main.css` (Changed code · before: `L2776-L2779` → after: `L3808-L3810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3808-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3808-L3810) · [Before (L2776-L2779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2776-L2779)

```diff
- .SecondaryButton.ActiveSecondaryButton,
- .SecondaryButton.GoldSecondaryButton {
-   border-color: #ffb914;
-   color: #ffb914
+ .HudMove-perspective .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCameraIcon>.UiItemIcon .ScaleOnHover {
+   display: flex;
+   scale: none
```

#### 417. `bundles/bloxd.io/main.css` (Changed code · before: `L2782-L2786` → after: `L3813-L3818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3813-L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3813-L3818) · [Before (L2782-L2786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2782-L2786)

```diff
- @media(hover:hover) {
-   .SecondaryButton.GoldSecondaryButton:hover {
-     border-color: #fcd373;
-     color: #fcd373
-   }
+ .HudMove-perspective .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCameraIcon>.UiItemIcon[data-pressing] {
+   background-color: rgba(75, 94, 130, .85);
+   box-shadow: inset 0 1.5px 0 #586e99, 0 1px 0 #1a1f2e;
+   opacity: 1;
+   transform: translateY(2px);
+   transition: none
```

#### 418. `bundles/bloxd.io/main.css` (Changed code · before: `L2789-L2791` → after: `L3821-L3823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3821-L3823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3821-L3823) · [Before (L2789-L2791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2789-L2791)

```diff
- .SecondaryButton.GoldSecondaryButton.pad-focused {
-   border-color: #fcd373;
-   color: #fcd373
+ .HudMove-perspective .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCameraIcon>.UiItemIcon[data-pressing] .ScaleOnHover {
+   color: inherit;
+   transform: none
```

#### 419. `bundles/bloxd.io/main.css` (Changed code · before: `L2794-L2798` → after: `L3826-L3827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3826-L3827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3826-L3827) · [Before (L2794-L2798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2794-L2798)

```diff
- @media(hover:none) {
-   .SecondaryButton.GoldSecondaryButton:active {
-     border-color: #fcd373;
-     color: #fcd373
-   }
+ .TouchKeysRound.HudMove-perspective .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCameraIcon>.UiItemIcon {
+   border-radius: 50%
```

#### 420. `bundles/bloxd.io/main.css` (Changed code · before: `L2801-L2803` → after: `L3830-L3831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3830-L3831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3830-L3831) · [Before (L2801-L2803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2801-L2803)

```diff
- .SecondaryButton.PurpleSecondaryButton {
-   border-color: #6d2e91;
-   color: #d49cf9
+ .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightScoreboardIcon>.UiItemIcon>.ScaleOnHover {
+   scale: calc(var(--hud-scoreboard-scale)/var(--hud-menu-scale, 1))
```

#### 421. `bundles/bloxd.io/main.css` (Changed code · before: `L2806-L2809` → after: `L3834-L3835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3834-L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3834-L3835) · [Before (L2806-L2809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2806-L2809)

```diff
- @media(hover:hover) {
-   .SecondaryButton.PurpleSecondaryButton:hover {
-     border-color: #ad50e3
-   }
+ .HudHide-scoreboard .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightScoreboardIcon {
+   display: none
```

#### 422. `bundles/bloxd.io/main.css` (Changed code · before: `L2812-L2813` → after: `L3838-L3841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3838-L3841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3838-L3841) · [Before (L2812-L2813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2812-L2813)

```diff
- .SecondaryButton.PurpleSecondaryButton.pad-focused {
-   border-color: #ad50e3
+ .HudMove-scoreboard .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightScoreboardIcon {
+   --row-icon-key: calc(var(--touch-key-size, calc(5 * clamp(1rem, 1.45vw, 1.5rem))) * var(--hud-scoreboard-scale, 1));
+   height: var(--row-icon-box);
+   width: var(--row-icon-box)
```

#### 423. `bundles/bloxd.io/main.css` (Changed code · before: `L2816-L2818` → after: `L3844-L3846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3844-L3846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3844-L3846) · [Before (L2816-L2818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2816-L2818)

```diff
- @media(hover:none) {
-   .SecondaryButton.PurpleSecondaryButton:active {
-     border-color: #ad50e3
+ @media(orientation:portrait)and (max-width:600px) {
+   .HudMove-scoreboard .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightScoreboardIcon {
+     --row-icon-key: calc(var(--touch-key-size, calc(5 * min(10px, 2.9vw))) * var(--hud-scoreboard-scale, 1))
```

#### 424. `bundles/bloxd.io/main.css` (Changed code · before: `L2822-L2824` → after: `L3850-L3855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3850-L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3850-L3855) · [Before (L2822-L2824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2822-L2824)

```diff
- .SecondaryButton.RedSecondaryButton {
-   border-color: #800c0c;
-   color: #ff8a80
+ .HudMove-scoreboard .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightScoreboardIcon.OutOfTray {
+   height: 0;
+   min-height: 0;
+   min-width: 0;
+   position: absolute;
+   width: 0
```

#### 425. `bundles/bloxd.io/main.css` (Changed code · before: `L2827-L2830` → after: `L3858-L3868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3858-L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3858-L3868) · [Before (L2827-L2830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2827-L2830)

```diff
- @media(hover:hover) {
-   .SecondaryButton.RedSecondaryButton:hover {
-     border-color: #fc6464
-   }
+ .HudMove-scoreboard .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightScoreboardIcon>.UiItemIcon {
+   align-items: center;
+   background-color: rgba(60, 75, 104, .72);
+   border: 2px solid #0f0f0f;
+   box-shadow: inset 0 1.5px 0 #586e99, 0 3px 0 #1a1f2e;
+   box-sizing: border-box;
+   color: #fff;
+   display: flex;
+   flex-direction: column;
+   justify-content: center;
+   text-shadow: -1px -1px 0 #000, -1px 0 0 #000, -1px 1px 0 #000, 0 -1px 0 #000, 0 0 0 #000, 0 1px 0 #000, 1px -1px 0 #000, 1px 0 0 #000, 1px 1px 0 #000
```

#### 426. `bundles/bloxd.io/main.css` (Changed code · before: `L2833-L2834` → after: `L3871-L3873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3871-L3873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3871-L3873) · [Before (L2833-L2834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2833-L2834)

```diff
- .SecondaryButton.RedSecondaryButton.pad-focused {
-   border-color: #fc6464
+ .HudMove-scoreboard .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightScoreboardIcon>.UiItemIcon .svg-inline--fa,
+ .HudMove-scoreboard .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightScoreboardIcon>.UiItemIcon.svg-inline--fa {
+   paint-order: stroke fill
```

#### 427. `bundles/bloxd.io/main.css` (Changed code · before: `L2837-L2840` → after: `L3876-L3881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3876-L3881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3876-L3881) · [Before (L2837-L2840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2837-L2840)

```diff
- @media(hover:none) {
-   .SecondaryButton.RedSecondaryButton:active {
-     border-color: #fc6464
-   }
+ .HudMove-scoreboard .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightScoreboardIcon>.UiItemIcon .svg-inline--fa path:only-of-type,
+ .HudMove-scoreboard .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightScoreboardIcon>.UiItemIcon.svg-inline--fa path:only-of-type {
+   stroke: #000;
+   vector-effect: non-scaling-stroke;
+   stroke-width: 2px;
+   stroke-linejoin: round
```

#### 428. `bundles/bloxd.io/main.css` (Changed code · before: `L2843-L2846` → after: `L3884-L3893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3884-L3893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3884-L3893) · [Before (L2843-L2846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2843-L2846)

```diff
- .SecondaryButton.MutedSecondaryButton {
-   border-color: #838383;
-   color: #838383;
-   opacity: .6
+ .HudMove-scoreboard .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightScoreboardIcon>.UiItemIcon {
+   font-size: calc(var(--row-icon-key)*.5);
+   height: var(--row-icon-key);
+   min-height: 0;
+   min-width: 0;
+   opacity: var(--hud-key-opacity, 1);
+   position: fixed;
+   right: var(--hud-inset-right);
+   top: var(--hud-inset-top);
+   width: var(--row-icon-key)
```

#### 429. `bundles/bloxd.io/main.css` (Changed code · before: `L2849-L2853` → after: `L3896-L3900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3896-L3900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3896-L3900) · [Before (L2849-L2853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2849-L2853)

```diff
- @media(hover:hover) {
-   .SecondaryButton.MutedSecondaryButton:hover {
-     border-color: #b6830e;
-     color: #cfcfcf;
-     opacity: 1
+ @media(pointer:coarse) {
+   .HudMove-scoreboard .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightScoreboardIcon>.UiItemIcon:before {
+     content: "";
+     inset: min(0px, (100% - 44px)/2) min(0px, (100% - 44px)/2);
+     position: absolute
```

#### 430. `bundles/bloxd.io/main.css` (Changed code · before: `L2857-L2860` → after: `L3904-L3905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3904-L3905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3904-L3905) · [Before (L2857-L2860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2857-L2860)

```diff
- .SecondaryButton.MutedSecondaryButton.pad-focused {
-   border-color: #b6830e;
-   color: #cfcfcf;
-   opacity: 1
+ .HudMove-scoreboard .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightScoreboardIcon>.UiItemIcon {
+   translate: calc(var(--hud-scoreboard-dx, 0)*100vw) calc(var(--hud-scoreboard-dy, 0)*var(--hud-viewport-height))
```

#### 431. `bundles/bloxd.io/main.css` (Changed code · before: `L2863-L2868` → after: `L3908-L3910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3908-L3910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3908-L3910) · [Before (L2863-L2868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2863-L2868)

```diff
- @media(hover:none) {
-   .SecondaryButton.MutedSecondaryButton:active {
-     border-color: #b6830e;
-     color: #cfcfcf;
-     opacity: 1
-   }
+ .HudMove-scoreboard .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightScoreboardIcon>.UiItemIcon .ScaleOnHover {
+   display: flex;
+   scale: none
```

#### 432. `bundles/bloxd.io/main.css` (Changed code · before: `L2871-L2878` → after: `L3913-L3918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3913-L3918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3913-L3918) · [Before (L2871-L2878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2871-L2878)

```diff
- .SecondaryButton.RainbowSecondaryButton {
-   -webkit-text-fill-color: transparent;
-   background: linear-gradient(90deg, #ff6b9d, #ffa64d, gold, #7dd87d, #6bb5ff, #c084fc, #ff6b9d);
-   -webkit-background-clip: text;
-   background-clip: text;
-   border-image-slice: 1;
-   border-image-source: linear-gradient(90deg, #ff6b9d, #ffa64d, gold, #7dd87d, #6bb5ff, #c084fc, #ff6b9d);
-   color: #f2f2f2
+ .HudMove-scoreboard .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightScoreboardIcon>.UiItemIcon[data-pressing] {
+   background-color: rgba(75, 94, 130, .85);
+   box-shadow: inset 0 1.5px 0 #586e99, 0 1px 0 #1a1f2e;
+   opacity: 1;
+   transform: translateY(2px);
+   transition: none
```

#### 433. `bundles/bloxd.io/main.css` (Changed code · before: `L2881-L2882` → after: `L3921-L3923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3921-L3923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3921-L3923) · [Before (L2881-L2882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2881-L2882)

```diff
- .SecondaryButton.RainbowSecondaryButton .svg-inline--fa path {
-   fill: url(#RainbowGradient)
+ .HudMove-scoreboard .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightScoreboardIcon>.UiItemIcon[data-pressing] .ScaleOnHover {
+   color: inherit;
+   transform: none
```

#### 434. `bundles/bloxd.io/main.css` (Changed code · before: `L2885-L2888` → after: `L3926-L3927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3926-L3927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3926-L3927) · [Before (L2885-L2888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2885-L2888)

```diff
- @media(hover:hover) {
-   .SecondaryButton.RainbowSecondaryButton:hover {
-     filter: brightness(120%)
-   }
+ .TouchKeysRound.HudMove-scoreboard .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightScoreboardIcon>.UiItemIcon {
+   border-radius: 50%
```

#### 435. `bundles/bloxd.io/main.css` (Changed code · before: `L2891-L2892` → after: `L3930-L3931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3930-L3931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3930-L3931) · [Before (L2891-L2892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2891-L2892)

```diff
- .SecondaryButton.RainbowSecondaryButton.pad-focused {
-   filter: brightness(120%)
+ .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightTasksIcon>.UiItemIcon>.ScaleOnHover {
+   scale: calc(var(--hud-tasks-scale)/var(--hud-menu-scale, 1))
```

#### 436. `bundles/bloxd.io/main.css` (Changed code · before: `L2895-L2898` → after: `L3934-L3935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3934-L3935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3934-L3935) · [Before (L2895-L2898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2895-L2898)

```diff
- @media(hover:none) {
-   .SecondaryButton.RainbowSecondaryButton:active {
-     filter: brightness(120%)
-   }
+ .HudHide-tasks .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightTasksIcon {
+   display: none
```

#### 437. `bundles/bloxd.io/main.css` (Changed code · before: `L2901-L2903` → after: `L3938-L3941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3938-L3941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3938-L3941) · [Before (L2901-L2903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2901-L2903)

```diff
- .SecondaryButton.RainbowSecondaryButton[data-pressing] {
-   filter: brightness(75%);
-   transition: none
+ .HudMove-tasks .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightTasksIcon {
+   --row-icon-key: calc(var(--touch-key-size, calc(5 * clamp(1rem, 1.45vw, 1.5rem))) * var(--hud-tasks-scale, 1));
+   height: var(--row-icon-box);
+   width: var(--row-icon-box)
```

#### 438. `bundles/bloxd.io/main.css` (Changed code · before: `L2906-L2909` → after: `L3944-L3947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3944-L3947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3944-L3947) · [Before (L2906-L2909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2906-L2909)

```diff
- .SecondaryButton:not(.RainbowSecondaryButton)[data-pressing] {
-   background-color: rgba(255, 185, 20, .2);
-   border-color: #ffb914;
-   transition: none
+ @media(orientation:portrait)and (max-width:600px) {
+   .HudMove-tasks .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightTasksIcon {
+     --row-icon-key: calc(var(--touch-key-size, calc(5 * min(10px, 2.9vw))) * var(--hud-tasks-scale, 1))
+   }
```

#### 439. `bundles/bloxd.io/main.css` (Changed code · before: `L2912-L2920` → after: `L3950-L3955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3950-L3955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3950-L3955) · [Before (L2912-L2920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2912-L2920)

```diff
- .SecondaryButton.DisabledSecondaryButton {
-   -webkit-text-fill-color: currentColor;
-   background: none;
-   border-color: #838383;
-   border-image-source: none;
-   color: #838383;
-   cursor: default;
-   opacity: .6;
-   pointer-events: none
+ .HudMove-tasks .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightTasksIcon.OutOfTray {
+   height: 0;
+   min-height: 0;
+   min-width: 0;
+   position: absolute;
+   width: 0
```

#### 440. `bundles/bloxd.io/main.css` (Changed code · before: `L2923` → after: `L3958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3958) · [Before (L2923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2923)

```diff
- .TabButton {
+ .HudMove-tasks .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightTasksIcon>.UiItemIcon {
```

#### 441. `bundles/bloxd.io/main.css` (Changed code · before: `L2925-L2929` → after: `L3960-L3964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3960-L3964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3960-L3964) · [Before (L2925-L2929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2925-L2929)

```diff
-   border: 0 solid #0f0f0f;
-   border-bottom: max(min(4px, .15em), 2px) solid #cfcfcf;
-   border-radius: 0;
-   color: #cfcfcf;
-   cursor: pointer;
+   background-color: rgba(60, 75, 104, .72);
+   border: 2px solid #0f0f0f;
+   box-shadow: inset 0 1.5px 0 #586e99, 0 3px 0 #1a1f2e;
+   box-sizing: border-box;
+   color: #fff;
```

#### 442. `bundles/bloxd.io/main.css` (Changed code · before: `L2931` → after: `L3966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3966) · [Before (L2931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2931)

```diff
-   gap: .3em;
+   flex-direction: column;
```

#### 443. `bundles/bloxd.io/main.css` (Changed code · before: `L2933-L2936` → after: `L3968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3968) · [Before (L2933-L2936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2933-L2936)

```diff
-   line-height: 1em;
-   padding: .3em .6em;
-   text-align: center;
-   transition: border-color .2s, color .2s
+   text-shadow: -1px -1px 0 #000, -1px 0 0 #000, -1px 1px 0 #000, 0 -1px 0 #000, 0 0 0 #000, 0 1px 0 #000, 1px -1px 0 #000, 1px 0 0 #000, 1px 1px 0 #000
```

#### 444. `bundles/bloxd.io/main.css` (Changed code · before: `L2939-L2942` → after: `L3971-L3973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3971-L3973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3971-L3973) · [Before (L2939-L2942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2939-L2942)

```diff
- @media(hover:hover) {
-   .TabButton:hover {
-     border-bottom-color: #b6830e
-   }
+ .HudMove-tasks .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightTasksIcon>.UiItemIcon .svg-inline--fa,
+ .HudMove-tasks .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightTasksIcon>.UiItemIcon.svg-inline--fa {
+   paint-order: stroke fill
```

#### 445. `bundles/bloxd.io/main.css` (Changed code · before: `L2945-L2946` → after: `L3976-L3981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3976-L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3976-L3981) · [Before (L2945-L2946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2945-L2946)

```diff
- .TabButton.pad-focused {
-   border-bottom-color: #b6830e
+ .HudMove-tasks .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightTasksIcon>.UiItemIcon .svg-inline--fa path:only-of-type,
+ .HudMove-tasks .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightTasksIcon>.UiItemIcon.svg-inline--fa path:only-of-type {
+   stroke: #000;
+   vector-effect: non-scaling-stroke;
+   stroke-width: 2px;
+   stroke-linejoin: round
```

#### 446. `bundles/bloxd.io/main.css` (Changed code · before: `L2949-L2951` → after: `L3984-L4000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3984-L4000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L3984-L4000) · [Before (L2949-L2951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2949-L2951)

```diff
- @media(hover:none) {
-   .TabButton:active {
-     border-bottom-color: #b6830e
+ .HudMove-tasks .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightTasksIcon>.UiItemIcon {
+   font-size: calc(var(--row-icon-key)*.5);
+   height: var(--row-icon-key);
+   min-height: 0;
+   min-width: 0;
+   opacity: var(--hud-key-opacity, 1);
+   position: fixed;
+   right: var(--hud-inset-right);
+   top: var(--hud-inset-top);
+   width: var(--row-icon-key)
+ }
+ 
+ @media(pointer:coarse) {
+   .HudMove-tasks .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightTasksIcon>.UiItemIcon:before {
+     content: "";
+     inset: min(0px, (100% - 44px)/2) min(0px, (100% - 44px)/2);
+ ... (1 more added lines; see GitHub link above)
```

#### 447. `bundles/bloxd.io/main.css` (Changed code · before: `L2955-L2957` → after: `L4004-L4005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4004-L4005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4004-L4005) · [Before (L2955-L2957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2955-L2957)

```diff
- .TabButton:focus-visible {
-   outline: 2px solid #ffb914;
-   outline-offset: 2px
+ .HudMove-tasks .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightTasksIcon>.UiItemIcon {
+   translate: calc(var(--hud-tasks-dx, 0)*100vw) calc(var(--hud-tasks-dy, 0)*var(--hud-viewport-height))
```

#### 448. `bundles/bloxd.io/main.css` (Changed code · before: `L2960-L2962` → after: `L4008-L4010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4008-L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4008-L4010) · [Before (L2960-L2962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2960-L2962)

```diff
- .TabButton.ActiveTabButton {
-   border-bottom-color: #ffb914;
-   color: #ffb914
+ .HudMove-tasks .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightTasksIcon>.UiItemIcon .ScaleOnHover {
+   display: flex;
+   scale: none
```

#### 449. `bundles/bloxd.io/main.css` (Changed code · before: `L2965-L2970` → after: `L4013-L4018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4013-L4018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4013-L4018) · [Before (L2965-L2970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2965-L2970)

```diff
- .TabButton.DisabledTabButton {
-   border-bottom-color: #838383;
-   color: #838383;
-   cursor: default;
-   opacity: .6;
-   pointer-events: none
+ .HudMove-tasks .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightTasksIcon>.UiItemIcon[data-pressing] {
+   background-color: rgba(75, 94, 130, .85);
+   box-shadow: inset 0 1.5px 0 #586e99, 0 1px 0 #1a1f2e;
+   opacity: 1;
+   transform: translateY(2px);
+   transition: none
```

#### 450. `bundles/bloxd.io/main.css` (Changed code · before: `L2973-L2984` → after: `L4021-L4023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4021-L4023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4021-L4023) · [Before (L2973-L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2973-L2984)

```diff
- .LoadableButton {
-   align-items: center;
-   border-radius: 0;
-   color: #cfcfcf;
-   cursor: pointer;
-   display: flex;
-   flex-shrink: 0;
-   font-size: 1.2rem;
-   gap: .3em;
-   justify-content: center;
-   padding: .2rem .4rem;
-   transition: color .1s, background-color .1s, transform .1s
+ .HudMove-tasks .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightTasksIcon>.UiItemIcon[data-pressing] .ScaleOnHover {
+   color: inherit;
+   transform: none
```

#### 451. `bundles/bloxd.io/main.css` (Changed code · before: `L2987-L2989` → after: `L4026-L4027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4026-L4027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4026-L4027) · [Before (L2987-L2989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2987-L2989)

```diff
- .LoadableButton:focus-visible {
-   outline: 2px solid #ffb914;
-   outline-offset: 2px
+ .TouchKeysRound.HudMove-tasks .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightTasksIcon>.UiItemIcon {
+   border-radius: 50%
```

#### 452. `bundles/bloxd.io/main.css` (Changed code · before: `L2992-L2993` → after: `L4030-L4031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4030-L4031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4030-L4031) · [Before (L2992-L2993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2992-L2993)

```diff
- .LoadableButton .LoadableButtonIcon {
-   position: relative
+ .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCosmeticsIcon>.UiItemIcon>.ScaleOnHover {
+   scale: calc(var(--hud-cosmetics-scale)/var(--hud-menu-scale, 1))
```

#### 453. `bundles/bloxd.io/main.css` (Changed code · before: `L2996-L2997` → after: `L4034-L4035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4034-L4035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4034-L4035) · [Before (L2996-L2997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L2996-L2997)

```diff
- .LoadableButton.LikeButton {
-   background-color: rgba(128, 12, 12, .5)
+ .HudHide-cosmetics .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCosmeticsIcon {
+   display: none
```

#### 454. `bundles/bloxd.io/main.css` (Changed code · before: `L3000-L3002` → after: `L4038-L4046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4038-L4046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4038-L4046) · [Before (L3000-L3002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3000-L3002)

```diff
- @media(hover:hover) {
-   .LoadableButton.LikeButton:hover {
-     background-color: hsla(0, 96%, 69%, .4)
+ .HudMove-cosmetics .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCosmeticsIcon {
+   --row-icon-key: calc(var(--touch-key-size, calc(5 * clamp(1rem, 1.45vw, 1.5rem))) * var(--hud-cosmetics-scale, 1));
+   height: var(--row-icon-box);
+   width: var(--row-icon-box)
+ }
+ 
+ @media(orientation:portrait)and (max-width:600px) {
+   .HudMove-cosmetics .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCosmeticsIcon {
+     --row-icon-key: calc(var(--touch-key-size, calc(5 * min(10px, 2.9vw))) * var(--hud-cosmetics-scale, 1))
```

#### 455. `bundles/bloxd.io/main.css` (Changed code · before: `L3006-L3007` → after: `L4050-L4068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4050-L4068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4050-L4068) · [Before (L3006-L3007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3006-L3007)

```diff
- .LoadableButton.LikeButton.pad-focused {
-   background-color: hsla(0, 96%, 69%, .4)
+ .HudMove-cosmetics .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCosmeticsIcon.OutOfTray {
+   height: 0;
+   min-height: 0;
+   min-width: 0;
+   position: absolute;
+   width: 0
+ }
+ 
+ .HudMove-cosmetics .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCosmeticsIcon>.UiItemIcon {
+   align-items: center;
+   background-color: rgba(60, 75, 104, .72);
+   border: 2px solid #0f0f0f;
+   box-shadow: inset 0 1.5px 0 #586e99, 0 3px 0 #1a1f2e;
+   box-sizing: border-box;
+   color: #fff;
+   display: flex;
+ ... (3 more added lines; see GitHub link above)
```

#### 456. `bundles/bloxd.io/main.css` (Changed code · before: `L3010-L3013` → after: `L4071-L4073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4071-L4073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4071-L4073) · [Before (L3010-L3013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3010-L3013)

```diff
- @media(hover:none) {
-   .LoadableButton.LikeButton:active {
-     background-color: hsla(0, 96%, 69%, .4)
-   }
+ .HudMove-cosmetics .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCosmeticsIcon>.UiItemIcon .svg-inline--fa,
+ .HudMove-cosmetics .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCosmeticsIcon>.UiItemIcon.svg-inline--fa {
+   paint-order: stroke fill
```

#### 457. `bundles/bloxd.io/main.css` (Changed code · before: `L3016-L3018` → after: `L4076-L4081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4076-L4081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4076-L4081) · [Before (L3016-L3018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3016-L3018)

```diff
- .LoadableButton.LikeButton.FavouriteCustomLobby {
-   background-color: rgba(204, 20, 20, .5);
-   color: #e73131
+ .HudMove-cosmetics .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCosmeticsIcon>.UiItemIcon .svg-inline--fa path:only-of-type,
+ .HudMove-cosmetics .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCosmeticsIcon>.UiItemIcon.svg-inline--fa path:only-of-type {
+   stroke: #000;
+   vector-effect: non-scaling-stroke;
+   stroke-width: 2px;
+   stroke-linejoin: round
```

#### 458. `bundles/bloxd.io/main.css` (Changed code · before: `L3021-L3022` → after: `L4084-L4093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4084-L4093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4084-L4093) · [Before (L3021-L3022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3021-L3022)

```diff
- .LoadableButton.ReportButton {
-   background-color: #3c4b68
+ .HudMove-cosmetics .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCosmeticsIcon>.UiItemIcon {
+   font-size: calc(var(--row-icon-key)*.5);
+   height: var(--row-icon-key);
+   min-height: 0;
+   min-width: 0;
+   opacity: var(--hud-key-opacity, 1);
+   position: fixed;
+   right: var(--hud-inset-right);
+   top: var(--hud-inset-top);
+   width: var(--row-icon-key)
```

#### 459. `bundles/bloxd.io/main.css` (Changed code · before: `L3025-L3027` → after: `L4096-L4100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4096-L4100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4096-L4100) · [Before (L3025-L3027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3025-L3027)

```diff
- @media(hover:hover) {
-   .LoadableButton.ReportButton:hover {
-     background-color: #394980
+ @media(pointer:coarse) {
+   .HudMove-cosmetics .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCosmeticsIcon>.UiItemIcon:before {
+     content: "";
+     inset: min(0px, (100% - 44px)/2) min(0px, (100% - 44px)/2);
+     position: absolute
```

#### 460. `bundles/bloxd.io/main.css` (Changed code · before: `L3031-L3038` → after: `L4104-L4105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4104-L4105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4104-L4105) · [Before (L3031-L3038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3031-L3038)

```diff
- .LoadableButton.ReportButton.pad-focused {
-   background-color: #394980
- }
- 
- @media(hover:none) {
-   .LoadableButton.ReportButton:active {
-     background-color: #394980
-   }
+ .HudMove-cosmetics .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCosmeticsIcon>.UiItemIcon {
+   translate: calc(var(--hud-cosmetics-dx, 0)*100vw) calc(var(--hud-cosmetics-dy, 0)*var(--hud-viewport-height))
```

#### 461. `bundles/bloxd.io/main.css` (Changed code · before: `L3041-L3044` → after: `L4108-L4110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4108-L4110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4108-L4110) · [Before (L3041-L3044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3041-L3044)

```diff
- .LoadableButton.DisabledLoadableButton {
-   cursor: default;
-   opacity: .6;
-   pointer-events: none
+ .HudMove-cosmetics .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCosmeticsIcon>.UiItemIcon .ScaleOnHover {
+   display: flex;
+   scale: none
```

#### 462. `bundles/bloxd.io/main.css` (Changed code · before: `L3047-L3048` → after: `L4113-L4118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4113-L4118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4113-L4118) · [Before (L3047-L3048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3047-L3048)

```diff
- .LoadableButton.Loading {
-   pointer-events: none
+ .HudMove-cosmetics .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCosmeticsIcon>.UiItemIcon[data-pressing] {
+   background-color: rgba(75, 94, 130, .85);
+   box-shadow: inset 0 1.5px 0 #586e99, 0 1px 0 #1a1f2e;
+   opacity: 1;
+   transform: translateY(2px);
+   transition: none
```

#### 463. `bundles/bloxd.io/main.css` (Changed code · before: `L3051-L3052` → after: `L4121-L4123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4121-L4123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4121-L4123) · [Before (L3051-L3052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3051-L3052)

```diff
- .LoadableButton.Loading .LoadableButtonIcon .svg-inline--fa {
-   opacity: 0
+ .HudMove-cosmetics .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCosmeticsIcon>.UiItemIcon[data-pressing] .ScaleOnHover {
+   color: inherit;
+   transform: none
```

#### 464. `bundles/bloxd.io/main.css` (Changed code · before: `L3055-L3066` → after: `L4126-L4127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4126-L4127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4126-L4127) · [Before (L3055-L3066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3055-L3066)

```diff
- .BackButton {
-   align-items: center;
-   border-radius: 0;
-   color: #f2f2f2;
-   cursor: pointer;
-   display: inline-flex;
-   font-weight: 700;
-   gap: .3em;
-   justify-content: center;
-   transition: color .2s;
-   width: -moz-fit-content;
-   width: fit-content
+ .TouchKeysRound.HudMove-cosmetics .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightCosmeticsIcon>.UiItemIcon {
+   border-radius: 50%
```

#### 465. `bundles/bloxd.io/main.css` (Changed code · before: `L3069-L3071` → after: `L4130-L4131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4130-L4131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4130-L4131) · [Before (L3069-L3071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3069-L3071)

```diff
- .BackButton:focus-visible {
-   outline: 2px solid #ffb914;
-   outline-offset: 2px
+ .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightInviteIcon>.UiItemIcon>.ScaleOnHover {
+   scale: calc(var(--hud-invite-scale)/var(--hud-menu-scale, 1))
```

#### 466. `bundles/bloxd.io/main.css` (Changed code · before: `L3074-L3077` → after: `L4134-L4135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4134-L4135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4134-L4135) · [Before (L3074-L3077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3074-L3077)

```diff
- .BackButton .svg-inline--fa {
-   color: #fc6464;
-   padding-right: .1rem;
-   transition: transform .2s
+ .HudHide-invite .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightInviteIcon {
+   display: none
```

#### 467. `bundles/bloxd.io/main.css` (Changed code · before: `L3080-L3081` → after: `L4138-L4141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4138-L4141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4138-L4141) · [Before (L3080-L3081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3080-L3081)

```diff
- .BackButton.CloseGameInformationSticky {
-   background-color: #303a59
+ .HudMove-invite .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightInviteIcon {
+   --row-icon-key: calc(var(--touch-key-size, calc(5 * clamp(1rem, 1.45vw, 1.5rem))) * var(--hud-invite-scale, 1));
+   height: var(--row-icon-box);
+   width: var(--row-icon-box)
```

#### 468. `bundles/bloxd.io/main.css` (Changed code · before: `L3084-L3090` → after: `L4144-L4146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4144-L4146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4144-L4146) · [Before (L3084-L3090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3084-L3090)

```diff
- @media(hover:hover) {
-   .BackButton:hover .svg-inline--fa {
-     transform: translateX(-.1em)
-   }
- 
-   .BackButton:hover {
-     color: #f2f2f2
+ @media(orientation:portrait)and (max-width:600px) {
+   .HudMove-invite .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightInviteIcon {
+     --row-icon-key: calc(var(--touch-key-size, calc(5 * min(10px, 2.9vw))) * var(--hud-invite-scale, 1))
```

#### 469. `bundles/bloxd.io/main.css` (Changed code · before: `L3094-L3095` → after: `L4150-L4155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4150-L4155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4150-L4155) · [Before (L3094-L3095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3094-L3095)

```diff
- .BackButton.pad-focused .svg-inline--fa {
-   transform: translateX(-.1em)
+ .HudMove-invite .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightInviteIcon.OutOfTray {
+   height: 0;
+   min-height: 0;
+   min-width: 0;
+   position: absolute;
+   width: 0
```

#### 470. `bundles/bloxd.io/main.css` (Changed code · before: `L3098-L3099` → after: `L4158-L4168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4158-L4168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4158-L4168) · [Before (L3098-L3099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3098-L3099)

```diff
- .BackButton.pad-focused {
-   color: #f2f2f2
+ .HudMove-invite .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightInviteIcon>.UiItemIcon {
+   align-items: center;
+   background-color: rgba(60, 75, 104, .72);
+   border: 2px solid #0f0f0f;
+   box-shadow: inset 0 1.5px 0 #586e99, 0 3px 0 #1a1f2e;
+   box-sizing: border-box;
+   color: #fff;
+   display: flex;
+   flex-direction: column;
+   justify-content: center;
+   text-shadow: -1px -1px 0 #000, -1px 0 0 #000, -1px 1px 0 #000, 0 -1px 0 #000, 0 0 0 #000, 0 1px 0 #000, 1px -1px 0 #000, 1px 0 0 #000, 1px 1px 0 #000
```

#### 471. `bundles/bloxd.io/main.css` (Changed code · before: `L3102-L3109` → after: `L4171-L4173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4171-L4173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4171-L4173) · [Before (L3102-L3109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3102-L3109)

```diff
- @media(hover:none) {
-   .BackButton:active .svg-inline--fa {
-     transform: translateX(-.1em)
-   }
- 
-   .BackButton:active {
-     color: #f2f2f2
-   }
+ .HudMove-invite .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightInviteIcon>.UiItemIcon .svg-inline--fa,
+ .HudMove-invite .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightInviteIcon>.UiItemIcon.svg-inline--fa {
+   paint-order: stroke fill
```

#### 472. `bundles/bloxd.io/main.css` (Changed code · before: `L3112-L3114` → after: `L4176-L4181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4176-L4181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4176-L4181) · [Before (L3112-L3114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3112-L3114)

```diff
- .BackButton[data-pressing] {
-   color: #ffb914;
-   transition: none
+ .HudMove-invite .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightInviteIcon>.UiItemIcon .svg-inline--fa path:only-of-type,
+ .HudMove-invite .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightInviteIcon>.UiItemIcon.svg-inline--fa path:only-of-type {
+   stroke: #000;
+   vector-effect: non-scaling-stroke;
+   stroke-width: 2px;
+   stroke-linejoin: round
```

#### 473. `bundles/bloxd.io/main.css` (Changed code · before: `L3117-L3131` → after: `L4184-L4194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4184-L4194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4184-L4194) · [Before (L3117-L3131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3117-L3131)

```diff
- @keyframes particles-out {
-   40% {
-     height: .6em;
-     transform: translate(-50%, -50%) rotate(var(--Θ)) translateY(.5em) scale(1)
-   }
- 
-   40%,
-   50% {
-     height: .6em;
-     transform: translate(-50%, -50%) rotate(var(--Θ)) translateY(1.2em) scale(1)
-   }
- 
-   50% {
-     height: .2em
-   }
+ .HudMove-invite .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightInviteIcon>.UiItemIcon {
+   font-size: calc(var(--row-icon-key)*.5);
+   height: var(--row-icon-key);
+   min-height: 0;
+   min-width: 0;
+   opacity: var(--hud-key-opacity, 1);
+   position: fixed;
+   right: var(--hud-inset-right);
+   top: var(--hud-inset-top);
+   width: var(--row-icon-key)
+ }
```

#### 474. `bundles/bloxd.io/main.css` (Changed code · before: `L3133-L3134` → after: `L4196-L4200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4196-L4200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4196-L4200) · [Before (L3133-L3134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3133-L3134)

```diff
-   to {
-     transform: translate(-50%, -50%) rotate(var(--Θ)) translateY(1.2em) scale(0)
+ @media(pointer:coarse) {
+   .HudMove-invite .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightInviteIcon>.UiItemIcon:before {
+     content: "";
+     inset: min(0px, (100% - 44px)/2) min(0px, (100% - 44px)/2);
+     position: absolute
```

#### 475. `bundles/bloxd.io/main.css` (Changed code · before: `L3138-L3143` → after: `L4204-L4205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4204-L4205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4204-L4205) · [Before (L3138-L3143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3138-L3143)

```diff
- .Confetti {
-   height: 1px;
-   left: 50%;
-   position: absolute;
-   top: 50%;
-   width: 1px
+ .HudMove-invite .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightInviteIcon>.UiItemIcon {
+   translate: calc(var(--hud-invite-dx, 0)*100vw) calc(var(--hud-invite-dy, 0)*var(--hud-viewport-height))
```

#### 476. `bundles/bloxd.io/main.css` (Changed code · before: `L3146-L3154` → after: `L4208-L4210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4208-L4210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4208-L4210) · [Before (L3146-L3154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3146-L3154)

```diff
- .Confetti .ConfettiParticle {
-   --percentage: calc(var(--i)/var(--total-particles));
-   --Θ: calc(var(--percentage)*1turn);
-   height: 0;
-   left: 0;
-   position: absolute;
-   top: 0;
-   transform: translate(-50%, -50%) rotate(var(--Θ)) translateY(.5em) scale(0);
-   width: .15em
+ .HudMove-invite .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightInviteIcon>.UiItemIcon .ScaleOnHover {
+   display: flex;
+   scale: none
```

#### 477. `bundles/bloxd.io/main.css` (Changed code · before: `L3157-L3159` → after: `L4213-L4218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4213-L4218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4213-L4218) · [Before (L3157-L3159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3157-L3159)

```diff
- .Confetti .ConfettiParticle .DefaultConfettiParticle {
-   height: 100%;
-   width: 100%
+ .HudMove-invite .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightInviteIcon>.UiItemIcon[data-pressing] {
+   background-color: rgba(75, 94, 130, .85);
+   box-shadow: inset 0 1.5px 0 #586e99, 0 1px 0 #1a1f2e;
+   opacity: 1;
+   transform: translateY(2px);
+   transition: none
```

#### 478. `bundles/bloxd.io/main.css` (Changed code · before: `L3162-L3163` → after: `L4221-L4223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4221-L4223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4221-L4223) · [Before (L3162-L3163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3162-L3163)

```diff
- .Confetti .ConfettiParticle:nth-child(odd) .DefaultConfettiParticle {
-   background-color: #ffb914
+ .HudMove-invite .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightInviteIcon>.UiItemIcon[data-pressing] .ScaleOnHover {
+   color: inherit;
+   transform: none
```

#### 479. `bundles/bloxd.io/main.css` (Changed code · before: `L3166-L3167` → after: `L4226-L4227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4226-L4227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4226-L4227) · [Before (L3166-L3167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3166-L3167)

```diff
- .Confetti .ConfettiParticle:nth-child(2n) .DefaultConfettiParticle {
-   background-color: #fc6464
+ .TouchKeysRound.HudMove-invite .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightInviteIcon>.UiItemIcon {
+   border-radius: 50%
```

#### 480. `bundles/bloxd.io/main.css` (Changed code · before: `L3170-L3171` → after: `L4230-L4231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4230-L4231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4230-L4231) · [Before (L3170-L3171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3170-L3171)

```diff
- .Confetti.ActivatedConfetti .ConfettiParticle {
-   animation: particles-out .5s ease-out
+ .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightSettingsIcon>.UiItemIcon>.ScaleOnHover {
+   scale: calc(var(--hud-settings-scale)/var(--hud-menu-scale, 1))
```

#### 481. `bundles/bloxd.io/main.css` (Changed code · before: `L3174-L3181` → after: `L4234-L4235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4234-L4235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4234-L4235) · [Before (L3174-L3181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3174-L3181)

```diff
- .TextInput {
-   background: #303a59;
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
-   color: #fff;
-   font-family: var(--root-font-family);
-   outline: none;
-   text-align: center
+ .HudHide-settings .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightSettingsIcon {
+   display: none
```

#### 482. `bundles/bloxd.io/main.css` (Changed code · before: `L3184-L3185` → after: `L4238-L4241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4238-L4241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4238-L4241) · [Before (L3184-L3185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3184-L3185)

```diff
- .TextInput:focus {
-   border-color: #ffb914
+ .HudMove-settings .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightSettingsIcon {
+   --row-icon-key: calc(var(--touch-key-size, calc(5 * clamp(1rem, 1.45vw, 1.5rem))) * var(--hud-settings-scale, 1));
+   height: var(--row-icon-box);
+   width: var(--row-icon-box)
```

#### 483. `bundles/bloxd.io/main.css` (Changed code · before: `L3188-L3191` → after: `L4244-L4247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4244-L4247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4244-L4247) · [Before (L3188-L3191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3188-L3191)

```diff
- .TextInput::-webkit-inner-spin-button,
- .TextInput::-webkit-outer-spin-button {
-   -webkit-appearance: none;
-   margin: 0
+ @media(orientation:portrait)and (max-width:600px) {
+   .HudMove-settings .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightSettingsIcon {
+     --row-icon-key: calc(var(--touch-key-size, calc(5 * min(10px, 2.9vw))) * var(--hud-settings-scale, 1))
+   }
```

#### 484. `bundles/bloxd.io/main.css` (Changed code · before: `L3194-L3195` → after: `L4250-L4255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4250-L4255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4250-L4255) · [Before (L3194-L3195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3194-L3195)

```diff
- .TextInput[type=number] {
-   -moz-appearance: textfield
+ .HudMove-settings .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightSettingsIcon.OutOfTray {
+   height: 0;
+   min-height: 0;
+   min-width: 0;
+   position: absolute;
+   width: 0
```

#### 485. `bundles/bloxd.io/main.css` (Changed code · before: `L3198` → after: `L4258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4258) · [Before (L3198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3198)

```diff
- .RewardedCountdownFallback {
+ .HudMove-settings .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightSettingsIcon>.UiItemIcon {
```

#### 486. `bundles/bloxd.io/main.css` (Changed code · before: `L3202-L3203` → after: `L4267-L4268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4267-L4268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4267-L4268) · [Before (L3202-L3203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3202-L3203)

```diff
-   gap: .5rem;
-   padding: 1.5rem 3rem
+   justify-content: center;
+   text-shadow: -1px -1px 0 #000, -1px 0 0 #000, -1px 1px 0 #000, 0 -1px 0 #000, 0 0 0 #000, 0 1px 0 #000, 1px -1px 0 #000, 1px 0 0 #000, 1px 1px 0 #000
```

#### 487. `bundles/bloxd.io/main.css` (Changed code · before: `L3206-L3207` → after: `L4271-L4273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4271-L4273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4271-L4273) · [Before (L3206-L3207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3206-L3207)

```diff
- .RewardedCountdownFallback .RewardedCountdownFallbackTitle {
-   font-size: 1.6rem
+ .HudMove-settings .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightSettingsIcon>.UiItemIcon .svg-inline--fa,
+ .HudMove-settings .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightSettingsIcon>.UiItemIcon.svg-inline--fa {
+   paint-order: stroke fill
```

#### 488. `bundles/bloxd.io/main.css` (Changed code · before: `L3210-L3213` → after: `L4276-L4281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4276-L4281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4276-L4281) · [Before (L3210-L3213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3210-L3213)

```diff
- .RewardedCountdownFallback .RewardedCountdownFallbackTimer {
-   color: #ffb914;
-   font-size: 4rem;
-   font-weight: 900
+ .HudMove-settings .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightSettingsIcon>.UiItemIcon .svg-inline--fa path:only-of-type,
+ .HudMove-settings .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightSettingsIcon>.UiItemIcon.svg-inline--fa path:only-of-type {
+   stroke: #000;
+   vector-effect: non-scaling-stroke;
+   stroke-width: 2px;
+   stroke-linejoin: round
```

#### 489. `bundles/bloxd.io/main.css` (Changed code · before: `L3216` → after: `L4284-L4287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4284-L4287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4284-L4287) · [Before (L3216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3216)

```diff
- .TextFromServer {
+ .HudMove-settings .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightSettingsIcon>.UiItemIcon {
+   font-size: calc(var(--row-icon-key)*.5);
+   height: var(--row-icon-key);
+   min-height: 0;
```

#### 490. `bundles/bloxd.io/main.css` (Changed code · before: `L3218-L3223` → after: `L4289-L4293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4289-L4293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4289-L4293) · [Before (L3218-L3223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3218-L3223)

```diff
-   white-space: pre-wrap
- }
- 
- .IndividualText {
-   display: inline;
-   vertical-align: middle
+   opacity: var(--hud-key-opacity, 1);
+   position: fixed;
+   right: var(--hud-inset-right);
+   top: var(--hud-inset-top);
+   width: var(--row-icon-key)
```

#### 491. `bundles/bloxd.io/main.css` (Changed code · before: `L3226-L3228` → after: `L4296-L4301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4296-L4301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4296-L4301) · [Before (L3226-L3228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3226-L3228)

```diff
- .IndividualText.ClickableIndividualText {
-   cursor: pointer;
-   pointer-events: auto
+ @media(pointer:coarse) {
+   .HudMove-settings .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightSettingsIcon>.UiItemIcon:before {
+     content: "";
+     inset: min(0px, (100% - 44px)/2) min(0px, (100% - 44px)/2);
+     position: absolute
+   }
```

#### 492. `bundles/bloxd.io/main.css` (Changed code · before: `L3231-L3236` → after: `L4304-L4305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4304-L4305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4304-L4305) · [Before (L3231-L3236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3231-L3236)

```diff
- .TextFromServerEntityNameWithTags {
-   align-items: center;
-   display: inline-flex;
-   gap: .2rem;
-   max-width: 100%;
-   vertical-align: middle
+ .HudMove-settings .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightSettingsIcon>.UiItemIcon {
+   translate: calc(var(--hud-settings-dx, 0)*100vw) calc(var(--hud-settings-dy, 0)*var(--hud-viewport-height))
```

#### 493. `bundles/bloxd.io/main.css` (Changed code · before: `L3239-L3244` → after: `L4308-L4310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4308-L4310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4308-L4310) · [Before (L3239-L3244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3239-L3244)

```diff
- .TextFromServerEntityNameWithTags .TextFromServerEntityName {
-   flex-shrink: 1;
-   overflow-x: hidden;
-   overflow-y: visible;
-   text-overflow: ellipsis;
-   white-space: nowrap
+ .HudMove-settings .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightSettingsIcon>.UiItemIcon .ScaleOnHover {
+   display: flex;
+   scale: none
```

#### 494. `bundles/bloxd.io/main.css` (Changed code · before: `L3247-L3249` → after: `L4313-L4318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4313-L4318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4313-L4318) · [Before (L3247-L3249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3247-L3249)

```diff
- .TextFromServerIngameItem {
-   display: inline-block;
-   vertical-align: middle
+ .HudMove-settings .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightSettingsIcon>.UiItemIcon[data-pressing] {
+   background-color: rgba(75, 94, 130, .85);
+   box-shadow: inset 0 1.5px 0 #586e99, 0 1px 0 #1a1f2e;
+   opacity: 1;
+   transform: translateY(2px);
+   transition: none
```

#### 495. `bundles/bloxd.io/main.css` (Changed code · before: `L3252-L3253` → after: `L4321-L4323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4321-L4323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4321-L4323) · [Before (L3252-L3253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3252-L3253)

```diff
- .TextFromServerFontawesomeIcon {
-   vertical-align: middle
+ .HudMove-settings .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightSettingsIcon>.UiItemIcon[data-pressing] .ScaleOnHover {
+   color: inherit;
+   transform: none
```

#### 496. `bundles/bloxd.io/main.css` (Changed code · before: `L3256-L3258` → after: `L4326-L4327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4326-L4327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4326-L4327) · [Before (L3256-L3258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3256-L3258)

```diff
- .TextFromServerGameIcon {
-   display: inline-flex;
-   vertical-align: middle
+ .TouchKeysRound.HudMove-settings .TopRightIconsContainer .TopRightIcons.TouchInGame .TopRightSettingsIcon>.UiItemIcon {
+   border-radius: 50%
```

#### 497. `bundles/bloxd.io/main.css` (Changed code · before: `L3261-L3263` → after: `L4330-L4331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4330-L4331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4330-L4331) · [Before (L3261-L3263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3261-L3263)

```diff
- .TextFromServerGameIcon.GameIcon>* {
-   height: 100%;
-   width: 100%
+ .UiItemIcon {
+   position: relative
```

#### 498. `bundles/bloxd.io/main.css` (Changed code · before: `L3266-L3269` → after: `L4334-L4338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4334-L4338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4334-L4338) · [Before (L3266-L3269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3266-L3269)

```diff
- .KeyboardButtonRepresentation.TextFromServerKeyBinding {
-   display: inline-flex;
-   margin-bottom: 0;
-   vertical-align: middle
+ .UiItemIcon[data-pressing] .ScaleOnHover,
+ [data-pressing]>.UiItemIcon .ScaleOnHover {
+   color: #ffb914;
+   transform: scale(.88);
+   transition: none
```

#### 499. `bundles/bloxd.io/main.css` (Changed code · before: `L3272-L3273` → after: `L4341-L4346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4341-L4346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4341-L4346) · [Before (L3272-L3273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3272-L3273)

```diff
- .KeyboardButtonRepresentation.TextFromServerKeyBinding.ControllerButtonRepresentation {
-   --pad-glyph-size: 1.5em
+ .IconKeyboardButtonHelper {
+   bottom: -20%;
+   color: #cef3ff;
+   font-size: .8rem;
+   position: absolute;
+   right: -25%
```

#### 500. `bundles/bloxd.io/main.css` (Changed code · before: `L3276` → after: `L4349-L4353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4349-L4353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4349-L4353) · [Before (L3276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3276)

```diff
- .TextFromServerProgressBar {
+ .IconKeyboardButtonHelper .KeyboardButtonRepresentation.ControllerButtonRepresentation {
+   --pad-glyph-max-width: calc(2.1em + clamp(0px, min(100vh, 56.25vw) - 720px, 720px)*0.02);
+   background-color: #303a59;
+   border: .1em solid #838383;
+   box-shadow: 0 .2em 0 #838383;
```

#### 501. `bundles/bloxd.io/main.css` (Changed code · before: `L3278-L3281` → after: `L4355-L4358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4355-L4358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4355-L4358) · [Before (L3278-L3281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3278-L3281)

```diff
-   display: inline-block;
-   margin: 0 .35em;
-   overflow: hidden;
-   vertical-align: middle
+   color: #fff;
+   height: calc(2.1em + clamp(0px, min(100vh, 56.25vw) - 720px, 720px)*.02);
+   padding: .15em;
+   width: calc(2.1em + clamp(0px, min(100vh, 56.25vw) - 720px, 720px)*.02)
```

#### 502. `bundles/bloxd.io/main.css` (Changed code · before: `L3284-L3285` → after: `L4361-L4364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4361-L4364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4361-L4364) · [Before (L3284-L3285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3284-L3285)

```diff
- .HudTextPanel.NoBackground .TextFromServerProgressBar {
-   border: 1px solid rgba(48, 58, 89, .4)
+ .TouchTutorialIcon {
+   color: #cef3ff;
+   font-size: 30px;
+   position: absolute
```

#### 503. `bundles/bloxd.io/main.css` (Changed code · before: `L3288-L3291` → after: `L4367-L4370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4367-L4370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4367-L4370) · [Before (L3288-L3291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3288-L3291)

```diff
- .TextFromServerProgressBar .TextFromServerProgressBarFill {
-   display: block;
-   height: 100%;
-   overflow: hidden
+ .HandTopRightAnim {
+   animation: TopRightPoint 1s ease-in-out infinite alternate both;
+   right: -20px;
+   top: -20px
```

#### 504. `bundles/bloxd.io/main.css` (Changed code · before: `L3294-L3296` → after: `L4373-L4376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4373-L4376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4373-L4376) · [Before (L3294-L3296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3294-L3296)

```diff
- .TextFromServerProgressBar .TextFromServerProgressBarFill .TextFromServerProgressBarFillInner {
-   display: block;
-   height: 100%
+ .HandTopLeftAnim {
+   animation: TopLeftPoint 1s ease-in-out infinite alternate both;
+   left: -30px;
+   top: -20px
```

#### 505. `bundles/bloxd.io/main.css` (Changed code · before: `L3299-L3306` → after: `L4379-L4382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4379-L4382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4379-L4382) · [Before (L3299-L3306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3299-L3306)

```diff
- .ItemSlotBar {
-   background: #1a1f2e;
-   bottom: 8%;
-   height: max(.35rem, 4px);
-   left: 10%;
-   pointer-events: none;
-   position: absolute;
-   right: 10%
+ .HandLeftAnim {
+   animation: LeftPoint 1s ease-in-out infinite alternate both;
+   right: 100%;
+   top: 50%
```

#### 506. `bundles/bloxd.io/main.css` (Changed code · before: `L3309-L3313` → after: `L4385-L4388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4385-L4388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4385-L4388) · [Before (L3309-L3313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3309-L3313)

```diff
- .ItemSlotBar i {
-   background: #3fd2f2;
-   display: block;
-   height: 100%
- }
+ @keyframes TopRightPoint {
+   0% {
+     transform: translateX(30%) translateY(-30%) rotate(-45deg)
+   }
```

#### 507. `bundles/bloxd.io/main.css` (Changed code · before: `L3315-L3316` → after: `L4390-L4392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4390-L4392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4390-L4392) · [Before (L3315-L3316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3315-L3316)

```diff
- .ItemSlotBar.Mid i {
-   background: #ffb914
+   to {
+     transform: translateX(-30%) translateY(30%) rotate(-45deg)
+   }
```

#### 508. `bundles/bloxd.io/main.css` (Changed code · before: `L3319-L3322` → after: `L4395-L4398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4395-L4398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4395-L4398) · [Before (L3319-L3322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3319-L3322)

```diff
- .ItemSlotBar.Low i {
-   animation: itemSlotBarLow 1s steps(2, jump-none) infinite;
-   background: #e34f4f
- }
+ @keyframes TopLeftPoint {
+   0% {
+     transform: translateX(-30%) translateY(-30%) rotate(-135deg)
+   }
```

#### 509. `bundles/bloxd.io/main.css` (Changed code · before: `L3326` → after: `L4401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4401) · [Before (L3326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3326)

```diff
-     opacity: .35
+     transform: translateX(30%) translateY(30%) rotate(-135deg)
```

#### 510. `bundles/bloxd.io/main.css` (Changed code · before: `L3330-L3332` → after: `L4405-L4407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4405-L4407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4405-L4407) · [Before (L3330-L3332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3330-L3332)

```diff
- @media(prefers-reduced-motion:reduce) {
-   .ItemSlotBar.Low i {
-     animation: none
+ @keyframes LeftPoint {
+   0% {
+     transform: translateX(-15%) translateY(-50%) rotate(180deg)
```

#### 511. `bundles/bloxd.io/main.css` (Changed code · before: `L3336-L3349` → after: `L4410-L4412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4410-L4412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4410-L4412) · [Before (L3336-L3349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3336-L3349)

```diff
- .KeyboardButtonRepresentation {
-   align-items: center;
-   background-color: #303a59;
-   border: .1em solid #838383;
-   box-shadow: 0 .2em 0 #838383;
-   box-sizing: border-box;
-   color: #fff;
-   display: flex;
-   font-weight: 700;
-   justify-content: center;
-   margin-bottom: .3em;
-   min-width: 2em;
-   padding: .2em .4em;
-   transition: background-color .05s, color .05s, box-shadow .05s, transform .05s
+   to {
+     transform: translateX(10%) translateY(-50%) rotate(180deg)
+   }
```

#### 512. `bundles/bloxd.io/main.css` (Changed code · before: `L3352-L3355` → after: `L4415-L4419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4415-L4419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4415-L4419) · [Before (L3352-L3355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3352-L3355)

```diff
- .KeyboardButtonRepresentation.Pressed {
-   background-color: #394980;
-   transform: translateY(.2em)
- }
+ @media(prefers-reduced-motion:reduce) {
+   .HandTopRightAnim {
+     animation: none;
+     transform: rotate(-45deg)
+   }
```

#### 513. `bundles/bloxd.io/main.css` (Changed code · before: `L3357-L3364` → after: `L4421-L4424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4421-L4424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4421-L4424) · [Before (L3357-L3364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3357-L3364)

```diff
- .KeyboardButtonRepresentation.ControllerButtonRepresentation {
-   --pad-glyph-size: calc(2.1em + clamp(0px, min(100vh, 56.25vw) - 720px, 720px)*0.02);
-   background-color: transparent;
-   border: none;
-   box-shadow: none;
-   min-width: 0;
-   padding: 0
- }
+   .HandTopLeftAnim {
+     animation: none;
+     transform: rotate(-135deg)
+   }
```

#### 514. `bundles/bloxd.io/main.css` (Changed code · before: `L3366-L3374` → after: `L4426-L4429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4426-L4429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4426-L4429) · [Before (L3366-L3374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3366-L3374)

```diff
- .FriendBadge {
-   align-items: center;
-   color: #f38ab6;
-   display: inline-flex;
-   flex-shrink: 0;
-   font-size: .75em;
-   margin-left: .3em;
-   opacity: .8;
-   vertical-align: middle
+   .HandLeftAnim {
+     animation: none;
+     transform: translateY(-50%) rotate(180deg)
+   }
```

#### 515. `bundles/bloxd.io/main.css` (Changed code · before: `L3377-L3382` → after: `L4432-L4440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4432-L4440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4432-L4440) · [Before (L3377-L3382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3377-L3382)

```diff
- .LoginButtonContainer {
-   align-items: stretch;
-   display: flex;
-   font-size: 1.4rem;
-   justify-content: center;
-   position: relative
+ .Dot {
+   background-color: #dd0202;
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
+   display: inline-block;
+   height: 15px;
+   position: absolute;
+   width: 15px
```

#### 516. `bundles/bloxd.io/main.css` (Changed code · before: `L3385` → after: `L4443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4443) · [Before (L3385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3385)

```diff
- .LoginButtonContainer .LoggingInLoader {
+ .NotificationBellContainer {
```

#### 517. `bundles/bloxd.io/main.css` (Changed code · before: `L3389-L3396` → after: `L4446-L4447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4446-L4447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4446-L4447) · [Before (L3389-L3396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3389-L3396)

```diff
-   font-size: 2rem;
-   height: 100%;
-   justify-content: center;
-   left: 0;
-   position: absolute;
-   top: 0;
-   width: 100%;
-   z-index: 2
+   flex: 0 0 auto;
+   position: relative
```

#### 518. `bundles/bloxd.io/main.css` (Changed code · before: `L3399` → after: `L4450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4450) · [Before (L3399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3399)

```diff
- .LoginButtonContainer .LoginButton {
+ .NotificationBellContainer .NotificationBell {
```

#### 519. `bundles/bloxd.io/main.css` (Changed code · before: `L3402-L3404` → after: `L4453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4453) · [Before (L3402-L3404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3402-L3404)

```diff
-   background-color: #f5f5f5;
-   border: 1px solid #0f0f0f;
-   border-radius: 0;
+   border: none;
```

#### 520. `bundles/bloxd.io/main.css` (Changed code · before: `L3407` → after: `L4456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4456) · [Before (L3407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3407)

```diff
-   color: #000;
+   color: #f2f2f2;
```

#### 521. `bundles/bloxd.io/main.css` (Changed code · before: `L3411-L3414` → after: `L4460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4460) · [Before (L3411-L3414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3411-L3414)

```diff
-   font-weight: 600;
-   gap: .4em;
-   height: 2.3em;
-   justify-content: flex-start;
+   justify-content: center;
```

#### 522. `bundles/bloxd.io/main.css` (Changed code · before: `L3418-L3419` → after: `L4464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4464) · [Before (L3418-L3419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3418-L3419)

```diff
-   overflow: hidden;
-   padding: 0 1rem;
+   padding: 0;
```

#### 523. `bundles/bloxd.io/main.css` (Changed code · before: `L3423-L3451` → after: `L4468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4468) · [Before (L3423-L3451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3423-L3451)

```diff
-   text-shadow: none;
-   text-transform: inherit;
-   transition: transform .2s, box-shadow .2s, filter .2s
- }
- 
- @media(hover:hover) {
-   .LoginButtonContainer .LoginButton:hover {
-     transform: scale(1.05)
-   }
- }
- 
- .LoginButtonContainer .LoginButton.pad-focused {
-   transform: scale(1.05)
- }
- 
- .LoginButtonContainer .LoginButton[data-pressing] {
- ... (13 more removed lines; see GitHub link above)
+   text-transform: inherit
```

#### 524. `bundles/bloxd.io/main.css` (Changed code · before: `L3454-L3455` → after: `L4471-L4473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4471-L4473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4471-L4473) · [Before (L3454-L3455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3454-L3455)

```diff
- .LoginButtonContainer .LoginButton.LoginButtonsLoggedIn.LoginButtonLinked {
-   filter: brightness(1)
+ .NotificationBellContainer .NotificationBell .UiItemIcon,
+ .NotificationBellContainer .NotificationBell .UiItemIcon .ScaleOnHover {
+   display: flex
```

#### 525. `bundles/bloxd.io/main.css` (Changed code · before: `L3458` → after: `L4476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4476) · [Before (L3458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3458)

```diff
- .LoginButtonContainer .LoginButton .LoginButtonIcon {
+ .NotificationBellContainer .NotificationBell .NotificationBellBadge {
```

#### 526. `bundles/bloxd.io/main.css` (Changed code · before: `L3462-L3477` → after: `L4486-L4492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4486-L4492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4486-L4492) · [Before (L3462-L3477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3462-L3477)

```diff
-   width: 1.5em
- }
- 
- .LoginButtonContainer .LoginButton .LoginButtonIcon img {
-   --icon-width: 1.1em;
-   --icon-height: 1.1em;
-   flex: none;
-   height: calc(var(--icon-height) + 6px);
-   margin: -3px;
-   max-width: none;
-   width: calc(var(--icon-width) + 6px)
- }
- 
- .LoginButtonContainer .LoginButton .LoginButtonIcon img.LoginIconWide {
-   --icon-width: 1.35em;
-   --icon-height: 1.2em
+   line-height: 1;
+   min-width: 1.5em;
+   padding: 0 .35em;
+   pointer-events: none;
+   position: absolute;
+   right: 0;
+   top: 0
```

#### 527. `bundles/bloxd.io/main.css` (Changed code · before: `L3480-L3482` → after: `L4495-L4496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4495-L4496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4495-L4496) · [Before (L3480-L3482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3480-L3482)

```diff
- .LoginButtonContainer .LoginButton .LoginButtonIcon img.LoginIconApple {
-   --icon-width: 1.05em;
-   --icon-height: 1.4em
+ .NotificationBellContainer.NotificationBellSocialBar .NotificationBell {
+   font-size: 2.2rem
```

#### 528. `bundles/bloxd.io/main.css` (Changed code · before: `L3485-L3487` → after: `L4499-L4500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4499-L4500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4499-L4500) · [Before (L3485-L3487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3485-L3487)

```diff
- .LoginButtonContainer .LoginButton .LoginButtonIcon img.LoginIconGooglePlay {
-   --icon-width: 0.9625em;
-   --icon-height: 1.1em
+ .NotificationBellContainer.NotificationBellHeaderIcon {
+   height: 100%
```

#### 529. `bundles/bloxd.io/main.css` (Changed code · before: `L3490-L3492` → after: `L4503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4503) · [Before (L3490-L3492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3490-L3492)

```diff
- .LoginButtonContainer .LoginButtonAction {
-   align-items: center;
-   box-shadow: none;
+ .NotificationTray {
```

#### 530. `bundles/bloxd.io/main.css` (Changed code · before: `L3494-L3505` → after: `L4505-L4508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4505-L4508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4505-L4508) · [Before (L3494-L3505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3494-L3505)

```diff
-   height: 2.3em;
-   justify-content: center;
-   min-width: 4em;
-   overflow-x: hidden;
-   text-overflow: ellipsis;
-   white-space: nowrap
- }
- 
- .LoginButtonContainer .LoginButtonLinkedLabel,
- .LoginButtonContainer .LoginButtonUnlink {
-   font-size: 1rem;
-   margin-left: .6rem
+   flex-direction: column;
+   position: fixed;
+   visibility: hidden;
+   z-index: 16
```

#### 531. `bundles/bloxd.io/main.css` (Changed code · before: `L3508-L3510` → after: `L4511-L4512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4511-L4512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4511-L4512) · [Before (L3508-L3510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3508-L3510)

```diff
- .LoginButtonContainer .LoginButtonUnlink {
-   align-self: center;
-   position: relative
+ .NotificationTray.NotificationTrayPositioned {
+   visibility: visible
```

#### 532. `bundles/bloxd.io/main.css` (Changed code · before: `L3513-L3518` → after: `L4515-L4524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4515-L4524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4515-L4524) · [Before (L3513-L3518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3513-L3518)

```diff
- @media(pointer:coarse) {
-   .LoginButtonContainer .LoginButtonUnlink:before {
-     content: "";
-     inset: min(0px, (100% - 44px)/2) min(0px, (100% - 44px)/2);
-     position: absolute
-   }
+ .NotificationTray {
+   background-color: #303a59;
+   border: 1px solid #0f0f0f;
+   border-radius: 0;
+   box-shadow: .2rem .25rem 0 rgba(0, 0, 0, .32);
+   box-sizing: border-box;
+   color: #f2f2f2;
+   max-height: min(36rem, 70vh);
+   pointer-events: auto;
+   width: min(30rem, 92vw)
```

#### 533. `bundles/bloxd.io/main.css` (Changed code · before: `L3521` → after: `L4527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4527) · [Before (L3521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3521)

```diff
- .LoginButtonContainer .LoginButtonLinkedLabel {
+ .NotificationTray .NotificationTrayHeader {
```

#### 534. `bundles/bloxd.io/main.css` (Changed code · before: `L3523` → after: `L4529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4529) · [Before (L3523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3523)

```diff
-   color: #cfcfcf;
+   border-bottom: .1rem solid hsla(0, 0%, 95%, .15);
```

#### 535. `bundles/bloxd.io/main.css` (Changed code · before: `L3525-L3526` → after: `L4531-L4534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4531-L4534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/main.css#L4531-L4534) · [Before (L3525-L3526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/main.css#L3525-L3526)

```diff
-   gap: .3em;
-   white-space: nowrap
+   flex: 0 0 auto;
+   gap: .8rem;
+   justify-content: space-between;
+   padding: .9rem 1.1rem
```
