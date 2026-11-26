# Changed — Bundle Modifications Report (Part 057 / 115)

- **Updated at**: `2026-11-27T00:54 JST`
- **Part**: `57 / 115` (**404** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 056](part-056.md) · [Part 058 →](part-058.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/88.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/88.js` (4618 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46)

#### 3949. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29659-L29660` → after: `L30190-L30191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30190-L30191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30190-L30191) · [Before (L29659-L29660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29659-L29660)

```diff
-             CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t\t${this.uniformLevels?"":(0,oU.c)(XU,"aLightLevels","vec4","mediump")}\n\t\t\t\t\t\t${(0,cU.U)(XU)}\n\t\t\t\t\t#endif\n\t\t\t\t`,
-             CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t{\n\t\t\t\t\t\t${(0,cU.S)(XU,UU)}\n\t\t\t\t\t\t${(0,oU.C)(XU,"vec3","blockLightContrib",(0,cU.o)(XU,"lightLevels.rgb"))}\n\t\t\t\t\t\t${(0,oU.C)(XU,"vec3","skyContrib",`mix(${(0,oU.xb)(XU,"uAmbientL … [truncated]
+             CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t\t${this.uniformLevels?"":(0,zH.d)(BH,"aLightLevels","vec4","mediump")}\n\t\t\t\t\t\t${(0,AH.W)(BH)}\n\t\t\t\t\t#endif\n\t\t\t\t`,
+             CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t{\n\t\t\t\t\t\t${(0,AH.S)(BH,HH)}\n\t\t\t\t\t\t${(0,zH.C)(BH,"vec3","blockLightContrib",(0,AH.m)(BH,"lightLevels.rgb"))}\n\t\t\t\t\t\t${(0,zH.C)(BH,"vec3","skyContrib",`mix(${(0,zH.Cb)(BH,"uAmbientL … [truncated]
```

#### 3950. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29664-L29665` → after: `L30195-L30196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30195-L30196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30195-L30196) · [Before (L29664-L29665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29664-L29665)

```diff
-           CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t\t${(0,cU.U)(XU)}\n\t\t\t\t\t#endif\n\t\t\t\t`,
-           CUSTOM_FRAGMENT_BEFORE_FOG: (0, cU.Q)(XU)
+           CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t#ifdef BLOXD_LIGHTING\n\t\t\t\t\t\t${(0,AH.W)(BH)}\n\t\t\t\t\t#endif\n\t\t\t\t`,
+           CUSTOM_FRAGMENT_BEFORE_FOG: (0, AH.P)(BH)
```

#### 3951. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29671` → after: `L30202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30202) · [Before (L29671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29671)

```diff
-   37961: (UU, XU, zU) => {
+   38098: (HH, BH, LH) => {
```

#### 3952. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29677` → after: `L30208-L30209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30208-L30209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30208-L30209) · [Before (L29677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29677)

```diff
-       e: () => AU,
+       d: () => hH,
+       g: () => AH,
```

#### 3953. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29679-L29680` → after: `L30211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30211) · [Before (L29679-L29680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29679-L29680)

```diff
-       j: () => QU,
-       m: () => DU,
+       l: () => CH,
```

#### 3954. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29714` → after: `L30245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30245) · [Before (L29714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29714)

```diff
-   37954: (UU, XU, zU) => {
+   38094: (HH, BH, LH) => {
```

#### 3955. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29716` → after: `L30247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30247) · [Before (L29716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29716)

```diff
-       d: () => yU
+       b: () => rH
```

#### 3956. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29718` → after: `L30249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30249) · [Before (L29718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29718)

```diff
-     var cU = zU(37946);
+     var AH = LH(38086);
```

#### 3957. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29721` → after: `L30252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30252) · [Before (L29721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29721)

```diff
-       return `\n\t\t${(0,cU.x)(UU,"vec3",`${XU}Rgb2hsv`,[{name:"c",type:"vec3"}],`\
+       return `\n\t\t${(0,AH.x)(HH,"vec3",`${BH}Rgb2hsv`,[{name:"c",type:"vec3"}],`\
```

#### 3958. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29723` → after: `L30254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30254) · [Before (L29723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29723)

```diff
-         (0, cU.C)(UU, "vec4", "K", (0, cU.k)(UU, "vec4", "0.0", "-1.0 / 3.0", "2.0 / 3.0", "-1.0"))
+         (0, AH.C)(HH, "vec4", "K", (0, AH.l)(HH, "vec4", "0.0", "-1.0 / 3.0", "2.0 / 3.0", "-1.0"))
```

#### 3959. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29726` → after: `L30257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30257) · [Before (L29726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29726)

```diff
-         (0, cU.C)(UU, "vec4", "p", `mix(${(0,cU.k)(UU,"vec4","c.bg","K.wz")}, ${(0,cU.k)(UU,"vec4","c.gb","K.xy")}, step(c.b, c.g))`)
+         (0, AH.C)(HH, "vec4", "p", `mix(${(0,AH.l)(HH,"vec4","c.bg","K.wz")}, ${(0,AH.l)(HH,"vec4","c.gb","K.xy")}, step(c.b, c.g))`)
```

#### 3960. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29729` → after: `L30260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30260) · [Before (L29729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29729)

```diff
-         (0, cU.C)(UU, "vec4", "q", `mix(${(0,cU.k)(UU,"vec4","p.xyw","c.r")}, ${(0,cU.k)(UU,"vec4","c.r","p.yzx")}, step(p.x, c.r))`)
+         (0, AH.C)(HH, "vec4", "q", `mix(${(0,AH.l)(HH,"vec4","p.xyw","c.r")}, ${(0,AH.l)(HH,"vec4","c.r","p.yzx")}, step(p.x, c.r))`)
```

#### 3961. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29738` → after: `L30269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30269) · [Before (L29738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29738)

```diff
-         (0, cU.k)(UU, "vec3", "abs(q.z + (q.w - q.y) / (6.0 * d + e))", "d / (q.x + e)", "q.x")
+         (0, AH.l)(HH, "vec3", "abs(q.z + (q.w - q.y) / (6.0 * d + e))", "d / (q.x + e)", "q.x")
```

#### 3962. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29740` → after: `L30271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30271) · [Before (L29740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29740)

```diff
-       n\ t\ t`)}\n\n\t\t${(0,cU.x)(UU,"vec3",`${XU}Hsv2rgb`,[{name:"c",type:"vec3"}],`\
+       n\ t\ t`)}\n\n\t\t${(0,AH.x)(HH,"vec3",`${BH}Hsv2rgb`,[{name:"c",type:"vec3"}],`\
```

#### 3963. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29742` → after: `L30273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30273) · [Before (L29742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29742)

```diff
-         (0, cU.C)(UU, "vec4", "K", (0, cU.k)(UU, "vec4", "1.0", "2.0 / 3.0", "1.0 / 3.0", "3.0"))
+         (0, AH.C)(HH, "vec4", "K", (0, AH.l)(HH, "vec4", "1.0", "2.0 / 3.0", "1.0 / 3.0", "3.0"))
```

#### 3964. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29748` → after: `L30279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30279) · [Before (L29748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29748)

```diff
-         (0, cU.k)(UU, "vec3", "0.0")
+         (0, AH.l)(HH, "vec3", "0.0")
```

#### 3965. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29750` → after: `L30281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30281) · [Before (L29750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29750)

```diff
-         (0, cU.k)(UU, "vec3", "1.0")
+         (0, AH.l)(HH, "vec3", "1.0")
```

#### 3966. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29755` → after: `L30286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30286) · [Before (L29755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29755)

```diff
-   38581: (UU, XU, zU) => {
+   38695: (HH, BH, LH) => {
```

#### 3967. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29757-L29759` → after: `L30288-L30290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30288-L30290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30288-L30290) · [Before (L29757-L29759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29757-L29759)

```diff
-       b: () => oU,
-       e: () => EU,
-       f: () => DU
+       d: () => zH,
+       h: () => EH,
+       j: () => CH
```

#### 3968. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29761-L29765` → after: `L30292-L30296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30292-L30296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30292-L30296) · [Before (L29761-L29765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29761-L29765)

```diff
-     var cU = zU(38037),
-       yU = zU(37940),
-       QU = zU(37946),
-       AU = zU(37977),
-       FU = zU(37961);
+     var AH = LH(38183),
+       rH = LH(38084),
+       SH = LH(38086),
+       hH = LH(38118),
+       tH = LH(38098);
```

#### 3969. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29772` → after: `L30303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30303) · [Before (L29772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29772)

```diff
-           ...(0, yU.d)("TERRAIN_FADE"),
+           ...(0, rH.e)("TERRAIN_FADE"),
```

#### 3970. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29780` → after: `L30311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30311) · [Before (L29780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29780)

```diff
-           const zU = (0, QU.X)(XU);
+           const LH = (0, SH.bb)(BH);
```

#### 3971. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29782-L29783` → after: `L30313-L30314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30313-L30314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30313-L30314) · [Before (L29782-L29783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29782-L29783)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n                ${(0,cU.u)(XU)}\n            `,
-             CUSTOM_FRAGMENT_MAIN_BEGIN: `\n                #ifdef ${oU}\n                if (${zU} < 255.0 / 256.0 && ${zU} < bayerDither(${(0,QU.P)(XU)}.xy)) {\n                    discard;\n                }\n                #endif\n            `,
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n                ${(0,AH.s)(BH)}\n            `,
+             CUSTOM_FRAGMENT_MAIN_BEGIN: `\n                #ifdef ${zH}\n                if (${LH} < 255.0 / 256.0 && ${LH} < bayerDither(${(0,SH.R)(BH)}.xy)) {\n                    discard;\n                }\n                #endif\n            `,
```

#### 3972. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29791-L29794` → after: `L30322-L30325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30322-L30325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30322-L30325) · [Before (L29791-L29794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29791-L29794)

```diff
-         const XU = (0, AU.M)(UU, 1, !1),
-           zU = (0, AU.Q)(UU, 1, !1);
-         (0, AU.cb)(UU, {
-           transparencyMode: XU ? AU.n.alphaBlend : zU ? AU.n.alphaTest : AU.n.opaque
+         const BH = (0, hH.N)(HH, 1, !1),
+           LH = (0, hH.O)(HH, 1, !1);
+         (0, hH.db)(HH, {
+           transparencyMode: BH ? hH.o.alphaBlend : LH ? hH.o.alphaTest : hH.o.opaque
```

#### 3973. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29796` → after: `L30327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30327) · [Before (L29796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29796)

```diff
-       }(0, AU.r)(UU, DU, {
+       }(0, hH.p)(HH, CH, {
```

#### 3974. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29802` → after: `L30333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30333) · [Before (L29802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29802)

```diff
-   38589: (UU, XU, zU) => {
+   38697: (HH, BH, LH) => {
```

#### 3975. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29805` → after: `L30336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30336) · [Before (L29805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29805)

```diff
-       f: () => NU,
+       d: () => GH,
```

#### 3976. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29807` → after: `L30338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30338) · [Before (L29807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29807)

```diff
-       l: () => tU,
+       k: () => WH,
```

#### 3977. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29810-L29817` → after: `L30341-L30348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30341-L30348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30341-L30348) · [Before (L29810-L29817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29810-L29817)

```diff
-     var cU = zU(38037),
-       yU = zU(38057),
-       QU = zU(38065),
-       AU = zU(37940),
-       FU = zU(38077),
-       oU = zU(37946),
-       DU = zU(37977),
-       EU = zU(37961);
+     var AH = LH(38183),
+       rH = LH(38194),
+       SH = LH(38202),
+       hH = LH(38084),
+       tH = LH(38213),
+       zH = LH(38086),
+       CH = LH(38118),
+       EH = LH(38098);
```

#### 3978. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29833` → after: `L30364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30364) · [Before (L29833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29833)

```diff
-         ...(0, AU.d)("TERRAIN_LIGHT"),
+         ...(0, hH.e)("TERRAIN_LIGHT"),
```

#### 3979. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29843` → after: `L30374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30374) · [Before (L29843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29843)

```diff
-         (0, yU.b)(UU, this.WY.ia), UU.BLOXD_LIGHT_WORD = IU.has(zU);
+         (0, rH.e)(HH, this.mX.KQ), HH.BLOXD_LIGHT_WORD = YH.has(LH);
```

#### 3980. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29845` → after: `L30376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30376) · [Before (L29845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29845)

```diff
-         QU || this.warnedMissingNormals || (this.warnedMissingNormals = !0, console.error(`Material "${this.material.name}" has the terrain directional light but a mesh with no normals; it will render without a directional term. Give the mesh normals.`)), UU.BLOXD_TERRAIN_DIRECTI … [truncated]
+         SH || this.warnedMissingNormals || (this.warnedMissingNormals = !0, console.error(`Material "${this.material.name}" has the terrain directional light but a mesh with no normals; it will render without a directional term. Give the mesh normals.`)), HH.BLOXD_TERRAIN_DIRECTI … [truncated]
```

#### 3981. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29848` → after: `L30379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30379) · [Before (L29848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29848)

```diff
-         this.WY.ia && UU.push("aPackedLightLevels")
+         this.mX.KQ && HH.push("aPackedLightLevels")
```

#### 3982. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29851` → after: `L30382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30382) · [Before (L29851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29851)

```diff
-         const XU = (0, FU.d)(QU.f, "both", UU);
+         const BH = (0, tH.d)(SH.i, "both", HH);
```

#### 3983. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29853-L29854` → after: `L30384-L30385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30384-L30385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30384-L30385) · [Before (L29853-L29854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29853-L29854)

```diff
-         const zU = (0, FU.d)((0, cU.G)(this.dirLightCount), "vertex", UU);
-         return (0, oU.V)(UU) ? {
+         const LH = (0, tH.d)((0, AH.H)(this.dirLightCount), "vertex", HH);
+         return (0, zH.$)(HH) ? {
```

#### 3984. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29858` → after: `L30389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30389) · [Before (L29858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29858)

```diff
-           vertex: `${XU.vertex}\n${zU.vertex}`,
+           vertex: `${BH.vertex}\n${LH.vertex}`,
```

#### 3985. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29867` → after: `L30398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30398) · [Before (L29867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29867)

```diff
-         return (0, QU.u)(this.WY)
+         return (0, SH.p)(this.mX)
```

#### 3986. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29871-L29872` → after: `L30402-L30403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30402-L30403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30402-L30403) · [Before (L29871-L29872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29871-L29872)

```diff
-           CUSTOM_VERTEX_DEFINITIONS: `\n                    ${(0,cU.fb)(XU)}\n                    ${(0,cU.J)(XU)}\n                `,
-           CUSTOM_VERTEX_MAIN_END: `\n                    ${(0,cU.ib)(XU)}\n                    ${(0,cU.M)(XU,this.dirLightCount)}\n                `
+           CUSTOM_VERTEX_DEFINITIONS: `\n                    ${(0,AH.gb)(BH)}\n                    ${(0,AH.J)(BH)}\n                `,
+           CUSTOM_VERTEX_MAIN_END: `\n                    ${(0,AH.jb)(BH)}\n                    ${(0,AH.L)(BH,this.dirLightCount)}\n                `
```

#### 3987. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29874-L29876` → after: `L30405-L30407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30405-L30407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30405-L30407) · [Before (L29874-L29876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29874-L29876)

```diff
-           CUSTOM_FRAGMENT_DEFINITIONS: `\n                    ${(0,cU.Z)(XU)}\n                    ${(0,cU.J)(XU)}\n                `,
-           CUSTOM_FRAGMENT_BEFORE_FOG: (0, cU.V)(XU),
-           [(0, cU.B)(XU)]: `\n                    ${(0,cU.E)(XU)}\n                    ${(0,cU.x)(XU)}\n                `
+           CUSTOM_FRAGMENT_DEFINITIONS: `\n                    ${(0,AH.$)(BH)}\n                    ${(0,AH.J)(BH)}\n                `,
+           CUSTOM_FRAGMENT_BEFORE_FOG: (0, AH._)(BH),
+           [(0, AH.z)(BH)]: `\n                    ${(0,AH.D)(BH)}\n                    ${(0,AH.v)(BH)}\n                `
```

#### 3988. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29882` → after: `L30413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30413) · [Before (L29882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29882)

```diff
-       const zU = (0, QU.C)(UU.model.view);
+       const LH = (0, SH.w)(HH.model.view);
```

#### 3989. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29884-L29886` → after: `L30415-L30417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30415-L30417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30415-L30417) · [Before (L29884-L29886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29884-L29886)

```diff
-         WY: UU,
-         uniformWriter: new QU.j(UU),
-         dirLightWriter: zU > 0 ? new QU.b(UU.model.view, zU) : null,
+         mX: HH,
+         uniformWriter: new SH.k(HH),
+         dirLightWriter: LH > 0 ? new SH.e(HH.model.view, LH) : null,
```

#### 3990. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29895` → after: `L30426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30426) · [Before (L29895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29895)

```diff
-       (0, DU.v)(zU, aU.name) || (0, DU.r)(zU, aU, tU(XU, UU)), UU.checkReadyOnlyOnce = !0, (0, DU.X)(UU, !0)
+       (0, CH.s)(LH, QH.name) || (0, CH.p)(LH, QH, WH(BH, HH)), HH.checkReadyOnlyOnce = !0, (0, CH.Y)(HH, !0)
```

#### 3991. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29898` → after: `L30429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30429) · [Before (L29898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29898)

```diff
-   38074: (UU, XU, zU) => {
+   38206: (HH, BH, LH) => {
```

#### 3992. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29900` → after: `L30431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30431) · [Before (L29900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29900)

```diff
-       d: () => QU,
+       e: () => SH,
```

#### 3993. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29903` → after: `L30434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30434) · [Before (L29903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29903)

```diff
-       l: () => AU
+       m: () => hH
```

#### 3994. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29923` → after: `L30454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30454) · [Before (L29923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29923)

```diff
-   38642: (UU, XU, zU) => {
+   38777: (HH, BH, LH) => {
```

#### 3995. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29925-L29926` → after: `L30456-L30457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30456-L30457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30456-L30457) · [Before (L29925-L29926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29925-L29926)

```diff
-       c: () => YU,
-       f: () => IU,
+       d: () => XH,
+       g: () => YH,
```

#### 3996. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29929` → after: `L30460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30460) · [Before (L29929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29929)

```diff
-     var cU = zU(38106);
+     var AH = LH(38241);
```

#### 3997. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29934` → after: `L30465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30465) · [Before (L29934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29934)

```diff
-       const oU = "position" === XU ? cU.E : cU.I;
+       const zH = "position" === BH ? AH.G : AH.J;
```

#### 3998. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L29938` → after: `L30469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30469) · [Before (L29938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L29938)

```diff
-           AU = FU && "position" !== XU && 0 !== yU && 1 !== yU ? 1 / yU : 1;
+           hH = tH && "position" !== BH && 0 !== rH && 1 !== rH ? 1 / rH : 1;
```

#### 3999. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30014` → after: `L30545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30545) · [Before (L30014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30014)

```diff
-             return null !== (XU = oU(zU)[FU]) && void 0 !== XU ? XU : []
+             return null !== (BH = zH(LH)[tH]) && void 0 !== BH ? BH : []
```

#### 4000. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30050` → after: `L30581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30581) · [Before (L30050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30050)

```diff
-   38254: (UU, XU, zU) => {
+   38370: (HH, BH, LH) => {
```

#### 4001. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30129` → after: `L30660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30660) · [Before (L30129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30129)

```diff
-         const [XU, zU, cU, AU] = null !== (NU = null === QU || void 0 === QU ? void 0 : QU[UU / 4]) && void 0 !== NU ? NU : [0, 0, 1, 1];
+         const [BH, LH, AH, hH] = null !== (GH = null === SH || void 0 === SH ? void 0 : SH[HH / 4]) && void 0 !== GH ? GH : [0, 0, 1, 1];
```

#### 4002. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30149-L30152` → after: `L30680-L30683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30680-L30683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30680-L30683) · [Before (L30149-L30152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30149-L30152)

```diff
-       b: () => QU,
-       e: () => cU,
-       g: () => yU,
-       k: () => AU
+       d: () => SH,
+       f: () => AH,
+       j: () => rH,
+       l: () => hH
```

#### 4003. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30155` → after: `L30686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30686) · [Before (L30155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30155)

```diff
-   38102: (UU, XU, zU) => {
+   38234: (HH, BH, LH) => {
```

#### 4004. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30159-L30161` → after: `L30690-L30691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30690-L30691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30690-L30691) · [Before (L30159-L30161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30159-L30161)

```diff
-       j: () => EU,
-       l: () => DU,
-       p: () => oU,
+       i: () => EH,
+       m: () => CH,
```

#### 4005. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30163` → after: `L30693-L30694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30693-L30694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30693-L30694) · [Before (L30163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30163)

```diff
-       r: () => AU
+       t: () => tH,
+       w: () => hH
```

#### 4006. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30229` → after: `L30760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30760) · [Before (L30229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30229)

```diff
-       return (ArrayBuffer.isView(zU) ? (zU.byteOffset + cU) % 4 === 0 && yU % 4 === 0 : 12 === yU && cU % 4 === 0) ? XU : null
+       return (ArrayBuffer.isView(LH) ? (LH.byteOffset + AH) % 4 === 0 && rH % 4 === 0 : 12 === rH && AH % 4 === 0) ? BH : null
```

#### 4007. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30285` → after: `L30816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30816) · [Before (L30285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30285)

```diff
-   38121: (UU, XU, zU) => {
+   38251: (HH, BH, LH) => {
```

#### 4008. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30292` → after: `L30823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30823) · [Before (L30292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30292)

```diff
-       q: () => tU,
+       r: () => uH,
```

#### 4009. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30294-L30295` → after: `L30825-L30826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30825-L30826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30825-L30826) · [Before (L30294-L30295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30294-L30295)

```diff
-       w: () => aU,
-       y: () => AU
+       y: () => GH,
+       z: () => QH
```

#### 4010. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30297` → after: `L30828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30828) · [Before (L30297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30297)

```diff
-     var cU = zU(38004);
+     var AH = LH(38135);
```

#### 4011. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30381` → after: `L30912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30912) · [Before (L30381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30381)

```diff
-       UU.live && (UU.live = !1, yU--), UU.released = !0, (0, cU.L)(UU.gpu)
+       HH.live && (HH.live = !1, rH--), HH.released = !0, (0, AH.M)(HH.gpu)
```

#### 4012. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30388` → after: `L30919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30919) · [Before (L30388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30388)

```diff
-   37986: (UU, XU, zU) => {
+   38126: (HH, BH, LH) => {
```

#### 4013. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30414` → after: `L30945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30945) · [Before (L30414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30414)

```diff
-   37995: (UU, XU, zU) => {
+   38131: (HH, BH, LH) => {
```

#### 4014. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30416-L30417` → after: `L30947-L30948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30947-L30948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30947-L30948) · [Before (L30416-L30417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30416-L30417)

```diff
-       e: () => QU,
-       i: () => AU
+       d: () => SH,
+       f: () => hH
```

#### 4015. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30428` → after: `L30959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30959) · [Before (L30428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30428)

```diff
-       return null !== (XU = UU && yU.get(UU)) && void 0 !== XU ? XU : cU
+       return null !== (BH = HH && rH.get(HH)) && void 0 !== BH ? BH : AH
```

#### 4016. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30431` → after: `L30962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30962) · [Before (L30431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30431)

```diff
-   37977: (UU, XU, zU) => {
+   38118: (HH, BH, LH) => {
```

#### 4017. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30438-L30441` → after: `L30967-L30971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30967-L30971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30967-L30971) · [Before (L30438-L30441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30438-L30441)

```diff
-       I: () => GU,
-       M: () => iU,
-       Q: () => HU,
-       S: () => OU,
+       J: () => WH,
+       L: () => vH,
+       N: () => gH,
+       O: () => NH,
+       R: () => lH,
```

#### 4018. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30444` → after: `L30974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30974) · [Before (L30444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30444)

```diff
-       X: () => kU,
+       Y: () => xH,
```

#### 4019. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30446-L30449` → after: `L30976-L30980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30976-L30980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30976-L30980) · [Before (L30446-L30449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30446-L30449)

```diff
-       bb: () => fU,
-       cb: () => LU,
-       d: () => FU,
-       f: () => RU,
+       ab: () => qH,
+       b: () => tH,
+       db: () => kH,
+       e: () => UH,
+       g: () => zH,
```

#### 4020. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30451-L30453` → after: `L30982-L30984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30982-L30984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30982-L30984) · [Before (L30451-L30453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30451-L30453)

```diff
-       k: () => ZU,
-       m: () => EU,
-       n: () => AU,
+       l: () => EH,
+       o: () => hH,
+       p: () => IH,
```

#### 4021. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30455` → after: `L30986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30986) · [Before (L30455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30455)

```diff
-       u: () => dU,
+       s: () => mH,
```

#### 4022. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30457` → after: `L30988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30988) · [Before (L30457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30457)

```diff
-       x: () => qU
+       z: () => GH
```

#### 4023. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30459-L30461` → after: `L30990-L30992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R30990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L30990-L30992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L30990-L30992) · [Before (L30459-L30461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30459-L30461)

```diff
-     var cU = zU(37986),
-       yU = zU(37995),
-       QU = zU(38004);
+     var AH = LH(38126),
+       rH = LH(38131),
+       SH = LH(38135);
```

#### 4024. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30521` → after: `L31052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31052) · [Before (L30521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30521)

```diff
-       cU !== zU && (zU && (0, QU.P)(zU), UU[XU] = zU, cU && (0, QU.O)(cU), UU.version++)
+       AH !== LH && (LH && (0, SH.R)(LH), HH[BH] = LH, AH && (0, SH.O)(AH), HH.version++)
```

#### 4025. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30529` → after: `L31060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31060) · [Before (L30529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30529)

```diff
-       return void 0 === XU ? (0, yU.i)() : XU
+       return void 0 === BH ? (0, rH.f)() : BH
```

#### 4026. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30535` → after: `L31066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31066) · [Before (L30535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30535)

```diff
-         AU = (0, yU.i)(XU);
+         hH = (0, rH.f)(BH);
```

#### 4027. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30537` → after: `L31068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31068) · [Before (L30537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30537)

```diff
-       const FU = null !== (zU = null === AU || void 0 === AU ? void 0 : AU.create(QU, XU)) && void 0 !== zU ? zU : cU.c.defines();
+       const tH = null !== (LH = null === hH || void 0 === hH ? void 0 : hH.create(SH, BH)) && void 0 !== LH ? LH : AH.c.defines();
```

#### 4028. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30551` → after: `L31082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31082) · [Before (L30551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30551)

```diff
-         for (const UU of [XU.diffuseTexture, XU.opacityTexture, XU.emissiveTexture, XU.reflectionTexture]) UU && ((0, QU.P)(UU), yU.push(UU));
+         for (const HH of [BH.diffuseTexture, BH.opacityTexture, BH.emissiveTexture, BH.reflectionTexture]) HH && ((0, SH.R)(HH), rH.push(HH));
```

#### 4029. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30557` → after: `L31088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31088) · [Before (L30557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30557)

```diff
-           if ("diffuseTexture" === yU || "opacityTexture" === yU || "emissiveTexture" === yU || "reflectionTexture" === yU) BU(UU, yU, null !== (AU = QU) && void 0 !== AU ? AU : null);
+           if ("diffuseTexture" === rH || "opacityTexture" === rH || "emissiveTexture" === rH || "reflectionTexture" === rH) PH(HH, rH, null !== (hH = SH) && void 0 !== hH ? hH : null);
```

#### 4030. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30605` → after: `L31136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31136) · [Before (L30605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30605)

```diff
-       --UU.refs > 0 || (DU--, (0, QU.L)(UU.gpu), BU(UU, "diffuseTexture", null), BU(UU, "opacityTexture", null), BU(UU, "emissiveTexture", null), BU(UU, "reflectionTexture", null), UU.mirror && (YU.delete(UU.mirror), UU.mirror = null))
+       --HH.refs > 0 || (CH--, (0, SH.M)(HH.gpu), PH(HH, "diffuseTexture", null), PH(HH, "opacityTexture", null), PH(HH, "emissiveTexture", null), PH(HH, "reflectionTexture", null), HH.mirror && (XH.delete(HH.mirror), HH.mirror = null))
```

#### 4031. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30640` → after: `L31171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31171) · [Before (L30640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30640)

```diff
-   38004: (UU, XU, zU) => {
+   38135: (HH, BH, LH) => {
```

#### 4032. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30642-L30643` → after: `L31173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31173) · [Before (L30642-L30643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30642-L30643)

```diff
-       A: () => FU,
-       B: () => gU,
+       C: () => PH,
```

#### 4033. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30645-L30647` → after: `L31175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31175) · [Before (L30645-L30647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30645-L30647)

```diff
-       F: () => kU,
-       I: () => LU,
-       K: () => wU,
+       H: () => kH,
```

#### 4034. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30650-L30652` → after: `L31179-L31181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31179-L31181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31179-L31181) · [Before (L30650-L30652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30650-L30652)

```diff
-       P: () => PU,
-       S: () => ZU,
-       V: () => eU,
+       R: () => VH,
+       U: () => TH,
+       W: () => mH,
```

#### 4035. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30654` → after: `L31183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31183) · [Before (L30654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30654)

```diff
-       e: () => yU,
+       d: () => rH,
```

#### 4036. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30656-L30659` → after: `L31185-L31189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31185-L31189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31185-L31189) · [Before (L30656-L30659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30656-L30659)

```diff
-       j: () => IU,
-       l: () => RU,
-       m: () => aU,
-       q: () => tU,
+       g: () => YH,
+       h: () => UH,
+       k: () => QH,
+       o: () => WH,
+       r: () => uH,
```

#### 4037. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30661` → after: `L31191-L31192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31191-L31192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31191-L31192) · [Before (L30661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30661)

```diff
-       w: () => oU
+       w: () => tH,
+       y: () => MH
```

#### 4038. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30663` → after: `L31194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31194) · [Before (L30663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30663)

```diff
-     var cU = zU(37995);
+     var AH = LH(38131);
```

#### 4039. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30715-L30716` → after: `L31246-L31247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31246-L31247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31246-L31247) · [Before (L30715-L30716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30715-L30716)

```diff
-         wrapU: null !== (zU = pU.wrapU) && void 0 !== zU ? zU : DU,
-         wrapV: null !== (yU = pU.wrapV) && void 0 !== yU ? yU : DU,
+         wrapU: null !== (LH = uH.wrapU) && void 0 !== LH ? LH : CH,
+         wrapV: null !== (rH = uH.wrapV) && void 0 !== rH ? rH : CH,
```

#### 4040. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30720` → after: `L31251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31251) · [Before (L30720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30720)

```diff
-       return tU.hasAlpha = null !== (QU = pU.hasAlpha) && void 0 !== QU && QU, null === (AU = (0, cU.i)(UU)) || void 0 === AU || AU.texture(tU, UU, XU), tU
+       return WH.hasAlpha = null !== (SH = uH.hasAlpha) && void 0 !== SH && SH, null === (hH = (0, AH.f)(HH)) || void 0 === hH || hH.texture(WH, HH, BH), WH
```

#### 4041. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30743` → after: `L31274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31274) · [Before (L30743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30743)

```diff
-       return YU.matrix[10] = 1, null === (zU = (0, cU.i)(UU)) || void 0 === zU || zU.cube(YU, UU, XU), YU
+       return XH.matrix[10] = 1, null === (LH = (0, AH.f)(HH)) || void 0 === LH || LH.cube(XH, HH, BH), XH
```

#### 4042. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30776` → after: `L31307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31307) · [Before (L30776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30776)

```diff
-       return null !== (XU = null === (zU = GU) || void 0 === zU ? void 0 : zU.loaded(UU)) && void 0 !== XU ? XU : null
+       return null !== (BH = null === (LH = vH) || void 0 === LH ? void 0 : LH.loaded(HH)) && void 0 !== BH ? BH : null
```

#### 4043. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30787` → after: `L31318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31318) · [Before (L30787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30787)

```diff
-       UU.live || (UU.live = !0, NU++, null === (XU = GU) || void 0 === XU || XU.uD(UU));
+       HH.live || (HH.live = !0, GH++, null === (BH = vH) || void 0 === BH || BH.LX(HH));
```

#### 4044. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L30813` → after: `L31344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31344) · [Before (L30813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L30813)

```diff
-   38106: (UU, XU, zU) => {
+   38241: (HH, BH, LH) => {
```

#### 4045. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31015-L31017` → after: `L31546-L31549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31546-L31549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31546-L31549) · [Before (L31015-L31017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31015-L31017)

```diff
-       C: () => pU,
-       E: () => DU,
-       I: () => EU,
+       B: () => QH,
+       D: () => uH,
+       G: () => CH,
+       J: () => EH,
```

#### 4046. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31019` → after: `L31551-L31552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31551-L31552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31551-L31552) · [Before (L31019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31019)

```diff
-       i: () => yU,
+       h: () => rH,
+       j: () => zH,
```

#### 4047. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31021-L31022` → after: `L31554-L31555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31554-L31555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31554-L31555) · [Before (L31021-L31022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31021-L31022)

```diff
-       n: () => YU,
-       q: () => FU,
+       l: () => tH,
+       p: () => GH,
```

#### 4048. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31024-L31026` → after: `L31557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31557) · [Before (L31024-L31026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31024-L31026)

```diff
-       u: () => cU,
-       x: () => AU,
-       y: () => aU
+       x: () => hH
```

#### 4049. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31029` → after: `L31560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31560) · [Before (L31029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31029)

```diff
-   38099: (UU, XU, zU) => {
+   38231: (HH, BH, LH) => {
```

#### 4050. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31031-L31034` → after: `L31562-L31565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31562-L31565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31562-L31565) · [Before (L31031-L31034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31031-L31034)

```diff
-       c: () => AU,
-       d: () => FU,
-       h: () => oU,
-       l: () => DU
+       e: () => hH,
+       i: () => tH,
+       k: () => zH,
+       o: () => CH
```

#### 4051. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31036-L31038` → after: `L31567-L31569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31567-L31569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31567-L31569) · [Before (L31036-L31038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31036-L31038)

```diff
-     var cU = zU(38102),
-       yU = zU(38106),
-       QU = zU(38115);
+     var AH = LH(38234),
+       rH = LH(38241),
+       SH = LH(38247);
```

#### 4052. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31048` → after: `L31579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31579) · [Before (L31048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31048)

```diff
-         this.owner = UU, this.geometry = XU, this.Qt = zU, this.materials = cU, this.gpu = []
+         this.owner = HH, this.geometry = BH, this.rW = LH, this.materials = AH, this.gpu = []
```

#### 4053. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31053` → after: `L31584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31584) · [Before (L31053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31053)

```diff
-         this.model = void 0, this.position = void 0, this.count = 0, this.Qt = new Int32Array(2), this.boxes = new Float64Array(6)
+         this.model = void 0, this.position = void 0, this.count = 0, this.rW = new Int32Array(2), this.boxes = new Float64Array(6)
```

#### 4054. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31056` → after: `L31587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31587) · [Before (L31056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31056)

```diff
-         this.count = UU, this.Qt.length < 2 * UU && (this.Qt = new Int32Array(2 * UU), this.boxes = new Float64Array(6 * UU))
+         this.count = HH, this.rW.length < 2 * HH && (this.rW = new Int32Array(2 * HH), this.boxes = new Float64Array(6 * HH))
```

#### 4055. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31066` → after: `L31597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31597) · [Before (L31066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31066)

```diff
-         const AU = this.nodes.xY;
+         const hH = this.nodes.aX;
```

#### 4056. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31088` → after: `L31619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31619) · [Before (L31088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31088)

```diff
-         this.looseIndex.length < this.nodes.xY && (this.loose = (0, QU.j)(this.loose, this.nodes.xY), this.looseIndex = (0, QU.j)(this.looseIndex, this.nodes.xY));
+         this.looseIndex.length < this.nodes.aX && (this.loose = (0, SH.j)(this.loose, this.nodes.aX), this.looseIndex = (0, SH.j)(this.looseIndex, this.nodes.aX));
```

#### 4057. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31104` → after: `L31635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31635) · [Before (L31104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31104)

```diff
-           RY: zU,
+           bX: LH,
```

#### 4058. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31106` → after: `L31637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31637) · [Before (L31106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31106)

```diff
-           qY: yU
+           cX: rH
```

#### 4059. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31130` → after: `L31661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31661) · [Before (L31130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31130)

```diff
-           RY: FU,
+           bX: tH,
```

#### 4060. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31164` → after: `L31695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31695) · [Before (L31164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31164)

```diff
-         if (this.nodes.worldNow(UU, QU, oU), (0, yU.k)(oU, 0, DU), (0, yU.E)(XU, 0, DU, EU, 0), (0, yU.I)(XU, 3, DU, EU, 3), EU[6] = XU[6], (0, cU.r)(EU), !(0, cU.q)(EU, this.sphere, 4 * UU) || !(0, cU.p)(EU, this.box, 6 * UU)) return -1;
+         if (this.nodes.worldNow(HH, SH, zH), (0, rH.j)(zH, 0, CH), (0, rH.G)(BH, 0, CH, EH, 0), (0, rH.J)(BH, 3, CH, EH, 3), EH[6] = BH[6], (0, AH.w)(EH), !(0, AH.t)(EH, this.sphere, 4 * HH) || !(0, AH.q)(EH, this.box, 6 * HH)) return -1;
```

#### 4061. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31167-L31168` → after: `L31698-L31699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31698-L31699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31698-L31699) · [Before (L31167-L31168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31167-L31168)

```diff
-           if (AU.count > 1 && !(0, cU.p)(EU, AU.boxes, 6 * yU)) continue;
-           const UU = (0, cU.j)(AU.model, AU.position, EU, zU, AU.Qt[2 * yU], AU.Qt[2 * yU + 1]); - 1 !== UU && (-1 === NU || UU < NU) && (NU = UU)
+           if (hH.count > 1 && !(0, AH.q)(EH, hH.boxes, 6 * rH)) continue;
+           const HH = (0, AH.i)(hH.model, hH.position, EH, LH, hH.rW[2 * rH], hH.rW[2 * rH + 1]); - 1 !== HH && (-1 === GH || HH < GH) && (GH = HH)
```

#### 4062. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31171` → after: `L31702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31702) · [Before (L31171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31171)

```diff
-         (0, yU.E)(EU, 0, oU, YU, 0), YU[3] = EU[3] * NU, YU[4] = EU[4] * NU, YU[5] = EU[5] * NU, (0, yU.I)(YU, 3, oU, FU, 0), FU[0] += YU[0], FU[1] += YU[1], FU[2] += YU[2];
+         (0, rH.G)(EH, 0, zH, XH, 0), XH[3] = EH[3] * GH, XH[4] = EH[4] * GH, XH[5] = EH[5] * GH, (0, rH.J)(XH, 3, zH, tH, 0), tH[0] += XH[0], tH[1] += XH[1], tH[2] += XH[2];
```

#### 4063. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31181` → after: `L31712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31712) · [Before (L31181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31181)

```diff
-         const cU = zU ? this.flags[UU] | XU : this.flags[UU] & ~XU;
+         const AH = LH ? this.flags[HH] | BH : this.flags[HH] & ~BH;
```

#### 4064. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31192` → after: `L31723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31723) · [Before (L31192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31192)

```diff
-   38115: (UU, XU, zU) => {
+   38247: (HH, BH, LH) => {
```

#### 4065. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31196` → after: `L31727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31727) · [Before (L31196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31196)

```diff
-       g: () => FU,
+       i: () => tH,
```

#### 4066. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31199` → after: `L31730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31730) · [Before (L31199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31199)

```diff
-     var cU = zU(38106);
+     var AH = LH(38241);
```

#### 4067. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31217` → after: `L31748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31748) · [Before (L31217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31217)

```diff
-         this.xY = 0, this.liveCount = 0, this.parent = new Int32Array(0), this.position = new Float64Array(0), this.rotation = new Float64Array(0), this.RY = new Float64Array(0), this.qY = new Float32Array(0), this.flags = new Uint8Array(0), this.billboard = new Uint8Array(0), th … [truncated]
+         this.aX = 0, this.liveCount = 0, this.parent = new Int32Array(0), this.position = new Float64Array(0), this.rotation = new Float64Array(0), this.bX = new Float64Array(0), this.cX = new Float32Array(0), this.flags = new Uint8Array(0), this.billboard = new Uint8Array(0), th … [truncated]
```

#### 4068. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31221` → after: `L31752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31752) · [Before (L31221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31221)

```diff
-         return this.freeCount > 0 ? UU = this.free[--this.freeCount] : (this.rows === this.xY && this.grow(Math.max(16, 2 * this.xY)), UU = this.rows++), this.parent[UU] = XU, this.position.fill(0, 3 * UU, 3 * UU + 3), this.rotation.set(AU, 4 * UU), this.RY.fill(1, 3 * UU, 3 * UU … [truncated]
+         return this.freeCount > 0 ? HH = this.free[--this.freeCount] : (this.rows === this.aX && this.grow(Math.max(16, 2 * this.aX)), HH = this.rows++), this.parent[HH] = BH, this.position.fill(0, 3 * HH, 3 * HH + 3), this.rotation.set(hH, 4 * HH), this.bX.fill(1, 3 * HH, 3 * HH … [truncated]
```

#### 4069. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31224` → after: `L31755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31755) · [Before (L31224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31224)

```diff
-         0 !== (this.flags[UU] & QU.live) && (this.flags[UU] = 0, this.sources[UU] = null, this.enabled[UU] = 0, this.kp[this.disposedCount + this.pendingCount++] = UU, this.orderStale = !0, this.liveCount--)
+         0 !== (this.flags[HH] & SH.live) && (this.flags[HH] = 0, this.sources[HH] = null, this.enabled[HH] = 0, this.Mu[this.disposedCount + this.pendingCount++] = HH, this.orderStale = !0, this.liveCount--)
```

#### 4070. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31227` → after: `L31758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31758) · [Before (L31227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31227)

```diff
-         this.parent[UU] = XU, this.vp[UU] = 1, this.orderStale = !0
+         this.parent[HH] = BH, this.gu[HH] = 1, this.orderStale = !0
```

#### 4071. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31231` → after: `L31762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31762) · [Before (L31231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31231)

```diff
-         this.position[yU] = XU, this.position[yU + 1] = zU, this.position[yU + 2] = cU, this.vp[UU] = 1
+         this.position[rH] = BH, this.position[rH + 1] = LH, this.position[rH + 2] = AH, this.gu[HH] = 1
```

#### 4072. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31235` → after: `L31766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31766) · [Before (L31235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31235)

```diff
-         this.rotation[QU] = XU, this.rotation[QU + 1] = zU, this.rotation[QU + 2] = cU, this.rotation[QU + 3] = yU, this.vp[UU] = 1
+         this.rotation[SH] = BH, this.rotation[SH + 1] = LH, this.rotation[SH + 2] = AH, this.rotation[SH + 3] = rH, this.gu[HH] = 1
```

#### 4073. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31239` → after: `L31770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31770) · [Before (L31239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31239)

```diff
-         QU[0] = zU, QU[1] = XU, QU[2] = yU, (0, cU.u)(QU, 0, this.rotation, 4 * UU), this.vp[UU] = 1
+         SH[0] = LH, SH[1] = BH, SH[2] = rH, (0, AH.t)(SH, 0, this.rotation, 4 * HH), this.gu[HH] = 1
```

#### 4074. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31243` → after: `L31774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31774) · [Before (L31243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31243)

```diff
-         this.RY[yU] = XU, this.RY[yU + 1] = zU, this.RY[yU + 2] = cU, this.vp[UU] = 1
+         this.bX[rH] = BH, this.bX[rH + 1] = LH, this.bX[rH + 2] = AH, this.gu[HH] = 1
```

#### 4075. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31249` → after: `L31780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31780) · [Before (L31249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31249)

```diff
-         this.billboard[UU] = XU, this.vp[UU] = 1
+         this.billboard[HH] = BH, this.gu[HH] = 1
```

#### 4076. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31252` → after: `L31783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31783) · [Before (L31252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31252)

```diff
-         this.setFlag(UU, QU.infiniteDistance, XU), this.vp[UU] = 1
+         this.setFlag(HH, SH.infiniteDistance, BH), this.gu[HH] = 1
```

#### 4077. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31258` → after: `L31789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31789) · [Before (L31258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31258)

```diff
-         this.sources[UU] = XU, this.setFlag(UU, QU.copied, null !== XU), this.vp[UU] = 1
+         this.sources[HH] = BH, this.setFlag(HH, SH.copied, null !== BH), this.gu[HH] = 1
```

#### 4078. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31263-L31264` → after: `L31794-L31795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31794-L31795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31794-L31795) · [Before (L31263-L31264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31263-L31264)

```diff
-         for (let yU = 0; yU < this.disposedCount; yU++) this.free[this.freeCount++] = this.kp[yU];
-         this.kp.copyWithin(0, this.disposedCount, this.disposedCount + this.pendingCount), this.disposedCount = this.pendingCount, this.pendingCount = 0, this.orderStale && this.sortParentsFirst(), this.cameraBillboards(XU);
+         for (let rH = 0; rH < this.disposedCount; rH++) this.free[this.freeCount++] = this.Mu[rH];
+         this.Mu.copyWithin(0, this.disposedCount, this.disposedCount + this.pendingCount), this.disposedCount = this.pendingCount, this.pendingCount = 0, this.orderStale && this.sortParentsFirst(), this.cameraBillboards(BH);
```

#### 4079. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31270` → after: `L31801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31801) · [Before (L31270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31270)

```diff
-           vp: oU,
+           gu: zH,
```

#### 4080. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31283` → after: `L31814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31814) · [Before (L31283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31283)

```diff
-           0 === oU[UU] && !gU && (IU < 0 || EU[UU] === DU[IU]) || (oU[UU] = 0, IU >= 0 && (EU[UU] = DU[IU]), tU ? this.out.set(this.sources[UU]) : this.computeWorld(UU, IU, aU, XU, this.qY, 16 * IU), this.storeWorld(UU) && DU[UU]++)
+           0 === zH[HH] && !MH && (YH < 0 || EH[HH] === CH[YH]) || (zH[HH] = 0, YH >= 0 && (EH[HH] = CH[YH]), WH ? this.out.set(this.sources[HH]) : this.computeWorld(HH, YH, QH, BH, this.cX, 16 * YH), this.storeWorld(HH) && CH[HH]++)
```

#### 4081. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31287` → after: `L31818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31818) · [Before (L31287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31287)

```diff
-         this.flags[UU] = zU ? this.flags[UU] | XU : this.flags[UU] & ~XU
+         this.flags[HH] = LH ? this.flags[HH] | BH : this.flags[HH] & ~BH
```

#### 4082. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31290` → after: `L31821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31821) · [Before (L31290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31290)

```diff
-         this.xY = UU, this.parent = oU(this.parent, UU), this.position = oU(this.position, 3 * UU), this.rotation = oU(this.rotation, 4 * UU), this.RY = oU(this.RY, 3 * UU), this.qY = oU(this.qY, 16 * UU), this.worldBits = new Uint32Array(this.qY.buffer), this.flags = oU(this.fla … [truncated]
+         this.aX = HH, this.parent = zH(this.parent, HH), this.position = zH(this.position, 3 * HH), this.rotation = zH(this.rotation, 4 * HH), this.bX = zH(this.bX, 3 * HH), this.cX = zH(this.cX, 16 * HH), this.worldBits = new Uint32Array(this.cX.buffer), this.flags = zH(this.fla … [truncated]
```

#### 4083. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31296` → after: `L31827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31827) · [Before (L31296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31296)

```diff
-           vp: zU,
+           gu: LH,
```

#### 4084. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31321` → after: `L31852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31852) · [Before (L31321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31321)

```diff
-         XU.set(UU.viewMatrix), XU[12] = 0, XU[13] = 0, XU[14] = 0, (0, cU.k)(XU, 0, zU), (0, cU.y)(zU, this.scale, this.facing, yU), QU[0] = 0, (0, cU.i)(yU, QU, 1), QU[2] = 0, (0, cU.u)(QU, 0, yU, 0), (0, cU.x)(yU, this.billboardY)
+         BH.set(HH.viewMatrix), BH[12] = 0, BH[13] = 0, BH[14] = 0, (0, AH.j)(BH, 0, LH), (0, AH.B)(LH, this.scale, this.facing, rH), SH[0] = 0, (0, AH.h)(rH, SH, 1), SH[2] = 0, (0, AH.t)(SH, 0, rH, 0), (0, AH.x)(rH, this.billboardY)
```

#### 4085. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31327` → after: `L31858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31858) · [Before (L31327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31327)

```diff
-           vp: AU,
+           gu: hH,
```

#### 4086. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31334` → after: `L31865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31865) · [Before (L31334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31334)

```diff
-           const XU = this.qY,
+           const BH = this.cX,
```

#### 4087. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31341` → after: `L31872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31872) · [Before (L31341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31341)

```diff
-             0 !== (yU[UU] & QU.copied) ? this.out.set(this.sources[UU]) : this.computeWorld(UU, AU, this.billboard[UU], XU, EU === DU ? this.qY : zU, EU === DU ? 16 * AU : 0), zU.set(this.out)
+             0 !== (rH[HH] & SH.copied) ? this.out.set(this.sources[HH]) : this.computeWorld(HH, hH, this.billboard[HH], BH, EH === CH ? this.cX : LH, EH === CH ? 16 * hH : 0), LH.set(this.out)
```

#### 4088. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31354` → after: `L31885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31885) · [Before (L31354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31354)

```diff
-         }(0, cU.e)(this.RY, YU, this.rotation, 4 * UU, NU, IU, XU < 0 ? DU : EU), XU >= 0 && (zU === yU.none ? (0, cU.q)(EU, FU, oU, DU) : ((0, cU.C)(FU, oU, this.scale, this.inverse, this.parentPart), (0, cU.q)(EU, this.parentPart, 0, DU))), zU === yU.all ? this.turn(this.billbo … [truncated]
+         }(0, AH.e)(this.bX, XH, this.rotation, 4 * HH, GH, YH, BH < 0 ? CH : EH), BH >= 0 && (LH === rH.none ? (0, AH.l)(EH, tH, zH, CH) : ((0, AH.D)(tH, zH, this.scale, this.inverse, this.parentPart), (0, AH.l)(EH, this.parentPart, 0, CH))), LH === rH.all ? this.turn(this.billbo … [truncated]
```

#### 4089. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31361` → after: `L31892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31892) · [Before (L31361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31361)

```diff
-         XU[12] = 0, XU[13] = 0, XU[14] = 0, (0, cU.q)(XU, UU, 0, XU), XU[12] = zU, XU[13] = yU, XU[14] = QU
+         BH[12] = 0, BH[13] = 0, BH[14] = 0, (0, AH.l)(BH, HH, 0, BH), BH[12] = LH, BH[13] = rH, BH[14] = SH
```

#### 4090. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31365` → after: `L31896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31896) · [Before (L31365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31365)

```diff
-         (0, cU.k)(this.out, 0, XU);
+         (0, AH.j)(this.out, 0, BH);
```

#### 4091. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31379` → after: `L31910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31910) · [Before (L31379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31379)

```diff
-         YU[0] = -Math.atan2(oU, Math.sqrt(FU * FU + DU * DU)), YU[1] = -Math.atan2(DU, FU) + Math.PI / 2, (0, cU.u)(YU, 0, this.quaternion, 0), (0, cU.x)(this.quaternion, this.facing), this.turn(this.facing)
+         XH[0] = -Math.atan2(zH, Math.sqrt(tH * tH + CH * CH)), XH[1] = -Math.atan2(CH, tH) + Math.PI / 2, (0, AH.t)(XH, 0, this.quaternion, 0), (0, AH.x)(this.quaternion, this.facing), this.turn(this.facing)
```

#### 4092. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31387` → after: `L31918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31918) · [Before (L31387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31387)

```diff
-           if (XU[cU + yU] !== zU[yU]) return this.qY.set(this.out, cU), !0;
+           if (BH[AH + rH] !== LH[rH]) return this.cX.set(this.out, AH), !0;
```

#### 4093. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31397` → after: `L31928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31928) · [Before (L31397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31397)

```diff
-   38016: (UU, XU, zU) => {
+   38154: (HH, BH, LH) => {
```

#### 4094. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31400` → after: `L31931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31931) · [Before (L31400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31400)

```diff
-       e: () => QU
+       d: () => SH
```

#### 4095. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31413` → after: `L31944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31944) · [Before (L31413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31413)

```diff
-   38972: (UU, XU, zU) => {
+   39092: (HH, BH, LH) => {
```

#### 4096. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31415-L31416` → after: `L31946-L31947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31946-L31947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31946-L31947) · [Before (L31415-L31416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31415-L31416)

```diff
-       b: () => oU,
-       d: () => YU
+       e: () => zH,
+       i: () => XH
```

#### 4097. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31418-L31421` → after: `L31949-L31952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31949-L31952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31949-L31952) · [Before (L31418-L31421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31418-L31421)

```diff
-     var cU = zU(37775),
-       yU = zU(1258),
-       QU = zU(638),
-       AU = zU(344);
+     var AH = LH(37924),
+       rH = LH(1182),
+       SH = LH(614),
+       hH = LH(317);
```

#### 4098. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31432` → after: `L31963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31963) · [Before (L31432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31432)

```diff
-           ...Object.fromEntries(AU.Oc.map((XU => [`Invisible ${XU} Light`, {
+           ...Object.fromEntries(hH.Mc.map((BH => [`Invisible ${BH} Light`, {
```

#### 4099. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31434` → after: `L31965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31965) · [Before (L31434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31434)

```diff
-             altNames: [`${XU} Light Block`]
+             altNames: [`${BH} Light Block`]
```

#### 4100. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L31442` → after: `L31973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R31973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L31973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L31973) · [Before (L31442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L31442)

```diff
-       oU = ["Dirt", "Grass Block", "Pine Grass Block", "Jungle Grass Block", "Dry Grass Block", "Sand", "Red Sand", "Ash", "Clay", "Snow", "Ice", "Maple Log", "Ancient Maple Log", "Maple Wood Planks", "Stone", "Messy Stone", "Smooth Stone", "Diorite", "Smooth Diorite", "Andesite" … [truncated]
+       zH = ["Dirt", "Grass Block", "Pine Grass Block", "Jungle Grass Block", "Dry Grass Block", "Sand", "Red Sand", "Ash", "Clay", "Snow", "Ice", "Maple Log", "Ancient Maple Log", "Maple Wood Planks", "Stone", "Messy Stone", "Smooth Stone", "Diorite", "Smooth Diorite", "Andesite" … [truncated]
```

#### 4101. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L32749` → after: `L33280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33280) · [Before (L32749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L32749)

```diff
-       ...Object.fromEntries(yU.z.map((UU => [UU, {
+       ...Object.fromEntries(rH.v.map((HH => [HH, {
```

#### 4102. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L32790` → after: `L33321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33321) · [Before (L32790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L32790)

```diff
-       [(0, AU._b)("Sheep")]: {
+       [(0, hH.$b)("Sheep")]: {
```

#### 4103. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L32793` → after: `L33324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33324) · [Before (L32793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L32793)

```diff
-       [(0, AU._b)("Cow")]: {
+       [(0, hH.$b)("Cow")]: {
```

#### 4104. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L32796` → after: `L33327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33327) · [Before (L32796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L32796)

```diff
-       [(0, AU._b)("Pig")]: {
+       [(0, hH.$b)("Pig")]: {
```

#### 4105. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L32799` → after: `L33330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33330) · [Before (L32799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L32799)

```diff
-       [(0, AU._b)("Horse")]: {
+       [(0, hH.$b)("Horse")]: {
```

#### 4106. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L32802` → after: `L33333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33333) · [Before (L32802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L32802)

```diff
-       [(0, AU._b)("Camel")]: {
+       [(0, hH.$b)("Camel")]: {
```

#### 4107. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L32805` → after: `L33336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33336) · [Before (L32805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L32805)

```diff
-       [(0, AU._b)("Wolf")]: {
+       [(0, hH.$b)("Wolf")]: {
```

#### 4108. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L32808` → after: `L33339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33339) · [Before (L32808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L32808)

```diff
-       [(0, AU._b)("Deer")]: {
+       [(0, hH.$b)("Deer")]: {
```

#### 4109. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L32811` → after: `L33342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33342) · [Before (L32811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L32811)

```diff
-       [(0, AU._b)("Wildcat")]: {
+       [(0, hH.$b)("Wildcat")]: {
```

#### 4110. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L32848` → after: `L33379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33379) · [Before (L32848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L32848)

```diff
-       return Object.fromEntries(QU.w.map((UU => [(0, AU.cc)(UU), pU(UU, [`Mob ${UU} Spawn Egg`])])))
+       return Object.fromEntries(SH.w.map((HH => [(0, hH.dc)(HH), uH(HH, [`Mob ${HH} Spawn Egg`])])))
```

#### 4111. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L32852` → after: `L33383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33383) · [Before (L32852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L32852)

```diff
-       return Object.fromEntries(QU.w.map((UU => [(0, AU.dc)(UU), pU(UU, [`${UU} Mob Spawner Block`])])))
+       return Object.fromEntries(SH.w.map((HH => [(0, hH.fc)(HH), uH(HH, [`${HH} Mob Spawner Block`])])))
```

#### 4112. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L32856` → after: `L33387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33387) · [Before (L32856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L32856)

```diff
-       const zU = QU.i.includes(UU);
+       const LH = SH.l.includes(HH);
```

#### 4113. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L32860` → after: `L33391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33391) · [Before (L32860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L32860)

```diff
-         isDisabled: zU ? DU : void 0
+         isDisabled: LH ? CH : void 0
```

#### 4114. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L32864` → after: `L33395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33395) · [Before (L32864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L32864)

```diff
-   38739: (UU, XU, zU) => {
+   38867: (HH, BH, LH) => {
```

#### 4115. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L32868-L32869` → after: `L33398-L33400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33398-L33400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33398-L33400) · [Before (L32868-L32869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L32868-L32869)

```diff
-       g: () => gU,
-       j: () => GU
+       h: () => WH,
+       l: () => MH,
+       n: () => vH
```

#### 4116. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L32871-L32872` → after: `L33402-L33403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33402-L33403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33402-L33403) · [Before (L32871-L32872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L32871-L32872)

```diff
-     var cU = zU(633),
-       yU = zU(646);
+     var AH = LH(609),
+       rH = LH(619);
```

#### 4117. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L32958` → after: `L33489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33489) · [Before (L32958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L32958)

```diff
-         const yU = null !== (cU = null === XU || void 0 === XU ? void 0 : XU.rootName) && void 0 !== cU ? cU : UU.substring(0, zU);
+         const rH = null !== (AH = null === BH || void 0 === BH ? void 0 : BH.rootName) && void 0 !== AH ? AH : HH.substring(0, LH);
```

#### 4118. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L32960-L32961` → after: `L33491-L33492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33491-L33492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33491-L33492) · [Before (L32960-L32961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L32960-L32961)

```diff
-           const cU = XU ? XU.metaStr ? `|${XU.metaStr}` : "" : UU.substring(zU);
-           return `${AU[yU]}${cU}`
+           const AH = BH ? BH.metaStr ? `|${BH.metaStr}` : "" : HH.substring(LH);
+           return `${hH[rH]}${AH}`
```

#### 4119. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L32975-L32979` → after: `L33506-L33510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33506-L33510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33506-L33510) · [Before (L32975-L32979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L32975-L32979)

```diff
-     var YU = zU(37756),
-       NU = zU(38743),
-       IU = zU(37562),
-       pU = zU(212),
-       aU = zU(38557);
+     var XH = LH(37912),
+       GH = LH(38871),
+       YH = LH(37694),
+       uH = LH(176),
+       QH = LH(38667);
```

#### 4120. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L32986` → after: `L33517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33517) · [Before (L32986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L32986)

```diff
-       return (0, NU.e)(YU.n[UU], XU)
+       return (0, GH.d)(XH.m[HH], BH)
```

#### 4121. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L32990` → after: `L33521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33521) · [Before (L32990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L32990)

```diff
-         this.WN = void 0, this.state = void 0, this.numSlots = void 0, this.items = void 0, this._selectedSlotI = 0, this.temporaryClone = null, this.updatesHeld = !1, this.heldUpdate = null, this.WN = UU, this.state = XU, this.numSlots = zU, this.items = new Array(this.numSlots) … [truncated]
+         this.bG = void 0, this.state = void 0, this.numSlots = void 0, this.items = void 0, this._selectedSlotI = 0, this.temporaryClone = null, this.updatesHeld = !1, this.heldUpdate = null, this.bG = HH, this.state = BH, this.numSlots = LH, this.items = new Array(this.numSlots) … [truncated]
```

#### 4122. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33005` → after: `L33536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33536) · [Before (L33005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33005)

```diff
-               name: null !== (cU = YU.n[UU]) && void 0 !== cU && cU.keepMetaInChest ? UU : this.WN.bloxd.getMetaInfo(UU).rootName,
+               name: null !== (AH = XH.m[HH]) && void 0 !== AH && AH.keepMetaInChest ? HH : this.bG.bloxd.getMetaInfo(HH).rootName,
```

#### 4123. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33010` → after: `L33541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33541) · [Before (L33010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33010)

```diff
-         return (0, yU.H)(zU)
+         return (0, rH.E)(LH)
```

#### 4124. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33016` → after: `L33547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33547) · [Before (L33016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33016)

```diff
-           yU = zU ? oU : DU,
+           rH = LH ? zH : CH,
```

#### 4125. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33025-L33026` → after: `L33556-L33557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33556-L33557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33556-L33557) · [Before (L33025-L33026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33025-L33026)

```diff
-           UU.name = yU(UU.name, null === (AU = this.WN.bloxd.EY.metadatas[UU.name]) || void 0 === AU ? void 0 : AU.meta);
-           if (EU(UU, void 0 !== this.WN.bloxd.EY.metadatas[UU.name] && this.WN.bloxd.getItemTypeObj(UU.name).stackable), !this.checkItem(UU)) {
+           HH.name = rH(HH.name, null === (hH = this.bG.bloxd.YX.metadatas[HH.name]) || void 0 === hH ? void 0 : hH.meta);
+           if (EH(HH, void 0 !== this.bG.bloxd.YX.metadatas[HH.name] && this.bG.bloxd.getItemTypeObj(HH.name).stackable), !this.checkItem(HH)) {
```

#### 4126. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33038` → after: `L33569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33569) · [Before (L33038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33038)

```diff
-             typeObj: this.WN.bloxd.getItemTypeObj(XU)
+             typeObj: this.bG.bloxd.getItemTypeObj(BH)
```

#### 4127. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33048` → after: `L33579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33579) · [Before (L33048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33048)

```diff
-           inventory: new kU(this.WN, BU(this.state.iH, null), 0),
+           inventory: new xH(this.bG, PH(this.state.pR, null), 0),
```

#### 4128. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33051` → after: `L33582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33582) · [Before (L33051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33051)

```diff
-         UU.WN = this.WN, UU.state.iH = this.state.iH, UU.numSlots = this.numSlots, UU._selectedSlotI = this._selectedSlotI, UU.items.length = this.items.length, XU.length > this.items.length && (XU.length = this.items.length);
+         HH.bG = this.bG, HH.state.pR = this.state.pR, HH.numSlots = this.numSlots, HH._selectedSlotI = this._selectedSlotI, HH.items.length = this.items.length, BH.length > this.items.length && (BH.length = this.items.length);
```

#### 4129. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33065` → after: `L33596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33596) · [Before (L33065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33065)

```diff
-         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cU.d.length;
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AH.c.length;
```

#### 4130. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33072-L33073` → after: `L33603-L33604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33603-L33604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33603-L33604) · [Before (L33072-L33073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33072-L33073)

```diff
-           if (UU.typeObj.stackable && (0 === UU.amount || null === UU.amount)) return console.error(new Error(`Stackable object ${UU.name} is being picked up with amount ${UU.amount}. Nothing will be added to inventory.`).stack), zU;
-           if (UU.amount < 0) return console.error(new Error(`Found item with amount less than 0 ${UU.name} ${UU.amount}`).stack), zU
+           if (HH.typeObj.stackable && (0 === HH.amount || null === HH.amount)) return console.error(new Error(`Stackable object ${HH.name} is being picked up with amount ${HH.amount}. Nothing will be added to inventory.`).stack), LH;
+           if (HH.amount < 0) return console.error(new Error(`Found item with amount less than 0 ${HH.name} ${HH.amount}`).stack), LH
```

#### 4131. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33083-L33084` → after: `L33614-L33615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33614-L33615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33614-L33615) · [Before (L33083-L33084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33083-L33084)

```diff
-               if (XU.amount <= 0 || null === XU.amount) return console.error(new Error(`Found item with different amount type to current item ${UU.name} ${XU.name} ${UU.amount} ${XU.amount}`).stack), zU;
-               if (XU.amount + yU <= pU.f.maxItemStackSize) return XU.amount += yU, this.update(!0), {
+               if (BH.amount <= 0 || null === BH.amount) return console.error(new Error(`Found item with different amount type to current item ${HH.name} ${BH.name} ${HH.amount} ${BH.amount}`).stack), LH;
+               if (BH.amount + rH <= uH.g.maxItemStackSize) return BH.amount += rH, this.update(!0), {
```

#### 4132. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33089-L33090` → after: `L33620-L33621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33620-L33621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33620-L33621) · [Before (L33089-L33090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33089-L33090)

```diff
-               if (XU.amount < pU.f.maxItemStackSize) {
-                 const UU = pU.f.maxItemStackSize - XU.amount;
+               if (BH.amount < uH.g.maxItemStackSize) {
+                 const HH = uH.g.maxItemStackSize - BH.amount;
```

#### 4133. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33098` → after: `L33629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33629) · [Before (L33098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33098)

```diff
-           const cU = null === yU ? null : Math.min(yU, pU.f.maxItemStackSize);
+           const AH = null === rH ? null : Math.min(rH, uH.g.maxItemStackSize);
```

#### 4134. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33109` → after: `L33640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33640) · [Before (L33109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33109)

```diff
-           yU -= Math.min(yU, pU.f.maxItemStackSize)
+           rH -= Math.min(rH, uH.g.maxItemStackSize)
```

#### 4135. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33122` → after: `L33653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33653) · [Before (L33122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33122)

```diff
-         return null !== this.items[UU] && (null === this.items[UU].amount ? this.items[UU] = null : (this.items[UU].amount <= 0 && console.error(new Error(`Found item with amount less than or equal to zero ${this.items[UU].name} ${this.items[UU].amount}`)), this.items[UU].amount  … [truncated]
+         return null !== this.items[HH] && (null === this.items[HH].amount ? this.items[HH] = null : (this.items[HH].amount <= 0 && console.error(new Error(`Found item with amount less than or equal to zero ${this.items[HH].name} ${this.items[HH].amount}`)), this.items[HH].amount  … [truncated]
```

#### 4136. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33151` → after: `L33682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33682) · [Before (L33151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33151)

```diff
-           const yU = this.WN.bloxd.getItemTypeObj(XU);
+           const rH = this.bG.bloxd.getItemTypeObj(BH);
```

#### 4137. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33163` → after: `L33694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33694) · [Before (L33163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33163)

```diff
-         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cU.d.length;
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AH.c.length;
```

#### 4138. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33167` → after: `L33698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33698) · [Before (L33167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33167)

```diff
-         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cU.d.length,
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AH.c.length,
```

#### 4139. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33173` → after: `L33704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33704) · [Before (L33173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33173)

```diff
-         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.items.length - cU.d.length;
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.items.length - AH.c.length;
```

#### 4140. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33191` → after: `L33722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33722) · [Before (L33191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33191)

```diff
-         this.state.selectedItem = this.items[this._selectedSlotI], cU && (this.updatesHeld ? this.heldUpdate = this.heldUpdate || UU : null === (XU = (zU = this.state).onInventoryUpdate) || void 0 === XU || XU.call(zU, UU))
+         this.state.selectedItem = this.items[this._selectedSlotI], AH && (this.updatesHeld ? this.heldUpdate = this.heldUpdate || HH : null === (BH = (LH = this.state).onInventoryUpdate) || void 0 === BH || BH.call(LH, HH))
```

#### 4141. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33216` → after: `L33747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33747) · [Before (L33216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33216)

```diff
-               console.error(new Error(`Found item ${zU.name} with amount ${zU.amount}`).stack);
+               console.error(new Error(`Found item ${LH.name} with amount ${LH.amount}`).stack);
```

#### 4142. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33229` → after: `L33760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33760) · [Before (L33229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33229)

```diff
-         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cU.d.length,
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AH.c.length,
```

#### 4143. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33237-L33239` → after: `L33768-L33770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33768-L33770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33768-L33770) · [Before (L33237-L33239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33237-L33239)

```diff
-         if (!this.WN.bloxd.EY.metadatas[UU.name]) return console.warn(new Error(`Checked item with unknown/outdated name ${UU.name}`).stack), !1;
-         const XU = this.WN.bloxd.getItemTypeObj(UU.name);
-         return XU.stackable && null === UU.amount ? (console.error(new Error(`Checked stackable item ${UU.name} with null amount`).stack), !1) : XU.stackable || null === UU.amount ? XU.stackable && UU.amount <= 0 ? (console.error(new Error(`Checked stackable item ${UU.name} with  … [truncated]
+         if (!this.bG.bloxd.YX.metadatas[HH.name]) return console.warn(new Error(`Checked item with unknown/outdated name ${HH.name}`).stack), !1;
+         const BH = this.bG.bloxd.getItemTypeObj(HH.name);
+         return BH.stackable && null === HH.amount ? (console.error(new Error(`Checked stackable item ${HH.name} with null amount`).stack), !1) : BH.stackable || null === HH.amount ? BH.stackable && HH.amount <= 0 ? (console.error(new Error(`Checked stackable item ${HH.name} with  … [truncated]
```

#### 4144. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33246` → after: `L33777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33777) · [Before (L33246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33246)

```diff
-         cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : yU.k;
+         AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rH.j;
```

#### 4145. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33254` → after: `L33785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33785) · [Before (L33254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33254)

```diff
-         iH: UU,
+         pR: HH,
```

#### 4146. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33262` → after: `L33793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33793) · [Before (L33262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33262)

```diff
-   38966: (UU, XU, zU) => {
+   39083: (HH, BH, LH) => {
```

#### 4147. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33264` → after: `L33795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33795) · [Before (L33264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33264)

```diff
-       d: () => EU
+       c: () => EH
```

#### 4148. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33266-L33272` → after: `L33797-L33803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33797-L33803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33797-L33803) · [Before (L33266-L33272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33266-L33272)

```diff
-     var cU = zU(633),
-       yU = zU(212),
-       QU = zU(38972),
-       AU = zU(646),
-       FU = zU(38739),
-       oU = zU(37562),
-       DU = zU(344);
+     var AH = LH(609),
+       rH = LH(176),
+       SH = LH(39092),
+       hH = LH(619),
+       tH = LH(38867),
+       zH = LH(37694),
+       CH = LH(317);
```

#### 4149. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33275` → after: `L33806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33806) · [Before (L33275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33275)

```diff
-         this.callbacks = zU, this.WN = void 0, this.playerInventory = void 0, this.nc = null, this.mc = null, this.lc = null, this.inCreative = !1, this.chestsWithUpdatesHeld = null, this.WN = UU, this.playerInventory = XU
+         this.callbacks = LH, this.bG = void 0, this.playerInventory = void 0, this.qL = null, this.gL = null, this.NL = null, this.inCreative = !1, this.chestsWithUpdatesHeld = null, this.bG = HH, this.playerInventory = BH
```

#### 4150. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33278-L33279` → after: `L33809-L33810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33809-L33810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33809-L33810) · [Before (L33278-L33279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33278-L33279)

```diff
-         let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : AU.k;
-         this.loadOpenChestFromStr(UU, yU), this.chestOpenedWithExistingInventory(this.nc, XU, zU, cU)
+         let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : hH.j;
+         this.loadOpenChestFromStr(HH, rH), this.chestOpenedWithExistingInventory(this.qL, BH, LH, AH)
```

#### 4151. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33282` → after: `L33813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33813) · [Before (L33282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33282)

```diff
-         this.nc = UU, this.mc = XU, this.lc = zU, this.holdChestUpdates()
+         this.qL = HH, this.gL = BH, this.NL = LH, this.holdChestUpdates()
```

#### 4152. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33285` → after: `L33816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33816) · [Before (L33285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33285)

```diff
-         this.nc = null, this.mc = null, this.lc = null
+         this.qL = null, this.gL = null, this.NL = null
```

#### 4153. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33288` → after: `L33819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33819) · [Before (L33288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33288)

```diff
-         this.playerInventory.loadFromString(yU), this.nc ? this.nc.loadFromString(UU) : this.chestOpened(UU, XU, zU, null, cU)
+         this.playerInventory.loadFromString(rH), this.qL ? this.qL.loadFromString(HH) : this.chestOpened(HH, BH, LH, null, AH)
```

#### 4154. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33291` → after: `L33822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33822) · [Before (L33291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33291)

```diff
-         return !(UU >= this.playerInventory.numSlots && !this.nc && !this.inCreative) && (UU < this.playerInventory.numSlots ? this.playerInventory.removeItem(UU, XU) : this.nc ? this.nc.removeItem(UU - this.playerInventory.numSlots, XU) : (console.assert(this.inCreative, "Must b … [truncated]
+         return !(HH >= this.playerInventory.numSlots && !this.qL && !this.inCreative) && (HH < this.playerInventory.numSlots ? this.playerInventory.removeItem(HH, BH) : this.qL ? this.qL.removeItem(HH - this.playerInventory.numSlots, BH) : (console.assert(this.inCreative, "Must b … [truncated]
```

#### 4155. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33294` → after: `L33825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33825) · [Before (L33294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33294)

```diff
-         if (!this.nc && !this.inCreative && (UU >= this.playerInventory.numSlots || XU >= this.playerInventory.numSlots)) return !1;
+         if (!this.qL && !this.inCreative && (HH >= this.playerInventory.numSlots || BH >= this.playerInventory.numSlots)) return !1;
```

#### 4156. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33299` → after: `L33830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33830) · [Before (L33299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33299)

```diff
-         if (FU && cU && (0, DU.zb)(cU.name) !== FU || AU && QU && (0, DU.zb)(QU.name) !== AU) return !1;
+         if (tH && AH && (0, CH.wb)(AH.name) !== tH || hH && SH && (0, CH.wb)(SH.name) !== hH) return !1;
```

#### 4157. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33301-L33302` → after: `L33832-L33833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33832-L33833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33832-L33833) · [Before (L33301-L33302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33301-L33302)

```diff
-           if ("Name Tag" === cU.name && cU.attributes.customAttributes.text && null === QU.amount && !yU.f.nonRenameableItems.includes(QU.name)) return this.WN.bloxd.renameItem(QU, cU.attributes.customAttributes.text, zU), this.setItemAtIdx(UU, QU), this.removeItem(XU, 1), this.u … [truncated]
-           if ("Name Tag" === QU.name && QU.attributes.customAttributes.text && null === cU.amount && !yU.f.nonRenameableItems.includes(cU.name)) return this.WN.bloxd.renameItem(cU, QU.attributes.customAttributes.text, zU), this.setItemAtIdx(XU, cU), this.removeItem(UU, 1), this.u … [truncated]
+           if ("Name Tag" === AH.name && AH.attributes.customAttributes.text && null === SH.amount && !rH.g.nonRenameableItems.includes(SH.name)) return this.bG.bloxd.renameItem(SH, AH, LH), this.setItemAtIdx(HH, SH), this.removeItem(BH, 1), this.update(), !0;
+           if ("Name Tag" === SH.name && SH.attributes.customAttributes.text && null === AH.amount && !rH.g.nonRenameableItems.includes(AH.name)) return this.bG.bloxd.renameItem(AH, SH, LH), this.setItemAtIdx(BH, AH), this.removeItem(HH, 1), this.update(), !0
```

#### 4158. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33307` → after: `L33838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33838) · [Before (L33307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33307)

```diff
-         return this.inCreative && !this.nc && UU >= this.playerInventory.numSlots
+         return this.inCreative && !this.qL && HH >= this.playerInventory.numSlots
```

#### 4159. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33310` → after: `L33841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33841) · [Before (L33310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33310)

```diff
-         if (!this.nc && !this.inCreative && (UU >= this.playerInventory.numSlots || XU >= this.playerInventory.numSlots)) return !1;
+         if (!this.qL && !this.inCreative && (HH >= this.playerInventory.numSlots || BH >= this.playerInventory.numSlots)) return !1;
```

#### 4160. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33315` → after: `L33846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33846) · [Before (L33315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33315)

```diff
-         if (QU && (!(0, oU.d)(cU, QU) || QU.amount + zU > yU.f.maxItemStackSize)) return !1;
+         if (SH && (!(0, zH.d)(AH, SH) || SH.amount + LH > rH.g.maxItemStackSize)) return !1;
```

#### 4161. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33317` → after: `L33848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33848) · [Before (L33317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33317)

```diff
-         if (cU.amount <= 0) return console.error(new Error(`movePosWithAmt found item ${cU.name} with amount ${cU.amount}`).stack), !1;
+         if (AH.amount <= 0) return console.error(new Error(`movePosWithAmt found item ${AH.name} with amount ${AH.amount}`).stack), !1;
```

#### 4162. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33320-L33321` → after: `L33851-L33852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33851-L33852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33851-L33852) · [Before (L33320-L33321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33320-L33321)

```diff
-         if (AU && (0, DU.zb)(cU.name) !== AU) return !1;
-         const YU = (0, FU.e)(cU.attributes);
+         if (hH && (0, CH.wb)(AH.name) !== hH) return !1;
+         const XH = (0, tH.h)(AH.attributes);
```

#### 4163. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33333` → after: `L33864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33864) · [Before (L33333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33333)

```diff
-         if (null !== AU.amount && AU.amount <= 0) return console.error(new Error(`moveItemIntoIdxs found item ${AU.name} with amount ${AU.amount}`).stack), QU;
+         if (null !== hH.amount && hH.amount <= 0) return console.error(new Error(`moveItemIntoIdxs found item ${hH.name} with amount ${hH.amount}`).stack), SH;
```

#### 4164. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33343` → after: `L33874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33874) · [Before (L33343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33343)

```diff
-                 console.error(new Error(`moveItemIntoIdxs found item ${UU.name} with amount ${UU.amount}`).stack);
+                 console.error(new Error(`moveItemIntoIdxs found item ${HH.name} with amount ${HH.amount}`).stack);
```

#### 4165. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33347` → after: `L33878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33878) · [Before (L33347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33347)

```diff
-               if (UU.amount + EU <= yU.f.maxItemStackSize) return UU.amount += EU, AU.amount -= EU, AU.amount <= 0 && (this.setItemAtIdx(zU, null), AU.amount < 0 && !(this.inCreative && !this.nc && zU >= this.playerInventory.numSlots) && console.error(new Error("Moved too much it … [truncated]
+               if (HH.amount + EH <= rH.g.maxItemStackSize) return HH.amount += EH, hH.amount -= EH, hH.amount <= 0 && (this.setItemAtIdx(LH, null), hH.amount < 0 && !(this.inCreative && !this.qL && LH >= this.playerInventory.numSlots) && console.error(new Error("Moved too much it … [truncated]
```

#### 4166. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33351-L33352` → after: `L33882-L33883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33882-L33883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33882-L33883) · [Before (L33351-L33352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33351-L33352)

```diff
-               if (UU.amount < yU.f.maxItemStackSize) {
-                 const XU = yU.f.maxItemStackSize - UU.amount;
+               if (HH.amount < rH.g.maxItemStackSize) {
+                 const BH = rH.g.maxItemStackSize - HH.amount;
```

#### 4167. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33364-L33365` → after: `L33895-L33896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33895-L33896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33895-L33896) · [Before (L33364-L33365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33364-L33365)

```diff
-             attributes: (0, FU.e)(AU.attributes)
-           }), AU.amount -= EU, AU.amount <= 0 && (this.setItemAtIdx(zU, null), AU.amount < 0 && !(this.inCreative && !this.nc && zU >= this.playerInventory.numSlots) && console.error(new Error(`Moved too much item: tried to move ${EU} ${AU.name} from slot ${zU} that had ${UU} ${A … [truncated]
+             attributes: (0, tH.h)(hH.attributes)
+           }), hH.amount -= EH, hH.amount <= 0 && (this.setItemAtIdx(LH, null), hH.amount < 0 && !(this.inCreative && !this.qL && LH >= this.playerInventory.numSlots) && console.error(new Error(`Moved too much item: tried to move ${EH} ${hH.name} from slot ${LH} that had ${HH} ${h … [truncated]
```

#### 4168. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33370` → after: `L33901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33901) · [Before (L33370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33370)

```diff
-         return this.update(), null === DU ? QU : {
+         return this.update(), null === CH ? SH : {
```

#### 4169. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33376` → after: `L33907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33907) · [Before (L33376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33376)

```diff
-         const zU = this.playerInventory.numSlots + (this.nc ? this.nc.numSlots : 0);
+         const LH = this.playerInventory.numSlots + (this.qL ? this.qL.numSlots : 0);
```

#### 4170. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33383` → after: `L33914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33914) · [Before (L33383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33383)

```diff
-           if (this.nc) this.nc.setItemSlot(UU - this.playerInventory.numSlots, XU, zU, yU);
+           if (this.qL) this.qL.setItemSlot(HH - this.playerInventory.numSlots, BH, LH, rH);
```

#### 4171. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33385-L33387` → after: `L33916-L33918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33916-L33918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33916-L33918) · [Before (L33385-L33387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33385-L33387)

```diff
-         } else if (UU >= this.playerInventory.numSlots - cU.d.length) {
-           const QU = UU - this.playerInventory.numSlots + cU.d.length;
-           if ("Air" !== XU && (0, DU.zb)(XU) !== cU.d[QU]) throw new Error(`Attempting to put invalid item ${XU} ${zU} ${yU} \t\t\t\t\tinto armour inven slot idx ${UU}`);
+         } else if (HH >= this.playerInventory.numSlots - AH.c.length) {
+           const SH = HH - this.playerInventory.numSlots + AH.c.length;
+           if ("Air" !== BH && (0, CH.wb)(BH) !== AH.c[SH]) throw new Error(`Attempting to put invalid item ${BH} ${LH} ${rH} \t\t\t\t\tinto armour inven slot idx ${HH}`);
```

#### 4172. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33393-L33394` → after: `L33924-L33925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33924-L33925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33924-L33925) · [Before (L33393-L33394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33393-L33394)

```diff
-         if (XU && null !== XU.amount && (XU.amount < 0 || XU.amount > yU.f.maxItemStackSize) && (console.error(new Error(`Tried to setItemAtIdx ${UU} with invalid amount ${XU.amount}. Slot will be set to null instead`).stack), XU = null), UU >= this.playerInventory.numSlots) {
-           if (this.nc) this.nc.items[UU - this.playerInventory.numSlots] = XU;
+         if (BH && null !== BH.amount && (BH.amount < 0 || BH.amount > rH.g.maxItemStackSize) && (console.error(new Error(`Tried to setItemAtIdx ${HH} with invalid amount ${BH.amount}. Slot will be set to null instead`).stack), BH = null), HH >= this.playerInventory.numSlots) {
+           if (this.qL) this.qL.items[HH - this.playerInventory.numSlots] = BH;
```

#### 4173. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33396-L33397` → after: `L33927-L33928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33927-L33928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33927-L33928) · [Before (L33396-L33397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33396-L33397)

```diff
-         } else if (UU >= this.playerInventory.numSlots - cU.d.length) {
-           const yU = UU - this.playerInventory.numSlots + cU.d.length;
+         } else if (HH >= this.playerInventory.numSlots - AH.c.length) {
+           const rH = HH - this.playerInventory.numSlots + AH.c.length;
```

#### 4174. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33399` → after: `L33930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33930) · [Before (L33399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33399)

```diff
-           if (XU && (0, DU.zb)(XU.name) !== cU.d[yU]) throw new Error(`Attempting to put invalid item ${null===(zU=XU)||void 0===zU?void 0:zU.name} ${null===(QU=XU)||void 0===QU?void 0:QU.amount} ${JSON.stringify(null!==(AU=null===(FU=XU)||void 0===FU?void 0:FU.attributes)&&void  … [truncated]
+           if (BH && (0, CH.wb)(BH.name) !== AH.c[rH]) throw new Error(`Attempting to put invalid item ${null===(LH=BH)||void 0===LH?void 0:LH.name} ${null===(SH=BH)||void 0===SH?void 0:SH.amount} ${JSON.stringify(null!==(hH=null===(tH=BH)||void 0===tH?void 0:tH.attributes)&&void  … [truncated]
```

#### 4175. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33405` → after: `L33936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33936) · [Before (L33405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33405)

```diff
-           if (this.nc) return this.nc.items[UU - this.playerInventory.numSlots];
+           if (this.qL) return this.qL.items[HH - this.playerInventory.numSlots];
```

#### 4176. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33407-L33409` → after: `L33938-L33940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33938-L33940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33938-L33940) · [Before (L33407-L33409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33407-L33409)

```diff
-             const XU = QU.b[UU - this.playerInventory.numSlots],
-               zU = this.WN.bloxd.getItemTypeObj(XU);
-             if (!zU) throw new Error(`item ${XU} defined in creativeItems but not elsewhere`);
+             const BH = SH.e[HH - this.playerInventory.numSlots],
+               LH = this.bG.bloxd.getItemTypeObj(BH);
+             if (!LH) throw new Error(`item ${BH} defined in creativeItems but not elsewhere`);
```

#### 4177. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33413` → after: `L33944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33944) · [Before (L33413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33413)

```diff
-               attributes: (0, FU.g)(XU),
+               attributes: (0, tH.l)(BH),
```

#### 4178. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33417` → after: `L33948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33948) · [Before (L33417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33417)

```diff
-           return this.WN.Pa(`Attempting to get item in high idx ${UU} when not in chest or creative`, new Error(`Attempting to get item in high idx ${UU} when not in chest or creative`)), null
+           return this.bG.PQ(`Attempting to get item in high idx ${HH} when not in chest or creative`, new Error(`Attempting to get item in high idx ${HH} when not in chest or creative`)), null
```

#### 4179. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33422-L33423` → after: `L33953-L33954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33953-L33954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33953-L33954) · [Before (L33422-L33423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33422-L33423)

```diff
-         const XU = UU - AU.w + cU.d.length;
-         return XU < 0 || XU >= cU.d.length ? null : cU.d[XU]
+         const BH = HH - hH.s + AH.c.length;
+         return BH < 0 || BH >= AH.c.length ? null : AH.c[BH]
```

#### 4180. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33427` → after: `L33958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33958) · [Before (L33427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33427)

```diff
-         this.playerInventory.update(!0), null === (UU = this.nc) || void 0 === UU || UU.update(!0)
+         this.playerInventory.update(!0), null === (HH = this.qL) || void 0 === HH || HH.update(!0)
```

#### 4181. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33440` → after: `L33971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33971) · [Before (L33440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33440)

```diff
-         this.nc && this.chestsWithUpdatesHeld && !this.chestsWithUpdatesHeld.has(this.nc) && (this.nc.holdUpdates(), this.chestsWithUpdatesHeld.add(this.nc))
+         this.qL && this.chestsWithUpdatesHeld && !this.chestsWithUpdatesHeld.has(this.qL) && (this.qL.holdUpdates(), this.chestsWithUpdatesHeld.add(this.qL))
```

#### 4182. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33444-L33448` → after: `L33975-L33979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33975-L33979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33975-L33979) · [Before (L33444-L33448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33444-L33448)

```diff
-           XX: this.playerInventory.stringify(),
-           nc: this.nc ? this.nc.stringify() : null,
-           mc: this.mc,
-           lc: JSON.stringify(this.lc),
-           xc: this.nc ? this.nc.numSlots : null
+           fL: this.playerInventory.stringify(),
+           qL: this.qL ? this.qL.stringify() : null,
+           gL: this.gL,
+           NL: JSON.stringify(this.NL),
+           RL: this.qL ? this.qL.numSlots : null
```

#### 4183. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33453-L33457` → after: `L33984-L33988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33984-L33988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33984-L33988) · [Before (L33453-L33457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33453-L33457)

```diff
-           XX: XU,
-           nc: zU,
-           mc: cU,
-           lc: yU,
-           xc: QU
+           fL: BH,
+           qL: LH,
+           gL: AH,
+           NL: rH,
+           RL: SH
```

#### 4184. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33459` → after: `L33990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33990) · [Before (L33459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33459)

```diff
-         this.playerInventory.loadFromString(XU), zU ? (this.loadOpenChestFromStr(zU, null !== QU && void 0 !== QU ? QU : AU.k), this.mc = cU || null, this.lc = JSON.parse(yU) || null) : (this.nc = null, this.mc = null, this.lc = null)
+         this.playerInventory.loadFromString(BH), LH ? (this.loadOpenChestFromStr(LH, null !== SH && void 0 !== SH ? SH : hH.j), this.gL = AH || null, this.NL = JSON.parse(rH) || null) : (this.qL = null, this.gL = null, this.NL = null)
```

#### 4185. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33462-L33463` → after: `L33993-L33994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33993-L33994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33993-L33994) · [Before (L33462-L33463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33462-L33463)

```diff
-         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AU.k;
-         return this.nc = (0, FU.j)(this.WN, this.playerInventory.state.iH, (UU => {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hH.j;
+         return this.qL = (0, tH.n)(this.bG, this.playerInventory.state.pR, (HH => {
```

#### 4186. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33466` → after: `L33997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R33997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L33997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L33997) · [Before (L33466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33466)

```diff
-         }), XU), this.holdChestUpdates(), this.nc.loadFromString(UU), this.nc
+         }), BH), this.holdChestUpdates(), this.qL.loadFromString(HH), this.qL
```

#### 4187. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33470` → after: `L34001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R34001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L34001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L34001) · [Before (L33470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33470)

```diff
-   39244: (UU, XU, zU) => {
+   39334: (HH, BH, LH) => {
```

#### 4188. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33472-L33473` → after: `L34003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R34003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L34003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L34003) · [Before (L33472-L33473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33472-L33473)

```diff
-       b: () => tU,
-       e: () => pU,
+       c: () => WH,
```

#### 4189. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33476-L33478` → after: `L34007-L34009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R34007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L34007-L34009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L34007-L34009) · [Before (L33476-L33478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33476-L33478)

```diff
-       m: () => NU,
-       q: () => YU,
-       t: () => AU
+       l: () => GH,
+       p: () => XH,
+       s: () => hH
```

#### 4190. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33480-L33482` → after: `L34011-L34013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R34011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L34011-L34013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L34011-L34013) · [Before (L33480-L33482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33480-L33482)

```diff
-     var cU = zU(1974),
-       yU = zU(3560),
-       QU = zU(2334);
+     var AH = LH(1962),
+       rH = LH(3549),
+       SH = LH(2339);
```

#### 4191. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33485` → after: `L34016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R34016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L34016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L34016) · [Before (L33485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33485)

```diff
-       oU = (0, cU.l)(20),
+       zH = (0, AH.h)(20),
```

#### 4192. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33491-L33495` → after: `L34022-L34026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R34022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L34022-L34026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L34022-L34026) · [Before (L33491-L33495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33491-L33495)

```diff
-       EU = (0, cU.l)(40),
-       YU = (0, cU.l)(0),
-       NU = (0, cU.l)(20),
-       IU = (0, cU.l)(35),
-       pU = (0, cU.l)(40),
+       EH = (0, AH.h)(40),
+       XH = (0, AH.h)(0),
+       GH = (0, AH.h)(20),
+       YH = (0, AH.h)(35),
+       uH = (0, AH.h)(40),
```

#### 4193. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33698` → after: `L34229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R34229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L34229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L34229) · [Before (L33698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33698)

```diff
-               softTolerance: (0, cU.l)(60),
+               softTolerance: (0, AH.h)(60),
```

#### 4194. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33714` → after: `L34245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R34245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L34245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L34245) · [Before (L33714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33714)

```diff
-               softTolerance: (0, cU.l)(60),
+               softTolerance: (0, AH.h)(60),
```

#### 4195. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33729` → after: `L34260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R34260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L34260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L34260) · [Before (L33729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33729)

```diff
-               softTolerance: (0, cU.l)(60),
+               softTolerance: (0, AH.h)(60),
```

#### 4196. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33959` → after: `L34490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R34490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L34490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L34490) · [Before (L33959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L33959)

```diff
-               softTolerance: (0, cU.l)(60),
+               softTolerance: (0, AH.h)(60),
```

#### 4197. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L34034` → after: `L34565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R34565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L34565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L34565) · [Before (L34034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L34034)

```diff
-             softTolerance: (0, cU.l)(60),
+             softTolerance: (0, AH.h)(60),
```

#### 4198. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L34039` → after: `L34570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R34570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L34570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L34570) · [Before (L34039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L34039)

```diff
-             softTolerance: (0, cU.l)(60),
+             softTolerance: (0, AH.h)(60),
```

#### 4199. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L34175` → after: `L34706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R34706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L34706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L34706) · [Before (L34175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L34175)

```diff
-   37882: (UU, XU, zU) => {
+   38035: (HH, BH, LH) => {
```

#### 4200. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L34201` → after: `L34732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R34732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L34732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L34732) · [Before (L34201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L34201)

```diff
-       return null !== (XU = AU[UU]) && void 0 !== XU ? XU : null
+       return null !== (BH = hH[HH]) && void 0 !== BH ? BH : null
```

#### 4201. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L34273` → after: `L34804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R34804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L34804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L34804) · [Before (L34273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L34273)

```diff
-   39237: (UU, XU, zU) => {
+   39328: (HH, BH, LH) => {
```

#### 4202. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35061` → after: `L35592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35592) · [Before (L35061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35061)

```diff
-   38894: (UU, XU, zU) => {
+   39022: (HH, BH, LH) => {
```

#### 4203. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35063` → after: `L35594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35594) · [Before (L35063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35063)

```diff
-       b: () => cU
+       d: () => AH
```

#### 4204. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35067` → after: `L35598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35598) · [Before (L35067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35067)

```diff
-   38404: (UU, XU, zU) => {
+   38509: (HH, BH, LH) => {
```

#### 4205. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35069-L35071` → after: `L35600-L35602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35600-L35602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35600-L35602) · [Before (L35069-L35071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35069-L35071)

```diff
-       e: () => oU,
-       g: () => KU,
-       k: () => vU
+       d: () => zH,
+       h: () => JH,
+       l: () => jH
```

#### 4206. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35073-L35077` → after: `L35604-L35608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35604-L35608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35604-L35608) · [Before (L35073-L35077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35073-L35077)

```diff
-     var cU = zU(212),
-       yU = zU(9782),
-       QU = zU(9808),
-       AU = zU(38406),
-       FU = zU(344);
+     var AH = LH(176),
+       rH = LH(9940),
+       SH = LH(9955),
+       hH = LH(38514),
+       tH = LH(317);
```

#### 4207. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35081` → after: `L35612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35612) · [Before (L35081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35081)

```diff
-       return (0, AU.j)((cU => {
+       return (0, hH.h)((AH => {
```

#### 4208. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35084` → after: `L35615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35615) · [Before (L35084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35084)

```diff
-         return cU === QU.xG.Bx(QU.pM) ? function(UU, XU) {
+         return AH === SH.pT.xJ(SH.lF) ? function(HH, BH) {
```

#### 4209. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35088` → after: `L35619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35619) · [Before (L35088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35088)

```diff
-             if (!UU.KJ(XU[0], XU[1], XU[2])) return !0
+             if (!HH.Gy(BH[0], BH[1], BH[2])) return !0
```

#### 4210. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35091` → after: `L35622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35622) · [Before (L35091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35091)

```diff
-         }(yU, cU) : (zU[0] = Math.floor((cU.tN.base[0] + cU.tN.max[0]) / 2), zU[1] = Math.floor(cU.tN.base[1]), zU[2] = Math.floor((cU.tN.base[2] + cU.tN.max[2]) / 2), yU.N_(zU, zU), !yU.KJ(zU[0], zU[1], zU[2]))
+         }(rH, AH) : (LH[0] = Math.floor((AH.MG.base[0] + AH.MG.max[0]) / 2), LH[1] = Math.floor(AH.MG.base[1]), LH[2] = Math.floor((AH.MG.base[2] + AH.MG.max[2]) / 2), rH.M_(LH, LH), !rH.Gy(LH[0], LH[1], LH[2]))
```

#### 4211. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35096-L35099` → after: `L35627-L35630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35627-L35630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35627-L35630) · [Before (L35096-L35099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35096-L35099)

```diff
-       YU = [...FU.Qc.map((UU => yU.h[UU].id)), yU.h.Vines.id, yU.h["Maple Trapdoor"].id, yU.h["Pine Trapdoor"].id, yU.h["Plum Trapdoor"].id, yU.h["Cedar Trapdoor"].id, yU.h["Aspen Trapdoor"].id, yU.h["Jungle Trapdoor"].id, yU.h["Palm Trapdoor"].id, yU.h["Pear Trapdoor"].id, yU.h[ … [truncated]
-       NU = [yU.h.Cobweb.id, yU.h.Net.id],
-       IU = [yU.h["Fat Brown Mushroom"].id, yU.h["Fat Red Mushroom"].id],
-       pU = Object.keys(yU.h).filter((UU => yU.h[UU].BI)).map((UU => yU.h[UU].id)),
+       XH = [...tH.Tc.map((HH => rH.g[HH].id)), rH.g.Vines.id, rH.g["Maple Trapdoor"].id, rH.g["Pine Trapdoor"].id, rH.g["Plum Trapdoor"].id, rH.g["Cedar Trapdoor"].id, rH.g["Aspen Trapdoor"].id, rH.g["Jungle Trapdoor"].id, rH.g["Palm Trapdoor"].id, rH.g["Pear Trapdoor"].id, rH.g[ … [truncated]
+       GH = [rH.g.Cobweb.id, rH.g.Net.id],
+       YH = [rH.g["Fat Brown Mushroom"].id, rH.g["Fat Red Mushroom"].id],
+       uH = Object.keys(rH.g).filter((HH => rH.g[HH].UY)).map((HH => rH.g[HH].id)),
```

#### 4212. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35102-L35104` → after: `L35633-L35635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35633-L35635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35633-L35635) · [Before (L35102-L35104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35102-L35104)

```diff
-     for (const [zX, cX] of Object.entries(QU.Zb)) {
-       const UU = yU.h[zX];
-       if (!UU) throw new Error(`Jump pad "${zX}" not found in blockMetadata`);
+     for (const [LB, AB] of Object.entries(SH.Ub)) {
+       const HH = rH.g[LB];
+       if (!HH) throw new Error(`Jump pad "${LB}" not found in blockMetadata`);
```

#### 4213. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35112-L35113` → after: `L35643-L35644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35643-L35644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35643-L35644) · [Before (L35112-L35113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35112-L35113)

```diff
-     for (const zX of Object.keys(yU.h)) {
-       const UU = yU.h[zX],
+     for (const LB of Object.keys(rH.g)) {
+       const HH = rH.g[LB],
```

#### 4214. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35117-L35118` → after: `L35648-L35649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35648-L35649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35648-L35649) · [Before (L35117-L35118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35117-L35118)

```diff
-       let zU = UU.Ft ? 0 : 1;
-       for (let cU = 4; UU.Ft && cU < UU.Ft.length; cU += 6) zU = Math.max(zU, UU.Ft[cU]);
+       let LH = HH.hW ? 0 : 1;
+       for (let AH = 4; HH.hW && AH < HH.hW.length; AH += 6) LH = Math.max(LH, HH.hW[AH]);
```

#### 4215. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35123` → after: `L35654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35654) · [Before (L35123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35123)

```diff
-       return UU[UU.bounceable = 1] = "bounceable", UU[UU.wallClimbable = 2] = "wallClimbable", UU[UU.ceilingClimbable = 4] = "ceilingClimbable", UU[UU.cobweb = 8] = "cobweb", UU[UU.BI = 16] = "BI", UU[UU.jumpPad = 32] = "jumpPad", UU[UU.conveyor = 64] = "conveyor", UU
+       return HH[HH.bounceable = 1] = "bounceable", HH[HH.wallClimbable = 2] = "wallClimbable", HH[HH.ceilingClimbable = 4] = "ceilingClimbable", HH[HH.cobweb = 8] = "cobweb", HH[HH.UY = 16] = "UY", HH[HH.jumpPad = 32] = "jumpPad", HH[HH.conveyor = 64] = "conveyor", HH
```

#### 4216. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35125` → after: `L35656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35656) · [Before (L35125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35125)

```diff
-     const WU = (0, FU.ab)(yU.h, (UU => {
+     const OH = (0, tH.Z)(rH.g, (HH => {
```

#### 4217. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35128` → after: `L35659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35659) · [Before (L35128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35128)

```diff
-       return IU.includes(UU) && (zU |= PU.bounceable), YU.includes(UU) && (zU |= PU.wallClimbable), null !== (XU = yU.h[UU]) && void 0 !== XU && XU.climbableInside && (zU |= PU.ceilingClimbable), NU.includes(UU) && (zU |= PU.cobweb), pU.includes(UU) && (zU |= PU.BI), aU.includes( … [truncated]
+       return YH.includes(HH) && (LH |= VH.bounceable), XH.includes(HH) && (LH |= VH.wallClimbable), null !== (BH = rH.g[HH]) && void 0 !== BH && BH.climbableInside && (LH |= VH.ceilingClimbable), GH.includes(HH) && (LH |= VH.cobweb), uH.includes(HH) && (LH |= VH.UY), QH.includes( … [truncated]
```

#### 4218. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35135-L35136` → after: `L35666-L35667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35666-L35667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35666-L35667) · [Before (L35135-L35136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35135-L35136)

```diff
-     const qU = (0, FU.ab)(yU.h, (UU => {
-       const XU = yU.h[UU];
+     const fH = (0, tH.Z)(rH.g, (HH => {
+       const BH = rH.g[HH];
```

#### 4219. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35142` → after: `L35673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35673) · [Before (L35142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35142)

```diff
-       return 1 === XU || 2 === XU ? 1 === XU : "trapdoor" === yU.h[UU].model
+       return 1 === BH || 2 === BH ? 1 === BH : "trapdoor" === rH.g[HH].model
```

#### 4220. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35146` → after: `L35677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35677) · [Before (L35146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35146)

```diff
-       const XU = UU.EY;
+       const BH = HH.YX;
```

#### 4221. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35154` → after: `L35685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35685) · [Before (L35154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35154)

```diff
-         zU && Number.isInteger(zU.rootId) && !(Math.abs(zU.rootId) > 2147483647) && (null == yU || Number.isInteger(yU) && yU >= 0 && yU <= 127) && (LU[cU] = 1, eU[cU] = zU.rootId, CU[cU] = null !== yU && void 0 !== yU ? yU : 0, wU[cU] = zU.open ? 1 : 0)
+         LH && Number.isInteger(LH.rootId) && !(Math.abs(LH.rootId) > 2147483647) && (null == rH || Number.isInteger(rH) && rH >= 0 && rH <= 127) && (kH[AH] = 1, mH[AH] = LH.rootId, oH[AH] = null !== rH && void 0 !== rH ? rH : 0, IH[AH] = LH.open ? 1 : 0)
```

#### 4222. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35177-L35178` → after: `L35708-L35709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35708-L35709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35708-L35709) · [Before (L35177-L35178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35177-L35178)

```diff
-       UU.EY !== dU && SU(UU);
-       const yU = UU.WN.xG.hK(XU).JXU,
+       HH.YX !== bH && KH(HH);
+       const rH = HH.bG.pT.A4(BH).zLH,
```

#### 4223. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35181` → after: `L35712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35712) · [Before (L35181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35181)

```diff
-         FU = UU.N_(yU, iU),
+         tH = HH.M_(rH, gH),
```

#### 4224. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35185-L35186` → after: `L35716-L35717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35716-L35717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35716-L35717) · [Before (L35185-L35186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35185-L35186)

```diff
-         IU = YU + cU.f.cg,
-         pU = .5 * (zU.tN.max[0] - zU.tN.base[0]),
+         YH = XH + AH.g.iW,
+         uH = .5 * (LH.MG.max[0] - LH.MG.base[0]),
```

#### 4225. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35245` → after: `L35776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35776) · [Before (L35245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35245)

```diff
-             1 === cU || 3 === cU ? (UU = 2, QU = 0, AU = DU + .5, yU = 1 === cU ? GU : GU + 1) : (UU = 0, QU = 2, AU = GU + .5, yU = 2 === cU ? DU : DU + 1), Math.abs(FU[UU] - yU) < vU && Math.abs(FU[QU] - AU) - .499 < pU && (lU = !0, 0 !== zU.resting[UU] && (fU[UU] = XU))
+             1 === AH || 3 === AH ? (HH = 2, SH = 0, hH = CH + .5, rH = 1 === AH ? vH : vH + 1) : (HH = 0, SH = 2, hH = vH + .5, rH = 2 === AH ? CH : CH + 1), Math.abs(tH[HH] - rH) < jH && Math.abs(tH[SH] - hH) - .499 < uH && (ZH = !0, 0 !== LH.resting[HH] && (qH[HH] = BH))
```

#### 4226. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35248` → after: `L35779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35779) · [Before (L35248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35248)

```diff
-             !(oU - kU > DU + 1 || oU + kU < DU || NU - kU > GU + 1 || NU + kU < GU) && (jU || (jU = !!(dU & PU.cobweb)), KU || (KU = !!(dU & PU.BI)))
+             !(zH - xH > CH + 1 || zH + xH < CH || GH - xH > vH + 1 || GH + xH < vH) && (sH || (sH = !!(bH & VH.cobweb)), JH || (JH = !!(bH & VH.UY)))
```

#### 4227. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35259-L35260` → after: `L35790-L35791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35790-L35791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35790-L35791) · [Before (L35259-L35260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35259-L35260)

```diff
-       const yU = XU.tN.base,
-         QU = XU.tN.max,
+       const rH = BH.MG.base,
+         SH = BH.MG.max,
```

#### 4228. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35262` → after: `L35793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35793) · [Before (L35262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35262)

```diff
-       return AU[0] = yU[0] - zU, AU[1] = yU[1] - cU, AU[2] = yU[2] - zU, AU[3] = QU[0] + zU, AU[4] = QU[1] + cU, AU[5] = QU[2] + zU, JU(UU.WN, AU)
+       return hH[0] = rH[0] - LH, hH[1] = rH[1] - AH, hH[2] = rH[2] - LH, hH[3] = SH[0] + LH, hH[4] = SH[1] + AH, hH[5] = SH[2] + LH, aH(HH.bG, hH)
```

#### 4229. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35270` → after: `L35801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35801) · [Before (L35270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35270)

```diff
-       const zU = UU.VN;
+       const LH = HH.DG;
```

#### 4230. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35299-L35300` → after: `L35830-L35831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35830-L35831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35830-L35831) · [Before (L35299-L35300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35299-L35300)

```diff
-         const QU = UU.xG.hK(XU),
-           AU = UU.xG.Bx(XU);
+         const SH = HH.pT.A4(BH),
+           hH = HH.pT.xJ(BH);
```

#### 4231. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35302-L35303` → after: `L35833-L35834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35833-L35834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35833-L35834) · [Before (L35302-L35303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35302-L35303)

```diff
-         const FU = QU.BcU,
-           oU = null !== (yU = QU.VN) && void 0 !== yU ? yU : UU.VN,
+         const tH = SH.qAH,
+           zH = null !== (rH = SH.DG) && void 0 !== rH ? rH : HH.DG,
```

#### 4232. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35314-L35315` → after: `L35845-L35846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35845-L35846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35845-L35846) · [Before (L35314-L35315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35314-L35315)

```diff
-           const NU = UU.pG(XU);
-           if (UU.EY.mJ(NU)) {
+           const GH = HH.Fv(BH);
+           if (HH.YX.Ay(GH)) {
```

#### 4233. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35351` → after: `L35882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35882) · [Before (L35351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35351)

```diff
-   38733: (UU, XU, zU) => {
+   38865: (HH, BH, LH) => {
```

#### 4234. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35356` → after: `L35887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35887) · [Before (L35356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35356)

```diff
-     var cU = zU(9782);
+     var AH = LH(9940);
```

#### 4235. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35369` → after: `L35900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35900) · [Before (L35369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35369)

```diff
-         yU = cU.h[UU].soundType,
+         rH = AH.g[HH].soundType,
```

#### 4236. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35373-L35374` → after: `L35904-L35905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35904-L35905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35904-L35905) · [Before (L35373-L35374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35373-L35374)

```diff
-         const yU = cU.h[UU].harvestType;
-         return void 0 === yU ? (console.error("no harvest type for block", cU.h[UU], cU.h[UU].name, XU), "stone") : zU[yU]
+         const rH = AH.g[HH].harvestType;
+         return void 0 === rH ? (console.error("no harvest type for block", AH.g[HH], AH.g[HH].name, BH), "stone") : LH[rH]
```

#### 4237. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35385` → after: `L35916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35916) · [Before (L35385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35385)

```diff
-   38277: (UU, XU, zU) => {
+   38396: (HH, BH, LH) => {
```

#### 4238. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35387-L35388` → after: `L35918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35918) · [Before (L35387-L35388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35387-L35388)

```diff
-       e: () => cU,
-       f: () => yU,
+       c: () => AH,
```

#### 4239. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35391-L35392` → after: `L35921-L35923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35921-L35923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35921-L35923) · [Before (L35391-L35392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35391-L35392)

```diff
-       m: () => AU,
-       q: () => QU
+       j: () => tH,
+       l: () => hH,
+       p: () => SH
```

#### 4240. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35403` → after: `L35934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35934) · [Before (L35403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35403)

```diff
-   38302: (UU, XU, zU) => {
+   38420: (HH, BH, LH) => {
```

#### 4241. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35406-L35407` → after: `L35937-L35938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35937-L35938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35937-L35938) · [Before (L35406-L35407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35406-L35407)

```diff
-       d: () => qU,
-       f: () => wU
+       f: () => fH,
+       j: () => IH
```

#### 4242. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35409` → after: `L35940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35940) · [Before (L35409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35409)

```diff
-     var cU = zU(38292);
+     var AH = LH(38408);
```

#### 4243. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35459-L35460` → after: `L35990-L35991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35990-L35991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35990-L35991) · [Before (L35459-L35460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35459-L35460)

```diff
-       if (UU.loop === cU.g.Loop || null !== UU.animTimeUpdate) return 1 / 0;
-       if (UU.loop === cU.g.Hold && UU.lengthSeconds > 0) return UU.startDelaySeconds + UU.lengthSeconds;
+       if (HH.loop === AH.j.Loop || null !== HH.animTimeUpdate) return 1 / 0;
+       if (HH.loop === AH.j.Hold && HH.lengthSeconds > 0) return HH.startDelaySeconds + HH.lengthSeconds;
```

#### 4244. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35462` → after: `L35993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R35993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L35993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L35993) · [Before (L35462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35462)

```diff
-       return zU ? 1 / 0 : UU.startDelaySeconds + XU + 2 * cU.i
+       return LH ? 1 / 0 : HH.startDelaySeconds + BH + 2 * AH.l
```

#### 4245. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35484` → after: `L36015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36015) · [Before (L35484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35484)

```diff
-       return "number" === typeof UU ? UU : UU.constant
+       return "number" === typeof HH ? HH : HH.constant
```

#### 4246. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35486-L35488` → after: `L36017-L36019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36017-L36019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36017-L36019) · [Before (L35486-L35488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35486-L35488)

```diff
-     var IU = zU(38308),
-       pU = zU(38286),
-       aU = zU(38294);
+     var YH = LH(38424),
+       uH = LH(38399),
+       QH = LH(38413);
```

#### 4247. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35494-L35496` → after: `L36025-L36027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36025-L36027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36025-L36027) · [Before (L35494-L35496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35494-L35496)

```diff
-         ["rotation", cU.d.Rotation],
-         ["position", cU.d.Position],
-         ["scale", cU.d.Scale]
+         ["rotation", AH.h.Rotation],
+         ["position", AH.h.Position],
+         ["scale", AH.h.Scale]
```

#### 4248. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35502` → after: `L36033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36033) · [Before (L35502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35502)

```diff
-       if (UU.length > gU) return WU(XU, `file is ${UU.length} characters, over the 524288 limit`);
+       if (HH.length > MH) return OH(BH, `file is ${HH.length} characters, over the 524288 limit`);
```

#### 4249. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35507` → after: `L36038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36038) · [Before (L35507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35507)

```diff
-         return WU(XU, `invalid JSON: ${yU.message}`)
+         return OH(BH, `invalid JSON: ${rH.message}`)
```

#### 4250. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35512` → after: `L36043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36043) · [Before (L35512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35512)

```diff
-         return WU(XU, `could not be loaded: ${yU.message}`)
+         return OH(BH, `could not be loaded: ${rH.message}`)
```

#### 4251. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35520` → after: `L36051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36051) · [Before (L35520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35520)

```diff
-           severity: cU.b.Error,
+           severity: AH.d.Error,
```

#### 4252. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35531` → after: `L36062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36062) · [Before (L35531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35531)

```diff
-         if (!(0, pU.i)(UU)) return WU(this.source, "the file is not a JSON object");
+         if (!(0, uH.l)(HH)) return OH(this.source, "the file is not a JSON object");
```

#### 4253. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35533` → after: `L36064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36064) · [Before (L35533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35533)

```diff
-         if ("string" !== typeof XU || !tU.includes(XU)) return WU(this.source, `unsupported format_version ${JSON.stringify(XU)}; expected one of ${tU.join(", ")}`);
+         if ("string" !== typeof BH || !WH.includes(BH)) return OH(this.source, `unsupported format_version ${JSON.stringify(BH)}; expected one of ${WH.join(", ")}`);
```

#### 4254. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35535` → after: `L36066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36066) · [Before (L35535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35535)

```diff
-         if (!(0, pU.i)(zU)) return WU(this.source, 'missing "animations" object');
+         if (!(0, uH.l)(LH)) return OH(this.source, 'missing "animations" object');
```

#### 4255. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35537` → after: `L36068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36068) · [Before (L35537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35537)

```diff
-         if (yU.length > 128) return WU(this.source, `${yU.length} animations, over the 128 limit`);
+         if (rH.length > 128) return OH(this.source, `${rH.length} animations, over the 128 limit`);
```

#### 4256. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35542-L35543` → after: `L36073-L36074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36073-L36074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36073-L36074) · [Before (L35542-L35543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35542-L35543)

```diff
-           if (!(AU instanceof pU.c)) throw AU;
-           this.oY(cU.b.Error, `${FU}: ${AU.message}`)
+           if (!(hH instanceof uH.d)) throw hH;
+           this.XX(AH.d.Error, `${tH}: ${hH.message}`)
```

#### 4257. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35546` → after: `L36077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36077) · [Before (L35546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35546)

```diff
-           severity: cU.b.Warning,
+           severity: AH.d.Warning,
```

#### 4258. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35556-L35557` → after: `L36087-L36088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36087-L36088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36087-L36088) · [Before (L35556-L35557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35556-L35557)

```diff
-         if (0 === UU.length || UU.length > GU) throw new pU.c("animation names must be 1-128 characters");
-         if (!(0, pU.i)(XU)) throw new pU.c("is not an object");
+         if (0 === HH.length || HH.length > vH) throw new uH.d("animation names must be 1-128 characters");
+         if (!(0, uH.l)(BH)) throw new uH.d("is not an object");
```

#### 4259. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35561-L35563` → after: `L36092-L36094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36092-L36094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36092-L36094) · [Before (L35561-L35563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35561-L35563)

```diff
-         FU.length > 0 && this.oY(cU.b.Warning, `${UU}: ${FU.join(", ")} not supported and ignored`), oU.length > 0 && this.oY(cU.b.Warning, `${UU}: unknown keys ignored: ${oU.slice(0,5).join(", ")}${oU.length>5?", ...":""}`);
-         const DU = null !== (zU = XU.bones) && void 0 !== zU ? zU : {};
-         if (!(0, pU.i)(DU)) throw new pU.c('"bones" is not an object');
+         tH.length > 0 && this.XX(AH.d.Warning, `${HH}: ${tH.join(", ")} not supported and ignored`), zH.length > 0 && this.XX(AH.d.Warning, `${HH}: unknown keys ignored: ${zH.slice(0,5).join(", ")}${zH.length>5?", ...":""}`);
+         const CH = null !== (LH = BH.bones) && void 0 !== LH ? LH : {};
+         if (!(0, uH.l)(CH)) throw new uH.d('"bones" is not an object');
```

#### 4260. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35565` → after: `L36096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36096) · [Before (L35565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35565)

```diff
-         if (EU.length > 128) throw new pU.c(`${EU.length} bones, over the 128 limit`);
+         if (EH.length > 128) throw new uH.d(`${EH.length} bones, over the 128 limit`);
```

#### 4261. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35571-L35572` → after: `L36102-L36103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36102-L36103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36102-L36103) · [Before (L35571-L35572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35571-L35572)

```diff
-           if (0 === cU.length || cU.length > GU) throw new pU.c("bone names must be 1-128 characters");
-           if (NU.has(UU)) throw new pU.c(`bone "${cU}" appears twice (bone names are case-insensitive)`);
+           if (0 === AH.length || AH.length > vH) throw new uH.d("bone names must be 1-128 characters");
+           if (GH.has(HH)) throw new uH.d(`bone "${AH}" appears twice (bone names are case-insensitive)`);
```

#### 4262. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35583` → after: `L36114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36114) · [Before (L35583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35583)

```diff
-           if ("number" !== typeof tU || !Number.isFinite(tU) || tU < 0 || tU > pU.d) throw new pU.c(`animation_length must be a number from 0 to ${pU.d}`);
+           if ("number" !== typeof WH || !Number.isFinite(WH) || WH < 0 || WH > uH.g) throw new uH.d(`animation_length must be a number from 0 to ${uH.g}`);
```

#### 4263. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35587` → after: `L36118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36118) · [Before (L35587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35587)

```diff
-         if ("boolean" !== typeof kU) throw new pU.c("override_previous_animation must be true or false");
+         if ("boolean" !== typeof xH) throw new uH.d("override_previous_animation must be true or false");
```

#### 4264. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35604` → after: `L36135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36135) · [Before (L35604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35604)

```diff
-         if (WU > IU.d) throw new pU.c(`costs ${WU} to play each frame, over the ${IU.d} limit: animate fewer bones or simplify its Molang`);
+         if (OH > YH.f) throw new uH.d(`costs ${OH} to play each frame, over the ${YH.f} limit: animate fewer bones or simplify its Molang`);
```

#### 4265. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35608` → after: `L36139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36139) · [Before (L35608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35608)

```diff
-         if (!(0, pU.i)(XU)) throw new pU.c(`bone "${UU}" is not an object`);
+         if (!(0, uH.l)(BH)) throw new uH.d(`bone "${HH}" is not an object`);
```

#### 4266. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35610-L35612` → after: `L36141-L36143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36141-L36143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36141-L36143) · [Before (L35610-L35612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35610-L35612)

```diff
-           [cU.d.Rotation]: null,
-           [cU.d.Position]: null,
-           [cU.d.Scale]: null
+           [AH.h.Rotation]: null,
+           [AH.h.Position]: null,
+           [AH.h.Scale]: null
```

#### 4267. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35616-L35617` → after: `L36147-L36148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36147-L36148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36147-L36148) · [Before (L35616-L35617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35616-L35617)

```diff
-           if (void 0 === yU) throw new pU.c(`bone "${UU}": "${cU}" is not supported (only rotation, position and scale)`);
-           zU[yU] = this.compileChannel(XU[cU], yU, `${UU}.${cU}`)
+           if (void 0 === rH) throw new uH.d(`bone "${HH}": "${AH}" is not supported (only rotation, position and scale)`);
+           LH[rH] = this.compileChannel(BH[AH], rH, `${HH}.${AH}`)
```

#### 4268. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35621-L35623` → after: `L36152-L36154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36152-L36154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36152-L36154) · [Before (L35621-L35623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35621-L35623)

```diff
-           rotation: zU[cU.d.Rotation],
-           position: zU[cU.d.Position],
-           scale: zU[cU.d.Scale]
+           rotation: LH[AH.h.Rotation],
+           position: LH[AH.h.Position],
+           scale: LH[AH.h.Scale]
```

#### 4269. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35630` → after: `L36161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36161) · [Before (L35630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35630)

```diff
-           dataPoints: (0, pU.k)(UU, XU, zU),
+           dataPoints: (0, uH.m)(HH, BH, LH),
```

#### 4270. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35634` → after: `L36165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36165) · [Before (L35634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35634)

```diff
-         else if ((0, pU.i)(UU) && UU.post) yU.push({
+         else if ((0, uH.l)(HH) && HH.post) rH.push({
```

#### 4271. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35636-L35637` → after: `L36167-L36168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36167-L36168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36167-L36168) · [Before (L35636-L35637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35636-L35637)

```diff
-           dataPoints: (0, pU.k)(UU, XU, zU),
-           catmullRom: (0, pU.p)(UU, zU),
+           dataPoints: (0, uH.m)(HH, BH, LH),
+           catmullRom: (0, uH.q)(HH, LH),
```

#### 4272. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35641` → after: `L36172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36172) · [Before (L35641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35641)

```diff
-           if (!(0, pU.i)(UU)) throw new pU.c(`${zU} must be a value, an array or a map of keyframes`);
+           if (!(0, uH.l)(HH)) throw new uH.d(`${LH} must be a value, an array or a map of keyframes`);
```

#### 4273. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35644` → after: `L36175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36175) · [Before (L35644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35644)

```diff
-             if (cU.length > 2048) throw new pU.c(`${zU} has ${cU.length} keyframes, over the 2048 limit`);
+             if (AH.length > 2048) throw new uH.d(`${LH} has ${AH.length} keyframes, over the 2048 limit`);
```

#### 4274. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35647` → after: `L36178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36178) · [Before (L35647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35647)

```diff
-                 AU = `${zU}@${QU}`;
+                 hH = `${LH}@${SH}`;
```

#### 4275. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35649-L35651` → after: `L36180-L36182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36180-L36182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36180-L36182) · [Before (L35649-L35651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35649-L35651)

```diff
-                 time: (0, pU.o)(QU, zU),
-                 dataPoints: (0, pU.k)(cU, XU, AU),
-                 catmullRom: !!(0, pU.i)(cU) && (0, pU.p)(cU, AU),
+                 time: (0, uH.p)(SH, LH),
+                 dataPoints: (0, uH.m)(AH, BH, hH),
+                 catmullRom: !!(0, uH.l)(AH) && (0, uH.q)(AH, hH),
```

#### 4276. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35657-L35658` → after: `L36188-L36189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36188-L36189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36188-L36189) · [Before (L35657-L35658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35657-L35658)

```diff
-         if (0 === yU.length) throw new pU.c(`${zU} has no keyframes`);
-         if (this.keyframeCount += yU.length, this.keyframeCount > 2e4) throw new pU.c("the file has over 20000 keyframes");
+         if (0 === rH.length) throw new uH.d(`${LH} has no keyframes`);
+         if (this.keyframeCount += rH.length, this.keyframeCount > 2e4) throw new uH.d("the file has over 20000 keyframes");
```

#### 4277. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35661-L35662` → after: `L36192-L36193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36192-L36193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36192-L36193) · [Before (L35661-L35662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35661-L35662)

```diff
-           if (yU[QU].time - yU[QU - 1].time < cU.i) throw new pU.c(`${zU} has two keyframes at ${yU[QU].time}s`);
-         return (0, pU.h)(yU), {
+           if (rH[SH].time - rH[SH - 1].time < AH.l) throw new uH.d(`${LH} has two keyframes at ${rH[SH].time}s`);
+         return (0, uH.i)(rH), {
```

#### 4278. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35688` → after: `L36219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36219) · [Before (L35688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35688)

```diff
-         return null !== (zU = cU.constant) && void 0 !== zU ? zU : cU
+         return null !== (LH = AH.constant) && void 0 !== LH ? LH : AH
```

#### 4279. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35691-L35695` → after: `L36222-L36226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36222-L36226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36222-L36226) · [Before (L35691-L35695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35691-L35695)

```diff
-         if ("number" === typeof UU) return (0, aU.m)(LU(UU, XU));
-         if ("string" !== typeof UU) throw new pU.c(`${XU}: expected a number or a Molang string`);
-         if (this.molangChars += UU.length, this.molangChars > 65536) throw new pU.c("the file has over 65536 characters of Molang");
-         if (!this.variables.reserve(UU)) throw new pU.c(`${XU}: the pack reads too many different variables`);
-         const zU = (0, aU.l)(UU, {
+         if ("number" === typeof HH) return (0, QH.j)(kH(HH, BH));
+         if ("string" !== typeof HH) throw new uH.d(`${BH}: expected a number or a Molang string`);
+         if (this.molangChars += HH.length, this.molangChars > 65536) throw new uH.d("the file has over 65536 characters of Molang");
+         if (!this.variables.reserve(HH)) throw new uH.d(`${BH}: the pack reads too many different variables`);
+         const LH = (0, QH.i)(HH, {
```

#### 4280. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35698-L35699` → after: `L36229-L36230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36229-L36230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36229-L36230) · [Before (L35698-L35699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35698-L35699)

```diff
-         if (!zU.ok) throw new pU.c(`${XU}: ${zU.error}`);
-         return null === zU.value.constant ? zU.value : (0, aU.m)(LU(zU.value.constant, XU))
+         if (!LH.ok) throw new uH.d(`${BH}: ${LH.error}`);
+         return null === LH.value.constant ? LH.value : (0, QH.j)(kH(LH.value.constant, BH))
```

#### 4281. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35704` → after: `L36235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36235) · [Before (L35704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35704)

```diff
-         if (null === zU || zU < 0 || zU > pU.d) throw new pU.c(`${XU} must be a constant number of seconds from 0 to ${pU.d}`);
+         if (null === LH || LH < 0 || LH > uH.g) throw new uH.d(`${BH} must be a constant number of seconds from 0 to ${uH.g}`);
```

#### 4282. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35717` → after: `L36248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36248) · [Before (L35717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35717)

```diff
-       if (!Number.isFinite(UU) || Math.abs(UU) > kU) throw new pU.c(`${XU}: ${UU} is not a finite number within \xb11000000`);
+       if (!Number.isFinite(HH) || Math.abs(HH) > xH) throw new uH.d(`${BH}: ${HH} is not a finite number within \xb11000000`);
```

#### 4283. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35722-L35725` → after: `L36253-L36256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36253-L36256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36253-L36256) · [Before (L35722-L35725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35722-L35725)

```diff
-       if (void 0 === UU || !1 === UU) return cU.g.Once;
-       if (!0 === UU) return cU.g.Loop;
-       if ("hold_on_last_frame" === UU) return cU.g.Hold;
-       throw new pU.c(`loop ${JSON.stringify(UU)} is not supported (true, false or "hold_on_last_frame")`)
+       if (void 0 === HH || !1 === HH) return AH.j.Once;
+       if (!0 === HH) return AH.j.Loop;
+       if ("hold_on_last_frame" === HH) return AH.j.Hold;
+       throw new uH.d(`loop ${JSON.stringify(HH)} is not supported (true, false or "hold_on_last_frame")`)
```

#### 4284. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35739` → after: `L36270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36270) · [Before (L35739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35739)

```diff
-                 severity: cU.b.Error,
+                 severity: AH.d.Error,
```

#### 4285. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35741` → after: `L36272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36272) · [Before (L35741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35741)

```diff
-                 message: `${yU.id} is already defined by another file; the first definition is kept`
+                 message: `${rH.id} is already defined by another file; the first definition is kept`
```

#### 4286. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35753` → after: `L36284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36284) · [Before (L35753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35753)

```diff
-         return null !== (XU = null !== (zU = this.byId.get(UU)) && void 0 !== zU ? zU : this.byShortName.get(UU)) && void 0 !== XU ? XU : null
+         return null !== (BH = null !== (LH = this.byId.get(HH)) && void 0 !== LH ? LH : this.byShortName.get(HH)) && void 0 !== BH ? BH : null
```

#### 4287. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35776` → after: `L36307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36307) · [Before (L35776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35776)

```diff
-   38326: (UU, XU, zU) => {
+   38439: (HH, BH, LH) => {
```

#### 4288. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35778-L35780` → after: `L36309-L36311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36309-L36311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36309-L36311) · [Before (L35778-L35780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35778-L35780)

```diff
-       b: () => EU,
-       f: () => QU,
-       j: () => AU
+       d: () => EH,
+       g: () => SH,
+       k: () => hH
```

#### 4289. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35782` → after: `L36313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36313) · [Before (L35782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35782)

```diff
-     var cU = zU(38292);
+     var AH = LH(38408);
```

#### 4290. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35791` → after: `L36322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36322) · [Before (L35791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35791)

```diff
-         case cU.g.Once:
+         case AH.j.Once:
```

#### 4291. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35793` → after: `L36324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36324) · [Before (L35793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35793)

```diff
-         case cU.g.Hold:
+         case AH.j.Hold:
```

#### 4292. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35795` → after: `L36326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36326) · [Before (L35795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35795)

```diff
-         case cU.g.Loop: {
+         case AH.j.Loop: {
```

#### 4293. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35818` → after: `L36349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36349) · [Before (L35818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35818)

```diff
-       if (null !== NU && Math.abs(NU.time - XU) < cU.i ? pU = NU : null !== IU && Math.abs(IU.time - XU) < cU.i ? pU = IU : null === NU || !NU.step && null !== IU ? null !== IU && null === NU && (pU = IU) : pU = NU, null !== pU) return void DU(pU, XU, yU, QU);
+       if (null !== GH && Math.abs(GH.time - BH) < AH.l ? uH = GH : null !== YH && Math.abs(YH.time - BH) < AH.l ? uH = YH : null === GH || !GH.step && null !== YH ? null !== YH && null === GH && (uH = YH) : uH = GH, null !== uH) return void CH(uH, BH, rH, SH);
```

#### 4294. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35842` → after: `L36373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36373) · [Before (L35842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35842)

```diff
-           AU = UU[0 === yU ? yU : yU - 1],
+           hH = HH[0 === rH ? rH : rH - 1],
```

#### 4295. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35856` → after: `L36387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36387) · [Before (L35856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35856)

```diff
-       }(UU.time > XU || Math.abs(UU.time - XU) < cU.i ? UU.pre : UU.post, zU, yU)
+       }(HH.time > BH || Math.abs(HH.time - BH) < AH.l ? HH.pre : HH.post, LH, rH)
```

#### 4296. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35860` → after: `L36391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36391) · [Before (L35860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35860)

```diff
-       return "number" === typeof UU ? UU : UU.evaluate(XU)
+       return "number" === typeof HH ? HH : HH.evaluate(BH)
```

#### 4297. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35863` → after: `L36394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36394) · [Before (L35863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35863)

```diff
-   38292: (UU, XU, zU) => {
+   38408: (HH, BH, LH) => {
```

#### 4298. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35867-L35868` → after: `L36397-L36399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36397-L36399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36397-L36399) · [Before (L35867-L35868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35867-L35868)

```diff
-       g: () => QU,
-       i: () => cU
+       h: () => rH,
+       j: () => SH,
+       l: () => AH
```

#### 4299. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35881` → after: `L36412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36412) · [Before (L35881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35881)

```diff
-   38308: (UU, XU, zU) => {
+   38424: (HH, BH, LH) => {
```

#### 4300. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35883-L35884` → after: `L36414-L36415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36414-L36415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36414-L36415) · [Before (L35883-L35884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35883-L35884)

```diff
-       b: () => yU,
-       d: () => cU,
+       c: () => rH,
+       f: () => AH,
```

#### 4301. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35901` → after: `L36432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36432) · [Before (L35901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35901)

```diff
-         XU = pU(UU.blendWeight) + (null !== (zU = null === (cU = UU.animTimeUpdate) || void 0 === cU ? void 0 : cU.cost) && void 0 !== zU ? zU : 0);
+         BH = uH(HH.blendWeight) + (null !== (LH = null === (AH = HH.animTimeUpdate) || void 0 === AH ? void 0 : AH.cost) && void 0 !== LH ? LH : 0);
```

#### 4302. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35915` → after: `L36446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36446) · [Before (L35915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35915)

```diff
-       return zU && cU > 1 ? AU + yU + (cU >= 3 ? oU : cU) * XU : QU + yU + Math.min(FU, cU) * XU
+       return LH && AH > 1 ? hH + rH + (AH >= 3 ? zH : AH) * BH : SH + rH + Math.min(tH, AH) * BH
```

#### 4303. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35946` → after: `L36477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36477) · [Before (L35946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35946)

```diff
-   38313: (UU, XU, zU) => {
+   38431: (HH, BH, LH) => {
```

#### 4304. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35950-L35952` → after: `L36483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36483) · [Before (L35950-L35952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35950-L35952)

```diff
-       j: () => yU,
-       k: () => DU,
-       o: () => oU
+       h: () => zH
```

#### 4305. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35954` → after: `L36485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36485) · [Before (L35954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35954)

```diff
-     var cU = zU(38294);
+     var AH = LH(38413);
```

#### 4306. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35976` → after: `L36507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36507) · [Before (L35976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35976)

```diff
-       oU[cU.i.LifeTime] = zU, oU[cU.i.DeltaTime] = QU, oU[cU.i.GroundSpeed] = XU[yU.GroundSpeed], oU[cU.i.ModifiedMoveSpeed] = XU[yU.GroundSpeed], oU[cU.i.ModifiedDistanceMoved] = AU, oU[cU.i.VerticalSpeed] = XU[yU.VerticalSpeed], oU[cU.i.IsOnGround] = XU[yU.OnGround], oU[cU.i.Is … [truncated]
+       zH[AH.h.LifeTime] = LH, zH[AH.h.DeltaTime] = SH, zH[AH.h.GroundSpeed] = BH[rH.GroundSpeed], zH[AH.h.ModifiedMoveSpeed] = BH[rH.GroundSpeed], zH[AH.h.ModifiedDistanceMoved] = hH, zH[AH.h.VerticalSpeed] = BH[rH.VerticalSpeed], zH[AH.h.IsOnGround] = BH[rH.OnGround], zH[AH.h.Is … [truncated]
```

#### 4307. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35985` → after: `L36516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36516) · [Before (L35985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35985)

```diff
-   37865: (UU, XU, zU) => {
+   38017: (HH, BH, LH) => {
```

#### 4308. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L35989-L35992` → after: `L36519-L36523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36519-L36523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36519-L36523) · [Before (L35989-L35992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L35989-L35992)

```diff
-       f: () => EU,
-       g: () => AU,
-       i: () => QU,
-       m: () => YU
+       h: () => CH,
+       j: () => EH,
+       l: () => hH,
+       m: () => SH,
+       o: () => XH
```

#### 4309. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36046` → after: `L36577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36577) · [Before (L36046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36046)

```diff
-   38272: (UU, XU, zU) => {
+   38390: (HH, BH, LH) => {
```

#### 4310. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36048-L36050` → after: `L36579-L36582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36579-L36582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36579-L36582) · [Before (L36048-L36050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36048-L36050)

```diff
-       d: () => uU,
-       f: () => rU,
-       i: () => HU,
+       e: () => eH,
+       g: () => cH,
+       h: () => NH,
+       j: () => gH,
```

#### 4311. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36052` → after: `L36584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36584) · [Before (L36052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36052)

```diff
-       o: () => JU,
+       m: () => JH,
```

#### 4312. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36054-L36055` → after: `L36586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36586) · [Before (L36054-L36055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36054-L36055)

```diff
-       t: () => nU,
-       u: () => xU
+       q: () => dH
```

#### 4313. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36057-L36061` → after: `L36588-L36592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36588-L36592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36588-L36592) · [Before (L36057-L36061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36057-L36061)

```diff
-     var cU = zU(638),
-       yU = zU(633),
-       QU = zU(37780),
-       AU = zU(38277),
-       FU = zU(38286);
+     var AH = LH(614),
+       rH = LH(609),
+       SH = LH(37928),
+       hH = LH(38396),
+       tH = LH(38399);
```

#### 4314. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36076-L36078` → after: `L36607-L36609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36607-L36609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36607-L36609) · [Before (L36076-L36078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36076-L36078)

```diff
-       if (void 0 === UU || "add" === UU) return AU.g.Add;
-       if ("override" === UU) return AU.g.Override;
-       throw new oU(`${XU} must be "add" or "override"`)
+       if (void 0 === HH || "add" === HH) return hH.i.Add;
+       if ("override" === HH) return hH.i.Override;
+       throw new zH(`${BH} must be "add" or "override"`)
```

#### 4315. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36083` → after: `L36614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36614) · [Before (L36083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36083)

```diff
-       if (!Array.isArray(UU) || 0 === UU.length || UU.length > 128) throw new oU(`${XU} must list 1-128 bone names`);
+       if (!Array.isArray(HH) || 0 === HH.length || HH.length > 128) throw new zH(`${BH} must list 1-128 bone names`);
```

#### 4316. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36085` → after: `L36616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36616) · [Before (L36085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36085)

```diff
-         if ("string" !== typeof zU || 0 === zU.length || zU.length > 128) throw new oU(`${XU} must list bone names`);
+         if ("string" !== typeof LH || 0 === LH.length || LH.length > 128) throw new zH(`${BH} must list bone names`);
```

#### 4317. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36091` → after: `L36622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36622) · [Before (L36091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36091)

```diff
-       if ("number" !== typeof UU || !Number.isFinite(UU) || UU < zU || UU > cU) throw new oU(`${yU} must be a number from ${zU} to ${cU}`);
+       if ("number" !== typeof HH || !Number.isFinite(HH) || HH < LH || HH > AH) throw new zH(`${rH} must be a number from ${LH} to ${AH}`);
```

#### 4318. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36096` → after: `L36627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36627) · [Before (L36096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36096)

```diff
-       if (!(0, FU.i)(UU)) throw new oU(`${XU} must be an object`);
+       if (!(0, tH.l)(HH)) throw new zH(`${BH} must be an object`);
```

#### 4319. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36102` → after: `L36633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36633) · [Before (L36102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36102)

```diff
-         if (!XU.includes(cU)) throw new oU(`${zU}: unknown key "${cU}"`)
+         if (!BH.includes(AH)) throw new zH(`${LH}: unknown key "${AH}"`)
```

#### 4320. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36104-L36107` → after: `L36635-L36638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36635-L36638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36635-L36638) · [Before (L36104-L36107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36104-L36107)

```diff
-     var tU = zU(38302),
-       gU = zU(38308),
-       kU = zU(38292),
-       GU = zU(38313);
+     var WH = LH(38420),
+       MH = LH(38424),
+       xH = LH(38408),
+       vH = LH(38431);
```

#### 4321. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36117` → after: `L36648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36648) · [Before (L36117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36117)

```diff
-           severity: kU.b.Error,
+           severity: xH.d.Error,
```

#### 4322. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36122` → after: `L36653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36653) · [Before (L36122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36122)

```diff
-       if (UU.length > BU) return cU(`file is ${UU.length} characters, over the ${BU} limit`);
+       if (HH.length > PH) return AH(`file is ${HH.length} characters, over the ${PH} limit`);
```

#### 4323. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36127` → after: `L36658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36658) · [Before (L36127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36127)

```diff
-         return cU(`invalid JSON: ${QU.message}`)
+         return AH(`invalid JSON: ${SH.message}`)
```

#### 4324. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36144` → after: `L36675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36675) · [Before (L36144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36144)

```diff
-         return (0, FU.i)(XU) && "string" === typeof XU.target ? XU.target : null
+         return (0, tH.l)(BH) && "string" === typeof BH.target ? BH.target : null
```

#### 4325. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36152` → after: `L36683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36683) · [Before (L36152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36152)

```diff
-         for (const [zU, cU] of GU.f) this.inputIndexByName.set(zU, cU)
+         for (const [LH, AH] of vH.c) this.inputIndexByName.set(LH, AH)
```

#### 4326. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36156` → after: `L36687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36687) · [Before (L36156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36156)

```diff
-         if (aU(XU, ["format_version", "target", "inputs", "variables", "layers", "actions"], "the file"), XU.format_version !== AU.e) throw new oU(`format_version must be "${AU.e}"`);
+         if (QH(BH, ["format_version", "target", "inputs", "variables", "layers", "actions"], "the file"), BH.format_version !== hH.c) throw new zH(`format_version must be "${hH.c}"`);
```

#### 4327. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36168-L36169` → after: `L36699-L36700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36699-L36700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36699-L36700) · [Before (L36168-L36169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36168-L36169)

```diff
-             const zU = this.compileLayer(UU, `layers[${XU}]`);
-             if (DU.has(zU.name)) throw new oU(`two layers are named "${zU.name}"`);
+             const LH = this.compileLayer(HH, `layers[${BH}]`);
+             if (CH.has(LH.name)) throw new zH(`two layers are named "${LH.name}"`);
```

#### 4328. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36183` → after: `L36714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36714) · [Before (L36183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36183)

```diff
-         if (NU > gU.b) throw new oU(`its layers cost ${NU} to play each frame, over the ${gU.b} limit: use fewer layers or lighter clips`);
+         if (GH > MH.c) throw new zH(`its layers cost ${GH} to play each frame, over the ${MH.c} limit: use fewer layers or lighter clips`);
```

#### 4329. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36191-L36192` → after: `L36722-L36723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36722-L36723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36722-L36723) · [Before (L36191-L36192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36191-L36192)

```diff
-           const cU = `inputs.${UU}`;
-           if (!PU.test(UU) || this.inputIndexByName.has(UU)) throw new oU(`${cU}: input names must be identifiers distinct from the engine inputs`);
+           const AH = `inputs.${HH}`;
+           if (!VH.test(HH) || this.inputIndexByName.has(HH)) throw new zH(`${AH}: input names must be identifiers distinct from the engine inputs`);
```

#### 4330. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36195` → after: `L36726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36726) · [Before (L36195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36195)

```diff
-           const QU = IU(yU.rise, 0, 0, 1e3, `${cU}.rise`),
+           const SH = YH(rH.rise, 0, 0, 1e3, `${AH}.rise`),
```

#### 4331. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36198-L36203` → after: `L36729-L36734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36729-L36734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36729-L36734) · [Before (L36198-L36203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36198-L36203)

```diff
-               from: this.engineInput(yU.from, `${cU}.from`),
-               gate: void 0 === yU.gate ? -1 : this.engineInput(yU.gate, `${cU}.gate`),
-               scale: IU(yU.scale, 1, -1e6, ZU, `${cU}.scale`),
-               offset: IU(yU.offset, 0, -1e6, ZU, `${cU}.offset`),
-               min: IU(yU.min, -1e6, -1e6, ZU, `${cU}.min`),
-               max: IU(yU.max, ZU, -1e6, ZU, `${cU}.max`),
+               from: this.engineInput(rH.from, `${AH}.from`),
+               gate: void 0 === rH.gate ? -1 : this.engineInput(rH.gate, `${AH}.gate`),
+               scale: YH(rH.scale, 1, -1e6, TH, `${AH}.scale`),
+               offset: YH(rH.offset, 0, -1e6, TH, `${AH}.offset`),
+               min: YH(rH.min, -1e6, -1e6, TH, `${AH}.min`),
+               max: YH(rH.max, TH, -1e6, TH, `${AH}.max`),
```

#### 4332. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36205` → after: `L36736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36736) · [Before (L36205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36205)

```diff
-               fall: IU(yU.fall, QU, 0, 1e3, `${cU}.fall`)
+               fall: YH(rH.fall, SH, 0, 1e3, `${AH}.fall`)
```

#### 4333. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36207-L36208` → after: `L36738-L36739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36738-L36739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36738-L36739) · [Before (L36207-L36208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36207-L36208)

```diff
-           if (AU.min > AU.max) throw new oU(`${cU}: min is above max`);
-           return this.inputIndexByName.set(UU, GU.j.Count + zU), AU
+           if (hH.min > hH.max) throw new zH(`${AH}: min is above max`);
+           return this.inputIndexByName.set(HH, vH.d.Count + LH), hH
```

#### 4334. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36219` → after: `L36750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36750) · [Before (L36219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36219)

```diff
-           if (!PU.test(AU)) throw new oU(`variables.${AU}: variable names must be identifiers`);
+           if (!VH.test(hH)) throw new zH(`variables.${hH}: variable names must be identifiers`);
```

#### 4335. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36221` → after: `L36752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36752) · [Before (L36221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36221)

```diff
-           if (QU.has(UU)) throw new oU(`variables.${AU}: another variable has this name in a different case`);
+           if (SH.has(HH)) throw new zH(`variables.${hH}: another variable has this name in a different case`);
```

#### 4336. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36227` → after: `L36758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36758) · [Before (L36227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36227)

```diff
-               value: IU(zU, 0, -1e6, ZU, `variables.${AU}`)
+               value: YH(LH, 0, -1e6, TH, `variables.${hH}`)
```

#### 4337. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36232` → after: `L36763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36763) · [Before (L36232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36232)

```diff
-           if (void 0 === FU) throw new oU(`variables.${AU} must be a number or name an engine input or one of the binding's inputs`);
+           if (void 0 === tH) throw new zH(`variables.${hH} must be a number or name an engine input or one of the binding's inputs`);
```

#### 4338. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36247-L36248` → after: `L36778-L36779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36778-L36779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36778-L36779) · [Before (L36247-L36248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36247-L36248)

```diff
-         if ("string" !== typeof cU || !PU.test(cU)) throw new oU(`${XU}.name must be an identifier`);
-         XU = `layer "${cU}"`;
+         if ("string" !== typeof AH || !VH.test(AH)) throw new zH(`${BH}.name must be an identifier`);
+         BH = `layer "${AH}"`;
```

#### 4339. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36253-L36254` → after: `L36784-L36785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36784-L36785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36784-L36785) · [Before (L36253-L36254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36253-L36254)

```diff
-           if (RU.some((UU => void 0 !== zU[UU]))) throw new oU(`${XU}: use either "states" or a single "clip"/"blend", not both`);
-           this.compileStates(pU(zU.states, `${XU}.states`), XU, yU), QU = null !== (FU = yU.get(AU.f)) && void 0 !== FU ? FU : null, yU.delete(AU.f)
+           if (UH.some((HH => void 0 !== LH[HH]))) throw new zH(`${BH}: use either "states" or a single "clip"/"blend", not both`);
+           this.compileStates(uH(LH.states, `${BH}.states`), BH, rH), SH = null !== (tH = rH.get(hH.g)) && void 0 !== tH ? tH : null, rH.delete(hH.g)
```

#### 4340. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36261-L36264` → after: `L36792-L36795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36792-L36795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36792-L36795) · [Before (L36261-L36264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36261-L36264)

```diff
-           mode: YU(zU.mode, `${XU}.mode`),
-           bones: NU(zU.bones, `${XU}.bones`),
-           weight: void 0 === zU.weight ? DU(1) : this.valueSource(zU.weight, `${XU}.weight`),
-           transitionSeconds: IU(zU.transition, .2, 0, 10, `${XU}.transition`),
+           mode: XH(LH.mode, `${BH}.mode`),
+           bones: GH(LH.bones, `${BH}.bones`),
+           weight: void 0 === LH.weight ? CH(1) : this.valueSource(LH.weight, `${BH}.weight`),
+           transitionSeconds: YH(LH.transition, .2, 0, 10, `${BH}.transition`),
```

#### 4341. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36271` → after: `L36802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36802) · [Before (L36271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36271)

```diff
-         if (0 === cU.length || cU.length > 64) throw new oU(`${XU}.states must list 1-64 states`);
+         if (0 === AH.length || AH.length > 64) throw new zH(`${BH}.states must list 1-64 states`);
```

#### 4342. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36273` → after: `L36804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36804) · [Before (L36273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36273)

```diff
-           if (FU !== AU.f && !this.options.stateNames.has(FU)) throw new oU(`${XU}: "${FU}" is not a state of this target`);
+           if (tH !== hH.g && !this.options.stateNames.has(tH)) throw new zH(`${BH}: "${tH}" is not a state of this target`);
```

#### 4343. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36280-L36281` → after: `L36811-L36812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36811-L36812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36811-L36812) · [Before (L36280-L36281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36280-L36281)

```diff
-               if (!Object.prototype.hasOwnProperty.call(UU, FU)) throw new oU(`${XU}: "${cU}" shares "${FU}", which the layer does not define`);
-               if (yU.has(cU)) throw new oU(`${XU}: "${cU}" shares itself through a cycle`);
+               if (!Object.prototype.hasOwnProperty.call(HH, tH)) throw new zH(`${BH}: "${AH}" shares "${tH}", which the layer does not define`);
+               if (rH.has(AH)) throw new zH(`${BH}: "${AH}" shares itself through a cycle`);
```

#### 4344. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36286` → after: `L36817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36817) · [Before (L36286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36286)

```diff
-             const DU = this.compileState(FU, cU, `${XU} state "${cU}"`);
+             const CH = this.compileState(tH, AH, `${BH} state "${AH}"`);
```

#### 4345. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36294-L36295` → after: `L36825-L36826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36825-L36826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36825-L36826) · [Before (L36294-L36295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36294-L36295)

```diff
-         const yU = void 0 === cU.rate ? DU(1) : this.valueSource(cU.rate, `${zU}.rate`);
-         if (yU.input < 0 && yU.constant < 0) throw new oU(`${zU}.rate must not be negative`);
+         const rH = void 0 === AH.rate ? CH(1) : this.valueSource(AH.rate, `${LH}.rate`);
+         if (rH.input < 0 && rH.constant < 0) throw new zH(`${LH}.rate must not be negative`);
```

#### 4346. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36300` → after: `L36831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36831) · [Before (L36300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36300)

```diff
-             if (cU > 32 || Math.abs(zU - 1 / cU) > 5e-4) throw new oU(`${XU} must divide a cycle evenly into at most 32 parts (1, 0.5, 0.333, 0.25, ...)`);
+             if (AH > 32 || Math.abs(LH - 1 / AH) > 5e-4) throw new zH(`${BH} must divide a cycle evenly into at most 32 parts (1, 0.5, 0.333, 0.25, ...)`);
```

#### 4347. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36302` → after: `L36833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36833) · [Before (L36302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36302)

```diff
-           }(cU.rest, `${zU}.rest`),
+           }(AH.rest, `${LH}.rest`),
```

#### 4348. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36304` → after: `L36835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36835) · [Before (L36304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36304)

```diff
-             if (QU > 0 && !UU.some((UU => UU.strideBlocks > 0))) throw new oU(`${zU}.rest needs a clip with a stride, as only a gait comes to rest`);
+             if (SH > 0 && !HH.some((HH => HH.strideBlocks > 0))) throw new zH(`${LH}.rest needs a clip with a stride, as only a gait comes to rest`);
```

#### 4349. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36308` → after: `L36839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36839) · [Before (L36308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36308)

```diff
-           if (void 0 !== cU.blend) throw new oU(`${zU}: use either "clip" or "blend"`);
+           if (void 0 !== AH.blend) throw new zH(`${LH}: use either "clip" or "blend"`);
```

#### 4350. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36312` → after: `L36843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36843) · [Before (L36312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36312)

```diff
-               clip: this.clip(cU.clip, `${zU}.clip`),
+               clip: this.clip(AH.clip, `${LH}.clip`),
```

#### 4351. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36314` → after: `L36845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36845) · [Before (L36314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36314)

```diff
-               strideBlocks: EU(cU.stride, `${zU}.stride`)
+               strideBlocks: EH(AH.stride, `${LH}.stride`)
```

#### 4352. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L36321-L36324` → after: `L36852-L36855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R36852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L36852-L36855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L36852-L36855) · [Before (L36321-L36324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L36321-L36324)

```diff
-         if (void 0 !== cU.stride) throw new oU(`${zU}: give each blend clip its own stride`);
-         if (void 0 === cU.blend) throw new oU(`${zU}: needs a "clip" or a "blend"`);
-         const FU = pU(cU.blend, `${zU}.blend`);
-         aU(FU, ["input", "clips"], `${zU}.blend`);
+         if (void 0 !== AH.stride) throw new zH(`${LH}: give each blend clip its own stride`);
+         if (void 0 === AH.blend) throw new zH(`${LH}: needs a "clip" or a "blend"`);
+         const tH = uH(AH.blend, `${LH}.blend`);
+         QH(tH, ["input", "clips"], `${LH}.blend`);
```
