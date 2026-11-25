# Changed — Bundle Modifications Report (Part 098 / 142)

- **Updated at**: `2026-11-25T16:44 JST`
- **Part**: `98 / 142` (**423** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 097](part-097.md) · [Part 099 →](part-099.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/92.js` (dz8ef.98c5e741 → wp3j0a.a13381cf · continued)

- **File**: `bundles/bloxd.io/chunks/js/92.js` (973 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca)

#### 594. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11487` → after: `L11487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11487) · [Before (L11487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11487)

```diff
-     Zu = ju, Uu = `${Xu=ju.includes(uu)&&!ju.includes(su)?su:uu}${Zu.slice(0,200).replace(/\\/g,"\\\\").replace('"'===Xu?/"/g:/'/g,`\\${Xu}`).replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/[\u0000- … [truncated]
+     LG = ZG, SG = `${yG=ZG.includes(GG)&&!ZG.includes(wG)?wG:GG}${LG.slice(0,200).replace(/\\/g,"\\\\").replace('"'===yG?/"/g:/'/g,`\\${yG}`).replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/[\u0000- … [truncated]
```

#### 595. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11496` → after: `L11496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11496) · [Before (L11496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11496)

```diff
-     const ju = Math.min(3, (null !== (Eu = String(uu).split(".")[1]) && void 0 !== Eu ? Eu : "").length);
+     const ZG = Math.min(3, (null !== (bG = String(GG).split(".")[1]) && void 0 !== bG ? bG : "").length);
```

#### 596. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11511` → after: `L11511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11511) · [Before (L11511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11511)

```diff
-   return "boolean" === typeof uu ? uu ? "on" : "off" : "number" === typeof uu ? String(uu) : uu.length > 20 ? `\u201c${uu.slice(0,19)}\u2026\u201d` : `\u201c${uu}\u201d`
+   return "boolean" === typeof GG ? GG ? "on" : "off" : "number" === typeof GG ? String(GG) : GG.length > 20 ? `\u201c${GG.slice(0,19)}\u2026\u201d` : `\u201c${GG}\u201d`
```

#### 597. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11516` → after: `L11516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11516) · [Before (L11516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11516)

```diff
-   if (0 === uu.length) return `Before ${Eu} settings`;
+   if (0 === GG.length) return `Before ${bG} settings`;
```

#### 598. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11518-L11520` → after: `L11518-L11520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11518-L11520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11518-L11520) · [Before (L11518-L11520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11518-L11520)

```diff
-     su = uu.slice(0, ju).map((uu => `${uu.name} ${uu.from} \u2192 ${uu.to}`)),
-     Uu = uu.length > ju ? ` and ${uu.length-ju} more` : "";
-   return `Before ${Eu} settings: ${su.join(", ")}${Uu}`
+     wG = GG.slice(0, ZG).map((GG => `${GG.name} ${GG.from} \u2192 ${GG.to}`)),
+     SG = GG.length > ZG ? ` and ${GG.length-ZG} more` : "";
+   return `Before ${bG} settings: ${wG.join(", ")}${SG}`
```

#### 599. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11528` → after: `L11528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11528) · [Before (L11528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11528)

```diff
-     Eu.add(null !== (ju = null !== (su = Uu[1]) && void 0 !== su ? su : Uu[2]) && void 0 !== ju ? ju : Uu[3])
+     bG.add(null !== (ZG = null !== (wG = SG[1]) && void 0 !== wG ? wG : SG[2]) && void 0 !== ZG ? ZG : SG[3])
```

#### 600. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11571` → after: `L11571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11571) · [Before (L11571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11571)

```diff
-     const Zu = null !== (Uu = XC.get(Eu)) && void 0 !== Uu ? Uu : [];
+     const LG = null !== (SG = SV.get(bG)) && void 0 !== SG ? SG : [];
```

#### 601. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11623` → after: `L11623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11623) · [Before (L11623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11623)

```diff
-   return null !== (Eu = bC.get(uu)) && void 0 !== Eu ? Eu : "CONFIG" === uu ? "Settings" : void 0
+   return null !== (bG = YV.get(GG)) && void 0 !== bG ? bG : "CONFIG" === GG ? "Settings" : void 0
```

#### 602. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11649` → after: `L11649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11649) · [Before (L11649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11649)

```diff
-         name: void 0 === Zu ? null : null !== (Uu = MC(Zu)) && void 0 !== Uu ? Uu : null,
+         name: void 0 === LG ? null : null !== (SG = JV(LG)) && void 0 !== SG ? SG : null,
```

#### 603. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11701` → after: `L11701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11701) · [Before (L11701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11701)

```diff
-   return lu.every((uu => YC(uu.removed) && YC(uu.added))) ? lu : [uu]
+   return kG.every((GG => QV(GG.removed) && QV(GG.added))) ? kG : [GG]
```

#### 604. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11753` → after: `L11753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11753) · [Before (L11753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11753)

```diff
-   return su ? null !== (Eu = null !== (ju = su[1]) && void 0 !== ju ? ju : su[2]) && void 0 !== Eu ? Eu : su[3] : void 0
+   return wG ? null !== (bG = null !== (ZG = wG[1]) && void 0 !== ZG ? ZG : wG[2]) && void 0 !== bG ? bG : wG[3] : void 0
```

#### 605. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11781` → after: `L11781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11781) · [Before (L11781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11781)

```diff
-   return uu.length <= 1 ? null !== (Eu = uu[0]) && void 0 !== Eu ? Eu : "" : `${uu.slice(0,-1).join(", ")} and ${uu[uu.length-1]}`
+   return GG.length <= 1 ? null !== (bG = GG[0]) && void 0 !== bG ? bG : "" : `${GG.slice(0,-1).join(", ")} and ${GG[GG.length-1]}`
```

#### 606. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11796` → after: `L11796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11796) · [Before (L11796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11796)

```diff
-     return (0, YE.e)(Eu, /[A-Za-z_$][\w$]{2,}(?!\s*:(?!:))/g, YE.j).map((uu => uu[0])).filter((uu => !aC.has(uu)))
+     return (0, hb.g)(bG, /[A-Za-z_$][\w$]{2,}(?!\s*:(?!:))/g, hb.r).map((GG => GG[0])).filter((GG => !iV.has(GG)))
```

#### 607. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11802` → after: `L11802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11802) · [Before (L11802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11802)

```diff
-   const su = (null !== (ju = uu.parts) && void 0 !== ju ? ju : []).map((uu => {
+   const wG = (null !== (ZG = GG.parts) && void 0 !== ZG ? ZG : []).map((GG => {
```

#### 608. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11850` → after: `L11850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11850) · [Before (L11850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11850)

```diff
-               return ju ? [null !== (Eu = ju[1]) && void 0 !== Eu ? Eu : ju[2]] : []
+               return ZG ? [null !== (bG = ZG[1]) && void 0 !== bG ? bG : ZG[2]] : []
```

#### 609. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11854` → after: `L11854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11854) · [Before (L11854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11854)

```diff
-               return bu.has(uu) ? `"${Eu}"` : Eu
+               return pG.has(GG) ? `"${bG}"` : bG
```

#### 610. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11862` → after: `L11862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11862) · [Before (L11862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11862)

```diff
-                   return null !== (Eu = qu.get(uu)) && void 0 !== Eu ? Eu : uu
+                   return null !== (bG = UG.get(GG)) && void 0 !== bG ? bG : GG
```

#### 611. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11865` → after: `L11865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11865) · [Before (L11865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11865)

```diff
-               Eu = [Zu.length > 0 ? `${uu(Zu)} \u2014 changed` : "", Xu.length > 0 ? `${uu(Xu)} \u2014 added` : "", lu.length > 0 ? `${uu(lu)} \u2014 taken out` : ""].filter(Boolean),
+               bG = [LG.length > 0 ? `${GG(LG)} \u2014 changed` : "", yG.length > 0 ? `${GG(yG)} \u2014 added` : "", kG.length > 0 ? `${GG(kG)} \u2014 taken out` : ""].filter(Boolean),
```

#### 612. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11876` → after: `L11876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11876) · [Before (L11876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11876)

```diff
-           const Ou = [Zu.length > 0 ? `changes ${wC(Zu.map(cu))}` : "", Xu.length > 0 ? `adds ${wC(Xu.map(cu))}` : "", lu.length > 0 ? `takes out ${wC(lu.map(cu))}` : ""].filter(Boolean);
+           const KG = [LG.length > 0 ? `changes ${oV(LG.map(fG))}` : "", yG.length > 0 ? `adds ${oV(yG.map(fG))}` : "", kG.length > 0 ? `takes out ${oV(kG.map(fG))}` : ""].filter(Boolean);
```

#### 613. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11892` → after: `L11892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11892) · [Before (L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11892)

```diff
-                 named: `${ju} \u2014 changed`,
+                 named: `${ZG} \u2014 changed`,
```

#### 614. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11898` → after: `L11898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11898) · [Before (L11898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11898)

```diff
-                 named: `Changes ${/\bfunction\b|=>/.test(uu)?`"${JC(Eu)}"`:JC(Eu)}`,
+                 named: `Changes ${/\bfunction\b|=>/.test(GG)?`"${XV(bG)}"`:XV(bG)}`,
```

#### 615. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11907` → after: `L11907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11907) · [Before (L11907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11907)

```diff
-             named: 0 === uu.added.length ? `Takes out lines from line ${ju}` : `Changes line ${ju}`,
+             named: 0 === GG.added.length ? `Takes out lines from line ${ZG}` : `Changes line ${ZG}`,
```

#### 616. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11932` → after: `L11932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11932) · [Before (L11932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11932)

```diff
-           return su[Eu] && null !== (ju = uu.uses) && void 0 !== ju ? ju : []
+           return wG[bG] && null !== (ZG = GG.uses) && void 0 !== ZG ? ZG : []
```

#### 617. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11936` → after: `L11936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11936) · [Before (L11936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11936)

```diff
-           return su[Eu] || (null !== (ju = uu.uses) && void 0 !== ju ? ju : []).some((uu => Uu.has(uu)))
+           return wG[bG] || (null !== (ZG = GG.uses) && void 0 !== ZG ? ZG : []).some((GG => SG.has(GG)))
```

#### 618. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11943` → after: `L11943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11943) · [Before (L11943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11943)

```diff
-           const su = (null !== (lu = uu.takesOut) && void 0 !== lu ? lu : []).filter((uu => ("CONFIG" === uu || XC.has(uu)) && !Xu.has(uu)));
+           const wG = (null !== (kG = GG.takesOut) && void 0 !== kG ? kG : []).filter((GG => ("CONFIG" === GG || SV.has(GG)) && !yG.has(GG)));
```

#### 619. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11947` → after: `L11947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11947) · [Before (L11947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11947)

```diff
-           }, Eu, ju) || void 0 !== uu.why && fC(ju, qC(uu.why)) || (null !== (qu = uu.removedUses) && void 0 !== qu ? qu : []).some((uu => Uu.has(uu))) ? void 0 : "takesOut"
+           }, bG, ZG) || void 0 !== GG.why && kV(ZG, yV(GG.why)) || (null !== (UG = GG.removedUses) && void 0 !== UG ? UG : []).some((GG => SG.has(GG))) ? void 0 : "takesOut"
```

#### 620. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11966` → after: `L11966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11966) · [Before (L11966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11966)

```diff
-         Cu = !Uu && fu ? fu : ju,
+         VG = !SG && YG ? YG : ZG,
```

#### 621. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11983` → after: `L11983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11983) · [Before (L11983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11983)

```diff
-       return `${null!==(Eu=uu.also)&&void 0!==Eu?Eu:""}|${uu.label}|${null!==(ju=uu.detail)&&void 0!==ju?ju:""}`
+       return `${null!==(bG=GG.also)&&void 0!==bG?bG:""}|${GG.label}|${null!==(ZG=GG.detail)&&void 0!==ZG?ZG:""}`
```

#### 622. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11992` → after: `L11992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11992) · [Before (L11992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11992)

```diff
-       label: `${ju.label} (line ${Eu})`
+       label: `${ZG.label} (line ${bG})`
```

#### 623. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12014` → after: `L12014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12014) · [Before (L12014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12014)

```diff
-   return !/^['\u2018]/.test(uu[0]) || !(0, YE.d)(uu, "\\w\u2019'")
+   return !/^['\u2018]/.test(GG[0]) || !(0, hb.e)(GG, "\\w\u2019'")
```

#### 624. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12020` → after: `L12020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12020) · [Before (L12020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12020)

```diff
-       return (0, YE.e)(uu, VC, rC).map((uu => [uu.index, uu.index + uu[0].length]))
+       return (0, hb.g)(GG, aV, cV).map((GG => [GG.index, GG.index + GG[0].length]))
```

#### 625. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12027` → after: `L12027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12027) · [Before (L12027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12027)

```diff
-   for (const Zu of uu.matchAll(new RegExp(`(^|[.!?]\\s+|\\n\\s*)I(?:'ve|\u2019ve| have)?( also)? (${mC})\\b`, "g"))) {
+   for (const LG of GG.matchAll(new RegExp(`(^|[.!?]\\s+|\\n\\s*)I(?:'ve|\u2019ve| have)?( also)? (${IV})\\b`, "g"))) {
```

#### 626. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12037` → after: `L12037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12037) · [Before (L12037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12037)

```diff
-         words: `${Zu[2]?"It also":"This"} ${kC[Zu[3]]}`
+         words: `${LG[2]?"It also":"This"} ${mV[LG[3]]}`
```

#### 627. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12039` → after: `L12039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12039) · [Before (L12039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12039)

```diff
-       for (const uu of qu.matchAll(new RegExp(`\\b(and|then|also) (${mC})\\b(?!\\s+(?:of|by|from|with|when|if|in|on|at|to|for|so|as|after|before|into)\\b)`, "g"))) ju(Uu + uu.index) || su.push({
+       for (const GG of UG.matchAll(new RegExp(`\\b(and|then|also) (${IV})\\b(?!\\s+(?:of|by|from|with|when|if|in|on|at|to|for|so|as|after|before|into)\\b)`, "g"))) ZG(SG + GG.index) || wG.push({
```

#### 628. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12042` → after: `L12042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12042) · [Before (L12042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12042)

```diff
-         words: `${uu[1]} ${kC[uu[2]]}`
+         words: `${GG[1]} ${mV[GG[2]]}`
```

#### 629. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12055` → after: `L12055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12055) · [Before (L12055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12055)

```diff
-       words: `will ${Uu=Zu[1],"has"===Uu?"have":Uu.endsWith("ies")?`${Uu.slice(0,-3)}y`:/(?:ch|sh|x|zz|o|ss)es$/.test(Uu)?Uu.slice(0,-2):Uu.slice(0,-1)}`
+       words: `will ${SG=LG[1],"has"===SG?"have":SG.endsWith("ies")?`${SG.slice(0,-3)}y`:/(?:ch|sh|x|zz|o|ss)es$/.test(SG)?SG.slice(0,-2):SG.slice(0,-1)}`
```

#### 630. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12093` → after: `L12093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12093) · [Before (L12093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12093)

```diff
-   }, Du = `WorldCodeAiSetting-${Eu}-${ju.key}`;
+   }, JG = `WorldCodeAiSetting-${bG}-${ZG.key}`;
```

#### 631. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12121` → after: `L12121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12121) · [Before (L12121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12121)

```diff
-         "aria-label": `Less ${bu}`,
+         "aria-label": `Less ${pG}`,
```

#### 632. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12133` → after: `L12133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12133) · [Before (L12133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12133)

```diff
-         value: null !== lu && void 0 !== lu ? lu : String(ju.value),
+         value: null !== kG && void 0 !== kG ? kG : String(ZG.value),
```

#### 633. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12144` → after: `L12144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12144) · [Before (L12144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12144)

```diff
-         "aria-label": `More ${bu}`,
+         "aria-label": `More ${pG}`,
```

#### 634. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12232` → after: `L12232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12232) · [Before (L12232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12232)

```diff
-   if (uu > 9e4) return `It starts in about ${Math.ceil(uu/6e4)} minutes.`;
+   if (GG > 9e4) return `It starts in about ${Math.ceil(GG/6e4)} minutes.`;
```

#### 635. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12235` → after: `L12235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12235) · [Before (L12235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12235)

```diff
-   return Eu >= 60 ? "It starts in about a minute." : `It starts in about ${Eu} seconds.`
+   return bG >= 60 ? "It starts in about a minute." : `It starts in about ${bG} seconds.`
```

#### 636. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12237` → after: `L12237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12237) · [Before (L12237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12237)

```diff
- var tC = ju(1259);
+ var gV = ZG(1169);
```

#### 637. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12243` → after: `L12243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12243) · [Before (L12243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12243)

```diff
-     ju.set(Uu, (null !== (su = ju.get(Uu)) && void 0 !== su ? su : 0) + 1)
+     ZG.set(SG, (null !== (wG = ZG.get(SG)) && void 0 !== wG ? wG : 0) + 1)
```

#### 638. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12247` → after: `L12247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12247) · [Before (L12247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12247)

```diff
-     const su = null !== (Eu = ju.get(uu)) && void 0 !== Eu ? Eu : 0;
+     const wG = null !== (bG = ZG.get(GG)) && void 0 !== bG ? bG : 0;
```

#### 639. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12254` → after: `L12254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12254) · [Before (L12254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12254)

```diff
-     if (null !== Eu && void 0 !== Eu && Eu.aborted) return void su((0, tC.f)(Eu));
+     if (null !== bG && void 0 !== bG && bG.aborted) return void wG((0, gV.h)(bG));
```

#### 640. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12257` → after: `L12257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12257) · [Before (L12257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12257)

```diff
-       clearTimeout(Uu), su((0, tC.f)(Eu))
+       clearTimeout(SG), wG((0, gV.h)(bG))
```

#### 641. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12274` → after: `L12274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12274) · [Before (L12274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12274)

```diff
-     const fu = null !== (Xu = lu.find((uu => NZ.freeAt(uu) <= Date.now()))) && void 0 !== Xu ? Xu : lu[0],
+     const YG = null !== (yG = kG.find((GG => fL.freeAt(GG) <= Date.now()))) && void 0 !== yG ? yG : kG[0],
```

#### 642. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12291` → after: `L12291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12291) · [Before (L12291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12291)

```diff
-       return [...null !== (Eu = uu.why) && void 0 !== Eu ? Eu : [], ...(null !== (ju = uu.parts) && void 0 !== ju ? ju : []).map((uu => uu.why)), ...xC(uu.before, uu.after)]
+       return [...null !== (bG = GG.why) && void 0 !== bG ? bG : [], ...(null !== (ZG = GG.parts) && void 0 !== ZG ? ZG : []).map((GG => GG.why)), ...eV(GG.before, GG.after)]
```

#### 643. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12302` → after: `L12302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12302) · [Before (L12302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12302)

```diff
-           su = uu > 6e3 ? uu : xU;
+           wG = GG > 6e3 ? GG : RS;
```

#### 644. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12316-L12318` → after: `L12316-L12318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12316-L12318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12316-L12318) · [Before (L12316-L12318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12316-L12318)

```diff
-   const su = Eu && null !== (ju = uu[Eu]) && void 0 !== ju ? ju : [],
-     Uu = su.length >= 2 ? su : Object.values(uu).flat();
-   return Uu.length < 2 ? "Usually under a minute." : `Usually ${function(uu){const Eu=Math.max(5,5*Math.round(uu/5e3));if(Eu<60)return`about ${Eu} seconds`;const ju=10*Math.round(uu/1e4),su=Math.floor(ju/60),Uu=ju%60,Zu=`${su} ${1===su?"minute":"minutes"}`;return 0===Uu?`about ${ … [truncated]
+   const wG = bG && null !== (ZG = GG[bG]) && void 0 !== ZG ? ZG : [],
+     SG = wG.length >= 2 ? wG : Object.values(GG).flat();
+   return SG.length < 2 ? "Usually under a minute." : `Usually ${function(GG){const bG=Math.max(5,5*Math.round(GG/5e3));if(bG<60)return`about ${bG} seconds`;const ZG=10*Math.round(GG/1e4),wG=Math.floor(ZG/60),SG=ZG%60,LG=`${wG} ${1===wG?"minute":"minutes"}`;return 0===SG?`about ${ … [truncated]
```

#### 645. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12320-L12322` → after: `L12320-L12322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12320-L12322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12320-L12322) · [Before (L12320-L12322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12320-L12322)

```diff
- var zC = ju(1533),
-   RC = ju(4995);
- var ub = ju(6737);
+ var NV = ZG(1415),
+   OV = ZG(4849);
+ var xV = ZG(6533);
```

#### 646. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12325` → after: `L12325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12325) · [Before (L12325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12325)

```diff
-     ZX.k.setItem(Eb, !0)
+     Sy.h.setItem(BV, !0)
```

#### 647. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12332` → after: `L12332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12332) · [Before (L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12332)

```diff
-       } = await ju.e(125).then((() => ju(6732)));
+       } = await ZG.e(125).then((() => ZG(6524)));
```

#### 648. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12372` → after: `L12372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12372) · [Before (L12372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12372)

```diff
-             return !(0, Yu.c)(Eu)
+             return !(0, hG.d)(bG)
```

#### 649. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12401-L12405` → after: `L12401-L12405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12401-L12405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12401-L12405) · [Before (L12401-L12405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12401-L12405)

```diff
-           Cu = ju ? `It is a code block: a block in the world holding JavaScript that runs on the game server when a player clicks it. ${DU}` : "It is World Code: JavaScript that runs on the game server for one world.",
-           bu = [...new Set(Lu(null !== (Eu = su[Xu]) && void 0 !== Eu ? Eu : "").map((uu => uu.name)))],
-           cu = lu ? `, except to add a new callback or function to ${Xu} by its name with replace_function${bu.length>0?` (not ${bu.join(", ")}, which it has already)`:""}` : "",
-           Nu = Zu ? `\nYou can see only the open file's code: change only that file${cu}, and never write the other files listed.\n` : "";
-         return `Help me with the code of my game in Bloxd, a voxel game. ${Cu}\n\n${RC.j} Before you answer, read it and, wherever you can, the pages it links to that your answer needs, and use only the api methods, callbacks and client options they give, with their exact names.\ … [truncated]
+           VG = ZG ? `It is a code block: a block in the world holding JavaScript that runs on the game server when a player clicks it. ${dS}` : "It is World Code: JavaScript that runs on the game server for one world.",
+           pG = [...new Set(eG(null !== (bG = wG[yG]) && void 0 !== bG ? bG : "").map((GG => GG.name)))],
+           fG = kG ? `, except to add a new callback or function to ${yG} by its name with replace_function${pG.length>0?` (not ${pG.join(", ")}, which it has already)`:""}` : "",
+           QG = LG ? `\nYou can see only the open file's code: change only that file${fG}, and never write the other files listed.\n` : "";
+         return `Help me with the code of my game in Bloxd, a voxel game. ${VG}\n\n${OV.n} Before you answer, read it and, wherever you can, the pages it links to that your answer needs, and use only the api methods, callbacks and client options they give, with their exact names.\ … [truncated]
```

#### 650. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12410` → after: `L12410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12410) · [Before (L12410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12410)

```diff
-       } = (0, RC.h)(Eu),
+       } = (0, OV.k)(bG),
```

#### 651. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12436` → after: `L12436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12436) · [Before (L12436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12436)

```diff
-         !0 !== ZX.k.getItem(Eb) ? jb.ask().then((uu => {
+         !0 !== Sy.h.getItem(BV) ? Gp.ask().then((GG => {
```

#### 652. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12444` → after: `L12444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12444) · [Before (L12444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12444)

```diff
-         children: [sb[lu.how].hint, " ", (0, Xu.jsx)(ub.c, {
+         children: [bp[kG.how].hint, " ", (0, yG.jsx)(xV.d, {
```

#### 653. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12466` → after: `L12466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12466) · [Before (L12466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12466)

```diff
-         }), (0, Xu.jsx)(Cu.p, {
+         }), (0, yG.jsx)(VG.k, {
```

#### 654. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12476` → after: `L12476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12476) · [Before (L12476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12476)

```diff
-           children: (0, Xu.jsx)(cu.e, {
+           children: (0, yG.jsx)(fG.c, {
```

#### 655. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12484-L12485` → after: `L12484-L12485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12484-L12485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12484-L12485) · [Before (L12484-L12485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12484-L12485)

```diff
- var Zb = ju(91),
-   Xb = ju(37317);
+ var wp = ZG(80),
+   Sp = ZG(37265);
```

#### 656. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12502` → after: `L12502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12502) · [Before (L12502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12502)

```diff
-   return `Moving to ${uu} code\u2026`
+   return `Moving to ${GG} code\u2026`
```

#### 657. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12506` → after: `L12506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12506) · [Before (L12506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12506)

```diff
-   return uu.fromLine === uu.toLine ? `line ${uu.fromLine}` : `lines ${uu.fromLine}-${uu.toLine}`
+   return GG.fromLine === GG.toLine ? `line ${GG.fromLine}` : `lines ${GG.fromLine}-${GG.toLine}`
```

#### 658. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12510-L12511` → after: `L12510-L12511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12510-L12511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12510-L12511) · [Before (L12510-L12511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12510-L12511)

```diff
-   const Eu = uu.text.length > 4e3 ? `${uu.text.slice(0,4e3)}\n...` : uu.text;
-   return `The part I picked (${uu.path}, ${Cb(uu)}):\n\`\`\`\n${Eu}\n\`\`\``
+   const bG = GG.text.length > 4e3 ? `${GG.text.slice(0,4e3)}\n...` : GG.text;
+   return `The part I picked (${GG.path}, ${Up(GG)}):\n\`\`\`\n${bG}\n\`\`\``
```

#### 659. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12518` → after: `L12518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12518) · [Before (L12518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12518)

```diff
-       return `Explain what this part of my code does, in 2 or 3 short sentences. Don't change any code.\n\n${bb(uu)}`;
+       return `Explain what this part of my code does, in 2 or 3 short sentences. Don't change any code.\n\n${Yp(GG)}`;
```

#### 660. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12520` → after: `L12520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12520) · [Before (L12520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12520)

```diff
-       return `Fix what is wrong in this part of my code. Change only what it needs.\n\n${bb(uu)}`;
+       return `Fix what is wrong in this part of my code. Change only what it needs.\n\n${Yp(GG)}`;
```

#### 661. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12522` → after: `L12522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12522) · [Before (L12522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12522)

```diff
-       return `${Eu.trim()}\n\nChange only this part of my code, unless more is needed for it to work.\n\n${bb(uu)}`
+       return `${bG.trim()}\n\nChange only this part of my code, unless more is needed for it to work.\n\n${Yp(GG)}`
```

#### 662. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12531` → after: `L12531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12531) · [Before (L12531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12531)

```diff
-       return `Explain ${ju}`;
+       return `Explain ${ZG}`;
```

#### 663. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12533` → after: `L12533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12533) · [Before (L12533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12533)

```diff
-       return `Fix ${ju}`;
+       return `Fix ${ZG}`;
```

#### 664. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12535` → after: `L12535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12535) · [Before (L12535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12535)

```diff
-       return `${Eu.trim()} (${ju})`
+       return `${bG.trim()} (${ZG})`
```

#### 665. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12538-L12542` → after: `L12538-L12542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12538-L12542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12538-L12542) · [Before (L12538-L12542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12538-L12542)

```diff
- var Ob = ju(41627),
-   Yb = ju(4942),
-   hb = ju(41609),
-   Db = ju(41619),
-   gb = ju(41617);
+ var fp = ZG(41805),
+   Qp = ZG(4779),
+   Kp = ZG(41793),
+   hp = ZG(41801),
+   dp = ZG(41795);
```

#### 666. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12561` → after: `L12561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12561) · [Before (L12561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12561)

```diff
-         ["/lib.d.ts", Db.c]
+         ["/lib.d.ts", hp.e]
```

#### 667. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12566` → after: `L12566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12566) · [Before (L12566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12566)

```diff
-         ["/lib.d.ts", Db.c]
+         ["/lib.d.ts", hp.e]
```

#### 668. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12568` → after: `L12568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12568) · [Before (L12568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12568)

```diff
-     ju = Ob.g(Ob.c(Uu), [...Uu.keys()], du(), {
+     ZG = fp.d(fp.c(SG), [...SG.keys()], CG(), {
```

#### 669. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12590` → after: `L12590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12590) · [Before (L12590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12590)

```diff
-   return Uu(uu), su && Tj(su, uu) ? su : void 0
+   return SG(GG), wG && HZ(wG, GG) ? wG : void 0
```

#### 670. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12609` → after: `L12609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12609) · [Before (L12609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12609)

```diff
-   if (su) return `"${su}"`;
+   if (wG) return `"${wG}"`;
```

#### 671. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12614` → after: `L12614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12614) · [Before (L12614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12614)

```diff
-   if (Uu.length > 0) return Uu.slice(0, 2).map((uu => `"${uu}"`)).join(" or ");
+   if (SG.length > 0) return SG.slice(0, 2).map((GG => `"${GG}"`)).join(" or ");
```

#### 672. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12624` → after: `L12624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12624) · [Before (L12624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12624)

```diff
-   return Xu ? `"${Xu.option}"` : void 0
+   return yG ? `"${yG.option}"` : void 0
```

#### 673. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12650-L12651` → after: `L12650-L12651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12650-L12651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12650-L12651) · [Before (L12650-L12651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12650-L12651)

```diff
-       ju = null !== (Cu = null === (bu = uu.split("\n")[Eu]) || void 0 === bu ? void 0 : bu.trim()) && void 0 !== Cu ? Cu : "",
-       su = ju.length > 40 ? `${ju.slice(0,37)}...` : ju,
+       ZG = null !== (VG = null === (pG = GG.split("\n")[bG]) || void 0 === pG ? void 0 : pG.trim()) && void 0 !== VG ? VG : "",
+       wG = ZG.length > 40 ? `${ZG.slice(0,37)}...` : ZG,
```

#### 674. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12653` → after: `L12653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12653) · [Before (L12653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12653)

```diff
-     qu.add(`Line ${Eu+1} stops all of this code from running: "${su}" (${Uu}).`)
+     UG.add(`Line ${bG+1} stops all of this code from running: "${wG}" (${SG}).`)
```

#### 675. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12661-L12663` → after: `L12661-L12663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12661-L12663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12661-L12663) · [Before (L12661-L12663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12661-L12663)

```diff
-         ju = null !== (pu = null === (Ju = uu.split("\n")[Eu]) || void 0 === Ju ? void 0 : Ju.trim()) && void 0 !== pu ? pu : "",
-         su = ju.length > 40 ? `${ju.slice(0,37)}...` : ju;
-       qu.add(`Line ${Eu+1} never runs: "${su}" comes after a return, which ends the function first.`);
+         ZG = null !== (XG = null === (iG = GG.split("\n")[bG]) || void 0 === iG ? void 0 : iG.trim()) && void 0 !== XG ? XG : "",
+         wG = ZG.length > 40 ? `${ZG.slice(0,37)}...` : ZG;
+       UG.add(`Line ${bG+1} never runs: "${wG}" comes after a return, which ends the function first.`);
```

#### 676. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12668` → after: `L12668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12668) · [Before (L12668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12668)

```diff
-       const Eu = Wu.start + (null !== (au = Wu.length) && void 0 !== au ? au : 0),
+       const bG = AG.start + (null !== (WG = AG.length) && void 0 !== WG ? WG : 0),
```

#### 677. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12671` → after: `L12671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12671) · [Before (L12671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12671)

```diff
-         Uu = new RegExp(`^${ju.replaceAll("$","\\$")}\\s*=[^=]`, "m").test(uu),
+         SG = new RegExp(`^${ZG.replaceAll("$","\\$")}\\s*=[^=]`, "m").test(GG),
```

#### 678. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12674-L12675` → after: `L12674-L12675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12674-L12675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12674-L12675) · [Before (L12674-L12675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12674-L12675)

```diff
-         Cu = new RegExp(`//\\s*(?:const|let|var)\\s+${ju.replaceAll("$","\\$")}\\b`).test(uu),
-         bu = new RegExp(`typeof\\s+${ju.replaceAll("$","\\$")}\\b`).test(uu);
+         VG = new RegExp(`//\\s*(?:const|let|var)\\s+${ZG.replaceAll("$","\\$")}\\b`).test(GG),
+         pG = new RegExp(`typeof\\s+${ZG.replaceAll("$","\\$")}\\b`).test(GG);
```

#### 679. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12680` → after: `L12680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12680) · [Before (L12680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12680)

```diff
-       qu.add(Ou ? `Line ${Nu+1} uses "${ju}", which is never set, so it throws there. Did you mean "${Ou}"?` : `Line ${Nu+1} uses "${ju}", which isn't set there, so it throws when that line runs.`);
+       UG.add(KG ? `Line ${QG+1} uses "${ZG}", which is never set, so it throws there. Did you mean "${KG}"?` : `Line ${QG+1} uses "${ZG}", which isn't set there, so it throws when that line runs.`);
```

#### 680. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12686` → after: `L12686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12686) · [Before (L12686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12686)

```diff
-     const ju = Wu.start + (null !== (Nu = Wu.length) && void 0 !== Nu ? Nu : 0),
+     const ZG = AG.start + (null !== (QG = AG.length) && void 0 !== QG ? QG : 0),
```

#### 681. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12693` → after: `L12693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12693) · [Before (L12693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12693)

```diff
-       Su = bu.length > 40 ? `${bu.slice(0,37)}...` : bu;
+       sG = pG.length > 40 ? `${pG.slice(0,37)}...` : pG;
```

#### 682. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12697-L12699` → after: `L12697-L12699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12697-L12699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12697-L12699) · [Before (L12697-L12699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12697-L12699)

```diff
-         ju = null !== (ou = null === uu || void 0 === uu || null === (ku = uu[1]) || void 0 === ku ? void 0 : ku.replace("-", " to ")) && void 0 !== ou ? ou : "a different number of",
-         Uu = Number(null !== (mu = null === uu || void 0 === uu ? void 0 : uu[2]) && void 0 !== mu ? mu : su.arguments.length);
-       qu.add(`${Zu} needs ${ju} ${"1"===ju?"value":"values"}, but this line gives it ${Uu}.`);
+         ZG = null !== (IG = null === GG || void 0 === GG || null === (FG = GG[1]) || void 0 === FG ? void 0 : FG.replace("-", " to ")) && void 0 !== IG ? IG : "a different number of",
+         SG = Number(null !== (vG = null === GG || void 0 === GG ? void 0 : GG[2]) && void 0 !== vG ? vG : wG.arguments.length);
+       UG.add(`${LG} needs ${ZG} ${"1"===ZG?"value":"values"}, but this line gives it ${SG}.`);
```

#### 683. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12708` → after: `L12708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12708) · [Before (L12708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12708)

```diff
-         fu = (null !== (vu = null === uu || void 0 === uu ? void 0 : uu.properties) && void 0 !== vu ? vu : []).flatMap((uu => uu.name && (du().isIdentifier(uu.name) || du().isStringLiteral(uu.name)) ? [{
+         YG = (null !== (aG = null === GG || void 0 === GG ? void 0 : GG.properties) && void 0 !== aG ? aG : []).flatMap((GG => GG.name && (CG().isIdentifier(GG.name) || CG().isStringLiteral(GG.name)) ? [{
```

#### 684. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12712` → after: `L12712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12712) · [Before (L12712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12712)

```diff
-         Cu = null !== (Ku = null === (Vu = Eu.match(/'([^']*)' does not exist/)) || void 0 === Vu ? void 0 : Vu[1]) && void 0 !== Ku ? Ku : Su,
+         VG = null !== (cG = null === (lG = bG.match(/'([^']*)' does not exist/)) || void 0 === lG ? void 0 : lG[1]) && void 0 !== cG ? cG : sG,
```

#### 685. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12714` → after: `L12714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12714) · [Before (L12714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12714)

```diff
-         cu = bu.length > 0 ? bu : [{
+         fG = pG.length > 0 ? pG : [{
```

#### 686. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12718` → after: `L12718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12718) · [Before (L12718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12718)

```diff
-         Nu = ju ? ` It takes ${nj(lu,ju)}.` : " Check Show Docs for its settings.";
+         QG = ZG ? ` It takes ${NZ(kG,ZG)}.` : " Check Show Docs for its settings.";
```

#### 687. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12727` → after: `L12727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12727) · [Before (L12727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12727)

```diff
-         void 0 !== Uu && lu.getTypeAtLocation(Uu).getCallSignatures().length > 0 || Xu.includes(Eu) || (su = ju ? `"${uu}"` : ob(Eu, Xu)), qu.add(`${Zu} has no setting called "${Eu}".${su?` Did you mean ${su}?`:Nu}`)
+         void 0 !== SG && kG.getTypeAtLocation(SG).getCallSignatures().length > 0 || yG.includes(bG) || (wG = ZG ? `"${GG}"` : mp(bG, yG)), UG.add(`${LG} has no setting called "${bG}".${wG?` Did you mean ${wG}?`:QG}`)
```

#### 688. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12731` → after: `L12731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12731) · [Before (L12731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12731)

```diff
-     const Iu = null !== (Ou = null === Cu || void 0 === Cu ? void 0 : Cu.initializer) && void 0 !== Ou ? Ou : Uu,
+     const qG = null !== (KG = null === VG || void 0 === VG ? void 0 : VG.initializer) && void 0 !== KG ? KG : SG,
```

#### 689. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12736` → after: `L12736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12736) · [Before (L12736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12736)

```diff
-       tu = null !== (Yu = null === Iu || void 0 === Iu ? void 0 : Iu.getText(Xu)) && void 0 !== Yu ? Yu : bu,
+       RG = null !== (hG = null === qG || void 0 === qG ? void 0 : qG.getText(yG)) && void 0 !== hG ? hG : pG,
```

#### 690. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12740` → after: `L12740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12740) · [Before (L12740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12740)

```diff
-       const Eu = null === (ru = new RegExp(`(?:^|[{,])\\s*${xu.replaceAll("$","\\$")}\\s*:\\s*(["'])([^"'\\n]*)\\1`, "m").exec(uu)) || void 0 === ru ? void 0 : ru[2];
+       const bG = null === (jG = new RegExp(`(?:^|[{,])\\s*${TG.replaceAll("$","\\$")}\\s*:\\s*(["'])([^"'\\n]*)\\1`, "m").exec(GG)) || void 0 === jG ? void 0 : jG[2];
```

#### 691. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12743` → after: `L12743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12743) · [Before (L12743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12743)

```diff
-         qu.add(`${Zu} has no ${Lu} called "${Eu}" (${tu}).${uu?` Did you mean ${uu}?`:""}`)
+         UG.add(`${LG} has no ${eG} called "${bG}" (${RG}).${GG?` Did you mean ${GG}?`:""}`)
```

#### 692. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12749` → after: `L12749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12749) · [Before (L12749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12749)

```diff
-       const uu = Iu && du().isStringLiteral(Iu) ? Iu : void 0,
+       const GG = qG && CG().isStringLiteral(qG) ? qG : void 0,
```

#### 693. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12751-L12752` → after: `L12751-L12752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12751-L12752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12751-L12752) · [Before (L12751-L12752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12751-L12752)

```diff
-         ju = uu && !Cu ? `${Zu} has no ${Lu} called ${Qu=Su,Qu.startsWith('"')?Qu:`"${Qu}"`}.` : `${Zu} can't take ${Su} there.`;
-       qu.add(`${ju}${Eu?` Did you mean ${Eu}?`:" Check Show Docs for what it takes."}`);
+         ZG = GG && !VG ? `${LG} has no ${eG} called ${PG=sG,PG.startsWith('"')?PG:`"${PG}"`}.` : `${LG} can't take ${sG} there.`;
+       UG.add(`${ZG}${bG?` Did you mean ${bG}?`:" Check Show Docs for what it takes."}`);
```

#### 694. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12757` → after: `L12757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12757) · [Before (L12757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12757)

```diff
-       qu.add(`${Zu} needs ${Tu} in ${Su}: it takes ${nj(lu,Fu)}.`);
+       UG.add(`${LG} needs ${HG} in ${sG}: it takes ${NZ(kG,nG)}.`);
```

#### 695. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12761` → after: `L12761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12761) · [Before (L12761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12761)

```diff
-       qu.add(`${Zu} can't take ${Su} there: it takes ${nj(lu,Fu)}.`);
+       UG.add(`${LG} can't take ${sG} there: it takes ${NZ(kG,nG)}.`);
```

#### 696. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12767` → after: `L12767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12767) · [Before (L12767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12767)

```diff
-       qu.add(`${Zu} needs settings in { } there${uu?`, like ${uu}`:""}, not ${Su}.`);
+       UG.add(`${LG} needs settings in { } there${GG?`, like ${GG}`:""}, not ${sG}.`);
```

#### 697. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12772` → after: `L12772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12772) · [Before (L12772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12772)

```diff
-       yu = null !== (Mu = null === (eu = lu.getResolvedSignature(su)) || void 0 === eu || null === (Gu = eu.parameters[nu]) || void 0 === Gu ? void 0 : Gu.name) && void 0 !== Mu ? Mu : "that part",
+       OG = null !== (zG = null === (EG = kG.getResolvedSignature(wG)) || void 0 === EG || null === (oG = EG.parameters[NG]) || void 0 === oG ? void 0 : oG.name) && void 0 !== zG ? zG : "that part",
```

#### 698. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12775` → after: `L12775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12775) · [Before (L12775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12775)

```diff
-     "string" === Au ? qu.add(`${Zu} needs ${yu} as text, but ${Su} is ${Ru} here.`) : "number" === Au ? qu.add(`${Zu} needs ${yu} as a number, but ${Su} is ${Ru} here.`) : qu.add(`${Zu} can't take ${Su} there${Fu?`: it takes ${nj(lu,Fu)}`:". Check Show Docs for what it takes"}.`)
+     "string" === DG ? UG.add(`${LG} needs ${OG} as text, but ${sG} is ${BG} here.`) : "number" === DG ? UG.add(`${LG} needs ${OG} as a number, but ${sG} is ${BG} here.`) : UG.add(`${LG} can't take ${sG} there${nG?`: it takes ${NZ(kG,nG)}`:". Check Show Docs for what it takes"}.`)
```

#### 699. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12790` → after: `L12790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12790) · [Before (L12790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12790)

```diff
-       Zu = null !== (ju = null === uu || void 0 === uu ? void 0 : uu[1]) && void 0 !== ju ? ju : null === uu || void 0 === uu ? void 0 : uu[2];
+       LG = null !== (ZG = null === GG || void 0 === GG ? void 0 : GG[1]) && void 0 !== ZG ? ZG : null === GG || void 0 === GG ? void 0 : GG[2];
```

#### 700. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12792` → after: `L12792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12792) · [Before (L12792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12792)

```diff
-     if (Zu) Eu.set(Zu, (null !== (su = Eu.get(Zu)) && void 0 !== su ? su : 0) + 1)
+     if (LG) bG.set(LG, (null !== (wG = bG.get(LG)) && void 0 !== wG ? wG : 0) + 1)
```

#### 701. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12796` → after: `L12796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12796) · [Before (L12796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12796)

```diff
-     return ju > 1 ? [`${Eu} is in the code ${ju} times, so only the last one runs. Put them together in one ${Eu}.`] : []
+     return ZG > 1 ? [`${bG} is in the code ${ZG} times, so only the last one runs. Put them together in one ${bG}.`] : []
```

#### 702. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12805` → after: `L12805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12805) · [Before (L12805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12805)

```diff
-       const su = null !== (Eu = null === (ju = Xu[uu]) || void 0 === ju ? void 0 : ju.trim()) && void 0 !== Eu ? Eu : "";
+       const wG = null !== (bG = null === (ZG = yG[GG]) || void 0 === ZG ? void 0 : ZG.trim()) && void 0 !== bG ? bG : "";
```

#### 703. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12808` → after: `L12808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12808) · [Before (L12808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12808)

```diff
-         text: su.length > 50 ? `${su.slice(0,47)}...` : su
+         text: wG.length > 50 ? `${wG.slice(0,47)}...` : wG
```

#### 704. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12816` → after: `L12816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12816) · [Before (L12816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12816)

```diff
-       Eu = new RegExp(`^(?:async\\s+)?function\\s*\\*?\\s*${uu}\\s*\\(|^${uu}\\s*=`),
+       bG = new RegExp(`^(?:async\\s+)?function\\s*\\*?\\s*${GG}\\s*\\(|^${GG}\\s*=`),
```

#### 705. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12820` → after: `L12820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12820) · [Before (L12820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12820)

```diff
-   const Cu = null !== (ju = null === (su = /"([^"]+)"/.exec(uu)) || void 0 === su ? void 0 : su[1]) && void 0 !== ju ? ju : null === (Uu = /^api\.[\w$]+/.exec(uu)) || void 0 === Uu ? void 0 : Uu[0];
+   const VG = null !== (ZG = null === (wG = /"([^"]+)"/.exec(GG)) || void 0 === wG ? void 0 : wG[1]) && void 0 !== ZG ? ZG : null === (SG = /^api\.[\w$]+/.exec(GG)) || void 0 === SG ? void 0 : SG[0];
```

#### 706. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12824` → after: `L12824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12824) · [Before (L12824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12824)

```diff
-     Nu = null !== (Zu = cu.find((uu => !bu.has(Xu[uu])))) && void 0 !== Zu ? Zu : cu[0];
+     QG = null !== (LG = fG.find((GG => !pG.has(yG[GG])))) && void 0 !== LG ? LG : fG[0];
```

#### 707. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12869` → after: `L12869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12869) · [Before (L12869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12869)

```diff
-     return [`Line ${Eu.getLineAndCharacterOfPosition(uu.at).line+1} uses "CONFIG.${uu.name}", but CONFIG has no ${uu.name}, so it is undefined there. Add ${uu.name} to CONFIG.`]
+     return [`Line ${bG.getLineAndCharacterOfPosition(GG.at).line+1} uses "CONFIG.${GG.name}", but CONFIG has no ${GG.name}, so it is undefined there. Add ${GG.name} to CONFIG.`]
```

#### 708. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12875` → after: `L12875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12875) · [Before (L12875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12875)

```diff
-   const su = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && !(void 0 !== Eu.path && (0, Yu.c)(Eu.path)),
+   const wG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && !(void 0 !== bG.path && (0, hG.d)(bG.path)),
```

#### 709. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12899` → after: `L12899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12899) · [Before (L12899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12899)

```diff
-           Uu.result.createObjectStore(of)
+           SG.result.createObjectStore(mY)
```

#### 710. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12909` → after: `L12909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12909) · [Before (L12909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12909)

```diff
-           ju(null !== (uu = Uu.error) && void 0 !== uu ? uu : new Error("IndexedDB didn't open"))
+           ZG(null !== (GG = SG.error) && void 0 !== GG ? GG : new Error("IndexedDB didn't open"))
```

#### 711. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12918` → after: `L12918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12918) · [Before (L12918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12918)

```diff
-           return (await Uu()).transaction(of, uu)
+           return (await SG()).transaction(mY, GG)
```

#### 712. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12921` → after: `L12921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12921) · [Before (L12921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12921)

```diff
-           return su = null, (await Uu()).transaction(of, uu)
+           return wG = null, (await SG()).transaction(mY, GG)
```

#### 713. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12936` → after: `L12936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12936) · [Before (L12936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12936)

```diff
-             ju = Eu.objectStore(of).get(uu);
+             ZG = bG.objectStore(mY).get(GG);
```

#### 714. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12945` → after: `L12945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12945) · [Before (L12945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12945)

```diff
-           return uu.objectStore(of).put(ju, Eu), await kf(uu), !0
+           return GG.objectStore(mY).put(ZG, bG), await IY(GG), !0
```

#### 715. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12954` → after: `L12954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12954) · [Before (L12954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12954)

```diff
-           lu = Uu.objectStore(of);
+           kG = SG.objectStore(mY);
```

#### 716. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12958` → after: `L12958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12958) · [Before (L12958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12958)

```diff
-           qu = ju(void 0 === fu.result ? su : fu.result), lu.put(qu, Eu)
+           UG = ZG(void 0 === YG.result ? wG : YG.result), kG.put(UG, bG)
```

#### 717. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12962` → after: `L12962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12962) · [Before (L12962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12962)

```diff
-   }(ZX.h),
+   }(Sy.e),
```

#### 718. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12965` → after: `L12965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12965) · [Before (L12965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12965)

```diff
-       this.store = uu, this.signal = Eu, this.oN = new Map
+       this.store = GG, this.signal = bG, this.vQ = new Map
```

#### 719. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12972-L12973` → after: `L12972-L12973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12972-L12973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L12972-L12973) · [Before (L12972-L12973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L12972-L12973)

```diff
-         this.oN.set(uu, su), su.then(Eu)
-       }))) && void 0 !== ju ? ju : () => {}
+         this.vQ.set(GG, wG), wG.then(bG)
+       }))) && void 0 !== ZG ? ZG : () => {}
```

#### 720. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13002` → after: `L13002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13002) · [Before (L13002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13002)

```diff
-       this.oN.set(uu, Xu.then((uu => {
+       this.vQ.set(GG, yG.then((GG => {
```

#### 721. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13021` → after: `L13021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13021) · [Before (L13021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13021)

```diff
-       this.oN.set(uu, su.then((uu => {
+       this.vQ.set(GG, wG.then((GG => {
```

#### 722. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13038` → after: `L13038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13038) · [Before (L13038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13038)

```diff
-           snapshots: await this.store.update(this.storeKey(uu), (uu => Eu(Vf(uu) ? uu : null))),
+           snapshots: await this.store.update(this.storeKey(GG), (GG => bG(cY(GG) ? GG : null))),
```

#### 723. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13049` → after: `L13049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13049) · [Before (L13049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13049)

```diff
-       return this.store.getItem(this.storeKey(uu)).then((uu => Vf(uu) ? uu : null)).catch((() => null))
+       return this.store.getItem(this.storeKey(GG)).then((GG => cY(GG) ? GG : null)).catch((() => null))
```

#### 724. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13052-L13053` → after: `L13052-L13053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13052-L13053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13052-L13053) · [Before (L13052-L13053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13052-L13053)

```diff
-       let Eu = this.oN.get(uu);
-       return Eu || (Eu = this.store.getItem(this.storeKey(uu)).then((uu => Vf(uu) ? uu : [])).catch((() => [])), this.oN.set(uu, Eu)), Eu
+       let bG = this.vQ.get(GG);
+       return bG || (bG = this.store.getItem(this.storeKey(GG)).then((GG => cY(GG) ? GG : [])).catch((() => [])), this.vQ.set(GG, bG)), bG
```

#### 725. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13056` → after: `L13056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13056) · [Before (L13056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13056)

```diff
-       return `worldCodeAiHistory:${uu}`
+       return `worldCodeAiHistory:${GG}`
```

#### 726. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13061` → after: `L13061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13061) · [Before (L13061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13061)

```diff
-       this.store = uu, this.signal = Eu, this.oN = new Map
+       this.store = GG, this.signal = bG, this.vQ = new Map
```

#### 727. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13069` → after: `L13069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13069) · [Before (L13069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13069)

```diff
-           return null !== (ju = await this.read(uu)) && void 0 !== ju ? ju : Eu
+           return null !== (ZG = await this.read(GG)) && void 0 !== ZG ? ZG : bG
```

#### 728. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13071-L13072` → after: `L13071-L13072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13071-L13072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13071-L13072) · [Before (L13071-L13072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13071-L13072)

```diff
-         this.oN.set(uu, su), su.then(Eu)
-       }))) && void 0 !== ju ? ju : () => {}
+         this.vQ.set(GG, wG), wG.then(bG)
+       }))) && void 0 !== ZG ? ZG : () => {}
```

#### 729. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13078` → after: `L13078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13078) · [Before (L13078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13078)

```diff
-       return this.update(uu, (uu => uu.includes(Eu) || uu.length >= 8 ? uu : [...uu, Eu]))
+       return this.update(GG, (GG => GG.includes(bG) || GG.length >= 8 ? GG : [...GG, bG]))
```

#### 730. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13090` → after: `L13090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13090) · [Before (L13090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13090)

```diff
-         const Uu = Eu(null !== (su = await this.read(uu)) && void 0 !== su ? su : ju);
+         const SG = bG(null !== (wG = await this.read(GG)) && void 0 !== wG ? wG : ZG);
```

#### 731. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13093` → after: `L13093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13093) · [Before (L13093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13093)

```diff
-       this.oN.set(uu, su);
+       this.vQ.set(GG, wG);
```

#### 732. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13101-L13102` → after: `L13101-L13102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13101-L13102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13101-L13102) · [Before (L13101-L13102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13101-L13102)

```diff
-       let Eu = this.oN.get(uu);
-       return Eu || (Eu = this.read(uu).then((uu => null !== uu && void 0 !== uu ? uu : [])), this.oN.set(uu, Eu)), Eu
+       let bG = this.vQ.get(GG);
+       return bG || (bG = this.read(GG).then((GG => null !== GG && void 0 !== GG ? GG : [])), this.vQ.set(GG, bG)), bG
```

#### 733. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13105` → after: `L13105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13105) · [Before (L13105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13105)

```diff
-       return `worldCodeAiNotes:${uu}`
+       return `worldCodeAiNotes:${GG}`
```

#### 734. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13114` → after: `L13114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13114) · [Before (L13114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13114)

```diff
-     const Uu = uu => Nu.d.find((Eu => Eu.id === uu)),
+     const SG = GG => QG.e.find((bG => bG.id === GG)),
```

#### 735. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13117` → after: `L13117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13117) · [Before (L13117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13117)

```diff
-         return null !== (Eu = null === (ju = Uu(uu)) || void 0 === ju ? void 0 : ju.content) && void 0 !== Eu ? Eu : ""
+         return null !== (bG = null === (ZG = SG(GG)) || void 0 === ZG ? void 0 : ZG.content) && void 0 !== bG ? bG : ""
```

#### 736. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13125-L13126` → after: `L13125-L13126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13125-L13126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13125-L13126) · [Before (L13125-L13126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13125-L13126)

```diff
-       itemNames: null !== (uu = null === (Eu = Uu("itemNames")) || void 0 === Eu ? void 0 : Eu.raw) && void 0 !== uu ? uu : "",
-       blockNames: null !== (ju = null === (su = Uu("blockNames")) || void 0 === su ? void 0 : su.raw) && void 0 !== ju ? ju : "",
+       itemNames: null !== (GG = null === (bG = SG("itemNames")) || void 0 === bG ? void 0 : bG.raw) && void 0 !== GG ? GG : "",
+       blockNames: null !== (ZG = null === (wG = SG("blockNames")) || void 0 === wG ? void 0 : wG.raw) && void 0 !== ZG ? ZG : "",
```

#### 737. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13209` → after: `L13209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13209) · [Before (L13209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13209)

```diff
-   return Object.entries(null !== (ju = uu.leftFiles) && void 0 !== ju ? ju : {}).every((uu => {
+   return Object.entries(null !== (ZG = GG.leftFiles) && void 0 !== ZG ? ZG : {}).every((GG => {
```

#### 738. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13212` → after: `L13212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13212) · [Before (L13212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13212)

```diff
-     return (null !== (ju = Eu[su]) && void 0 !== ju ? ju : "") === Uu
+     return (null !== (ZG = bG[wG]) && void 0 !== ZG ? ZG : "") === SG
```

#### 739. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13221-L13222` → after: `L13221-L13222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13221-L13222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13221-L13222) · [Before (L13221-L13222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13221-L13222)

```diff
-     return ju.length > 0 && ju.every((uu => void 0 !== uu && (void 0 === Eu || Eu.some((Eu => Sq(Eu, [uu]) !== Eu))))) ? ju : void 0
-   }(null !== (Eu = uu.warnings) && void 0 !== Eu ? Eu : [], uu.changes.map((uu => uu.after)))
+     return ZG.length > 0 && ZG.every((GG => void 0 !== GG && (void 0 === bG || bG.some((bG => sU(bG, [GG]) !== bG))))) ? ZG : void 0
+   }(null !== (bG = GG.warnings) && void 0 !== bG ? bG : [], GG.changes.map((GG => GG.after)))
```

#### 740. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13248` → after: `L13248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13248) · [Before (L13248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13248)

```diff
-     Vu = null !== (Eu = cu.warnings) && void 0 !== Eu ? Eu : [],
+     lG = null !== (bG = fG.warnings) && void 0 !== bG ? bG : [],
```

#### 741. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13251` → after: `L13251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13251) · [Before (L13251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13251)

```diff
-     iu = null !== (ju = null === (Uu = cu.swappedTo) || void 0 === Uu ? void 0 : Uu[0]) && void 0 !== ju ? ju : ru ? null !== (qu = null === (fu = /"([^"]+)"/.exec(Vu[0])) || void 0 === fu ? void 0 : fu[1]) && void 0 !== qu ? qu : null === (Cu = /^api\.[\w$]+/.exec(Vu[0])) || voi … [truncated]
+     MG = null !== (ZG = null === (SG = fG.swappedTo) || void 0 === SG ? void 0 : SG[0]) && void 0 !== ZG ? ZG : jG ? null !== (UG = null === (YG = /"([^"]+)"/.exec(lG[0])) || void 0 === YG ? void 0 : YG[1]) && void 0 !== UG ? UG : null === (VG = /^api\.[\w$]+/.exec(lG[0])) || voi … [truncated]
```

#### 742. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13256` → after: `L13256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13256) · [Before (L13256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13256)

```diff
-       return new Map((null !== (uu = cu.warnings) && void 0 !== uu ? uu : []).map((uu => [uu, 1 === cu.changes.length && Eu ? Vb(uu, Eu) : void 0])))
+       return new Map((null !== (GG = fG.warnings) && void 0 !== GG ? GG : []).map((GG => [GG, 1 === fG.changes.length && bG ? cp(GG, bG) : void 0])))
```

#### 743. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13260` → after: `L13260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13260) · [Before (L13260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13260)

```diff
-       return null !== (Eu = null === (ju = Su.get(uu)) || void 0 === ju ? void 0 : ju.line) && void 0 !== Eu ? Eu : uu
+       return null !== (bG = null === (ZG = sG.get(GG)) || void 0 === ZG ? void 0 : ZG.line) && void 0 !== bG ? bG : GG
```

#### 744. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13269` → after: `L13269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13269) · [Before (L13269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13269)

```diff
-     tu((uu => 0 === uu.size ? uu : new Set))
+     RG((GG => 0 === GG.size ? GG : new Set))
```

#### 745. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13281` → after: `L13281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13281) · [Before (L13281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13281)

```diff
-         const ju = new Set((null !== (Eu = Hu.get(uu.path)) && void 0 !== Eu ? Eu : []).filter((Eu => !Lu.has(`${uu.path}:${Eu.index}`))).map((uu => uu.index))),
+         const ZG = new Set((null !== (bG = tG.get(GG.path)) && void 0 !== bG ? bG : []).filter((bG => !eG.has(`${GG.path}:${bG.index}`))).map((GG => GG.index))),
```

#### 746. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13287` → after: `L13287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13287) · [Before (L13287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13287)

```diff
-             return `${su.join("\n")}${Uu}`
+             return `${wG.join("\n")}${SG}`
```

#### 747. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13309` → after: `L13309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13309) · [Before (L13309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13309)

```diff
-       title: sE ? `Editing code: ${UE}` : `Code change: ${UE}`,
+       title: wb ? `Editing code: ${Sb}` : `Code change: ${Sb}`,
```

#### 748. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13329` → after: `L13329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13329) · [Before (L13329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13329)

```diff
-           }(EE ? null !== (Eu = EE.find((Eu => Eu.path === uu.path))) && void 0 !== Eu ? Eu : {
+           }(bb ? null !== (bG = bb.find((bG => bG.path === GG.path))) && void 0 !== bG ? bG : {
```

#### 749. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13332` → after: `L13332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13332) · [Before (L13332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13332)

```diff
-           } : uu), Zu = null !== (ju = Hu.get(uu.path)) && void 0 !== ju ? ju : [], lu = "offered" !== ou && "applied" !== ou || "" === uu.before ? [] : function(uu, Eu) {
+           } : GG), LG = null !== (ZG = tG.get(GG.path)) && void 0 !== ZG ? ZG : [], kG = "offered" !== IG && "applied" !== IG || "" === GG.before ? [] : function(GG, bG) {
```

#### 750. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13345` → after: `L13345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13345) · [Before (L13345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13345)

```diff
-                 children: 1 === su ? "1 line added" : `${su} lines added`
+                 children: 1 === wG ? "1 line added" : `${wG} lines added`
```

#### 751. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13353-L13355` → after: `L13353-L13355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13353-L13355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13353-L13355) · [Before (L13353-L13355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13353-L13355)

```diff
-                 const ju = `${uu.path}:${Eu.index}`,
-                   su = [Eu.added.length > 0 ? `+${Eu.added.length}` : "", Eu.removed.length > 0 ? `\u2212${Eu.removed.length}` : ""].filter(Boolean).join(" "),
-                   Uu = [Eu.added.length > 0 ? `${Eu.added.length} ${1===Eu.added.length?"line":"lines"} added` : "", Eu.removed.length > 0 ? `${Eu.removed.length} taken out` : ""].filter(Boolean).join(", ");
+                 const ZG = `${GG.path}:${bG.index}`,
+                   wG = [bG.added.length > 0 ? `+${bG.added.length}` : "", bG.removed.length > 0 ? `\u2212${bG.removed.length}` : ""].filter(Boolean).join(" "),
+                   SG = [bG.added.length > 0 ? `${bG.added.length} ${1===bG.added.length?"line":"lines"} added` : "", bG.removed.length > 0 ? `${bG.removed.length} taken out` : ""].filter(Boolean).join(", ");
```

#### 752. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13381` → after: `L13381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13381) · [Before (L13381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13381)

```diff
-                       children: `${su} ${Eu.added.length+Eu.removed.length===1?"line":"lines"}`
+                       children: `${wG} ${bG.added.length+bG.removed.length===1?"line":"lines"}`
```

#### 753. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13397` → after: `L13397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13397) · [Before (L13397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13397)

```diff
-               children: yu ? `Hide the ${Zu.length} parts` : `Show the ${Zu.length} parts that went in`
+               children: OG ? `Hide the ${LG.length} parts` : `Show the ${LG.length} parts that went in`
```

#### 754. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13410` → after: `L13410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13410) · [Before (L13410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13410)

```diff
-               }, `${uu.path}:${Eu.index}`)))
+               }, `${GG.path}:${bG.index}`)))
```

#### 755. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13420` → after: `L13420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13420) · [Before (L13420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13420)

```diff
-                 const ju = null !== (Eu = cC(uu)) && void 0 !== Eu ? Eu : JC(uu);
+                 const ZG = null !== (bG = VV(GG)) && void 0 !== bG ? bG : XV(GG);
```

#### 756. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13422` → after: `L13422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13422) · [Before (L13422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13422)

```diff
-               })).join(", "), lu.length > 6 ? ` and ${lu.length-6} more` : "", ".", " ", (0, Xu.jsx)("code", {
+               })).join(", "), kG.length > 6 ? ` and ${kG.length-6} more` : "", ".", " ", (0, yG.jsx)("code", {
```

#### 757. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13447-L13448` → after: `L13447-L13448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13447-L13448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13447-L13448) · [Before (L13447-L13448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13447-L13448)

```diff
-           children: Wu ? 1 === Iu ? `${Fu?`Line ${Fu.line}`:"This line"} ${Qu?"will":"would"} never work:` : `${Iu} lines ${Qu?"will":"would"} never work:` : 1 === Iu ? `${Fu?`Line ${Fu.line}`:"This line"} ${Qu?"will":"would"} break:` : `${Iu} lines ${Qu?"will":"would"} break:`
-         }), (vu ? Vu : Vu.slice(0, 1)).map(((uu, Eu, ju) => {
+           children: AG ? 1 === qG ? `${nG?`Line ${nG.line}`:"This line"} ${PG?"will":"would"} never work:` : `${qG} lines ${PG?"will":"would"} never work:` : 1 === qG ? `${nG?`Line ${nG.line}`:"This line"} ${PG?"will":"would"} break:` : `${qG} lines ${PG?"will":"would"} break:`
+         }), (aG ? lG : lG.slice(0, 1)).map(((GG, bG, ZG) => {
```

#### 758. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13455` → after: `L13455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13455) · [Before (L13455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13455)

```diff
-               children: [Iu > 1 && `Line ${Zu.line}: `, (0, Xu.jsx)("code", {
+               children: [qG > 1 && `Line ${LG.line}: `, (0, yG.jsx)("code", {
```

#### 759. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13459` → after: `L13459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13459) · [Before (L13459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13459)

```diff
-               children: !Zu || 1 !== Iu && Qb(uu) ? uu : ib(uu)
+               children: !LG || 1 !== qG && jp(GG) ? GG : Pp(GG)
```

#### 760. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13482` → after: `L13482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13482) · [Before (L13482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13482)

```diff
-         children: au ? au.codeBlock ? "Apply in that code block" : "Apply in World Code" : nu && uE < Au ? `Apply ${uE} of ${Au} changes` : ru ? "Apply anyway" : "Apply to my code"
+         children: WG ? WG.codeBlock ? "Apply in that code block" : "Apply in World Code" : NG && Gb < DG ? `Apply ${Gb} of ${DG} changes` : jG ? "Apply anyway" : "Apply to my code"
```

#### 761. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13597` → after: `L13597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13597) · [Before (L13597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13597)

```diff
-       title: su ? "That change didn't work, so your code is the same." : 1 === ju.length ? "One part didn't work, so it's left out." : `${ju.length} parts didn't work, so they're left out.`,
+       title: wG ? "That change didn't work, so your code is the same." : 1 === ZG.length ? "One part didn't work, so it's left out." : `${ZG.length} parts didn't work, so they're left out.`,
```

#### 762. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13605` → after: `L13605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13605) · [Before (L13605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13605)

```diff
-           children: fu.text.split("\n").length > 4 ? `${fu.text.split("\n").slice(0,4).join("\n")}\n\u2026` : fu.text
+           children: YG.text.split("\n").length > 4 ? `${YG.text.split("\n").slice(0,4).join("\n")}\n\u2026` : YG.text
```

#### 763. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13659` → after: `L13659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13659) · [Before (L13659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13659)

```diff
-         return `Not answered: ${su} didn't accept your key.`;
+         return `Not answered: ${wG} didn't accept your key.`;
```

#### 764. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13661` → after: `L13661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13661) · [Before (L13661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13661)

```diff
-         return `Not answered: ${su} couldn't find ${ju}.`;
+         return `Not answered: ${wG} couldn't find ${ZG}.`;
```

#### 765. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13663` → after: `L13663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13663) · [Before (L13663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13663)

```diff
-         return `Not answered: ${su} stopped your key for now.`;
+         return `Not answered: ${wG} stopped your key for now.`;
```

#### 766. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13665` → after: `L13665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13665) · [Before (L13665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13665)

```diff
-         return `Not answered: too many requests to ${ju}.`;
+         return `Not answered: too many requests to ${ZG}.`;
```

#### 767. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13667` → after: `L13667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13667) · [Before (L13667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13667)

```diff
-         return `Not answered: ${ju} took too long.`;
+         return `Not answered: ${ZG} took too long.`;
```

#### 768. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13669` → after: `L13669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13669) · [Before (L13669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13669)

```diff
-         return `Not answered: couldn't reach ${su}.`;
+         return `Not answered: couldn't reach ${wG}.`;
```

#### 769. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13671` → after: `L13671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13671) · [Before (L13671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13671)

```diff
-         return `Not answered: ${su} doesn't work from where you are.`;
+         return `Not answered: ${wG} doesn't work from where you are.`;
```

#### 770. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13675` → after: `L13675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13675) · [Before (L13675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13675)

```diff
-         return `Not answered: ${ju} couldn't be used.`
+         return `Not answered: ${ZG} couldn't be used.`
```

#### 771. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13680-L13681` → after: `L13680-L13681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13680-L13681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13680-L13681) · [Before (L13680-L13681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13680-L13681)

```diff
- function pc(uu) {
-   return `Add this to my World Code:\n\`\`\`js\n${uu.join("\n").replace(/\s*$/,"\n")}\`\`\``
+ function of(GG) {
+   return `Add this to my World Code:\n\`\`\`js\n${GG.join("\n").replace(/\s*$/,"\n")}\`\`\``
```

#### 772. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13686` → after: `L13686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13686) · [Before (L13686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13686)

```diff
-   return `${Math.floor(Eu/60)}:${String(Eu%60).padStart(2,"0")}`
+   return `${Math.floor(bG/60)}:${String(bG%60).padStart(2,"0")}`
```

#### 773. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13698` → after: `L13698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13698) · [Before (L13698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13698)

```diff
-   const su = (Uu = ju.phase, lu = null !== (Eu = ju.reasoningChars) && void 0 !== Eu ? Eu : 0, "screening" === Uu ? 3 : "writing" === Uu ? 2 : "thinking" === Uu && lu >= 400 ? 1 : 0);
+   const wG = (SG = ZG.phase, kG = null !== (bG = ZG.reasoningChars) && void 0 !== bG ? bG : 0, "screening" === SG ? 3 : "writing" === SG ? 2 : "thinking" === SG && kG >= 400 ? 1 : 0);
```

#### 774. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13702` → after: `L13702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13702) · [Before (L13702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13702)

```diff
-     children: (qu = !ju.skipsSafetyCheck, qu ? BC : BC.filter((uu => "Safety check" !== uu))).map(((uu, Eu) => (0, Xu.jsx)("li", {
+     children: (UG = !ZG.skipsSafetyCheck, UG ? qV : qV.filter((GG => "Safety check" !== GG))).map(((GG, bG) => (0, yG.jsx)("li", {
```

#### 775. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13704` → after: `L13704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13704) · [Before (L13704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13704)

```diff
-       children: Eu < su ? `\u2713 ${uu}` : uu
+       children: bG < wG ? `\u2713 ${GG}` : GG
```

#### 776. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13749` → after: `L13749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13749) · [Before (L13749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13749)

```diff
-         const Eu = "function" === typeof uu ? uu : () => uu;
+         const bG = "function" === typeof GG ? GG : () => GG;
```

#### 777. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13755` → after: `L13755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13755) · [Before (L13755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13755)

```diff
-     const [CE, bE] = (0, su.useState)(null), [cE, NE] = (0, su.useState)([]), [OE, YE] = (0, su.useState)(!1), [hE, DE] = (0, su.useState)([]), [gE, ME] = (0, su.useState)(!1), [eE, GE] = (0, su.useState)(!1), [pE, wE] = (0, su.useState)(null), [JE, dE] = (0, su.useState)(!1), [a … [truncated]
+     const [Vb, pb] = (0, wG.useState)(null), [fb, Qb] = (0, wG.useState)([]), [Kb, hb] = (0, wG.useState)(!1), [db, Jb] = (0, wG.useState)([]), [rb, zb] = (0, wG.useState)(!1), [Eb, ob] = (0, wG.useState)(!1), [Xb, ub] = (0, wG.useState)(null), [ib, Cb] = (0, wG.useState)(!1), [W … [truncated]
```

#### 778. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13758` → after: `L13758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13758) · [Before (L13758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13758)

```diff
-         const Eu = JSON.parse(null !== (uu = localStorage.getItem(nC)) && void 0 !== uu ? uu : "{}");
+         const bG = JSON.parse(null !== (GG = localStorage.getItem(tV)) && void 0 !== GG ? GG : "{}");
```

#### 779. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13775` → after: `L13775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13775) · [Before (L13775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13775)

```diff
-       [HE, AE] = (0, su.useState)(null !== (Eu = sE.dismissedErrorCounts.get(Fu.key)) && void 0 !== Eu ? Eu : 0),
+       [tb, Db] = (0, wG.useState)(null !== (bG = wb.dismissedErrorCounts.get(nG.key)) && void 0 !== bG ? bG : 0),
```

#### 780. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13784` → after: `L13784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13784) · [Before (L13784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13784)

```diff
-       qj = null !== Zj && void 0 !== Zj ? Zj : null === lj || void 0 === lj ? void 0 : lj.entryId,
+       UZ = null !== LZ && void 0 !== LZ ? LZ : null === kZ || void 0 === kZ ? void 0 : kZ.entryId,
```

#### 781. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13836` → after: `L13836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13836) · [Before (L13836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13836)

```diff
-           Uu = Math.max(Uu, Math.min(Xu, Eu ? su(Eu) - ju : su(qu)))
+           SG = Math.max(SG, Math.min(yG, bG ? wG(bG) - ZG : wG(UG)))
```

#### 782. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13897` → after: `L13897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13897) · [Before (L13897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13897)

```diff
-     const wj = null !== (Uu = null === (Nu = ZE.findLast((uu => uu.target.key === Fu.key))) || void 0 === Nu ? void 0 : Nu.retryAt) && void 0 !== Uu ? Uu : 0,
+     const uZ = null !== (SG = null === (QG = Lb.findLast((GG => GG.target.key === nG.key))) || void 0 === QG ? void 0 : QG.retryAt) && void 0 !== SG ? SG : 0,
```

#### 783. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13927` → after: `L13927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13927) · [Before (L13927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13927)

```diff
-         return null !== (ju = su) && void 0 !== ju ? ju : eq(uu)
+         return null !== (ZG = wG) && void 0 !== ZG ? ZG : EU(GG)
```

#### 784. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13967` → after: `L13967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13967) · [Before (L13967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13967)

```diff
-           about: Xu = (null !== Eu && void 0 !== Eu ? Eu : uu.trim()),
+           about: yG = (null !== bG && void 0 !== bG ? bG : GG.trim()),
```

#### 785. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13992` → after: `L13992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L13992) · [Before (L13992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L13992)

```diff
-             } = await Promise.resolve().then((() => ju(1405)));
+             } = await Promise.resolve().then((() => ZG(1311)));
```

#### 786. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14007` → after: `L14007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14007) · [Before (L14007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14007)

```diff
-         const ou = null !== Nu && void 0 !== Nu ? Nu : JE && !bu && void 0 === hu && void 0 === Du;
+         const IG = null !== QG && void 0 !== QG ? QG : ib && !pG && void 0 === dG && void 0 === JG;
```

#### 787. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14011` → after: `L14011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14011) · [Before (L14011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14011)

```diff
-         const ku = null !== (su = null !== Ju && void 0 !== Ju ? Ju : null === au || void 0 === au ? void 0 : au.openPath) && void 0 !== su ? su : vu;
+         const FG = null !== (wG = null !== iG && void 0 !== iG ? iG : null === WG || void 0 === WG ? void 0 : WG.openPath) && void 0 !== wG ? wG : aG;
```

#### 788. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14016` → after: `L14016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14016) · [Before (L14016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14016)

```diff
-           iu = Qu && !Ou.h.get(),
+           MG = PG && !KG.e.get(),
```

#### 789. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14029` → after: `L14029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14029) · [Before (L14029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14029)

```diff
-           nu = (Hu < 0 ? ZE : ZE.slice(0, Hu)).filter((uu => !uu.isNotice && !uu.leftOut && kj(uu) && (iu || !uu.isUnchecked))).slice(-4).map((uu => ({
+           NG = (tG < 0 ? Lb : Lb.slice(0, tG)).filter((GG => !GG.isNotice && !GG.leftOut && FZ(GG) && (MG || !GG.isUnchecked))).slice(-4).map((GG => ({
```

#### 790. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14031` → after: `L14031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14031) · [Before (L14031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14031)

```diff
-             text: uu.question ? `${uu.text}\n${uu.question.question}` : uu.text
+             text: GG.question ? `${GG.text}\n${GG.question.question}` : GG.text
```

#### 791. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14034` → after: `L14034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14034) · [Before (L14034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14034)

```diff
-           zu = void 0 === fu ? void 0 === Eu ? Pu : void 0 : null !== fu && void 0 !== fu ? fu : void 0,
+           xG = void 0 === YG ? void 0 === bG ? mG : void 0 : null !== YG && void 0 !== YG ? YG : void 0,
```

#### 792. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14037` → after: `L14037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14037) · [Before (L14037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14037)

```diff
-           jE = Ru ? uE : void 0;
+           Zb = BG ? Gb : void 0;
```

#### 793. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14050` → after: `L14050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14050) · [Before (L14050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14050)

```diff
-             text: uu ? Pu : null !== Eu && void 0 !== Eu ? Eu : Pu,
+             text: GG ? mG : null !== bG && void 0 !== bG ? bG : mG,
```

#### 794. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14123` → after: `L14123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14123) · [Before (L14123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14123)

```diff
-               if (!Lu && !ru || iu) return null !== du && void 0 !== du ? du : Pu;
+               if (!eG && !jG || MG) return null !== CG && void 0 !== CG ? CG : mG;
```

#### 795. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14165` → after: `L14165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14165) · [Before (L14165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14165)

```diff
-           let fu = Tu || Wu ? null !== du && void 0 !== du ? du : Pu : await Zu();
+           let YG = HG || AG ? null !== CG && void 0 !== CG ? CG : mG : await LG();
```

#### 796. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14167` → after: `L14167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14167) · [Before (L14167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14167)

```diff
-           const cu = null !== (YE = null === au || void 0 === au ? void 0 : au.files) && void 0 !== YE ? YE : gj.current,
+           const fG = null !== (hb = null === WG || void 0 === WG ? void 0 : WG.files) && void 0 !== hb ? hb : rZ.current,
```

#### 797. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14187` → after: `L14187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14187) · [Before (L14187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14187)

```diff
-                 outline: (kE = lE(Nu, new Set(yb().callbackNames())), [kE.callbacks.length > 0 ? `Callbacks: ${kE.callbacks.join(", ")}` : "", kE.commands.length > 0 ? `Commands: ${kE.commands.join(", ")}` : "", kE.functions.length > 0 ? `Functions: ${kE.functions.join(", ")}` :  … [truncated]
+                 outline: (Fb = kb(QG, new Set(Np().callbackNames())), [Fb.callbacks.length > 0 ? `Callbacks: ${Fb.callbacks.join(", ")}` : "", Fb.commands.length > 0 ? `Commands: ${Fb.commands.join(", ")}` : "", Fb.functions.length > 0 ? `Functions: ${Fb.functions.join(", ")}` :  … [truncated]
```

#### 798. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14194-L14195` → after: `L14194-L14195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14194-L14195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14194-L14195) · [Before (L14194-L14195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14194-L14195)

```diff
-               const ju = `${uu.format} ${uu.nativeTools}`,
-                 su = null !== (Eu = mu.get(ju)) && void 0 !== Eu ? Eu : KU(yb(), Ou, uu);
+               const ZG = `${GG.format} ${GG.nativeTools}`,
+                 wG = null !== (bG = vG.get(ZG)) && void 0 !== bG ? bG : aS(Np(), KG, GG);
```

#### 799. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14234` → after: `L14234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14234) · [Before (L14234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14234)

```diff
-               const lu = (0, gu.d)(3e4, Zu.signal);
+               const kG = (0, rG.e)(3e4, LG.signal);
```

#### 800. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14260` → after: `L14260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14260) · [Before (L14260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14260)

```diff
-                 qu || (console.warn(`World Code AI: ${dZ.name} couldn't be reached`, bu), eZ.HN(dZ.name, lu.signal.aborted ? "timeout" : "network"))
+                 UG || (console.warn(`World Code AI: ${iL.name} couldn't be reached`, pG), zL.NQ(iL.name, kG.signal.aborted ? "timeout" : "network"))
```

#### 801. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14308` → after: `L14308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14308) · [Before (L14308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14308)

```diff
-           }, GE = (oE = null === (DE = Pl.getState().status) || void 0 === DE ? void 0 : DE.provider, pl[null !== oE && void 0 !== oE ? oE : "ovh"]), pE = uu => {
+           }, ob = (Ib = null === (Jb = mk.getState().status) || void 0 === Jb ? void 0 : Jb.provider, Xk[null !== Ib && void 0 !== Ib ? Ib : "ovh"]), Xb = GG => {
```

#### 802. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14328` → after: `L14328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14328) · [Before (L14328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14328)

```diff
-             const su = Hu < 0 ? ZE : ZE.slice(0, Hu),
+             const wG = tG < 0 ? Lb : Lb.slice(0, tG),
```

#### 803. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14340` → after: `L14340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14340) · [Before (L14340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14340)

```diff
-                 uh: KU(yb(), Ou, bu, {
+                 Ld: aS(Np(), KG, pG, {
```

#### 804. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14342` → after: `L14342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14342) · [Before (L14342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14342)

```diff
-                   uh: !0
+                   Ld: !0
```

#### 805. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14344` → after: `L14344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14344) · [Before (L14344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14344)

```diff
-                 toolResults: [...(null !== Cu && void 0 !== Cu ? Cu : []).flatMap((uu => uu.call ? [{
+                 toolResults: [...(null !== VG && void 0 !== VG ? VG : []).flatMap((GG => GG.call ? [{
```

#### 806. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14347` → after: `L14347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14347) · [Before (L14347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14347)

```diff
-                 }] : [])), ...(null !== (uu = Ou.lookups) && void 0 !== uu ? uu : []).flatMap((uu => uu.call ? [{
+                 }] : [])), ...(null !== (GG = KG.lookups) && void 0 !== GG ? GG : []).flatMap((GG => GG.call ? [{
```

#### 807. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14349` → after: `L14349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14349) · [Before (L14349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14349)

```diff
-                   text: `${uu.about}:\n${uu.text}`
+                   text: `${GG.about}:\n${GG.text}`
```

#### 808. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14357` → after: `L14357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14357) · [Before (L14357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14357)

```diff
-                   uh: Xu,
+                   Ld: yG,
```

#### 809. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14366` → after: `L14366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14366) · [Before (L14366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14366)

```diff
-                   Ou = null !== Xu && void 0 !== Xu ? Xu : Eu[Eu.length - 1],
+                   KG = null !== yG && void 0 !== yG ? yG : bG[bG.length - 1],
```

#### 810. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14466` → after: `L14466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14466) · [Before (L14466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14466)

```diff
-               content: (PE = null === jE || void 0 === jE || null === (gE = jE.cutShort) || void 0 === gE ? void 0 : gE.cutCall, "Your answer was cut short. Continue exactly where you stopped, from the next character: don't repeat anything or start again, and add nothing before i … [truncated]
+               content: (mb = null === Zb || void 0 === Zb || null === (rb = Zb.cutShort) || void 0 === rb ? void 0 : rb.cutCall, "Your answer was cut short. Continue exactly where you stopped, from the next character: don't repeat anything or start again, and add nothing before i … [truncated]
```

#### 811. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14492` → after: `L14492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14492) · [Before (L14492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14492)

```diff
-                 model: ru.name ? `${ru.name} \xb7 ${ru.model.name}` : ru.model.name
+                 model: jG.name ? `${jG.name} \xb7 ${jG.model.name}` : jG.model.name
```

#### 812. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14515` → after: `L14515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14515) · [Before (L14515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14515)

```diff
-               }, KE = null !== (ME = GE.callFormat) && void 0 !== ME ? ME : "simple", QE = {
+               }, cb = null !== (zb = ob.callFormat) && void 0 !== zb ? zb : "simple", Pb = {
```

#### 813. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14541` → after: `L14541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14541) · [Before (L14541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14541)

```diff
-                   return !Number.isFinite(ju) || ju <= 0 ? uu : {
+                   return !Number.isFinite(ZG) || ZG <= 0 ? GG : {
```

#### 814. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14543` → after: `L14543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14543) · [Before (L14543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14543)

```diff
-                     [Eu]: [...null !== (su = uu[Eu]) && void 0 !== su ? su : [], ju].slice(-10)
+                     [bG]: [...null !== (wG = GG[bG]) && void 0 !== wG ? wG : [], ZG].slice(-10)
```

#### 815. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14560` → after: `L14560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14560) · [Before (L14560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14560)

```diff
-             SE = sU(dE.answer, KE, Nu, ku, WE.callbackNames(), EE ? Yu.b : void 0, OE, new Set([JU(Nu, ku, EE), ku, ...pu, ...Object.keys(null !== Gu && void 0 !== Gu ? Gu : {})].filter((uu => null !== uu))), WE.realName),
+             sb = ZS(Cb.answer, cb, QG, FG, Ab.callbackNames(), bb ? hG.c : void 0, Kb, new Set([uS(QG, FG, bb), FG, ...XG, ...Object.keys(null !== oG && void 0 !== oG ? oG : {})].filter((GG => null !== GG))), Ab.realName),
```

#### 816. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14599` → after: `L14599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14599) · [Before (L14599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14599)

```diff
-               return uu.flatMap((uu => Ib(WE, uu, Eu && !(0, Yu.c)(uu.path))))
+               return GG.flatMap((GG => sp(Ab, GG, bG && !(0, hG.d)(GG.path))))
```

#### 817. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14605` → after: `L14605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14605) · [Before (L14605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14605)

```diff
-                 return null !== (Eu = Qq(uu)) && void 0 !== Eu ? Eu : []
+                 return null !== (bG = PU(GG)) && void 0 !== bG ? bG : []
```

#### 818. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14615` → after: `L14615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14615) · [Before (L14615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14615)

```diff
-             TE = xE.changes.filter((uu => EE && (0, Yu.c)(uu.path))).map((uu => ({
+             Hb = Tb.changes.filter((GG => bb && (0, hG.d)(GG.path))).map((GG => ({
```

#### 819. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14617` → after: `L14617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14617) · [Before (L14617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14617)

```diff
-               path: (0, Yu.e)(uu.path)
+               path: (0, hG.g)(GG.path)
```

#### 820. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14619` → after: `L14619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14619) · [Before (L14619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14619)

```diff
-             HE = xE.changes.filter((uu => !EE || !(0, Yu.c)(uu.path))),
+             tb = Tb.changes.filter((GG => !bb || !(0, hG.d)(GG.path))),
```

#### 821. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14654` → after: `L14654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14654) · [Before (L14654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14654)

```diff
-                 failedEdits: [...(null !== Cu && void 0 !== Cu ? Cu : []).map(Bb), ...lj],
+                 failedEdits: [...(null !== VG && void 0 !== VG ? VG : []).map(np), ...kZ],
```

#### 822. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14671` → after: `L14671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14671) · [Before (L14671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14671)

```diff
-             aj = () => AE.changes.length > 0 ? "Here's a change for your code." : TE.length > 0 ? "This changes your World Code." : AE.worldCode.length > 0 ? "This needs World Code." : Uj.length > 0 ? `I'll put it into ${Uj.map((uu=>uu.path)).join(" and ")}.` : pj ? "Quick questi … [truncated]
+             WZ = () => Db.changes.length > 0 ? "Here's a change for your code." : Hb.length > 0 ? "This changes your World Code." : Db.worldCode.length > 0 ? "This needs World Code." : SZ.length > 0 ? `I'll put it into ${SZ.map((GG=>GG.path)).join(" and ")}.` : XZ ? "Quick questi … [truncated]
```

#### 823. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14680-L14681` → after: `L14680-L14681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14680-L14681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14680-L14681) · [Before (L14680-L14681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14680-L14681)

```diff
-               failedEdits: Xj.length > 0 ? Xj : void 0,
-               question: null !== pj && void 0 !== pj ? pj : void 0,
+               failedEdits: yZ.length > 0 ? yZ : void 0,
+               question: null !== XZ && void 0 !== XZ ? XZ : void 0,
```

#### 824. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14687` → after: `L14687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14687) · [Before (L14687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14687)

```diff
-               plan: ej.length > 0 ? ej : void 0,
+               plan: EZ.length > 0 ? EZ : void 0,
```

#### 825. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14729` → after: `L14729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14729) · [Before (L14729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14729)

```diff
-             }, !0) : Kj && !cE.signal.aborted ? as(vj, "declined") : as(vj, "asked")), cE.signal.aborted) return void oj({
+             }, !0) : cZ && !fb.signal.aborted ? iw(aZ, "declined") : iw(aZ, "asked")), fb.signal.aborted) return void IZ({
```

#### 826. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14741` → after: `L14741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14741) · [Before (L14741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14741)

```diff
-             text: (0, mf.t)(yE),
+             text: (0, FY.v)(Ob),
```

#### 827. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14781` → after: `L14781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14781) · [Before (L14781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14781)

```diff
-             }, Xb.f);
+             }, Sp.h);
```

#### 828. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14804` → after: `L14804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14804) · [Before (L14804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14804)

```diff
-               return `They asked: "${uu}"\nYour last answer wrote this for ${Eu}, but you hadn't seen that file, so it didn't go in. ${Eu} is open now, its code above. Put your code into it, keeping everything it already has and changing only what the request needs:\n\`\`\`js\n${ … [truncated]
+               return `They asked: "${GG}"\nYour last answer wrote this for ${bG}, but you hadn't seen that file, so it didn't go in. ${bG} is open now, its code above. Put your code into it, keeping everything it already has and changing only what the request needs:\n\`\`\`js\n${ … [truncated]
```

#### 829. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14843` → after: `L14843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14843) · [Before (L14843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14843)

```diff
-                 return `In a code block, they asked: "${uu}"\nThe code block's answer needs this part in World Code, which is open now, its code above. Put it in, keeping everything World Code already has: a callback it already defines is changed, with what it does kept, never de … [truncated]
+                 return `In a code block, they asked: "${GG}"\nThe code block's answer needs this part in World Code, which is open now, its code above. Put it in, keeping everything World Code already has: a callback it already defines is changed, with what it does kept, never de … [truncated]
```

#### 830. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14845-L14846` → after: `L14845-L14846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14845-L14846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14845-L14846) · [Before (L14845-L14846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14845-L14846)

```diff
-             Xs(null !== (eE = null === ju || void 0 === ju ? void 0 : ju.request) && void 0 !== eE ? eE : Eu ? function(uu) {
-               return `In a code block, they asked for this in World Code, which is open now: ${uu}`
+             Lw(null !== (Eb = null === ZG || void 0 === ZG ? void 0 : ZG.request) && void 0 !== Eb ? Eb : bG ? function(GG) {
+               return `In a code block, they asked for this in World Code, which is open now: ${GG}`
```

#### 831. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14855` → after: `L14855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14855) · [Before (L14855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14855)

```diff
-             }, qj ? uu : void 0)
+             }, UZ ? GG : void 0)
```

#### 832. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14860` → after: `L14860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14860) · [Before (L14860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14860)

```diff
-             ss(null !== uu && void 0 !== uu ? uu : AE.worldCode.length > 0 ? pc(AE.worldCode) : "", {
+             Zw(null !== GG && void 0 !== GG ? GG : Db.worldCode.length > 0 ? of(Db.worldCode) : "", {
```

#### 833. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14869` → after: `L14869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14869) · [Before (L14869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14869)

```diff
-               text: (0, mf.D)(nE),
+               text: (0, FY.G)(Nb),
```

#### 834. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14878` → after: `L14878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14878) · [Before (L14878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14878)

```diff
-               text: mf.s,
+               text: FY.t,
```

#### 835. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14903` → after: `L14903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14903) · [Before (L14903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14903)

```diff
-             ...qE.chatGpt ? qE : {}
+             ...Ub.chatGpt ? Ub : {}
```

#### 836. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14927` → after: `L14927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14927) · [Before (L14927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14927)

```diff
-               text: null === ju ? Uu : `${Uu} ${ju}`,
+               text: null === ZG ? SG : `${SG} ${ZG}`,
```

#### 837. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14933` → after: `L14933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14933) · [Before (L14933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14933)

```diff
-               chatGpt: null !== (GE = qE.chatGpt) && void 0 !== GE ? GE : su ? {
+               chatGpt: null !== (ob = Ub.chatGpt) && void 0 !== ob ? ob : wG ? {
```

#### 838. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14996` → after: `L14996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L14996) · [Before (L14996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L14996)

```diff
-             const Zu = null !== (ju = null === (su = is.askedFor) || void 0 === su ? void 0 : su.request) && void 0 !== ju ? ju : "",
+             const LG = null !== (ZG = null === (wG = Pw.askedFor) || void 0 === wG ? void 0 : wG.request) && void 0 !== ZG ? ZG : "",
```

#### 839. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15001` → after: `L15001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15001) · [Before (L15001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15001)

```diff
-               asked: `${Zu} ${uu}`,
+               asked: `${LG} ${GG}`,
```

#### 840. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15020` → after: `L15020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15020) · [Before (L15020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15020)

```diff
-           const Uu = null !== (su = ju.useFree) && void 0 !== su ? su : JE && null !== Bs;
+           const SG = null !== (wG = ZG.useFree) && void 0 !== wG ? wG : ib && null !== nw;
```

#### 841. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15042` → after: `L15042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15042) · [Before (L15042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15042)

```diff
-           return (null !== (Eu = mu[ju]) && void 0 !== Eu ? Eu : "") === su
+           return (null !== (bG = vG[ZG]) && void 0 !== bG ? bG : "") === wG
```

#### 842. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15045` → after: `L15045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15045) · [Before (L15045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15045)

```diff
-         const uu = (null !== (Xu = su.until) && void 0 !== Xu ? Xu : 0) - Date.now();
+         const GG = (null !== (yG = wG.until) && void 0 !== yG ? yG : 0) - Date.now();
```

#### 843. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15077` → after: `L15077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15077) · [Before (L15077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15077)

```diff
-       const qu = null !== (ju = su.followUp) && void 0 !== ju ? ju : {
+       const UG = null !== (ZG = wG.followUp) && void 0 !== ZG ? ZG : {
```

#### 844. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15112` → after: `L15112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15112) · [Before (L15112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15112)

```diff
-             return (null !== (Eu = su[uu.path]) && void 0 !== Eu ? Eu : "") !== uu.before
+             return (null !== (bG = wG[GG.path]) && void 0 !== bG ? bG : "") !== GG.before
```

#### 845. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15123` → after: `L15123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15123) · [Before (L15123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15123)

```diff
-           return `Before "${Eu.length>200?`${Eu.slice(0,200).trimEnd()}\u2026`:Eu}"`
+           return `Before "${bG.length>200?`${bG.slice(0,200).trimEnd()}\u2026`:bG}"`
```

#### 846. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15127` → after: `L15127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15127) · [Before (L15127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15127)

```diff
-             return null !== (Eu = uu.why) && void 0 !== Eu ? Eu : []
+             return null !== (bG = GG.why) && void 0 !== bG ? bG : []
```

#### 847. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15131` → after: `L15131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15131) · [Before (L15131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15131)

```diff
-           return ju.length > 400 ? `${ju.slice(0,400).trimEnd()}\u2026` : ju
+           return ZG.length > 400 ? `${ZG.slice(0,400).trimEnd()}\u2026` : ZG
```

#### 848. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15136` → after: `L15136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15136) · [Before (L15136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15136)

```diff
-         return Uu && uu.isPartial ? as(uu.id, "asked") : Uu && Ps({
+         return SG && GG.isPartial ? iw(GG.id, "asked") : SG && Cw({
```

#### 849. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15146` → after: `L15146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15146) · [Before (L15146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15146)

```diff
-               planDone: Math.max(null !== (Eu = uu.planDone) && void 0 !== Eu ? Eu : 0, su.index + 1)
+               planDone: Math.max(null !== (bG = GG.planDone) && void 0 !== bG ? bG : 0, wG.index + 1)
```

#### 850. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15157` → after: `L15157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15157) · [Before (L15157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15157)

```diff
-       const su = null !== (uu = Eu.picked) && void 0 !== uu ? uu : ju.changes,
+       const wG = null !== (GG = bG.picked) && void 0 !== GG ? GG : ZG.changes,
```

#### 851. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15160` → after: `L15160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15160) · [Before (L15160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15160)

```diff
-           return (null !== (Eu = gj.current[uu.path]) && void 0 !== Eu ? Eu : "") === uu.before
+           return (null !== (bG = rZ.current[GG.path]) && void 0 !== bG ? bG : "") === GG.before
```

#### 852. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15229` → after: `L15229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15229) · [Before (L15229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15229)

```diff
-             VC: "//export",
+             vV: "//export",
```

#### 853. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15274` → after: `L15274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15274) · [Before (L15274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15274)

```diff
-             targetKey: Xb.f.key,
+             targetKey: Sp.h.key,
```

#### 854. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15277` → after: `L15277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15277) · [Before (L15277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15277)

```diff
-           }, Au(Xb.f)
+           }, DG(Sp.h)
```

#### 855. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15297` → after: `L15297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15297) · [Before (L15297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15297)

```diff
-             targetKey: Xb.f.key,
+             targetKey: Sp.h.key,
```

#### 856. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15303` → after: `L15303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15303) · [Before (L15303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15303)

```diff
-           }), Au(Xb.f)
+           }), DG(Sp.h)
```

#### 857. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15321` → after: `L15321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15321) · [Before (L15321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15321)

```diff
-             } : uu.result), su = null !== (Uu = uu.worldCodeFiles) && void 0 !== Uu ? Uu : su
+             } : GG.result), wG = null !== (SG = GG.worldCodeFiles) && void 0 !== SG ? SG : wG
```

#### 858. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15331-L15332` → after: `L15331-L15332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15331-L15332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15331-L15332) · [Before (L15331-L15332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15331-L15332)

```diff
-           viewChunk: null !== Tu && void 0 !== Tu ? Tu : Xc,
-           viewGameState: null !== Hu && void 0 !== Hu ? Hu : lc,
+           viewChunk: null !== HG && void 0 !== HG ? HG : Lf,
+           viewGameState: null !== tG && void 0 !== tG ? tG : yf,
```

#### 859. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15335` → after: `L15335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15335) · [Before (L15335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15335)

```diff
-             if ("" === uu.trim()) return `No url was given: give ${Du.i}, or a page it links to.`;
+             if ("" === GG.trim()) return `No url was given: give ${JG.f}, or a page it links to.`;
```

#### 860. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15337-L15340` → after: `L15337-L15340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15337-L15340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15337-L15340) · [Before (L15337-L15340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15337-L15340)

```diff
-             if (null === su) return uu.includes(Du.e) ? `${uu} is every page at once, too long to read: read ${Du.i}, then the page you need.` : `Only Bloxd's docs can be read: ${Du.i} and the pages it links to.`;
-             const Uu = `There is no docs page at ${uu}. ${Du.i} lists every page with its link.`,
-               Zu = `${uu} couldn't be read just now. Use get_docs instead.`,
-               Xu = (0, gu.d)(2e4, ju);
+             if (null === wG) return GG.includes(JG.c) ? `${GG} is every page at once, too long to read: read ${JG.f}, then the page you need.` : `Only Bloxd's docs can be read: ${JG.f} and the pages it links to.`;
+             const SG = `There is no docs page at ${GG}. ${JG.f} lists every page with its link.`,
+               LG = `${GG} couldn't be read just now. Use get_docs instead.`,
+               yG = (0, rG.e)(2e4, ZG);
```

#### 861. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15344` → after: `L15344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15344) · [Before (L15344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15344)

```diff
-               const uu = await fetch(`${Eu}${su}`, {
+               const GG = await fetch(`${bG}${wG}`, {
```

#### 862. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15356-L15357` → after: `L15356-L15357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15356-L15357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15356-L15357) · [Before (L15356-L15357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15356-L15357)

```diff
-             const fu = (0, Du.C)(su);
-             return null !== fu && null === fu.part && lu.length > Du.d ? `${uu} is too long to read whole: read the part you need. Its parts start at ${hu.e}${(0,Du.w)(fu.name,0)}, and ${Du.i} says what each part has.` : lu.length <= 4e4 ? lu : (console.warn("AI Helper: a docs fi … [truncated]
+             const YG = (0, JG.t)(wG);
+             return null !== YG && null === YG.part && kG.length > JG.b ? `${GG} is too long to read whole: read the part you need. Its parts start at ${dG.d}${(0,JG.q)(YG.name,0)}, and ${JG.f} says what each part has.` : kG.length <= 4e4 ? kG : (console.warn("AI Helper: a docs fi … [truncated]
```

#### 863. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15365-L15367` → after: `L15365-L15367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15365-L15367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15365-L15367) · [Before (L15365-L15367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15365-L15367)

```diff
-             lookups: [...(null !== (ju = Eu.options.lookups) && void 0 !== ju ? ju : []).map(Bb), ...qu],
-             worldCodeFiles: null !== (su = lu.worldCodeFiles) && void 0 !== su ? su : Eu.options.worldCodeFiles,
-             viewedPaths: [...null !== (Uu = Eu.options.viewedPaths) && void 0 !== Uu ? Uu : [], ...fu]
+             lookups: [...(null !== (ZG = bG.options.lookups) && void 0 !== ZG ? ZG : []).map(np), ...UG],
+             worldCodeFiles: null !== (wG = kG.worldCodeFiles) && void 0 !== wG ? wG : bG.options.worldCodeFiles,
+             viewedPaths: [...null !== (SG = bG.options.viewedPaths) && void 0 !== SG ? SG : [], ...YG]
```

#### 864. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15383` → after: `L15383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15383) · [Before (L15383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15383)

```diff
-           trialErrors: null !== ju && void 0 !== ju ? ju : su.trialErrors
+           trialErrors: null !== ZG && void 0 !== ZG ? ZG : wG.trialErrors
```

#### 865. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15402` → after: `L15402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15402) · [Before (L15402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15402)

```diff
-       const Eu = (0, mf.y)(uu);
+       const bG = (0, FY.A)(GG);
```

#### 866. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15413` → after: `L15413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15413) · [Before (L15413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15413)

```diff
-         text: (0, mf.x)(uu.errors),
+         text: (0, FY.y)(GG.errors),
```

#### 867. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15422` → after: `L15422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15422) · [Before (L15422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15422)

```diff
-           forgetStatus: Eu ? "forgotten" : "oN"
+           forgetStatus: bG ? "forgotten" : "vQ"
```

#### 868. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15424` → after: `L15424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15424) · [Before (L15424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15424)

```diff
-         for (const Eu of null !== (ju = uu.forgetNotes) && void 0 !== ju ? ju : []) {
+         for (const bG of null !== (ZG = GG.forgetNotes) && void 0 !== ZG ? ZG : []) {
```

#### 869. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15444` → after: `L15444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15444) · [Before (L15444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15444)

```diff
-             const lu = new Map(zf(null !== (su = uu[Uu]) && void 0 !== su ? su : "").map((uu => [uu.key, uu.value]))),
+             const kG = new Map(NY(null !== (wG = GG[SG]) && void 0 !== wG ? wG : "").map((GG => [GG.key, GG.value]))),
```

#### 870. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15450` → after: `L15450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15450) · [Before (L15450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15450)

```diff
-               Eu && Eu.value !== ju && qu.get(uu) === Eu.value && (fu = null !== (Cu = Rf(fu, Eu, ju)) && void 0 !== Cu ? Cu : fu)
+               bG && bG.value !== ZG && UG.get(GG) === bG.value && (YG = null !== (VG = OY(YG, bG, ZG)) && void 0 !== VG ? VG : YG)
```

#### 871. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15466` → after: `L15466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15466) · [Before (L15466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15466)

```diff
-           return Eu.length > 0 ? sC(Eu, "undoing") : 0 === uu.length ? "Before undoing settings" : `Before undoing settings: ${(uu.length>3?[...uu.slice(0,3),uu.length-3+" more"]:uu).join(", ")}`
+           return bG.length > 0 ? bV(bG, "undoing") : 0 === GG.length ? "Before undoing settings" : `Before undoing settings: ${(GG.length>3?[...GG.slice(0,3),GG.length-3+" more"]:GG).join(", ")}`
```

#### 872. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15477` → after: `L15477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15477) · [Before (L15477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15477)

```diff
-         (0, Gf.G)("aiNotes", !Eu)
+         (0, EY.B)("aiNotes", !bG)
```

#### 873. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15479` → after: `L15479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15479) · [Before (L15479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15479)

```diff
-         (0, Gf.G)("aiGameSettings", ju)
+         (0, EY.B)("aiGameSettings", ZG)
```

#### 874. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15481-L15482` → after: `L15481-L15482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15481-L15482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15481-L15482) · [Before (L15481-L15482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15481-L15482)

```diff
-         (0, Gf.G)("aiEdits", Uu)
-       }), [Uu]), (0, pf.i)("aiHelperOverview")
+         (0, EY.B)("aiEdits", SG)
+       }), [SG]), (0, oY.l)("aiHelperOverview")
```

#### 875. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15494` → after: `L15494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15494) · [Before (L15494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15494)

```diff
-     }, as = (uu, Eu) => {
+     }, iw = (GG, bG) => {
```

#### 876. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15500` → after: `L15500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15500) · [Before (L15500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15500)

```diff
-         if (uu.changes.length > 0 && "offered" === uu.status) as(uu.id, "pending");
+         if (GG.changes.length > 0 && "offered" === GG.status) iw(GG.id, "pending");
```

#### 877. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15502` → after: `L15502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15502) · [Before (L15502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15502)

```diff
-           as(uu.id, "checking");
+           iw(GG.id, "checking");
```

#### 878. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15504` → after: `L15504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15504) · [Before (L15504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15504)

```diff
-             as(uu.id, null === await ds(uu.note) ? "saved" : "refused")
+             iw(GG.id, null === await uw(GG.note) ? "saved" : "refused")
```

#### 879. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15506` → after: `L15506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15506) · [Before (L15506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15506)

```diff
-             console.error("World Code AI: couldn't keep a note", ju), as(uu.id, "asked")
+             console.error("World Code AI: couldn't keep a note", ZG), iw(GG.id, "asked")
```

#### 880. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15509` → after: `L15509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15509) · [Before (L15509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15509)

```diff
-       else as(uu.id, "declined")
+       else iw(GG.id, "declined")
```

#### 881. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15520-L15521` → after: `L15520-L15521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15520-L15521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15520-L15521) · [Before (L15520-L15521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15520-L15521)

```diff
-       return null !== (Eu = null !== (ju = null === su || void 0 === su ? void 0 : su.about) && void 0 !== ju ? ju : null === su || void 0 === su ? void 0 : su.text) && void 0 !== Eu ? Eu : "a change"
-     }, vs = ZE.filter(kj), Ks = null === (Mu = vs[vs.length - 1]) || void 0 === Mu ? void 0 : Mu.id, Vs = null !== (Gu = null === (pu = vs.findLast((uu => "user" === uu.role))) || void 0 === pu ? void 0 : pu.id) && void 0 !== Gu ? Gu : 0, rs = vs.length < ZE.length, Qs = vs[vs.le … [truncated]
+       return null !== (bG = null !== (ZG = null === wG || void 0 === wG ? void 0 : wG.about) && void 0 !== ZG ? ZG : null === wG || void 0 === wG ? void 0 : wG.text) && void 0 !== bG ? bG : "a change"
+     }, Fw = Lb.filter(FZ), vw = null === (zG = Fw[Fw.length - 1]) || void 0 === zG ? void 0 : zG.id, aw = null !== (oG = null === (XG = Fw.findLast((GG => "user" === GG.role))) || void 0 === XG ? void 0 : XG.id) && void 0 !== oG ? oG : 0, lw = Fw.length < Lb.length, jw = Fw[Fw.le … [truncated]
```

#### 882. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15523` → after: `L15523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15523) · [Before (L15523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15523)

```diff
-       Qj(null !== (ju = uu.retry) && void 0 !== ju ? ju : "", uu.retryShown, {
+       PZ(null !== (ZG = GG.retry) && void 0 !== ZG ? ZG : "", GG.retryShown, {
```

#### 883. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15611` → after: `L15611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15611) · [Before (L15611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15611)

```diff
-           uu.nextAt = Date.now() + (null !== (su = Eu[uu.count]) && void 0 !== su ? su : 0), uu.count++, Pl.refresh().then((() => {
+           GG.nextAt = Date.now() + (null !== (wG = bG[GG.count]) && void 0 !== wG ? wG : 0), GG.count++, mk.refresh().then((() => {
```

#### 884. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15626` → after: `L15626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15626) · [Before (L15626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15626)

```diff
-     const As = Bs ? `${Bs.id}/${Bs.model.id}` : null;
+     const tw = nw ? `${nw.id}/${nw.model.id}` : null;
```

#### 885. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15632` → after: `L15632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15632) · [Before (L15632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15632)

```diff
-       zs = "aiAnswer" === ws || ("aiNotes" === ws || "aiGameSettings" === ws || "aiGear" === ws) && ys ? ws : "aiPanel",
+       Ow = "aiAnswer" === Xw || ("aiNotes" === Xw || "aiGameSettings" === Xw || "aiGear" === Xw) && Nw ? Xw : "aiPanel",
```

#### 886. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15641` → after: `L15641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15641) · [Before (L15641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15641)

```diff
-         null === (uu = (pE ? Rs : uU).current) || void 0 === uu || uu.focus()
+         null === (GG = (Xb ? xw : Bw).current) || void 0 === GG || GG.focus()
```

#### 887. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15716` → after: `L15716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15716) · [Before (L15716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15716)

```diff
-           children: "settings" === pE ? "AI settings" : oE ? `Edit ${Cl(oE)} key` : "Add an API key"
+           children: "settings" === Xb ? "AI settings" : Ib ? `Edit ${Yk(Ib)} key` : "Add an API key"
```

#### 888. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15721` → after: `L15721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15721) · [Before (L15721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15721)

```diff
-             children: ["Using:", " ", Bs ? JE ? "Bot.xd (free) for the next question" : af(Bs) : xs ? Gl : "Bot.xd (free)"]
+             children: ["Using:", " ", nw ? ib ? "Bot.xd (free) for the next question" : CY(nw) : Rw ? Ek : "Bot.xd (free)"]
```

#### 889. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15777` → after: `L15777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15777) · [Before (L15777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15777)

```diff
-             children: [(0, Xu.jsx)(cu.e, {
+             children: [(0, yG.jsx)(fG.c, {
```

#### 890. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15807` → after: `L15807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15807) · [Before (L15807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15807)

```diff
-                   return null !== (Eu = uu.note) && void 0 !== Eu ? Eu : ""
+                   return null !== (bG = GG.note) && void 0 !== bG ? bG : ""
```

#### 891. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15823` → after: `L15823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15823) · [Before (L15823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15823)

```diff
-                 forgetNotes: Zu.length > 0 ? Zu : void 0
+                 forgetNotes: LG.length > 0 ? LG : void 0
```

#### 892. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15835` → after: `L15835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15835) · [Before (L15835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15835)

```diff
-                 fu = void 0 !== qu && (null !== (su = lu[uu]) && void 0 !== su ? su : "") === Os.current[uu] ? {
+                 YG = void 0 !== UG && (null !== (wG = kG[GG]) && void 0 !== wG ? wG : "") === Qw.current[GG] ? {
```

#### 893. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15839` → after: `L15839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15839) · [Before (L15839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15839)

```diff
-                 Cu = Rf(null !== (Uu = fu[uu]) && void 0 !== Uu ? Uu : "", Eu, ju);
+                 VG = OY(null !== (SG = YG[GG]) && void 0 !== SG ? SG : "", bG, ZG);
```

#### 894. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15847-L15848` → after: `L15847-L15848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15847-L15848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15847-L15848) · [Before (L15847-L15848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15847-L15848)

```diff
-                 cu = `${uu}:${Eu.key}`,
-                 Nu = null !== (Zu = gs.current.get(cu)) && void 0 !== Zu ? Zu : Eu.value;
+                 fG = `${GG}:${bG.key}`,
+                 QG = null !== (LG = Jw.current.get(fG)) && void 0 !== LG ? LG : bG.value;
```

#### 895. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15872` → after: `L15872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15872) · [Before (L15872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15872)

```diff
-               return hs.current.includes(bu) || hs.current.push(bu), Os.current[uu] = null !== (Xu = fu[uu]) && void 0 !== Xu ? Xu : "", Ns.current[uu] = Cu, Dj.current = Date.now(), !0
+               return hw.current.includes(pG) || hw.current.push(pG), Qw.current[GG] = null !== (yG = YG[GG]) && void 0 !== yG ? yG : "", fw.current[GG] = VG, JZ.current = Date.now(), !0
```

#### 896. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15899` → after: `L15899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15899) · [Before (L15899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15899)

```diff
-           editing: null !== oE && void 0 !== oE ? oE : void 0,
+           editing: null !== Ib && void 0 !== Ib ? Ib : void 0,
```

#### 897. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15906` → after: `L15906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15906) · [Before (L15906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15906)

```diff
-         }, null !== (Ju = null === oE || void 0 === oE ? void 0 : oE.id) && void 0 !== Ju ? Ju : "new"), gE && (0, Xu.jsx)(Bf, {
+         }, null !== (iG = null === Ib || void 0 === Ib ? void 0 : Ib.id) && void 0 !== iG ? iG : "new"), rb && (0, yG.jsx)(qY, {
```

#### 898. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15909` → after: `L15909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15909) · [Before (L15909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15909)

```diff
-           lG: ds,
+           Kr: uw,
```

#### 899. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15927` → after: `L15927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15927) · [Before (L15927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15927)

```diff
-                 Qj(mf.s, qc, {
+                 PZ(FY.t, kf, {
```

#### 900. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15939` → after: `L15939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15939) · [Before (L15939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15939)

```diff
-               className: Zu()("WorldCodeAiEntry", `WorldCodeAiEntry-${uu.role}`, {
+               className: LG()("WorldCodeAiEntry", `WorldCodeAiEntry-${GG.role}`, {
```

#### 901. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15970` → after: `L15970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15970) · [Before (L15970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15970)

```diff
-                         files: null !== (Eu = uu.undoFiles) && void 0 !== Eu ? Eu : {}
+                         files: null !== (bG = GG.undoFiles) && void 0 !== bG ? bG : {}
```

#### 902. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15985` → after: `L15985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15985) · [Before (L15985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15985)

```diff
-                         return (null !== (Eu = Uu[uu.path]) && void 0 !== Eu ? Eu : "") === uu.after
+                         return (null !== (bG = SG[GG.path]) && void 0 !== bG ? bG : "") === GG.after
```

#### 903. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15995` → after: `L15995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L15995) · [Before (L15995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L15995)

```diff
-               }) : "assistant" === uu.role ? (0, Xu.jsx)(fu.c, {
+               }) : "assistant" === GG.role ? (0, yG.jsx)(YG.e, {
```

#### 904. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16014` → after: `L16014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16014) · [Before (L16014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16014)

```diff
-                       children: uu.forgetNotes.map((uu => `"${uu}"`)).join(", ")
+                       children: GG.forgetNotes.map((GG => `"${GG}"`)).join(", ")
```

#### 905. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16042` → after: `L16042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16042) · [Before (L16042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16042)

```diff
-                   return (null !== (Eu = mu[uu.path]) && void 0 !== Eu ? Eu : "") !== uu.before
+                   return (null !== (bG = vG[GG.path]) && void 0 !== bG ? bG : "") !== GG.before
```

#### 906. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16044` → after: `L16044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16044) · [Before (L16044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16044)

```diff
-                 canEdit: Yu ? Ku : !!Au && (!uu.target.codeBlock || uu.target.canChangePos),
+                 canEdit: hG ? cG : !!DG && (!GG.target.codeBlock || GG.target.canChangePos),
```

#### 907. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16060` → after: `L16060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16060) · [Before (L16060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16060)

```diff
-                 checkPicked: Yu ? cs : void 0,
+                 checkPicked: hG ? pw : void 0,
```

#### 908. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16073` → after: `L16073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16073) · [Before (L16073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16073)

```diff
-                         return (null !== (ju = Eu[uu.path]) && void 0 !== ju ? ju : "") !== uu.after
+                         return (null !== (ZG = bG[GG.path]) && void 0 !== ZG ? ZG : "") !== GG.after
```

#### 909. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16090` → after: `L16090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16090) · [Before (L16090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16090)

```diff
-                   return (null !== (Eu = mu[uu.path]) && void 0 !== Eu ? Eu : "") === uu.after
+                   return (null !== (bG = vG[GG.path]) && void 0 !== bG ? bG : "") === GG.after
```

#### 910. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16096` → after: `L16096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16096) · [Before (L16096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16096)

```diff
-                     if (!Eu) return void Qj(`Fix this in your change: ${null===(ju=uu.warnings)||void 0===ju?void 0:ju.join(" ")}`);
+                     if (!bG) return void PZ(`Fix this in your change: ${null===(ZG=GG.warnings)||void 0===ZG?void 0:ZG.join(" ")}`);
```

#### 911. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16110` → after: `L16110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16110) · [Before (L16110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16110)

```diff
-                       text: `Fixed without asking the AI: ${Eu.map(Iq).join(" ")}`,
+                       text: `Fixed without asking the AI: ${bG.map(qU).join(" ")}`,
```

#### 912. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16121` → after: `L16121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16121) · [Before (L16121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16121)

```diff
-                     return Eu.length > 0 ? `${Oc} These names were checked against the game and are right, so keep them: ${Eu.map((uu=>`"${uu}"`)).join(", ")}.` : Oc
+                     return bG.length > 0 ? `${Qf} These names were checked against the game and are right, so keep them: ${bG.map((GG=>`"${GG}"`)).join(", ")}.` : Qf
```

#### 913. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16124` → after: `L16124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16124) · [Before (L16124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16124)

```diff
-                     return null !== (Eu = uu.swappedTo) && void 0 !== Eu ? Eu : []
+                     return null !== (bG = GG.swappedTo) && void 0 !== bG ? bG : []
```

#### 914. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16127` → after: `L16127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16127) · [Before (L16127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16127)

```diff
-                 busy: Yu ? !!CE : !zj
+                 busy: hG ? !!Vb : !xZ
```

#### 915. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16133-L16135` → after: `L16133-L16135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16133-L16135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16133-L16135) · [Before (L16133-L16135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16133-L16135)

```diff
-                   const Cu = null !== (su = null === (Uu = uu.question) || void 0 === Uu ? void 0 : Uu.question) && void 0 !== su ? su : "",
-                     bu = null !== (Zu = null === (Xu = uu.askedFor) || void 0 === Xu ? void 0 : Xu.request) && void 0 !== Zu ? Zu : "";
-                   Qj(Tf(bu, Cu, Eu), null !== Eu && void 0 !== Eu ? Eu : "Let the AI pick", {
+                   const VG = null !== (wG = null === (SG = GG.question) || void 0 === SG ? void 0 : SG.question) && void 0 !== wG ? wG : "",
+                     pG = null !== (LG = null === (yG = GG.askedFor) || void 0 === yG ? void 0 : yG.request) && void 0 !== LG ? LG : "";
+                   PZ(RY(pG, VG, bG), null !== bG && void 0 !== bG ? bG : "Let the AI pick", {
```

#### 916. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16138-L16139` → after: `L16138-L16139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16138-L16139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16138-L16139) · [Before (L16138-L16139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16138-L16139)

```diff
-                     asked: ju && Eu ? `${bu} ${Eu}` : null,
-                     guardWords: Tf(null !== (qu = null === (fu = uu.askedFor) || void 0 === fu ? void 0 : fu.guardWords) && void 0 !== qu ? qu : "", Cu, Eu)
+                     asked: ZG && bG ? `${pG} ${bG}` : null,
+                     guardWords: RY(null !== (UG = null === (YG = GG.askedFor) || void 0 === YG ? void 0 : YG.guardWords) && void 0 !== UG ? UG : "", VG, bG)
```

#### 917. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16152-L16153` → after: `L16152-L16153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16152-L16153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16152-L16153) · [Before (L16152-L16153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16152-L16153)

```diff
-                 built: null !== (qu = uu.planBuilt) && void 0 !== qu ? qu : 0,
-                 done: null !== (Cu = uu.planDone) && void 0 !== Cu ? Cu : 0,
+                 built: null !== (UG = GG.planBuilt) && void 0 !== UG ? UG : 0,
+                 done: null !== (VG = GG.planDone) && void 0 !== VG ? VG : 0,
```

#### 918. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16156` → after: `L16156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16156) · [Before (L16156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16156)

```diff
-                   const su = null !== (ju = uu.plan) && void 0 !== ju ? ju : [];
+                   const wG = null !== (ZG = GG.plan) && void 0 !== ZG ? ZG : [];
```

#### 919. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16161-L16163` → after: `L16161-L16163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16161-L16163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16161-L16163) · [Before (L16161-L16163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16161-L16163)

```diff
-                       const ju = uu.map(((uu, ju) => `${ju+1}. ${uu}${ju<Eu?" (built)":""}`)).join("\n");
-                       return `Build step ${Eu+1} of our plan now: ${uu[Eu]}\nThe whole plan:\n${ju}\nBuild only step ${Eu+1}, keeping what earlier steps built, so I can try it before the next.`
-                     }(su, Eu), `Build step ${Eu+1}: ${su[Eu]}`, {
+                       const ZG = GG.map(((GG, ZG) => `${ZG+1}. ${GG}${ZG<bG?" (built)":""}`)).join("\n");
+                       return `Build step ${bG+1} of our plan now: ${GG[bG]}\nThe whole plan:\n${ZG}\nBuild only step ${bG+1}, keeping what earlier steps built, so I can try it before the next.`
+                     }(wG, bG), `Build step ${bG+1}: ${wG[bG]}`, {
```

#### 920. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16181` → after: `L16181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16181) · [Before (L16181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16181)

```diff
-               }, "asked" === uu.noteStatus ? "asked" : "oN"), !Du && Mu, uu.lookups && (0, Xu.jsx)(ec, {
+               }, "asked" === GG.noteStatus ? "asked" : "vQ"), !JG && zG, GG.lookups && (0, yG.jsx)(zf, {
```

#### 921. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16222` → after: `L16222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16222) · [Before (L16222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16222)

```diff
-                   tu(pc(null !== (Eu = uu.worldCode) && void 0 !== Eu ? Eu : []))
+                   RG(of(null !== (bG = GG.worldCode) && void 0 !== bG ? bG : []))
```

#### 922. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16224` → after: `L16224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16224) · [Before (L16224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16224)

```diff
-               }), Yu && "ask" === uu.trial && uu.id > Vs && ru <= (null !== (bu = uu.trialErrors) && void 0 !== bu ? bu : 0) && (0, Xu.jsxs)("div", {
+               }), hG && "ask" === GG.trial && GG.id > aw && jG <= (null !== (pG = GG.trialErrors) && void 0 !== pG ? pG : 0) && (0, yG.jsxs)("div", {
```

#### 923. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16303` → after: `L16303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16303) · [Before (L16303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16303)

```diff
-                       request: null !== (Eu = uu.retry) && void 0 !== Eu ? Eu : "",
+                       request: null !== (bG = GG.retry) && void 0 !== bG ? bG : "",
```

#### 924. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16327` → after: `L16327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16327) · [Before (L16327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16327)

```diff
-                   disabled: (null !== (cu = uu.retryAt) && void 0 !== cu ? cu : 0) > zE,
+                   disabled: (null !== (fG = GG.retryAt) && void 0 !== fG ? fG : 0) > xb,
```

#### 925. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16333` → after: `L16333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16333) · [Before (L16333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16333)

```diff
-                   children: (null !== (Nu = uu.retryAt) && void 0 !== Nu ? Nu : 0) > zE ? `Try again in ${wc((null!==(Ou=uu.retryAt)&&void 0!==Ou?Ou:0)-zE)}` : "Try again"
+                   children: (null !== (QG = GG.retryAt) && void 0 !== QG ? QG : 0) > xb ? `Try again in ${Xf((null!==(KG=GG.retryAt)&&void 0!==KG?KG:0)-xb)}` : "Try again"
```

#### 926. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16359` → after: `L16359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16359) · [Before (L16359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16359)

```diff
-               title: null !== (eu = uu.logTitle) && void 0 !== eu ? eu : uu.isCalm ? "Update" : "Problem",
+               title: null !== (EG = GG.logTitle) && void 0 !== EG ? EG : GG.isCalm ? "Update" : "Problem",
```

#### 927. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16390` → after: `L16390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16390) · [Before (L16390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16390)

```diff
-             }), (Ku ? EE ? Rb : zb : []).map((uu => (0, su.createElement)("button", {
+             }), (cG ? bb ? xp : Op : []).map((GG => (0, wG.createElement)("button", {
```

#### 928. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16400` → after: `L16400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16400) · [Before (L16400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16400)

```diff
-             children: [Bs ? aE ? `Bloxd's safety check first makes sure your request is about your game, then it goes with your code to ${Bs.model.name} with your key.` : `Your request goes with your code to ${Bs.model.name} with your key, without Bloxd's safety check.` : xs ? "d … [truncated]
+             children: [nw ? Wb ? `Bloxd's safety check first makes sure your request is about your game, then it goes with your code to ${nw.model.name} with your key.` : `Your request goes with your code to ${nw.model.name} with your key, without Bloxd's safety check.` : Rw ? "d … [truncated]
```

#### 929. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16419` → after: `L16419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16419) · [Before (L16419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16419)

```diff
-                 title: null !== (au = Jc(CE)) && void 0 !== au ? au : "Thinking\u2026",
+                 title: null !== (WG = uf(Vb)) && void 0 !== WG ? WG : "Thinking\u2026",
```

#### 930. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16423` → after: `L16423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16423) · [Before (L16423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16423)

```diff
-                   children: [LC((null !== (Pu = CE.until) && void 0 !== Pu ? Pu : zE) - zE), " Lots of people share Bot.xd."]
+                   children: [nV((null !== (mG = Vb.until) && void 0 !== mG ? mG : xb) - xb), " Lots of people share Bot.xd."]
```

#### 931. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16427` → after: `L16427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16427) · [Before (L16427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16427)

```diff
-                   }), "screening" === CE.phase && (null !== (ou = CE.until) && void 0 !== ou ? ou : 0) > zE && (0, Xu.jsxs)("span", {
+                   }), "screening" === Vb.phase && (null !== (IG = Vb.until) && void 0 !== IG ? IG : 0) > xb && (0, yG.jsxs)("span", {
```

#### 932. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16429` → after: `L16429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16429) · [Before (L16429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16429)

```diff
-                     children: [LC((null !== (ku = CE.until) && void 0 !== ku ? ku : zE) - zE), " Lots of people share the safety check."]
+                     children: [nV((null !== (FG = Vb.until) && void 0 !== FG ? FG : xb) - xb), " Lots of people share the safety check."]
```

#### 933. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16432` → after: `L16432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16432) · [Before (L16432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16432)

```diff
-                     children: CE.keyModel ? `${CE.keyModel} is answering with your key.` : CE.isSuperBot ? `${Gl} is answering from your usage.` : yC(mE.current, CE.model)
+                     children: Vb.keyModel ? `${Vb.keyModel} is answering with your key.` : Vb.isSuperBot ? `${Ek} is answering from your usage.` : DV(vb.current, Vb.model)
```

#### 934. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16456` → after: `L16456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16456) · [Before (L16456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16456)

```diff
-                   children: EE ? "Your code block runs once in your world, as if you clicked it. If it shows an error, the AI fixes it." : `Your change runs in your world for ${mf.B/1e3} seconds. If it shows an error, the AI fixes it.`
+                   children: bb ? "Your code block runs once in your world, as if you clicked it. If it shows an error, the AI fixes it." : `Your change runs in your world for ${FY.C/1e3} seconds. If it shows an error, the AI fixes it.`
```

#### 935. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16470` → after: `L16470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16470) · [Before (L16470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16470)

```diff
-               children: null !== (ju = uu.shown) && void 0 !== ju ? ju : uu.text
+               children: null !== (ZG = GG.shown) && void 0 !== ZG ? ZG : GG.text
```

#### 936. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16473` → after: `L16473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16473) · [Before (L16473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16473)

```diff
-               children: [uu.id === Lj ? "Pick Bot.xd to send it" : null !== (su = Ab[Eu]) && void 0 !== su ? su : "In line", (0, Xu.jsx)("button", {
+               children: [GG.id === eZ ? "Pick Bot.xd to send it" : null !== (wG = tp[bG]) && void 0 !== wG ? wG : "In line", (0, yG.jsx)("button", {
```

#### 937. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16493` → after: `L16493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16493) · [Before (L16493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16493)

```diff
-                 Iu(null !== (uu = Pj.path) && void 0 !== uu ? uu : vu, null !== (Eu = Pj.line) && void 0 !== Eu ? Eu : 1), (0, bu.e)() && Su()
+                 qG(null !== (GG = mZ.path) && void 0 !== GG ? GG : aG, null !== (bG = mZ.line) && void 0 !== bG ? bG : 1), (0, pG.c)() && sG()
```

#### 938. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16495` → after: `L16495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16495) · [Before (L16495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16495)

```diff
-               children: [Pj.path && Pj.path !== vu ? `${Pj.path} line` : "Line", " ", Pj.line]
+               children: [mZ.path && mZ.path !== aG ? `${mZ.path} line` : "Line", " ", mZ.line]
```

#### 939. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16508` → after: `L16508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16508) · [Before (L16508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16508)

```diff
-                 AE(ru), Ij.current(`Fix this error: ${aj}`)
+                 Db(jG), qZ.current(`Fix this error: ${WZ}`)
```

#### 940. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16517` → after: `L16517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16517) · [Before (L16517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16517)

```diff
-                 AE(ru), Ij.current(`Explain this error in simple words, and where it is in my code: ${aj}`)
+                 Db(jG), qZ.current(`Explain this error in simple words, and where it is in my code: ${WZ}`)
```

#### 941. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16564` → after: `L16564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16564) · [Before (L16564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16564)

```diff
-               placeholder: LE ? `How should ${Cb(LE)} change?` : is ? "Or type your own answer here" : "Ask AI",
+               placeholder: eb ? `How should ${Up(eb)} change?` : Pw ? "Or type your own answer here" : "Ask AI",
```

#### 942. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16571` → after: `L16571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16571) · [Before (L16571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16571)

```diff
-             }), (0, Xu.jsx)(Cu.p, {
+             }), (0, yG.jsx)(VG.k, {
```

#### 943. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16576` → after: `L16576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16576) · [Before (L16576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16576)

```diff
-               children: (0, Xu.jsx)(cu.e, {
+               children: (0, yG.jsx)(fG.c, {
```

#### 944. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16587` → after: `L16587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16587) · [Before (L16587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16587)

```diff
-             editsOn: Ku ? vE : null,
+             editsOn: cG ? ab : null,
```

#### 945. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16592-L16594` → after: `L16592-L16594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16592-L16594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16592-L16594) · [Before (L16592-L16594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16592-L16594)

```diff
-               if (CE) return 0 === xj.length ? "You can type your next request: it sends when this answer is done." : 1 === xj.length ? "1 request waiting: it sends when this answer is done." : `${xj.length} requests waiting: they send one at a time.`;
-               if (Bs && JE) return `Your next question goes to Bot.xd, then back to ${Bs.model.name}.`;
-               if (Bs) return `Your question and code go to ${iX(Bs.provider,Bs.baseUrl,!0)}.${aE?"":" Safety check off."}`;
+               if (Vb) return 0 === TZ.length ? "You can type your next request: it sends when this answer is done." : 1 === TZ.length ? "1 request waiting: it sends when this answer is done." : `${TZ.length} requests waiting: they send one at a time.`;
+               if (nw && ib) return `Your next question goes to Bot.xd, then back to ${nw.model.name}.`;
+               if (nw) return `Your question and code go to ${Py(nw.provider,nw.baseUrl,!0)}.${Wb?"":" Safety check off."}`;
```

#### 946. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16597` → after: `L16597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16597) · [Before (L16597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16597)

```diff
-                   return uu <= Eu ? null : `Limit resets in ${(0,el.e)(Math.ceil((uu-Eu)/6e4))}`
+                   return GG <= bG ? null : `Limit resets in ${(0,zk.b)(Math.ceil((GG-bG)/6e4))}`
```

#### 947. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16609` → after: `L16609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16609) · [Before (L16609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16609)

```diff
-               return Jj > zE ? `Send now and it starts by itself. ${LC(Jj-zE)}` : null
+               return iZ > xb ? `Send now and it starts by itself. ${nV(iZ-xb)}` : null
```

#### 948. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16617` → after: `L16617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16617) · [Before (L16617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16617)

```diff
-       onPrevious: "aiPanel" === zs ? Su : void 0,
+       onPrevious: "aiPanel" === Ow ? sG : void 0,
```

#### 949. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16622` → after: `L16622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16622) · [Before (L16622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16622)

```diff
- }, 39926: (uu, Eu, ju) => {
+ }, 40012: (GG, bG, ZG) => {
```

#### 950. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16624` → after: `L16624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16624) · [Before (L16624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16624)

```diff
-     d: () => qu,
+     e: () => UG,
```

#### 951. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16626` → after: `L16626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16626) · [Before (L16626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16626)

```diff
-     h: () => Uu
+     i: () => SG
```

#### 952. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16635` → after: `L16635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16635) · [Before (L16635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16635)

```diff
-     const Eu = (null !== uu && void 0 !== uu ? uu : "").match(/-?\d+(?:\.\d+)?/g);
+     const bG = (null !== GG && void 0 !== GG ? GG : "").match(/-?\d+(?:\.\d+)?/g);
```

#### 953. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16640` → after: `L16640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16640) · [Before (L16640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16640)

```diff
-     return uu === Eu ? String(uu) : `${uu}-${Eu}`
+     return GG === bG ? String(GG) : `${GG}-${bG}`
```

#### 954. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16654` → after: `L16654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16654) · [Before (L16654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16654)

```diff
-           const uu = `${qu} ${fu} ${Uu}`,
+           const GG = `${UG} ${YG} ${SG}`,
```

#### 955. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16668` → after: `L16668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16668) · [Before (L16668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16668)

```diff
-     return Uu.push(...Zu.values()), Uu.sort(((uu, Eu) => uu.z0 - Eu.z0 || uu.x0 - Eu.x0)).map((uu => `x${Xu(uu.x0,uu.x1)} z${Xu(uu.z0,uu.z1)} ${uu.name}`))
+     return SG.push(...LG.values()), SG.sort(((GG, bG) => GG.z0 - bG.z0 || GG.x0 - bG.x0)).map((GG => `x${yG(GG.x0,GG.x1)} z${yG(GG.z0,GG.z1)} ${GG.name}`))
```

#### 956. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16675-L16676` → after: `L16675-L16676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16675-L16676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16675-L16676) · [Before (L16675-L16676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16675-L16676)

```diff
-       Cu = [`The chunk from ${uu.join(" ")} to ${qu.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
-     null !== Uu && Cu.push(`The player's feet are at ${Uu.map(Math.floor).join(" ")}, ${fu?"in this chunk":"outside this chunk"}.`);
+       VG = [`The chunk from ${GG.join(" ")} to ${UG.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
+     null !== SG && VG.push(`The player's feet are at ${SG.map(Math.floor).join(" ")}, ${YG?"in this chunk":"outside this chunk"}.`);
```

#### 957. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16681` → after: `L16681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16681) · [Before (L16681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16681)

```diff
-       (null === Zu || void 0 === Zu ? void 0 : Zu.boxes) === Uu ? Zu.to = su : bu.push({
+       (null === LG || void 0 === LG ? void 0 : LG.boxes) === SG ? LG.to = wG : pG.push({
```

#### 958. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16691` → after: `L16691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16691) · [Before (L16691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16691)

```diff
-       const uu = `y${Xu(su.from,su.to)}: ${su.boxes}`;
+       const GG = `y${yG(wG.from,wG.to)}: ${wG.boxes}`;
```

#### 959. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16693` → after: `L16693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16693) · [Before (L16693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16693)

```diff
-         Cu.push(`Cut short: the layers from y${su.from} up aren't shown, as there are too many blocks.`);
+         VG.push(`Cut short: the layers from y${wG.from} up aren't shown, as there are too many blocks.`);
```

#### 960. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16700` → after: `L16700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16700) · [Before (L16700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16700)

```diff
- }, 4995: (uu, Eu, ju) => {
+ }, 4849: (GG, bG, ZG) => {
```

#### 961. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16702-L16706` → after: `L16702-L16706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16702-L16706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16702-L16706) · [Before (L16702-L16706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16702-L16706)

```diff
-     d: () => lu,
-     g: () => Uu,
-     h: () => qu,
-     j: () => Xu,
-     k: () => Zu
+     e: () => kG,
+     i: () => SG,
+     k: () => UG,
+     n: () => yG,
+     p: () => LG
```

#### 962. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16708` → after: `L16708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16708) · [Before (L16708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16708)

```diff
-   var su = ju(4992);
+   var wG = ZG(4847);
```

#### 963. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16717` → after: `L16717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16717) · [Before (L16717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16717)

```diff
-     Xu = `${su.i} lists every page of the Bloxd Code API docs.`;
+     yG = `${wG.f} lists every page of the Bloxd Code API docs.`;
```

#### 964. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16720` → after: `L16720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16720) · [Before (L16720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16720)

```diff
-     return `${uu.url}${encodeURIComponent(Eu.toWellFormed())}`
+     return `${GG.url}${encodeURIComponent(bG.toWellFormed())}`
```

#### 965. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16733` → after: `L16733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16733) · [Before (L16733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16733)

```diff
- }, 4992: (uu, Eu, ju) => {
+ }, 4847: (GG, bG, ZG) => {
```

#### 966. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16735-L16736` → after: `L16735-L16736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16735-L16736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16735-L16736) · [Before (L16735-L16736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16735-L16736)

```diff
-     C: () => Nu,
-     d: () => Uu,
+     b: () => SG,
+     c: () => UG,
```

#### 967. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16739` → after: `L16739-L16740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16739-L16740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16739-L16740) · [Before (L16739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16739)

```diff
-     i: () => Xu,
+     h: () => kG,
+     l: () => dG,
```

#### 968. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16742-L16744` → after: `L16743-L16744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16743-L16744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16743-L16744) · [Before (L16742-L16744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16742-L16744)

```diff
-     t: () => Cu,
-     w: () => bu,
-     y: () => Yu
+     s: () => hG,
+     t: () => QG
```

#### 969. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16746` → after: `L16746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16746) · [Before (L16746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16746)

```diff
-   var su = ju(1639);
+   var wG = ZG(1527);
```

#### 970. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16749` → after: `L16749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16749) · [Before (L16749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16749)

```diff
-     Xu = `${su.e}${Zu}`,
+     yG = `${wG.d}${LG}`,
```

#### 971. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16758` → after: `L16758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16758) · [Before (L16758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16758)

```diff
-     return `/docs/${fu(uu)}.md`
+     return `/docs/${YG(GG)}.md`
```

#### 972. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16762` → after: `L16762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16762) · [Before (L16762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16762)

```diff
-     return `/docs/${fu(uu)}/${Eu+1}.md`
+     return `/docs/${YG(GG)}/${bG+1}.md`
```

#### 973. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16783` → after: `L16783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L16783) · [Before (L16783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L16783)

```diff
-     return `/docsHtml/${fu(uu)}.html`
+     return `/docsHtml/${YG(GG)}.html`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/93.js` (dz8ef.98c5e741 → wp3j0a.a13381cf)

- **File**: `bundles/bloxd.io/chunks/js/93.js` (54 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b)

#### 1. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L4)

```diff
-   41498: (uu, Eu, ju) => {
+   41687: (GG, bG, ZG) => {
```

#### 2. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L6-L12` → after: `L6-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L6-L12) · [Before (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L6-L12)

```diff
-       DOCS_AGENT_PART_CHARS: () => QE.d,
-       DOCS_LLMS_FULL_TXT_PATH: () => QE.e,
-       DOCS_LLMS_TXT_PATH: () => QE.f,
-       DOCS_LLMS_TXT_URL: () => QE.i,
-       ROOT_LLMS_TXT_PATH: () => QE.m,
-       allGamemodeSettings: () => su.c,
-       arcadeModeStaticConfig: () => Yu.b,
+       DOCS_AGENT_PART_CHARS: () => Pb.b,
+       DOCS_LLMS_FULL_TXT_PATH: () => Pb.c,
+       DOCS_LLMS_TXT_PATH: () => Pb.e,
+       DOCS_LLMS_TXT_URL: () => Pb.f,
+       ROOT_LLMS_TXT_PATH: () => Pb.h,
+       allGamemodeSettings: () => wG.d,
+       arcadeModeStaticConfig: () => hG.e,
```

#### 3. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L14)

```diff
-       backroomsStaticConfig: () => sE.e,
+       backroomsStaticConfig: () => wb.d,
```

#### 4. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L16-L17` → after: `L16-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L16-L17) · [Before (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L16-L17)

```diff
-       bedwarsStaticConfig: () => ku.d,
-       bloxdAggregatorConfig: () => lu.b,
+       bedwarsStaticConfig: () => FG.c,
+       bloxdAggregatorConfig: () => kG.d,
```

#### 5. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L19)

```diff
-       bloxdStagingAggregatorConfig: () => fu.b,
+       bloxdStagingAggregatorConfig: () => YG.c,
```

#### 6. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L23)

```diff
-       clutchStaticConfig: () => Hu.e,
+       clutchStaticConfig: () => tG.b,
```

#### 7. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L25)

```diff
-       containmentBreachStaticConfig: () => uE.b,
+       containmentBreachStaticConfig: () => Gb.c,
```

#### 8. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L27-L28)

```diff
-       coolMathGamesAggregatorConfig: () => Cu.b,
-       coreDefendersStaticConfig: () => Ru.e,
+       coolMathGamesAggregatorConfig: () => VG.c,
+       coreDefendersStaticConfig: () => BG.d,
```

#### 9. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L31-L33` → after: `L31-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L31-L33) · [Before (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L31-L33)

```diff
-       customGameSettings: () => su.e,
-       customGamesListingHeading: () => VE.e,
-       customGamesListingPath: () => VE.g,
+       customGameSettings: () => wG.h,
+       customGamesListingHeading: () => lb.d,
+       customGamesListingPath: () => lb.h,
```

#### 10. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L35-L39` → after: `L35-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L35-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L35-L39) · [Before (L35-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L35-L39)

```diff
-       docsPageHtmlPath: () => QE.q,
-       docsPageMarkdownPath: () => QE.t,
-       docsPagePartPath: () => QE.w,
-       docsPageTitles: () => dE.e,
-       docsSitePageMarkdownPath: () => QE.y,
+       docsPageHtmlPath: () => Pb.l,
+       docsPageMarkdownPath: () => Pb.m,
+       docsPagePartPath: () => Pb.q,
+       docsPageTitles: () => Cb.c,
+       docsSitePageMarkdownPath: () => Pb.s,
```

#### 11. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L41)

```diff
-       doodleStaticConfig: () => Pu.e,
+       doodleStaticConfig: () => mG.b,
```

#### 12. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L43-L44` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L43-L44) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L43-L44)

```diff
-       eatToGrowStaticConfig: () => jE.b,
-       escapeHtml: () => dE.i,
+       eatToGrowStaticConfig: () => Zb.e,
+       escapeHtml: () => Cb.e,
```

#### 13. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L47)

```diff
-       extractionStaticConfig: () => tu.c,
+       extractionStaticConfig: () => RG.e,
```

#### 14. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L49)

```diff
-       fishingStaticConfig: () => Ou.b,
+       fishingStaticConfig: () => KG.e,
```

#### 15. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L51` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L51) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L51)

```diff
-       gameImageVariantsEncoding: () => pE.d,
+       gameImageVariantsEncoding: () => Xb.b,
```

#### 16. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L53-L61` → after: `L53-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L53-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L53-L61) · [Before (L53-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L53-L61)

```diff
-       getConfiguredGameImagePaths: () => JE.e,
-       getCustomGameFromPath: () => dE.l,
-       getCustomGameListingPage: () => VE.h,
-       getCustomGamePagePath: () => dE.o,
-       getCustomGamePageRedirectPath: () => dE.r,
-       getCustomGameSchematicIdFromPath: () => dE.v,
-       getCustomGameThumbnailCandidates: () => ME.c,
-       getCustomGameThumbnailUrls: () => ME.d,
-       getCustomGameUrlIdFromPath: () => dE.y,
+       getConfiguredGameImagePaths: () => ib.b,
+       getCustomGameFromPath: () => Cb.f,
+       getCustomGameListingPage: () => lb.l,
+       getCustomGamePagePath: () => Cb.j,
+       getCustomGamePageRedirectPath: () => Cb.n,
+       getCustomGameSchematicIdFromPath: () => Cb.r,
+       getCustomGameThumbnailCandidates: () => zb.d,
+       getCustomGameThumbnailUrls: () => zb.h,
+       getCustomGameUrlIdFromPath: () => Cb.v,
```

#### 17. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L63-L72` → after: `L63-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L63-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L63-L72) · [Before (L63-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L63-L72)

```diff
-       getGameCanonicalUrl: () => dE.B,
-       getGameImageBlurhash: () => eE.c,
-       getGameImagePath: () => JE.i,
-       getGameImageVariantPath: () => wE.m,
-       getGameImageVariantSource: () => GE.b,
-       getGameImageVariants: () => GE.c,
-       getGamePage: () => dE.I,
-       getGamePageContentHeadings: () => aE.e,
-       getGamePagePath: () => dE.F,
-       getGamePageRedirectPath: () => dE.H,
+       getGameCanonicalUrl: () => Cb.x,
+       getGameImageBlurhash: () => Eb.d,
+       getGameImagePath: () => ib.f,
+       getGameImageVariantPath: () => ub.o,
+       getGameImageVariantSource: () => ob.d,
+       getGameImageVariants: () => ob.g,
+       getGamePage: () => Cb.H,
+       getGamePageContentHeadings: () => Wb.f,
+       getGamePagePath: () => Cb.B,
+       getGamePageRedirectPath: () => Cb.F,
```

#### 18. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L74-L77` → after: `L74-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L74-L77) · [Before (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L74-L77)

```diff
-       getGameTileImagePaths: () => GE.e,
-       getIndexedCustomGameListingPaths: () => VE.i,
-       getIndexedGamePages: () => dE.M,
-       getJsonLdScriptText: () => dE.N,
+       getGameTileImagePaths: () => ob.h,
+       getIndexedCustomGameListingPaths: () => lb.m,
+       getIndexedGamePages: () => Cb.N,
+       getJsonLdScriptText: () => Cb.P,
```

#### 19. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L79` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L79) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L79)

```diff
-       getPathSeoMetadata: () => dE.U,
+       getPathSeoMetadata: () => Cb.S,
```

#### 20. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L81)

```diff
-       getPlayerSeoMetadata: () => dE.X,
+       getPlayerSeoMetadata: () => Cb.V,
```

#### 21. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L83-L85` → after: `L83-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L83-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L83-L85) · [Before (L83-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L83-L85)

```diff
-       getShaderPackPolicy: () => su.h,
-       getShaderPackSeoMetadata: () => dE.ab,
-       getStaticGameConfig: () => su.j,
+       getShaderPackPolicy: () => wG.l,
+       getShaderPackSeoMetadata: () => Cb.$,
+       getStaticGameConfig: () => wG.p,
```

#### 22. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L88` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L88) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L88)

```diff
-       goalRushStaticConfig: () => yu.d,
+       goalRushStaticConfig: () => OG.e,
```

#### 23. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L90)

```diff
-       greenvilleStaticConfig: () => ou.d,
+       greenvilleStaticConfig: () => IG.b,
```

#### 24. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L92` → after: `L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L92) · [Before (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L92)

```diff
-       hideseekStaticConfig: () => vu.e,
+       hideseekStaticConfig: () => aG.b,
```

#### 25. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L97-L99` → after: `L97-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L97-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L97-L99) · [Before (L97-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L97-L99)

```diff
-       loadGamePageContent: () => aE.h,
-       luckyBattlegroundsStaticConfig: () => au.b,
-       luckyTowersStaticConfig: () => du.e,
+       loadGamePageContent: () => Wb.j,
+       luckyBattlegroundsStaticConfig: () => WG.d,
+       luckyTowersStaticConfig: () => CG.b,
```

#### 26. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L101` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L101) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L101)

```diff
-       naturalDisasterStaticConfig: () => Qu.e,
+       naturalDisasterStaticConfig: () => PG.d,
```

#### 27. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L104-L105` → after: `L104-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L104-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L104-L105) · [Before (L104-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L104-L105)

```diff
-       oneBlockStaticConfig: () => Mu.d,
-       paintballStaticConfig: () => ru.b,
+       oneBlockStaticConfig: () => zG.c,
+       paintballStaticConfig: () => jG.c,
```

#### 28. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L109` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L109) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L109)

```diff
-       plotsStaticConfig: () => pu.e,
+       plotsStaticConfig: () => XG.c,
```

#### 29. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L114` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L114) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L114)

```diff
-       readDocsPageMarkdownPath: () => QE.C,
+       readDocsPageMarkdownPath: () => Pb.t,
```

#### 30. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L116` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L116) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L116)

```diff
-       renderSeoMetaTags: () => dE.lb,
+       renderSeoMetaTags: () => Cb.mb,
```

#### 31. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L118-L124` → after: `L118-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L118-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L118-L124) · [Before (L118-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L118-L124)

```diff
-       rocketSpleefStaticConfig: () => Ju.c,
-       seoSiteOrigin: () => rE.e,
-       shootingStaticConfig: () => Nu.e,
-       simonSaysStaticConfig: () => xu.e,
-       skyIslandsStaticConfig: () => nu.d,
-       skyblockStaticConfig: () => eu.e,
-       skywarsStaticConfig: () => Gu.c,
+       rocketSpleefStaticConfig: () => iG.d,
+       seoSiteOrigin: () => jb.d,
+       shootingStaticConfig: () => QG.b,
+       simonSaysStaticConfig: () => TG.d,
+       skyIslandsStaticConfig: () => NG.e,
+       skyblockStaticConfig: () => EG.b,
+       skywarsStaticConfig: () => oG.d,
```

#### 32. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L126` → after: `L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L126) · [Before (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L126)

```diff
-       testGymStaticConfig: () => Du.c,
+       testGymStaticConfig: () => JG.b,
```

#### 33. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L128` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L128) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L128)

```diff
-       tsunamiStaticConfig: () => Bu.d,
+       tsunamiStaticConfig: () => gG.b,
```

#### 34. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L132` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L132) · [Before (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L132)

```diff
-     var su = ju(822);
+     var wG = ZG(751);
```

#### 35. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L136-L140` → after: `L136-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L136-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L136-L153) · [Before (L136-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L136-L140)

```diff
-       return null !== (Eu = null === (ju = (0, su.j)(uu)) || void 0 === ju ? void 0 : ju.defaultListedVariation) && void 0 !== Eu ? Eu : uu
-     }
-     var Zu = ju(1065),
-       Xu = ju(1094),
-       lu = ju(819),
+       return null !== (bG = null === (ZG = (0, wG.p)(GG)) || void 0 === ZG ? void 0 : ZG.defaultListedVariation) && void 0 !== bG ? bG : GG
+     }
+     var LG = ZG(973),
+       yG = ZG(999),
+       kG = ZG(743),
+       UG = ZG(736),
+       YG = ZG(739),
+       VG = ZG(729),
+       pG = ZG(722),
+       fG = ZG(754),
+       QG = ZG(779),
+       KG = ZG(760),
+       hG = ZG(768),
+       dG = ZG(773),
+       JG = ZG(776),
+       rG = ZG(784),
+ ... (2 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L142-L144` → after: `L155-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L155-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L155-L158) · [Before (L142-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L142-L144)

```diff
-       fu = ju(811),
-       Cu = ju(796),
-       bu = ju(792),
+       XG = ZG(805),
+       uG = ZG(812),
+       iG = ZG(817),
+       CG = ZG(821),
```

#### 37. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L146-L158` → after: `L160-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L160-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L160-L172) · [Before (L146-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L146-L158)

```diff
-       Nu = ju(850),
-       Ou = ju(828),
-       Yu = ju(831),
-       hu = ju(837),
-       Du = ju(841),
-       gu = ju(856),
-       Mu = ju(858),
-       eu = ju(867),
-       Gu = ju(883),
-       pu = ju(886),
-       wu = ju(894),
-       Ju = ju(898),
-       du = ju(900),
+       mG = ZG(833),
+       IG = ZG(836),
+       FG = ZG(843),
+       vG = ZG(845),
+       aG = ZG(853),
+       cG = ZG(859),
+       lG = ZG(866),
+       jG = ZG(874),
+       PG = ZG(876),
+       MG = ZG(884),
+       AG = ZG(888),
+       sG = ZG(892),
+       qG = ZG(897),
```

#### 38. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L162-L165` → after: `L176-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L176-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L176-L179) · [Before (L162-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L162-L165)

```diff
-       ku = ju(916),
-       mu = ju(921),
-       vu = ju(930),
-       Ku = ju(933),
+       RG = ZG(918),
+       TG = ZG(924),
+       HG = ZG(928),
+       tG = ZG(932),
```

#### 39. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L167-L188` → after: `L181-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L181-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L181-L188) · [Before (L167-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L167-L188)

```diff
-       ru = ju(945),
-       Qu = ju(947),
-       iu = ju(953),
-       Wu = ju(957),
-       Su = ju(964),
-       Iu = ju(970),
-       Fu = ju(972),
-       Bu = ju(980),
-       Lu = ju(983),
-       tu = ju(988),
-       xu = ju(996),
-       Tu = ju(1001),
-       Hu = ju(1008),
-       Au = ju(1014),
-       nu = ju(1022),
-       yu = ju(1031),
- ... (6 more removed lines; see GitHub link above)
+       NG = ZG(938),
+       OG = ZG(940),
+       xG = ZG(942),
+       BG = ZG(951),
+       Gb = ZG(954),
+       bb = ZG(960),
+       Zb = ZG(963),
+       wb = ZG(966);
```

#### 40. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L404-L411` → after: `L404-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L404-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L404-L411) · [Before (L404-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L404-L411)

```diff
-     var ME = ju(1620),
-       eE = ju(1632),
-       GE = ju(3707),
-       pE = ju(3720),
-       wE = ju(1626),
-       JE = ju(3712),
-       dE = ju(1600),
-       aE = ju(1651);
+     var zb = ZG(1512),
+       Eb = ZG(1520),
+       ob = ZG(3489),
+       Xb = ZG(3500),
+       ub = ZG(1515),
+       ib = ZG(3494),
+       Cb = ZG(1490),
+       Wb = ZG(1535);
```

#### 41. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L414-L433` → after: `L414-L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L414-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L414-L433) · [Before (L414-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L414-L433)

```diff
-       return `<${uu}><h2>${(0,dE.i)(Eu)}</h2>${ju}</${uu}>`
-     }
- 
-     function oE(uu) {
-       return uu.map((uu => `<p>${(0,dE.i)(uu)}</p>`)).join("")
-     }
- 
-     function kE(uu) {
-       return `<ul>${uu.map((uu=>`<li>${uu}</li>`)).join("")}</ul>`
-     }
- 
-     function mE(uu) {
-       return kE(uu.map(dE.i))
-     }
- 
-     function vE(uu, Eu) {
- ... (4 more removed lines; see GitHub link above)
+       return `<${GG}><h2>${(0,Cb.e)(bG)}</h2>${ZG}</${GG}>`
+     }
+ 
+     function Ib(GG) {
+       return GG.map((GG => `<p>${(0,Cb.e)(GG)}</p>`)).join("")
+     }
+ 
+     function Fb(GG) {
+       return `<ul>${GG.map((GG=>`<li>${GG}</li>`)).join("")}</ul>`
+     }
+ 
+     function vb(GG) {
+       return Fb(GG.map(Cb.e))
+     }
+ 
+     function ab(GG, bG) {
+ ... (4 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L437` → after: `L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L437) · [Before (L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L437)

```diff
-       const ju = (0, dE.I)(uu);
+       const ZG = (0, Cb.H)(GG);
```

#### 43. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L439-L440` → after: `L439-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/93.js#L439-L440) · [Before (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/93.js#L439-L440)

```diff
-       const su = await (0, aE.h)(ju),
-         Uu = (0, aE.e)(su),
+       const wG = await (0, Wb.j)(ZG),
+         SG = (0, Wb.f)(wG),
```
