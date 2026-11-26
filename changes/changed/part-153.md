# Changed — Bundle Modifications Report (Part 153 / 154)

- **Updated at**: `2026-11-27T02:11 JST`
- **Part**: `153 / 154` (**407** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 152](part-152.md) · [Part 154 →](part-154.md)

## `bloxd.io` · `bundles/bloxd.io/main.js` (cwj32u.ae3e40c2 → gw4e3a.937868ec · continued)

- **File**: `bundles/bloxd.io/main.js` (1758 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6)

#### 1309. `bundles/bloxd.io/main.js` (Changed code · before: `L22647-L22648` → after: `L22659-L22660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22659-L22660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22659-L22660) · [Before (L22647-L22648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22647-L22648)

```diff
-                   const LH = null !== (HH = this.userContexts.get(this.currentUserContextType)) && void 0 !== HH ? HH : wB;
-                   (0, PB.i)(null !== (BH = this.userContexts.get(this.currentUserContextType)) && void 0 !== BH ? BH : null), vH.k.AX("userContextUpdated", LH), this.isCurrentUserContextUpdating = !1, this.shouldPublishUpdate = !1, null !== this.currentUserContextType && this.onC … [truncated]
+                   const GB = null !== (BB = this.userContexts.get(this.currentUserContextType)) && void 0 !== BB ? BB : eO;
+                   (0, AO.i)(null !== (OB = this.userContexts.get(this.currentUserContextType)) && void 0 !== OB ? OB : null), WB.o.tM("userContextUpdated", GB), this.isCurrentUserContextUpdating = !1, this.shouldPublishUpdate = !1, null !== this.currentUserContextType && this.onC … [truncated]
```

#### 1310. `bundles/bloxd.io/main.js` (Changed code · before: `L22658` → after: `L22670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22670) · [Before (L22658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22658)

```diff
-                   return null !== (HH = this.userContexts.get(this.currentUserContextType)) && void 0 !== HH ? HH : null
+                   return null !== (BB = this.userContexts.get(this.currentUserContextType)) && void 0 !== BB ? BB : null
```

#### 1311. `bundles/bloxd.io/main.js` (Changed code · before: `L22660` → after: `L22672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22672) · [Before (L22660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22660)

```diff
-                 loadGuest: () => this.getOrCreateUserContext(zH.d.ANONYMOUS, gB.LOGIN),
+                 loadGuest: () => this.getOrCreateUserContext(yB.b.ANONYMOUS, rO.LOGIN),
```

#### 1312. `bundles/bloxd.io/main.js` (Changed code · before: `L22665` → after: `L22677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22677) · [Before (L22665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22665)

```diff
-                   const AH = await this.getOrCreateUserContext(zH.d.ANONYMOUS, gB.LOGIN);
+                   const YB = await this.getOrCreateUserContext(yB.b.ANONYMOUS, rO.LOGIN);
```

#### 1313. `bundles/bloxd.io/main.js` (Changed code · before: `L22679` → after: `L22691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22691) · [Before (L22679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22679)

```diff
-                   this.userContexts.set(HH.type, HH), IH.e.setItem("recentlyPlayedGames", HH.getRecentlyPlayedGames()), this.updateCurrentUserContext(HH.type)
+                   this.userContexts.set(BB.type, BB), uB.g.setItem("recentlyPlayedGames", BB.getRecentlyPlayedGames()), this.updateCurrentUserContext(BB.type)
```

#### 1314. `bundles/bloxd.io/main.js` (Changed code · before: `L22693` → after: `L22705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22705) · [Before (L22693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22693)

```diff
-               this.isCurrentUserContextUpdating || (this.isCurrentUserContextUpdating = !0, vH.k.AX("userContextIsUpdating"))
+               this.isCurrentUserContextUpdating || (this.isCurrentUserContextUpdating = !0, WB.o.tM("userContextIsUpdating"))
```

#### 1315. `bundles/bloxd.io/main.js` (Changed code · before: `L22712` → after: `L22724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22724) · [Before (L22712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22712)

```diff
-               return await this.synchronize((async () => this.currentUserContextType !== zH.d.ANONYMOUS ? (console.log("CrazyGames login on CrazyGames ignored: the player is", this.currentUserContextType), "done") : this.hadCrazyGamesUser ? (console.log("CrazyGames login on Crazy … [truncated]
+               return await this.synchronize((async () => this.currentUserContextType !== yB.b.ANONYMOUS ? (console.log("CrazyGames login on CrazyGames ignored: the player is", this.currentUserContextType), "done") : this.hadCrazyGamesUser ? (console.log("CrazyGames login on Crazy … [truncated]
```

#### 1316. `bundles/bloxd.io/main.js` (Changed code · before: `L22718` → after: `L22730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22730) · [Before (L22718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22718)

```diff
-                 throw console.error(`Failed to set current user context to ${HH}:`, BH.message), wH.i.reloadIfScheduled(), this.currentUserContextType === HH ? this.updateCurrentUserContext(null) : this.updateCurrentUserContext(this.currentUserContextType), BH
+                 throw console.error(`Failed to set current user context to ${BB}:`, OB.message), eB.f.reloadIfScheduled(), this.currentUserContextType === BB ? this.updateCurrentUserContext(null) : this.updateCurrentUserContext(this.currentUserContextType), OB
```

#### 1317. `bundles/bloxd.io/main.js` (Changed code · before: `L22730` → after: `L22742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22742) · [Before (L22730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22730)

```diff
-               null !== BH && (0, EH.e)(BH) && await HL().refresh.refreshIfDue(BH, this.userContexts.get(BH));
+               null !== OB && (0, MB.d)(OB) && await BG().refresh.refreshIfDue(OB, this.userContexts.get(OB));
```

#### 1318. `bundles/bloxd.io/main.js` (Changed code · before: `L22733` → after: `L22745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22745) · [Before (L22733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22733)

```diff
-                 if ((0, EH.e)(this.currentUserContextType)) return this.userContexts.get(this.currentUserContextType);
+                 if ((0, MB.d)(this.currentUserContextType)) return this.userContexts.get(this.currentUserContextType);
```

#### 1319. `bundles/bloxd.io/main.js` (Changed code · before: `L22739` → after: `L22751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22751) · [Before (L22739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22739)

```diff
-                   throw console.error("Failed to get current user context:", HH.message), wH.i.reloadIfScheduled(), this.updateCurrentUserContext(null), HH
+                   throw console.error("Failed to get current user context:", BB.message), eB.f.reloadIfScheduled(), this.updateCurrentUserContext(null), BB
```

#### 1320. `bundles/bloxd.io/main.js` (Changed code · before: `L22761` → after: `L22773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22773) · [Before (L22761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22761)

```diff
-               return null !== (LH = this.tryGetUserContext(HH)) && void 0 !== LH ? LH : await this.createUserContext(HH, BH, AH)
+               return null !== (GB = this.tryGetUserContext(BB)) && void 0 !== GB ? GB : await this.createUserContext(BB, OB, YB)
```

#### 1321. `bundles/bloxd.io/main.js` (Changed code · before: `L22765` → after: `L22777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22777) · [Before (L22765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22765)

```diff
-               return BH && !((0, EH.e)(HH) ? BH.isPastHardExpiry() : BH.hasExpired()) ? BH : null
+               return OB && !((0, MB.d)(BB) ? OB.isPastHardExpiry() : OB.hasExpired()) ? OB : null
```

#### 1322. `bundles/bloxd.io/main.js` (Changed code · before: `L22770-L22771` → after: `L22782-L22783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22782-L22783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22782-L22783) · [Before (L22770-L22771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22770-L22771)

```diff
-               if (BH === gB.LINK && HH === this.currentUserContextType) throw new Error(`Cannot link to the same user context type: ${HH}`);
-               if ((0, EH.e)(HH)) throw new Error(`${HH} logs in only through GameAccountLogin`);
+               if (OB === rO.LINK && BB === this.currentUserContextType) throw new Error(`Cannot link to the same user context type: ${BB}`);
+               if ((0, MB.d)(BB)) throw new Error(`${BB} logs in only through GameAccountLogin`);
```

#### 1323. `bundles/bloxd.io/main.js` (Changed code · before: `L22775` → after: `L22787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22787) · [Before (L22775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22775)

```diff
-                       return this.getOrCreateUserContext(zH.d.ANONYMOUS, BH);
+                       return this.getOrCreateUserContext(yB.b.ANONYMOUS, OB);
```

#### 1324. `bundles/bloxd.io/main.js` (Changed code · before: `L22780` → after: `L22792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22792) · [Before (L22780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22780)

```diff
-                 SH = HH === zH.d.CRAZY_GAMES;
+                 QB = BB === yB.b.CRAZY_GAMES;
```

#### 1325. `bundles/bloxd.io/main.js` (Changed code · before: `L22783` → after: `L22795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22795) · [Before (L22783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22783)

```diff
-                   case zH.d.ANONYMOUS:
+                   case yB.b.ANONYMOUS:
```

#### 1326. `bundles/bloxd.io/main.js` (Changed code · before: `L22785-L22787` → after: `L22797-L22799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22797-L22799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22797-L22799) · [Before (L22785-L22787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22785-L22787)

```diff
-                   case zH.d.GOOGLE:
-                   case zH.d.APPLE:
-                   case zH.d.MICROSOFT: {
+                   case yB.b.GOOGLE:
+                   case yB.b.APPLE:
+                   case yB.b.MICROSOFT: {
```

#### 1327. `bundles/bloxd.io/main.js` (Changed code · before: `L22790` → after: `L22802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22802) · [Before (L22790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22790)

```diff
-                         const LH = await gH.k.firebase();
+                         const GB = await rB.i.firebase();
```

#### 1328. `bundles/bloxd.io/main.js` (Changed code · before: `L22808` → after: `L22820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22820) · [Before (L22808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22808)

```diff
-                           return AH ? "auth/popup-closed-by-user" === LH.code || "auth/cancelled-popup-request" === LH.code ? (SH = !1, rH = LH.code, hH = "xB") : (rH = (0, WB.x)(LH.code.replace("auth/", "").replaceAll("-", " ")), "auth/popup-blocked" === LH.code && (hH = "popup_ … [truncated]
+                           return YB ? "auth/popup-closed-by-user" === GB.code || "auth/cancelled-popup-request" === GB.code ? (QB = !1, DB = GB.code, oB = "rB") : (DB = (0, ZO.w)(GB.code.replace("auth/", "").replaceAll("-", " ")), "auth/popup-blocked" === GB.code && (oB = "popup_ … [truncated]
```

#### 1329. `bundles/bloxd.io/main.js` (Changed code · before: `L22822` → after: `L22834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22834) · [Before (L22822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22822)

```diff
-                     return await GL(HH, new eB.c(tH), hH, BH)
+                     return await zG(BB, new LO.d(jB), oB, OB)
```

#### 1330. `bundles/bloxd.io/main.js` (Changed code · before: `L22824` → after: `L22836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22836) · [Before (L22824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22824)

```diff
-                   case zH.d.DISCORD: {
+                   case yB.b.DISCORD: {
```

#### 1331. `bundles/bloxd.io/main.js` (Changed code · before: `L22829` → after: `L22841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22841) · [Before (L22829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22829)

```diff
-                         const BH = await gH.k.discordActivity();
+                         const OB = await rB.i.discordActivity();
```

#### 1332. `bundles/bloxd.io/main.js` (Changed code · before: `L22846` → after: `L22858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22858) · [Before (L22846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22846)

