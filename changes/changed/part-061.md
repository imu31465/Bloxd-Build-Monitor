# Changed — Bundle Modifications Report (Part 061 / 154)

- **Updated at**: `2026-11-28T13:51 JST`
- **Part**: `61 / 154` (**416** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 060](part-060.md) · [Part 062 →](part-062.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/282.js` (fl4vv.bd3c59ce → yteou.5361c997 · continued)

- **File**: `bundles/bloxd.io/chunks/js/282.js` (158 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8)

#### 156. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L2075` → after: `L2075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R2075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L2075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/282.js#L2075) · [Before (L2075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/282.js#L2075)

```diff
-         (null === rr.drawnAngle || Math.abs(Sr - rr.drawnAngle) > .005) && (rr.drawnAngle = Sr, rr.element.style.rotate = `${Sr}rad`)
+         (null === dd.drawnAngle || Math.abs(Od - dd.drawnAngle) > .005) && (dd.drawnAngle = Od, dd.element.style.rotate = `${Od}rad`)
```

#### 157. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L2080` → after: `L2080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R2080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L2080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/282.js#L2080) · [Before (L2080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/282.js#L2080)

```diff
-         let ar = this.flashes.find((Sr => null === Sr.angle || null === rr ? Sr.angle === rr : fr(Sr.angle, rr) < .5));
+         let Rd = this.flashes.find((Od => null === Od.angle || null === dd ? Od.angle === dd : hd(Od.angle, dd) < .5));
```

#### 158. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L2130` → after: `L2130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R2130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L2130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/282.js#L2130) · [Before (L2130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/282.js#L2130)

```diff
-         ar.glow.classList.toggle("Everywhere", null === rr), Ur.setProperty("--glowX", `${Er}px`), Ur.setProperty("--glowY", `${xr}px`), Ur.setProperty("--glowRx", `${mr}px`), Ur.setProperty("--glowRy", `${Nr}px`), ar.element.style.transformOrigin = `${Er}px ${xr}px`, null === (W … [truncated]
+         Rd.glow.classList.toggle("Everywhere", null === dd), qd.setProperty("--glowX", `${vd}px`), qd.setProperty("--glowY", `${td}px`), qd.setProperty("--glowRx", `${od}px`), qd.setProperty("--glowRy", `${Nd}px`), Rd.element.style.transformOrigin = `${vd}px ${td}px`, null === (F … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/283.js` (fl4vv.bd3c59ce → yteou.5361c997)

- **File**: `bundles/bloxd.io/chunks/js/283.js` (60 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e)

#### 1. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L4)

```diff
-   41438: (rr, Sr, Qr) => {
+   41441: (dd, Od, md) => {
```

#### 2. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L6)

```diff
-       e: () => Er
+       b: () => vd
```

#### 3. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L8)

```diff
-     var Zr = Qr(5459);
+     var Wd = md(5375);
```

#### 4. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L29` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L29) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L29)

```diff
-           Qr(null !== (Sr = rr.error) && void 0 !== Sr ? Sr : new Error("IndexedDB transaction aborted"))
+           md(null !== (Od = dd.error) && void 0 !== Od ? Od : new Error("IndexedDB transaction aborted"))
```

#### 5. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L116` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L116) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L116)

```diff
-           console.warn(`Session replay couldn't journal page recording chunk ${Sr.sequence}; a closing tab may lose it.`, Zr), this.write(["recordings", "domTail"], (Zr => {
+           console.warn(`Session replay couldn't journal page recording chunk ${Od.sequence}; a closing tab may lose it.`, Wd), this.write(["recordings", "domTail"], (Wd => {
```

#### 6. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L154-L155` → after: `L154-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L154-L155) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L154-L155)

```diff
-               sequence: null !== (Sr = null === (Qr = fr.find((Sr => Sr.segmentId === rr.segmentId))) || void 0 === Qr ? void 0 : Qr.sequence) && void 0 !== Sr ? Sr : null,
-               progress: null !== (Zr = Er.find((Sr => Sr.segmentId === rr.segmentId))) && void 0 !== Zr ? Zr : null,
+               sequence: null !== (Od = null === (md = hd.find((Od => Od.segmentId === dd.segmentId))) || void 0 === md ? void 0 : md.sequence) && void 0 !== Od ? Od : null,
+               progress: null !== (Wd = vd.find((Od => Od.segmentId === dd.segmentId))) && void 0 !== Wd ? Wd : null,
```

#### 7. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L251` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L251) · [Before (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L251)

```diff
-   41392: (rr, Sr, Qr) => {
+   41390: (dd, Od, md) => {
```

#### 8. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L255` → after: `L254-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L254-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L254-L255) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L255)

```diff
-       f: () => Ir
+       f: () => Rd,
+       g: () => Kd
```

#### 9. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L261)

```diff
-       return new Blob([Wr.encode(`${JSON.stringify(rr)}\n`), Sr], {
+       return new Blob([Fd.encode(`${JSON.stringify(dd)}\n`), Od], {
```

#### 10. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L287-L289` → after: `L287-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L287-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L287-L289) · [Before (L287-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L287-L289)

```diff
-           const rr = Sr.byteLength <= Zr.d ? await Zr.g.fetch(this.relay.url, fr, Ir.size, Qr) : await fetch(this.relay.url, fr);
-           if (!rr.ok) throw new Error(`HTTP ${rr.status}`);
-           if (Er = await rr.json(), "refused" !== Er.outcome && ("forwarded" !== Er.outcome || !Number.isInteger(Er.status))) throw new Error(`Unexpected relay answer ${JSON.stringify(Er)}`)
+           const dd = Od.byteLength <= Wd.b ? await Wd.c.fetch(this.relay.url, hd, Kd.size, md) : await fetch(this.relay.url, hd);
+           if (!dd.ok) throw new Error(`HTTP ${dd.status}`);
+           if (vd = await dd.json(), "refused" !== vd.outcome && ("forwarded" !== vd.outcome || !Number.isInteger(vd.status))) throw new Error(`Unexpected relay answer ${JSON.stringify(vd)}`)
```

#### 11. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L294` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L294) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L294)

```diff
-         return "refused" === Er.outcome ? (console.info(`Session replay's part joiner refused to relay (${Er.reason}); uploading straight to storage.`), this.refused = !0, null) : Er.status
+         return "refused" === vd.outcome ? (console.info(`Session replay's part joiner refused to relay (${vd.reason}); uploading straight to storage.`), this.refused = !0, null) : vd.status
```

#### 12. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L323` → after: `L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L323) · [Before (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L323)

```diff
-   41420: (rr, Sr, Qr) => {
+   41419: (dd, Od, md) => {
```

#### 13. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L326-L327` → after: `L326-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L326-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L326-L327) · [Before (L326-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L326-L327)

```diff
-       d: () => Nr,
-       g: () => fr
+       e: () => Nd,
+       f: () => hd
```

#### 14. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L330-L331` → after: `L330-L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L330-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L330-L331) · [Before (L330-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L330-L331)

```diff
-       Wr = Qr(1267),
-       ar = Qr(41398);
+       Fd = md(1268),
+       Rd = md(41397);
```

#### 15. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L341` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L341) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L341)

```diff
-       for (const [jr, Ir] of Object.entries(rr.fields)) Wr.append(jr, Ir), ar += (0, Zr.i)(jr) + (0, Zr.i)(Ir);
+       for (const [Xd, Kd] of Object.entries(dd.fields)) Fd.append(Xd, Kd), Rd += (0, Wd.e)(Xd) + (0, Wd.e)(Kd);
```

#### 16. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L351` → after: `L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L351) · [Before (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L351)

```diff
-       return new ar.d(`Segment ${rr} failed with ${Sr}${null===Qr?"":` (${Qr})`}`, Sr, Qr)
+       return new Rd.b(`Segment ${dd} failed with ${Od}${null===md?"":` (${md})`}`, Od, md)
```

#### 17. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L370` → after: `L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L370) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L370)

```diff
-       return null !== (Sr = null === (Qr = /<Code>([^<]+)<\/Code>/.exec(Zr)) || void 0 === Qr ? void 0 : Qr[1]) && void 0 !== Sr ? Sr : null
+       return null !== (Od = null === (md = /<Code>([^<]+)<\/Code>/.exec(Wd)) || void 0 === md ? void 0 : md[1]) && void 0 !== Od ? Od : null
```

#### 18. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L376` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L376) · [Before (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L376)

```diff
-         this.segmentUploadUrl = rr, this.deadline = void 0, this.relay = void 0, this.deadline = Qr.deadline, this.relay = null !== (Sr = Qr.relay) && void 0 !== Sr ? Sr : null
+         this.segmentUploadUrl = dd, this.deadline = void 0, this.relay = void 0, this.deadline = md.deadline, this.relay = null !== (Od = md.relay) && void 0 !== Od ? Od : null
```

#### 19. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L393` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L393) · [Before (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L393)

```diff
-         if (!Sr.ok) throw new ar.d(`Segment presign failed with ${Sr.status}`, Sr.status);
+         if (!Od.ok) throw new Rd.b(`Segment presign failed with ${Od.status}`, Od.status);
```

#### 20. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L414` → after: `L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L414) · [Before (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L414)

```diff
-           fr = Sr.byteLength <= Zr.d ? await Zr.g.fetch(rr, jr, Sr.byteLength, Qr) : await fetch(rr, jr);
+           hd = Od.byteLength <= Wd.b ? await Wd.c.fetch(dd, Xd, Od.byteLength, md) : await fetch(dd, Xd);
```

#### 21. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L431` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L431) · [Before (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L431)

```diff
-         }, xr = jr <= Zr.d ? await Zr.g.fetch(rr.url, Er, jr, Qr) : await fetch(rr.url, Er);
+         }, td = Xd <= Wd.b ? await Wd.c.fetch(dd.url, vd, Xd, md) : await fetch(dd.url, vd);
```

#### 22. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L438-L439` → after: `L438-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L438-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L438-L439) · [Before (L438-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L438-L439)

```diff
-         const Sr = (0, Wr.o)(rr);
-         return void 0 === this.deadline ? Sr : (0, Wr.i)([this.deadline, Sr])
+         const Od = (0, Fd.s)(dd);
+         return void 0 === this.deadline ? Od : (0, Fd.j)([this.deadline, Od])
```

#### 23. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L468` → after: `L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L468) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L468)

```diff
-   41371: (rr, Sr, Qr) => {
+   41370: (dd, Od, md) => {
```

#### 24. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L470` → after: `L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L470) · [Before (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L470)

```diff
-       c: () => jr
+       d: () => Xd
```

#### 25. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L472` → after: `L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L472) · [Before (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L472)

```diff
-     var Zr = Qr(37500),
+     var Wd = md(37635),
```

#### 26. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L476` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L476) · [Before (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L476)

```diff
-       return Wr()('(()=>{var rr={13:(rr,Sr,Qr)=>{function Zr(){return"object"===typeof process&&"object"===typeof process.versions&&"undefined"!==typeof process.versions.node}function Wr(rr){return rr instanceof Uint8Array&&(!Zr()||!Buffer.isBuffer(rr))}function ar(rr){return rr  … [truncated]
+       return Fd()('(()=>{var dd={5:(dd,Od,md)=>{function Wd(){return"object"===typeof process&&"object"===typeof process.versions&&"undefined"!==typeof process.versions.node}function Fd(dd){return dd instanceof Uint8Array&&(!Wd()||!Buffer.isBuffer(dd))}function Rd(dd){return dd i … [truncated]
```

#### 27. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L486` → after: `L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L486) · [Before (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L486)

```diff
-           const Wr = null !== (Zr = this.worker) && void 0 !== Zr ? Zr : this.start();
+           const Fd = null !== (Wd = this.worker) && void 0 !== Wd ? Wd : this.start();
```

#### 28. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L511` → after: `L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L511) · [Before (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L511)

```diff
-           return this.broke(`didn't start: ${String(rr)}`), null
+           return this.broke(`didn't start: ${String(dd)}`), null
```

#### 29. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L540` → after: `L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L540) · [Before (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L540)

```diff
-         console.warn(`Session replay: page recording worker failed, packing on the main thread: ${rr}`), this.fail(new Error(`page recording worker failed: ${rr}`))
+         console.warn(`Session replay: page recording worker failed, packing on the main thread: ${dd}`), this.fail(new Error(`page recording worker failed: ${dd}`))
```

#### 30. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L553` → after: `L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L553) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L553)

```diff
-   41355: (rr, Sr, Qr) => {
+   41354: (dd, Od, md) => {
```

#### 31. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L555` → after: `L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L555) · [Before (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L555)

```diff
-       b: () => Wr
+       c: () => Fd
```

#### 32. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L557` → after: `L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L557) · [Before (L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L557)

```diff
-     var Zr = Qr(41361);
+     var Wd = md(41357);
```

#### 33. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L567` → after: `L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L567) · [Before (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L567)

```diff
-   41403: (rr, Sr, Qr) => {
+   41405: (dd, Od, md) => {
```

#### 34. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L569` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L569) · [Before (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L569)

```diff
-       e: () => ar
+       b: () => Rd
```

#### 35. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L580` → after: `L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L580) · [Before (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L580)

```diff
-   41379: (rr, Sr, Qr) => {
+   41372: (dd, Od, md) => {
```

#### 36. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L582` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L582) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L582)

```diff
-       b: () => ar
+       c: () => Rd
```

#### 37. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L584-L585` → after: `L584-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L584-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L584-L585) · [Before (L584-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L584-L585)

```diff
-     var Zr = Qr(41385),
-       Wr = Qr(1262);
+     var Wd = md(41381),
+       Fd = md(1253);
```

#### 38. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L589-L590` → after: `L589-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L589-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L589-L590) · [Before (L589-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L589-L590)

```diff
-         segmentUploadUrl: `${Wr.clientSideServerUrls.indexUrl}${Zr.i}`,
-         manifestUrl: `${Wr.clientSideServerUrls.indexUrl}${Zr.f}`
+         segmentUploadUrl: `${Fd.clientSideServerUrls.indexUrl}${Wd.n}`,
+         manifestUrl: `${Fd.clientSideServerUrls.indexUrl}${Wd.f}`
```

#### 39. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L596-L598` → after: `L596-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L596-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L596-L598) · [Before (L596-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L596-L598)

```diff
-       d: () => Zr,
-       g: () => ar,
-       i: () => Wr
+       b: () => Wd,
+       c: () => Rd,
+       e: () => Fd
```

#### 40. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L630` → after: `L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L630) · [Before (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L630)

```diff
-         return (null !== (Sr = this.inFlightLabels.get(rr)) && void 0 !== Sr ? Sr : 0) > 0
+         return (null !== (Od = this.inFlightLabels.get(dd)) && void 0 !== Od ? Od : 0) > 0
```

#### 41. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L643` → after: `L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L643) · [Before (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L643)

```diff
-         void 0 !== rr && this.inFlightLabels.set(rr, (null !== (Qr = this.inFlightLabels.get(rr)) && void 0 !== Qr ? Qr : 0) + Sr)
+         void 0 !== dd && this.inFlightLabels.set(dd, (null !== (md = this.inFlightLabels.get(dd)) && void 0 !== md ? md : 0) + Od)
```

#### 42. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L652` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L652) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L652)

```diff
-   41405: (rr, Sr, Qr) => {
+   41407: (dd, Od, md) => {
```

#### 43. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L654` → after: `L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L654) · [Before (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L654)

```diff
-       e: () => jr
+       d: () => Xd
```

#### 44. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L657` → after: `L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L657) · [Before (L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L657)

```diff
-       Wr = Qr(1267);
+       Fd = md(1268);
```

#### 45. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L662` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L662) · [Before (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L662)

```diff
-         const Sr = await Zr.g.fetch(rr, {
+         const Od = await Wd.c.fetch(dd, {
```

#### 46. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L668-L669` → after: `L668-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L668-L669) · [Before (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L668-L669)

```diff
-           signal: (0, Wr.o)(ar)
-         }, (0, Zr.i)(Qr));
+           signal: (0, Fd.s)(Rd)
+         }, (0, Wd.e)(md));
```

#### 47. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L673` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L673) · [Before (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L673)

```diff
-           return "rejected" in Sr ? (console.warn(`Session replay manifest refused: ${Sr.reason}`), Sr.retryable ? "retryLater" : "refused") : "uploaded"
+           return "rejected" in Od ? (console.warn(`Session replay manifest refused: ${Od.reason}`), Od.retryable ? "retryLater" : "refused") : "uploaded"
```

#### 48. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L680` → after: `L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L680) · [Before (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L680)

```diff
-   41413: (rr, Sr, Qr) => {
+   41416: (dd, Od, md) => {
```

#### 49. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L683` → after: `L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L683) · [Before (L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L683)

```diff
-       c: () => fr
+       e: () => hd
```

#### 50. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L688` → after: `L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L688) · [Before (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L688)

```diff
-       jr = (0, Zr.i)(',"domSegments":[]');
+       Xd = (0, Wd.e)(',"domSegments":[]');
```

#### 51. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L704` → after: `L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L704) · [Before (L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L704)

```diff
-       }), pr = (0, Zr.i)(JSON.stringify(Er())), xr = [];
+       }), Qd = (0, Wd.e)(JSON.stringify(vd())), td = [];
```

#### 52. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L712` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L712) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L712)

```diff
-           return "domSegments" === Sr ? null !== (Qr = rr.manifest.domSegments) && void 0 !== Qr ? Qr : [] : "creatorGrants" === Sr ? rr.creatorGrants : rr.manifest[Sr]
+           return "domSegments" === Od ? null !== (md = dd.manifest.domSegments) && void 0 !== md ? md : [] : "creatorGrants" === Od ? dd.creatorGrants : dd.manifest[Od]
```

#### 53. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L714` → after: `L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L714) · [Before (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L714)

```diff
-         tr = (rr, Sr, Qr) => Qr + (rr.length > 0 ? 1 : "domSegments" === Sr.list ? jr : 0);
+         Hd = (dd, Od, md) => md + (dd.length > 0 ? 1 : "domSegments" === Od.list ? Xd : 0);
```

#### 54. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L716` → after: `L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L716) · [Before (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L716)

```diff
-         const rr = (0, Zr.i)(JSON.stringify(Wr.value));
+         const dd = (0, Wd.e)(JSON.stringify(Fd.value));
```

#### 55. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L742` → after: `L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L742) · [Before (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L742)

```diff
-         }))), ...(null !== (Sr = rr.manifest.domSegments) && void 0 !== Sr ? Sr : []).map((rr => ({
+         }))), ...(null !== (Od = dd.manifest.domSegments) && void 0 !== Od ? Od : []).map((dd => ({
```

#### 56. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L754` → after: `L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L754) · [Before (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L754)

```diff
-   41398: (rr, Sr, Qr) => {
+   41397: (dd, Od, md) => {
```

#### 57. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L756` → after: `L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L756) · [Before (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L756)

```diff
-       d: () => Zr
+       b: () => Wd
```

#### 58. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L765` → after: `L765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L765) · [Before (L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L765)

```diff
-   41385: (rr, Sr, Qr) => {
+   41381: (dd, Od, md) => {
```

#### 59. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L767` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L767) · [Before (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L767)

```diff
-       c: () => Ir,
+       e: () => Kd,
```

#### 60. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L769-L771` → after: `L769-L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L769-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/283.js#L769-L771) · [Before (L769-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/283.js#L769-L771)

```diff
-       h: () => ar,
-       i: () => Zr,
-       j: () => jr
+       j: () => Rd,
+       n: () => Wd,
+       o: () => Xd
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/284.js` (fl4vv.bd3c59ce → yteou.5361c997)

- **File**: `bundles/bloxd.io/chunks/js/284.js` (349 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887)

#### 1. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4)

```diff
-   41464: (rr, Sr, Qr) => {
+   41466: (dd, Od, md) => {
```

#### 2. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6-L7)

```diff
-       c: () => zE,
-       f: () => FN
+       b: () => Tv,
+       c: () => lN
```

#### 3. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L123)

```diff
-     const IQ = null != DS ? DS : {};
+     const Qm = null != fO ? fO : {};
```

#### 4. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L161` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L161) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L161)

```diff
-       }))) && void 0 !== Sr ? Sr : "null"
+       }))) && void 0 !== Od ? Od : "null"
```

#### 5. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L195` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L195) · [Before (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L195)

```diff
-       return {}.toString.call(rr) === `[object ${Sr}]`
+       return {}.toString.call(dd) === `[object ${Od}]`
```

#### 6. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L275` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L275) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L275)

```diff
-       return Sr > Qr && (Zr.warn("min cannot be greater than max."), Sr = Qr), lQ(rr) ? rr > Qr ? (Zr.warn(" cannot be  greater than max: " + Qr + ". Using max value instead."), Qr) : Sr > rr ? (Zr.warn(" cannot be less than min: " + Sr + ". Using min value instead."), Sr) : rr : … [truncated]
+       return Od > md && (Wd.warn("min cannot be greater than max."), Od = md), um(dd) ? dd > md ? (Wd.warn(" cannot be  greater than max: " + md + ". Using max value instead."), md) : Od > dd ? (Wd.warn(" cannot be less than min: " + Od + ". Using min value instead."), Od) : dd : … [truncated]
```

#### 7. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L362` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L362) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L362)

```diff
-           return (null == rr ? void 0 : rr.brave) ? qZ : null
+           return (null == dd ? void 0 : dd.brave) ? rW : null
```

#### 8. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L364` → after: `L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L364) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L364)

```diff
-         return Wr || ((null == Zr ? void 0 : Zr.detectGoogleSearchApp) && mQ(rr, "GSA/") ? MZ : mQ(rr, " OPR/") && mQ(rr, "Mini") ? "Opera Mini" : mQ(rr, " OPR/") ? EZ : wZ.test(rr) ? ZZ : mQ(rr, "IEMobile") || mQ(rr, "WPDesktop") ? fZ : mQ(rr, "OculusBrowser") ? vZ : mQ(rr, "Sam … [truncated]
+         return Fd || ((null == Wd ? void 0 : Wd.detectGoogleSearchApp) && Hm(dd, "GSA/") ? PW : Hm(dd, " OPR/") && Hm(dd, "Mini") ? "Opera Mini" : Hm(dd, " OPR/") ? oW : IW.test(dd) ? XW : Hm(dd, "IEMobile") || Hm(dd, "WPDesktop") ? tW : Hm(dd, "OculusBrowser") ? BW : Hm(dd, "Sam … [truncated]
```

#### 9. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L366` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L366) · [Before (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L366)

```diff
-         }(rr))(rr, Sr) ? mQ(rr, DQ) ? zZ : QZ : mQ(rr, "PaleMoon/") ? PZ : mQ(rr, "Waterfox/") ? HZ : mQ(rr, xZ) ? xZ : mQ(rr, "MSIE") || mQ(rr, "Trident/") ? IZ : mQ(rr, "Gecko") ? xZ : "")
+         }(dd))(dd, Od) ? Hm(dd, Mm) ? YW : RW : Hm(dd, "PaleMoon/") ? iW : Hm(dd, "Waterfox/") ? AW : Hm(dd, qW) ? qW : Hm(dd, "MSIE") || Hm(dd, "Trident/") ? QW : Hm(dd, "Gecko") ? qW : "")
```

#### 10. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L445` → after: `L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L445) · [Before (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L445)

```diff
-         return iZ.test(rr) ? NZ : VZ.test(rr) ? UZ : AZ.test(rr) ? tZ : new RegExp(KZ, "i").test(rr) ? KZ : new RegExp("(Windows Phone|WPDesktop)", "i").test(rr) ? nZ : /iPad/.test(rr) ? rZ : /iPod/.test(rr) ? "iPod Touch" : /iPhone/.test(rr) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\ … [truncated]
+         return eW.test(dd) ? yW : DW.test(dd) ? bW : jW.test(dd) ? TW : new RegExp(EW, "i").test(dd) ? EW : new RegExp("(Windows Phone|WPDesktop)", "i").test(dd) ? wW : /iPad/.test(dd) ? WW : /iPod/.test(dd) ? "iPod Touch" : /iPhone/.test(dd) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\ … [truncated]
```

#### 11. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L450` → after: `L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L450) · [Before (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L450)

```diff
-         return Zr === rZ || Zr === uQ || "Kobo" === Zr || "Kindle Fire" === Zr || Zr === BZ ? sQ : Zr === NZ || Zr === tZ || Zr === UZ || Zr === KZ ? "Console" : Zr === SZ ? "Wearable" : Zr ? DQ : "Android" === (null == Sr ? void 0 : Sr.userAgentDataPlatform) && (null !== (Qr = n … [truncated]
+         return Wd === WW || Wd === mW || "Kobo" === Wd || "Kindle Fire" === Wd || Wd === UW ? OW : Wd === yW || Wd === TW || Wd === bW || Wd === EW ? "Console" : Wd === FW ? "Wearable" : Wd ? Mm : "Android" === (null == Od ? void 0 : Od.userAgentDataPlatform) && (null !== (md = n … [truncated]
```

#### 12. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L545` → after: `L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L545) · [Before (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L545)

```diff
-       return "string" == typeof(Qr = rr) && IW.test(Qr) ? rr : Sr();
+       return "string" == typeof(md = dd) && QF.test(md) ? dd : Od();
```

#### 13. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L622` → after: `L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L622) · [Before (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L622)

```diff
-         return "symbol" == tW(Sr) ? Sr : Sr + ""
+         return "symbol" == TF(Od) ? Od : Od + ""
```

#### 14. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L783` → after: `L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L783) · [Before (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L783)

```diff
-             for (const Sr of null !== (jr = rr.errors) && void 0 !== jr ? jr : []) Zr(Sr, Ir, "member")
+             for (const Od of null !== (Xd = dd.errors) && void 0 !== Xd ? Xd : []) Wd(Od, Kd, "member")
```

#### 15. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L791` → after: `L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L791) · [Before (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L791)

```diff
-           skipFirstLines: null !== (Sr = rr.skipFirstLines) && void 0 !== Sr ? Sr : 1
+           skipFirstLines: null !== (Od = dd.skipFirstLines) && void 0 !== Od ? Od : 1
```

#### 16. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L803` → after: `L803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L803) · [Before (L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L803)

```diff
-                 return nQ(Sr) ? Sr : void 0
+                 return wm(Od) ? Od : void 0
```

#### 17. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L870` → after: `L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L870) · [Before (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L870)

```diff
-               mechanism: 0 == Qr ? rr : {},
+               mechanism: 0 == md ? dd : {},
```

#### 18. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L883` → after: `L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L883) · [Before (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L883)

```diff
-             return null !== (Sr = pr(rr, Zr)) && void 0 !== Sr ? Sr : this.coerceFallback(mr)
+             return null !== (Od = Qd(dd, Wd)) && void 0 !== Od ? Od : this.coerceFallback(od)
```

#### 19. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L909` → after: `L909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L909) · [Before (L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L909)

```diff
-         return Qr || Zr ? [-1 !== rr.indexOf("@") ? rr.split("@")[0] : "?", Qr ? `safari-extension:${Sr}` : `safari-web-extension:${Sr}`] : [rr, Sr]
+         return md || Wd ? [-1 !== dd.indexOf("@") ? dd.split("@")[0] : "?", md ? `safari-extension:${Od}` : `safari-web-extension:${Od}`] : [dd, Od]
```

#### 20. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L972` → after: `L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L972) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L972)

```diff
-       Zr && rr.splice(Qr + Zr === rr.length ? Qr : Sr.start, Zr)
+       Wd && dd.splice(md + Wd === dd.length ? md : Od.start, Wd)
```

#### 21. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1022` → after: `L1022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1022) · [Before (L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1022)

```diff
-           return rr.message ? `${Sr}: ${rr.message}` : Sr
+           return dd.message ? `${Od}: ${dd.message}` : Od
```

#### 22. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1043` → after: `L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1043) · [Before (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1043)

```diff
-             stack: null != Zr ? Zr : Wr,
+             stack: null != Wd ? Wd : Fd,
```

#### 23. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1060` → after: `L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1060) · [Before (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1060)

```diff
-             return "string" == typeof Qr && Qr.length > 0 ? Qr : void 0
+             return "string" == typeof md && md.length > 0 ? md : void 0
```

#### 24. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1075` → after: `L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1075) · [Before (L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1075)

```diff
-             stack: null !== (Qr = this._buildLocationStack(rr)) && void 0 !== Qr ? Qr : Zr.stack,
+             stack: null !== (md = this._buildLocationStack(dd)) && void 0 !== md ? md : Wd.stack,
```

#### 25. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1085-L1087` → after: `L1085-L1087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1085-L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1085-L1087) · [Before (L1085-L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1085-L1087)

```diff
-             Wr = null !== (Sr = Zr.lineno) && void 0 !== Sr ? Sr : 0,
-             ar = null !== (Qr = Zr.colno) && void 0 !== Qr ? Qr : 0;
-           if (TQ(Zr.filename) && 0 !== Zr.filename.length && 0 !== Wr) return `Error\n    at ${Zr.filename}:${Wr}:${ar}`
+             Fd = null !== (Od = Wd.lineno) && void 0 !== Od ? Od : 0,
+             Rd = null !== (md = Wd.colno) && void 0 !== md ? md : 0;
+           if (xm(Wd.filename) && 0 !== Wd.filename.length && 0 !== Fd) return `Error\n    at ${Wd.filename}:${Fd}:${Rd}`
```

#### 26. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1099-L1100` → after: `L1099-L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1099-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1099-L1100) · [Before (L1099-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1099-L1100)

```diff
-           type: null != Zr ? Zr : "Error",
-           value: null != Wr ? Wr : rr,
+           type: null != Wd ? Wd : "Error",
+           value: null != Fd ? Fd : dd,
```

#### 27. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1120` → after: `L1120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1120) · [Before (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1120)

```diff
-         if (Sr >= rr.length) return Zr === Qr.length ? rr : rr.length > Sr ? `${rr.slice(0,Sr)}...` : rr
+         if (Od >= dd.length) return Wd === md.length ? dd : dd.length > Od ? `${dd.slice(0,Od)}...` : dd
```

#### 28. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1134` → after: `L1134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1134) · [Before (L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1134)

```diff
-             stack: null !== (Qr = this.getStack(rr)) && void 0 !== Qr ? Qr : null === (Zr = Sr.syntheticException) || void 0 === Zr ? void 0 : Zr.stack,
+             stack: null !== (md = this.getStack(dd)) && void 0 !== md ? md : null === (Wd = Od.syntheticException) || void 0 === Wd ? void 0 : Wd.stack,
```

#### 29. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1142` → after: `L1142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1142) · [Before (L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1142)

```diff
-           return TQ(Sr) && !vQ(Sr) ? Sr : "Error"
+           return xm(Od) && !Bm(Od) ? Od : "Error"
```

#### 30. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1146-L1147` → after: `L1146-L1147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1146-L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1146-L1147) · [Before (L1146-L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1146-L1147)

```diff
-             let Sr = `'${rr.name}' captured as exception`;
-             return "message" in rr && "string" == typeof rr.message && (Sr += ` with message: '${rr.message}'`), Sr
+             let Od = `'${dd.name}' captured as exception`;
+             return "message" in dd && "string" == typeof dd.message && (Od += ` with message: '${dd.message}'`), Od
```

#### 31. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1151` → after: `L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1151) · [Before (L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1151)

```diff
-           return `${Sr&&"Object"!==Sr?`'${Sr}'`:"Object"} captured as exception with keys: ${ra(rr)}`
+           return `${Od&&"Object"!==Od?`'${Od}'`:"Object"} captured as exception with keys: ${WR(dd)}`
```

#### 32. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1188` → after: `L1188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1188) · [Before (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1188)

```diff
-             value: `${Zr} captured as exception with keys: ${ra(rr)}`,
+             value: `${Wd} captured as exception with keys: ${WR(dd)}`,
```

#### 33. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1202` → after: `L1202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1202) · [Before (L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1202)

```diff
-             value: `Primitive value captured as exception: ${String(rr)}`,
+             value: `Primitive value captured as exception: ${String(dd)}`,
```

#### 34. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1226` → after: `L1226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1226) · [Before (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1226)

```diff
-             value: `Non-Error promise rejection captured with value: ${String(Zr)}`,
+             value: `Non-Error promise rejection captured with value: ${String(Wd)}`,
```

#### 35. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1250` → after: `L1250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1250) · [Before (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1250)

```diff
-         enabled: null !== (Sr = rr.enabled) && void 0 !== Sr ? Sr : fa.enabled,
+         enabled: null !== (Od = dd.enabled) && void 0 !== Od ? Od : tR.enabled,
```

#### 36. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1318` → after: `L1318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1318) · [Before (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1318)

```diff
-       return 0 > Qr ? Sr : Qr
+       return 0 > md ? Od : md
```

#### 37. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1334` → after: `L1334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1334) · [Before (L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1334)

```diff
-       return "string" == typeof rr ? rr : void 0
+       return "string" == typeof dd ? dd : void 0
```

#### 38. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1343` → after: `L1343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1343) · [Before (L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1343)

```diff
-         throw EW(ha, `Native gzip produced invalid output: ${rr}`)
+         throw oF(pR, `Native gzip produced invalid output: ${dd}`)
```

#### 39. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1428` → after: `L1428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1428) · [Before (L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1428)

```diff
-       ka = new RegExp(`^${Ga.source}`, "i"),
+       cR = new RegExp(`^${zR.source}`, "i"),
```

#### 40. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1455` → after: `L1455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1455) · [Before (L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1455)

```diff
-       }(Sr) ? Oa : Ma.test(Sr) ? Qr ? Ij(Sr, {
+       }(Od) ? SR : PR.test(Od) ? md ? QX(Od, {
```

#### 41. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1458` → after: `L1458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1458) · [Before (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1458)

```diff
-       }) : Oa : Sr
+       }) : SR : Od
```

#### 42. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1495` → after: `L1495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1495) · [Before (L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1495)

```diff
-       }) : Ma.test(rr) ? Oa : rr
+       }) : PR.test(dd) ? SR : dd
```

#### 43. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1538` → after: `L1538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1538) · [Before (L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1538)

```diff
-       if (rj(jr) || rj(fr.head) || rj(null !== (Qr = fr.tail) && void 0 !== Qr ? Qr : "")) return Oa + Wr;
+       if (WX(Xd) || WX(hd.head) || WX(null !== (md = hd.tail) && void 0 !== md ? md : "")) return SR + Fd;
```

#### 44. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1549` → after: `L1549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1549) · [Before (L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1549)

```diff
-       const Ur = null === mr ? xr.value : `${xr.value}?${mr.value}`;
+       const qd = null === od ? td.value : `${td.value}?${od.value}`;
```

#### 45. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1551` → after: `L1551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1551) · [Before (L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1551)

```diff
-       const tr = Ir ? null != mr ? mr : xr : pr;
+       const Hd = Kd ? null != od ? od : td : Qd;
```

#### 46. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1644` → after: `L1644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1644) · [Before (L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1644)

```diff
-         return rr >= Zr || -Zr > rr ? (null == Sr || Sr.debug(`Attribute ${Qr} is outside the int64 range; encoding it as a string`), {
+         return dd >= Wd || -Wd > dd ? (null == Od || Od.debug(`Attribute ${md} is outside the int64 range; encoding it as a string`), {
```

#### 47. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1662` → after: `L1662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1662) · [Before (L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1662)

```diff
-           return rr >= 0x8000000000000000 || -0x8000000000000000 > rr ? (null == Sr || Sr.debug(`Attribute ${Qr} is outside the int64 range; encoding it as a string`), {
+           return dd >= 0x8000000000000000 || -0x8000000000000000 > dd ? (null == Od || Od.debug(`Attribute ${md} is outside the int64 range; encoding it as a string`), {
```

#### 48. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1846` → after: `L1846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1846) · [Before (L1846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1846)

```diff
-         }(lQ(Zr) ? Zr : void 0),
+         }(um(Wd) ? Wd : void 0),
```

#### 49. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1933` → after: `L1933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1933) · [Before (L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1933)

```diff
-       return Math.round((void 0 === Zr ? ar : Math.min(ar, Math.max(Zr, rr))) * Qr)
+       return Math.round((void 0 === Wd ? Rd : Math.min(Rd, Math.max(Wd, dd))) * md)
```

#### 50. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1940` → after: `L1940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1940) · [Before (L1940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1940)

```diff
-         this._instance = rr, this._config = Sr, this._logger = Qr, this._getContext = Zr, this._onReady = Wr, this._waitForStoragePersist = ar, this._scopeName = jr, this._flushTimer = new Oj((() => this._flushInBackground())), this._flushPromise = null, this._evictedSinceAdvance … [truncated]
+         this._instance = dd, this._config = Od, this._logger = md, this._getContext = Wd, this._onReady = Fd, this._waitForStoragePersist = Rd, this._scopeName = Xd, this._flushTimer = new SX((() => this._flushInBackground())), this._flushPromise = null, this._evictedSinceAdvance … [truncated]
```

#### 51. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1961` → after: `L1961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1961) · [Before (L1961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1961)

```diff
-           record: Bj(Zr, null !== (Qr = null == Sr ? void 0 : Sr.context) && void 0 !== Qr ? Qr : this._getContext(), this._logger, null == Sr ? void 0 : Sr.occurredAtMs)
+           record: UX(Wd, null !== (md = null == Od ? void 0 : Od.context) && void 0 !== md ? md : this._getContext(), this._logger, null == Od ? void 0 : Od.occurredAtMs)
```

#### 52. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1968` → after: `L1968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1968) · [Before (L1968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1968)

```diff
-         const Qr = nQ(Sr) ? Sr : [Sr];
+         const md = wm(Od) ? Od : [Od];
```

#### 53. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L1998` → after: `L1998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R1998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L1998) · [Before (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L1998)

```diff
-           let Qr = null !== (Sr = rr._instance.getPersistedProperty(fQ.LogsQueue)) && void 0 !== Sr ? Sr : [];
+           let md = null !== (Od = dd._instance.getPersistedProperty(tm.LogsQueue)) && void 0 !== Od ? Od : [];
```

#### 54. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2008` → after: `L2008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2008) · [Before (L2008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2008)

```diff
-               fr = vj(Ir.map((rr => rr.record)), rr._buildResourceAttributes(), null !== (ar = rr._scopeName) && void 0 !== ar ? ar : rr._instance.getLibraryId(), rr._instance.getLibraryVersion()),
+               hd = BX(Kd.map((dd => dd.record)), dd._buildResourceAttributes(), null !== (Rd = dd._scopeName) && void 0 !== Rd ? Rd : dd._instance.getLibraryId(), dd._instance.getLibraryVersion()),
```

#### 55. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2011` → after: `L2011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2011) · [Before (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2011)

```diff
-             if ("too-large" === Er.kind && Ir.length > 1) rr._maxBatchRecordsPerPost = Math.max(1, Math.floor(Ir.length / 2)), rr._logger.warn(`Logs batch of size ${Ir.length} was too large for the ingestion endpoint, reducing batch size to ${rr._maxBatchRecordsPerPost}`);
+             if ("too-large" === vd.kind && Kd.length > 1) dd._maxBatchRecordsPerPost = Math.max(1, Math.floor(Kd.length / 2)), dd._logger.warn(`Logs batch of size ${Kd.length} was too large for the ingestion endpoint, reducing batch size to ${dd._maxBatchRecordsPerPost}`);
```

#### 56. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2014` → after: `L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2014) · [Before (L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2014)

```diff
-               if ("too-large" === Er.kind ? rr._logger.warn("Dropping a single log record with batch size 1 \u2014 the record is larger than the server cap and cannot be split further.") : "ok" === Er.kind && rr._config.maxBatchRecordsPerPost > rr._maxBatchRecordsPerPost && (rr._ … [truncated]
+               if ("too-large" === vd.kind ? dd._logger.warn("Dropping a single log record with batch size 1 \u2014 the record is larger than the server cap and cannot be split further.") : "ok" === vd.kind && dd._config.maxBatchRecordsPerPost > dd._maxBatchRecordsPerPost && (dd._ … [truncated]
```

#### 57. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2024` → after: `L2024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2024) · [Before (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2024)

```diff
-             Wr = null !== (Qr = Sr._instance.getPersistedProperty(fQ.LogsQueue)) && void 0 !== Qr ? Qr : [];
+             Fd = null !== (md = Od._instance.getPersistedProperty(tm.LogsQueue)) && void 0 !== md ? md : [];
```

#### 58. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2034` → after: `L2034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2034) · [Before (L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2034)

```diff
-         const Qr = null !== (Sr = this._instance.getPersistedProperty(fQ.LogsQueue)) && void 0 !== Sr ? Sr : [];
+         const md = null !== (Od = this._instance.getPersistedProperty(tm.LogsQueue)) && void 0 !== Od ? Od : [];
```

#### 59. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2082` → after: `L2082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2082) · [Before (L2082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2082)

```diff
-       return Zr && (Wr = Object.keys(Zr).sort().map((rr => `${JSON.stringify(rr)}:${JSON.stringify(Zr[rr])}`)).join(",")), `${rr}\0${Sr}\0${null!=Qr?Qr:""}\0${Wr}`
+       return Wd && (Fd = Object.keys(Wd).sort().map((dd => `${JSON.stringify(dd)}:${JSON.stringify(Wd[dd])}`)).join(",")), `${dd}\0${Od}\0${null!=md?md:""}\0${Fd}`
```

#### 60. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2147-L2148` → after: `L2147-L2148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2147-L2148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2147-L2148) · [Before (L2147-L2148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2147-L2148)

```diff
-         if ("number" != typeof Sr.value || !Number.isFinite(Sr.value)) return void this._logger.warn(`Dropping metric '${Sr.name}': value must be a finite number`);
-         if ("count" === Sr.type && 0 > Sr.value) return void this._logger.warn(`Dropping count '${Sr.name}': counters are monotonic, value must be >= 0`);
+         if ("number" != typeof Od.value || !Number.isFinite(Od.value)) return void this._logger.warn(`Dropping metric '${Od.name}': value must be a finite number`);
+         if ("count" === Od.type && 0 > Od.value) return void this._logger.warn(`Dropping count '${Od.name}': counters are monotonic, value must be >= 0`);
```

#### 61. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2153` → after: `L2153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2153) · [Before (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2153)

```diff
-           return void this._logger.warn(`Dropping metric '${Sr.name}': attributes could not be serialized`, rr)
+           return void this._logger.warn(`Dropping metric '${Od.name}': attributes could not be serialized`, dd)
```

#### 62. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2167` → after: `L2167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2167) · [Before (L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2167)

```diff
-         void 0 === ar ? this._typeByName.set(Sr.name, Sr.type) : ar === Sr.type || this._typeCollisionWarned.has(Sr.name) || (this._typeCollisionWarned.add(Sr.name), this._logger.warn(`Metric name '${Sr.name}' is already used as a ${ar}; recording it as a ${Sr.type} too will blen … [truncated]
+         void 0 === Rd ? this._typeByName.set(Od.name, Od.type) : Rd === Od.type || this._typeCollisionWarned.has(Od.name) || (this._typeCollisionWarned.add(Od.name), this._logger.warn(`Metric name '${Od.name}' is already used as a ${Rd}; recording it as a ${Od.type} too will blen … [truncated]
```

#### 63. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2176` → after: `L2176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2176) · [Before (L2176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2176)

```diff
-             rr.total = (null !== (Qr = rr.total) && void 0 !== Qr ? Qr : 0) + Sr;
+             dd.total = (null !== (md = dd.total) && void 0 !== md ? md : 0) + Od;
```

#### 64. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2202` → after: `L2202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2202) · [Before (L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2202)

```diff
-         const Qr = nQ(Sr) ? Sr : [Sr];
+         const md = wm(Od) ? Od : [Od];
```

#### 65. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2279` → after: `L2279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2279) · [Before (L2279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2279)

```diff
-           const fr = mj(null !== (Zr = jr.attributes) && void 0 !== Zr ? Zr : {}, this._logger),
+           const hd = HX(null !== (Wd = Xd.attributes) && void 0 !== Wd ? Wd : {}, this._logger),
```

#### 66. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2287` → after: `L2287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2287) · [Before (L2287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2287)

```diff
-               asDouble: null !== (Wr = jr.total) && void 0 !== Wr ? Wr : 0
+               asDouble: null !== (Fd = Xd.total) && void 0 !== Fd ? Fd : 0
```

#### 67. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2295` → after: `L2295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2295) · [Before (L2295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2295)

```diff
-               asDouble: null !== (ar = jr.last) && void 0 !== ar ? ar : 0
+               asDouble: null !== (Rd = Xd.last) && void 0 !== Rd ? Rd : 0
```

#### 68. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2318` → after: `L2318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2318) · [Before (L2318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2318)

```diff
-               rr.total = (null !== (Sr = rr.total) && void 0 !== Sr ? Sr : 0) + (null !== (Qr = Wr.total) && void 0 !== Qr ? Qr : 0);
+               dd.total = (null !== (Od = dd.total) && void 0 !== Od ? Od : 0) + (null !== (md = Fd.total) && void 0 !== md ? md : 0);
```

#### 69. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2368` → after: `L2368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2368) · [Before (L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2368)

```diff
-             Qr.error(`You must initialize PostHog before calling ${rr}`)
+             md.error(`You must initialize PostHog before calling ${dd}`)
```

#### 70. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2370` → after: `L2370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2370) · [Before (L2370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2370)

```diff
-           createLogger: (Sr, Qr) => gj(`${rr} ${Sr}`, Qr)
+           createLogger: (Od, md) => nX(`${dd} ${Od}`, md)
```

#### 71. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2441` → after: `L2441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2441) · [Before (L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2441)

```diff
-       } = null != Zr ? Zr : {};
+       } = null != Wd ? Wd : {};
```

#### 72. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2554` → after: `L2554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2554) · [Before (L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2554)

```diff
-           const rr = `__ph_cookie_support_${QI()}`;
+           const dd = `__ph_cookie_support_${RK()}`;
```

#### 73. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2601` → after: `L2601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2601) · [Before (L2601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2601)

```diff
-               return Sr ? "; domain=." + Sr : ""
+               return Od ? "; domain=." + Od : ""
```

#### 74. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2805` → after: `L2805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2805) · [Before (L2805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2805)

```diff
-         this.vt._set(this._storageKey, rr ? 1 : 0, this._config.cookie_expiration, this._config.cross_subdomain_cookie, this._config.secure_cookie)
+         this.sH._set(this._storageKey, dd ? 1 : 0, this._config.cookie_expiration, this._config.cross_subdomain_cookie, this._config.secure_cookie)
```

#### 75. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2808` → after: `L2808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2808) · [Before (L2808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2808)

```diff
-         this.vt._remove(this._storageKey, this._config.cross_subdomain_cookie)
+         this.sH._remove(this._storageKey, this._config.cross_subdomain_cookie)
```

#### 76. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2816` → after: `L2816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2816) · [Before (L2816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2816)

```diff
-         return Qr || (Sr ? Sr + rr : "__ph_opt_in_out_" + rr)
+         return md || (Od ? Od + dd : "__ph_opt_in_out_" + dd)
```

#### 77. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2819` → after: `L2819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2819) · [Before (L2819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2819)

```diff
-         const rr = this.vt._get(this._storageKey);
+         const dd = this.sH._get(this._storageKey);
```

#### 78. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2824-L2825` → after: `L2824-L2825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2824-L2825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2824-L2825) · [Before (L2824-L2825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2824-L2825)

```diff
-           Sr = "localStorage" === rr ? EI : II,
-           Qr = Sr._is_supported() ? Sr : KI;
+           Od = "localStorage" === dd ? oK : QK,
+           md = Od._is_supported() ? Od : EK;
```

#### 79. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2828` → after: `L2828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2828) · [Before (L2828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2828)

```diff
-           const Sr = "localStorage" === rr ? II : EI;
+           const Od = "localStorage" === dd ? QK : oK;
```

#### 80. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2844` → after: `L2844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2844) · [Before (L2844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2844)

```diff
-         return TQ(rr) && rr ? rr : Sr
+         return xm(dd) && dd ? dd : Od
```

#### 81. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2907` → after: `L2907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2907) · [Before (L2907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2907)

```diff
-         XI(rr) && rr.textContent && (Sr += null !== (Qr = gI(rr.textContent)) && void 0 !== Qr ? Qr : "")
+         VK(dd) && dd.textContent && (Od += null !== (md = nK(dd.textContent)) && void 0 !== md ? md : "")
```

#### 82. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2943` → after: `L2943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2943) · [Before (L2943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2943)

```diff
-       JI = (rr, Sr) => /[a-z0-9]/i.test(Sr) ? mQ(cI, Sr) ? new RegExp(`\\b${Sr}\\b`).test(rr) : rr.includes(Sr) : rr === Sr,
+       fK = (dd, Od) => /[a-z0-9]/i.test(Od) ? Hm(lK, Od) ? new RegExp(`\\b${Od}\\b`).test(dd) : dd.includes(Od) : dd === Od,
```

#### 83. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2950` → after: `L2950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2950) · [Before (L2950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2950)

```diff
-         LI(rr) && Zf(rr) && !Wf(rr) && (Sr += ` ${CI(rr)}`, Qr = Qr || rr.getAttribute("aria-label") || "", kj(rr.childNodes, Zr))
+         sK(dd) && Xh(dd) && !Kh(dd) && (Od += ` ${LK(dd)}`, md = md || dd.getAttribute("aria-label") || "", cX(dd.childNodes, Wd))
```

#### 84. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2953` → after: `L2953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2953) · [Before (L2953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2953)

```diff
-       const Wr = (mf(Sr) ? Sr : "").toLowerCase(),
+       const Fd = (Hh(Od) ? Od : "").toLowerCase(),
```

#### 85. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2967` → after: `L2967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2967) · [Before (L2967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2967)

```diff
-       if (PQ(Sr) ? (Qr = !!Sr && sI, Zr = void 0, Wr = !1) : (Qr = null !== (ar = null == Sr ? void 0 : Sr.css_selector_ignorelist) && void 0 !== ar ? ar : sI, Zr = null == Sr ? void 0 : Sr.content_ignorelist, Wr = null !== (jr = null == Sr ? void 0 : Sr.ignore_text_selection) && … [truncated]
+       if (im(Od) ? (md = !!Od && Oh, Wd = void 0, Fd = !1) : (md = null !== (Rd = null == Od ? void 0 : Od.css_selector_ignorelist) && void 0 !== Rd ? Rd : Oh, Wd = null == Od ? void 0 : Od.content_ignorelist, Fd = null !== (Xd = null == Od ? void 0 : Od.ignore_text_selection) && … [truncated]
```

#### 86. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L2987` → after: `L2987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R2987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L2987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L2987) · [Before (L2987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L2987)

```diff
-           if (rr.length > FI) return Cj.error(`[PostHog] content_ignorelist array cannot exceed ${FI} items. Use css_selector_ignorelist for more complex matching.`), !1;
+           if (dd.length > CK) return LX.error(`[PostHog] content_ignorelist array cannot exceed ${CK} items. Use css_selector_ignorelist for more complex matching.`), !1;
```

#### 87. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L3111` → after: `L3111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R3111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L3111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L3111) · [Before (L3111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L3111)

```diff
-       return Sr = `${Sr} ${Uf(rr)}`.trim(), mf(Sr) ? Sr : ""
+       return Od = `${Od} ${bh(dd)}`.trim(), Hh(Od) ? Od : ""
```

#### 88. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L3120` → after: `L3120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R3120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L3120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L3120) · [Before (L3120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L3120)

```diff
-           Sr = `${Sr} ${Qr}`.trim(), rr.childNodes && rr.childNodes.length && (Sr = `${Sr} ${Uf(rr)}`.trim())
+           Od = `${Od} ${md}`.trim(), dd.childNodes && dd.childNodes.length && (Od = `${Od} ${bh(dd)}`.trim())
```

#### 89. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L3133` → after: `L3133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R3133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L3133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L3133) · [Before (L3133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L3133)

```diff
-       if (Sr) return nQ(Sr) ? Sr : HI(Sr)
+       if (Od) return wm(Od) ? Od : AK(Od)
```

#### 90. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L3141` → after: `L3141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R3141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L3141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L3141) · [Before (L3141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L3141)

```diff
-         return PQ(Zr) ? Zr : !!KQ(Zr) || Qr
+         return im(Wd) ? Wd : !!Em(Wd) || md
```

#### 91. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L3220` → after: `L3220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R3220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L3220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L3220) · [Before (L3220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L3220)

```diff
-                 const Qr = nQ(rr) ? rr : [rr];
+                 const md = wm(dd) ? dd : [dd];
```

#### 92. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L3268` → after: `L3268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R3268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L3268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L3268) · [Before (L3268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L3268)

```diff
-         const mr = rr.requestRouter.endpointFor("ui", `/project/${rr.config.token}/person/${rr.get_distinct_id()}`);
+         const od = dd.requestRouter.endpointFor("ui", `/project/${dd.config.token}/person/${dd.get_distinct_id()}`);
```

#### 93. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L3330` → after: `L3330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R3330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L3330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L3330) · [Before (L3330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L3330)

```diff
-             pathname: null !== (Qr = null == DS ? void 0 : DS.location.pathname) && void 0 !== Qr ? Qr : "",
+             pathname: null !== (md = null == fO ? void 0 : fO.location.pathname) && void 0 !== md ? md : "",
```

#### 94. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L3734` → after: `L3734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R3734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L3734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L3734) · [Before (L3734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L3734)

```diff
-       of = ["li_fat_id"];
+       lh = ["li_fat_id"];
```

#### 95. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L3742` → after: `L3742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R3742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L3742) · [Before (L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L3742)

```diff
-           return kj(of, (function(Sr) {
+           return cX(lh, (function(Od) {
```

#### 96. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L3806` → after: `L3806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R3806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L3806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L3806) · [Before (L3806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L3806)

```diff
-         $referring_domain: null == Zr ? void 0 : Zr == uf ? uf : null === (Qr = Mf(Zr)) || void 0 === Qr ? void 0 : Qr.host
+         $referring_domain: null == Wd ? void 0 : Wd == dv ? dv : null === (md = Ph(Wd)) || void 0 === md ? void 0 : md.host
```

#### 97. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L3834` → after: `L3834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R3834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L3834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L3834) · [Before (L3834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L3834)

```diff
-       jE = rr => `${rr}_cookie_identity_change_pending`,
+       Kv = dd => `${dd}_cookie_identity_change_pending`,
```

#### 98. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L3860` → after: `L3860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R3860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L3860) · [Before (L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L3860)

```diff
-         return KQ(Sr) ? Sr : {}
+         return Em(Od) ? Od : {}
```

#### 99. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L3875` → after: `L3875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R3875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L3875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L3875) · [Before (L3875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L3875)

```diff
-           })(rr), this._disabled = rr.disable_persistence || !!Sr, this.vt = this._buildStorage(rr), this._splitStorage = this._resolveSplitStorage(rr), this.load(Zr), this._markLoadedCrossTabFeatureFlagChangesPending(), rr.debug && Cj.info("Persistence loaded", rr.persistence, Y … [truncated]
+           })(dd), this._disabled = dd.disable_persistence || !!Od, this.sH = this._buildStorage(dd), this._splitStorage = this._resolveSplitStorage(dd), this.load(Wd), this._markLoadedCrossTabFeatureFlagChangesPending(), dd.debug && LX.info("Persistence loaded", dd.persistence, g … [truncated]
```

#### 100. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L3920` → after: `L3920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R3920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L3920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L3920) · [Before (L3920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L3920)

```diff
-         const ar = Sr === fE ? Qr : EI._parse(this._name);
+         const Rd = Od === vv ? md : oK._parse(this._name);
```

#### 101. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4011` → after: `L4011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4011) · [Before (L4011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4011)

```diff
-           const Zr = new Set(nQ(Sr) ? Sr : []),
+           const Wd = new Set(wm(Od) ? Od : []),
```

#### 102. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4047-L4048` → after: `L4047-L4048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4047-L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4047-L4048) · [Before (L4047-L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4047-L4048)

```diff
-             const Zr = KQ(Sr) ? Sr : {},
-               ar = KQ(Wr) ? Wr : {};
+             const Wd = Em(Od) ? Od : {},
+               Rd = Em(Fd) ? Fd : {};
```

#### 103. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4061` → after: `L4061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4061) · [Before (L4061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4061)

```diff
-         return lQ(Sr) && Sr > 0 ? Sr : 0
+         return um(Od) && Od > 0 ? Od : 0
```

#### 104. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4118` → after: `L4118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4118) · [Before (L4118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4118)

```diff
-         return !zr || Tr === er && vr === Kr || (this._localIdentityChangePending = !0, this._cookieIdentityChangePending = !0, BI._set(jE(this._name), !0), this._deleteProp(tr), this._deleteProp(Ir), this._deleteProp(Nr), this._deleteProp(fr), this._deleteProp(Yr), this._deleteP … [truncated]
+         return !bd || Jd === Yd && Ud === gd || (this._localIdentityChangePending = !0, this._cookieIdentityChangePending = !0, UK._set(Kv(this._name), !0), this._deleteProp(Hd), this._deleteProp(Kd), this._deleteProp(Nd), this._deleteProp(hd), this._deleteProp(Td), this._deleteP … [truncated]
```

#### 105. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4171` → after: `L4171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4171) · [Before (L4171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4171)

```diff
-                       ar = null !== (Wr = Ir.$user_state) && void 0 !== Wr ? Wr : VS;
+                       Rd = null !== (Fd = Kd.$user_state) && void 0 !== Fd ? Fd : jO;
```

#### 106. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4218` → after: `L4218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4218) · [Before (L4218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4218)

```diff
-         return "localstorage" === ar && EI._is_supported() ? (Qr = EI, Wr = !0) : "localstorage+cookie" === ar && Sr._is_supported() ? (Qr = Sr, Wr = !0, Zr = !0) : "sessionstorage" === ar && BI._is_supported() ? Qr = BI : "memory" === ar ? Qr = KI : "cookie" === ar && II._is_sup … [truncated]
+         return "localstorage" === Rd && oK._is_supported() ? (md = oK, Fd = !0) : "localstorage+cookie" === Rd && Od._is_supported() ? (md = Od, Fd = !0, Wd = !0) : "sessionstorage" === Rd && UK._is_supported() ? md = UK : "memory" === Rd ? md = EK : "cookie" === Rd && QK._is_sup … [truncated]
```

#### 107. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4221` → after: `L4221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4221) · [Before (L4221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4221)

```diff
-         return `${this._name}__${rr}`
+         return `${this._name}__${dd}`
```

#### 108. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4248` → after: `L4248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4248) · [Before (L4248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4248)

```diff
-         const Wr = this.vt._parse(this._name);
+         const Fd = this.sH._parse(this._name);
```

#### 109. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4252` → after: `L4252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4252) · [Before (L4252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4252)

```diff
-             Sr = null !== (ar = null == Qr ? void 0 : Qr.$user_state) && void 0 !== ar ? ar : VS,
+             Od = null !== (Rd = null == md ? void 0 : md.$user_state) && void 0 !== Rd ? Rd : jO,
```

#### 110. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4254` → after: `L4254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4254) · [Before (L4254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4254)

```diff
-             fr = null !== (jr = Wr.$user_state) && void 0 !== jr ? jr : VS;
+             hd = null !== (Xd = Fd.$user_state) && void 0 !== Xd ? Xd : jO;
```

#### 111. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4306` → after: `L4306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4306) · [Before (L4306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4306)

```diff
-           Zr = Qr ? EI._parse(this._groupEntryName(Qr)) : this.vt._parse(this._name);
+           Wd = md ? oK._parse(this._groupEntryName(md)) : this.sH._parse(this._name);
```

#### 112. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4310` → after: `L4310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4310) · [Before (L4310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4310)

```diff
-             const Sr = this.vt._parse(this._name);
+             const Od = this.sH._parse(this._name);
```

#### 113. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4335` → after: `L4335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4335) · [Before (L4335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4335)

```diff
-         const Zr = this._writeEntry(this.vt, this._name, this.props, fE);
+         const Wd = this._writeEntry(this.sH, this._name, this.props, vv);
```

#### 114. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4342` → after: `L4342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4342) · [Before (L4342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4342)

```diff
-         } = this._partitionProps(), Qr = this._writeEntry(this.vt, this._name, rr, fE);
+         } = this._partitionProps(), md = this._writeEntry(this.sH, this._name, dd, vv);
```

#### 115. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4373` → after: `L4373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4373) · [Before (L4373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4373)

```diff
-           ar ? Sr[ar][Zr] = Qr : rr[Zr] = Qr
+           Rd ? Od[Rd][Wd] = md : dd[Wd] = md
```

#### 116. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4389` → after: `L4389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4389) · [Before (L4389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4389)

```diff
-         if (Zr !== fE && !Wr.cU && !BQ(Wr.fingerprint)) return "skipped";
+         if (Wd !== vv && !Fd.dH && !Um(Fd.fingerprint)) return "skipped";
```

#### 117. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4392` → after: `L4392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4392) · [Before (L4392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4392)

```diff
-           if (ar = this._entryFingerprint(Qr, Zr), ar === Wr.fingerprint) return Wr.cU = !1, "skipped"
+           if (Rd = this._entryFingerprint(md, Wd), Rd === Fd.fingerprint) return Fd.dH = !1, "skipped"
```

#### 118. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4396` → after: `L4396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4396) · [Before (L4396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4396)

```diff
-         return rr._set(Sr, Qr, this._expire_days, this._cross_subdomain, this._secure, this._config.debug) ? (Wr.cU = !1, Zr !== fE && (Wr.persisted = !0), BQ(ar) || (Wr.fingerprint = ar), this._splitStorageEligible && (Wr.storageValue = EI._get(Sr)), "written") : (this._config.d … [truncated]
+         return dd._set(Od, md, this._expire_days, this._cross_subdomain, this._secure, this._config.debug) ? (Fd.dH = !1, Wd !== vv && (Fd.persisted = !0), Um(Rd) || (Fd.fingerprint = Rd), this._splitStorageEligible && (Fd.storageValue = oK._get(Od)), "written") : (this._config.d … [truncated]
```

#### 119. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4402` → after: `L4402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4402) · [Before (L4402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4402)

```diff
-         if (this._markAllCrossTabFeatureFlagChangesPending(), BQ(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), this.vt._remove(this._name, !1), this.vt._remove(this._name, !0), !rr && this._ownsSplitStorage)
+         if (this._markAllCrossTabFeatureFlagChangesPending(), Um(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), this.sH._remove(this._name, !1), this.sH._remove(this._name, !0), !dd && this._ownsSplitStorage)
```

#### 120. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4441` → after: `L4441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4441) · [Before (L4441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4441)

```diff
-         return Qr && this.register(Sr), this._campaign_params_url = rr, Qr ? Sr : void 0
+         return md && this.register(Od), this._campaign_params_url = dd, md ? Od : void 0
```

#### 121. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4480` → after: `L4480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4480) · [Before (L4480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4480)

```diff
-               Qr[`$initial_${UQ(Sr)}`] = rr
+               md[`$initial_${bm(Od)}`] = dd
```

#### 122. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4507` → after: `L4507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4507) · [Before (L4507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4507)

```diff
-         const Er = ar || jr ? this._buildStorage(rr) : this.vt;
+         const vd = Rd || Xd ? this._buildStorage(dd) : this.sH;
```

#### 123. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4516-L4517` → after: `L4516-L4517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4516-L4517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4516-L4517) · [Before (L4516-L4517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4516-L4517)

```diff
-             this.clear(), this.vt = Er, this._splitStorage = pr, this.props = rr, this.save()
-           } else jr && (this.vt = Er, Ir || (delete this._slotState[fE], this._writeNow()))
+             this.clear(), this.sH = vd, this._splitStorage = Qd, this.props = dd, this.save()
+           } else Xd && (this.sH = vd, Kd || (delete this._slotState[vv], this._writeNow()))
```

#### 124. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4573` → after: `L4573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4573) · [Before (L4573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4573)

```diff
-         Qr && (this._slotWriteState(Qr).cU = !0)
+         md && (this._slotWriteState(md).dH = !0)
```

#### 125. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4619` → after: `L4619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4619) · [Before (L4619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4619)

```diff
-               CE.info(`${rr||"events"} is quota limited.`), this.serverLimits[rr] = (new Date).getTime() + 6e4
+               Gv.info(`${dd||"events"} is quota limited.`), this.serverLimits[dd] = (new Date).getTime() + 6e4
```

#### 126. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4622` → after: `L4622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4622) · [Before (L4622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4622)

```diff
-             return void CE.warn(`could not rate limit - continuing. Error: "${null==rr?void 0:rr.message}"`, {
+             return void Gv.warn(`could not rate limit - continuing. Error: "${null==dd?void 0:dd.message}"`, {
```

#### 127. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4642` → after: `L4642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4642) · [Before (L4642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4642)

```diff
-         } = this, jr = (new Date).getTime(), Ir = null !== (Sr = null === (Qr = this.instance.persistence) || void 0 === Qr ? void 0 : Qr.get_property("$capture_rate_limit")) && void 0 !== Sr ? Sr : {
+         } = this, Xd = (new Date).getTime(), Kd = null !== (Od = null === (md = this.instance.persistence) || void 0 === md ? void 0 : md.get_property("$capture_rate_limit")) && void 0 !== Od ? Od : {
```

#### 128. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4663` → after: `L4663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4663) · [Before (L4663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4663)

```diff
-         if (this._isPropertyAllowed("$current_url") && this._isPropertyAllowed("$pathname") && (null == rQ ? void 0 : rQ.pathname)) return `${null!==(rr=rQ.origin)&&void 0!==rr?rr:""}${rQ.pathname}`
+         if (this._isPropertyAllowed("$current_url") && this._isPropertyAllowed("$pathname") && (null == mm ? void 0 : mm.pathname)) return `${null!==(dd=mm.origin)&&void 0!==dd?dd:""}${mm.pathname}`
```

#### 129. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4670` → after: `L4670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4670) · [Before (L4670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4670)

```diff
-         } = this, ar = this._triggeringPage(), jr = this._isPropertyAllowed("$session_id") ? null === (Sr = (Qr = this.instance).get_session_id) || void 0 === Sr ? void 0 : Sr.call(Qr) : void 0, Ir = [`${rr} event(s) dropped since the last warning`, ar ? `triggered on ${ar}` : vo … [truncated]
+         } = this, Rd = this._triggeringPage(), Xd = this._isPropertyAllowed("$session_id") ? null === (Od = (md = this.instance).get_session_id) || void 0 === Od ? void 0 : Od.call(md) : void 0, Kd = [`${dd} event(s) dropped since the last warning`, Rd ? `triggered on ${Rd}` : vo … [truncated]
```

#### 130. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4672` → after: `L4672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4672) · [Before (L4672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4672)

```diff
-           $$client_ingestion_warning_message: `posthog-js client rate limited: ${Ir}. Config is set to ${Wr} events per second and ${Zr} events burst limit.`
+           $$client_ingestion_warning_message: `posthog-js client rate limited: ${Kd}. Config is set to ${Fd} events per second and ${Wd} events burst limit.`
```

#### 131. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4784` → after: `L4784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4784) · [Before (L4784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4784)

```diff
-         var Zr = new(rr instanceof VE ? VE : rr instanceof iE ? iE : AE)(Qr - Sr);
+         var Wd = new(dd instanceof cv ? cv : dd instanceof jv ? jv : zv)(md - Od);
```

#### 132. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4937` → after: `L4937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4937) · [Before (L4937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4937)

```diff
-         return `${Wr}${jr?`?${jr}`:""}${Zr?`#${Zr}`:""}`
+         return `${Fd}${Xd?`?${Xd}`:""}${Wd?`#${Wd}`:""}`
```

#### 133. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4944-L4946` → after: `L4944-L4946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4944-L4946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4944-L4946) · [Before (L4944-L4946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4944-L4946)

```diff
-           const [Zr, Wr] = rr.split("="), ar = Qr && null !== (Sr = jr[Zr]) && void 0 !== Sr ? Sr : Wr;
-           return delete jr[Zr], `${Zr}=${ar}`
-         }))) && void 0 !== Zr ? Zr : [], fr = function(rr) {
+           const [Wd, Fd] = dd.split("="), Rd = md && null !== (Od = Xd[Wd]) && void 0 !== Od ? Od : Fd;
+           return delete Xd[Wd], `${Wd}=${Rd}`
+         }))) && void 0 !== Wd ? Wd : [], hd = function(dd) {
```

#### 134. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4953` → after: `L4953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L4953) · [Before (L4953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L4953)

```diff
-         return fr && Ir.push(fr), Ir.length > 0 ? `${Wr}?${Ir.join("&")}` : Wr
+         return hd && Kd.push(hd), Kd.length > 0 ? `${Fd}?${Kd.join("&")}` : Fd
```

#### 135. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5068` → after: `L5068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5068) · [Before (L5068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5068)

```diff
-             Qr = (rr => "data=" + encodeURIComponent("string" == typeof rr ? rr : Cf(rr)))(rr);
+             md = (dd => "data=" + encodeURIComponent("string" == typeof dd ? dd : Lh(dd)))(dd);
```

#### 136. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5154` → after: `L5154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5154) · [Before (L5154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5154)

```diff
-               return rr > 0 ? rr : void 0
+               return dd > 0 ? dd : void 0
```

#### 137. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5179` → after: `L5179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5179) · [Before (L5179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5179)

```diff
-         } = null != Wr ? Wr : {};
+         } = null != Fd ? Fd : {};
```

#### 138. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5206` → after: `L5206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5206) · [Before (L5206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5206)

```diff
-         } = null != Zr ? Zr : {}, Ir = new Headers;
+         } = null != Wd ? Wd : {}, Kd = new Headers;
```

#### 139. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5219` → after: `L5219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5219) · [Before (L5219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5219)

```diff
-                 Sr.abort(EW("AbortError", "PostHog request timed out" + ((Qr = rr.timeout) ? ` after ${Qr}ms` : "")))
+                 Od.abort(oF("AbortError", "PostHog request timed out" + ((md = dd.timeout) ? ` after ${md}ms` : "")))
```

#### 140. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5247` → after: `L5247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5247) · [Before (L5247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5247)

```diff
-             Zr = null != jr ? jr : BQ(ar) ? 0 : void 0;
+             Wd = null != Xd ? Xd : Um(Rd) ? 0 : void 0;
```

#### 141. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5278` → after: `L5278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5278) · [Before (L5278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5278)

```diff
-           } = null != Zr ? Zr : {};
+           } = null != Wd ? Wd : {};
```

#### 142. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5280` → after: `L5280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5280) · [Before (L5280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5280)

```diff
-           const Ir = ar instanceof Blob ? ar : new Blob([ar], {
+           const Kd = Rd instanceof Blob ? Rd : new Blob([Rd], {
```

#### 143. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5285` → after: `L5285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5285) · [Before (L5285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5285)

```diff
-           if (nQ(fr) && fr.length > 1 && (null != jr ? jr : 0) > 16384) {
+           if (wm(hd) && hd.length > 1 && (null != Xd ? Xd : 0) > 16384) {
```

#### 144. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5287` → after: `L5287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5287) · [Before (L5287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5287)

```diff
-               Qr = Sr => nQ(rr.data) ? Sr : YW(YW({}, rr.data), {}, {
+               md = Od => wm(dd.data) ? Od : gF(gF({}, dd.data), {}, {
```

#### 145. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5296` → after: `L5296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5296) · [Before (L5296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5296)

```diff
-           Cj.warn(`Beacon of ~${null!=jr?jr:0} bytes was rejected by the browser, falling back to ${SQ?"fetch":"XHR"}`), SQ ? Rp(YW(YW({}, rr), {}, {
+           LX.warn(`Beacon of ~${null!=Xd?Xd:0} bytes was rejected by the browser, falling back to ${Wm?"fetch":"XHR"}`), Wm ? AQ(gF(gF({}, dd), {}, {
```

#### 146. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5332` → after: `L5332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5332) · [Before (L5332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5332)

```diff
-       })) : (Sr.transport = Sr.transport || rr.config.api_transport, Sr.headers = YW(YW({}, rr.config.request_headers), Sr.headers), Sr.compression = "best-available" === Sr.compression ? null !== (Zr = rr.compression) && void 0 !== Zr ? Zr : Sr.compressionFallback : Sr.compressi … [truncated]
+       })) : (Od.transport = Od.transport || dd.config.api_transport, Od.headers = gF(gF({}, dd.config.request_headers), Od.headers), Od.compression = "best-available" === Od.compression ? null !== (Wd = dd.compression) && void 0 !== Wd ? Wd : Od.compressionFallback : Od.compressi … [truncated]
```

#### 147. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5335` → after: `L5335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5335) · [Before (L5335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5335)

```diff
-           callback: null != Sr ? Sr : Sr => {
+           callback: null != Od ? Od : Od => {
```

#### 148. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5341` → after: `L5341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5341) · [Before (L5341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5341)

```diff
-         const jr = null !== (Qr = ar.transport) && void 0 !== Qr ? Qr : "fetch";
+         const Xd = null !== (md = Rd.transport) && void 0 !== md ? md : "fetch";
```

#### 149. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5344` → after: `L5344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5344) · [Before (L5344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5344)

```diff
-           const Zr = (nQ(rr) ? rr : [rr]).map((rr => YW(YW({}, rr), rr.timestamp instanceof Date && !isNaN(rr.timestamp.getTime()) ? {
+           const Wd = (wm(dd) ? dd : [dd]).map((dd => gF(gF({}, dd), dd.timestamp instanceof Date && !isNaN(dd.timestamp.getTime()) ? {
```

#### 150. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5349` → after: `L5349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5349) · [Before (L5349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5349)

```diff
-             api_key: null !== (Sr = null == Wr || null === (Qr = Wr.properties) || void 0 === Qr ? void 0 : Qr.token) && void 0 !== Sr ? Sr : null == Wr ? void 0 : Wr.token,
+             api_key: null !== (Od = null == Fd || null === (md = Fd.properties) || void 0 === md ? void 0 : md.token) && void 0 !== Od ? Od : null == Fd ? void 0 : Fd.token,
```

#### 151. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5365` → after: `L5365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5365) · [Before (L5365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5365)

```diff
-           }(Ir, (rr => rr.transport === jr))) || void 0 === Wr ? void 0 : Wr.method) && void 0 !== Zr ? Zr : Ir[0].method;
+           }(Kd, (dd => dd.transport === Xd))) || void 0 === Fd ? void 0 : Fd.method) && void 0 !== Wd ? Wd : Kd[0].method;
```

#### 152. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5445` → after: `L5445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5445) · [Before (L5445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5445)

```diff
-             ar = ((Wr ? Wr.batchKey : null) || Wr.url) + (Wr.batchGroup ? `:${Wr.batchGroup}` : "");
+             Rd = ((Fd ? Fd.batchKey : null) || Fd.url) + (Fd.batchGroup ? `:${Fd.batchGroup}` : "");
```

#### 153. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5490` → after: `L5490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5490) · [Before (L5490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5490)

```diff
-               if ((0 === rr.statusCode ? 3 : 10) > (null != Qr ? Qr : 0)) return void this._enqueue(YW({
+               if ((0 === dd.statusCode ? 3 : 10) > (null != md ? md : 0)) return void this._enqueue(gF({
```

#### 154. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5493` → after: `L5493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5493) · [Before (L5493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5493)

```diff
-               0 === rr.statusCode && Cj.warn(`Request failed before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped retrying after ${null!=Qr?Qr:0} retries.`)
+               0 === dd.statusCode && LX.warn(`Request failed before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped retrying after ${null!=md?md:0} retries.`)
```

#### 155. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5507` → after: `L5507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5507) · [Before (L5507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5507)

```diff
-             }(Qr), null != Sr ? Sr : 0),
+             }(md), null != Od ? Od : 0),
```

#### 156. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5513` → after: `L5513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5513) · [Before (L5513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5513)

```diff
-           let ar = `Enqueued failed request for retry in ${Zr}`;
+           let Rd = `Enqueued failed request for retry in ${Wd}`;
```

#### 157. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5558` → after: `L5558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5558) · [Before (L5558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5558)

```diff
-             this._context.lastScrollY = Math.ceil(ar), this._context.maxScrollY = Math.max(ar, null !== (rr = this._context.maxScrollY) && void 0 !== rr ? rr : 0), this._context.maxScrollHeight = Math.max(jr, null !== (Sr = this._context.maxScrollHeight) && void 0 !== Sr ? Sr : 0 … [truncated]
+             this._context.lastScrollY = Math.ceil(Rd), this._context.maxScrollY = Math.max(Rd, null !== (dd = this._context.maxScrollY) && void 0 !== dd ? dd : 0), this._context.maxScrollHeight = Math.max(Xd, null !== (Od = this._context.maxScrollHeight) && void 0 !== Od ? Od : 0 … [truncated]
```

#### 158. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5640` → after: `L5640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5640) · [Before (L5640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5640)

```diff
-             "$current_url" === Qr && (Qr = "url"), rr[`$session_entry_${UQ(Qr)}`] = Sr
+             "$current_url" === md && (md = "url"), dd[`$session_entry_${bm(md)}`] = Od
```

#### 159. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5675` → after: `L5675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5675) · [Before (L5675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5675)

```diff
-           rr && !Sr ? this._windowId = rr : BI._remove(this._window_id_storage_key), BI._set(this._primary_window_exists_storage_key, !0)
+           dd && !Od ? this._windowId = dd : UK._remove(this._window_id_storage_key), UK._set(this._primary_window_exists_storage_key, !0)
```

#### 160. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5720` → after: `L5720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5720) · [Before (L5720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5720)

```diff
-           [sr]: [this._sessionActivityTimestamp, null !== (rr = this._sessionId) && void 0 !== rr ? rr : null, this._sessionStartTimestamp]
+           [dO]: [this._sessionActivityTimestamp, null !== (dd = this._sessionId) && void 0 !== dd ? dd : null, this._sessionStartTimestamp]
```

#### 161. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5724` → after: `L5724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5724) · [Before (L5724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5724)

```diff
-         const [rr] = this._getSessionId(), Sr = XQ(rr) ? rr : 0, Qr = XQ(this._sessionActivityTimestamp) ? this._sessionActivityTimestamp : 0;
+         const [dd] = this._getSessionId(), Od = Vm(dd) ? dd : 0, md = Vm(this._sessionActivityTimestamp) ? this._sessionActivityTimestamp : 0;
```

#### 162. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5788` → after: `L5788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5788) · [Before (L5788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5788)

```diff
-           Ur = mr ? Nr : XQ(fr) && Math.abs(Zr - fr) > Jp;
+           qd = od ? Nd : Vm(hd) && Math.abs(Wd - hd) > ZQ;
```

#### 163. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5813-L5814` → after: `L5813-L5814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5813-L5814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5813-L5814) · [Before (L5813-L5814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5813-L5814)

```diff
-         const er = XQ(pr) && rr && !Ur ? pr : Zr,
-           Kr = XQ(fr) ? fr : (new Date).getTime();
+         const Yd = Vm(Qd) && dd && !qd ? Qd : Wd,
+           gd = Vm(hd) ? hd : (new Date).getTime();
```

#### 164. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5826` → after: `L5826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5826) · [Before (L5826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5826)

```diff
-           changeReason: tr ? yr : void 0,
+           changeReason: Hd ? wd : void 0,
```

#### 165. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5858` → after: `L5858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5858) · [Before (L5858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5858)

```diff
-           return TQ(Qr) && Qr.length > 0 ? Qr : void 0
+           return xm(md) && md.length > 0 ? md : void 0
```

#### 166. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5866-L5867` → after: `L5866-L5867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5866-L5867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5866-L5867) · [Before (L5866-L5867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5866-L5867)

```diff
-       let Qr = `$survey_${Sr}/${rr.id}`;
-       return rr.current_iteration && rr.current_iteration > 0 && (Qr = `$survey_${Sr}/${rr.id}/${rr.current_iteration}`), Qr
+       let md = `$survey_${Od}/${dd.id}`;
+       return dd.current_iteration && dd.current_iteration > 0 && (md = `$survey_${Od}/${dd.id}/${dd.current_iteration}`), md
```

#### 167. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5943` → after: `L5943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5943) · [Before (L5943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5943)

```diff
-         return Sr || (Sr = this.apiHost.replace(`.${fx}`, ".posthog.com")), "https://app.posthog.com" === Sr ? "https://us.posthog.com" : Sr
+         return Od || (Od = this.apiHost.replace(`.${ht}`, ".posthog.com")), "https://app.posthog.com" === Od ? "https://us.posthog.com" : Od
```

#### 168. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5987` → after: `L5987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5987) · [Before (L5987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5987)

```diff
-         if (Sr && (Sr = "/" === Sr[0] ? Sr : `/${Sr}`), "ui" === rr) return this._prepareEndpoint(rr, Sr, this.uiHost + Sr);
+         if (Od && (Od = "/" === Od[0] ? Od : `/${Od}`), "ui" === dd) return this._prepareEndpoint(dd, Od, this.uiHost + Od);
```

#### 169. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5991` → after: `L5991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5991) · [Before (L5991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5991)

```diff
-           if (Qr) return this._prepareEndpoint(rr, Sr, `${Qr}${Sr}`)
+           if (md) return this._prepareEndpoint(dd, Od, `${md}${Od}`)
```

#### 170. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5997` → after: `L5997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5997) · [Before (L5997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5997)

```diff
-             return this._prepareEndpoint(rr, Sr, `https://${this.region}-assets.${Qr}`);
+             return this._prepareEndpoint(dd, Od, `https://${this.region}-assets.${md}`);
```

#### 171. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L5999` → after: `L5999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R5999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L5999) · [Before (L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L5999)

```diff
-             return this._prepareEndpoint(rr, Sr, `https://${this.region}.${Qr}`)
+             return this._prepareEndpoint(dd, Od, `https://${this.region}.${md}`)
```

#### 172. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6006` → after: `L6006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6006) · [Before (L6006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6006)

```diff
-           const Sr = (rr => ((rr, Sr) => `seenSurvey_${function(rr){return rr.current_iteration&&rr.current_iteration>0?`${rr.id}_${rr.current_iteration}`:rr.id}(Sr)}`)(0, rr))(rr);
+           const Od = (dd => ((dd, Od) => `seenSurvey_${function(dd){return dd.current_iteration&&dd.current_iteration>0?`${dd.id}_${dd.current_iteration}`:dd.id}(Od)}`)(0, dd))(dd);
```

#### 173. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6037` → after: `L6037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6037) · [Before (L6037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6037)

```diff
-         for (const [Wr, ar] of Object.entries(null !== (rr = this._instance.config.integrations) && void 0 !== rr ? rr : {})) {
+         for (const [Fd, Rd] of Object.entries(null !== (dd = this._instance.config.integrations) && void 0 !== dd ? dd : {})) {
```

#### 174. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6107` → after: `L6107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6107) · [Before (L6107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6107)

```diff
-           return null !== (rr = this.instance.get_property("$device_id")) && void 0 !== rr ? rr : this.distinctId
+           return null !== (dd = this.instance.get_property("$device_id")) && void 0 !== dd ? dd : this.distinctId
```

#### 175. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6111` → after: `L6111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6111) · [Before (L6111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6111)

```diff
-           return "string" == typeof rr ? rr : void 0
+           return "string" == typeof dd ? dd : void 0
```

#### 176. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6121` → after: `L6121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6121) · [Before (L6121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6121)

```diff
-           return null !== (rr = null === (Sr = this.instance.persistence) || void 0 === Sr ? void 0 : Sr.get_initial_props()) && void 0 !== rr ? rr : {}
+           return null !== (dd = null === (Od = this.instance.persistence) || void 0 === Od ? void 0 : Od.get_initial_props()) && void 0 !== dd ? dd : {}
```

#### 177. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6131-L6134` → after: `L6131-L6134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6131-L6134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6131-L6134) · [Before (L6131-L6134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6131-L6134)

```diff
-               sessionId: null !== (Sr = null == ar ? void 0 : ar.sessionId) && void 0 !== Sr ? Sr : "",
-               windowId: null !== (Qr = null == ar ? void 0 : ar.windowId) && void 0 !== Qr ? Qr : "",
-               sessionStartTimestamp: null !== (Zr = null == ar ? void 0 : ar.sessionStartTimestamp) && void 0 !== Zr ? Zr : 0,
-               lastActivityTimestamp: null !== (Wr = null == ar ? void 0 : ar.lastActivityTimestamp) && void 0 !== Wr ? Wr : 0
+               sessionId: null !== (Od = null == Rd ? void 0 : Rd.sessionId) && void 0 !== Od ? Od : "",
+               windowId: null !== (md = null == Rd ? void 0 : Rd.windowId) && void 0 !== md ? md : "",
+               sessionStartTimestamp: null !== (Wd = null == Rd ? void 0 : Rd.sessionStartTimestamp) && void 0 !== Wd ? Wd : 0,
+               lastActivityTimestamp: null !== (Fd = null == Rd ? void 0 : Rd.lastActivityTimestamp) && void 0 !== Fd ? Fd : 0
```

#### 178. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6157` → after: `L6157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6157) · [Before (L6157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6157)

```diff
-             case ex:
+             case Yt:
```

#### 179. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6161` → after: `L6161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6161) · [Before (L6161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6161)

```diff
-             case Kx:
+             case gt:
```

#### 180. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6164` → after: `L6164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6164) · [Before (L6164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6164)

```diff
-             case yx:
+             case wt:
```

#### 181. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6167` → after: `L6167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6167) · [Before (L6167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6167)

```diff
-             case nx:
+             case pt:
```

#### 182. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6188` → after: `L6188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6188) · [Before (L6188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6188)

```diff
-             const Wr = null !== (Zr = Qr.target) && void 0 !== Zr ? Zr : "api",
+             const Fd = null !== (Wd = md.target) && void 0 !== Wd ? Wd : "api",
```

#### 183. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6251` → after: `L6251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6251) · [Before (L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6251)

```diff
-           defaults: null != rr ? rr : "unset",
+           defaults: null != dd ? dd : "unset",
```

#### 184. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6385` → after: `L6385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6385) · [Before (L6385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6385)

```diff
-           rr ? (Sr = `persistence is set to '${this.config.persistence}'`, Qr = "memory" === this.config.persistence ? "on every page load" : "for every new browser tab or window", Zr = "Either set persistence to 'localStorage+cookie', keep this persistence and pass a stable ID t … [truncated]
+           dd ? (Od = `persistence is set to '${this.config.persistence}'`, md = "memory" === this.config.persistence ? "on every page load" : "for every new browser tab or window", Wd = "Either set persistence to 'localStorage+cookie', keep this persistence and pass a stable ID t … [truncated]
```

#### 185. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6420` → after: `L6420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6420) · [Before (L6420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6420)

```diff
-           const Qr = null !== (Sr = rr.__defaultExtensionClasses) && void 0 !== Sr ? Sr : {};
+           const md = null !== (Od = dd.__defaultExtensionClasses) && void 0 !== Od ? Od : {};
```

#### 186. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6434` → after: `L6434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6434) · [Before (L6434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6434)

```diff
-           }, this.on("eventCaptured", (rr => Cj.info(`send "${null==rr?void 0:rr.event}"`, rr)))
+           }, this.on("eventCaptured", (dd => LX.info(`send "${null==dd?void 0:dd.event}"`, dd)))
```

#### 187. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6439` → after: `L6439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6439) · [Before (L6439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6439)

```diff
-             const ar = null !== (Wr = vx[Zr]) && void 0 !== Wr ? Wr : new rr;
+             const Rd = null !== (Fd = Ut[Wd]) && void 0 !== Fd ? Fd : new dd;
```

#### 188. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6451` → after: `L6451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6451) · [Before (L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6451)

```diff
-           if (this.__loaded) return Ir !== (null === (fr = this.config) || void 0 === fr ? void 0 : fr.token) ? console.warn("[PostHog.js]", `You have already initialized PostHog with a different project token! Re-initializing is a no-op, so events will keep going to the project  … [truncated]
+           if (this.__loaded) return Kd !== (null === (hd = this.config) || void 0 === hd ? void 0 : hd.token) ? console.warn("[PostHog.js]", `You have already initialized PostHog with a different project token! Re-initializing is a no-op, so events will keep going to the project  … [truncated]
```

#### 189. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6499-L6500` → after: `L6499-L6500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6499-L6500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6499-L6500) · [Before (L6499-L6500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6499-L6500)

```diff
-                 Zr = Sr.bootstrap.isIdentifiedID ? Qr : rr;
-               this.persistence.set_property(YS, Sr.bootstrap.isIdentifiedID ? iS : VS), this.register({
+                 Wd = Od.bootstrap.isIdentifiedID ? md : dd;
+               this.persistence.set_property(YO, Od.bootstrap.isIdentifiedID ? DO : jO), this.register({
```

#### 190. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6540` → after: `L6540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6540) · [Before (L6540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6540)

```diff
-               Cj.error(`Failed to set up extension "${rr.name}"`, Qr);
+               LX.error(`Failed to set up extension "${dd.name}"`, md);
```

#### 191. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6545` → after: `L6545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6545) · [Before (L6545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6545)

```diff
-                 Cj.error(`Failed to dispose extension "${rr.name}"`, Sr)
+                 LX.error(`Failed to dispose extension "${dd.name}"`, Od)
```

#### 192. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6552` → after: `L6552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6552) · [Before (L6552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6552)

```diff
-           const ar = null !== (Sr = null === (Qr = this.config.__extensionClasses) || void 0 === Qr ? void 0 : Qr.featureFlags) && void 0 !== Sr ? Sr : null === (Zr = rr.__defaultExtensionClasses) || void 0 === Zr ? void 0 : Zr.featureFlags;
+           const Rd = null !== (Od = null === (md = this.config.__extensionClasses) || void 0 === md ? void 0 : md.featureFlags) && void 0 !== Od ? Od : null === (Wd = dd.__defaultExtensionClasses) || void 0 === Wd ? void 0 : Wd.featureFlags;
```

#### 193. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6588` → after: `L6588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6588) · [Before (L6588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6588)

```diff
-           Zr.exceptions && this._extensions.push(this.exceptions = null !== (ar = this.exceptions) && void 0 !== ar ? ar : new Zr.exceptions(this)), Zr.historyAutocapture && this._extensions.push(this.historyAutocapture = new Zr.historyAutocapture(this)), Zr.tracingHeaders && thi … [truncated]
+           Wd.exceptions && this._extensions.push(this.exceptions = null !== (Rd = this.exceptions) && void 0 !== Rd ? Rd : new Wd.exceptions(this)), Wd.historyAutocapture && this._extensions.push(this.historyAutocapture = new Wd.historyAutocapture(this)), Wd.tracingHeaders && thi … [truncated]
```

#### 194. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6590` → after: `L6590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6590) · [Before (L6590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6590)

```diff
-           })), Zr.autocapture && this._enrollExtension(this.autocapture = new Zr.autocapture(this), Wr), Zr.surveys && this._enrollExtension(this.surveys = null !== (jr = this.surveys) && void 0 !== jr ? jr : new Zr.surveys(this), Wr), Zr.logs && this._enrollExtension(this.logs = … [truncated]
+           })), Wd.autocapture && this._enrollExtension(this.autocapture = new Wd.autocapture(this), Fd), Wd.surveys && this._enrollExtension(this.surveys = null !== (Xd = this.surveys) && void 0 !== Xd ? Xd : new Wd.surveys(this), Fd), Wd.logs && this._enrollExtension(this.logs = … [truncated]
```

#### 195. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6621` → after: `L6621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6621) · [Before (L6621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6621)

```diff
-           }), this.config.__preview_deferred_init_extensions && Cj.info(`PostHog extensions initialized (${Qr}ms)`)
+           }), this.config.__preview_deferred_init_extensions && LX.info(`PostHog extensions initialized (${md}ms)`)
```

#### 196. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6648` → after: `L6648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6648) · [Before (L6648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6648)

```diff
-             ("string" == typeof Sr ? rr === Sr : Sr.test(rr)) && this.setInternalOrTestUser()
+             ("string" == typeof Od ? dd === Od : Od.test(dd)) && this.setInternalOrTestUser()
```

#### 197. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6781` → after: `L6781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6781) · [Before (L6781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6781)

```diff
-           return TQ(Sr) && rr.pattern.test(Sr) ? Sr : void 0
+           return xm(Od) && dd.pattern.test(Od) ? Od : void 0
```

#### 198. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6790` → after: `L6790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6790) · [Before (L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6790)

```diff
-           const jr = TQ(rr) && Cx.test(rr) ? rr : void 0,
+           const Xd = xm(dd) && Gt.test(dd) ? dd : void 0,
```

#### 199. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6801` → after: `L6801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6801) · [Before (L6801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6801)

```diff
-           } : this._storeMetaIdentifier(Wr, `fb.1.${Date.now()}.${jr}`, ar) : ar ? {
+           } : this._storeMetaIdentifier(Fd, `fb.1.${Date.now()}.${Xd}`, Rd) : Rd ? {
```

#### 200. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6925` → after: `L6925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6925) · [Before (L6925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6925)

```diff
-               [`${RE}/${rr}`]: (new Date).toISOString()
+               [`${Av}/${dd}`]: (new Date).toISOString()
```

#### 201. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6941` → after: `L6941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6941) · [Before (L6941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6941)

```diff
-             const jr = null !== (Zr = null === (Wr = xr.$set) || void 0 === Wr ? void 0 : Wr[Sr.property]) && void 0 !== Zr ? Zr : KQ(null === (ar = xr.properties) || void 0 === ar ? void 0 : ar.$set) ? xr.properties.$set[Sr.property] : void 0;
+             const Xd = null !== (Wd = null === (Fd = td.$set) || void 0 === Fd ? void 0 : Fd[Od.property]) && void 0 !== Wd ? Wd : Em(null === (Rd = td.properties) || void 0 === Rd ? void 0 : Rd.$set) ? td.properties.$set[Od.property] : void 0;
```

#### 202. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6945` → after: `L6945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6945) · [Before (L6945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6945)

```diff
-           const vr = null !== (Zr = null == Qr ? void 0 : Qr._url) && void 0 !== Zr ? Zr : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
+           const Ud = null !== (Wd = null == md ? void 0 : md._url) && void 0 !== Wd ? Wd : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
```

#### 203. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6956` → after: `L6956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6956) · [Before (L6956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6956)

```diff
-               batchGroup: xr.properties.$session_id + (xr.properties.$window_id ? `-${xr.properties.$window_id}` : "")
+               batchGroup: td.properties.$session_id + (td.properties.$window_id ? `-${td.properties.$window_id}` : "")
```

#### 204. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6973` → after: `L6973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6973) · [Before (L6973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6973)

```diff
-             !Lr.transport && !Lr.callback && yQ(null !== (Xr = this.config.request_headers) && void 0 !== Xr ? Xr : {}) && this._isPageUnloading && (rr = "sendBeacon"), this._send_retriable_request(Lr, rr)
+             !Bd.transport && !Bd.callback && Jm(null !== (sd = this.config.request_headers) && void 0 !== sd ? sd : {}) && this._isPageUnloading && (dd = "sendBeacon"), this._send_retriable_request(Bd, dd)
```

#### 205. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6986` → after: `L6986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L6986) · [Before (L6986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L6986)

```diff
-           return null !== (rr = this._browserClientAdapter) && void 0 !== rr ? rr : this._browserClientAdapter = new Tx(this)
+           return null !== (dd = this._browserClientAdapter) && void 0 !== dd ? dd : this._browserClientAdapter = new Jt(this)
```

#### 206. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L7100` → after: `L7100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R7100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L7100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L7100) · [Before (L7100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L7100)

```diff
-           KQ(Nr) && !yQ(Nr) && (Ir.$groups = YW(YW({}, KQ(Ur) ? Ur : {}), Nr)), kj(["$referrer", "$referring_domain"], (rr => {
+           Em(Nd) && !Jm(Nd) && (Kd.$groups = gF(gF({}, Em(qd) ? qd : {}), Nd)), cX(["$referrer", "$referring_domain"], (dd => {
```

#### 207. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L7182` → after: `L7182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R7182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L7182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L7182) · [Before (L7182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L7182)

```diff
-           return null !== (rr = null === (Sr = this.featureFlags) || void 0 === Sr ? void 0 : Sr.getAllFeatureFlags()) && void 0 !== rr ? rr : []
+           return null !== (dd = null === (Od = this.featureFlags) || void 0 === Od ? void 0 : Od.getAllFeatureFlags()) && void 0 !== dd ? dd : []
```

#### 208. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L7186` → after: `L7186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R7186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L7186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L7186) · [Before (L7186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L7186)

```diff
-           return null !== (Qr = null === (Zr = this.featureFlags) || void 0 === Zr ? void 0 : Zr.isFeatureEnabled(rr, Sr)) && void 0 !== Qr ? Qr : null == Sr ? void 0 : Sr.defaultValue
+           return null !== (md = null === (Wd = this.featureFlags) || void 0 === Wd ? void 0 : Wd.isFeatureEnabled(dd, Od)) && void 0 !== md ? md : null == Od ? void 0 : Od.defaultValue
```

#### 209. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L7222` → after: `L7222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R7222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L7222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L7222) · [Before (L7222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L7222)

```diff
-           return null !== (Sr = null === (Qr = this.sessionManager) || void 0 === Qr ? void 0 : Qr.onSessionId(rr)) && void 0 !== Sr ? Sr : () => {}
+           return null !== (Od = null === (md = this.sessionManager) || void 0 === md ? void 0 : md.onSessionId(dd)) && void 0 !== Od ? Od : () => {}
```

#### 210. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L7259` → after: `L7259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R7259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L7259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L7259) · [Before (L7259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L7259)

```diff
-           return null !== (Sr = null === (Qr = this.surveys) || void 0 === Qr ? void 0 : Qr.canRenderSurvey(rr)) && void 0 !== Sr ? Sr : {
+           return null !== (Od = null === (md = this.surveys) || void 0 === md ? void 0 : md.canRenderSurvey(dd)) && void 0 !== Od ? Od : {
```

#### 211. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L7267` → after: `L7267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R7267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L7267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L7267) · [Before (L7267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L7267)

```diff
-           return null !== (Qr = null === (Zr = this.surveys) || void 0 === Zr ? void 0 : Zr.canRenderSurveyAsync(rr, Sr)) && void 0 !== Qr ? Qr : Promise.resolve({
+           return null !== (md = null === (Wd = this.surveys) || void 0 === Wd ? void 0 : Wd.canRenderSurveyAsync(dd, Od)) && void 0 !== md ? md : Promise.resolve({
```

#### 212. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L7273` → after: `L7273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R7273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L7273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L7273) · [Before (L7273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L7273)

```diff
-           return !rr || vQ(rr) ? (Cj.critical("Unique user id has not been set in posthog.identify"), !1) : "$posthog_cookieless" === rr ? (Cj.critical(`The string "${rr}" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.`), !1) : ![" … [truncated]
+           return !dd || Bm(dd) ? (LX.critical("Unique user id has not been set in posthog.identify"), !1) : "$posthog_cookieless" === dd ? (LX.critical(`The string "${dd}" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.`), !1) : ![" … [truncated]
```

#### 213. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L7344` → after: `L7344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R7344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L7344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L7344) · [Before (L7344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L7344)

```diff
-           const Qr = (nQ(rr) ? rr : [rr]).filter((rr => TQ(rr) && rr.length > 0));
+           const md = (wm(dd) ? dd : [dd]).filter((dd => xm(dd) && dd.length > 0));
```

#### 214. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L7395` → after: `L7395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R7395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L7395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L7395) · [Before (L7395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L7395)

```diff
-           const Sr = PQ(rr) ? rr : null == rr ? void 0 : rr.resetDeviceID,
+           const Od = im(dd) ? dd : null == dd ? void 0 : dd.resetDeviceID,
```

#### 215. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L7428` → after: `L7428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R7428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L7428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L7428) · [Before (L7428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L7428)

```diff
-                 $device_id: rr ? Sr : pr
+                 $device_id: dd ? Od : Qd
```

#### 216. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L7517` → after: `L7517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R7517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L7517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L7517) · [Before (L7517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L7517)

```diff
-           return null !== (rr = null === (Sr = this.sessionManager) || void 0 === Sr ? void 0 : Sr.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== rr ? rr : ""
+           return null !== (dd = null === (Od = this.sessionManager) || void 0 === Od ? void 0 : Od.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== dd ? dd : ""
```

#### 217. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L7525` → after: `L7525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R7525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L7525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L7525) · [Before (L7525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L7525)

```diff
-           let Zr = this.requestRouter.endpointFor("ui", `/project/${this.config.token}/replay/${Sr}`);
+           let Wd = this.requestRouter.endpointFor("ui", `/project/${this.config.token}/replay/${Od}`);
```

#### 218. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L7528` → after: `L7528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R7528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L7528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L7528) · [Before (L7528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L7528)

```diff
-             const Sr = null !== (Wr = rr.timestampLookBack) && void 0 !== Wr ? Wr : 10;
+             const Od = null !== (Fd = dd.timestampLookBack) && void 0 !== Fd ? Fd : 10;
```

#### 219. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L7530` → after: `L7530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R7530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L7530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L7530) · [Before (L7530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L7530)

```diff
-             Zr += `?t=${Math.max(Math.floor(((new Date).getTime()-Qr)/1e3)-Sr,0)}`
+             Wd += `?t=${Math.max(Math.floor(((new Date).getTime()-md)/1e3)-Od,0)}`
```

#### 220. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L7618` → after: `L7618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R7618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L7618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L7618) · [Before (L7618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L7618)

```diff
-           return null !== (Sr = null === (Qr = this.logs) || void 0 === Qr ? void 0 : Qr.logger) && void 0 !== Sr ? Sr : rr._noopLogger
+           return null !== (Od = null === (md = this.logs) || void 0 === md ? void 0 : md.logger) && void 0 !== Od ? Od : dd._noopLogger
```

#### 221. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L7644` → after: `L7644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R7644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L7644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L7644) · [Before (L7644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L7644)

```diff
-           let Sr = null !== (rr = this.config.name) && void 0 !== rr ? rr : Ax;
+           let Od = null !== (dd = this.config.name) && void 0 !== dd ? dd : zt;
```

#### 222. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L7688` → after: `L7688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R7688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L7688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L7688) · [Before (L7688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L7688)

```diff
-               const Sr = null !== (jr = null === (Ir = this.config.__extensionClasses) || void 0 === Ir ? void 0 : Ir.sessionRecording) && void 0 !== jr ? jr : null === (fr = rr.__defaultExtensionClasses) || void 0 === fr ? void 0 : fr.sessionRecording;
+               const Od = null !== (Xd = null === (Kd = this.config.__extensionClasses) || void 0 === Kd ? void 0 : Kd.sessionRecording) && void 0 !== Xd ? Xd : null === (hd = dd.__defaultExtensionClasses) || void 0 === hd ? void 0 : hd.sessionRecording;
```

#### 223. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L7693` → after: `L7693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R7693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L7693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L7693) · [Before (L7693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L7693)

```diff
-             this.consent.optInOut(!0), this._sync_opt_out_with_persistence(), this._start_queue_if_opted_in(), null === (Qr = this.sessionRecording) || void 0 === Qr || Qr.startIfEnabledOrStop(), "on_reject" == this.config.cookieless_mode && (null === (xr = this.surveys) || void  … [truncated]
+             this.consent.optInOut(!0), this._sync_opt_out_with_persistence(), this._start_queue_if_opted_in(), null === (md = this.sessionRecording) || void 0 === md || md.startIfEnabledOrStop(), "on_reject" == this.config.cookieless_mode && (null === (td = this.surveys) || void  … [truncated]
```

#### 224. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L7749` → after: `L7749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R7749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L7749) · [Before (L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L7749)

```diff
-             return ar ? rr[Sr] : !!jr && (Wr && Wr.warn(`Config field '${Qr}' is deprecated. Please use '${Sr}' instead. The old field will be removed in a future major version.`), rr[Qr])
+             return Rd ? dd[Od] : !!Xd && (Fd && Fd.warn(`Config field '${md}' is deprecated. Please use '${Od}' instead. The old field will be removed in a future major version.`), dd[md])
```

#### 225. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L7755` → after: `L7755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R7755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L7755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L7755) · [Before (L7755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L7755)

```diff
-           const Qr = Object.keys(null !== (Sr = rr.properties) && void 0 !== Sr ? Sr : {}).filter(qQ),
+           const md = Object.keys(null !== (Od = dd.properties) && void 0 !== Od ? Od : {}).filter(rm),
```

#### 226. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L7760-L7761` → after: `L7760-L7761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R7760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L7760-L7761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L7760-L7761) · [Before (L7760-L7761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L7760-L7761)

```diff
-               const Sr = `Event '${rr.event}' was rejected in beforeSend function`;
-               return HQ(rr.event) ? Cj.warn(`${Sr}. This can cause unexpected behavior.`) : Cj.info(Sr), null
+               const Od = `Event '${dd.event}' was rejected in beforeSend function`;
+               return Am(dd.event) ? LX.warn(`${Od}. This can cause unexpected behavior.`) : LX.info(Od), null
```

#### 227. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L7763` → after: `L7763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R7763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L7763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L7763) · [Before (L7763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L7763)

```diff
-             Wr.properties && !yQ(Wr.properties) || Cj.warn(`Event '${rr.event}' has no properties after beforeSend function, this is likely an error.`)
+             Fd.properties && !Jm(Fd.properties) || LX.warn(`Event '${dd.event}' has no properties after beforeSend function, this is likely an error.`)
```

#### 228. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L7765` → after: `L7765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R7765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L7765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L7765) · [Before (L7765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L7765)

```diff
-             return Cj.error(`Error in beforeSend function for event '${rr.event}':`, Sr), null
+             return LX.error(`Error in beforeSend function for event '${dd.event}':`, Od), null
```

#### 229. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L7768` → after: `L7768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R7768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L7768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L7768) · [Before (L7768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L7768)

```diff
-             if (Wr.properties && LQ(Wr.properties[ar])) return Cj.warn(`Event '${rr.event}' had its '${ar}' property removed in a beforeSend function. This property is required for ingestion, so the event will be dropped.`), null;
+             if (Fd.properties && sm(Fd.properties[Rd])) return LX.warn(`Event '${dd.event}' had its '${Rd}' property removed in a beforeSend function. This property is required for ingestion, so the event will be dropped.`), null;
```

#### 230. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L7811` → after: `L7811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R7811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L7811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L7811) · [Before (L7811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L7811)

```diff
-         const Sr = KQ(rr) ? rr : {};
+         const Od = Em(dd) ? dd : {};
```

#### 231. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L7853` → after: `L7853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R7853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L7853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L7853) · [Before (L7853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L7853)

```diff
-           const Qr = null !== (Sr = this._refreshConfig().css_selector_ignorelist) && void 0 !== Sr ? Sr : iI,
+           const md = null !== (Od = this._refreshConfig().css_selector_ignorelist) && void 0 !== Od ? Od : eK,
```

#### 232. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L7863` → after: `L7863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R7863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L7863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L7863) · [Before (L7863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L7863)

```diff
-             Wr = PI(ar) ? ar.host : ar && LI(ar) ? ar : null
+             Fd = iK(Rd) ? Rd.host : Rd && sK(Rd) ? Rd : null
```

#### 233. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L7894` → after: `L7894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R7894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L7894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L7894) · [Before (L7894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L7894)

```diff
-             const rr = null !== (Wr = this._refreshConfig().css_selector_ignorelist) && void 0 !== Wr ? Wr : iI;
+             const dd = null !== (Fd = this._refreshConfig().css_selector_ignorelist) && void 0 !== Fd ? Fd : eK;
```

#### 234. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L8016` → after: `L8016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R8016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L8016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L8016) · [Before (L8016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L8016)

```diff
-           const jr = null !== (Sr = this._isDisabledServerSide) && void 0 !== Sr ? Sr : !!Qr;
+           const Xd = null !== (Od = this._isDisabledServerSide) && void 0 !== Od ? Od : !!md;
```

#### 235. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L8053` → after: `L8053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R8053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L8053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L8053) · [Before (L8053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L8053)

```diff
-               if (AI(fr, null !== (jr = null == Qr ? void 0 : Qr.css_selector_ignorelist) && void 0 !== jr ? jr : iI)) return !1;
+               if (jK(hd, null !== (Xd = null == md ? void 0 : md.css_selector_ignorelist) && void 0 !== Xd ? Xd : eK)) return !1;
```

#### 236. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L8177` → after: `L8177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R8177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L8177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L8177) · [Before (L8177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L8177)

```diff
-                         for (const Sr of rr.attr_class) Zr += `.${Sr.replace(/"/g,"")}`
+                         for (const Od of dd.attr_class) Wd += `.${Od.replace(/"/g,"")}`
```

#### 237. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L8182-L8183` → after: `L8182-L8183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R8182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L8182-L8183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L8182-L8183) · [Before (L8182-L8183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L8182-L8183)

```diff
-                           "nth-child": null !== (Sr = rr.nth_child) && void 0 !== Sr ? Sr : 0,
-                           "nth-of-type": null !== (Qr = rr.nth_of_type) && void 0 !== Qr ? Qr : 0
+                           "nth-child": null !== (Od = dd.nth_child) && void 0 !== Od ? Od : 0,
+                           "nth-of-type": null !== (md = dd.nth_of_type) && void 0 !== md ? md : 0
```

#### 238. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L8200` → after: `L8200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R8200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L8200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L8200) · [Before (L8200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L8200)

```diff
-                         return `${Sr}="${Qr}"`
+                         return `${Od}="${md}"`
```

#### 239. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L8250` → after: `L8250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R8250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L8250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L8250) · [Before (L8250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L8250)

```diff
-                 Qr.$selected_content = Sr, Qr.$clipboard_text_length = null !== (pr = null == rr ? void 0 : rr.length) && void 0 !== pr ? pr : 0
+                 md.$selected_content = Od, md.$clipboard_text_length = null !== (Qd = null == dd ? void 0 : dd.length) && void 0 !== Qd ? Qd : 0
```

#### 240. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L8275` → after: `L8275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R8275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L8275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L8275) · [Before (L8275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L8275)

```diff
-         if (eQ(rr)) return null !== (Sr = rr.__posthog_layer__) && void 0 !== Sr ? Sr : rr.__rrweb_layer__
+         if (am(dd)) return null !== (Od = dd.__posthog_layer__) && void 0 !== Od ? Od : dd.__rrweb_layer__
```

#### 241. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L8347` → after: `L8347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R8347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L8347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L8347) · [Before (L8347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L8347)

```diff
-           this._isSurveysEnabled = PQ(Sr) ? Sr : Sr.length > 0, mx.info(`flags response received, isSurveysEnabled: ${this._isSurveysEnabled}`), this.loadIfEnabled()
+           this._isSurveysEnabled = im(Od) ? Od : Od.length > 0, ot.info(`flags response received, isSurveysEnabled: ${this._isSurveysEnabled}`), this.loadIfEnabled()
```

#### 242. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L8421` → after: `L8421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R8421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L8421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L8421) · [Before (L8421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L8421)

```diff
-         const Wr = null === (Qr = null !== (Zr = this._client) && void 0 !== Zr ? Zr : this._initialClientState) || void 0 === Qr ? void 0 : Qr.kv.get(jS);
+         const Fd = null === (md = null !== (Wd = this._client) && void 0 !== Wd ? Wd : this._initialClientState) || void 0 === md ? void 0 : md.kv.get(hO);
```

#### 243. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L8445` → after: `L8445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R8445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L8445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L8445) · [Before (L8445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L8445)

```diff
-         const Zr = null !== (Qr = this._client) && void 0 !== Qr ? Qr : this._initialClientState;
+         const Wd = null !== (md = this._client) && void 0 !== md ? md : this._initialClientState;
```

#### 244. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L8504` → after: `L8504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R8504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L8504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L8504) · [Before (L8504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L8504)

```diff
-           const rr = `Surveys API could not be loaded, status: ${Qr}`;
+           const dd = `Surveys API could not be loaded, status: ${md}`;
```

#### 245. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L8540` → after: `L8540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R8540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L8540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L8540) · [Before (L8540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L8540)

```diff
-         const Qr = null === (rr = null !== (Sr = this._client) && void 0 !== Sr ? Sr : this._initialClientState) || void 0 === rr ? void 0 : rr.kv.get(IS);
+         const md = null === (dd = null !== (Od = this._client) && void 0 !== Od ? Od : this._initialClientState) || void 0 === dd ? void 0 : dd.kv.get(vO);
```

#### 246. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L8550` → after: `L8550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R8550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L8550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L8550) · [Before (L8550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L8550)

```diff
-           current_iteration: null !== (Qr = null == Sr ? void 0 : Sr.iteration) && void 0 !== Qr ? Qr : null
+           current_iteration: null !== (md = null == Od ? void 0 : Od.iteration) && void 0 !== md ? md : null
```

#### 247. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L8580` → after: `L8580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R8580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L8580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L8580) · [Before (L8580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L8580)

```diff
-         const Wr = null === (Sr = null !== (Qr = this._client) && void 0 !== Qr ? Qr : this._initialClientState) || void 0 === Sr ? void 0 : Sr.kv.get(jS);
+         const Fd = null === (Od = null !== (md = this._client) && void 0 !== md ? md : this._initialClientState) || void 0 === Od ? void 0 : Od.kv.get(hO);
```

#### 248. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L8597` → after: `L8597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R8597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L8597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L8597) · [Before (L8597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L8597)

```diff
-               const Qr = null != Sr ? Sr : {
+               const md = null != Od ? Od : {
```

#### 249. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L8617` → after: `L8617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R8617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L8617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L8617) · [Before (L8617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L8617)

```diff
-           Sr = null !== (Zr = Qr.find((Sr => Sr.id === rr))) && void 0 !== Zr ? Zr : null
+           Od = null !== (Wd = md.find((Od => Od.id === dd))) && void 0 !== Wd ? Wd : null
```

#### 250. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L8664` → after: `L8664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R8664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L8664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L8664) · [Before (L8664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L8664)

```diff
-             const Wr = null !== (Zr = Sr.find((Sr => Sr.id === rr))) && void 0 !== Zr ? Zr : null;
+             const Fd = null !== (Wd = Od.find((Od => Od.id === dd))) && void 0 !== Wd ? Wd : null;
```

#### 251. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L8684` → after: `L8684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R8684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L8684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L8684) · [Before (L8684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L8684)

```diff
-         if (!Ux.includes(Wr.type)) return void mx.warn(`Surveys of type ${Wr.type} cannot be rendered in the app`);
+         if (!qt.includes(Fd.type)) return void ot.warn(`Surveys of type ${Fd.type} cannot be rendered in the app`);
```

#### 252. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L8688` → after: `L8688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R8688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L8688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L8688) · [Before (L8688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L8688)

```diff
-             mx.info(`Rendering survey ${Wr.id} with delay of ${Wr.appearance.surveyPopupDelaySeconds} seconds`);
+             ot.info(`Rendering survey ${Fd.id} with delay of ${Fd.appearance.surveyPopupDelaySeconds} seconds`);
```

#### 253. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L8691` → after: `L8691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R8691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L8691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L8691) · [Before (L8691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L8691)

```diff
-               this._renderTimeouts.delete(rr), !this._disposed && this._configSource.isCapturing() && (mx.info(`Rendering survey ${Wr.id} with delay of ${null===(Sr=Wr.appearance)||void 0===Sr?void 0:Sr.surveyPopupDelaySeconds} seconds`), null === (Zr = this._surveyManager) || vo … [truncated]
+               this._renderTimeouts.delete(dd), !this._disposed && this._configSource.isCapturing() && (ot.info(`Rendering survey ${Fd.id} with delay of ${null===(Od=Fd.appearance)||void 0===Od?void 0:Od.surveyPopupDelaySeconds} seconds`), null === (Wd = this._surveyManager) || vo … [truncated]
```

#### 254. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L8922` → after: `L8922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R8922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L8922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L8922) · [Before (L8922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L8922)

```diff
-                 const Zr = null !== (Qr = this._actionToItems.get(Sr.name)) && void 0 !== Qr ? Qr : [];
+                 const Wd = null !== (md = this._actionToItems.get(Od.name)) && void 0 !== md ? md : [];
```

#### 255. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L8931` → after: `L8931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R8931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L8931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L8931) · [Before (L8931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L8931)

```diff
-             const Wr = null !== (Zr = rr.get(Qr)) && void 0 !== Zr ? Zr : [];
+             const Fd = null !== (Wd = dd.get(md)) && void 0 !== Wd ? Wd : [];
```

#### 256. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L9025` → after: `L9025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R9025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L9025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L9025) · [Before (L9025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L9025)

```diff
-           return Qr && "object" == typeof Qr ? Qr : {}
+           return md && "object" == typeof md ? md : {}
```

#### 257. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L9048` → after: `L9048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R9048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L9048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L9048) · [Before (L9048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L9048)

```diff
-           return lQ(Sr) ? Sr : void 0
+           return um(Od) ? Od : void 0
```

#### 258. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L9061` → after: `L9061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R9061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L9061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L9061) · [Before (L9061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L9061)

```diff
-           return ar && Wr === ar ? Zr : []
+           return Rd && Fd === Rd ? Wd : []
```

#### 259. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L9281-L9282` → after: `L9281-L9282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R9281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L9281-L9282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L9281-L9282) · [Before (L9281-L9282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L9281-L9282)

```diff
-             Zr = null !== (rr = this._dueRefreshIntervalMs) && void 0 !== rr ? rr : Qr;
-           BQ(Qr) || BQ(Zr) || this._config.remoteRequestsDisabled || !this._document || "hidden" === this._document.visibilityState || Date.now() - (null !== (Sr = this._lastRefreshAt) && void 0 !== Sr ? Sr : 0) < Zr || (this._dueRefreshIntervalMs = this._hadUserInteraction || !t … [truncated]
+             Wd = null !== (dd = this._dueRefreshIntervalMs) && void 0 !== dd ? dd : md;
+           Um(md) || Um(Wd) || this._config.remoteRequestsDisabled || !this._document || "hidden" === this._document.visibilityState || Date.now() - (null !== (Od = this._lastRefreshAt) && void 0 !== Od ? Od : 0) < Wd || (this._dueRefreshIntervalMs = this._hadUserInteraction || !t … [truncated]
```

#### 260. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L9316` → after: `L9316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R9316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L9316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L9316) · [Before (L9316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L9316)

```diff
-           Qr = !this._config.remoteRequestsDisabled && this._document && !BQ(Sr) && Sr > 0 ? Sr : void 0;
+           md = !this._config.remoteRequestsDisabled && this._document && !Um(Od) && Od > 0 ? Od : void 0;
```

#### 261. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L9343` → after: `L9343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R9343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L9343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L9343) · [Before (L9343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L9343)

```diff
-         this._stopAutomaticRefresh(), this._requestGeneration++, this._additionalReloadRequested = !1, this._initializingClient = void 0, this._settleReloads(this._pendingReloads, "Rr"), this._settleReloads(this._activeReloads, "Rr"), this._client && (this._clearDebouncer(), null … [truncated]
+         this._stopAutomaticRefresh(), this._requestGeneration++, this._additionalReloadRequested = !1, this._initializingClient = void 0, this._settleReloads(this._pendingReloads, "Ad"), this._settleReloads(this._activeReloads, "Ad"), this._client && (this._clearDebouncer(), null … [truncated]
```

#### 262. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L9378` → after: `L9378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R9378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L9378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L9378) · [Before (L9378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L9378)

```diff
-           Ur = Er ? jr : Qr && !nQ(ar) ? Object.keys(ar || {}) : Array.from(new Set([...Object.keys(Zr), ...Object.keys(Wr)])),
+           qd = vd ? Xd : md && !wm(Rd) ? Object.keys(Rd || {}) : Array.from(new Set([...Object.keys(Wd), ...Object.keys(Fd)])),
```

#### 263. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L9381` → after: `L9381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R9381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L9381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L9381) · [Before (L9381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L9381)

```diff
-           zr = Er || Qr ? Ur : Array.from(new Set([...Object.keys(tr), ...Object.keys(hr)])),
+           bd = vd || md ? qd : Array.from(new Set([...Object.keys(Hd), ...Object.keys(yd)])),
```

#### 264. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L9417` → after: `L9417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R9417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L9417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L9417) · [Before (L9417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L9417)

```diff
-           for (const [Zr, Wr] of Object.entries(Qr)) Sr[`$feature/${Zr}`] = Wr;
+           for (const [Wd, Fd] of Object.entries(md)) Od[`$feature/${Wd}`] = Fd;
```

#### 265. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L9446` → after: `L9446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R9446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L9446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L9446) · [Before (L9446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L9446)

```diff
-           Zr = null !== (rr = null === (Sr = Qr.bootstrap) || void 0 === Sr ? void 0 : Sr.featureFlags) && void 0 !== rr ? rr : {};
+           Wd = null !== (dd = null === (Od = md.bootstrap) || void 0 === Od ? void 0 : Od.featureFlags) && void 0 !== dd ? dd : {};
```

#### 266. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L9449` → after: `L9449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R9449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L9449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L9449) · [Before (L9449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L9449)

```diff
-           const rr = null !== (Wr = null === (ar = Qr.bootstrap) || void 0 === ar ? void 0 : ar.featureFlagPayloads) && void 0 !== Wr ? Wr : {},
+           const dd = null !== (Fd = null === (Rd = md.bootstrap) || void 0 === Rd ? void 0 : Rd.featureFlagPayloads) && void 0 !== Fd ? Fd : {},
```

#### 267. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L9462-L9463` → after: `L9462-L9463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R9462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L9462-L9463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L9462-L9463) · [Before (L9462-L9463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L9462-L9463)

```diff
-         const ar = (null == Qr ? void 0 : Qr.merge) && null !== (Zr = this._prop("$enabled_feature_flags")) && void 0 !== Zr ? Zr : {},
-           jr = (null == Qr ? void 0 : Qr.merge) && null !== (Wr = this._prop("$feature_flag_payloads")) && void 0 !== Wr ? Wr : {},
+         const Rd = (null == md ? void 0 : md.merge) && null !== (Wd = this._prop("$enabled_feature_flags")) && void 0 !== Wd ? Wd : {},
+           Xd = (null == md ? void 0 : md.merge) && null !== (Fd = this._prop("$feature_flag_payloads")) && void 0 !== Fd ? Fd : {},
```

#### 268. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L9500-L9501` → after: `L9500-L9501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R9500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L9500-L9501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L9500-L9501) · [Before (L9500-L9501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L9500-L9501)

```diff
-             fr = BQ(Wr) ? null !== (ar = null == rr ? void 0 : rr.enabled) && void 0 !== ar && ar : !!Wr,
-             Er = BQ(Wr) ? null == rr ? void 0 : rr.variant : "string" == typeof Wr ? Wr : void 0,
+             hd = Um(Fd) ? null !== (Rd = null == dd ? void 0 : dd.enabled) && void 0 !== Rd && Rd : !!Fd,
+             vd = Um(Fd) ? null == dd ? void 0 : dd.variant : "string" == typeof Fd ? Fd : void 0,
```

#### 269. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L9505` → after: `L9505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R9505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L9505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L9505) · [Before (L9505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L9505)

```diff
-               variant: fr ? null != Er ? Er : null == rr ? void 0 : rr.variant : void 0
+               variant: hd ? null != vd ? vd : null == dd ? void 0 : dd.variant : void 0
```

#### 270. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L9633` → after: `L9633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R9633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L9633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L9633) · [Before (L9633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L9633)

```diff
-             const Wr = null !== (Sr = rr.json) && void 0 !== Sr ? Sr : {},
+             const Fd = null !== (Od = dd.json) && void 0 !== Od ? Od : {},
```

#### 271. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L9639` → after: `L9639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R9639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L9639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L9639) · [Before (L9639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L9639)

```diff
-             rr.error ? Ir.push(rr.error instanceof Error && "AbortError" === rr.error.name ? "timeout" : rr.error instanceof Error ? im : "unknown_error") : 200 !== rr.statusCode && Ir.push(`api_error_${rr.statusCode}`), Wr.errorsWhileComputingFlags && Ir.push("errors_while_compu … [truncated]
+             dd.error ? Kd.push(dd.error instanceof Error && "AbortError" === dd.error.name ? "timeout" : dd.error instanceof Error ? jo : "unknown_error") : 200 !== dd.statusCode && Kd.push(`api_error_${dd.statusCode}`), Fd.errorsWhileComputingFlags && Kd.push("errors_while_compu … [truncated]
```

#### 272. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L9652` → after: `L9652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R9652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L9652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L9652) · [Before (L9652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L9652)

```diff
-         let tr = null !== (Sr = this._config.requestMaxRetries) && void 0 !== Sr ? Sr : 1;
+         let Hd = null !== (Od = this._config.requestMaxRetries) && void 0 !== Od ? Od : 1;
```

#### 273. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L9687` → after: `L9687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R9687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L9687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L9687) · [Before (L9687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L9687)

```diff
-         return null !== (Qr = null == Zr ? void 0 : Zr.variant) && void 0 !== Qr ? Qr : null == Zr ? void 0 : Zr.enabled
+         return null !== (md = null == Wd ? void 0 : Wd.variant) && void 0 !== md ? md : null == Wd ? void 0 : Wd.enabled
```

#### 274. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L9733` → after: `L9733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R9733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L9733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L9733) · [Before (L9733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L9733)

```diff
-             Qr = [...null !== (mr = this._prop("$feature_flag_errors")) && void 0 !== mr ? mr : []];
+             md = [...null !== (od = this._prop("$feature_flag_errors")) && void 0 !== od ? od : []];
```

#### 275. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L9738` → after: `L9738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R9738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L9738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L9738) · [Before (L9738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L9738)

```diff
-             $feature_flag_payload: null != ar ? ar : null,
+             $feature_flag_payload: null != Rd ? Rd : null,
```

#### 276. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L9741-L9742` → after: `L9741-L9742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R9741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L9741-L9742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L9741-L9742) · [Before (L9741-L9742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L9741-L9742)

```diff
-             $feature_flag_bootstrapped_response: null !== (Nr = null === (Ur = this._config.bootstrap) || void 0 === Ur || null === (Ur = Ur.featureFlags) || void 0 === Ur ? void 0 : Ur[rr]) && void 0 !== Nr ? Nr : null,
-             $feature_flag_bootstrapped_payload: null !== (tr = null === (Yr = this._config.bootstrap) || void 0 === Yr || null === (Yr = Yr.featureFlagPayloads) || void 0 === Yr ? void 0 : Yr[rr]) && void 0 !== tr ? tr : null,
+             $feature_flag_bootstrapped_response: null !== (Nd = null === (qd = this._config.bootstrap) || void 0 === qd || null === (qd = qd.featureFlags) || void 0 === qd ? void 0 : qd[dd]) && void 0 !== Nd ? Nd : null,
+             $feature_flag_bootstrapped_payload: null !== (Hd = null === (Td = this._config.bootstrap) || void 0 === Td || null === (Td = Td.featureFlagPayloads) || void 0 === Td ? void 0 : Td[dd]) && void 0 !== Hd ? Hd : null,
```

#### 277. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L9746` → after: `L9746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R9746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L9746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L9746) · [Before (L9746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L9746)

```diff
-           const xr = null !== (Kr = null == Sr || null === (yr = Sr.reason) || void 0 === yr ? void 0 : yr.description) && void 0 !== Kr ? Kr : null == Sr || null === (Br = Sr.reason) || void 0 === Br ? void 0 : Br.code;
+           const td = null !== (gd = null == Od || null === (wd = Od.reason) || void 0 === wd ? void 0 : wd.description) && void 0 !== gd ? gd : null == Od || null === (Ed = Od.reason) || void 0 === Ed ? void 0 : Ed.code;
```

#### 278. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L9752` → after: `L9752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R9752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L9752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L9752) · [Before (L9752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L9752)

```diff
-           variant: "string" == typeof Wr ? Wr : void 0,
+           variant: "string" == typeof Fd ? Fd : void 0,
```

#### 279. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L9836` → after: `L9836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R9836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L9836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L9836) · [Before (L9836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L9836)

```diff
-                     return [rr, null !== (Sr = Qr[rr].variant) && void 0 !== Sr ? Sr : Qr[rr].enabled]
+                     return [dd, null !== (Od = md[dd].variant) && void 0 !== Od ? Od : md[dd].enabled]
```

#### 280. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L9978` → after: `L9978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R9978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L9978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L9978) · [Before (L9978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L9978)

```diff
-             [`$feature_enrollment/${rr}`]: Sr
+             [`$feature_enrollment/${dd}`]: Od
```

#### 281. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L10016` → after: `L10016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R10016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L10016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L10016) · [Before (L10016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L10016)

```diff
-           const Wr = Sr ? `&${Sr.map((rr=>`stage=${rr}`)).join("&")}` : "";
+           const Fd = Od ? `&${Od.map((dd=>`stage=${dd}`)).join("&")}` : "";
```

#### 282. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L10019` → after: `L10019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R10019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L10019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L10019) · [Before (L10019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L10019)

```diff
-             const rr = yield Zr.sendRequest(`/api/early_access_features/?token=${Zr.projectToken}${Wr}`, {
+             const dd = yield Wd.sendRequest(`/api/early_access_features/?token=${Wd.projectToken}${Fd}`, {
```

#### 283. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L10111` → after: `L10111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R10111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L10111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L10111) · [Before (L10111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L10111)

```diff
-         this._requestGeneration++, this._settleReloads(this._pendingReloads, "Rr"), this._settleReloads(this._activeReloads, "Rr"), this._additionalReloadRequested = !1, this._baseEventProperties = {}, this._eventPropertiesWithFlagValues = {}, this._bootstrapState = void 0, this. … [truncated]
+         this._requestGeneration++, this._settleReloads(this._pendingReloads, "Ad"), this._settleReloads(this._activeReloads, "Ad"), this._additionalReloadRequested = !1, this._baseEventProperties = {}, this._eventPropertiesWithFlagValues = {}, this._bootstrapState = void 0, this. … [truncated]
```

#### 284. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L10125-L10126` → after: `L10125-L10126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R10125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L10125-L10126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L10125-L10126) · [Before (L10125-L10126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L10125-L10126)

```diff
-               featureFlags: null !== (Qr = null === (Zr = rr.bootstrap) || void 0 === Zr ? void 0 : Zr.featureFlags) && void 0 !== Qr ? Qr : void 0,
-               featureFlagPayloads: null !== (Wr = null === (ar = rr.bootstrap) || void 0 === ar ? void 0 : ar.featureFlagPayloads) && void 0 !== Wr ? Wr : void 0
+               featureFlags: null !== (md = null === (Wd = dd.bootstrap) || void 0 === Wd ? void 0 : Wd.featureFlags) && void 0 !== md ? md : void 0,
+               featureFlagPayloads: null !== (Fd = null === (Rd = dd.bootstrap) || void 0 === Rd ? void 0 : Rd.featureFlagPayloads) && void 0 !== Fd ? Fd : void 0
```

#### 285. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L10133` → after: `L10133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R10133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L10133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L10133) · [Before (L10133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L10133)

```diff
-             refreshIntervalMs: null !== (jr = rr.remote_config_refresh_interval_ms) && void 0 !== jr ? jr : 3e5,
+             refreshIntervalMs: null !== (Xd = dd.remote_config_refresh_interval_ms) && void 0 !== Xd ? Xd : 3e5,
```

#### 286. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L10136` → after: `L10136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R10136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L10136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L10136) · [Before (L10136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L10136)

```diff
-             requestMaxRetries: Math.max(0, null !== (Ir = rr.feature_flag_request_max_retries) && void 0 !== Ir ? Ir : 1),
+             requestMaxRetries: Math.max(0, null !== (Kd = dd.feature_flag_request_max_retries) && void 0 !== Kd ? Kd : 1),
```

#### 287. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L10138` → after: `L10138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R10138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L10138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L10138) · [Before (L10138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L10138)

```diff
-             evaluationContexts: null !== (fr = null !== (Er = rr.evaluation_contexts) && void 0 !== Er ? Er : rr.evaluation_environments) && void 0 !== fr ? fr : [],
+             evaluationContexts: null !== (hd = null !== (vd = dd.evaluation_contexts) && void 0 !== vd ? vd : dd.evaluation_environments) && void 0 !== hd ? hd : [],
```

#### 288. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L10173-L10175` → after: `L10173-L10175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R10173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L10173-L10175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L10173-L10175) · [Before (L10173-L10175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L10173-L10175)

```diff
-       const Er = null !== (Qr = null == rr ? void 0 : rr.flushIntervalMs) && void 0 !== Qr ? Qr : 3e3,
-         pr = null !== (Zr = null == rr ? void 0 : rr.maxBufferSize) && void 0 !== Zr ? Zr : 100,
-         xr = (null == Sr ? void 0 : Sr.consoleCapture) ? void 0 : null !== (Wr = null == rr ? void 0 : rr.maxLogsPerInterval) && void 0 !== Wr ? Wr : 1e3,
+       const vd = null !== (md = null == dd ? void 0 : dd.flushIntervalMs) && void 0 !== md ? md : 3e3,
+         Qd = null !== (Wd = null == dd ? void 0 : dd.maxBufferSize) && void 0 !== Wd ? Wd : 100,
+         td = (null == Od ? void 0 : Od.consoleCapture) ? void 0 : null !== (Fd = null == dd ? void 0 : dd.maxLogsPerInterval) && void 0 !== Fd ? Fd : 1e3,
```

#### 289. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L10198-L10200` → after: `L10198-L10200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R10198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L10198-L10200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L10198-L10200) · [Before (L10198-L10200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L10198-L10200)

```diff
-         serviceName: null !== (ar = null !== (jr = null == Nr ? void 0 : Nr["service.name"]) && void 0 !== jr ? jr : null == rr ? void 0 : rr.serviceName) && void 0 !== ar ? ar : null == Sr ? void 0 : Sr.serviceNameDefault,
-         serviceVersion: null !== (Ir = null == Nr ? void 0 : Nr["service.version"]) && void 0 !== Ir ? Ir : null == rr ? void 0 : rr.serviceVersion,
-         environment: null !== (fr = null == Nr ? void 0 : Nr["deployment.environment"]) && void 0 !== fr ? fr : null == rr ? void 0 : rr.environment,
+         serviceName: null !== (Rd = null !== (Xd = null == Nd ? void 0 : Nd["service.name"]) && void 0 !== Xd ? Xd : null == dd ? void 0 : dd.serviceName) && void 0 !== Rd ? Rd : null == Od ? void 0 : Od.serviceNameDefault,
+         serviceVersion: null !== (Kd = null == Nd ? void 0 : Nd["service.version"]) && void 0 !== Kd ? Kd : null == dd ? void 0 : dd.serviceVersion,
+         environment: null !== (hd = null == Nd ? void 0 : Nd["deployment.environment"]) && void 0 !== hd ? hd : null == dd ? void 0 : dd.environment,
```

#### 290. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L10221` → after: `L10221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R10221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L10221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L10221) · [Before (L10221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L10221)

```diff
-         const Qr = rr instanceof Error ? rr : new Error(Sr);
+         const md = dd instanceof Error ? dd : new Error(Od);
```

#### 291. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L10465` → after: `L10465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R10465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L10465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L10465) · [Before (L10465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L10465)

```diff
-             rr === fQ.LogsQueue && Sr(null != Qr ? Qr : [])
+             dd === tm.LogsQueue && Od(null != md ? md : [])
```

#### 292. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L10506` → after: `L10506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R10506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L10506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L10506) · [Before (L10506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L10506)

```diff
-               error: new Error(`logs request failed with status ${Qr}`)
+               error: new Error(`logs request failed with status ${md}`)
```

#### 293. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L10512` → after: `L10512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R10512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L10512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L10512) · [Before (L10512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L10512)

```diff
-               error: null !== (Sr = rr.error) && void 0 !== Sr ? Sr : new Error(`logs request failed with status ${Qr}`)
+               error: null !== (Od = dd.error) && void 0 !== Od ? Od : new Error(`logs request failed with status ${md}`)
```

#### 294. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L10585` → after: `L10585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R10585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L10585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L10585) · [Before (L10585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L10585)

```diff
-               const Sr = hN.has(rr) ? rr : "_OTHER";
+               const Od = TN.has(dd) ? dd : "_OTHER";
```

#### 295. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L10623` → after: `L10623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R10623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L10623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L10623) · [Before (L10623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L10623)

```diff
-           const [Qr, Zr] = Wr, ar = zN(null !== (fr = null !== (Er = null == Zr ? void 0 : Zr.method) && void 0 !== Er ? Er : null == Qr ? void 0 : Qr.method) && void 0 !== fr ? fr : "GET", null !== (pr = null == Qr ? void 0 : Qr.url) && void 0 !== pr ? pr : Qr);
+           const [md, Wd] = Fd, Rd = pN(null !== (hd = null !== (vd = null == Wd ? void 0 : Wd.method) && void 0 !== vd ? vd : null == md ? void 0 : md.method) && void 0 !== hd ? hd : "GET", null !== (Qd = null == md ? void 0 : md.url) && void 0 !== Qd ? Qd : md);
```

#### 296. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L10735` → after: `L10735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R10735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L10735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L10735) · [Before (L10735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L10735)

```diff
-           return Sr = Sr.replace(ca, Oa), Sr = Sr.replace(Fa, Oa), Sr = Sr.replace(oa, `$1${Oa}`), Sr = Sr.replace(Ja, pj), Sr = Sr.replace(ba, Oa), Sr = Sr.replace(da, `$1${Oa}`), Sr = Sr.replace(sa, `$1${Oa}`), Sr
+           return Od = Od.replace(lR, SR), Od = Od.replace(CR, SR), Od = Od.replace(ZR, `$1${SR}`), Od = Od.replace(fR, NX), Od = Od.replace(kR, SR), Od = Od.replace(dX, `$1${SR}`), Od = Od.replace(OX, `$1${SR}`), Od
```

#### 297. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L10775` → after: `L10775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R10775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L10775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L10775) · [Before (L10775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L10775)

```diff
-             return "awaiting_config" === this._recordingStatus || "missing_config" === this._recordingStatus ? this._recordingStatus : null !== (rr = null === (Sr = this._lazyLoadedSessionRecording) || void 0 === Sr ? void 0 : Sr.status) && void 0 !== rr ? rr : this._recordingSta … [truncated]
+             return "awaiting_config" === this._recordingStatus || "missing_config" === this._recordingStatus ? this._recordingStatus : null !== (dd = null === (Od = this._lazyLoadedSessionRecording) || void 0 === Od ? void 0 : Od.status) && void 0 !== dd ? dd : this._recordingSta … [truncated]
```

#### 298. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L10846-L10847` → after: `L10846-L10847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R10846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L10846-L10847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L10846-L10847) · [Before (L10846-L10847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L10846-L10847)

```diff
-             const Qr = lQ(rr) ? rr : parseFloat(rr);
-             return "number" != typeof(Zr = Qr) || !Number.isFinite(Zr) || 0 > Zr || Zr > 1 ? (Nm.warn(`${Sr} must be between 0 and 1. Ignoring invalid value:`, rr), null) : Qr;
+             const md = um(dd) ? dd : parseFloat(dd);
+             return "number" != typeof(Wd = md) || !Number.isFinite(Wd) || 0 > Wd || Wd > 1 ? (Ho.warn(`${Od} must be between 0 and 1. Ignoring invalid value:`, dd), null) : md;
```

#### 299. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L10859` → after: `L10859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R10859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L10859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L10859) · [Before (L10859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L10859)

```diff
-                     jr = null != Wr ? Wr : ar;
+                     Xd = null != Fd ? Fd : Rd;
```

#### 300. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L10910` → after: `L10910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R10910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L10910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L10910) · [Before (L10910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L10910)

```diff
-               Sr = "object" == typeof rr ? rr : JSON.parse(rr)
+               Od = "object" == typeof dd ? dd : JSON.parse(dd)
```

#### 301. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11024` → after: `L11024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11024) · [Before (L11024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11024)

```diff
-             } : KQ(rr) ? rr : {}
+             } : Em(dd) ? dd : {}
```

#### 302. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11048` → after: `L11048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11048) · [Before (L11048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11048)

```diff
-               Cj.error(`Error capturing ${rr} pageview`, Sr)
+               LX.error(`Error capturing ${dd} pageview`, Od)
```

#### 303. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11112` → after: `L11112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11112) · [Before (L11112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11112)

```diff
-               clearInterval(null !== (rr = this._flushInterval) && void 0 !== rr ? rr : void 0), this._removeListeners(), this.getAndClearBuffer()
+               clearInterval(null !== (dd = this._flushInterval) && void 0 !== dd ? dd : void 0), this._removeListeners(), this.getAndClearBuffer()
```

#### 304. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11160` → after: `L11160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11160) · [Before (L11160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11160)

```diff
-                     Ir = null === (Wr = null !== (ar = null === (jr = Zr.ownerDocument) || void 0 === jr ? void 0 : jr.defaultView) && void 0 !== ar ? ar : DS) || void 0 === Wr ? void 0 : Wr.getComputedStyle(Zr).position
+                     Kd = null === (Fd = null !== (Rd = null === (Xd = Wd.ownerDocument) || void 0 === Xd ? void 0 : Xd.defaultView) && void 0 !== Rd ? Rd : fO) || void 0 === Fd ? void 0 : Fd.getComputedStyle(Wd).position
```

#### 305. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11217-L11218` → after: `L11217-L11218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11217-L11218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11217-L11218) · [Before (L11217-L11218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11217-L11218)

```diff
-                 [`$web_vitals_${Sr.name}_event`]: YW({}, Sr),
-                 [`$web_vitals_${Sr.name}_value`]: Sr.value
+                 [`$web_vitals_${Od.name}_event`]: gF({}, Od),
+                 [`$web_vitals_${Od.name}_value`]: Od.value
```

#### 306. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11236` → after: `L11236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11236) · [Before (L11236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11236)

```diff
-               const Wr = lQ(rr.navigationId) || "string" == typeof rr.navigationId ? `navigation:${rr.navigationId}` : `url:${Zr}`;
+               const Fd = um(dd.navigationId) || "string" == typeof dd.navigationId ? `navigation:${dd.navigationId}` : `url:${Wd}`;
```

#### 307. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11282` → after: `L11282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11282) · [Before (L11282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11282)

```diff
-             return LQ(Qr) ? (null === (Sr = this._instance.persistence) || void 0 === Sr ? void 0 : Sr.props.$web_vitals_allowed_metrics) || fm : Qr
+             return sm(md) ? (null === (Od = this._instance.persistence) || void 0 === Od ? void 0 : Od.props.$web_vitals_allowed_metrics) || Qo : md
```

#### 308. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11289` → after: `L11289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11289) · [Before (L11289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11289)

```diff
-             return PQ(rr) ? rr ? fm : [] : nQ(rr) ? rr : Em
+             return im(dd) ? dd ? Qo : [] : wm(dd) ? dd : to
```

#### 309. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11300` → after: `L11300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11300) · [Before (L11300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11300)

```diff
-             return rr > 0 && 6e4 >= rr ? Im : rr
+             return dd > 0 && 6e4 >= dd ? vo : dd
```

#### 310. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11306` → after: `L11306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11306) · [Before (L11306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11306)

```diff
-             return PQ(Sr) ? Sr : this._enabledServerSide
+             return im(Od) ? Od : this._enabledServerSide
```

#### 311. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11364-L11365` → after: `L11364-L11365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11364-L11365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11364-L11365) · [Before (L11364-L11365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11364-L11365)

```diff
-                 refillRate: null !== (Sr = null !== (Qr = rr.exceptionRateLimiterRefillRate) && void 0 !== Qr ? Qr : rr.__exceptionRateLimiterRefillRate) && void 0 !== Sr ? Sr : 1,
-                 bucketSize: null !== (Zr = null !== (Wr = rr.exceptionRateLimiterBucketSize) && void 0 !== Wr ? Wr : rr.__exceptionRateLimiterBucketSize) && void 0 !== Zr ? Zr : 10
+                 refillRate: null !== (Od = null !== (md = dd.exceptionRateLimiterRefillRate) && void 0 !== md ? md : dd.__exceptionRateLimiterRefillRate) && void 0 !== Od ? Od : 1,
+                 bucketSize: null !== (Wd = null !== (Fd = dd.exceptionRateLimiterBucketSize) && void 0 !== Fd ? Fd : dd.__exceptionRateLimiterBucketSize) && void 0 !== Wd ? Wd : 10
```

#### 312. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11414` → after: `L11414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11414) · [Before (L11414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11414)

```diff
-               const Wr = null !== (Sr = null == rr || null === (Qr = rr.$exception_list) || void 0 === Qr || null === (Qr = Qr[0]) || void 0 === Qr ? void 0 : Qr.type) && void 0 !== Sr ? Sr : "Exception";
+               const Fd = null !== (Od = null == dd || null === (md = dd.$exception_list) || void 0 === md || null === (md = md[0]) || void 0 === md ? void 0 : md.type) && void 0 !== Od ? Od : "Exception";
```

#### 313. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11466` → after: `L11466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11466) · [Before (L11466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11466)

```diff
-                     const Sr = rr.map((rr => `${rr.function}|${rr.filename}|${rr.lineno}|${rr.colno}|${rr.module}`));
+                     const Od = dd.map((dd => `${dd.function}|${dd.filename}|${dd.lineno}|${dd.colno}|${dd.module}`));
```

#### 314. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11483` → after: `L11483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11483) · [Before (L11483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11483)

```diff
-             }("web:javascript", gW, GW)), this._instance = rr, this._suppressionRules = null !== (Sr = null === (Qr = this._instance.persistence) || void 0 === Qr ? void 0 : Qr.get_property("$error_tracking_suppression_rules")) && void 0 !== Sr ? Sr : [], this._exceptionStepsConf … [truncated]
+             }("web:javascript", nF, zF)), this._instance = dd, this._suppressionRules = null !== (Od = null === (md = this._instance.persistence) || void 0 === md ? void 0 : md.get_property("$error_tracking_suppression_rules")) && void 0 !== Od ? Od : [], this._exceptionStepsConf … [truncated]
```

#### 315. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11493` → after: `L11493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11493) · [Before (L11493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11493)

```diff
-             const ar = null !== (Sr = null === (Qr = Wr.errorTracking) || void 0 === Qr ? void 0 : Qr.suppressionRules) && void 0 !== Sr ? Sr : [],
+             const Rd = null !== (Od = null === (md = Fd.errorTracking) || void 0 === md ? void 0 : md.suppressionRules) && void 0 !== Od ? Od : [],
```

#### 316. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11504` → after: `L11504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11504) · [Before (L11504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11504)

```diff
-             return null !== (rr = null != Qr ? Qr : Sr) && void 0 !== rr && rr
+             return null !== (dd = null != md ? md : Od) && void 0 !== dd && dd
```

#### 317. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11566` → after: `L11566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11566) · [Before (L11566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11566)

```diff
-                   return "string" == typeof Sr && Sr.length > 0 ? Sr : void 0
+                   return "string" == typeof Od && Od.length > 0 ? Od : void 0
```

#### 318. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11586` → after: `L11586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11586) · [Before (L11586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11586)

```diff
-               return 0 === Sr.length ? rr : YW(YW({}, rr), {}, {
+               return 0 === Od.length ? dd : gF(gF({}, dd), {}, {
```

#### 319. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11604` → after: `L11604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11604) · [Before (L11604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11604)

```diff
-             return null !== (rr = null === (Sr = this._instance.config.error_tracking) || void 0 === Sr ? void 0 : Sr.exception_steps) && void 0 !== rr ? rr : {}
+             return null !== (dd = null === (Od = this._instance.config.error_tracking) || void 0 === Od ? void 0 : Od.exception_steps) && void 0 !== dd ? dd : {}
```

#### 320. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11636` → after: `L11636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11636) · [Before (L11636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11636)

```diff
-                 return null !== (Sr = null === (Qr = rr.stacktrace) || void 0 === Qr ? void 0 : Qr.frames) && void 0 !== Sr ? Sr : []
+                 return null !== (Od = null === (md = dd.stacktrace) || void 0 === md ? void 0 : md.frames) && void 0 !== Od ? Od : []
```

#### 321. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11659` → after: `L11659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11659) · [Before (L11659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11659)

```diff
-                 return Zr ? Qr === Sr : Qr.includes(Sr)
+                 return Wd ? md === Od : md.includes(Od)
```

#### 322. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11680` → after: `L11680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11680) · [Before (L11680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11680)

```diff
-               const ar = null !== (Sr = null === (Qr = rr[0].stacktrace) || void 0 === Qr ? void 0 : Qr.frames) && void 0 !== Sr ? Sr : [],
+               const Rd = null !== (Od = null === (md = dd[0].stacktrace) || void 0 === md ? void 0 : md.frames) && void 0 !== Od ? Od : [],
```

#### 323. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11748` → after: `L11748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11748) · [Before (L11748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11748)

```diff
-                   const Qr = `Product Tours API could not be loaded, status: ${Zr}`;
+                   const md = `Product Tours API could not be loaded, status: ${Wd}`;
```

#### 324. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11852` → after: `L11852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11852) · [Before (L11852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11852)

```diff
-                   $set: YW(YW({}, null !== (Sr = null === (Qr = rr.properties) || void 0 === Qr ? void 0 : Qr.$set) && void 0 !== Sr ? Sr : {}), mr)
+                   $set: gF(gF({}, null !== (Od = null === (md = dd.properties) || void 0 === md ? void 0 : md.$set) && void 0 !== Od ? Od : {}), od)
```

#### 325. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11854` → after: `L11854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11854) · [Before (L11854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11854)

```diff
-                   $set_once: YW(YW({}, null !== (Zr = null === (Wr = rr.properties) || void 0 === Wr ? void 0 : Wr.$set_once) && void 0 !== Zr ? Zr : {}), xr)
+                   $set_once: gF(gF({}, null !== (Wd = null === (Fd = dd.properties) || void 0 === Fd ? void 0 : Fd.$set_once) && void 0 !== Wd ? Wd : {}), td)
```

#### 326. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11856` → after: `L11856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11856) · [Before (L11856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11856)

```diff
-                 elements_chain: null !== (ar = null === (jr = rr.properties) || void 0 === jr ? void 0 : jr.$elements_chain) && void 0 !== ar ? ar : "",
+                 elements_chain: null !== (Rd = null === (Xd = dd.properties) || void 0 === Xd ? void 0 : Xd.$elements_chain) && void 0 !== Rd ? Rd : "",
```

#### 327. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11892` → after: `L11892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11892) · [Before (L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11892)

```diff
-               tr = rr => rr.map((rr => "string" == typeof rr ? rr : Ur(rr))).filter((rr => !OQ(rr)));
+               Hd = dd => dd.map((dd => "string" == typeof dd ? dd : qd(dd))).filter((dd => !Sm(dd)));
```

#### 328. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11950` → after: `L11950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11950) · [Before (L11950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11950)

```diff
-                 !Sr.errored && this._bufferedInvocations.length && (em.info(`Processing ${this._bufferedInvocations.length} events for site app with id ${rr.id}`), this._bufferedInvocations.forEach((rr => this._runWithPreparedSiteAppElements((() => {
+                 !Od.errored && this._bufferedInvocations.length && (wo.info(`Processing ${this._bufferedInvocations.length} events for site app with id ${dd.id}`), this._bufferedInvocations.forEach((dd => this._runWithPreparedSiteAppElements((() => {
```

#### 329. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11957` → after: `L11957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11957) · [Before (L11957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11957)

```diff
-               Sr.errored = !Wr, Sr.loaded = !0, em.info(`Site app with id ${rr.id} ${Wr?"loaded":"errored"}`), Zr && Qr()
+               Od.errored = !Fd, Od.loaded = !0, wo.info(`Site app with id ${dd.id} ${Fd?"loaded":"errored"}`), Wd && md()
```

#### 330. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11975` → after: `L11975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11975) · [Before (L11975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11975)

```diff
-               em.error(`Error while processing buffered events PostHog app with config id ${rr.id}`, Qr), Sr.errored = !0
+               wo.error(`Error while processing buffered events PostHog app with config id ${dd.id}`, md), Od.errored = !0
```

#### 331. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L11997` → after: `L11997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R11997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L11997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L11997) · [Before (L11997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L11997)

```diff
-               em.error(`Error while processing event ${rr.event} for site app ${Qr.id}`, Sr)
+               wo.error(`Error while processing event ${dd.event} for site app ${md.id}`, Od)
```

#### 332. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L12013` → after: `L12013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R12013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L12013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L12013) · [Before (L12013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L12013)

```diff
-                   IQ[`__$$ph_site_app_${Ir}`] = this._instance, null === (ar = IQ.__PosthogExtensions__) || void 0 === ar || null === (jr = ar.loadSiteApp) || void 0 === jr || jr.call(ar, this._instance, fr, (rr => {
+                   Qm[`__$$ph_site_app_${Kd}`] = this._instance, null === (Rd = Qm.__PosthogExtensions__) || void 0 === Rd || null === (Xd = Rd.loadSiteApp) || void 0 === Xd || Xd.call(Rd, this._instance, hd, (dd => {
```

#### 333. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L12041` → after: `L12041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R12041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L12041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L12041) · [Before (L12041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L12041)

```diff
-             return null !== (rr = null !== (Sr = this._instance.config.tracing_headers) && void 0 !== Sr ? Sr : this._instance.config.addTracingHeaders) && void 0 !== rr ? rr : this._instance.config.__add_tracing_headers
+             return null !== (dd = null !== (Od = this._instance.config.tracing_headers) && void 0 !== Od ? Od : this._instance.config.addTracingHeaders) && void 0 !== dd ? dd : this._instance.config.__add_tracing_headers
```

#### 334. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L12073` → after: `L12073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R12073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L12073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L12073) · [Before (L12073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L12073)

```diff
-                 url: this._instance.requestRouter.endpointFor(null !== (Zr = Sr.target) && void 0 !== Zr ? Zr : "api", Qr),
+                 url: this._instance.requestRouter.endpointFor(null !== (Wd = Od.target) && void 0 !== Wd ? Wd : "api", md),
```

#### 335. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L12097` → after: `L12097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R12097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L12097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L12097) · [Before (L12097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L12097)

```diff
-             return null !== (rr = IQ.ph_toolbar_state) && void 0 !== rr ? rr : 0
+             return null !== (dd = Qm.ph_toolbar_state) && void 0 !== dd ? dd : 0
```

#### 336. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L12109` → after: `L12109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R12109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L12109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L12109) · [Before (L12109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L12109)

```diff
-             rr = null !== (Zr = rr) && void 0 !== Zr ? Zr : DS.location, Qr = null !== (Wr = Qr) && void 0 !== Wr ? Wr : DS.history;
+             dd = null !== (Wd = dd) && void 0 !== Wd ? Wd : fO.location, md = null !== (Fd = md) && void 0 !== Fd ? Fd : fO.history;
```

#### 337. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L12215` → after: `L12215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R12215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L12215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L12215) · [Before (L12215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L12215)

```diff
-               Qr && Zr && (rr._logInfo(`previewing web experiments ${Qr} && ${Zr}`), this.getWebExperiments((rr => {
+               md && Wd && (dd._logInfo(`previewing web experiments ${md} && ${Wd}`), this.getWebExperiments((dd => {
```

#### 338. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L12236` → after: `L12236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R12236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L12236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L12236) · [Before (L12236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L12236)

```diff
-             Wr && Wr.length > 0 && (rr._logInfo(`Previewing web experiment [${Wr[0].name}] with variant [${Qr}]`), this._applyTransforms(Wr[0].name, Qr, Wr[0].variants[Qr].transforms))
+             Fd && Fd.length > 0 && (dd._logInfo(`Previewing web experiment [${Fd[0].name}] with variant [${md}]`), this._applyTransforms(Fd[0].name, md, Fd[0].variants[md].transforms))
```

#### 339. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L12248` → after: `L12248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R12248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L12248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L12248) · [Before (L12248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L12248)

```diff
-               return !(null === (ar = Sr.conditions) || void 0 === ar ? void 0 : ar.url) || QN[null !== (jr = null === (Ir = Sr.conditions) || void 0 === Ir ? void 0 : Ir.urlMatchType) && void 0 !== jr ? jr : "icontains"](Sr.conditions.url, rr)
+               return !(null === (Rd = Od.conditions) || void 0 === Rd ? void 0 : Rd.url) || FN[null !== (Xd = null === (Kd = Od.conditions) || void 0 === Kd ? void 0 : Kd.urlMatchType) && void 0 !== Xd ? Xd : "icontains"](Od.conditions.url, dd)
```

#### 340. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L12271` → after: `L12271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R12271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L12271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L12271) · [Before (L12271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L12271)

```diff
-             Cj.info(`[WebExperiments] ${rr}`, Qr)
+             LX.info(`[WebExperiments] ${dd}`, md)
```

#### 341. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L12277` → after: `L12277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R12277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L12277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L12277) · [Before (L12277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L12277)

```diff
-                 rr._logInfo(`applying transform of variant ${Qr} for experiment ${Sr} `, Zr);
+                 dd._logInfo(`applying transform of variant ${md} for experiment ${Od} `, Wd);
```

#### 342. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L12303` → after: `L12303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R12303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L12303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L12303) · [Before (L12303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L12303)

```diff
-             LQ(Sr) || (PQ(Sr) ? this._isConversationsEnabled = Sr : (this._isConversationsEnabled = Sr.enabled, this._remoteConfig = Sr), this.loadIfEnabled())
+             sm(Od) || (im(Od) ? this._isConversationsEnabled = Od : (this._isConversationsEnabled = Od.enabled, this._remoteConfig = Od), this.loadIfEnabled())
```

#### 343. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L12402` → after: `L12402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R12402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L12402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L12402) · [Before (L12402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L12402)

```diff
-             return null !== (rr = null === (Sr = this._conversationsManager) || void 0 === Sr ? void 0 : Sr.getCurrentTicketId()) && void 0 !== rr ? rr : null
+             return null !== (dd = null === (Od = this._conversationsManager) || void 0 === Od ? void 0 : Od.getCurrentTicketId()) && void 0 !== dd ? dd : null
```

#### 344. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L12406` → after: `L12406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R12406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L12406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L12406) · [Before (L12406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L12406)

```diff
-             return null !== (rr = null === (Sr = this._conversationsManager) || void 0 === Sr ? void 0 : Sr.getWidgetSessionId()) && void 0 !== rr ? rr : null
+             return null !== (dd = null === (Od = this._conversationsManager) || void 0 === Od ? void 0 : Od.getWidgetSessionId()) && void 0 !== dd ? dd : null
```

#### 345. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L12508-L12510` → after: `L12508-L12510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R12508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L12508-L12510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L12508-L12510) · [Before (L12508-L12510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L12508-L12510)

```diff
-                 serviceName: null !== (Sr = null == jr ? void 0 : jr["service.name"]) && void 0 !== Sr ? Sr : null == rr ? void 0 : rr.serviceName,
-                 serviceVersion: null !== (Qr = null == jr ? void 0 : jr["service.version"]) && void 0 !== Qr ? Qr : null == rr ? void 0 : rr.serviceVersion,
-                 environment: null !== (Zr = null == jr ? void 0 : jr["deployment.environment"]) && void 0 !== Zr ? Zr : null == rr ? void 0 : rr.environment,
+                 serviceName: null !== (Od = null == Xd ? void 0 : Xd["service.name"]) && void 0 !== Od ? Od : null == dd ? void 0 : dd.serviceName,
+                 serviceVersion: null !== (md = null == Xd ? void 0 : Xd["service.version"]) && void 0 !== md ? md : null == dd ? void 0 : dd.serviceVersion,
+                 environment: null !== (Wd = null == Xd ? void 0 : Xd["deployment.environment"]) && void 0 !== Wd ? Wd : null == dd ? void 0 : dd.environment,
```

#### 346. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L12513-L12514` → after: `L12513-L12514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R12513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L12513-L12514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L12513-L12514) · [Before (L12513-L12514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L12513-L12514)

```diff
-                 flushIntervalMs: null !== (Wr = null == rr ? void 0 : rr.flushIntervalMs) && void 0 !== Wr ? Wr : 1e4,
-                 maxSeriesPerFlush: null !== (ar = null == rr ? void 0 : rr.maxSeriesPerFlush) && void 0 !== ar ? ar : 1e3
+                 flushIntervalMs: null !== (Fd = null == dd ? void 0 : dd.flushIntervalMs) && void 0 !== Fd ? Fd : 1e4,
+                 maxSeriesPerFlush: null !== (Rd = null == dd ? void 0 : dd.maxSeriesPerFlush) && void 0 !== Rd ? Rd : 1e3
```

#### 347. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L12590` → after: `L12590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R12590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L12590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L12590) · [Before (L12590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L12590)

```diff
-                     error: new Error(`metrics request failed with status ${Sr}`)
+                     error: new Error(`metrics request failed with status ${Od}`)
```

#### 348. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L12596` → after: `L12596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R12596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L12596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L12596) · [Before (L12596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L12596)

```diff
-                       error: null !== (Qr = rr.error) && void 0 !== Qr ? Qr : new Error(`metrics request failed with status ${Sr}`)
+                       error: null !== (md = dd.error) && void 0 !== md ? md : new Error(`metrics request failed with status ${Od}`)
```

#### 349. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L12729` → after: `L12729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R12729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L12729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/284.js#L12729) · [Before (L12729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/284.js#L12729)

```diff
-                   mr = Qr.apply(this === Wr ? rr : this, xr)
+                   od = md.apply(this === Fd ? dd : this, td)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/285.js` (fl4vv.bd3c59ce → yteou.5361c997)

- **File**: `bundles/bloxd.io/chunks/js/285.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2)

#### 1. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/285.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/285.js#L4)

```diff
-   41704: (rr, Sr, Qr) => {
+   41740: (dd, Od, md) => {
```

#### 2. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/285.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/285.js#L8-L11)

```diff
-     var Zr = Qr(5681),
-       Wr = Qr(37851),
-       ar = Qr(1262),
-       jr = Qr(37853);
+     var Wd = md(5641),
+       Fd = md(37942),
+       Rd = md(1253),
+       Xd = md(37948);
```

#### 3. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/285.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/285.js#L17)

```diff
-         src: [`${ar.clientSideServerUrls.staticUrl}/sounds/music/${rr}.mp3`],
+         src: [`${Rd.clientSideServerUrls.staticUrl}/sounds/music/${dd}.mp3`],
```

#### 4. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L22` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/285.js#L22) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/285.js#L22)

```diff
-         const Sr = (0, Wr.r)(rr);
+         const Od = (0, Fd.t)(dd);
```
