# Changed — Bundle Modifications Report (Part 084 / 132)

- **Updated at**: `2026-11-21T10:00 JST`
- **Part**: `84 / 132` (**421** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 083](part-083.md) · [Part 085 →](part-085.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/89.js` (halsg.2bd74967 → x17cru.159bd7ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/89.js` (933 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8)

#### 476. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8893` → after: `L8893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L8893) · [Before (L8893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L8893)

```diff
-     Ob(this.byName.get(null !== (Lb = null !== (Yb = Hb[1]) && void 0 !== Yb ? Yb : Hb[2]) && void 0 !== Lb ? Lb : Hb[3]), Hb[1] || Hb[2] ? 4 : 2)
+     Nd(this.byName.get(null !== (Zd = null !== (gd = od[1]) && void 0 !== gd ? gd : od[2]) && void 0 !== Zd ? Zd : od[3]), od[1] || od[2] ? 4 : 2)
```

#### 477. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8904-L8905` → after: `L8904-L8905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8904-L8905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L8904-L8905) · [Before (L8904-L8905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L8904-L8905)

```diff
-       const hb = 1 / Math.log2(2 + (null !== (ab = this.wordCounts.get(ub)) && void 0 !== ab ? ab : 0));
-       Hb.nameWords.has(ub) ? bb += 3 * hb : Hb.textWords.has(ub) && (bb += hb)
+       const kd = 1 / Math.log2(2 + (null !== (Kd = this.wordCounts.get(Jd)) && void 0 !== Kd ? Kd : 0));
+       od.nameWords.has(Jd) ? dd += 3 * kd : od.textWords.has(Jd) && (dd += kd)
```

#### 478. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8921` → after: `L8921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L8921) · [Before (L8921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L8921)

```diff
-   return null !== (ub = null !== (hb = this.byName.get(Bb)) && void 0 !== hb ? hb : this.sections.find((bb => bb.name.toLowerCase() === Ob))) && void 0 !== ub ? ub : null
+   return null !== (Jd = null !== (kd = this.byName.get(pd)) && void 0 !== kd ? kd : this.sections.find((dd => dd.name.toLowerCase() === Nd))) && void 0 !== Jd ? Jd : null
```

#### 479. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8958` → after: `L8958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L8958) · [Before (L8958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L8958)

```diff
-         Bb = new RegExp(`(^|[^\\w$.])${hb}\\s*\\(`),
+         pd = new RegExp(`(^|[^\\w$.])${kd}\\s*\\(`),
```

#### 480. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8984` → after: `L8984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L8984) · [Before (L8984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L8984)

```diff
-         when: `in ${hb[1]}`,
+         when: `in ${kd[1]}`,
```

#### 481. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8991` → after: `L8991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L8991) · [Before (L8991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L8991)

```diff
-     Lb = Gb && ub ? ` ${Gb}` : "",
+     Zd = Wd && Jd ? ` ${Wd}` : "",
```

#### 482. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8995-L8996` → after: `L8995-L8996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8995-L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L8995-L8996) · [Before (L8995-L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L8995-L8996)

```diff
-     const bb = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (Sb = null === (ab = Ob[0]) || void 0 === ab ? void 0 : ab.trim()) && void 0 !== Sb ? Sb : ""),
-       ub = null === (Hb = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (wb = null === (Zb = Ob[1]) || void 0 === Zb ? void 0 : Zb.trim()) && void 0 !== wb ? wb : "")) || void 0 === Hb ? void 0 : Hb[1],
+     const dd = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (Cd = null === (Kd = Nd[0]) || void 0 === Kd ? void 0 : Kd.trim()) && void 0 !== Cd ? Cd : ""),
+       Jd = null === (od = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (ld = null === (Qd = Nd[1]) || void 0 === Qd ? void 0 : Qd.trim()) && void 0 !== ld ? ld : "")) || void 0 === od ? void 0 : od[1],
```

#### 483. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8999` → after: `L8999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L8999) · [Before (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L8999)

```diff
-         return /^(a|an|the)\s/i.test(ub) || !/^[a-z]/i.test(ub) ? ub : `${/^[aeiou]/i.test(ub)?"an":"a"} ${ub}`
+         return /^(a|an|the)\s/i.test(Jd) || !/^[a-z]/i.test(Jd) ? Jd : `${/^[aeiou]/i.test(Jd)?"an":"a"} ${Jd}`
```

#### 484. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9001` → after: `L9001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9001) · [Before (L9001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9001)

```diff
-     return hb && null !== bb && void 0 !== bb && bb[3] ? `api.${Yb[1]} needs ${hb}, but it got ${bb[3]}${Lb}.` : bb ? `api.${Yb[1]} couldn't use its ${Xb=Number(bb[1]),1===Xb?"first":2===Xb?"second":3===Xb?"third":4===Xb?"fourth":`#${Xb}`} argument${Lb}.${hb?` It needs ${hb}.`:"" … [truncated]
+     return kd && null !== dd && void 0 !== dd && dd[3] ? `api.${gd[1]} needs ${kd}, but it got ${dd[3]}${Zd}.` : dd ? `api.${gd[1]} couldn't use its ${Ld=Number(dd[1]),1===Ld?"first":2===Ld?"second":3===Ld?"third":4===Ld?"fourth":`#${Ld}`} argument${Zd}.${kd?` It needs ${kd}.`:"" … [truncated]
```

#### 485. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9005` → after: `L9005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9005) · [Before (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9005)

```diff
-   if (pb) return pb[1] ? `${pb[1]} isn't a function${Lb}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${Lb}. Check each name it calls is spelt exactly right.`;
+   if (Od) return Od[1] ? `${Od[1]} isn't a function${Zd}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${Zd}. Check each name it calls is spelt exactly right.`;
```

#### 486. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9007` → after: `L9007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9007) · [Before (L9007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9007)

```diff
-   if (ob) return `${ob[1]} isn't defined${Lb}. Check the spelling, or create it before using it.`;
+   if (ed) return `${ed[1]} isn't defined${Zd}. Check the spelling, or create it before using it.`;
```

#### 487. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9011-L9012` → after: `L9011-L9012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9011-L9012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9011-L9012) · [Before (L9011-L9012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9011-L9012)

```diff
-     const bb = null !== (lb = Ab[1]) && void 0 !== lb ? lb : Ab[3];
-     return `Your code tried to read${bb?` .${bb}`:" something"} from ${Ab[2]}${Lb}: a value it expected wasn't there.`
+     const dd = null !== (Id = Rd[1]) && void 0 !== Id ? Id : Rd[3];
+     return `Your code tried to read${dd?` .${dd}`:" something"} from ${Rd[2]}${Zd}: a value it expected wasn't there.`
```

#### 488. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9014` → after: `L9014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9014) · [Before (L9014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9014)

```diff
-   return `Your code hit an error${Lb}: ${Ub.replace(/^\w*Error:\s*/,"")}`
+   return `Your code hit an error${Zd}: ${Pd.replace(/^\w*Error:\s*/,"")}`
```

#### 489. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9093` → after: `L9093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9093) · [Before (L9093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9093)

```diff
-   return bb.replaceAll(`"${ub}"`, `"${hb}"`).replaceAll(`'${ub}'`, `'${hb}'`)
+   return dd.replaceAll(`"${Jd}"`, `"${kd}"`).replaceAll(`'${Jd}'`, `'${kd}'`)
```

#### 490. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9097` → after: `L9097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9097) · [Before (L9097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9097)

```diff
-   const hb = bb => nb().isIdentifier(bb) ? bb.text === ub : bb.elements.some((bb => !nb().isOmittedExpression(bb) && hb(bb.name))),
+   const kd = dd => ad().isIdentifier(dd) ? dd.text === Jd : dd.elements.some((dd => !ad().isOmittedExpression(dd) && kd(dd.name))),
```

#### 491. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9110` → after: `L9110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9110) · [Before (L9110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9110)

```diff
-       return (null === bb || void 0 === bb || null === (hb = bb.name) || void 0 === hb ? void 0 : hb.text) === ub || void 0 !== Bb && (nb().isNamespaceImport(Bb) ? Bb.name.text === ub : Bb.elements.some((bb => bb.name.text === ub)))
+       return (null === dd || void 0 === dd || null === (kd = dd.name) || void 0 === kd ? void 0 : kd.text) === Jd || void 0 !== pd && (ad().isNamespaceImport(pd) ? pd.name.text === Jd : pd.elements.some((dd => dd.name.text === Jd)))
```

#### 492. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9124` → after: `L9124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9124) · [Before (L9124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9124)

```diff
-             text: `${hb}${ub}${hb}`
+             text: `${kd}${Jd}${kd}`
```

#### 493. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9136` → after: `L9136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9136) · [Before (L9136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9136)

```diff
-                 edit: Gb(Ob, nb().isShorthandPropertyAssignment(bb) ? `${Bb}: ${hb}` : Bb),
+                 edit: Wd(Nd, ad().isShorthandPropertyAssignment(dd) ? `${pd}: ${kd}` : pd),
```

#### 494. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9138` → after: `L9138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9138) · [Before (L9138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9138)

```diff
-                 HZ: Lb
+                 qQ: Zd
```

#### 495. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9151` → after: `L9151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9151) · [Before (L9151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9151)

```diff
-         return gh(bb, Ub.flatMap((bb => bb.depth !== ub || bb.HZ ? [] : [bb.edit])))
+         return bk(dd, Pd.flatMap((dd => dd.depth !== Jd || dd.qQ ? [] : [dd.edit])))
```

#### 496. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9189` → after: `L9189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9189) · [Before (L9189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9189)

```diff
-               text: nb().isShorthandPropertyAssignment(Sb) ? `${ub}: ${hb}` : hb
+               text: ad().isShorthandPropertyAssignment(Cd) ? `${Jd}: ${kd}` : kd
```

#### 497. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9199-L9200` → after: `L9199-L9200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9199-L9200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9199-L9200) · [Before (L9199-L9200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9199-L9200)

```diff
-       const ub = `(["'])${function(bb){return bb.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(hb)}\\1`;
-       return ("comparedBlock" === Ob ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${ub}`, `${ub}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${ub}`, `${ub}\\s*[!=]==?`, `\\bcase\\s+${ub}\\s*:`, `\\.includes\\(\\s*${ub}\\s*\\)`]).reduce(((bb, ub) => bb.replace(new RegExp(ub, "g"), … [truncated]
+       const Jd = `(["'])${function(dd){return dd.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(kd)}\\1`;
+       return ("comparedBlock" === Nd ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${Jd}`, `${Jd}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${Jd}`, `${Jd}\\s*[!=]==?`, `\\bcase\\s+${Jd}\\s*:`, `\\.includes\\(\\s*${Jd}\\s*\\)`]).reduce(((dd, Jd) => dd.replace(new RegExp(Jd, "g"), … [truncated]
```

#### 498. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9210` → after: `L9210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9210) · [Before (L9210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9210)

```diff
-   return "export" === bb.kind ? 'The "global." lines are gone: World Code finds your callbacks by their names.' : "null" === bb.kind ? `The null given to ${bb.method} is gone.` : `"${bb.from}" is now "${bb.to}".`
+   return "export" === dd.kind ? 'The "global." lines are gone: World Code finds your callbacks by their names.' : "null" === dd.kind ? `The null given to ${dd.method} is gone.` : `"${dd.from}" is now "${dd.to}".`
```

#### 499. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9212` → after: `L9212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9212) · [Before (L9212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9212)

```diff
- var CY = hb(40906);
+ var sg = kd(41432);
```

#### 500. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9269` → after: `L9269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9269) · [Before (L9269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9269)

```diff
-       return Ob ? `${Bb} didn't accept your key: it may be wrong or deleted.` : `${Bb} didn't accept your key: it may be wrong or deleted. Check it on ${Bb}'s website.`;
+       return Nd ? `${pd} didn't accept your key: it may be wrong or deleted.` : `${pd} didn't accept your key: it may be wrong or deleted. Check it on ${pd}'s website.`;
```

#### 501. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9271` → after: `L9271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9271) · [Before (L9271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9271)

```diff
-       return Ob ? `${Bb} stopped your key for now: it has used all it can.` : `${Bb} stopped your key for now: it has used all it can. Check it on ${Bb}'s website.`;
+       return Nd ? `${pd} stopped your key for now: it has used all it can.` : `${pd} stopped your key for now: it has used all it can. Check it on ${pd}'s website.`;
```

#### 502. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9273` → after: `L9273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9273) · [Before (L9273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9273)

```diff
-       return `Too many requests to ${hb} right now. Wait a minute and try again.`;
+       return `Too many requests to ${kd} right now. Wait a minute and try again.`;
```

#### 503. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9275` → after: `L9275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9275) · [Before (L9275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9275)

```diff
-       return `${Bb} can't find ${hb}. Pick another model, or press Check for new models in AI settings.`;
+       return `${pd} can't find ${kd}. Pick another model, or press Check for new models in AI settings.`;
```

#### 504. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9277` → after: `L9277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9277) · [Before (L9277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9277)

```diff
-       return `${hb} took too long to answer.`;
+       return `${kd} took too long to answer.`;
```

#### 505. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9279` → after: `L9279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9279) · [Before (L9279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9279)

```diff
-       return Ob ? `Couldn't reach ${Bb}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${Bb}. Check your internet and your key.`;
+       return Nd ? `Couldn't reach ${pd}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${pd}. Check your internet and your key.`;
```

#### 506. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9281` → after: `L9281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9281) · [Before (L9281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9281)

```diff
-       return `${Bb} doesn't work from where you are.`;
+       return `${pd} doesn't work from where you are.`;
```

#### 507. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9285` → after: `L9285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9285) · [Before (L9285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9285)

```diff
-       return `${hb} can't be used right now. Try again in a minute.`
+       return `${kd} can't be used right now. Try again in a minute.`
```

#### 508. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9297` → after: `L9297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9297) · [Before (L9297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9297)

```diff
-       return `Not answered: ${Bb} didn't accept your key.`;
+       return `Not answered: ${pd} didn't accept your key.`;
```

#### 509. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9299` → after: `L9299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9299) · [Before (L9299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9299)

```diff
-       return `Not answered: ${Bb} couldn't find ${hb}.`;
+       return `Not answered: ${pd} couldn't find ${kd}.`;
```

#### 510. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9301` → after: `L9301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9301) · [Before (L9301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9301)

```diff
-       return `Not answered: ${Bb} stopped your key for now.`;
+       return `Not answered: ${pd} stopped your key for now.`;
```

#### 511. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9303` → after: `L9303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9303) · [Before (L9303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9303)

```diff
-       return `Not answered: too many requests to ${hb}.`;
+       return `Not answered: too many requests to ${kd}.`;
```

#### 512. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9305` → after: `L9305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9305) · [Before (L9305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9305)

```diff
-       return `Not answered: ${hb} took too long.`;
+       return `Not answered: ${kd} took too long.`;
```

#### 513. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9307` → after: `L9307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9307) · [Before (L9307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9307)

```diff
-       return `Not answered: couldn't reach ${Bb}.`;
+       return `Not answered: couldn't reach ${pd}.`;
```

#### 514. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9309` → after: `L9309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9309) · [Before (L9309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9309)

```diff
-       return `Not answered: ${Bb} doesn't work from where you are.`;
+       return `Not answered: ${pd} doesn't work from where you are.`;
```

#### 515. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9313` → after: `L9313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9313) · [Before (L9313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9313)

```diff
-       return `Not answered: ${hb} couldn't be used.`
+       return `Not answered: ${kd} couldn't be used.`
```

#### 516. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9331` → after: `L9331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9331) · [Before (L9331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9331)

```diff
-       ...CY.h,
+       ...sg.e,
```

#### 517. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9464` → after: `L9464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9464) · [Before (L9464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9464)

```diff
-       return "" === bb ? "no key needed" : bb.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === ub ? `key \u2026${bb.slice(-4)}` : `${(null!==(hb=null===(Bb=/^[a-zA-Z]+-/.exec(bb))||void 0===Bb?void 0:Bb[0])&&void 0!==hb?hb:bb.slice(0,4)).slice(0,6)}\u2026${bb.slice(-4)}`
+       return "" === dd ? "no key needed" : dd.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === Jd ? `key \u2026${dd.slice(-4)}` : `${(null!==(kd=null===(pd=/^[a-zA-Z]+-/.exec(dd))||void 0===pd?void 0:pd[0])&&void 0!==kd?kd:dd.slice(0,4)).slice(0,6)}\u2026${dd.slice(-4)}`
```

#### 518. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9486` → after: `L9486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9486) · [Before (L9486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9486)

```diff
-         "aria-label": `Edit ${Gb} key`,
+         "aria-label": `Edit ${Wd} key`,
```

#### 519. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9491` → after: `L9491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9491) · [Before (L9491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9491)

```diff
-         "aria-label": `Rename ${Gb} key`,
+         "aria-label": `Rename ${Wd} key`,
```

#### 520. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9512` → after: `L9512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9512) · [Before (L9512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9512)

```diff
-     Ab = `${wb}-${null!==(ub=null===ab||void 0===ab?void 0:ab.keyId)&&void 0!==ub?ub:"botxd"}-${null!==(hb=null===ab||void 0===ab?void 0:ab.modelId)&&void 0!==hb?hb:"botxd"}`.replace(/[^\w-]/g, "_"),
+     Rd = `${ld}-${null!==(Jd=null===Kd||void 0===Kd?void 0:Kd.keyId)&&void 0!==Jd?Jd:"botxd"}-${null!==(kd=null===Kd||void 0===Kd?void 0:Kd.modelId)&&void 0!==kd?kd:"botxd"}`.replace(/[^\w-]/g, "_"),
```

#### 521. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9516-L9518` → after: `L9516-L9518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9516-L9518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9516-L9518) · [Before (L9516-L9518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9516-L9518)

```diff
-     "data-key-id": null !== (Ob = null === ab || void 0 === ab ? void 0 : ab.keyId) && void 0 !== Ob ? Ob : "botxd",
-     "data-model-id": null !== (Lb = null === ab || void 0 === ab ? void 0 : ab.modelId) && void 0 !== Lb ? Lb : "botxd",
-     title: null !== pb && void 0 !== pb ? pb : void 0,
+     "data-key-id": null !== (Nd = null === Kd || void 0 === Kd ? void 0 : Kd.keyId) && void 0 !== Nd ? Nd : "botxd",
+     "data-model-id": null !== (Zd = null === Kd || void 0 === Kd ? void 0 : Kd.modelId) && void 0 !== Zd ? Zd : "botxd",
+     title: null !== Od && void 0 !== Od ? Od : void 0,
```

#### 522. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9526` → after: `L9526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9526) · [Before (L9526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9526)

```diff
-       "aria-describedby": Sb ? Ab : void 0,
+       "aria-describedby": Cd ? Rd : void 0,
```

#### 523. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9553` → after: `L9553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9553) · [Before (L9553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9553)

```diff
-     gJ: Yb,
+     RY: gd,
```

#### 524. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9576` → after: `L9576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9576) · [Before (L9576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9576)

```diff
-           at: null !== (hb = bb.usedAt) && void 0 !== hb ? hb : 0,
+           at: null !== (kd = dd.usedAt) && void 0 !== kd ? kd : 0,
```

#### 525. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9599` → after: `L9599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9599) · [Before (L9599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9599)

```diff
-     gb = `${ub}-model`,
+     md = `${Jd}-model`,
```

#### 526. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9612` → after: `L9612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9612) · [Before (L9612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9612)

```diff
-       }, null !== (Bb = null === hb || void 0 === hb ? void 0 : hb.modelId) && void 0 !== Bb ? Bb : "botxd")
+       }, null !== (pd = null === kd || void 0 === kd ? void 0 : kd.modelId) && void 0 !== pd ? pd : "botxd")
```

#### 527. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9620` → after: `L9620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9620) · [Before (L9620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9620)

```diff
-       hint: null !== Ab && void 0 !== Ab ? Ab : `Bloxd's better AI. ${ob.status?lL(ob.status):""}`.trim(),
+       hint: null !== Rd && void 0 !== Rd ? Rd : `Bloxd's better AI. ${ed.status?xZ(ed.status):""}`.trim(),
```

#### 528. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9626` → after: `L9626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9626) · [Before (L9626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9626)

```diff
-         LL(null !== (bb = null === (ub = ob.status) || void 0 === ub ? void 0 : ub.provider) && void 0 !== bb ? bb : "ovh") && SL.xw()
+         KZ(null !== (dd = null === (Jd = ed.status) || void 0 === Jd ? void 0 : Jd.provider) && void 0 !== dd ? dd : "ovh") && lZ.Tl()
```

#### 529. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9631` → after: `L9631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9631) · [Before (L9631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9631)

```diff
-           if (LL(null !== (ub = null === bb || void 0 === bb ? void 0 : bb.provider) && void 0 !== ub ? ub : "ovh")) return SL.xw(), !0;
+           if (KZ(null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.provider) && void 0 !== Jd ? Jd : "ovh")) return lZ.Tl(), !0;
```

#### 530. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9639` → after: `L9639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9639) · [Before (L9639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9639)

```diff
-             }] = await Promise.all([Promise.resolve().then((() => hb(1249))), hb.e(348).then((() => hb(60617)))]), Bb = bb.showPromptPopup({
+             }] = await Promise.all([Promise.resolve().then((() => kd(1371))), kd.e(348).then((() => kd(60904)))]), pd = dd.showPromptPopup({
```

#### 531. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9650` → after: `L9650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9650) · [Before (L9650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9650)

```diff
-             }(), SL.xw(), !0)
+             }(), lZ.Tl(), !0)
```

#### 532. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9663-L9664` → after: `L9663-L9664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9663-L9664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9663-L9664) · [Before (L9663-L9664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9663-L9664)

```diff
-         gb = Ab ? null !== (ub = bb.models.find((ub => ub.id === bb.usedModelId))) && void 0 !== ub ? ub : yU(bb.models) : void 0,
-         vb = null !== (hb = null === (Bb = db[bb.id]) || void 0 === Bb ? void 0 : Bb.trim().toLowerCase()) && void 0 !== hb ? hb : "",
+         md = Rd ? null !== (Jd = dd.models.find((Jd => Jd.id === dd.usedModelId))) && void 0 !== Jd ? Jd : tP(dd.models) : void 0,
+         Sd = null !== (kd = null === (pd = qd[dd.id]) || void 0 === pd ? void 0 : pd.trim().toLowerCase()) && void 0 !== kd ? kd : "",
```

#### 533. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9677` → after: `L9677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9677) · [Before (L9677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9677)

```diff
-             keyName: null !== (Ob = bb.name) && void 0 !== Ob ? Ob : "",
+             keyName: null !== (Nd = dd.name) && void 0 !== Nd ? Nd : "",
```

#### 534. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9693` → after: `L9693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9693) · [Before (L9693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9693)

```diff
-             "aria-label": `Check ${ob} for new models`,
+             "aria-label": `Check ${ed} for new models`,
```

#### 535. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9701` → after: `L9701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9701) · [Before (L9701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9701)

```diff
-             "aria-label": `Remove ${ob} key`,
+             "aria-label": `Remove ${ed} key`,
```

#### 536. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9709` → after: `L9709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9709) · [Before (L9709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9709)

```diff
-             "aria-label": `Remove ${ob} key?`,
+             "aria-label": `Remove ${ed} key?`,
```

#### 537. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9715` → after: `L9715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9715) · [Before (L9715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9715)

```diff
-               "aria-label": `Yes, remove ${ob} key`,
+               "aria-label": `Yes, remove ${ed} key`,
```

#### 538. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9722` → after: `L9722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9722) · [Before (L9722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9722)

```diff
-               "aria-label": `No, keep ${ob} key`,
+               "aria-label": `No, keep ${ed} key`,
```

#### 539. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9736-L9738` → after: `L9736-L9738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9736-L9738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9736-L9738) · [Before (L9736-L9738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9736-L9738)

```diff
-           "aria-label": `Find a model from ${ob}`,
-           placeholder: `Find a model (${bb.models.length})`,
-           value: null !== (Xb = db[bb.id]) && void 0 !== Xb ? Xb : "",
+           "aria-label": `Find a model from ${ed}`,
+           placeholder: `Find a model (${dd.models.length})`,
+           value: null !== (Ld = qd[dd.id]) && void 0 !== Ld ? Ld : "",
```

#### 540. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9754` → after: `L9754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9754) · [Before (L9754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9754)

```diff
-           "aria-label": `Show all ${ob} models`,
+           "aria-label": `Show all ${ed} models`,
```

#### 541. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9790` → after: `L9790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9790) · [Before (L9790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9790)

```diff
-         children: ub ? Ob : Gb
+         children: Jd ? Nd : Wd
```

#### 542. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9910` → after: `L9910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9910) · [Before (L9910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9910)

```diff
-           children: [1 === Lb.length ? "Forget your key" : `Forget all ${Lb.length} keys`, " in this browser?", (0, Ub.jsx)("button", {
+           children: [1 === Zd.length ? "Forget your key" : `Forget all ${Zd.length} keys`, " in this browser?", (0, Pd.jsx)("button", {
```

#### 543. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9974` → after: `L9974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9974) · [Before (L9974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9974)

```diff
-                 text: `${ub} listed no models, so your models stay as they were.`
+                 text: `${Jd} listed no models, so your models stay as they were.`
```

#### 544. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9980` → after: `L9980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9980) · [Before (L9980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9980)

```diff
-                 text: `${ub}'s models are up to date.`
+                 text: `${Jd}'s models are up to date.`
```

#### 545. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9994` → after: `L9994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L9994) · [Before (L9994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L9994)

```diff
-         gJ: bb => {
+         RY: dd => {
```

#### 546. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10049` → after: `L10049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10049) · [Before (L10049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10049)

```diff
-         null === (hb = null !== Bb && void 0 !== Bb ? Bb : Lb.current) || void 0 === hb || hb.scrollIntoView({
+         null === (kd = null !== pd && void 0 !== pd ? pd : Zd.current) || void 0 === kd || kd.scrollIntoView({
```

#### 547. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10069` → after: `L10069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10069) · [Before (L10069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10069)

```diff
-         children: Yb ? `An API key works like a password for ${Yb.shortName}'s AI (it isn't your ${Yb.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
+         children: gd ? `An API key works like a password for ${gd.shortName}'s AI (it isn't your ${gd.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
```

#### 548. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10071` → after: `L10071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10071) · [Before (L10071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10071)

```diff
-         children: ["You make it on ", Yb ? `${Yb.shortName}'s website` : (0, Ub.jsx)(kY, {}), ", and see how much you've used or delete it there."]
+         children: ["You make it on ", gd ? `${gd.shortName}'s website` : (0, Pd.jsx)(wg, {}), ", and see how much you've used or delete it there."]
```

#### 549. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10073` → after: `L10073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10073) · [Before (L10073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10073)

```diff
-         children: ["Your key stays in this browser and only goes to ", null !== (ub = null === Yb || void 0 === Yb ? void 0 : Yb.shortName) && void 0 !== ub ? ub : "that company", ", never to Bloxd."]
+         children: ["Your key stays in this browser and only goes to ", null !== (Jd = null === gd || void 0 === gd ? void 0 : gd.shortName) && void 0 !== Jd ? Jd : "that company", ", never to Bloxd."]
```

#### 550. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10132` → after: `L10132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10132) · [Before (L10132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10132)

```diff
-   } = RU(), [wb, Zb] = (0, Bb.useState)(null !== (ub = null === Yb || void 0 === Yb ? void 0 : Yb.provider) && void 0 !== ub ? ub : null), [Xb, pb] = (0, Bb.useState)(!!Yb), [ob, Ab] = (0, Bb.useState)(""), lb = null !== (hb = null === Yb || void 0 === Yb ? void 0 : Yb.key) && vo … [truncated]
+   } = kZ(), [ld, Qd] = (0, pd.useState)(null !== (Jd = null === gd || void 0 === gd ? void 0 : gd.provider) && void 0 !== Jd ? Jd : null), [Ld, Od] = (0, pd.useState)(!!gd), [ed, Rd] = (0, pd.useState)(""), Id = null !== (kd = null === gd || void 0 === gd ? void 0 : gd.key) && vo … [truncated]
```

#### 551. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10134` → after: `L10134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10134) · [Before (L10134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10134)

```diff
-     return bb === (null === Yb || void 0 === Yb ? void 0 : Yb.provider) && ("custom" !== bb || (null !== (ub = AU(Cb)) && void 0 !== ub ? ub : "") === (null !== (hb = Yb.baseUrl) && void 0 !== hb ? hb : ""))
+     return dd === (null === gd || void 0 === gd ? void 0 : gd.provider) && ("custom" !== dd || (null !== (Jd = vP(xd)) && void 0 !== Jd ? Jd : "") === (null !== (kd = gd.baseUrl) && void 0 !== kd ? kd : ""))
```

#### 552. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10137-L10138` → after: `L10137-L10138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10137-L10138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10137-L10138) · [Before (L10137-L10138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10137-L10138)

```diff
-     return "" === ub && "" !== lb && rb(bb) ? lb : ub
-   }, [Db, xb] = (0, Bb.useState)(""), [zb, gb] = (0, Bb.useState)(null !== (Gb = null === Yb || void 0 === Yb ? void 0 : Yb.name) && void 0 !== Gb ? Gb : ""), [ib, vb] = (0, Bb.useState)(!1), [tb, Jb] = (0, Bb.useState)(null), [eb, Nb] = (0, Bb.useState)(""), [sb, Mb] = (0, Bb.us … [truncated]
+     return "" === Jd && "" !== Id && Bd(dd) ? Id : Jd
+   }, [Md, Fd] = (0, pd.useState)(""), [Yd, md] = (0, pd.useState)(null !== (Wd = null === gd || void 0 === gd ? void 0 : gd.name) && void 0 !== Wd ? Wd : ""), [bd, Sd] = (0, pd.useState)(!1), [jd, Xd] = (0, pd.useState)(null), [fd, nd] = (0, pd.useState)(""), [Ud, yd] = (0, pd.us … [truncated]
```

#### 553. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10169` → after: `L10169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10169) · [Before (L10169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10169)

```diff
-           baseUrl: "custom" === wb && null !== (bb = AU(Cb)) && void 0 !== bb ? bb : void 0,
+           baseUrl: "custom" === ld && null !== (dd = vP(xd)) && void 0 !== dd ? dd : void 0,
```

#### 554. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10176` → after: `L10176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10176) · [Before (L10176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10176)

```diff
-         const hb = null !== wb && void 0 !== wb ? wb : oU(ub),
+         const kd = null !== ld && void 0 !== ld ? ld : GP(Jd),
```

#### 555. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10191-L10192` → after: `L10191-L10192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10191-L10192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10191-L10192) · [Before (L10191-L10192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10191-L10192)

```diff
-             baseUrl: null !== Ob && void 0 !== Ob ? Ob : void 0,
-             modelName: ib ? Db : void 0
+             baseUrl: null !== Nd && void 0 !== Nd ? Nd : void 0,
+             modelName: bd ? Md : void 0
```

#### 556. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10198` → after: `L10198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10198) · [Before (L10198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10198)

```diff
-           Nb(null !== (Ub = null === (Lb = null !== Sb && void 0 !== Sb ? Sb : yU(bb)) || void 0 === Lb ? void 0 : Lb.id) && void 0 !== Ub ? Ub : "")
+           nd(null !== (Pd = null === (Zd = null !== Cd && void 0 !== Cd ? Cd : tP(dd)) || void 0 === Zd ? void 0 : Zd.id) && void 0 !== Pd ? Pd : "")
```

#### 557. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10204-L10205` → after: `L10204-L10205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10204-L10205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10204-L10205) · [Before (L10204-L10205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10204-L10205)

```diff
-           const Ub = "badKey" !== Ob || Xb ? "" : ` If it isn't from ${wU[hb].shortName}, pick the company it's from.`;
-           Ib(`${CU(Ob,hb)}${Ub}`)
+           const Pd = "badKey" !== Nd || Ld ? "" : ` If it isn't from ${OP[kd].shortName}, pick the company it's from.`;
+           Td(`${sP(Nd,kd)}${Pd}`)
```

#### 558. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10215` → after: `L10215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10215) · [Before (L10215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10215)

```diff
-         value: null !== wb && void 0 !== wb ? wb : "",
+         value: null !== ld && void 0 !== ld ? ld : "",
```

#### 559. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10243` → after: `L10243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10243) · [Before (L10243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10243)

```diff
-       }), (!Yb || Cb !== (null !== (Lb = Yb.baseUrl) && void 0 !== Lb ? Lb : "")) && (0, Ub.jsx)(cY, {})]
+       }), (!gd || xd !== (null !== (Zd = gd.baseUrl) && void 0 !== Zd ? Zd : "")) && (0, Pd.jsx)(dC, {})]
```

#### 560. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10315` → after: `L10315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10315) · [Before (L10315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10315)

```diff
-           keyId: null !== wb && void 0 !== wb ? wb : "",
+           keyId: null !== ld && void 0 !== ld ? ld : "",
```

#### 561. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10339` → after: `L10339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10339) · [Before (L10339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10339)

```diff
-         placeholder: wb && "custom" !== wb ? `Like My ${wU[wb].shortName}` : "Like Home server",
+         placeholder: ld && "custom" !== ld ? `Like My ${OP[ld].shortName}` : "Like Home server",
```

#### 562. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10365` → after: `L10365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10365) · [Before (L10365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10365)

```diff
-         children: sb ? Eb ? "Testing the connection\u2026" : "Testing your key\u2026" : kb ? `Save and use ${kb.name}` : Eb ? "Test connection" : "Test key"
+         children: Ud ? hd ? "Testing the connection\u2026" : "Testing your key\u2026" : zd ? `Save and use ${zd.name}` : hd ? "Test connection" : "Test key"
```

#### 563. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10370-L10372` → after: `L10370-L10372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10370-L10372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10370-L10372) · [Before (L10370-L10372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10370-L10372)

```diff
- var bS = hb(1095),
-   uS = hb(36533),
-   hS = hb(36527);
+ var pC = kd(1211),
+   NC = kd(37068),
+   WC = kd(37061);
```

#### 564. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10383` → after: `L10383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10383) · [Before (L10383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10383)

```diff
-   } = (0, bS.K)();
+   } = (0, pC.B)();
```

#### 565. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10387` → after: `L10387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10387) · [Before (L10387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10387)

```diff
-     text: Gb(`codeEditorAiTutorial:${ub}`),
+     text: Wd(`codeEditorAiTutorial:${Jd}`),
```

#### 566. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10435` → after: `L10435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10435) · [Before (L10435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10435)

```diff
-   return bb.model.name.toLowerCase().startsWith(ub.toLowerCase()) ? bb.model.name : `${ub} \xb7 ${bb.model.name}`
+   return dd.model.name.toLowerCase().startsWith(Jd.toLowerCase()) ? dd.model.name : `${Jd} \xb7 ${dd.model.name}`
```

#### 567. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10485` → after: `L10485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10485) · [Before (L10485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10485)

```diff
-     Kb = lb ? "Bot.xd (free) \xb7 once" : Sb ? US(Sb) : Hb ? BL : "Bot.xd (free)";
+     Gd = Id ? "Bot.xd (free) \xb7 once" : Cd ? CC(Cd) : od ? PZ : "Bot.xd (free)";
```

#### 568. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10497` → after: `L10497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10497) · [Before (L10497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10497)

```diff
-       "aria-label": `AI model: ${Kb}`,
+       "aria-label": `AI model: ${Gd}`,
```

#### 569. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10515` → after: `L10515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10515) · [Before (L10515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10515)

```diff
-         title: `Allow AI to make edits to my code is ${hb?"on":"off"}, in AI settings`,
+         title: `Allow AI to make edits to my code is ${kd?"on":"off"}, in AI settings`,
```

#### 570. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10583` → after: `L10583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10583) · [Before (L10583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10583)

```diff
-       hb(null !== (ub = bb.error) && void 0 !== ub ? ub : new Error("IndexedDB transaction failed"))
+       kd(null !== (Jd = dd.error) && void 0 !== Jd ? Jd : new Error("IndexedDB transaction failed"))
```

#### 571. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10586` → after: `L10586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10586) · [Before (L10586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10586)

```diff
-       hb(null !== (ub = bb.error) && void 0 !== ub ? ub : new Error("IndexedDB transaction aborted"))
+       kd(null !== (Jd = dd.error) && void 0 !== Jd ? Jd : new Error("IndexedDB transaction aborted"))
```

#### 572. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10590` → after: `L10590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10590) · [Before (L10590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10590)

```diff
- var aS = hb(36567);
+ var QC = kd(37087);
```

#### 573. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10621` → after: `L10621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10621) · [Before (L10621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10621)

```diff
-           if (ub) return bb.includes(`"${ub}"`) ? `"${ub}"` : bb.includes(ub) ? ub : void 0
+           if (Jd) return dd.includes(`"${Jd}"`) ? `"${Jd}"` : dd.includes(Jd) ? Jd : void 0
```

#### 574. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10625` → after: `L10625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10625) · [Before (L10625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10625)

```diff
-         className: Gb()("WorldCodeAiDiffLine", `WorldCodeAiDiff-${bb.kind}`, Bb && "WorldCodeAiDiff-marked"),
+         className: Wd()("WorldCodeAiDiffLine", `WorldCodeAiDiff-${dd.kind}`, pd && "WorldCodeAiDiff-marked"),
```

#### 575. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10688` → after: `L10688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10688) · [Before (L10688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10688)

```diff
-   return Ob(bb) === Ob(ub) ? Bb : Ob(bb) === Ob(ub - 864e5) ? `yesterday ${Bb}` : function(bb, ub) {
+   return Nd(dd) === Nd(Jd) ? pd : Nd(dd) === Nd(Jd - 864e5) ? `yesterday ${pd}` : function(dd, Jd) {
```

#### 576. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10691` → after: `L10691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10691) · [Before (L10691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10691)

```diff
-     if (hb < 60) return `${hb} min ago`;
+     if (kd < 60) return `${kd} min ago`;
```

#### 577. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10693` → after: `L10693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10693) · [Before (L10693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10693)

```diff
-     if (Bb < 24) return `${Bb} h ago`;
+     if (pd < 24) return `${pd} h ago`;
```

#### 578. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10695` → after: `L10695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10695) · [Before (L10695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10695)

```diff
-     return 1 === Ob ? "1 day ago" : `${Ob} days ago`
+     return 1 === Nd ? "1 day ago" : `${Nd} days ago`
```

#### 579. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10702-L10703` → after: `L10702-L10703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10702-L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10702-L10703) · [Before (L10702-L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10702-L10703)

```diff
-     const Gb = null !== (Bb = bb.files[hb]) && void 0 !== Bb ? Bb : "";
-     return (null !== (Ob = ub[hb]) && void 0 !== Ob ? Ob : "") === Gb ? [] : [{
+     const Wd = null !== (pd = dd.files[kd]) && void 0 !== pd ? pd : "";
+     return (null !== (Nd = Jd[kd]) && void 0 !== Nd ? Nd : "") === Wd ? [] : [{
```

#### 580. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10715` → after: `L10715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10715) · [Before (L10715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10715)

```diff
-   return `${(Bb>ub/2?hb.slice(0,Bb):hb).replace(/[\s,;:.]+$/,"")}\u2026`
+   return `${(pd>Jd/2?kd.slice(0,pd):kd).replace(/[\s,;:.]+$/,"")}\u2026`
```

#### 581. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10726` → after: `L10726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10726) · [Before (L10726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10726)

```diff
-   const [Sb, ab] = (0, Bb.useState)(!1), [Hb, wb] = (0, Bb.useState)(!1), Zb = ub.did ? `Before: ${ub.did}` : ub.label, Xb = AS(Zb), pb = ub.did && ub.label.startsWith('Before "') ? ub.label.slice(7) : null, ob = null === pb ? null : AS(pb, 50), Ab = null !== ob && null !== pb && … [truncated]
+   const [Cd, Kd] = (0, pd.useState)(!1), [od, ld] = (0, pd.useState)(!1), Qd = Jd.did ? `Before: ${Jd.did}` : Jd.label, Ld = vC(Qd), Od = Jd.did && Jd.label.startsWith('Before "') ? Jd.label.slice(7) : null, ed = null === Od ? null : vC(Od, 50), Rd = null !== ed && null !== Od && … [truncated]
```

#### 582. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10751-L10752` → after: `L10751-L10752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10751-L10752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10751-L10752) · [Before (L10751-L10752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10751-L10752)

```diff
-     const Gb = null !== (Bb = ub.files[bb]) && void 0 !== Bb ? Bb : "",
-       Ub = null !== (Ob = hb[bb]) && void 0 !== Ob ? Ob : "";
+     const Wd = null !== (pd = Jd.files[dd]) && void 0 !== pd ? pd : "",
+       Pd = null !== (Nd = kd[dd]) && void 0 !== Nd ? Nd : "";
```

#### 583. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10766` → after: `L10766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10766) · [Before (L10766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10766)

```diff
-         children: [Hb || !Xb ? Zb : Xb, (Xb || Ab) && (0, Ub.jsx)("button", {
+         children: [od || !Ld ? Qd : Ld, (Ld || Rd) && (0, Pd.jsx)("button", {
```

#### 584. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10778` → after: `L10778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10778) · [Before (L10778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10778)

```diff
-           children: ["You asked: ", Hb || !Ab ? pb : Ab]
+           children: ["You asked: ", od || !Rd ? Od : Rd]
```

#### 585. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10859` → after: `L10859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10859) · [Before (L10859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10859)

```diff
-     UW: Ob,
+     QG: Nd,
```

#### 586. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10883` → after: `L10883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L10883) · [Before (L10883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L10883)

```diff
-           "aria-label": `Delete note: ${bb}`,
+           "aria-label": `Delete note: ${dd}`,
```

#### 587. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11022` → after: `L11022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11022) · [Before (L11022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11022)

```diff
-       }, `${ub}:${bb}`)))
+       }, `${Jd}:${dd}`)))
```

#### 588. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11025` → after: `L11025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11025) · [Before (L11025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11025)

```diff
-       children: ["Apply ", hb - Bb > 1 ? `steps ${Bb+1} to ${hb}` : `step ${hb}`, " to your code and try it, then build step ", hb + 1, "."]
+       children: ["Apply ", kd - pd > 1 ? `steps ${pd+1} to ${kd}` : `step ${kd}`, " to your code and try it, then build step ", kd + 1, "."]
```

#### 589. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11027` → after: `L11027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11027) · [Before (L11027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11027)

```diff
-       ...CY.h,
+       ...sg.e,
```

#### 590. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11032` → after: `L11032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11032) · [Before (L11032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11032)

```diff
-       children: Bb < hb ? `Build step ${hb+1} anyway` : `Build step ${hb+1}`
+       children: pd < kd ? `Build step ${kd+1} anyway` : `Build step ${kd+1}`
```

#### 591. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11044` → after: `L11044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11044) · [Before (L11044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11044)

```diff
-   return `${bb}\n\nYou asked me: "${ub}" ${null===hb?"I don't mind: choose what works best.":`My answer: ${hb.replace(/\.$/,"")}.`} Build it now, without asking again.`
+   return `${dd}\n\nYou asked me: "${Jd}" ${null===kd?"I don't mind: choose what works best.":`My answer: ${kd.replace(/\.$/,"")}.`} Build it now, without asking again.`
```

#### 592. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11063-L11064` → after: `L11063-L11064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11063-L11064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11063-L11064) · [Before (L11063-L11064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11063-L11064)

```diff
-           ...CY.h,
-           key: `${ub}:${bb}`,
+           ...sg.e,
+           key: `${Jd}:${dd}`,
```

#### 593. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11097` → after: `L11097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11097) · [Before (L11097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11097)

```diff
-         ...CY.h,
+         ...sg.e,
```

#### 594. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11270` → after: `L11270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11270) · [Before (L11270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11270)

```diff
-       Cb = null !== Kb && void 0 !== Kb ? Kb : Ob;
+       xd = null !== Gd && void 0 !== Gd ? Gd : Nd;
```

#### 595. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11274-L11276` → after: `L11274-L11276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11274-L11276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11274-L11276) · [Before (L11274-L11276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11274-L11276)

```diff
-       raw: null !== (Yb = null === Wb || void 0 === Wb ? void 0 : Wb.text) && void 0 !== Yb ? Yb : "",
-       start: null !== (Sb = null === Wb || void 0 === Wb ? void 0 : Wb.start) && void 0 !== Sb ? Sb : 0,
-       end: null !== (ab = null === Wb || void 0 === Wb ? void 0 : Wb.end) && void 0 !== ab ? ab : 0,
+       raw: null !== (gd = null === vd || void 0 === vd ? void 0 : vd.text) && void 0 !== gd ? gd : "",
+       start: null !== (Cd = null === vd || void 0 === vd ? void 0 : vd.start) && void 0 !== Cd ? Cd : 0,
+       end: null !== (Kd = null === vd || void 0 === vd ? void 0 : vd.end) && void 0 !== Kd ? Kd : 0,
```

#### 596. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11319` → after: `L11319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11319) · [Before (L11319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11319)

```diff
-     Gb = hb, Ob = `${Ub=hb.includes(bb)&&!hb.includes(Bb)?Bb:bb}${Gb.slice(0,200).replace(/\\/g,"\\\\").replace('"'===Ub?/"/g:/'/g,`\\${Ub}`).replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/[\u0000- … [truncated]
+     Wd = kd, Nd = `${Pd=kd.includes(dd)&&!kd.includes(pd)?pd:dd}${Wd.slice(0,200).replace(/\\/g,"\\\\").replace('"'===Pd?/"/g:/'/g,`\\${Pd}`).replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/[\u0000- … [truncated]
```

#### 597. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11328` → after: `L11328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11328) · [Before (L11328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11328)

```diff
-     const hb = Math.min(3, (null !== (ub = String(bb).split(".")[1]) && void 0 !== ub ? ub : "").length);
+     const kd = Math.min(3, (null !== (Jd = String(dd).split(".")[1]) && void 0 !== Jd ? Jd : "").length);
```

#### 598. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11343` → after: `L11343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11343) · [Before (L11343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11343)

```diff
-   return "boolean" === typeof bb ? bb ? "on" : "off" : "number" === typeof bb ? String(bb) : bb.length > 20 ? `\u201c${bb.slice(0,19)}\u2026\u201d` : `\u201c${bb}\u201d`
+   return "boolean" === typeof dd ? dd ? "on" : "off" : "number" === typeof dd ? String(dd) : dd.length > 20 ? `\u201c${dd.slice(0,19)}\u2026\u201d` : `\u201c${dd}\u201d`
```

#### 599. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11348` → after: `L11348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11348) · [Before (L11348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11348)

```diff
-   if (0 === bb.length) return `Before ${ub} settings`;
+   if (0 === dd.length) return `Before ${Jd} settings`;
```

#### 600. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11350-L11352` → after: `L11350-L11352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11350-L11352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11350-L11352) · [Before (L11350-L11352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11350-L11352)

```diff
-     Bb = bb.slice(0, hb).map((bb => `${bb.name} ${bb.from} \u2192 ${bb.to}`)),
-     Ob = bb.length > hb ? ` and ${bb.length-hb} more` : "";
-   return `Before ${ub} settings: ${Bb.join(", ")}${Ob}`
+     pd = dd.slice(0, kd).map((dd => `${dd.name} ${dd.from} \u2192 ${dd.to}`)),
+     Nd = dd.length > kd ? ` and ${dd.length-kd} more` : "";
+   return `Before ${Jd} settings: ${pd.join(", ")}${Nd}`
```

#### 601. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11360` → after: `L11360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11360) · [Before (L11360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11360)

```diff
-     ub.add(null !== (hb = null !== (Bb = Ob[1]) && void 0 !== Bb ? Bb : Ob[2]) && void 0 !== hb ? hb : Ob[3])
+     Jd.add(null !== (kd = null !== (pd = Nd[1]) && void 0 !== pd ? pd : Nd[2]) && void 0 !== kd ? kd : Nd[3])
```

#### 602. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11403` → after: `L11403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11403) · [Before (L11403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11403)

```diff
-     const Gb = null !== (Ob = MS.get(ub)) && void 0 !== Ob ? Ob : [];
+     const Wd = null !== (Nd = TC.get(Jd)) && void 0 !== Nd ? Nd : [];
```

#### 603. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11455` → after: `L11455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11455) · [Before (L11455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11455)

```diff
-   return null !== (ub = ES.get(bb)) && void 0 !== ub ? ub : "CONFIG" === bb ? "Settings" : void 0
+   return null !== (Jd = uC.get(dd)) && void 0 !== Jd ? Jd : "CONFIG" === dd ? "Settings" : void 0
```

#### 604. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11481` → after: `L11481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11481) · [Before (L11481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11481)

```diff
-         name: void 0 === Gb ? null : null !== (Ob = QS(Gb)) && void 0 !== Ob ? Ob : null,
+         name: void 0 === Wd ? null : null !== (Nd = JK(Wd)) && void 0 !== Nd ? Nd : null,
```

#### 605. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11533` → after: `L11533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11533) · [Before (L11533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11533)

```diff
-   return Lb.every((bb => fS(bb.removed) && fS(bb.added))) ? Lb : [bb]
+   return Zd.every((dd => HC(dd.removed) && HC(dd.added))) ? Zd : [dd]
```

#### 606. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11585` → after: `L11585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11585) · [Before (L11585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11585)

```diff
-   return Bb ? null !== (ub = null !== (hb = Bb[1]) && void 0 !== hb ? hb : Bb[2]) && void 0 !== ub ? ub : Bb[3] : void 0
+   return pd ? null !== (Jd = null !== (kd = pd[1]) && void 0 !== kd ? kd : pd[2]) && void 0 !== Jd ? Jd : pd[3] : void 0
```

#### 607. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11613` → after: `L11613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11613) · [Before (L11613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11613)

```diff
-   return bb.length <= 1 ? null !== (ub = bb[0]) && void 0 !== ub ? ub : "" : `${bb.slice(0,-1).join(", ")} and ${bb[bb.length-1]}`
+   return dd.length <= 1 ? null !== (Jd = dd[0]) && void 0 !== Jd ? Jd : "" : `${dd.slice(0,-1).join(", ")} and ${dd[dd.length-1]}`
```

#### 608. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11634` → after: `L11634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11634) · [Before (L11634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11634)

```diff
-   const Bb = (null !== (hb = bb.parts) && void 0 !== hb ? hb : []).map((bb => {
+   const pd = (null !== (kd = dd.parts) && void 0 !== kd ? kd : []).map((dd => {
```

#### 609. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11682` → after: `L11682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11682) · [Before (L11682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11682)

```diff
-               return hb ? [null !== (ub = hb[1]) && void 0 !== ub ? ub : hb[2]] : []
+               return kd ? [null !== (Jd = kd[1]) && void 0 !== Jd ? Jd : kd[2]] : []
```

#### 610. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11686` → after: `L11686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11686) · [Before (L11686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11686)

```diff
-               return Hb.has(bb) ? `"${ub}"` : ub
+               return od.has(dd) ? `"${Jd}"` : Jd
```

#### 611. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11694` → after: `L11694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11694) · [Before (L11694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11694)

```diff
-                   return null !== (ub = Yb.get(bb)) && void 0 !== ub ? ub : bb
+                   return null !== (Jd = gd.get(dd)) && void 0 !== Jd ? Jd : dd
```

#### 612. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11697` → after: `L11697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11697) · [Before (L11697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11697)

```diff
-               ub = [Gb.length > 0 ? `${bb(Gb)} \u2014 changed` : "", Ub.length > 0 ? `${bb(Ub)} \u2014 added` : "", Lb.length > 0 ? `${bb(Lb)} \u2014 taken out` : ""].filter(Boolean),
+               Jd = [Wd.length > 0 ? `${dd(Wd)} \u2014 changed` : "", Pd.length > 0 ? `${dd(Pd)} \u2014 added` : "", Zd.length > 0 ? `${dd(Zd)} \u2014 taken out` : ""].filter(Boolean),
```

#### 613. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11708` → after: `L11708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11708) · [Before (L11708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11708)

```diff
-           const Xb = [Gb.length > 0 ? `changes ${ha(Gb.map(wb))}` : "", Ub.length > 0 ? `adds ${ha(Ub.map(wb))}` : "", Lb.length > 0 ? `takes out ${ha(Lb.map(wb))}` : ""].filter(Boolean);
+           const Ld = [Wd.length > 0 ? `changes ${WK(Wd.map(ld))}` : "", Pd.length > 0 ? `adds ${WK(Pd.map(ld))}` : "", Zd.length > 0 ? `takes out ${WK(Zd.map(ld))}` : ""].filter(Boolean);
```

#### 614. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11724` → after: `L11724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11724) · [Before (L11724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11724)

```diff
-                 named: `${hb} \u2014 changed`,
+                 named: `${kd} \u2014 changed`,
```

#### 615. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11730` → after: `L11730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11730) · [Before (L11730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11730)

```diff
-                 named: `Changes ${/\bfunction\b|=>/.test(bb)?`"${Ba(ub)}"`:Ba(ub)}`,
+                 named: `Changes ${/\bfunction\b|=>/.test(dd)?`"${PK(Jd)}"`:PK(Jd)}`,
```

#### 616. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11739` → after: `L11739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11739) · [Before (L11739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11739)

```diff
-             named: 0 === bb.added.length ? `Takes out lines from line ${hb}` : `Changes line ${hb}`,
+             named: 0 === dd.added.length ? `Takes out lines from line ${kd}` : `Changes line ${kd}`,
```

#### 617. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11764` → after: `L11764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11764) · [Before (L11764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11764)

```diff
-           return Bb[ub] && null !== (hb = bb.uses) && void 0 !== hb ? hb : []
+           return pd[Jd] && null !== (kd = dd.uses) && void 0 !== kd ? kd : []
```

#### 618. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11768` → after: `L11768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11768) · [Before (L11768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11768)

```diff
-           return Bb[ub] || (null !== (hb = bb.uses) && void 0 !== hb ? hb : []).some((bb => Ob.has(bb)))
+           return pd[Jd] || (null !== (kd = dd.uses) && void 0 !== kd ? kd : []).some((dd => Nd.has(dd)))
```

#### 619. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11775` → after: `L11775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11775) · [Before (L11775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11775)

```diff
-           const Bb = (null !== (Lb = bb.takesOut) && void 0 !== Lb ? Lb : []).filter((bb => ("CONFIG" === bb || MS.has(bb)) && !Ub.has(bb)));
+           const pd = (null !== (Zd = dd.takesOut) && void 0 !== Zd ? Zd : []).filter((dd => ("CONFIG" === dd || TC.has(dd)) && !Pd.has(dd)));
```

#### 620. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11779` → after: `L11779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11779) · [Before (L11779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11779)

```diff
-           }, ub, hb) || void 0 !== bb.why && PS(hb, IS(bb.why)) || (null !== (Yb = bb.removedUses) && void 0 !== Yb ? Yb : []).some((bb => Ob.has(bb))) ? void 0 : "takesOut"
+           }, Jd, kd) || void 0 !== dd.why && hC(kd, cC(dd.why)) || (null !== (gd = dd.removedUses) && void 0 !== gd ? gd : []).some((dd => Nd.has(dd))) ? void 0 : "takesOut"
```

#### 621. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11798` → after: `L11798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11798) · [Before (L11798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11798)

```diff
-         ab = !Ob && Sb ? Sb : hb,
+         Kd = !Nd && Cd ? Cd : kd,
```

#### 622. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11815` → after: `L11815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11815) · [Before (L11815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11815)

```diff
-       return `${null!==(ub=bb.also)&&void 0!==ub?ub:""}|${bb.label}|${null!==(hb=bb.detail)&&void 0!==hb?hb:""}`
+       return `${null!==(Jd=dd.also)&&void 0!==Jd?Jd:""}|${dd.label}|${null!==(kd=dd.detail)&&void 0!==kd?kd:""}`
```

#### 623. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11824` → after: `L11824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11824) · [Before (L11824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11824)

```diff
-       label: `${hb.label} (line ${ub})`
+       label: `${kd.label} (line ${Jd})`
```

#### 624. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11846` → after: `L11846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11846) · [Before (L11846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11846)

```diff
-   return !/^['\u2018]/.test(bb[0]) || !(0, Zu.b)(bb, "\\w\u2019'")
+   return !/^['\u2018]/.test(dd[0]) || !(0, LJ.e)(dd, "\\w\u2019'")
```

#### 625. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11859` → after: `L11859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11859) · [Before (L11859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11859)

```diff
-   for (const Gb of bb.matchAll(new RegExp(`(^|[.!?]\\s+|\\n\\s*)I(?:'ve|\u2019ve| have)?( also)? (${Sa})\\b`, "g"))) {
+   for (const Wd of dd.matchAll(new RegExp(`(^|[.!?]\\s+|\\n\\s*)I(?:'ve|\u2019ve| have)?( also)? (${lK})\\b`, "g"))) {
```

#### 626. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11869` → after: `L11869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11869) · [Before (L11869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11869)

```diff
-         words: `${Gb[2]?"It also":"This"} ${Ya[Gb[3]]}`
+         words: `${Wd[2]?"It also":"This"} ${oK[Wd[3]]}`
```

#### 627. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11871` → after: `L11871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11871) · [Before (L11871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11871)

```diff
-       for (const bb of Yb.matchAll(new RegExp(`\\b(and|then|also) (${Sa})\\b(?!\\s+(?:of|by|from|with|when|if|in|on|at|to|for|so|as|after|before|into)\\b)`, "g"))) hb(Ob + bb.index) || Bb.push({
+       for (const dd of gd.matchAll(new RegExp(`\\b(and|then|also) (${lK})\\b(?!\\s+(?:of|by|from|with|when|if|in|on|at|to|for|so|as|after|before|into)\\b)`, "g"))) kd(Nd + dd.index) || pd.push({
```

#### 628. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11874` → after: `L11874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11874) · [Before (L11874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11874)

```diff
-         words: `${bb[1]} ${Ya[bb[2]]}`
+         words: `${dd[1]} ${oK[dd[2]]}`
```

#### 629. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11887` → after: `L11887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11887) · [Before (L11887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11887)

```diff
-       words: `will ${Ob=Gb[1],"has"===Ob?"have":Ob.endsWith("ies")?`${Ob.slice(0,-3)}y`:/(?:ch|sh|x|zz|o|ss)es$/.test(Ob)?Ob.slice(0,-2):Ob.slice(0,-1)}`
+       words: `will ${Nd=Wd[1],"has"===Nd?"have":Nd.endsWith("ies")?`${Nd.slice(0,-3)}y`:/(?:ch|sh|x|zz|o|ss)es$/.test(Nd)?Nd.slice(0,-2):Nd.slice(0,-1)}`
```

#### 630. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11921` → after: `L11921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11921) · [Before (L11921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11921)

```diff
-   }, Ab = `WorldCodeAiSetting-${ub}-${hb.key}`;
+   }, Rd = `WorldCodeAiSetting-${Jd}-${kd.key}`;
```

#### 631. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11949` → after: `L11949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11949) · [Before (L11949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11949)

```diff
-         "aria-label": `Less ${Hb}`,
+         "aria-label": `Less ${od}`,
```

#### 632. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11961` → after: `L11961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11961) · [Before (L11961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11961)

```diff
-         value: null !== Lb && void 0 !== Lb ? Lb : String(hb.value),
+         value: null !== Zd && void 0 !== Zd ? Zd : String(kd.value),
```

#### 633. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11972` → after: `L11972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L11972) · [Before (L11972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L11972)

```diff
-         "aria-label": `More ${Hb}`,
+         "aria-label": `More ${od}`,
```

#### 634. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12062` → after: `L12062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12062) · [Before (L12062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12062)

```diff
-   return ub >= 60 ? "It starts in about a minute." : `It starts in about ${ub} seconds.`
+   return Jd >= 60 ? "It starts in about a minute." : `It starts in about ${Jd} seconds.`
```

#### 635. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12064` → after: `L12064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12064) · [Before (L12064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12064)

```diff
- var Ca = hb(1713);
+ var sK = kd(1827);
```

#### 636. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12070` → after: `L12070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12070) · [Before (L12070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12070)

```diff
-     hb.set(Ob, (null !== (Bb = hb.get(Ob)) && void 0 !== Bb ? Bb : 0) + 1)
+     kd.set(Nd, (null !== (pd = kd.get(Nd)) && void 0 !== pd ? pd : 0) + 1)
```

#### 637. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12074` → after: `L12074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12074) · [Before (L12074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12074)

```diff
-     const Bb = null !== (ub = hb.get(bb)) && void 0 !== ub ? ub : 0;
+     const pd = null !== (Jd = kd.get(dd)) && void 0 !== Jd ? Jd : 0;
```

#### 638. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12081` → after: `L12081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12081) · [Before (L12081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12081)

```diff
-     if (null !== ub && void 0 !== ub && ub.aborted) return void Bb((0, Ca.f)(ub));
+     if (null !== Jd && void 0 !== Jd && Jd.aborted) return void pd((0, sK.c)(Jd));
```

#### 639. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12084` → after: `L12084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12084) · [Before (L12084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12084)

```diff
-       clearTimeout(Ob), Bb((0, Ca.f)(ub))
+       clearTimeout(Nd), pd((0, sK.c)(Jd))
```

#### 640. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12101` → after: `L12101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12101) · [Before (L12101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12101)

```diff
-     const Sb = null !== (Ub = Lb.find((bb => uG.freeAt(bb) <= Date.now()))) && void 0 !== Ub ? Ub : Lb[0],
+     const Cd = null !== (Pd = Zd.find((dd => NW.freeAt(dd) <= Date.now()))) && void 0 !== Pd ? Pd : Zd[0],
```

#### 641. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12118` → after: `L12118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12118) · [Before (L12118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12118)

```diff
-       return [...null !== (ub = bb.why) && void 0 !== ub ? ub : [], ...(null !== (hb = bb.parts) && void 0 !== hb ? hb : []).map((bb => bb.why)), ...da(bb.before, bb.after)]
+       return [...null !== (Jd = dd.why) && void 0 !== Jd ? Jd : [], ...(null !== (kd = dd.parts) && void 0 !== kd ? kd : []).map((dd => dd.why)), ...iK(dd.before, dd.after)]
```

#### 642. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12129` → after: `L12129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12129) · [Before (L12129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12129)

```diff
-           Bb = bb > 6e3 ? bb : JO;
+           pd = dd > 6e3 ? dd : nN;
```

#### 643. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12143-L12145` → after: `L12143-L12145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12143-L12145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12143-L12145) · [Before (L12143-L12145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12143-L12145)

```diff
-   const Bb = ub && null !== (hb = bb[ub]) && void 0 !== hb ? hb : [],
-     Ob = Bb.length >= 2 ? Bb : Object.values(bb).flat();
-   return Ob.length < 2 ? "Usually under a minute." : `Usually ${function(bb){const ub=Math.max(5,5*Math.round(bb/5e3));if(ub<60)return`about ${ub} seconds`;const hb=10*Math.round(bb/1e4),Bb=Math.floor(hb/60),Ob=hb%60,Gb=`${Bb} ${1===Bb?"minute":"minutes"}`;return 0===Ob?`about ${ … [truncated]
+   const pd = Jd && null !== (kd = dd[Jd]) && void 0 !== kd ? kd : [],
+     Nd = pd.length >= 2 ? pd : Object.values(dd).flat();
+   return Nd.length < 2 ? "Usually under a minute." : `Usually ${function(dd){const Jd=Math.max(5,5*Math.round(dd/5e3));if(Jd<60)return`about ${Jd} seconds`;const kd=10*Math.round(dd/1e4),pd=Math.floor(kd/60),Nd=kd%60,Wd=`${pd} ${1===pd?"minute":"minutes"}`;return 0===Nd?`about ${ … [truncated]
```

#### 644. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12147` → after: `L12147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12147) · [Before (L12147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12147)

```diff
- var za = hb(36573);
+ var bK = kd(37091);
```

#### 645. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12164` → after: `L12164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12164) · [Before (L12164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12164)

```diff
-   return `Moving to ${bb} code\u2026`
+   return `Moving to ${dd} code\u2026`
```

#### 646. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12168` → after: `L12168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12168) · [Before (L12168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12168)

```diff
-   return bb.fromLine === bb.toLine ? `line ${bb.fromLine}` : `lines ${bb.fromLine}-${bb.toLine}`
+   return dd.fromLine === dd.toLine ? `line ${dd.fromLine}` : `lines ${dd.fromLine}-${dd.toLine}`
```

#### 647. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12172-L12173` → after: `L12172-L12173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12172-L12173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12172-L12173) · [Before (L12172-L12173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12172-L12173)

```diff
-   const ub = bb.text.length > 4e3 ? `${bb.text.slice(0,4e3)}\n...` : bb.text;
-   return `The part I picked (${bb.path}, ${ta(bb)}):\n\`\`\`\n${ub}\n\`\`\``
+   const Jd = dd.text.length > 4e3 ? `${dd.text.slice(0,4e3)}\n...` : dd.text;
+   return `The part I picked (${dd.path}, ${fK(dd)}):\n\`\`\`\n${Jd}\n\`\`\``
```

#### 648. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12180` → after: `L12180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12180) · [Before (L12180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12180)

```diff
-       return `Explain what this part of my code does, in 2 or 3 short sentences. Don't change any code.\n\n${Ja(bb)}`;
+       return `Explain what this part of my code does, in 2 or 3 short sentences. Don't change any code.\n\n${nK(dd)}`;
```

#### 649. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12182` → after: `L12182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12182) · [Before (L12182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12182)

```diff
-       return `Fix what is wrong in this part of my code. Change only what it needs.\n\n${Ja(bb)}`;
+       return `Fix what is wrong in this part of my code. Change only what it needs.\n\n${nK(dd)}`;
```

#### 650. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12184` → after: `L12184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12184) · [Before (L12184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12184)

```diff
-       return `${ub.trim()}\n\nChange only this part of my code, unless more is needed for it to work.\n\n${Ja(bb)}`
+       return `${Jd.trim()}\n\nChange only this part of my code, unless more is needed for it to work.\n\n${nK(dd)}`
```

#### 651. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12193` → after: `L12193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12193) · [Before (L12193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12193)

```diff
-       return `Explain ${hb}`;
+       return `Explain ${kd}`;
```

#### 652. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12195` → after: `L12195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12195) · [Before (L12195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12195)

```diff
-       return `Fix ${hb}`;
+       return `Fix ${kd}`;
```

#### 653. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12197` → after: `L12197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12197) · [Before (L12197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12197)

```diff
-       return `${ub.trim()} (${hb})`
+       return `${Jd.trim()} (${kd})`
```

#### 654. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12200-L12204` → after: `L12200-L12204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12200-L12204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12200-L12204) · [Before (L12200-L12204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12200-L12204)

```diff
- var sa = hb(40842),
-   Ma = hb(4528),
-   ma = hb(40830),
-   Ia = hb(40837),
-   Pa = hb(40835);
+ var DK = kd(41359),
+   TK = kd(4636),
+   EK = kd(41340),
+   cK = kd(41351),
+   hK = kd(41347);
```

#### 655. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12222` → after: `L12222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12222) · [Before (L12222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12222)

```diff
-         ["/globals.d.ts", ma.e],
+         ["/globals.d.ts", EK.b],
```

#### 656. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12227` → after: `L12227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12227) · [Before (L12227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12227)

```diff
-         ["/globals.d.ts", Pa.d],
+         ["/globals.d.ts", hK.b],
```

#### 657. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12252` → after: `L12252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12252) · [Before (L12252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12252)

```diff
-   return Ob(bb), Bb && yh(Bb, bb) ? Bb : void 0
+   return Nd(dd), pd && uk(pd, dd) ? pd : void 0
```

#### 658. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12271` → after: `L12271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12271) · [Before (L12271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12271)

```diff
-   if (Bb) return `"${Bb}"`;
+   if (pd) return `"${pd}"`;
```

#### 659. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12276` → after: `L12276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12276) · [Before (L12276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12276)

```diff
-   if (Ob.length > 0) return Ob.slice(0, 2).map((bb => `"${bb}"`)).join(" or ");
+   if (Nd.length > 0) return Nd.slice(0, 2).map((dd => `"${dd}"`)).join(" or ");
```

#### 660. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12286` → after: `L12286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12286) · [Before (L12286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12286)

```diff
-   return Ub ? `"${Ub.option}"` : void 0
+   return Pd ? `"${Pd.option}"` : void 0
```

#### 661. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12312-L12313` → after: `L12312-L12313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12312-L12313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12312-L12313) · [Before (L12312-L12313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12312-L12313)

```diff
-       hb = null !== (ab = null === (Hb = bb.split("\n")[ub]) || void 0 === Hb ? void 0 : Hb.trim()) && void 0 !== ab ? ab : "",
-       Bb = hb.length > 40 ? `${hb.slice(0,37)}...` : hb,
+       kd = null !== (Kd = null === (od = dd.split("\n")[Jd]) || void 0 === od ? void 0 : od.trim()) && void 0 !== Kd ? Kd : "",
+       pd = kd.length > 40 ? `${kd.slice(0,37)}...` : kd,
```

#### 662. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12315` → after: `L12315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12315) · [Before (L12315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12315)

```diff
-     Yb.add(`Line ${ub+1} stops all of this code from running: "${Bb}" (${Ob}).`)
+     gd.add(`Line ${Jd+1} stops all of this code from running: "${pd}" (${Nd}).`)
```

#### 663. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12323-L12325` → after: `L12323-L12325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12323-L12325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12323-L12325) · [Before (L12323-L12325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12323-L12325)

```diff
-         hb = null !== (db = null === (jb = bb.split("\n")[ub]) || void 0 === jb ? void 0 : jb.trim()) && void 0 !== db ? db : "",
-         Bb = hb.length > 40 ? `${hb.slice(0,37)}...` : hb;
-       Yb.add(`Line ${ub+1} never runs: "${Bb}" comes after a return, which ends the function first.`);
+         kd = null !== (qd = null === (sd = dd.split("\n")[Jd]) || void 0 === sd ? void 0 : sd.trim()) && void 0 !== qd ? qd : "",
+         pd = kd.length > 40 ? `${kd.slice(0,37)}...` : kd;
+       gd.add(`Line ${Jd+1} never runs: "${pd}" comes after a return, which ends the function first.`);
```

#### 664. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12330` → after: `L12330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12330) · [Before (L12330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12330)

```diff
-       const ub = Mb.start + (null !== (Db = Mb.length) && void 0 !== Db ? Db : 0),
+       const Jd = yd.start + (null !== (Md = yd.length) && void 0 !== Md ? Md : 0),
```

#### 665. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12333` → after: `L12333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12333) · [Before (L12333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12333)

```diff
-         Ob = new RegExp(`^${hb.replaceAll("$","\\$")}\\s*=[^=]`, "m").test(bb),
+         Nd = new RegExp(`^${kd.replaceAll("$","\\$")}\\s*=[^=]`, "m").test(dd),
```

#### 666. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12336-L12337` → after: `L12336-L12337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12336-L12337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12336-L12337) · [Before (L12336-L12337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12336-L12337)

```diff
-         ab = new RegExp(`//\\s*(?:const|let|var)\\s+${hb.replaceAll("$","\\$")}\\b`).test(bb),
-         Hb = new RegExp(`typeof\\s+${hb.replaceAll("$","\\$")}\\b`).test(bb);
+         Kd = new RegExp(`//\\s*(?:const|let|var)\\s+${kd.replaceAll("$","\\$")}\\b`).test(dd),
+         od = new RegExp(`typeof\\s+${kd.replaceAll("$","\\$")}\\b`).test(dd);
```

#### 667. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12342` → after: `L12342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12342) · [Before (L12342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12342)

```diff
-       Yb.add(Xb ? `Line ${Zb+1} uses "${hb}", which is never set, so it throws there. Did you mean "${Xb}"?` : `Line ${Zb+1} uses "${hb}", which isn't set there, so it throws when that line runs.`);
+       gd.add(Ld ? `Line ${Qd+1} uses "${kd}", which is never set, so it throws there. Did you mean "${Ld}"?` : `Line ${Qd+1} uses "${kd}", which isn't set there, so it throws when that line runs.`);
```

#### 668. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12348` → after: `L12348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12348) · [Before (L12348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12348)

```diff
-     const hb = Mb.start + (null !== (Zb = Mb.length) && void 0 !== Zb ? Zb : 0),
+     const kd = yd.start + (null !== (Qd = yd.length) && void 0 !== Qd ? Qd : 0),
```

#### 669. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12355` → after: `L12355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12355) · [Before (L12355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12355)

```diff
-       mb = Hb.length > 40 ? `${Hb.slice(0,37)}...` : Hb;
+       Dd = od.length > 40 ? `${od.slice(0,37)}...` : od;
```

#### 670. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12359-L12361` → after: `L12359-L12361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12359-L12361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12359-L12361) · [Before (L12359-L12361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12359-L12361)

```diff
-         hb = null !== (zb = null === bb || void 0 === bb || null === (gb = bb[1]) || void 0 === gb ? void 0 : gb.replace("-", " to ")) && void 0 !== zb ? zb : "a different number of",
-         Ob = Number(null !== (ib = null === bb || void 0 === bb ? void 0 : bb[2]) && void 0 !== ib ? ib : Bb.arguments.length);
-       Yb.add(`${Gb} needs ${hb} ${"1"===hb?"value":"values"}, but this line gives it ${Ob}.`);
+         kd = null !== (Yd = null === dd || void 0 === dd || null === (md = dd[1]) || void 0 === md ? void 0 : md.replace("-", " to ")) && void 0 !== Yd ? Yd : "a different number of",
+         Nd = Number(null !== (bd = null === dd || void 0 === dd ? void 0 : dd[2]) && void 0 !== bd ? bd : pd.arguments.length);
+       gd.add(`${Wd} needs ${kd} ${"1"===kd?"value":"values"}, but this line gives it ${Nd}.`);
```

#### 671. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12370` → after: `L12370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12370) · [Before (L12370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12370)

```diff
-         Sb = (null !== (vb = null === bb || void 0 === bb ? void 0 : bb.properties) && void 0 !== vb ? vb : []).flatMap((bb => bb.name && (nb().isIdentifier(bb.name) || nb().isStringLiteral(bb.name)) ? [{
+         Cd = (null !== (Sd = null === dd || void 0 === dd ? void 0 : dd.properties) && void 0 !== Sd ? Sd : []).flatMap((dd => dd.name && (ad().isIdentifier(dd.name) || ad().isStringLiteral(dd.name)) ? [{
```

#### 672. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12374` → after: `L12374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12374) · [Before (L12374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12374)

```diff
-         ab = null !== (tb = null === (Jb = ub.match(/'([^']*)' does not exist/)) || void 0 === Jb ? void 0 : Jb[1]) && void 0 !== tb ? tb : mb,
+         Kd = null !== (jd = null === (Xd = Jd.match(/'([^']*)' does not exist/)) || void 0 === Xd ? void 0 : Xd[1]) && void 0 !== jd ? jd : Dd,
```

#### 673. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12376` → after: `L12376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12376) · [Before (L12376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12376)

```diff
-         wb = Hb.length > 0 ? Hb : [{
+         ld = od.length > 0 ? od : [{
```

#### 674. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12380` → after: `L12380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12380) · [Before (L12380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12380)

```diff
-         Zb = hb ? ` It takes ${fh(Lb,hb)}.` : " Check Show Docs for its settings.";
+         Qd = kd ? ` It takes ${zk(Zd,kd)}.` : " Check Show Docs for its settings.";
```

#### 675. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12389` → after: `L12389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12389) · [Before (L12389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12389)

```diff
-         void 0 !== Ob && Lb.getTypeAtLocation(Ob).getCallSignatures().length > 0 || Ub.includes(ub) || (Bb = hb ? `"${bb}"` : Qa(ub, Ub)), Yb.add(`${Gb} has no setting called "${ub}".${Bb?` Did you mean ${Bb}?`:Zb}`)
+         void 0 !== Nd && Zd.getTypeAtLocation(Nd).getCallSignatures().length > 0 || Pd.includes(Jd) || (pd = kd ? `"${dd}"` : ko(Jd, Pd)), gd.add(`${Wd} has no setting called "${Jd}".${pd?` Did you mean ${pd}?`:Qd}`)
```

#### 676. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12393` → after: `L12393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12393) · [Before (L12393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12393)

```diff
-     const Ib = null !== (Xb = null === ab || void 0 === ab ? void 0 : ab.initializer) && void 0 !== Xb ? Xb : Ob,
+     const Td = null !== (Ld = null === Kd || void 0 === Kd ? void 0 : Kd.initializer) && void 0 !== Ld ? Ld : Nd,
```

#### 677. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12397` → after: `L12397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12397) · [Before (L12397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12397)

```diff
-       yb = null !== (pb = null === Ib || void 0 === Ib ? void 0 : Ib.getText(Ub)) && void 0 !== pb ? pb : Hb,
+       rd = null !== (Od = null === Td || void 0 === Td ? void 0 : Td.getText(Pd)) && void 0 !== Od ? Od : od,
```

#### 678. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12401` → after: `L12401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12401) · [Before (L12401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12401)

```diff
-       const ub = null === (eb = new RegExp(`(?:^|[{,])\\s*${Vb.replaceAll("$","\\$")}\\s*:\\s*(["'])([^"'\\n]*)\\1`, "m").exec(bb)) || void 0 === eb ? void 0 : eb[2];
+       const Jd = null === (fd = new RegExp(`(?:^|[{,])\\s*${ud.replaceAll("$","\\$")}\\s*:\\s*(["'])([^"'\\n]*)\\1`, "m").exec(dd)) || void 0 === fd ? void 0 : fd[2];
```

#### 679. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12404` → after: `L12404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12404) · [Before (L12404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12404)

```diff
-         Yb.add(`${Gb} has no ${Eb} called "${ub}" (${yb}).${bb?` Did you mean ${bb}?`:""}`)
+         gd.add(`${Wd} has no ${hd} called "${Jd}" (${rd}).${dd?` Did you mean ${dd}?`:""}`)
```

#### 680. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12410` → after: `L12410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12410) · [Before (L12410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12410)

```diff
-       const bb = Ib && nb().isStringLiteral(Ib) ? Ib : void 0,
+       const dd = Td && ad().isStringLiteral(Td) ? Td : void 0,
```

#### 681. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12412-L12413` → after: `L12412-L12413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12412-L12413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12412-L12413) · [Before (L12412-L12413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12412-L12413)

```diff
-         hb = bb && !ab ? `${Gb} has no ${Eb} called ${Nb=mb,Nb.startsWith('"')?Nb:`"${Nb}"`}.` : `${Gb} can't take ${mb} there.`;
-       Yb.add(`${hb}${ub?` Did you mean ${ub}?`:" Check Show Docs for what it takes."}`);
+         kd = dd && !Kd ? `${Wd} has no ${hd} called ${nd=Dd,nd.startsWith('"')?nd:`"${nd}"`}.` : `${Wd} can't take ${Dd} there.`;
+       gd.add(`${kd}${Jd?` Did you mean ${Jd}?`:" Check Show Docs for what it takes."}`);
```

#### 682. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12418` → after: `L12418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12418) · [Before (L12418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12418)

```diff
-       Yb.add(`${Gb} needs ${Fb} in ${mb}: it takes ${fh(Lb,Pb)}.`);
+       gd.add(`${Wd} needs ${td} in ${Dd}: it takes ${zk(Zd,Ed)}.`);
```

#### 683. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12422` → after: `L12422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12422) · [Before (L12422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12422)

```diff
-       Yb.add(`${Gb} can't take ${mb} there: it takes ${fh(Lb,Pb)}.`);
+       gd.add(`${Wd} can't take ${Dd} there: it takes ${zk(Zd,Ed)}.`);
```

#### 684. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12428` → after: `L12428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12428) · [Before (L12428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12428)

```diff
-       Yb.add(`${Gb} needs settings in { } there${bb?`, like ${bb}`:""}, not ${mb}.`);
+       gd.add(`${Wd} needs settings in { } there${dd?`, like ${dd}`:""}, not ${Dd}.`);
```

#### 685. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12433` → after: `L12433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12433) · [Before (L12433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12433)

```diff
-       cb = null !== (Kb = null === (Wb = Lb.getResolvedSignature(Bb)) || void 0 === Wb || null === (Cb = Wb.parameters[Tb]) || void 0 === Cb ? void 0 : Cb.name) && void 0 !== Kb ? Kb : "that part",
+       wd = null !== (Gd = null === (vd = Zd.getResolvedSignature(pd)) || void 0 === vd || null === (xd = vd.parameters[Hd]) || void 0 === xd ? void 0 : xd.name) && void 0 !== Gd ? Gd : "that part",
```

#### 686. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12436` → after: `L12436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12436) · [Before (L12436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12436)

```diff
-     "string" === kb ? Yb.add(`${Gb} needs ${cb} as text, but ${mb} is ${Rb} here.`) : "number" === kb ? Yb.add(`${Gb} needs ${cb} as a number, but ${mb} is ${Rb} here.`) : Yb.add(`${Gb} can't take ${mb} there${Pb?`: it takes ${fh(Lb,Pb)}`:". Check Show Docs for what it takes"}.`)
+     "string" === zd ? gd.add(`${Wd} needs ${wd} as text, but ${Dd} is ${dJ} here.`) : "number" === zd ? gd.add(`${Wd} needs ${wd} as a number, but ${Dd} is ${dJ} here.`) : gd.add(`${Wd} can't take ${Dd} there${Ed?`: it takes ${zk(Zd,Ed)}`:". Check Show Docs for what it takes"}.`)
```

#### 687. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12451` → after: `L12451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12451) · [Before (L12451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12451)

```diff
-       Gb = null !== (hb = null === bb || void 0 === bb ? void 0 : bb[1]) && void 0 !== hb ? hb : null === bb || void 0 === bb ? void 0 : bb[2];
+       Wd = null !== (kd = null === dd || void 0 === dd ? void 0 : dd[1]) && void 0 !== kd ? kd : null === dd || void 0 === dd ? void 0 : dd[2];
```

#### 688. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12453` → after: `L12453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12453) · [Before (L12453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12453)

```diff
-     if (Gb) ub.set(Gb, (null !== (Bb = ub.get(Gb)) && void 0 !== Bb ? Bb : 0) + 1)
+     if (Wd) Jd.set(Wd, (null !== (pd = Jd.get(Wd)) && void 0 !== pd ? pd : 0) + 1)
```

#### 689. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12457` → after: `L12457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12457) · [Before (L12457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12457)

```diff
-     return hb > 1 ? [`${ub} is in the code ${hb} times, so only the last one runs. Put them together in one ${ub}.`] : []
+     return kd > 1 ? [`${Jd} is in the code ${kd} times, so only the last one runs. Put them together in one ${Jd}.`] : []
```

#### 690. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12466` → after: `L12466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12466) · [Before (L12466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12466)

```diff
-       const Bb = null !== (ub = null === (hb = Ub[bb]) || void 0 === hb ? void 0 : hb.trim()) && void 0 !== ub ? ub : "";
+       const pd = null !== (Jd = null === (kd = Pd[dd]) || void 0 === kd ? void 0 : kd.trim()) && void 0 !== Jd ? Jd : "";
```

#### 691. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12469` → after: `L12469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12469) · [Before (L12469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12469)

```diff
-         text: Bb.length > 50 ? `${Bb.slice(0,47)}...` : Bb
+         text: pd.length > 50 ? `${pd.slice(0,47)}...` : pd
```

#### 692. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12477` → after: `L12477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12477) · [Before (L12477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12477)

```diff
-       ub = new RegExp(`^(?:async\\s+)?function\\s*\\*?\\s*${bb}\\s*\\(|^${bb}\\s*=`),
+       Jd = new RegExp(`^(?:async\\s+)?function\\s*\\*?\\s*${dd}\\s*\\(|^${dd}\\s*=`),
```

#### 693. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12481` → after: `L12481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12481) · [Before (L12481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12481)

```diff
-   const ab = null !== (hb = null === (Bb = /"([^"]+)"/.exec(bb)) || void 0 === Bb ? void 0 : Bb[1]) && void 0 !== hb ? hb : null === (Ob = /^api\.[\w$]+/.exec(bb)) || void 0 === Ob ? void 0 : Ob[0];
+   const Kd = null !== (kd = null === (pd = /"([^"]+)"/.exec(dd)) || void 0 === pd ? void 0 : pd[1]) && void 0 !== kd ? kd : null === (Nd = /^api\.[\w$]+/.exec(dd)) || void 0 === Nd ? void 0 : Nd[0];
```

#### 694. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12485` → after: `L12485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12485) · [Before (L12485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12485)

```diff
-     Zb = null !== (Gb = wb.find((bb => !Hb.has(Ub[bb])))) && void 0 !== Gb ? Gb : wb[0];
+     Qd = null !== (Wd = ld.find((dd => !od.has(Pd[dd])))) && void 0 !== Wd ? Wd : ld[0];
```

#### 695. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12530` → after: `L12530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12530) · [Before (L12530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12530)

```diff
-     return [`Line ${ub.getLineAndCharacterOfPosition(bb.at).line+1} uses "CONFIG.${bb.name}", but CONFIG has no ${bb.name}, so it is undefined there. Add ${bb.name} to CONFIG.`]
+     return [`Line ${Jd.getLineAndCharacterOfPosition(dd.at).line+1} uses "CONFIG.${dd.name}", but CONFIG has no ${dd.name}, so it is undefined there. Add ${dd.name} to CONFIG.`]
```

#### 696. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12536` → after: `L12536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12536) · [Before (L12536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12536)

```diff
-   const Bb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && !(void 0 !== ub.path && (0, pb.c)(ub.path)),
+   const pd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && !(void 0 !== Jd.path && (0, Od.f)(Jd.path)),
```

#### 697. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12570` → after: `L12570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12570) · [Before (L12570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12570)

```diff
-           hb(null !== (bb = Ob.error) && void 0 !== bb ? bb : new Error("IndexedDB didn't open"))
+           kd(null !== (dd = Nd.error) && void 0 !== dd ? dd : new Error("IndexedDB didn't open"))
```

#### 698. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12619` → after: `L12619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12619) · [Before (L12619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12619)

```diff
-           Yb = hb(void 0 === Sb.result ? Bb : Sb.result), Lb.put(Yb, ub)
+           gd = kd(void 0 === Cd.result ? pd : Cd.result), Zd.put(gd, Jd)
```

#### 699. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12626` → after: `L12626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12626) · [Before (L12626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12626)

```diff
-       this.store = bb, this.signal = ub, this.HZ = new Map
+       this.store = dd, this.signal = Jd, this.qQ = new Map
```

#### 700. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12633-L12634` → after: `L12633-L12634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12633-L12634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12633-L12634) · [Before (L12633-L12634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12633-L12634)

```diff
-         this.HZ.set(bb, Bb), Bb.then(ub)
-       }))) && void 0 !== hb ? hb : () => {}
+         this.qQ.set(dd, pd), pd.then(Jd)
+       }))) && void 0 !== kd ? kd : () => {}
```

#### 701. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12663` → after: `L12663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12663) · [Before (L12663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12663)

```diff
-       this.HZ.set(bb, Ub.then((bb => {
+       this.qQ.set(dd, Pd.then((dd => {
```

#### 702. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12682` → after: `L12682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12682) · [Before (L12682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12682)

```diff
-       this.HZ.set(bb, Bb.then((bb => {
+       this.qQ.set(dd, pd.then((dd => {
```

#### 703. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12699` → after: `L12699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12699) · [Before (L12699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12699)

```diff
-           snapshots: await this.store.update(this.storeKey(bb), (bb => ub(ZS(bb) ? bb : null))),
+           snapshots: await this.store.update(this.storeKey(dd), (dd => Jd(eC(dd) ? dd : null))),
```

#### 704. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12710` → after: `L12710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12710) · [Before (L12710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12710)

```diff
-       return this.store.getItem(this.storeKey(bb)).then((bb => ZS(bb) ? bb : null)).catch((() => null))
+       return this.store.getItem(this.storeKey(dd)).then((dd => eC(dd) ? dd : null)).catch((() => null))
```

#### 705. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12713-L12714` → after: `L12713-L12714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12713-L12714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12713-L12714) · [Before (L12713-L12714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12713-L12714)

```diff
-       let ub = this.HZ.get(bb);
-       return ub || (ub = this.store.getItem(this.storeKey(bb)).then((bb => ZS(bb) ? bb : [])).catch((() => [])), this.HZ.set(bb, ub)), ub
+       let Jd = this.qQ.get(dd);
+       return Jd || (Jd = this.store.getItem(this.storeKey(dd)).then((dd => eC(dd) ? dd : [])).catch((() => [])), this.qQ.set(dd, Jd)), Jd
```

#### 706. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12717` → after: `L12717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12717) · [Before (L12717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12717)

```diff
-       return `worldCodeAiHistory:${bb}`
+       return `worldCodeAiHistory:${dd}`
```

#### 707. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12722` → after: `L12722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12722) · [Before (L12722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12722)

```diff
-       this.store = bb, this.signal = ub, this.HZ = new Map
+       this.store = dd, this.signal = Jd, this.qQ = new Map
```

#### 708. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12730` → after: `L12730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12730) · [Before (L12730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12730)

```diff
-           return null !== (hb = await this.read(bb)) && void 0 !== hb ? hb : ub
+           return null !== (kd = await this.read(dd)) && void 0 !== kd ? kd : Jd
```

#### 709. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12732-L12733` → after: `L12732-L12733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12732-L12733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12732-L12733) · [Before (L12732-L12733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12732-L12733)

```diff
-         this.HZ.set(bb, Bb), Bb.then(ub)
-       }))) && void 0 !== hb ? hb : () => {}
+         this.qQ.set(dd, pd), pd.then(Jd)
+       }))) && void 0 !== kd ? kd : () => {}
```

#### 710. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12739` → after: `L12739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12739) · [Before (L12739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12739)

```diff
-       return this.update(bb, (bb => bb.includes(ub) || bb.length >= 8 ? bb : [...bb, ub]))
+       return this.update(dd, (dd => dd.includes(Jd) || dd.length >= 8 ? dd : [...dd, Jd]))
```

#### 711. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12751` → after: `L12751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12751) · [Before (L12751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12751)

```diff
-         const Ob = ub(null !== (Bb = await this.read(bb)) && void 0 !== Bb ? Bb : hb);
+         const Nd = Jd(null !== (pd = await this.read(dd)) && void 0 !== pd ? pd : kd);
```

#### 712. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12754` → after: `L12754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12754) · [Before (L12754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12754)

```diff
-       this.HZ.set(bb, Bb);
+       this.qQ.set(dd, pd);
```

#### 713. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12762-L12763` → after: `L12762-L12763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12762-L12763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12762-L12763) · [Before (L12762-L12763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12762-L12763)

```diff
-       let ub = this.HZ.get(bb);
-       return ub || (ub = this.read(bb).then((bb => null !== bb && void 0 !== bb ? bb : [])), this.HZ.set(bb, ub)), ub
+       let Jd = this.qQ.get(dd);
+       return Jd || (Jd = this.read(dd).then((dd => null !== dd && void 0 !== dd ? dd : [])), this.qQ.set(dd, Jd)), Jd
```

#### 714. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12766` → after: `L12766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12766) · [Before (L12766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12766)

```diff
-       return `worldCodeAiNotes:${bb}`
+       return `worldCodeAiNotes:${dd}`
```

#### 715. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12775` → after: `L12775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12775) · [Before (L12775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12775)

```diff
-     const Ob = bb => Zb.b.find((ub => ub.id === bb)),
+     const Nd = dd => Qd.e.find((Jd => Jd.id === dd)),
```

#### 716. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12778` → after: `L12778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12778) · [Before (L12778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12778)

```diff
-         return null !== (ub = null === (hb = Ob(bb)) || void 0 === hb ? void 0 : hb.content) && void 0 !== ub ? ub : ""
+         return null !== (Jd = null === (kd = Nd(dd)) || void 0 === kd ? void 0 : kd.content) && void 0 !== Jd ? Jd : ""
```

#### 717. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12786-L12787` → after: `L12786-L12787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12786-L12787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12786-L12787) · [Before (L12786-L12787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12786-L12787)

```diff
-       itemNames: null !== (bb = null === (ub = Ob("itemNames")) || void 0 === ub ? void 0 : ub.raw) && void 0 !== bb ? bb : "",
-       blockNames: null !== (hb = null === (Bb = Ob("blockNames")) || void 0 === Bb ? void 0 : Bb.raw) && void 0 !== hb ? hb : "",
+       itemNames: null !== (dd = null === (Jd = Nd("itemNames")) || void 0 === Jd ? void 0 : Jd.raw) && void 0 !== dd ? dd : "",
+       blockNames: null !== (kd = null === (pd = Nd("blockNames")) || void 0 === pd ? void 0 : pd.raw) && void 0 !== kd ? kd : "",
```

#### 718. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12829` → after: `L12829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12829) · [Before (L12829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12829)

```diff
-       ...CY.h,
+       ...sg.e,
```

#### 719. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12870` → after: `L12870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12870) · [Before (L12870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12870)

```diff
-   return Object.entries(null !== (hb = bb.leftFiles) && void 0 !== hb ? hb : {}).every((bb => {
+   return Object.entries(null !== (kd = dd.leftFiles) && void 0 !== kd ? kd : {}).every((dd => {
```

#### 720. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12873` → after: `L12873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12873) · [Before (L12873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12873)

```diff
-     return (null !== (hb = ub[Bb]) && void 0 !== hb ? hb : "") === Ob
+     return (null !== (kd = Jd[pd]) && void 0 !== kd ? kd : "") === Nd
```

#### 721. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12882-L12883` → after: `L12882-L12883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12882-L12883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12882-L12883) · [Before (L12882-L12883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12882-L12883)

```diff
-     return hb.length > 0 && hb.every((bb => void 0 !== bb && (void 0 === ub || ub.some((ub => KY(ub, [bb]) !== ub))))) ? hb : void 0
-   }(null !== (ub = bb.warnings) && void 0 !== ub ? ub : [], bb.changes.map((bb => bb.after)))
+     return kd.length > 0 && kd.every((dd => void 0 !== dd && (void 0 === Jd || Jd.some((Jd => qg(Jd, [dd]) !== Jd))))) ? kd : void 0
+   }(null !== (Jd = dd.warnings) && void 0 !== Jd ? Jd : [], dd.changes.map((dd => dd.after)))
```

#### 722. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12909` → after: `L12909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12909) · [Before (L12909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12909)

```diff
-     Jb = null !== (ub = wb.warnings) && void 0 !== ub ? ub : [],
+     Xd = null !== (Jd = ld.warnings) && void 0 !== Jd ? Jd : [],
```

#### 723. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12912` → after: `L12912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12912) · [Before (L12912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12912)

```diff
-     sb = null !== (hb = null === (Ob = wb.swappedTo) || void 0 === Ob ? void 0 : Ob[0]) && void 0 !== hb ? hb : eb ? null !== (Yb = null === (Sb = /"([^"]+)"/.exec(Jb[0])) || void 0 === Sb ? void 0 : Sb[1]) && void 0 !== Yb ? Yb : null === (ab = /^api\.[\w$]+/.exec(Jb[0])) || voi … [truncated]
+     Ud = null !== (kd = null === (Nd = ld.swappedTo) || void 0 === Nd ? void 0 : Nd[0]) && void 0 !== kd ? kd : fd ? null !== (gd = null === (Cd = /"([^"]+)"/.exec(Xd[0])) || void 0 === Cd ? void 0 : Cd[1]) && void 0 !== gd ? gd : null === (Kd = /^api\.[\w$]+/.exec(Xd[0])) || voi … [truncated]
```

#### 724. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12917` → after: `L12917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12917) · [Before (L12917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12917)

```diff
-       return new Map((null !== (bb = wb.warnings) && void 0 !== bb ? bb : []).map((bb => [bb, 1 === wb.changes.length && ub ? BH(bb, ub) : void 0])))
+       return new Map((null !== (dd = ld.warnings) && void 0 !== dd ? dd : []).map((dd => [dd, 1 === ld.changes.length && Jd ? Zo(dd, Jd) : void 0])))
```

#### 725. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12921` → after: `L12921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12921) · [Before (L12921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12921)

```diff
-       return null !== (ub = null === (hb = mb.get(bb)) || void 0 === hb ? void 0 : hb.line) && void 0 !== ub ? ub : bb
+       return null !== (Jd = null === (kd = Dd.get(dd)) || void 0 === kd ? void 0 : kd.line) && void 0 !== Jd ? Jd : dd
```

#### 726. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12930` → after: `L12930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12930) · [Before (L12930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12930)

```diff
-     yb((bb => 0 === bb.size ? bb : new Set))
+     rd((dd => 0 === dd.size ? dd : new Set))
```

#### 727. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12942` → after: `L12942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12942) · [Before (L12942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12942)

```diff
-         const hb = new Set((null !== (ub = fb.get(bb.path)) && void 0 !== ub ? ub : []).filter((ub => !Eb.has(`${bb.path}:${ub.index}`))).map((bb => bb.index))),
+         const kd = new Set((null !== (Jd = Vd.get(dd.path)) && void 0 !== Jd ? Jd : []).filter((Jd => !hd.has(`${dd.path}:${Jd.index}`))).map((dd => dd.index))),
```

#### 728. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12948` → after: `L12948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12948) · [Before (L12948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12948)

```diff
-             return `${Bb.join("\n")}${Ob}`
+             return `${pd.join("\n")}${Nd}`
```

#### 729. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12970` → after: `L12970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12970) · [Before (L12970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12970)

```diff
-       title: Bu ? `Editing code: ${Ou}` : `Code change: ${Ou}`,
+       title: NJ ? `Editing code: ${WJ}` : `Code change: ${WJ}`,
```

#### 730. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12990` → after: `L12990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12990) · [Before (L12990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12990)

```diff
-           }(uu ? null !== (ub = uu.find((ub => ub.path === bb.path))) && void 0 !== ub ? ub : {
+           }(kJ ? null !== (Jd = kJ.find((Jd => Jd.path === dd.path))) && void 0 !== Jd ? Jd : {
```

#### 731. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12993` → after: `L12993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L12993) · [Before (L12993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L12993)

```diff
-           } : bb), Gb = null !== (hb = fb.get(bb.path)) && void 0 !== hb ? hb : [], Lb = "offered" !== zb && "applied" !== zb || "" === bb.before ? [] : function(bb, ub) {
+           } : dd), Wd = null !== (kd = Vd.get(dd.path)) && void 0 !== kd ? kd : [], Zd = "offered" !== Yd && "applied" !== Yd || "" === dd.before ? [] : function(dd, Jd) {
```

#### 732. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13006` → after: `L13006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13006) · [Before (L13006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13006)

```diff
-                 children: 1 === Bb ? "1 line added" : `${Bb} lines added`
+                 children: 1 === pd ? "1 line added" : `${pd} lines added`
```

#### 733. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13014-L13016` → after: `L13014-L13016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13014-L13016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13014-L13016) · [Before (L13014-L13016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13014-L13016)

```diff
-                 const hb = `${bb.path}:${ub.index}`,
-                   Bb = [ub.added.length > 0 ? `+${ub.added.length}` : "", ub.removed.length > 0 ? `\u2212${ub.removed.length}` : ""].filter(Boolean).join(" "),
-                   Ob = [ub.added.length > 0 ? `${ub.added.length} ${1===ub.added.length?"line":"lines"} added` : "", ub.removed.length > 0 ? `${ub.removed.length} taken out` : ""].filter(Boolean).join(", ");
+                 const kd = `${dd.path}:${Jd.index}`,
+                   pd = [Jd.added.length > 0 ? `+${Jd.added.length}` : "", Jd.removed.length > 0 ? `\u2212${Jd.removed.length}` : ""].filter(Boolean).join(" "),
+                   Nd = [Jd.added.length > 0 ? `${Jd.added.length} ${1===Jd.added.length?"line":"lines"} added` : "", Jd.removed.length > 0 ? `${Jd.removed.length} taken out` : ""].filter(Boolean).join(", ");
```

#### 734. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13042` → after: `L13042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13042) · [Before (L13042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13042)

```diff
-                       children: `${Bb} ${ub.added.length+ub.removed.length===1?"line":"lines"}`
+                       children: `${pd} ${Jd.added.length+Jd.removed.length===1?"line":"lines"}`
```

#### 735. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13058` → after: `L13058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13058) · [Before (L13058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13058)

```diff
-               children: cb ? `Hide the ${Gb.length} parts` : `Show the ${Gb.length} parts that went in`
+               children: wd ? `Hide the ${Wd.length} parts` : `Show the ${Wd.length} parts that went in`
```

#### 736. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13071` → after: `L13071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13071) · [Before (L13071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13071)

```diff
-               }, `${bb.path}:${ub.index}`)))
+               }, `${dd.path}:${Jd.index}`)))
```

#### 737. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13081` → after: `L13081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13081) · [Before (L13081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13081)

```diff
-                 const hb = null !== (ub = yS(bb)) && void 0 !== ub ? ub : Ba(bb);
+                 const kd = null !== (Jd = tC(dd)) && void 0 !== Jd ? Jd : PK(dd);
```

#### 738. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13083` → after: `L13083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13083) · [Before (L13083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13083)

```diff
-               })).join(", "), Lb.length > 6 ? ` and ${Lb.length-6} more` : "", ".", " ", (0, Ub.jsx)("code", {
+               })).join(", "), Zd.length > 6 ? ` and ${Zd.length-6} more` : "", ".", " ", (0, Pd.jsx)("code", {
```

#### 739. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13108-L13109` → after: `L13108-L13109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13108-L13109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13108-L13109) · [Before (L13108-L13109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13108-L13109)

```diff
-           children: Mb ? 1 === Ib ? `${Pb?`Line ${Pb.line}`:"This line"} ${Nb?"will":"would"} never work:` : `${Ib} lines ${Nb?"will":"would"} never work:` : 1 === Ib ? `${Pb?`Line ${Pb.line}`:"This line"} ${Nb?"will":"would"} break:` : `${Ib} lines ${Nb?"will":"would"} break:`
-         }), (vb ? Jb : Jb.slice(0, 1)).map(((bb, ub, hb) => {
+           children: yd ? 1 === Td ? `${Ed?`Line ${Ed.line}`:"This line"} ${nd?"will":"would"} never work:` : `${Td} lines ${nd?"will":"would"} never work:` : 1 === Td ? `${Ed?`Line ${Ed.line}`:"This line"} ${nd?"will":"would"} break:` : `${Td} lines ${nd?"will":"would"} break:`
+         }), (Sd ? Xd : Xd.slice(0, 1)).map(((dd, Jd, kd) => {
```

#### 740. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13116` → after: `L13116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13116) · [Before (L13116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13116)

```diff
-               children: [Ib > 1 && `Line ${Gb.line}: `, (0, Ub.jsx)("code", {
+               children: [Td > 1 && `Line ${Wd.line}: `, (0, Pd.jsx)("code", {
```

#### 741. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13120` → after: `L13120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13120) · [Before (L13120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13120)

```diff
-               children: !Gb || 1 !== Ib && GH(bb) ? bb : UH(bb)
+               children: !Wd || 1 !== Td && Co(dd) ? dd : Ko(dd)
```

#### 742. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13131` → after: `L13131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13131) · [Before (L13131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13131)

```diff
-         ...qb ? {} : CY.h,
+         ...cd ? {} : sg.e,
```

#### 743. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13143` → after: `L13143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13143) · [Before (L13143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13143)

```diff
-         children: Db ? Db.codeBlock ? "Apply in that code block" : "Apply in World Code" : Tb && bu < kb ? `Apply ${bu} of ${kb} changes` : eb ? "Apply anyway" : "Apply to my code"
+         children: Md ? Md.codeBlock ? "Apply in that code block" : "Apply in World Code" : Hd && JJ < zd ? `Apply ${JJ} of ${zd} changes` : fd ? "Apply anyway" : "Apply to my code"
```

#### 744. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13157` → after: `L13157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13157) · [Before (L13157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13157)

```diff
-           ...CY.h,
+           ...sg.e,
```

#### 745. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13258` → after: `L13258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13258) · [Before (L13258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13258)

```diff
-       title: Bb ? "That change didn't work, so your code is the same." : 1 === hb.length ? "One part didn't work, so it's left out." : `${hb.length} parts didn't work, so they're left out.`,
+       title: pd ? "That change didn't work, so your code is the same." : 1 === kd.length ? "One part didn't work, so it's left out." : `${kd.length} parts didn't work, so they're left out.`,
```

#### 746. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13266` → after: `L13266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13266) · [Before (L13266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13266)

```diff
-           children: Sb.text.split("\n").length > 4 ? `${Sb.text.split("\n").slice(0,4).join("\n")}\n\u2026` : Sb.text
+           children: Cd.text.split("\n").length > 4 ? `${Cd.text.split("\n").slice(0,4).join("\n")}\n\u2026` : Cd.text
```

#### 747. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13274` → after: `L13274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13274) · [Before (L13274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13274)

```diff
-         ...CY.h,
+         ...sg.e,
```

#### 748. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13312` → after: `L13312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13312) · [Before (L13312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13312)

```diff
-   return `Add this to my World Code:\n\`\`\`js\n${bb.join("\n").replace(/\s*$/,"\n")}\`\`\``
+   return `Add this to my World Code:\n\`\`\`js\n${dd.join("\n").replace(/\s*$/,"\n")}\`\`\``
```

#### 749. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13317` → after: `L13317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13317) · [Before (L13317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13317)

```diff
-   return `${Math.floor(ub/60)}:${String(ub%60).padStart(2,"0")}`
+   return `${Math.floor(Jd/60)}:${String(Jd%60).padStart(2,"0")}`
```

#### 750. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13329` → after: `L13329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13329) · [Before (L13329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13329)

```diff
-   const Bb = (Ob = hb.phase, Lb = null !== (ub = hb.reasoningChars) && void 0 !== ub ? ub : 0, "screening" === Ob ? 3 : "writing" === Ob ? 2 : "thinking" === Ob && Lb >= 400 ? 1 : 0);
+   const pd = (Nd = kd.phase, Zd = null !== (Jd = kd.reasoningChars) && void 0 !== Jd ? Jd : 0, "screening" === Nd ? 3 : "writing" === Nd ? 2 : "thinking" === Nd && Zd >= 400 ? 1 : 0);
```

#### 751. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13333` → after: `L13333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13333) · [Before (L13333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13333)

```diff
-     children: (Yb = !hb.skipsSafetyCheck, Yb ? Ka : Ka.filter((bb => "Safety check" !== bb))).map(((bb, ub) => (0, Ub.jsx)("li", {
+     children: (gd = !kd.skipsSafetyCheck, gd ? qK : qK.filter((dd => "Safety check" !== dd))).map(((dd, Jd) => (0, Pd.jsx)("li", {
```

#### 752. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13335` → after: `L13335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13335) · [Before (L13335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13335)

```diff
-       children: ub < Bb ? `\u2713 ${bb}` : bb
+       children: Jd < pd ? `\u2713 ${dd}` : dd
```

#### 753. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13380` → after: `L13380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13380) · [Before (L13380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13380)

```diff
-         const ub = "function" === typeof bb ? bb : () => bb;
+         const Jd = "function" === typeof dd ? dd : () => dd;
```

#### 754. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13386` → after: `L13386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13386) · [Before (L13386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13386)

```diff
-     const [au, Hu] = (0, Bb.useState)(null), [wu, Zu] = (0, Bb.useState)([]), [Xu, pu] = (0, Bb.useState)(!1), [ou, Au] = (0, Bb.useState)([]), [lu, Ku] = (0, Bb.useState)(!1), [Wu, Cu] = (0, Bb.useState)(!1), [du, ru] = (0, Bb.useState)(null), [ju, nu] = (0, Bb.useState)(!1), [D … [truncated]
+     const [oJ, lJ] = (0, pd.useState)(null), [QJ, LJ] = (0, pd.useState)([]), [OJ, eJ] = (0, pd.useState)(!1), [RJ, IJ] = (0, pd.useState)([]), [GJ, vJ] = (0, pd.useState)(!1), [xJ, qJ] = (0, pd.useState)(!1), [BJ, sJ] = (0, pd.useState)(null), [iJ, aJ] = (0, pd.useState)(!1), [M … [truncated]
```

#### 755. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13389` → after: `L13389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13389) · [Before (L13389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13389)

```diff
-         const ub = JSON.parse(null !== (bb = localStorage.getItem(Da)) && void 0 !== bb ? bb : "{}");
+         const Jd = JSON.parse(null !== (dd = localStorage.getItem(YK)) && void 0 !== dd ? dd : "{}");
```

#### 756. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13406` → after: `L13406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13406) · [Before (L13406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13406)

```diff
-       [fu, ku] = (0, Bb.useState)(null !== (ub = Ou.dismissedErrorCounts.get(Pb.key)) && void 0 !== ub ? ub : 0),
+       [VJ, zJ] = (0, pd.useState)(null !== (Jd = WJ.dismissedErrorCounts.get(Ed.key)) && void 0 !== Jd ? Jd : 0),
```

#### 757. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13414-L13415` → after: `L13414-L13415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13414-L13415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13414-L13415) · [Before (L13414-L13415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13414-L13415)

```diff
-       Lh = (0, aS.q)(qb),
-       Yh = null !== Gh && void 0 !== Gh ? Gh : null === Lh || void 0 === Lh ? void 0 : Lh.entryId,
+       gk = (0, QC.o)(cd),
+       Ck = null !== Pk && void 0 !== Pk ? Pk : null === gk || void 0 === gk ? void 0 : gk.entryId,
```

#### 758. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13467` → after: `L13467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13467) · [Before (L13467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13467)

```diff
-           Ob = Math.max(Ob, Math.min(Ub, ub ? Bb(ub) - hb : Bb(Yb)))
+           Nd = Math.max(Nd, Math.min(Pd, Jd ? pd(Jd) - kd : pd(gd)))
```

#### 759. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13528` → after: `L13528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13528) · [Before (L13528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13528)

```diff
-     const rh = null !== (Ob = null === (Zb = Uu.findLast((bb => bb.target.key === Pb.key))) || void 0 === Zb ? void 0 : Zb.retryAt) && void 0 !== Ob ? Ob : 0,
+     const ik = null !== (Nd = null === (Qd = ZJ.findLast((dd => dd.target.key === Ed.key))) || void 0 === Qd ? void 0 : Qd.retryAt) && void 0 !== Nd ? Nd : 0,
```

#### 760. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13558` → after: `L13558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13558) · [Before (L13558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13558)

```diff
-         return null !== (hb = Bb) && void 0 !== hb ? hb : hY(bb)
+         return null !== (kd = pd) && void 0 !== kd ? kd : Wg(dd)
```

#### 761. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13597` → after: `L13597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13597) · [Before (L13597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13597)

```diff
-           about: Gb = (null !== ub && void 0 !== ub ? ub : bb.trim()),
+           about: Wd = (null !== Jd && void 0 !== Jd ? Jd : dd.trim()),
```

#### 762. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13621` → after: `L13621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13621) · [Before (L13621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13621)

```diff
-             } = await Promise.resolve().then((() => hb(1249)));
+             } = await Promise.resolve().then((() => kd(1371)));
```

#### 763. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13636` → after: `L13636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13636) · [Before (L13636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13636)

```diff
-         const Db = null !== wb && void 0 !== wb ? wb : ju && !ab && void 0 === Zb && void 0 === ob;
+         const Md = null !== ld && void 0 !== ld ? ld : iJ && !Kd && void 0 === Qd && void 0 === ed;
```

#### 764. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13640` → after: `L13640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13640) · [Before (L13640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13640)

```diff
-         const xb = null !== rb && void 0 !== rb ? rb : vb;
+         const Fd = null !== Bd && void 0 !== Bd ? Bd : Sd;
```

#### 765. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13645` → after: `L13645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13645) · [Before (L13645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13645)

```diff
-           eb = ib && !Xb.i.get(),
+           fd = bd && !Ld.e.get(),
```

#### 766. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13655` → after: `L13655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13655) · [Before (L13655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13655)

```diff
-           qb = (Pb < 0 ? Uu : Uu.slice(0, Pb)).filter((bb => !bb.isNotice && !bb.leftOut && gh(bb) && (eb || !bb.isUnchecked))).slice(-4).map((bb => ({
+           cd = (Ed < 0 ? ZJ : ZJ.slice(0, Ed)).filter((dd => !dd.isNotice && !dd.leftOut && bk(dd) && (fd || !dd.isUnchecked))).slice(-4).map((dd => ({
```

#### 767. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13657` → after: `L13657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13657) · [Before (L13657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13657)

```diff
-             text: bb.question ? `${bb.text}\n${bb.question.question}` : bb.text
+             text: dd.question ? `${dd.text}\n${dd.question.question}` : dd.text
```

#### 768. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13660` → after: `L13660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13660) · [Before (L13660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13660)

```diff
-           Vb = void 0 === Yb ? void 0 === ub ? nb : void 0 : null !== Yb && void 0 !== Yb ? Yb : void 0,
+           ud = void 0 === gd ? void 0 === Jd ? ad : void 0 : null !== gd && void 0 !== gd ? gd : void 0,
```

#### 769. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13675` → after: `L13675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13675) · [Before (L13675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13675)

```diff
-             text: bb ? nb : null !== ub && void 0 !== ub ? ub : nb,
+             text: dd ? ad : null !== Jd && void 0 !== Jd ? Jd : ad,
```

#### 770. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13748` → after: `L13748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13748) · [Before (L13748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13748)

```diff
-               if (!sb && !gb || eb) return null !== jb && void 0 !== jb ? jb : nb;
+               if (!Ud && !md || fd) return null !== sd && void 0 !== sd ? sd : ad;
```

#### 771. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13790` → after: `L13790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13790) · [Before (L13790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13790)

```diff
-           let wb = mb ? null !== jb && void 0 !== jb ? jb : nb : await Yb();
+           let ld = Dd ? null !== sd && void 0 !== sd ? sd : ad : await gd();
```

#### 772. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13811` → after: `L13811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13811) · [Before (L13811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13811)

```diff
-                 outline: (Zu = Gu(Xb, new Set(KH().callbackNames())), [Zu.callbacks.length > 0 ? `Callbacks: ${Zu.callbacks.join(", ")}` : "", Zu.commands.length > 0 ? `Commands: ${Zu.commands.join(", ")}` : "", Zu.functions.length > 0 ? `Functions: ${Zu.functions.join(", ")}` :  … [truncated]
+                 outline: (LJ = PJ(Ld, new Set(so().callbackNames())), [LJ.callbacks.length > 0 ? `Callbacks: ${LJ.callbacks.join(", ")}` : "", LJ.commands.length > 0 ? `Commands: ${LJ.commands.join(", ")}` : "", LJ.functions.length > 0 ? `Functions: ${LJ.functions.join(", ")}` :  … [truncated]
```

#### 773. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13818-L13819` → after: `L13818-L13819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13818-L13819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13818-L13819) · [Before (L13818-L13819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13818-L13819)

```diff
-               const hb = `${bb.format} ${bb.nativeTools}`,
-                 Bb = null !== (ub = vb.get(hb)) && void 0 !== ub ? ub : CO(KH(), zb, bb);
+               const kd = `${dd.format} ${dd.nativeTools}`,
+                 pd = null !== (Jd = Sd.get(kd)) && void 0 !== Jd ? Jd : sN(so(), Yd, dd);
```

#### 774. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13858` → after: `L13858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13858) · [Before (L13858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13858)

```diff
-               const Lb = (0, lb.d)(3e4, Gb.signal);
+               const Zd = (0, Id.b)(3e4, Wd.signal);
```

#### 775. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13884` → after: `L13884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13884) · [Before (L13884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13884)

```diff
-                 Yb || console.warn(`World Code AI: ${UG.name} couldn't be reached`, Hb)
+                 gd || console.warn(`World Code AI: ${CW.name} couldn't be reached`, od)
```

#### 776. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13932` → after: `L13932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13932) · [Before (L13932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13932)

```diff
-           }, du = (wu = null === (Xu = SL.getState().status) || void 0 === Xu ? void 0 : Xu.provider, OL[null !== wu && void 0 !== wu ? wu : "ovh"]), ru = bb => {
+           }, BJ = (QJ = null === (OJ = lZ.getState().status) || void 0 === OJ ? void 0 : OJ.provider, ZZ[null !== QJ && void 0 !== QJ ? QJ : "ovh"]), sJ = dd => {
```

#### 777. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13952` → after: `L13952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13952) · [Before (L13952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13952)

```diff
-             const Bb = Pb < 0 ? Uu : Uu.slice(0, Pb),
+             const pd = Ed < 0 ? ZJ : ZJ.slice(0, Ed),
```

#### 778. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13964` → after: `L13964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13964) · [Before (L13964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13964)

```diff
-                 mp: CO(KH(), zb, Hb, {
+                 rO: sN(so(), Yd, od, {
```

#### 779. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13966` → after: `L13966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13966) · [Before (L13966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13966)

```diff
-                   mp: !0
+                   rO: !0
```

#### 780. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13968` → after: `L13968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13968) · [Before (L13968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13968)

```diff
-                 toolResults: [...(null !== Sb && void 0 !== Sb ? Sb : []).flatMap((bb => bb.call ? [{
+                 toolResults: [...(null !== Cd && void 0 !== Cd ? Cd : []).flatMap((dd => dd.call ? [{
```

#### 781. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13971` → after: `L13971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13971) · [Before (L13971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13971)

```diff
-                 }] : [])), ...(null !== (bb = zb.lookups) && void 0 !== bb ? bb : []).flatMap((bb => bb.call ? [{
+                 }] : [])), ...(null !== (dd = Yd.lookups) && void 0 !== dd ? dd : []).flatMap((dd => dd.call ? [{
```

#### 782. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13973` → after: `L13973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13973) · [Before (L13973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13973)

```diff
-                   text: `${bb.about}:\n${bb.text}`
+                   text: `${dd.about}:\n${dd.text}`
```

#### 783. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13981` → after: `L13981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13981) · [Before (L13981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13981)

```diff
-                   mp: Ub,
+                   rO: Pd,
```

#### 784. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13990` → after: `L13990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L13990) · [Before (L13990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L13990)

```diff
-                   Xb = null !== Ub && void 0 !== Ub ? Ub : ub[ub.length - 1],
+                   Ld = null !== Pd && void 0 !== Pd ? Pd : Jd[Jd.length - 1],
```

#### 785. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14087` → after: `L14087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14087) · [Before (L14087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14087)

```diff
-               content: (Yu = null === fb || void 0 === fb || null === (pu = fb.cutShort) || void 0 === pu ? void 0 : pu.cutCall, "Your answer was cut short. Continue exactly where you stopped, from the next character: don't repeat anything or start again, and add nothing before i … [truncated]
+               content: (CJ = null === Vd || void 0 === Vd || null === (eJ = Vd.cutShort) || void 0 === eJ ? void 0 : eJ.cutCall, "Your answer was cut short. Continue exactly where you stopped, from the next character: don't repeat anything or start again, and add nothing before i … [truncated]
```

#### 786. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14113` → after: `L14113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14113) · [Before (L14113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14113)

```diff
-                 model: gb.name ? `${gb.name} \xb7 ${gb.model.name}` : gb.model.name
+                 model: md.name ? `${md.name} \xb7 ${md.model.name}` : md.model.name
```

#### 787. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14136` → after: `L14136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14136) · [Before (L14136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14136)

```diff
-               }, Du = null !== (Au = du.callFormat) && void 0 !== Au ? Au : "simple", gu = {
+               }, MJ = null !== (IJ = BJ.callFormat) && void 0 !== IJ ? IJ : "simple", mJ = {
```

#### 788. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14162` → after: `L14162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14162) · [Before (L14162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14162)

```diff
-                   return !Number.isFinite(hb) || hb <= 0 ? bb : {
+                   return !Number.isFinite(kd) || kd <= 0 ? dd : {
```

#### 789. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14164` → after: `L14164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14164) · [Before (L14164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14164)

```diff
-                     [ub]: [...null !== (Bb = bb[ub]) && void 0 !== Bb ? Bb : [], hb].slice(-10)
+                     [Jd]: [...null !== (pd = dd[Jd]) && void 0 !== pd ? pd : [], kd].slice(-10)
```

#### 790. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14181` → after: `L14181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14181) · [Before (L14181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14181)

```diff
-             Ju = kB(nu.answer, Du, Xb, xb, tu.callbackNames(), uu ? pb.b : void 0, hu, new Set([XO(Xb, xb, uu), xb, ...Cb, ...Object.keys(null !== Wb && void 0 !== Wb ? Wb : {})].filter((bb => null !== bb))), tu.realName),
+             XJ = wp(aJ.answer, MJ, Ld, Fd, jJ.callbackNames(), kJ ? Od.c : void 0, pJ, new Set([RN(Ld, Fd, kJ), Fd, ...xd, ...Object.keys(null !== vd && void 0 !== vd ? vd : {})].filter((dd => null !== dd))), jJ.realName),
```

#### 791. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14220` → after: `L14220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14220) · [Before (L14220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14220)

```diff
-               return bb.flatMap((bb => SH(tu, bb, ub && !(0, pb.c)(bb.path))))
+               return dd.flatMap((dd => Lo(jJ, dd, Jd && !(0, Od.f)(dd.path))))
```

#### 792. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14226` → after: `L14226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14226) · [Before (L14226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14226)

```diff
-                 return null !== (ub = oY(bb)) && void 0 !== ub ? ub : []
+                 return null !== (Jd = Gg(dd)) && void 0 !== Jd ? Jd : []
```

#### 793. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14236` → after: `L14236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14236) · [Before (L14236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14236)

```diff
-             Iu = mu.changes.filter((bb => uu && (0, pb.c)(bb.path))).map((bb => ({
+             TJ = DJ.changes.filter((dd => kJ && (0, Od.f)(dd.path))).map((dd => ({
```

#### 794. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14238` → after: `L14238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14238) · [Before (L14238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14238)

```diff
-               path: (0, pb.d)(bb.path)
+               path: (0, Od.j)(dd.path)
```

#### 795. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14240` → after: `L14240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14240) · [Before (L14240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14240)

```diff
-             Pu = mu.changes.filter((bb => !uu || !(0, pb.c)(bb.path))),
+             EJ = DJ.changes.filter((dd => !kJ || !(0, Od.f)(dd.path))),
```

#### 796. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14274` → after: `L14274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14274) · [Before (L14274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14274)

```diff
-                 failedEdits: [...(null !== Sb && void 0 !== Sb ? Sb : []).map(HH), ...bh],
+                 failedEdits: [...(null !== Cd && void 0 !== Cd ? Cd : []).map(eo), ...Jk],
```

#### 797. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14289` → after: `L14289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14289) · [Before (L14289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14289)

```diff
-             Ah = () => Eu.changes.length > 0 ? "Here's a change for your code." : Iu.length > 0 ? "This changes your World Code." : Eu.worldCode.length > 0 ? "This needs World Code." : Tu.length > 0 ? `I'll put it into ${Tu.map((bb=>bb.path)).join(" and ")}.` : ah ? "Quick questi … [truncated]
+             Gk = () => hJ.changes.length > 0 ? "Here's a change for your code." : TJ.length > 0 ? "This changes your World Code." : hJ.worldCode.length > 0 ? "This needs World Code." : HJ.length > 0 ? `I'll put it into ${HJ.map((dd=>dd.path)).join(" and ")}.` : lk ? "Quick questi … [truncated]
```

#### 798. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14298-L14299` → after: `L14298-L14299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14298-L14299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14298-L14299) · [Before (L14298-L14299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14298-L14299)

```diff
-               failedEdits: Qu.length > 0 ? Qu : void 0,
-               question: null !== ah && void 0 !== ah ? ah : void 0,
+               failedEdits: AJ.length > 0 ? AJ : void 0,
+               question: null !== lk && void 0 !== lk ? lk : void 0,
```

#### 799. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14359` → after: `L14359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14359) · [Before (L14359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14359)

```diff
-             text: (0, aS.v)(Vu),
+             text: (0, QC.u)(uJ),
```

#### 800. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14399` → after: `L14399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14399) · [Before (L14399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14399)

```diff
-             }, za.g);
+             }, bK.d);
```

#### 801. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14422` → after: `L14422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14422) · [Before (L14422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14422)

```diff
-               return `They asked: "${bb}"\nYour last answer wrote this for ${ub}, but you hadn't seen that file, so it didn't go in. ${ub} is open now, its code above. Put your code into it, keeping everything it already has and changing only what the request needs:\n\`\`\`js\n${ … [truncated]
+               return `They asked: "${dd}"\nYour last answer wrote this for ${Jd}, but you hadn't seen that file, so it didn't go in. ${Jd} is open now, its code above. Put your code into it, keeping everything it already has and changing only what the request needs:\n\`\`\`js\n${ … [truncated]
```

#### 802. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14461` → after: `L14461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14461) · [Before (L14461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14461)

```diff
-                 return `In a code block, they asked: "${bb}"\nThe code block's answer needs this part in World Code, which is open now, its code above. Put it in, keeping everything World Code already has: a callback it already defines is changed, with what it does kept, never de … [truncated]
+                 return `In a code block, they asked: "${dd}"\nThe code block's answer needs this part in World Code, which is open now, its code above. Put it in, keeping everything World Code already has: a callback it already defines is changed, with what it does kept, never de … [truncated]
```

#### 803. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14463-L14464` → after: `L14463-L14464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14463-L14464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14463-L14464) · [Before (L14463-L14464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14463-L14464)

```diff
-             GB(null !== (lu = null === hb || void 0 === hb ? void 0 : hb.request) && void 0 !== lu ? lu : ub ? function(bb) {
-               return `In a code block, they asked for this in World Code, which is open now: ${bb}`
+             Zp(null !== (GJ = null === kd || void 0 === kd ? void 0 : kd.request) && void 0 !== GJ ? GJ : Jd ? function(dd) {
+               return `In a code block, they asked for this in World Code, which is open now: ${dd}`
```

#### 804. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14473` → after: `L14473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14473) · [Before (L14473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14473)

```diff
-             }, hh ? bb : void 0)
+             }, pk ? dd : void 0)
```

#### 805. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14478` → after: `L14478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14478) · [Before (L14478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14478)

```diff
-             hB(null !== bb && void 0 !== bb ? bb : Eu.worldCode.length > 0 ? yH(Eu.worldCode) : "", {
+             Np(null !== dd && void 0 !== dd ? dd : hJ.worldCode.length > 0 ? zo(hJ.worldCode) : "", {
```

#### 806. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14487` → after: `L14487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14487) · [Before (L14487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14487)

```diff
-               text: (0, aS.E)(yu),
+               text: (0, QC.B)(rJ),
```

#### 807. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14496` → after: `L14496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14496) · [Before (L14496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14496)

```diff
-               text: aS.u,
+               text: QC.s,
```

#### 808. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14590` → after: `L14590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14590) · [Before (L14590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14590)

```diff
-             const Gb = null !== (hb = null === (Bb = eB.askedFor) || void 0 === Bb ? void 0 : Bb.request) && void 0 !== hb ? hb : "",
+             const Wd = null !== (kd = null === (pd = np.askedFor) || void 0 === pd ? void 0 : pd.request) && void 0 !== kd ? kd : "",
```

#### 809. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14595` → after: `L14595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14595) · [Before (L14595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14595)

```diff
-               asked: `${Gb} ${bb}`,
+               asked: `${Wd} ${dd}`,
```

#### 810. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14614` → after: `L14614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14614) · [Before (L14614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14614)

```diff
-           const Ob = null !== (Bb = hb.useFree) && void 0 !== Bb ? Bb : ju && null !== mB;
+           const Nd = null !== (pd = kd.useFree) && void 0 !== pd ? pd : iJ && null !== Tp;
```

#### 811. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14636` → after: `L14636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14636) · [Before (L14636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14636)

```diff
-           return (null !== (ub = ib[hb]) && void 0 !== ub ? ub : "") === Bb
+           return (null !== (Jd = bd[kd]) && void 0 !== Jd ? Jd : "") === pd
```

#### 812. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14639` → after: `L14639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14639) · [Before (L14639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14639)

```diff
-         const bb = (null !== (Ub = Bb.until) && void 0 !== Ub ? Ub : 0) - Date.now();
+         const dd = (null !== (Pd = pd.until) && void 0 !== Pd ? Pd : 0) - Date.now();
```

#### 813. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14671` → after: `L14671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14671) · [Before (L14671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14671)

```diff
-       const Yb = null !== (hb = Bb.followUp) && void 0 !== hb ? hb : {
+       const gd = null !== (kd = pd.followUp) && void 0 !== kd ? kd : {
```

#### 814. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14706` → after: `L14706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14706) · [Before (L14706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14706)

```diff
-             return (null !== (ub = Bb[bb.path]) && void 0 !== ub ? ub : "") !== bb.before
+             return (null !== (Jd = pd[dd.path]) && void 0 !== Jd ? Jd : "") !== dd.before
```

#### 815. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14717` → after: `L14717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14717) · [Before (L14717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14717)

```diff
-           return `Before "${ub.length>200?`${ub.slice(0,200).trimEnd()}\u2026`:ub}"`
+           return `Before "${Jd.length>200?`${Jd.slice(0,200).trimEnd()}\u2026`:Jd}"`
```

#### 816. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14721` → after: `L14721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14721) · [Before (L14721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14721)

```diff
-             return null !== (ub = bb.why) && void 0 !== ub ? ub : []
+             return null !== (Jd = dd.why) && void 0 !== Jd ? Jd : []
```

#### 817. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14725` → after: `L14725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14725) · [Before (L14725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14725)

```diff
-           return hb.length > 400 ? `${hb.slice(0,400).trimEnd()}\u2026` : hb
+           return kd.length > 400 ? `${kd.slice(0,400).trimEnd()}\u2026` : kd
```

#### 818. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14740` → after: `L14740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14740) · [Before (L14740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14740)

```diff
-               planDone: Math.max(null !== (ub = bb.planDone) && void 0 !== ub ? ub : 0, Bb.index + 1)
+               planDone: Math.max(null !== (Jd = dd.planDone) && void 0 !== Jd ? Jd : 0, pd.index + 1)
```

#### 819. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14751` → after: `L14751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14751) · [Before (L14751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14751)

```diff
-       const Bb = null !== (bb = ub.picked) && void 0 !== bb ? bb : hb.changes,
+       const pd = null !== (dd = Jd.picked) && void 0 !== dd ? dd : kd.changes,
```

#### 820. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14754` → after: `L14754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14754) · [Before (L14754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14754)

```diff
-           return (null !== (ub = lh.current[bb.path]) && void 0 !== ub ? ub : "") === bb.before
+           return (null !== (Jd = vk.current[dd.path]) && void 0 !== Jd ? Jd : "") === dd.before
```

#### 821. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14823` → after: `L14823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14823) · [Before (L14823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14823)

```diff
-             XS: "//export",
+             IC: "//export",
```

#### 822. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14868` → after: `L14868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14868) · [Before (L14868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14868)

```diff
-             targetKey: za.g.key,
+             targetKey: bK.d.key,
```

#### 823. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14871` → after: `L14871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14871) · [Before (L14871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14871)

```diff
-           }, kb(za.g)
+           }, zd(bK.d)
```

#### 824. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14891` → after: `L14891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14891) · [Before (L14891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14891)

```diff
-             targetKey: za.g.key,
+             targetKey: bK.d.key,
```

#### 825. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14897` → after: `L14897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14897) · [Before (L14897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14897)

```diff
-           }), kb(za.g)
+           }), zd(bK.d)
```

#### 826. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14915` → after: `L14915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14915) · [Before (L14915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14915)

```diff
-             } : bb.result), Bb = null !== (Ob = bb.worldCodeFiles) && void 0 !== Ob ? Ob : Bb
+             } : dd.result), pd = null !== (Nd = dd.worldCodeFiles) && void 0 !== Nd ? Nd : pd
```

#### 827. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14925-L14926` → after: `L14925-L14926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14925-L14926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14925-L14926) · [Before (L14925-L14926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14925-L14926)

```diff
-           viewChunk: null !== Fb && void 0 !== Fb ? Fb : zH,
-           viewGameState: null !== fb && void 0 !== fb ? fb : gH,
+           viewChunk: null !== td && void 0 !== td ? td : jo,
+           viewGameState: null !== Vd && void 0 !== Vd ? Vd : Xo,
```

#### 828. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14929` → after: `L14929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14929) · [Before (L14929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14929)

```diff
-             if ("" === bb.trim()) return `No url was given: give ${Ab.i}, or a page it links to.`;
+             if ("" === dd.trim()) return `No url was given: give ${Rd.i}, or a page it links to.`;
```

#### 829. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14931-L14934` → after: `L14931-L14934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14931-L14934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14931-L14934) · [Before (L14931-L14934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14931-L14934)

```diff
-             if (null === Bb) return bb.includes(Ab.d) ? `${bb} is every page at once, too long to read: read ${Ab.i}, then the page you need.` : `Only Bloxd's docs can be read: ${Ab.i} and the pages it links to.`;
-             const Ob = `There is no docs page at ${bb}. ${Ab.i} lists every page with its link.`,
-               Gb = `${bb} couldn't be read just now. Use get_docs instead.`,
-               Ub = (0, lb.d)(2e4, hb);
+             if (null === pd) return dd.includes(Rd.g) ? `${dd} is every page at once, too long to read: read ${Rd.i}, then the page you need.` : `Only Bloxd's docs can be read: ${Rd.i} and the pages it links to.`;
+             const Nd = `There is no docs page at ${dd}. ${Rd.i} lists every page with its link.`,
+               Wd = `${dd} couldn't be read just now. Use get_docs instead.`,
+               Pd = (0, Id.b)(2e4, kd);
```

#### 830. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14938` → after: `L14938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14938) · [Before (L14938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14938)

```diff
-               const bb = await fetch(`${ub}${Bb}`, {
+               const dd = await fetch(`${Jd}${pd}`, {
```

#### 831. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14950-L14951` → after: `L14950-L14951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14950-L14951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14950-L14951) · [Before (L14950-L14951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14950-L14951)

```diff
-             const Sb = (0, Ab.z)(Bb);
-             return null !== Sb && null === Sb.part && Lb.length > Ab.c ? `${bb} is too long to read whole: read the part you need. Its parts start at ${ob.d}${(0,Ab.s)(Sb.name,0)}, and ${Ab.i} says what each part has.` : Lb.length <= 4e4 ? Lb : (console.warn("AI Helper: a docs fi … [truncated]
+             const Cd = (0, Rd.y)(pd);
+             return null !== Cd && null === Cd.part && Zd.length > Rd.d ? `${dd} is too long to read whole: read the part you need. Its parts start at ${ed.b}${(0,Rd.s)(Cd.name,0)}, and ${Rd.i} says what each part has.` : Zd.length <= 4e4 ? Zd : (console.warn("AI Helper: a docs fi … [truncated]
```

#### 832. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14959-L14961` → after: `L14959-L14961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14959-L14961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14959-L14961) · [Before (L14959-L14961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14959-L14961)

```diff
-             lookups: [...(null !== (hb = ub.options.lookups) && void 0 !== hb ? hb : []).map(HH), ...Yb],
-             worldCodeFiles: null !== (Bb = Lb.worldCodeFiles) && void 0 !== Bb ? Bb : ub.options.worldCodeFiles,
-             viewedPaths: [...null !== (Ob = ub.options.viewedPaths) && void 0 !== Ob ? Ob : [], ...Sb]
+             lookups: [...(null !== (kd = Jd.options.lookups) && void 0 !== kd ? kd : []).map(eo), ...gd],
+             worldCodeFiles: null !== (pd = Zd.worldCodeFiles) && void 0 !== pd ? pd : Jd.options.worldCodeFiles,
+             viewedPaths: [...null !== (Nd = Jd.options.viewedPaths) && void 0 !== Nd ? Nd : [], ...Cd]
```

#### 833. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14977` → after: `L14977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14977) · [Before (L14977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14977)

```diff
-           trialErrors: null !== hb && void 0 !== hb ? hb : Bb.trialErrors
+           trialErrors: null !== kd && void 0 !== kd ? kd : pd.trialErrors
```

#### 834. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14990` → after: `L14990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14990) · [Before (L14990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14990)

```diff
-         Zh(), (0, aS.d)(qb)
+         Ok(), (0, QC.c)(cd)
```

#### 835. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14993-L14994` → after: `L14993-L14994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14993-L14994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14993-L14994) · [Before (L14993-L14994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14993-L14994)

```diff
-       if (!Tb || void 0 === (null === Lh || void 0 === Lh ? void 0 : Lh.endedAt) || (null === Sh || void 0 === Sh ? void 0 : Sh.target.key) !== Pb.key) return void(void 0 === (null === Lh || void 0 === Lh ? void 0 : Lh.endedAt) || Sh || (0, aS.p)(qb));
-       const bb = (0, aS.p)(qb);
+       if (!Hd || void 0 === (null === gk || void 0 === gk ? void 0 : gk.endedAt) || (null === Kk || void 0 === Kk ? void 0 : Kk.target.key) !== Ed.key) return void(void 0 === (null === gk || void 0 === gk ? void 0 : gk.endedAt) || Kk || (0, QC.m)(cd));
+       const dd = (0, QC.m)(cd);
```

#### 836. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14996` → after: `L14996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L14996) · [Before (L14996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L14996)

```diff
-       const ub = (0, aS.A)(bb);
+       const Jd = (0, QC.x)(dd);
```

#### 837. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15007` → after: `L15007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15007) · [Before (L15007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15007)

```diff
-         text: (0, aS.x)(bb.errors),
+         text: (0, QC.v)(dd.errors),
```

#### 838. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15016` → after: `L15016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15016) · [Before (L15016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15016)

```diff
-           forgetStatus: ub ? "forgotten" : "HZ"
+           forgetStatus: Jd ? "forgotten" : "qQ"
```

#### 839. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15018` → after: `L15018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15018) · [Before (L15018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15018)

```diff
-         for (const ub of null !== (hb = bb.forgetNotes) && void 0 !== hb ? hb : []) {
+         for (const Jd of null !== (kd = dd.forgetNotes) && void 0 !== kd ? kd : []) {
```

#### 840. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15038` → after: `L15038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15038) · [Before (L15038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15038)

```diff
-             const Lb = new Map(gS(null !== (Bb = bb[Ob]) && void 0 !== Bb ? Bb : "").map((bb => [bb.key, bb.value]))),
+             const Zd = new Map(SC(null !== (pd = dd[Nd]) && void 0 !== pd ? pd : "").map((dd => [dd.key, dd.value]))),
```

#### 841. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15044` → after: `L15044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15044) · [Before (L15044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15044)

```diff
-               ub && ub.value !== hb && Yb.get(bb) === ub.value && (Sb = null !== (ab = iS(Sb, ub, hb)) && void 0 !== ab ? ab : Sb)
+               Jd && Jd.value !== kd && gd.get(dd) === Jd.value && (Cd = null !== (Kd = jC(Cd, Jd, kd)) && void 0 !== Kd ? Kd : Cd)
```

#### 842. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15060` → after: `L15060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15060) · [Before (L15060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15060)

```diff
-           return ub.length > 0 ? eS(ub, "undoing") : 0 === bb.length ? "Before undoing settings" : `Before undoing settings: ${(bb.length>3?[...bb.slice(0,3),bb.length-3+" more"]:bb).join(", ")}`
+           return Jd.length > 0 ? UC(Jd, "undoing") : 0 === dd.length ? "Before undoing settings" : `Before undoing settings: ${(dd.length>3?[...dd.slice(0,3),dd.length-3+" more"]:dd).join(", ")}`
```

#### 843. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15071` → after: `L15071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15071) · [Before (L15071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15071)

```diff
-         (0, uS.B)("aiNotes", !ub)
+         (0, NC.D)("aiNotes", !Jd)
```

#### 844. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15073` → after: `L15073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15073) · [Before (L15073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15073)

```diff
-         (0, uS.B)("aiGameSettings", hb)
+         (0, NC.D)("aiGameSettings", kd)
```

#### 845. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15075-L15076` → after: `L15075-L15076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15075-L15076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15075-L15076) · [Before (L15075-L15076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15075-L15076)

```diff
-         (0, uS.B)("aiEdits", Ob)
-       }), [Ob]), (0, hS.k)("aiHelperOverview")
+         (0, NC.D)("aiEdits", Nd)
+       }), [Nd]), (0, WC.j)("aiHelperOverview")
```

#### 846. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15114-L15115` → after: `L15114-L15115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15114-L15115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15114-L15115) · [Before (L15114-L15115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15114-L15115)

```diff
-       return null !== (ub = null !== (hb = null === Bb || void 0 === Bb ? void 0 : Bb.about) && void 0 !== hb ? hb : null === Bb || void 0 === Bb ? void 0 : Bb.text) && void 0 !== ub ? ub : "a change"
-     }, gB = Uu.filter(gh), iB = null === (Kb = gB[gB.length - 1]) || void 0 === Kb ? void 0 : Kb.id, vB = null !== (Cb = null === (db = gB.findLast((bb => "user" === bb.role))) || void 0 === db ? void 0 : db.id) && void 0 !== Cb ? Cb : 0, tB = gB.length < Uu.length, JB = gB[gB.le … [truncated]
+       return null !== (Jd = null !== (kd = null === pd || void 0 === pd ? void 0 : pd.about) && void 0 !== kd ? kd : null === pd || void 0 === pd ? void 0 : pd.text) && void 0 !== Jd ? Jd : "a change"
+     }, bp = ZJ.filter(bk), Sp = null === (Gd = bp[bp.length - 1]) || void 0 === Gd ? void 0 : Gd.id, jp = null !== (xd = null === (qd = bp.findLast((dd => "user" === dd.role))) || void 0 === qd ? void 0 : qd.id) && void 0 !== xd ? xd : 0, Xp = bp.length < ZJ.length, fp = bp[bp.le … [truncated]
```

#### 847. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15198` → after: `L15198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15198) · [Before (L15198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15198)

```diff
-           bb.nextAt = Date.now() + (null !== (Bb = ub[bb.count]) && void 0 !== Bb ? Bb : 0), bb.count++, SL.refresh().then((() => {
+           dd.nextAt = Date.now() + (null !== (pd = Jd[dd.count]) && void 0 !== pd ? pd : 0), dd.count++, lZ.refresh().then((() => {
```

#### 848. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15213` → after: `L15213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15213) · [Before (L15213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15213)

```diff
-     const VB = mB ? `${mB.id}/${mB.model.id}` : null;
+     const Vp = Tp ? `${Tp.id}/${Tp.model.id}` : null;
```

#### 849. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15219` → after: `L15219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15219) · [Before (L15219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15219)

```diff
-       TB = "aiAnswer" === dB || ("aiNotes" === dB || "aiGameSettings" === dB || "aiGear" === dB) && fB ? dB : "aiPanel",
+       Ap = "aiAnswer" === sp || ("aiNotes" === sp || "aiGameSettings" === sp || "aiGear" === sp) && Hp ? sp : "aiPanel",
```

#### 850. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15228` → after: `L15228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15228) · [Before (L15228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15228)

```diff
-         null === (bb = (du ? cB : RB).current) || void 0 === bb || bb.focus()
+         null === (dd = (BJ ? dN : kN).current) || void 0 === dd || dd.focus()
```

#### 851. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15303` → after: `L15303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15303) · [Before (L15303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15303)

```diff
-           children: "settings" === du ? "AI settings" : zu ? `Edit ${VU(zu)} key` : "Add an API key"
+           children: "settings" === BJ ? "AI settings" : YJ ? `Edit ${VP(YJ)} key` : "Add an API key"
```

#### 852. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15308` → after: `L15308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15308) · [Before (L15308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15308)

```diff
-             children: ["Using:", " ", mB ? ju ? "Bot.xd (free) for the next question" : US(mB) : qB ? BL : "Bot.xd (free)"]
+             children: ["Using:", " ", Tp ? iJ ? "Bot.xd (free) for the next question" : CC(Tp) : hp ? PZ : "Bot.xd (free)"]
```

#### 853. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15394` → after: `L15394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15394) · [Before (L15394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15394)

```diff
-                   return null !== (ub = bb.note) && void 0 !== ub ? ub : ""
+                   return null !== (Jd = dd.note) && void 0 !== Jd ? Jd : ""
```

#### 854. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15410` → after: `L15410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15410) · [Before (L15410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15410)

```diff
-                 forgetNotes: Gb.length > 0 ? Gb : void 0
+                 forgetNotes: Wd.length > 0 ? Wd : void 0
```

#### 855. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15422` → after: `L15422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15422) · [Before (L15422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15422)

```diff
-                 Sb = void 0 !== Yb && (null !== (Bb = Lb[bb]) && void 0 !== Bb ? Bb : "") === ZB.current[bb] ? {
+                 Cd = void 0 !== gd && (null !== (pd = Zd[dd]) && void 0 !== pd ? pd : "") === Op.current[dd] ? {
```

#### 856. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15426` → after: `L15426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15426) · [Before (L15426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15426)

```diff
-                 ab = iS(null !== (Ob = Sb[bb]) && void 0 !== Ob ? Ob : "", ub, hb);
+                 Kd = jC(null !== (Nd = Cd[dd]) && void 0 !== Nd ? Nd : "", Jd, kd);
```

#### 857. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15434-L15435` → after: `L15434-L15435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15434-L15435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15434-L15435) · [Before (L15434-L15435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15434-L15435)

```diff
-                 wb = `${bb}:${ub.key}`,
-                 Zb = null !== (Gb = AB.current.get(wb)) && void 0 !== Gb ? Gb : ub.value;
+                 ld = `${dd}:${Jd.key}`,
+                 Qd = null !== (Wd = Gp.current.get(ld)) && void 0 !== Wd ? Wd : Jd.value;
```

#### 858. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15459` → after: `L15459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15459) · [Before (L15459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15459)

```diff
-               return pB.current.includes(Hb) || pB.current.push(Hb), ZB.current[bb] = null !== (Ub = Sb[bb]) && void 0 !== Ub ? Ub : "", wB.current[bb] = ab, Ah.current = Date.now(), !0
+               return Rp.current.includes(od) || Rp.current.push(od), Op.current[dd] = null !== (Pd = Cd[dd]) && void 0 !== Pd ? Pd : "", Lp.current[dd] = Kd, Gk.current = Date.now(), !0
```

#### 859. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15486` → after: `L15486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15486) · [Before (L15486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15486)

```diff
-           editing: null !== zu && void 0 !== zu ? zu : void 0,
+           editing: null !== YJ && void 0 !== YJ ? YJ : void 0,
```

#### 860. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15493` → after: `L15493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15493) · [Before (L15493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15493)

```diff
-         }, null !== (jb = null === zu || void 0 === zu ? void 0 : zu.id) && void 0 !== jb ? jb : "new"), lu && (0, Ub.jsx)(WS, {
+         }, null !== (sd = null === YJ || void 0 === YJ ? void 0 : YJ.id) && void 0 !== sd ? sd : "new"), GJ && (0, Pd.jsx)(BC, {
```

#### 861. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15496` → after: `L15496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15496) · [Before (L15496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15496)

```diff
-           UW: rB,
+           QG: ip,
```

#### 862. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15514` → after: `L15514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15514) · [Before (L15514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15514)

```diff
-                 Nh(aS.u, iH, {
+                 Uk(QC.s, fo, {
```

#### 863. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15526` → after: `L15526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15526) · [Before (L15526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15526)

```diff
-               className: Gb()("WorldCodeAiEntry", `WorldCodeAiEntry-${bb.role}`, {
+               className: Wd()("WorldCodeAiEntry", `WorldCodeAiEntry-${dd.role}`, {
```

#### 864. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15557` → after: `L15557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15557) · [Before (L15557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15557)

```diff
-                         files: null !== (ub = bb.undoFiles) && void 0 !== ub ? ub : {}
+                         files: null !== (Jd = dd.undoFiles) && void 0 !== Jd ? Jd : {}
```

#### 865. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15572` → after: `L15572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15572) · [Before (L15572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15572)

```diff
-                         return (null !== (ub = Ob[bb.path]) && void 0 !== ub ? ub : "") === bb.after
+                         return (null !== (Jd = Nd[dd.path]) && void 0 !== Jd ? Jd : "") === dd.after
```

#### 866. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15601` → after: `L15601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15601) · [Before (L15601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15601)

```diff
-                       children: bb.forgetNotes.map((bb => `"${bb}"`)).join(", ")
+                       children: dd.forgetNotes.map((dd => `"${dd}"`)).join(", ")
```

#### 867. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15629` → after: `L15629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15629) · [Before (L15629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15629)

```diff
-                   return (null !== (ub = ib[bb.path]) && void 0 !== ub ? ub : "") !== bb.before
+                   return (null !== (Jd = bd[dd.path]) && void 0 !== Jd ? Jd : "") !== dd.before
```

#### 868. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15631` → after: `L15631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15631) · [Before (L15631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15631)

```diff
-                 canEdit: pb ? tb : !!kb && (!bb.target.codeBlock || bb.target.canChangePos),
+                 canEdit: Od ? jd : !!zd && (!dd.target.codeBlock || dd.target.canChangePos),
```

#### 869. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15647` → after: `L15647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15647) · [Before (L15647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15647)

```diff
-                 checkPicked: pb ? HB : void 0,
+                 checkPicked: Od ? Qp : void 0,
```

#### 870. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15660` → after: `L15660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15660) · [Before (L15660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15660)

```diff
-                         return (null !== (hb = ub[bb.path]) && void 0 !== hb ? hb : "") !== bb.after
+                         return (null !== (kd = Jd[dd.path]) && void 0 !== kd ? kd : "") !== dd.after
```

#### 871. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15677` → after: `L15677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15677) · [Before (L15677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15677)

```diff
-                   return (null !== (ub = ib[bb.path]) && void 0 !== ub ? ub : "") === bb.after
+                   return (null !== (Jd = bd[dd.path]) && void 0 !== Jd ? Jd : "") === dd.after
```

#### 872. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15683` → after: `L15683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15683) · [Before (L15683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15683)

```diff
-                     if (!ub) return void Nh(`Fix this in your change: ${null===(hb=bb.warnings)||void 0===hb?void 0:hb.join(" ")}`);
+                     if (!Jd) return void Uk(`Fix this in your change: ${null===(kd=dd.warnings)||void 0===kd?void 0:kd.join(" ")}`);
```

#### 873. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15697` → after: `L15697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15697) · [Before (L15697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15697)

```diff
-                       text: `Fixed without asking the AI: ${ub.map(WY).join(" ")}`,
+                       text: `Fixed without asking the AI: ${Jd.map(Bg).join(" ")}`,
```

#### 874. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15708` → after: `L15708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15708) · [Before (L15708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15708)

```diff
-                     return ub.length > 0 ? `${sH} These names were checked against the game and are right, so keep them: ${ub.map((bb=>`"${bb}"`)).join(", ")}.` : sH
+                     return Jd.length > 0 ? `${Eo} These names were checked against the game and are right, so keep them: ${Jd.map((dd=>`"${dd}"`)).join(", ")}.` : Eo
```

#### 875. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15711` → after: `L15711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15711) · [Before (L15711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15711)

```diff
-                     return null !== (ub = bb.swappedTo) && void 0 !== ub ? ub : []
+                     return null !== (Jd = dd.swappedTo) && void 0 !== Jd ? Jd : []
```

#### 876. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15714` → after: `L15714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15714) · [Before (L15714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15714)

```diff
-                 busy: pb ? !!au : !Qh
+                 busy: Od ? !!oJ : !dp
```

#### 877. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15720-L15722` → after: `L15720-L15722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15720-L15722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15720-L15722) · [Before (L15720-L15722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15720-L15722)

```diff
-                   const ab = null !== (Bb = null === (Ob = bb.question) || void 0 === Ob ? void 0 : Ob.question) && void 0 !== Bb ? Bb : "",
-                     Hb = null !== (Gb = null === (Ub = bb.askedFor) || void 0 === Ub ? void 0 : Ub.request) && void 0 !== Gb ? Gb : "";
-                   Nh(jS(Hb, ab, ub), null !== ub && void 0 !== ub ? ub : "Let the AI pick", {
+                   const Kd = null !== (pd = null === (Nd = dd.question) || void 0 === Nd ? void 0 : Nd.question) && void 0 !== pd ? pd : "",
+                     od = null !== (Wd = null === (Pd = dd.askedFor) || void 0 === Pd ? void 0 : Pd.request) && void 0 !== Wd ? Wd : "";
+                   Uk(MC(od, Kd, Jd), null !== Jd && void 0 !== Jd ? Jd : "Let the AI pick", {
```

#### 878. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15725-L15726` → after: `L15725-L15726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15725-L15726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15725-L15726) · [Before (L15725-L15726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15725-L15726)

```diff
-                     asked: hb && ub ? `${Hb} ${ub}` : null,
-                     guardWords: jS(null !== (Yb = null === (Sb = bb.askedFor) || void 0 === Sb ? void 0 : Sb.guardWords) && void 0 !== Yb ? Yb : "", ab, ub)
+                     asked: kd && Jd ? `${od} ${Jd}` : null,
+                     guardWords: MC(null !== (gd = null === (Cd = dd.askedFor) || void 0 === Cd ? void 0 : Cd.guardWords) && void 0 !== gd ? gd : "", Kd, Jd)
```

#### 879. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15739-L15740` → after: `L15739-L15740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15739-L15740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15739-L15740) · [Before (L15739-L15740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15739-L15740)

```diff
-                 built: null !== (Yb = bb.planBuilt) && void 0 !== Yb ? Yb : 0,
-                 done: null !== (ab = bb.planDone) && void 0 !== ab ? ab : 0,
+                 built: null !== (gd = dd.planBuilt) && void 0 !== gd ? gd : 0,
+                 done: null !== (Kd = dd.planDone) && void 0 !== Kd ? Kd : 0,
```

#### 880. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15743` → after: `L15743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15743) · [Before (L15743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15743)

```diff
-                   const Bb = null !== (hb = bb.plan) && void 0 !== hb ? hb : [];
+                   const pd = null !== (kd = dd.plan) && void 0 !== kd ? kd : [];
```

#### 881. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15748-L15750` → after: `L15748-L15750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15748-L15750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15748-L15750) · [Before (L15748-L15750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15748-L15750)

```diff
-                       const hb = bb.map(((bb, hb) => `${hb+1}. ${bb}${hb<ub?" (built)":""}`)).join("\n");
-                       return `Build step ${ub+1} of our plan now: ${bb[ub]}\nThe whole plan:\n${hb}\nBuild only step ${ub+1}, keeping what earlier steps built, so I can try it before the next.`
-                     }(Bb, ub), `Build step ${ub+1}: ${Bb[ub]}`, {
+                       const kd = dd.map(((dd, kd) => `${kd+1}. ${dd}${kd<Jd?" (built)":""}`)).join("\n");
+                       return `Build step ${Jd+1} of our plan now: ${dd[Jd]}\nThe whole plan:\n${kd}\nBuild only step ${Jd+1}, keeping what earlier steps built, so I can try it before the next.`
+                     }(pd, Jd), `Build step ${Jd+1}: ${pd[Jd]}`, {
```

#### 882. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15768` → after: `L15768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15768) · [Before (L15768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15768)

```diff
-               }, "asked" === bb.noteStatus ? "asked" : "HZ"), !Ab && Kb, bb.lookups && (0, Ub.jsx)(EH, {
+               }, "asked" === dd.noteStatus ? "asked" : "qQ"), !Rd && Gd, dd.lookups && (0, Pd.jsx)(Vo, {
```

#### 883. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15809` → after: `L15809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15809) · [Before (L15809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15809)

```diff
-                   yb(yH(null !== (ub = bb.worldCode) && void 0 !== ub ? ub : []))
+                   rd(zo(null !== (Jd = dd.worldCode) && void 0 !== Jd ? Jd : []))
```

#### 884. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15811` → after: `L15811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15811) · [Before (L15811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15811)

```diff
-               }), pb && "ask" === bb.trial && bb.id > vB && eb <= (null !== (Hb = bb.trialErrors) && void 0 !== Hb ? Hb : 0) && (0, Ub.jsxs)("div", {
+               }), Od && "ask" === dd.trial && dd.id > jp && fd <= (null !== (od = dd.trialErrors) && void 0 !== od ? od : 0) && (0, Pd.jsxs)("div", {
```

#### 885. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15876` → after: `L15876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15876) · [Before (L15876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15876)

```diff
-                   ...CY.h,
+                   ...sg.e,
```

#### 886. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15878` → after: `L15878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15878) · [Before (L15878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15878)

```diff
-                   disabled: (null !== (wb = bb.retryAt) && void 0 !== wb ? wb : 0) > Qu,
+                   disabled: (null !== (ld = dd.retryAt) && void 0 !== ld ? ld : 0) > AJ,
```

#### 887. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15881` → after: `L15881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15881) · [Before (L15881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15881)

```diff
-                     Nh(null !== (ub = bb.retry) && void 0 !== ub ? ub : "", bb.retryShown, {
+                     Uk(null !== (Jd = dd.retry) && void 0 !== Jd ? Jd : "", dd.retryShown, {
```

#### 888. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15886` → after: `L15886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15886) · [Before (L15886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15886)

```diff
-                   children: (null !== (Zb = bb.retryAt) && void 0 !== Zb ? Zb : 0) > Qu ? `Try again in ${VH((null!==(Xb=bb.retryAt)&&void 0!==Xb?Xb:0)-Qu)}` : "Try again"
+                   children: (null !== (Qd = dd.retryAt) && void 0 !== Qd ? Qd : 0) > AJ ? `Try again in ${Ho((null!==(Ld=dd.retryAt)&&void 0!==Ld?Ld:0)-AJ)}` : "Try again"
```

#### 889. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15891` → after: `L15891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15891) · [Before (L15891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15891)

```diff
-                     Nh(null !== (ub = bb.retry) && void 0 !== ub ? ub : "", bb.retryShown, {
+                     Uk(null !== (Jd = dd.retry) && void 0 !== Jd ? Jd : "", dd.retryShown, {
```

#### 890. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15915` → after: `L15915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15915) · [Before (L15915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15915)

```diff
-               title: null !== (Wb = bb.logTitle) && void 0 !== Wb ? Wb : bb.isCalm ? "Update" : "Problem",
+               title: null !== (vd = dd.logTitle) && void 0 !== vd ? vd : dd.isCalm ? "Update" : "Problem",
```

#### 891. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15933` → after: `L15933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15933) · [Before (L15933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15933)

```diff
-               ...CY.h,
+               ...sg.e,
```

#### 892. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15940` → after: `L15940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15940) · [Before (L15940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15940)

```diff
-               ...CY.h,
+               ...sg.e,
```

#### 893. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15946-L15947` → after: `L15946-L15947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15946-L15947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15946-L15947) · [Before (L15946-L15947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15946-L15947)

```diff
-             }), (tb ? uu ? CH : WH : []).map((bb => (0, Bb.createElement)("button", {
-               ...CY.h,
+             }), (jd ? kJ ? ao : io : []).map((dd => (0, pd.createElement)("button", {
+               ...sg.e,
```

#### 894. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15956` → after: `L15956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15956) · [Before (L15956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15956)

```diff
-             children: [mB ? Du ? `Bloxd's safety check first makes sure your request is about your game, then it goes with your code to ${mB.model.name} with your key.` : `Your request goes with your code to ${mB.model.name} with your key, without Bloxd's safety check.` : qB ? "d … [truncated]
+             children: [Tp ? MJ ? `Bloxd's safety check first makes sure your request is about your game, then it goes with your code to ${Tp.model.name} with your key.` : `Your request goes with your code to ${Tp.model.name} with your key, without Bloxd's safety check.` : hp ? "d … [truncated]
```

#### 895. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15975` → after: `L15975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15975) · [Before (L15975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15975)

```diff
-                 title: null !== (Db = FH(au)) && void 0 !== Db ? Db : "Thinking\u2026",
+                 title: null !== (Md = wo(oJ)) && void 0 !== Md ? Md : "Thinking\u2026",
```

#### 896. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15979` → after: `L15979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R15979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L15979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/89.js#L15979) · [Before (L15979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/89.js#L15979)

```diff
-                   children: [Wa((null !== (xb = au.until) && void 0 !== xb ? xb : Qu) - Qu), " Lots of people share Bot.xd."]
+                   children: [BK((null !== (Fd = oJ.until) && void 0 !== Fd ? Fd : AJ) - AJ), " Lots of people share Bot.xd."]
```
