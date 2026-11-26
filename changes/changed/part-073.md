# Changed — Bundle Modifications Report (Part 073 / 115)

- **Updated at**: `2026-11-27T00:54 JST`
- **Part**: `73 / 115` (**387** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 072](part-072.md) · [Part 074 →](part-074.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (158 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001)

#### 111. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1713` → after: `L1715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1715) · [Before (L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1713)

```diff
-       } = (0, YU.I)(), QU = cU.locatorEntryId, AU = XU.locators.locatorEntries.find((UU => UU.locatorEntryArmed && UU !== cU));
+       } = (0, XH.B)(), SH = AH.locatorEntryId, hH = BH.locators.locatorEntries.find((HH => HH.locatorEntryArmed && HH !== AH));
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1716` → after: `L1718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1718) · [Before (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1716)

```diff
-         children: [cU.locatorEntryArmed && (0, WU.jsx)(pU.O, {
+         children: [AH.locatorEntryArmed && (0, OH.jsx)(uH.W, {
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1721-L1722` → after: `L1723-L1724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1723-L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1723-L1724) · [Before (L1721-L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1721-L1722)

```diff
-           children: yU(`${dU}:locatorDisarm`)
-         }), cU.locatorEntryOwned && !cU.locatorEntryArmed && (0, WU.jsx)(pU.f, {
+           children: rH(`${bH}:locatorDisarm`)
+         }), AH.locatorEntryOwned && !AH.locatorEntryArmed && (0, OH.jsx)(uH.i, {
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1727` → after: `L1729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1729) · [Before (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1727)

```diff
-           children: yU(`${dU}:locatorArm`)
+           children: rH(`${bH}:locatorArm`)
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1733` → after: `L1735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1735) · [Before (L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1733)

```diff
-           }), (0, WU.jsx)(pU.l, {
+           }), (0, OH.jsx)(uH.u, {
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1738` → after: `L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1740) · [Before (L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1738)

```diff
-             children: yU(`${dU}:locatorBuy`)
+             children: rH(`${bH}:locatorBuy`)
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1742` → after: `L1744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1744) · [Before (L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1742)

```diff
-           children: yU(`${dU}:locatorReplacesHint`, {
+           children: rH(`${bH}:locatorReplacesHint`, {
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1769` → after: `L1771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1771) · [Before (L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1769)

```diff
-       } = (0, YU.I)(), QU = KX[cU.locatorEntryDifficulty];
+       } = (0, XH.B)(), SH = JB[AH.locatorEntryDifficulty];
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1780` → after: `L1782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1782) · [Before (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1780)

```diff
-             name: yU(`${dU}:locatorName`, {
+             name: rH(`${bH}:locatorName`, {
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1788` → after: `L1790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1790) · [Before (L1788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1788)

```diff
-             children: yU(cU.locatorEntryArmed ? `${dU}:locatorFlavourArmed` : jX[cU.locatorEntryStanding])
+             children: rH(AH.locatorEntryArmed ? `${bH}:locatorFlavourArmed` : sB[AH.locatorEntryStanding])
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1794` → after: `L1796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1796) · [Before (L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1794)

```diff
-             children: yU(`${dU}:locatorUsage`)
+             children: rH(`${bH}:locatorUsage`)
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1808` → after: `L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1810) · [Before (L1808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1808)

```diff
-       const zU = (0, EU.j)(xX, XU.getSnapshot()),
+       const LH = (0, EH.e)(dB, BH.getSnapshot()),
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1811` → after: `L1813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1813) · [Before (L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1811)

```diff
-         } = (0, YU.I)(),
+         } = (0, XH.B)(),
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1819` → after: `L1821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1821) · [Before (L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1819)

```diff
-         title: cU(`${dU}:locatorTitle`),
+         title: AH(`${bH}:locatorTitle`),
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1829-L1830` → after: `L1831-L1832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1831-L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1831-L1832) · [Before (L1829-L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1829-L1830)

```diff
-             children: cU(`${dU}:locatorKeeperName`)
-           }), null !== AU && cU(`${dU}:${AU.locatorNoticeKey}`, {
+             children: AH(`${bH}:locatorKeeperName`)
+           }), null !== hH && AH(`${bH}:${hH.locatorNoticeKey}`, {
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1881` → after: `L1883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1883) · [Before (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1881)

```diff
-     var Qz = zU(39374);
+     var SL = LH(39461);
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1885` → after: `L1887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1887) · [Before (L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1885)

```diff
-         this.sendCommand = UU, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new Qz.d({
+         this.sendCommand = HH, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new SL.c({
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1918` → after: `L1920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1920) · [Before (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1918)

```diff
-     var Fz = zU(39353);
+     var tL = LH(39451);
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1937` → after: `L1939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1939) · [Before (L1937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1937)

```diff
-           (0, FU.r)()
+           (0, tH.t)()
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1940` → after: `L1942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1942) · [Before (L1940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1940)

```diff
-           UU && (0, FU.l)()
+           HH && (0, tH.j)()
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1946` → after: `L1948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1948) · [Before (L1946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1946)

```diff
-           AU.k.UY(NX, UU, !0)
+           hH.k.AX(GB, HH, !0)
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1949` → after: `L1951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1951) · [Before (L1949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1949)

```diff
-           AU.k.UY(HU, UU, !0)
+           hH.k.AX(NH, HH, !0)
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1952` → after: `L1954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1954) · [Before (L1952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1952)

```diff
-           AU.k.UY(xX, UU, !0)
+           hH.k.AX(dB, HH, !0)
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1957` → after: `L1959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1959) · [Before (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1957)

```diff
-           UU = XU, zU = (0, FU.u)(null, {
+           HH = BH, LH = (0, tH.v)(null, {
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1966` → after: `L1968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1968) · [Before (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1966)

```diff
-           }), oU = (0, QU.c)(Dz)
+           }), zH = (0, SH.f)(CL)
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1969` → after: `L1971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1971) · [Before (L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1969)

```diff
-           "containmentLoadout" === UU ? IU.PY(XU) : "containmentLoadoutClose" === UU ? IU.isOpen() && (IU.close(), (0, FU.j)()) : "containmentCodex" === UU ? pU.PY(XU) : "containmentLocator" === UU && aU.PY(XU)
+           "containmentLoadout" === HH ? YH.kX(BH) : "containmentLoadoutClose" === HH ? YH.isOpen() && (YH.close(), (0, tH.g)()) : "containmentCodex" === HH ? uH.kX(BH) : "containmentLocator" === HH && QH.kX(BH)
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1971-L1972` → after: `L1973-L1974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1973-L1974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1973-L1974) · [Before (L1971-L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1971-L1972)

```diff
-         LY: () => {
-           XU || yU.e.get("loadingOverlayVisible") || (XU = !0, UU.sendCommand("containmentEntered"))
+         IX: () => {
+           BH || rH.c.get("loadingOverlayVisible") || (BH = !0, HH.sendCommand("containmentEntered"))
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1983` → after: `L1985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1985) · [Before (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1983)

```diff
-   40164: (UU, XU, zU) => {
+   40273: (HH, BH, LH) => {
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1986` → after: `L1988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1988) · [Before (L1986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1986)

```diff
-   40173: (UU, XU, zU) => {
+   40279: (HH, BH, LH) => {
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1989` → after: `L1991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1991) · [Before (L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1989)

```diff
-   40177: (UU, XU, zU) => {
+   40285: (HH, BH, LH) => {
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1992` → after: `L1994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1994) · [Before (L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1992)

```diff
-   40184: (UU, XU, zU) => {
+   40290: (HH, BH, LH) => {
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1995` → after: `L1997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1997) · [Before (L1995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1995)

```diff
-   40190: (UU, XU, zU) => {
+   40296: (HH, BH, LH) => {
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1998` → after: `L2000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2000) · [Before (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1998)

```diff
-   40193: (UU, XU, zU) => {
+   40304: (HH, BH, LH) => {
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2001` → after: `L2003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2003) · [Before (L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2001)

```diff
-   40196: (UU, XU, zU) => {
+   40308: (HH, BH, LH) => {
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2004` → after: `L2006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2006) · [Before (L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2004)

```diff
-   40202: (UU, XU, zU) => {
+   40312: (HH, BH, LH) => {
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2007` → after: `L2009-L2015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2009-L2015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2009-L2015) · [Before (L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2007)

```diff
-   40204: (UU, XU, zU) => {
+   40318: (HH, BH, LH) => {
+     HH.exports = LH.p + "static/media/doom-warlord-uncaught.b25b11d54326d386a901.webp"
+   },
+   40324: (HH, BH, LH) => {
+     HH.exports = LH.p + "static/media/doom-warlord.d9ef07d4167ff931b0f0.webp"
+   },
+   40331: (HH, BH, LH) => {
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2010` → after: `L2018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2018) · [Before (L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2010)

```diff
-   40211: (UU, XU, zU) => {
+   40337: (HH, BH, LH) => {
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2013` → after: `L2021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2021) · [Before (L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2013)

```diff
-   40218: (UU, XU, zU) => {
+   40345: (HH, BH, LH) => {
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2016` → after: `L2024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2024) · [Before (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2016)

```diff
-   40223: (UU, XU, zU) => {
+   40352: (HH, BH, LH) => {
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2019` → after: `L2027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2027) · [Before (L2019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2019)

```diff
-   40226: (UU, XU, zU) => {
+   40360: (HH, BH, LH) => {
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2022` → after: `L2030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2030) · [Before (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2022)

```diff
-   40235: (UU, XU, zU) => {
+   40365: (HH, BH, LH) => {
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2025` → after: `L2033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2033) · [Before (L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2025)

```diff
-   40237: (UU, XU, zU) => {
+   40373: (HH, BH, LH) => {
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2028` → after: `L2036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2036) · [Before (L2028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2028)

```diff
-   40241: (UU, XU, zU) => {
+   40377: (HH, BH, LH) => {
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2031` → after: `L2039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2039) · [Before (L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2031)

```diff
-   40243: (UU, XU, zU) => {
+   40383: (HH, BH, LH) => {
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2034` → after: `L2042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2042) · [Before (L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2034)

```diff
-   40245: (UU, XU, zU) => {
+   40388: (HH, BH, LH) => {
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2037` → after: `L2045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2045) · [Before (L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2037)

```diff
-   40252: (UU, XU, zU) => {
+   40392: (HH, BH, LH) => {
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2040` → after: `L2048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2048) · [Before (L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2040)

```diff
-   40255: (UU, XU, zU) => {
+   40401: (HH, BH, LH) => {
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2043` → after: `L2051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2051) · [Before (L2043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2043)

```diff
-   39353: UU => {
+   39451: HH => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/clientGame-cooking-cookingClient.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/clientGame-cooking-cookingClient.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-53d3f1a139dcb86494bda2e385afa80f4d0a709a1d3aba17771b42f706bdd9a6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/clientGame-cooking-cookingClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-53d3f1a139dcb86494bda2e385afa80f4d0a709a1d3aba17771b42f706bdd9a6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-53d3f1a139dcb86494bda2e385afa80f4d0a709a1d3aba17771b42f706bdd9a6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-cooking-cookingClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-cooking-cookingClient.js#L4)

```diff
-   40264: (UU, XU, zU) => {
+   40403: (HH, BH, LH) => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/clientGame-defusal-defusalClient.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/clientGame-defusal-defusalClient.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e659a2823eafcce15a3c5a4cc4dcd3ce30e18d91e7504221a3d494c3555b387a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/clientGame-defusal-defusalClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e659a2823eafcce15a3c5a4cc4dcd3ce30e18d91e7504221a3d494c3555b387aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e659a2823eafcce15a3c5a4cc4dcd3ce30e18d91e7504221a3d494c3555b387a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-defusal-defusalClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-defusal-defusalClient.js#L4)

```diff
-   40271: (UU, XU, zU) => {
+   40409: (HH, BH, LH) => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (124 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67)

#### 1. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L4)

```diff
-   37318: (UU, XU, zU) => {
+   37472: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L6)

```diff
-       b: () => tU,
+       d: () => WH,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L8-L9)

```diff
-       f: () => NU,
-       h: () => YU
+       i: () => GH,
+       k: () => XH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L11-L18` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L11-L18) · [Before (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L11-L18)

```diff
-     var cU = zU(34859),
-       yU = zU(37325),
-       QU = zU(37334),
-       AU = zU(9282),
-       FU = zU(1492),
-       oU = zU(61),
-       DU = zU(73),
-       EU = zU(1305);
+     var AH = LH(34986),
+       rH = LH(37474),
+       SH = LH(37479),
+       hH = LH(9412),
+       tH = LH(1450),
+       zH = LH(45),
+       CH = LH(69),
+       EH = LH(1225);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L22-L23` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L22-L23) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L22-L23)

```diff
-       return (0, FU.j)(yU.d, (0, yU.o)()), (0, EU.jsx)(EU.Fragment, {
-         children: null === (UU = (0, yU.o)()) || void 0 === UU ? void 0 : UU.content
+       return (0, tH.e)(rH.b, (0, rH.p)()), (0, EH.jsx)(EH.Fragment, {
+         children: null === (HH = (0, rH.p)()) || void 0 === HH ? void 0 : HH.content
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L32-L33` → after: `L32-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L32-L33) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L32-L33)

```diff
-       (0, FU.j)(yU.d, (0, yU.o)());
-       const DU = null === (XU = (0, yU.o)()) || void 0 === XU ? void 0 : XU.menu;
+       (0, tH.e)(rH.b, (0, rH.p)());
+       const CH = null === (BH = (0, rH.p)()) || void 0 === BH ? void 0 : BH.menu;
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L36-L37` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L36-L37) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L36-L37)

```diff
-         zU || (null === DU || void 0 === DU || null === (UU = DU.onClose) || void 0 === UU || UU.call(DU), (0, QU.t)())
-       }), [zU, DU]), (0, oU.useEffect)((() => zU ? (0, AU.d)(QU.x, QU.i) : void 0), [zU]), (0, EU.jsx)(cU.e, {
+         LH || (null === CH || void 0 === CH || null === (HH = CH.onClose) || void 0 === HH || HH.call(CH), (0, SH.r)())
+       }), [LH, CH]), (0, zH.useEffect)((() => LH ? (0, hH.e)(SH.A, SH.g) : void 0), [LH]), (0, EH.jsx)(AH.e, {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L63)

```diff
-         id: `clientGameHud-${XU}`,
+         id: `clientGameHud-${BH}`,
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L77` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L77) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L77)

```diff
-         return null !== (UU = IU.get(zU)) && void 0 !== UU ? UU : null
+         return null !== (HH = YH.get(LH)) && void 0 !== HH ? HH : null
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L82)

```diff
-           yU(null !== (UU = IU.get(zU)) && void 0 !== UU ? UU : null)
+           rH(null !== (HH = YH.get(LH)) && void 0 !== HH ? HH : null)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L90)

```diff
-   34859: (UU, XU, zU) => {
+   34986: (HH, BH, LH) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L94-L95` → after: `L94-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L94-L95) · [Before (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L94-L95)

```diff
-     var cU = zU(4977),
-       yU = zU(4982);
+     var AH = LH(4947),
+       rH = LH(4951);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L106)

```diff
-       return (0, yU.c)(!0, zU, QU, oU), (0, cU.d)(FU, zU), zU || AU ? XU : null
+       return (0, rH.c)(!0, LH, SH, zH), (0, AH.e)(tH, LH), LH || hH ? BH : null
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L109` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L109) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L109)

```diff
-   37418: (UU, XU, zU) => {
+   37569: (HH, BH, LH) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L111` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L111) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L111)

```diff
-       d: () => QU,
+       e: () => SH,
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L113-L114` → after: `L113-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L113-L114) · [Before (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L113-L114)

```diff
-       h: () => FU,
-       j: () => oU
+       i: () => tH,
+       k: () => zH
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L116-L117` → after: `L116-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L116-L117) · [Before (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L116-L117)

```diff
-     var cU = zU(61),
-       yU = zU(3478);
+     var AH = LH(45),
+       rH = LH(3465);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L123)

```diff
-       const [XU] = (0, yU.e)(), [zU, oU] = (0, cU.useState)(!1);
+       const [BH] = (0, rH.b)(), [LH, zH] = (0, AH.useState)(!1);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L126-L127` → after: `L126-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L126-L127) · [Before (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L126-L127)

```diff
-         const XU = document.querySelector(`.${AU}`),
-           zU = document.querySelector(`.${FU}`),
+         const BH = document.querySelector(`.${hH}`),
+           LH = document.querySelector(`.${tH}`),
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L144` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L144) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L144)

```diff
-   40278: (UU, XU, zU) => {
+   40413: (HH, BH, LH) => {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L146-L148` → after: `L146-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L146-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L146-L148) · [Before (L146-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L146-L148)

```diff
-       e: () => AU,
-       h: () => yU,
-       i: () => QU
+       c: () => hH,
+       g: () => rH,
+       h: () => SH
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L150` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L150) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L150)

```diff
-     var cU = zU(61);
+     var AH = LH(45);
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L161` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L161) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L161)

```diff
-       return `${Math.floor(UU/60)}:${String(UU%60).padStart(2,"0")}`
+       return `${Math.floor(HH/60)}:${String(HH%60).padStart(2,"0")}`
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L170)

```diff
-           zU((XU => (null === XU || void 0 === XU ? void 0 : XU.endsAt) === UU && XU.value === cU ? XU : {
+           LH((BH => (null === BH || void 0 === BH ? void 0 : BH.endsAt) === HH && BH.value === AH ? BH : {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L189` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L189) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L189)

```diff
-   37414: (UU, XU, zU) => {
+   37565: (HH, BH, LH) => {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L191` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L191) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L191)

```diff
-       b: () => yU
+       e: () => rH
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L218` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L218) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L218)

```diff
-   9282: (UU, XU, zU) => {
+   9412: (HH, BH, LH) => {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L221` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L221) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L221)

```diff
-       d: () => yU
+       e: () => rH
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L238` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L238) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L238)

```diff
-   39331: (UU, XU, zU) => {
+   39425: (HH, BH, LH) => {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L244` → after: `L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L244) · [Before (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L244)

```diff
-       } = zU, AU = null !== (cU = UU.text) && void 0 !== cU ? cU : UU, FU = (AU.x / 100 - .5) * yU, oU = (AU.y / 100 - .5) * QU, DU = yU / 2 - XU.x;
+       } = LH, hH = null !== (AH = HH.text) && void 0 !== AH ? AH : HH, tH = (hH.x / 100 - .5) * rH, zH = (hH.y / 100 - .5) * SH, CH = rH / 2 - BH.x;
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L249` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L249) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L249)

```diff
-       const EU = Math.min(0 === FU ? 1 / 0 : DU / Math.abs(FU), oU > 0 ? (QU / 2 - XU.bottom) / oU : oU < 0 ? (XU.top - QU / 2) / oU : 1 / 0);
+       const EH = Math.min(0 === tH ? 1 / 0 : CH / Math.abs(tH), zH > 0 ? (SH / 2 - BH.bottom) / zH : zH < 0 ? (BH.top - SH / 2) / zH : 1 / 0);
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L259` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L259) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L259)

```diff
-       d: () => cU
+       e: () => AH
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L262` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L262) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L262)

```diff
-   37334: (UU, XU, zU) => {
+   37479: (HH, BH, LH) => {
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L264-L267` → after: `L264-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L264-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L264-L270) · [Before (L264-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L264-L267)

```diff
-       e: () => QU,
-       i: () => aU,
-       l: () => tU,
-       o: () => FU,
+       A: () => uH,
+       C: () => xH,
+       c: () => SH,
+       g: () => QH,
+       j: () => WH,
+       k: () => tH,
+       n: () => GH,
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L270-L273` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L273) · [Before (L270-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L270-L273)

```diff
-       v: () => YU,
-       w: () => GU,
-       x: () => pU,
-       y: () => kU
+       x: () => vH
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L275-L276` → after: `L275-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L275-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L275-L276) · [Before (L275-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L275-L276)

```diff
-     var cU = zU(27),
-       yU = zU(31);
+     var AH = LH(15),
+       rH = LH(18);
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L283` → after: `L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L283) · [Before (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L283)

```diff
-         return (null !== (zU = UU.order) && void 0 !== zU ? zU : 0) - (null !== (cU = XU.order) && void 0 !== cU ? cU : 0)
+         return (null !== (LH = HH.order) && void 0 !== LH ? LH : 0) - (null !== (AH = BH.order) && void 0 !== AH ? AH : 0)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L300` → after: `L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L300) · [Before (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L300)

```diff
-       UU.panel && "clientGame" === cU.e.get("openInGameMenuName") && DU(UU.id)
+       HH.panel && "clientGame" === AH.c.get("openInGameMenuName") && CH(HH.id)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L326` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L326) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L326)

```diff
-       "inventory" !== cU.e.get("openInGameMenuName") && DU(null)
+       "inventory" !== AH.c.get("openInGameMenuName") && CH(null)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L335-L336` → after: `L335-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L335-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L335-L336) · [Before (L335-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L335-L336)

```diff
-       return AU.set(UU.id, UU), yU.k.UY(QU, FU(), !0), () => {
-         AU.get(UU.id) === UU && (AU.delete(UU.id), yU.k.UY(QU, FU()))
+       return hH.set(HH.id, HH), rH.k.AX(SH, tH(), !0), () => {
+         hH.get(HH.id) === HH && (hH.delete(HH.id), rH.k.AX(SH, tH()))
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L340` → after: `L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L340) · [Before (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L340)

```diff
-   37325: (UU, XU, zU) => {
+   37474: (HH, BH, LH) => {
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L342-L343` → after: `L342-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L342-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L342-L344) · [Before (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L342-L343)

```diff
-       d: () => FU,
-       h: () => kU,
+       b: () => tH,
+       c: () => xH,
+       g: () => WH,
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L347-L348` → after: `L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L347) · [Before (L347-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L347-L348)

```diff
-       o: () => DU,
-       r: () => aU,
+       p: () => CH,
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L350` → after: `L349-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L349-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L349-L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L350)

```diff
-       u: () => EU
+       u: () => YH,
+       v: () => EH
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L352-L355` → after: `L352-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L352-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L352-L355) · [Before (L352-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L352-L355)

```diff
-     var cU = zU(27),
-       yU = zU(31),
-       QU = zU(1310),
-       AU = zU(37334);
+     var AH = LH(15),
+       rH = LH(18),
+       SH = LH(1241),
+       hH = LH(37479);
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L368-L369` → after: `L368-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L368-L369) · [Before (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L368-L369)

```diff
-       return oU = zU, yU.k.UY(FU, oU, !0), () => {
-         oU === zU && (oU = null, pU = !1, tU(), yU.k.UY(FU, null))
+       return zH = LH, rH.k.AX(tH, zH, !0), () => {
+         zH === LH && (zH = null, uH = !1, WH(), rH.k.AX(tH, null))
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L386-L387` → after: `L386-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L386-L387) · [Before (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L386-L387)

```diff
-       const UU = cU.e.get("openInGameMenuName");
-       "clientGame" !== UU && (pU = "inventory" === UU), (0, AU.r)() || (0, AU.l)(), (0, QU.u)(QU.c), cU.e.set({
+       const HH = AH.c.get("openInGameMenuName");
+       "clientGame" !== HH && (uH = "inventory" === HH), (0, hH.n)() || (0, hH.j)(), (0, SH.x)(SH.d), AH.c.set({
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L406)

```diff
-       "clientGame" === cU.e.get("openInGameMenuName") && cU.e.set({
+       "clientGame" === AH.c.get("openInGameMenuName") && AH.c.set({
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L408` → after: `L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L408) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L408)

```diff
-       }), UU || (0, AU.l)(), pU = !1
+       }), HH || (0, hH.j)(), uH = !1
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L411` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L411) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L411)

```diff
-   40281: (UU, XU, zU) => {
+   40419: (HH, BH, LH) => {
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L413` → after: `L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L413) · [Before (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L413)

```diff
-       d: () => oU
+       b: () => zH
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L415-L419` → after: `L415-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L415-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L415-L419) · [Before (L415-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L415-L419)

```diff
-     var cU = zU(37414),
-       yU = zU(1193),
-       QU = zU(1266),
-       AU = zU(39278),
-       FU = zU(39331);
+     var AH = LH(37565),
+       rH = LH(1123),
+       SH = LH(1194),
+       hH = LH(39370),
+       tH = LH(39425);
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L426` → after: `L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L426) · [Before (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L426)

```diff
-         }, this.render = null, this.kp = !1, this.QG = () => {
+         }, this.render = null, this.Mu = !1, this.Av = () => {
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L431` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L431) · [Before (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L431)

```diff
-         }, window.addEventListener("resize", this.QG), null === (zU = window.visualViewport) || void 0 === zU || zU.addEventListener("resize", this.QG)
+         }, window.addEventListener("resize", this.Av), null === (LH = window.visualViewport) || void 0 === LH || LH.addEventListener("resize", this.Av)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L438` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L438) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L438)

```diff
-           null === (cU = this.markers.get(UU)) || void 0 === cU || cU.stopObserving(), this.markers.delete(UU), XU && !this.kp ? (this.markers.set(UU, this.mount(XU)), this.refs.set(UU, zU)) : this.refs.delete(UU)
+           null === (AH = this.markers.get(HH)) || void 0 === AH || AH.stopObserving(), this.markers.delete(HH), BH && !this.Mu ? (this.markers.set(HH, this.mount(BH)), this.refs.set(HH, LH)) : this.refs.delete(HH)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L450` → after: `L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L450) · [Before (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L450)

```diff
-         QU && (QU.target ??= [0, 0, 0], QU.target[0] = XU, QU.target[1] = zU, QU.target[2] = cU, this.place(QU), this.dc(QU, yU && Math.hypot(XU - yU[0], zU - yU[1], cU - yU[2])))
+         SH && (SH.target ??= [0, 0, 0], SH.target[0] = BH, SH.target[1] = LH, SH.target[2] = AH, this.place(SH), this.eA(SH, rH && Math.hypot(BH - rH[0], LH - rH[1], AH - rH[2])))
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L454` → after: `L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L454) · [Before (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L454)

```diff
-         this.kp = !0, window.removeEventListener("resize", this.QG), null === (UU = window.visualViewport) || void 0 === UU || UU.removeEventListener("resize", this.QG);
+         this.Mu = !0, window.removeEventListener("resize", this.Av), null === (HH = window.visualViewport) || void 0 === HH || HH.removeEventListener("resize", this.Av);
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L471-L472` → after: `L471-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L471-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L471-L472) · [Before (L471-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L471-L472)

```diff
-           oU = null !== QU && void 0 !== QU ? QU : XU.projectWorldPosToScreenPos(UU.target),
-           DU = (0, FU.d)({
+           zH = null !== SH && void 0 !== SH ? SH : BH.projectWorldPosToScreenPos(HH.target),
+           CH = (0, tH.e)({
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L482` → after: `L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L482) · [Before (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L482)

```diff
-         (null === UU.metres || (0, cU.b)(XU, UU.metres, UU.metresShownAt)) && (UU.metres = Math.round(XU), UU.metresShownAt = zU, UU.distance.textContent = (0, yU.A)(QU.h.get().getCurrentLanguageCode(), this.distanceKey, {
+         (null === HH.metres || (0, AH.e)(BH, HH.metres, HH.metresShownAt)) && (HH.metres = Math.round(BH), HH.metresShownAt = LH, HH.distance.textContent = (0, rH.u)(SH.g.get().getCurrentLanguageCode(), this.distanceKey, {
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L517` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L517) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L517)

```diff
-   40275: (UU, XU, zU) => {
+   40411: (HH, BH, LH) => {
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L522-L527` → after: `L522-L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L522-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L522-L527) · [Before (L522-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L522-L527)

```diff
-     var yU = zU(61),
-       QU = zU(37325),
-       AU = zU(37756),
-       FU = zU(37345),
-       oU = zU(1800),
-       DU = zU(31);
+     var rH = LH(45),
+       SH = LH(37474),
+       hH = LH(37912),
+       tH = LH(37496),
+       zH = LH(1789),
+       CH = LH(18);
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L621` → after: `L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L621) · [Before (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L621)

```diff
-         for (let AU = 0; AU < 4; AU++) zU.push((yU = AU * XU + .35, QU = (AU + 1) * XU - .35, pU(`M${YU+(cU=6+UU)*Math.cos(yU)} ${YU+cU*Math.sin(yU)} A${cU} ${cU} 0 0 1 ${YU+cU*Math.cos(QU)} ${YU+cU*Math.sin(QU)}`, 2)));
+         for (let hH = 0; hH < 4; hH++) LH.push((rH = hH * BH + .35, SH = (hH + 1) * BH - .35, uH(`M${XH+(AH=6+HH)*Math.cos(rH)} ${XH+AH*Math.sin(rH)} A${AH} ${AH} 0 0 1 ${XH+AH*Math.cos(SH)} ${XH+AH*Math.sin(SH)}`, 2)));
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L626` → after: `L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L626) · [Before (L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L626)

```diff
-       marksman: UU => [pU(`M${26-UU/2} ${39+UU/2} L32 33 L${38+UU/2} ${39+UU/2}`, 2), NU(14 - UU, YU, 24 - UU, YU, 1.5), NU(40 + UU, YU, 50 + UU, YU, 1.5), NU(14 - UU, 30, 14 - UU, 34, 1.5), NU(50 + UU, 30, 50 + UU, 34, 1.5)],
+       marksman: HH => [uH(`M${26-HH/2} ${39+HH/2} L32 33 L${38+HH/2} ${39+HH/2}`, 2), GH(14 - HH, XH, 24 - HH, XH, 1.5), GH(40 + HH, XH, 50 + HH, XH, 1.5), GH(14 - HH, 30, 14 - HH, 34, 1.5), GH(50 + HH, 30, 50 + HH, 34, 1.5)],
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L635` → after: `L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L635) · [Before (L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L635)

```diff
-           ]) zU.push(pU(`M${YU+cU*XU} ${YU+yU*(XU-5)} L${YU+cU*XU} ${YU+yU*XU} L${YU+cU*(XU-5)} ${YU+yU*XU}`, 2));
+           ]) LH.push(uH(`M${XH+AH*BH} ${XH+rH*(BH-5)} L${XH+AH*BH} ${XH+rH*BH} L${XH+AH*(BH-5)} ${XH+rH*BH}`, 2));
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L648-L650` → after: `L648-L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L648-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L648-L650) · [Before (L648-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L648-L650)

```diff
-       } = UU, yU = `<${XU}`;
-       for (const [QU, AU] of Object.entries(zU)) yU += ` ${QU}="${AU}"`;
-       return void 0 === cU ? `${yU}/>` : `${yU}>${cU}</${XU}>`
+       } = HH, rH = `<${BH}`;
+       for (const [SH, hH] of Object.entries(LH)) rH += ` ${SH}="${hH}"`;
+       return void 0 === AH ? `${rH}/>` : `${rH}>${AH}</${BH}>`
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L675` → after: `L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L675) · [Before (L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L675)

```diff
-         } = this, QU = yU.isAlive(this.localPlayerId) && null !== (zU = null === (cU = yU.HzU(this.localPlayerId)) || void 0 === cU ? void 0 : cU.name) && void 0 !== zU ? zU : null, AU = (FU = QU) && EU[FU] || null;
+         } = this, SH = rH.isAlive(this.localPlayerId) && null !== (LH = null === (AH = rH.yLH(this.localPlayerId)) || void 0 === AH ? void 0 : AH.name) && void 0 !== LH ? LH : null, hH = (tH = SH) && EH[tH] || null;
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L685` → after: `L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L685) · [Before (L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L685)

```diff
-           IU = null !== oU && void 0 !== oU ? oU : 0;
+           YH = null !== zH && void 0 !== zH ? zH : 0;
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L697-L698` → after: `L697-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L697-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L697-L698) · [Before (L697-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L697-L698)

```diff
-           return `<svg viewBox="0 0 64 64">${gU[UU](XU).map(kU).join("")}</svg>`
-         }(UU, XU), this.shapes = Array.from(null !== (zU = null === (cU = this.element.firstElementChild) || void 0 === cU ? void 0 : cU.children) && void 0 !== zU ? zU : [])) : XU !== this.drawnGap && (this.drawnGap = XU, function(UU, XU, zU) {
+           return `<svg viewBox="0 0 64 64">${MH[HH](BH).map(xH).join("")}</svg>`
+         }(HH, BH), this.shapes = Array.from(null !== (LH = null === (AH = this.element.firstElementChild) || void 0 === AH ? void 0 : AH.children) && void 0 !== LH ? LH : [])) : BH !== this.drawnGap && (this.drawnGap = BH, function(HH, BH, LH) {
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L712` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L712) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L712)

```diff
-         const zU = UU * AU.k / 2;
+         const LH = HH * hH.j / 2;
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L716` → after: `L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L716) · [Before (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L716)

```diff
-         const XU = 2 + ((0, FU.e)(UU) - 1) * this.gapPerVh;
+         const BH = 2 + ((0, tH.d)(HH) - 1) * this.gapPerVh;
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L731` → after: `L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L731) · [Before (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L731)

```diff
-         }, this.maxHealth = null, this.sU = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = UU => {
+         }, this.maxHealth = null, this.PA = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = HH => {
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L733` → after: `L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L733) · [Before (L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L733)

```diff
-           this.clearHits(), this.root = UU, this.lowLayer = null !== (XU = null === UU || void 0 === UU ? void 0 : UU.querySelector(".FrontlineDamageLow")) && void 0 !== XU ? XU : null, this.arcLayer = null !== (zU = null === UU || void 0 === UU ? void 0 : UU.querySelector(".Fron … [truncated]
+           this.clearHits(), this.root = HH, this.lowLayer = null !== (BH = null === HH || void 0 === HH ? void 0 : HH.querySelector(".FrontlineDamageLow")) && void 0 !== BH ? BH : null, this.arcLayer = null !== (LH = null === HH || void 0 === HH ? void 0 : HH.querySelector(".Fron … [truncated]
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L737` → after: `L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L737) · [Before (L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L737)

```diff
-             vU: zU
+             xA: LH
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L760-L761` → after: `L760-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L760-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L760-L761) · [Before (L760-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L760-L761)

```diff
-         if (this.readHealth = UU, this.readShield = XU, this.readMaxHealth = zU, null === UU || void 0 === UU || !zU) return this.lastHealthPool = null, this.maxHealth = null, this.sU = 1, this.dead = !1, void this.drawLow();
-         const cU = UU + (null !== XU && void 0 !== XU ? XU : 0);
+         if (this.readHealth = HH, this.readShield = BH, this.readMaxHealth = LH, null === HH || void 0 === HH || !LH) return this.lastHealthPool = null, this.maxHealth = null, this.PA = 1, this.dead = !1, void this.drawLow();
+         const AH = HH + (null !== BH && void 0 !== BH ? BH : 0);
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L773` → after: `L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L773) · [Before (L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L773)

```diff
-         this.dead = UU <= 0, this.dead && this.clearHits(), this.lastHealthPool = cU, this.maxHealth = zU, this.sU = UU > 0 ? UU / zU : 1, this.drawLow()
+         this.dead = HH <= 0, this.dead && this.clearHits(), this.lastHealthPool = AH, this.maxHealth = LH, this.PA = HH > 0 ? HH / LH : 1, this.drawLow()
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L793-L796` → after: `L793-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L793-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L793-L796) · [Before (L793-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L793-L796)

```diff
-         const UU = dU((ZU - this.sU) / .25),
-           XU = dU((RU - this.sU) / .15000000000000002),
-           zU = this.sU < ZU;
-         this.lowLayer.classList.toggle("Active", zU), this.lowLayer.classList.toggle("Critical", this.sU < RU), this.lowLayer.style.opacity = String(zU ? .55 + .3 * UU + .15 * XU : 0)
+         const HH = bH((TH - this.PA) / .25),
+           BH = bH((UH - this.PA) / .15000000000000002),
+           LH = this.PA < TH;
+         this.lowLayer.classList.toggle("Active", LH), this.lowLayer.classList.toggle("Critical", this.PA < UH), this.lowLayer.style.opacity = String(LH ? .55 + .3 * HH + .15 * BH : 0)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L848` → after: `L848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L848) · [Before (L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L848)

```diff
-         (null === UU.drawnAngle || Math.abs(XU - UU.drawnAngle) > .005) && (UU.drawnAngle = XU, UU.element.style.rotate = `${XU}rad`)
+         (null === HH.drawnAngle || Math.abs(BH - HH.drawnAngle) > .005) && (HH.drawnAngle = BH, HH.element.style.rotate = `${BH}rad`)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L853` → after: `L853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L853) · [Before (L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L853)

```diff
-         let QU = this.flashes.find((XU => null === XU.angle || null === UU ? XU.angle === UU : WU(XU.angle, UU) < .5));
+         let SH = this.flashes.find((BH => null === BH.angle || null === HH ? BH.angle === HH : OH(BH.angle, HH) < .5));
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L903` → after: `L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L903) · [Before (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L903)

```diff
-         QU.glow.classList.toggle("Everywhere", null === UU), NU.setProperty("--glowX", `${oU}px`), NU.setProperty("--glowY", `${DU}px`), NU.setProperty("--glowRx", `${EU}px`), NU.setProperty("--glowRy", `${YU}px`), QU.element.style.transformOrigin = `${oU}px ${DU}px`, null === (y … [truncated]
+         SH.glow.classList.toggle("Everywhere", null === HH), GH.setProperty("--glowX", `${zH}px`), GH.setProperty("--glowY", `${CH}px`), GH.setProperty("--glowRx", `${EH}px`), GH.setProperty("--glowRy", `${XH}px`), SH.element.style.transformOrigin = `${zH}px ${CH}px`, null === (r … [truncated]
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L954` → after: `L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L954) · [Before (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L954)

```diff
-     var eU = zU(1106),
+     var mH = LH(1038),
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L956-L960` → after: `L956-L960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L956-L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L956-L960) · [Before (L956-L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L956-L960)

```diff
-       wU = zU(37318),
-       qU = zU(37418),
-       OU = zU(1193),
-       SU = zU(1492),
-       rU = zU(40278);
+       IH = LH(37472),
+       fH = LH(37569),
+       lH = LH(1123),
+       KH = LH(1450),
+       cH = LH(40413);
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L977` → after: `L977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L977) · [Before (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L977)

```diff
-         this.wire = UU, DU.k.UY(uU, UU, !0)
+         this.wire = HH, CH.k.AX(eH, HH, !0)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L985` → after: `L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L985) · [Before (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L985)

```diff
-         }, DU.k.UY(fU, this.scoreboard, !0)
+         }, CH.k.AX(qH, this.scoreboard, !0)
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L988` → after: `L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L988) · [Before (L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L988)

```diff
-     var HU = zU(1305);
+     var NH = LH(1225);
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1001` → after: `L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1001) · [Before (L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1001)

```diff
-         className: CU()(XU, `Owner-${yU||"None"}`, `Leader-${AU||"None"}`, {
+         className: oH()(BH, `Owner-${rH||"None"}`, `Leader-${hH||"None"}`, {
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1011` → after: `L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1011) · [Before (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1011)

```diff
-             width: `${QU}%`
+             width: `${SH}%`
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1023` → after: `L1023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1023) · [Before (L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1023)

```diff
-         } = (0, OU.I)();
+         } = (0, lH.B)();
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1037` → after: `L1037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1037) · [Before (L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1037)

```diff
-                   className: CU()("FrontlinePointMarkerHomeTurf", `Team-${yU}`),
+                   className: oH()("FrontlinePointMarkerHomeTurf", `Team-${rH}`),
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1070-L1071` → after: `L1070-L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1070-L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1070-L1071) · [Before (L1070-L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1070-L1071)

```diff
-       const QU = (0, SU.j)(uU, XU.getWire()),
-         AU = (0, SU.j)(fU, XU.getScoreboard());
+       const SH = (0, KH.e)(eH, BH.getWire()),
+         hH = (0, KH.e)(qH, BH.getScoreboard());
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1113` → after: `L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1113) · [Before (L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1113)

```diff
-         } = (0, OU.I)();
+         } = (0, lH.B)();
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1117` → after: `L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1117) · [Before (L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1117)

```diff
-             className: CU()("FrontlinePlate", `Status-${cU}`, `Leader-${QU||"None"}`),
+             className: oH()("FrontlinePlate", `Status-${AH}`, `Leader-${SH||"None"}`),
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1151` → after: `L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1151) · [Before (L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1151)

```diff
-             className: CU()("FrontlinePlate", "FrontlineAlert", `Tone-${yU}`),
+             className: oH()("FrontlinePlate", "FrontlineAlert", `Tone-${rH}`),
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1169` → after: `L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1169) · [Before (L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1169)

```diff
-         } = (0, OU.I)(), cU = (0, yU.useRef)(null), QU = function(UU, XU) {
+         } = (0, lH.B)(), AH = (0, rH.useRef)(null), SH = function(HH, BH) {
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1174-L1175` → after: `L1174-L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1174-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1174-L1175) · [Before (L1174-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1174-L1175)

```diff
-             const zU = document.querySelector(`.${qU.f}`),
-               yU = document.querySelector(`.${qU.h}`),
+             const LH = document.querySelector(`.${fH.f}`),
+               rH = document.querySelector(`.${fH.i}`),
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1180` → after: `L1180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1180) · [Before (L1180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1180)

```diff
-                   FU = XU.getBoundingClientRect().width - 2 * (null !== (UU = null === QU || void 0 === QU ? void 0 : QU.getBoundingClientRect().width) && void 0 !== UU ? UU : 0),
+                   tH = BH.getBoundingClientRect().width - 2 * (null !== (HH = null === SH || void 0 === SH ? void 0 : SH.getBoundingClientRect().width) && void 0 !== HH ? HH : 0),
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1184` → after: `L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1184) · [Before (L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1184)

```diff
-                   NU = Math.min(DU - EU, YU - DU) - qU.d - FU / 2,
+                   GH = Math.min(CH - EH, XH - CH) - fH.e - tH / 2,
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1186-L1187` → after: `L1186-L1187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1186-L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1186-L1187) · [Before (L1186-L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1186-L1187)

```diff
-                   pU = IU ? (window.innerWidth - FU) / 2 - qU.d : NU;
-                 XU.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(pU,14*AU)))}px`), cU(IU)
+                   uH = YH ? (window.innerWidth - tH) / 2 - fH.e : GH;
+                 BH.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(uH,14*hH)))}px`), AH(YH)
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1246` → after: `L1246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1246) · [Before (L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1246)

```diff
-       } = (0, OU.I)(), AU = String(zU).padStart(3, "0"), FU = AU.search(/[1-9]/), oU = -1 === FU ? AU : AU.slice(0, FU), DU = Math.min(20, Math.floor(zU / cU * 20));
+       } = (0, lH.B)(), hH = String(LH).padStart(3, "0"), tH = hH.search(/[1-9]/), zH = -1 === tH ? hH : hH.slice(0, tH), CH = Math.min(20, Math.floor(LH / AH * 20));
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1248` → after: `L1248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1248) · [Before (L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1248)

```diff
-         className: CU()("FrontlineTeamScore", yU, `Team-${XU}`),
+         className: oH()("FrontlineTeamScore", rH, `Team-${BH}`),
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1289` → after: `L1289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1289) · [Before (L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1289)

```diff
-       const zU = (0, rU.i)(XU);
+       const LH = (0, cH.h)(BH);
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1294` → after: `L1294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1294) · [Before (L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1294)

```diff
-         children: (0, rU.e)(zU)
+         children: (0, cH.c)(LH)
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1307` → after: `L1307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1307) · [Before (L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1307)

```diff
-     var hU = zU(40281);
+     var yH = LH(40419);
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1310` → after: `L1310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1310) · [Before (L1310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1310)

```diff
-         this.hud = UU, this.points = new hU.d({
+         this.hud = HH, this.points = new yH.b({
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1322-L1323` → after: `L1322-L1323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1322-L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1322-L1323) · [Before (L1322-L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1322-L1323)

```diff
-     var XX = zU(7029),
-       zX = zU(2858);
+     var BB = LH(6981),
+       LB = LH(2864);
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1342` → after: `L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1342) · [Before (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1342)

```diff
-         }, DU.k.UY(cX, this.view, !0)
+         }, CH.k.AX(AB, this.view, !0)
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1345` → after: `L1345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1345) · [Before (L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1345)

```diff
-     const QX = (0, yU.lazy)((() => (0, zX.d)(Promise.all([zU.e(253), zU.e(216)]).then((() => zU(44450))), (UU => UU.FrontlineMvpLineup)))),
+     const SB = (0, rH.lazy)((() => (0, LB.d)(Promise.all([LH.e(261), LH.e(222)]).then((() => LH(45236))), (HH => HH.FrontlineMvpLineup)))),
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1359-L1360` → after: `L1359-L1360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1359-L1360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1359-L1360) · [Before (L1359-L1360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1359-L1360)

```diff
-       const zU = (0, SU.j)(cX, XU.getView()),
-         cU = (0, rU.h)(zU.endsAt);
+       const LH = (0, KH.e)(AB, BH.getView()),
+         AH = (0, cH.g)(LH.endsAt);
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1373` → after: `L1373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1373) · [Before (L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1373)

```diff
-       } = (0, OU.I)(), [, AU, FU, oU, DU, , EU, YU] = XU, NU = (0, yU.useMemo)((() => FX.filter((UU => UU < YU.length))), [YU]), IU = (0, yU.useMemo)((() => NU.map((UU => {
+       } = (0, lH.B)(), [, hH, tH, zH, CH, , EH, XH] = BH, GH = (0, rH.useMemo)((() => tB.filter((HH => HH < XH.length))), [XH]), YH = (0, rH.useMemo)((() => GH.map((HH => {
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1386` → after: `L1386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1386) · [Before (L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1386)

```diff
-         className: CU()("FrontlineRoundEnd", `Result-${AU}`),
+         className: oH()("FrontlineRoundEnd", `Result-${hH}`),
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1400` → after: `L1400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1400) · [Before (L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1400)

```diff
-             }), (pU = QU(oX[AU]), /\p{Script=Arabic}/u.test(pU) ? [pU] : (0, XX.e)(pU)).map(((UU, XU) => (0, HU.jsx)("span", {
+             }), (uH = SH(zB[hH]), /\p{Script=Arabic}/u.test(uH) ? [uH] : (0, BB.d)(uH)).map(((HH, BH) => (0, NH.jsx)("span", {
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1455-L1456` → after: `L1455-L1456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1455-L1456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1455-L1456) · [Before (L1455-L1456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1455-L1456)

```diff
-       } = (0, OU.I)(), [yU, QU, AU, FU, oU] = XU, [DU, EU] = cU(function(UU, XU) {
-         return 1 === XU && "damage" !== UU ? `frontlineRoundEnd:${UU}One` : `frontlineRoundEnd:${UU}`
+       } = (0, lH.B)(), [rH, SH, hH, tH, zH] = BH, [CH, EH] = AH(function(HH, BH) {
+         return 1 === BH && "damage" !== HH ? `frontlineRoundEnd:${HH}One` : `frontlineRoundEnd:${HH}`
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1462` → after: `L1462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1462) · [Before (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1462)

```diff
-         className: CU()("FrontlineMvpCard", `Place-${zU+1}`, `Team-${QU}`),
+         className: oH()("FrontlineMvpCard", `Place-${LH+1}`, `Team-${SH}`),
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1464` → after: `L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1464) · [Before (L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1464)

```diff
-           "--revealMs": `${AX[zU]}ms`
+           "--revealMs": `${hB[LH]}ms`
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1500` → after: `L1500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1500) · [Before (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1500)

```diff
-         null === (UU = EU) || void 0 === UU || UU.YC(!zU), null === (XU = YU) || void 0 === XU || XU.YC(!cU)
+         null === (HH = EH) || void 0 === HH || HH.vI(!LH), null === (BH = XH) || void 0 === BH || BH.vI(!AH)
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1504` → after: `L1504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1504) · [Before (L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1504)

```diff
-           DU = UU, EU = new GU(UU, AU), YU = new PU(UU, AU), NU = new UX(FU), aU(), IU = (0, QU.u)((0, yU.createElement)(yU.Fragment, null, (0, yU.createElement)(mU, {
+           CH = HH, EH = new vH(HH, hH), XH = new VH(HH, hH), GH = new HB(tH), QH(), YH = (0, SH.v)((0, rH.createElement)(rH.Fragment, null, (0, rH.createElement)(wH, {
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1519` → after: `L1519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1519) · [Before (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1519)

```diff
-           null === (zU = EU) || void 0 === zU || zU.frame(UU, XU.tanHalfFovY), null === (cU = YU) || void 0 === cU || cU.frame(XU.cameraHeading), null === (yU = NU) || void 0 === yU || yU.frame(XU, null !== (QU = null === (FU = DU) || void 0 === FU ? void 0 : FU.getPositionView(A … [truncated]
+           null === (LH = EH) || void 0 === LH || LH.frame(HH, BH.tanHalfFovY), null === (AH = XH) || void 0 === AH || AH.frame(BH.cameraHeading), null === (rH = GH) || void 0 === rH || rH.frame(BH, null !== (SH = null === (tH = CH) || void 0 === tH ? void 0 : tH.getPositionView(h … [truncated]
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1522` → after: `L1522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1522) · [Before (L1522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1522)

```diff
-           "frontlineHud" === UU ? FU.PY(XU) : "frontlineScoreboard" === UU ? FU.receiveScoreboard(XU) : "frontlineRoundEnd" === UU ? oU.PY(XU) : "frontlinePrefs" === UU && (pU = XU, aU())
+           "frontlineHud" === HH ? tH.kX(BH) : "frontlineScoreboard" === HH ? tH.receiveScoreboard(BH) : "frontlineRoundEnd" === HH ? zH.kX(BH) : "frontlinePrefs" === HH && (uH = BH, QH())
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1527` → after: `L1527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1527) · [Before (L1527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1527)

```diff
-   7029: (UU, XU, zU) => {
+   6981: (HH, BH, LH) => {
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1529` → after: `L1529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1529) · [Before (L1529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1529)

```diff
-       e: () => yU
+       d: () => rH
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1544` → after: `L1544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1544) · [Before (L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1544)

```diff
-   39278: (UU, XU, zU) => {
+   39370: (HH, BH, LH) => {
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1547` → after: `L1547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1547) · [Before (L1547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1547)

```diff
-       g: () => QU
+       e: () => SH
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1567` → after: `L1567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1567) · [Before (L1567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1567)

```diff
-       cU.x === XU && cU.y === zU || (cU.x = XU, cU.y = zU, UU.style.translate = `${XU}vw ${zU}vh`)
+       AH.x === BH && AH.y === LH || (AH.x = BH, AH.y = LH, HH.style.translate = `${BH}vw ${LH}vh`)
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1570` → after: `L1570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1570) · [Before (L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1570)

```diff
-   37794: (UU, XU, zU) => {
+   37941: (HH, BH, LH) => {
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1572` → after: `L1572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1572) · [Before (L1572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1572)

```diff
-       b: () => cU
+       d: () => AH
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ccd97afffbd82b0248ddbcd0cf86d2135cedcf9be87e83f6bb735a74b499e08b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ccd97afffbd82b0248ddbcd0cf86d2135cedcf9be87e83f6bb735a74b499e08bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ccd97afffbd82b0248ddbcd0cf86d2135cedcf9be87e83f6bb735a74b499e08b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js#L4)

```diff
-   40288: (UU, XU, zU) => {
+   40421: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ccd97afffbd82b0248ddbcd0cf86d2135cedcf9be87e83f6bb735a74b499e08bR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ccd97afffbd82b0248ddbcd0cf86d2135cedcf9be87e83f6bb735a74b499e08b) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js#L63)

```diff
-             "ballState" === UU ? (oU = null !== (zU = XU.eId) && void 0 !== zU ? zU : null, oU || aU()) : "frozen" === UU ? FU = XU.frozen : "pitchInfo" === UU && (DU = XU.goalZRed, EU = XU.goalZBlue, YU = Math.abs(EU - DU) / 2)
+             "ballState" === HH ? (zH = null !== (LH = BH.eId) && void 0 !== LH ? LH : null, zH || QH()) : "frozen" === HH ? tH = BH.frozen : "pitchInfo" === HH && (CH = BH.goalZRed, EH = BH.goalZBlue, XH = Math.abs(EH - CH) / 2)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js` (Changed code · before: `L65` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ccd97afffbd82b0248ddbcd0cf86d2135cedcf9be87e83f6bb735a74b499e08bR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ccd97afffbd82b0248ddbcd0cf86d2135cedcf9be87e83f6bb735a74b499e08b) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js#L65) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js#L65)

```diff
-           LY: UU => {
+           IX: HH => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7e2a658cdb071fc04e443eb5865f2c7ebf2ef465287f9b0e69e846ff05efd13a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7e2a658cdb071fc04e443eb5865f2c7ebf2ef465287f9b0e69e846ff05efd13aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7e2a658cdb071fc04e443eb5865f2c7ebf2ef465287f9b0e69e846ff05efd13a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js#L4)

```diff
-   34859: (UU, XU, zU) => {
+   34986: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7e2a658cdb071fc04e443eb5865f2c7ebf2ef465287f9b0e69e846ff05efd13aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7e2a658cdb071fc04e443eb5865f2c7ebf2ef465287f9b0e69e846ff05efd13a) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js#L8-L9)

```diff
-     var cU = zU(4977),
-       yU = zU(4982);
+     var AH = LH(4947),
+       rH = LH(4951);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7e2a658cdb071fc04e443eb5865f2c7ebf2ef465287f9b0e69e846ff05efd13aR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7e2a658cdb071fc04e443eb5865f2c7ebf2ef465287f9b0e69e846ff05efd13a) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js#L20)

```diff
-       return (0, yU.c)(!0, zU, QU, oU), (0, cU.d)(FU, zU), zU || AU ? XU : null
+       return (0, rH.c)(!0, LH, SH, zH), (0, AH.e)(tH, LH), LH || hH ? BH : null
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7e2a658cdb071fc04e443eb5865f2c7ebf2ef465287f9b0e69e846ff05efd13aR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7e2a658cdb071fc04e443eb5865f2c7ebf2ef465287f9b0e69e846ff05efd13a) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js#L23)

```diff
-   37414: (UU, XU, zU) => {
+   37565: (HH, BH, LH) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7e2a658cdb071fc04e443eb5865f2c7ebf2ef465287f9b0e69e846ff05efd13aR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7e2a658cdb071fc04e443eb5865f2c7ebf2ef465287f9b0e69e846ff05efd13a) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js#L25)

```diff
-       b: () => yU
+       e: () => rH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js` (Changed code · before: `L52` → after: `L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7e2a658cdb071fc04e443eb5865f2c7ebf2ef465287f9b0e69e846ff05efd13aR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7e2a658cdb071fc04e443eb5865f2c7ebf2ef465287f9b0e69e846ff05efd13a) · [After (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js#L52) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js#L52)

```diff
-   39271: (UU, XU, zU) => {
+   39361: (HH, BH, LH) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js` (Changed code · before: `L54` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7e2a658cdb071fc04e443eb5865f2c7ebf2ef465287f9b0e69e846ff05efd13aR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7e2a658cdb071fc04e443eb5865f2c7ebf2ef465287f9b0e69e846ff05efd13a) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js#L54) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js#L54)

```diff
-       e: () => AU,
+       d: () => hH,
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js` (Changed code · before: `L57-L59` → after: `L57-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7e2a658cdb071fc04e443eb5865f2c7ebf2ef465287f9b0e69e846ff05efd13aR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7e2a658cdb071fc04e443eb5865f2c7ebf2ef465287f9b0e69e846ff05efd13a) · [After (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js#L57-L59) · [Before (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js#L57-L59)

```diff
-     var cU = zU(344),
-       yU = zU(34884),
-       QU = zU(3660);
+     var AH = LH(317),
+       rH = LH(35006),
+       SH = LH(3639);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js` (Changed code · before: `L62-L63` → after: `L62-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7e2a658cdb071fc04e443eb5865f2c7ebf2ef465287f9b0e69e846ff05efd13aR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7e2a658cdb071fc04e443eb5865f2c7ebf2ef465287f9b0e69e846ff05efd13a) · [After (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js#L62-L63) · [Before (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js#L62-L63)

```diff
-       const XU = (0, QU.c)(UU);
-       return (0, cU.Wb)(UU, void 0 === XU ? void 0 : (0, yU.displayNameOf)(XU))
+       const BH = (0, SH.e)(HH);
+       return (0, AH.Yb)(HH, void 0 === BH ? void 0 : (0, rH.displayNameOf)(BH))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js` (Changed code · before: `L70` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7e2a658cdb071fc04e443eb5865f2c7ebf2ef465287f9b0e69e846ff05efd13aR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7e2a658cdb071fc04e443eb5865f2c7ebf2ef465287f9b0e69e846ff05efd13a) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js#L70) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js#L70)

```diff
-   39278: (UU, XU, zU) => {
+   39370: (HH, BH, LH) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js` (Changed code · before: `L73` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7e2a658cdb071fc04e443eb5865f2c7ebf2ef465287f9b0e69e846ff05efd13aR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7e2a658cdb071fc04e443eb5865f2c7ebf2ef465287f9b0e69e846ff05efd13a) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js#L73) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js#L73)

```diff
-       g: () => QU
+       e: () => SH
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js` (Changed code · before: `L93` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7e2a658cdb071fc04e443eb5865f2c7ebf2ef465287f9b0e69e846ff05efd13aR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7e2a658cdb071fc04e443eb5865f2c7ebf2ef465287f9b0e69e846ff05efd13a) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js#L93) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-greenville-greenvilleClient.js#L93)

```diff
-       cU.x === XU && cU.y === zU || (cU.x = XU, cU.y = zU, UU.style.translate = `${XU}vw ${zU}vh`)
+       AH.x === BH && AH.y === LH || (AH.x = BH, AH.y = LH, HH.style.translate = `${BH}vw ${LH}vh`)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/clientGame-hideseek-hideseekClient.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/clientGame-hideseek-hideseekClient.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f7674cc5ab0478f29eb6b7140200fab7be849791eca2b2b4dd166949b40eeea)

#### 1. `bundles/preprod.bloxd.io/chunks/js/clientGame-hideseek-hideseekClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f7674cc5ab0478f29eb6b7140200fab7be849791eca2b2b4dd166949b40eeeaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f7674cc5ab0478f29eb6b7140200fab7be849791eca2b2b4dd166949b40eeea) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-hideseek-hideseekClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-hideseek-hideseekClient.js#L4)

```diff
-   40324: (UU, XU, zU) => {
+   40454: (HH, BH, LH) => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (74 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L4)

```diff
-   37318: (UU, XU, zU) => {
+   37472: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L6)

```diff
-       b: () => tU,
+       d: () => WH,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L8-L9)

```diff
-       f: () => NU,
-       h: () => YU
+       i: () => GH,
+       k: () => XH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L11-L18` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L11-L18) · [Before (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L11-L18)

```diff
-     var cU = zU(34859),
-       yU = zU(37325),
-       QU = zU(37334),
-       AU = zU(9282),
-       FU = zU(1492),
-       oU = zU(61),
-       DU = zU(73),
-       EU = zU(1305);
+     var AH = LH(34986),
+       rH = LH(37474),
+       SH = LH(37479),
+       hH = LH(9412),
+       tH = LH(1450),
+       zH = LH(45),
+       CH = LH(69),
+       EH = LH(1225);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L22-L23` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L22-L23) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L22-L23)

```diff
-       return (0, FU.j)(yU.d, (0, yU.o)()), (0, EU.jsx)(EU.Fragment, {
-         children: null === (UU = (0, yU.o)()) || void 0 === UU ? void 0 : UU.content
+       return (0, tH.e)(rH.b, (0, rH.p)()), (0, EH.jsx)(EH.Fragment, {
+         children: null === (HH = (0, rH.p)()) || void 0 === HH ? void 0 : HH.content
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L32-L33` → after: `L32-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L32-L33) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L32-L33)

```diff
-       (0, FU.j)(yU.d, (0, yU.o)());
-       const DU = null === (XU = (0, yU.o)()) || void 0 === XU ? void 0 : XU.menu;
+       (0, tH.e)(rH.b, (0, rH.p)());
+       const CH = null === (BH = (0, rH.p)()) || void 0 === BH ? void 0 : BH.menu;
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L36-L37` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L36-L37) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L36-L37)

```diff
-         zU || (null === DU || void 0 === DU || null === (UU = DU.onClose) || void 0 === UU || UU.call(DU), (0, QU.t)())
-       }), [zU, DU]), (0, oU.useEffect)((() => zU ? (0, AU.d)(QU.x, QU.i) : void 0), [zU]), (0, EU.jsx)(cU.e, {
+         LH || (null === CH || void 0 === CH || null === (HH = CH.onClose) || void 0 === HH || HH.call(CH), (0, SH.r)())
+       }), [LH, CH]), (0, zH.useEffect)((() => LH ? (0, hH.e)(SH.A, SH.g) : void 0), [LH]), (0, EH.jsx)(AH.e, {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L63)

```diff
-         id: `clientGameHud-${XU}`,
+         id: `clientGameHud-${BH}`,
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L77` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L77) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L77)

```diff
-         return null !== (UU = IU.get(zU)) && void 0 !== UU ? UU : null
+         return null !== (HH = YH.get(LH)) && void 0 !== HH ? HH : null
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L82)

```diff
-           yU(null !== (UU = IU.get(zU)) && void 0 !== UU ? UU : null)
+           rH(null !== (HH = YH.get(LH)) && void 0 !== HH ? HH : null)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L90)

```diff
-   34859: (UU, XU, zU) => {
+   34986: (HH, BH, LH) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L94-L95` → after: `L94-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L94-L95) · [Before (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L94-L95)

```diff
-     var cU = zU(4977),
-       yU = zU(4982);
+     var AH = LH(4947),
+       rH = LH(4951);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L106)

```diff
-       return (0, yU.c)(!0, zU, QU, oU), (0, cU.d)(FU, zU), zU || AU ? XU : null
+       return (0, rH.c)(!0, LH, SH, zH), (0, AH.e)(tH, LH), LH || hH ? BH : null
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L109` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L109) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L109)

```diff
-   9282: (UU, XU, zU) => {
+   9412: (HH, BH, LH) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L112)

```diff
-       d: () => yU
+       e: () => rH
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L129` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L129) · [Before (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L129)

```diff
-   37334: (UU, XU, zU) => {
+   37479: (HH, BH, LH) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L131-L134` → after: `L131-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L131-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L131-L137) · [Before (L131-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L131-L134)

```diff
-       e: () => QU,
-       i: () => aU,
-       l: () => tU,
-       o: () => FU,
+       A: () => uH,
+       C: () => xH,
+       c: () => SH,
+       g: () => QH,
+       j: () => WH,
+       k: () => tH,
+       n: () => GH,
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L137-L140` → after: `L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L140) · [Before (L137-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L137-L140)

```diff
-       v: () => YU,
-       w: () => GU,
-       x: () => pU,
-       y: () => kU
+       x: () => vH
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L142-L143` → after: `L142-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L142-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L142-L143) · [Before (L142-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L142-L143)

```diff
-     var cU = zU(27),
-       yU = zU(31);
+     var AH = LH(15),
+       rH = LH(18);
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L150` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L150) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L150)

```diff
-         return (null !== (zU = UU.order) && void 0 !== zU ? zU : 0) - (null !== (cU = XU.order) && void 0 !== cU ? cU : 0)
+         return (null !== (LH = HH.order) && void 0 !== LH ? LH : 0) - (null !== (AH = BH.order) && void 0 !== AH ? AH : 0)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L167` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L167) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L167)

```diff
-       UU.panel && "clientGame" === cU.e.get("openInGameMenuName") && DU(UU.id)
+       HH.panel && "clientGame" === AH.c.get("openInGameMenuName") && CH(HH.id)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L193)

```diff
-       "inventory" !== cU.e.get("openInGameMenuName") && DU(null)
+       "inventory" !== AH.c.get("openInGameMenuName") && CH(null)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L202-L203` → after: `L202-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L202-L203) · [Before (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L202-L203)

```diff
-       return AU.set(UU.id, UU), yU.k.UY(QU, FU(), !0), () => {
-         AU.get(UU.id) === UU && (AU.delete(UU.id), yU.k.UY(QU, FU()))
+       return hH.set(HH.id, HH), rH.k.AX(SH, tH(), !0), () => {
+         hH.get(HH.id) === HH && (hH.delete(HH.id), rH.k.AX(SH, tH()))
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L207` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L207) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L207)

```diff
-   37325: (UU, XU, zU) => {
+   37474: (HH, BH, LH) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L209-L210` → after: `L209-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L209-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L209-L211) · [Before (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L209-L210)

```diff
-       d: () => FU,
-       h: () => kU,
+       b: () => tH,
+       c: () => xH,
+       g: () => WH,
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L214-L215` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L214) · [Before (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L214-L215)

```diff
-       o: () => DU,
-       r: () => aU,
+       p: () => CH,
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L217` → after: `L216-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L216-L217) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L217)

```diff
-       u: () => EU
+       u: () => YH,
+       v: () => EH
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L219-L222` → after: `L219-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L219-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L219-L222) · [Before (L219-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L219-L222)

```diff
-     var cU = zU(27),
-       yU = zU(31),
-       QU = zU(1310),
-       AU = zU(37334);
+     var AH = LH(15),
+       rH = LH(18),
+       SH = LH(1241),
+       hH = LH(37479);
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L235-L236` → after: `L235-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L235-L236) · [Before (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L235-L236)

```diff
-       return oU = zU, yU.k.UY(FU, oU, !0), () => {
-         oU === zU && (oU = null, pU = !1, tU(), yU.k.UY(FU, null))
+       return zH = LH, rH.k.AX(tH, zH, !0), () => {
+         zH === LH && (zH = null, uH = !1, WH(), rH.k.AX(tH, null))
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L253-L254` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L253-L254) · [Before (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L253-L254)

```diff
-       const UU = cU.e.get("openInGameMenuName");
-       "clientGame" !== UU && (pU = "inventory" === UU), (0, AU.r)() || (0, AU.l)(), (0, QU.u)(QU.c), cU.e.set({
+       const HH = AH.c.get("openInGameMenuName");
+       "clientGame" !== HH && (uH = "inventory" === HH), (0, hH.n)() || (0, hH.j)(), (0, SH.x)(SH.d), AH.c.set({
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L273` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L273) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L273)

```diff
-       "clientGame" === cU.e.get("openInGameMenuName") && cU.e.set({
+       "clientGame" === AH.c.get("openInGameMenuName") && AH.c.set({
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L275` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L275) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L275)

```diff
-       }), UU || (0, AU.l)(), pU = !1
+       }), HH || (0, hH.j)(), uH = !1
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L278` → after: `L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L278) · [Before (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L278)

```diff
-   40328: (UU, XU, zU) => {
+   40463: (HH, BH, LH) => {
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L292-L294` → after: `L292-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L292-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L292-L294) · [Before (L292-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L292-L294)

```diff
-     var yU = zU(61),
-       QU = zU(38782),
-       AU = zU(344);
+     var rH = LH(45),
+       SH = LH(38905),
+       hH = LH(317);
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L298` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L298) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L298)

```diff
-       return `${"Basic"===XU?"":`${XU} `}${"Simple"===UU?"":`${UU} `}Lucky Block`
+       return `${"Basic"===BH?"":`${BH} `}${"Simple"===HH?"":`${HH} `}Lucky Block`
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L311` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L311) · [Before (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L311)

```diff
-       IU = [...["Red", "Blue", "Green", "Yellow"].map((UU => `${(0,AU._)(UU)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", YU, ...NU];
+       YH = [...["Red", "Blue", "Green", "Yellow"].map((HH => `${(0,hH.X)(HH)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", XH, ...GH];
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L316` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L316) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L316)

```diff
-     var aU = zU(646);
+     var QH = LH(619);
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L332-L334` → after: `L332-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L332-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L332-L334) · [Before (L332-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L332-L334)

```diff
-       length: aU.s - aU.o
-     }, ((UU, XU) => aU.o + XU)), ...Array.from({
-       length: aU.o
+       length: QH.p - QH.m
+     }, ((HH, BH) => QH.m + BH)), ...Array.from({
+       length: QH.m
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L344` → after: `L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L344) · [Before (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L344)

```diff
-         (null === cU || void 0 === cU ? void 0 : cU.name) === UU && (null !== (XU = cU.amount) && void 0 !== XU ? XU : 1) <= 1 && GU(UU) && this.pending.set(zU, UU)
+         (null === AH || void 0 === AH ? void 0 : AH.name) === HH && (null !== (BH = AH.amount) && void 0 !== BH ? BH : 1) <= 1 && vH(HH) && this.pending.set(LH, HH)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L347` → after: `L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L347) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L347)

```diff
-         XU < aU.o && null === this.inventory.itemAt(XU) && GU(UU) && this.refill(XU, UU)
+         BH < QH.m && null === this.inventory.itemAt(BH) && vH(HH) && this.refill(BH, HH)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L360` → after: `L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L360) · [Before (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L360)

```diff
-             if (!FU || AU < aU.o && XU !== zU) continue;
+             if (!tH || hH < QH.m && BH !== LH) continue;
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L373-L375` → after: `L373-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L373-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L373-L375) · [Before (L373-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L373-L375)

```diff
-     var BU = zU(37325),
-       ZU = zU(73),
-       RU = zU(1106),
+     var PH = LH(37474),
+       TH = LH(69),
+       UH = LH(1038),
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L391-L398` → after: `L391-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L391-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L391-L398) · [Before (L391-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L391-L398)

```diff
-     var CU = zU(320),
-       wU = zU(2616),
-       qU = zU(27),
-       OU = zU(2827),
-       SU = zU(1993),
-       rU = zU(37318),
-       uU = zU(1390);
-     var fU = zU(1305);
+     var oH = LH(304),
+       IH = LH(2628),
+       fH = LH(15),
+       lH = LH(2817),
+       KH = LH(1986),
+       cH = LH(37472),
+       eH = LH(1315);
+     var qH = LH(1225);
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L400-L402` → after: `L400-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L400-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L400-L402) · [Before (L400-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L400-L402)

```diff
-       Basic: AU.H.whiteUiText,
-       Rare: AU.H.goldUiText,
-       Super: AU.H.cyanUiText
+       Basic: hH.K.whiteUiText,
+       Rare: hH.K.goldUiText,
+       Super: hH.K.cyanUiText
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L407` → after: `L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L407) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L407)

```diff
-       const UU = (0, wU.f)("currencyAmounts"),
+       const HH = (0, IH.j)("currencyAmounts"),
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L423` → after: `L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L423) · [Before (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L423)

```diff
-       } = (0, qU.q)(["openEverythingMenuName"]), DU = (0, OU.e)(), [EU, YU] = (0, yU.useState)(QU), [NU, IU] = (0, yU.useState)(null), [pU, aU] = (0, yU.useState)(0), [tU, gU] = (0, yU.useState)([]), kU = (0, yU.useRef)(QU), GU = (0, yU.useRef)(!1), BU = (0, yU.useRef)(null), RU  … [truncated]
+       } = (0, fH.m)(["openEverythingMenuName"]), CH = (0, lH.b)(), [EH, XH] = (0, rH.useState)(SH), [GH, YH] = (0, rH.useState)(null), [uH, QH] = (0, rH.useState)(0), [WH, MH] = (0, rH.useState)([]), xH = (0, rH.useRef)(SH), vH = (0, rH.useRef)(!1), PH = (0, rH.useRef)(null), UH  … [truncated]
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L456` → after: `L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L456) · [Before (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L456)

```diff
-           const zU = null !== (XU = FU.find((XU => UU < LU(XU)))) && void 0 !== XU ? XU : "Super";
+           const LH = null !== (BH = tH.find((BH => HH < kH(BH)))) && void 0 !== BH ? BH : "Super";
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L476` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L476) · [Before (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L476)

```diff
-                 transform: `scaleX(${dU.progress})`
+                 transform: `scaleX(${bH.progress})`
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L481` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L481) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L481)

```diff
-                 animationDelay: `${null!==(XU=null===NU||void 0===NU?void 0:NU.delayMs)&&void 0!==XU?XU:0}ms`
+                 animationDelay: `${null!==(BH=null===GH||void 0===GH?void 0:GH.delayMs)&&void 0!==BH?BH:0}ms`
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L487` → after: `L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L487) · [Before (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L487)

```diff
-                 animationDelay: `${null!==(cU=null===NU||void 0===NU?void 0:NU.delayMs)&&void 0!==cU?cU:0}ms`
+                 animationDelay: `${null!==(AH=null===GH||void 0===GH?void 0:GH.delayMs)&&void 0!==AH?AH:0}ms`
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L489` → after: `L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L489) · [Before (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L489)

```diff
-               children: (0, fU.jsx)(SU.c, {
+               children: (0, qH.jsx)(KH.e, {
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L493` → after: `L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L493) · [Before (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L493)

```diff
-             }, null !== (zU = null === NU || void 0 === NU ? void 0 : NU.id) && void 0 !== zU ? zU : 0), (0, fU.jsx)("span", {
+             }, null !== (LH = null === GH || void 0 === GH ? void 0 : GH.id) && void 0 !== LH ? LH : 0), (0, qH.jsx)("span", {
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L496` → after: `L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L496) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L496)

```diff
-             }), wU && (0, fU.jsx)(uU.d, {
+             }), IH && (0, qH.jsx)(eH.c, {
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L526` → after: `L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L526) · [Before (L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L526)

```diff
-           transform: `translate(${AU}px, ${FU}px) scale(0.3)`,
+           transform: `translate(${hH}px, ${tH}px) scale(0.3)`,
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L529` → after: `L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L529) · [Before (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L529)

```diff
-           transform: `translate(${oU}px, ${DU}px) scale(1.3)`,
+           transform: `translate(${zH}px, ${CH}px) scale(1.3)`,
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L533` → after: `L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L533) · [Before (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L533)

```diff
-           transform: `translate(${yU.left}px, ${yU.top}px) scale(0.8)`,
+           transform: `translate(${rH.left}px, ${rH.top}px) scale(0.8)`,
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L547` → after: `L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L547) · [Before (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L547)

```diff
-         children: (0, fU.jsx)(SU.c, {
+         children: (0, qH.jsx)(KH.e, {
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L553` → after: `L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L553) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L553)

```diff
-     var sU = zU(31);
+     var FH = LH(18);
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L565` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L565) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L565)

```diff
-       return null !== (XU = mU[UU.split(" ")[0]]) && void 0 !== XU ? XU : "#e07bff"
+       return null !== (BH = wH[HH.split(" ")[0]]) && void 0 !== BH ? BH : "#e07bff"
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L588` → after: `L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L588) · [Before (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L588)

```diff
-         this.UY()
+         this.AX()
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L603` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L603) · [Before (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L603)

```diff
-         zU && this.UY()
+         LH && this.AX()
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L609-L615` → after: `L609-L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L609-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L609-L615) · [Before (L609-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L609-L615)

```diff
-         }, sU.k.UY(nU, this.view)
-       }
-     }
-     var JU = zU(1492);
- 
-     function jU(UU) {
-       return document.querySelector(`.HotBar [data-inven-idx="${UU}"]`)
+         }, FH.k.AX(DH, this.view)
+       }
+     }
+     var aH = LH(1450);
+ 
+     function sH(HH) {
+       return document.querySelector(`.HotBar [data-inven-idx="${HH}"]`)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L625` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L625) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L625)

```diff
-         cU(null !== (UU = null === (zU = jU(XU.slot)) || void 0 === zU ? void 0 : zU.getBoundingClientRect()) && void 0 !== UU ? UU : null)
+         AH(null !== (HH = null === (LH = sH(BH.slot)) || void 0 === LH ? void 0 : LH.getBoundingClientRect()) && void 0 !== HH ? HH : null)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L666` → after: `L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L666) · [Before (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L666)

```diff
-       const zU = (0, JU.j)(nU, XU.getView());
+       const LH = (0, aH.e)(DH, BH.getView());
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L693` → after: `L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L693) · [Before (L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L693)

```diff
-           placeAgainstBeds: (0, QU.d)()
+           placeAgainstBeds: (0, SH.e)()
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L696` → after: `L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L696) · [Before (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L696)

```diff
-           FU = UU, DU = (0, BU.u)((0, yU.createElement)(yU.Fragment, null, (0, yU.createElement)(MU), (0, yU.createElement)(TU, {
+           tH = HH, CH = (0, PH.v)((0, rH.createElement)(rH.Fragment, null, (0, rH.createElement)(RH), (0, rH.createElement)(pH, {
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L704-L705` → after: `L704-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L704-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L704-L705) · [Before (L704-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L704-L705)

```diff
-         LY: () => {
-           EU.LY(), YU.LY()
+         IX: () => {
+           EH.IX(), XH.IX()
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L708` → after: `L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L708) · [Before (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L708)

```diff
-           "luckyGearUpgrade" === UU && YU.PY(XU)
+           "luckyGearUpgrade" === HH && XH.kX(BH)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L725` → after: `L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L725) · [Before (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L725)

```diff
-   38782: (UU, XU, zU) => {
+   38905: (HH, BH, LH) => {
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L727` → after: `L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L727) · [Before (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L727)

```diff
-       d: () => FU
+       e: () => tH
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L729-L732` → after: `L729-L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L729-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L729-L732) · [Before (L729-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L729-L732)

```diff
-     var cU = zU(344),
-       yU = zU(37662),
-       QU = zU(4909);
-     const AU = ["Leaf Bed", "_Leaf Bed Head", ...cU.Oc.flatMap((UU => [`${UU} Bed`, `_${UU} Bed Head`, `${UU} Strongbed`, `_${UU} Strongbed Head`]))];
+     var AH = LH(317),
+       rH = LH(37798),
+       SH = LH(4879);
+     const hH = ["Leaf Bed", "_Leaf Bed Head", ...AH.Mc.flatMap((HH => [`${HH} Bed`, `_${HH} Bed Head`, `${HH} Strongbed`, `_${HH} Strongbed Head`]))];
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L743` → after: `L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L743) · [Before (L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L743)

```diff
-           if ((0, yU.b)(UU.getMetaInfo(FU).rootName) && !UU.isEntityInteractable(oU) && (0, QU.d)(null === (DU = UU.HzU(XU)) || void 0 === DU ? void 0 : DU.typeObj.type)) return "preventAction"
+           if ((0, rH.d)(HH.getMetaInfo(tH).rootName) && !HH.isEntityInteractable(zH) && (0, SH.e)(null === (CH = HH.yLH(BH)) || void 0 === CH ? void 0 : CH.typeObj.type)) return "preventAction"
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L748` → after: `L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L748) · [Before (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L748)

```diff
-   37662: (UU, XU, zU) => {
+   37798: (HH, BH, LH) => {
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L765-L768` → after: `L765-L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L765-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L765-L768) · [Before (L765-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L765-L768)

```diff
-       b: () => AU,
-       c: () => cU,
-       g: () => QU,
-       j: () => yU
+       d: () => hH,
+       h: () => AH,
+       l: () => SH,
+       m: () => rH
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/clientGame-murderMystery-murderMysteryClient.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/clientGame-murderMystery-murderMysteryClient.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c34b5bb8ea210b3200e9f8a58f940133b77af347367b700f57f091f572ddfacb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/clientGame-murderMystery-murderMysteryClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c34b5bb8ea210b3200e9f8a58f940133b77af347367b700f57f091f572ddfacbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c34b5bb8ea210b3200e9f8a58f940133b77af347367b700f57f091f572ddfacb) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-murderMystery-murderMysteryClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-murderMystery-murderMysteryClient.js#L4)

```diff
-   40333: (UU, XU, zU) => {
+   40472: (HH, BH, LH) => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-164f5499516c06a2a58624d4d55132749302c9f9a02ccd7288c65689293571b1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-164f5499516c06a2a58624d4d55132749302c9f9a02ccd7288c65689293571b1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-164f5499516c06a2a58624d4d55132749302c9f9a02ccd7288c65689293571b1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js#L4)

```diff
-   40338: (UU, XU, zU) => {
+   40476: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-164f5499516c06a2a58624d4d55132749302c9f9a02ccd7288c65689293571b1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-164f5499516c06a2a58624d4d55132749302c9f9a02ccd7288c65689293571b1) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js#L8)

```diff
-     var cU = zU(31);
+     var AH = LH(18);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-164f5499516c06a2a58624d4d55132749302c9f9a02ccd7288c65689293571b1R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-164f5499516c06a2a58624d4d55132749302c9f9a02ccd7288c65689293571b1) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js#L16)

```diff
-           XU || "Workbench" !== yU.getMetaInfo(FU).rootName || cU.k.UY("toggleMenu", "inventory|Workbench")
+           BH || "Workbench" !== rH.getMetaInfo(tH).rootName || AH.k.AX("toggleMenu", "inventory|Workbench")
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2fe198b97e46d8af06b04e21adcbcd5852aa5948dfe8a2d5e8bc279e0afae863)

#### 1. `bundles/preprod.bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2fe198b97e46d8af06b04e21adcbcd5852aa5948dfe8a2d5e8bc279e0afae863R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2fe198b97e46d8af06b04e21adcbcd5852aa5948dfe8a2d5e8bc279e0afae863) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js#L4)

```diff
-   40342: (UU, XU, zU) => {
+   40484: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2fe198b97e46d8af06b04e21adcbcd5852aa5948dfe8a2d5e8bc279e0afae863R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2fe198b97e46d8af06b04e21adcbcd5852aa5948dfe8a2d5e8bc279e0afae863) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js#L30)

```diff
-         LY: () => {
+         IX: () => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (224 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00)

#### 1. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4)

```diff
-   37318: (UU, XU, zU) => {
+   37472: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L6)

```diff
-       b: () => tU,
+       d: () => WH,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L8-L9)

```diff
-       f: () => NU,
-       h: () => YU
+       i: () => GH,
+       k: () => XH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L11-L18` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L11-L18) · [Before (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L11-L18)

```diff
-     var cU = zU(34859),
-       yU = zU(37325),
-       QU = zU(37334),
-       AU = zU(9282),
-       FU = zU(1492),
-       oU = zU(61),
-       DU = zU(73),
-       EU = zU(1305);
+     var AH = LH(34986),
+       rH = LH(37474),
+       SH = LH(37479),
+       hH = LH(9412),
+       tH = LH(1450),
+       zH = LH(45),
+       CH = LH(69),
+       EH = LH(1225);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L22-L23` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L22-L23) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L22-L23)

```diff
-       return (0, FU.j)(yU.d, (0, yU.o)()), (0, EU.jsx)(EU.Fragment, {
-         children: null === (UU = (0, yU.o)()) || void 0 === UU ? void 0 : UU.content
+       return (0, tH.e)(rH.b, (0, rH.p)()), (0, EH.jsx)(EH.Fragment, {
+         children: null === (HH = (0, rH.p)()) || void 0 === HH ? void 0 : HH.content
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L32-L33` → after: `L32-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L32-L33) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L32-L33)

```diff
-       (0, FU.j)(yU.d, (0, yU.o)());
-       const DU = null === (XU = (0, yU.o)()) || void 0 === XU ? void 0 : XU.menu;
+       (0, tH.e)(rH.b, (0, rH.p)());
+       const CH = null === (BH = (0, rH.p)()) || void 0 === BH ? void 0 : BH.menu;
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L36-L37` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L36-L37) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L36-L37)

```diff
-         zU || (null === DU || void 0 === DU || null === (UU = DU.onClose) || void 0 === UU || UU.call(DU), (0, QU.t)())
-       }), [zU, DU]), (0, oU.useEffect)((() => zU ? (0, AU.d)(QU.x, QU.i) : void 0), [zU]), (0, EU.jsx)(cU.e, {
+         LH || (null === CH || void 0 === CH || null === (HH = CH.onClose) || void 0 === HH || HH.call(CH), (0, SH.r)())
+       }), [LH, CH]), (0, zH.useEffect)((() => LH ? (0, hH.e)(SH.A, SH.g) : void 0), [LH]), (0, EH.jsx)(AH.e, {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L63)

```diff
-         id: `clientGameHud-${XU}`,
+         id: `clientGameHud-${BH}`,
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L77` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L77) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L77)

```diff
-         return null !== (UU = IU.get(zU)) && void 0 !== UU ? UU : null
+         return null !== (HH = YH.get(LH)) && void 0 !== HH ? HH : null
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L82)

```diff
-           yU(null !== (UU = IU.get(zU)) && void 0 !== UU ? UU : null)
+           rH(null !== (HH = YH.get(LH)) && void 0 !== HH ? HH : null)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L90)

```diff
-   34859: (UU, XU, zU) => {
+   34986: (HH, BH, LH) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L94-L95` → after: `L94-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L94-L95) · [Before (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L94-L95)

```diff
-     var cU = zU(4977),
-       yU = zU(4982);
+     var AH = LH(4947),
+       rH = LH(4951);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L106)

```diff
-       return (0, yU.c)(!0, zU, QU, oU), (0, cU.d)(FU, zU), zU || AU ? XU : null
+       return (0, rH.c)(!0, LH, SH, zH), (0, AH.e)(tH, LH), LH || hH ? BH : null
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L109` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L109) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L109)

```diff
-   37418: (UU, XU, zU) => {
+   37569: (HH, BH, LH) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L111` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L111) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L111)

```diff
-       d: () => QU,
+       e: () => SH,
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L113-L114` → after: `L113-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L113-L114) · [Before (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L113-L114)

```diff
-       h: () => FU,
-       j: () => oU
+       i: () => tH,
+       k: () => zH
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L116-L117` → after: `L116-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L116-L117) · [Before (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L116-L117)

```diff
-     var cU = zU(61),
-       yU = zU(3478);
+     var AH = LH(45),
+       rH = LH(3465);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L123)

```diff
-       const [XU] = (0, yU.e)(), [zU, oU] = (0, cU.useState)(!1);
+       const [BH] = (0, rH.b)(), [LH, zH] = (0, AH.useState)(!1);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L126-L127` → after: `L126-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L126-L127) · [Before (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L126-L127)

```diff
-         const XU = document.querySelector(`.${AU}`),
-           zU = document.querySelector(`.${FU}`),
+         const BH = document.querySelector(`.${hH}`),
+           LH = document.querySelector(`.${tH}`),
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L144` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L144) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L144)

```diff
-   9282: (UU, XU, zU) => {
+   9412: (HH, BH, LH) => {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L147` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L147) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L147)

```diff
-       d: () => yU
+       e: () => rH
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L164` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L164) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L164)

```diff
-   39299: (UU, XU, zU) => {
+   39396: (HH, BH, LH) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L168` → after: `L167-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L167-L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L168)

```diff
-       g: () => oU
+       g: () => tH,
+       h: () => zH
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L208` → after: `L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L208) · [Before (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L208)

```diff
-   40349: (UU, XU, zU) => {
+   40486: (HH, BH, LH) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L214-L220` → after: `L214-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L214-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L214-L220) · [Before (L214-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L214-L220)

```diff
-     var QU = zU(61),
-       AU = zU(37325),
-       FU = zU(27),
-       oU = zU(1492),
-       DU = zU(2058),
-       EU = zU(1193),
-       YU = zU(1106),
+     var SH = LH(45),
+       hH = LH(37474),
+       tH = LH(15),
+       zH = LH(1450),
+       CH = LH(2064),
+       EH = LH(1123),
+       XH = LH(1038),
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L222-L229` → after: `L222-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L222-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L222-L229) · [Before (L222-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L222-L229)

```diff
-       IU = zU(1680),
-       pU = zU(40357),
-       aU = zU(37318),
-       tU = zU(1390),
-       gU = zU(1993),
-       kU = zU(2053),
-       GU = zU(3805),
-       BU = zU(1800);
+       YH = LH(1659),
+       uH = LH(40495),
+       QH = LH(37472),
+       WH = LH(1315),
+       MH = LH(1986),
+       xH = LH(2059),
+       vH = LH(3779),
+       PH = LH(1789);
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L238` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L238) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L238)

```diff
-     var PU = zU(31);
+     var VH = LH(18);
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L328` → after: `L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L328) · [Before (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L328)

```diff
-       return null !== (XU = CU.get(UU)) && void 0 !== XU ? XU : null
+       return null !== (BH = oH.get(HH)) && void 0 !== BH ? BH : null
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L392` → after: `L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L392) · [Before (L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L392)

```diff
-           this.placement.stop(), this.oY(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
+           this.placement.stop(), this.XX(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L394` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L394) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L394)

```diff
-           this.placement.start(UU), (0, AU.j)()
+           this.placement.start(HH), (0, hH.g)()
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L396` → after: `L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L396) · [Before (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L396)

```diff
-           this.api.sendCommand(`${yU} cancel`)
+           this.api.sendCommand(`${rH} cancel`)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L404` → after: `L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L404) · [Before (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L404)

```diff
-         this.pages = OU(XU, zU), PU.k.UY(SU, this.pages, !0)
+         this.pages = lH(BH, LH), VH.k.AX(KH, this.pages, !0)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L408` → after: `L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L408) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L408)

```diff
-         this.openRequested = XU, this.LY()
+         this.openRequested = BH, this.IX()
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L412` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L412) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L412)

```diff
-         null === UU || FU.e.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, IU.p)() || (0, BU.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = UU, (0, AU.r)()))
+         null === HH || tH.c.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, YH.t)() || (0, PH.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = HH, (0, hH.t)()))
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L415` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L415) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L415)

```diff
-         this.reported.has(UU) || (this.reported.add(UU), this.api.sendCommand(`${yU} report ${UU}`))
+         this.reported.has(HH) || (this.reported.add(HH), this.api.sendCommand(`${rH} report ${HH}`))
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L418` → after: `L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L418) · [Before (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L418)

```diff
-     var uU = zU(1305);
+     var eH = LH(1225);
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L425` → after: `L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L425) · [Before (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L425)

```diff
-       const zU = (0, oU.j)(SU, XU.getPages()),
+       const LH = (0, zH.e)(KH, BH.getPages()),
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L428` → after: `L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L428) · [Before (L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L428)

```diff
-         } = (0, FU.q)(["isTouchScreen"]),
+         } = (0, tH.m)(["isTouchScreen"]),
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L431` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L431) · [Before (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L431)

```diff
-         } = (0, EU.I)(),
+         } = (0, EH.B)(),
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L434-L435` → after: `L434-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L434-L435) · [Before (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L434-L435)

```diff
-       return (0, QU.useEffect)((() => YU ? (0, pU.d)(fU) : void 0), [YU]), (0, GU.d)((UU => YU && UU.code === fU && !UU.repeat && !(0, BU.isTypingInInput)()), (UU => {
-         (0, IU.C)(UU, !0, AU.r)
+       return (0, SH.useEffect)((() => XH ? (0, uH.b)(qH) : void 0), [XH]), (0, vH.c)((HH => XH && HH.code === qH && !HH.repeat && !(0, PH.isTypingInInput)()), (HH => {
+         (0, YH.H)(HH, !0, hH.t)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L446)

```diff
-             onClick: AU.r,
+             onClick: hH.t,
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L449` → after: `L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L449) · [Before (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L449)

```diff
-               children: (0, uU.jsx)(gU.c, {
+               children: (0, eH.jsx)(MH.e, {
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L453` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L453) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L453)

```diff
-             }), yU("plotsGame:journalButton"), !cU && (0, uU.jsx)(kU.c, {
+             }), rH("plotsGame:journalButton"), !AH && (0, eH.jsx)(xH.b, {
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L456` → after: `L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L456) · [Before (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L456)

```diff
-             }), "openJournal" === DU.hint && (0, uU.jsx)(tU.d, {
+             }), "openJournal" === CH.hint && (0, eH.jsx)(WH.c, {
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L464` → after: `L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L464) · [Before (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L464)

```diff
-     var HU = zU(9782);
+     var NH = LH(9940);
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L495` → after: `L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L495) · [Before (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L495)

```diff
-         return `r${UU}|m${Number(XU)}`
+         return `r${HH}|m${Number(BH)}`
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L529` → after: `L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L529) · [Before (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L529)

```diff
-         const [, IU, pU] = null !== (yU = sU.exec(YU)) && void 0 !== yU ? yU : [];
+         const [, YH, uH] = null !== (rH = FH.exec(XH)) && void 0 !== rH ? rH : [];
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L532` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L532) · [Before (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L532)

```diff
-           NU = null !== (aU = null === (tU = QU[`${EU}|meta|${[VU.split("").filter(((UU,XU)=>IU.split("").some((UU=>{const zU=VU.indexOf(UU);return((cU?3-zU:zU)+AU)%4===XU})))).join(""),pU].filter(Boolean).join("|")}`]) || void 0 === tU ? void 0 : tU.id) && void 0 !== aU ? aU : F … [truncated]
+           GH = null !== (QH = null === (WH = SH[`${EH}|meta|${[nH.split("").filter(((HH,BH)=>YH.split("").some((HH=>{const LH=nH.indexOf(HH);return((AH?3-LH:LH)+hH)%4===BH})))).join(""),uH].filter(Boolean).join("|")}`]) || void 0 === WH ? void 0 : WH.id) && void 0 !== QH ? QH : t … [truncated]
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L537` → after: `L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L537) · [Before (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L537)

```diff
-           let XU = YU.replace(`rot${DU}`, `rot${UU}`);
+           let BH = XH.replace(`rot${CH}`, `rot${HH}`);
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L542` → after: `L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L542) · [Before (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L542)

```diff
-             XU = `${yU[1]}|${UU.join("")}`
+             BH = `${rH[1]}|${HH.join("")}`
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L544-L545` → after: `L544-L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L544-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L544-L545) · [Before (L544-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L544-L545)

```diff
-           const AU = `${EU}|${XU}`;
-           if (NU = null !== (gU = null === (kU = QU[AU]) || void 0 === kU ? void 0 : kU.id) && void 0 !== gU ? gU : null, null === NU) {
+           const hH = `${EH}|${BH}`;
+           if (GH = null !== (MH = null === (xH = SH[hH]) || void 0 === xH ? void 0 : xH.id) && void 0 !== MH ? MH : null, null === GH) {
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L559-L560` → after: `L559-L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L559-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L559-L560) · [Before (L559-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L559-L560)

```diff
-       const QU = yU ? XU : UU;
-       return null === cU ? QU : cU - QU
+       const SH = rH ? BH : HH;
+       return null === AH ? SH : AH - SH
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L568-L569` → after: `L568-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L568-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L568-L569) · [Before (L568-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L568-L569)

```diff
-       const QU = yU ? UU : XU;
-       return null === cU ? QU : cU - QU
+       const SH = rH ? HH : BH;
+       return null === AH ? SH : AH - SH
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L636` → after: `L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L636) · [Before (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L636)

```diff
-       const zU = `${UU}|${XU}`;
+       const LH = `${HH}|${BH}`;
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L660` → after: `L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L660) · [Before (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L660)

```diff
-               throw new Error(`Invalid rotation: ${UU}`)
+               throw new Error(`Invalid rotation: ${HH}`)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L667` → after: `L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L667) · [Before (L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L667)

```diff
-         }(XU, oU, DU), YU = mU.for(HU.h), NU = QU.map((UU => (0, HU.f)(YU.turnBlockId((0, HU.j)(UU), XU, !1)))), IU = [];
+         }(BH, zH, CH), XH = wH.for(NH.g), GH = SH.map((HH => (0, NH.d)(XH.turnBlockId((0, NH.h)(HH), BH, !1)))), YH = [];
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L701` → after: `L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L701) · [Before (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L701)

```diff
-             cU[XU[1]] = (null !== (zU = cU[XU[1]]) && void 0 !== zU ? zU : 0) + 1
+             AH[BH[1]] = (null !== (LH = AH[BH[1]]) && void 0 !== LH ? LH : 0) + 1
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L722` → after: `L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L722) · [Before (L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L722)

```diff
-         this.shown = UU, this.topOpen = 0, null === UU && this.UY(null)
+         this.shown = HH, this.topOpen = 0, null === HH && this.AX(null)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L726` → after: `L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L726) · [Before (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L726)

```diff
-         null !== cU && (UU >= XU && (this.topOpen = zU), this.UY(hU(cU.id, XU - cU.y, UU >= XU ? zU : this.topOpen + zU)))
+         null !== AH && (HH >= BH && (this.topOpen = LH), this.AX(yH(AH.id, BH - AH.y, HH >= BH ? LH : this.topOpen + LH)))
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L730` → after: `L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L730) · [Before (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L730)

```diff
-         (null === UU || void 0 === UU ? void 0 : UU.id) === (null === XU || void 0 === XU ? void 0 : XU.id) && (null === UU || void 0 === UU ? void 0 : UU.filled) === (null === XU || void 0 === XU ? void 0 : XU.filled) && (null === UU || void 0 === UU ? void 0 : UU.total) === (nu … [truncated]
+         (null === HH || void 0 === HH ? void 0 : HH.id) === (null === BH || void 0 === BH ? void 0 : BH.id) && (null === HH || void 0 === HH ? void 0 : HH.filled) === (null === BH || void 0 === BH ? void 0 : BH.filled) && (null === HH || void 0 === HH ? void 0 : HH.total) === (nu … [truncated]
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L744` → after: `L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L744) · [Before (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L744)

```diff
-         this.plot = UU, PU.k.UY(XX, UU, !0)
+         this.plot = HH, VH.k.AX(BB, HH, !0)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L750` → after: `L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L750) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L750)

```diff
-         this.guide = UU, PU.k.UY(zX, UU, !0)
+         this.guide = HH, VH.k.AX(LB, HH, !0)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L753` → after: `L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L753) · [Before (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L753)

```diff
-         PU.k.UY(cX, void 0, !0)
+         VH.k.AX(AB, void 0, !0)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L756-L759` → after: `L756-L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L756-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L756-L759) · [Before (L756-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L756-L759)

```diff
-     var QX = zU(1294),
-       AX = zU(39348),
-       FX = zU(37604),
-       oX = zU(1515);
+     var SB = LH(1214),
+       hB = LH(39448),
+       tB = LH(37747),
+       zB = LH(1471);
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L768` → after: `L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L768) · [Before (L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L768)

```diff
-       } = (0, EU.I)();
+       } = (0, EH.B)();
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L772` → after: `L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L772) · [Before (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L772)

```diff
-         ...(0, oX.f)(XU, "pointerup"),
+         ...(0, zB.c)(BH, "pointerup"),
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L786-L787` → after: `L786-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L786-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L786-L787) · [Before (L786-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L786-L787)

```diff
-       } = (0, EU.I)(), FU = (0, QU.useRef)(XU);
-       return FU.current = XU, (0, QX.t)("popup", FU, null === cU ? null : cU.onSkip, null !== cU, null, "controller:menusSkipTutorial"), (0, uU.jsxs)(FX.d, {
+       } = (0, EH.B)(), tH = (0, SH.useRef)(BH);
+       return tH.current = BH, (0, SB.r)("popup", tH, null === AH ? null : AH.onSkip, null !== AH, null, "controller:menusSkipTutorial"), (0, eH.jsxs)(tB.g, {
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L827` → after: `L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L827) · [Before (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L827)

```diff
-           children: (0, uU.jsx)(tU.d, {
+           children: (0, eH.jsx)(WH.c, {
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L857` → after: `L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L857) · [Before (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L857)

```diff
-               transform: `scaleX(${cU/zU})`
+               transform: `scaleX(${AH/LH})`
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L874` → after: `L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L874) · [Before (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L874)

```diff
-       } = (0, EU.I)(), {
+       } = (0, EH.B)(), {
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L876` → after: `L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L876) · [Before (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L876)

```diff
-       } = (0, FU.q)(["isTouchScreen"]), QU = XU.filled < 5;
+       } = (0, tH.m)(["isTouchScreen"]), SH = BH.filled < 5;
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L883` → after: `L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L883) · [Before (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L883)

```diff
-             children: (0, uU.jsx)(tU.d, {
+             children: (0, eH.jsx)(WH.c, {
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L915` → after: `L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L915) · [Before (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L915)

```diff
-         children: (0, uU.jsx)(tU.d, {
+         children: (0, eH.jsx)(WH.c, {
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L921-L929` → after: `L921-L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L921-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L921-L929) · [Before (L921-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L921-L929)

```diff
-     var tX = zU(1310),
-       gX = zU(2827),
-       kX = zU(39196),
-       GX = zU(38938),
-       BX = zU(37659),
-       ZX = zU(9821),
-       RX = zU(9836),
-       PX = zU(344),
-       WX = zU(38557);
+     var WB = LH(1241),
+       MB = LH(2817),
+       xB = LH(39279),
+       vB = LH(39058),
+       PB = LH(37793),
+       TB = LH(9965),
+       UB = LH(9982),
+       VB = LH(317),
+       OB = LH(38667);
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L950` → after: `L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L950) · [Before (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L950)

```diff
-       LX = [...BX.b.blockRemoveActionRoots, ...GX.e, ...ZX.e, "Board", "Code Block", "Custom Lobby Block"],
+       kB = [...PB.d.blockRemoveActionRoots, ...vB.d, ...TB.j, "Board", "Code Block", "Custom Lobby Block"],
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L957` → after: `L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L957) · [Before (L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L957)

```diff
-           XU = Math.max(...UU.map((UU => HU.h[UU].id))) + 1,
+           BH = Math.max(...HH.map((HH => NH.g[HH].id))) + 1,
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L977` → after: `L977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L977) · [Before (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L977)

```diff
-           } = HU.h[NU];
+           } = NH.g[GH];
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L983` → after: `L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L983) · [Before (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L983)

```diff
-             cU[UU] = DU(`${XU.rootName}|rot${zU?XU.rot%4+1:XU.rot}|${XU.halfblockPlacement}|${pU.replace("Right","Left")}`)
+             AH[HH] = CH(`${BH.rootName}|rot${LH?BH.rot%4+1:BH.rot}|${BH.halfblockPlacement}|${uH.replace("Right","Left")}`)
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L985` → after: `L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L985) · [Before (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L985)

```diff
-           yU[UU] = IU ? 1 : 0, QU[UU] = oU || null !== XU.open || NU in WX.c || EU.has(XU.rootName) || void 0 !== (0, GX.g)(XU.rootName) ? 1 : 0;
+           rH[HH] = YH ? 1 : 0, SH[HH] = zH || null !== BH.open || GH in OB.c || EH.has(BH.rootName) || void 0 !== (0, vB.h)(BH.rootName) ? 1 : 0;
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L989` → after: `L989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L989) · [Before (L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L989)

```diff
-           AU[UU] = null !== XU.open || GX.e.includes(aU) || aU.includes("Bookshelf") || aU.includes("Mailbox") ? 1 : 0, FU[UU] = null !== (YU = (0, kX.i)(UU)) && void 0 !== YU ? YU : aU
+           hH[HH] = null !== BH.open || vB.d.includes(QH) || QH.includes("Bookshelf") || QH.includes("Mailbox") ? 1 : 0, tH[HH] = null !== (XH = (0, xB.e)(HH)) && void 0 !== XH ? XH : QH
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1003` → after: `L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1003) · [Before (L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1003)

```diff
-       return Object.keys(HU.h).filter((UU => HU.h[UU].name === UU))
+       return Object.keys(NH.g).filter((HH => NH.g[HH].name === HH))
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1008` → after: `L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1008) · [Before (L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1008)

```diff
-       const zU = HU.h[UU],
+       const LH = NH.g[HH],
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1013-L1015` → after: `L1013-L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1013-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1013-L1015) · [Before (L1013-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1013-L1015)

```diff
-         [, ...QU] = (null !== (XU = zU.rootMetaDesc) && void 0 !== XU ? XU : UU).split("|"),
-         AU = QU.filter((UU => !("meta" === UU || eX.test(UU) || (0, RX.A)(zU) && /^[nesw]+$/.test(UU) || ZX.e.includes(cU) && /^[lrud]+$/.test(UU) || PX.E.includes(cU) && /^(left|right)$/.test(UU))));
-       return [cU, ...AU].map((UU => "fenceGate" === zU.model && UU === `rot${yU}` ? "rot" + ((yU - 1) % 2 + 1) : UU)).join("|")
+         [, ...SH] = (null !== (BH = LH.rootMetaDesc) && void 0 !== BH ? BH : HH).split("|"),
+         hH = SH.filter((HH => !("meta" === HH || mB.test(HH) || (0, UB.H)(LH) && /^[nesw]+$/.test(HH) || TB.j.includes(AH) && /^[lrud]+$/.test(HH) || VB.J.includes(AH) && /^(left|right)$/.test(HH))));
+       return [AH, ...hH].map((HH => "fenceGate" === LH.model && HH === `rot${rH}` ? "rot" + ((rH - 1) % 2 + 1) : HH)).join("|")
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1035` → after: `L1035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1035) · [Before (L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1035)

```diff
-       return dX.get(HU.h[UU].meta.rootName)
+       return bB.get(NH.g[HH].meta.rootName)
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1037-L1038` → after: `L1037-L1038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1037-L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1037-L1038) · [Before (L1037-L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1037-L1038)

```diff
-     var iX = zU(9814),
-       HX = zU(9834);
+     var gB = LH(9957),
+       NB = LH(9979);
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1049` → after: `L1049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1049) · [Before (L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1049)

```diff
-       nX = [0, 1, 2, 3].map((UU => (0, iX.b)((0, iX.n)([
+       DB = [0, 1, 2, 3].map((HH => (0, gB.b)((0, gB.l)([
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1055` → after: `L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1055) · [Before (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1055)

```diff
-         Ft: XU,
+         hW: BH,
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1059-L1060` → after: `L1059-L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1059-L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1059-L1060) · [Before (L1059-L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1059-L1060)

```diff
-       } = HU.h[UU];
-       return void 0 !== XU ? XU : "CentreCross" === zU ? vX : null !== cU && void 0 !== cU && cU.startsWith("torch") ? yU.halfblockPlacement === HX.e.side ? nX[yU.rot - 1] : yU.halfblockPlacement === HX.e.top ? sX : VX : MX
+       } = NH.g[HH];
+       return void 0 !== BH ? BH : "CentreCross" === LH ? jB : null !== AH && void 0 !== AH && AH.startsWith("torch") ? rH.halfblockPlacement === NB.c.side ? DB[rH.rot - 1] : rH.halfblockPlacement === NB.c.top ? FB : nB : RB
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1062` → after: `L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1062) · [Before (L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1062)

```diff
-     var lX = zU(212);
+     var ZB = LH(176);
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1068` → after: `L1068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1068) · [Before (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1068)

```diff
-         const XU = lX.f.aY;
+         const BH = ZB.g.xX;
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1095` → after: `L1095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1095) · [Before (L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1095)

```diff
-     var JX = zU(39299);
+     var aB = LH(39396);
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1162` → after: `L1162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1162) · [Before (L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1162)

```diff
-           (0, JX.g)(UU, XU, cU, zU.size + .01, .12)
+           (0, aB.h)(HH, BH, AH, LH.size + .01, .12)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1188` → after: `L1188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1188) · [Before (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1188)

```diff
-         (0, JX.c)(UU, XU, FU, oU, QU)
+         (0, aB.d)(HH, BH, tH, zH, SH)
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1226` → after: `L1226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1226) · [Before (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1226)

```diff
-         XU.set(AU, (null !== (zU = XU.get(AU)) && void 0 !== zU ? zU : 0) + 1)
+         BH.set(hH, (null !== (LH = BH.get(hH)) && void 0 !== LH ? LH : 0) + 1)
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1268` → after: `L1268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1268) · [Before (L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1268)

```diff
-           const AU = null !== (XU = null === (zU = this.placing) || void 0 === zU ? void 0 : zU.rotation) && void 0 !== XU ? XU : 0,
+           const hH = null !== (BH = null === (LH = this.placing) || void 0 === LH ? void 0 : LH.rotation) && void 0 !== BH ? BH : 0,
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1272` → after: `L1272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1272) · [Before (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1272)

```diff
-             oU = this.api.wG(this.localPlayerId),
+             zH = this.api.hT(this.localPlayerId),
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1298` → after: `L1298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1298) · [Before (L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1298)

```diff
-             }(this.api, FU, oU, this.camera.forward)) && void 0 !== QU ? QU : this.cornerOnTarget(FU)) && void 0 !== cU ? cU : [Math.floor(oU[0]) + 2, Math.floor(oU[2])];
+             }(this.api, tH, zH, this.camera.forward)) && void 0 !== SH ? SH : this.cornerOnTarget(tH)) && void 0 !== AH ? AH : [Math.floor(zH[0]) + 2, Math.floor(zH[2])];
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1309` → after: `L1309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1309) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1309)

```diff
-           }, this.update(), this.api.sendCommand(`${yU} preview`)
+           }, this.update(), this.api.sendCommand(`${rH} preview`)
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1351` → after: `L1351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1351) · [Before (L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1351)

```diff
-           UU.waiting || (UU.blocked ? this.UY({
+           HH.waiting || (HH.blocked ? this.AX({
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1362` → after: `L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1362) · [Before (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1362)

```diff
-           this.api.sendCommand(`${yU} place ${XU} ${cU.join(" ")} ${zU}`), UU.sent = {
+           this.api.sendCommand(`${rH} place ${BH} ${AH.join(" ")} ${LH}`), HH.sent = {
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1369` → after: `L1369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1369) · [Before (L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1369)

```diff
-           null !== this.placing && (this.close(), this.api.sendCommand(`${yU} preview off`))
+           null !== this.placing && (this.close(), this.api.sendCommand(`${rH} preview off`))
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1410` → after: `L1410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1410) · [Before (L1410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1410)

```diff
-         const [XU, zU, cU] = this.api.wG(this.localPlayerId);
+         const [BH, LH, AH] = this.api.hT(this.localPlayerId);
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1451` → after: `L1451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1451) · [Before (L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1451)

```diff
-         this.placing = null, this.meshes.dispose(), this.UY(null)
+         this.placing = null, this.meshes.dispose(), this.AX(null)
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1478` → after: `L1478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1478) · [Before (L1478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1478)

```diff
-         (null === oU || void 0 === oU ? void 0 : oU.id) === UU && oU.blocked === AU && oU.toClear === FU && oU.waiting === DU && oU.refusals === cU && oU.settled === EU || this.UY({
+         (null === zH || void 0 === zH ? void 0 : zH.id) === HH && zH.blocked === hH && zH.toClear === tH && zH.waiting === CH && zH.refusals === AH && zH.settled === EH || this.AX({
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1488` → after: `L1488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1488) · [Before (L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1488)

```diff
-         this.view = UU, PU.k.UY(oz, UU, !0)
+         this.view = HH, VH.k.AX(zL, HH, !0)
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1506` → after: `L1506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1506) · [Before (L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1506)

```diff
-     var Iz = zU(4982);
+     var YL = LH(4951);
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1558` → after: `L1558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1558) · [Before (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1558)

```diff
-       return null === (0, oU.j)(oz, XU.getView()) ? null : (0, uU.jsx)(gz, {
+       return null === (0, zH.e)(zL, BH.getView()) ? null : (0, eH.jsx)(ML, {
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1612` → after: `L1612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1612) · [Before (L1612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1612)

```diff
-       return (0, tX.p)().some((UU => UU !== tX.c && UU !== az))
+       return (0, WB.p)().some((HH => HH !== WB.d && HH !== QL))
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1626` → after: `L1626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1626) · [Before (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1626)

```diff
-       } = (0, EU.I)(), {
+       } = (0, EH.B)(), {
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1628` → after: `L1628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1628) · [Before (L1628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1628)

```diff
-       } = (0, FU.q)(["isTouchScreen"]), IU = (0, oU.j)(zX, XU.getGuide()), pU = (0, oU.j)(XX, XU.getPlot()), aU = (0, oU.j)(bU, cU.get()), tU = function(UU) {
+       } = (0, tH.m)(["isTouchScreen"]), YH = (0, zH.e)(LB, BH.getGuide()), uH = (0, zH.e)(BB, BH.getPlot()), QH = (0, zH.e)(iH, AH.get()), WH = function(HH) {
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1633` → after: `L1633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1633) · [Before (L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1633)

```diff
-         } = (0, FU.q)(["openInGameMenuName", "openEverythingMenuName", "loadingOverlayVisible"]), yU = (0, gX.e)(), [AU, DU] = (0, QU.useState)(Gz);
+         } = (0, tH.m)(["openInGameMenuName", "openEverythingMenuName", "loadingOverlayVisible"]), rH = (0, MB.b)(), [hH, CH] = (0, SH.useState)(vL);
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1639` → after: `L1639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1639) · [Before (L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1639)

```diff
-           const XU = (0, tX.m)(UU),
+           const BH = (0, WB.l)(HH),
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1645` → after: `L1645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1645) · [Before (L1645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1645)

```diff
-         const EU = (0, oU.j)(oz, UU.getView()),
+         const EH = (0, zH.e)(zL, HH.getView()),
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1657` → after: `L1657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1657) · [Before (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1657)

```diff
-         return (0, oU.f)(cX, (() => {
+         return (0, zH.d)(AB, (() => {
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1699` → after: `L1699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1699) · [Before (L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1699)

```diff
-           target: NU ? LU : WU,
+           target: GH ? kH : OH,
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1712-L1713` → after: `L1712-L1713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1712-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1712-L1713) · [Before (L1712-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1712-L1713)

```diff
-     var Rz = zU(39278),
-       Pz = zU(39283);
+     var UL = LH(39370),
+       VL = LH(39374);
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1726-L1727` → after: `L1726-L1727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1726-L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1726-L1727) · [Before (L1726-L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1726-L1727)

```diff
-         if (null === zU) return void(0, Rz.g)(XU, !0);
-         const cU = (0, Pz.b)(XU, UU, this.api.getPositionView(this.localPlayerId), zU, 1, 40);
+         if (null === LH) return void(0, UL.e)(BH, !0);
+         const AH = (0, VL.e)(BH, HH, this.api.getPositionView(this.localPlayerId), LH, 1, 40);
```
