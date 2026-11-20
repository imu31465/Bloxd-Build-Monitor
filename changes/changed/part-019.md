# Changed — Bundle Modifications Report (Part 019 / 067)

- **Updated at**: `2026-11-20T22:47 JST`
- **Part**: `19 / 67` (**311** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 018](part-018.md) · [Part 020 →](part-020.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/219.js` (7rj44.0704ff61 → qepqb8.0352199c · continued)

- **File**: `bundles/bloxd.io/chunks/js/219.js` (72 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217)

#### 11. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L462-L605` → after: `L202-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L202-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L202-L208) · [Before (L462-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L462-L605)

```diff
-         "Glass Bro": {
-           physicsBodyDimensions: {
-             width: .8,
-             height: 2.1
-           },
-           hitBoxDimensions: {
-             width: 1.3,
-             height: 2.2
-           },
-           eyeHeight: 1.8,
-           rideHeight: 2.1,
-           wo: .5,
-           ztz: !1
-         },
-         "Lord Vulcan": {
-           physicsBodyDimensions: {
- ... (128 more removed lines; see GitHub link above)
+         _tr_stored_block: Av,
+         _tr_flush_block: Lv,
+         _tr_tally: (vv, zv, Pv) => (vv.pending_buf[vv.d_buf + 2 * vv.last_lit] = zv >>> 8 & 255, vv.pending_buf[vv.d_buf + 2 * vv.last_lit + 1] = 255 & zv, vv.pending_buf[vv.l_buf + vv.last_lit] = 255 & Pv, vv.last_lit++, 0 === zv ? vv.dyn_ltree[2 * Pv]++ : (vv.matches++, zv--, v … [truncated]
+         _tr_align: vv => {
+           nv(vv, 2, 3), Ov(vv, 256, Wv), (vv => {
+             16 === vv.bi_valid ? (Yv(vv, vv.bi_buf), vv.bi_buf = 0, vv.bi_valid = 0) : vv.bi_valid >= 8 && (vv.pending_buf[vv.pending++] = 255 & vv.bi_buf, vv.bi_buf >>= 8, vv.bi_valid -= 8)
+           })(vv)
```

#### 12. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L608-L630` → after: `L211-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L211-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L211-L238) · [Before (L608-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L608-L630)

```diff
- 
-     function wz(zz) {
-       return bz[zz]
-     }
-   },
-   36453: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Fz
-     });
-     const Fz = {
-       "skyblock:forged:astral-astral-astral": {
-         name: "Heart of the Cosmos",
-         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
-         damageMultiplier: 1.8,
-         cooldownMultiplier: .8,
-         ability: "starfall"
- ... (7 more removed lines; see GitHub link above)
+     var Mv = (vv, zv, Pv, hv) => {
+       let Sv = 65535 & vv,
+         ev = vv >>> 16 & 65535,
+         gv = 0;
+       for (; 0 !== Pv;) {
+         gv = Pv > 2e3 ? 2e3 : Pv, Pv -= gv;
+         do {
+           Sv = Sv + zv[hv++] | 0, ev = ev + Sv | 0
+         } while (--gv);
+         Sv %= 65521, ev %= 65521
+       }
+       return Sv | ev << 16
+     };
+     const yv = new Uint32Array((() => {
+       let vv, zv = [];
+       for (var Pv = 0; Pv < 256; Pv++) {
+ ... (12 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L632-L637` → after: `L240-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L240-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L240-L249) · [Before (L632-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L632-L637)

```diff
-       "skyblock:forged:astral-diamond-moonstone": {
-         name: "Starcutter",
-         lore: "A blade so sharp the Forge Mother swears it once cut a falling star in two.",
-         damageMultiplier: 1.65,
-         cooldownMultiplier: .83,
-         ability: "starfall"
+       Jv = {
+         2: "need dictionary",
+         1: "stream end",
+         0: "",
+         "-1": "file error",
+         "-2": "stream error",
+         "-3": "data error",
+         "-4": "insufficient memory",
+         "-5": "buffer error",
+         "-6": "incompatible version"
```

#### 14. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L639-L644` → after: `L251-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L251-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L251-L314) · [Before (L639-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L639-L644)

```diff
-       "skyblock:forged:astral-sanguine-magmasteel": {
-         name: "Triune Flame",
-         lore: "Each of Lord Vulcan's three faces, bound into one burning edge.",
-         damageMultiplier: 1.65,
-         cooldownMultiplier: .83,
-         ability: "magmaWave"
+       Ev = {
+         Z_NO_FLUSH: 0,
+         Z_PARTIAL_FLUSH: 1,
+         Z_SYNC_FLUSH: 2,
+         Z_FULL_FLUSH: 3,
+         Z_FINISH: 4,
+         Z_BLOCK: 5,
+         Z_TREES: 6,
+         Z_OK: 0,
+         Z_STREAM_END: 1,
+         Z_NEED_DICT: 2,
+         Z_ERRNO: -1,
+         Z_STREAM_ERROR: -2,
+         Z_DATA_ERROR: -3,
+         Z_MEM_ERROR: -4,
+         Z_BUF_ERROR: -5,
+ ... (48 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L646-L651` → after: `L316-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L316-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L316-L317) · [Before (L646-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L646-L651)

```diff
-       "skyblock:forged:magmasteel-magmasteel-magmasteel": {
-         name: "Vulcan's Bane",
-         lore: "Forged in the heat of his own rift. It remembers the way down.",
-         damageMultiplier: 1.56,
-         cooldownMultiplier: .83,
-         ability: "magmaWave"
+       Dz = (vv, zv) => {
+         rv(vv, vv.block_start >= 0 ? vv.block_start : -1, vv.strstart - vv.block_start, zv), vv.block_start = vv.strstart, Oz(vv.strm)
```

#### 16. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L653-L658` → after: `L319-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L319-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L319-L320) · [Before (L653-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L653-L658)

```diff
-       "skyblock:forged:magmasteel-astral-sanguine": {
-         name: "Comet's Wake",
-         lore: "It leaves a trail of fire through the air, like something falling from very far up.",
-         damageMultiplier: 1.56,
-         cooldownMultiplier: .83,
-         ability: "starfall"
+       Kz = (vv, zv) => {
+         vv.pending_buf[vv.pending++] = zv
```

#### 17. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L660-L665` → after: `L322-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L322-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L322-L323) · [Before (L660-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L660-L665)

```diff
-       "skyblock:forged:magmasteel-sanguine-astral": {
-         name: "Vulcan's Ruin",
-         lore: "The Forge Mother made only one, then sat down for a long while.",
-         damageMultiplier: 1.6,
-         cooldownMultiplier: .83,
-         ability: "warcry"
+       Vz = (vv, zv) => {
+         vv.pending_buf[vv.pending++] = zv >>> 8 & 255, vv.pending_buf[vv.pending++] = 255 & zv
```

#### 18. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L667-L672` → after: `L325-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L325-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L325-L327) · [Before (L667-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L667-L672)

```diff
-       "skyblock:forged:magmasteel-iron-stone": {
-         name: "Forgehand",
-         lore: "A smith's sword: plain to look at, and it hits like a hammer.",
-         damageMultiplier: 1.4,
-         cooldownMultiplier: .9,
-         ability: "quake"
+       Uz = (vv, zv, Pv, hv) => {
+         let Sv = vv.avail_in;
+         return Sv > hv && (Sv = hv), 0 === Sv ? 0 : (vv.avail_in -= Sv, zv.set(vv.input.subarray(vv.next_in, vv.next_in + Sv), Pv), 1 === vv.state.wrap ? vv.adler = Mv(vv.adler, zv, Sv, Pv) : 2 === vv.state.wrap && (vv.adler = Bv(vv.adler, zv, Sv, Pv)), vv.next_in += Sv, vv.total … [truncated]
```

#### 19. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L674-L679` → after: `L329-L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L329-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L329-L352) · [Before (L674-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L674-L679)

```diff
-       "skyblock:forged:sanguine-sanguine-sanguine": {
-         name: "Crimson Covenant",
-         lore: "It drinks, and so do you.",
-         damageMultiplier: 1.53,
-         cooldownMultiplier: .83,
-         ability: "bloodPact"
+       Rz = (vv, zv) => {
+         let Pv, hv, Sv = vv.max_chain_length,
+           ev = vv.strstart,
+           gv = vv.prev_length,
+           pv = vv.nice_match;
+         const dv = vv.strstart > vv.w_size - cz ? vv.strstart - (vv.w_size - cz) : 0,
+           Nv = vv.window,
+           lv = vv.w_mask,
+           Tv = vv.prev,
+           Wv = vv.strstart + iz;
+         let wv = Nv[ev + gv - 1],
+           av = Nv[ev + gv];
+         vv.prev_length >= vv.good_match && (Sv >>= 2), pv > vv.lookahead && (pv = vv.lookahead);
+         do {
+           if (Pv = zv, Nv[Pv + gv] === av && Nv[Pv + gv - 1] === wv && Nv[Pv] === Nv[ev] && Nv[++Pv] === Nv[ev + 1]) {
+             ev += 2, Pv++;
+ ... (8 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L681-L686` → after: `L354-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L354-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L354-L372) · [Before (L681-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L681-L686)

```diff
-       "skyblock:forged:sanguine-astral-moonstone": {
-         name: "Nightbloom",
-         lore: "A red flower that only opens after dark.",
-         damageMultiplier: 1.56,
-         cooldownMultiplier: .83,
-         ability: "eclipseField"
+       xz = vv => {
+         const zv = vv.w_size;
+         let Pv, hv, Sv, ev, gv;
+         do {
+           if (ev = vv.window_size - vv.lookahead - vv.strstart, vv.strstart >= zv + (zv - cz)) {
+             vv.window.set(vv.window.subarray(zv, zv + zv), 0), vv.match_start -= zv, vv.strstart -= zv, vv.block_start -= zv, hv = vv.hash_size, Pv = hv;
+             do {
+               Sv = vv.head[--Pv], vv.head[Pv] = Sv >= zv ? Sv - zv : 0
+             } while (--hv);
+             hv = zv, Pv = hv;
+             do {
+               Sv = vv.prev[--Pv], vv.prev[Pv] = Sv >= zv ? Sv - zv : 0
+             } while (--hv);
+             ev += zv
+           }
+           if (0 === vv.strm.avail_in) break;
+ ... (3 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L688-L693` → after: `L374-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L374-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L374-L392) · [Before (L688-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L688-L693)

```diff
-       "skyblock:forged:sanguine-iron-wood": {
-         name: "Butcher's Oath",
-         lore: "Heavy, honest and always hungry.",
-         damageMultiplier: 1.35,
-         cooldownMultiplier: .95,
-         ability: "bloodPact"
+       tz = (vv, zv) => {
+         let Pv, hv;
+         for (;;) {
+           if (vv.lookahead < cz) {
+             if (xz(vv), vv.lookahead < cz && zv === uv) return 1;
+             if (0 === vv.lookahead) break
+           }
+           if (Pv = 0, vv.lookahead >= 3 && (vv.ins_h = nz(vv, vv.ins_h, vv.window[vv.strstart + 3 - 1]), Pv = vv.prev[vv.strstart & vv.w_mask] = vv.head[vv.ins_h], vv.head[vv.ins_h] = vv.strstart), 0 !== Pv && vv.strstart - Pv <= vv.w_size - cz && (vv.match_length = Rz(vv, Pv)),  … [truncated]
+             if (hv = kv(vv, vv.strstart - vv.match_start, vv.match_length - 3), vv.lookahead -= vv.match_length, vv.match_length <= vv.max_lazy_match && vv.lookahead >= 3) {
+               vv.match_length--;
+               do {
+                 vv.strstart++, vv.ins_h = nz(vv, vv.ins_h, vv.window[vv.strstart + 3 - 1]), Pv = vv.prev[vv.strstart & vv.w_mask] = vv.head[vv.ins_h], vv.head[vv.ins_h] = vv.strstart
+               } while (0 !== --vv.match_length);
+               vv.strstart++
+             } else vv.strstart += vv.match_length, vv.match_length = 0, vv.ins_h = vv.window[vv.strstart], vv.ins_h = nz(vv, vv.ins_h, vv.window[vv.strstart + 1]);
+           else hv = kv(vv, 0, vv.window[vv.strstart]), vv.lookahead--, vv.strstart++;
+ ... (3 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L695-L700` → after: `L394-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L394-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L394-L439) · [Before (L695-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L695-L700)

```diff
-       "skyblock:forged:moonstone-moonstone-moonstone": {
-         name: "Lunar Requiem",
-         lore: "Swung, it leaves a pale arc that lingers like a second moon.",
-         damageMultiplier: 1.35,
-         cooldownMultiplier: .85,
-         ability: "moonDash"
+       qz = (vv, zv) => {
+         let Pv, hv, Sv;
+         for (;;) {
+           if (vv.lookahead < cz) {
+             if (xz(vv), vv.lookahead < cz && zv === uv) return 1;
+             if (0 === vv.lookahead) break
+           }
+           if (Pv = 0, vv.lookahead >= 3 && (vv.ins_h = nz(vv, vv.ins_h, vv.window[vv.strstart + 3 - 1]), Pv = vv.prev[vv.strstart & vv.w_mask] = vv.head[vv.ins_h], vv.head[vv.ins_h] = vv.strstart), vv.prev_length = vv.match_length, vv.prev_match = vv.match_start, vv.match_length  … [truncated]
+             Sv = vv.strstart + vv.lookahead - 3, hv = kv(vv, vv.strstart - 1 - vv.prev_match, vv.prev_length - 3), vv.lookahead -= vv.prev_length - 1, vv.prev_length -= 2;
+             do {
+               ++vv.strstart <= Sv && (vv.ins_h = nz(vv, vv.ins_h, vv.window[vv.strstart + 3 - 1]), Pv = vv.prev[vv.strstart & vv.w_mask] = vv.head[vv.ins_h], vv.head[vv.ins_h] = vv.strstart)
+             } while (0 !== --vv.prev_length);
+             if (vv.match_available = 0, vv.match_length = 2, vv.strstart++, hv && (Dz(vv, !1), 0 === vv.strm.avail_out)) return 1
+           } else if (vv.match_available) {
+             if (hv = kv(vv, 0, vv.window[vv.strstart - 1]), hv && Dz(vv, !1), vv.strstart++, vv.lookahead--, 0 === vv.strm.avail_out) return 1
+           } else vv.match_available = 1, vv.strstart++, vv.lookahead--
+ ... (30 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L702-L707` → after: `L441-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L441-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L441-L444) · [Before (L702-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L702-L707)

```diff
-       "skyblock:forged:moonstone-astral-moonstone": {
-         name: "Silver Tide",
-         lore: "Pulled by the same moon that pulls the sea.",
-         damageMultiplier: 1.4,
-         cooldownMultiplier: .84,
-         ability: "moonDash"
+       Lz = vv => {
+         const zv = Az(vv);
+         var Pv;
+         return zv === Sz && ((Pv = vv.state).window_size = 2 * Pv.w_size, Yz(Pv.head), Pv.max_lazy_match = Qz[Pv.level].max_lazy, Pv.good_match = Qz[Pv.level].good_length, Pv.nice_match = Qz[Pv.level].nice_length, Pv.max_chain_length = Qz[Pv.level].max_chain, Pv.strstart = 0, Pv. … [truncated]
```

#### 24. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L709-L716` → after: `L446-L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L446-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L446-L535) · [Before (L709-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L709-L716)

```diff
-       "skyblock:forged:diamond-diamond-diamond": {
-         name: "Prism Fang",
-         lore: "Every facet catches a different light, and every strike finds a different weakness.",
-         damageMultiplier: 1.29,
-         cooldownMultiplier: .88,
-         ability: "gildedEdge",
-         traits: {
-           crit: 1.8
+       Hz = (vv, zv, Pv, hv, Sv, ev) => {
+         if (!vv) return gz;
+         let gv = 1;
+         if (zv === Nz && (zv = 6), hv < 0 ? (gv = 0, hv = -hv) : hv > 15 && (gv = 2, hv -= 16), Sv < 1 || Sv > 9 || Pv !== Cz || hv < 8 || hv > 15 || zv < 0 || zv > 9 || ev < 0 || ev > wz) return fz(vv, gz);
+         8 === hv && (hv = 9);
+         const pv = new Zz;
+         return vv.state = pv, pv.strm = vv, pv.wrap = gv, pv.gzhead = null, pv.w_bits = hv, pv.w_size = 1 << pv.w_bits, pv.w_mask = pv.w_size - 1, pv.hash_bits = Sv + 7, pv.hash_size = 1 << pv.hash_bits, pv.hash_mask = pv.hash_size - 1, pv.hash_shift = ~~((pv.hash_bits + 3 - 1) / … [truncated]
+       };
+     var Mz = {
+       deflateInit: (vv, zv) => Hz(vv, zv, Cz, 15, 8, az),
+       deflateInit2: Hz,
+       deflateReset: Lz,
+       deflateResetKeep: Az,
+       deflateSetHeader: (vv, zv) => vv && vv.state ? 2 !== vv.state.wrap ? gz : (vv.state.gzhead = zv, Sz) : gz,
+       deflate: (vv, zv) => {
+         let Pv, hv;
+ ... (74 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L719-L724` → after: `L539-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L539-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L539-L542) · [Before (L719-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L719-L724)

```diff
-       "skyblock:forged:diamond-moonstone-gold": {
-         name: "Jeweller's Pride",
-         lore: "Too pretty to fight with. Fight with it anyway.",
-         damageMultiplier: 1.24,
-         cooldownMultiplier: .91,
-         ability: "gildedEdge"
+       deflateEnd: vv => {
+         if (!vv || !vv.state) return gz;
+         const zv = vv.state.status;
+         return 42 !== zv && 69 !== zv && 73 !== zv && 91 !== zv && zv !== Gz && zv !== mz && zv !== jz ? fz(vv, gz) : (vv.state = null, zv === mz ? fz(vv, pz) : Sz)
```

#### 26. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L726-L733` → after: `L544-L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L544-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L544-L553) · [Before (L726-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L726-L733)

```diff
-       "skyblock:forged:gold-gold-gold": {
-         name: "King's Ransom",
-         lore: "Worth more than the treasure it guards.",
-         damageMultiplier: 1.18,
-         cooldownMultiplier: .91,
-         ability: "gildedEdge",
-         traits: {
-           coins: 2.5
+       deflateSetDictionary: (vv, zv) => {
+         let Pv = zv.length;
+         if (!vv || !vv.state) return gz;
+         const hv = vv.state,
+           Sv = hv.wrap;
+         if (2 === Sv || 1 === Sv && 42 !== hv.status || hv.lookahead) return gz;
+         if (1 === Sv && (vv.adler = Mv(vv.adler, zv, Pv, 0)), hv.wrap = 0, Pv >= hv.w_size) {
+           0 === Sv && (Yz(hv.head), hv.strstart = 0, hv.block_start = 0, hv.insert = 0);
+           let vv = new Uint8Array(hv.w_size);
+           vv.set(zv.subarray(Pv - hv.w_size, Pv), 0), zv = vv, Pv = hv.w_size
```

#### 27. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L735-L744` → after: `L555-L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L555-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L555-L564) · [Before (L735-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L735-L744)

```diff
-       },
-       "skyblock:forged:gold-moonstone-gold": {
-         name: "Midas Moon",
-         lore: "Mobs it fells seem to rattle with coins.",
-         damageMultiplier: 1.18,
-         cooldownMultiplier: .92,
-         ability: "gildedEdge",
-         traits: {
-           coins: 2,
-           bossBane: .6
+         const ev = vv.avail_in,
+           gv = vv.next_in,
+           pv = vv.input;
+         for (vv.avail_in = Pv, vv.next_in = 0, vv.input = zv, xz(hv); hv.lookahead >= 3;) {
+           let vv = hv.strstart,
+             zv = hv.lookahead - 2;
+           do {
+             hv.ins_h = nz(hv, hv.ins_h, hv.window[vv + 3 - 1]), hv.prev[vv & hv.w_mask] = hv.head[hv.ins_h], hv.head[hv.ins_h] = vv, vv++
+           } while (--zv);
+           hv.strstart = vv, hv.lookahead = 2, xz(hv)
```

#### 28. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L747-L752` → after: `L568-L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L568-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L568-L580) · [Before (L747-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L747-L752)

```diff
-       "skyblock:forged:iron-iron-iron": {
-         name: "Old Faithful",
-         lore: "It has never let anyone down. It never will.",
-         damageMultiplier: 1.15,
-         cooldownMultiplier: .94,
-         ability: "warcry"
+       deflateInfo: "pako deflate (from Nodeca project)"
+     };
+     const yz = (vv, zv) => Object.prototype.hasOwnProperty.call(vv, zv);
+     var Bz = function(vv) {
+         const zv = Array.prototype.slice.call(arguments, 1);
+         for (; zv.length;) {
+           const Pv = zv.shift();
+           if (Pv) {
+             if ("object" !== typeof Pv) throw new TypeError(Pv + "must be non-object");
+             for (const zv in Pv) yz(Pv, zv) && (vv[zv] = Pv[zv])
+           }
+         }
+         return vv
```

#### 29. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L754-L759` → after: `L582-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L582-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L582-L607) · [Before (L754-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L754-L759)

```diff
-       "skyblock:forged:iron-wood-wood": {
-         name: "Militia Blade",
-         lore: "Handed out at the outpost gate when the rift first opened.",
-         damageMultiplier: 1.09,
-         cooldownMultiplier: .97,
-         ability: "warcry"
+       Jz = vv => {
+         let zv = 0;
+         for (let hv = 0, Sv = vv.length; hv < Sv; hv++) zv += vv[hv].length;
+         const Pv = new Uint8Array(zv);
+         for (let hv = 0, Sv = 0, ev = vv.length; hv < ev; hv++) {
+           let zv = vv[hv];
+           Pv.set(zv, Sv), Sv += zv.length
+         }
+         return Pv
+       };
+     let Ez = !0;
+     try {
+       String.fromCharCode.apply(null, new Uint8Array(1))
+     } catch (sh) {
+       Ez = !1
+     }
+ ... (10 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L761-L766` → after: `L609-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L609-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L609-L632) · [Before (L761-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L761-L766)

```diff
-       "skyblock:forged:stone-stone-stone": {
-         name: "Quarryman's Cleaver",
-         lore: "Chipped from one block of stone, handle and all.",
-         damageMultiplier: 1.09,
-         cooldownMultiplier: .97,
-         ability: "quake"
+       rz = (vv, zv) => {
+         const Pv = zv || vv.length;
+         if ("function" === typeof TextDecoder && TextDecoder.prototype.decode) return (new TextDecoder).decode(vv.subarray(0, zv));
+         let hv, Sv;
+         const ev = new Array(2 * Pv);
+         for (Sv = 0, hv = 0; hv < Pv;) {
+           let zv = vv[hv++];
+           if (zv < 128) {
+             ev[Sv++] = zv;
+             continue
+           }
+           let gv = oz[zv];
+           if (gv > 4) ev[Sv++] = 65533, hv += gv - 1;
+           else {
+             for (zv &= 2 === gv ? 31 : 3 === gv ? 15 : 7; gv > 1 && hv < Pv;) zv = zv << 6 | 63 & vv[hv++], gv--;
+             gv > 1 ? ev[Sv++] = 65533 : zv < 65536 ? ev[Sv++] = zv : (zv -= 65536, ev[Sv++] = 55296 | zv >> 10 & 1023, ev[Sv++] = 56320 | 1023 & zv)
+ ... (8 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L768-L786` → after: `L634-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L634-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L634-L654) · [Before (L768-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L768-L786)

```diff
-       "skyblock:forged:wood-wood-wood": {
-         name: "Lorenzo's Lesson",
-         lore: "Courage matters more than the blade. This one is mostly courage.",
-         damageMultiplier: 1.06,
-         cooldownMultiplier: .97,
-         ability: "warcry"
-       }
-     }
-   },
-   37039: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => Oz
-     });
-     var Fz = sz(330),
-       Wz = sz.n(Fz),
-       Xz = sz(1824);
- ... (3 more removed lines; see GitHub link above)
+       kz = (vv, zv) => {
+         (zv = zv || vv.length) > vv.length && (zv = vv.length);
+         let Pv = zv - 1;
+         for (; Pv >= 0 && 128 === (192 & vv[Pv]);) Pv--;
+         return Pv < 0 || 0 === Pv ? zv : Pv + oz[vv[Pv]] > zv ? Pv : zv
+       };
+     var Xz = function() {
+       this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.al = "", this.state = null, this.data_type = 2, this.adler = 0
+     };
+     const uz = Object.prototype.toString,
+       {
+         Z_NO_FLUSH: vP,
+         Z_SYNC_FLUSH: zP,
+         Z_FULL_FLUSH: PP,
+         Z_FINISH: hP,
+         Z_OK: SP,
+ ... (5 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L788-L800` → after: `L656-L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L656-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L656-L673) · [Before (L788-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L788-L800)

```diff
-     function Hz(...zz) {
-       return zz[gz[13]] = gz[2], typeof oz[zz[gz[1]]] === gz[18] ? oz[zz[gz[1]]] = function(...zz) {
-         for (Gz(zz[gz[13]] = gz[2], zz[gz[5]] = 'y21%?<rSz7P|=xw+v_3Van6iq&jAK[~Ll{RBO0Focbd9(CJG!mHM"/N;h@pe,#*f>XW)$IgDt8EQ^TksY}U:Zu`54.]', zz[-gz[0]] = "" + (zz[gz[1]] || ""), zz[gz[4]] = zz[-gz[0]].length, zz[-gz[10]] = [], zz[gz[8]] = gz[1], zz[gz[9]] = gz[1], zz[gz[7]] = - … [truncated]
-           if (zz[gz[6]] = zz[gz[5]].indexOf(zz[-gz[0]][zz[-gz[3]]]), zz[gz[6]] !== -gz[2])
-             if (zz[gz[7]] < gz[1]) zz[gz[7]] = zz[gz[6]];
-             else {
-               Gz(zz[gz[7]] += zz[gz[6]] * gz[29], zz[gz[8]] |= zz[gz[7]] << zz[gz[9]], zz[gz[9]] += (zz[gz[7]] & gz[31]) > gz[6] ? gz[32] : gz[33]);
-               do {
-                 Gz(zz[-gz[10]].push(zz[gz[8]] & gz[12]), zz[gz[8]] >>= gz[11], zz[gz[9]] -= gz[11])
-               } while (zz[gz[9]] > gz[24]);
-               zz[gz[7]] = -gz[2]
-             } return zz[gz[7]] > -gz[2] && zz[-gz[10]].push((zz[gz[8]] | zz[gz[7]] << zz[gz[9]]) & gz[12]), Bz(zz[-gz[10]])
-       }(vz[zz[gz[1]]]) : oz[zz[gz[1]]]
+     function NP(vv) {
+       this.options = Bz({
+         level: gP,
+         method: dP,
+         aa: 16384,
+         windowBits: 15,
+         memLevel: 8,
+         strategy: pP
+       }, vv || {});
+       let zv = this.options;
+       zv.raw && zv.windowBits > 0 ? zv.windowBits = -zv.windowBits : zv.gzip && zv.windowBits > 0 && zv.windowBits < 16 && (zv.windowBits += 16), this.err = 0, this.al = "", this.ended = !1, this.chunks = [], this.strm = new Xz, this.strm.avail_out = 0;
+       let Pv = Mz.deflateInit2(this.strm, zv.level, zv.method, zv.windowBits, zv.memLevel, zv.strategy);
+       if (Pv !== SP) throw new Error(Jv[Pv]);
+       if (zv.header && Mz.deflateSetHeader(this.strm, zv.header), zv.dictionary) {
+         let vv;
+         if (vv = "string" === typeof zv.dictionary ? bz(zv.dictionary) : "[object ArrayBuffer]" === uz.call(zv.dictionary) ? new Uint8Array(zv.dictionary) : zv.dictionary, Pv = Mz.deflateSetDictionary(this.strm, vv), Pv !== SP) throw new Error(Jv[Pv]);
+ ... (2 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L803-L804` → after: `L676-L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L676-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L676-L679) · [Before (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L803-L804)

```diff
-     function Bz(...zz) {
-       return zz[gz[13]] = gz[2], typeof Kz !== gz[18] && Kz ? (new Kz).decode(new uz(zz[gz[1]])) : typeof Nz !== gz[18] && Nz ? Nz.from(zz[gz[1]]).toString("utf-8") : Dz(zz[gz[1]])
+     function lP(vv, zv) {
+       const Pv = new NP(zv);
+       if (Pv.push(vv, !0), Pv.err) throw Pv.al || Jv[Pv.err];
+       return Pv.result
```

#### 34. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L806-L814` → after: `L681-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L681-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L681-L774) · [Before (L806-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L806-L814)

```diff
- 
-     function Pz(zz, tz, sz) {
-       if (zz === function(...zz) {
-           return zz[gz[13]] = gz[2], typeof oz[zz[gz[1]]] === gz[18] ? oz[zz[gz[1]]] = function(...zz) {
-             for (Gz(zz[gz[13]] = gz[2], zz[gz[3]] = '*hckBljGMJIDZVnXp1o(S]tCE~YbNxLamO|+76T5H>._uUW=qQfrz#9,/3!"4$`}y%<[^si@FR&0A;gP8?:K{d2wve)', zz[gz[14]] = "" + (zz[gz[1]] || ""), zz[gz[21]] = zz[gz[14]].length, zz[gz[34]] = [], zz[gz[30]] = gz[1], zz[gz[22]] = gz[1], zz[gz[2 … [truncated]
-               if (zz[-gz[27]] = zz[gz[3]].indexOf(zz[gz[14]][zz[gz[26]]]), zz[-gz[27]] !== -gz[2])
-                 if (zz[gz[28]] < gz[1]) zz[gz[28]] = zz[-gz[27]];
-                 else {
-                   Gz(zz[gz[28]] += zz[-gz[27]] * gz[29], zz[gz[30]] |= zz[gz[28]] << zz[gz[22]], zz[gz[22]] += (zz[gz[28]] & gz[31]) > gz[6] ? gz[32] : gz[33]);
+     NP.prototype.push = function(vv, zv) {
+       const Pv = this.strm,
+         hv = this.options.aa;
+       let Sv, ev;
+       if (this.ended) return !1;
+       for (ev = zv === ~~zv ? zv : !0 === zv ? hP : vP, "string" === typeof vv ? Pv.input = bz(vv) : "[object ArrayBuffer]" === uz.call(vv) ? Pv.input = new Uint8Array(vv) : Pv.input = vv, Pv.next_in = 0, Pv.avail_in = Pv.input.length;;)
+         if (0 === Pv.avail_out && (Pv.output = new Uint8Array(hv), Pv.next_out = 0, Pv.avail_out = hv), (ev === zP || ev === PP) && Pv.avail_out <= 6) this.onData(Pv.output.subarray(0, Pv.next_out)), Pv.avail_out = 0;
+         else {
+           if (Sv = Mz.deflate(Pv, ev), Sv === eP) return Pv.next_out > 0 && this.onData(Pv.output.subarray(0, Pv.next_out)), Sv = Mz.deflateEnd(this.strm), this.onEnd(Sv), this.ended = !0, Sv === SP;
+           if (0 !== Pv.avail_out) {
+             if (ev > 0 && Pv.next_out > 0) this.onData(Pv.output.subarray(0, Pv.next_out)), Pv.avail_out = 0;
+             else if (0 === Pv.avail_in) break
+           } else this.onData(Pv.output)
+         } return !0
+     }, NP.prototype.onData = function(vv) {
+       this.chunks.push(vv)
+ ... (78 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L816-L848` → after: `L776-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L776-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L776-L792) · [Before (L816-L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L816-L848)

```diff
-                     Gz(zz[gz[34]].push(zz[gz[30]] & gz[12]), zz[gz[30]] >>= gz[11], zz[gz[22]] -= gz[11])
-                   } while (zz[gz[22]] > gz[24]);
-                   zz[gz[28]] = -gz[2]
-                 } return zz[gz[28]] > -gz[2] && zz[gz[34]].push((zz[gz[30]] | zz[gz[28]] << zz[gz[22]]) & gz[12]), Bz(zz[gz[34]])
-           }(vz[zz[gz[1]]]) : oz[zz[gz[1]]]
-         }(81)) return tz + sz
-     }
- 
-     function rz() {}
-     Gz(oz = {}, vz = ["KieTrHrJ^e4g1gGoLiy7*T*E?", "mCJ^`^p`T/@gn0Qo1N?PN0%&RN?rYec3{!$/+:3zcaI,^%@KyB1", "2=<PjFC2s3XhG1#do0;^JUxx<>R", ",e5KOQ;Br", 'JM}NBBDSI>*?j0Qjc*6{gtqz=e(?+j@b:R~^g,c"PaA;Z+2dky', '|?aE;J">(h^EAHeb*w_~NhC@Qw2$jmVR!9w^_', "4w@reg#[HVZ,aApbw7|T=IPJ_+x$ytvAT* … [truncated]
-       Gz(zz[gz[13]] = gz[1], zz[-gz[16]] = [function() {
-         return globalThis
-       }, function() {
-         return global
-       }, function() {
-         return window
- ... (17 more removed lines; see GitHub link above)
+                     nv[Sv++] = Tv[fv++]
+                   } while (--Gv);
+                   fv = Sv - jv, Fv = nv
+                 }
+                 for (; mv > 2;) nv[Sv++] = Fv[fv++], nv[Sv++] = Fv[fv++], nv[Sv++] = Fv[fv++], mv -= 3;
+                 mv && (nv[Sv++] = Fv[fv++], mv > 1 && (nv[Sv++] = Fv[fv++]))
+               } else {
+                 fv = Sv - jv;
+                 do {
+                   nv[Sv++] = nv[fv++], nv[Sv++] = nv[fv++], nv[Sv++] = nv[fv++], mv -= 3
+                 } while (mv > 2);
+                 mv && (nv[Sv++] = nv[fv++], mv > 1 && (nv[Sv++] = nv[fv++]))
+               }
+               break
+             }
+           }
+ ... (1 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L850-L871` → after: `L794-L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L794-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L794-L839) · [Before (L850-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L850-L871)

```diff
-     }());
-     const Yz = Wz()[Hz(gz[6])](),
-       xz = Wz()[Hz(gz[6])](),
-       mz = Wz()[Hz(gz[6])](),
-       Jz = Wz()[Hz(gz[6])](),
-       Iz = Wz()[Hz(gz[6])](),
-       Cz = Wz()[Hz(gz[6])](),
-       ez = Wz()[Hz(gz[6])](),
-       Zz = (...zz) => {
-         function tz(...zz) {
-           return zz[gz[13]] = gz[2], typeof oz[zz[gz[1]]] === gz[18] ? oz[zz[gz[1]]] = function(...zz) {
-             for (Gz(zz[gz[13]] = gz[2], zz[gz[5]] = '=QkUVB@Gauw/c{_+`bt*D[vZ$l(irI92p|~1o!E8<AYNy:LK7sMzx)C#mP3.6nH%qg}?R,4^j]h0&XOFW5T;f"dJeS>', zz[gz[14]] = "" + (zz[gz[1]] || ""), zz[gz[21]] = zz[gz[14]].length, zz[gz[50]] = [], zz[gz[49]] = gz[1], zz[gz[43]] = gz[1], zz[-gz[ … [truncated]
-               if (zz[gz[46]] = zz[gz[5]].indexOf(zz[gz[14]][zz[gz[11]]]), zz[gz[46]] !== -gz[2])
-                 if (zz[-gz[48]] < gz[1]) zz[-gz[48]] = zz[gz[46]];
-                 else {
-                   Gz(zz[-gz[48]] += zz[gz[46]] * gz[29], zz[gz[49]] |= zz[-gz[48]] << zz[gz[43]], zz[gz[43]] += (zz[-gz[48]] & gz[31]) > gz[6] ? gz[32] : gz[33]);
- ... (6 more removed lines; see GitHub link above)
+       } while (Pv < hv && Sv < gv);
+       mv = wv >> 3, Pv -= mv, wv -= mv << 3, Wv &= (1 << wv) - 1, vv.next_in = Pv, vv.next_out = Sv, vv.avail_in = Pv < hv ? hv - Pv + 5 : 5 - (Pv - hv), vv.avail_out = Sv < gv ? gv - Sv + 257 : 257 - (Sv - gv), Ov.hold = Wv, Ov.bits = wv
+     };
+     const wP = 15,
+       aP = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]),
+       sP = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]),
+       CP = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]),
+       iP = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
+     var cP = (vv, zv, Pv, hv, Sv, ev, gv, pv) => {
+       const dv = pv.bits;
+       let Nv, lv, Tv, Wv, wv, av, sv = 0,
+         Cv = 0,
+         iv = 0,
+         cv = 0,
+         Gv = 0,
+         mv = 0,
+ ... (30 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L873-L877` → after: `L841-L861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L841-L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L841-L861) · [Before (L873-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L873-L877)

```diff
-         zz[gz[13]] = gz[21], tz(gz[60]) + "j" in rz && function(...zz) {
-           Gz(zz[gz[13]] = gz[1], zz[-gz[51]] = function(...zz) {
-             function sz(...zz) {
-               return zz[gz[13]] = gz[2], Kz(Oz(bz(zz[gz[1]])))
-             }
+         if (sv > Gv && (Yv & Wv) !== Tv) {
+           for (0 === jv && (jv = Gv), wv += iv, mv = sv - jv, fv = 1 << mv; mv + jv < cv && (fv -= Dv[mv + jv], !(fv <= 0));) mv++, fv <<= 1;
+           if (Fv += 1 << mv, 1 === vv && Fv > 852 || 2 === vv && Fv > 592) return 1;
+           Tv = Yv & Wv, Sv[Tv] = Gv << 24 | mv << 16 | wv - ev
+         }
+       }
+       return 0 !== Yv && (Sv[wv + Yv] = sv - jv << 24 | 64 << 16), pv.bits = Gv, 0
+     };
+     const {
+       Z_FINISH: GP,
+       Z_BLOCK: mP,
+       Z_TREES: jP,
+       Z_OK: fP,
+       Z_STREAM_END: FP,
+       Z_NEED_DICT: YP,
+       Z_STREAM_ERROR: nP,
+ ... (5 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L879-L880` → after: `L863-L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L863-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L863-L929) · [Before (L879-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L879-L880)

```diff
-             function Fz(...zz) {
-               return zz[gz[13]] = gz[14], Kz(Uz(bz(zz[gz[1]]), bz(zz[gz[2]])))
+     function tP() {
+       this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = … [truncated]
+     }
+     const qP = vv => {
+         if (!vv || !vv.state) return nP;
+         const zv = vv.state;
+         return vv.total_in = vv.total_out = zv.total = 0, vv.al = "", zv.wrap && (vv.adler = 1 & zv.wrap), zv.mode = 1, zv.last = 0, zv.havedict = 0, zv.dmax = 32768, zv.head = null, zv.hold = 0, zv.bits = 0, zv.lencode = zv.lendyn = new Int32Array(852), zv.distcode = zv.distdyn  … [truncated]
+       },
+       IP = vv => {
+         if (!vv || !vv.state) return nP;
+         const zv = vv.state;
+         return zv.wsize = 0, zv.whave = 0, zv.wnext = 0, qP(vv)
+       },
+       QP = (vv, zv) => {
+         let Pv;
+         if (!vv || !vv.state) return nP;
+ ... (51 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L882-L884` → after: `L931-L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L931-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L931-L933) · [Before (L882-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L882-L884)

```diff
- 
-             function Wz(zz, tz) {
-               return uz(Uz(bz(zz), bz(tz)))
+             for (; lv < 16;) {
+               if (0 === pv) break vv;
+               pv--, Nv += hv[ev++] << lv, lv += 8
```

#### 40. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L886-L888` → after: `L935-L937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L935-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L935-L937) · [Before (L886-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L886-L888)

```diff
- 
-             function Xz(zz, tz, sz) {
-               return Nz(Uz(bz(zz), bz(tz)), sz)
+             if (2 & Pv.wrap && 35615 === Nv) {
+               Pv.check = 0, nv[0] = 255 & Nv, nv[1] = Nv >>> 8 & 255, Pv.check = Bv(Pv.check, nv, 2, 0), Nv = 0, lv = 0, Pv.mode = 2;
+               break
```

#### 41. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L890-L892` → after: `L939-L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L939-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L939-L941) · [Before (L890-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L890-L892)

```diff
- 
-             function Oz(zz) {
-               return Dz(ez(wz(zz), zz.length * gz[11]))
+             if (Pv.flags = 0, Pv.head && (Pv.head.done = !1), !(1 & Pv.wrap) || (((255 & Nv) << 8) + (Nv >> 8)) % 31) {
+               vv.al = "incorrect header check", Pv.mode = RP;
+               break
```

#### 42. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L894-L916` → after: `L943-L945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L943-L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L943-L945) · [Before (L894-L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L894-L916)

```diff
- 
-             function Uz(...zz) {
-               function tz(...zz) {
-                 for (Gz(zz[gz[13]] = gz[2], zz[gz[56]] = 'f9IW6Ckq/NvrxwGn}o?3aPM$J]B"7K2t0em|%_&!FgyXRLb5^*{H;Q.:VpZO[8D)E`TcAUl<j14z>h=SY+@#si(,~ud', zz[gz[53]] = "" + (zz[gz[1]] || ""), zz[-gz[55]] = zz[gz[53]].length, zz[gz[20]] = [], zz[gz[47]] = gz[1], zz[-gz[58]] = gz[1],  … [truncated]
-                   if (zz[gz[46]] = zz[gz[56]].indexOf(zz[gz[53]][zz[gz[21]]]), zz[gz[46]] !== -gz[2])
-                     if (zz[-gz[57]] < gz[1]) zz[-gz[57]] = zz[gz[46]];
-                     else {
-                       Gz(zz[-gz[57]] += zz[gz[46]] * gz[29], zz[gz[47]] |= zz[-gz[57]] << zz[-gz[58]], zz[-gz[58]] += (zz[-gz[57]] & gz[31]) > gz[6] ? gz[32] : gz[33]);
-                       do {
-                         Gz(zz[gz[20]].push(zz[gz[47]] & gz[12]), zz[gz[47]] >>= gz[11], zz[-gz[58]] -= gz[11])
-                       } while (zz[-gz[58]] > gz[24]);
-                       zz[-gz[57]] = -gz[2]
-                     } return zz[-gz[57]] > -gz[2] && zz[gz[20]].push((zz[gz[47]] | zz[-gz[57]] << zz[-gz[58]]) & gz[12]), Bz(zz[gz[20]])
-               }
- 
-               function sz(...zz) {
- ... (7 more removed lines; see GitHub link above)
+             if ((15 & Nv) !== VP) {
+               vv.al = "unknown compression method", Pv.mode = RP;
+               break
```

#### 43. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L918-L930` → after: `L947-L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L947-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L947-L984) · [Before (L918-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L918-L930)

```diff
- 
-             function Kz(...sz) {
-               function Fz(...zz) {
-                 for (Gz(zz[gz[13]] = gz[2], zz[gz[5]] = '47w}9]zFNlaWg;U"(.6fRjkb02Vsp|3HYZi&%h1_J@=Q[Du^EXMK/x5!rLy{c$SI:+,n#TdB?`*o>eP8OvG)t~C<Aqm', zz[gz[14]] = "" + (zz[gz[1]] || ""), zz[gz[21]] = zz[gz[14]].length, zz[gz[39]] = [], zz[gz[30]] = gz[1], zz[gz[43]] = gz[1], zz[ … [truncated]
-                   if (zz[gz[62]] = zz[gz[5]].indexOf(zz[gz[14]][zz[gz[26]]]), zz[gz[62]] !== -gz[2])
-                     if (zz[gz[24]] < gz[1]) zz[gz[24]] = zz[gz[62]];
-                     else {
-                       Gz(zz[gz[24]] += zz[gz[62]] * gz[29], zz[gz[30]] |= zz[gz[24]] << zz[gz[43]], zz[gz[43]] += (zz[gz[24]] & gz[31]) > gz[6] ? gz[32] : gz[33]);
-                       do {
-                         Gz(zz[gz[39]].push(zz[gz[30]] & gz[12]), zz[gz[30]] >>= gz[11], zz[gz[43]] -= gz[11])
-                       } while (zz[gz[43]] > gz[24]);
-                       zz[gz[24]] = -gz[2]
-                     } return zz[gz[24]] > -gz[2] && zz[gz[39]].push((zz[gz[30]] | zz[gz[24]] << zz[gz[43]]) & gz[12]), Bz(zz[gz[39]])
+             if (Nv >>>= 4, lv -= 4, fv = 8 + (15 & Nv), 0 === Pv.wbits) Pv.wbits = fv;
+             else if (fv > Pv.wbits) {
+               vv.al = "invalid window size", Pv.mode = RP;
+               break
+             }
+             Pv.dmax = 1 << Pv.wbits, vv.adler = Pv.check = 1, Pv.mode = 512 & Nv ? 10 : UP, Nv = 0, lv = 0;
+             break;
+           case 2:
+             for (; lv < 16;) {
+               if (0 === pv) break vv;
+               pv--, Nv += hv[ev++] << lv, lv += 8
+             }
+             if (Pv.flags = Nv, (255 & Pv.flags) !== VP) {
+               vv.al = "unknown compression method", Pv.mode = RP;
+               break
+             }
+ ... (22 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L932-L934` → after: `L986-L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L986-L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L986-L1016) · [Before (L932-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L932-L934)

```diff
- 
-               function Wz(...zz) {
-                 return zz[gz[13]] = gz[2], typeof oz[zz[gz[1]]] === gz[18] ? oz[zz[gz[1]]] = Fz(vz[zz[gz[1]]]) : oz[zz[gz[1]]]
+               Pv.length = Nv, Pv.head && (Pv.head.extra_len = Nv), 512 & Pv.flags && (nv[0] = 255 & Nv, nv[1] = Nv >>> 8 & 255, Pv.check = Bv(Pv.check, nv, 2, 0)), Nv = 0, lv = 0
+             } else Pv.head && (Pv.head.extra = null);
+             Pv.mode = 6;
+           case 6:
+             if (1024 & Pv.flags && (wv = Pv.length, wv > pv && (wv = pv), wv && (Pv.head && (fv = Pv.head.extra_len - Pv.length, Pv.head.extra || (Pv.head.extra = new Uint8Array(Pv.head.extra_len)), Pv.head.extra.set(hv.subarray(ev, ev + wv), fv)), 512 & Pv.flags && (Pv.check = B … [truncated]
+             Pv.length = 0, Pv.mode = 7;
+           case 7:
+             if (2048 & Pv.flags) {
+               if (0 === pv) break vv;
+               wv = 0;
+               do {
+                 fv = hv[ev + wv++], Pv.head && fv && Pv.length < 65536 && (Pv.head.name += String.fromCharCode(fv))
+               } while (fv && wv < pv);
+               if (512 & Pv.flags && (Pv.check = Bv(Pv.check, hv, wv, ev)), pv -= wv, ev += wv, fv) break vv
+             } else Pv.head && (Pv.head.name = null);
+             Pv.length = 0, Pv.mode = 8;
+ ... (15 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L936-L940` → after: `L1018-L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1018-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L1018-L1020) · [Before (L936-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L936-L940)

```diff
-               sz[gz[13]] = gz[2];
-               try {
-                 zz[gz[53]]
-               } catch (Xz) {
-                 zz[gz[53]] = gz[1]
+               if (Nv !== (65535 & Pv.check)) {
+                 vv.al = "header crc mismatch", Pv.mode = RP;
+                 break
```

#### 46. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L942-L943` → after: `L1022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L1022) · [Before (L942-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L942-L943)

```diff
-               for (Gz(sz[gz[2]] = zz[gz[53]] ? tz(gz[63]) + tz(98) + tz(99) : tz(gz[63]) + Wz(100) + Wz(gz[54]), sz[gz[64]] = "", sz[gz[4]] = gz[19]), sz[gz[39]] = gz[1]; sz[gz[39]] < sz[gz[1]].length; sz[gz[39]]++) Gz(sz[gz[4]] = sz[gz[1]].charCodeAt(sz[gz[39]]), sz[gz[64]] += s … [truncated]
-               return sz[gz[64]]
+               Nv = 0, lv = 0
```

#### 47. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L945-L957` → after: `L1024-L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1024-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L1024-L1098) · [Before (L945-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L945-L957)

```diff
- 
-             function uz(...sz) {
-               function Fz(...zz) {
-                 for (Gz(zz[gz[13]] = gz[2], zz[gz[5]] = 'x]~{w&`47r(D0I}_z/X>WRsT1id*<fJOPKcNokG,3n5ap+Y8bLU|?mAuvgQ^;lHy9#:2MZhq6"=SB@t!e%C$E[.jVF)', zz[gz[53]] = "" + (zz[gz[1]] || ""), zz[gz[21]] = zz[gz[53]].length, zz[gz[39]] = [], zz[gz[47]] = gz[1], zz[gz[22]] = gz[1], zz[ … [truncated]
-                   if (zz[gz[66]] = zz[gz[5]].indexOf(zz[gz[53]][zz[gz[26]]]), zz[gz[66]] !== -gz[2])
-                     if (zz[gz[7]] < gz[1]) zz[gz[7]] = zz[gz[66]];
-                     else {
-                       Gz(zz[gz[7]] += zz[gz[66]] * gz[29], zz[gz[47]] |= zz[gz[7]] << zz[gz[22]], zz[gz[22]] += (zz[gz[7]] & gz[31]) > gz[6] ? gz[32] : gz[33]);
-                       do {
-                         Gz(zz[gz[39]].push(zz[gz[47]] & gz[12]), zz[gz[47]] >>= gz[11], zz[gz[22]] -= gz[11])
-                       } while (zz[gz[22]] > gz[24]);
-                       zz[gz[7]] = -gz[2]
-                     } return zz[gz[7]] > -gz[2] && zz[gz[39]].push((zz[gz[47]] | zz[gz[7]] << zz[gz[22]]) & gz[12]), Bz(zz[gz[39]])
+             Pv.head && (Pv.head.hcrc = Pv.flags >> 9 & 1, Pv.head.done = !0), vv.adler = Pv.check = 0, Pv.mode = UP;
+             break;
+           case 10:
+             for (; lv < 32;) {
+               if (0 === pv) break vv;
+               pv--, Nv += hv[ev++] << lv, lv += 8
+             }
+             vv.adler = Pv.check = xP(Nv), Nv = 0, lv = 0, Pv.mode = 11;
+           case 11:
+             if (0 === Pv.havedict) return vv.next_out = gv, vv.avail_out = dv, vv.next_in = ev, vv.avail_in = pv, Pv.hold = Nv, Pv.bits = lv, YP;
+             vv.adler = Pv.check = 1, Pv.mode = UP;
+           case UP:
+             if (zv === mP || zv === jP) break vv;
+           case 13:
+             if (Pv.last) {
+               Nv >>>= 7 & lv, lv -= 7 & lv, Pv.mode = 27;
+ ... (59 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L959-L961` → after: `L1100-L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1100-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L1100-L1114) · [Before (L959-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L959-L961)

```diff
- 
-               function Wz(zz) {
-                 return typeof oz[zz] === gz[18] ? oz[zz] = Fz(vz[zz]) : oz[zz]
+               Pv.lens[Kv[Pv.have++]] = 7 & Nv, Nv >>>= 3, lv -= 3
+             }
+             for (; Pv.have < 19;) Pv.lens[Kv[Pv.have++]] = 0;
+             if (Pv.lencode = Pv.lendyn, Pv.lenbits = 7, Ov = {
+                 bits: Pv.lenbits
+               }, Fv = cP(0, Pv.lens, 0, 19, Pv.lencode, 0, Pv.work, Ov), Pv.lenbits = Ov.bits, Fv) {
+               vv.al = "invalid code lengths set", Pv.mode = RP;
+               break
+             }
+             Pv.have = 0, Pv.mode = 19;
+           case 19:
+             for (; Pv.have < Pv.nlen + Pv.ndist;) {
+               for (; Yv = Pv.lencode[Nv & (1 << Pv.lenbits) - 1], Cv = Yv >>> 24, iv = Yv >>> 16 & 255, cv = 65535 & Yv, !(Cv <= lv);) {
+                 if (0 === pv) break vv;
+                 pv--, Nv += hv[ev++] << lv, lv += 8
```

#### 49. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L963-L967` → after: `L1116-L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1116-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L1116-L1145) · [Before (L963-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L963-L967)

```diff
-               sz[gz[13]] = gz[2];
-               try {
-                 zz[-gz[52]]
-               } catch (Xz) {
-                 zz[-gz[52]] = ""
+               if (cv < 16) Nv >>>= Cv, lv -= Cv, Pv.lens[Pv.have++] = cv;
+               else {
+                 if (16 === cv) {
+                   for (Dv = Cv + 2; lv < Dv;) {
+                     if (0 === pv) break vv;
+                     pv--, Nv += hv[ev++] << lv, lv += 8
+                   }
+                   if (Nv >>>= Cv, lv -= Cv, 0 === Pv.have) {
+                     vv.al = "invalid bit length repeat", Pv.mode = RP;
+                     break
+                   }
+                   fv = Pv.lens[Pv.have - 1], wv = 3 + (3 & Nv), Nv >>>= 2, lv -= 2
+                 } else if (17 === cv) {
+                   for (Dv = Cv + 3; lv < Dv;) {
+                     if (0 === pv) break vv;
+                     pv--, Nv += hv[ev++] << lv, lv += 8
+ ... (14 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L973-L983` → after: `L1148-L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1148-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L1148-L1151) · [Before (L973-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L973-L983)

```diff
- 
-             function Nz(zz, tz) {
-               var sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz = tz.length;
-               for (sz = Array(), Fz = Array(Math.ceil(zz.length / gz[14])), Oz = gz[1]; Oz < Fz.length; Oz++) Fz[Oz] = zz.charCodeAt(Oz * gz[14]) << gz[11] | zz.charCodeAt(Oz * gz[14] + gz[2]);
-               for (; Fz.length > gz[1];) {
-                 for (Gz(Uz = Array(), vz = gz[1]), Oz = gz[1]; Oz < Fz.length; Oz++) Gz(vz = (vz << gz[59]) + Fz[Oz], oz = Math.floor(vz / Kz), vz -= oz * Kz), (Uz.length > gz[1] || oz > gz[1]) && (Uz[Uz.length] = oz);
-                 Gz(sz[sz.length] = vz, Fz = Uz)
-               }
-               for (Wz = "", Oz = sz.length - gz[2]; Oz >= gz[1]; Oz--) Wz += tz.charAt(sz[Oz]);
-               for (Xz = Math.ceil(zz.length * gz[11] / (Math.log(tz.length) / Math.log(gz[14]))), Oz = Wz.length; Oz < Xz; Oz++) Wz = tz[gz[1]] + Wz;
-               return Wz
+             if (Pv.mode === RP) break;
+             if (0 === Pv.lens[256]) {
+               vv.al = "invalid code -- missing end-of-block", Pv.mode = RP;
+               break
```

#### 51. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L985-L989` → after: `L1153-L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1153-L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L1153-L1157) · [Before (L985-L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L985-L989)

```diff
- 
-             function bz(...zz) {
-               var tz, sz;
-               for (Gz(zz[gz[13]] = gz[2], zz[gz[5]] = "", zz[gz[53]] = -gz[2]); ++zz[gz[53]] < zz[gz[1]].length;) Gz(tz = zz[gz[1]].charCodeAt(zz[gz[53]]), sz = zz[gz[53]] + gz[2] < zz[gz[1]].length ? zz[gz[1]].charCodeAt(zz[gz[53]] + gz[2]) : gz[1]), 55296 <= tz && tz <= 56319 & … [truncated]
-               return zz[gz[5]]
+             if (Pv.lenbits = 9, Ov = {
+                 bits: Pv.lenbits
+               }, Fv = cP(1, Pv.lens, 0, Pv.nlen, Pv.lencode, 0, Pv.work, Ov), Pv.lenbits = Ov.bits, Fv) {
+               vv.al = "invalid literal/lengths set", Pv.mode = RP;
+               break
```

#### 52. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L991-L995` → after: `L1159-L1163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1159-L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L1159-L1163) · [Before (L991-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L991-L995)

```diff
- 
-             function wz(...zz) {
-               for (Gz(zz[gz[13]] = gz[2], zz[-gz[74]] = Array(zz[gz[1]].length >> gz[14])), zz[gz[59]] = gz[1]; zz[gz[59]] < zz[-gz[74]].length; zz[gz[59]]++) zz[-gz[74]][zz[gz[59]]] = gz[1];
-               for (zz[gz[59]] = gz[1]; zz[gz[59]] < zz[gz[1]].length * gz[11]; zz[gz[59]] += gz[11]) zz[-gz[74]][zz[gz[59]] >> gz[47]] |= (zz[gz[1]].charCodeAt(zz[gz[59]] / gz[11]) & gz[12]) << gz[76] - zz[gz[59]] % gz[75];
-               return zz[-gz[74]]
+             if (Pv.distbits = 6, Pv.distcode = Pv.distdyn, Ov = {
+                 bits: Pv.distbits
+               }, Fv = cP(2, Pv.lens, Pv.nlen, Pv.ndist, Pv.distcode, 0, Pv.work, Ov), Pv.distbits = Ov.bits, Fv) {
+               vv.al = "invalid distances set", Pv.mode = RP;
+               break
```

#### 53. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L997-L1000` → after: `L1165-L1171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1165-L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L1165-L1171) · [Before (L997-L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L997-L1000)

```diff
- 
-             function Dz(...zz) {
-               for (Gz(zz[gz[13]] = gz[2], zz[gz[2]] = ""), zz[gz[53]] = gz[1]; zz[gz[53]] < zz[gz[1]].length * gz[75]; zz[gz[53]] += gz[11]) zz[gz[2]] += String.fromCharCode(zz[gz[1]][zz[gz[53]] >> gz[47]] >>> gz[76] - zz[gz[53]] % gz[75] & gz[12]);
-               return zz[gz[2]]
+             if (Pv.mode = 20, zv === jP) break vv;
+           case 20:
+             Pv.mode = 21;
+           case 21:
+             if (pv >= 6 && dv >= 258) {
+               vv.next_out = gv, vv.avail_out = dv, vv.next_in = ev, vv.avail_in = pv, Pv.hold = Nv, Pv.bits = lv, WP(vv, Wv), gv = vv.next_out, Sv = vv.output, dv = vv.avail_out, ev = vv.next_in, hv = vv.input, pv = vv.avail_in, Nv = Pv.hold, lv = Pv.bits, Pv.mode === UP && (Pv.b … [truncated]
+               break
```

#### 54. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1002-L1004` → after: `L1173-L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1173-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L1173-L1175) · [Before (L1002-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L1002-L1004)

```diff
- 
-             function Hz(...zz) {
-               return zz[gz[13]] = gz[14], zz[gz[1]] >>> zz[gz[2]] | zz[gz[1]] << gz[75] - zz[gz[2]]
+             for (Pv.back = 0; Yv = Pv.lencode[Nv & (1 << Pv.lenbits) - 1], Cv = Yv >>> 24, iv = Yv >>> 16 & 255, cv = 65535 & Yv, !(Cv <= lv);) {
+               if (0 === pv) break vv;
+               pv--, Nv += hv[ev++] << lv, lv += 8
```

#### 55. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1006-L1008` → after: `L1177-L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1177-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L1177-L1182) · [Before (L1006-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L1006-L1008)

```diff
- 
-             function rz(...zz) {
-               return zz[gz[13]] = gz[14], zz[gz[1]] >>> zz[gz[2]]
+             if (iv && 0 === (240 & iv)) {
+               for (Gv = Cv, mv = iv, jv = cv; Yv = Pv.lencode[jv + ((Nv & (1 << Gv + mv) - 1) >> Gv)], Cv = Yv >>> 24, iv = Yv >>> 16 & 255, cv = 65535 & Yv, !(Gv + Cv <= lv);) {
+                 if (0 === pv) break vv;
+                 pv--, Nv += hv[ev++] << lv, lv += 8
+               }
+               Nv >>>= Gv, lv -= Gv, Pv.back += Gv
```

#### 56. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1010-L1012` → after: `L1184-L1186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1184-L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L1184-L1186) · [Before (L1010-L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L1010-L1012)

```diff
- 
-             function Yz(...zz) {
-               return zz[gz[13]] = gz[21], zz[gz[1]] & zz[gz[2]] ^ ~zz[gz[1]] & zz[gz[14]]
+             if (Nv >>>= Cv, lv -= Cv, Pv.back += Cv, Pv.length = cv, 0 === iv) {
+               Pv.mode = 26;
+               break
```

#### 57. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1014-L1016` → after: `L1188-L1190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1188-L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L1188-L1190) · [Before (L1014-L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L1014-L1016)

```diff
- 
-             function xz(zz, tz, sz) {
-               return zz & tz ^ zz & sz ^ tz & sz
+             if (32 & iv) {
+               Pv.back = -1, Pv.mode = UP;
+               break
```

#### 58. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1018-L1020` → after: `L1192-L1194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1192-L1194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L1192-L1194) · [Before (L1018-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L1018-L1020)

```diff
- 
-             function mz(...zz) {
-               return zz[gz[13]] = gz[2], Hz(zz[gz[1]], gz[14]) ^ Hz(zz[gz[1]], gz[32]) ^ Hz(zz[gz[1]], 22)
+             if (64 & iv) {
+               vv.al = "invalid literal/length code", Pv.mode = RP;
+               break
```

#### 59. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1022-L1024` → after: `L1196-L1203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1196-L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L1196-L1203) · [Before (L1022-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L1022-L1024)

```diff
- 
-             function Jz(...zz) {
-               return zz[gz[13]] = gz[2], Hz(zz[gz[1]], gz[22]) ^ Hz(zz[gz[1]], 11) ^ Hz(zz[gz[1]], 25)
+             Pv.extra = 15 & iv, Pv.mode = 22;
+           case 22:
+             if (Pv.extra) {
+               for (Dv = Pv.extra; lv < Dv;) {
+                 if (0 === pv) break vv;
+                 pv--, Nv += hv[ev++] << lv, lv += 8
+               }
+               Pv.length += Nv & (1 << Pv.extra) - 1, Nv >>>= Pv.extra, lv -= Pv.extra, Pv.back += Pv.extra
```

#### 60. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1026-L1028` → after: `L1205-L1209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1205-L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L1205-L1209) · [Before (L1026-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L1026-L1028)

```diff
- 
-             function Iz(...zz) {
-               return zz[gz[13]] = gz[2], Hz(zz[gz[1]], gz[24]) ^ Hz(zz[gz[1]], gz[51]) ^ rz(zz[gz[1]], gz[21])
+             Pv.was = Pv.length, Pv.mode = 23;
+           case 23:
+             for (; Yv = Pv.distcode[Nv & (1 << Pv.distbits) - 1], Cv = Yv >>> 24, iv = Yv >>> 16 & 255, cv = 65535 & Yv, !(Cv <= lv);) {
+               if (0 === pv) break vv;
+               pv--, Nv += hv[ev++] << lv, lv += 8
```

#### 61. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1030-L1032` → after: `L1211-L1216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1211-L1216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L1211-L1216) · [Before (L1030-L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L1030-L1032)

```diff
- 
-             function Cz(zz) {
-               return Hz(zz, 17) ^ Hz(zz, gz[78]) ^ rz(zz, gz[77])
+             if (0 === (240 & iv)) {
+               for (Gv = Cv, mv = iv, jv = cv; Yv = Pv.distcode[jv + ((Nv & (1 << Gv + mv) - 1) >> Gv)], Cv = Yv >>> 24, iv = Yv >>> 16 & 255, cv = 65535 & Yv, !(Gv + Cv <= lv);) {
+                 if (0 === pv) break vv;
+                 pv--, Nv += hv[ev++] << lv, lv += 8
+               }
+               Nv >>>= Gv, lv -= Gv, Pv.back += Gv
```

#### 62. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1034-L1039` → after: `L1218-L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1218-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L1218-L1227) · [Before (L1034-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L1034-L1039)

```diff
- 
-             function ez(...tz) {
-               var sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz, uz, Nz, bz;
-               for (Gz(tz[gz[13]] = gz[14], tz[gz[14]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), tz[gz[53]] = new Array(gz[66])), Gz(tz[gz[1]][tz[gz[2]] >> gz[47]] |= gz[71] << gz[76] - tz[gz[2]] % gz[75], tz[gz[ … [truncated]
-                 for (Gz(sz = tz[gz[14]][gz[1]], Fz = tz[gz[14]][gz[2]], Wz = tz[gz[14]][gz[14]], Xz = tz[gz[14]][gz[21]], Oz = tz[gz[14]][gz[20]], oz = tz[gz[14]][gz[47]], vz = tz[gz[14]][gz[22]], Uz = tz[gz[14]][gz[24]]), uz = gz[1]; uz < gz[66]; uz++) Gz(tz[gz[53]][uz] = uz < g … [truncated]
-                 Gz(tz[gz[14]][gz[1]] = Zz(sz, tz[gz[14]][gz[1]]), tz[gz[14]][gz[2]] = Zz(Fz, tz[gz[14]][gz[2]]), tz[gz[14]][gz[14]] = Zz(Wz, tz[gz[14]][gz[14]]), tz[gz[14]][gz[21]] = Zz(Xz, tz[gz[14]][gz[21]]), tz[gz[14]][gz[20]] = Zz(Oz, tz[gz[14]][gz[20]]), tz[gz[14]][gz[47]] = … [truncated]
+             if (Nv >>>= Cv, lv -= Cv, Pv.back += Cv, 64 & iv) {
+               vv.al = "invalid distance code", Pv.mode = RP;
+               break
+             }
+             Pv.offset = cv, Pv.extra = 15 & iv, Pv.mode = 24;
+           case 24:
+             if (Pv.extra) {
+               for (Dv = Pv.extra; lv < Dv;) {
+                 if (0 === pv) break vv;
+                 pv--, Nv += hv[ev++] << lv, lv += 8
```

#### 63. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1041` → after: `L1229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L1229) · [Before (L1041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L1041)

```diff
-               return tz[gz[14]]
+               Pv.offset += Nv & (1 << Pv.extra) - 1, Nv >>>= Pv.extra, lv -= Pv.extra, Pv.back += Pv.extra
```

#### 64. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1043-L1045` → after: `L1231-L1233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1231-L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L1231-L1233) · [Before (L1043-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L1043-L1045)

```diff
- 
-             function Zz(...zz) {
-               return Gz(zz[gz[13]] = gz[14], zz[gz[5]] = (zz[gz[1]] & gz[79]) + (zz[gz[2]] & gz[79]), zz[gz[21]] = (zz[gz[1]] >> gz[59]) + (zz[gz[2]] >> gz[59]) + (zz[gz[5]] >> gz[59])), zz[gz[21]] << gz[59] | zz[gz[5]] & gz[79]
+             if (Pv.offset > Pv.dmax) {
+               vv.al = "invalid distance too far back", Pv.mode = RP;
+               break
```

#### 65. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1047-L1053` → after: `L1235-L1265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1235-L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L1235-L1265) · [Before (L1047-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L1047-L1053)

```diff
-             return Gz(zz[gz[13]] = gz[1], zz[gz[53]] = gz[1], zz[-gz[52]] = ""), zz[gz[39]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -168007 … [truncated]
-               hex: sz,
-               b64: Wz,
-               any: Xz,
-               hex_hmac: Fz,
-               b64_hmac: Wz,
-               any_hmac: Xz
+             Pv.mode = 25;
+           case 25:
+             if (0 === dv) break vv;
+             if (wv = Wv - dv, Pv.offset > wv) {
+               if (wv = Pv.offset - wv, wv > Pv.whave && Pv.sane) {
+                 vv.al = "invalid distance too far back", Pv.mode = RP;
+                 break
+               }
+               wv > Pv.wnext ? (wv -= Pv.wnext, av = Pv.wsize - wv) : av = Pv.wnext - wv, wv > Pv.length && (wv = Pv.length), sv = Pv.window
+             } else sv = Sv, av = gv - Pv.offset, wv = Pv.length;
+             wv > dv && (wv = dv), dv -= wv, Pv.length -= wv;
+             do {
+               Sv[gv++] = sv[av++]
+             } while (--wv);
+             0 === Pv.length && (Pv.mode = 21);
+             break;
+ ... (15 more added lines; see GitHub link above)
```

#### 66. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1055-L1102` → after: `L1267-L1290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1267-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L1267-L1290) · [Before (L1055-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L1055-L1102)

```diff
-           }(), console.log(zz[-gz[51]]))
-         }();
-         const sz = Cz;
-         return Wz()[tz(106) + tz(107)](sz, zz[gz[14]]), Wz()[tz(108)](zz[gz[1]], sz, Wz()[tz(109)](sz, zz[gz[2]]))
-       };
- 
-     function Gz() {
-       Gz = function() {}
-     }
-     Oz = (zz, tz, sz, Fz, Oz, Uz, Kz, uz) => {
-       function Nz(...zz) {
-         return zz[gz[13]] = gz[2], typeof oz[zz[gz[1]]] === gz[18] ? oz[zz[gz[1]]] = function(...zz) {
-           for (Gz(zz[gz[13]] = gz[2], zz[gz[2]] = 'AVl:<96%u=;3fjrq/~*IsR#Yi{|8"x>odW@DBENKhpebzMHgU4C$c)LF.yw71m2t5^+&Q,[a]GOv}PX!nTJ_k?SZ(0`', zz[gz[14]] = "" + (zz[gz[1]] || ""), zz[gz[4]] = zz[gz[14]].length, zz[-gz[80]] = [], zz[gz[30]] = gz[1], zz[gz[43]] = gz[1], zz[gz[7]] … [truncated]
-             if (zz[-gz[57]] = zz[gz[2]].indexOf(zz[gz[14]][zz[gz[11]]]), zz[-gz[57]] !== -gz[2])
-               if (zz[gz[7]] < gz[1]) zz[gz[7]] = zz[-gz[57]];
-               else {
- ... (32 more removed lines; see GitHub link above)
+             Pv.mode = 28;
+           case 28:
+             if (Pv.wrap && Pv.flags) {
+               for (; lv < 32;) {
+                 if (0 === pv) break vv;
+                 pv--, Nv += hv[ev++] << lv, lv += 8
+               }
+               if (Nv !== (4294967295 & Pv.total)) {
+                 vv.al = "incorrect length check", Pv.mode = RP;
+                 break
+               }
+               Nv = 0, lv = 0
+             }
+             Pv.mode = 29;
+           case 29:
+             Fv = FP;
+ ... (8 more added lines; see GitHub link above)
```

#### 67. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1104-L1120` → after: `L1292-L1324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1292-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L1292-L1324) · [Before (L1104-L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L1104-L1120)

```diff
-         Gz(Zz(xz, Yz, ez), Zz(mz, ez, Yz), Wz()[Nz(gz[100])](Jz, ez, mz));
-         const dz = Wz()[Mz(146)](ez),
-           hz = Wz()[Mz(147)](Yz, ez) / Uz / dz,
-           Qz = Math[Mz(gz[99])](hz, gz[1]) + gz[2];
-         if (Uz * Uz < Wz()[gz[95]](mz)) {
-           function kz(...zz) {
-             for (Gz(zz[gz[13]] = gz[2], zz[gz[2]] = '>%_(^<}O:kZmpuElvSQ=iYU$]4fwzbAR+saqe?nd,~t.;*JDHg[!VN&)98oWMX7r@{P3C|`621/IhT#0BxjKc"LyF5G', zz[gz[14]] = "" + (zz[gz[1]] || ""), zz[-gz[96]] = zz[gz[14]].length, zz[gz[20]] = [], zz[gz[47]] = gz[1], zz[gz[22]] = gz[1], zz[-gz … [truncated]
-               if (zz[gz[46]] = zz[gz[2]].indexOf(zz[gz[14]][zz[gz[26]]]), zz[gz[46]] !== -gz[2])
-                 if (zz[-gz[97]] < gz[1]) zz[-gz[97]] = zz[gz[46]];
-                 else {
-                   Gz(zz[-gz[97]] += zz[gz[46]] * gz[29], zz[gz[47]] |= zz[-gz[97]] << zz[gz[22]], zz[gz[22]] += (zz[-gz[97]] & gz[31]) > gz[6] ? gz[32] : gz[33]);
-                   do {
-                     Gz(zz[gz[20]].push(zz[gz[47]] & gz[12]), zz[gz[47]] >>= gz[11], zz[gz[22]] -= gz[11])
-                   } while (zz[gz[22]] > gz[24]);
-                   zz[-gz[97]] = -gz[2]
-                 } return zz[-gz[97]] > -gz[2] && zz[gz[20]].push((zz[gz[47]] | zz[-gz[97]] << zz[gz[22]]) & gz[12]), Bz(zz[gz[20]])
- ... (1 more removed lines; see GitHub link above)
+         return vv.next_out = gv, vv.avail_out = dv, vv.next_in = ev, vv.avail_in = pv, Pv.hold = Nv, Pv.bits = lv, (Pv.wsize || Wv !== vv.avail_out && Pv.mode < RP && (Pv.mode < 27 || zv !== GP)) && yP(vv, vv.output, vv.next_out, Wv - vv.avail_out), Tv -= vv.avail_in, Wv -= vv.av … [truncated]
+       },
+       inflateEnd: vv => {
+         if (!vv || !vv.state) return nP;
+         let zv = vv.state;
+         return zv.window && (zv.window = null), vv.state = null, fP
+       },
+       inflateGetHeader: (vv, zv) => {
+         if (!vv || !vv.state) return nP;
+         const Pv = vv.state;
+         return 0 === (2 & Pv.wrap) ? nP : (Pv.head = zv, zv.done = !1, fP)
+       },
+       inflateSetDictionary: (vv, zv) => {
+         const Pv = zv.length;
+         let hv, Sv, ev;
+         return vv && vv.state ? (hv = vv.state, 0 !== hv.wrap && 11 !== hv.mode ? nP : 11 === hv.mode && (Sv = 1, Sv = Mv(Sv, zv, Pv, 0), Sv !== hv.check) ? OP : (ev = yP(vv, zv, Pv, Pv), ev ? (hv.mode = 31, DP) : (hv.havedict = 1, fP))) : nP
+ ... (17 more added lines; see GitHub link above)
```

#### 68. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1122-L1149` → after: `L1326-L1337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1326-L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L1326-L1337) · [Before (L1122-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L1122-L1149)

```diff
-           function iz(...zz) {
-             return zz[gz[13]] = gz[2], typeof oz[zz[gz[1]]] === gz[18] ? oz[zz[gz[1]]] = kz(vz[zz[gz[1]]]) : oz[zz[gz[1]]]
-           }
-           Wz()[iz(149)](Yz, Yz, mz, Qz)
-         }
-         Gz(rz = (0, Xz[gz[98]])(rz, 1, Math[Mz(gz[99])](gz[2], Math[Mz(150)](gz[1], -hz, gz[2] - dz / Uz))), Wz()[Mz(151)](Yz, Yz, Jz))
-       }
-       const Cz = Iz;
-       Gz(Wz()[Nz(gz[100])](Cz, Yz, ez), Cz[gz[2]] = gz[1]);
-       let Tz = Wz()[Nz(gz[42])](Cz);
-       Pz || (Tz *= rz);
-       const cz = Kz[Nz(153) + Nz(gz[58]) + Nz(155)],
-         jz = cz ? Math[Nz(156)](cz, Tz) : Tz;
-       Wz()[Nz(157) + Nz(gz[97])](Cz, Cz);
-       const Az = uz !== gz[82] && void 0 !== uz ? uz : Kz[Nz(gz[44]) + Nz(160) + Nz(161) + Nz(162)];
-       if (jz > gz[1]) {
- ... (12 more removed lines; see GitHub link above)
+     function Ph(vv) {
+       this.options = Bz({
+         aa: 65536,
+         windowBits: 15,
+         to: ""
+       }, vv || {});
+       const zv = this.options;
+       zv.raw && zv.windowBits >= 0 && zv.windowBits < 16 && (zv.windowBits = -zv.windowBits, 0 === zv.windowBits && (zv.windowBits = -15)), !(zv.windowBits >= 0 && zv.windowBits < 16) || vv && vv.windowBits || (zv.windowBits += 32), zv.windowBits > 15 && zv.windowBits < 48 && 0 = … [truncated]
+       let Pv = BP.inflateInit2(this.strm, zv.windowBits);
+       if (Pv !== rP) throw new Error(Jv[Pv]);
+       if (this.header = new JP, BP.inflateGetHeader(this.strm, this.header), zv.dictionary && ("string" === typeof zv.dictionary ? zv.dictionary = bz(zv.dictionary) : "[object ArrayBuffer]" === EP.call(zv.dictionary) && (zv.dictionary = new Uint8Array(zv.dictionary)), zv.raw && ( … [truncated]
+     }
```

#### 69. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1151-L1152` → after: `L1339-L1357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1339-L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L1339-L1357) · [Before (L1151-L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L1151-L1152)

```diff
-         function lz(...zz) {
-           return zz[gz[13]] = gz[2], typeof oz[zz[gz[1]]] === gz[18] ? oz[zz[gz[1]]] = Lz(vz[zz[gz[1]]]) : oz[zz[gz[1]]]
+     function hh(vv, zv) {
+       const Pv = new Ph(zv);
+       if (Pv.push(vv), Pv.err) throw Pv.al || Jv[Pv.err];
+       return Pv.result
+     }
+     Ph.prototype.push = function(vv, zv) {
+       const Pv = this.strm,
+         hv = this.options.aa,
+         Sv = this.options.dictionary;
+       let ev, gv, pv;
+       if (this.ended) return !1;
+       for (gv = zv === ~~zv ? zv : !0 === zv ? bP : oP, "[object ArrayBuffer]" === EP.call(vv) ? Pv.input = new Uint8Array(vv) : Pv.input = vv, Pv.next_in = 0, Pv.avail_in = Pv.input.length;;) {
+         for (0 === Pv.avail_out && (Pv.output = new Uint8Array(hv), Pv.next_out = 0, Pv.avail_out = hv), ev = BP.inflate(Pv, gv), ev === XP && Sv && (ev = BP.inflateSetDictionary(Pv, Sv), ev === rP ? ev = BP.inflate(Pv, gv) : ev === vh && (ev = XP)); Pv.avail_in > 0 && ev === kP  … [truncated]
+         switch (ev) {
+           case uP:
+           case vh:
+ ... (3 more added lines; see GitHub link above)
```

#### 70. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1154-L1172` → after: `L1359-L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1359-L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L1359-L1368) · [Before (L1154-L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L1154-L1172)

```diff
-         let nz = sz[Nz(163) + Nz(164)] * Az;
-         if (!Pz) {
-           function qz(...zz) {
-             for (Gz(zz[gz[13]] = gz[2], zz[gz[5]] = 'e#>}4YH9l]WS;V(cwi,QrnZT7{C+NosD3kO=xtFb|ELK5Mmhg<*P%.Gv/aRqdp~"?I210fJj:XBzuA!_@y68`)[^&$U', zz[gz[14]] = "" + (zz[gz[1]] || ""), zz[gz[4]] = zz[gz[14]].length, zz[gz[103]] = [], zz[gz[104]] = gz[1], zz[gz[38]] = gz[1], zz[gz[ … [truncated]
-               if (zz[gz[41]] = zz[gz[5]].indexOf(zz[gz[14]][zz[gz[46]]]), zz[gz[41]] !== -gz[2])
-                 if (zz[gz[24]] < gz[1]) zz[gz[24]] = zz[gz[41]];
-                 else {
-                   Gz(zz[gz[24]] += zz[gz[41]] * gz[29], zz[gz[104]] |= zz[gz[24]] << zz[gz[38]], zz[gz[38]] += (zz[gz[24]] & gz[31]) > gz[6] ? gz[32] : gz[33]);
-                   do {
-                     Gz(zz[gz[103]].push(zz[gz[104]] & gz[12]), zz[gz[104]] >>= gz[11], zz[gz[38]] -= gz[11])
-                   } while (zz[gz[38]] > gz[24]);
-                   zz[gz[24]] = -gz[2]
-                 } return zz[gz[24]] > -gz[2] && zz[gz[103]].push((zz[gz[104]] | zz[gz[24]] << zz[gz[38]]) & gz[12]), Bz(zz[gz[103]])
-           }
- 
-           function Sz(...zz) {
- ... (3 more removed lines; see GitHub link above)
+         if (pv = Pv.avail_out, Pv.next_out && (0 === Pv.avail_out || ev === kP))
+           if ("string" === this.options.to) {
+             let vv = kz(Pv.output, Pv.next_out),
+               zv = Pv.next_out - vv,
+               Sv = rz(Pv.output, vv);
+             Pv.next_out = zv, Pv.avail_out = hv - zv, zv && Pv.output.set(Pv.output.subarray(vv, vv + zv), 0), this.onData(Sv)
+           } else this.onData(Pv.output.length === Pv.next_out ? Pv.output : Pv.output.subarray(0, Pv.next_out));
+         if (ev !== rP || 0 !== pv) {
+           if (ev === kP) return ev = BP.inflateEnd(this.strm), this.onEnd(ev), this.ended = !0, !0;
+           if (0 === Pv.avail_in) break
```

#### 71. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1177-L1188` → after: `L1371-L1397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1371-L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L1371-L1397) · [Before (L1177-L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L1177-L1188)

```diff
-       Oz[Nz(172) + gz[105]] = sz[Nz(173) + Nz(gz[84]) + gz[105]] * (Pz ? Dz : Hz)
-     }
-   },
-   37031: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => vz,
-       e: () => oz
-     });
-     var Fz = sz(37039),
-       Wz = sz(1824);
-     const Xz = 2,
-       Oz = 1,
+       return !0
+     }, Ph.prototype.onData = function(vv) {
+       this.chunks.push(vv)
+     }, Ph.prototype.onEnd = function(vv) {
+       vv === rP && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = Jz(this.chunks)), this.chunks = [], this.err = vv, this.al = this.strm.al
+     };
+     var Sh = {
+       Inflate: Ph,
+       inflate: hh,
+       inflateRaw: function(vv, zv) {
+         return (zv = zv || {}).raw = !0, hh(vv, zv)
+       },
+       ungzip: hh,
+       constants: Ev
+     };
+     const {
+ ... (11 more added lines; see GitHub link above)
```

#### 72. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1190-L1240` → after: `L1399-L1408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1399-L1408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/219.js#L1399-L1408) · [Before (L1190-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/219.js#L1190-L1240)

```diff
-         wo: 1,
-         fluidDrag: -1,
-         fluidDragHorizontal: -1,
-         fluidDragVertical: -1,
-         gravityMultiplier: 2,
-         width: .5,
-         height: 1.8,
-         canRun: !0,
-         jumpMultiplier: 1,
-         upwardImpulseOnUse: 0,
-         canAutoStep: !0,
-         canAutoStepByBlock: {},
-         riderOffset: [0, 0, 0],
-         pose: "standing",
-         effect: null,
-         standingFriction: 5,
- ... (35 more removed lines; see GitHub link above)
+         Deflate: eh,
+         deflate: gh,
+         deflateRaw: ph,
+         gzip: dh,
+         Inflate: Nh,
+         inflate: lh,
+         inflateRaw: Th,
+         ungzip: Wh,
+         constants: Ev
+       }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/220.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/220.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc)

#### 1. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L4-L10` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/220.js#L4-L6) · [Before (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/220.js#L4-L10)

```diff
-   38981: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       getBlockFaces: () => Nz,
-       getIngameIconUrl: () => Dz,
-       getItemIconUrl: () => wz,
-       getItemTextureUrl: () => bz,
-       getParticleTextureUrl: () => gz
+   37989: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => av
```

#### 2. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L12-L65` → after: `L8-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L8-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/220.js#L8-L607) · [Before (L12-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/220.js#L12-L65)

```diff
-     var Fz = sz(4101),
-       Wz = sz(36437),
-       Xz = sz(8937),
-       Oz = sz(2881);
-     const oz = new Set,
-       vz = new Set;
-     let Uz = null;
- 
-     function Kz(zz) {
-       oz.has(zz) || (oz.add(zz), vz.add(zz), Uz ??= setTimeout((() => {
-         console.warn(`Docs gallery: no default texture for ${vz.size} names`, [...vz]), vz.clear(), Uz = null
-       }), 1e3))
-     }
- 
-     function uz(zz, tz) {
-       try {
- ... (38 more removed lines; see GitHub link above)
+     var hv = Pv(185),
+       Sv = Pv(37154);
+     const ev = 1.2,
+       gv = {
+         poseRig: "golem",
+         physicsBodyDimensions: {
+           width: .5,
+           height: 2.5
+         },
+         hitBoxDimensions: {
+           width: 2.2,
+           height: 2.8
+         },
+         eyeHeight: 2.3,
+         rideHeight: 2.3,
+         Dl: .5,
+ ... (584 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L68-L72` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/220.js#L610) · [Before (L68-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/220.js#L68-L72)

```diff
-       try {
-         return sz(2992)(`./${zz}.png`)
-       } catch {
-         return Kz(zz), null
-       }
+       return wv[vv]
```

#### 4. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L75` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/220.js#L613) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/220.js#L75)

```diff
-   36453: (zz, tz, sz) => {
+   36568: (vv, zv, Pv) => {
```

#### 5. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L77` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/220.js#L615) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/220.js#L77)

```diff
-       e: () => Fz
+       d: () => hv
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/221.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/221.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928)

#### 1. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L4` → after: `L4-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L4-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/221.js#L4-L75) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/221.js#L4)

```diff
-   36479: (zz, tz, sz) => {
+   39111: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       getBlockFaces: () => Wv,
+       getIngameIconUrl: () => sv,
+       getItemIconUrl: () => av,
+       getItemTextureUrl: () => wv,
+       getParticleTextureUrl: () => Cv
+     });
+     var hv = Pv(4209),
+       Sv = Pv(36542),
+       ev = Pv(9099),
+       gv = Pv(2940);
+     const pv = new Set,
+       dv = new Set;
+     let Nv = null;
+ 
+ ... (56 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L6-L8` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/221.js#L77) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/221.js#L6-L8)

```diff
-       c: () => Xz,
-       f: () => Fz,
-       i: () => Wz
+       d: () => hv
```

#### 3. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L10-L207` → after: `L79-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L79-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/221.js#L79-L178) · [Before (L10-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/221.js#L10-L207)

```diff
-     const Fz = 1 / 2.2,
-       Wz = 2.2;
-     Math.sqrt(5);
-     let Xz = .001
-   },
-   36507: (zz, tz, sz) => {
-     function Fz(zz) {
-       return parseInt(zz.toString().replace(/\W/g, ""))
-     }
- 
-     function Wz(zz, tz) {
-       let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
-       return Math.abs(zz - tz) <= sz
-     }
- 
-     function Xz(zz, tz, sz) {
- ... (182 more removed lines; see GitHub link above)
+     const hv = {
+       "skyblock:forged:astral-astral-astral": {
+         name: "Heart of the Cosmos",
+         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
+         damageMultiplier: 1.8,
+         cooldownMultiplier: .8,
+         ability: "starfall"
+       },
+       "skyblock:forged:astral-moonstone-sanguine": {
+         name: "Eclipse Edge",
+         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
+         damageMultiplier: 1.7,
+         cooldownMultiplier: .81,
+         ability: "eclipseField"
+       },
+       "skyblock:forged:astral-diamond-moonstone": {
+ ... (84 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L209-L211` → after: `L180-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L180-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/221.js#L180-L235) · [Before (L209-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/221.js#L209-L211)

```diff
-       }(zz, sz, tz)));
-       return () => {
-         for (const zz of sz) zz?.()
+       },
+       "skyblock:forged:diamond-moonstone-gold": {
+         name: "Jeweller's Pride",
+         lore: "Too pretty to fight with. Fight with it anyway.",
+         damageMultiplier: 1.24,
+         cooldownMultiplier: .91,
+         ability: "gildedEdge"
+       },
+       "skyblock:forged:gold-gold-gold": {
+         name: "King's Ransom",
+         lore: "Worth more than the treasure it guards.",
+         damageMultiplier: 1.18,
+         cooldownMultiplier: .91,
+         ability: "gildedEdge",
+         traits: {
+           coins: 2.5
+ ... (40 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/222.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/222.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783)

#### 1. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L3)

```diff
- export const ids = [222, 229];
+ export const ids = [222];
```

#### 2. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L5-L25` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L4-L8) · [Before (L5-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L5-L25)

```diff
-   37745: zz => {
-     zz.exports = function(zz) {
-       return null != zz && null != zz.constructor && "function" === typeof zz.constructor.isBuffer && zz.constructor.isBuffer(zz)
-     }
-   },
-   37728: (zz, tz, sz) => {
-     var Fz = sz(37737),
-       Wz = sz(37742),
-       Xz = sz(37745);
-     sz.g.__TYPEDARRAY_POOL || (sz.g.__TYPEDARRAY_POOL = {
-       UINT8: Wz([32, 0]),
-       UINT16: Wz([32, 0]),
-       UINT32: Wz([32, 0]),
-       INT8: Wz([32, 0]),
-       INT16: Wz([32, 0]),
-       INT32: Wz([32, 0]),
- ... (5 more removed lines; see GitHub link above)
+   36599: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => ev,
+       g: () => hv,
+       h: () => Sv
```

#### 3. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L27-L133` → after: `L10-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L10-L13) · [Before (L27-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L27-L133)

```diff
-     var Oz = "undefined" !== typeof Uint8ClampedArray,
-       oz = sz.g.__TYPEDARRAY_POOL;
-     oz.UINT8C || (oz.UINT8C = Wz([32, 0])), oz.BUFFER || (oz.BUFFER = Wz([32, 0]));
-     var vz = oz.DATA,
-       Uz = oz.BUFFER;
- 
-     function Kz(zz) {
-       if (zz) {
-         var tz = zz.length || zz.byteLength,
-           sz = Fz.log2(tz);
-         vz[sz].push(zz)
-       }
-     }
- 
-     function uz(zz) {
-       zz = Fz.nextPow2(zz);
- ... (91 more removed lines; see GitHub link above)
+     const hv = 1 / 2.2,
+       Sv = 2.2;
+     Math.sqrt(5);
+     let ev = .001
```

#### 4. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L135` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L15) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L135)

```diff
-   37737: (zz, tz) => {
+   36620: (vv, zv, Pv) => {
```

#### 5. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L137-L186` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L17) · [Before (L137-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L137-L186)

```diff
-       var tz = 32;
-       return (zz &= -zz) && tz--, 65535 & zz && (tz -= 16), 16711935 & zz && (tz -= 8), 252645135 & zz && (tz -= 4), 858993459 & zz && (tz -= 2), 1431655765 & zz && (tz -= 1), tz
-     }
-     tz.INT_BITS = 32, tz.INT_MAX = 2147483647, tz.INT_MIN = -1 << 31, tz.sign = function(zz) {
-       return (zz > 0) - (zz < 0)
-     }, tz.abs = function(zz) {
-       var tz = zz >> 31;
-       return (zz ^ tz) - tz
-     }, tz.min = function(zz, tz) {
-       return tz ^ (zz ^ tz) & -(zz < tz)
-     }, tz.max = function(zz, tz) {
-       return zz ^ (zz ^ tz) & -(zz < tz)
-     }, tz.isPow2 = function(zz) {
-       return !(zz & zz - 1) && !!zz
-     }, tz.log2 = function(zz) {
-       var tz, sz;
- ... (34 more removed lines; see GitHub link above)
+       return parseInt(vv.toString().replace(/\W/g, ""))
```

#### 6. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L210-L223` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L21-L22) · [Before (L210-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L210-L223)

```diff
-       for (var sz = 0; sz < zz; ++sz)
-         if (!(tz[sz] <= tz[sz + zz])) return !0;
-       return !1
-     }
- 
-     function vz(zz, tz, sz, Fz) {
-       for (var Wz = 0, Xz = 0, Oz = 0, vz = zz.length; Oz < vz; ++Oz) {
-         var Uz = zz[Oz];
-         if (!oz(tz, Uz)) {
-           for (var Kz = 0; Kz < 2 * tz; ++Kz) sz[Wz++] = Uz[Kz];
-           Fz[Xz++] = Oz
-         }
-       }
-       return Xz
+       let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
+       return Math.abs(vv - zv) <= Pv
```

#### 7. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L226-L245` → after: `L25-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L25-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L25-L27) · [Before (L226-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L226-L245)

```diff
-     function Uz(zz, tz, sz, Fz) {
-       var oz = zz.length,
-         Uz = tz.length;
-       if (!(oz <= 0 || Uz <= 0)) {
-         var Kz = zz[0].length >>> 1;
-         if (!(Kz <= 0)) {
-           var uz, Nz = Wz.mallocDouble(2 * Kz * oz),
-             bz = Wz.mallocInt32(oz);
-           if ((oz = vz(zz, Kz, Nz, bz)) > 0) {
-             if (1 === Kz && Fz) Xz.init(oz), uz = Xz.sweepComplete(Kz, sz, 0, oz, Nz, bz, 0, oz, Nz, bz);
-             else {
-               var wz = Wz.mallocDouble(2 * Kz * Uz),
-                 Dz = Wz.mallocInt32(Uz);
-               (Uz = vz(tz, Kz, wz, Dz)) > 0 && (Xz.init(oz + Uz), uz = 1 === Kz ? Xz.sweepBipartite(Kz, sz, 0, oz, Nz, bz, 0, Uz, wz, Dz) : Oz(Kz, sz, Fz, oz, Nz, bz, Uz, wz, Dz), Wz.free(wz), Wz.free(Dz))
-             }
-             Wz.free(Nz), Wz.free(bz)
- ... (4 more removed lines; see GitHub link above)
+     function ev(vv, zv, Pv) {
+       let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
+       return vv < zv - hv || vv > Pv + hv
```

#### 8. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L249-L493` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L31) · [Before (L249-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L249-L493)

```diff
-       Fz.push([zz, tz])
-     }
-   },
-   37758: (zz, tz) => {
-     var sz = "d",
-       Fz = "ax",
-       Wz = "fp",
-       Xz = "es",
-       Oz = "rs",
-       oz = "re",
-       vz = "rb",
-       Uz = "bs",
-       Kz = "be",
-       uz = "bb",
-       Nz = [sz, Fz, "vv", Oz, oz, vz, "ri", Uz, Kz, uz, "bi"];
- 
- ... (229 more removed lines; see GitHub link above)
+       return vv === zv ? vv : Math.random() * (zv - vv) + vv
```

#### 9. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L513-L522` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L35) · [Before (L513-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L513-L522)

```diff
-       for (var Fz = 2 * (zz + 1), Wz = zz + 1; Wz <= tz; ++Wz) {
-         for (var Xz = sz[Fz++], Oz = sz[Fz++], oz = Wz, vz = Fz - 2; oz-- > zz;) {
-           var Uz = sz[vz - 2],
-             Kz = sz[vz - 1];
-           if (Uz < Xz) break;
-           if (Uz === Xz && Kz < Oz) break;
-           sz[vz] = Uz, sz[vz + 1] = Kz, vz -= 2
-         }
-         sz[vz] = Xz, sz[vz + 1] = Oz
-       }
+       return vv + (zv - vv) * Pv
```

#### 10. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L526-L529` → after: `L39-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L39-L40) · [Before (L526-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L526-L529)

```diff
-       tz *= 2;
-       var Fz = sz[zz *= 2],
-         Wz = sz[zz + 1];
-       sz[zz] = sz[tz], sz[zz + 1] = sz[tz + 1], sz[tz] = Fz, sz[tz + 1] = Wz
+       let hv = Cv(zv - vv, 360);
+       return hv > 180 && (hv -= 360), vv + hv * Wv(Pv)
```

#### 11. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L533-L540` → after: `L44-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L44-L45) · [Before (L533-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L533-L540)

```diff
-       tz *= 2, sz[zz *= 2] = sz[tz], sz[zz + 1] = sz[tz + 1]
-     }
- 
-     function Xz(zz, tz, sz, Fz) {
-       tz *= 2, sz *= 2;
-       var Wz = Fz[zz *= 2],
-         Xz = Fz[zz + 1];
-       Fz[zz] = Fz[tz], Fz[zz + 1] = Fz[tz + 1], Fz[tz] = Fz[sz], Fz[tz + 1] = Fz[sz + 1], Fz[sz] = Wz, Fz[sz + 1] = Xz
+       let hv;
+       return hv = vv != zv ? Wv((Pv - vv) / (zv - vv)) : 0, hv
```

#### 12. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L544-L1121` → after: `L49-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L49-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L49-L51) · [Before (L544-L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L544-L1121)

```diff
-       tz *= 2, Wz[zz *= 2] = Wz[tz], Wz[tz] = sz, Wz[zz + 1] = Wz[tz + 1], Wz[tz + 1] = Fz
-     }
- 
-     function oz(zz, tz, sz) {
-       tz *= 2;
-       var Fz = sz[zz *= 2],
-         Wz = sz[tz];
-       return !(Fz < Wz) && (Fz !== Wz || sz[zz + 1] > sz[tz + 1])
-     }
- 
-     function vz(zz, tz, sz, Fz) {
-       var Wz = Fz[zz *= 2];
-       return Wz < tz || Wz === tz && Fz[zz + 1] < sz
-     }
- 
-     function Uz(zz, Kz, uz) {
- ... (562 more removed lines; see GitHub link above)
+       const ev = Sv * Sv,
+         gv = Sv * ev;
+       return vv * (2 * gv - 3 * ev + 1) + Pv * (-2 * gv + 3 * ev) + zv * (gv - 2 * ev + Sv) + hv * (gv - ev)
```

#### 13. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L1124-L1129` → after: `L54-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L54-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L54-L56) · [Before (L1124-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L1124-L1129)

```diff
-     function Sz(zz) {
-       var tz = -1,
-         sz = Array(zz.size);
-       return zz.forEach((function(zz) {
-         sz[++tz] = zz
-       })), sz
+     function Tv(vv, zv, Pv, hv, Sv) {
+       const ev = Sv * Sv;
+       return 6 * (ev - Sv) * vv + (3 * ev - 4 * Sv + 1) * zv + 6 * (-ev + Sv) * Pv + (3 * ev - 2 * Sv) * hv
```

#### 14. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L1168-L1173` → after: `L60-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L60-L62) · [Before (L1168-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L1168-L1173)

```diff
-       var tz = -1,
-         sz = zz ? zz.length : 0;
-       for (this.clear(); ++tz < sz;) {
-         var Fz = zz[tz];
-         this.set(Fz[0], Fz[1])
-       }
+       let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
+       return Math.min(Pv, Math.max(zv, vv))
```

#### 15. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L1177-L1182` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L66) · [Before (L1177-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L1177-L1182)

```diff
-       var tz = -1,
-         sz = zz ? zz.length : 0;
-       for (this.clear(); ++tz < sz;) {
-         var Fz = zz[tz];
-         this.set(Fz[0], Fz[1])
-       }
+       return vv -= 2 * Math.PI * Math.floor((vv + Math.PI) / (2 * Math.PI))
```

#### 16. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L1186-L1191` → after: `L70-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L70-L71) · [Before (L1186-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L1186-L1191)

```diff
-       var tz = -1,
-         sz = zz ? zz.length : 0;
-       for (this.clear(); ++tz < sz;) {
-         var Fz = zz[tz];
-         this.set(Fz[0], Fz[1])
-       }
+       const zv = vv.toString(16);
+       return vv <= 15 ? ("0" + zv).toUpperCase() : zv.toUpperCase()
```

#### 17. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L1195-L1211` → after: `L75-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L75-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L75-L83) · [Before (L1195-L1211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L1195-L1211)

```diff
-       this.__data__ = new Zt(zz)
-     }
- 
-     function ct(zz, tz) {
-       var sz = Vt(zz) || function(zz) {
-           return function(zz) {
-             return function(zz) {
-               return !!zz && "object" == typeof zz
-             }(zz) && Rt(zz)
-           }(zz) && tt.call(zz, "callee") && (!Ut.call(zz, "callee") || st.call(zz) == Xz)
-         }(zz) ? function(zz, tz) {
-           for (var sz = -1, Fz = Array(zz); ++sz < zz;) Fz[sz] = tz(sz);
-           return Fz
-         }(zz.length, String) : [],
-         Fz = sz.length,
-         Wz = !!Fz;
- ... (1 more removed lines; see GitHub link above)
+       if (Math.log2) return Math.floor(Math.log2(vv));
+       if (vv < 0) return NaN;
+       if (0 === vv) return -1 / 0;
+       let zv = 0;
+       if (vv < 1) {
+         for (; vv < 1;) zv++, vv *= 2;
+         zv = -zv
+       } else if (vv > 1)
+         for (; vv > 1;) zv++, vv = Math.floor(vv / 2);
```

#### 18. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L1221-L1341` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L88) · [Before (L1221-L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L1221-L1341)

```diff
-       for (var sz = zz.length; sz--;)
-         if (St(zz[sz][0], tz)) return sz;
-       return -1
-     }
- 
-     function yt(zz, tz, sz, Fz, Wz, bz, Bz) {
-       var cz;
-       if (Fz && (cz = bz ? Fz(zz, Wz, bz, Bz) : Fz(zz)), void 0 !== cz) return cz;
-       if (!Et(zz)) return zz;
-       var jz = Vt(zz);
-       if (jz) {
-         if (cz = function(zz) {
-             var tz = zz.length,
-               sz = zz.constructor(tz);
-             tz && "string" == typeof zz[0] && tt.call(zz, "index") && (sz.index = zz.index, sz.input = zz.input);
-             return sz
- ... (105 more removed lines; see GitHub link above)
+       return vv - Math.floor(vv / zv) * zv
```

#### 19. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L1344-L1351` → after: `L91-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L91-L92) · [Before (L1344-L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L1344-L1351)

```diff
-     function ht(zz, tz, sz, Fz) {
-       sz || (sz = {});
-       for (var Wz = -1, Xz = tz.length; ++Wz < Xz;) {
-         var Oz = tz[Wz],
-           oz = Fz ? Fz(sz[Oz], zz[Oz], Oz, sz, zz) : void 0;
-         jt(sz, Oz, void 0 === oz ? zz[Oz] : oz)
-       }
-       return sz
+     function iv(vv, zv, Pv) {
+       return (vv - zv) / (Pv - zv)
```

#### 20. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L1354-L1359` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L95-L96) · [Before (L1354-L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L1354-L1359)

```diff
-     function Qt(zz, tz) {
-       var sz = zz.__data__;
-       return function(zz) {
-         var tz = typeof zz;
-         return "string" == tz || "number" == tz || "symbol" == tz || "boolean" == tz ? "__proto__" !== zz : null === zz
-       }(tz) ? sz["string" == typeof tz ? "string" : "hash"] : sz.map
+     function cv(vv, zv, Pv) {
+       return vv * (Pv - zv) + zv
```

#### 21. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L1363-L1366` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L100-L101) · [Before (L1363-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L1363-L1366)

```diff
-       var sz = function(zz, tz) {
-         return null == zz ? void 0 : zz[tz]
-       }(zz, tz);
-       return Mt(sz) ? sz : void 0
+       let Pv = Cv(zv - vv, 360);
+       return Pv > 180 && (Pv -= 360), Pv
```

#### 22. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L1439` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L105-L106) · [Before (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L1439)

```diff
-       return !!(tz = null == tz ? Wz : tz) && ("number" == typeof zz || jz.test(zz)) && zz > -1 && zz % 1 == 0 && zz < tz
+       const Pv = Cv(vv, 2 * zv);
+       return zv - Math.abs(Pv - zv)
```

#### 23. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L1442-L1444` → after: `L109-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L109-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L109-L111) · [Before (L1442-L1444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L1442-L1444)

```diff
-     function nt(zz) {
-       var tz = zz && zz.constructor;
-       return zz === ("function" == typeof tz && tz.prototype || pz)
+     function jv(vv, zv, Pv) {
+       let hv = Wv(Pv);
+       return hv = -2 * hv * hv * hv + 3 * hv * hv, zv * hv + vv * (1 - hv)
```

#### 24. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L1447-L1456` → after: `L114-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L114-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L114-L116) · [Before (L1447-L1456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L1447-L1456)

```diff
-     function qt(zz) {
-       if (null != zz) {
-         try {
-           return zt.call(zz)
-         } catch (tz) {}
-         try {
-           return zz + ""
-         } catch (tz) {}
-       }
-       return ""
+     function fv(vv, zv, Pv) {
+       let hv;
+       return hv = Math.abs(zv - vv) <= Pv ? zv : vv + Math.sign(zv - vv) * Pv, hv
```

#### 25. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L1459-L1484` → after: `L119-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L119-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L119-L122) · [Before (L1459-L1484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L1459-L1484)

```diff
-     function St(zz, tz) {
-       return zz === tz || zz !== zz && tz !== tz
-     }(wt && Lt(new wt(new ArrayBuffer(1))) != rz || Dt && Lt(new Dt) != Kz || gt && Lt(gt.resolve()) != bz || Ht && Lt(new Ht) != Dz || Bt && Lt(new Bt) != Bz) && (Lt = function(zz) {
-       var tz = st.call(zz),
-         sz = tz == Nz ? zz.constructor : void 0,
-         Fz = sz ? qt(sz) : void 0;
-       if (Fz) switch (Fz) {
-         case rt:
-           return rz;
-         case Yt:
-           return Kz;
-         case xt:
-           return bz;
-         case mt:
-           return Dz;
-         case Jt:
- ... (10 more removed lines; see GitHub link above)
+     function Fv(vv, zv, Pv) {
+       const hv = Gv(vv, zv);
+       let Sv;
+       return Sv = -Pv < hv && hv < Pv ? zv : fv(vv, zv = vv + hv, Pv), Sv
```

#### 26. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L1490-L1492` → after: `L125-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L125-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L125-L126) · [Before (L1490-L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L1490-L1492)

```diff
-     function ft(zz) {
-       var tz = Et(zz) ? st.call(zz) : "";
-       return tz == vz || tz == Uz
+     function Yv(vv, zv, Pv) {
+       return (vv - zv) / (Pv - zv)
```

#### 27. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L1495-L1497` → after: `L129-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L129-L130) · [Before (L1495-L1497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L1495-L1497)

```diff
-     function Et(zz) {
-       var tz = typeof zz;
-       return !!zz && ("object" == tz || "function" == tz)
+     function nv(vv, zv, Pv) {
+       return (Pv - zv) * vv + zv
```

#### 28. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L1500-L1509` → after: `L133-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L133-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L133-L135) · [Before (L1500-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L1500-L1509)

```diff
-     function zs(zz) {
-       return Rt(zz) ? ct(zz) : function(zz) {
-         if (!nt(zz)) return bt(zz);
-         var tz = [];
-         for (var sz in Object(zz)) tt.call(zz, sz) && "constructor" != sz && tz.push(sz);
-         return tz
-       }(zz)
-     }
-     zz.exports = function(zz) {
-       return yt(zz, !0, !0)
+     function Ov(vv, zv) {
+       const Pv = vv % zv;
+       return 0 === Pv ? zv : Ov(zv, Pv)
```

#### 29. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L1512-L1516` → after: `L164-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L164-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L164-L177) · [Before (L1512-L1516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L1512-L1516)

```diff
-   37133: (zz, tz, sz) => {
-     var Fz = sz(37142),
-       Wz = sz(37150),
-       Xz = "undefined" !== typeof Float64Array;
- 
+   36591: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       Matrix: () => hv.c,
+       Quaternion: () => hv.d,
+       RegisterMathVector: () => hv.e,
+       TmpVectors: () => hv.i,
+       Vector2: () => hv.j,
+       fa: () => hv.l,
+       Vector4: () => hv.m
+     });
+     var hv = Pv(36594);
+     (0, hv.e)()
+   },
+   36602: (vv, zv, Pv) => {
```

#### 30. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L1518-L1527` → after: `L179-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L179-L180) · [Before (L1518-L1527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L1518-L1527)

```diff
-       return zz[0] - tz[0]
-     }
- 
-     function oz() {
-       var zz, tz = this.stride,
-         sz = new Array(tz.length);
-       for (zz = 0; zz < sz.length; ++zz) sz[zz] = [Math.abs(tz[zz]), zz];
-       sz.sort(Oz);
-       var Fz = new Array(sz.length);
-       for (zz = 0; zz < Fz.length; ++zz) Fz[zz] = sz[zz][1];
+       const Pv = [];
+       for (let hv = 0; hv < vv; ++hv) Pv.push(zv());
```

#### 31. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L1532-L1691` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L185) · [Before (L1532-L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L1532-L1691)

```diff
-       var sz = ["View", tz, "d", zz].join("");
-       tz < 0 && (sz = "View_Nil" + zz);
-       var Wz = "generic" === zz;
-       if (-1 === tz) {
-         var Xz = "function " + sz + "(a){this.data=a;};var proto=" + sz + ".prototype;proto.dtype='" + zz + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return  … [truncated]
-         return new Function(Xz)()
-       }
-       if (0 === tz) {
-         Xz = "function " + sz + "(a,d) {this.data = a;this.offset = d};var proto=" + sz + ".prototype;proto.dtype='" + zz + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto … [truncated]
-         return new Function("TrivialArray", Xz)(Uz[zz][0])
-       }
-       Xz = ["'use strict'"];
-       var Oz = Fz(tz),
-         vz = Oz.map((function(zz) {
-           return "i" + zz
-         })),
- ... (144 more removed lines; see GitHub link above)
+       return hv(vv, zv)
```

#### 32. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L1772-L1773` → after: `L188-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L188-L190) · [Before (L1772-L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L1772-L1773)

```diff
-       Color3: () => Fz.c,
-       c: () => Fz.d
+       e: () => hv,
+       h: () => Sv,
+       i: () => gv
```

#### 33. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L1775-L1819` → after: `L192-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L192-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L192-L211) · [Before (L1775-L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L1775-L1819)

```diff
-     var Fz = sz(36654);
-     (0, Fz.e)()
-   },
-   37191: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Wz
-     });
-     var Fz = sz(37199);
-     class Wz {
-       static GetPlanes(zz) {
-         const tz = [];
-         for (let sz = 0; sz < 6; sz++) tz.push(new Fz.c(0, 0, 0, 0));
-         return Wz.GetPlanesToRef(zz, tz), tz
-       }
-       static GetNearPlaneToRef(zz, tz) {
-         const sz = zz.m;
- ... (29 more removed lines; see GitHub link above)
+     const ev = ["push", "splice", "pop", "shift", "unshift"];
+ 
+     function gv(vv, zv) {
+       const Pv = ev.map((Pv => function(vv, zv, Pv) {
+         const hv = vv[zv];
+         if ("function" !== typeof hv) return null;
+         const Sv = function() {
+           const hv = vv.length,
+             ev = Sv.previous.apply(vv, arguments);
+           return Pv(zv, hv), ev
+         };
+         return hv.next = Sv, Sv.previous = hv, vv[zv] = Sv, () => {
+           const Pv = Sv.previous;
+           if (!Pv) return;
+           const hv = Sv.next;
+           hv ? (Pv.next = hv, hv.previous = Pv) : (Pv.next = void 0, vv[zv] = Pv), Sv.next = void 0, Sv.previous = void 0
+ ... (4 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L1823` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L215) · [Before (L1823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L1823)

```diff
-   37199: (zz, tz, sz) => {
+   36631: (vv, zv, Pv) => {
```

#### 35. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L1827-L1937` → after: `L220-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L220-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L220-L223) · [Before (L1827-L1937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L1827-L1937)

```diff
-     var Fz = sz(36475);
-     class Wz {
-       constructor(zz, tz, sz, Wz) {
-         this.normal = new Fz.p(zz, tz, sz), this.d = Wz
-       }
-       hsz() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new Wz(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
-       getClassName() {
-         return "Plane"
-       }
-       getHashCode() {
-         let zz = this.normal.getHashCode();
- ... (95 more removed lines; see GitHub link above)
+     const hv = {};
+ 
+     function Sv(vv, zv) {
+       hv[vv] = zv
```

#### 36. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L1939-L1945` → after: `L225-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L225-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/222.js#L225-L227) · [Before (L1939-L1945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/222.js#L1939-L1945)

```diff
-   },
-   37333: (zz, tz, sz) => {
-     function Fz() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (zz => {
-         const tz = 16 * Math.random() | 0;
-         return ("x" === zz ? tz : 3 & tz | 8).toString(16)
-       }))
+ 
+     function ev(vv) {
+       return hv[vv]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/223.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/223.js` (46 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e)

#### 1. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L2)

```diff
- export const ids = [223, 229, 232];
+ export const ids = [223, 230];
```

#### 2. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L4-L7` → after: `L5-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L5-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L5-L25) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L4-L7)

```diff
-   39402: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Oz,
-       g: () => oz
+   37834: vv => {
+     vv.exports = function(vv) {
+       return null != vv && null != vv.constructor && "function" === typeof vv.constructor.isBuffer && vv.constructor.isBuffer(vv)
+     }
+   },
+   37816: (vv, zv, Pv) => {
+     var hv = Pv(37825),
+       Sv = Pv(37832),
+       ev = Pv(37834);
+     Pv.g.__TYPEDARRAY_POOL || (Pv.g.__TYPEDARRAY_POOL = {
+       UINT8: Sv([32, 0]),
+       UINT16: Sv([32, 0]),
+       UINT32: Sv([32, 0]),
+       INT8: Sv([32, 0]),
+       INT16: Sv([32, 0]),
+       INT32: Sv([32, 0]),
+ ... (5 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L9-L19` → after: `L27-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L27-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L27-L37) · [Before (L9-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L9-L19)

```diff
-     var Fz = sz(38097),
-       Wz = sz(39181),
-       Xz = sz(39370),
-       Oz = {};
-     class oz {
-       constructor(zz) {
-         this.attachedToElement = !1, this.attached = {}, this.camera = zz, this.checkInputs = () => {}
-       }
-       add(zz) {
-         const tz = zz.getSimpleName();
-         this.attached[tz] ? Fz.e.Warn("camera input of type " + tz + " already exists on camera") : (this.attached[tz] = zz, zz.camera = this.camera, zz.checkInputs && (this.checkInputs = this._addCheckInputs(zz.checkInputs.bind(zz))), this.attachedToElement && zz.attachControl(t … [truncated]
+     var gv = "undefined" !== typeof Uint8ClampedArray,
+       pv = Pv.g.__TYPEDARRAY_POOL;
+     pv.UINT8C || (pv.UINT8C = Sv([32, 0])), pv.BUFFER || (pv.BUFFER = Sv([32, 0]));
+     var dv = pv.DATA,
+       Nv = pv.BUFFER;
+ 
+     function lv(vv) {
+       if (vv) {
+         var zv = vv.length || vv.byteLength,
+           Pv = hv.log2(zv);
+         dv[Pv].push(vv)
```

#### 4. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L21-L24` → after: `L39-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L39-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L39-L220) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L21-L24)

```diff
-       remove(zz) {
-         for (const tz in this.attached) {
-           const sz = this.attached[tz];
-           if (sz === zz) return sz.detachControl(), sz.camera = null, delete this.attached[tz], void this.rebuildInputCheck()
+     }
+ 
+     function Tv(vv) {
+       vv = hv.nextPow2(vv);
+       var zv = hv.log2(vv),
+         Pv = dv[zv];
+       return Pv.length > 0 ? Pv.pop() : new ArrayBuffer(vv)
+     }
+ 
+     function Wv(vv) {
+       return new Uint8Array(Tv(vv), 0, vv)
+     }
+ 
+     function wv(vv) {
+       return new Uint16Array(Tv(2 * vv), 0, vv)
+     }
+ ... (166 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L27-L30` → after: `L223-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L223-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L223-L243) · [Before (L27-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L27-L30)

```diff
-       removeByType(zz) {
-         for (const tz in this.attached) {
-           const sz = this.attached[tz];
-           sz.getClassName() === zz && (sz.detachControl(), sz.camera = null, delete this.attached[tz], this.rebuildInputCheck())
+       return ev
+     }
+ 
+     function Nv(vv, zv, Pv, hv) {
+       var pv = vv.length,
+         Nv = zv.length;
+       if (!(pv <= 0 || Nv <= 0)) {
+         var lv = vv[0].length >>> 1;
+         if (!(lv <= 0)) {
+           var Tv, Wv = Sv.mallocDouble(2 * lv * pv),
+             wv = Sv.mallocInt32(pv);
+           if ((pv = dv(vv, lv, Wv, wv)) > 0) {
+             if (1 === lv && hv) ev.init(pv), Tv = ev.sweepComplete(lv, Pv, 0, pv, Wv, wv, 0, pv, Wv, wv);
+             else {
+               var av = Sv.mallocDouble(2 * lv * Nv),
+                 sv = Sv.mallocInt32(Nv);
+ ... (5 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L33-L37` → after: `L246-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L246-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L246-L283) · [Before (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L33-L37)

```diff
-       _addCheckInputs(zz) {
-         const tz = this.checkInputs;
-         return () => {
-           tz(), zz()
-         }
+     }
+ 
+     function lv(vv, zv) {
+       hv.push([vv, zv])
+     }
+   },
+   37857: (vv, zv) => {
+     var Pv = "d",
+       hv = "ax",
+       Sv = "fp",
+       ev = "es",
+       gv = "rs",
+       pv = "re",
+       dv = "rb",
+       Nv = "bs",
+       lv = "be",
+ ... (22 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L39-L40` → after: `L285-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L285-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L285-L364) · [Before (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L39-L40)

```diff
-       attachInput(zz) {
-         this.attachedToElement && zz.attachControl(this.noPreventDefault)
+       pv.push("if(re-rs>be-bs){"), vv ? (dv(!0, !1), pv.push("}else{"), dv(!1, !1)) : (pv.push("if(fp){"), dv(!0, !0), pv.push("}else{"), dv(!0, !1), pv.push("}}else{if(fp){"), dv(!1, !0), pv.push("}else{"), dv(!1, !1), pv.push("}")), pv.push("}}return " + zv);
+       var Nv = hv.join("") + pv.join("");
+       return new Function(Nv)()
+     }
+     zv.partial = wv(!1), zv.full = wv(!0)
+   },
+   37851: (vv, zv, Pv) => {
+     vv.exports = function(vv, zv, Pv, ev, lv, Dv, Kv, Vv, Uv) {
+       ! function(vv, zv) {
+         var Pv = 8 * Sv.log2(zv + 1) * (vv + 1) | 0,
+           ev = Sv.nextPow2(mv * Pv);
+         fv.length < ev && (hv.free(fv), fv = hv.mallocInt32(ev));
+         var gv = Sv.nextPow2(jv * Pv);
+         Fv.length < gv && (hv.free(Fv), Fv = hv.mallocDouble(gv))
+       }(vv, ev + Kv);
+       var Rv, xv = 0,
+ ... (64 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L42-L46` → after: `L366-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L366-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L366-L410) · [Before (L42-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L42-L46)

```diff
-       attachElement() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         if (!this.attachedToElement) {
-           zz = !Xz.b.ForceAttachControlToAlwaysPreventDefault && zz, this.attachedToElement = !0, this.noPreventDefault = zz;
-           for (const tz in this.attached) this.attached[tz].attachControl(zz)
+     };
+     var hv = Pv(37816),
+       Sv = Pv(37825),
+       ev = Pv(37857),
+       gv = ev.partial,
+       pv = ev.full,
+       dv = Pv(37840),
+       Nv = Pv(37863),
+       lv = Pv(37865),
+       Tv = 128,
+       Wv = 1 << 22,
+       wv = 1 << 22,
+       av = lv("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
+       sv = lv("lo===p0", ["p0"]),
+       Cv = lv("lo<p0", ["p0"]),
+       iv = lv("hi<=p0", ["p0"]),
+ ... (29 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L49-L52` → after: `L413-L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L413-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L413-L434) · [Before (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L49-L52)

```diff
-       detachElement() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         for (const tz in this.attached) this.attached[tz].detachControl(), zz && (this.attached[tz].camera = null);
-         this.attachedToElement = !1
+     }
+ 
+     function Ov(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv) {
+       var lv = 2 * vv,
+         Tv = pv * lv,
+         Wv = dv[Tv + zv];
+       vv: for (var wv = hv, av = hv * lv; wv < Sv; ++wv, av += lv) {
+         var sv = gv[wv];
+         if (sv !== Nv) {
+           var Cv = ev[av + zv],
+             iv = ev[av + zv + vv];
+           if (!(Wv < Cv || iv < Wv)) {
+             for (var cv = zv + 1; cv < vv; ++cv) {
+               Cv = ev[av + cv], iv = ev[av + cv + vv];
+               var Gv = dv[Tv + cv],
+                 mv = dv[Tv + cv + vv];
+ ... (6 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L54-L58` → after: `L436-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L436-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L436-L476) · [Before (L54-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L54-L58)

```diff
-       rebuildInputCheck() {
-         this.checkInputs = () => {};
-         for (const zz in this.attached) {
-           const tz = this.attached[zz];
-           tz.checkInputs && (this.checkInputs = this._addCheckInputs(tz.checkInputs.bind(tz)))
+     }
+   },
+   37863: (vv, zv, Pv) => {
+     vv.exports = function(vv, zv, Pv, gv, pv, dv) {
+       if (gv <= Pv + 1) return Pv;
+       var Nv = Pv,
+         lv = gv,
+         Tv = gv + Pv >>> 1,
+         Wv = 2 * vv,
+         wv = Tv,
+         av = pv[Wv * Tv + zv];
+       for (; Nv < lv;) {
+         if (lv - Nv < Sv) {
+           ev(vv, zv, Nv, lv, pv, dv), av = pv[Wv * Tv + zv];
+           break
+         }
+ ... (25 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L61-L62` → after: `L479-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L479-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L479-L521) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L61-L62)

```diff
-       clear() {
-         this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
+       return hv(vv, zv, Pv, Tv, pv, dv, pv[Wv * Tv + zv])
+     };
+     var hv = Pv(37865)("lo<p0", ["p0"]),
+       Sv = 8;
+ 
+     function ev(vv, zv, Pv, hv, Sv, ev) {
+       for (var gv = 2 * vv, pv = gv * (Pv + 1) + zv, dv = Pv + 1; dv < hv; ++dv, pv += gv)
+         for (var Nv = Sv[pv], lv = dv, Tv = gv * (dv - 1); lv > Pv && Sv[Tv + zv] > Nv; --lv, Tv -= gv) {
+           for (var Wv = Tv, wv = Tv + gv, av = 0; av < gv; ++av, ++Wv, ++wv) {
+             var sv = Sv[Wv];
+             Sv[Wv] = Sv[wv], Sv[wv] = sv
+           }
+           var Cv = ev[lv];
+           ev[lv] = ev[lv - 1], ev[lv - 1] = Cv
+         }
+     }
+ ... (27 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L64-L69` → after: `L523-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L523-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L523-L590) · [Before (L64-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L64-L69)

```diff
-       serialize(zz) {
-         const tz = {};
-         for (const sz in this.attached) {
-           const zz = this.attached[sz],
-             Fz = Wz.e.Serialize(zz);
-           tz[zz.getClassName()] = Fz
+     }
+ 
+     function hv(vv, zv, Pv) {
+       zv *= 2;
+       var hv = Pv[vv *= 2],
+         Sv = Pv[vv + 1];
+       Pv[vv] = Pv[zv], Pv[vv + 1] = Pv[zv + 1], Pv[zv] = hv, Pv[zv + 1] = Sv
+     }
+ 
+     function Sv(vv, zv, Pv) {
+       zv *= 2, Pv[vv *= 2] = Pv[zv], Pv[vv + 1] = Pv[zv + 1]
+     }
+ 
+     function ev(vv, zv, Pv, hv) {
+       zv *= 2, Pv *= 2;
+       var Sv = hv[vv *= 2],
+ ... (52 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L71-L82` → after: `L592-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L592-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L592-L637) · [Before (L71-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L71-L82)

```diff
-         zz.inputsmgr = tz
-       }
-       parse(zz) {
-         const tz = zz.inputsmgr;
-         if (tz) {
-           this.clear();
-           for (const zz in tz) {
-             const sz = Oz[zz];
-             if (sz) {
-               const Fz = tz[zz],
-                 Xz = Wz.e.Parse((() => new sz), Fz, null);
-               this.add(Xz)
+       gv(vv, Fv - 1, Ov, Dv, Tv), gv(lv, Yv + 1, Kv, Vv, Tv), Fv - 2 - vv <= zv ? Pv(vv, Fv - 2, Tv) : Nv(vv, Fv - 2, Tv), lv - (Yv + 2) <= zv ? Pv(Yv + 2, lv, Tv) : Nv(Yv + 2, lv, Tv), Yv - Fv <= zv ? Pv(Fv, Yv, Tv) : Nv(Fv, Yv, Tv)
+     }
+   },
+   37840: (vv, zv, Pv) => {
+     vv.exports = {
+       init: function(vv) {
+         var zv = Sv.nextPow2(vv);
+         dv.length < zv && (hv.free(dv), dv = hv.mallocInt32(zv));
+         Nv.length < zv && (hv.free(Nv), Nv = hv.mallocInt32(zv));
+         lv.length < zv && (hv.free(lv), lv = hv.mallocInt32(zv));
+         Tv.length < zv && (hv.free(Tv), Tv = hv.mallocInt32(zv));
+         Wv.length < zv && (hv.free(Wv), Wv = hv.mallocInt32(zv));
+         wv.length < zv && (hv.free(wv), wv = hv.mallocInt32(zv));
+         var Pv = 8 * zv;
+         av.length < Pv && (hv.free(av), av = hv.mallocDouble(Pv))
+       },
+ ... (30 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L85-L90` → after: `L641-L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L641-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L641-L664) · [Before (L85-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L85-L90)

```diff
-         } else
-           for (const sz in this.attached) {
-             const tz = Oz[this.attached[sz].getClassName()];
-             if (tz) {
-               const Fz = Wz.e.Parse((() => new tz), zz, null);
-               this.remove(this.attached[sz]), this.add(Fz)
+         }
+       },
+       sweepComplete: function(vv, zv, Pv, hv, Sv, gv, pv, iv, cv, Gv) {
+         for (var mv = 0, jv = 2 * vv, fv = vv - 1, Fv = jv - 1, Yv = Pv; Yv < hv; ++Yv) {
+           var nv = gv[Yv] + 1 << 1,
+             Ov = jv * Yv;
+           av[mv++] = Sv[Ov + fv], av[mv++] = -nv, av[mv++] = Sv[Ov + Fv], av[mv++] = nv
+         }
+         for (Yv = pv; Yv < iv; ++Yv) {
+           nv = Gv[Yv] + 1 << 1;
+           var Dv = jv * Yv;
+           av[mv++] = cv[Dv + fv], av[mv++] = 1 | -nv, av[mv++] = cv[Dv + Fv], av[mv++] = 1 | nv
+         }
+         var Kv = mv >>> 1;
+         ev(av, Kv);
+         var Vv = 0,
+ ... (8 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L96-L101` → after: `L796-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L796-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L796-L820) · [Before (L96-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L96-L101)

```diff
-   39408: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => Fz.b
-     });
-     var Fz = sz(39413);
-     (0, Fz.e)()
+   37832: vv => {
+     function zv(vv, Pv, hv) {
+       var Sv = 0 | vv[hv];
+       if (Sv <= 0) return [];
+       var ev, gv = new Array(Sv);
+       if (hv === vv.length - 1)
+         for (ev = 0; ev < Sv; ++ev) gv[ev] = Pv;
+       else
+         for (ev = 0; ev < Sv; ++ev) gv[ev] = zv(vv, Pv, hv + 1);
+       return gv
+     }
+     vv.exports = function(vv, Pv) {
+       switch ("undefined" === typeof Pv && (Pv = 0), typeof vv) {
+         case "number":
+           if (vv > 0) return function(vv, zv) {
+             var Pv, hv;
+ ... (9 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L103-L147` → after: `L822-L864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L822-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L822-L864) · [Before (L103-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L103-L147)

```diff
-   39413: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => Kz,
-       e: () => Nz
-     });
-     var Fz = sz(39167),
-       Wz = sz(39170),
-       Xz = sz(36475),
-       Oz = sz(36654),
-       oz = sz(39421),
-       vz = sz(39374),
-       Uz = sz(36518);
-     let Kz = (() => {
-         var zz;
-         let tz, sz, vz = oz.d,
-           Uz = [],
- ... (29 more removed lines; see GitHub link above)
+   37775: (vv, zv, Pv) => {
+     vv.exports = function() {
+       var vv = this;
+       this.components = {}, this.comps = this.components;
+       var zv = this.components,
+         Pv = 1,
+         Sv = {},
+         ev = [],
+         gv = [],
+         pv = {
+           timeout: !1,
+           removals: [],
+           multiComps: []
+         };
+ 
+       function dv(vv, Pv) {
+ ... (27 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L149-L150` → after: `L866-L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L866-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L866-L869) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L149-L150)

```diff
-           getTypeID() {
-             return oz.d.LIGHTTYPEID_HEMISPHERICLIGHT
+           vv.length = 0
+         }(pv.multiComps), pv.removals.length && function(vv) {
+           for (var zv = 0; zv < vv.length; zv++) {
+             vv[zv].flush()
```

#### 18. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L152-L153` → after: `L871-L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L871-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L871-L986) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L152-L153)

```diff
-           prepareLightSpecificDefines(zz, tz) {
-             zz["HEMILIGHT" + tz] = !0
+           vv.length = 0
+         }(pv.removals)
+       }
+       this.Ns = Sv, this._systems = ev, this._renderSystems = gv, this.JA = function(zv) {
+         var hv = Pv++;
+         return Array.isArray(zv) && zv.forEach((zv => vv.IK(hv, zv))), hv
+       }, this.deleteEntity = function(zv) {
+         return Object.keys(Sv).forEach((vv => {
+           Sv[vv].hash[zv] && dv(zv, vv)
+         })), vv
+       }, this.Ivv = function(vv) {
+         if (!vv) throw new Error("Missing component definition");
+         var Pv = vv.name;
+         if (!Pv) throw new Error("Component definition must have a name property.");
+         if ("string" !== typeof Pv) throw new Error("Component name must be a string.");
+         if ("" === Pv) throw new Error("Component name must be a non-empty string.");
+ ... (100 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L155-L191` → after: `L988-L1519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L988-L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L988-L1519) · [Before (L155-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L155-L191)

```diff
-         }, (() => {
-           const Xz = "function" === typeof Symbol && Symbol.metadata ? Object.create(vz[Symbol.metadata] ?? null) : void 0;
-           tz = [(0, Wz.p)()], sz = [(0, Wz.H)()], (0, Fz.h)(null, null, tz, {
-             kind: "field",
-             name: "groundColor",
-             static: !1,
-             private: !1,
-             access: {
-               has: zz => "groundColor" in zz,
-               get: zz => zz.groundColor,
-               set: (zz, tz) => {
-                 zz.groundColor = tz
-               }
-             },
-             metadata: Xz
-           }, Uz, Kz), (0, Fz.h)(null, null, sz, {
- ... (21 more removed lines; see GitHub link above)
+         }(Pv, gv, dv, ev), vv
+       }
+     };
+     var hv = Pv(37784)
+   },
+   37784: vv => {
+     function zv(vv, zv) {
+       var Pv = vv._map[zv];
+       if (delete vv.hash[zv], delete vv._map[zv], Pv === vv.list.length - 1) vv.list.pop(), vv._idList.pop();
+       else {
+         var hv = vv.list.pop();
+         vv.list[Pv] = hv;
+         var Sv = vv._idList.pop();
+         vv._idList[Pv] = Sv, vv._map[Sv] = Pv
+       }
+     }
+ ... (516 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L194` → after: `L1522-L1656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1522-L1656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L1522-L1656) · [Before (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L194)

```diff
-       uz || (uz = !0, vz.e.AddNodeConstructor("Light_Type_3", ((zz, tz) => () => new Kz(zz, Xz.p.Zero(), tz))), (0, Uz.g)("BABYLON.HemisphericLight", Kz))
+       var vv, zv = this.stride,
+         Pv = new Array(zv.length);
+       for (vv = 0; vv < Pv.length; ++vv) Pv[vv] = [Math.abs(zv[vv]), vv];
+       Pv.sort(gv);
+       var hv = new Array(Pv.length);
+       for (vv = 0; vv < hv.length; ++vv) hv[vv] = Pv[vv][1];
+       return hv
+     }
+ 
+     function dv(vv, zv) {
+       var Pv = ["View", zv, "d", vv].join("");
+       zv < 0 && (Pv = "View_Nil" + vv);
+       var Sv = "generic" === vv;
+       if (-1 === zv) {
+         var ev = "function " + Pv + "(a){this.data=a;};var proto=" + Pv + ".prototype;proto.dtype='" + vv + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return  … [truncated]
+         return new Function(ev)()
+ ... (119 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L197` → after: `L1659-L1770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1659-L1770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L1659-L1770) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L197)

```diff
-   36652: (zz, tz, sz) => {
+   37969: vv => {
+     function zv(vv, zv, Pv) {
+       for (var hv = vv.length, Sv = -1 / 0, ev = 1 / 0, gv = 0; gv < hv; gv++) {
+         var pv = (Pv[0][gv] - vv[gv]) / zv[gv],
+           dv = (Pv[1][gv] - vv[gv]) / zv[gv];
+         if (pv > dv) {
+           var Nv = pv;
+           pv = dv, dv = Nv
+         }
+         if (dv < Sv || pv > ev) return 1 / 0;
+         pv > Sv && (Sv = pv), dv < ev && (ev = dv)
+       }
+       return Sv > ev ? 1 / 0 : Sv
+     }
+     vv.exports = function(vv, Pv, hv, Sv) {
+       var ev = zv(Pv, hv, Sv);
+ ... (96 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L199-L200` → after: `L1772-L1773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1772-L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L1772-L1773) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L199-L200)

```diff
-       Color3: () => Fz.c,
-       c: () => Fz.d
+       Color3: () => hv.b,
+       d: () => hv.e
```

#### 23. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L202-L203` → after: `L1775-L1776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1775-L1776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L1775-L1776) · [Before (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L202-L203)

```diff
-     var Fz = sz(36654);
-     (0, Fz.e)()
+     var hv = Pv(36751);
+     (0, hv.h)()
```

#### 24. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L205` → after: `L1778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L1778) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L205)

```diff
-   37191: (zz, tz, sz) => {
+   37290: (vv, zv, Pv) => {
```

#### 25. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L207` → after: `L1780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L1780) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L207)

```diff
-       e: () => Wz
+       c: () => Sv
```

#### 26. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L209` → after: `L1782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L1782) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L209)

```diff
-     var Fz = sz(37199);
+     var hv = Pv(37293);
```

#### 27. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L213` → after: `L1786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L1786) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L213)

```diff
-         for (let sz = 0; sz < 6; sz++) tz.push(new Fz.c(0, 0, 0, 0));
+         for (let Pv = 0; Pv < 6; Pv++) zv.push(new hv.b(0, 0, 0, 0));
```

#### 28. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L250` → after: `L1823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L1823) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L250)

```diff
-   37199: (zz, tz, sz) => {
+   37293: (vv, zv, Pv) => {
```

#### 29. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L252` → after: `L1825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L1825) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L252)

```diff
-       c: () => Wz
+       b: () => Sv
```

#### 30. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L254` → after: `L1827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L1827) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L254)

```diff
-     var Fz = sz(36475);
+     var hv = Pv(36594);
```

#### 31. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L257` → after: `L1830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L1830) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L257)

```diff
-         this.normal = new Fz.p(zz, tz, sz), this.d = Wz
+         this.normal = new hv.l(vv, zv, Pv), this.d = Sv
```

#### 32. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L259` → after: `L1832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L1832) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L259)

```diff
-       hsz() {
+       pPv() {
```

#### 33. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L306` → after: `L1879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L1879) · [Before (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L306)

```diff
-         return bz = 0 !== Nz ? 1 / Nz : 0, this.normal.x = Uz * bz, this.normal.y = Kz * bz, this.normal.z = uz * bz, this.d = -(this.normal.x * zz.x + this.normal.y * zz.y + this.normal.z * zz.z), this
+         return wv = 0 !== Wv ? 1 / Wv : 0, this.normal.x = Nv * wv, this.normal.y = lv * wv, this.normal.z = Tv * wv, this.d = -(this.normal.x * vv.x + this.normal.y * vv.y + this.normal.z * vv.z), this
```

#### 34. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L309` → after: `L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L1882) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L309)

```diff
-         return Fz.p.Dot(this.normal, zz) <= tz
+         return hv.l.Dot(this.normal, vv) <= zv
```

#### 35. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L312` → after: `L1885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L1885) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L312)

```diff
-         return Fz.p.Dot(zz, this.normal) + this.d
+         return hv.l.Dot(vv, this.normal) + this.d
```

#### 36. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L326` → after: `L1899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L1899) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L326)

```diff
-         return sz.normal.vsz(tz), sz.normal.normalize(), sz.d = -zz.dot(sz.normal), sz
+         return Pv.normal.Vzv(zv), Pv.normal.normalize(), Pv.d = -vv.dot(Pv.normal), Pv
```

#### 37. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L330` → after: `L1903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L1903) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L330)

```diff
-         return Fz.p.Dot(sz, tz) + Wz
+         return hv.l.Dot(Pv, zv) + Sv
```

#### 38. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L333` → after: `L1906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L1906) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L333)

```diff
-     Wz._TmpMatrix = Fz.e.Identity()
+     Sv._TmpMatrix = hv.c.Identity()
```

#### 39. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L335` → after: `L1908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L1908) · [Before (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L335)

```diff
-   36473: (zz, tz, sz) => {
+   36591: (vv, zv, Pv) => {
```

#### 40. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L337-L343` → after: `L1910-L1916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1910-L1916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L1910-L1916) · [Before (L337-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L337-L343)

```diff
-       Matrix: () => Fz.e,
-       Quaternion: () => Fz.h,
-       RegisterMathVector: () => Fz.k,
-       TmpVectors: () => Fz.m,
-       Vector2: () => Fz.n,
-       XD: () => Fz.p,
-       Vector4: () => Fz.q
+       Matrix: () => hv.c,
+       Quaternion: () => hv.d,
+       RegisterMathVector: () => hv.e,
+       TmpVectors: () => hv.i,
+       Vector2: () => hv.j,
+       fa: () => hv.l,
+       Vector4: () => hv.m
```

#### 41. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L345-L346` → after: `L1918-L1919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1918-L1919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L1918-L1919) · [Before (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L345-L346)

```diff
-     var Fz = sz(36475);
-     (0, Fz.k)()
+     var hv = Pv(36594);
+     (0, hv.e)()
```

#### 42. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L348` → after: `L1921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L1921) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L348)

```diff
-   37536: (zz, tz, sz) => {
+   37633: (vv, zv, Pv) => {
```

#### 43. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L350` → after: `L1923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L1923) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L350)

```diff
-       b: () => Fz
+       d: () => hv
```

#### 44. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L367-L751` → after: `L1940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L1940) · [Before (L367-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L367-L751)

```diff
-   39552: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Uz
-     });
-     var Fz = sz(36475),
-       Wz = sz(36654),
-       Xz = sz(39555),
-       Oz = sz(39562),
-       oz = sz(39576);
- 
-     function vz(zz) {
-       let tz = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
-       const sz = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
-         Xz = [],
-         vz = zz.width || zz.size || 1,
-         Uz = zz.height || zz.size || 1,
- ... (369 more removed lines; see GitHub link above)
+   37431: (vv, zv, Pv) => {
```

#### 45. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L755` → after: `L1944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L1944) · [Before (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L755)

```diff
-         return ("x" === zz ? tz : 3 & tz | 8).toString(16)
+         return ("x" === vv ? zv : 3 & zv | 8).toString(16)
```

#### 46. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L759` → after: `L1948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/223.js#L1948) · [Before (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/223.js#L759)

```diff
-       d: () => Fz
+       b: () => hv
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/224.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/224.js` (56 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a)

#### 1. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L2)

```diff
- export const ids = [224, 229];
+ export const ids = [224, 230, 233];
```

#### 2. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L4)

```diff
-   40950: (zz, tz, sz) => {
+   39535: (vv, zv, Pv) => {
```

#### 3. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L6)

```diff
-       d: () => Oz
+       b: () => gv,
+       e: () => pv
```

#### 4. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L8-L10` → after: `L9-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L9-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L9-L191) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L8-L10)

```diff
-     var Fz = sz(40872),
-       Wz = sz(39163);
-     let Xz = !1;
+     var hv = Pv(38209),
+       Sv = Pv(39312),
+       ev = Pv(39515),
+       gv = {};
+     class pv {
+       constructor(vv) {
+         this.attachedToElement = !1, this.attached = {}, this.camera = vv, this.checkInputs = () => {}
+       }
+       add(vv) {
+         const zv = vv.getSimpleName();
+         this.attached[zv] ? hv.d.Warn("camera input of type " + zv + " already exists on camera") : (this.attached[zv] = vv, vv.camera = this.camera, vv.checkInputs && (this.checkInputs = this._addCheckInputs(vv.checkInputs.bind(vv))), this.attachedToElement && vv.attachControl(t … [truncated]
+       }
+       remove(vv) {
+         for (const zv in this.attached) {
+           const Pv = this.attached[zv];
+           if (Pv === vv) return Pv.detachControl(), Pv.camera = null, delete this.attached[zv], void this.rebuildInputCheck()
+ ... (167 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L13-L30` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L194) · [Before (L13-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L13-L30)

```diff
-       Xz || (Xz = !0, Wz.b.prototype._sphericalPolynomialTargetSize = 0, Wz.b.prototype.forceSphericalPolynomialsRecompute = function() {
-         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
-       }, Object.defineProperty(Wz.b.prototype, "sphericalPolynomial", {
-         get: function() {
-           if (this._texture) {
-             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
-             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Fz.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
-               this._texture._sphericalPolynomial = zz, this._texture._sphericalPolynomialComputed = !0
-             }))), null
-           }
-           return null
-         },
-         set: function(zz) {
-           this._texture && (this._texture._sphericalPolynomial = zz)
-         },
-         enumerable: !0,
- ... (2 more removed lines; see GitHub link above)
+       Tv || (Tv = !0, dv.c.AddNodeConstructor("Light_Type_3", ((vv, zv) => () => new lv(vv, ev.l.Zero(), zv))), (0, Nv.c)("BABYLON.HemisphericLight", lv))
```

#### 6. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L33` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L197) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L33)

```diff
-   36652: (zz, tz, sz) => {
+   36745: (vv, zv, Pv) => {
```

#### 7. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L35-L36` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L199-L200) · [Before (L35-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L35-L36)

```diff
-       Color3: () => Fz.c,
-       c: () => Fz.d
+       Color3: () => hv.b,
+       d: () => hv.e
```

#### 8. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L38-L39` → after: `L202-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L202-L203) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L38-L39)

```diff
-     var Fz = sz(36654);
-     (0, Fz.e)()
+     var hv = Pv(36751);
+     (0, hv.h)()
```

#### 9. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L41` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L205) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L41)

```diff
-   37191: (zz, tz, sz) => {
+   37290: (vv, zv, Pv) => {
```

#### 10. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L43` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L207) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L43)

```diff
-       e: () => Wz
+       c: () => Sv
```

#### 11. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L45` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L209) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L45)

```diff
-     var Fz = sz(37199);
+     var hv = Pv(37293);
```

#### 12. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L49` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L213) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L49)

```diff
-         for (let sz = 0; sz < 6; sz++) tz.push(new Fz.c(0, 0, 0, 0));
+         for (let Pv = 0; Pv < 6; Pv++) zv.push(new hv.b(0, 0, 0, 0));
```

#### 13. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L86` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L250) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L86)

```diff
-   37199: (zz, tz, sz) => {
+   37293: (vv, zv, Pv) => {
```

#### 14. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L88` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L252) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L88)

```diff
-       c: () => Wz
+       b: () => Sv
```

#### 15. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L90` → after: `L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L254) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L90)

```diff
-     var Fz = sz(36475);
+     var hv = Pv(36594);
```

#### 16. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L93` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L257) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L93)

```diff
-         this.normal = new Fz.p(zz, tz, sz), this.d = Wz
+         this.normal = new hv.l(vv, zv, Pv), this.d = Sv
```

#### 17. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L95` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L259) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L95)

```diff
-       hsz() {
+       pPv() {
```

#### 18. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L142` → after: `L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L306) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L142)

```diff
-         return bz = 0 !== Nz ? 1 / Nz : 0, this.normal.x = Uz * bz, this.normal.y = Kz * bz, this.normal.z = uz * bz, this.d = -(this.normal.x * zz.x + this.normal.y * zz.y + this.normal.z * zz.z), this
+         return wv = 0 !== Wv ? 1 / Wv : 0, this.normal.x = Nv * wv, this.normal.y = lv * wv, this.normal.z = Tv * wv, this.d = -(this.normal.x * vv.x + this.normal.y * vv.y + this.normal.z * vv.z), this
```

#### 19. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L145` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L309) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L145)

```diff
-         return Fz.p.Dot(this.normal, zz) <= tz
+         return hv.l.Dot(this.normal, vv) <= zv
```

#### 20. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L148` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L312) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L148)

```diff
-         return Fz.p.Dot(zz, this.normal) + this.d
+         return hv.l.Dot(vv, this.normal) + this.d
```

#### 21. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L162` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L326) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L162)

```diff
-         return sz.normal.vsz(tz), sz.normal.normalize(), sz.d = -zz.dot(sz.normal), sz
+         return Pv.normal.Vzv(zv), Pv.normal.normalize(), Pv.d = -vv.dot(Pv.normal), Pv
```

#### 22. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L166` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L330) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L166)

```diff
-         return Fz.p.Dot(sz, tz) + Wz
+         return hv.l.Dot(Pv, zv) + Sv
```

#### 23. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L169` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L333) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L169)

```diff
-     Wz._TmpMatrix = Fz.e.Identity()
+     Sv._TmpMatrix = hv.c.Identity()
```

#### 24. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L171` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L335) · [Before (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L171)

```diff
-   36473: (zz, tz, sz) => {
+   36591: (vv, zv, Pv) => {
```

#### 25. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L173-L179` → after: `L337-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L337-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L337-L343) · [Before (L173-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L173-L179)

```diff
-       Matrix: () => Fz.e,
-       Quaternion: () => Fz.h,
-       RegisterMathVector: () => Fz.k,
-       TmpVectors: () => Fz.m,
-       Vector2: () => Fz.n,
-       XD: () => Fz.p,
-       Vector4: () => Fz.q
+       Matrix: () => hv.c,
+       Quaternion: () => hv.d,
+       RegisterMathVector: () => hv.e,
+       TmpVectors: () => hv.i,
+       Vector2: () => hv.j,
+       fa: () => hv.l,
+       Vector4: () => hv.m
```

#### 26. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L181-L182` → after: `L345-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L345-L346) · [Before (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L181-L182)

```diff
-     var Fz = sz(36475);
-     (0, Fz.k)()
+     var hv = Pv(36594);
+     (0, hv.e)()
```

#### 27. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L184` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L348) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L184)

```diff
-   37536: (zz, tz, sz) => {
+   37633: (vv, zv, Pv) => {
```

#### 28. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L186` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L350) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L186)

```diff
-       b: () => Fz
+       d: () => hv
```

#### 29. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L203` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L367) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L203)

```diff
-   40872: (zz, tz, sz) => {
+   39710: (vv, zv, Pv) => {
```

#### 30. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L205` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L369) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L205)

```diff
-       d: () => Uz
+       c: () => Nv
```

#### 31. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L207-L214` → after: `L371-L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L371-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L371-L425) · [Before (L207-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L207-L214)

```diff
-     var Fz = sz(36475),
-       Wz = sz(36507),
-       Xz = sz(39155),
-       Oz = sz(36479),
-       oz = sz(36654);
-     class vz {
-       constructor(zz, tz, sz, Fz) {
-         this.name = zz, this.worldAxisForNormal = tz, this.worldAxisForFileX = sz, this.worldAxisForFileY = Fz
+     var hv = Pv(36594),
+       Sv = Pv(36751),
+       ev = Pv(39712),
+       gv = Pv(39720),
+       pv = Pv(39745);
+ 
+     function dv(vv) {
+       let zv = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
+       const Pv = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
+         ev = [],
+         dv = vv.width || vv.size || 1,
+         Nv = vv.height || vv.size || 1,
+         lv = vv.depth || vv.size || 1,
+         Tv = vv.wrap || !1;
+       let Wv = void 0 === vv.topBaseAt ? 1 : vv.topBaseAt,
+         wv = void 0 === vv.bottomBaseAt ? 0 : vv.bottomBaseAt;
+ ... (39 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L217-L283` → after: `L429-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L429-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L429-L480) · [Before (L217-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L217-L283)

```diff
-     class Uz {
-       static _NearestPow2Floor(zz) {
-         return zz <= 1 ? 1 : 1 << Math.floor(Math.log2(zz))
-       }
-       static ConvertCubeMapTextureToSphericalPolynomial(zz) {
-         if (!zz.isCube) return null;
-         zz.aJ()?.FD().flushFramebuffer();
-         const tz = zz.getSize().width,
-           sz = zz._sphericalPolynomialTargetSize,
-           Fz = sz > 0 ? this._NearestPow2Floor(sz) : 0,
-           Wz = !zz.noMipmap && !0 === zz._texture?.generateMipMaps,
-           Xz = Fz > 0 && Fz < tz && Wz,
-           Oz = Xz ? Math.max(0, Math.round(Math.log2(tz / Fz))) : 0,
-           oz = Xz ? Math.max(1, Math.floor(tz / Math.pow(2, Oz))) : tz,
-           vz = zz.readPixels(0, Oz, void 0, !1),
-           Uz = zz.readPixels(1, Oz, void 0, !1);
- ... (51 more removed lines; see GitHub link above)
+ 
+     function Nv(vv) {
+       let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+         Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const hv = new ev.c(vv, Pv);
+       zv.sideOrientation = ev.c._GetDefaultSideOrientation(zv.sideOrientation), hv._originalBuilderSideOrientation = zv.sideOrientation;
+       return dv(zv).applyToMesh(hv, zv.updatable), hv
+     }
+     let lv = !1;
+     lv || (lv = !0, gv.d.CreateBox = dv, ev.c.CreateBox = function(vv, zv) {
+       return Nv(vv, {
+         size: zv,
+         sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
+         updatable: arguments.length > 3 ? arguments[3] : void 0
+       }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
+     })
+ ... (36 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L291-L338` → after: `L485-L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L485-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L485-L523) · [Before (L291-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L291-L338)

```diff
-       static ConvertCubeMapToSphericalPolynomial(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const sz = tz > 0 ? this._NearestPow2Floor(tz) : 0;
-         if (sz > 0 && zz.size > sz) {
-           const tz = 5 === zz.format ? 4 : 3,
-             Fz = ["right", "left", "up", "down", "front", "back"],
-             Wz = {};
-           for (const Xz of Fz) Wz[Xz] = this._DownsampleFace(zz[Xz], zz.size, sz, tz);
-           zz = {
-             ...zz,
-             ...Wz,
-             size: sz
-           }
-         }
-         const Fz = new Xz.d;
-         let vz = 0;
- ... (32 more removed lines; see GitHub link above)
+       const dv = new ev.d;
+       return dv.indices = zv, dv.positions = Pv, Sv && (dv.colors = gv), dv
+     }
+ 
+     function lv(vv) {
+       const zv = vv.dashSize || 3,
+         Pv = vv.gapSize || 1,
+         Sv = vv.dashNb || 200,
+         gv = vv.points,
+         pv = [],
+         dv = [],
+         Nv = hv.l.Zero();
+       let lv, Tv, Wv, wv = 0,
+         av = 0;
+       for (Wv = 0; Wv < gv.length - 1; Wv++) gv[Wv + 1].subtractToRef(gv[Wv], Nv), wv += Nv.length();
+       const sv = wv / Sv,
+ ... (23 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L340-L341` → after: `L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L525) · [Before (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L340-L341)

```diff
-         const bz = 6 * (4 * Math.PI) / 6 / vz;
-         return Fz.scaleInPlace(bz), Fz.convertIncidentRadianceToIrradiance(), Fz.convertIrradianceToLambertianRadiance(), Xz.g.FromHarmonics(Fz)
+         return hv.updateVerticesData(pv.k.PositionKind, vv, !1, !1), ev && zv && hv.updateVerticesData(pv.k.ColorKind, zv, !1, !1), hv.refreshBoundingInfo(), hv
```

#### 35. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L344-L359` → after: `L531-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L531-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L531-L542) · [Before (L344-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L344-L359)

```diff
-     Uz._FileFaces = [new vz("right", new Fz.p(1, 0, 0), new Fz.p(0, 0, -1), new Fz.p(0, -1, 0)), new vz("left", new Fz.p(-1, 0, 0), new Fz.p(0, 0, 1), new Fz.p(0, -1, 0)), new vz("up", new Fz.p(0, 1, 0), new Fz.p(1, 0, 0), new Fz.p(0, 0, 1)), new vz("down", new Fz.p(0, -1, 0), ne … [truncated]
-   },
-   40661: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => Fz.g,
-       e: () => Fz.p
-     });
-     var Fz = sz(39205);
-     (0, Fz.t)()
-   },
-   37333: (zz, tz, sz) => {
-     function Fz() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (zz => {
-         const tz = 16 * Math.random() | 0;
-         return ("x" === zz ? tz : 3 & tz | 8).toString(16)
-       }))
+ 
+     function Wv(vv, zv) {
+       let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const hv = zv.colors ? [zv.colors] : null;
+       return Tv(vv, {
+         lines: [zv.points],
+         updatable: zv.updatable,
+         instance: zv.instance,
+         colors: hv,
+         useVertexAlpha: zv.useVertexAlpha,
+         material: zv.material
+       }, Pv)
```

#### 36. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L361-L400` → after: `L544-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L544-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L544-L563) · [Before (L361-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L361-L400)

```diff
-     sz.d(tz, {
-       d: () => Fz
-     })
-   },
-   40921: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => Xz
-     });
-     var Fz = sz(40909),
-       Wz = sz(40928);
-     class Xz {
-       static ExpandRGBDTexture(zz) {
-         const tz = zz._texture;
-         if (!tz || !zz.isRGBD) return;
-         const Wz = tz.FD(),
-           Xz = Wz.getCaps(),
- ... (24 more removed lines; see GitHub link above)
+ 
+     function wv(vv, zv) {
+       let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const ev = zv.points,
+         pv = zv.instance,
+         Nv = zv.gapSize || 1,
+         Tv = zv.dashSize || 3;
+       if (pv) {
+         const vv = vv => {
+           const zv = hv.l.Zero(),
+             Pv = vv.length / 6;
+           let Sv, gv, dv, Nv, lv = 0,
+             Tv = 0;
+           for (dv = 0; dv < ev.length - 1; dv++) ev[dv + 1].subtractToRef(ev[dv], zv), lv += zv.length();
+           const Wv = lv / Pv,
+             wv = pv._creationDataStorage.dashSize,
+ ... (4 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L402-L406` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L565) · [Before (L402-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L402-L406)

```diff
-         oz && (Oz ? vz() : zz.onLoadObservable.addOnce(vz))
-       }
-       static async EncodeTextureToRGBD(zz, tz) {
-         let Fz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         return tz.FD().isWebGPU ? await sz.e(333).then((() => sz(60573))) : await sz.e(315).then((() => sz(60567))), await (0, Wz.b)("rgbdEncode", zz, tz, Fz, 1, 5)
+         return (zv.dashNb || zv.dashSize || zv.gapSize || zv.useVertexAlpha || zv.material) && dv.d.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), pv.updateMeshPositions(vv, !1), pv
```

#### 38. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L410-L420` → after: `L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L588) · [Before (L410-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L410-L420)

```diff
-   60294: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       AsyncLoop: () => Fz.e,
-       RegisterTools: () => Fz.h,
-       Tools: () => Fz.j,
-       className: () => Fz.l
-     });
-     var Fz = sz(39264);
-     (0, Fz.h)()
-   },
-   40962: (zz, tz, sz) => {
+   39778: (vv, zv, Pv) => {
```

#### 39. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L422` → after: `L590-L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L590-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L590-L591) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L422)

```diff
-       b: () => Wz
+       b: () => Wv,
+       e: () => sv
```

#### 40. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L424` → after: `L593-L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L593-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L593-L603) · [Before (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L424)

```diff
-     class Fz {
+     var hv, Sv, ev = Pv(36751),
+       gv = Pv(39441),
+       pv = Pv(39712),
+       dv = Pv(39782),
+       Nv = Pv(39593),
+       lv = Pv(39790),
+       Tv = Pv(39190);
+     class Wv extends pv.c {
+       _isShaderMaterial(vv) {
+         return !!vv && "ShaderMaterial" === vv.getClassName()
+       }
```

#### 41. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L426-L429` → after: `L605-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L605-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L605-L631) · [Before (L426-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L426-L429)

```diff
-         this._pendingActions = new Array, this._workerInfos = zz.map((zz => ({
-           workerPromise: Promise.resolve(zz),
-           idle: !0
-         })))
+         let zv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+           hv = arguments.length > 5 ? arguments[5] : void 0,
+           Sv = arguments.length > 6 ? arguments[6] : void 0,
+           pv = arguments.length > 7 ? arguments[7] : void 0;
+         super(vv, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, zv, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = hv, this.useVertexAlpha = Sv, this.color = new  … [truncated]
+         const dv = {
+           attributes: [gv.k.PositionKind],
+           uniforms: ["world", "viewProjection"],
+           needAlphaBlending: !0,
+           defines: [],
+           useClipPlane: null,
+           shaderLanguage: 0
+         };
+         if (this.useVertexAlpha ? dv.defines.push("#define VERTEXALPHA") : dv.needAlphaBlending = !1, this.useVertexColor ? (dv.defines.push("#define VERTEXCOLOR"), dv.attributes.push(gv.k.ColorKind)) : (dv.uniforms.push("color"), this._color4 = new ev.e), pv) this.material = pv;
+         else {
+           this.rD().ma().isWebGPU && !Wv.ForceGLSL && (this._shaderLanguage = 1), dv.shaderLanguage = this._shaderLanguage, dv.extraInitializationsAsync = async () => {
+ ... (11 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L431-L435` → after: `L633-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L633-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L633-L637) · [Before (L431-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L431-L435)

```diff
-       dispose() {
-         for (const zz of this._workerInfos) zz.workerPromise.then((zz => {
-           zz.terminate()
-         }));
-         this._workerInfos.length = 0, this._pendingActions.length = 0
+       set material(vv) {
+         const zv = this.material;
+         if (zv === vv) return;
+         const Pv = zv && this._ownsMaterial;
+         this._ownsMaterial = !1, this._setInternalMaterial(vv), Pv && zv?.dispose()
```

#### 43. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L437-L438` → after: `L639-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L639-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L639-L640) · [Before (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L437-L438)

```diff
-       push(zz) {
-         this._executeOnIdleWorker(zz) || this._pendingActions.push(zz)
+       _setInternalMaterial(vv) {
+         this._setMaterial(vv), this.material && (this.material.fillMode = Nv.b.LineListDrawMode, this.material.disableLighting = !0)
```

#### 44. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L440-L442` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L642) · [Before (L440-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L440-L442)

```diff
-       _executeOnIdleWorker(zz) {
-         for (const tz of this._workerInfos)
-           if (tz.idle) return this._execute(tz, zz), !0;
+       get checkCollisions() {
```

#### 45. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L445-L451` → after: `L645-L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L645-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L645-L662) · [Before (L445-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L445-L451)

```diff
-       _execute(zz, tz) {
-         zz.idle = !1, zz.workerPromise.then((sz => {
-           tz(sz, (() => {
-             const tz = this._pendingActions.shift();
-             tz ? this._execute(zz, tz) : zz.idle = !0
-           }))
-         }))
+       set checkCollisions(vv) {}
+       _bind(vv, zv) {
+         if (!this._geometry) return this;
+         const Pv = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
+         if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(zv, Pv) : this._geometry._bind(zv, Pv, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMate … [truncated]
+           const {
+             r: vv,
+             g: zv,
+             b: Pv
+           } = this.color;
+           this._color4.set(vv, zv, Pv, this.alpha), this.material.setColor4("color", this._color4)
+         }
+         return this
+       }
+       _draw(vv, zv, Pv) {
+         if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
+ ... (2 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L453-L457` → after: `L664-L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L664-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L664-L683) · [Before (L453-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L453-L457)

```diff
-     }
-     class Wz extends Fz {
-       constructor(zz, tz) {
-         let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wz.DefaultOptions;
-         super([]), this._maxWorkers = zz, this._createWorkerAsync = tz, this._options = sz
+       dispose(vv) {
+         let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || zv) && this.material?.dispose(!1, !1, !0), super.dispose(vv)
+       }
+       clone(vv) {
+         let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           Pv = arguments.length > 2 ? arguments[2] : void 0;
+         if (zv && void 0 === zv._addToSceneRootNodes) {
+           const Pv = zv;
+           return Pv.source = this, new Wv(vv, this.rD(), Pv.parent, Pv.source, Pv.doNotCloneChildren)
+         }
+         return new Wv(vv, this.rD(), zv, this, Pv)
+       }
+       createInstance(vv) {
+         const zv = new wv(vv, this);
+         if (this.lV) {
+ ... (4 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L459-L467` → after: `L685-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L685-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L685-L686) · [Before (L459-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L459-L467)

```diff
-       push(zz) {
-         if (!this._executeOnIdleWorker(zz))
-           if (this._workerInfos.length < this._maxWorkers) {
-             const tz = {
-               workerPromise: this._createWorkerAsync(),
-               idle: !1
-             };
-             this._workerInfos.push(tz), this._execute(tz, zz)
-           } else this._pendingActions.push(zz)
+       serialize(vv) {
+         super.serialize(vv), vv.color = this.color.pPv(), vv.alpha = this.alpha
```

#### 48. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L469-L479` → after: `L688-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L688-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L688-L690) · [Before (L469-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L469-L479)

```diff
-       _execute(zz, tz) {
-         zz.timeoutId && (clearTimeout(zz.timeoutId), delete zz.timeoutId), super._execute(zz, ((sz, Fz) => {
-           tz(sz, (() => {
-             Fz(), zz.idle && (zz.timeoutId = setTimeout((() => {
-               zz.workerPromise.then((zz => {
-                 zz.terminate()
-               }));
-               const tz = this._workerInfos.indexOf(zz); - 1 !== tz && this._workerInfos.splice(tz, 1)
-             }), this._options.idleTimeElapsedBeforeRelease))
-           }))
-         }))
+       static Parse(vv, zv) {
+         const Pv = new Wv(vv.name, zv);
+         return Pv.color = ev.b.FromArray(vv.color), Pv.alpha = vv.alpha, Pv
```

#### 49. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L482-L483` → after: `L693-L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L693-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L693-L700) · [Before (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L482-L483)

```diff
-     Wz.DefaultOptions = {
-       idleTimeElapsedBeforeRelease: 1e3
+     Wv.ForceGLSL = !1;
+     class wv extends dv.b {
+       constructor(vv, zv) {
+         super(vv, zv), this.intersectionThreshold = zv.intersectionThreshold
+       }
+       getClassName() {
+         return "InstancedLinesMesh"
+       }
```

#### 50. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L486-L613` → after: `L708-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L708-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L708-L710) · [Before (L486-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L486-L613)

```diff
-   60332: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       AbstractThreeMfSerializer: () => po,
-       BVHExporter: () => ZO,
-       ContentTypeFileName: () => go,
-       DefaultXmlSerializerFormatOptions: () => nO,
-       DefaultXmlSerializerNumberOptions: () => lO,
-       EXT_lights_area: () => PW,
-       EXT_mesh_gpu_instancing: () => iF,
-       EXT_texture_avif: () => oO,
-       EXT_texture_webp: () => FO,
-       GLTF2Export: () => hF,
-       GLTFData: () => Uz,
-       GetXmlFieldMeta: () => hO,
-       GetXmlName: () => QO,
-       IsQualifiedName: () => GO,
- ... (112 more removed lines; see GitHub link above)
+   38207: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => ev
```

#### 51. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L615-L617` → after: `L712-L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L712-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L712-L715) · [Before (L615-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L615-L617)

```diff
-     var Fz = sz(36473),
-       Wz = sz(60294),
-       Xz = sz(39451);
+     var hv = Pv(38209);
+     const Sv = (vv, zv, Pv) => vv ? vv.getClassName && "Mesh" === vv.getClassName() ? null : !vv.getClassName || "SubMesh" !== vv.getClassName() && "PhysicsBody" !== vv.getClassName() ? vv.clone ? vv.clone() : Array.isArray(vv) ? vv.slice() : Pv && "object" === typeof vv ? {
+       ...vv
+     } : null : vv.clone(zv) : null;
```

#### 52. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L619-L624` → after: `L717-L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L717-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L717-L730) · [Before (L619-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L619-L624)

```diff
-       static OBJ(zz, tz, sz, Oz) {
-         const oz = [];
-         let vz = 1,
-           Uz = 1;
-         tz && (sz || (sz = "mat"), oz.push("mtllib " + sz + ".mtl"));
-         for (let Kz = 0; Kz < zz.length; Kz++) {
+       static DeepCopy(vv, zv, Pv, ev) {
+         let gv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const pv = function(vv) {
+           const zv = [];
+           do {
+             const Pv = Object.getOwnPropertyNames(vv);
+             for (const vv of Pv) - 1 === zv.indexOf(vv) && zv.push(vv)
+           } while (vv = Object.getPrototypeOf(vv));
+           return zv
+         }(vv);
+         for (const Nv of pv) {
+           if ("_" === Nv[0] && (!ev || -1 === ev.indexOf(Nv))) continue;
+           if (Nv.endsWith("Observable")) continue;
+           if (Pv && -1 !== Pv.indexOf(Nv)) continue;
```

#### 53. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L626-L667` → after: `L732-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L732-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L732-L745) · [Before (L626-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L626-L667)

```diff
-             uz = sz.name || `mesh${Kz}}`;
-           oz.push(`o ${uz}`);
-           let Nz = null;
-           if (Oz) {
-             const zz = sz.computeWorldMatrix(!0);
-             Nz = new Fz.Matrix, zz.invertToRef(Nz), sz.bakeTransformIntoVertices(zz)
-           }
-           if (tz) {
-             const zz = sz.material;
-             zz && oz.push("usemtl " + zz.id)
-           }
-           const bz = sz.geometry;
-           if (!bz) {
-             Wz.Tools.Warn("No geometry is present on the mesh");
-             continue
-           }
- ... (26 more removed lines; see GitHub link above)
+             lv = typeof pv;
+           if ("function" !== lv) try {
+             if ("object" === lv)
+               if (pv instanceof Uint8Array) zv[Nv] = Uint8Array.from(pv);
+               else if (pv instanceof Array) {
+               if (zv[Nv] = [], pv.length > 0)
+                 if ("object" == typeof pv[0])
+                   for (let vv = 0; vv < pv.length; vv++) {
+                     const Pv = Sv(pv[vv], zv, gv); - 1 === zv[Nv].indexOf(Pv) && zv[Nv].push(Pv)
+                   } else zv[Nv] = pv.slice(0)
+             } else zv[Nv] = Sv(pv, zv, gv);
+             else zv[Nv] = pv
+           } catch (dv) {
+             hv.d.Warn(dv.message)
```

#### 54. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L701-L763` → after: `L750-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L750-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L750-L756) · [Before (L701-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L701-L763)

```diff
-     var Kz = sz(40238),
-       uz = sz(40192),
-       Nz = sz(40752),
-       bz = sz(40201),
-       wz = sz(39010),
-       Dz = sz(36502),
-       gz = sz(36652),
-       Hz = sz(36507);
-     const Bz = Hz.HighestCommonFactor,
-       Pz = {
-         ...Hz,
-         TwoPi: 2 * Math.PI,
-         Sign: Math.sign,
-         Log2: Math.log2,
-         HCF: Bz
-       };
- ... (47 more removed lines; see GitHub link above)
+   },
+   37431: (vv, zv, Pv) => {
+     function hv() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (vv => {
+         const zv = 16 * Math.random() | 0;
+         return ("x" === vv ? zv : 3 & zv | 8).toString(16)
+       }))
```

#### 55. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L765-L16076` → after: `L758-L765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L758-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L758-L765) · [Before (L765-L16076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L765-L16076)

```diff
-     let lz = (() => {
-       var zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz;
-       let Kz, uz, Nz, bz, wz, Dz, gz, Hz, Bz, Pz = iz.d,
-         rz = [],
-         Yz = [],
-         xz = [],
-         mz = [],
-         Jz = [],
-         ez = [],
-         Zz = [],
-         Gz = [],
-         Tz = [],
-         cz = [],
-         jz = [],
-         Az = [],
-         yz = [],
- ... (15296 more removed lines; see GitHub link above)
+     Pv.d(zv, {
+       b: () => hv
+     })
+   },
+   38209: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       d: () => hv
+     });
```

#### 56. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L16078-L16197` → after: `L767-L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L767-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/224.js#L767-L838) · [Before (L16078-L16197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/224.js#L16078-L16197)

```diff
-       constructor() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
-           sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-         this._from = zz, this._to = tz, this._step = sz, this._i = zz
-       }
-       next() {
-         if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
-         const zz = this._i;
-         return this._i += this._step, zz
-       }
-       reset() {
-         return this._i = this._from, this
-       }
-     }
-     class tv extends po {
- ... (104 more removed lines; see GitHub link above)
+       static _CheckLimit(vv, zv) {
+         let Pv = hv._LogLimitOutputs[vv];
+         return Pv ? Pv.current++ : (Pv = {
+           limit: zv,
+           current: 1
+         }, hv._LogLimitOutputs[vv] = Pv), Pv.current <= Pv.limit
+       }
+       static _GenerateLimitMessage(vv) {
+         let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const Pv = hv._LogLimitOutputs[vv];
+         if (!Pv || !hv.MessageLimitReached) return;
+         const Sv = this._Levels[zv];
+         Pv.current === Pv.limit && hv[Sv.name](hv.MessageLimitReached.replace(/%LIMIT%/g, "" + Pv.limit).replace(/%TYPE%/g, Sv.name ?? ""))
+       }
+       static _AddLogEntry(vv) {
+         hv._LogCache = vv + hv._LogCache, hv.OnNewCacheEntry && hv.OnNewCacheEntry(vv)
+ ... (56 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/225.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/225.js` (267 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789)

#### 1. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2)

```diff
- export const ids = [225];
+ export const ids = [225, 230];
```

#### 2. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L4)

```diff
-   36502: (zz, tz, sz) => {
+   41148: (vv, zv, Pv) => {
```

#### 3. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L6-L21` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L6) · [Before (L6-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L6-L21)

```diff
-       c: () => Wz
-     });
-     var Fz = sz(36505);
-     class Wz {
-       static get LastCreatedEngine() {
-         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
-       }
-       static get LastCreatedScene() {
-         return this._LastCreatedScene
-       }
-     }
-     Wz.Instances = [], Wz.OnEnginesDisposedObservable = new Fz.c, Wz._LastCreatedScene = null, Wz.UseFallbackTexture = !0, Wz.FallbackTexture = ""
-   },
-   36493: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => Fz
+       d: () => gv
```

#### 4. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L23-L30` → after: `L8-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L8-L21) · [Before (L23-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L23-L30)

```diff
-     class Fz {
-       static SetMatrixPrecision(zz) {
-         if (Fz.MatrixTrackPrecisionChange = !1, zz && !Fz.MatrixUse64Bits && Fz.MatrixTrackedMatrices)
-           for (let tz = 0; tz < Fz.MatrixTrackedMatrices.length; ++tz) {
-             const zz = Fz.MatrixTrackedMatrices[tz],
-               sz = zz._m;
-             zz._m = new Array(16);
-             for (let tz = 0; tz < 16; ++tz) zz._m[tz] = sz[tz]
+     var hv = Pv(41067),
+       Sv = Pv(39287);
+     let ev = !1;
+ 
+     function gv() {
+       ev || (ev = !0, Sv.e.prototype._sphericalPolynomialTargetSize = 0, Sv.e.prototype.forceSphericalPolynomialsRecompute = function() {
+         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
+       }, Object.defineProperty(Sv.e.prototype, "sphericalPolynomial", {
+         get: function() {
+           if (this._texture) {
+             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
+             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = hv.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
+               this._texture._sphericalPolynomial = vv, this._texture._sphericalPolynomialComputed = !0
+             }))), null
```

#### 5. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L32-L33` → after: `L23-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L23-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L23-L30) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L32-L33)

```diff
-         Fz.MatrixUse64Bits = zz, Fz.MatrixCurrentType = Fz.MatrixUse64Bits ? Array : Float32Array, Fz.MatrixTrackedMatrices = null
-       }
+           return null
+         },
+         set: function(vv) {
+           this._texture && (this._texture._sphericalPolynomial = vv)
+         },
+         enumerable: !0,
+         configurable: !0
+       }))
```

#### 6. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L37` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L33) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L37)

```diff
-   36513: (zz, tz, sz) => {
+   36745: (vv, zv, Pv) => {
```

#### 7. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L39-L44` → after: `L35-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L35-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L35-L36) · [Before (L39-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L39-L44)

```diff
-       c: () => oz,
-       d: () => Uz,
-       h: () => vz,
-       i: () => Fz,
-       l: () => Xz,
-       o: () => Oz
+       Color3: () => hv.b,
+       d: () => hv.e
```

#### 8. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L46-L164` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L38-L39) · [Before (L46-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L46-L164)

```diff
-     class Fz {}
- 
-     function Wz(zz) {
-       zz.updateFlag = Fz._UpdateFlagSeed++
-     }
- 
-     function Xz(zz, tz, sz) {
-       let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       const Wz = zz.hsz(),
-         Xz = tz.hsz(),
-         Oz = Wz[0],
-         oz = Wz[1],
-         vz = Wz[2],
-         Uz = Wz[3],
-         Kz = Wz[4],
-         uz = Wz[5],
- ... (103 more removed lines; see GitHub link above)
+     var hv = Pv(36751);
+     (0, hv.h)()
```

#### 9. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L166` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L41) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L166)

```diff
-   36475: (zz, tz, sz) => {
+   37290: (vv, zv, Pv) => {
```

#### 10. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L168-L174` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L43) · [Before (L168-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L168-L174)

```diff
-       e: () => Dz,
-       h: () => wz,
-       k: () => rz,
-       m: () => Hz,
-       n: () => uz,
-       p: () => Nz,
-       q: () => bz
+       c: () => Sv
```

#### 11. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L176-L183` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L45) · [Before (L176-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L176-L183)

```diff
-     var Fz = sz(36479),
-       Wz = sz(36487),
-       Xz = sz(36493),
-       Oz = sz(36502),
-       oz = sz(36507),
-       vz = sz(36513),
-       Uz = sz(36518);
-     const Kz = zz => parseInt(zz.toString().replace(/\W/g, ""));
+     var hv = Pv(37293);
```

#### 12. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L185-L438` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L47-L50) · [Before (L185-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L185-L438)

```diff
-       constructor() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         this.x = zz, this.y = tz
-       }
-       toString() {
-         return `{X: ${this.x} Y: ${this.y}}`
-       }
-       getClassName() {
-         return "Vector2"
-       }
-       getHashCode() {
-         let zz = Kz(this.x);
-         return zz = 397 * zz ^ Kz(this.y), zz
-       }
-       toArray(zz) {
- ... (238 more removed lines; see GitHub link above)
+       static GetPlanes(vv) {
+         const zv = [];
+         for (let Pv = 0; Pv < 6; Pv++) zv.push(new hv.b(0, 0, 0, 0));
+         return Sv.GetPlanesToRef(vv, zv), zv
```

#### 13. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L440-L451` → after: `L52-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L52-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L52-L54) · [Before (L440-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L440-L451)

```diff
-       static Minimize(zz, tz) {
-         const sz = zz.x < tz.x ? zz.x : tz.x,
-           Fz = zz.y < tz.y ? zz.y : tz.y;
-         return new uz(sz, Fz)
-       }
-       static Maximize(zz, tz) {
-         const sz = zz.x > tz.x ? zz.x : tz.x,
-           Fz = zz.y > tz.y ? zz.y : tz.y;
-         return new uz(sz, Fz)
-       }
-       static Transform(zz, tz) {
-         return uz.TransformToRef(zz, tz, new uz)
+       static GetNearPlaneToRef(vv, zv) {
+         const Pv = vv.m;
+         zv.normal.x = Pv[3] + Pv[2], zv.normal.y = Pv[7] + Pv[6], zv.normal.z = Pv[11] + Pv[10], zv.d = Pv[15] + Pv[14], zv.normalize()
```

#### 14. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L453-L457` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L56-L58) · [Before (L453-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L453-L457)

```diff
-       static TransformToRef(zz, tz, sz) {
-         const Fz = tz.m,
-           Wz = zz.x * Fz[0] + zz.y * Fz[4] + Fz[12],
-           Xz = zz.x * Fz[1] + zz.y * Fz[5] + Fz[13];
-         return sz.x = Wz, sz.y = Xz, sz
+       static GetFarPlaneToRef(vv, zv) {
+         const Pv = vv.m;
+         zv.normal.x = Pv[3] - Pv[2], zv.normal.y = Pv[7] - Pv[6], zv.normal.z = Pv[11] - Pv[10], zv.d = Pv[15] - Pv[14], zv.normalize()
```

#### 15. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L459-L464` → after: `L60-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L60-L62) · [Before (L459-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L459-L464)

```diff
-       static PointInTriangle(zz, tz, sz, Fz) {
-         const Wz = .5 * (-sz.y * Fz.x + tz.y * (-sz.x + Fz.x) + tz.x * (sz.y - Fz.y) + sz.x * Fz.y),
-           Xz = Wz < 0 ? -1 : 1,
-           Oz = (tz.y * Fz.x - tz.x * Fz.y + (Fz.y - tz.y) * zz.x + (tz.x - Fz.x) * zz.y) * Xz,
-           oz = (tz.x * sz.y - tz.y * sz.x + (tz.y - sz.y) * zz.x + (sz.x - tz.x) * zz.y) * Xz;
-         return Oz > 0 && oz > 0 && Oz + oz < 2 * Wz * Xz
+       static GetLeftPlaneToRef(vv, zv) {
+         const Pv = vv.m;
+         zv.normal.x = Pv[3] + Pv[0], zv.normal.y = Pv[7] + Pv[4], zv.normal.z = Pv[11] + Pv[8], zv.d = Pv[15] + Pv[12], zv.normalize()
```

#### 16. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L466-L467` → after: `L64-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L64-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L64-L66) · [Before (L466-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L466-L467)

```diff
-       static Distance(zz, tz) {
-         return Math.sqrt(uz.DistanceSquared(zz, tz))
+       static GetRightPlaneToRef(vv, zv) {
+         const Pv = vv.m;
+         zv.normal.x = Pv[3] - Pv[0], zv.normal.y = Pv[7] - Pv[4], zv.normal.z = Pv[11] - Pv[8], zv.d = Pv[15] - Pv[12], zv.normalize()
```

#### 17. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L469-L472` → after: `L68-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L68-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L68-L70) · [Before (L469-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L469-L472)

```diff
-       static DistanceSquared(zz, tz) {
-         const sz = zz.x - tz.x,
-           Fz = zz.y - tz.y;
-         return sz * sz + Fz * Fz
+       static GetTopPlaneToRef(vv, zv) {
+         const Pv = vv.m;
+         zv.normal.x = Pv[3] - Pv[1], zv.normal.y = Pv[7] - Pv[5], zv.normal.z = Pv[11] - Pv[9], zv.d = Pv[15] - Pv[13], zv.normalize()
```

#### 18. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L474-L475` → after: `L72-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L72-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L72-L74) · [Before (L474-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L474-L475)

```diff
-       static Center(zz, tz) {
-         return uz.CenterToRef(zz, tz, new uz)
+       static GetBottomPlaneToRef(vv, zv) {
+         const Pv = vv.m;
+         zv.normal.x = Pv[3] + Pv[1], zv.normal.y = Pv[7] + Pv[5], zv.normal.z = Pv[11] + Pv[9], zv.d = Pv[15] + Pv[13], zv.normalize()
```

#### 19. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L477-L478` → after: `L76-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L76-L77) · [Before (L477-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L477-L478)

```diff
-       static CenterToRef(zz, tz, sz) {
-         return sz.m_((zz.x + tz.x) / 2, (zz.y + tz.y) / 2)
+       static GetPlanesToRef(vv, zv) {
+         Sv.GetNearPlaneToRef(vv, zv[0]), Sv.GetFarPlaneToRef(vv, zv[1]), Sv.GetLeftPlaneToRef(vv, zv[2]), Sv.GetRightPlaneToRef(vv, zv[3]), Sv.GetTopPlaneToRef(vv, zv[4]), Sv.GetBottomPlaneToRef(vv, zv[5])
```

#### 20. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L480-L486` → after: `L79-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L79-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L79-L82) · [Before (L480-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L480-L486)

```diff
-       static DistanceOfPointFromSegment(zz, tz, sz) {
-         const Fz = uz.DistanceSquared(tz, sz);
-         if (0 === Fz) return uz.Distance(zz, tz);
-         const Wz = sz.subtract(tz),
-           Xz = Math.max(0, Math.min(1, uz.Dot(zz.subtract(tz), Wz) / Fz)),
-           Oz = tz.add(Wz.multiplyByFloats(Xz, Xz));
-         return uz.Distance(zz, Oz)
+       static IsPointInFrustum(vv, zv) {
+         for (let Pv = 0; Pv < 6; Pv++)
+           if (zv[Pv].dotCoordinate(vv) < 0) return !1;
+         return !0
```

#### 21. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L489` → after: `L85-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L85-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L85-L90) · [Before (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L489)

```diff
-     uz._V8PerformanceHack = new uz(.5, .5), uz._ZeroReadOnly = uz.Zero();
+   },
+   37293: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => Sv
+     });
+     var hv = Pv(36594);
```

#### 22. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L491-L492` → after: `L92-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L92-L93) · [Before (L491-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L491-L492)

```diff
-       get x() {
-         return this._x
+       constructor(vv, zv, Pv, Sv) {
+         this.normal = new hv.l(vv, zv, Pv), this.d = Sv
```

#### 23. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L494-L495` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L95-L96) · [Before (L494-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L494-L495)

```diff
-       set x(zz) {
-         this._x = zz, this._isDirty = !0
+       pPv() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
```

#### 24. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L497-L516` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L98-L99) · [Before (L497-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L497-L516)

```diff
-       get y() {
-         return this._y
-       }
-       set y(zz) {
-         this._y = zz, this._isDirty = !0
-       }
-       get z() {
-         return this._z
-       }
-       set z(zz) {
-         this._z = zz, this._isDirty = !0
-       }
-       constructor() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
- ... (4 more removed lines; see GitHub link above)
+       clone() {
+         return new Sv(this.normal.x, this.normal.y, this.normal.z, this.d)
```

#### 25. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L519` → after: `L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L102) · [Before (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L519)

```diff
-         return "XD"
+         return "Plane"
```

#### 26. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L522-L537` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L105-L106) · [Before (L522-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L522-L537)

```diff
-         let zz = Kz(this._x);
-         return zz = 397 * zz ^ Kz(this._y), zz = 397 * zz ^ Kz(this._z), zz
-       }
-       hsz() {
-         return [this._x, this._y, this._z]
-       }
-       toArray(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return zz[tz] = this._x, zz[tz + 1] = this._y, zz[tz + 2] = this._z, this
-       }
-       Ztz(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return Nz.FromArrayToRef(zz, tz, this), this
-       }
-       toQuaternion() {
-         return wz.RotationYawPitchRoll(this._y, this._x, this._z)
+         let vv = this.normal.getHashCode();
+         return vv = 397 * vv ^ this.d, vv
```

#### 27. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L539-L555` → after: `L108-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L108-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L108-L111) · [Before (L539-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L539-L555)

```diff
-       addInPlace(zz) {
-         return this._x += zz._x, this._y += zz._y, this._z += zz._z, this._isDirty = !0, this
-       }
-       addInPlaceFromFloats(zz, tz, sz) {
-         return this._x += zz, this._y += tz, this._z += sz, this._isDirty = !0, this
-       }
-       add(zz) {
-         return new Nz(this._x + zz._x, this._y + zz._y, this._z + zz._z)
-       }
-       addToRef(zz, tz) {
-         return tz._x = this._x + zz._x, tz._y = this._y + zz._y, tz._z = this._z + zz._z, tz._isDirty = !0, tz
-       }
-       oFz(zz) {
-         return this._x -= zz._x, this._y -= zz._y, this._z -= zz._z, this._isDirty = !0, this
-       }
-       subtract(zz) {
- ... (1 more removed lines; see GitHub link above)
+       normalize() {
+         const vv = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
+         let zv = 0;
+         return 0 !== vv && (zv = 1 / vv), this.normal.x *= zv, this.normal.y *= zv, this.normal.z *= zv, this.d *= zv, this
```

#### 28. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L557-L558` → after: `L113-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L113-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L113-L125) · [Before (L557-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L557-L558)

```diff
-       subtractToRef(zz, tz) {
-         return this.subtractFromFloatsToRef(zz._x, zz._y, zz._z, tz)
+       transform(vv) {
+         const zv = Sv._TmpMatrix;
+         vv.invertToRef(zv);
+         const Pv = zv.m,
+           hv = this.normal.x,
+           ev = this.normal.y,
+           gv = this.normal.z,
+           pv = this.d,
+           dv = hv * Pv[0] + ev * Pv[1] + gv * Pv[2] + pv * Pv[3],
+           Nv = hv * Pv[4] + ev * Pv[5] + gv * Pv[6] + pv * Pv[7],
+           lv = hv * Pv[8] + ev * Pv[9] + gv * Pv[10] + pv * Pv[11],
+           Tv = hv * Pv[12] + ev * Pv[13] + gv * Pv[14] + pv * Pv[15];
+         return new Sv(dv, Nv, lv, Tv)
```

#### 29. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L560-L561` → after: `L127-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L127-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L127-L128) · [Before (L560-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L560-L561)

```diff
-       subtractFromFloats(zz, tz, sz) {
-         return new Nz(this._x - zz, this._y - tz, this._z - sz)
+       dotCoordinate(vv) {
+         return this.normal.x * vv.x + this.normal.y * vv.y + this.normal.z * vv.z + this.d
```

#### 30. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L563-L564` → after: `L130-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L130-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L130-L142) · [Before (L563-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L563-L564)

```diff
-       subtractFromFloatsToRef(zz, tz, sz, Fz) {
-         return Fz._x = this._x - zz, Fz._y = this._y - tz, Fz._z = this._z - sz, Fz._isDirty = !0, Fz
+       copyFromPoints(vv, zv, Pv) {
+         const hv = zv.x - vv.x,
+           Sv = zv.y - vv.y,
+           ev = zv.z - vv.z,
+           gv = Pv.x - vv.x,
+           pv = Pv.y - vv.y,
+           dv = Pv.z - vv.z,
+           Nv = Sv * dv - ev * pv,
+           lv = ev * gv - hv * dv,
+           Tv = hv * pv - Sv * gv,
+           Wv = Math.sqrt(Nv * Nv + lv * lv + Tv * Tv);
+         let wv;
+         return wv = 0 !== Wv ? 1 / Wv : 0, this.normal.x = Nv * wv, this.normal.y = lv * wv, this.normal.z = Tv * wv, this.d = -(this.normal.x * vv.x + this.normal.y * vv.y + this.normal.z * vv.z), this
```

#### 31. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L566-L567` → after: `L144-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L144-L145) · [Before (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L566-L567)

```diff
-       nt() {
-         return new Nz(-this._x, -this._y, -this._z)
+       isFrontFacingTo(vv, zv) {
+         return hv.l.Dot(this.normal, vv) <= zv
```

#### 32. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L569-L570` → after: `L147-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L147-L148) · [Before (L569-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L569-L570)

```diff
-       negateInPlace() {
-         return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
+       signedDistanceTo(vv) {
+         return hv.l.Dot(vv, this.normal) + this.d
```

#### 33. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L572-L573` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L150-L151) · [Before (L572-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L572-L573)

```diff
-       negateToRef(zz) {
-         return zz._x = -1 * this._x, zz._y = -1 * this._y, zz._z = -1 * this._z, zz._isDirty = !0, zz
+       static FromArray(vv) {
+         return new Sv(vv[0], vv[1], vv[2], vv[3])
```

#### 34. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L575-L576` → after: `L153-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L153-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L153-L155) · [Before (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L575-L576)

```diff
-       scaleInPlace(zz) {
-         return this._x *= zz, this._y *= zz, this._z *= zz, this._isDirty = !0, this
+       static FromPoints(vv, zv, Pv) {
+         const hv = new Sv(0, 0, 0, 0);
+         return hv.copyFromPoints(vv, zv, Pv), hv
```

#### 35. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L578-L579` → after: `L157-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L157-L159) · [Before (L578-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L578-L579)

```diff
-       scale(zz) {
-         return new Nz(this._x * zz, this._y * zz, this._z * zz)
+       static FromPositionAndNormal(vv, zv) {
+         const Pv = new Sv(0, 0, 0, 0);
+         return this.FromPositionAndNormalToRef(vv, zv, Pv)
```

#### 36. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L581-L582` → after: `L161-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L161-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L161-L162) · [Before (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L581-L582)

```diff
-       scaleToRef(zz, tz) {
-         return tz._x = this._x * zz, tz._y = this._y * zz, tz._z = this._z * zz, tz._isDirty = !0, tz
+       static FromPositionAndNormalToRef(vv, zv, Pv) {
+         return Pv.normal.Vzv(zv), Pv.normal.normalize(), Pv.d = -vv.dot(Pv.normal), Pv
```

#### 37. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L584-L592` → after: `L164-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L164-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L164-L166) · [Before (L584-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L584-L592)

```diff
-       getNormalToRef(zz) {
-         const tz = this.length();
-         let sz = Math.acos(this._y / tz);
-         const Fz = Math.atan2(this._z, this._x);
-         sz > Math.PI / 2 ? sz -= Math.PI / 2 : sz += Math.PI / 2;
-         const Wz = tz * Math.sin(sz) * Math.cos(Fz),
-           Xz = tz * Math.cos(sz),
-           Oz = tz * Math.sin(sz) * Math.sin(Fz);
-         return zz.set(Wz, Xz, Oz), zz
+       static SignedDistanceToPlaneFromPositionAndNormal(vv, zv, Pv) {
+         const Sv = -(zv.x * vv.x + zv.y * vv.y + zv.z * vv.z);
+         return hv.l.Dot(Pv, zv) + Sv
```

#### 38. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L594-L605` → after: `L168-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L168-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L168-L190) · [Before (L594-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L594-L605)

```diff
-       applyRotationQuaternionToRef(zz, tz) {
-         const sz = this._x,
-           Fz = this._y,
-           Wz = this._z,
-           Xz = zz._x,
-           Oz = zz._y,
-           oz = zz._z,
-           vz = zz._w,
-           Uz = 2 * (Oz * Wz - oz * Fz),
-           Kz = 2 * (oz * sz - Xz * Wz),
-           uz = 2 * (Xz * Fz - Oz * sz);
-         return tz._x = sz + vz * Uz + Oz * uz - oz * Kz, tz._y = Fz + vz * Kz + oz * Uz - Xz * uz, tz._z = Wz + vz * uz + Xz * Kz - Oz * Uz, tz._isDirty = !0, tz
+     }
+     Sv._TmpMatrix = hv.c.Identity()
+   },
+   36591: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       Matrix: () => hv.c,
+       Quaternion: () => hv.d,
+       RegisterMathVector: () => hv.e,
+       TmpVectors: () => hv.i,
+       Vector2: () => hv.j,
+       fa: () => hv.l,
+       Vector4: () => hv.m
+     });
+     var hv = Pv(36594);
+     (0, hv.e)()
+   },
+ ... (7 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L607-L608` → after: `L192-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L192-L193) · [Before (L607-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L607-L608)

```diff
-       applyRotationQuaternionInPlace(zz) {
-         return this.applyRotationQuaternionToRef(zz, this)
+       toGlobal(vv, zv) {
+         return new hv(this.x * vv, this.y * zv, this.width * vv, this.height * zv)
```

#### 40. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L610-L611` → after: `L195-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L195-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L195-L196) · [Before (L610-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L610-L611)

```diff
-       applyRotationQuaternion(zz) {
-         return this.applyRotationQuaternionToRef(zz, new Nz)
+       toGlobalToRef(vv, zv, Pv) {
+         return Pv.x = this.x * vv, Pv.y = this.y * zv, Pv.width = this.width * vv, Pv.height = this.height * zv, this
```

#### 41. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L613-L614` → after: `L198-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L198-L199) · [Before (L613-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L613-L614)

```diff
-       scaleAndAddToRef(zz, tz) {
-         return tz._x += this._x * zz, tz._y += this._y * zz, tz._z += this._z * zz, tz._isDirty = !0, tz
+       clone() {
+         return new hv(this.x, this.y, this.width, this.height)
```

#### 42. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L616-L617` → after: `L201-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L201-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L201-L214) · [Before (L616-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L616-L617)

```diff
-       projectOnPlane(zz, tz) {
-         return this.projectOnPlaneToRef(zz, tz, new Nz)
+     }
+   },
+   41067: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => Nv
+     });
+     var hv = Pv(36594),
+       Sv = Pv(36620),
+       ev = Pv(39284),
+       gv = Pv(36599),
+       pv = Pv(36751);
+     class dv {
+       constructor(vv, zv, Pv, hv) {
+         this.name = vv, this.worldAxisForNormal = zv, this.worldAxisForFileX = Pv, this.worldAxisForFileY = hv
```

#### 43. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L619-L629` → after: `L216-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L216-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L216-L284) · [Before (L619-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L619-L629)

```diff
-       projectOnPlaneToRef(zz, tz, sz) {
-         const Fz = zz.normal,
-           Wz = zz.d,
-           Xz = gz.XD[0];
-         this.subtractToRef(tz, Xz), Xz.normalize();
-         const Oz = Nz.Dot(Xz, Fz);
-         if (Math.abs(Oz) < 1e-10) sz.Z6(1 / 0);
-         else {
-           const zz = -(Nz.Dot(tz, Fz) + Wz) / Oz,
-             oz = Xz.scaleInPlace(zz);
-           tz.addToRef(oz, sz)
+     }
+     class Nv {
+       static _NearestPow2Floor(vv) {
+         return vv <= 1 ? 1 : 1 << Math.floor(Math.log2(vv))
+       }
+       static ConvertCubeMapTextureToSphericalPolynomial(vv) {
+         if (!vv.isCube) return null;
+         vv.rD()?.ma().flushFramebuffer();
+         const zv = vv.getSize().width,
+           Pv = vv._sphericalPolynomialTargetSize,
+           hv = Pv > 0 ? this._NearestPow2Floor(Pv) : 0,
+           Sv = !vv.noMipmap && !0 === vv._texture?.generateMipMaps,
+           ev = hv > 0 && hv < zv && Sv,
+           gv = ev ? Math.max(0, Math.round(Math.log2(zv / hv))) : 0,
+           pv = ev ? Math.max(1, Math.floor(zv / Math.pow(2, gv))) : zv,
+           dv = vv.readPixels(0, gv, void 0, !1),
+ ... (53 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L633-L659` → after: `L291-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L291-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L291-L341) · [Before (L633-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L633-L659)

```diff
-       equals(zz) {
-         return zz && this._x === zz._x && this._y === zz._y && this._z === zz._z
-       }
-       equalsWithEpsilon(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fz.c;
-         return zz && (0, oz.WithinEpsilon)(this._x, zz._x, tz) && (0, oz.WithinEpsilon)(this._y, zz._y, tz) && (0, oz.WithinEpsilon)(this._z, zz._z, tz)
-       }
-       wOz(zz, tz, sz) {
-         return this._x === zz && this._y === tz && this._z === sz
-       }
-       multiplyInPlace(zz) {
-         return this._x *= zz._x, this._y *= zz._y, this._z *= zz._z, this._isDirty = !0, this
-       }
-       multiply(zz) {
-         return this.multiplyByFloats(zz._x, zz._y, zz._z)
-       }
- ... (11 more removed lines; see GitHub link above)
+       static ConvertCubeMapToSphericalPolynomial(vv) {
+         let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         const Pv = zv > 0 ? this._NearestPow2Floor(zv) : 0;
+         if (Pv > 0 && vv.size > Pv) {
+           const zv = 5 === vv.format ? 4 : 3,
+             hv = ["right", "left", "up", "down", "front", "back"],
+             Sv = {};
+           for (const ev of hv) Sv[ev] = this._DownsampleFace(vv[ev], vv.size, Pv, zv);
+           vv = {
+             ...vv,
+             ...Sv,
+             size: Pv
+           }
+         }
+         const hv = new ev.d;
+         let dv = 0;
+ ... (35 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L661-L662` → after: `L343-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L343-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L343-L402) · [Before (L661-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L661-L662)

```diff
-       divideInPlace(zz) {
-         return this._x = this._x / zz._x, this._y = this._y / zz._y, this._z = this._z / zz._z, this._isDirty = !0, this
+     }
+     Nv._FileFaces = [new dv("right", new hv.l(1, 0, 0), new hv.l(0, 0, -1), new hv.l(0, -1, 0)), new dv("left", new hv.l(-1, 0, 0), new hv.l(0, 0, 1), new hv.l(0, -1, 0)), new dv("up", new hv.l(0, 1, 0), new hv.l(1, 0, 0), new hv.l(0, 0, 1)), new dv("down", new hv.l(0, -1, 0), ne … [truncated]
+   },
+   40846: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => hv.i,
+       e: () => hv.n
+     });
+     var hv = Pv(39338);
+     (0, hv.v)()
+   },
+   37431: (vv, zv, Pv) => {
+     function hv() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (vv => {
+         const zv = 16 * Math.random() | 0;
+         return ("x" === vv ? zv : 3 & zv | 8).toString(16)
+ ... (44 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L664-L665` → after: `L404-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L404-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L404-L406) · [Before (L664-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L664-L665)

```diff
-       minimizeInPlace(zz) {
-         return this.minimizeInPlaceFromFloats(zz._x, zz._y, zz._z)
+       static async EncodeTextureToRGBD(vv, zv) {
+         let hv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         return zv.ma().isWebGPU ? await Pv.e(334).then((() => Pv(60827))) : await Pv.e(316).then((() => Pv(60818))), await (0, Sv.b)("rgbdEncode", vv, zv, hv, 1, 5)
```

#### 47. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L667-L668` → after: `L408-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L408-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L408-L443) · [Before (L667-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L667-L668)

```diff
-       maximizeInPlace(zz) {
-         return this.maximizeInPlaceFromFloats(zz._x, zz._y, zz._z)
+     }
+   },
+   60565: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       AsyncLoop: () => hv.d,
+       RegisterTools: () => hv.e,
+       Tools: () => hv.h,
+       className: () => hv.i
+     });
+     var hv = Pv(39399);
+     (0, hv.e)()
+   },
+   41174: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => Sv
+     });
+ ... (20 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L670-L671` → after: `L445-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L445-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L445-L451) · [Before (L670-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L670-L671)

```diff
-       minimizeInPlaceFromFloats(zz, tz, sz) {
-         return zz < this._x && (this.x = zz), tz < this._y && (this.y = tz), sz < this._z && (this.z = sz), this
+       _execute(vv, zv) {
+         vv.idle = !1, vv.workerPromise.then((Pv => {
+           zv(Pv, (() => {
+             const zv = this._pendingActions.shift();
+             zv ? this._execute(vv, zv) : vv.idle = !0
+           }))
+         }))
```

#### 49. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L673-L674` → after: `L453-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L453-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L453-L479) · [Before (L673-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L673-L674)

```diff
-       maximizeInPlaceFromFloats(zz, tz, sz) {
-         return zz > this._x && (this.x = zz), tz > this._y && (this.y = tz), sz > this._z && (this.z = sz), this
+     }
+     class Sv extends hv {
+       constructor(vv, zv) {
+         let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Sv.DefaultOptions;
+         super([]), this._maxWorkers = vv, this._createWorkerAsync = zv, this._options = Pv
+       }
+       push(vv) {
+         if (!this._executeOnIdleWorker(vv))
+           if (this._workerInfos.length < this._maxWorkers) {
+             const zv = {
+               workerPromise: this._createWorkerAsync(),
+               idle: !1
+             };
+             this._workerInfos.push(zv), this._execute(zv, vv)
+           } else this._pendingActions.push(vv)
+       }
+ ... (11 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L676-L681` → after: `L481-L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L481-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L481-L671) · [Before (L676-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L676-L681)

```diff
-       isNonUniformWithinEpsilon(zz) {
-         const tz = Math.abs(this._x),
-           sz = Math.abs(this._y);
-         if (!(0, oz.WithinEpsilon)(tz, sz, zz)) return !0;
-         const Fz = Math.abs(this._z);
-         return !(0, oz.WithinEpsilon)(tz, Fz, zz) || !(0, oz.WithinEpsilon)(sz, Fz, zz)
+     }
+     Sv.DefaultOptions = {
+       idleTimeElapsedBeforeRelease: 1e3
+     }
+   },
+   60598: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       AbstractThreeMfSerializer: () => Jp,
+       BVHExporter: () => ng,
+       ContentTypeFileName: () => wp,
+       DefaultXmlSerializerFormatOptions: () => Hg,
+       DefaultXmlSerializerNumberOptions: () => Lg,
+       EXT_lights_area: () => CS,
+       EXT_mesh_gpu_instancing: () => Zh,
+       EXT_texture_avif: () => Sg,
+       EXT_texture_webp: () => vg,
+ ... (175 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L683-L686` → after: `L673-L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L673-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L673-L679) · [Before (L683-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L683-L686)

```diff
-       get isNonUniform() {
-         const zz = Math.abs(this._x);
-         if (zz !== Math.abs(this._y)) return !0;
-         return zz !== Math.abs(this._z)
+       static MTL(vv) {
+         let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
+         const Pv = [],
+           hv = vv.material;
+         Pv.push("newmtl " + zv), Pv.push("  Ns " + hv.specularPower.toFixed(4)), Pv.push("  Ni 1.5000"), Pv.push("  d " + hv.alpha.toFixed(4)), Pv.push("  Tr 0.0000"), Pv.push("  Tf 1.0000 1.0000 1.0000"), Pv.push("  illum 2"), Pv.push("  Ka " + hv.ambientColor.r.toFixed(4) + " " … [truncated]
+         hv.ambientTexture && Pv.push("  map_Ka " + hv.ambientTexture.name), hv.diffuseTexture && Pv.push("  map_Kd " + hv.diffuseTexture.name), hv.specularTexture && Pv.push("  map_Ks " + hv.specularTexture.name), hv.bumpTexture && Pv.push("  map_bump -imfchan z " + hv.bumpTextur … [truncated]
+         return Pv.join("\n")
```

#### 52. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L688-L689` → after: `L681-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L681-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L681-L698) · [Before (L688-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L688-L689)

```diff
-       floorToRef(zz) {
-         return zz._x = Math.floor(this._x), zz._y = Math.floor(this._y), zz._z = Math.floor(this._z), zz._isDirty = !0, zz
+     }
+     var pv = 0,
+       dv = Pv(40846);
+     class Nv {
+       constructor() {
+         this.files = {}
+       }
+       get glTFFiles() {
+         return this.files
+       }
+       downloadFiles() {
+         for (const vv in this.files) {
+           const zv = this.files[vv],
+             Pv = new Blob([zv], {
+               type: (0, dv.c)(vv)
+             });
+ ... (2 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L691-L692` → after: `L700-L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L700-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L700-L762) · [Before (L691-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L691-L692)

```diff
-       floor() {
-         return new Nz(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
+     }
+     var lv = Pv(40454),
+       Tv = Pv(40408),
+       Wv = Pv(40935),
+       wv = Pv(40410),
+       av = Pv(39127),
+       sv = Pv(36615),
+       Cv = Pv(36745),
+       iv = Pv(36620);
+     const cv = iv.HighestCommonFactor,
+       Gv = {
+         ...iv,
+         TwoPi: 2 * Math.PI,
+         Sign: Math.sign,
+         Log2: Math.log2,
+         HCF: cv
+ ... (47 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L694-L695` → after: `L764-L994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L764-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L764-L994) · [Before (L694-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L694-L695)

```diff
-       fractToRef(zz) {
-         return zz._x = this._x - Math.floor(this._x), zz._y = this._y - Math.floor(this._y), zz._z = this._z - Math.floor(this._z), zz._isDirty = !0, zz
+     }
+     let yv = (() => {
+       var vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv;
+       let lv, Tv, Wv, wv, av, sv, Cv, iv, cv, Gv = Hv.d,
+         mv = [],
+         jv = [],
+         fv = [],
+         Fv = [],
+         Yv = [],
+         Dv = [],
+         Kv = [],
+         Vv = [],
+         Uv = [],
+         Rv = [],
+         xv = [],
+         tv = [],
+ ... (215 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L697-L698` → after: `L996-L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L996-L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L996-L1392) · [Before (L697-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L697-L698)

```diff
-       fract() {
-         return new Nz(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
+     }
+     let vz = (() => {
+       var vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv;
+       let lv, Tv, Wv, wv, av, sv, Cv, iv, cv, Gv, mv, jv, fv, Fv, Yv = Hv.d,
+         Dv = [],
+         Kv = [],
+         Vv = [],
+         Uv = [],
+         Rv = [],
+         xv = [],
+         tv = [],
+         qv = [],
+         Iv = [],
+         Qv = [],
+         Zv = [],
+         Av = [],
+ ... (381 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L700-L701` → after: `L1394-L1602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1394-L1602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L1394-L1602) · [Before (L700-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L700-L701)

```diff
-       length() {
-         return Math.sqrt(this.lengthSquared())
+     }
+     let Pz = (() => {
+       var vv, zv, Pv, hv;
+       let Sv, ev, gv, pv, dv, Nv, lv, Tv = Hv.d,
+         Wv = [],
+         wv = [],
+         av = [],
+         sv = [],
+         Cv = [],
+         iv = [],
+         cv = [],
+         Gv = [],
+         mv = [],
+         jv = [],
+         fv = [],
+         Fv = [],
+ ... (193 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L703-L704` → after: `L1604-L1785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1604-L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L1604-L1785) · [Before (L703-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L703-L704)

```diff
-       lengthSquared() {
-         return this._x * this._x + this._y * this._y + this._z * this._z
+     }
+     let Sz = (() => {
+       var vv, zv, Pv, hv;
+       let Sv, ev, gv, pv, dv, Nv = Hv.d,
+         lv = [],
+         Tv = [],
+         Wv = [],
+         wv = [],
+         av = [],
+         sv = [],
+         Cv = [],
+         iv = [],
+         cv = [],
+         Gv = [];
+       return vv = class extends Nv {
+         get isEnabled() {
+ ... (166 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L706-L707` → after: `L1787-L2054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1787-L2054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L1787-L2054) · [Before (L706-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L706-L707)

```diff
-       get hasAZeroComponent() {
-         return this._x * this._y * this._z === 0
+     }
+     let gz = (() => {
+       var vv, zv, Pv, hv, Sv, ev, gv, pv;
+       let dv, Nv, lv, Tv, Wv, wv, av, sv, Cv, iv = Hv.d,
+         cv = [],
+         Gv = [],
+         mv = [],
+         jv = [],
+         fv = [],
+         Fv = [],
+         Yv = [],
+         Dv = [],
+         Kv = [],
+         Vv = [],
+         Uv = [],
+         Rv = [],
+ ... (252 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L709-L710` → after: `L2056-L2841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R2056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L2056-L2841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L2056-L2841) · [Before (L709-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L709-L710)

```diff
-       normalize() {
-         return this.normalizeFromLength(this.length())
+     }
+     let dz = (() => {
+       var vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv, lv, Tv, Wv, wv, av, sv, Cv;
+       let iv, cv, Gv, mv, jv, fv, Fv, Yv, Dv, Kv, Vv, Uv, Rv, xv, tv, qv, Iv, Qv, Av, Lv, Mv, yv, Bv, Ev, ov, bv, kv, uv, vz, zz, Pz = Hv.d,
+         hz = [],
+         Sz = [],
+         ez = [],
+         gz = [],
+         dz = [],
+         Nz = [],
+         lz = [],
+         Tz = [],
+         Wz = [],
+         wz = [],
+         az = [],
+         sz = [],
+ ... (770 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L712-L715` → after: `L2843-L2844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R2843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L2843-L2844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L2843-L2844) · [Before (L712-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L712-L715)

```diff
-       reorderInPlace(zz) {
-         if ("xyz" === (zz = zz.toLowerCase())) return this;
-         const tz = gz.XD[0].vsz(this);
-         return this.x = tz[zz[0]], this.y = tz[zz[1]], this.z = tz[zz[2]], this
+       reset() {
+         super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
```

#### 61. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L717-L718` → after: `L2846-L3409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R2846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L2846-L3409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L2846-L3409) · [Before (L717-L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L717-L718)

```diff
-       rotateByQuaternionToRef(zz, tz) {
-         return zz.toRotationMatrix(gz.Matrix[0]), Nz.TransformCoordinatesToRef(this, gz.Matrix[0], tz), tz
+     }
+     class jz extends((0, Cz.d)(bv.d)) {}
+     let fz = (() => {
+       var vv, zv;
+       let hv, Sv = jz,
+         gv = [],
+         pv = [];
+       return vv = class extends Sv {
+         get realTimeFiltering() {
+           return this._realTimeFiltering
+         }
+         set realTimeFiltering(vv) {
+           this._realTimeFiltering = vv, this.xvv(1)
+         }
+         get realTimeFilteringQuality() {
+           return this._realTimeFilteringQuality
+ ... (548 more added lines; see GitHub link above)
```

#### 62. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L720-L721` → after: `L3411-L3423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3411-L3423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3411-L3423) · [Before (L720-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L720-L721)

```diff
-       rotateByQuaternionAroundPointToRef(zz, tz, sz) {
-         return this.subtractToRef(tz, gz.XD[0]), gz.XD[0].rotateByQuaternionToRef(zz, gz.XD[0]), tz.addToRef(gz.XD[0], sz), sz
+       _rebuild() {
+         let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           Pv = arguments.length > 2 ? arguments[2] : void 0;
+         if (this._count < 1 || vv) return;
+         const hv = this._createInternaTextureIndexMapping();
+         this.releaseInternalTextures(), this._createInternalTextures(), zv && (this._releaseTextures(), this._createTextures(Pv));
+         const Sv = this._renderTarget.textures;
+         for (let ev = 0; ev < Sv.length; ev++) {
+           const vv = this._textures[ev];
+           void 0 !== hv[ev] && this._renderTarget.setTexture(Sv[hv[ev]], ev), vv._texture = Sv[ev], vv._texture && (vv._noMipmap = !vv._texture.useMipMaps, vv._useSRGBBuffer = vv._texture._useSRGBBuffer)
+         }
+         1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
```

#### 63. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L723-L724` → after: `L3425-L3426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3425-L3426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3425-L3426) · [Before (L723-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L723-L724)

```diff
-       cross(zz) {
-         return Nz.CrossToRef(this, zz, new Nz)
+       _createInternalTextures() {
+         this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
```

#### 64. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L726-L727` → after: `L3428-L3430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3428-L3430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3428-L3430) · [Before (L726-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L726-L727)

```diff
-       normalizeFromLength(zz) {
-         return 0 === zz || 1 === zz ? this : this.scaleInPlace(1 / zz)
+       _releaseTextures() {
+         if (this._textures)
+           for (let vv = 0; vv < this._textures.length; vv++) this._textures[vv]._texture = null, this._textures[vv].dispose()
```

#### 65. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L729-L730` → after: `L3432-L3438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3432-L3438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3432-L3438) · [Before (L729-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L729-L730)

```diff
-       normalizeToNew() {
-         return this.normalizeToRef(new Nz)
+       _createTextures(vv) {
+         const zv = this._renderTarget.textures;
+         this._textures = [];
+         for (let Pv = 0; Pv < zv.length; Pv++) {
+           const hv = new Vv.e(null, this.rD());
+           vv?.[Pv] && (hv.name = vv[Pv]), hv._texture = zv[Pv], hv._texture && (hv._noMipmap = !hv._texture.useMipMaps, hv._useSRGBBuffer = hv._texture._useSRGBBuffer), this._textures.push(hv)
+         }
```

#### 66. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L732-L734` → after: `L3440-L3445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3440-L3445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3440-L3445) · [Before (L732-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L732-L734)

```diff
-       normalizeToRef(zz) {
-         const tz = this.length();
-         return 0 === tz || 1 === tz ? (zz._x = this._x, zz._y = this._y, zz._z = this._z, zz._isDirty = !0, zz) : this.scaleToRef(1 / tz, zz)
+       setInternalTexture(vv, zv) {
+         let Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+         if (this.renderTarget && (0 === zv && (this._texture = vv), this.renderTarget.setTexture(vv, zv, Pv), this.textures[zv] || (this.textures[zv] = new Vv.e(null, this.rD()), this.textures[zv].name = this._textureNames?.[zv] ?? this.textures[zv].name), this.textures[zv]._text … [truncated]
+           let Pv;
+           Pv = vv.is2DArray ? 35866 : vv.isCube ? 34067 : vv.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[zv] = Pv
+         }
```

#### 67. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L736-L801` → after: `L3447-L3483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3447-L3483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3447-L3483) · [Before (L736-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L736-L801)

```diff
-       clone() {
-         return new Nz(this._x, this._y, this._z)
-       }
-       vsz(zz) {
-         return this.m_(zz._x, zz._y, zz._z)
-       }
-       m_(zz, tz, sz) {
-         return this._x = zz, this._y = tz, this._z = sz, this._isDirty = !0, this
-       }
-       set(zz, tz, sz) {
-         return this.m_(zz, tz, sz)
-       }
-       Z6(zz) {
-         return this._x = this._y = this._z = zz, this._isDirty = !0, this
-       }
-       static GetClipFactor(zz, tz, sz, Fz) {
- ... (50 more removed lines; see GitHub link above)
+       setLayerAndFaceIndex(vv) {
+         let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
+           Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
+         this.textures[vv] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[vv] = zv), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[vv] = Pv), this.renderTarget.setLayerAndFace … [truncated]
+       }
+       setLayerAndFaceIndices(vv, zv) {
+         this.renderTarget && (this._multiRenderTargetOptions.layerIndex = vv, this._multiRenderTargetOptions.faceIndex = zv, this.renderTarget.setLayerAndFaceIndices(vv, zv))
+       }
+       get samples() {
+         return this._samples
+       }
+       set samples(vv) {
+         this._renderTarget ? this._samples = this._renderTarget.setSamples(vv) : this._samples = vv
+       }
+       resize(vv) {
+         this._processSizeParameter(vv), this._rebuild(!1, void 0, this._textureNames)
+ ... (21 more added lines; see GitHub link above)
```

#### 68. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L803-L1109` → after: `L3485-L3490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3485-L3490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3485-L3490) · [Before (L803-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L803-L1109)

```diff
-       static SmoothToRef(zz, tz, sz, Fz, Wz) {
-         return Nz.SlerpToRef(zz, tz, 0 === Fz ? 1 : sz / Fz, Wz), Wz
-       }
-       static FromArray(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return new Nz(zz[tz], zz[tz + 1], zz[tz + 2])
-       }
-       static FromFloatArray(zz, tz) {
-         return Nz.FromArray(zz, tz)
-       }
-       static FromArrayToRef(zz, tz, sz) {
-         return sz._x = zz[tz], sz._y = zz[tz + 1], sz._z = zz[tz + 2], sz._isDirty = !0, sz
-       }
-       static FromFloatArrayToRef(zz, tz, sz) {
-         return Nz.FromArrayToRef(zz, tz, sz)
-       }
- ... (291 more removed lines; see GitHub link above)
+       releaseInternalTextures() {
+         const vv = this._renderTarget?.textures;
+         if (vv) {
+           for (let zv = vv.length - 1; zv >= 0; zv--) this._textures[zv]._texture = null;
+           this._renderTarget?.dispose(), this._renderTarget = null
+         }
```

#### 69. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1112` → after: `L3493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3493) · [Before (L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1112)

```diff
-     Nz._V8PerformanceHack = new Nz(.5, .5, .5), Nz._UpReadOnly = Nz.Up(), Nz._DownReadOnly = Nz.Down(), Nz._LeftHandedForwardReadOnly = Nz.Forward(!1), Nz._RightHandedForwardReadOnly = Nz.Forward(!0), Nz._LeftHandedBackwardReadOnly = Nz.Backward(!1), Nz._RightHandedBackwardReadOn … [truncated]
+     var tz = Pv(39477);
```

#### 70. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1114-L1405` → after: `L3495-L3496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3495-L3496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3495-L3496) · [Before (L1114-L1405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1114-L1405)

```diff
-       get x() {
-         return this._x
-       }
-       set x(zz) {
-         this._x = zz, this._isDirty = !0
-       }
-       get y() {
-         return this._y
-       }
-       set y(zz) {
-         this._y = zz, this._isDirty = !0
-       }
-       get z() {
-         return this._z
-       }
-       set z(zz) {
- ... (276 more removed lines; see GitHub link above)
+       constructor(vv) {
+         this.name = tz.d.NAME_GEOMETRYBUFFERRENDERER, this.Is = vv
```

#### 71. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1407-L1409` → after: `L3498-L3499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3498-L3499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3498-L3499) · [Before (L1407-L1409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1407-L1409)

```diff
-       static FromVector3(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return new bz(zz._x, zz._y, zz._z, tz)
+       register() {
+         this.Is._gatherRenderTargetsStage.registerStep(tz.d.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
```

#### 72. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1411-L1412` → after: `L3501-L3504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3501-L3504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3501-L3504) · [Before (L1411-L1412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1411-L1412)

```diff
-       static Dot(zz, tz) {
-         return zz.x * tz.x + zz.y * tz.y + zz.z * tz.z + zz.w * tz.w
+       rebuild() {}
+       dispose() {}
+       _gatherRenderTargets(vv) {
+         this.Is._geometryBufferRenderer && vv.push(this.Is._geometryBufferRenderer.getGBuffer())
```

#### 73. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1415` → after: `L3507-L3513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3507-L3513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3507-L3513) · [Before (L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1415)

```diff
-     bz._V8PerformanceHack = new bz(.5, .5, .5, .5), bz._ZeroReadOnly = bz.Zero();
+     let Iz = !1;
+     var Qz;
+     ! function(vv) {
+       vv[vv.Small = 0] = "Small", vv[vv.Medium = 1] = "Medium", vv[vv.Large = 2] = "Large", vv[vv.ExtraLarge = 3] = "ExtraLarge"
+     }(Qz || (Qz = {}));
+     const Zz = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
+       Az = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", … [truncated]
```

#### 74. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1417-L1514` → after: `L3515-L3577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3515-L3577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3515-L3577) · [Before (L1417-L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1417-L1514)

```diff
-       get x() {
-         return this._x
-       }
-       set x(zz) {
-         this._x = zz, this._isDirty = !0
-       }
-       get y() {
-         return this._y
-       }
-       set y(zz) {
-         this._y = zz, this._isDirty = !0
-       }
-       get z() {
-         return this._z
-       }
-       set z(zz) {
- ... (82 more removed lines; see GitHub link above)
+       get renderTransparentMeshes() {
+         return this._renderTransparentMeshes
+       }
+       set renderTransparentMeshes(vv) {
+         if (vv && this._enableMeshBlendTag && !this._scene.ma().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
+         this._renderTransparentMeshes = vv
+       }
+       get normalsAreUnsigned() {
+         return this._normalsAreUnsigned
+       }
+       _linkPrePassRenderer(vv) {
+         if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
+         this._linkedWithPrePass = !0, this._prePassRenderer = vv, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
+       }
+       _unlinkPrePassRenderer() {
+         this._linkedWithPrePass = !1, this._createRenderTargets()
+ ... (47 more added lines; see GitHub link above)
```

#### 75. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1516-L1517` → after: `L3579-L3580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3579-L3580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3579-L3580) · [Before (L1516-L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1516-L1517)

```diff
-       subtract(zz) {
-         return new wz(this._x - zz._x, this._y - zz._y, this._z - zz._z, this._w - zz._w)
+       get enableDepth() {
+         return this._enableDepth
```

#### 76. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1519-L1520` → after: `L3582-L3583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3582-L3583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3582-L3583) · [Before (L1519-L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1519-L1520)

```diff
-       oFz(zz) {
-         return this._x -= zz._x, this._y -= zz._y, this._z -= zz._z, this._w -= zz._w, this._isDirty = !0, this
+       set enableDepth(vv) {
+         this._enableDepth = vv, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
```

#### 77. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1522-L1523` → after: `L3585-L3586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3585-L3586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3585-L3586) · [Before (L1522-L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1522-L1523)

```diff
-       scale(zz) {
-         return new wz(this._x * zz, this._y * zz, this._z * zz, this._w * zz)
+       get enableNormal() {
+         return this._enableNormal
```

#### 78. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1525-L1526` → after: `L3588-L3589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3588-L3589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3588-L3589) · [Before (L1525-L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1525-L1526)

```diff
-       scaleToRef(zz, tz) {
-         return tz._x = this._x * zz, tz._y = this._y * zz, tz._z = this._z * zz, tz._w = this._w * zz, tz._isDirty = !0, tz
+       set enableNormal(vv) {
+         this._enableNormal = vv, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
```

#### 79. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1528-L1529` → after: `L3591-L3592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3591-L3592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3591-L3592) · [Before (L1528-L1529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1528-L1529)

```diff
-       scaleInPlace(zz) {
-         return this._x *= zz, this._y *= zz, this._z *= zz, this._w *= zz, this._isDirty = !0, this
+       get enablePosition() {
+         return this._enablePosition
```

#### 80. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1531-L1532` → after: `L3594-L3595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3594-L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3594-L3595) · [Before (L1531-L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1531-L1532)

```diff
-       scaleAndAddToRef(zz, tz) {
-         return tz._x += this._x * zz, tz._y += this._y * zz, tz._z += this._z * zz, tz._w += this._w * zz, tz._isDirty = !0, tz
+       set enablePosition(vv) {
+         this._enablePosition = vv, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
```

#### 81. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1534-L1536` → after: `L3597-L3598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3597-L3598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3597-L3598) · [Before (L1534-L1536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1534-L1536)

```diff
-       multiply(zz) {
-         const tz = new wz(0, 0, 0, 1);
-         return this.multiplyToRef(zz, tz), tz
+       get enableVelocity() {
+         return this._enableVelocity
```

#### 82. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1538-L1543` → after: `L3600-L3601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3600-L3601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3600-L3601) · [Before (L1538-L1543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1538-L1543)

```diff
-       multiplyToRef(zz, tz) {
-         const sz = this._x * zz._w + this._y * zz._z - this._z * zz._y + this._w * zz._x,
-           Fz = -this._x * zz._z + this._y * zz._w + this._z * zz._x + this._w * zz._y,
-           Wz = this._x * zz._y - this._y * zz._x + this._z * zz._w + this._w * zz._z,
-           Xz = -this._x * zz._x - this._y * zz._y - this._z * zz._z + this._w * zz._w;
-         return tz.m_(sz, Fz, Wz, Xz), tz
+       set enableVelocity(vv) {
+         this._enableVelocity = vv, vv || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = vv
```

#### 83. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1545-L1546` → after: `L3603-L3604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3603-L3604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3603-L3604) · [Before (L1545-L1546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1545-L1546)

```diff
-       multiplyInPlace(zz) {
-         return this.multiplyToRef(zz, this)
+       get enableVelocityLinear() {
+         return this._enableVelocityLinear
```

#### 84. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1548-L1549` → after: `L3606-L3607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3606-L3607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3606-L3607) · [Before (L1548-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1548-L1549)

```diff
-       multiplyByFloats(zz, tz, sz, Fz) {
-         return this._x *= zz, this._y *= tz, this._z *= sz, this._w *= Fz, this._isDirty = !0, this
+       set enableVelocityLinear(vv) {
+         this._enableVelocityLinear = vv, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
```

#### 85. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1551-L1552` → after: `L3609-L3610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3609-L3610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3609-L3610) · [Before (L1551-L1552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1551-L1552)

```diff
-       divide(zz) {
-         throw new ReferenceError("Can not divide a quaternion")
+       get enableReflectivity() {
+         return this._enableReflectivity
```

#### 86. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1554-L1555` → after: `L3612-L3613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3612-L3613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3612-L3613) · [Before (L1554-L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1554-L1555)

```diff
-       divideToRef(zz, tz) {
-         throw new ReferenceError("Can not divide a quaternion")
+       set enableReflectivity(vv) {
+         this._enableReflectivity = vv, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
```

#### 87. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1557-L1558` → after: `L3615-L3616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3615-L3616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3615-L3616) · [Before (L1557-L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1557-L1558)

```diff
-       divideInPlace(zz) {
-         throw new ReferenceError("Can not divide a quaternion")
+       get enableScreenspaceDepth() {
+         return this._enableScreenspaceDepth
```

#### 88. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1560-L1561` → after: `L3618-L3619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3618-L3619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3618-L3619) · [Before (L1560-L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1560-L1561)

```diff
-       minimizeInPlace() {
-         throw new ReferenceError("Can not minimize a quaternion")
+       set enableScreenspaceDepth(vv) {
+         this._enableScreenspaceDepth = vv, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
```

#### 89. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1563-L1564` → after: `L3621-L3622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3621-L3622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3621-L3622) · [Before (L1563-L1564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1563-L1564)

```diff
-       minimizeInPlaceFromFloats() {
-         throw new ReferenceError("Can not minimize a quaternion")
+       get enableIrradiance() {
+         return this._enableIrradiance
```

#### 90. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1566-L1567` → after: `L3624-L3625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3624-L3625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3624-L3625) · [Before (L1566-L1567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1566-L1567)

```diff
-       maximizeInPlace() {
-         throw new ReferenceError("Can not maximize a quaternion")
+       set enableIrradiance(vv) {
+         this._enableIrradiance = vv, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
```

#### 91. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1569-L1570` → after: `L3627-L3628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3627-L3628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3627-L3628) · [Before (L1569-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1569-L1570)

```diff
-       maximizeInPlaceFromFloats() {
-         throw new ReferenceError("Can not maximize a quaternion")
+       get enableObjectId() {
+         return this._enableObjectId
```

#### 92. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1572-L1573` → after: `L3630-L3661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3630-L3661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3630-L3661) · [Before (L1572-L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1572-L1573)

```diff
-       nt() {
-         return this.negateToRef(new wz)
+       set enableObjectId(vv) {
+         if (vv && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
+         if (vv && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
+         if (vv && !this._enableObjectId && !this._linkedWithPrePass) {
+           const vv = this._scene.ma(),
+             zv = Math.min(vv.getCaps().maxDrawBuffers ?? 1, 8),
+             Pv = this._assignRenderTargetIndices()[0] + 1;
+           if (vv.getCaps().drawBuffersExtension && Pv > zv) throw new Error(`GeometryBufferRenderer: ${Pv} color attachments were requested, but this engine supports at most ${zv}`)
+         }
+         this._enableObjectId = vv, vv || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
+       }
+       get enableMeshBlendingTag() {
+         return this._enableMeshBlendTag
+       }
+       set enableMeshBlendingTag(vv) {
+         if (this._enableMeshBlendTag !== vv) {
+ ... (16 more added lines; see GitHub link above)
```

#### 93. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1575-L1576` → after: `L3663-L3664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3663-L3664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3663-L3664) · [Before (L1575-L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1575-L1576)

```diff
-       negateInPlace() {
-         return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
+       get Is() {
+         return this._scene
```

#### 94. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1578-L1579` → after: `L3666-L3667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3666-L3667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3666-L3667) · [Before (L1578-L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1578-L1579)

```diff
-       negateToRef(zz) {
-         return zz._x = -this._x, zz._y = -this._y, zz._z = -this._z, zz._w = -this._w, zz._isDirty = !0, zz
+       get ratio() {
+         return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
```

#### 95. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1581-L1582` → after: `L3669-L3670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3669-L3670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3669-L3670) · [Before (L1581-L1582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1581-L1582)

```diff
-       wOz(zz, tz, sz, Fz) {
-         return this._x === zz && this._y === tz && this._z === sz && this._w === Fz
+       get shaderLanguage() {
+         return this._shaderLanguage
```

#### 96. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1584-L1585` → after: `L3672-L3958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3672-L3958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3672-L3958) · [Before (L1584-L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1584-L1585)

```diff
-       floorToRef(zz) {
-         throw new ReferenceError("Can not floor a quaternion")
+       constructor(vv) {
+         let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
+           hv = arguments.length > 3 ? arguments[3] : void 0;
+         var Sv;
+         this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, t … [truncated]
+           get: function() {
+             return this._geometryBufferRenderer
+           },
+           set: function(vv) {
+             vv && vv.isSupported && (this._geometryBufferRenderer = vv)
+           },
+           enumerable: !0,
+           configurable: !0
+         }), Qv.g.prototype.enableGeometryBufferRenderer = function() {
+           let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+ ... (271 more added lines; see GitHub link above)
```

#### 97. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1587-L1588` → after: `L3960-L3969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3960-L3969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3960-L3969) · [Before (L1587-L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1587-L1588)

```diff
-       floor() {
-         throw new ReferenceError("Can not floor a quaternion")
+       _getRenderTargetDimensions() {
+         if ("object" === typeof this._ratioOrDimensions) return {
+           width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
+           height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
+         };
+         const vv = this._scene.ma();
+         return {
+           width: Math.max(1, Math.floor(vv.getRenderWidth() * this._ratioOrDimensions)),
+           height: Math.max(1, Math.floor(vv.getRenderHeight() * this._ratioOrDimensions))
+         }
```

#### 98. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1590-L1591` → after: `L3971-L3973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3971-L3973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3971-L3973) · [Before (L1590-L1591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1590-L1591)

```diff
-       fractToRef(zz) {
-         throw new ReferenceError("Can not fract a quaternion")
+       _copyBonesTransformationMatrices(vv, zv) {
+         for (let Pv = 0; Pv < vv.length; Pv++) zv[Pv] = vv[Pv];
+         return zv
```

#### 99. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1593-L1594` → after: `L3975-L4001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3975-L4001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L3975-L4001) · [Before (L1593-L1594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1593-L1594)

```diff
-       fract() {
-         throw new ReferenceError("Can not fract a quaternion")
+     }
+     Lz.ForceGLSL = !1, Lz.DEPTH_TEXTURE_TYPE = 0, Lz.NORMAL_TEXTURE_TYPE = 1, Lz.POSITION_TEXTURE_TYPE = 2, Lz.VELOCITY_TEXTURE_TYPE = 3, Lz.REFLECTIVITY_TEXTURE_TYPE = 4, Lz.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, Lz.VELOCITY_LINEAR_TEXTURE_TYPE = 6, Lz.IRRADIANCE_TEXTURE_TYPE = 7,  … [truncated]
+       throw (0, iz.m)("GeometryBufferRendererSceneComponent")
+     };
+     var Hz = Pv(36631);
+     const Mz = {
+       effect: null,
+       subMesh: null
+     };
+ 
+     function yz(vv) {
+       if ("number" === typeof vv) return 1;
+       if (vv instanceof Zv.j) return 2;
+       if (vv instanceof Zv.l || vv instanceof Jv.b) return 3;
+       if (vv instanceof Zv.m || vv instanceof Jv.e) return 4;
+       throw new Error("Unsupported OpenPBR property type.")
+ ... (11 more added lines; see GitHub link above)
```

#### 100. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1596-L1597` → after: `L4003-L4004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4003-L4004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L4003-L4004) · [Before (L1596-L1597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1596-L1597)

```diff
-       conjugateToRef(zz) {
-         return zz.m_(-this._x, -this._y, -this._z, this._w), zz
+       constructor(vv, zv) {
+         this.linkedProperties = {}, this.firstLinkedKey = "", this.name = vv, this.numComponents = zv
```

#### 101. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1599-L1600` → after: `L4006-L4012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4006-L4012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L4006-L4012) · [Before (L1599-L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1599-L1600)

```diff
-       conjugateInPlace() {
-         return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
+     }
+     Bz._tmpArray = [0, 0, 0, 0];
+     class Jz {
+       constructor(vv, zv, Pv, hv) {
+         let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
+           ev = arguments.length > 5 ? arguments[5] : void 0;
+         this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = vv, this.targetUniformName = Pv, this.defaultValue = zv, this.value = zv, this.targetUniformComponentNum = hv, this.targetUniformComponentOffset = Sv, this.requiredDefine = ev
```

#### 102. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1602-L1603` → after: `L4014-L4015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4014-L4015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L4014-L4015) · [Before (L1602-L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1602-L1603)

```diff
-       conjugate() {
-         return new wz(-this._x, -this._y, -this._z, this._w)
+       get numComponents() {
+         return "number" === typeof this.defaultValue ? 1 : yz(this.defaultValue)
```