```diff
-                           return await TL(`${jH.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
+                           return await VG(`${EB.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
```

#### 1333. `bundles/bloxd.io/main.js` (Changed code · before: `L22859` → after: `L22871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22871) · [Before (L22859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22859)

```diff
-                             confirmText: (0, nH.n)(rH),
+                             confirmText: (0, cB.u)(DB),
```

#### 1334. `bundles/bloxd.io/main.js` (Changed code · before: `L22874` → after: `L22886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22886) · [Before (L22874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22874)

```diff
-                         const BH = await gH.k.discord(),
+                         const OB = await rB.i.discord(),
```

#### 1335. `bundles/bloxd.io/main.js` (Changed code · before: `L22885` → after: `L22897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22897) · [Before (L22885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22885)

```diff
-                           throw new CL(zH.d.DISCORD, null !== (SH = null === hH || void 0 === hH ? void 0 : hH.error) && void 0 !== SH ? SH : null === hH || void 0 === hH ? void 0 : hH.message, {
+                           throw new JG(yB.b.DISCORD, null !== (QB = null === oB || void 0 === oB ? void 0 : oB.error) && void 0 !== QB ? QB : null === oB || void 0 === oB ? void 0 : oB.message, {
```

#### 1336. `bundles/bloxd.io/main.js` (Changed code · before: `L22888` → after: `L22900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22900) · [Before (L22888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22888)

```diff
-                             failure: HH ? "xB" : "failed"
+                             failure: BB ? "rB" : "failed"
```

#### 1337. `bundles/bloxd.io/main.js` (Changed code · before: `L22899` → after: `L22911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22911) · [Before (L22899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22899)

```diff
-                       if (!HH) throw new CL(zH.d.DISCORD, "No Discord token");
+                       if (!BB) throw new JG(yB.b.DISCORD, "No Discord token");
```

#### 1338. `bundles/bloxd.io/main.js` (Changed code · before: `L22902` → after: `L22914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22914) · [Before (L22902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22902)

```diff
-                         rH = (await gH.k.discordActivity()).getInstanceId()
+                         DB = (await rB.i.discordActivity()).getInstanceId()
```

#### 1339. `bundles/bloxd.io/main.js` (Changed code · before: `L22924` → after: `L22936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22936) · [Before (L22924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22924)

```diff
-                         } = await TL(`${jH.clientSideServerUrls.indexUrl}/index/discord/login`, {
+                         } = await VG(`${EB.clientSideServerUrls.indexUrl}/index/discord/login`, {
```

#### 1340. `bundles/bloxd.io/main.js` (Changed code · before: `L22932` → after: `L22944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22944) · [Before (L22932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22932)

```diff
-                           error: (0, UB.p)(HH, "An error occurred when logging in with Discord! Please report on discord what steps you took to get this error message.")
+                           error: (0, SO.o)(BB, "An error occurred when logging in with Discord! Please report on discord what steps you took to get this error message.")
```

#### 1341. `bundles/bloxd.io/main.js` (Changed code · before: `L22934` → after: `L22946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22946) · [Before (L22934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22934)

```diff
-                       if (WH) throw new CL(zH.d.DISCORD, WH, {
+                       if (ZB) throw new JG(yB.b.DISCORD, ZB, {
```

#### 1342. `bundles/bloxd.io/main.js` (Changed code · before: `L22940` → after: `L22952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22952) · [Before (L22940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22940)

```diff
-                         const BH = await gH.k.discordActivity();
+                         const OB = await rB.i.discordActivity();
```

#### 1343. `bundles/bloxd.io/main.js` (Changed code · before: `L22943-L22944` → after: `L22955-L22956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22955-L22956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22955-L22956) · [Before (L22943-L22944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22943-L22944)

```diff
-                         if (LH instanceof Error) throw new CL(zH.d.DISCORD, `Discord authentication failed: ${LH.message}`);
-                         if (!1 === LH) throw new CL(zH.d.DISCORD, "Discord authentication failed for some unknown reason");
+                         if (GB instanceof Error) throw new JG(yB.b.DISCORD, `Discord authentication failed: ${GB.message}`);
+                         if (!1 === GB) throw new JG(yB.b.DISCORD, "Discord authentication failed for some unknown reason");
```

#### 1344. `bundles/bloxd.io/main.js` (Changed code · before: `L22946` → after: `L22958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22958) · [Before (L22946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22946)

```diff
-                         null !== AH && DH.g.get().setCurrentLanguage(AH)
+                         null !== YB && aB.e.get().setCurrentLanguage(YB)
```

#### 1345. `bundles/bloxd.io/main.js` (Changed code · before: `L22949-L22950` → after: `L22961-L22962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22961-L22962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22961-L22962) · [Before (L22949-L22950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22949-L22950)

```diff
-                       return SH["3PSIDMCPP"] = uH, new DB(zH.d.DISCORD, {
-                         authProvider: zH.g.DISCORD,
+                       return QB["3PSIDMCPP"] = pB, new aO(yB.b.DISCORD, {
+                         authProvider: yB.e.DISCORD,
```

#### 1346. `bundles/bloxd.io/main.js` (Changed code · before: `L22952` → after: `L22964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22964) · [Before (L22952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22952)

```diff
-                       }, tH, CH, EH, SH, QH, XH, !(0, dH.isDiscordClient)(), MH, null !== vH && void 0 !== vH ? vH : [], null !== PH && void 0 !== PH ? PH : null, null !== UH && void 0 !== UH ? UH : null, null !== VH && void 0 !== VH ? VH : [], null !== bH && void 0 !== bH ? bH : … [truncated]
+                       }, jB, JB, MB, QB, qB, PB, !(0, bB.isDiscordClient)(), NB, null !== WB && void 0 !== WB ? WB : [], null !== AB && void 0 !== AB ? AB : null, null !== SB && void 0 !== SB ? SB : null, null !== nB && void 0 !== nB ? nB : [], null !== fB && void 0 !== fB ? fB : … [truncated]
```

#### 1347. `bundles/bloxd.io/main.js` (Changed code · before: `L22955-L22956` → after: `L22967-L22968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22967-L22968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22967-L22968) · [Before (L22955-L22956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22955-L22956)

```diff
-                   case zH.d.CRAZY_GAMES: {
-                     const HH = await gH.k.crazyGames();
+                   case yB.b.CRAZY_GAMES: {
+                     const BB = await rB.i.crazyGames();
```

#### 1348. `bundles/bloxd.io/main.js` (Changed code · before: `L22961-L22962` → after: `L22973-L22974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22973-L22974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22973-L22974) · [Before (L22961-L22962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22961-L22962)

```diff
-                       if (!HH) throw new CL(zH.d.CRAZY_GAMES, "No CrazyGames token");
-                       return await QL(zH.d.CRAZY_GAMES, "/index/crazy-games/context", {
+                       if (!BB) throw new JG(yB.b.CRAZY_GAMES, "No CrazyGames token");
+                       return await qG(yB.b.CRAZY_GAMES, "/index/crazy-games/context", {
```

#### 1349. `bundles/bloxd.io/main.js` (Changed code · before: `L22965` → after: `L22977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22977) · [Before (L22965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22965)

```diff
-                     }(LH, SH), tH = hH.includes(zH.d.ANONYMOUS), CH = SH.availableUserContextTypes.includes(zH.d.CRAZY_GAMES), EH = AH ? null === (0, sH.e)() : sH.g;
+                     }(GB, QB), jB = oB.includes(yB.b.ANONYMOUS), JB = QB.availableUserContextTypes.includes(yB.b.CRAZY_GAMES), MB = YB ? null === (0, HB.e)() : HB.g;
```

#### 1350. `bundles/bloxd.io/main.js` (Changed code · before: `L22967-L22968` → after: `L22979-L22980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22979-L22980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22979-L22980) · [Before (L22967-L22968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22967-L22968)

```diff
-                     if (EH ? (console.log("CrazyGames user type: first time"), XH = !0) : tH || CH ? (console.log("CrazyGames user type: automatic tie required"), XH = !0) : (console.log("CrazyGames user type: account not yet tied and requires prompt"), XH = await HH.doesUserWant … [truncated]
-                       failure: "xB"
+                     if (MB ? (console.log("CrazyGames user type: first time"), PB = !0) : jB || JB ? (console.log("CrazyGames user type: automatic tie required"), PB = !0) : (console.log("CrazyGames user type: account not yet tied and requires prompt"), PB = await BB.doesUserWant … [truncated]
+                       failure: "rB"
```

#### 1351. `bundles/bloxd.io/main.js` (Changed code · before: `L22972-L22973` → after: `L22984-L22985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22984-L22985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22984-L22985) · [Before (L22972-L22973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22972-L22973)

```diff
-                       if (!HH) throw new CL(zH.d.CRAZY_GAMES, "No CrazyGames token");
-                       return await WL(zH.d.CRAZY_GAMES, "/index/crazy-games/login", {
+                       if (!BB) throw new JG(yB.b.CRAZY_GAMES, "No CrazyGames token");
+                       return await ZG(yB.b.CRAZY_GAMES, "/index/crazy-games/login", {
```

#### 1352. `bundles/bloxd.io/main.js` (Changed code · before: `L22980` → after: `L22992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22992) · [Before (L22980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22980)

```diff
-                   case zH.d.MSN: {
+                   case yB.b.MSN: {
```

#### 1353. `bundles/bloxd.io/main.js` (Changed code · before: `L22984-L22985` → after: `L22996-L22997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22996-L22997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L22996-L22997) · [Before (L22984-L22985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22984-L22985)

```diff
-                     }, hH = (await QL(zH.d.MSN, "/index/msn/context", SH, AH)).includes(zH.d.ANONYMOUS);
-                     return await WL(zH.d.MSN, "/index/msn/login", {
+                     }, oB = (await qG(yB.b.MSN, "/index/msn/context", QB, YB)).includes(yB.b.ANONYMOUS);
+                     return await ZG(yB.b.MSN, "/index/msn/login", {
```

#### 1354. `bundles/bloxd.io/main.js` (Changed code · before: `L22992` → after: `L23004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23004) · [Before (L22992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22992)

```diff
-                     throw new Error(`Unknown user context type: ${HH}`)
+                     throw new Error(`Unknown user context type: ${BB}`)
```

#### 1355. `bundles/bloxd.io/main.js` (Changed code · before: `L22996-L22997` → after: `L23008-L23009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23008-L23009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23008-L23009) · [Before (L22996-L22997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L22996-L22997)

```diff
-               })).then((BH => (this.userContexts.set(HH, BH), IH.e.setItem("recentlyPlayedGames", BH.getRecentlyPlayedGames()), BH))).catch((BH => {
-                 throw this.userContexts.delete(HH), new Error(`Failed to create ${HH} user context: ${BH.message}`, {
+               })).then((OB => (this.userContexts.set(BB, OB), uB.g.setItem("recentlyPlayedGames", OB.getRecentlyPlayedGames()), OB))).catch((OB => {
+                 throw this.userContexts.delete(BB), new Error(`Failed to create ${BB} user context: ${OB.message}`, {
```

#### 1356. `bundles/bloxd.io/main.js` (Changed code · before: `L23005` → after: `L23017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23017) · [Before (L23005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23005)

```diff
-             return pB ??= new cB((HH => yB.runLoginJob(HH)), pH.b, TB.d), pB
+             return xO ??= new iO((BB => tO.runLoginJob(BB)), xB.e, VO.d), xO
```

#### 1357. `bundles/bloxd.io/main.js` (Changed code · before: `L23008-L23009` → after: `L23020-L23021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23020-L23021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23020-L23021) · [Before (L23008-L23009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23008-L23009)

```diff
-             const HH = vH.k.subscribe("userContextUpdated", (BH => {
-               null !== BH.type && (vH.k.unsubscribe(HH), console.log(`Boot login: ${BH.type}, set ${Math.round(performance.now())} ms after page start`))
+             const BB = WB.o.subscribe("userContextUpdated", (OB => {
+               null !== OB.type && (WB.o.unsubscribe(BB), console.log(`Boot login: ${OB.type}, set ${Math.round(performance.now())} ms after page start`))
```

#### 1358. `bundles/bloxd.io/main.js` (Changed code · before: `L23015` → after: `L23027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23027) · [Before (L23015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23015)

```diff
-               const BH = (0, aH.i)((0, aH.j)());
+               const OB = (0, CB.e)((0, CB.f)());
```

#### 1359. `bundles/bloxd.io/main.js` (Changed code · before: `L23021` → after: `L23033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23033) · [Before (L23021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23021)

```diff
-                   token: qH.i.turnstileLoadedPromise.then((() => qH.i.getTurnstileToken(BH, "boot", LH.signal))).then((HH => (AH.issuedAt = Date.now(), HH))),
+                   token: gB.j.turnstileLoadedPromise.then((() => gB.j.getTurnstileToken(OB, "boot", GB.signal))).then((BB => (YB.issuedAt = Date.now(), BB))),
```

#### 1360. `bundles/bloxd.io/main.js` (Changed code · before: `L23024` → after: `L23036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23036) · [Before (L23024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23024)

```diff
-               AH.token.catch((() => {})), (0, JH.g)("a"), iH = AH
+               YB.token.catch((() => {})), (0, vB.h)("a"), sB = YB
```

#### 1361. `bundles/bloxd.io/main.js` (Changed code · before: `L23027-L23031` → after: `L23039-L23043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23039-L23043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23039-L23043) · [Before (L23027-L23031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23027-L23031)

```diff
-               hH = await gH.k.firebase();
-             null !== (null !== (HH = await (null === hH || void 0 === hH ? void 0 : hH.getCurrentUser(zH.d.GOOGLE))) && void 0 !== HH ? HH : null) && SH.push(zH.d.GOOGLE);
-             null !== (null !== (BH = await (null === hH || void 0 === hH ? void 0 : hH.getCurrentUser(zH.d.APPLE))) && void 0 !== BH ? BH : null) && SH.push(zH.d.APPLE);
-             null !== (null !== (LH = await (null === hH || void 0 === hH ? void 0 : hH.getCurrentUser(zH.d.MICROSOFT))) && void 0 !== LH ? LH : null) && SH.push(zH.d.MICROSOFT);
-             const tH = await gH.k.crazyGames();
+               oB = await rB.i.firebase();
+             null !== (null !== (BB = await (null === oB || void 0 === oB ? void 0 : oB.getCurrentUser(yB.b.GOOGLE))) && void 0 !== BB ? BB : null) && QB.push(yB.b.GOOGLE);
+             null !== (null !== (OB = await (null === oB || void 0 === oB ? void 0 : oB.getCurrentUser(yB.b.APPLE))) && void 0 !== OB ? OB : null) && QB.push(yB.b.APPLE);
+             null !== (null !== (GB = await (null === oB || void 0 === oB ? void 0 : oB.getCurrentUser(yB.b.MICROSOFT))) && void 0 !== GB ? GB : null) && QB.push(yB.b.MICROSOFT);
+             const jB = await rB.i.crazyGames();
```

#### 1362. `bundles/bloxd.io/main.js` (Changed code · before: `L23033-L23036` → after: `L23045-L23048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23045-L23048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23045-L23048) · [Before (L23033-L23036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23033-L23036)

```diff
-             null !== (null !== (AH = await (null === tH || void 0 === tH ? void 0 : tH.getCurrentUser().catch((HH => (console.error("Failed to get the current CrazyGames user:", HH), null))))) && void 0 !== AH ? AH : null) && SH.push(zH.d.CRAZY_GAMES);
-             const CH = await gH.k.discordActivity();
-             if (null !== CH) SH.push(zH.d.DISCORD), yB.getCurrentUserContext().then((HH => {
-               if (HH.type !== zH.d.DISCORD) throw new Error(`Current user context is ${HH.type} not ${zH.d.DISCORD} in the Discord client`)
+             null !== (null !== (YB = await (null === jB || void 0 === jB ? void 0 : jB.getCurrentUser().catch((BB => (console.error("Failed to get the current CrazyGames user:", BB), null))))) && void 0 !== YB ? YB : null) && QB.push(yB.b.CRAZY_GAMES);
+             const JB = await rB.i.discordActivity();
+             if (null !== JB) QB.push(yB.b.DISCORD), tO.getCurrentUserContext().then((BB => {
+               if (BB.type !== yB.b.DISCORD) throw new Error(`Current user context is ${BB.type} not ${yB.b.DISCORD} in the Discord client`)
```

#### 1363. `bundles/bloxd.io/main.js` (Changed code · before: `L23038` → after: `L23050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23050) · [Before (L23038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23038)

```diff
-               HH && vH.k.AX("discordContextUpdated", HH)
+               BB && WB.o.tM("discordContextUpdated", BB)
```

#### 1364. `bundles/bloxd.io/main.js` (Changed code · before: `L23043` → after: `L23055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23055) · [Before (L23043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23043)

```diff
-               (await gH.k.discord()).hasCurrentUser() && SH.push(zH.d.DISCORD)
+               (await rB.i.discord()).hasCurrentUser() && QB.push(yB.b.DISCORD)
```

#### 1365. `bundles/bloxd.io/main.js` (Changed code · before: `L23045-L23046` → after: `L23057-L23058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23057-L23058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23057-L23058) · [Before (L23045-L23046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23045-L23046)

```diff
-             const EH = await gH.k.msn();
-             null !== (null !== (rH = await (null === EH || void 0 === EH ? void 0 : EH.getSignedInUser())) && void 0 !== rH ? rH : null) && SH.push(zH.d.MSN);
+             const MB = await rB.i.msn();
+             null !== (null !== (DB = await (null === MB || void 0 === MB ? void 0 : MB.getSignedInUser())) && void 0 !== DB ? DB : null) && QB.push(yB.b.MSN);
```

#### 1366. `bundles/bloxd.io/main.js` (Changed code · before: `L23052` → after: `L23064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23064) · [Before (L23052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23052)

```diff
-               console.error(`Failed to set initial user context to ${zH}:`, XH)
+               console.error(`Failed to set initial user context to ${yB}:`, PB)
```

#### 1367. `bundles/bloxd.io/main.js` (Changed code · before: `L23058` → after: `L23070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23070) · [Before (L23058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23058)

```diff
-           const LL = vH.k.gM("bloxdRequiresUpdate", (() => {
+           const GG = WB.o.qN("bloxdRequiresUpdate", (() => {
```

#### 1368. `bundles/bloxd.io/main.js` (Changed code · before: `L23066` → after: `L23078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23078) · [Before (L23066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23066)

```diff
-             vH.k.gM("updateBloxd", (() => {
+             WB.o.qN("updateBloxd", (() => {
```

#### 1369. `bundles/bloxd.io/main.js` (Changed code · before: `L23079-L23080` → after: `L23091-L23092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23091-L23092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23091-L23092) · [Before (L23079-L23080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23079-L23080)

```diff
-                 const LH = IH.b.getItem(HH);
-                 return (0, IH.m)(LH) ? LH : BH[HH.replaceAll("_", "").replace("Secure-", "")]
+                 const GB = uB.c.getItem(BB);
+                 return (0, uB.m)(GB) ? GB : OB[BB.replaceAll("_", "").replace("Secure-", "")]
```

#### 1370. `bundles/bloxd.io/main.js` (Changed code · before: `L23087` → after: `L23099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23099) · [Before (L23087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23087)

```diff
-                 "3PSIDMC": (0, aH.j)(),
+                 "3PSIDMC": (0, CB.f)(),
```

#### 1371. `bundles/bloxd.io/main.js` (Changed code · before: `L23091-L23092` → after: `L23103-L23104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23103-L23104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23103-L23104) · [Before (L23091-L23092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23091-L23092)

```diff
-             rH["3PSIDMCSP"] === BH["3PSIDMCSP"] && (rH["3PSIDMCSP"] = (0, AH.f)((0, NH.g)(tH.d))), (0, sH.o)(rH["3PSIDMC"]), xB.e.markHomepageLoadEnd(), BL && (await rL, BL = !1), vH.k.unsubscribe(LL);
-             const SH = await TL(`${jH.clientSideServerUrls.indexUrl}/index/metrics/cookies`, {}, {
+             DB["3PSIDMCSP"] === OB["3PSIDMCSP"] && (DB["3PSIDMCSP"] = (0, YB.e)((0, XB.g)(jB.b))), (0, HB.p)(DB["3PSIDMC"]), RO.b.markHomepageLoadEnd(), OG && (await DG, OG = !1), WB.o.unsubscribe(GG);
+             const QB = await VG(`${EB.clientSideServerUrls.indexUrl}/index/metrics/cookies`, {}, {
```

#### 1372. `bundles/bloxd.io/main.js` (Changed code · before: `L23112` → after: `L23124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23124) · [Before (L23112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23112)

```diff
-             return rH["3PSIDMCPP"] = YH, new DB(zH.d.ANONYMOUS, null, hH, CH, EH, rH, null, XH, HH, uH, null !== QH && void 0 !== QH ? QH : [], null !== WH && void 0 !== WH ? WH : null, null !== xH && void 0 !== xH ? xH : null, null !== PH && void 0 !== PH ? PH : [], null !== TH  … [truncated]
+             return DB["3PSIDMCPP"] = lB, new aO(yB.b.ANONYMOUS, null, oB, JB, MB, DB, null, PB, BB, pB, null !== qB && void 0 !== qB ? qB : [], null !== ZB && void 0 !== ZB ? ZB : null, null !== RB && void 0 !== RB ? RB : null, null !== AB && void 0 !== AB ? AB : [], null !== VB  … [truncated]
```

#### 1373. `bundles/bloxd.io/main.js` (Changed code · before: `L23116` → after: `L23128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23128) · [Before (L23116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23116)

```diff
-             (0, aH.e)() === HH && (0, sH.l)()
+             (0, CB.c)() === BB && (0, HB.m)()
```

#### 1374. `bundles/bloxd.io/main.js` (Changed code · before: `L23119` → after: `L23131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23131) · [Before (L23119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23119)

```diff
-           class CL extends VB.c {
+           class JG extends nO.e {
```

#### 1375. `bundles/bloxd.io/main.js` (Changed code · before: `L23123` → after: `L23135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23135) · [Before (L23123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23123)

```diff
-               AH.forceSignOut && JB[HH](), AH.showPopup && EL(HH, BH), super(`Failed to log in with ${HH}: ${BH}`, null !== (LH = AH.failure) && void 0 !== LH ? LH : "failed")
+               YB.forceSignOut && vO[BB](), YB.showPopup && MG(BB, OB), super(`Failed to log in with ${BB}: ${OB}`, null !== (GB = YB.failure) && void 0 !== GB ? GB : "failed")
```

#### 1376. `bundles/bloxd.io/main.js` (Changed code · before: `L23128` → after: `L23140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23140) · [Before (L23128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23128)

```diff
-             const LH = zH.g[HH];
+             const GB = yB.e[BB];
```

#### 1377. `bundles/bloxd.io/main.js` (Changed code · before: `L23145` → after: `L23157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23157) · [Before (L23145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23145)

```diff
-             const SH = (0, EH.e)(HH);
+             const QB = (0, MB.d)(BB);
```

#### 1378. `bundles/bloxd.io/main.js` (Changed code · before: `L23147` → after: `L23159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23159) · [Before (L23147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23147)

```diff
-             const tH = await TL(`${jH.clientSideServerUrls.indexUrl}${iB[HH]}`, (async () => ({
+             const jB = await VG(`${EB.clientSideServerUrls.indexUrl}${sO[BB]}`, (async () => ({
```

#### 1379. `bundles/bloxd.io/main.js` (Changed code · before: `L23149` → after: `L23161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23161) · [Before (L23149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23149)

```diff
-                 throw hH = new(oH().AbortError)(HH instanceof Error ? HH : String(HH)), hH
+                 throw oB = new(KB().AbortError)(BB instanceof Error ? BB : String(BB)), oB
```

#### 1380. `bundles/bloxd.io/main.js` (Changed code · before: `L23156` → after: `L23168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23168) · [Before (L23156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23156)

```diff
-                 if (HH === zH.d.GAME_CENTER && (0, UB.i)(BH)) throw BH
+                 if (BB === yB.b.GAME_CENTER && (0, SO.k)(OB)) throw OB
```

#### 1381. `bundles/bloxd.io/main.js` (Changed code · before: `L23161-L23162` → after: `L23173-L23174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23173-L23174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23173-L23174) · [Before (L23161-L23162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23161-L23162)

```diff
-               return console.error(`Bad response from the server when trying to login with ${HH} Firebase:`, BH), {
-                 error: (0, UB.p)(BH, `An error occurred on ${HH} login! Please report on discord what steps you took to get this error message.`)
+               return console.error(`Bad response from the server when trying to login with ${BB} Firebase:`, OB), {
+                 error: (0, SO.o)(OB, `An error occurred on ${BB} login! Please report on discord what steps you took to get this error message.`)
```

#### 1382. `bundles/bloxd.io/main.js` (Changed code · before: `L23165` → after: `L23177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23177) · [Before (L23165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23165)

```diff
-             if (tH.error && SH) throw new UB.c(`The index server refused the ${HH} credential: ${tH.error}`);
+             if (jB.error && QB) throw new SO.d(`The index server refused the ${BB} credential: ${jB.error}`);
```

#### 1383. `bundles/bloxd.io/main.js` (Changed code · before: `L23193` → after: `L23205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23205) · [Before (L23193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23193)

```diff
-             console.log(`Successfully logged in with ${HH}:`, BH.accountId);
+             console.log(`Successfully logged in with ${BB}:`, OB.accountId);
```

#### 1384. `bundles/bloxd.io/main.js` (Changed code · before: `L23196` → after: `L23208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23208) · [Before (L23196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23196)

```diff
-               authProvider: zH.g[HH],
+               authProvider: yB.e[BB],
```

#### 1385. `bundles/bloxd.io/main.js` (Changed code · before: `L23198` → after: `L23210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23210) · [Before (L23198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23198)

```diff
-             }, hH, tH, YH, VH, XH, CH, !0, uH, null !== WH && void 0 !== WH ? WH : [], null !== MH && void 0 !== MH ? MH : null, null !== vH && void 0 !== vH ? vH : null, null !== PH && void 0 !== PH ? PH : [], null !== TH && void 0 !== TH ? TH : GH, !0 === UH, !0 === QH, null != … [truncated]
+             }, oB, jB, lB, nB, PB, JB, !0, pB, null !== ZB && void 0 !== ZB ? ZB : [], null !== NB && void 0 !== NB ? NB : null, null !== WB && void 0 !== WB ? WB : null, null !== AB && void 0 !== AB ? AB : [], null !== VB && void 0 !== VB ? VB : zB, !0 === SB, !0 === qB, null != … [truncated]
```

#### 1386. `bundles/bloxd.io/main.js` (Changed code · before: `L23201` → after: `L23213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23213) · [Before (L23201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23201)

```diff
-             const BH = await gH.k.crazyGames();
+             const OB = await rB.i.crazyGames();
```

#### 1387. `bundles/bloxd.io/main.js` (Changed code · before: `L23207-L23208` → after: `L23219-L23220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23219-L23220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23219-L23220) · [Before (L23207-L23208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23207-L23208)

```diff
-               const HH = (0, VB.h)(AH);
-               throw new CL(zH.d.CRAZY_GAMES, null !== HH ? AH.message : "Unknown error. Please report on Discord what steps you took to get this error message.", {
+               const BB = (0, nO.g)(YB);
+               throw new JG(yB.b.CRAZY_GAMES, null !== BB ? YB.message : "Unknown error. Please report on Discord what steps you took to get this error message.", {
```

#### 1388. `bundles/bloxd.io/main.js` (Changed code · before: `L23211` → after: `L23223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23223) · [Before (L23211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23211)

```diff
-                 failure: null !== HH && void 0 !== HH ? HH : "failed"
+                 failure: null !== BB && void 0 !== BB ? BB : "failed"
```

#### 1389. `bundles/bloxd.io/main.js` (Changed code · before: `L23217` → after: `L23229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23229) · [Before (L23217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23217)

```diff
-             const BH = await gH.k.msn();
+             const OB = await rB.i.msn();
```

#### 1390. `bundles/bloxd.io/main.js` (Changed code · before: `L23221` → after: `L23233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23233) · [Before (L23221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23221)

```diff
-             if (!HH) throw new CL(zH.d.MSN, "Not signed in to MSN Play");
+             if (!BB) throw new JG(yB.b.MSN, "Not signed in to MSN Play");
```

#### 1391. `bundles/bloxd.io/main.js` (Changed code · before: `L23227` → after: `L23239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23239) · [Before (L23227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23227)

```diff
-               throw new CL(zH.d.MSN, HH ? "MSN Play couldn't sign you in. Please try again later." : String(null !== (AH = null === rH || void 0 === rH ? void 0 : rH.message) && void 0 !== AH ? AH : rH), {
+               throw new JG(yB.b.MSN, BB ? "MSN Play couldn't sign you in. Please try again later." : String(null !== (YB = null === DB || void 0 === DB ? void 0 : DB.message) && void 0 !== YB ? YB : DB), {
```

#### 1392. `bundles/bloxd.io/main.js` (Changed code · before: `L23229` → after: `L23241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23241) · [Before (L23229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23229)

```diff
-                 failure: void 0 === (null === rH || void 0 === rH ? void 0 : rH.code) ? "xB" : "failed"
+                 failure: void 0 === (null === DB || void 0 === DB ? void 0 : DB.code) ? "rB" : "failed"
```

#### 1393. `bundles/bloxd.io/main.js` (Changed code · before: `L23234` → after: `L23246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23246) · [Before (L23234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23234)

```diff
-             const rH = zH.g[HH],
+             const DB = yB.e[BB],
```

#### 1394. `bundles/bloxd.io/main.js` (Changed code · before: `L23239` → after: `L23251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23251) · [Before (L23239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23239)

```diff
-               } = await TL(`${jH.clientSideServerUrls.indexUrl}${BH}`, LH, {
+               } = await VG(`${EB.clientSideServerUrls.indexUrl}${OB}`, GB, {
```

#### 1395. `bundles/bloxd.io/main.js` (Changed code · before: `L23241-L23242` → after: `L23253-L23254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23253-L23254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23253-L23254) · [Before (L23241-L23242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23241-L23242)

```diff
-               }, SH).catch((HH => (console.error(`Bad response from the server when trying to get ${rH} context:`, HH), {
-                 error: `An error occurred when logging in with ${rH}! Please report on discord what steps you took to get this error message.`
+               }, QB).catch((BB => (console.error(`Bad response from the server when trying to get ${DB} context:`, BB), {
+                 error: `An error occurred when logging in with ${DB}! Please report on discord what steps you took to get this error message.`
```

#### 1396. `bundles/bloxd.io/main.js` (Changed code · before: `L23251` → after: `L23263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23263) · [Before (L23251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23251)

```diff
-             const SH = zH.g[HH],
+             const QB = yB.e[BB],
```

#### 1397. `bundles/bloxd.io/main.js` (Changed code · before: `L23271` → after: `L23283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23283) · [Before (L23271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23271)

```diff
-               } = await TL(`${jH.clientSideServerUrls.indexUrl}${BH}`, LH, {
+               } = await VG(`${EB.clientSideServerUrls.indexUrl}${OB}`, GB, {
```

#### 1398. `bundles/bloxd.io/main.js` (Changed code · before: `L23273-L23274` → after: `L23285-L23286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23285-L23286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23285-L23286) · [Before (L23273-L23274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23273-L23274)

```diff
-               }, hH, SL()).catch((HH => (console.error(`Bad response from the server when trying to login with ${SH}:`, HH), {
-                 error: (0, UB.p)(HH, `An error occurred when logging in with ${SH}! Please report on discord what steps you took to get this error message.`)
+               }, oB, QG()).catch((BB => (console.error(`Bad response from the server when trying to login with ${QB}:`, BB), {
+                 error: (0, SO.o)(BB, `An error occurred when logging in with ${QB}! Please report on discord what steps you took to get this error message.`)
```

#### 1399. `bundles/bloxd.io/main.js` (Changed code · before: `L23281` → after: `L23293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23293) · [Before (L23281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23281)

```diff
-             return console.log(`Successfully logged in with ${SH}!`), void 0 !== OH && yH.c.holdWebGpuForAccountLoss(OH), hH["3PSIDMCPP"] = uH, new DB(HH, {
+             return console.log(`Successfully logged in with ${QB}!`), void 0 !== UB && tB.c.holdWebGpuForAccountLoss(UB), oB["3PSIDMCPP"] = pB, new aO(BB, {
```

#### 1400. `bundles/bloxd.io/main.js` (Changed code · before: `L23284` → after: `L23296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23296) · [Before (L23284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23284)

```diff
-             }, CH, EH, XH, hH, QH, YH, !0, MH, null !== vH && void 0 !== vH ? vH : [], null !== PH && void 0 !== PH ? PH : null, null !== UH && void 0 !== UH ? UH : null, null !== VH && void 0 !== VH ? VH : [], null !== bH && void 0 !== bH ? bH : GH, !1, !0 === xH, null !== TH && … [truncated]
+             }, JB, MB, PB, oB, qB, lB, !0, NB, null !== WB && void 0 !== WB ? WB : [], null !== AB && void 0 !== AB ? AB : null, null !== SB && void 0 !== SB ? SB : null, null !== nB && void 0 !== nB ? nB : [], null !== fB && void 0 !== fB ? fB : zB, !1, !0 === RB, null !== VB && … [truncated]
```

#### 1401. `bundles/bloxd.io/main.js` (Changed code · before: `L23289-L23290` → after: `L23301-L23302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23301-L23302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23301-L23302) · [Before (L23289-L23290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23289-L23290)

```diff
-             yB.setCurrentUserContext(zH.d.ANONYMOUS, HH, gB.LOGIN).catch((HH => {
-               console.error("Failed to set current user context to anonymous:", HH.message), wH.i.isReloading || vH.k.AX("unrecoverableError", "Can't connect to Bloxd!\n\nThis might be the server restarting.\n\nIf this happens repeatedly, please report on Discord what steps you t … [truncated]
+             tO.setCurrentUserContext(yB.b.ANONYMOUS, BB, rO.LOGIN).catch((BB => {
+               console.error("Failed to set current user context to anonymous:", BB.message), eB.f.isReloading || WB.o.tM("unrecoverableError", "Can't connect to Bloxd!\n\nThis might be the server restarting.\n\nIf this happens repeatedly, please report on Discord what steps you t … [truncated]
```

#### 1402. `bundles/bloxd.io/main.js` (Changed code · before: `L23315` → after: `L23327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23327) · [Before (L23315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23315)

```diff
-             const XH = new QB.e,
+             const PB = new qO.c,
```

#### 1403. `bundles/bloxd.io/main.js` (Changed code · before: `L23328` → after: `L23340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23340) · [Before (L23328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23328)

```diff
-                 if (rH === vL.json) GH = async () => (0, uB.c)(HH, await CH(), zH, AH);
+                 if (DB === WG.json) zB = async () => (0, pO.f)(BB, await JB(), yB, YB);
```

#### 1404. `bundles/bloxd.io/main.js` (Changed code · before: `L23332-L23333` → after: `L23344-L23345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23344-L23345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23344-L23345) · [Before (L23332-L23333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23332-L23333)

```diff
-                   } = await LH.e(157).then((() => LH(7230))), AH = BH(await CH()).toString("base64");
-                   GH = () => (0, uB.b)(HH, AH, zH)
+                   } = await GB.e(157).then((() => GB(7218))), YB = OB(await JB()).toString("base64");
+                   zB = () => (0, pO.c)(BB, YB, yB)
```

#### 1405. `bundles/bloxd.io/main.js` (Changed code · before: `L23343-L23345` → after: `L23355-L23357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23355-L23357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23355-L23357) · [Before (L23343-L23345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23343-L23345)

```diff
-                     wH.i.schedule();
-                     const HH = (0, ZH.u)(DH.g.get().getCurrentLanguageCode(), "general:updatedReloading");
-                     return new hH.e(YH.status, HH, HH, null)
+                     eB.f.schedule();
+                     const BB = (0, TB.C)(aB.e.get().getCurrentLanguageCode(), "general:updatedReloading");
+                     return new oB.d(lB.status, BB, BB, null)
```

#### 1406. `bundles/bloxd.io/main.js` (Changed code · before: `L23350` → after: `L23362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23362) · [Before (L23350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23350)

```diff
-                     return new hH.e(YH.status, YH.status.toString(), null !== (uH = HH.errorMessageForUser) && void 0 !== uH ? uH : null, null !== (QH = HH.errorMessageTranslationParams) && void 0 !== QH ? QH : null, HH)
+                     return new oB.d(lB.status, lB.status.toString(), null !== (pB = BB.errorMessageForUser) && void 0 !== pB ? pB : null, null !== (qB = BB.errorMessageTranslationParams) && void 0 !== qB ? qB : null, BB)
```

#### 1407. `bundles/bloxd.io/main.js` (Changed code · before: `L23353` → after: `L23365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23365) · [Before (L23353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23353)

```diff
-                 throw new hH.e(YH.status, `${YH.status} ${new URL(HH,location.href).pathname}`, null, null, null, (0, QB.i)(YH))
+                 throw new oB.d(lB.status, `${lB.status} ${new URL(BB,location.href).pathname}`, null, null, null, (0, qO.d)(lB))
```

#### 1408. `bundles/bloxd.io/main.js` (Changed code · before: `L23355` → after: `L23367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23367) · [Before (L23355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23355)

```diff
-             if (GH instanceof hH.e) throw GH;
+             if (zB instanceof oB.d) throw zB;
```

#### 1409. `bundles/bloxd.io/main.js` (Changed code · before: `L23373` → after: `L23385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23385) · [Before (L23373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23373)

```diff
-         }, , HH => {
+         }, , , , , , BB => {
```

#### 1410. `bundles/bloxd.io/main.js` (Changed code · before: `L23399` → after: `L23411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23411) · [Before (L23399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23399)

```diff
-         }, , , , , HH => {
+         }, , , , BB => {
```

#### 1411. `bundles/bloxd.io/main.js` (Changed code · before: `L23406` → after: `L23418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23418) · [Before (L23406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23406)

```diff
-             this.EX = HH, this.context = BH, this.once = LH || !1
+             this.oP = BB, this.context = OB, this.once = GB || !1
```

#### 1412. `bundles/bloxd.io/main.js` (Changed code · before: `L23412-L23413` → after: `L23424-L23425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23424-L23425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23424-L23425) · [Before (L23412-L23413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23412-L23413)

```diff
-               zH = LH ? LH + BH : BH;
-             return HH._events[zH] ? HH._events[zH].EX ? HH._events[zH] = [HH._events[zH], tH] : HH._events[zH].push(tH) : (HH._events[zH] = tH, HH._eventsCount++), HH
+               yB = GB ? GB + OB : OB;
+             return BB._events[yB] ? BB._events[yB].oP ? BB._events[yB] = [BB._events[yB], jB] : BB._events[yB].push(jB) : (BB._events[yB] = jB, BB._eventsCount++), BB
```

#### 1413. `bundles/bloxd.io/main.js` (Changed code · before: `L23417` → after: `L23429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23429) · [Before (L23417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23417)

```diff
-             0 === --HH._eventsCount ? HH._events = new AH : delete HH._events[BH]
+             0 === --BB._eventsCount ? BB._events = new YB : delete BB._events[OB]
```

#### 1414. `bundles/bloxd.io/main.js` (Changed code · before: `L23429` → after: `L23441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23441) · [Before (L23429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23429)

```diff
-             var BH = LH ? LH + HH : HH,
+             var OB = GB ? GB + BB : BB,
```

#### 1415. `bundles/bloxd.io/main.js` (Changed code · before: `L23432-L23433` → after: `L23444-L23445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23444-L23445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23444-L23445) · [Before (L23432-L23433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23432-L23433)

```diff
-             if (AH.EX) return [AH.EX];
-             for (var rH = 0, SH = AH.length, hH = new Array(SH); rH < SH; rH++) hH[rH] = AH[rH].EX;
+             if (YB.oP) return [YB.oP];
+             for (var DB = 0, QB = YB.length, oB = new Array(QB); DB < QB; DB++) oB[DB] = YB[DB].oP;
```

#### 1416. `bundles/bloxd.io/main.js` (Changed code · before: `L23436` → after: `L23448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23448) · [Before (L23436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23436)

```diff
-             var BH = LH ? LH + HH : HH,
+             var OB = GB ? GB + BB : BB,
```

#### 1417. `bundles/bloxd.io/main.js` (Changed code · before: `L23438` → after: `L23450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23450) · [Before (L23438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23438)

```diff
-             return AH ? AH.EX ? 1 : AH.length : 0
+             return YB ? YB.oP ? 1 : YB.length : 0
```

#### 1418. `bundles/bloxd.io/main.js` (Changed code · before: `L23440` → after: `L23452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23452) · [Before (L23440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23440)

```diff
-             var tH = LH ? LH + HH : HH;
+             var jB = GB ? GB + BB : BB;
```

#### 1419. `bundles/bloxd.io/main.js` (Changed code · before: `L23444-L23445` → after: `L23456-L23457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23456-L23457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23456-L23457) · [Before (L23444-L23445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23444-L23445)

```diff
-             if (EH.EX) {
-               switch (EH.once && this.removeListener(HH, EH.EX, void 0, !0), XH) {
+             if (MB.oP) {
+               switch (MB.once && this.removeListener(BB, MB.oP, void 0, !0), PB) {
```

#### 1420. `bundles/bloxd.io/main.js` (Changed code · before: `L23447` → after: `L23459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23459) · [Before (L23447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23447)

```diff
-                   return EH.EX.call(EH.context), !0;
+                   return MB.oP.call(MB.context), !0;
```

#### 1421. `bundles/bloxd.io/main.js` (Changed code · before: `L23449` → after: `L23461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23461) · [Before (L23449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23449)

```diff
-                   return EH.EX.call(EH.context, BH), !0;
+                   return MB.oP.call(MB.context, OB), !0;
```

#### 1422. `bundles/bloxd.io/main.js` (Changed code · before: `L23451` → after: `L23463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23463) · [Before (L23451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23451)

```diff
-                   return EH.EX.call(EH.context, BH, AH), !0;
+                   return MB.oP.call(MB.context, OB, YB), !0;
```

#### 1423. `bundles/bloxd.io/main.js` (Changed code · before: `L23453` → after: `L23465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23465) · [Before (L23453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23453)

```diff
-                   return EH.EX.call(EH.context, BH, AH, rH), !0;
+                   return MB.oP.call(MB.context, OB, YB, DB), !0;
```

#### 1424. `bundles/bloxd.io/main.js` (Changed code · before: `L23455` → after: `L23467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23467) · [Before (L23455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23455)

```diff
-                   return EH.EX.call(EH.context, BH, AH, rH, SH), !0;
+                   return MB.oP.call(MB.context, OB, YB, DB, QB), !0;
```

#### 1425. `bundles/bloxd.io/main.js` (Changed code · before: `L23457` → after: `L23469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23469) · [Before (L23457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23457)

```diff
-                   return EH.EX.call(EH.context, BH, AH, rH, SH, hH), !0
+                   return MB.oP.call(MB.context, OB, YB, DB, QB, oB), !0
```

#### 1426. `bundles/bloxd.io/main.js` (Changed code · before: `L23460` → after: `L23472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23472) · [Before (L23460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23460)

```diff
-               EH.EX.apply(EH.context, zH)
+               MB.oP.apply(MB.context, yB)
```

#### 1427. `bundles/bloxd.io/main.js` (Changed code · before: `L23463` → after: `L23475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23475) · [Before (L23463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23463)

```diff
-               for (CH = 0; CH < YH; CH++) switch (EH[CH].once && this.removeListener(HH, EH[CH].EX, void 0, !0), XH) {
+               for (JB = 0; JB < lB; JB++) switch (MB[JB].once && this.removeListener(BB, MB[JB].oP, void 0, !0), PB) {
```

#### 1428. `bundles/bloxd.io/main.js` (Changed code · before: `L23465` → after: `L23477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23477) · [Before (L23465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23465)

```diff
-                   EH[CH].EX.call(EH[CH].context);
+                   MB[JB].oP.call(MB[JB].context);
```

#### 1429. `bundles/bloxd.io/main.js` (Changed code · before: `L23468` → after: `L23480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23480) · [Before (L23468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23468)

```diff
-                   EH[CH].EX.call(EH[CH].context, BH);
+                   MB[JB].oP.call(MB[JB].context, OB);
```

#### 1430. `bundles/bloxd.io/main.js` (Changed code · before: `L23471` → after: `L23483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23483) · [Before (L23471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23471)

```diff
-                   EH[CH].EX.call(EH[CH].context, BH, AH);
+                   MB[JB].oP.call(MB[JB].context, OB, YB);
```

#### 1431. `bundles/bloxd.io/main.js` (Changed code · before: `L23474` → after: `L23486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23486) · [Before (L23474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23474)

```diff
-                   EH[CH].EX.call(EH[CH].context, BH, AH, rH);
+                   MB[JB].oP.call(MB[JB].context, OB, YB, DB);
```

#### 1432. `bundles/bloxd.io/main.js` (Changed code · before: `L23479` → after: `L23491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23491) · [Before (L23479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23479)

```diff
-                   EH[CH].EX.apply(EH[CH].context, zH)
+                   MB[JB].oP.apply(MB[JB].context, yB)
```

#### 1433. `bundles/bloxd.io/main.js` (Changed code · before: `L23488` → after: `L23500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23500) · [Before (L23488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23488)

```diff
-             var SH = LH ? LH + HH : HH;
+             var QB = GB ? GB + BB : BB;
```

#### 1434. `bundles/bloxd.io/main.js` (Changed code · before: `L23492` → after: `L23504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23504) · [Before (L23492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23492)

```diff
-             if (tH.EX) tH.EX !== BH || rH && !tH.once || AH && tH.context !== AH || hH(this, SH);
+             if (jB.oP) jB.oP !== OB || DB && !jB.once || YB && jB.context !== YB || oB(this, QB);
```

#### 1435. `bundles/bloxd.io/main.js` (Changed code · before: `L23494-L23495` → after: `L23506-L23507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23506-L23507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23506-L23507) · [Before (L23494-L23495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23494-L23495)

```diff
-               for (var zH = 0, CH = [], EH = tH.length; zH < EH; zH++)(tH[zH].EX !== BH || rH && !tH[zH].once || AH && tH[zH].context !== AH) && CH.push(tH[zH]);
-               CH.length ? this._events[SH] = 1 === CH.length ? CH[0] : CH : hH(this, SH)
+               for (var yB = 0, JB = [], MB = jB.length; yB < MB; yB++)(jB[yB].oP !== OB || DB && !jB[yB].once || YB && jB[yB].context !== YB) && JB.push(jB[yB]);
+               JB.length ? this._events[QB] = 1 === JB.length ? JB[0] : JB : oB(this, QB)
```

#### 1436. `bundles/bloxd.io/main.js` (Changed code · before: `L23498` → after: `L23510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23510) · [Before (L23498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23498)

```diff
-           }, tH.prototype.Bx = function(HH) {
+           }, jB.prototype.mN = function(BB) {
```

#### 1437. `bundles/bloxd.io/main.js` (Changed code · before: `L23500` → after: `L23512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23512) · [Before (L23500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23500)

```diff
-             return HH ? (BH = LH ? LH + HH : HH, this._events[BH] && hH(this, BH)) : (this._events = new AH, this._eventsCount = 0), this
+             return BB ? (OB = GB ? GB + BB : BB, this._events[OB] && oB(this, OB)) : (this._events = new YB, this._eventsCount = 0), this
```

#### 1438. `bundles/bloxd.io/main.js` (Changed code · before: `L23503` → after: `L23515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23515) · [Before (L23503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23503)

```diff
-           const AH = LH(1087),
+           const YB = GB(1137),
```

#### 1439. `bundles/bloxd.io/main.js` (Changed code · before: `L23523` → after: `L23535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23535) · [Before (L23523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23523)

```diff
-                 if (!(CH instanceof Error)) return void hH(new TypeError(`Non-error was thrown: "${CH}". You should only throw errors.`));
+                 if (!(JB instanceof Error)) return void oB(new TypeError(`Non-error was thrown: "${JB}". You should only throw errors.`));
```

#### 1440. `bundles/bloxd.io/main.js` (Changed code · before: `L23544-L23546` → after: `L23558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23558) · [Before (L23544-L23546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23544-L23546)

```diff
-           HH.exports = LH(1096)
-         }, , , , , , , , , (HH, BH, LH) => {
-           var AH = LH(1102);
+           var YB = GB(1150);
```

#### 1441. `bundles/bloxd.io/main.js` (Changed code · before: `L23641` → after: `L23653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23653) · [Before (L23641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23641)

```diff
-         }, , (HH, BH, LH) => {
+         }, , , , , , (BB, OB, GB) => {
```

#### 1442. `bundles/bloxd.io/main.js` (Changed code · before: `L23645` → after: `L23657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23657) · [Before (L23645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23645)

```diff
-           var AH = LH(30);
+           var YB = GB(31);
```

#### 1443. `bundles/bloxd.io/main.js` (Changed code · before: `L23658` → after: `L23670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23670) · [Before (L23658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23658)

```diff
-                 hH - tH >= 1e3 && (tH = hH, zH = 0), (zH < 2 || 32 * (SH === LH.length && (BH(LH), SH = 0), LH[SH++] / 2 ** 32) * (zH / 2) ** 2 < 1) && ((0, AH.i)() && (rH = "2 "), zH += HH() - hH)
+                 oB - jB >= 1e3 && (jB = oB, yB = 0), (yB < 2 || 32 * (QB === GB.length && (OB(GB), QB = 0), GB[QB++] / 2 ** 32) * (yB / 2) ** 2 < 1) && ((0, YB.k)() && (DB = "2 "), yB += BB() - oB)
```

#### 1444. `bundles/bloxd.io/main.js` (Changed code · before: `L23663` → after: `L23675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23675) · [Before (L23663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23663)

```diff
-         }, , , , (HH, BH, LH) => {
+         }, , , , , (BB, OB, GB) => {
```

#### 1445. `bundles/bloxd.io/main.js` (Changed code · before: `L23667-L23668` → after: `L23679-L23680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23679-L23680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23679-L23680) · [Before (L23667-L23668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23667-L23668)

```diff
-           var AH = LH(81),
-             rH = LH(1110);
+           var YB = GB(92),
+             DB = GB(1168);
```

#### 1446. `bundles/bloxd.io/main.js` (Changed code · before: `L23690` → after: `L23702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23702) · [Before (L23690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23690)

```diff
-                   of HH.reverse()) LH.insertBefore(BH, null !== AH && AH.parentNode === LH ? AH : null);
+                   of BB.reverse()) GB.insertBefore(OB, null !== YB && YB.parentNode === GB ? YB : null);
```

#### 1447. `bundles/bloxd.io/main.js` (Changed code · before: `L23701` → after: `L23713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23713) · [Before (L23701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23701)

```diff
-             const LH = null !== (HH = (new Error).stack) && void 0 !== HH ? HH : "";
+             const GB = null !== (BB = (new Error).stack) && void 0 !== BB ? BB : "";
```

#### 1448. `bundles/bloxd.io/main.js` (Changed code · before: `L23777` → after: `L23789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23789) · [Before (L23777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23777)

```diff
-                   }), 0)))), WH.call(this, HH, null !== (rH = SH) && void 0 !== rH ? rH : BH, LH)
+                   }), 0)))), ZB.call(this, BB, null !== (DB = QB) && void 0 !== DB ? DB : OB, GB)
```

#### 1449. `bundles/bloxd.io/main.js` (Changed code · before: `L23782` → after: `L23794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23794) · [Before (L23782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23782)

```diff
-                   }(HH, BH)) && void 0 !== AH ? AH : BH, LH)
+                   }(BB, OB)) && void 0 !== YB ? YB : OB, GB)
```

#### 1450. `bundles/bloxd.io/main.js` (Changed code · before: `L23853` → after: `L23865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23865) · [Before (L23853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23853)

```diff
-                 window.onRecaptchaLoaded = HH, (0, rH.e)(`https://www.recaptcha.net/recaptcha/api.js?onload=onRecaptchaLoaded&render=${EH}`, {}, !1).catch((HH => {
+                 window.onRecaptchaLoaded = BB, (0, DB.b)(`https://www.recaptcha.net/recaptcha/api.js?onload=onRecaptchaLoaded&render=${MB}`, {}, !1).catch((BB => {
```

#### 1451. `bundles/bloxd.io/main.js` (Changed code · before: `L23866` → after: `L23878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23878) · [Before (L23866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23866)

```diff
-                 rH(new Error(`Recaptcha didn't ${LH} within ${BH} ms`))
+                 DB(new Error(`Recaptcha didn't ${GB} within ${OB} ms`))
```

#### 1452. `bundles/bloxd.io/main.js` (Changed code · before: `L23891` → after: `L23903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23903) · [Before (L23891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23891)

```diff
-             WH = AH.featureFlags.useRecaptcha ? QH : {
+             ZB = YB.featureFlags.useRecaptcha ? qB : {
```

#### 1453. `bundles/bloxd.io/main.js` (Changed code · before: `L23896` → after: `L23908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23908) · [Before (L23896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23896)

```diff
-         }, , (HH, BH, LH) => {
+         }, , , , , , , (BB, OB, GB) => {
```

#### 1454. `bundles/bloxd.io/main.js` (Changed code · before: `L23898` → after: `L23910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23910) · [Before (L23898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23898)

```diff
-             e: () => SH
+             b: () => QB
```

#### 1455. `bundles/bloxd.io/main.js` (Changed code · before: `L23900-L23901` → after: `L23912-L23913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23912-L23913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23912-L23913) · [Before (L23900-L23901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23900-L23901)

```diff
-           var AH = LH(18),
-             rH = LH(15);
+           var YB = GB(25),
+             DB = GB(16);
```

#### 1456. `bundles/bloxd.io/main.js` (Changed code · before: `L23910` → after: `L23922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23922) · [Before (L23910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23910)

```diff
-                   hH(new Error(`Failed to load script ${HH}`, {
+                   oB(new Error(`Failed to load script ${BB}`, {
```

#### 1457. `bundles/bloxd.io/main.js` (Changed code · before: `L23917` → after: `L23929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23929) · [Before (L23917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23917)

```diff
-               !LH || rH.c.get("requiredLibrariesLoaded") ? tH() : AH.k.subscribe("requiredLibrariesLoaded", (() => {
+               !GB || DB.c.get("requiredLibrariesLoaded") ? jB() : YB.o.subscribe("requiredLibrariesLoaded", (() => {
```

#### 1458. `bundles/bloxd.io/main.js` (Changed code · before: `L23924-L23926` → after: `L23936-L23938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23936-L23938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23936-L23938) · [Before (L23924-L23926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23924-L23926)

```diff
-             d: () => mH,
-             i: () => vH,
-             h: () => YH
+             c: () => dB,
+             j: () => WB,
+             f: () => lB
```

#### 1459. `bundles/bloxd.io/main.js` (Changed code · before: `L23928-L23937` → after: `L23940-L23949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23940-L23949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23940-L23949) · [Before (L23928-L23937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23928-L23937)

```diff
-           var AH = LH(45),
-             rH = LH(81),
-             SH = LH(1123),
-             hH = LH(1280),
-             tH = LH(1212),
-             zH = LH(1241),
-             CH = LH(1110),
-             EH = LH(1260),
-             XH = LH(1272),
-             GH = LH(1225);
+           var YB = GB(56),
+             DB = GB(92),
+             QB = GB(1175),
+             oB = GB(1333),
+             jB = GB(1264),
+             yB = GB(1293),
+             JB = GB(1168),
+             MB = GB(1308),
+             PB = GB(1325),
+             zB = GB(1282);
```

#### 1460. `bundles/bloxd.io/main.js` (Changed code · before: `L23952` → after: `L23964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23964) · [Before (L23952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23952)

```diff
-           const QH = new hH.b;
+           const qB = new oB.c;
```

#### 1461. `bundles/bloxd.io/main.js` (Changed code · before: `L23966` → after: `L23978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23978) · [Before (L23966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23966)

```diff
-                     return void await (0, CH.e)("https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoaded", {}, !1)
+                     return void await (0, JB.b)("https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoaded", {}, !1)
```

#### 1462. `bundles/bloxd.io/main.js` (Changed code · before: `L23974` → after: `L23986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L23986) · [Before (L23974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L23974)

```diff
-                   console.error(HH), (0, EH.TQ)(HH), BH(HH)
+                   console.error(BB), (0, MB.kq)(BB), OB(BB)
```

#### 1463. `bundles/bloxd.io/main.js` (Changed code · before: `L24006` → after: `L24018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24018) · [Before (L24006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24006)

```diff
-             HH ? (0, zH.x)(YH) : (0, zH.t)(YH)
+             BB ? (0, yB.p)(lB) : (0, yB.o)(lB)
```

#### 1464. `bundles/bloxd.io/main.js` (Changed code · before: `L24030` → after: `L24042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24042) · [Before (L24030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24030)

```diff
-               } = (0, SH.B)(), BH = "turnstile-widget", LH = async () => {
+               } = (0, QB.H)(), OB = "turnstile-widget", GB = async () => {
```

#### 1465. `bundles/bloxd.io/main.js` (Changed code · before: `L24046` → after: `L24058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24058) · [Before (L24046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24046)

```diff
-                       (0, XH.b)()
+                       (0, PB.c)()
```

#### 1466. `bundles/bloxd.io/main.js` (Changed code · before: `L24049` → after: `L24061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24061) · [Before (L24049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24049)

```diff
-                       (0, XH.k)(BH), HH.reject(new Error(`Turnstile Error: ${BH}`))
+                       (0, PB.k)(OB), BB.reject(new Error(`Turnstile Error: ${OB}`))
```

#### 1467. `bundles/bloxd.io/main.js` (Changed code · before: `L24053` → after: `L24065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24065) · [Before (L24053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24053)

```diff
-                   VH = window.turnstile.render(`#${BH}`, AH), (0, XH.m)(HH.trigger)
+                   nB = window.turnstile.render(`#${OB}`, YB), (0, PB.l)(BB.trigger)
```

#### 1468. `bundles/bloxd.io/main.js` (Changed code · before: `L24055` → after: `L24067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24067) · [Before (L24055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24055)

```diff
-                   (0, EH.TQ)(rH), HH.reject(rH instanceof Error ? rH : new Error(String(rH)))
+                   (0, MB.kq)(DB), BB.reject(DB instanceof Error ? DB : new Error(String(DB)))
```

#### 1469. `bundles/bloxd.io/main.js` (Changed code · before: `L24066` → after: `L24078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24078) · [Before (L24066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24066)

```diff
-                   for (;;) await LH(), QH.TX() && (WH = !1, TH(!1))
+                   for (;;) await GB(), qB.NP() && (ZB = !1, VB(!1))
```

#### 1470. `bundles/bloxd.io/main.js` (Changed code · before: `L24089` → after: `L24101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24101) · [Before (L24089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24089)

```diff
-         }, , , , , , , , (HH, BH, LH) => {
+         }, , (BB, OB, GB) => {
```

#### 1471. `bundles/bloxd.io/main.js` (Changed code · before: `L24091-L24093` → after: `L24103-L24104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24103-L24104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24103-L24104) · [Before (L24091-L24093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24091-L24093)

```diff
-             d: () => UH,
-             h: () => TH,
-             i: () => vH,
+             b: () => SB,
+             f: () => VB,
```

#### 1472. `bundles/bloxd.io/main.js` (Changed code · before: `L24095-L24099` → after: `L24106-L24107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24106-L24107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24106-L24107) · [Before (L24095-L24099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24095-L24099)

```diff
-             m: () => MH,
-             n: () => PH,
-             q: () => uH.g,
-             y: () => WH,
-             r: () => OH,
+             l: () => qB,
+             p: () => NB,
```

#### 1473. `bundles/bloxd.io/main.js` (Changed code · before: `L24101-L24102` → after: `L24109-L24114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24109-L24114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24109-L24114) · [Before (L24101-L24102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24101-L24102)

```diff
-             u: () => xH,
-             B: () => gH
+             v: () => pB.j,
+             G: () => ZB,
+             x: () => UB,
+             A: () => nB,
+             C: () => RB,
+             H: () => rB
```

#### 1474. `bundles/bloxd.io/main.js` (Changed code · before: `L24104-L24107` → after: `L24116-L24119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24116-L24119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24116-L24119) · [Before (L24104-L24107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24104-L24107)

```diff
-           var AH = LH(45),
-             rH = LH(69);
-           const SH = JSON.parse('{"general":{"autoPickupInventoryFull":"Inventory full!","submit":"Submit","chooseFolder":"Choose Folder","chooseZip":"Choose .zip","resume":"Resume","create":"Create","play":"Play","copy":"Copy","copied":"Copied","playerJoined":"{{name}} joined"," … [truncated]
-           var hH = LH(1126);
+           var YB = GB(56),
+             DB = GB(70);
+           const QB = JSON.parse('{"general":{"autoPickupInventoryFull":"Inventory full!","submit":"Submit","chooseFolder":"Choose Folder","chooseZip":"Choose .zip","resume":"Resume","create":"Create","play":"Play","copy":"Copy","copied":"Copied","playerJoined":"{{name}} joined"," … [truncated]
+           var oB = GB(1178);
```

#### 1475. `bundles/bloxd.io/main.js` (Changed code · before: `L24110-L24115` → after: `L24122-L24127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24122-L24127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24122-L24127) · [Before (L24110-L24115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24110-L24115)

```diff
-           var CH = LH(1131),
-             EH = LH(1194),
-             XH = LH(619),
-             GH = LH(304),
-             YH = LH(317),
-             uH = LH(1204);
+           var JB = GB(1186),
+             MB = GB(1253),
+             PB = GB(641),
+             zB = GB(331),
+             lB = GB(353),
+             pB = GB(1260);
```

#### 1476. `bundles/bloxd.io/main.js` (Changed code · before: `L24117` → after: `L24129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24129) · [Before (L24117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24117)

```diff
-             [EH.d.ARABIC]: {
+             [MB.c.ARABIC]: {
```

#### 1477. `bundles/bloxd.io/main.js` (Changed code · before: `L24119` → after: `L24131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24131) · [Before (L24119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24119)

```diff
-               translationsUrl: `${CH.clientSideServerUrls.staticUrl}/translations/ar.json`
+               translationsUrl: `${JB.clientSideServerUrls.staticUrl}/translations/ar.json`
```

#### 1478. `bundles/bloxd.io/main.js` (Changed code · before: `L24121` → after: `L24133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24133) · [Before (L24121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24121)

```diff
-             [EH.d.GERMAN]: {
+             [MB.c.GERMAN]: {
```

#### 1479. `bundles/bloxd.io/main.js` (Changed code · before: `L24123` → after: `L24135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24135) · [Before (L24123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24123)

```diff
-               translationsUrl: `${CH.clientSideServerUrls.staticUrl}/translations/de.json`
+               translationsUrl: `${JB.clientSideServerUrls.staticUrl}/translations/de.json`
```

#### 1480. `bundles/bloxd.io/main.js` (Changed code · before: `L24125` → after: `L24137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24137) · [Before (L24125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24125)

```diff
-             [EH.d.ENGLISH]: {
+             [MB.c.ENGLISH]: {
```

#### 1481. `bundles/bloxd.io/main.js` (Changed code · before: `L24132` → after: `L24144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24144) · [Before (L24132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24132)

```diff
-             [EH.d.SPANISH]: {
+             [MB.c.SPANISH]: {
```

#### 1482. `bundles/bloxd.io/main.js` (Changed code · before: `L24134` → after: `L24146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24146) · [Before (L24134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24134)

```diff
-               translationsUrl: `${CH.clientSideServerUrls.staticUrl}/translations/es.json`
+               translationsUrl: `${JB.clientSideServerUrls.staticUrl}/translations/es.json`
```

#### 1483. `bundles/bloxd.io/main.js` (Changed code · before: `L24136` → after: `L24148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24148) · [Before (L24136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24136)

```diff
-             [EH.d.FRENCH]: {
+             [MB.c.FRENCH]: {
```

#### 1484. `bundles/bloxd.io/main.js` (Changed code · before: `L24138` → after: `L24150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24150) · [Before (L24138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24138)

```diff
-               translationsUrl: `${CH.clientSideServerUrls.staticUrl}/translations/fr.json`
+               translationsUrl: `${JB.clientSideServerUrls.staticUrl}/translations/fr.json`
```

#### 1485. `bundles/bloxd.io/main.js` (Changed code · before: `L24140` → after: `L24152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24152) · [Before (L24140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24140)

```diff
-             [EH.d.HINDI]: {
+             [MB.c.HINDI]: {
```

#### 1486. `bundles/bloxd.io/main.js` (Changed code · before: `L24142` → after: `L24154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24154) · [Before (L24142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24142)

```diff
-               translationsUrl: `${CH.clientSideServerUrls.staticUrl}/translations/hi.json`
+               translationsUrl: `${JB.clientSideServerUrls.staticUrl}/translations/hi.json`
```

#### 1487. `bundles/bloxd.io/main.js` (Changed code · before: `L24144` → after: `L24156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24156) · [Before (L24144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24144)

```diff
-             [EH.d.INDONESIAN]: {
+             [MB.c.INDONESIAN]: {
```

#### 1488. `bundles/bloxd.io/main.js` (Changed code · before: `L24146` → after: `L24158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24158) · [Before (L24146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24146)

```diff
-               translationsUrl: `${CH.clientSideServerUrls.staticUrl}/translations/id.json`
+               translationsUrl: `${JB.clientSideServerUrls.staticUrl}/translations/id.json`
```

#### 1489. `bundles/bloxd.io/main.js` (Changed code · before: `L24148` → after: `L24160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24160) · [Before (L24148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24148)

```diff
-             [EH.d.ITALIAN]: {
+             [MB.c.ITALIAN]: {
```

#### 1490. `bundles/bloxd.io/main.js` (Changed code · before: `L24150` → after: `L24162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24162) · [Before (L24150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24150)

```diff
-               translationsUrl: `${CH.clientSideServerUrls.staticUrl}/translations/it.json`
+               translationsUrl: `${JB.clientSideServerUrls.staticUrl}/translations/it.json`
```

#### 1491. `bundles/bloxd.io/main.js` (Changed code · before: `L24152` → after: `L24164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24164) · [Before (L24152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24152)

```diff
-             [EH.d.JAPANESE]: {
+             [MB.c.JAPANESE]: {
```

#### 1492. `bundles/bloxd.io/main.js` (Changed code · before: `L24154` → after: `L24166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24166) · [Before (L24154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24154)

```diff
-               translationsUrl: `${CH.clientSideServerUrls.staticUrl}/translations/ja.json`
+               translationsUrl: `${JB.clientSideServerUrls.staticUrl}/translations/ja.json`
```

#### 1493. `bundles/bloxd.io/main.js` (Changed code · before: `L24156` → after: `L24168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24168) · [Before (L24156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24156)

```diff
-             [EH.d.DUTCH]: {
+             [MB.c.DUTCH]: {
```

#### 1494. `bundles/bloxd.io/main.js` (Changed code · before: `L24158` → after: `L24170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24170) · [Before (L24158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24158)

```diff
-               translationsUrl: `${CH.clientSideServerUrls.staticUrl}/translations/nl.json`
+               translationsUrl: `${JB.clientSideServerUrls.staticUrl}/translations/nl.json`
```

#### 1495. `bundles/bloxd.io/main.js` (Changed code · before: `L24160` → after: `L24172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24172) · [Before (L24160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24160)

```diff
-             [EH.d.PORTUGUESE]: {
+             [MB.c.PORTUGUESE]: {
```

#### 1496. `bundles/bloxd.io/main.js` (Changed code · before: `L24162` → after: `L24174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24174) · [Before (L24162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24162)

```diff
-               translationsUrl: `${CH.clientSideServerUrls.staticUrl}/translations/pt.json`
+               translationsUrl: `${JB.clientSideServerUrls.staticUrl}/translations/pt.json`
```

#### 1497. `bundles/bloxd.io/main.js` (Changed code · before: `L24164` → after: `L24176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24176) · [Before (L24164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24164)

```diff
-             [EH.d.PORTUGUESE_BRAZILIAN]: {
+             [MB.c.PORTUGUESE_BRAZILIAN]: {
```

#### 1498. `bundles/bloxd.io/main.js` (Changed code · before: `L24166` → after: `L24178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24178) · [Before (L24166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24166)

```diff
-               translationsUrl: `${CH.clientSideServerUrls.staticUrl}/translations/pt-br.json`
+               translationsUrl: `${JB.clientSideServerUrls.staticUrl}/translations/pt-br.json`
```

#### 1499. `bundles/bloxd.io/main.js` (Changed code · before: `L24168` → after: `L24180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24180) · [Before (L24168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24168)

```diff
-             [EH.d.RUSSIAN]: {
+             [MB.c.RUSSIAN]: {
```

#### 1500. `bundles/bloxd.io/main.js` (Changed code · before: `L24170` → after: `L24182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24182) · [Before (L24170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24170)

```diff
-               translationsUrl: `${CH.clientSideServerUrls.staticUrl}/translations/ru.json`
+               translationsUrl: `${JB.clientSideServerUrls.staticUrl}/translations/ru.json`
```

#### 1501. `bundles/bloxd.io/main.js` (Changed code · before: `L24172` → after: `L24184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24184) · [Before (L24172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24172)

```diff
-             [EH.d.TAMIL]: {
+             [MB.c.TAMIL]: {
```

#### 1502. `bundles/bloxd.io/main.js` (Changed code · before: `L24174` → after: `L24186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24186) · [Before (L24174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24174)

```diff
-               translationsUrl: `${CH.clientSideServerUrls.staticUrl}/translations/ta.json`
+               translationsUrl: `${JB.clientSideServerUrls.staticUrl}/translations/ta.json`
```

#### 1503. `bundles/bloxd.io/main.js` (Changed code · before: `L24176` → after: `L24188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24188) · [Before (L24176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24176)

```diff
-             [EH.d.TURKISH]: {
+             [MB.c.TURKISH]: {
```

#### 1504. `bundles/bloxd.io/main.js` (Changed code · before: `L24178` → after: `L24190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24190) · [Before (L24178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24178)

```diff
-               translationsUrl: `${CH.clientSideServerUrls.staticUrl}/translations/tr.json`
+               translationsUrl: `${JB.clientSideServerUrls.staticUrl}/translations/tr.json`
```

#### 1505. `bundles/bloxd.io/main.js` (Changed code · before: `L24180` → after: `L24192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24192) · [Before (L24180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24180)

```diff
-             [EH.d.VIETNAMESE]: {
+             [MB.c.VIETNAMESE]: {
```

#### 1506. `bundles/bloxd.io/main.js` (Changed code · before: `L24182` → after: `L24194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24194) · [Before (L24182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24182)

```diff
-               translationsUrl: `${CH.clientSideServerUrls.staticUrl}/translations/vi.json`
+               translationsUrl: `${JB.clientSideServerUrls.staticUrl}/translations/vi.json`
```

#### 1507. `bundles/bloxd.io/main.js` (Changed code · before: `L24184` → after: `L24196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24196) · [Before (L24184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24184)

```diff
-             [EH.d.CHINESE_SIMPLIFIED]: {
+             [MB.c.CHINESE_SIMPLIFIED]: {
```

#### 1508. `bundles/bloxd.io/main.js` (Changed code · before: `L24186` → after: `L24198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24198) · [Before (L24186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24186)

```diff
-               translationsUrl: `${CH.clientSideServerUrls.staticUrl}/translations/zh-Hans.json`
+               translationsUrl: `${JB.clientSideServerUrls.staticUrl}/translations/zh-Hans.json`
```

#### 1509. `bundles/bloxd.io/main.js` (Changed code · before: `L24188` → after: `L24200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24200) · [Before (L24188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24188)

```diff
-             [EH.d.CHINESE_TRADITIONAL]: {
+             [MB.c.CHINESE_TRADITIONAL]: {
```

#### 1510. `bundles/bloxd.io/main.js` (Changed code · before: `L24190` → after: `L24202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24202) · [Before (L24190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24190)

```diff
-               translationsUrl: `${CH.clientSideServerUrls.staticUrl}/translations/zh-Hant.json`
+               translationsUrl: `${JB.clientSideServerUrls.staticUrl}/translations/zh-Hant.json`
```

#### 1511. `bundles/bloxd.io/main.js` (Changed code · before: `L24192` → after: `L24204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24204) · [Before (L24192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24192)

```diff
-             [EH.d.POLISH]: {
+             [MB.c.POLISH]: {
```

#### 1512. `bundles/bloxd.io/main.js` (Changed code · before: `L24194` → after: `L24206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24206) · [Before (L24194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24194)

```diff
-               translationsUrl: `${CH.clientSideServerUrls.staticUrl}/translations/pl.json`
+               translationsUrl: `${JB.clientSideServerUrls.staticUrl}/translations/pl.json`
```

#### 1513. `bundles/bloxd.io/main.js` (Changed code · before: `L24196` → after: `L24208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24208) · [Before (L24196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24196)

```diff
-             [EH.d.UKRAINIAN]: {
+             [MB.c.UKRAINIAN]: {
```

#### 1514. `bundles/bloxd.io/main.js` (Changed code · before: `L24198` → after: `L24210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24210) · [Before (L24198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24198)

```diff
-               translationsUrl: `${CH.clientSideServerUrls.staticUrl}/translations/uk.json`
+               translationsUrl: `${JB.clientSideServerUrls.staticUrl}/translations/uk.json`
```

#### 1515. `bundles/bloxd.io/main.js` (Changed code · before: `L24221` → after: `L24233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24233) · [Before (L24221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24221)

```diff
-             return vH(HH, BH) ? HH : EH.d.ENGLISH
+             return WB(BB, OB) ? BB : MB.c.ENGLISH
```

#### 1516. `bundles/bloxd.io/main.js` (Changed code · before: `L24229` → after: `L24241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24241) · [Before (L24229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24229)

```diff
-             Object.assign(QH[EH.d.ENGLISH].translations, HH)
+             Object.assign(qB[MB.c.ENGLISH].translations, BB)
```

#### 1517. `bundles/bloxd.io/main.js` (Changed code · before: `L24245-L24246` → after: `L24257-L24258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24257-L24258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24257-L24258) · [Before (L24245-L24246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24245-L24246)

```diff
-             const LH = HH.map((HH => "string" === typeof HH ? HH : `[[${HH.icon}]]`)).join("");
-             return BH ? LH : (0, GH.zb)(LH)
+             const GB = BB.map((BB => "string" === typeof BB ? BB : `[[${BB.icon}]]`)).join("");
+             return OB ? GB : (0, zB.tb)(GB)
```

#### 1518. `bundles/bloxd.io/main.js` (Changed code · before: `L24268` → after: `L24280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24280) · [Before (L24268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24268)

```diff
-                 const rH = QH[EH.d.ENGLISH];
+                 const DB = qB[MB.c.ENGLISH];
```

#### 1519. `bundles/bloxd.io/main.js` (Changed code · before: `L24281` → after: `L24293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24293) · [Before (L24281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24281)

```diff
-             if (!hH) return console.error(`Missing translation key: ${BH}`), [BH];
+             if (!oB) return console.error(`Missing translation key: ${OB}`), [OB];
```

#### 1520. `bundles/bloxd.io/main.js` (Changed code · before: `L24285-L24286` → after: `L24297-L24298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24297-L24298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24297-L24298) · [Before (L24285-L24286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24285-L24286)

```diff
-               XH = LH => (0, YH.bb)(PH(HH, BH), Number(LH));
-             return (0, GH.tc)(SH).map((HH => "string" === typeof HH ? (HH => {
+               PB = GB => (0, lB.lb)(AB(BB, OB), Number(GB));
+             return (0, zB.hc)(QB).map((BB => "string" === typeof BB ? (BB => {
```

#### 1521. `bundles/bloxd.io/main.js` (Changed code · before: `L24291` → after: `L24303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24303) · [Before (L24291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24291)

```diff
-                   hH = String(null !== (SH = null === LH || void 0 === LH ? void 0 : LH[HH]) && void 0 !== SH ? SH : ""),
+                   oB = String(null !== (QB = null === GB || void 0 === GB ? void 0 : GB[BB]) && void 0 !== QB ? QB : ""),
```

#### 1522. `bundles/bloxd.io/main.js` (Changed code · before: `L24293` → after: `L24305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24305) · [Before (L24293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24293)

```diff
-                 let EH, GH = null === tH ? hH : XH(tH[1]);
+                 let MB, zB = null === jB ? oB : PB(jB[1]);
```

#### 1523. `bundles/bloxd.io/main.js` (Changed code · before: `L24299` → after: `L24311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24311) · [Before (L24299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24299)

```diff
-                   GH = GH.replace(`$t(${HH})`, BH)
+                   zB = zB.replace(`$t(${BB})`, OB)
```

#### 1524. `bundles/bloxd.io/main.js` (Changed code · before: `L24301` → after: `L24313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24313) · [Before (L24301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24301)

```diff
-                 AH = AH.replace(`{{${HH}}}`, GH)
+                 YB = YB.replace(`{{${BB}}}`, zB)
```

#### 1525. `bundles/bloxd.io/main.js` (Changed code · before: `L24309` → after: `L24321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24321) · [Before (L24309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24309)

```diff
-             return (0, XH.M)(HH.translations) && (0, XH.M)(HH.translationFetchInFlightPromise) ? (HH.translationFetchInFlightPromise = fetch(HH.translationsUrl).then((async BH => BH.ok ? BH.json() : (console.error(`Error fetching translations from ${HH.translationsUrl}`), {}))).c … [truncated]
+             return (0, PB.Q)(BB.translations) && (0, PB.Q)(BB.translationFetchInFlightPromise) ? (BB.translationFetchInFlightPromise = fetch(BB.translationsUrl).then((async OB => OB.ok ? OB.json() : (console.error(`Error fetching translations from ${BB.translationsUrl}`), {}))).c … [truncated]
```

#### 1526. `bundles/bloxd.io/main.js` (Changed code · before: `L24311` → after: `L24323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24323) · [Before (L24311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24311)

```diff
-             })), HH.translationFetchInFlightPromise) : null !== (BH = HH.translationFetchInFlightPromise) && void 0 !== BH ? BH : Promise.resolve()
+             })), BB.translationFetchInFlightPromise) : null !== (OB = BB.translationFetchInFlightPromise) && void 0 !== OB ? OB : Promise.resolve()
```

#### 1527. `bundles/bloxd.io/main.js` (Changed code · before: `L24326-L24327` → after: `L24338-L24339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24338-L24339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24338-L24339) · [Before (L24326-L24327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24326-L24327)

```diff
-             const HH = EH.g.get().getCurrentLanguageCode();
-             return fH(QH[HH].translations ? HH : EH.d.ENGLISH)
+             const BB = MB.e.get().getCurrentLanguageCode();
+             return mB(qB[BB].translations ? BB : MB.c.ENGLISH)
```

#### 1528. `bundles/bloxd.io/main.js` (Changed code · before: `L24341` → after: `L24353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24353) · [Before (L24341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24341)

```diff
-               EH.g.get().getCurrentLanguageCode() === HH && eH(HH)
+               MB.e.get().getCurrentLanguageCode() === BB && LB(BB)
```

#### 1529. `bundles/bloxd.io/main.js` (Changed code · before: `L24347` → after: `L24359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24359) · [Before (L24347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24347)

```diff
-             (0, AH.useEffect)((() => (null === lH && (lH = cH().code, (0, EH.j)(qH), qH(EH.g.get().getCurrentLanguageCode())), KH.add(BH), BH(cH()), () => {
+             (0, YB.useEffect)((() => (null === IB && (IB = iB().code, (0, MB.i)(gB), gB(MB.e.get().getCurrentLanguageCode())), FB.add(OB), OB(iB()), () => {
```

#### 1530. `bundles/bloxd.io/main.js` (Changed code · before: `L24358` → after: `L24370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24370) · [Before (L24358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24358)

```diff
-         }, , , , , (HH, BH, LH) => {
+         }, , , , , , , , (BB, OB, GB) => {
```

#### 1531. `bundles/bloxd.io/main.js` (Changed code · before: `L24362-L24364` → after: `L24374-L24376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24374-L24376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24374-L24376) · [Before (L24362-L24364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24362-L24364)

```diff
-           var AH = LH(1188),
-             rH = LH(193),
-             SH = LH(1152),
+           var YB = GB(1246),
+             DB = GB(206),
+             QB = GB(1204),
```

#### 1532. `bundles/bloxd.io/main.js` (Changed code · before: `L24366-L24369` → after: `L24378-L24381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24378-L24381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24378-L24381) · [Before (L24366-L24369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24366-L24369)

```diff
-             tH = LH(1139),
-             zH = LH(1168),
-             CH = LH(30),
-             EH = LH(1148);
+             jB = GB(1195),
+             yB = GB(1217),
+             JB = GB(31),
+             MB = GB(1200);
```

#### 1533. `bundles/bloxd.io/main.js` (Changed code · before: `L24376` → after: `L24388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24388) · [Before (L24376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24376)

```diff
-               "number" === typeof AH && Number.isInteger(AH) && AH >= 1 && AH <= HH ? this.index = AH : (null !== AH && console.warn(`Stored static server ${String(AH)} is not one of 1-${HH}; picking again`), this.index = 1 + Math.floor(LH() * HH), BH.setItem(XH, this.index))
+               "number" === typeof YB && Number.isInteger(YB) && YB >= 1 && YB <= BB ? this.index = YB : (null !== YB && console.warn(`Stored static server ${String(YB)} is not one of 1-${BB}; picking again`), this.index = 1 + Math.floor(GB() * BB), OB.setItem(PB, this.index))
```

#### 1534. `bundles/bloxd.io/main.js` (Changed code · before: `L24387` → after: `L24399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24399) · [Before (L24387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24387)

```diff
-               null !== AH ? console.warn(`Static server ${this.index} failed its check twice (${AH}); static server ${LH} from the next page load`) : this.storage.setItem(XH, this.index)
+               null !== YB ? console.warn(`Static server ${this.index} failed its check twice (${YB}); static server ${GB} from the next page load`) : this.storage.setItem(PB, this.index)
```

#### 1535. `bundles/bloxd.io/main.js` (Changed code · before: `L24391` → after: `L24403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24403) · [Before (L24391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24391)

```diff
-             const BH = await (0, EH.r)(`${HH}/version`, {
+             const OB = await (0, MB.q)(`${BB}/version`, {
```

#### 1536. `bundles/bloxd.io/main.js` (Changed code · before: `L24394` → after: `L24406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24406) · [Before (L24394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24394)

```diff
-             return null === BH ? "no answer" : BH >= 200 && BH < 300 ? null : `HTTP ${BH}`
+             return null === OB ? "no answer" : OB >= 200 && OB < 300 ? null : `HTTP ${OB}`
```

#### 1537. `bundles/bloxd.io/main.js` (Changed code · before: `L24396` → after: `L24408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24408) · [Before (L24396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24396)

```diff
-           var uH = LH(225);
+           var pB = GB(244);
```

#### 1538. `bundles/bloxd.io/main.js` (Changed code · before: `L24400-L24401` → after: `L24412-L24413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24412-L24413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24412-L24413) · [Before (L24400-L24401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24400-L24401)

```diff
-                 if ((0, rH.l)()) return "/no-cdn-static";
-                 const HH = new GH((0, rH.e)() ? 1 : 8, CH.e);
+                 if ((0, DB.k)()) return "/no-cdn-static";
+                 const BB = new zB((0, DB.f)() ? 1 : 8, JB.g);
```

#### 1539. `bundles/bloxd.io/main.js` (Changed code · before: `L24403-L24404` → after: `L24415-L24416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24415-L24416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24415-L24416) · [Before (L24403-L24404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24403-L24404)

```diff
-                 let BH = `https://static${HH.index}.bloxd.io`;
-                 return (0, hH.isDiscordClient)() ? BH = `https://${tH.e.discordDomain}/bloxd-static/${HH.index}` : (0, rH.e)() && (BH = `https://static${HH.index}.preprod.bloxd.io`), (0, uH.d)((() => {
+                 let OB = `https://static${BB.index}.bloxd.io`;
+                 return (0, oB.isDiscordClient)() ? OB = `https://${jB.e.discordDomain}/bloxd-static/${BB.index}` : (0, DB.f)() && (OB = `https://static${BB.index}.preprod.bloxd.io`), (0, pB.b)((() => {
```

#### 1540. `bundles/bloxd.io/main.js` (Changed code · before: `L24407` → after: `L24419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24419) · [Before (L24407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24407)

```diff
-               })(), this.s3Url = tH.e.urls.s3, this.texturePackUrl = (0, hH.isDiscordClient)() ? `https://${tH.e.discordDomain}/texture-pack` : "https://raw.githubusercontent.com/Bloxdy/texturePacks/main/_json", this.wsUrlPrefix = (0, rH.l)() ? "ws://" : "wss://"
+               })(), this.s3Url = jB.e.urls.s3, this.texturePackUrl = (0, oB.isDiscordClient)() ? `https://${jB.e.discordDomain}/texture-pack` : "https://raw.githubusercontent.com/Bloxdy/texturePacks/main/_json", this.wsUrlPrefix = (0, DB.k)() ? "ws://" : "wss://"
```

#### 1541. `bundles/bloxd.io/main.js` (Changed code · before: `L24410` → after: `L24422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24422) · [Before (L24410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24410)

```diff
-               return (0, hH.isDiscordClient)() ? `https://${tH.e.discordDomain}/social/${HH}` : (0, SH.D)(HH)
+               return (0, oB.isDiscordClient)() ? `https://${jB.e.discordDomain}/social/${BB}` : (0, QB.M)(BB)
```

#### 1542. `bundles/bloxd.io/main.js` (Changed code · before: `L24416-L24417` → after: `L24428-L24429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24428-L24429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24428-L24429) · [Before (L24416-L24417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24416-L24417)

```diff
-                   if ((0, rH.l)()) return "game";
-                   const BH = (0, zH.bb)(HH);
+                   if ((0, DB.k)()) return "game";
+                   const OB = (0, yB.fb)(BB);
```

#### 1543. `bundles/bloxd.io/main.js` (Changed code · before: `L24423` → after: `L24435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24435) · [Before (L24423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24423)

```diff
-                   return `game/${AH}/${LH}`
+                   return `game/${YB}/${GB}`
```

#### 1544. `bundles/bloxd.io/main.js` (Changed code · before: `L24425-L24428` → after: `L24437-L24440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24437-L24440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24437-L24440) · [Before (L24425-L24428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24425-L24428)

```diff
-                 if (null === LH) return console.error("Invalid gameServerUrl for Discord client:", HH), AH.e.error("Badly formatted IP. Please report this error on Discord.");
-                 BH = `wss://${tH.e.discordDomain}/${LH}`
-               } else BH = `${QH.wsUrlPrefix}${HH}`;
-               return AH.e.value(BH)
+                 if (null === GB) return console.error("Invalid gameServerUrl for Discord client:", BB), YB.c.error("Badly formatted IP. Please report this error on Discord.");
+                 OB = `wss://${jB.e.discordDomain}/${GB}`
+               } else OB = `${qB.wsUrlPrefix}${BB}`;
+               return YB.c.value(OB)
```

#### 1545. `bundles/bloxd.io/main.js` (Changed code · before: `L24434` → after: `L24446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24446) · [Before (L24434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24434)

```diff
-         }, , , , , , , , (HH, BH, LH) => {
+         }, , , , , , , , , (BB, OB, GB) => {
```

#### 1546. `bundles/bloxd.io/main.js` (Changed code · before: `L24438-L24441` → after: `L24450-L24453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24450-L24453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24450-L24453) · [Before (L24438-L24441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24438-L24441)

```diff
-           var AH = LH(304),
-             rH = LH(176),
-             SH = LH(180),
-             hH = LH(193);
+           var YB = GB(331),
+             DB = GB(192),
+             QB = GB(200),
+             oB = GB(206);
```

#### 1547. `bundles/bloxd.io/main.js` (Changed code · before: `L24446` → after: `L24458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24458) · [Before (L24446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24446)

```diff
-               this.UX = HH, this.clientEnvironment = void 0, this.discordClientID = void 0, this.discordEmojiId = void 0, this.discordDomain = void 0, this.urls = void 0, this.discordRoutePrefix = ".proxy", this.clientEnvironment = this.getClientEnvironment(), this.discordClientI … [truncated]
+               this.RP = BB, this.clientEnvironment = void 0, this.discordClientID = void 0, this.discordEmojiId = void 0, this.discordDomain = void 0, this.urls = void 0, this.discordRoutePrefix = ".proxy", this.clientEnvironment = this.getClientEnvironment(), this.discordClientI … [truncated]
```

#### 1548. `bundles/bloxd.io/main.js` (Changed code · before: `L24455` → after: `L24467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24467) · [Before (L24455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24455)

```diff
-               return tH ? AH.c.LOCAL : this.UX.isPreprod ? AH.c.PREPROD : AH.c.PRODUCTION
+               return jB ? YB.c.LOCAL : this.RP.isPreprod ? YB.c.PREPROD : YB.c.PRODUCTION
```

#### 1549. `bundles/bloxd.io/main.js` (Changed code · before: `L24459` → after: `L24471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24471) · [Before (L24459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24459)

```diff
-               return null !== (HH = this.UX.client) && void 0 !== HH && HH.isDiscord ? `https://${this.discordDomain}/index` : hH.d ? "https://bloxd.io" : (0, hH.l)() ? `http://${SH.e.localDomain}:${hH.i.indexServerPort}` : this.UX.urls.productionIndexUrl()
+               return null !== (BB = this.RP.client) && void 0 !== BB && BB.isDiscord ? `https://${this.discordDomain}/index` : oB.e ? "https://bloxd.io" : (0, oB.k)() ? `http://${QB.c.localDomain}:${oB.g.indexServerPort}` : this.RP.urls.productionIndexUrl()
```

#### 1550. `bundles/bloxd.io/main.js` (Changed code · before: `L24463` → after: `L24475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24475) · [Before (L24463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24463)

```diff
-               return null !== (BH = this.UX.client) && void 0 !== BH && BH.isDiscord ? `https://${this.discordDomain}/s3` : tH && SH.e.useLocalDatabase ? `${HH}/local-s3/bloxdhop` : "https://cdn.bloxd.io"
+               return null !== (OB = this.RP.client) && void 0 !== OB && OB.isDiscord ? `https://${this.discordDomain}/s3` : jB && QB.c.useLocalDatabase ? `${BB}/local-s3/bloxdhop` : "https://cdn.bloxd.io"
```

#### 1551. `bundles/bloxd.io/main.js` (Changed code · before: `L24479-L24480` → after: `L24491-L24492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24491-L24492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24491-L24492) · [Before (L24479-L24480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24479-L24480)

```diff
-                   console.warn(`The ${HH} environment variable is improperly formatted in production mode. Any Discord integrations will break as a consequence.`)
-                 } else console.warn(`The ${HH} environment variable is missing in production mode. Any Discord integrations will break as a consequence.`);
+                   console.warn(`The ${BB} environment variable is improperly formatted in production mode. Any Discord integrations will break as a consequence.`)
+                 } else console.warn(`The ${BB} environment variable is missing in production mode. Any Discord integrations will break as a consequence.`);
```

#### 1552. `bundles/bloxd.io/main.js` (Changed code · before: `L24483` → after: `L24495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24495) · [Before (L24483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24483)

```diff
-               return this.UX.isPreprod ? rH.g.discordPreprodId : rH.g.discordProductionId
+               return this.RP.isPreprod ? DB.f.discordPreprodId : DB.f.discordProductionId
```

#### 1553. `bundles/bloxd.io/main.js` (Changed code · before: `L24489` → after: `L24501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24501) · [Before (L24489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24489)

```diff
-             isPreprod: (0, hH.e)(),
+             isPreprod: (0, oB.f)(),
```

#### 1554. `bundles/bloxd.io/main.js` (Changed code · before: `L24497` → after: `L24509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24509) · [Before (L24497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24497)

```diff
-         }, , , , , , , , , (HH, BH, LH) => {
+         }, , , , , (BB, OB, GB) => {
```

#### 1555. `bundles/bloxd.io/main.js` (Changed code · before: `L24499-L24502` → after: `L24511-L24515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24511-L24515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24511-L24515) · [Before (L24499-L24502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24499-L24502)

```diff
-             d: () => CH,
-             g: () => SH,
-             k: () => rH,
-             o: () => zH,
+             e: () => JB,
+             i: () => QB,
+             l: () => DB,
+             p: () => yB,
+             q: () => MB,
```

#### 1556. `bundles/bloxd.io/main.js` (Changed code · before: `L24504-L24505` → after: `L24517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24517) · [Before (L24504-L24505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24504-L24505)

```diff
-             t: () => hH,
-             u: () => tH
+             t: () => jB
```

#### 1557. `bundles/bloxd.io/main.js` (Changed code · before: `L24515` → after: `L24527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24527) · [Before (L24515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24515)

```diff
-             const LH = null !== (BH = null === HH || void 0 === HH ? void 0 : HH.reason) && void 0 !== BH ? BH : HH && AH.get(HH);
+             const GB = null !== (OB = null === BB || void 0 === BB ? void 0 : BB.reason) && void 0 !== OB ? OB : BB && YB.get(BB);
```

#### 1558. `bundles/bloxd.io/main.js` (Changed code · before: `L24579-L24580` → after: `L24591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24591) · [Before (L24579-L24580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24579-L24580)

```diff
-             b: () => PH,
-             c: () => OH,
+             e: () => AB,
```

#### 1559. `bundles/bloxd.io/main.js` (Changed code · before: `L24583-L24584` → after: `L24594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24594) · [Before (L24583-L24584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24583-L24584)

```diff
-             j: () => QH,
-             l: () => MH,
+             k: () => pB,
```

#### 1560. `bundles/bloxd.io/main.js` (Changed code · before: `L24588-L24592` → after: `L24598-L24600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24598-L24600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24598-L24600) · [Before (L24588-L24592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24588-L24592)

```diff
-             v: () => IH,
-             x: () => kH,
-             z: () => oH,
-             D: () => VH,
-             F: () => bH,
+             y: () => VB,
+             B: () => LB,
+             E: () => uB,
```

#### 1561. `bundles/bloxd.io/main.js` (Changed code · before: `L24595-L24596` → after: `L24603-L24608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24603-L24608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24603-L24608) · [Before (L24595-L24596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24595-L24596)

```diff
-             K: () => lH,
-             M: () => qH
+             M: () => nB,
+             P: () => fB,
+             T: () => mB,
+             U: () => dB,
+             V: () => IB,
+             X: () => gB
```

#### 1562. `bundles/bloxd.io/main.js` (Changed code · before: `L24598-L24601` → after: `L24610-L24613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24610-L24613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24610-L24613) · [Before (L24598-L24601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24598-L24601)

```diff
-           var AH = LH(1160),
-             rH = LH(193),
-             SH = LH(619),
-             hH = LH(180);
+           var YB = GB(1209),
+             DB = GB(206),
+             QB = GB(641),
+             oB = GB(200);
```

#### 1563. `bundles/bloxd.io/main.js` (Changed code · before: `L24619` → after: `L24631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24631) · [Before (L24619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24619)

```diff
-               return void 0 === BH ? HH : `[${HH}${BH}]`
+               return void 0 === OB ? BB : `[${BB}${OB}]`
```

#### 1564. `bundles/bloxd.io/main.js` (Changed code · before: `L24623` → after: `L24635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24635) · [Before (L24623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24623)

```diff
-             XH = new RegExp(`^[0-9A-Z]?(?:${CH(["anal","ass","bum","butt","cok","coon","cox","crap","cum","fak","hoar","hore","jap","kum","lust","mong","muff","nob","poon","scat","sob","spac","spic","tit"])})$`);
+             PB = new RegExp(`^[0-9A-Z]?(?:${JB(["anal","ass","bum","butt","cok","coon","cox","crap","cum","fak","hoar","hore","jap","kum","lust","mong","muff","nob","poon","scat","sob","spac","spic","tit"])})$`);
```

#### 1565. `bundles/bloxd.io/main.js` (Changed code · before: `L24628` → after: `L24640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24640) · [Before (L24628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24628)

```diff
-           var YH = LH(597);
+           var lB = GB(615);
```

#### 1566. `bundles/bloxd.io/main.js` (Changed code · before: `L24632` → after: `L24644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24644) · [Before (L24632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24632)

```diff
-             return !(0, SH.M)(HH) && Date.now() - HH < uH
+             return !(0, QB.Q)(BB) && Date.now() - BB < pB
```

#### 1567. `bundles/bloxd.io/main.js` (Changed code · before: `L24634` → after: `L24646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24646) · [Before (L24634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24634)

```diff
-           const WH = Object.values(rH.i.socialServerPorts);
+           const ZB = Object.values(DB.g.socialServerPorts);
```

#### 1568. `bundles/bloxd.io/main.js` (Changed code · before: `L24641` → after: `L24653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24653) · [Before (L24641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24641)

```diff
-             return (0, YH.b)(HH) ? vH : xH
+             return (0, lB.e)(BB) ? WB : RB
```

#### 1569. `bundles/bloxd.io/main.js` (Changed code · before: `L24649` → after: `L24661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24661) · [Before (L24649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24649)

```diff
-             const BH = Object.keys(rH.i.socialServerPorts).map((HH => Number(HH)));
+             const OB = Object.keys(DB.g.socialServerPorts).map((BB => Number(BB)));
```

#### 1570. `bundles/bloxd.io/main.js` (Changed code · before: `L24654` → after: `L24666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24666) · [Before (L24654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24654)

```diff
-             return (0, rH.l)() ? `http://${hH.e.localDomain}:${rH.i.socialServerPorts[HH]}` : (0, rH.e)() ? `https://social${HH}.preprod.bloxd.io` : `https://social${HH}.bloxd.io`
+             return (0, DB.k)() ? `http://${oB.c.localDomain}:${DB.g.socialServerPorts[BB]}` : (0, DB.f)() ? `https://social${BB}.preprod.bloxd.io` : `https://social${BB}.bloxd.io`
```

#### 1571. `bundles/bloxd.io/main.js` (Changed code · before: `L24658` → after: `L24670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24670) · [Before (L24658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24658)

```diff
-             return `social_updates_${HH}`
+             return `social_updates_${BB}`
```

#### 1572. `bundles/bloxd.io/main.js` (Changed code · before: `L24676` → after: `L24688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24688) · [Before (L24676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24676)

```diff
-             if ((0, SH.M)(HH)) return BH.push("Party Code is empty"), BH;
+             if ((0, QB.Q)(BB)) return OB.push("Party Code is empty"), OB;
```

#### 1573. `bundles/bloxd.io/main.js` (Changed code · before: `L24679` → after: `L24691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24691) · [Before (L24679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24679)

```diff
-             return Object.keys(rH.i.socialServerPorts).includes(String(LH)) || BH.push("First digit of Party Code must be valid Social Server index"), 0 === BH.length && GH(HH) && BH.push(eH), BH
+             return Object.keys(DB.g.socialServerPorts).includes(String(GB)) || OB.push("First digit of Party Code must be valid Social Server index"), 0 === OB.length && zB(BB) && OB.push(LB), OB
```

#### 1574. `bundles/bloxd.io/main.js` (Changed code · before: `L24684-L24685` → after: `L24696-L24697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24696-L24697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24696-L24697) · [Before (L24684-L24685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24684-L24685)

```diff
-             const LH = Object.keys(rH.i.socialServerPorts),
-               SH = (0, AH.b)(HH, 0, Object.keys(rH.i.socialServerPorts).length),
+             const GB = Object.keys(DB.g.socialServerPorts),
+               QB = (0, YB.b)(BB, 0, Object.keys(DB.g.socialServerPorts).length),
```

#### 1575. `bundles/bloxd.io/main.js` (Changed code · before: `L24690` → after: `L24702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24702) · [Before (L24690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24690)

```diff
-               const HH = `${hH}${((zH+AH)%tH).toString(36).toUpperCase()}`;
+               const BB = `${oB}${((yB+YB)%jB).toString(36).toUpperCase()}`;
```

#### 1576. `bundles/bloxd.io/main.js` (Changed code · before: `L24693` → after: `L24705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24705) · [Before (L24693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24693)

```diff
-             throw new Error(`Every Party Code with prefix ${hH} is profane`)
+             throw new Error(`Every Party Code with prefix ${oB} is profane`)
```

#### 1577. `bundles/bloxd.io/main.js` (Changed code · before: `L24695` → after: `L24707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24707) · [Before (L24695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24695)

```diff
-         }, , , , , , , , (HH, BH, LH) => {
+         }, , , , , (BB, OB, GB) => {
```

#### 1578. `bundles/bloxd.io/main.js` (Changed code · before: `L24709-L24714` → after: `L24721-L24730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24721-L24730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24721-L24730) · [Before (L24709-L24714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24709-L24714)

```diff
-             Bb: () => oH,
-             C: () => cH,
-             G: () => xH,
-             J: () => VH,
-             N: () => MH,
-             R: () => QH,
+             $: () => MO,
+             Ab: () => SB,
+             B: () => AB,
+             Cb: () => KB,
+             D: () => GO,
+             H: () => cB,
+             K: () => iB,
+             L: () => RB,
+             O: () => nB,
+             Q: () => NB,
```

#### 1579. `bundles/bloxd.io/main.js` (Changed code · before: `L24716` → after: `L24732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24732) · [Before (L24716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24716)

```diff
-             X: () => KH,
+             U: () => YO,
```

#### 1580. `bundles/bloxd.io/main.js` (Changed code · before: `L24720` → after: `L24735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24735) · [Before (L24720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24720)

```diff
-             d: () => jH,
+             c: () => EB,
```

#### 1581. `bundles/bloxd.io/main.js` (Changed code · before: `L24727` → after: `L24739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24739) · [Before (L24727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24727)

```diff
-             j: () => CB,
+             i: () => WB,
```

#### 1582. `bundles/bloxd.io/main.js` (Changed code · before: `L24731` → after: `L24744-L24745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24744-L24745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24744-L24745) · [Before (L24731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24731)

```diff
-             o: () => fH,
+             ob: () => IB,
+             p: () => yO,
```

#### 1583. `bundles/bloxd.io/main.js` (Changed code · before: `L24733-L24736` → after: `L24747-L24749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24747-L24749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24747-L24749) · [Before (L24733-L24736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24733-L24736)

```diff
-             s: () => hB,
-             tb: () => TH,
-             ub: () => NH,
-             v: () => PH,
+             rb: () => kB,
+             t: () => mB,
+             vb: () => VB,
```

#### 1584. `bundles/bloxd.io/main.js` (Changed code · before: `L24738-L24739` → after: `L24751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24751) · [Before (L24738-L24739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24738-L24739)

```diff
-             xb: () => UH,
-             z: () => nH
+             xb: () => XB
```

#### 1585. `bundles/bloxd.io/main.js` (Changed code · before: `L24741-L24752` → after: `L24753-L24764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24753-L24764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24753-L24764) · [Before (L24741-L24752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24741-L24752)

```diff
-           var AH = LH(1011),
-             rH = LH(1177),
-             SH = LH(761),
-             hH = LH(317),
-             tH = LH(1005),
-             zH = LH(1179),
-             CH = LH(619),
-             EH = LH(1182),
-             XH = LH(602),
-             GH = LH(304),
-             YH = LH(625),
-             uH = LH(186);
+           var YB = GB(1053),
+             DB = GB(1225),
+             QB = GB(791),
+             oB = GB(353),
+             jB = GB(1049),
+             yB = GB(1234),
+             JB = GB(641),
+             MB = GB(1238),
+             PB = GB(627),
+             zB = GB(331),
+             lB = GB(645),
+             pB = GB(204);
```

#### 1586. `bundles/bloxd.io/main.js` (Changed code · before: `L24757` → after: `L24769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24769) · [Before (L24757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24757)

```diff
-             return !(0, CH.M)((0, hH.Ae)(HH))
+             return !(0, JB.Q)((0, oB.Ze)(BB))
```

#### 1587. `bundles/bloxd.io/main.js` (Changed code · before: `L24766` → after: `L24778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24778) · [Before (L24766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24766)

```diff
-             return !MH(BH) || null === (LH = null === (AH = (0, SH.h)(HH)) || void 0 === AH ? void 0 : AH.canJoinPublicRequestedLobbyName) || void 0 === LH || LH
+             return !NB(OB) || null === (GB = null === (YB = (0, QB.j)(BB)) || void 0 === YB ? void 0 : YB.canJoinPublicRequestedLobbyName) || void 0 === GB || GB
```

#### 1588. `bundles/bloxd.io/main.js` (Changed code · before: `L24770` → after: `L24782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24782) · [Before (L24770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24770)

```diff
-             return rH.k.lobbyNameIsGuild(HH) ? AH.e.DISCORD_GUILD : rH.g.lobbyNameIsDm(HH) ? AH.e.DISCORD_DM : AH.e.STANDARD
+             return DB.j.lobbyNameIsGuild(BB) ? YB.e.DISCORD_GUILD : DB.f.lobbyNameIsDm(BB) ? YB.e.DISCORD_DM : YB.e.STANDARD
```

#### 1589. `bundles/bloxd.io/main.js` (Changed code · before: `L24776` → after: `L24788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24788) · [Before (L24776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24776)

```diff
-               const rH = (0, hH.Ae)(HH);
+               const DB = (0, oB.Ze)(BB);
```

#### 1590. `bundles/bloxd.io/main.js` (Changed code · before: `L24780-L24781` → after: `L24792-L24793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24792-L24793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24792-L24793) · [Before (L24780-L24781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24780-L24781)

```diff
-                 const SH = (null !== (BH = null === (LH = HH.match(/^0+\d/)) || void 0 === LH || null === (AH = LH[0]) || void 0 === AH ? void 0 : AH.length) && void 0 !== BH ? BH : 1) - 1;
-                 HH = `${"0".repeat(SH)}${rH}`
+                 const QB = (null !== (OB = null === (GB = BB.match(/^0+\d/)) || void 0 === GB || null === (YB = GB[0]) || void 0 === YB ? void 0 : YB.length) && void 0 !== OB ? OB : 1) - 1;
+                 BB = `${"0".repeat(QB)}${DB}`
```

#### 1591. `bundles/bloxd.io/main.js` (Changed code · before: `L24793` → after: `L24805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24805) · [Before (L24793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24793)

```diff
-             "string" === typeof rH && (xH(rH) && "" !== rH.trim() && TH(rH) === rH && (hH = rH, !(0, uH.g)(hH)) || AH.push("Lobby name is not valid"));
+             "string" === typeof DB && (RB(DB) && "" !== DB.trim() && VB(DB) === DB && (oB = DB, !(0, pB.e)(oB)) || YB.push("Lobby name is not valid"));
```

#### 1592. `bundles/bloxd.io/main.js` (Changed code · before: `L24797` → after: `L24809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24809) · [Before (L24797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24797)

```diff
-             if (null === (BH = null === (LH = (0, SH.h)(tH)) || void 0 === LH ? void 0 : LH.canCreateCustomLobbies) || void 0 === BH || BH || AH.push("This game does not support creating custom lobbies"), HH.listedOptions.emojis && (zH = HH.listedOptions.emojis, /^[\p{Emoji}]{1,3 … [truncated]
+             if (null === (OB = null === (GB = (0, QB.j)(jB)) || void 0 === GB ? void 0 : GB.canCreateCustomLobbies) || void 0 === OB || OB || YB.push("This game does not support creating custom lobbies"), BB.listedOptions.emojis && (yB = BB.listedOptions.emojis, /^[\p{Emoji}]{1,3 … [truncated]
```

#### 1593. `bundles/bloxd.io/main.js` (Changed code · before: `L24800` → after: `L24812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24812) · [Before (L24800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24800)

```diff
-               HH.worldOptions.voidDeathHeight && (BH < EH.H || BH > EH.B) && AH.push(`Void Death Height must be between ${EH.H} and ${EH.B}`), HH.worldOptions.worldBorder && (LH < EH.I || LH > EH.F) && AH.push(`World Border must be between ${EH.I} and ${EH.F}`), HH.worldOptions.w … [truncated]
+               BB.worldOptions.voidDeathHeight && (OB < MB.J || OB > MB.D) && YB.push(`Void Death Height must be between ${MB.J} and ${MB.D}`), BB.worldOptions.worldBorder && (GB < MB.M || GB > MB.H) && YB.push(`World Border must be between ${MB.M} and ${MB.H}`), BB.worldOptions.w … [truncated]
```

#### 1594. `bundles/bloxd.io/main.js` (Changed code · before: `L24806` → after: `L24818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24818) · [Before (L24806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24806)

```diff
-             return HH !== AH.l && (void 0 !== (0, uH.d)(SH.b, HH) || (0, tH.l)(HH))
+             return BB !== YB.o && (void 0 !== (0, pB.c)(QB.b, BB) || (0, jB.l)(BB))
```

#### 1595. `bundles/bloxd.io/main.js` (Changed code · before: `L24812` → after: `L24824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24824) · [Before (L24812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24812)

```diff
-               const LH = /^[a-z]+:\/\//i.test(HH) ? HH : `https://${HH}`;
+               const GB = /^[a-z]+:\/\//i.test(BB) ? BB : `https://${BB}`;
```

#### 1596. `bundles/bloxd.io/main.js` (Changed code · before: `L24821` → after: `L24833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24833) · [Before (L24821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24821)

```diff
-             const hH = Object.values(GH.f).find((HH => HH === `${rH}.${SH}`));
+             const oB = Object.values(zB.f).find((BB => BB === `${DB}.${QB}`));
```

#### 1597. `bundles/bloxd.io/main.js` (Changed code · before: `L24844` → after: `L24856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24856) · [Before (L24844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24844)

```diff
-             } : BH && (0, zH.d)(HH).length < zH.u ? {
+             } : OB && (0, yB.e)(BB).length < yB.v ? {
```

#### 1598. `bundles/bloxd.io/main.js` (Changed code · before: `L24847` → after: `L24859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24859) · [Before (L24847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24847)

```diff
-                 min: String(zH.u)
+                 min: String(yB.v)
```

#### 1599. `bundles/bloxd.io/main.js` (Changed code · before: `L24861` → after: `L24873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24873) · [Before (L24861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24861)

```diff
-                     if ("string" !== typeof BH.type) throw new Error(`Unknown schema type. typeof schema.type: ${typeof BH.type}. schema.type: ${BH.type}`);
+                     if ("string" !== typeof OB.type) throw new Error(`Unknown schema type. typeof schema.type: ${typeof OB.type}. schema.type: ${OB.type}`);
```

#### 1600. `bundles/bloxd.io/main.js` (Changed code · before: `L24914` → after: `L24926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24926) · [Before (L24914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24914)

```diff
-           const pH = [143, 0, 1, 39, 3, "a", "i", 139, 5, "f", "d", 8, 255, "length", "b", 2, 227, 185, 28, "undefined", void 0, "c", 92, 152, 63, 6, "fromCodePoint", 7, 12, "push"];
+           const xB = [0, 1, 8, 255, "length", 67, 247, "a", 68, "undefined", 2, 63, 6, "fromCodePoint", 7, 12, "push", 45, "b"];
```

#### 1601. `bundles/bloxd.io/main.js` (Changed code · before: `L24917-L24929` → after: `L24929-L24944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24929-L24944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24929-L24944) · [Before (L24917-L24929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24917-L24929)

```diff
-             for (BB(HH[pH[13]] = pH[2], HH[pH[5]] = 'yOPoYGq.6?~}$AzUViDJfrs>N89)BtE5":unS;![7`#&kb1dFv0/@a_KH3^TR|pZe+M=LC<XxI(2h4,{mw%gWl*c]jQ', HH[pH[0]] = "" + (HH[pH[1]] || ""), HH[pH[4]] = HH[pH[0]].length, HH[pH[10]] = [], HH[pH[8]] = pH[1], HH[pH[9]] = pH[1], HH[-pH[7]] = … [truncated]
-               if (HH[pH[6]] = HH[pH[5]].indexOf(HH[pH[0]][HH[-pH[3]]]), HH[pH[6]] !== -pH[2])
-                 if (HH[-pH[7]] < pH[1]) HH[-pH[7]] = HH[pH[6]];
-                 else {
-                   BB(HH[-pH[7]] += 91 * HH[pH[6]], HH[pH[8]] |= HH[-pH[7]] << HH[pH[9]], HH[pH[9]] += (8191 & HH[-pH[7]]) > 88 ? 13 : 14);
-                   do {
-                     BB(HH[pH[10]].push(HH[pH[8]] & pH[12]), HH[pH[8]] >>= pH[11], HH[pH[9]] -= pH[11])
-                   } while (HH[pH[9]] > pH[27]);
-                   HH[-pH[7]] = -pH[2]
-                 } return HH[-pH[7]] > -pH[2] && HH[pH[10]].push((HH[pH[8]] | HH[-pH[7]] << HH[pH[9]]) & pH[12]),
-               function(...HH) {
-                 return HH[pH[13]] = pH[2], typeof ZH !== pH[19] && ZH ? (new ZH).decode(new dH(HH[pH[1]])) : typeof aH !== pH[19] && aH ? aH.from(HH[pH[1]]).toString("utf-8") : iH(HH[pH[1]])
-               }(HH[pH[10]])
+             return BB[xB[4]] = xB[1], typeof hB[BB[xB[0]]] === xB[9] ? hB[BB[xB[0]]] = function(BB) {
+               var OB, GB, YB, DB, QB, oB, jB;
+               for (OO(OB = "" + (BB || ""), GB = OB.length, YB = [], DB = xB[0], QB = xB[0], oB = -xB[1]), jB = xB[0]; jB < GB; jB++) {
+                 var yB = '^CWlgPOeV(|N{6`Y0)m&tHdXkhuBfoqx_7Q?nRyM%4D[w+s#@b}I93rc!</>.Tv]AS:"*;jLEaFK~UpiG=z1$,8Z25J'.indexOf(OB[jB]);
+                 if (yB !== -xB[1])
+                   if (oB < xB[0]) oB = yB;
+                   else {
+                     OO(oB += 91 * yB, DB |= oB << QB, QB += (8191 & oB) > 88 ? 13 : 14);
+                     do {
+                       OO(YB.push(DB & xB[3]), DB >>= xB[2], QB -= xB[2])
+                     } while (QB > xB[14]);
+                     oB = -xB[1]
+                   }
+               }
+               return oB > -xB[1] && YB.push((DB | oB << QB) & xB[3]), BO(YB)
+             }(aB[BB[xB[0]]]) : hB[BB[xB[0]]]
```

#### 1602. `bundles/bloxd.io/main.js` (Changed code · before: `L24933` → after: `L24948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24948) · [Before (L24933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24933)

```diff
-             return HH[pH[13]] = pH[2], typeof FH[HH[pH[1]]] === pH[19] ? FH[HH[pH[1]]] = yH(DH[HH[pH[1]]]) : FH[HH[pH[1]]]
+             return BB[xB[4]] = xB[1], typeof TB !== xB[9] && TB ? (new TB).decode(new bB(BB[xB[0]])) : typeof CB !== xB[9] && CB ? CB.from(BB[xB[0]]).toString("utf-8") : sB(BB[xB[0]])
```

#### 1603. `bundles/bloxd.io/main.js` (Changed code · before: `L24945` → after: `L24960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24960) · [Before (L24945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24945)

```diff
-                 colour: LH ? XH.s[LH] : void 0
+                 colour: GB ? PB.v[GB] : void 0
```

#### 1604. `bundles/bloxd.io/main.js` (Changed code · before: `L24952` → after: `L24967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24967) · [Before (L24952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24952)

```diff
-             return HH > 999999 ? `${(HH/1e6).toFixed(BH)}m` : HH > 999 ? `${(HH/1e3).toFixed(BH)}k` : HH.toString()
+             return BB > 999999 ? `${(BB/1e6).toFixed(OB)}m` : BB > 999 ? `${(BB/1e3).toFixed(OB)}k` : BB.toString()
```

#### 1605. `bundles/bloxd.io/main.js` (Changed code · before: `L24954-L24955` → after: `L24969-L24970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24969-L24970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24969-L24970) · [Before (L24954-L24955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24954-L24955)

```diff
-           BB(FH = {}, DH = ["?12(VhCAY3H},CMEQ6shNhF7F3??>P?", '`Fb~k2JA{a]JU9GDX_5@Z4!DaAgDvFb[tX+"ZW#ezM_YIFfBK/q.', "7>{YMxkEo", 'eT7_Z[BE@_"@wRz', 'M7`2Z(@7iZ.VYX7JcbI"4(%7x+,R#|+ii1VE|^DNn_B', "5L0)k<(N;_9i:V8#dur5}0raVUws~;jV/u24T/@*16", "IpN2H1vlTi]1/^.!>+HIDwW7]A=HJ%#9F/x … [truncated]
-             BB(HH[pH[13]] = pH[1], HH[-pH[17]] = [function() {
+           OO(hB = {}, aB = ["or@I0yfW=mV*dPuXXo4OK<v{P|aU1y%up>kqenNen6>Gph5da)Cq{", "FIuUrRWV0mJ3w>3?UQy9j}j{t(Qk^BRq|gO~Lnx&htOXljv)%R{|", "1jqx{n.mwv!ah@c4U*R|Qb.sT!.Gagyh|]TfO}|8^m4eC", "vx*}S=O9MA8Fd}8d)sEOmvRKE/8<sb9Q", '*@=I0yqn"<SN%#6BWrl', "Sl6|i;mkSrF3WRGBi)>U0n`k*&_;n@ … [truncated]
+             OO(BB[xB[4]] = xB[0], BB[xB[7]] = [function() {
```

#### 1606. `bundles/bloxd.io/main.js` (Changed code · before: `L24963` → after: `L24978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24978) · [Before (L24963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24963)

```diff
-             }], HH[pH[14]] = pH[20], HH[pH[15]] = []);
+             }], BB[xB[1]] = void 0, BB[-xB[5]] = []);
```

#### 1607. `bundles/bloxd.io/main.js` (Changed code · before: `L24965` → after: `L24980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24980) · [Before (L24965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24965)

```diff
-               BB(HH[pH[14]] = Object, HH[pH[15]][pH[29]]("".__proto__.constructor.name))
+               OO(BB[xB[1]] = Object, BB[-xB[5]][xB[16]]("".__proto__.constructor.name))
```

#### 1608. `bundles/bloxd.io/main.js` (Changed code · before: `L24967-L24970` → after: `L24982-L24985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24982-L24985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24982-L24985) · [Before (L24967-L24970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24967-L24970)

```diff
-             HH: for (HH[pH[16]] = pH[1]; HH[pH[16]] < HH[-pH[17]][pH[13]]; HH[pH[16]]++) try {
-               for (HH[pH[14]] = HH[-pH[17]][HH[pH[16]]](), HH[pH[18]] = pH[1]; HH[pH[18]] < HH[pH[15]][pH[13]]; HH[pH[18]]++)
-                 if (typeof HH[pH[14]][HH[pH[15]][HH[pH[18]]]] === pH[19]) continue HH;
-               return HH[pH[14]]
+             BB: for (BB[-xB[6]] = xB[0]; BB[-xB[6]] < BB[xB[7]][xB[4]]; BB[-xB[6]]++) try {
+               for (BB[xB[1]] = BB[xB[7]][BB[-xB[6]]](), BB[xB[8]] = xB[0]; BB[xB[8]] < BB[-xB[5]][xB[4]]; BB[xB[8]]++)
+                 if (typeof BB[xB[1]][BB[-xB[5]][BB[xB[8]]]] === xB[9]) continue BB;
+               return BB[xB[1]]
```

#### 1609. `bundles/bloxd.io/main.js` (Changed code · before: `L24972-L24977` → after: `L24987-L24993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24987-L24993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24987-L24993) · [Before (L24972-L24977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24972-L24977)

```diff
-             return HH[pH[14]] || this
-           }() || {}, ZH = wH.TextDecoder, dH = wH.Uint8Array, aH = wH.rX, sH = wH.String || String, JH = wH.Array || Array, iH = function(...HH) {
-             return BB(HH[pH[13]] = pH[1], HH[pH[5]] = new JH(128), HH[pH[2]] = sH[pH[26]] || sH.fromCharCode, HH[pH[21]] = []),
-               function(...BH) {
-                 for (BB(BH[pH[13]] = pH[2], BH[pH[5]] = pH[20], BH[pH[15]] = pH[20], BH[-pH[23]] = BH[pH[1]][pH[13]], HH[pH[21]][pH[13]] = pH[1]), BH[-pH[22]] = pH[1]; BH[-pH[22]] < BH[-pH[23]];) BB(BH[pH[15]] = BH[pH[1]][BH[-pH[22]]++], BH[pH[15]] <= 127 ? BH[pH[5]] = BH[pH[15]] … [truncated]
-                 return HH[pH[21]].join("")
+             return BB[xB[1]] || this
+           }() || {}, TB = eB.TextDecoder, bB = eB.Uint8Array, CB = eB.BP, HB = eB.String || String, vB = eB.Array || Array, sB = function(...BB) {
+             return OO(BB[xB[4]] = xB[0], BB[xB[17]] = new vB(128), BB[xB[1]] = HB[xB[13]] || HB.fromCharCode, BB[xB[10]] = []),
+               function(OB) {
+                 var GB, YB, DB, QB;
+                 for (OO(YB = void 0, DB = OB[xB[4]], BB[xB[10]][xB[4]] = xB[0]), QB = xB[0]; QB < DB;) OO(YB = OB[QB++], YB <= 127 ? GB = YB : YB <= 223 ? GB = (31 & YB) << xB[12] | OB[QB++] & xB[11] : YB <= 239 ? GB = (15 & YB) << xB[15] | (OB[QB++] & xB[11]) << xB[12] | OB[QB++ … [truncated]
+                 return BB[xB[10]].join("")
```

#### 1610. `bundles/bloxd.io/main.js` (Changed code · before: `L24979` → after: `L24995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L24995) · [Before (L24979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24979)

```diff
-           }()), nH = Math[HB(109)](111 * Math[HB(110)](YH[pH[10]] * (YH[pH[10]] - pH[2]))) + 165;
+           }()), cB = Math[tB(76)](111 * Math[tB(77)](lB[xB[18]] * (lB[xB[18]] - xB[1]))) + 165;
```

#### 1611. `bundles/bloxd.io/main.js` (Changed code · before: `L24994-L25016` → after: `L25010-L25032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25010-L25032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25010-L25032) · [Before (L24994-L25016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L24994-L25016)

```diff
-             BS: "texture",
-             LS: "minLifeTime",
-             rS: "maxLifeTime",
-             SS: "minEmitPower",
-             hS: "maxEmitPower",
-             tS: "minSize",
-             zS: "maxSize",
-             CS: "gravity",
-             XS: "velocityGradients",
-             GS: "timeFraction",
-             YS: "factor",
-             uS: "factor2",
-             QS: "colorGradients",
-             WS: "minColor",
-             MS: "maxColor",
-             xS: "color",
- ... (7 more removed lines; see GitHub link above)
+             KY: "texture",
+             uY: "minLifeTime",
+             mY: "maxLifeTime",
+             IY: "minEmitPower",
+             FY: "maxEmitPower",
+             iY: "minSize",
+             LY: "maxSize",
+             gY: "gravity",
+             rY: "velocityGradients",
+             XY: "timeFraction",
+             wY: "factor",
+             EY: "factor2",
+             cY: "colorGradients",
+             hY: "minColor",
+             aY: "maxColor",
+             eY: "color",
+ ... (7 more added lines; see GitHub link above)
```

#### 1612. `bundles/bloxd.io/main.js` (Changed code · before: `L25020` → after: `L25036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25036) · [Before (L25020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25020)

```diff
-             return rB(HH, (HH => SB[HH] ? SB[HH] : (console.error(`Unknown particle system option key: ${HH}.`), HH)))
+             return DO(BB, (BB => QO[BB] ? QO[BB] : (console.error(`Unknown particle system option key: ${BB}.`), BB)))
```

#### 1613. `bundles/bloxd.io/main.js` (Changed code · before: `L25031` → after: `L25047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25047) · [Before (L25031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25031)

```diff
-         }, , , , , , , , , (HH, BH, LH) => {
+         }, , , , , , , , (BB, OB, GB) => {
```

#### 1614. `bundles/bloxd.io/main.js` (Changed code · before: `L25033` → after: `L25049-L25050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25049-L25050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25049-L25050) · [Before (L25033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25033)

```diff
-             d: () => rH,
+             b: () => DB,
+             e: () => QB,
```

#### 1615. `bundles/bloxd.io/main.js` (Changed code · before: `L25035-L25037` → after: `L25052-L25053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25052-L25053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25052-L25053) · [Before (L25035-L25037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25035-L25037)

```diff
-             g: () => hH,
-             k: () => tH,
-             l: () => zH
+             j: () => jB,
+             n: () => yB
```

#### 1616. `bundles/bloxd.io/main.js` (Changed code · before: `L25039` → after: `L25055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25055) · [Before (L25039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25039)

```diff
-           var AH = LH(304);
+           var YB = GB(331);
```

#### 1617. `bundles/bloxd.io/main.js` (Changed code · before: `L25057` → after: `L25073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25073) · [Before (L25057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25057)

```diff
-               return `${HH}-${BH=BH.padStart(this.MIN_SNOWFLAKE_LENGTH,"0")}`
+               return `${BB}-${OB=OB.padStart(this.MIN_SNOWFLAKE_LENGTH,"0")}`
```

#### 1618. `bundles/bloxd.io/main.js` (Changed code · before: `L25066` → after: `L25082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25082) · [Before (L25066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25066)

```diff
-                   throw new Error(`Failed to parse Discord-context parameters: ${JSON.stringify(HH)}`)
+                   throw new Error(`Failed to parse Discord-context parameters: ${JSON.stringify(BB)}`)
```

#### 1619. `bundles/bloxd.io/main.js` (Changed code · before: `L25120` → after: `L25136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25136) · [Before (L25120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25120)

```diff
-         }, , (HH, BH, LH) => {
+         }, , , , , , , , , (BB, OB, GB) => {
```

#### 1620. `bundles/bloxd.io/main.js` (Changed code · before: `L25122-L25125` → after: `L25138-L25140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25138-L25140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25138-L25140) · [Before (L25122-L25125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25122-L25125)

```diff
-             d: () => hH,
-             h: () => YH,
-             k: () => EH,
-             l: () => tH,
+             e: () => oB,
+             i: () => lB,
+             j: () => MB,
```

#### 1621. `bundles/bloxd.io/main.js` (Changed code · before: `L25127-L25129` → after: `L25142-L25145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25142-L25145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25142-L25145) · [Before (L25127-L25129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25127-L25129)

```diff
-             p: () => CH,
-             q: () => rH,
-             u: () => SH
+             o: () => yB,
+             s: () => JB,
+             t: () => DB,
+             v: () => QB
```

#### 1622. `bundles/bloxd.io/main.js` (Changed code · before: `L25144` → after: `L25160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25160) · [Before (L25144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25144)

```diff
-             return BH.length >= SH ? BH : null
+             return OB.length >= QB ? OB : null
```

#### 1623. `bundles/bloxd.io/main.js` (Changed code · before: `L25148` → after: `L25164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25164) · [Before (L25148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25148)

```diff
-             return LH ? `/${HH}/${BH}/${encodeURIComponent(LH)}` : `/${HH}/${BH}`
+             return GB ? `/${BB}/${OB}/${encodeURIComponent(GB)}` : `/${BB}/${OB}`
```

#### 1624. `bundles/bloxd.io/main.js` (Changed code · before: `L25157` → after: `L25173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25173) · [Before (L25157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25157)

```diff
-             return HH.urlId ? zH("player", HH.urlId, null !== (BH = tH(HH.name)) && void 0 !== BH ? BH : HH.name) : `/player/${encodeURIComponent(HH.name)}`
+             return BB.urlId ? yB("player", BB.urlId, null !== (OB = jB(BB.name)) && void 0 !== OB ? OB : BB.name) : `/player/${encodeURIComponent(BB.name)}`
```

#### 1625. `bundles/bloxd.io/main.js` (Changed code · before: `L25182` → after: `L25198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25198) · [Before (L25182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25182)

```diff
-         }, , , (HH, BH, LH) => {
+         }, , , , (BB, OB, GB) => {
```

#### 1626. `bundles/bloxd.io/main.js` (Changed code · before: `L25184-L25185` → after: `L25200-L25201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25200-L25201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25200-L25201) · [Before (L25184-L25185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25184-L25185)

```diff
-             B: () => xH,
-             F: () => WH,
+             C: () => DB,
+             D: () => RB,
```

#### 1627. `bundles/bloxd.io/main.js` (Changed code · before: `L25187` → after: `L25203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25203) · [Before (L25187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25187)

```diff
-             I: () => QH,
+             J: () => NB,
```

#### 1628. `bundles/bloxd.io/main.js` (Changed code · before: `L25189` → after: `L25205-L25207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25205-L25207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25205-L25207) · [Before (L25189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25189)

```diff
-             N: () => hH,
+             O: () => JB,
+             Q: () => oB,
+             b: () => jB,
```

#### 1629. `bundles/bloxd.io/main.js` (Changed code · before: `L25192-L25195` → after: `L25210-L25212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25210-L25212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25210-L25212) · [Before (L25192-L25195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25192-L25195)

```diff
-             g: () => YH,
-             h: () => uH,
-             l: () => EH,
-             o: () => SH,
+             i: () => pB,
+             j: () => MB,
+             n: () => QB,
```

#### 1630. `bundles/bloxd.io/main.js` (Changed code · before: `L25197-L25200` → after: `L25214-L25216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25214-L25216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25214-L25216) · [Before (L25197-L25200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25197-L25200)

```diff
-             r: () => zH,
-             v: () => vH,
-             y: () => AH,
-             z: () => rH
+             t: () => yB,
+             x: () => WB,
+             y: () => YB
```

#### 1631. `bundles/bloxd.io/main.js` (Changed code · before: `L25213` → after: `L25229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25229) · [Before (L25213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25213)

```diff
-               return null !== (AH = null === HH || void 0 === HH ? void 0 : HH[LH]) && void 0 !== AH ? AH : ""
+               return null !== (YB = null === BB || void 0 === BB ? void 0 : BB[GB]) && void 0 !== YB ? YB : ""
```

#### 1632. `bundles/bloxd.io/main.js` (Changed code · before: `L25233` → after: `L25249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25249) · [Before (L25233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25233)

```diff
-         }, , , , , , (HH, BH, LH) => {
+         }, , , , , , , , (BB, OB, GB) => {
```

#### 1633. `bundles/bloxd.io/main.js` (Changed code · before: `L25235` → after: `L25251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25251) · [Before (L25235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25235)

```diff
-             e: () => rH
+             c: () => DB
```

#### 1634. `bundles/bloxd.io/main.js` (Changed code · before: `L25308` → after: `L25324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25324) · [Before (L25308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25308)

```diff
-         }, , , , , , (HH, BH, LH) => {
+         }, , , , , , , (BB, OB, GB) => {
```

#### 1635. `bundles/bloxd.io/main.js` (Changed code · before: `L25310-L25312` → after: `L25326-L25328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25326-L25328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25326-L25328) · [Before (L25310-L25312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25310-L25312)

```diff
-             d: () => zH,
-             g: () => GH,
-             j: () => YH
+             c: () => yB,
+             e: () => zB,
+             i: () => lB
```

#### 1636. `bundles/bloxd.io/main.js` (Changed code · before: `L25314` → after: `L25330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25330) · [Before (L25314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25314)

```diff
-           var AH = LH(22),
+           var YB = GB(29),
```

#### 1637. `bundles/bloxd.io/main.js` (Changed code · before: `L25316-L25318` → after: `L25332-L25334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25332-L25334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25332-L25334) · [Before (L25316-L25318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25316-L25318)

```diff
-             SH = LH(30),
-             hH = LH(619),
-             tH = LH(1196);
+             QB = GB(31),
+             oB = GB(641),
+             jB = GB(1255);
```

#### 1638. `bundles/bloxd.io/main.js` (Changed code · before: `L25330-L25331` → after: `L25346-L25347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25346-L25347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25346-L25347) · [Before (L25330-L25331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25330-L25331)

```diff
-                 LH = SH.e.getItem(EH);
-               if ((0, hH.M)(LH) || BH.push(LH), "undefined" !== typeof navigator) {
+                 GB = QB.g.getItem(MB);
+               if ((0, oB.Q)(GB) || OB.push(GB), "undefined" !== typeof navigator) {
```

#### 1639. `bundles/bloxd.io/main.js` (Changed code · before: `L25337` → after: `L25353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25353) · [Before (L25337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25337)

```diff
-               const AH = null !== (HH = this.getBestLanguageCodeFromCandidates(BH)) && void 0 !== HH ? HH : zH.ENGLISH;
+               const YB = null !== (BB = this.getBestLanguageCodeFromCandidates(OB)) && void 0 !== BB ? BB : yB.ENGLISH;
```

#### 1640. `bundles/bloxd.io/main.js` (Changed code · before: `L25345` → after: `L25361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25361) · [Before (L25345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25345)

```diff
-               null !== BH ? this.setCurrentLanguageCode(BH) : console.error(`Failed set language: could not infer language from "${HH}"`)
+               null !== OB ? this.setCurrentLanguageCode(OB) : console.error(`Failed set language: could not infer language from "${BB}"`)
```

#### 1641. `bundles/bloxd.io/main.js` (Changed code · before: `L25348` → after: `L25364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25364) · [Before (L25348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25348)

```diff
-               HH !== this.currentLanguageCode && (this.currentLanguageCode = HH, SH.e.setItem(EH, HH), "undefined" !== typeof document && (document.documentElement.lang = HH), CH.emit("languageCodeUpdated", HH))
+               BB !== this.currentLanguageCode && (this.currentLanguageCode = BB, QB.g.setItem(MB, BB), "undefined" !== typeof document && (document.documentElement.lang = BB), JB.emit("languageCodeUpdated", BB))
```

#### 1642. `bundles/bloxd.io/main.js` (Changed code · before: `L25375` → after: `L25391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25391) · [Before (L25375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25375)

```diff
-           const VH = [2, 0, 1, 8, "c", 239, 9, 7, 5, "f", 4, 255, "length", 13, 126, "d", "a", "undefined", void 0, 21, 249, 3, "b", 78, 63, 6, "fromCodePoint", 12, "push", 245, 81, 169, "i", 91, "e", 120, 8191, 88, 14, 33554432, 67108864, 18, 193, 89, !1, 47, 73, "g", 67, !0];
+           const nB = [135, 0, 1, 8, 3, "a", "i", 69, "e", "f", 240, 255, "length", 2, 21, 235, "undefined", void 0, "c", 4, 5, 239, 63, 6, "fromCodePoint", 7, 12, "push", "b", 18, 142, 143, 91, 8191, 88, 13, 14, "d", "h", 43, "g", 238, 168, 188, 1023, 65536, 191, 10, 55296, 56320 … [truncated]
```

#### 1643. `bundles/bloxd.io/main.js` (Changed code · before: `L25378` → after: `L25394-L25409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25394-L25409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25394-L25409) · [Before (L25378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25378)

```diff
-             return HH[VH[12]] = VH[2], typeof MH !== VH[17] && MH ? (new MH).decode(new xH(HH[VH[1]])) : typeof vH !== VH[17] && vH ? vH.from(HH[VH[1]]).toString("utf-8") : UH(HH[VH[1]])
+             return BB[nB[12]] = nB[2], typeof pB[BB[nB[1]]] === nB[16] ? pB[BB[nB[1]]] = function(...BB) {
+               for (dB(BB[nB[12]] = nB[2], BB[nB[5]] = 'A?cfSeBDVrRZJalIu&L4N=1dw(%;jn.kObg>$zYX8H{hQ/)#~vG,6U*32F:795+iKp<|[P^Eq!M]}_s`@"xWtomCT0y', BB[nB[0]] = "" + (BB[nB[1]] || ""), BB[nB[4]] = BB[nB[0]].length, BB[nB[10]] = [], BB[nB[8]] = nB[1], BB[nB[9]] = nB[1], BB[nB[7]]  … [truncated]
+                 if (BB[nB[6]] = BB[nB[5]].indexOf(BB[nB[0]][BB[nB[3]]]), BB[nB[6]] !== -nB[2])
+                   if (BB[nB[7]] < nB[1]) BB[nB[7]] = BB[nB[6]];
+                   else {
+                     dB(BB[nB[7]] += BB[nB[6]] * nB[32], BB[nB[8]] |= BB[nB[7]] << BB[nB[9]], BB[nB[9]] += (BB[nB[7]] & nB[33]) > nB[34] ? nB[35] : nB[36]);
+                     do {
+                       dB(BB[nB[10]].push(BB[nB[8]] & nB[11]), BB[nB[8]] >>= nB[3], BB[nB[9]] -= nB[3])
+                     } while (BB[nB[9]] > nB[25]);
+                     BB[nB[7]] = -nB[2]
+                   } return BB[nB[7]] > -nB[2] && BB[nB[10]].push((BB[nB[8]] | BB[nB[7]] << BB[nB[9]]) & nB[11]), fB(BB[nB[10]])
+             }(qB[BB[nB[1]]]) : pB[BB[nB[1]]]
+           }
+ 
+           function fB(BB) {
+             return typeof NB !== nB[16] && NB ? (new NB).decode(new RB(BB)) : typeof WB !== nB[16] && WB ? WB.from(BB).toString("utf-8") : SB(BB)
```

#### 1644. `bundles/bloxd.io/main.js` (Changed code · before: `L25382-L25407` → after: `L25413-L25438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25413-L25438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25413-L25438) · [Before (L25382-L25407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25382-L25407)

```diff
-           if (kH(uH = {}, QH = ['NX+7;aV"[Cfs@ai&ca/C', ",{B8YX/jn3$8gNY>o4H7sHdyU]2qe2HGD4?jKAtrl3yI_R]t+3*8%&=", ")A@>!;{1LX5", "=@7Ghj:(R:+qz}19)lO^B5Cj|*%3UP@Gf(6)EAte1", "Mvz._8l1[?`", "a$F</SCjsNpvyP>2X|/V{R<$R*6LQ@", ":ASsOlEl@", ":1d1+yL9)4b(U~)i3$u^f", "n|?BYn~Kk$R?3}6aW … [truncated]
-               kH(HH[VH[12]] = VH[1], HH[VH[16]] = [function() {
-                 return globalThis
-               }, function() {
-                 return global
-               }, function() {
-                 return window
-               }, function() {
-                 return new Function("return this")()
-               }], HH[-VH[14]] = VH[18], HH[-VH[13]] = []);
-               try {
-                 kH(HH[-VH[14]] = Object, HH[-VH[13]][VH[28]]("".__proto__.constructor.name))
-               } catch (QH) {}
-               HH: for (HH[VH[15]] = VH[1]; HH[VH[15]] < HH[VH[16]][VH[12]]; HH[VH[15]]++) try {
-                 for (HH[-VH[14]] = HH[VH[16]][HH[VH[15]]](), HH[-VH[10]] = VH[1]; HH[-VH[10]] < HH[-VH[13]][VH[12]]; HH[-VH[10]]++)
-                   if (typeof HH[-VH[14]][HH[-VH[13]][HH[-VH[10]]]] === VH[17]) continue HH;
- ... (10 more removed lines; see GitHub link above)
+           dB(pB = {}, qB = ["UFL;i`jL;NG!y^PkeiUk0#*c", "QN#6G[m8RlT_:PynPNGq,,M8eKeuN;+drEDB2gnDr:~7,lTnfnpB", "8*y_G]wMIIx^K;RYwp`S`Mxg)2;wdl1HzdMO5`=a?*x2hc:$cMWOx$RVB", 'p[7U6_j$"F~@_S(gr?', ']lM,&$68CNQ+e~BL"7/kds"nAJp2r~9$<A', "DSu.b!x)Z+cx?t|.Y[#6cgqM/Z3@Cc*>$f>nTYmg_+JR27 … [truncated]
+             dB(BB[nB[12]] = nB[1], BB[nB[5]] = [function() {
+               return globalThis
+             }, function() {
+               return global
+             }, function() {
+               return window
+             }, function() {
+               return new Function("return this")()
+             }], BB[nB[2]] = nB[17], BB[nB[13]] = []);
+             try {
+               dB(BB[nB[2]] = Object, BB[nB[13]][nB[27]]("".__proto__.constructor.name))
+             } catch (qB) {}
+             BB: for (BB[nB[14]] = nB[1]; BB[nB[14]] < BB[nB[5]][nB[12]]; BB[nB[14]]++) try {
+               for (BB[nB[2]] = BB[nB[5]][BB[nB[14]]](), BB[nB[15]] = nB[1]; BB[nB[15]] < BB[nB[13]][nB[12]]; BB[nB[15]]++)
+                 if (typeof BB[nB[2]][BB[nB[13]][BB[nB[15]]]] === nB[16]) continue BB;
+ ... (10 more added lines; see GitHub link above)
```

#### 1645. `bundles/bloxd.io/main.js` (Changed code · before: `L25409-L25411` → after: `L25440-L25442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25440-L25442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25440-L25442) · [Before (L25409-L25411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25409-L25411)

```diff
-               for (kH(HH[VH[12]] = VH[2], HH[-VH[31]] = '<?;3%)>,zw60_}=2x5:8&!b7$hm|y[KNvOGLVaP~*l`gE@Wnu14c]M({QCHdJZXRfUTIqsBFSikYtDpAo9#.+/^"jer', HH[VH[22]] = "" + (HH[VH[1]] || ""), HH[VH[30]] = HH[VH[22]].length, HH[VH[15]] = [], HH[VH[34]] = VH[1], HH[VH[35]] = VH[1], HH[ … [truncated]
-                 if (HH[VH[32]] = HH[-VH[31]].indexOf(HH[VH[22]][HH[VH[3]]]), HH[VH[32]] !== -VH[2])
-                   if (HH[VH[7]] < VH[1]) HH[VH[7]] = HH[VH[32]];
+               for (dB(BB[nB[12]] = nB[2], BB[nB[2]] = 'Ipxu}YA,8rD~_>1k(g&5t#79s`W)QZE!4haynH<f^/JRGO[3%mb;NcMiv6@P*CSXo+|qL]$U0lBj"KFd:{w=?z2e.VT', BB[nB[28]] = "" + (BB[nB[1]] || ""), BB[nB[31]] = BB[nB[28]].length, BB[nB[37]] = [], BB[nB[29]] = nB[1], BB[nB[9]] = nB[1], BB[nB[ … [truncated]
+                 if (BB[-nB[13]] = BB[nB[2]].indexOf(BB[nB[28]][BB[nB[30]]]), BB[-nB[13]] !== -nB[2])
+                   if (BB[nB[25]] < nB[1]) BB[nB[25]] = BB[-nB[13]];
```

#### 1646. `bundles/bloxd.io/main.js` (Changed code · before: `L25413` → after: `L25444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25444) · [Before (L25413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25413)

```diff
-                     kH(HH[VH[7]] += HH[VH[32]] * VH[33], HH[VH[34]] |= HH[VH[7]] << HH[VH[35]], HH[VH[35]] += (HH[VH[7]] & VH[36]) > VH[37] ? VH[13] : VH[38]);
+                     dB(BB[nB[25]] += BB[-nB[13]] * nB[32], BB[nB[29]] |= BB[nB[25]] << BB[nB[9]], BB[nB[9]] += (BB[nB[25]] & nB[33]) > nB[34] ? nB[35] : nB[36]);
```

#### 1647. `bundles/bloxd.io/main.js` (Changed code · before: `L25415-L25418` → after: `L25446-L25449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25446-L25449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25446-L25449) · [Before (L25415-L25418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25415-L25418)

```diff
-                       kH(HH[VH[15]].push(HH[VH[34]] & VH[11]), HH[VH[34]] >>= VH[3], HH[VH[35]] -= VH[3])
-                     } while (HH[VH[35]] > VH[7]);
-                     HH[VH[7]] = -VH[2]
-                   } return HH[VH[7]] > -VH[2] && HH[VH[15]].push((HH[VH[34]] | HH[VH[7]] << HH[VH[35]]) & VH[11]), OH(HH[VH[15]])
+                       dB(BB[nB[37]].push(BB[nB[29]] & nB[11]), BB[nB[29]] >>= nB[3], BB[nB[9]] -= nB[3])
+                     } while (BB[nB[9]] > nB[25]);
+                     BB[nB[25]] = -nB[2]
+                   } return BB[nB[25]] > -nB[2] && BB[nB[37]].push((BB[nB[29]] | BB[nB[25]] << BB[nB[9]]) & nB[11]), fB(BB[nB[37]])
```

#### 1648. `bundles/bloxd.io/main.js` (Changed code · before: `L25422` → after: `L25453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25453) · [Before (L25422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25422)

```diff
-               return HH[VH[12]] = VH[2], typeof uH[HH[VH[1]]] === VH[17] ? uH[HH[VH[1]]] = mH(QH[HH[VH[1]]]) : uH[HH[VH[1]]]
+               return BB[nB[12]] = nB[2], typeof pB[BB[nB[1]]] === nB[16] ? pB[BB[nB[1]]] = OB(qB[BB[nB[1]]]) : pB[BB[nB[1]]]
```

#### 1649. `bundles/bloxd.io/main.js` (Changed code · before: `L25425-L25428` → after: `L25470-L25472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25470-L25472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25470-L25472) · [Before (L25425-L25428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25425-L25428)

```diff
-             function IH(...HH) {
-               function BH(HH) {
-                 return HH[VH[2]] * VH[40] + (HH[VH[1]] < VH[1] ? VH[39] | HH[VH[1]] : HH[VH[1]])
-               }
+                 function GB(...BB) {
+                   return BB[nB[12]] = nB[2], typeof pB[BB[nB[1]]] === nB[16] ? pB[BB[nB[1]]] = OB(qB[BB[nB[1]]]) : pB[BB[nB[1]]]
+                 }
```

#### 1650. `bundles/bloxd.io/main.js` (Changed code · before: `L25430-L25439` → after: `L25474-L25476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25474-L25476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25474-L25476) · [Before (L25430-L25439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25430-L25439)

```diff
-               function LH(...HH) {
-                 switch (HH[VH[12]] = VH[2], ((HH[VH[1]] & VH[39]) !== VH[1]) * VH[2] + (HH[VH[1]] < VH[1]) * VH[0]) {
-                   case VH[1]:
-                     return [HH[VH[1]] % VH[39], Math.trunc(HH[VH[1]] / VH[40])];
-                   case VH[2]:
-                     return [HH[VH[1]] % VH[39] - VH[39], Math.trunc(HH[VH[1]] / VH[40]) + VH[2]];
-                   case VH[0]:
-                     return [((HH[VH[1]] + VH[39]) % VH[39] + VH[39]) % VH[39], Math.round(HH[VH[1]] / VH[40])];
-                   case VH[21]:
-                     return [HH[VH[1]] % VH[39], Math.trunc(HH[VH[1]] / VH[40])]
+                 function YB(...BB) {
+                   for (dB(BB[nB[12]] = nB[2], BB[nB[5]] = [], BB[nB[13]] = nB[1], BB[nB[43]] = BB[nB[1]].length, BB[nB[19]] = nB[17], BB[nB[8]] = nB[17]); BB[nB[13]] < BB[nB[43]];) dB(BB[nB[19]] = BB[nB[1]].charCodeAt(BB[nB[13]]++), BB[nB[19]] >= nB[48] && BB[nB[19]] <= 56319 &&  … [truncated]
+                   return BB[nB[5]]
```

#### 1651. `bundles/bloxd.io/main.js` (Changed code · before: `L25441-L25454` → after: `L25478-L25502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25478-L25502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25478-L25502) · [Before (L25441-L25454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25441-L25454)

```diff
-               }
-               HH[VH[12]] = VH[1], kH(HH[VH[41]] = BH([VH[0], VH[10]]), HH[VH[2]] = BH([VH[2], VH[0]]), HH[VH[42]] = HH[VH[41]] + HH[VH[2]], HH[VH[21]] = HH[VH[42]] - HH[VH[2]], HH[VH[10]] = HH[VH[21]] * VH[0], HH[VH[8]] = HH[VH[10]] / VH[0], console.log(LH(HH[VH[42]])), console.l … [truncated]
-             }
-             oH(VH[37]) in bH && IH();
-             const fH = window[oH(VH[43])];
-             window[oH(VH[43])] = function() {
-               if ((0, SH[VH[32]])()) {
-                 oH(90) in bH && (module.exports = async (HH = () => {
-                   throw new Error(oH(VH[33]))
-                 }) => {
-                   const BH = new Set(process.argv.slice(VH[0]));
-                   if (!BH.has(oH(92))) {
-                     if (BH.size !== VH[2]) return VH[44];
-                     if (!BH.has("-v")) return VH[44]
+ 
+                 function DB(...OB) {
+                   for (dB(OB[nB[12]] = nB[2], OB[nB[2]] = OB[nB[1]].length, OB[nB[28]] = -nB[2], OB[nB[18]] = nB[17], OB[-nB[46]] = ""); ++OB[nB[28]] < OB[nB[2]];) OB[nB[18]] = OB[nB[1]][OB[nB[28]]], OB[nB[18]] > 65535 && dB(OB[nB[18]] -= nB[45], OB[-nB[46]] += BB[nB[5]](OB[nB[18 … [truncated]
+                   return OB[-nB[46]]
+                 }
+ 
+                 function QB(...BB) {
+                   if (BB[nB[12]] = nB[2], BB[nB[1]] >= nB[48] && BB[nB[1]] <= 57343) {
+                     function OB(...BB) {
+                       for (dB(BB[nB[12]] = nB[2], BB[nB[2]] = '0%?v7(>`+.]G6#~fJPNxL1Cu9dmklByVp=s[_KFM:bX@8Hc&EnQ<3T,t^Ow"g2/jAY)iqI{4W!h*rozZ5;|SDaURe}$', BB[nB[28]] = "" + (BB[nB[1]] || ""), BB[-nB[50]] = BB[nB[28]].length, BB[nB[37]] = [], BB[nB[20]] = nB[1], BB[nB[23]] = nB[ … [truncated]
+                         if (BB[nB[51]] = BB[nB[2]].indexOf(BB[nB[28]][BB[nB[6]]]), BB[nB[51]] !== -nB[2])
+                           if (BB[nB[25]] < nB[1]) BB[nB[25]] = BB[nB[51]];
+                           else {
+                             dB(BB[nB[25]] += BB[nB[51]] * nB[32], BB[nB[20]] |= BB[nB[25]] << BB[nB[23]], BB[nB[23]] += (BB[nB[25]] & nB[33]) > nB[34] ? nB[35] : nB[36]);
+                             do {
+                               dB(BB[nB[37]].push(BB[nB[20]] & nB[11]), BB[nB[20]] >>= nB[3], BB[nB[23]] -= nB[3])
+ ... (9 more added lines; see GitHub link above)
```

#### 1652. `bundles/bloxd.io/main.js` (Changed code · before: `L25456-L25461` → after: `L25504-L25595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25504-L25595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25504-L25595) · [Before (L25456-L25461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25456-L25461)

```diff
-                   return await (async () => {
-                     function BH(HH) {
-                       return typeof uH[HH] === VH[17] ? uH[HH] = function(...HH) {
-                         for (kH(HH[VH[12]] = VH[2], HH[-VH[21]] = 'sgyD<ZIM{#u[0f_Rh;m*L!9QB7paC?:n`AYXjWUNv1oKr+xc,}(%GqTwtdbE2i)~leOF>85SzPVJ]"$|34H.=@^&6/k', HH[VH[0]] = "" + (HH[VH[1]] || ""), HH[VH[46]] = HH[VH[0]].length, HH[VH[10]] = [], HH[-VH[48]] = VH[1], HH[VH[9]] = VH … [truncated]
-                           if (HH[VH[6]] = HH[-VH[21]].indexOf(HH[VH[0]][HH[-VH[45]]]), HH[VH[6]] !== -VH[2])
-                             if (HH[VH[47]] < VH[1]) HH[VH[47]] = HH[VH[6]];
+                 }
+ 
+                 function oB(...OB) {
+                   return OB[nB[12]] = nB[13], BB[nB[5]](OB[nB[1]] >> OB[nB[2]] & nB[22] | nB[52])
+                 }
+ 
+                 function jB(...OB) {
+                   return OB[nB[12]] = nB[2], (4294967168 & OB[nB[1]]) == nB[1] ? BB[nB[5]](OB[nB[1]]) : (OB[-nB[53]] = "", (4294965248 & OB[nB[1]]) == nB[1] ? OB[-nB[53]] = BB[nB[5]](OB[nB[1]] >> nB[23] & nB[54] | nB[61]) : (4294901760 & OB[nB[1]]) == nB[1] ? dB(QB(OB[nB[1]]), OB … [truncated]
+                 }
+ 
+                 function yB(...BB) {
+                   for (dB(BB[nB[12]] = nB[2], BB[nB[2]] = YB(BB[nB[1]]), BB[nB[13]] = BB[nB[2]].length, BB[nB[18]] = -nB[2], BB[nB[19]] = nB[17], BB[nB[20]] = ""); ++BB[nB[18]] < BB[nB[13]];) dB(BB[nB[19]] = BB[nB[2]][BB[nB[18]]], BB[nB[20]] += jB(BB[nB[19]]));
+                   return BB[nB[20]]
+                 }
+ 
+                 function JB(...OB) {
+ ... (76 more added lines; see GitHub link above)
```

#### 1653. `bundles/bloxd.io/main.js` (Changed code · before: `L25463` → after: `L25597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25597) · [Before (L25463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25463)

```diff
-                               kH(HH[VH[47]] += HH[VH[6]] * VH[33], HH[-VH[48]] |= HH[VH[47]] << HH[VH[9]], HH[VH[9]] += (HH[VH[47]] & VH[36]) > VH[37] ? VH[13] : VH[38]);
+                               dB(BB[nB[25]] += BB[nB[58]] * nB[32], BB[nB[66]] |= BB[nB[25]] << BB[nB[23]], BB[nB[23]] += (BB[nB[25]] & nB[33]) > nB[34] ? nB[35] : nB[36]);
```

#### 1654. `bundles/bloxd.io/main.js` (Changed code · before: `L25465-L25470` → after: `L25599-L25675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25599-L25675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25599-L25675) · [Before (L25465-L25470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25465-L25470)

```diff
-                                 kH(HH[VH[10]].push(HH[-VH[48]] & VH[11]), HH[-VH[48]] >>= VH[3], HH[VH[9]] -= VH[3])
-                               } while (HH[VH[9]] > VH[7]);
-                               HH[VH[47]] = -VH[2]
-                             } HH[VH[47]] > -VH[2] && HH[VH[10]].push((HH[-VH[48]] | HH[VH[47]] << HH[VH[9]]) & VH[11]);
-                         return OH(HH[VH[10]])
-                       }(QH[HH]) : uH[HH]
+                                 dB(BB[nB[19]].push(BB[nB[66]] & nB[11]), BB[nB[66]] >>= nB[3], BB[nB[23]] -= nB[3])
+                               } while (BB[nB[23]] > nB[25]);
+                               BB[nB[25]] = -nB[2]
+                             } return BB[nB[25]] > -nB[2] && BB[nB[19]].push((BB[nB[66]] | BB[nB[25]] << BB[nB[23]]) & nB[11]), fB(BB[nB[19]])
+                       }
+ 
+                       function PB(...BB) {
+                         return BB[nB[12]] = nB[2], typeof pB[BB[nB[1]]] === nB[16] ? pB[BB[nB[1]]] = MB(qB[BB[nB[1]]]) : pB[BB[nB[1]]]
+                       }
+                       throw Error(PB(104))
+                     }
+                   }
+                   if ((248 & OB) == nB[10] && (dB(GB = JB(), YB = JB(), DB = JB(), oB = (OB & nB[25]) << nB[29] | GB << nB[26] | YB << nB[23] | DB), oB >= nB[45] && oB <= 1114111)) return oB;
+                   throw Error(yB(105))
+                 }
+ 
+ ... (61 more added lines; see GitHub link above)
```

#### 1655. `bundles/bloxd.io/main.js` (Changed code · before: `L25472-L25474` → after: `L25677-L25680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25677-L25680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25677-L25680) · [Before (L25472-L25474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25472-L25474)

```diff
-                     return void 0 === await HH() ? BH(95) + "l)" : ""
-                   })(), VH[49]
-                 }), (0, tH.h)()
+                   }
+                   BB[nB[12]] = nB[1], dB(BB[nB[73]] = OB([nB[13], nB[19]]), BB[-nB[74]] = OB([nB[2], nB[13]]), BB[-nB[72]] = BB[nB[73]] + BB[-nB[74]], BB[nB[4]] = BB[-nB[72]] - BB[-nB[74]], BB[nB[8]] = BB[nB[4]] * nB[13], BB[nB[20]] = BB[nB[8]] / nB[13], console.log(GB(BB[-nB[72] … [truncated]
+                 }
+                 OB(110) in kB && GB(), (0, jB[nB[38]])()
```

#### 1656. `bundles/bloxd.io/main.js` (Changed code · before: `L25486` → after: `L25692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25692) · [Before (L25486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25486)

```diff
-             d: () => SH,
+             c: () => QB,
```

#### 1657. `bundles/bloxd.io/main.js` (Changed code · before: `L25491` → after: `L25697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25697) · [Before (L25491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25491)

```diff
-             const GH = [0, 1, 8, 255, "length", 240, "c", 209, "a", 4, "undefined", void 0, 115, 63, 218, 6, "fromCodePoint", 7, 12, "push", "v2", 3, "b", 48, 205, 91, 5, 8191, 88, 13, 14, 187, 120, 127, !0, 128, 121, 122, "ty", 123, 124, 41, 158, 9, "g", "f", 118, 105, 35, "e",  … [truncated]
+             const zB = [1, "b", 0, 8, 68, "i", "g", 140, 211, 73, 255, "length", 139, 2, "d", 242, "e", "undefined", void 0, 60, 3, 219, 63, 6, "fromCodePoint", 7, 12, "push", 17, "c", 75, 9, 24, 91, 198, "f", 8191, 88, 13, 14, 4, null, 87, 231, "a", 165, 42, "h", 157, 83, "k", " … [truncated]
```

#### 1658. `bundles/bloxd.io/main.js` (Changed code · before: `L25494` → after: `L25700-L25715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25700-L25715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25700-L25715) · [Before (L25494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25494)

```diff
-               return HH[GH[4]] = GH[1], typeof hH !== GH[10] && hH ? (new hH).decode(new tH(HH[GH[0]])) : typeof zH !== GH[10] && zH ? zH.from(HH[GH[0]]).toString("utf-8") : XH(HH[GH[0]])
+               return GB[zB[11]] = zB[0], typeof BB[GB[zB[2]]] === zB[17] ? BB[GB[zB[2]]] = function(...BB) {
+                 for (RB(BB[zB[11]] = zB[0], BB[zB[0]] = '6z}u^.v#EOtnqbeCD@?H"23V09JQ,_|(5]c1B&wxki/lM=4hAW`I$N8KTr<LZ*>S7fmPYUGp+g{a:%oX~[;j!yRd)Fs', BB[zB[1]] = "" + (BB[zB[2]] || ""), BB[-zB[4]] = BB[zB[1]].length, BB[zB[9]] = [], BB[zB[7]] = zB[2], BB[-zB[8]] = zB[2], BB[zB[6 … [truncated]
+                   if (BB[zB[5]] = BB[zB[0]].indexOf(BB[zB[1]][BB[zB[3]]]), BB[zB[5]] !== -zB[0])
+                     if (BB[zB[6]] < zB[2]) BB[zB[6]] = BB[zB[5]];
+                     else {
+                       RB(BB[zB[6]] += BB[zB[5]] * zB[33], BB[zB[7]] |= BB[zB[6]] << BB[-zB[8]], BB[-zB[8]] += (BB[zB[6]] & zB[36]) > zB[37] ? zB[38] : zB[39]);
+                       do {
+                         RB(BB[zB[9]].push(BB[zB[7]] & zB[10]), BB[zB[7]] >>= zB[3], BB[-zB[8]] -= zB[3])
+                       } while (BB[-zB[8]] > zB[25]);
+                       BB[zB[6]] = -zB[0]
+                     } return BB[zB[6]] > -zB[0] && BB[zB[9]].push((BB[zB[7]] | BB[zB[6]] << BB[-zB[8]]) & zB[10]), pB(BB[zB[9]])
+               }(OB[GB[zB[2]]]) : BB[GB[zB[2]]]
+             }
+ 
+             function pB(...BB) {
+               return BB[zB[11]] = zB[0], typeof oB !== zB[17] && oB ? (new oB).decode(new jB(BB[zB[2]])) : typeof yB !== zB[17] && yB ? yB.from(BB[zB[2]]).toString("utf-8") : PB(BB[zB[2]])
```

#### 1659. `bundles/bloxd.io/main.js` (Changed code · before: `L25498-L25499` → after: `L25719-L25720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25719-L25720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25719-L25720) · [Before (L25498-L25499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25498-L25499)

```diff
-             MH(HH = {}, BH = ["K)Rquq|~*i`$WPi&5$)C%", 'ic|CG_SZ0iTM)"Q', '3yzOqP.7.!u2""A%HG2eb?_gkd@h&Pa)~2T<^[e=i!9Kg0O)c>TvhDtNd]', ',WMQ>Y)imngwF"CN311s|(qBY.}BS8FdCS3&@B<g}Vo5LPEKn]NYme1d)>%', "h@(lJeA", "cX,_g:yOWhfekNT%9Bw+NMk|Mjts:%OG(z7DxyN~<gBBe$<vZ)hQC3;dZSAtT", "(3_v … [truncated]
-               MH(HH[GH[4]] = GH[0], HH[GH[8]] = [function() {
+             RB(BB = {}, OB = ["wu>:qKu9MLMU+BL_VIf8wg,?frpg2ZP@g@^_eUY?EtqYe}WQ<LE]D", '4cI+#{/|LT:5bDp&IpD|"ULamZe<4W$c$u9oH', "68m.%BLiA?89@Ae", "dAZt3`=a}8vhrZ/w>c?QRUXr)bMuDp^0", 'oYj5Fr{c<"5L<[^l[&!_.B#Nu7K9TugHSu3:]g(H6S/', "@I%pe{PV27EbUZfBZu)gH", 'Lf!#jL:k}O"0t[Qibp3^)]7< … [truncated]
+               RB(BB[zB[11]] = zB[2], BB[zB[15]] = [function() {
```

#### 1660. `bundles/bloxd.io/main.js` (Changed code · before: `L25507` → after: `L25728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25728) · [Before (L25507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25507)

```diff
-               }], HH[GH[5]] = GH[11], HH[GH[6]] = []);
+               }], BB[zB[12]] = zB[18], BB[zB[13]] = []);
```

#### 1661. `bundles/bloxd.io/main.js` (Changed code · before: `L25509` → after: `L25730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25730) · [Before (L25509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25509)

```diff
-                 MH(HH[GH[5]] = Object, HH[GH[6]][GH[19]]("".__proto__.constructor.name))
+                 RB(BB[zB[12]] = Object, BB[zB[13]][zB[27]]("".__proto__.constructor.name))
```

#### 1662. `bundles/bloxd.io/main.js` (Changed code · before: `L25511-L25514` → after: `L25732-L25735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25732-L25735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25732-L25735) · [Before (L25511-L25514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25511-L25514)

```diff
-               HH: for (HH[-GH[7]] = GH[0]; HH[-GH[7]] < HH[GH[8]][GH[4]]; HH[-GH[7]]++) try {
-                 for (HH[GH[5]] = HH[GH[8]][HH[-GH[7]]](), HH[GH[9]] = GH[0]; HH[GH[9]] < HH[GH[6]][GH[4]]; HH[GH[9]]++)
-                   if (typeof HH[GH[5]][HH[GH[6]][HH[GH[9]]]] === GH[10]) continue HH;
-                 return HH[GH[5]]
+               BB: for (BB[zB[14]] = zB[2]; BB[zB[14]] < BB[zB[15]][zB[11]]; BB[zB[14]]++) try {
+                 for (BB[zB[12]] = BB[zB[15]][BB[zB[14]]](), BB[zB[16]] = zB[2]; BB[zB[16]] < BB[zB[13]][zB[11]]; BB[zB[16]]++)
+                   if (typeof BB[zB[12]][BB[zB[13]][BB[zB[16]]]] === zB[17]) continue BB;
+                 return BB[zB[12]]
```

#### 1663. `bundles/bloxd.io/main.js` (Changed code · before: `L25516-L25519` → after: `L25737-L25739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25737-L25739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25737-L25739) · [Before (L25516-L25519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25516-L25519)

```diff
-               return HH[GH[5]] || this
-             }() || {}, hH = LH.TextDecoder, tH = LH.Uint8Array, zH = LH.rX, CH = LH.String || String, EH = LH.Array || Array, XH = function() {
-               var HH, BH, LH = new EH(GH[35]);
-               return MH(HH = CH[GH[16]] || CH.fromCharCode, BH = []),
+               return BB[zB[12]] || this
+             }() || {}, oB = GB.TextDecoder, jB = GB.Uint8Array, yB = GB.BP, JB = GB.String || String, MB = GB.Array || Array, PB = function(...BB) {
+               return RB(BB[zB[11]] = zB[2], BB[-zB[28]] = new MB(zB[62]), BB[zB[0]] = JB[zB[24]] || JB.fromCharCode, BB[zB[19]] = []),
```

#### 1664. `bundles/bloxd.io/main.js` (Changed code · before: `L25521-L25522` → after: `L25741-L25742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25741-L25742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25741-L25742) · [Before (L25521-L25522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25521-L25522)

```diff
-                   for (MH(AH[GH[4]] = GH[1], AH[GH[1]] = GH[11], AH[-GH[14]] = GH[11], AH[-GH[13]] = AH[GH[0]][GH[4]], BH[GH[4]] = GH[0]), AH[-GH[12]] = GH[0]; AH[-GH[12]] < AH[-GH[13]];) MH(AH[-GH[14]] = AH[GH[0]][AH[-GH[12]]++], AH[-GH[14]] <= GH[33] ? AH[GH[1]] = AH[-GH[14]] : … [truncated]
-                   return BH.join("")
+                   for (RB(OB[zB[11]] = zB[0], OB[zB[0]] = zB[18], OB[-zB[21]] = zB[18], OB[zB[20]] = OB[zB[2]][zB[11]], BB[zB[19]][zB[11]] = zB[2]), OB[zB[14]] = zB[2]; OB[zB[14]] < OB[zB[20]];) RB(OB[-zB[21]] = OB[zB[2]][OB[zB[14]]++], OB[-zB[21]] <= zB[58] ? OB[zB[0]] = OB[-zB[ … [truncated]
+                   return BB[zB[19]].join("")
```

#### 1665. `bundles/bloxd.io/main.js` (Changed code · before: `L25525` → after: `L25745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25745) · [Before (L25525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25525)

```diff
-             let QH = GH[20];
+             let ZB = zB[53];
```

#### 1666. `bundles/bloxd.io/main.js` (Changed code · before: `L25527-L25528` → after: `L25747-L25800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25747-L25800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25747-L25800) · [Before (L25527-L25528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25527-L25528)

```diff
-             const WH = globalThis[function(...LH) {
-               return LH[GH[4]] = GH[1], typeof HH[LH[GH[0]]] === GH[10] ? HH[LH[GH[0]]] = function(HH) {
+             const NB = globalThis[lB(125)];
+             if (RB(QB = (...GB) => (GB[zB[11]] = zB[2], function(...GB) {
+                 return GB[zB[11]] = zB[0], typeof BB[GB[zB[2]]] === zB[17] ? BB[GB[zB[2]]] = function(...BB) {
+                   for (RB(BB[zB[11]] = zB[0], BB[zB[44]] = 'uA.Gjt^q_x,mgS&<BO[}L~2oZ`WRI@98>evs1;0hH3{/CYlPd57]?zD!$"(p%6bEaQ*|yT4)wJrViNk=XcUK:#fnFM+', BB[-zB[42]] = "" + (BB[zB[2]] || ""), BB[-zB[43]] = BB[-zB[42]].length, BB[zB[40]] = [], BB[zB[16]] = zB[2], BB[zB[46]] = zB[2 … [truncated]
+                     if (BB[zB[5]] = BB[zB[44]].indexOf(BB[-zB[42]][BB[zB[3]]]), BB[zB[5]] !== -zB[0])
+                       if (BB[zB[45]] < zB[2]) BB[zB[45]] = BB[zB[5]];
+                       else {
+                         RB(BB[zB[45]] += BB[zB[5]] * zB[33], BB[zB[16]] |= BB[zB[45]] << BB[zB[46]], BB[zB[46]] += (BB[zB[45]] & zB[36]) > zB[37] ? zB[38] : zB[39]);
+                         do {
+                           RB(BB[zB[40]].push(BB[zB[16]] & zB[10]), BB[zB[16]] >>= zB[3], BB[zB[46]] -= zB[3])
+                         } while (BB[zB[46]] > zB[25]);
+                         BB[zB[45]] = -zB[0]
+                       } return BB[zB[45]] > -zB[0] && BB[zB[40]].push((BB[zB[16]] | BB[zB[45]] << BB[zB[46]]) & zB[10]), pB(BB[zB[40]])
+                 }(OB[GB[zB[2]]]) : BB[GB[zB[2]]]
+               }(126) + "w" in qB && function(...BB) {
+                 RB(BB[zB[11]] = zB[2], BB[zB[52]] = function(...BB) {
+ ... (38 more added lines; see GitHub link above)
```

#### 1667. `bundles/bloxd.io/main.js` (Changed code · before: `L25530-L25533` → after: `L25802-L25805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25802-L25805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25802-L25805) · [Before (L25530-L25533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25530-L25533)

```diff
-                 for (MH(BH = "" + (HH || ""), LH = BH.length, AH = [], rH = GH[0], SH = GH[0], hH = -GH[1]), tH = GH[0]; tH < LH; tH++) {
-                   var zH = 'AT08^HOQjXs.]nhS"!dg5oRm%LcvC&t9lFK*N);a=bUGpW|ZE_D<qf>6#iV3$My@kzrI1w2+P?B7eY4,~:(x`{[u}J/'.indexOf(BH[tH]);
-                   if (zH !== -GH[1])
-                     if (hH < GH[0]) hH = zH;
+                 for (RB(OB = "" + (BB || ""), GB = OB.length, YB = [], DB = zB[2], QB = zB[2], oB = -zB[0]), jB = zB[2]; jB < GB; jB++) {
+                   var yB = 'A0iprBmVY[7ULwThcv1W3`nP:Cl=jz,&O<RDeXN{k/*8E9otQFK$|6u!;~f.2}Z_qaG>JM4bs^y@?Ix(HS%+]"dg)5#'.indexOf(OB[jB]);
+                   if (yB !== -zB[0])
+                     if (oB < zB[2]) oB = yB;
```

#### 1668. `bundles/bloxd.io/main.js` (Changed code · before: `L25535` → after: `L25807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25807) · [Before (L25535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25535)

```diff
-                       MH(hH += zH * GH[25], rH |= hH << SH, SH += (hH & GH[27]) > GH[28] ? GH[29] : GH[30]);
+                       RB(oB += yB * zB[33], DB |= oB << QB, QB += (oB & zB[36]) > zB[37] ? zB[38] : zB[39]);
```

#### 1669. `bundles/bloxd.io/main.js` (Changed code · before: `L25537-L25539` → after: `L25809-L25811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25809-L25811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25809-L25811) · [Before (L25537-L25539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25537-L25539)

```diff
-                         MH(AH.push(rH & GH[3]), rH >>= GH[2], SH -= GH[2])
-                       } while (SH > GH[17]);
-                       hH = -GH[1]
+                         RB(YB.push(DB & zB[10]), DB >>= zB[3], QB -= zB[3])
+                       } while (QB > zB[25]);
+                       oB = -zB[0]
```

#### 1670. `bundles/bloxd.io/main.js` (Changed code · before: `L25542-L25547` → after: `L25814-L25816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25814-L25816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25814-L25816) · [Before (L25542-L25547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25542-L25547)

```diff
-                 return hH > -GH[1] && AH.push((rH | hH << SH) & GH[3]), YH(AH)
-               }(BH[LH[GH[0]]]) : HH[LH[GH[0]]]
-             }(119)];
-             if (MH(SH = () => WH, rH = () => {
-                 QH === GH[20] && (QH = "v3")
-               }), GH[34]) {
+                 return oB > -zB[0] && YB.push((DB | oB << QB) & zB[10]), pB(YB)
+               }
+ 
```

#### 1671. `bundles/bloxd.io/main.js` (Changed code · before: `L25549-L25558` → after: `L25818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25818) · [Before (L25549-L25558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25549-L25558)

```diff
-                 for (MH(HH[GH[4]] = GH[1], HH[GH[1]] = ':u84>bV|O!J(vCK.f3&7*9;1@Hq6pkt]}T%{zl#g_^=XIDs$ZRQnUj[YM)o5L`i"yhFrB/ewEa+xc<PmAGN02?,W~dS', HH[GH[22]] = "" + (HH[GH[0]] || ""), HH[GH[21]] = HH[GH[22]].length, HH[-GH[31]] = [], HH[GH[26]] = GH[0], HH[GH[15]] = GH[0], HH[ … [truncated]
-                   if (HH[-GH[24]] = HH[GH[1]].indexOf(HH[GH[22]][HH[-GH[23]]]), HH[-GH[24]] !== -GH[1])
-                     if (HH[-GH[12]] < GH[0]) HH[-GH[12]] = HH[-GH[24]];
-                     else {
-                       MH(HH[-GH[12]] += HH[-GH[24]] * GH[25], HH[GH[26]] |= HH[-GH[12]] << HH[GH[15]], HH[GH[15]] += (HH[-GH[12]] & GH[27]) > GH[28] ? GH[29] : GH[30]);
-                       do {
-                         MH(HH[-GH[31]].push(HH[GH[26]] & GH[3]), HH[GH[26]] >>= GH[2], HH[GH[15]] -= GH[2])
-                       } while (HH[GH[15]] > GH[17]);
-                       HH[-GH[12]] = -GH[1]
-                     } return HH[-GH[12]] > -GH[1] && HH[-GH[31]].push((HH[GH[26]] | HH[-GH[12]] << HH[GH[15]]) & GH[3]), YH(HH[-GH[31]])
+                 return GB[zB[11]] = zB[0], typeof BB[GB[zB[2]]] === zB[17] ? BB[GB[zB[2]]] = WB(OB[GB[zB[2]]]) : BB[GB[zB[2]]]
```

#### 1672. `bundles/bloxd.io/main.js` (Changed code · before: `L25562-L25578` → after: `L25822-L25834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25822-L25834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25822-L25834) · [Before (L25562-L25578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25562-L25578)

```diff
-                 return LH[GH[4]] = GH[1], typeof HH[LH[GH[0]]] === GH[10] ? HH[LH[GH[0]]] = xH(BH[LH[GH[0]]]) : HH[LH[GH[0]]]
-               }
-               let PH = window[vH(GH[32])];
-               Object[vH(GH[36]) + vH(GH[37]) + GH[38]](window, vH(GH[32]), {
-                 [vH(GH[39])]: () => PH,
-                 [vH(GH[40])]: (...HH) => {
-                   HH[GH[4]] = GH[1], vH(125) in uH && function(...HH) {
-                     MH(HH[GH[4]] = GH[0], HH[GH[8]] = function(...BH) {
-                       return MH(BH[GH[4]] = 2, BH[GH[8]] = [], BH[GH[21]] = BH[GH[0]].length, BH[GH[0]].sort(((HH, BH) => HH - BH)), HH[GH[1]](BH[GH[8]], [], GH[0], BH[GH[21]], BH[GH[0]], BH[GH[1]])), BH[GH[8]]
-                     }, HH[GH[1]] = function(BH, LH, AH, rH, SH, hH) {
-                       var tH, zH = null;
-                       if (!(hH < GH[0])) {
-                         if (hH === GH[0]) return BH.push(LH);
-                         for (tH = AH; tH < rH && !(SH[tH] > hH); tH++) tH > AH && SH[tH] === SH[tH - GH[1]] || MH(zH = Array.from(LH), zH.push(SH[tH]), HH[GH[1]](BH, zH, tH + GH[1], rH, SH, hH - SH[tH]))
-                       }
-                     }, console.log(HH[GH[8]]))
- ... (1 more removed lines; see GitHub link above)
+                 RB(BB[zB[11]] = zB[2], BB[zB[44]] = function(BB) {
+                   var OB, GB, YB, DB, QB = BB.length;
+                   for (RB(OB = [], GB = zB[2]), YB = zB[2]; YB < QB; YB++) OB.push(YB !== zB[2] && BB[YB] > BB[YB - zB[0]] ? OB[YB - zB[0]] + zB[0] : zB[0]);
+                   for (DB = QB - zB[0]; DB >= zB[2]; DB--) DB !== QB - zB[0] && BB[DB] > BB[DB + zB[0]] && (OB[DB] = Math.max(OB[DB], OB[DB + zB[0]] + zB[0])), GB += OB[DB];
+                   return GB
+                 }, console.log(BB[zB[44]]))
+               }
+               lB(zB[62]) + "t" in qB && VB();
+               let SB = window[lB(129)];
+               Object[AB(zB[64]) + AB(zB[65]) + zB[66]](window, AB(132), {
+                 [AB(zB[68])]: () => SB,
+                 [AB(zB[69])]: (...BB) => {
+                   BB[zB[11]] = zB[0], ZB === zB[53] && (ZB = "v6"), SB = BB[zB[2]]
```

#### 1673. `bundles/bloxd.io/main.js` (Changed code · before: `L25580` → after: `L25836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25836) · [Before (L25580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25580)

```diff
-                 [vH(GH[53]) + vH(GH[33])]: GH[34]
+                 [AB(zB[70]) + AB(zB[71])]: zB[63]
```

#### 1674. `bundles/bloxd.io/main.js` (Changed code · before: `L25582-L25650` → after: `L25838-L25842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25838-L25842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25838-L25842) · [Before (L25582-L25650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25582-L25650)

```diff
-               let TH = window[vH(GH[35])];
-               Object[vH(GH[36]) + vH(GH[37]) + GH[38]](window, vH(GH[35]), {
-                 [vH(GH[39])]: () => TH,
-                 [vH(GH[40])]: (...LH) => {
-                   if (LH[GH[4]] = GH[1], QH === GH[20]) {
-                     function AH(...HH) {
-                       for (MH(HH[GH[4]] = GH[1], HH[GH[8]] = '76@*&=|%]:5<SA>nFx"D~+RWsZo_cjfvQ0B$3{bru)l4ti[ykhPJUXgTz/,!^}NLVa1#OEq?I(CdwH8.GM;Ke9pY`m2', HH[GH[41]] = "" + (HH[GH[0]] || ""), HH[GH[21]] = HH[GH[41]].length, HH[-GH[46]] = [], HH[GH[26]] = GH[0], HH[GH[45]] = GH[0 … [truncated]
-                         if (HH[GH[43]] = HH[GH[8]].indexOf(HH[GH[41]][HH[-GH[42]]]), HH[GH[43]] !== -GH[1])
-                           if (HH[GH[44]] < GH[0]) HH[GH[44]] = HH[GH[43]];
-                           else {
-                             MH(HH[GH[44]] += HH[GH[43]] * GH[25], HH[GH[26]] |= HH[GH[44]] << HH[GH[45]], HH[GH[45]] += (HH[GH[44]] & GH[27]) > GH[28] ? GH[29] : GH[30]);
-                             do {
-                               MH(HH[-GH[46]].push(HH[GH[26]] & GH[3]), HH[GH[26]] >>= GH[2], HH[GH[45]] -= GH[2])
-                             } while (HH[GH[45]] > GH[17]);
-                             HH[GH[44]] = -GH[1]
-                           } return HH[GH[44]] > -GH[1] && HH[-GH[46]].push((HH[GH[26]] | HH[GH[44]] << HH[GH[45]]) & GH[3]), YH(HH[-GH[46]])
- ... (53 more removed lines; see GitHub link above)
+               let nB = window[AB(zB[67])];
+               Object[AB(zB[64]) + AB(zB[65]) + zB[66]](window, AB(zB[67]), {
+                 [AB(zB[68])]: () => nB,
+                 [AB(zB[69])]: (...BB) => {
+                   BB[zB[11]] = zB[0], ZB === zB[53] && (ZB = "v5"), nB = BB[zB[2]]
```

#### 1675. `bundles/bloxd.io/main.js` (Changed code · before: `L25652` → after: `L25844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25844) · [Before (L25652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25652)

```diff
-                 [vH(GH[53]) + vH(GH[33])]: GH[34]
+                 [AB(zB[70]) + AB(zB[71])]: zB[63]
```

#### 1676. `bundles/bloxd.io/main.js` (Changed code · before: `L25660` → after: `L25852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25852) · [Before (L25660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25660)

```diff
-         }, , , , , , , , (HH, BH, LH) => {
+         }, , , , , (BB, OB, GB) => {
```

#### 1677. `bundles/bloxd.io/main.js` (Changed code · before: `L25663-L25664` → after: `L25855-L25856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25855-L25856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25855-L25856) · [Before (L25663-L25664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25663-L25664)

```diff
-             f: () => hH,
-             g: () => tH
+             g: () => oB,
+             j: () => jB
```

#### 1678. `bundles/bloxd.io/main.js` (Changed code · before: `L25666-L25667` → after: `L25858-L25859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25858-L25859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25858-L25859) · [Before (L25666-L25667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25666-L25667)

```diff
-           var AH = LH(1206),
-             rH = LH(81);
+           var YB = GB(1262),
+             DB = GB(92);
```

#### 1679. `bundles/bloxd.io/main.js` (Changed code · before: `L25675` → after: `L25867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25867) · [Before (L25675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25675)

```diff
-             return null !== (LH = SH(HH, BH)) && void 0 !== LH ? LH : (0, AH.b)(HH, !rH.featureFlags.canSeeRealPlayerNames)
+             return null !== (GB = QB(BB, OB)) && void 0 !== GB ? GB : (0, YB.e)(BB, !DB.featureFlags.canSeeRealPlayerNames)
```

#### 1680. `bundles/bloxd.io/main.js` (Changed code · before: `L25683` → after: `L25875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25875) · [Before (L25683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25683)

```diff
-                 LH[AH] = "object" === typeof rH && null !== rH && "entityName" in rH ? hH(rH.entityName, BH) : String(null !== rH && void 0 !== rH ? rH : "")
+                 GB[YB] = "object" === typeof DB && null !== DB && "entityName" in DB ? oB(DB.entityName, OB) : String(null !== DB && void 0 !== DB ? DB : "")
```

#### 1681. `bundles/bloxd.io/main.js` (Changed code · before: `L25693-L25694` → after: `L25883-L25886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25883-L25886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25883-L25886) · [Before (L25693-L25694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25693-L25694)

```diff
-             k: () => EH,
-             n: () => XH
+             l: () => oB,
+             o: () => QB,
+             s: () => MB,
+             u: () => PB
```

#### 1682. `bundles/bloxd.io/main.js` (Changed code · before: `L25696-L25697` → after: `L25888-L25889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25888-L25889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25888-L25889) · [Before (L25696-L25697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25696-L25697)

```diff
-           var AH = LH(317),
-             rH = LH(1160);
+           var YB = GB(353),
+             DB = GB(1209);
```

#### 1683. `bundles/bloxd.io/main.js` (Changed code · before: `L25704` → after: `L25896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25896) · [Before (L25704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25704)

```diff
-             return `${(0,AH.hc)(AH.Pd)}${(0,AH.hc)(AH.Rd)}${HH}`
+             return `${(0,YB.mc)(YB.ge)}${(0,YB.mc)(YB.ke)}${BB}`
```

#### 1684. `bundles/bloxd.io/main.js` (Changed code · before: `L25713-L25717` → after: `L25905-L25909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25905-L25909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25905-L25909) · [Before (L25713-L25717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25713-L25717)

```diff
-               zH = null === BH ? SH : `${SH}:${BH}`,
-               CH = null === BH ? hH : `${hH}:${BH}`,
-               EH = (0, rH.b)(zH, 0, AH.Pd.length),
-               XH = (0, rH.b)(CH, 0, AH.Rd.length),
-               GH = `${AH.Pd[EH]}${AH.Rd[XH]}`;
+               yB = null === OB ? QB : `${QB}:${OB}`,
+               JB = null === OB ? oB : `${oB}:${OB}`,
+               MB = (0, DB.b)(yB, 0, YB.ge.length),
+               PB = (0, DB.b)(JB, 0, YB.ke.length),
+               zB = `${YB.ge[MB]}${YB.ke[PB]}`;
```

#### 1685. `bundles/bloxd.io/main.js` (Changed code · before: `L25719` → after: `L25911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25911) · [Before (L25719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25719)

```diff
-             return `${GH}${(0,rH.b)(`${HH}:${BH}`,0,Math.pow(10,tH))}`
+             return `${zB}${(0,DB.b)(`${BB}:${OB}`,0,Math.pow(10,jB))}`
```

#### 1686. `bundles/bloxd.io/main.js` (Changed code · before: `L25735-L25738` → after: `L25927-L25930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25927-L25930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25927-L25930) · [Before (L25735-L25738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25735-L25738)

```diff
-           AH.Pd.forEach((HH => {
-             if (HH.length > 7) throw new Error(`random name adjective ${HH} is too long`)
-           })), AH.Rd.forEach((HH => {
-             if (HH.length > 7) throw new Error(`random name noun ${HH} is too long`)
+           YB.ge.forEach((BB => {
+             if (BB.length > 7) throw new Error(`random name adjective ${BB} is too long`)
+           })), YB.ke.forEach((BB => {
+             if (BB.length > 7) throw new Error(`random name noun ${BB} is too long`)
```

#### 1687. `bundles/bloxd.io/main.js` (Changed code · before: `L25740` → after: `L25932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25932) · [Before (L25740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25740)

```diff
-         }, , , , , , (HH, BH, LH) => {
+         }, , (BB, OB, GB) => {
```

#### 1688. `bundles/bloxd.io/main.js` (Changed code · before: `L25744-L25745` → after: `L25936-L25937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25936-L25937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25936-L25937) · [Before (L25744-L25745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25744-L25745)

```diff
-           var AH = LH(45),
-             rH = LH(1038),
+           var YB = GB(56),
+             DB = GB(1090),
```

#### 1689. `bundles/bloxd.io/main.js` (Changed code · before: `L25747-L25750` → after: `L25939-L25942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25939-L25942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25939-L25942) · [Before (L25747-L25750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25747-L25750)

```diff
-             hH = LH(1214),
-             tH = LH(15),
-             zH = LH(1220),
-             CH = LH(1225);
+             oB = GB(1268),
+             jB = GB(16),
+             yB = GB(1273),
+             JB = GB(1282);
```

#### 1690. `bundles/bloxd.io/main.js` (Changed code · before: `L25766` → after: `L25958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25958) · [Before (L25766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25766)

```diff
-             (0, hH.r)("popup", WH, uH ? null : LH);
+             (0, oB.v)("popup", ZB, pB ? null : GB);
```

#### 1691. `bundles/bloxd.io/main.js` (Changed code · before: `L25769` → after: `L25961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25961) · [Before (L25769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25769)

```diff
-             } = (0, tH.m)(["isTouchScreen"]), vH = QH && xH;
+             } = (0, jB.o)(["isTouchScreen"]), WB = qB && RB;
```

#### 1692. `bundles/bloxd.io/main.js` (Changed code · before: `L25774` → after: `L25966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25966) · [Before (L25774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25774)

```diff
-               const LH = (0, zH.c)((LH => {
+               const GB = (0, yB.e)((GB => {
```

#### 1693. `bundles/bloxd.io/main.js` (Changed code · before: `L25779` → after: `L25971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25971) · [Before (L25779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25779)

```diff
-                 if (HH.style.setProperty("--visible-top", `${AH}px`), HH.style.setProperty("--visible-height", `${rH}px`), rH !== BH) {
+                 if (BB.style.setProperty("--visible-top", `${YB}px`), BB.style.setProperty("--visible-height", `${DB}px`), DB !== OB) {
```

#### 1694. `bundles/bloxd.io/main.js` (Changed code · before: `L25804` → after: `L25996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L25996) · [Before (L25804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25804)

```diff
-                   className: `MiddleScreenPopup AnimFadeInScaleUp SmallTextLight ${XH}`,
+                   className: `MiddleScreenPopup AnimFadeInScaleUp SmallTextLight ${PB}`,
```

#### 1695. `bundles/bloxd.io/main.js` (Changed code · before: `L25810` → after: `L26002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L26002) · [Before (L25810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25810)

```diff
-         }, , (HH, BH, LH) => {
+         }, , , , (BB, OB, GB) => {
```

#### 1696. `bundles/bloxd.io/main.js` (Changed code · before: `L25812` → after: `L26004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L26004) · [Before (L25812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25812)

```diff
-             b: () => zH,
+             c: () => yB,
```

#### 1697. `bundles/bloxd.io/main.js` (Changed code · before: `L25814-L25818` → after: `L26006-L26010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26006-L26010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L26006-L26010) · [Before (L25814-L25818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25814-L25818)

```diff
-             h: () => GH,
-             i: () => XH,
-             m: () => YH,
-             q: () => rH,
-             r: () => QH
+             j: () => zB,
+             l: () => PB,
+             p: () => lB,
+             r: () => DB,
+             v: () => qB
```

#### 1698. `bundles/bloxd.io/main.js` (Changed code · before: `L25820` → after: `L26012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L26012) · [Before (L25820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25820)

```diff
-           var AH = LH(45);
+           var YB = GB(56);
```

#### 1699. `bundles/bloxd.io/main.js` (Changed code · before: `L25825` → after: `L26017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L26017) · [Before (L25825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25825)

```diff
-               return null === BH ? HH.id : "string" === typeof BH ? BH : BH()
+               return null === OB ? BB.id : "string" === typeof OB ? OB : OB()
```

#### 1700. `bundles/bloxd.io/main.js` (Changed code · before: `L25856` → after: `L26048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L26048) · [Before (L25856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25856)

```diff
-             tH.current || (uH++, tH.current = `${HH}-${uH}`);
+             jB.current || (pB++, jB.current = `${BB}-${pB}`);
```

#### 1701. `bundles/bloxd.io/main.js` (Changed code · before: `L25877` → after: `L26069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L26069) · [Before (L25877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25877)

```diff
-                   return "function" === typeof HH ? HH() : null !== HH && void 0 !== HH ? HH : LH
+                   return "function" === typeof BB ? BB() : null !== BB && void 0 !== BB ? BB : GB
```

#### 1702. `bundles/bloxd.io/main.js` (Changed code · before: `L25883` → after: `L26075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L26075) · [Before (L25883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25883)

```diff
-         }, , , , , , (HH, BH, LH) => {
+         }, , , , , (BB, OB, GB) => {
```

#### 1703. `bundles/bloxd.io/main.js` (Changed code · before: `L25899` → after: `L26091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L26091) · [Before (L25899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25899)

```diff
-             c: () => AH
+             e: () => YB
```

#### 1704. `bundles/bloxd.io/main.js` (Changed code · before: `L25904-L25905` → after: `L26094-L26097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26094-L26097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L26094-L26097) · [Before (L25904-L25905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25904-L25905)

```diff
-           LH(60);
-           var AH = LH(45),
+           BB.exports = GB(1285)
+         }, , , (BB, OB, GB) => {
+           GB(65);
+           var YB = GB(56),
```

#### 1705. `bundles/bloxd.io/main.js` (Changed code · before: `L25937` → after: `L26129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L26129) · [Before (L25937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25937)

```diff
-         }, , , , , , , (HH, BH, LH) => {
+         }, , , , , , , , (BB, OB, GB) => {
```

#### 1706. `bundles/bloxd.io/main.js` (Changed code · before: `L25939-L25940` → after: `L26131-L26132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26131-L26132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L26131-L26132) · [Before (L25939-L25940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25939-L25940)

```diff
-             A: () => YH,
-             d: () => SH,
+             b: () => QB,
+             c: () => qB,
```

#### 1707. `bundles/bloxd.io/main.js` (Changed code · before: `L25944` → after: `L26135-L26137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26135-L26137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L26135-L26137) · [Before (L25944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25944)

```diff
-             l: () => EH,
+             k: () => MB,
+             n: () => ZB,
+             o: () => PB,
```

#### 1708. `bundles/bloxd.io/main.js` (Changed code · before: `L25946-L25947` → after: `L26139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L26139) · [Before (L25946-L25947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25946-L25947)

```diff
-             t: () => XH,
-             x: () => CH
+             q: () => lB
```

#### 1709. `bundles/bloxd.io/main.js` (Changed code · before: `L25949-L25950` → after: `L26141-L26142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26141-L26142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L26141-L26142) · [Before (L25949-L25950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25949-L25950)

```diff
-           var AH = LH(1245),
-             rH = LH(1253);
+           var YB = GB(1296),
+             DB = GB(1299);
```

#### 1710. `bundles/bloxd.io/main.js` (Changed code · before: `L25953-L25954` → after: `L26145-L26146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26145-L26146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L26145-L26146) · [Before (L25953-L25954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25953-L25954)

```diff
-             tH = new AH.c,
-             zH = new AH.c;
+             jB = new YB.d,
+             yB = new YB.d;
```

#### 1711. `bundles/bloxd.io/main.js` (Changed code · before: `L25958` → after: `L26150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L26150) · [Before (L25958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25958)

```diff
-             hH.set(HH, BH), (0, rH.K)().pointerUnlockRequestsChanged(), tH.callEach(BH, "a pointer unlock request listener")
+             oB.set(BB, OB), (0, DB.D)().pointerUnlockRequestsChanged(), jB.callEach(OB, "a pointer unlock request listener")
```

#### 1712. `bundles/bloxd.io/main.js` (Changed code · before: `L25966` → after: `L26158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L26158) · [Before (L25966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25966)

```diff
-             hH.delete(HH), (0, rH.K)().pointerUnlockRequestsChanged(), zH.callEach(void 0, "a pointer unlock removal listener")
+             oB.delete(BB), (0, DB.D)().pointerUnlockRequestsChanged(), yB.callEach(void 0, "a pointer unlock removal listener")
```

#### 1713. `bundles/bloxd.io/main.js` (Changed code · before: `L25995` → after: `L26187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L26187) · [Before (L25995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25995)

```diff
-         }, , , , (HH, BH, LH) => {
+         }, , , (BB, OB, GB) => {
```

#### 1714. `bundles/bloxd.io/main.js` (Changed code · before: `L25997` → after: `L26189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L26189) · [Before (L25997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L25997)

```diff
-             c: () => AH
+             d: () => YB
```

#### 1715. `bundles/bloxd.io/main.js` (Changed code · before: `L26018` → after: `L26210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/main.js#L26210) · [Before (L26018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/main.js#L26018)

```diff
-                   console.error(`Error in ${BH}:`, rH)
+                   console.error(`Error in ${OB}:`, DB)
```
