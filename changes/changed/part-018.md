# Changed — Bundle Modifications Report (Part 018 / 058)

- **Updated at**: `2026-11-21T00:46 JST`
- **Part**: `18 / 58` (**281** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 017](part-017.md) · [Part 019 →](part-019.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/285.js` (ad2avs.90d9e4dd → bbb6l5.0244a119 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/285.js` (213 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b)

#### 178. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1620` → after: `L16041-L16059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR16041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L16041-L16059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L16041-L16059) · [Before (L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1620)

```diff
-         return iz == lz ? null : Sz.range(iz + bz, lz + bz)
+         return Yq
+       })),
+       ZE = qq => iE(qq, !1);
+ 
+     function fE(qq) {
+       let Eq = [],
+         gq = -1;
+       for (let Yq of qq.selection.zV) {
+         let lq = qq.doc.lineAt(Yq.from),
+           Oq = qq.doc.lineAt(Yq.to);
+         if (Yq.empty || Yq.to != Oq.from || (Oq = qq.doc.lineAt(Yq.to - 1)), gq >= lq.number) {
+           let qq = Eq[Eq.length - 1];
+           qq.to = Oq.to, qq.zV.push(Yq)
+         } else Eq.push({
+           from: lq.from,
+           to: Oq.to,
+ ... (3 more added lines; see GitHub link above)
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1624-L1636` → after: `L16064-L16089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR16064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L16064-L16089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L16064-L16089) · [Before (L1624-L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1624-L1636)

```diff
-     function mu(zz, uz) {
-       let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
-         Ez = {};
-       for (let nz of zz)
-         for (let zz of Object.keys(nz)) {
-           let uz = nz[zz],
-             iz = Ez[zz];
-           if (void 0 === iz) Ez[zz] = uz;
-           else if (iz === uz || void 0 === uz);
-           else {
-             if (!Object.hasOwnProperty.call(bz, zz)) throw new Error("Config merge conflict for field " + zz);
-             Ez[zz] = bz[zz](iz, uz)
-           }
+     function ME(qq, Eq, gq) {
+       if (qq.readOnly) return !1;
+       let Yq = [],
+         lq = [];
+       for (let Oq of fE(qq)) {
+         if (gq ? Oq.to == qq.doc.length : 0 == Oq.from) continue;
+         let Eq = qq.doc.lineAt(gq ? Oq.to + 1 : Oq.from - 1),
+           xq = Eq.length + 1;
+         if (gq) {
+           Yq.push({
+             from: Oq.to,
+             to: Eq.to
+           }, {
+             from: Oq.from,
+             insert: Eq.text + qq.lineBreak
+           });
+ ... (10 more added lines; see GitHub link above)
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1660-L1669` → after: `L16100-L16168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR16100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L16100-L16168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L16100-L16168) · [Before (L1660-L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1660-L1669)

```diff
-     function hu(zz, uz) {
-       return zz == uz || zz.constructor == uz.constructor && zz.eq(uz)
-     }
-     qu.prototype.startSide = qu.prototype.endSide = 0, qu.prototype.point = !1, qu.prototype.mapMode = Pz.TrackDel;
-     class Uu {
-       constructor(zz, uz, bz) {
-         this.from = zz, this.to = uz, this.value = bz
-       }
-       static create(zz, uz, bz) {
-         return new Uu(zz, uz, bz)
+     function TE(qq, Eq, gq) {
+       if (qq.readOnly) return !1;
+       let Yq = [];
+       for (let Oq of fE(qq)) gq ? Yq.push({
+         from: Oq.from,
+         insert: qq.doc.slice(Oq.from, Oq.to) + qq.lineBreak
+       }) : Yq.push({
+         from: Oq.to,
+         insert: qq.lineBreak + qq.doc.slice(Oq.from, Oq.to)
+       });
+       let lq = qq.changes(Yq);
+       return Eq(qq.update({
+         changes: lq,
+         selection: qq.selection.map(lq, gq ? 1 : -1),
+         scrollIntoView: !0,
+         userEvent: "input.copyline"
+ ... (53 more added lines; see GitHub link above)
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1674-L1713` → after: `L16173-L16178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR16173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L16173-L16178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L16173-L16178) · [Before (L1674-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1674-L1713)

```diff
-       return zz.from - uz.from || zz.value.startSide - uz.value.startSide
-     }
-     class gu {
-       constructor(zz, uz, bz, Ez) {
-         this.from = zz, this.to = uz, this.value = bz, this.Tbz = Ez
-       }
-       get length() {
-         return this.to[this.to.length - 1]
-       }
-       findIndex(zz, uz, bz) {
-         let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-           nz = bz ? this.to : this.from;
-         for (let iz = Ez, lz = nz.length;;) {
-           if (iz == lz) return iz;
-           let Ez = iz + lz >> 1,
-             Mz = nz[Ez] - zz || (bz ? this.value[Ez].endSide : this.value[Ez].startSide) - uz;
- ... (24 more removed lines; see GitHub link above)
+       let gq = -1;
+       return qq.changeByRange((Yq => {
+         let lq = [];
+         for (let mq = Yq.from; mq <= Yq.to;) {
+           let Oq = qq.doc.lineAt(mq);
+           Oq.number > gq && (Yq.empty || Yq.to > Oq.from) && (Eq(Oq, lq, Yq), gq = Oq.number), mq = Oq.to + 1
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1716-L1717` → after: `L16182-L16183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR16182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L16182-L16183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L16182-L16183) · [Before (L1716-L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1716-L1717)

```diff
-           mapped: bz.length ? new gu(Ez, nz, bz, lz) : null,
-           pos: iz
+           changes: lq,
+           range: mq.q.range(Oq.mapPos(Yq.anchor, 1), Oq.mapPos(Yq.head, 1))
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1719` → after: `L16185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR16185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L16185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L16185) · [Before (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1719)

```diff
-       }
+       }))
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1721-L1741` → after: `L16187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR16187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L16187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L16187) · [Before (L1721-L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1721-L1741)

```diff
-     class Su {
-       constructor(zz, uz, bz, Ez) {
-         this.chunkPos = zz, this.chunk = uz, this.nextLayer = bz, this.Tbz = Ez
-       }
-       static create(zz, uz, bz, Ez) {
-         return new Su(zz, uz, bz, Ez)
-       }
-       get length() {
-         let zz = this.chunk.length - 1;
-         return zz < 0 ? 0 : Math.max(this.chunkEnd(zz), this.nextLayer.length)
-       }
-       get size() {
-         if (this.aZ) return 0;
-         let zz = this.nextLayer.size;
-         for (let uz of this.chunk) zz += uz.value.length;
-         return zz
- ... (5 more removed lines; see GitHub link above)
+     const GE = qq => {
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1743-L1776` → after: `L16189-L16293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR16189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L16189-L16293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L16189-L16293) · [Before (L1743-L1776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1743-L1776)

```diff
-           add: uz = [],
-           sort: bz = !1,
-           filterFrom: Ez = 0,
-           filterTo: nz = this.length
-         } = zz, iz = zz.filter;
-         if (0 == uz.length && !iz) return this;
-         if (bz && (uz = uz.slice().sort(cu)), this.aZ) return uz.length ? Su.of(uz) : this;
-         let lz = new Qu(this, null, -1).goto(0),
-           Mz = 0,
-           tz = [],
-           Hz = new yu;
-         for (; lz.value || Mz < uz.length;)
-           if (Mz < uz.length && (lz.from - uz[Mz].from || lz.startSide - uz[Mz].value.startSide) >= 0) {
-             let zz = uz[Mz++];
-             Hz.addInner(zz.from, zz.to, zz.value) || tz.push(zz)
-           } else 1 == lz.rangeIndex && lz.chunkIndex < this.chunk.length && (Mz == uz.length || this.chunkEnd(lz.chunkIndex) < uz[Mz].from) && (!iz || Ez > this.chunkEnd(lz.chunkIndex) || nz < this.chunkPos[lz.chunkIndex]) && Hz.addChunk(this.chunkPos[lz.chunkIndex], this.chunk[l … [truncated]
- ... (18 more removed lines; see GitHub link above)
+           state: Eq,
+           dispatch: gq
+         } = qq;
+         return !Eq.readOnly && (gq(Eq.update(pE(Eq, ((qq, gq) => {
+           gq.push({
+             from: qq.from,
+             insert: Eq.facet(Aq.V)
+           })
+         })), {
+           userEvent: "input.indent"
+         })), !0)
+       },
+       LE = qq => {
+         let {
+           state: Eq,
+           dispatch: gq
+ ... (89 more added lines; see GitHub link above)
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1778-L1782` → after: `L16295-L16303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR16295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L16295-L16303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L16295-L16303) · [Before (L1778-L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1778-L1782)

```diff
-               mapped: iz,
-               pos: Mz
-             } = lz.map(nz, zz);
-             iz && (Ez = Math.max(Ez, iz.Tbz), uz.push(iz), bz.push(Mz))
-           }
+               from: gq,
+               to: Yq
+             } = qq;
+             return mq.q.range(gq, Math.min(Yq + 1, Eq.doc.length))
+           }));
+           return gq(Eq.update({
+             selection: mq.q.create(Yq),
+             userEvent: "select"
+           })), !0
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1784-L1792` → after: `L16305-L16768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR16305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L16305-L16768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L16305-L16768) · [Before (L1784-L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1784-L1792)

```diff
-         let nz = this.nextLayer.map(zz);
-         return 0 == uz.length ? nz : new Su(bz, uz, nz || Su.empty, Ez)
-       }
-       between(zz, uz, bz) {
-         if (!this.aZ) {
-           for (let Ez = 0; Ez < this.chunk.length; Ez++) {
-             let nz = this.chunkPos[Ez],
-               iz = this.chunk[Ez];
-             if (uz >= nz && zz <= nz + iz.length && !1 === iz.between(nz, zz - nz, uz - nz, bz)) return
+       }, {
+         key: "Mod-i",
+         run: qq => {
+           let {
+             state: Eq,
+             dispatch: gq
+           } = qq, Yq = kq(Eq.selection, (qq => {
+             let gq = (0, Aq.gb)(Eq),
+               Yq = gq.resolveStack(qq.from, 1);
+             if (qq.empty) {
+               let Eq = gq.resolveStack(qq.from, -1);
+               Eq.node.from >= Yq.node.from && Eq.node.to <= Yq.node.to && (Yq = Eq)
+             }
+             for (let Eq = Yq; Eq; Eq = Eq.next) {
+               let {
+                 node: gq
+ ... (448 more added lines; see GitHub link above)
```

#### 188. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1797-L1802` → after: `L16830-L16835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR16830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L16830-L16835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L16830-L16835) · [Before (L1797-L1802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1797-L1802)

```diff
-       iter() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
-         return Wu.from([this]).goto(zz)
-       }
-       get aZ() {
-         return this.nextLayer == this
+     }, {
+       dark: !1
+     });
+     class ag {
+       constructor(qq, Eq) {
+         this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = Eq, this.timeoutMS = Eq, this.callbacks.push(qq)
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1804-L1831` → after: `L16837-L16847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR16837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L16837-L16847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L16837-L16847) · [Before (L1804-L1831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1804-L1831)

```diff
-       static iter(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return Wu.from(zz).goto(uz)
-       }
-       static compare(zz, uz, bz, Ez) {
-         let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
-           iz = zz.filter((zz => zz.Tbz > 0 || !zz.aZ && zz.Tbz >= nz)),
-           lz = uz.filter((zz => zz.Tbz > 0 || !zz.aZ && zz.Tbz >= nz)),
-           Mz = Du(iz, lz, bz),
-           tz = new ju(iz, Mz, nz),
-           Hz = new ju(lz, Mz, nz);
-         bz.iterGaps(((zz, uz, bz) => Iu(tz, zz, Hz, uz, bz, Ez))), bz.empty && 0 == bz.length && Iu(tz, 0, Hz, 0, 0, Ez)
-       }
-       static eq(zz, uz) {
-         let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-           Ez = arguments.length > 3 ? arguments[3] : void 0;
- ... (12 more removed lines; see GitHub link above)
+       SB() {
+         if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
+           this.isTimeExhausted = !0;
+           var qq = this.callbacks.slice();
+           this.callbacks.length = 0, qq.forEach((qq => {
+             try {
+               qq()
+             } catch (Eq) {
+               console.error("TimeoutLatch callback error:", Eq)
+             }
+           }))
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1834-L1847` → after: `L16850-L16851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR16850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L16850-L16851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L16850-L16851) · [Before (L1834-L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1834-L1847)

```diff
-       static spans(zz, uz, bz, Ez) {
-         let nz = new ju(zz, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(uz),
-           iz = uz,
-           lz = nz.openStart;
-         for (;;) {
-           let zz = Math.min(nz.to, bz);
-           if (nz.point) {
-             let bz = nz.activeForPoint(nz.to),
-               Mz = nz.pointFrom < uz ? bz.length + 1 : nz.point.startSide < 0 ? bz.length : Math.min(bz.length, lz);
-             Ez.point(iz, zz, nz.point, bz, Mz, nz.pointRank), lz = Math.min(nz.openEnd(zz), bz.length)
-           } else zz > iz && (Ez.span(iz, zz, nz.active, lz), lz = nz.openEnd(zz));
-           if (nz.to > bz) return lz + (nz.point && nz.to > bz ? 1 : 0);
-           iz = nz.to, nz.next()
-         }
+       cancel() {
+         this.isCancelled = !0, this.callbacks.length = 0
```

#### 191. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1849-L1861` → after: `L16853-L16854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR16853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L16853-L16854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L16853-L16854) · [Before (L1849-L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1849-L1861)

```diff
-       static of (zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           bz = new yu;
-         for (let Ez of zz instanceof Uu ? [zz] : uz ? function(zz) {
-             if (zz.length > 1)
-               for (let uz = zz[0], bz = 1; bz < zz.length; bz++) {
-                 let Ez = zz[bz];
-                 if (cu(uz, Ez) > 0) return zz.slice().sort(cu);
-                 uz = Ez
-               }
-             return zz
-           }(zz) : zz) bz.add(Ez.from, Ez.to, Ez.value);
-         return bz.finish()
+       reset() {
+         this.timeLeftMS = this.timeoutMS, this.isCancelled = !1, this.isTimeExhausted = !1
```

#### 192. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1863-L1868` → after: `L16856-L16857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR16856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L16856-L16857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L16856-L16857) · [Before (L1863-L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1863-L1868)

```diff
-       static join(zz) {
-         if (!zz.length) return Su.empty;
-         let uz = zz[zz.length - 1];
-         for (let bz = zz.length - 2; bz >= 0; bz--)
-           for (let Ez = zz[bz]; Ez != Su.empty; Ez = Ez.nextLayer) uz = new Su(Ez.chunkPos, Ez.chunk, uz, Math.max(Ez.Tbz, uz.Tbz));
-         return uz
+       get isDone() {
+         return this.isCancelled || this.isTimeExhausted
```

#### 193. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1877` → after: `L16862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR16862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L16862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L16862) · [Before (L1877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1877)

```diff
-         this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.Tbz = -1, this.setMaxPoint = -1, this.nextLayer = null
+         this.interval = null, this.latches = new Set
```

#### 194. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1879-L1880` → after: `L16864-L16865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR16864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L16864-L16865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L16864-L16865) · [Before (L1879-L1880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1879-L1880)

```diff
-       add(zz, uz, bz) {
-         this.addInner(zz, uz, bz) || (this.nextLayer || (this.nextLayer = new yu)).add(zz, uz, bz)
+       add(qq) {
+         this.latches.add(qq), this.start()
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1882-L1885` → after: `L16867-L16868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR16867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L16867-L16868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L16867-L16868) · [Before (L1882-L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1882-L1885)

```diff
-       addInner(zz, uz, bz) {
-         let Ez = zz - this.lastTo || bz.startSide - this.last.endSide;
-         if (Ez <= 0 && (zz - this.lastFrom || bz.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
-         return !(Ez < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = zz), this.from.push(zz - this.chunkStart), this.to.push(uz - this.chunkStart), this.last = bz, this.lastFrom = zz, this.lastTo = uz, this.value.push(bz), bz.poi … [truncated]
+       remove(qq) {
+         this.latches.delete(qq), 0 === this.latches.size && this.stop()
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1887-L1894` → after: `L16870-L16875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR16870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L16870-L16875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L16870-L16875) · [Before (L1887-L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1887-L1894)

```diff
-       addChunk(zz, uz) {
-         if ((zz - this.lastTo || uz.value[0].startSide - this.last.endSide) < 0) return !1;
-         this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, uz.Tbz), this.chunks.push(uz), this.chunkPos.push(zz);
-         let bz = uz.value.length - 1;
-         return this.last = uz.value[bz], this.lastFrom = uz.from[bz] + zz, this.lastTo = uz.to[bz] + zz, !0
-       }
-       finish() {
-         return this.finishInner(Su.empty)
+       start() {
+         null === this.interval && (this.interval = setInterval((() => {
+           this.latches.forEach((qq => {
+             qq.SB(), qq.isDone && this.remove(qq)
+           }))
+         }), 1))
```

#### 197. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1896-L1899` → after: `L16877-L16878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR16877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L16877-L16878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L16877-L16878) · [Before (L1896-L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1896-L1899)

```diff
-       finishInner(zz) {
-         if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return zz;
-         let uz = Su.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(zz) : zz, this.setMaxPoint);
-         return this.from = null, uz
+       stop() {
+         null !== this.interval && (clearInterval(this.interval), this.interval = null)
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1903-L1911` → after: `L16885-L16923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR16885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L16885-L16923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L16885-L16923) · [Before (L1903-L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1903-L1911)

```diff
-     function Du(zz, uz, bz) {
-       let Ez = new Map;
-       for (let iz of zz)
-         for (let zz = 0; zz < iz.chunk.length; zz++) iz.chunk[zz].Tbz <= 0 && Ez.set(iz.chunk[zz], iz.chunkPos[zz]);
-       let nz = new Set;
-       for (let iz of uz)
-         for (let zz = 0; zz < iz.chunk.length; zz++) {
-           let uz = Ez.get(iz.chunk[zz]);
-           null == uz || (bz ? bz.mapPos(uz) : uz) != iz.chunkPos[zz] || (null === bz || void 0 === bz ? void 0 : bz.touchesRange(uz, uz + iz.chunk[zz].length)) || nz.add(iz.chunk[zz])
+     function og(qq) {
+       var {
+         value: Eq,
+         selection: gq,
+         onChange: Yq,
+         onStatistics: lq,
+         onCreateEditor: Aq,
+         onUpdate: cq,
+         extensions: uq = Hg,
+         autoFocus: Bq,
+         theme: Wq = "light",
+         height: Nq = null,
+         minHeight: aq = null,
+         maxHeight: Vq = null,
+         width: dq = null,
+         minWidth: jq = null,
+ ... (23 more added lines; see GitHub link above)
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1913-L1934` → after: `L16925-L16935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR16925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L16925-L16935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L16925-L16935) · [Before (L1913-L1934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1913-L1934)

```diff
-       return nz
-     }
-     class Qu {
-       constructor(zz, uz, bz) {
-         let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-         this.layer = zz, this.skip = uz, this.Lbz = bz, this.rank = Ez
-       }
-       get startSide() {
-         return this.value ? this.value.startSide : 0
-       }
-       get endSide() {
-         return this.value ? this.value.endSide : 0
-       }
-       goto(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
-         return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(zz, uz, !1), this
- ... (6 more removed lines; see GitHub link above)
+       }), Sq = xq.g.updateListener.of((qq => {
+         if (qq.docChanged && "function" === typeof Yq && !qq.transactions.some((qq => qq.annotation(jg)))) {
+           Mq.current ? Mq.current.reset() : (Mq.current = new ag((() => {
+             if (Tq.current) {
+               var qq = Tq.current;
+               Tq.current = null, qq()
+             }
+             Mq.current = null
+           }), 200), ("undefined" === typeof window ? new Vg : (dg || (dg = new Vg), dg)).add(Mq.current));
+           var Eq = qq.state.doc.toString();
+           Yq(Eq, qq)
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1936-L1938` → after: `L16937-L16971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR16937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L16937-L16971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L16937-L16971) · [Before (L1936-L1938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1936-L1938)

```diff
-         if (this.chunkIndex < this.layer.chunk.length) {
-           let Ez = this.layer.chunk[this.chunkIndex].findIndex(zz - this.layer.chunkPos[this.chunkIndex], uz, !0);
-           (!bz || this.rangeIndex < Ez) && this.setRangeIndex(Ez)
+         lq && lq((qq => ({
+           line: qq.state.doc.lineAt(qq.state.selection.main.from),
+           lineCount: qq.state.doc.lines,
+           lineBreak: qq.state.lineBreak,
+           length: qq.state.doc.length,
+           readOnly: qq.state.readOnly,
+           tabSize: qq.state.tabSize,
+           selection: qq.state.selection,
+           selectionAsSingle: qq.state.selection.asSingle().main,
+           zV: qq.state.selection.zV,
+           selectionCode: qq.state.sliceDoc(qq.state.selection.main.from, qq.state.selection.main.to),
+           selections: qq.state.selection.zV.map((Eq => qq.state.sliceDoc(Eq.from, Eq.to))),
+           selectedText: qq.state.selection.zV.some((qq => !qq.empty))
+         }))(qq))
+       })), pq = function(qq) {
+         void 0 === qq && (qq = {});
+ ... (19 more added lines; see GitHub link above)
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1940-L1954` → after: `L16973-L16996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR16973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L16973-L16996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L16973-L16996) · [Before (L1940-L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1940-L1954)

```diff
-         this.next()
-       }
-       forward(zz, uz) {
-         (this.to - zz || this.endSide - uz) < 0 && this.gotoInner(zz, uz, !0)
-       }
-       next() {
-         for (;;) {
-           if (this.chunkIndex == this.layer.chunk.length) {
-             this.from = this.to = 1e9, this.value = null;
-             break
-           } {
-             let zz = this.layer.chunkPos[this.chunkIndex],
-               uz = this.layer.chunk[this.chunkIndex],
-               bz = zz + uz.from[this.rangeIndex];
-             if (this.from = bz, this.to = zz + uz.to[this.rangeIndex], this.value = uz.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.Lbz < 0 || this.value.point && this.to - this.from >= this.Lbz) break
+         return !1 === gq && cq.push(xq.g.editable.of(!1)), Yq && cq.push(mq.u.readOnly.of(!0)), [...cq]
+       }({
+         theme: Wq,
+         editable: Pq,
+         readOnly: Qq,
+         placeholder: oq,
+         indentWithTab: yq,
+         basicSetup: tq
+       }), Gq = [Sq, zq, ...pq];
+       return cq && "function" === typeof cq && Gq.push(xq.g.updateListener.of(cq)), Gq = Gq.concat(uq), (0, Oq.useLayoutEffect)((() => {
+         if (hq && !Zq) {
+           var qq = {
+               doc: Eq,
+               selection: gq,
+               extensions: Gq
+             },
+ ... (8 more added lines; see GitHub link above)
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1957-L1969` → after: `L16999-L17035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR16999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L16999-L17035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L16999-L17035) · [Before (L1957-L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1957-L1969)

```diff
-       }
-       setRangeIndex(zz) {
-         if (zz == this.layer.chunk[this.chunkIndex].value.length) {
-           if (this.chunkIndex++, this.skip)
-             for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
-           this.rangeIndex = 0
-         } else this.rangeIndex = zz
-       }
-       nextChunk() {
-         this.chunkIndex++, this.rangeIndex = 0, this.next()
-       }
-       compare(zz) {
-         return this.from - zz.from || this.startSide - zz.startSide || this.rank - zz.rank || this.to - zz.to || this.endSide - zz.endSide
+         return () => {
+           bq && (fq(void 0), iq(void 0))
+         }
+       }), [hq, Zq]), (0, Oq.useEffect)((() => {
+         qq.container && nq(qq.container)
+       }), [qq.container]), (0, Oq.useEffect)((() => () => {
+         bq && (bq.destroy(), iq(void 0)), Mq.current && (Mq.current.cancel(), Mq.current = null)
+       }), [bq]), (0, Oq.useEffect)((() => {
+         Bq && bq && bq.focus()
+       }), [Bq, bq]), (0, Oq.useEffect)((() => {
+         bq && bq.dispatch({
+           effects: mq.J.reconfigure.of(Gq)
+         })
+       }), [Wq, uq, Nq, aq, Vq, dq, jq, Hq, oq, Pq, Qq, yq, tq, Yq, cq]), (0, Oq.useEffect)((() => {
+         if (void 0 !== Eq) {
+           var qq = bq ? bq.state.doc.toString() : "";
+ ... (21 more added lines; see GitHub link above)
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1972-L2003` → after: `L17038-L17123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR17038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L17038-L17123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L17038-L17123) · [Before (L1972-L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1972-L2003)

```diff
-     class Wu {
-       constructor(zz) {
-         this.heap = zz
-       }
-       static from(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
-           Ez = [];
-         for (let nz = 0; nz < zz.length; nz++)
-           for (let iz = zz[nz]; !iz.aZ; iz = iz.nextLayer) iz.Tbz >= bz && Ez.push(new Qu(iz, uz, bz, nz));
-         return 1 == Ez.length ? Ez[0] : new Wu(Ez)
-       }
-       get startSide() {
-         return this.value ? this.value.startSide : 0
-       }
-       goto(zz) {
- ... (16 more removed lines; see GitHub link above)
+     var Pg = gq(1070),
+       Qg = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly",  … [truncated]
+       yg = (0, Oq.forwardRef)(((qq, Eq) => {
+         var {
+           className: gq,
+           value: mq = "",
+           selection: xq,
+           extensions: Aq = [],
+           onChange: cq,
+           onStatistics: uq,
+           onCreateEditor: Bq,
+           onUpdate: Wq,
+           autoFocus: Nq,
+           theme: aq = "light",
+           height: Vq,
+           minHeight: dq,
+ ... (70 more added lines; see GitHub link above)
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2008-L2013` → after: `L17130-L17135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR17130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L17130-L17135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L17130-L17135) · [Before (L2008-L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L2008-L2013)

```diff
-       for (let bz = zz[uz];;) {
-         let Ez = 1 + (uz << 1);
-         if (Ez >= zz.length) break;
-         let nz = zz[Ez];
-         if (Ez + 1 < zz.length && nz.compare(zz[Ez + 1]) >= 0 && (nz = zz[Ez + 1], Ez++), bz.compare(nz) < 0) break;
-         zz[Ez] = bz, zz[uz] = nz, uz = Ez
+       if ("string" == typeof Eq) qq.appendChild(document.createTextNode(Eq));
+       else if (null == Eq);
+       else if (null != Eq.nodeType) qq.appendChild(Eq);
+       else {
+         if (!Array.isArray(Eq)) throw new RangeError("Unsupported child node: " + Eq);
+         for (var gq = 0; gq < Eq.length; gq++) lq(qq, Eq[gq])
```

#### 205. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2017-L2018` → after: `L17150-L17174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR17150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L17150-L17174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L17150-L17174) · [Before (L2017-L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L2017-L2018)

```diff
-       constructor(zz, uz, bz) {
-         this.Lbz = bz, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Wu.from(zz, uz, bz)
+       constructor(qq, Eq) {
+         this.rules = [];
+         let {
+           finish: gq
+         } = Eq || {};
+ 
+         function Yq(qq) {
+           return /^@/.test(qq) ? [qq] : qq.split(/,\s*/)
+         }
+ 
+         function lq(qq, Eq, Oq, mq) {
+           let xq = [],
+             Aq = /^@(\w+)\b/.exec(qq[0]),
+             cq = Aq && "keyframes" == Aq[1];
+           if (Aq && null == Eq) return Oq.push(qq[0] + ";");
+           for (let gq in Eq) {
+ ... (9 more added lines; see GitHub link above)
```

#### 206. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2020-L2022` → after: `L17176-L17177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR17176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L17176-L17177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L17176-L17177) · [Before (L2020-L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L2020-L2022)

```diff
-       goto(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
-         return this.cursor.goto(zz, uz), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = zz, this.endSide = uz, this.openStart = -1, this.next(), this
+       getRules() {
+         return this.rules.join("\n")
```

#### 207. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2024-L2026` → after: `L17179-L17181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR17179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L17179-L17181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L17179-L17181) · [Before (L2024-L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L2024-L2026)

```diff
-       forward(zz, uz) {
-         for (; this.minActive > -1 && (this.activeTo[this.minActive] - zz || this.active[this.minActive].endSide - uz) < 0;) this.removeActive(this.minActive);
-         this.cursor.forward(zz, uz)
+       static newName() {
+         let qq = Oq[Yq] || 1;
+         return Oq[Yq] = qq + 1, "\u037c" + qq.toString(36)
```

#### 208. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2028-L2029` → after: `L17183-L17186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR17183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L17183-L17186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L17183-L17186) · [Before (L2028-L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L2028-L2029)

```diff
-       removeActive(zz) {
-         Cu(this.active, zz), Cu(this.activeTo, zz), Cu(this.activeRank, zz), this.minActive = ku(this.active, this.activeTo)
+       static mount(qq, Eq, gq) {
+         let Yq = qq[lq],
+           Oq = gq && gq.nonce;
+         Yq ? Oq && Yq.setNonce(Oq) : Yq = new Aq(qq, Oq), Yq.mount(Array.isArray(Eq) ? Eq : [Eq], qq)
```

#### 209. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2031-L2039` → after: `L17188-L17199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR17188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L17188-L17199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L17188-L17199) · [Before (L2031-L2039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L2031-L2039)

```diff
-       addActive(zz) {
-         let uz = 0,
-           {
-             value: bz,
-             to: Ez,
-             rank: nz
-           } = this.cursor;
-         for (; uz < this.activeRank.length && (nz - this.activeRank[uz] || Ez - this.activeTo[uz]) > 0;) uz++;
-         Yu(this.active, uz, bz), Yu(this.activeTo, uz, Ez), Yu(this.activeRank, uz, nz), zz && Yu(zz, uz, this.cursor.from), this.minActive = ku(this.active, this.activeTo)
+     }
+     let xq = new Map;
+     class Aq {
+       constructor(qq, Eq) {
+         let gq = qq.ownerDocument || qq,
+           Yq = gq.defaultView;
+         if (!qq.head && qq.adoptedStyleSheets && Yq.CSSStyleSheet) {
+           let Eq = xq.get(gq);
+           if (Eq) return qq[lq] = Eq;
+           this.sheet = new Yq.CSSStyleSheet, xq.set(gq, this)
+         } else this.styleTag = gq.createElement("style"), Eq && this.styleTag.setAttribute("nonce", Eq);
+         this.modules = [], qq[lq] = this
```

#### 210. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2041-L2053` → after: `L17201-L17210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR17201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L17201-L17210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L17201-L17210) · [Before (L2041-L2053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L2041-L2053)

```diff
-       next() {
-         let zz = this.to,
-           uz = this.point;
-         this.point = null;
-         let bz = this.openStart < 0 ? [] : null;
-         for (;;) {
-           let Ez = this.minActive;
-           if (Ez > -1 && (this.activeTo[Ez] - this.cursor.from || this.active[Ez].endSide - this.cursor.startSide) < 0) {
-             if (this.activeTo[Ez] > zz) {
-               this.to = this.activeTo[Ez], this.endSide = this.active[Ez].endSide;
-               break
-             }
-             this.removeActive(Ez), bz && Cu(bz, Ez)
+       mount(qq, Eq) {
+         let gq = this.sheet,
+           Yq = 0,
+           lq = 0;
+         for (let Oq = 0; Oq < qq.length; Oq++) {
+           let Eq = qq[Oq],
+             mq = this.modules.indexOf(Eq);
+           if (mq < lq && mq > -1 && (this.modules.splice(mq, 1), lq--, mq = -1), -1 == mq) {
+             if (this.modules.splice(lq++, 0, Eq), gq)
+               for (let qq = 0; qq < Eq.rules.length; qq++) gq.insertRule(Eq.rules[qq], Yq++)
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2055-L2071` → after: `L17212-L17213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR17212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L17212-L17213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L17212-L17213) · [Before (L2055-L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L2055-L2071)

```diff
-             if (!this.cursor.value) {
-               this.to = this.endSide = 1e9;
-               break
-             }
-             if (this.cursor.from > zz) {
-               this.to = this.cursor.from, this.endSide = this.cursor.startSide;
-               break
-             } {
-               let zz = this.cursor.value;
-               if (zz.point) {
-                 if (!(uz && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
-                   this.point = zz, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = zz.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
-                   break
-                 }
-                 this.cursor.next()
-               } else this.addActive(bz), this.cursor.next()
- ... (1 more removed lines; see GitHub link above)
+             for (; lq < mq;) Yq += this.modules[lq++].rules.length;
+             Yq += Eq.rules.length, lq++
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2074-L2076` → after: `L17216-L17222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR17216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L17216-L17222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L17216-L17222) · [Before (L2074-L2076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L2074-L2076)

```diff
-         if (bz) {
-           this.openStart = 0;
-           for (let uz = bz.length - 1; uz >= 0 && bz[uz] < zz; uz--) this.openStart++
+         if (gq) Eq.adoptedStyleSheets.indexOf(this.sheet) < 0 && (Eq.adoptedStyleSheets = [this.sheet, ...Eq.adoptedStyleSheets]);
+         else {
+           let qq = "";
+           for (let Eq = 0; Eq < this.modules.length; Eq++) qq += this.modules[Eq].getRules() + "\n";
+           this.styleTag.textContent = qq;
+           let gq = Eq.head || Eq;
+           this.styleTag.parentNode != gq && gq.insertBefore(this.styleTag, gq.firstChild)
```

#### 213. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2079-L2143` → after: `L17225-L17226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR17225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L17225-L17226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L17225-L17226) · [Before (L2079-L2143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L2079-L2143)

```diff
-       activeForPoint(zz) {
-         if (!this.active.length) return this.active;
-         let uz = [];
-         for (let bz = this.active.length - 1; bz >= 0 && !(this.activeRank[bz] < this.pointRank); bz--)(this.activeTo[bz] > zz || this.activeTo[bz] == zz && this.active[bz].endSide >= this.point.endSide) && uz.push(this.active[bz]);
-         return uz.reverse()
-       }
-       openEnd(zz) {
-         let uz = 0;
-         for (let bz = this.activeTo.length - 1; bz >= 0 && this.activeTo[bz] > zz; bz--) uz++;
-         return uz
-       }
-     }
- 
-     function Iu(zz, uz, bz, Ez, nz, iz) {
-       zz.goto(uz), bz.goto(Ez);
-       let lz = Ez + nz,
- ... (49 more removed lines; see GitHub link above)
+       setNonce(qq) {
+         this.styleTag && this.styleTag.getAttribute("nonce") != qq && this.styleTag.setAttribute("nonce", qq)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/286.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/286.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L4-L11` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/286.js#L4) · [Before (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/286.js#L4-L11)

```diff
-   40619: zz => {
-     function uz(zz) {
-       var uz = new Error("Cannot find module '" + zz + "'");
-       throw uz.code = "MODULE_NOT_FOUND", uz
-     }
-     uz.keys = () => [], uz.resolve = uz, uz.id = 40619, zz.exports = uz
-   },
-   40673: (zz, uz, bz) => {
+   41044: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L14` → after: `L7-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L7-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/286.js#L7-L28) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/286.js#L14)

```diff
-       f: () => nz
+       i: () => fq,
+       ChangeSet: () => Mq,
+       m: () => iE,
+       q: () => kq,
+       u: () => TE,
+       x: () => Fq,
+       B: () => Zq,
+       C: () => lE,
+       G: () => kE,
+       E: () => RE,
+       I: () => SE,
+       J: () => QE,
+       L: () => eq,
+       O: () => Vq,
+       Q: () => yE,
+       U: () => hq,
+ ... (6 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L16-L19` → after: `L30-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L30-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/286.js#L30-L42) · [Before (L16-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/286.js#L16-L19)

```diff
-     const Ez = "Sends one question to the AI",
-       nz = {
-         title: Ez,
-         "data-asks-ai": !0
+     let Yq = [],
+       lq = [];
+ 
+     function Oq(qq) {
+       if (qq < 768) return !1;
+       for (let Eq = 0, gq = Yq.length;;) {
+         let Oq = Eq + gq >> 1;
+         if (qq < Yq[Oq]) gq = Oq;
+         else {
+           if (!(qq >= lq[Oq])) return !0;
+           Eq = Oq + 1
+         }
+         if (Eq == gq) return !1
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L21-L24` → after: `L44-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L44-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/286.js#L44-L430) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/286.js#L21-L24)

```diff
-   },
-   40598: (zz, uz, bz) => {
-     bz.d(uz, {
-       e: () => Ez
+     }
+ 
+     function mq(qq) {
+       return qq >= 127462 && qq <= 127487
+     }(() => {
+       let qq = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7, … [truncated]
+       for (let Eq = 0, gq = 0; Eq < qq.length; Eq++)(Eq % 2 ? lq : Yq).push(gq += qq[Eq])
+     })();
+     const xq = 8205;
+ 
+     function Aq(qq, Eq) {
+       return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? cq : uq)(qq, Eq, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
+     }
+ 
+     function cq(qq, Eq, gq) {
+       if (Eq == qq.length) return Eq;
+ ... (371 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L26-L35` → after: `L432-L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L432-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/286.js#L432-L646) · [Before (L26-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/286.js#L26-L35)

```diff
-     const Ez = String.raw`
- 	/** The ID of the player running the code.
- 	 *
- 	 * Lobby code usually has nobody running it, so this is null.
- 	 */
- 	declare const myId: string | null
- 	/** The position of the code block or press to code board */
- 	declare const thisPos: [number, number, number]
- 	/** The owner of the current custom lobby */
- 	declare const lobbyOwnerId: string | null
+     class tq {
+       constructor(qq, Eq, gq, Yq) {
+         this.from = qq, this.to = Eq, this.number = gq, this.text = Yq
+       }
+       get length() {
+         return this.to - this.from
+       }
+     }
+ 
+     function rq(qq, Eq, gq) {
+       return [Eq = Math.max(0, Math.min(qq.length, Eq)), Math.max(Eq, Math.min(qq.length, gq))]
+     }
+ 
+     function vq(qq, Eq) {
+       return Aq(qq, Eq, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
+     }
+ ... (199 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L37-L41` → after: `L648-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L648-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/286.js#L648-L698) · [Before (L37-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/286.js#L37-L41)

```diff
- 	interface Console {
- 		/** Log a message to chat. */
- 		log(message: any): void
- 	}
- 	declare const console: Console
+         function xq() {
+           if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !Yq.length) return;
+           Oq < Eq && Tq(Yq, Eq - Oq, -1);
+           let qq = new Mq(Yq, lq);
+           mq = mq ? mq.compose(qq.map(mq)) : qq, Yq = [], lq = [], Oq = 0
+         }
+         return function qq(Aq) {
+           if (Array.isArray(Aq))
+             for (let Eq of Aq) qq(Eq);
+           else if (Aq instanceof Mq) {
+             if (Aq.length != Eq) throw new RangeError(`Mismatched change set length (got ${Aq.length}, expected ${Eq})`);
+             xq(), mq = mq ? mq.compose(Aq.map(mq)) : Aq
+           } else {
+             let {
+               from: qq,
+               to: mq = qq,
+ ... (35 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L43-L1851` → after: `L700-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L700-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/286.js#L700-L705) · [Before (L43-L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/286.js#L43-L1851)

```diff
- 	interface GameApi {
- 		/** The ID of the player running the code.
- 		 *
- 		 * Lobby code usually has nobody running it, so this is null.
- 		 */
- 		myId: string | null
- 		/** The position of the code block or press to code board */
- 		thisPos: [number, number, number]
- 		/** The owner of the current custom lobby */
- 		lobbyOwnerId: string | null
- 		/**
-  * Get position of a player / entity.
-  * @param entityId
-  */
- getPosition(entityId: EntityId): Pos
- /**
- ... (1793 more removed lines; see GitHub link above)
+     function Tq(qq, Eq, gq) {
+       let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       if (0 == Eq && gq <= 0) return;
+       let lq = qq.length - 2;
+       lq >= 0 && gq <= 0 && gq == qq[lq + 1] ? qq[lq] += Eq : lq >= 0 && 0 == Eq && 0 == qq[lq] ? qq[lq + 1] += gq : Yq ? (qq[lq] += Eq, qq[lq + 1] += gq) : qq.push(Eq, gq)
+     }
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L1853-L2218` → after: `L707-L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L707-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/286.js#L707-L715) · [Before (L1853-L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/286.js#L1853-L2218)

```diff
- calcExplosionForce(eId: EntityId, explosionType: ExplosionType, knockbackFactor: number, explosionRadius: number, explosionPos: number[], ignoreProjectiles: boolean): { force: Pos; forceFrac: number; }
- /**
-  * Add a custom killfeed message to the killfeed
-  * @param killer - The entity ID or a custom name and colour for the killer
-  * @param victim - The entity ID or a custom name and colour for the victim
-  * @param withItem - The item used
-  */
- addCustomKillfeedMessage(killer: { eId: EntityId } | { name: string; colour: string }, victim: { eId: EntityId } | { name: string; colour: string }, withItem: string): void
- /**
-  * Get the position of a player's target block and the block adjacent to it (e.g. where a block would be placed)
-  *
-  *
-  * Note: This position is a tick ahead of the client's block target info (noa.targetedBlock),
-  * since the client updates the blocktarget before the entities tick (and since it uses the renderposition of the camera)
-  *
-  * This normally doesn't matter but if you are client predicting something based on noa.targetedBlock
- ... (350 more removed lines; see GitHub link above)
+     function zq(qq, Eq, gq) {
+       if (0 == gq.length) return;
+       let Yq = Eq.length - 2 >> 1;
+       if (Yq < qq.length) qq[qq.length - 1] = qq[qq.length - 1].append(gq);
+       else {
+         for (; qq.length < Yq;) qq.push(Vq.empty);
+         qq.push(gq)
+       }
+     }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L2220-L2262` → after: `L717-L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L717-L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/286.js#L717-L731) · [Before (L2220-L2262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/286.js#L2220-L2262)

```diff
- 	}
- 	/** Game API */
- 	declare const api: GameApi;
- type EntityId = string
- type Pos = [number, number, number]
- type LifeformId = EntityId
- type PlayerId = LifeformId
- type PlayerDbId = string
- type LifeformBodyPart = (_TypeOf["lifeformBodyParts"])[number]
- interface PlayerAttemptDamageOtherPlayerOpts {
- 	eId: PlayerId
- 	hitEId: PlayerId
- 	attemptedDmgAmt: number
- 	withItem: string
- 	bodyPartHit?: LifeformBodyPart
- 	attackDir?: number[]
- ... (27 more removed lines; see GitHub link above)
+     function Sq(qq, Eq, gq) {
+       let Yq = qq.inserted;
+       for (let lq = 0, Oq = 0, mq = 0; mq < qq.sections.length;) {
+         let xq = qq.sections[mq++],
+           Aq = qq.sections[mq++];
+         if (Aq < 0) lq += xq, Oq += xq;
+         else {
+           let cq = lq,
+             uq = Oq,
+             Bq = Vq.empty;
+           for (; cq += xq, uq += Aq, Aq && Yq && (Bq = Bq.append(Yq[mq - 2 >> 1])), !(gq || mq == qq.sections.length || qq.sections[mq + 1] < 0);) xq = qq.sections[mq++], Aq = qq.sections[mq++];
+           Eq(lq, cq, Oq, uq, Bq), lq = cq, Oq = uq
+         }
+       }
+     }
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L2264-L2267` → after: `L733-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L733-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/286.js#L733-L774) · [Before (L2264-L2267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/286.js#L2264-L2267)

```diff
- 	// Armour
- 	| "Protection"
- 	| "Health"
- 	| "Health Regen"
+     function pq(qq, Eq, gq) {
+       let Yq = [],
+         lq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
+         Oq = new Lq(qq),
+         mq = new Lq(Eq),
+         xq = 0;
+       for (let Aq = -1;;) {
+         if (++xq > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
+         if (Oq.done && mq.len || mq.done && Oq.len) throw new Error("Mismatched change set lengths");
+         if (-1 == Oq.ins && -1 == mq.ins) {
+           let qq = Math.min(Oq.len, mq.len);
+           Tq(Yq, qq, -1), Oq.forward(qq), mq.forward(qq)
+         } else if (mq.ins >= 0 && (Oq.ins < 0 || Aq == Oq.i || 0 == Oq.off && (mq.len < Oq.len || mq.len == Oq.len && !gq))) {
+           let qq = mq.len;
+           for (Tq(Yq, mq.ins, -1); qq;) {
+             if (++xq > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
+ ... (26 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L2269-L2271` → after: `L776-L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L776-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/286.js#L776-L999) · [Before (L2269-L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/286.js#L2269-L2271)

```diff
- 	// Special Armour
- 	| "Stomp Damage"
- 	| "Knockback Resist"
+     function Gq(qq, Eq) {
+       let gq = [],
+         Yq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
+         lq = new Lq(qq),
+         Oq = new Lq(Eq),
+         mq = 0;
+       for (let xq = !1;;) {
+         if (++mq > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
+         if (lq.done && Oq.done) return Yq ? Mq.createSet(gq, Yq) : fq.create(gq);
+         if (0 == lq.ins) Tq(gq, lq.len, 0, xq), lq.next();
+         else if (0 != Oq.len || Oq.done) {
+           if (lq.done || Oq.done) throw new Error("Mismatched change set lengths");
+           {
+             let qq = Math.min(lq.len2, Oq.len),
+               Eq = gq.length;
+             if (-1 == lq.ins) {
+ ... (208 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L2273-L2276` → after: `L1001-L1038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1001-L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/286.js#L1001-L1038) · [Before (L2273-L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/286.js#L2273-L2276)

```diff
- 	// Bows & Crossbows
- 	| "Arrow Speed"
- 	| "Arrow Damage"
- 	| "Quick Charge"
+     function sq(qq, Eq) {
+       return qq == Eq || qq.length == Eq.length && qq.every(((qq, gq) => qq === Eq[gq]))
+     }
+     class Xq {
+       constructor(qq, Eq, gq, Yq) {
+         this.dependencies = qq, this.facet = Eq, this.type = gq, this.value = Yq, this.id = Uq++
+       }
+       dynamicSlot(qq) {
+         var Eq;
+         let gq = this.value,
+           Yq = this.facet.compareInput,
+           lq = this.id,
+           Oq = qq[lq] >> 1,
+           mq = 2 == this.type,
+           xq = !1,
+           Aq = !1,
+ ... (22 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L2278-L2286` → after: `L1040-L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1040-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/286.js#L1040-L1045) · [Before (L2278-L2286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/286.js#L2278-L2286)

```diff
- 	// Tools
- 	| "Break Speed"
- 	| "Momentum"
- 	| "Mining Yield"
- 	| "Farming Yield"
- 	| "Mining Aura"
- 	| "Digging Aura"
- 	| "Lumber Aura"
- 	| "Farming Aura"
+     function wq(qq, Eq, gq) {
+       if (qq.length != Eq.length) return !1;
+       for (let Yq = 0; Yq < qq.length; Yq++)
+         if (!gq(qq[Yq], Eq[Yq])) return !1;
+       return !0
+     }
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L2288-L2290` → after: `L1047-L1051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1047-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/286.js#L1047-L1051) · [Before (L2288-L2290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/286.js#L2288-L2290)

```diff
- 	// Sticks
- 	| "Horizontal Knockback"
- 	| "Vertical Knockback"
+     function Kq(qq, Eq) {
+       let gq = !1;
+       for (let Yq of Eq) 1 & cE(qq, Yq) && (gq = !0);
+       return gq
+     }
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L2292-L2577` → after: `L1053-L1057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1053-L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/286.js#L1053-L1057) · [Before (L2292-L2577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/286.js#L2292-L2577)

```diff
- 	// Hang Gliders
- 	| "Firecracker Cooldown"
- 	| "Firecracker Boost"
- 	| "Gliding Speed"
- type EnchantmentTier = (_TypeOf["enchantmentTiers"])[number]
- type CustomTextStyling = (string | EntityName | TranslatedText | StyledIcon | StyledText | ProgressBar | StyledKeyBinding)[]
- type TranslatedText = {
- 	translationKey: string
- 	params?: Record<string, string | number | boolean | EntityName>
- }
- type EntityName = {
- 	entityName: string
- 	ranks?: Readonly<Rank[]>
- 	style?: {
- 		color?: string
- 		colour?: string
- ... (270 more removed lines; see GitHub link above)
+     function Cq(qq, Eq, gq) {
+       let Yq = gq.map((Eq => qq[Eq.id])),
+         lq = gq.map((qq => qq.type)),
+         Oq = Yq.filter((qq => !(1 & qq))),
+         mq = qq[Eq.id] >> 1;
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L2579-L2919` → after: `L1059-L1133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1059-L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/286.js#L1059-L1133) · [Before (L2579-L2919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/286.js#L2579-L2919)

```diff
- 	// Not defined on client, must be defined on server
- 	boughtCallback?: (
- 		playerId: PlayerId,
- 		cost: number,
- 		currency: string,
- 		categoryKey: ShopCategoryKey,
- 		itemKey: ShopItemKey,
- 		userInput: string,
- 		amount: number | undefined,
- 	) => void
- 	sell?: boolean // Optional, defaults to false. If true, the sign of "cost" is flipped. So a "cost" of -25 would give the player 25 currency AND be displayed as "25" (instead of -25)
- 	sortPriority?: number // Descending, bigger number means closer to the top
- 	hidden?: boolean
- 	smp?: SmpShopItemMeta // Set by the SMP marketplace plugin only, for its own shop screens
- }
- type ShopItemUserInput =
- ... (325 more removed lines; see GitHub link above)
+       function xq(qq) {
+         let gq = [];
+         for (let Eq = 0; Eq < Yq.length; Eq++) {
+           let Oq = uE(qq, Yq[Eq]);
+           if (2 == lq[Eq])
+             for (let qq of Oq) gq.push(qq);
+           else gq.push(Oq)
+         }
+         return Eq.combine(gq)
+       }
+       return {
+         create(qq) {
+           for (let Eq of Yq) cE(qq, Eq);
+           return qq.values[mq] = xq(qq), 1
+         },
+         update(qq, gq) {
+ ... (59 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L2921-L2922` → after: `L1135-L1189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1135-L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/286.js#L1135-L1189) · [Before (L2921-L2922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/286.js#L2921-L2922)

```diff
- 	msPerRound?: number // computed from fireRate
- 	msPerRoundTouchScreen?: number // computed from fireRateWithHeldTouch
+     function YE(qq) {
+       return Eq => new OE(Eq, qq)
+     }
+     const lE = {
+       highest: YE(0),
+       high: YE(gE),
+       default: YE(EE),
+       low: YE(qE),
+       lowest: YE(Dq)
+     };
+     class OE {
+       constructor(qq, Eq) {
+         this.inner = qq, this.prec = Eq
+       }
+     }
+     class mE {
+ ... (39 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L2924-L2925` → after: `L1191-L1238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1191-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/286.js#L1191-L1238) · [Before (L2924-L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/286.js#L2924-L2925)

```diff
- 	altYVelocityInaccuracy?: number
- 	altInaccuracyFromJump?: number
+             function Oq(qq, mq) {
+               let xq = lq.get(qq);
+               if (null != xq) {
+                 if (xq <= mq) return;
+                 let Eq = Yq[xq].indexOf(qq);
+                 Eq > -1 && Yq[xq].splice(Eq, 1), qq instanceof xE && gq.delete(qq.compartment)
+               }
+               if (lq.set(qq, mq), Array.isArray(qq))
+                 for (let Eq of qq) Oq(Eq, mq);
+               else if (qq instanceof xE) {
+                 if (gq.has(qq.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
+                 let Yq = Eq.get(qq.compartment) || qq.inner;
+                 gq.set(qq.compartment, Yq), Oq(Yq, mq)
+               } else if (qq instanceof OE) Oq(qq.inner, qq.prec);
+               else if (qq instanceof eq) Yq[mq].push(qq), qq.provides && Oq(qq.provides, mq);
+               else if (qq instanceof Xq) Yq[mq].push(qq), qq.facet.extensions && Oq(qq.facet.extensions, EE);
+ ... (32 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L2927` → after: `L1240-L1249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1240-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/286.js#L1240-L1249) · [Before (L2927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/286.js#L2927)

```diff
- 	hasVerticalInaccuracy?: boolean
+     function cE(qq, Eq) {
+       if (1 & Eq) return 2;
+       let gq = Eq >> 1,
+         Yq = qq.status[gq];
+       if (4 == Yq) throw new Error("Cyclic dependency between fields and/or facets");
+       if (2 & Yq) return Yq;
+       qq.status[gq] = 4;
+       let lq = qq.computeSlot(qq, qq.config.dynamicSlots[gq]);
+       return qq.status[gq] = 2 | lq
+     }
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L2929` → after: `L1251-L1345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1251-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/286.js#L1251-L1345) · [Before (L2929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/286.js#L2929)

```diff
- 	keepScopeOnShot?: boolean
+     function uE(qq, Eq) {
+       return 1 & Eq ? qq.config.staticValues[Eq >> 1] : qq.values[Eq >> 1]
+     }
+     const BE = Fq.define(),
+       WE = Fq.define({
+         combine: qq => qq.some((qq => qq)),
+         static: !0
+       }),
+       NE = Fq.define({
+         combine: qq => qq.length ? qq[0] : void 0,
+         static: !0
+       }),
+       aE = Fq.define(),
+       VE = Fq.define(),
+       dE = Fq.define(),
+       jE = Fq.define({
+ ... (79 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L2931` → after: `L1347-L1357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1347-L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/286.js#L1347-L1357) · [Before (L2931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/286.js#L2931)

```diff
- 	aimZoomFactor?: number
+     function tE(qq, Eq) {
+       let gq = [];
+       for (let Yq = 0, lq = 0;;) {
+         let Oq, mq;
+         if (Yq < qq.length && (lq == Eq.length || Eq[lq] >= qq[Yq])) Oq = qq[Yq++], mq = qq[Yq++];
+         else {
+           if (!(lq < Eq.length)) return gq;
+           Oq = Eq[lq++], mq = Eq[lq++]
+         }!gq.length || gq[gq.length - 1] < Oq ? gq.push(Oq, mq) : gq[gq.length - 1] < mq && (gq[gq.length - 1] = mq)
+       }
+     }
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L2933-L2942` → after: `L1359-L1369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1359-L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/286.js#L1359-L1369) · [Before (L2933-L2942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/286.js#L2933-L2942)

```diff
- 	// Kickback
- 	kickbackDecreaseRate: number
- 	minKickback?: number
- 	maxKickback?: number
- 	kickbackRate?: number
- }
- type NonOverridableStats =
- 	// Precomputed values
- 	| "msPerRound"
- 	| "msPerRoundTouchScreen"
+     function rE(qq, Eq, gq) {
+       var Yq;
+       let lq, Oq, mq;
+       return gq ? (lq = Eq.changes, Oq = Mq.empty(Eq.changes.length), mq = qq.changes.compose(Eq.changes)) : (lq = Eq.changes.map(qq.changes), Oq = qq.changes.mapDesc(Eq.changes, !0), mq = qq.changes.compose(lq)), {
+         changes: mq,
+         selection: Eq.selection ? Eq.selection.map(Oq) : null === (Yq = qq.selection) || void 0 === Yq ? void 0 : Yq.map(lq),
+         effects: QE.mapEffects(qq.effects, lq).concat(QE.mapEffects(Eq.effects, Oq)),
+         annotations: qq.annotations.length ? qq.annotations.concat(Eq.annotations) : Eq.annotations,
+         scrollIntoView: qq.scrollIntoView || Eq.scrollIntoView
+       }
+     }
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L2944-L3066` → after: `L1371-L1381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1371-L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/286.js#L1371-L1381) · [Before (L2944-L3066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/286.js#L2944-L3066)

```diff
- 	// These two don't even work lol
- 	// TODO: Fix them
- 	| "tagSpeedMult"
- 	| "subsequentTagSpeedReductionScalar"
- type GunCategory = (_TypeOf["gunCategories"])[number]
- type WeaponComboInfo = Readonly<{
- 	comboWindowMs: number
- 	comboMultipliers: readonly number[]
- 	backstabAngle?: number // If present, hitting an enemy from behind within this angle (radians) skip to end of combo
- }>
- type AnyMetadataItem = Partial<BlockMetadataItem & NonBlockMetadataItem>
- type CustomItemStat = (_TypeOf["customItemStats"])[number]
- type InvenItem = { name: string; amount: number | null; attributes: ItemAttributes; typeObj: any }
- type RecipesForItem = RecursiveReadonly<
- 	{
- 		requires: { items: ItemName[]; amt: number }[]
- ... (107 more removed lines; see GitHub link above)
+     function vE(qq, Eq, gq) {
+       let Yq = Eq.selection,
+         lq = bE(Eq.annotations);
+       return Eq.userEvent && (lq = lq.concat(yE.userEvent.of(Eq.userEvent))), {
+         changes: Eq.changes instanceof Mq ? Eq.changes : Mq.of(Eq.changes || [], gq, qq.facet(NE)),
+         selection: Yq && (Yq instanceof kq ? Yq : kq.single(Yq.anchor, Yq.head)),
+         effects: bE(Eq.effects),
+         annotations: lq,
+         scrollIntoView: !!Eq.scrollIntoView
+       }
+     }
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L3068-L3070` → after: `L1383-L1430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1383-L1430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/286.js#L1383-L1430) · [Before (L3068-L3070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/286.js#L3068-L3070)

```diff
- 	// If a mob drops an item, then we choose a random amount within these bounds.
- 	dropMinAmount?: number
- 	dropMaxAmount?: number
+     function hE(qq, Eq, gq) {
+       let Yq = vE(qq, Eq.length ? Eq[0] : {}, qq.doc.length);
+       Eq.length && !1 === Eq[0].filter && (gq = !1);
+       for (let Oq = 1; Oq < Eq.length; Oq++) {
+         !1 === Eq[Oq].filter && (gq = !1);
+         let lq = !!Eq[Oq].sequential;
+         Yq = rE(Yq, vE(qq, Eq[Oq], lq ? Yq.changes.newLength : qq.doc.length), lq)
+       }
+       let lq = yE.create(qq, Yq.changes, Yq.selection, Yq.effects, Yq.annotations, Yq.scrollIntoView);
+       return function(qq) {
+         let Eq = qq.startState,
+           gq = Eq.facet(dE),
+           Yq = qq;
+         for (let lq = gq.length - 1; lq >= 0; lq--) {
+           let Oq = gq[lq](qq);
+           Oq && Object.keys(Oq).length && (Yq = rE(Yq, vE(Eq, Oq, qq.changes.newLength), !0))
+ ... (32 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L3072-L4004` → after: `L1432-L1442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1432-L1442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/286.js#L1432-L1442) · [Before (L3072-L4004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/286.js#L3072-L4004)

```diff
- 	// If true, the item will "burst" out of the mob rather than just dropping.
- 	applyBurstImpulseToDrop?: boolean
- }>
- type MobBurstAttackInfo = Readonly<{
- 	burstAttackIntervals: readonly number[]
- }>
- type MobArmour = Partial<Readonly<Record<ArmourPart, MobArmourPiece>>>
- type MobWarpTargetSpecialAttackInfo = Readonly<{
- 	cooldown: number
- 	range: number
- 	sound: string | null
- 	delay: number
- 	minDestinationRadius: number
- 	maxDestinationRadius: number
- 	swingArm: boolean
- 	particleOpts: TempMobParticleOpts | null
- ... (917 more removed lines; see GitHub link above)
+     function bE(qq) {
+       return null == qq ? nE : Array.isArray(qq) ? qq : [qq]
+     }
+     var iE = function(qq) {
+       return qq[qq.Word = 0] = "Word", qq[qq.Space = 1] = "Space", qq[qq.Other = 2] = "Other", qq
+     }(iE || (iE = {}));
+     const ZE = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
+     let fE;
+     try {
+       fE = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
+     } catch (gg) {}
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L4257-L4258` → after: `L1445-L2145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1445-L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/286.js#L1445-L2145) · [Before (L4257-L4258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/286.js#L4257-L4258)

```diff
-       var uz = new Error("Cannot find module '" + zz + "'");
-       throw uz.code = "MODULE_NOT_FOUND", uz
+       return Eq => {
+         if (!/\S/.test(Eq)) return iE.Space;
+         if (function(qq) {
+             if (fE) return fE.test(qq);
+             for (let Eq = 0; Eq < qq.length; Eq++) {
+               let gq = qq[Eq];
+               if (/\w/.test(gq) || gq > "\x80" && (gq.toUpperCase() != gq.toLowerCase() || ZE.test(gq))) return !0
+             }
+             return !1
+           }(Eq)) return iE.Word;
+         for (let gq = 0; gq < qq.length; gq++)
+           if (Eq.indexOf(qq[gq]) > -1) return iE.Word;
+         return iE.Other
+       }
+     }
+     class TE {
+ ... (685 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L4260-L4269` → after: `L2147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR2147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/286.js#L2147) · [Before (L4260-L4269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/286.js#L4260-L4269)

```diff
-     uz.keys = () => [], uz.resolve = uz, uz.id = 40659, zz.exports = uz
-   },
-   40614: () => {},
-   40649: () => {},
-   40640: () => {},
-   40666: () => {},
-   40646: () => {},
-   40642: () => {},
-   40632: () => {},
-   40651: () => {}
+   }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/287.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/287.js` (99 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L4` → after: `L4-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L4-L11) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L4)

```diff
-   40607: (zz, uz, bz) => {
+   41138: qq => {
+     function Eq(qq) {
+       var Eq = new Error("Cannot find module '" + qq + "'");
+       throw Eq.code = "MODULE_NOT_FOUND", Eq
+     }
+     Eq.keys = () => [], Eq.resolve = Eq, Eq.id = 41138, qq.exports = Eq
+   },
+   41208: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L13-L14) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6)

```diff
-       d: () => Ez
+       e: () => Yq,
+       i: () => lq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L8-L736` → after: `L16-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L16-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L16-L57) · [Before (L8-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L8-L736)

```diff
-     const Ez = String.raw`interface Map<K, V> {
-     clear(): void;
-     /**
-      * @returns true if an element in the Map existed and has been removed, or false if the element does not exist.
-      */
-     delete(key: K): boolean;
-     /**
-      * Executes a provided function once per each key/value pair in the Map, in insertion order.
-      */
-     forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
-     /**
-      * Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
-      * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
-      */
-     get(key: K): V | undefined;
-     /**
- ... (713 more removed lines; see GitHub link above)
+     const Yq = "Sends one question to the AI",
+       lq = {
+         title: Yq,
+         "data-asks-ai": !0
+       }
+   },
+   41108: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => Yq
+     });
+     const Yq = String.raw`
+ 	/** The ID of the player running the code.
+ 	 *
+ 	 * Lobby code usually has nobody running it, so this is null.
+ 	 */
+ 	declare const myId: string | null
+ ... (26 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L738` → after: `L59-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L59-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L59-L63) · [Before (L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L738)

```diff
-  * Describes a user-defined {@link Iterator} that is also iterable.
+  * Set position of a player / entity.
+  * @param entityId
+  * @param x Can also be an array, in which case y and z shouldn't be passed
+  * @param y
+  * @param z
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L740-L743` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L65) · [Before (L740-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L740-L743)

```diff
- interface IterableIterator<T, TReturn = any, TNext = any> extends Iterator<T, TReturn, TNext> {
-     [Symbol.iterator](): IterableIterator<T, TReturn, TNext>;
- }
- 
+ setPosition(entityId: EntityId, x: number | number[], y?: number, z?: number): void
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L745` → after: `L67-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L67-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L67-L68) · [Before (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L745)

```diff
-  * Describes an {@link Iterator} produced by the runtime that inherits from the intrinsic \`Iterator.prototype\`.
+  * Get the scale of a lifeform.
+  * @param lifeformId
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L747-L1178` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L70) · [Before (L747-L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L747-L1178)

```diff
- interface IteratorObject<T, TReturn = unknown, TNext = unknown> extends Iterator<T, TReturn, TNext> {
-     [Symbol.iterator](): IteratorObject<T, TReturn, TNext>;
- }
- 
- interface ArrayIterator<T> extends IteratorObject<T, BuiltinIteratorReturn, unknown> {
-     [Symbol.iterator](): ArrayIterator<T>;
- }
- 
- interface Array<T> {
-     /** Iterator */
-     [Symbol.iterator](): ArrayIterator<T>;
- 
-     /**
-      * Returns an iterable of key, value pairs for every entry in the array
-      */
-     entries(): ArrayIterator<[number, T]>;
- ... (416 more removed lines; see GitHub link above)
+ getLifeformScale(lifeformId: LifeformId): number
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1180-L1181` → after: `L72-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L72-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L72-L77) · [Before (L1180-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L1180-L1181)

```diff
-  * Defines the \`TReturn\` type used for built-in iterators produced by \`Array\`, \`Map\`, \`Set\`, and others.
-  * This is \`undefined\` when \`strictBuiltInIteratorReturn\` is \`true\`; otherwise, this is \`any\`.
+  * Set the visual + physical scale of a lifeform. A scale of 1 is the default size.
+  * Bodies stop growing at 25 blocks wide and 90 tall (a player's at scale 50); past that only the model grows.
+  * getLifeformScale returns the scale rounded to 32-bit precision (0.7 reads back as 0.699999988079071).
+  *
+  * @param lifeformId
+  * @param scale Must be a positive number, from about 1.4e-45 to 3.4e38.
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1183-L3029` → after: `L79-L1615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L79-L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L79-L1615) · [Before (L1183-L3029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L1183-L3029)

```diff
- type BuiltinIteratorReturn = intrinsic;
- 
- interface ProxyHandler<T extends object> {
-     /**
-      * A trap method for a function call.
-      * @param target The original callable object which is being proxied.
-      */
-     apply?(target: T, thisArg: any, argArray: any[]): any;
- 
-     /**
-      * A trap for the \`new\` operator.
-      * @param target The original object which is being proxied.
-      * @param newTarget The constructor that was originally called.
-      */
-     construct?(target: T, argArray: any[], newTarget: Function): object;
- 
- ... (1831 more removed lines; see GitHub link above)
+ setLifeformScale(lifeformId: LifeformId, scale: number): void
+ /**
+  * Get all the player ids.
+  */
+ getPlayerIds(): PlayerId[]
+ /**
+  * Whether a player is currently in the game
+  *
+  * @param playerId
+  */
+ playerIsInGame(playerId: PlayerId): boolean
+ /**
+  * Whether a player is signed in to a Bloxd account: false for guests, who are still in the game.
+  * To check that a player is still in the game, use playerIsInGame.
+  * @param playerId
+  * @returns
+ ... (1521 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L3031` → after: `L1617-L1620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L1617-L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L1617-L1620) · [Before (L3031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L3031)

```diff
-  * Creates a new function.
+  * Delete a request for a player.
+  *
+  * @param playerId
+  * @param id Returned from the addUiRequest call you want to cancel
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L3033-L3952` → after: `L1622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R1622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L1622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L1622) · [Before (L3033-L3952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L3033-L3952)

```diff
- interface Function {
-     /**
-      * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
-      * @param thisArg The object to be used as the this object.
-      * @param argArray A set of arguments to be passed to the function.
-      */
-     apply(this: Function, thisArg: any, argArray?: any): any;
- 
-     /**
-      * Calls a method of an object, substituting another object for the current object.
-      * @param thisArg The object to be used as the current object.
-      * @param argArray A list of arguments to be passed to the method.
-      */
-     call(this: Function, thisArg: any, ...argArray: any[]): any;
- 
-     /**
- ... (904 more removed lines; see GitHub link above)
+ deleteUiRequest(playerId: PlayerId, id: UiRequestId): void
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L3954-L3957` → after: `L1624-L1629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R1624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L1624-L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L1624-L1629) · [Before (L3954-L3957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L3954-L3957)

```diff
-  * Represents a raw buffer of binary data, which is used to store data for the
-  * different typed arrays. ArrayBuffers cannot be read from or written to directly,
-  * but can be passed to a typed array or DataView Object to interpret the raw
-  * buffer as needed.
+  * Show a message over the shop in the same place that a shop item's onBoughtMessage is shown.
+  * Displays for a couple seconds before disappearing
+  * Use case is to show a dynamic message when player buys an item
+  *
+  * @param playerId
+  * @param info
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L3959-L3970` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L1631) · [Before (L3959-L3970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L3959-L3970)

```diff
- interface ArrayBuffer {
-     /**
-      * Read-only. The length of the ArrayBuffer (in bytes).
-      */
-     readonly byteLength: number;
- 
-     /**
-      * Returns a section of an ArrayBuffer.
-      */
-     slice(begin?: number, end?: number): ArrayBuffer;
- }
- 
+ sendOverShopInfo(playerId: PlayerId, info: string | CustomTextStyling): void
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L3972` → after: `L1633-L1640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R1633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L1633-L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L1633-L1640) · [Before (L3972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L3972)

```diff
-  * Allowed ArrayBuffer types for the buffer of an ArrayBufferView and related Typed Arrays.
+  * Open the shop UI for a player
+  *
+  * @param playerId
+  * @param toggle Whether to close the shop if it's already open. Leave this off when opening from an
+  * interaction: holding the interact button re-fires the alt action every ~50-150ms, so a toggle would
+  * flicker the shop open and closed until release.
+  * @param forceCategoryKey If set, will change the shop to this category
+  * @param onlyIfNonEmpty If true, will only open the shop if the category (or shop, if no category is provided) is non-empty
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L3974-L4000` → after: `L1642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R1642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L1642) · [Before (L3974-L4000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L3974-L4000)

```diff
- interface ArrayBufferTypes {
-     ArrayBuffer: ArrayBuffer;
- }
- 
- interface ArrayBufferConstructor {
-     readonly prototype: ArrayBuffer;
-     new (byteLength: number): ArrayBuffer;
-     isView(arg: any): arg is ArrayBufferView;
- }
- 
- interface ArrayBufferView<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
-     /**
-      * The ArrayBuffer instance referenced by the array.
-      */
-     readonly buffer: TArrayBuffer;
- 
- ... (11 more removed lines; see GitHub link above)
+ openShop(playerId: PlayerId, toggle?: boolean, forceCategoryKey?: ShopCategoryKey | null, onlyIfNonEmpty?: boolean): void
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L4002-L4003` → after: `L1644-L1654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R1644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L1644-L1654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L1644-L1654) · [Before (L4002-L4003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L4002-L4003)

```diff
-  * A typed array of 8-bit integer values. The contents are initialized to 0. If the requested
-  * number of bytes could not be allocated an exception is raised.
+  * Apply an effect to a lifeform.
+  * Can be an inbuilt effect E.g. "Speed" (speed boost), "Damage" (damage boost).
+  * For inbuilt just pass the name of the effect and the functionality is handled in-engine.
+  * For custom effect, you pass customEffectInfo. The icon can be an InGameIconName or a bloxd item name.
+  * The custom effect onEndCb is an optional helper within which you can undo the effect you applied.
+  * Note that onEndCb will not work for press to code boards, code blocks or world code.
+  *
+  * @param lifeformId
+  * @param effectName
+  * @param duration
+  * @param customEffectInfo
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L4005-L4282` → after: `L1656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R1656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L1656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L1656) · [Before (L4005-L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L4005-L4282)

```diff
- interface Int8Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
-     /**
-      * The size in bytes of each element in the array.
-      */
-     readonly BYTES_PER_ELEMENT: number;
- 
-     /**
-      * The ArrayBuffer instance referenced by the array.
-      */
-     readonly buffer: TArrayBuffer;
- 
-     /**
-      * The length in bytes of the array.
-      */
-     readonly byteLength: number;
- 
- ... (262 more removed lines; see GitHub link above)
+ applyEffect(lifeformId: LifeformId, effectName: string, duration: number | null, customEffectInfo: { icon?: IngameIconName | ItemName; onEndCb?: () => void; displayName?: string | TranslatedText } & Partial<InbuiltEffectInfo>): void
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L4284-L4285` → after: `L1658-L1662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R1658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L1658-L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L1658-L1662) · [Before (L4284-L4285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L4284-L4285)

```diff
-  * A typed array of 8-bit unsigned integer values. The contents are initialized to 0. If the
-  * requested number of bytes could not be allocated an exception is raised.
+  * Check if a lifeform has an effect.
+  *
+  * @param lifeformId
+  * @param name
+  * @param atOrAboveLevel Checks whether the effect is at or above the given level
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L4287-L4563` → after: `L1664-L1851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L1664-L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L1664-L1851) · [Before (L4287-L4563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L4287-L4563)

```diff
- interface Uint8Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
-     /**
-      * The size in bytes of each element in the array.
-      */
-     readonly BYTES_PER_ELEMENT: number;
- 
-     /**
-      * The ArrayBuffer instance referenced by the array.
-      */
-     readonly buffer: TArrayBuffer;
- 
-     /**
-      * The length in bytes of the array.
-      */
-     readonly byteLength: number;
- 
- ... (261 more removed lines; see GitHub link above)
+ hasEffect(lifeformId: LifeformId, name: string, atOrAboveLevel?: number): boolean
+ /**
+  * Get the level of an effect on a lifeform, or 0 if they don't have it.
+  *
+  * @param lifeformId
+  * @param name
+  */
+ getEffectLevel(lifeformId: LifeformId, name: string): number
+ /**
+  * Get all the effects currently applied to a lifeform.
+  *
+  * @param lifeformId
+  */
+ getEffects(lifeformId: LifeformId): string[]
+ /**
+  * Remove an effect from a lifeform.
+ ... (172 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L4566-L4567` → after: `L1930-L1942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R1930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L1930-L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L1930-L1942) · [Before (L4566-L4567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L4566-L4567)

```diff
-  * A typed array of 16-bit signed integer values. The contents are initialized to 0. If the
-  * requested number of bytes could not be allocated an exception is raised.
+  * Register an event for analytics. Custom games only: anywhere else, World Code gets an error.
+  * Special value is eventType "match" and eventValue "match_started" to mark the start of a match when calculating average quantities
+  * Each player can send 20 events a minute. Each day a game can have 20 game categories, 20 event types in each and
+  * 50 event values for each type; once it goes past one, events at that level are dropped until midnight UTC
+  *
+  * @param playerId - The player associated with the event
+  * @param eventType - The type of event e.g. "shop" or "death", at most 64 characters
+  * @param eventValue - The detail of the event e.g. the item bought or cause of death, at most 128 characters
+  * @param gameCategoryId - The game category id e.g. the map you're playing on or the variant of the game to filter by or compare, at most 128 characters
+  * @param gameStartTimeMs - The time the game or match started in milliseconds since 1970, within the last 30 days - use to get event times relative to the start of the game.
+  * Each event also records the player's lifetime playtime
+  * @param position - Where the event happened, e.g. where the player died or the block they broke, shown on Studio's heatmap. In the same frame of reference as the game's registerAnalyticsPlayerPosition positions for this category. Without one, no position is recorded
+  * @param numericValue - A number the event measures, e.g. the coins earned, the round's score or the seconds it took.
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L4569-L4845` → after: `L1944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R1944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L1944) · [Before (L4569-L4845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L4569-L4845)

```diff
- interface Int16Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
-     /**
-      * The size in bytes of each element in the array.
-      */
-     readonly BYTES_PER_ELEMENT: number;
- 
-     /**
-      * The ArrayBuffer instance referenced by the array.
-      */
-     readonly buffer: TArrayBuffer;
- 
-     /**
-      * The length in bytes of the array.
-      */
-     readonly byteLength: number;
- 
- ... (261 more removed lines; see GitHub link above)
+ registerAnalyticsEvent(playerId: string, eventType: string, eventValue: string | null, gameCategoryId: string | null, gameStartTimeMs: number, position?: Pos | null, numericValue?: number | null): void
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L4847-L4848` → after: `L1946-L1954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R1946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L1946-L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L1946-L1954) · [Before (L4847-L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L4847-L4848)

```diff
-  * A typed array of 16-bit unsigned integer values. The contents are initialized to 0. If the
-  * requested number of bytes could not be allocated an exception is raised.
+  * Record where a player is for the analytics heatmap. Call it at a regular interval (e.g. once a second).
+  * Custom games only: anywhere else, World Code gets an error.
+  * Each player can send 120 positions a minute. Each day a game can send 100,000 different blocks (event positions
+  * included); once it goes past that, positions are dropped until midnight UTC
+  *
+  * @param playerId - The player whose position to record
+  * @param gameCategoryId - The game category id e.g. the map you're playing on or the variant of the game to filter by, at most 128 characters
+  * @param gameStartTimeMs - The time the game or match started in milliseconds since 1970, within the last 30 days - used to get a playback of positions
+  * @param position - The position of the player to record. Defaults to the player's global position.
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L4850-L5127` → after: `L1956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R1956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L1956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L1956) · [Before (L4850-L5127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L4850-L5127)

```diff
- interface Uint16Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
-     /**
-      * The size in bytes of each element in the array.
-      */
-     readonly BYTES_PER_ELEMENT: number;
- 
-     /**
-      * The ArrayBuffer instance referenced by the array.
-      */
-     readonly buffer: TArrayBuffer;
- 
-     /**
-      * The length in bytes of the array.
-      */
-     readonly byteLength: number;
- 
- ... (262 more removed lines; see GitHub link above)
+ registerAnalyticsPlayerPosition(playerId: string, gameCategoryId: string | null, gameStartTimeMs: number, position?: Pos | null): void
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L5129-L5130` → after: `L1958-L1959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R1958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L1958-L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L1958-L1959) · [Before (L5129-L5130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L5129-L5130)

```diff
-  * A typed array of 32-bit signed integer values. The contents are initialized to 0. If the
-  * requested number of bytes could not be allocated an exception is raised.
+  * Gets a database value that is saved per lobby.
+  * @param key
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L5132-L5409` → after: `L1961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R1961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L1961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L1961) · [Before (L5132-L5409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L5132-L5409)

```diff
- interface Int32Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
-     /**
-      * The size in bytes of each element in the array.
-      */
-     readonly BYTES_PER_ELEMENT: number;
- 
-     /**
-      * The ArrayBuffer instance referenced by the array.
-      */
-     readonly buffer: TArrayBuffer;
- 
-     /**
-      * The length in bytes of the array.
-      */
-     readonly byteLength: number;
- 
- ... (262 more removed lines; see GitHub link above)
+ getLobbyDbValue(key: string): string | number | null
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L5411-L5412` → after: `L1963-L1965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R1963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L1963-L1965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L1963-L1965) · [Before (L5411-L5412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L5411-L5412)

```diff
-  * A typed array of 32-bit unsigned integer values. The contents are initialized to 0. If the
-  * requested number of bytes could not be allocated an exception is raised.
+  * Sets a database value that is saved per lobby. This persists between sessions.
+  * @param key
+  * @param value
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L5414-L5690` → after: `L1967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R1967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L1967) · [Before (L5414-L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L5414-L5690)

```diff
- interface Uint32Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
-     /**
-      * The size in bytes of each element in the array.
-      */
-     readonly BYTES_PER_ELEMENT: number;
- 
-     /**
-      * The ArrayBuffer instance referenced by the array.
-      */
-     readonly buffer: TArrayBuffer;
- 
-     /**
-      * The length in bytes of the array.
-      */
-     readonly byteLength: number;
- 
- ... (261 more removed lines; see GitHub link above)
+ setLobbyDbValue(key: string, value: string | number): void
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L5692-L5693` → after: `L1969-L1970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R1969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L1969-L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L1969-L1970) · [Before (L5692-L5693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L5692-L5693)

```diff
-  * A typed array of 32-bit float values. The contents are initialized to 0. If the requested number
-  * of bytes could not be allocated an exception is raised.
+  * Deletes a database value that is saved per lobby.
+  * @param key
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L5695-L5972` → after: `L1972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R1972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L1972) · [Before (L5695-L5972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L5695-L5972)

```diff
- interface Float32Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
-     /**
-      * The size in bytes of each element in the array.
-      */
-     readonly BYTES_PER_ELEMENT: number;
- 
-     /**
-      * The ArrayBuffer instance referenced by the array.
-      */
-     readonly buffer: TArrayBuffer;
- 
-     /**
-      * The length in bytes of the array.
-      */
-     readonly byteLength: number;
- 
- ... (262 more removed lines; see GitHub link above)
+ deleteLobbyDbValue(key: string): void
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L5974-L5975` → after: `L1974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R1974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L1974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L1974) · [Before (L5974-L5975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L5974-L5975)

```diff
-  * A typed array of 64-bit float values. The contents are initialized to 0. If the requested
-  * number of bytes could not be allocated an exception is raised.
+  * Deletes all database values that are saved per lobby.
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L5977-L6275` → after: `L1976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R1976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L1976) · [Before (L5977-L6275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L5977-L6275)

```diff
- interface Float64Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
-     /**
-      * The size in bytes of each element in the array.
-      */
-     readonly BYTES_PER_ELEMENT: number;
- 
-     /**
-      * The ArrayBuffer instance referenced by the array.
-      */
-     readonly buffer: TArrayBuffer;
- 
-     /**
-      * The length in bytes of the array.
-      */
-     readonly byteLength: number;
- 
- ... (283 more removed lines; see GitHub link above)
+ deleteAllLobbyDbValues(): void
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6277` → after: `L1978-L1980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R1978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L1978-L1980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L1978-L1980) · [Before (L6277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6277)

```diff
-  * Extracts the type of the 'this' parameter of a function type, or 'unknown' if the function type has no 'this' parameter.
+  * Gets a database value that is saved per player.
+  * @param playerId
+  * @param key
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6279-L6280` → after: `L1982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R1982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L1982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L1982) · [Before (L6279-L6280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6279-L6280)

```diff
- type ThisParameterType<T> = T extends (this: infer U, ...args: never) => any ? U : unknown;
- 
+ getPlayerDbValue(playerId: PlayerId, key: string): string | number | null
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6282` → after: `L1984-L1988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R1984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L1984-L1988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L1984-L1988) · [Before (L6282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6282)

```diff
-  * Removes the 'this' parameter from a function type.
+  * Sets a database value that is saved per player. For custom games this persists between sessions and
+  * between lobbies, and is shared across all of the game's variations (e.g. a hub and its sub-modes).
+  * @param playerId
+  * @param key
+  * @param value
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6284-L6285` → after: `L1990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R1990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L1990) · [Before (L6284-L6285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6284-L6285)

```diff
- type OmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T;
- 
+ setPlayerDbValue(playerId: PlayerId, key: string, value: string | number): void
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6287` → after: `L1992-L1994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R1992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L1992-L1994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L1992-L1994) · [Before (L6287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6287)

```diff
-  * Make all properties in T optional
+  * Deletes a database value that is saved per player.
+  * @param playerId
+  * @param key
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6289-L6292` → after: `L1996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R1996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L1996) · [Before (L6289-L6292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6289-L6292)

```diff
- type Partial<T> = {
-     [P in keyof T]?: T[P];
- };
- 
+ deletePlayerDbValue(playerId: PlayerId, key: string): void
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6294` → after: `L1998-L1999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R1998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L1998-L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L1998-L1999) · [Before (L6294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6294)

```diff
-  * Make all properties in T required
+  * Deletes all database values that are saved per player, including persisted currencies.
+  * @param playerId
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6296-L6299` → after: `L2001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2001) · [Before (L6296-L6299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6296-L6299)

```diff
- type Required<T> = {
-     [P in keyof T]-?: T[P];
- };
- 
+ deleteAllPlayerDbValues(playerId: PlayerId): void
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6301` → after: `L2003-L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2003-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2003-L2014) · [Before (L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6301)

```diff
-  * Make all properties in T readonly
+  * Dynamically define a currency for a player and show it on the HUD.
+  * Amounts will persist between sessions if \`persistent\` is set to true.
+  * Persistent currencies count towards db length limits.
+  *
+  * Example usage:
+  * \`\`\`js
+  * api.setCurrency(myId, "myCurrency", { amount: 100, icon: "coins", iconColour: "blue", persistent: true })
+  * \`\`\`
+  *
+  * @param playerId
+  * @param currencyId
+  * @param info - { amount, icon } are required (icon is an icon name such as "coins"); iconColour, persistent, hidden and subtext are optional
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6303-L6306` → after: `L2016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2016) · [Before (L6303-L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6303-L6306)

```diff
- type Readonly<T> = {
-     readonly [P in keyof T]: T[P];
- };
- 
+ setCurrency(playerId: PlayerId, currencyId: string, info: UgcCurrencyInfo): void
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6308` → after: `L2018-L2020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2018-L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2018-L2020) · [Before (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6308)

```diff
-  * From T, pick a set of properties whose keys are in the union K
+  * Delete a currency from a player. This will make the currency unknown to the player.
+  * @param playerId
+  * @param currencyId
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6310-L6313` → after: `L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2022) · [Before (L6310-L6313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6310-L6313)

```diff
- type Pick<T, K extends keyof T> = {
-     [P in K]: T[P];
- };
- 
+ deleteCurrency(playerId: PlayerId, currencyId: string): void
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6315` → after: `L2024-L2028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2024-L2028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2024-L2028) · [Before (L6315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6315)

```diff
-  * Construct a type with a set of properties K of type T
+  * Set the amount of a currency a player has. For persistent currencies, amount/subtext count towards db length limits.
+  * @param playerId
+  * @param currencyId
+  * @param amount
+  * @param subtext
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6317-L6320` → after: `L2030-L2134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2030-L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2030-L2134) · [Before (L6317-L6320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6317-L6320)

```diff
- type Record<K extends keyof any, T> = {
-     [P in K]: T;
- };
- 
+ setCurrencyAmount(playerId: PlayerId, currencyId: string, amount: number, subtext?: string | CustomTextStyling): void
+ /**
+  * Give a player an amount of currency. Can be negative to remove money.
+  * The currency must exist for the player first, or this throws: make it with setCurrency (with an icon), e.g. in onPlayerJoin.
+  * @param playerId
+  * @param currencyId
+  * @param amount
+  */
+ giveCurrencyAmount(playerId: PlayerId, currencyId: string, amount: number): void
+ /**
+  * Replace a world chunk with a chunk from a project schematic, including air and block data.
+  * Both positions are block coordinates selecting their containing 32-block chunk.
+  * Add schematics in the Code Editor. Missing paths or source chunks throw an error.
+  * @param schematicPath Project-relative path, including .bloxdschem.
+  * @param srcCoords Block coordinates in the schematic's chunk grid (including selection padding).
+  * @param destCoords Block coordinates in the world. Existing blocks are replaced without break drops.
+ ... (89 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6322` → after: `L2136-L2139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2136-L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2136-L2139) · [Before (L6322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6322)

```diff
-  * Exclude from T those types that are assignable to U
+  * Get the status of a queued command.
+  *
+  * @param id The ID of the queued command to get the status of.
+  * @returns NOT_IN_QUEUE, WAITING_TO_RUN, or CURRENTLY_RUNNING.
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6324-L6325` → after: `L2141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2141) · [Before (L6324-L6325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6324-L6325)

```diff
- type Exclude<T, U> = T extends U ? never : T;
- 
+ getQueuedStatus(id: QueuedCommandId): QueuedStatusString
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6327` → after: `L2143-L2145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2143-L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2143-L2145) · [Before (L6327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6327)

```diff
-  * Extract from T those types that are assignable to U
+  * Remove a queued command from the queue.
+  *
+  * @param id The ID of the queued command to remove.
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6329-L6330` → after: `L2147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2147) · [Before (L6329-L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6329-L6330)

```diff
- type Extract<T, U> = T extends U ? T : never;
- 
+ removeFromQueue(id: QueuedCommandId): void
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6332` → after: `L2149-L2171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2149-L2171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2149-L2171) · [Before (L6332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6332)

```diff
-  * Construct a type with the properties of T except for those in type K.
+  * Add a request for the player to answer in the top right corner. E.g. accepting or denying a tprequest.
+  *
+  * Use onUiRequestResponded to handle the response.
+  *
+  * Example Usage:
+  * \`\`\`js
+  * const myRequestId = api.addUiRequest(playerId, {
+  *   type: "standard",
+  *   title: "Do you want to join the game?",
+  * }, 5000)
+  *
+  * onUiRequestResponded = (playerId, uiRequestId, response) => {
+  *   if (uiRequestId === myRequestId) {
+  *     api.log(response)
+  *   }
+  * }
+ ... (7 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6334-L6341` → after: `L2173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2173) · [Before (L6334-L6341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6334-L6341)

```diff
- type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
- 
- type ArrayBufferLike = ArrayBufferTypes[keyof ArrayBufferTypes];
- 
- declare var NaN: number;
- 
- declare var Infinity: number;
- 
+ addUiRequest(playerId: PlayerId, parameters: UiRequestClientParameters, timeoutAfterMs?: number): UiRequestId
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6343` → after: `L2175-L2192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2175-L2192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2175-L2192) · [Before (L6343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6343)

```diff
-  * Provides functionality common to all JavaScript objects.
+  * Add a request for the player to answer in the form of a popup. This blocks the player from doing anything else until they respond.
+  *
+  * Use onUiRequestResponded to handle the response.
+  *
+  * Example Usage:
+  * \`\`\`js
+  * const myRequestId = api.addUiRequestPopup(playerId, "Do you want to join the game?")
+  *
+  * onUiRequestResponded = (playerId, uiRequestId, response) => {
+  *   if (uiRequestId === myRequestId) {
+  *     api.log(response)
+  *   }
+  * }
+  * \`\`\`
+  *
+  * @param playerId The ID of the player to add the request to.
+ ... (2 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6345-L6348` → after: `L2194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2194) · [Before (L6345-L6348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6345-L6348)

```diff
- declare var Object: ObjectConstructor;
- 
- declare var Function: FunctionConstructor;
- 
+ addUiRequestPopup(playerId: PlayerId, requestText: string): UiRequestId | null
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6350` → after: `L2196-L2200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2196-L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2196-L2200) · [Before (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6350)

```diff
-  * Allows manipulation and formatting of text strings and determination and location of substrings within strings.
+  * Matchmake a player into a sub-variation of the current custom game.
+  * Pass \`"default"\` for the default variation.
+  *
+  * @param playerId The player to matchmake
+  * @param varname Sub-variation name (\`[A-Za-z0-9_-]\`, 1-32 chars), or \`"default"\`
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6352-L6365` → after: `L2202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2202) · [Before (L6352-L6365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6352-L6365)

```diff
- declare var String: StringConstructor;
- 
- declare var Boolean: BooleanConstructor;
- 
- /** An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers. */
- declare var Number: NumberConstructor;
- 
- /** An intrinsic object that provides basic mathematics functionality and constants. */
- declare var Math: Math;
- 
- declare var RegExp: RegExpConstructor;
- 
- declare var Error: ErrorConstructor;
- 
+ matchmakeToVariation(playerId: PlayerId, varname: string): void
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6367` → after: `L2204-L2205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2204-L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2204-L2205) · [Before (L6367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6367)

```diff
-  * An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.
+  * Get the current sub-variation name.
+  * Returns \`"default"\` when there is no named sub-variation.
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6369-L6390` → after: `L2207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2207) · [Before (L6369-L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6369-L6390)

```diff
- declare var JSON: JSON;
- 
- declare var Array: ArrayConstructor;
- 
- declare var ArrayBuffer: ArrayBufferConstructor;
- 
- declare var Int8Array: Int8ArrayConstructor;
- 
- declare var Uint8Array: Uint8ArrayConstructor;
- 
- declare var Int16Array: Int16ArrayConstructor;
- 
- declare var Uint16Array: Uint16ArrayConstructor;
- 
- declare var Int32Array: Int32ArrayConstructor;
- 
- ... (6 more removed lines; see GitHub link above)
+ getVariation(): string
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6392-L6393` → after: `L2209-L2212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2209-L2212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2209-L2212) · [Before (L6392-L6393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6392-L6393)

```diff
-  * Evaluates JavaScript code and executes it.
-  * @param x A String value that contains valid JavaScript code.
+  * Whether the player joined with this custom game's texture pack applied. False if they skipped applying it
+  * (kicking them shows the prompt again when they rejoin).
+  * Only published custom games prompt for their pack, so anywhere else this says so and returns true.
+  * @param playerId
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6395-L6683` → after: `L2214-L2218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2214-L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2214-L2218) · [Before (L6395-L6683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6395-L6683)

```diff
- declare function eval(x: string): any;
- 
- interface ErrorConstructor {
-     /**
-      * Indicates whether the argument provided is a built-in Error instance or not.
-      */
-     isError(error: unknown): error is Error;
- }
- 
- interface Math {
-     /**
-      * Returns the nearest half precision float representation of a number.
-      * @param x A numeric expression.
-      */
-     f16round(x: number): number;
- }`
- ... (273 more removed lines; see GitHub link above)
+ isUsingCustomGameTexturePack(playerId: PlayerId): boolean
+ /**
+  * Log a message to chat.
+ */
+ log(message: any): void
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6685-L6695` → after: `L2220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2220) · [Before (L6685-L6695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6685-L6695)

```diff
- declare global {
- 	/** The ID of the player running the code.
- 	 *
- 	 * Lobby code usually has nobody running it, so this is null.
- 	 */
- 	const myId: string | null
- 	/** The position of the code block or press to code board */
- 	const thisPos: [number, number, number]
- 	/** The owner of the current custom lobby */
- 	const lobbyOwnerId: string | null
- 	const console: Console
+ 	}
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6697-L7197` → after: `L2222-L2471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2222-L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2222-L2471) · [Before (L6697-L7197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L6697-L7197)

```diff
- 	const api: GameApi
- 
- 	/**
- 	 * Called every tick, 20 times per second
- 	 * @param ms - The fixed timestep, can be used as "milliseconds since last tick"
- 	 */
- 	var tick: (ms: number) => void
- 
- 	/**
- 	 * Called when the lobby is shutting down
- 	 * @param serverIsShuttingDown - Whether the server is shutting down
- 	 */
- 	var onClose: (serverIsShuttingDown: boolean) => void
- 
- 	/**
- 	 * Called when a player joins the lobby. A player shown an ad as they join holds their place in the lobby during it, but only joins, and is only in getPlayerIds, once it ends, unless the game turns that off (api.setJoinsWaitForAds)
- ... (485 more removed lines; see GitHub link above)
+ 	declare const api: GameApi;
+ type EntityId = string
+ type Pos = [number, number, number]
+ type LifeformId = EntityId
+ type PlayerId = LifeformId
+ type PlayerDbId = string
+ type LifeformBodyPart = (_TypeOf["lifeformBodyParts"])[number]
+ interface PlayerAttemptDamageOtherPlayerOpts {
+ 	eId: PlayerId
+ 	hitEId: PlayerId
+ 	attemptedDmgAmt: number
+ 	withItem: string
+ 	bodyPartHit?: LifeformBodyPart
+ 	attackDir?: number[]
+ 	showCritParticles?: boolean
+ 	reduceVerticalKbVelocity?: boolean
+ ... (234 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7199` → after: `L2473-L2475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2473-L2475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2473-L2475) · [Before (L7199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7199)

```diff
- 	 * Called when a player's thrown projectile hits the terrain
+ 	 * The entities and positions to keep in view. Entities the player is too far from to see, or that have left, are
+ 	 * left out. With none to frame, an empty list too, the camera holds where and how far it last framed, at this
+ 	 * camera's own angle, or frames the player if it has framed nothing yet.
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7201-L7202` → after: `L2477-L2487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2477-L2487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2477-L2487) · [Before (L7201-L7202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7201-L7202)

```diff
- 	var onPlayerThrowableHitTerrain: (playerId: PlayerId, throwableName: ThrowableItem, thrownEntityId: EntityId) => void
- 
+ 	targets: CameraTarget[]
+ 	/** Compass direction the camera looks in, in degrees: 0 looks along +z, 90 along +x. Default 0. */
+ 	viewHeading?: number
+ 	/** Degrees the camera looks down, from 0 (level) to 90 (straight down). Default 45. */
+ 	viewElevation?: number
+ 	/** Blocks of space to keep around the targets. Default 2. */
+ 	padding?: number
+ 	/** Closest the camera comes to the middle of the targets, in blocks. Default 6, or furthestDistance if that is closer. */
+ 	closestDistance?: number
+ 	/** Furthest the camera goes from the middle of the targets, in blocks, even if some targets leave the view. Default 64, or closestDistance if that is further. */
+ 	furthestDistance?: number
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7204-L7208` → after: `L2489-L2490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2489-L2490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2489-L2490) · [Before (L7204-L7208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7204-L7208)

```diff
- 	 * Set client option \`touchscreenActionButton\` to take effect
- 	 * Called when a player presses the touchscreen action button
- 	 * Called for both touchDown and touchUp
- 	 * @param playerId - The id of the player pressing the touchscreen action button
- 	 * @param touchDown - Whether the touchscreen action button was pressed or released
+ 	 * Ease towards a new framing over about this many ms as the targets move, and round to a new angle from the frame
+ 	 * camera this one replaces. 0 sticks to them. Default 400.
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7210-L7211` → after: `L2492-L2502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2492-L2502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2492-L2502) · [Before (L7210-L7211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7210-L7211)

```diff
- 	var onTouchscreenActionButton: (playerId: PlayerId, touchDown: boolean) => void
- 
+ 	smoothMs?: number
+ }
+ type CameraSettingsBase = {
+ 	/** Blend from the current view into this camera over this many ms. 0 cuts straight to it. */
+ 	blendInMs?: number
+ 	/** How the blend eases. Default "easeInOut". */
+ 	blendEasing?: CameraEasing
+ 	/** Fade into this camera through a colour instead, cutting to it under the colour: blendInMs is ignored. */
+ 	transition?: CameraTransition
+ 	/** Cinematic bars across the top and bottom of the screen while this camera is on. Presses on the bars do nothing in the world, and dragging on them doesn't turn the camera. */
+ 	letterbox?: boolean
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7213-L7217` → after: `L2504-L2505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2504-L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2504-L2505) · [Before (L7213-L7217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7213-L7217)

```diff
- 	 * Called when a player claims a task
- 	 * @param playerId - The id of the player claiming the task
- 	 * @param taskId - The id of the task being claimed
- 	 * @param isPromoTask - Whether the task is a promo task
- 	 * @param claimedRewards - The rewards claimed by the player
+ 	 * Hide the HUD while this camera is on. Nametags, dialogue, the chat being typed in, the respawn and sleeping screens,
+ 	 * QTEs, UI requests, touch controls and the settings button on touch screens stay.
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7219-L7220` → after: `L2507-L2509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2507-L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2507-L2509) · [Before (L7219-L7220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7219-L7220)

```diff
- 	var onTaskClaimed: (playerId: string, taskId: any, isPromoTask: any, claimedRewards: any) => any
- 
+ 	hideHud?: boolean
+ 	/** Field of view in degrees. Omit to keep the player's own. */
+ 	fov?: number
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7222-L7230` → after: `L2511-L2514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2511-L2514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2511-L2514) · [Before (L7222-L7230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7222-L7230)

```diff
- 	 * Called when a chunk is first loaded
- 	 * API Methods that modify the chunk like setBlock cannot be used here to make
- 	 * persisted changes, and will introduce client-server desync most cases,
- 	 * but might have some creative uses if you know what you're doing.
- 	 * For most use cases, consider using another callback e.g. tick.
- 	 * @param chunkId - The id of the chunk being loaded
- 	 * @param chunk - The chunk being loaded, which can be modified by this callback
- 	 * For world code callbacks this value will always be null.
- 	 * @param wasPersistedChunk - Whether the chunk was persisted
+ 	 * Which way the player's body faces while this camera is on. Movement is always relative to the camera.
+ 	 * "movement" (default): turns to face where they walk. "camera": faces where the camera looks.
+ 	 * "cursor": shows the mouse cursor and faces what is under it, or what was last tapped on touch screens, aiming
+ 	 * blocks, hits and shots there; the mouse no longer turns the camera. For top-down and isometric games.
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7232-L7233` → after: `L2516-L2606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2516-L2606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2516-L2606) · [Before (L7232-L7233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7232-L7233)

```diff
- 	var onChunkLoaded: (chunkId: string, chunk: LoadedChunk, wasPersistedChunk: boolean) => void
- 
+ 	playerFacing?: CameraPlayerFacing
+ 	playerLook?: CameraPlayerLook
+ }
+ type CameraEasing = (_TypeOf["CAMERA_EASING_NAMES"])[number] | [number, number, number, number]
+ type CameraTransition = {
+ 	/** "#rrggbb". Default "#000000". A fade already showing keeps its colour until the screen clears. */
+ 	colour?: string
+ 	/** At least 200. */
+ 	outMs: number
+ 	/** Default 0. */
+ 	holdMs?: number
+ 	/** At least 200. */
+ 	inMs: number
+ }
+ type CameraPlayerFacing = (_TypeOf["CAMERA_PLAYER_FACINGS"])[number]
+ type CameraPlayerLook = {
+ ... (75 more added lines; see GitHub link above)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7235` → after: `L2608-L2609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2608-L2609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2608-L2609) · [Before (L7235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7235)

```diff
- 	 * Called when a player requests a chunk
+ 	 * The search box. \`item\` is the player's searched item; \`extra\` and \`excluded\` adjust the creative items it finds;
+ 	 * \`names\` holds the names this player sees for items a game renamed
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7237-L7238` → after: `L2611-L2851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2611-L2851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2611-L2851) · [Before (L7237-L7238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7237-L7238)

```diff
- 	var onPlayerRequestChunk: (playerId: PlayerId, chunkX: number, chunkY: number, chunkZ: number, chunkId: string) => void
- 
+ 	| { kind: "search"; item: string | null; extra?: readonly string[]; excluded?: readonly string[]; names?: Readonly<Record<string, string>> }
+ 	/** A plain listing or order box for the searched item. \`owned\` is how many the player has */
+ 	| { kind: "creator"; item: string | null; step: "quantity" | "price"; owned: number; quantity?: number; fee?: SmpListingFeeRule }
+ 	/** A listing box for one enchanted copy, listed whole */
+ 	| { kind: "enchantedCreator"; item: string; quantity: number }
+ 	/** A market listing. \`seller\` is null for the player's own */
+ 	| { kind: "listing"; item: string; quantity: number; pricePerItem: number; seller: string | null; expiresAt: number }
+ 	/** An Instant Sell stack */
+ 	| { kind: "sell"; item: string; quantity: number; pricePerItem: number }
+ 	/** Gold from a sale, or items back from an expired listing */
+ 	| { kind: "collect"; type: "sold" | "expired"; item: string; quantity: number; pricePerItem: number }
+ 	/** One of the player's active listings */
+ 	| { kind: "myListing"; item: string; quantity: number; pricePerItem: number; expiresAt: number }
+ 	/** A buy order. \`creator\` is null for the player's own; \`owned\` is how many the player could deliver; \`processing\` while a delivery to it is on its way */
+ 	| { kind: "order"; item: string; wanted: number; delivered: number; pricePerItem: number; creator: string | null; owned: number; processing?: boolean }
+ 	/** One of the player's orders, or delivered items left over from one */
+ ... (225 more added lines; see GitHub link above)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7240` → after: `L2853-L2854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2853-L2854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2853-L2854) · [Before (L7240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7240)

```diff
- 	 * Called when an item drop is created
+ 	 * Whether each frame fades into the next (Minecraft's \`interpolate\`), rather than cutting to it: one in-between frame
+ 	 * per pair, at half the interval, for intervals of 200 ms or more. Default true.
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7242-L7243` → after: `L2856-L2894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2856-L2894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2856-L2894) · [Before (L7242-L7243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7242-L7243)

```diff
- 	var onItemDropCreated: (itemEId: EntityId, itemName: string, itemAmount: number, x: number, y: number, z: number) => void
- 
+ 	interpolateFrames?: boolean
+ }
+ type HarvestType = "granule" | "wood" | "rock" | "cuttable"
+ type BlockMetadataModelType =
+ 	| "CentreCross"
+ 	| "SquareSided"
+ 	| "CustomPlanes"
+ 	| "CustomModel"
+ 	| "Slab"
+ 	| "Stairs"
+ 	| "door"
+ 	| "trapdoor"
+ 	| "rotatableOffset"
+ 	| "rotatable"
+ 	| "fence"
+ 	| "fenceGate"
+ ... (23 more added lines; see GitHub link above)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7245-L7247` → after: `L2896-L2897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2896-L2897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2896-L2897) · [Before (L7245-L7247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7245-L7247)

```diff
- 	 * Called when a player starts charging an item
- 	 * @param playerId - The id of the player charging the item
- 	 * @param itemName - The name of the item being charged
+ 	 * ms from equipping to the first shot. A game overriding fireRate, fireRateWithHeldTouch or cadenceMs without its own
+ 	 * equipDelay waits the fire interval less 0.9 of cadenceMs instead
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7249-L7250` → after: `L2899-L3258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R2899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L2899-L3258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L2899-L3258) · [Before (L7249-L7250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7249-L7250)

```diff
- 	var onPlayerStartChargingItem: (playerId: PlayerId, itemName: string) => void | "preventCharge"
- 
+ 	equipDelay?: number
+ 	burstCount?: number
+ 	burstDelay?: number
+ 	damage: number
+ 	shotPelletCount?: number
+ 	reloadTime?: number
+ 	clipSize: number
+ 	reloadBulletsIndividually?: boolean
+ 	bulletReloadTime?: number
+ 	cockTime?: number
+ 	tagSpeedMult: number
+ 	subsequentTagSpeedReductionScalar: number
+ 	inaccuracyStanding: number
+ 	inaccuracyFromShot: number
+ 	inaccuracyMovement: number
+ 	yVelocityInaccuracy: number
+ ... (344 more added lines; see GitHub link above)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7252` → after: `L3260-L3262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R3260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L3260-L3262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L3260-L3262) · [Before (L7252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7252)

```diff
- 	 * Called when a player finishes charging an item
+ 	 * Keep the mob in this state until you set another one: it never times out, ignores nearby players and doesn't
+ 	 * fight back when hit. It still leaves the state when the state ends itself, such as when its target leaves the
+ 	 * game or turns invisible, or when it is tamed. A charge can't be held: it lasts one leg as usual.
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7254-L7255` → after: `L3264-L3491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R3264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L3264-L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L3264-L3491) · [Before (L7254-L7255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7254-L7255)

```diff
- 	var onPlayerFinishChargingItem: (playerId: PlayerId, used: boolean, itemName: string, duration: number) => void
- 
+ 	hold?: boolean
+ }
+ type MeshEntityType = keyof MeshEntityOpts
+ type MeshEntityOpts = {
+ 	Box: CommonMeshEntityOpts & {
+ 		width: number
+ 		height: number
+ 		depth: number
+ 		diffuseColor?: number[]
+ 		emissiveColor?: number[]
+ 		backFaceCulling?: boolean // Default true
+ 		texture?: string // Can be a blockname. Wraps every one block
+ 		faceUV?: number[][]
+ 		animateTexture?: boolean // If true, \`texture\` must be an animated block name (e.g. "Lava", "Red Portal") and the Box cycles through its frames.
+ 	}
+ 	BloxdBlock: CommonMeshEntityOpts & {
+ ... (212 more added lines; see GitHub link above)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7257-L7260` → after: `L3493-L3495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R3493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L3493-L3495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L3493-L3495) · [Before (L7257-L7260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7257-L7260)

```diff
- 	 * Called once when a fishing hook first enters water. Coordinates are the bob's position at water entry.
- 	 * Return "preventFish" to cancel, or { caughtItemName?, biteDelayMs?, qte? } to select the fish and override the rod's bite delay
- 	 * and nine-second timed-click QTE. Default delays are Rusty 7–9 seconds, Sturdy 5–7, and Carbon/other rods 2–4.
- 	 * The selected fish is fixed for the attempt; omitting caughtItemName uses the engine's default fish selection.
+ 	 * How hard the rider pushes off the ground when jumping, compared to a normal jump. \`0\` = cannot jump.
+ 	 * Multiplies the \`jumpAmount\` client option rather than replacing it, and heavier types need a bigger
+ 	 * value to reach the same height.
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7262-L7263` → after: `L3497-L3503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R3497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L3497-L3503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L3497-L3503) · [Before (L7262-L7263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7262-L7263)

```diff
- 	var onPlayerAttemptFish: (playerId: PlayerId, rodName: string, x: number, y: number, z: number) => void | FishingAttemptOptions | "preventFish"
- 
+ 	jumpMultiplier: number
+ 	/** An upward shove the moment the rider uses the vehicle, like a balloon lifting off. \`0\` = none. */
+ 	upwardImpulseOnUse: number
+ 	/** Whether it climbs one-block steps by itself, rather than the rider jumping them. */
+ 	canAutoStep: boolean
+ 	/** Overrides \`canAutoStep\` for particular blocks, by block name. Unlisted blocks use \`canAutoStep\`. */
+ 	canAutoStepByBlock: Readonly<Record<BlockName, boolean>>
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7265-L7269` → after: `L3505-L3506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R3505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L3505-L3506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L3505-L3506) · [Before (L7265-L7269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7265-L7269)

```diff
- 	 * Called after the fishing QTE succeeds and the bob/session have been removed.
- 	 * Coordinates are the fishing position captured at water entry. caughtItemName is the item selected for the attempt.
- 	 * Returning nothing gives one of that item, or drops it if the inventory is full.
- 	 * Return "preventDrop" to suppress the default reward and award custom catches here instead.
- 	 * Return "preventItemGrant" to deliver the item yourself while keeping the default catch effects.
+ 	 * Where the rider sits, as \`[x, y, z]\` blocks from the middle of the vehicle. A rideable mob defaults
+ 	 * to its own ride height rather than to this type's value.
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7271-L7272` → after: `L3508-L3510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R3508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L3508-L3510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L3508-L3510) · [Before (L7271-L7272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7271-L7272)

```diff
- 	var onPlayerSucceededFishCatch: (playerId: PlayerId, rodName: string, x: number, y: number, z: number, caughtItemName: ItemName) => void | "preventDrop" | "preventItemGrant"
- 
+ 	riderOffset: Pos
+ 	/** How the rider's body is posed while riding. */
+ 	pose: PlayerPose
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7274-L7276` → after: `L3512-L3514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R3512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L3512-L3514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L3512-L3514) · [Before (L7274-L7276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7274-L7276)

```diff
- 	 * Called after the fishing QTE fails or its time window expires, after removing the bob/session.
- 	 * Coordinates are the fishing position captured at water entry. Retracting, switching rods, dying, and leaving cancel silently.
- 	 * caughtItemName is the item selected for the failed attempt; no reward is given.
+ 	 * A badge shown to the rider for as long as they ride. \`null\` = none. \`icon\` is an ingame icon or an
+ 	 * item name. \`name\` must be one that a physics type already uses, such as \`"Driving"\` or \`"Boating"\`,
+ 	 * because only those are cleared again when the rider gets off.
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7278-L7282` → after: `L3516-L3526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R3516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L3516-L3526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L3516-L3526) · [Before (L7278-L7282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7278-L7282)

```diff
- 	var onPlayerFailedFishCatch: (playerId: PlayerId, rodName: string, x: number, y: number, z: number, caughtItemName: ItemName) => void
- 
- 	
- 	var onPlayerFinishQTE: (playerId: PlayerId, qteId: QTERequestId, result: boolean) => void
- 
+ 	effect: { name: string; icon: string; duration?: number } | null
+ 	/** How quickly it slows to a stop once the rider stops steering. Bigger = stops sooner. */
+ 	standingFriction: number
+ 	/** Its top speed, as a multiplier on normal walking speed. \`0\` = it cannot move. */
+ 	speedMultiplier: number
+ 	/** An extra speed multiplier used while on solid ground. */
+ 	landSpeedMultiplier: number
+ 	/** An extra speed multiplier used while in water or lava. */
+ 	fluidSpeedMultiplier: number
+ 	/** An extra speed multiplier used while in the air. */
+ 	airSpeedMultiplier: number
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7284-L7286` → after: `L3528-L3530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R3528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L3528-L3530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L3528-L3530) · [Before (L7284-L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7284-L7286)

```diff
- 	 * Called when a player opens or closes the shop menu
- 	 * @param playerId - The id of the player whose shop menu changed
- 	 * @param isOpen - Whether the shop menu is now open
+ 	 * Extra speed multipliers for the block underfoot, by block name. Solid ground only, and stacks with
+ 	 * \`speedMultiplier\` and the land/fluid/air multiplier. When several listed blocks are underfoot, the
+ 	 * value furthest from \`1\` wins.
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7288-L7292` → after: `L3532-L3540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R3532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L3532-L3540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L3532-L3540) · [Before (L7288-L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7288-L7292)

```diff
- 	var onPlayerToggledShopMenu: (playerId: PlayerId, isOpen: boolean) => void
- 
- 	/** Called after a player plays an emote from the emote wheel. */
- 	var onPlayerPlayedEmote: (playerId: PlayerId, emoteId: string) => void
- 
+ 	speedMultiplierByBlock: Readonly<Record<BlockName, number>>
+ 	/** Caps how hard it is pushed while far below the speed it is aiming for, so it takes longer to get going. \`0\` = no cap. */
+ 	maxPushDistance: number
+ 	/** How hard steering pushes it. Bigger = it speeds up and changes direction more sharply. */
+ 	movementForceMultiplier: number
+ 	/** Turns off the usual steering-driven movement, as for a sleeping player. */
+ 	disableBaseMovement: boolean
+ 	/** Whether footstep sounds are silenced. */
+ 	disableFootstepSounds: boolean
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7294-L7297` → after: `L3542-L3543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R3542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L3542-L3543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L3542-L3543) · [Before (L7294-L7297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7294-L7297)

```diff
- 	 * Called when a player enters a vehicle
- 	 * @param playerId - The id of the player that entered the vehicle
- 	 * @param vehicleType - The type of the vehicle
- 	 * @param vehicleEId - The id of the vehicle
+ 	 * How bouncy walls are: \`0\` stops dead, \`1\` keeps all its speed. Stacks with the \`bounciness\` client
+ 	 * option. Rebounds have a floor speed, so slow bumps come back faster than they arrived.
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7299-L7300` → after: `L3545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R3545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L3545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L3545) · [Before (L7299-L7300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7299-L7300)

```diff
- 	var onPlayerEnteredVehicle: (playerId: PlayerId, vehicleType: MeshEntityVehicleType, vehicleEId: EntityId) => void
- 
+ 	horizontalBounciness: number
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7302-L7305` → after: `L3547-L3548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R3547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L3547-L3548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L3547-L3548) · [Before (L7302-L7305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7302-L7305)

```diff
- 	 * Called when a player exits a vehicle
- 	 * @param playerId - The id of the player that exited the vehicle
- 	 * @param vehicleType - The type of the vehicle
- 	 * @param vehicleEId - The id of the vehicle
+ 	 * How bouncy the floor is: \`0\` lands flat, \`1\` bounces back as fast as it fell. Stacks with the
+ 	 * \`bounciness\` client option, and has the same rebound floor as \`horizontalBounciness\`.
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7307-L7308` → after: `L3550-L3552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R3550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L3550-L3552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L3550-L3552) · [Before (L7307-L7308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7307-L7308)

```diff
- 	var onPlayerExitedVehicle: (playerId: PlayerId, vehicleType: MeshEntityVehicleType, vehicleEId: EntityId) => void
- 
+ 	verticalBounciness: number
+ 	/** How fast it must hit a wall, in blocks per second, before \`horizontalBounciness\` applies. \`0\` = any contact. */
+ 	minHorizontalSpeedToBounce: number
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7310-L7315` → after: `L3554-L3555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R3554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L3554-L3555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L3554-L3555) · [Before (L7310-L7315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7310-L7315)

```diff
- 	 * Called after a player successfully buys a shop item
- 	 * @param playerId - The id of the player that bought the item
- 	 * @param categoryKey - The shop category key
- 	 * @param itemKey - The shop item key
- 	 * @param item - The resolved shop item (with per-player overrides applied, internal properties stripped)
- 	 * @param userInput - The user input provided, if the item has a userInput config
+ 	 * How fast it must be falling, in blocks per second, before \`verticalBounciness\` applies. \`0\` bounces
+ 	 * off any contact, leaving a bouncy vehicle jiggling in place.
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7317-L7318` → after: `L3557-L3561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R3557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L3557-L3561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L3557-L3561) · [Before (L7317-L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7317-L7318)

```diff
- 	var onPlayerBoughtShopItem: (playerId: PlayerId, categoryKey: ShopCategoryKey, itemKey: ShopItemKey, item: BoughtShopItem, userInput?: string) => void
- 
+ 	minVerticalSpeedToBounce: number
+ 	/** Shakes the camera when it hits a wall hard enough; it need not bounce. \`null\` = no shake. See \`ImpactCameraShakeOpts\`. */
+ 	horizontalImpactCameraShake: ImpactCameraShakeOpts | null
+ 	/** Shakes the camera when it hits a floor or ceiling hard enough; it need not bounce. \`null\` = no shake. See \`ImpactCameraShakeOpts\`. */
+ 	verticalImpactCameraShake: ImpactCameraShakeOpts | null
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7320-L7322` → after: `L3563-L3564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R3563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L3563-L3564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L3563-L3564) · [Before (L7320-L7322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7320-L7322)

```diff
- 	 * Called when a player presses a custom button
- 	 * @param playerId - The id of the player pressing the button
- 	 * @param buttonId - The id of the button pressed
+ 	 * Makes it steer like a car: left and right turn it rather than sliding it sideways. \`null\` moves
+ 	 * freely in any direction, like a walking player. See \`SteeringOpts\`.
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7324-L7325` → after: `L3566-L3570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R3566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L3566-L3570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L3566-L3570) · [Before (L7324-L7325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7324-L7325)

```diff
- 	var onPlayerPressedButton: (playerId: PlayerId, buttonId: string) => void
- 
+ 	steering: SteeringOpts | null
+ 	/** Locks the direction it faces, in radians, ignoring the camera. \`null\` = it faces wherever the camera or steering points. */
+ 	fixedHeading: number | null
+ 	/** Makes it skip across water like a stone once it is fast enough. \`null\` = it floats normally. See \`FluidSkipOpts\`. */
+ 	fluidSkip: FluidSkipOpts | null
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7327-L7329` → after: `L3572-L3573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R3572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L3572-L3573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L3572-L3573) · [Before (L7327-L7329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7327-L7329)

```diff
- 	 * Called when a player releases a custom button
- 	 * @param playerId - The id of the player releasing the button
- 	 * @param buttonId - The id of the button released
+ 	 * Lets it fly once mid-air and descending. Supported movement types: \`GLIDING\` and \`FLOATING\`.
+ 	 * \`null\` = it cannot fly. See \`AirborneModeOpts\`.
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7331-L7332` → after: `L3575-L3577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R3575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L3575-L3577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L3575-L3577) · [Before (L7331-L7332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7331-L7332)

```diff
- 	var onPlayerReleasedButton: (playerId: PlayerId, buttonId: string) => void
- 
+ 	airborneMode: AirborneModeOpts | null
+ 	/** How it moves while flying. \`null\` = it steers the same way it does on the ground. See \`AirborneMovementOpts\`. */
+ 	airborneMovement: AirborneMovementOpts | null
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7334-L7338` → after: `L3579-L3580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R3579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L3579-L3580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L3579-L3580) · [Before (L7334-L7338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7334-L7338)

```diff
- 	 * Called when a player responds to a UI request.
- 	 *
- 	 * @param playerId - The id of the player responding to the UI request.
- 	 * @param id - The id of the UI request.
- 	 * @param response - The response to the UI request.
+ 	 * Caps how fast it falls while flying. Only used when \`airborneMovement\` is \`"heading"\`.
+ 	 * \`null\` = it falls at full speed. See \`FallSpeedLimitOpts\`.
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7340-L7341` → after: `L3582-L3608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R3582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L3582-L3608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L3582-L3608) · [Before (L7340-L7341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7340-L7341)

```diff
- 	var onUiRequestResponded: (playerId: PlayerId, id: UiRequestId, response: boolean) => void
- 
+ 	airborneFallSpeedLimit: FallSpeedLimitOpts | null
+ }>
+ type AllPhysicsSettings = {
+ 	[0]: {}
+ 	[1]: {}
+ 	[2]: {}
+ 	[3]: {}
+ 	[4]: {}
+ 	[5]: {}
+ 	[6]: {}
+ 	[7]: {}
+ }
+ type ImpactCameraShakeOpts = Readonly<{
+ 	/** The crash speed, in blocks per second, needed to shake at all, so small bumps are ignored. */
+ 	minSpeed: number
+ 	/** How much shake each extra block per second adds. Shake runs from \`0\` (still) to \`1\` (violent). */
+ ... (11 more added lines; see GitHub link above)
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7343-L7353` → after: `L3610-L3611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R3610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L3610-L3611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L3610-L3611) · [Before (L7343-L7353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7343-L7353)

```diff
- 	 * Called every so often.
- 	 * You should save custom db values/s3 objects here.
- 	 * Persisted items ARE saved on graceful shutdown (e.g. uncaught error, update, etc),
- 	 * but this helps prevent large data-loss on non-graceful shutdowns.
- 	 */
- 	var doPeriodicSave: () => void
- 
- 	/** Load another world-code file by relative path (./ or ../).
- 	 * Does not work at runtime - Code is bundled before being run.
- 	 * index.js/index.ts cannot be required: they hold the callbacks the engine runs.
- 	 * No typing is available for the required file — use \`import\` and \`export\` syntax for full typing support.
+ 	 * How much it grips the ground. \`0\` slides sideways like a hovercraft on ice; bigger values make it
+ 	 * follow its nose round corners. Solid ground only, unless \`gripInFluid\` is on.
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L7355-L7360` → after: `L3613-L4269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R3613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L3613-L4269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/287.js#L3613-L4269) · [Before (L7355-L7360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/287.js#L7355-L7360)

```diff
- 	function require(id: string): any
- }
- 
- export {}
- `
-   }
+ 	gripStrength: number
+ 	/** Whether it also grips while floating in water, so a boat can corner like a kart. */
+ 	gripInFluid: boolean
+ }>
+ type FluidSkipOpts = Readonly<{
+ 	/** How fast it must be going, in blocks per second, to start skipping. */
+ 	minSpeed: number
+ 	/** How much of its speed above \`minSpeed\` becomes upward launch speed. Bigger = higher skips. */
+ 	launchSpeedFraction: number
+ 	/** How snappily it leaves the water. Bigger = a sharp pop; smaller = a slow heave. */
+ 	launchApproachRate: number
+ }>
+ type AirborneModeOpts = Readonly<{
+ 	/** Which movement type to switch to: \`GLIDING\` for gliders, \`FLOATING\` for balloons. */
+ 	activeMovementType: MovementType
+ 	/** How long the flying lasts, in milliseconds, before it drops the rider. \`null\` = no limit. */
+ ... (641 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/288.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/288.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468)

#### 1. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L4-L13` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/288.js#L4) · [Before (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/288.js#L4-L13)

```diff
-   40611: (zz, uz, bz) => {
-     function Ez() {
-       return Ez = Object.assign ? Object.assign.bind() : function(zz) {
-         for (var uz = 1; uz < arguments.length; uz++) {
-           var bz = arguments[uz];
-           for (var Ez in bz)({}).hasOwnProperty.call(bz, Ez) && (zz[Ez] = bz[Ez])
-         }
-         return zz
-       }, Ez.apply(null, arguments)
-     }
+   41120: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L15-L16` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/288.js#L6) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/288.js#L15-L16)

```diff
-       d: () => dz,
-       h: () => Mz
+       c: () => Yq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L18-L230` → after: `L8-L7359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L8-L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/288.js#L8-L7359) · [Before (L18-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/288.js#L18-L230)

```diff
-     var nz = !1;
-     try {
-       nz = "undefined" !== typeof localStorage
-     } catch (Zz) {}
-     var iz = "undefined" !== typeof process,
-       lz = nz && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || iz && {
-         NODE_ENV: "production",
-         PUBLIC_URL: "",
-         WDS_SOCKET_HOST: void 0,
-         WDS_SOCKET_PATH: void 0,
-         WDS_SOCKET_PORT: void 0,
-         FAST_REFRESH: !0,
-         REACT_APP_DEV_URLS: "false"
-       }.DEBUG ? console.log : function(zz) {
-         return ""
-       };
- ... (197 more removed lines; see GitHub link above)
+     const Yq = String.raw`interface Map<K, V> {
+     clear(): void;
+     /**
+      * @returns true if an element in the Map existed and has been removed, or false if the element does not exist.
+      */
+     delete(key: K): boolean;
+     /**
+      * Executes a provided function once per each key/value pair in the Map, in insertion order.
+      */
+     forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
+     /**
+      * Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
+      * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
+      */
+     get(key: K): V | undefined;
+     /**
+ ... (7336 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/289.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/289.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L4-L122489` → after: `L4-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L4-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/289.js#L4-L32) · [Before (L4-L122489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/289.js#L4-L122489)

```diff
-   40624: (zz, uz, bz) => {
-     var Ez = "/index.js",
-       nz = {};
-     (zz => {
-       var uz = Object.defineProperty,
-         nz = (Object.getOwnPropertyDescriptor, Object.getOwnPropertyNames, Object.prototype.hasOwnProperty, (zz, bz) => {
-           for (var Ez in bz) uz(zz, Ez, {
-             get: bz[Ez],
-             enumerable: !0
-           })
-         }),
-         iz = {};
-       nz(iz, {
-         ANONYMOUS: () => e7,
-         AccessFlags: () => Hi,
-         AssertionLevel: () => fb,
- ... (122470 more removed lines; see GitHub link above)
+   41125: (qq, Eq, gq) => {
+     function Yq() {
+       return Yq = Object.assign ? Object.assign.bind() : function(qq) {
+         for (var Eq = 1; Eq < arguments.length; Eq++) {
+           var gq = arguments[Eq];
+           for (var Yq in gq)({}).hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
+         }
+         return qq
+       }, Yq.apply(null, arguments)
+     }
+     gq.d(Eq, {
+       c: () => Wq,
+       d: () => xq
+     });
+     var lq = !1;
+     try {
+ ... (13 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L122492-L123061` → after: `L35-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L35-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/289.js#L35-L48) · [Before (L122492-L123061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/289.js#L122492-L123061)

```diff
-       function Goz(zz, uz) {
-         return {
-           seq: 0,
-           type: "event",
-           event: zz,
-           body: uz
-         }
-       }
- 
-       function aoz(zz) {
-         return ub((zz => {
-           let {
-             textSpan: uz
-           } = zz;
-           return uz.start + 100003 * uz.length
-         }), e9(zz))
- ... (554 more removed lines; see GitHub link above)
+     function xq(qq, Eq, gq, lq, Oq) {
+       void 0 === lq && (lq = {});
+       var mq = Yq({}, uq(gq), lq),
+         xq = function(qq, Eq, gq, lq, Oq) {
+           var mq = [].concat(Eq),
+             xq = Nq(qq, gq, lq),
+             Aq = xq.compilerHost,
+             cq = xq.updateFile,
+             uq = xq.deleteFile,
+             Bq = new Map,
+             Wq = 0,
+             aq = Yq({}, Aq, {
+               getProjectVersion: function() {
+                 return Wq.toString()
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L123063-L123371` → after: `L50-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/289.js#L50-L51) · [Before (L123063-L123371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/289.js#L123063-L123371)

```diff
-               Hz = () => {
-                 if (this.changeSeq !== nz) return;
-                 let bz, iz = uz[lz];
-                 if (nb(iz) ? iz = this.toPendingErrorCheck(iz) : "al" in iz && (bz = iz.al, iz = this.toPendingErrorCheck(iz.file)), !iz) return Mz();
-                 const {
-                   fileName: Hz,
-                   project: Oz
-                 } = iz;
-                 return loz(Oz), Oz.containsFile(Hz, Ez) && (this.syntacticCheck(Hz, Oz), this.changeSeq === nz) ? 0 !== Oz.projectService.serverMode ? Mz() : bz ? zz.immediate("regionSemanticCheck", (() => {
-                   const uz = this.projectService.getScriptInfoForNormalizedPath(Hz);
-                   uz && this.regionSemanticCheck(Hz, Oz, bz.map((zz => this.getRange({
-                     file: Hz,
-                     ...zz
-                   }, uz)))), this.changeSeq === nz && zz.immediate("semanticCheck", (() => tz(Hz, Oz)))
-                 })) : void zz.immediate("semanticCheck", (() => tz(Hz, Oz))) : void 0
-               };
- ... (293 more removed lines; see GitHub link above)
+               getCompilationSettings: function() {
+                 return gq
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L123373-L123775` → after: `L53-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/289.js#L53-L54) · [Before (L123373-L123775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/289.js#L123373-L123775)

```diff
-               end: {
-                 line: iz.line + 1,
-                 offset: iz.character + 1
-               }
-             }
-           }
-           toFileSpanWithContext(zz, uz, bz, Ez) {
-             const nz = this.toFileSpan(zz, uz, Ez),
-               iz = bz && this.toFileSpan(zz, bz, Ez);
-             return iz ? {
-               ...nz,
-               contextStart: iz.start,
-               contextEnd: iz.end
-             } : nz
-           }
-           getTypeDefinition(zz) {
- ... (387 more removed lines; see GitHub link above)
+               getCustomTransformers: function() {
+                 return Oq
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L123777-L124121` → after: `L56-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/289.js#L56-L57) · [Before (L123777-L124121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/289.js#L123777-L124121)

```diff
-               lz = qoz(bz, this.getDefaultProject(zz), iz, iz, hoz, (zz => (this.logger.info(`Finding references to file ${Ez} in project ${zz.getProjectName()}`), zz.getLanguageService().getFileReferences(Ez))));
-             let Mz;
-             if (bb(lz)) Mz = lz;
-             else {
-               Mz = [];
-               const zz = aoz(this.host.useCaseSensitiveFileNames);
-               lz.forEach((uz => {
-                 for (const bz of uz) zz.has(bz) || (Mz.push(bz), zz.add(bz))
-               }))
-             }
-             if (!uz) return Mz;
-             return {
-               refs: Mz.map((zz => zNz(this.projectService, zz, nz))),
-               symbolName: `"${zz.file}"`
-             }
-           }
- ... (329 more removed lines; see GitHub link above)
+               getScriptFileNames: function() {
+                 return mq.slice()
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L124123-L124872` → after: `L59-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L59-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/289.js#L59-L114) · [Before (L124123-L124872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/289.js#L124123-L124872)

```diff
-               hl: zz.insertString
-             })))
-           }
-           reload(zz) {
-             const uz = fsz(zz.file),
-               bz = void 0 === zz.tmpfile ? void 0 : fsz(zz.tmpfile),
-               Ez = this.projectService.getScriptInfoForNormalizedPath(uz);
-             Ez && (this.changeSeq++, Ez.reloadFromFile(bz))
-           }
-           saveToTmp(zz, uz) {
-             const bz = this.projectService.getScriptInfo(zz);
-             bz && bz.saveTo(uz)
-           }
-           closeClientFile(zz) {
-             if (!zz) return;
-             const uz = lM(zz);
- ... (734 more removed lines; see GitHub link above)
+               getScriptSnapshot: function(Eq) {
+                 var gq = qq.readFile(Eq);
+                 if (gq && "string" === typeof gq) return lq.ScriptSnapshot.fromString(gq)
+               },
+               getScriptVersion: function(qq) {
+                 return Bq.get(qq) || "0"
+               },
+               writeFile: qq.writeFile
+             }),
+             Vq = {
+               languageServiceHost: aq,
+               updateFile: function(qq) {
+                 Wq++, Bq.set(qq.fileName, Wq.toString()), mq.includes(qq.fileName) || mq.push(qq.fileName), cq(qq)
+               },
+               deleteFile: function(qq) {
+                 Wq++, Bq.set(qq.fileName, Wq.toString());
+ ... (40 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L124876-L124899` → after: `L119-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L119-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/289.js#L119-L121) · [Before (L124876-L124899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/289.js#L124876-L124899)

```diff
-       function zNz(zz, uz, bz) {
-         let {
-           fileName: Ez,
-           textSpan: nz,
-           contextSpan: iz,
-           isWriteAccess: lz,
-           isDefinition: Mz
-         } = uz, {
-           disableLineTextInReferences: tz
-         } = bz;
-         const Hz = wE.checkDefined(zz.getScriptInfo(Ez)),
-           Oz = Coz(nz, iz, Hz),
-           pz = tz ? void 0 : function(zz, uz) {
-             const bz = zz.lineToTextSpan(uz.start.line - 1);
-             return zz.getSnapshot().getText(bz.start, zH(bz)).replace(/\r|\n/g, "")
-           }(Hz, Oz);
- ... (8 more removed lines; see GitHub link above)
+     function Aq(qq) {
+       throw new Error("Method '" + qq + "' is not implemented.")
+     }
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L124901-L124949` → after: `L123-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L123-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/289.js#L123-L148) · [Before (L124901-L124949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/289.js#L124901-L124949)

```diff
-       function uNz(zz) {
-         return void 0 === zz || zz && "object" === typeof zz && "string" === typeof zz.exportName && (void 0 === zz.fileName || "string" === typeof zz.fileName) && (void 0 === zz.ambientModuleName || "string" === typeof zz.ambientModuleName && (void 0 === zz.isPackageJsonImport | … [truncated]
-       }
-       var bNz = (zz => (zz[zz.PreStart = 0] = "PreStart", zz[zz.Start = 1] = "Start", zz[zz.Entire = 2] = "Entire", zz[zz.Mid = 3] = "Mid", zz[zz.End = 4] = "End", zz[zz.PostEnd = 5] = "PostEnd", zz))(bNz || {}),
-         ENz = class {
-           constructor() {
-             this.goSubtree = !0, this.lineIndex = new tNz, this.endBranch = [], this.state = 2, this.initialText = "", this.trailingText = "", this.lineIndex.root = new HNz, this.startPath = [this.lineIndex.root], this.stack = [this.lineIndex.root]
-           }
-           get done() {
-             return !1
-           }
-           insertLines(zz, uz) {
-             uz && (this.trailingText = ""), zz = zz ? this.initialText + zz + this.trailingText : this.initialText + this.trailingText;
-             const bz = tNz.linesFromText(zz).lines;
-             let Ez, nz;
-             bz.length > 1 && "" === bz[bz.length - 1] && bz.pop();
- ... (33 more removed lines; see GitHub link above)
+     function cq(qq, Eq) {
+       return function() {
+         for (var gq = arguments.length, Yq = new Array(gq), lq = 0; lq < gq; lq++) Yq[lq] = arguments[lq];
+         var Oq = Eq.apply(void 0, Yq),
+           xq = "string" === typeof Oq ? Oq.slice(0, 80) + "..." : Oq;
+         return mq.apply(void 0, ["> " + qq].concat(Yq)), mq("< " + xq), Oq
+       }
+     }
+     var uq = function(qq) {
+         return Yq({}, qq.getDefaultCompilerOptions(), {
+           jsx: qq.JsxEmit.React,
+           strict: !0,
+           esModuleInterop: !0,
+           module: qq.ModuleKind.ESNext,
+           suppressOutputPathCheck: !0,
+           skipLibCheck: !0,
+ ... (10 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L124951-L124977` → after: `L150-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L150-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/289.js#L150-L154) · [Before (L124951-L124977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/289.js#L124951-L124977)

```diff
-             function Mz(zz) {
-               return zz.isLeaf() ? new ONz("") : new HNz
-             }
-             switch (2 === this.state && 1 === nz && (this.state = 1, this.branchNode = iz, this.lineCollectionAtBranch = bz), nz) {
-               case 0:
-                 this.goSubtree = !1, 4 !== this.state && iz.add(bz);
-                 break;
-               case 1:
-                 4 === this.state ? this.goSubtree = !1 : (lz = Mz(bz), iz.add(lz), this.startPath.push(lz));
-                 break;
-               case 2:
-                 4 !== this.state ? (lz = Mz(bz), iz.add(lz), this.startPath.push(lz)) : bz.isLeaf() || (lz = Mz(bz), iz.add(lz), this.endBranch.push(lz));
-                 break;
-               case 3:
-                 this.goSubtree = !1;
-                 break;
- ... (11 more removed lines; see GitHub link above)
+     function Wq(qq) {
+       return {
+         args: [],
+         createDirectory: function() {
+           return Aq("createDirectory")
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L124979-L124985` → after: `L156-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L156-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/289.js#L156-L162) · [Before (L124979-L124985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/289.js#L124979-L124985)

```diff
-         nNz = class {
-           constructor(zz, uz, bz) {
-             this.pos = zz, this.deleteLen = uz, this.insertedText = bz
-           }
-           getTextChangeRange() {
-             return sH(KH(this.pos, this.deleteLen), this.insertedText ? this.insertedText.length : 0)
-           }
+         directoryExists: cq("directoryExists", (function(Eq) {
+           return Array.from(qq.keys()).some((function(qq) {
+             return qq.startsWith(Eq)
+           }))
+         })),
+         exit: function() {
+           return Aq("exit")
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L124987-L125069` → after: `L164-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L164-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/289.js#L164-L168) · [Before (L124987-L125069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/289.js#L124987-L125069)

```diff
-         iNz = class zz {
-           constructor() {
-             this.changes = [], this.versions = new Array(zz.maxVersions), this.minVersion = 0, this.currentVersion = 0
-           }
-           versionToIndex(uz) {
-             if (!(uz < this.minVersion || uz > this.currentVersion)) return uz % zz.maxVersions
-           }
-           currentVersionToIndex() {
-             return this.currentVersion % zz.maxVersions
-           }
-           edit(uz, bz, Ez) {
-             this.changes.push(new nNz(uz, bz, Ez)), (this.changes.length > zz.changeNumberThreshold || bz > zz.changeLengthThreshold || Ez && Ez.length > zz.changeLengthThreshold) && this.getSnapshot()
-           }
-           getSnapshot() {
-             return this._getSnapshot()
-           }
- ... (67 more removed lines; see GitHub link above)
+         fileExists: cq("fileExists", (function(Eq) {
+           return qq.has(Eq) || qq.has(Bq(Eq))
+         })),
+         getCurrentDirectory: function() {
+           return "/"
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L125071-L125197` → after: `L170-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/289.js#L170-L171) · [Before (L125071-L125197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/289.js#L125071-L125197)

```diff
-         tNz = class zz {
-           constructor() {
-             this.checkEdits = !1
-           }
-           absolutePositionOfStartOfLine(zz) {
-             return this.lineNumberToInfo(zz).absolutePosition
-           }
-           positionToLineOffset(zz) {
-             const {
-               oneBasedLine: uz,
-               zeroBasedColumn: bz
-             } = this.root.charOffsetToLineInfo(1, zz);
-             return {
-               line: uz,
-               offset: bz + 1
-             }
- ... (111 more removed lines; see GitHub link above)
+         getDirectories: function() {
+           return []
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L125199-L125334` → after: `L173-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/289.js#L173-L174) · [Before (L125199-L125334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/289.js#L125199-L125334)

```diff
-         HNz = class zz {
-           constructor() {
-             let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
-             this.children = zz, this.totalChars = 0, this.totalLines = 0, zz.length && this.updateCounts()
-           }
-           isLeaf() {
-             return !1
-           }
-           updateCounts() {
-             this.totalChars = 0, this.totalLines = 0;
-             for (const zz of this.children) this.totalChars += zz.charCount(), this.totalLines += zz.lineCount()
-           }
-           execWalk(zz, uz, bz, Ez, nz) {
-             return bz.pre && bz.pre(zz, uz, this.children[Ez], this, nz), bz.goSubtree ? (this.children[Ez].walk(zz, uz, bz), bz.post && bz.post(zz, uz, this.children[Ez], this, nz)) : bz.goSubtree = !0, bz.done
-           }
-           skipChild(zz, uz, bz, Ez, nz) {
- ... (120 more removed lines; see GitHub link above)
+         getExecutingFilePath: function() {
+           return Aq("getExecutingFilePath")
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L125336-L125351` → after: `L176-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L176-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/289.js#L176-L184) · [Before (L125336-L125351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/289.js#L125336-L125351)

```diff
-         ONz = class {
-           constructor(zz) {
-             this.text = zz
-           }
-           isLeaf() {
-             return !0
-           }
-           walk(zz, uz, bz) {
-             bz.leaf(zz, uz, this)
-           }
-           charCount() {
-             return this.text.length
-           }
-           lineCount() {
-             return 1
-           }
+         readDirectory: cq("readDirectory", (function(Eq) {
+           return "/" === Eq ? Array.from(qq.keys()) : []
+         })),
+         readFile: cq("readFile", (function(Eq) {
+           var gq;
+           return null != (gq = qq.get(Eq)) ? gq : qq.get(Bq(Eq))
+         })),
+         resolvePath: function(qq) {
+           return qq
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L125353-L125391` → after: `L186-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L186-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/289.js#L186-L213) · [Before (L125353-L125391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/289.js#L125353-L125391)

```diff
-         pNz = class zz {
-           constructor(zz, uz, bz, Ez, nz, iz) {
-             this.telemetryEnabled = zz, this.logger = uz, this.host = bz, this.globalTypingsCacheLocation = Ez, this.event = nz, this.maxActiveRequestCount = iz, this.activeRequestCount = 0, this.requestQueue = zb(), this.requestMap = new Map, this.requestedRegistry = !1, this.pa … [truncated]
-           }
-           isKnownTypesPackageName(zz) {
-             var uz;
-             return d8.validatePackageName(zz) === d8.NameValidationResult.Ok && (this.requestedRegistry || (this.requestedRegistry = !0, this.installer.send({
-               kind: "typesRegistry"
-             })), !!(null == (uz = this.typesRegistryCache) ? void 0 : uz.has(zz)))
-           }
-           installPackage(zz) {
-             this.packageInstallId++;
-             const uz = {
-                 kind: "installPackage",
-                 ...zz,
-                 id: this.packageInstallId
- ... (23 more removed lines; see GitHub link above)
+         newLine: "\n",
+         useCaseSensitiveFileNames: !0,
+         write: function() {
+           return Aq("write")
+         },
+         writeFile: function(Eq, gq) {
+           qq.set(Eq, gq)
+         },
+         deleteFile: function(Eq) {
+           qq.delete(Eq)
+         }
+       }
+     }
+ 
+     function Nq(qq, Eq, gq) {
+       var lq = new Map;
+ ... (12 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L125393-L125575` → after: `L215-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L215-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/289.js#L215-L218) · [Before (L125393-L125575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/289.js#L125393-L125575)

```diff
-             switch (this.logger.hasLevel(3) && this.logger.info(`TIAdapter:: Received response:${T8(zz)}`), zz.kind) {
-               case X8:
-                 this.typesRegistryCache = new Map(Object.entries(zz.typesRegistry));
-                 break;
-               case w8: {
-                 const Ez = null == (uz = this.packageInstalledPromise) ? void 0 : uz.get(zz.id);
-                 wE.assertIsDefined(Ez, "Should find the promise for package install"), null == (bz = this.packageInstalledPromise) || bz.delete(zz.id), zz.success ? Ez.resolve({
-                   successMessage: zz.message
-                 }) : Ez.reject(zz.message), this.projectService.updateTypingsForProject(zz), this.event(zz, "setTypings");
-                 break
-               }
-               case r8: {
-                 const uz = {
-                     message: zz.message
-                   },
-                   bz = "typesInstallerInitializationFailed";
- ... (167 more removed lines; see GitHub link above)
+             return lq.get(Yq) || (xq = gq.createSourceFile(Yq, qq.readFile(Yq), null != (mq = null != Oq ? Oq : Eq.target) ? mq : uq(gq).target, !1), lq.set(xq.fileName, xq), xq)
+           },
+           useCaseSensitiveFileNames: function() {
+             return qq.useCaseSensitiveFileNames
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L125586` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/289.js#L230) · [Before (L125586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/289.js#L125586)

```diff
-     })
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/290.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/290.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L4-L27` → after: `L4-L89110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L4-L89110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/290.js#L4-L89110) · [Before (L4-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/290.js#L4-L27)

```diff
-   40696: (zz, uz, bz) => {
-     bz.d(uz, {
-       collectImportedWorldCodePluginNames: () => Hz
-     });
-     var Ez = bz(36297),
-       nz = bz(36294),
-       iz = bz(40624),
-       lz = bz.n(iz);
- 
-     function Mz(zz) {
-       return lz().isImportDeclaration(zz) && lz().isStringLiteral(zz.moduleSpecifier) && function(zz) {
-         const uz = zz.importClause;
-         if (!uz) return !0;
-         if (uz.isTypeOnly) return !1;
-         const bz = uz.namedBindings;
-         return !(bz && !lz().isNamespaceImport(bz)) || !!uz.name || bz.elements.some((zz => !zz.isTypeOnly))
- ... (8 more removed lines; see GitHub link above)
+   41144: (qq, Eq, gq) => {
+     var Yq = "/index.js",
+       lq = {};
+     (qq => {
+       var Eq = Object.defineProperty,
+         lq = (Object.getOwnPropertyDescriptor, Object.getOwnPropertyNames, Object.prototype.hasOwnProperty, (qq, gq) => {
+           for (var Yq in gq) Eq(qq, Yq, {
+             get: gq[Yq],
+             enumerable: !0
+           })
+         }),
+         Oq = {};
+       lq(Oq, {
+         ANONYMOUS: () => s6,
+         AccessFlags: () => mO,
+         AssertionLevel: () => og,
+ ... (89091 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L29-L31` → after: `L89112-L121996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R89112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L89112-L121996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/290.js#L89112-L121996) · [Before (L29-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/290.js#L29-L31)

```diff
-       for (const Ez of nz)
-         if ("" !== Ez && "." !== Ez)
-           if (".." !== Ez) iz.push(Ez);
+ 
+       function e9(qq, Eq) {
+         R9 = Eq, U9 = qq;
+         try {
+           return Zq(function(qq) {
+             const Eq = [];
+ 
+             function gq(qq) {
+               if (Yq(qq) && (Eq.push(qq), qq.children))
+                 for (const Eq of qq.children) gq(Eq)
+             }
+             return gq(qq), Eq;
+ 
+             function Yq(qq) {
+               if (qq.children) return !0;
+               switch (g0(qq)) {
+ ... (32869 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L33-L57` → after: `L121998-L122198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R121998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L121998-L122198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/290.js#L121998-L122198) · [Before (L33-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/290.js#L33-L57)

```diff
-             if (0 === iz.length) return;
-             iz.pop()
-           } const lz = iz.join("/");
-       for (const Mz of [lz, `${lz}.ts`, `${lz}.js`])
-         if (Mz in bz && !(0, Ez.o)(Mz)) return Mz
-     }
- 
-     function Hz(zz) {
-       const uz = new Set,
-         bz = (0, nz.c)(zz);
-       if (!bz) return [];
-       const Ez = [bz],
-         iz = new Set;
-       for (; Ez.length > 0;) {
-         const bz = Ez.pop();
-         if (!bz || iz.has(bz)) continue;
- ... (9 more removed lines; see GitHub link above)
+             const Eq = this.findExternalProjectByProjectName(qq);
+             Eq && this.removeProject(Eq)
+           }
+           Eq && (this.cleanupConfiguredProjects(), this.printProjects())
+         }
+         openExternalProjects(qq) {
+           const Eq = new Set(this.externalProjects.map((qq => qq.getProjectName())));
+           this.externalProjectToConfiguredProjectMap.forEach(((qq, gq) => Eq.add(gq)));
+           for (const gq of qq) this.openExternalProject(gq, !1), Eq.delete(gq.projectFileName);
+           Eq.forEach((qq => this.closeExternalProject(qq, !1))), this.cleanupConfiguredProjects(), this.printProjects()
+         }
+         static escapeFilenameForRegex(qq) {
+           return qq.replace(this.filenameEscapeRegexp, "\\$&")
+         }
+         resetSafeList() {
+           this.safelist = MQq
+ ... (185 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L59` → after: `L122200-L122424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R122200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L122200-L122424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/290.js#L122200-L122424) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/290.js#L59)

```diff
-             lz().forEachChild(Hz, Oz)
+           }))
+         }
+         watchPackageJsonFile(qq, Eq, gq) {
+           jY.assert(void 0 !== gq);
+           let Yq = (this.packageJsonFilesMap ?? (this.packageJsonFilesMap = new Map)).get(Eq);
+           if (!Yq) {
+             let gq = this.watchFactory.watchFile(qq, ((qq, gq) => {
+               switch (gq) {
+                 case 0:
+                 case 1:
+                   this.packageJsonCache.addOrUpdate(qq, Eq), this.onPackageJsonChange(Yq);
+                   break;
+                 case 2:
+                   this.packageJsonCache.delete(Eq), this.onPackageJsonChange(Yq), Yq.projects.clear(), Yq.close()
+               }
+             }), 250, this.hostConfiguration.watchOptions, UI.PackageJson);
+ ... (209 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L61` → after: `L122426-L125584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R122426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L122426-L125584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/290.js#L122426-L125584) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/290.js#L61)

```diff
-         Oz(Hz)
+         return Eq ? {
+           ...xq,
+           fileName: qq.file && qq.file.fileName
+         } : xq
+       }
+       var byq = MPq;
+ 
+       function iyq(qq, Eq, gq, Yq) {
+         const lq = Eq.hasLevel(3),
+           Oq = JSON.stringify(qq);
+         lq && Eq.info(`${qq.type}:${b7(qq)}`);
+         return `Content-Length: ${1+gq(Oq,"utf8")}\r\n\r\n${Oq}${Yq}`
+       }
+       var Zyq = class {
+         constructor(qq) {
+           this.operationHost = qq
+ ... (3143 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L63-L79` → after: `L125586-L125587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R125586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L125586-L125587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/290.js#L125586-L125587) · [Before (L63-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/290.js#L63-L79)

```diff
-       return [...uz].sort()
-     }
-   },
-   40659: zz => {
-     function uz(zz) {
-       var uz = new Error("Cannot find module '" + zz + "'");
-       throw uz.code = "MODULE_NOT_FOUND", uz
-     }
-     uz.keys = () => [], uz.resolve = uz, uz.id = 40659, zz.exports = uz
-   },
-   40649: () => {},
-   40640: () => {},
-   40666: () => {},
-   40646: () => {},
-   40642: () => {},
-   40632: () => {},
- ... (1 more removed lines; see GitHub link above)
+     })
+   }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/291.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/291.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade)

#### 1. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/291.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/291.js#L4-L6)

```diff
-   40682: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       default: () => oz
+   41230: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       collectImportedWorldCodePluginNames: () => cq
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L8-L18` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/291.js#L8-L11) · [Before (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/291.js#L8-L18)

```diff
-     var Ez = bz(56),
-       nz = bz(4497),
-       iz = bz(1628),
-       lz = bz(1038),
-       Mz = bz.n(lz),
-       tz = bz(1419),
-       Hz = bz(1181),
-       Oz = bz(4465),
-       pz = bz(4480),
-       dz = bz(4483),
-       Fz = bz(1089);
+     var Yq = gq(36912),
+       lq = gq(36906),
+       Oq = gq(41144),
+       mq = gq.n(Oq);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L21-L27` → after: `L14-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L14-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/291.js#L14-L22) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/291.js#L21-L27)

```diff
-       return zz.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
-     }
-     Oz.e.registerLanguage("javascript", pz.d), Oz.e.registerLanguage("typescript", dz.e);
- 
-     function Rz(zz, uz) {
-       const bz = Zz(zz).replace(/"/g, "&quot;");
-       return `<button type="button" class="DocsCopyButton ${uz}" title="${bz}" aria-label="${bz}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" vi … [truncated]
+       return mq().isImportDeclaration(qq) && mq().isStringLiteral(qq.moduleSpecifier) && function(qq) {
+         const Eq = qq.importClause;
+         if (!Eq) return !0;
+         if (Eq.isTypeOnly) return !1;
+         const gq = Eq.namedBindings;
+         return !(gq && !mq().isNamespaceImport(gq)) || !!Eq.name || gq.elements.some((qq => !qq.isTypeOnly))
+       }(qq) || mq().isExportDeclaration(qq) && qq.moduleSpecifier && mq().isStringLiteral(qq.moduleSpecifier) && function(qq) {
+         return !qq.isTypeOnly && (!qq.exportClause || !mq().isNamedExports(qq.exportClause) || 0 === qq.exportClause.elements.length || qq.exportClause.elements.some((qq => !qq.isTypeOnly)))
+       }(qq) ? qq.moduleSpecifier.text : mq().isImportEqualsDeclaration(qq) && !qq.isTypeOnly && mq().isExternalModuleReference(qq.moduleReference) && qq.moduleReference.expression && mq().isStringLiteral(qq.moduleReference.expression) ? qq.moduleReference.expression.text : mq().i … [truncated]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L30-L44` → after: `L25-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L25-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/291.js#L25-L61) · [Before (L30-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/291.js#L30-L44)

```diff
-     function Kz(zz, uz) {
-       const bz = [],
-         Ez = zz.toLowerCase(),
-         nz = uz.toLowerCase();
-       let iz = 0;
-       for (; iz < zz.length;) {
-         const lz = Ez.indexOf(nz, iz);
-         if (-1 === lz) {
-           bz.push(zz.slice(iz));
-           break
-         }
-         lz > iz && bz.push(zz.slice(iz, lz)), bz.push((0, Fz.jsx)("mark", {
-           className: "DocsHighlight",
-           children: zz.slice(lz, lz + uz.length)
-         }, lz)), iz = lz + uz.length
+     function Aq(qq, Eq, gq) {
+       if (!Eq.startsWith("./") && !Eq.startsWith("../")) return;
+       const lq = ((qq.includes("/") ? qq.slice(0, qq.lastIndexOf("/") + 1) : "") + Eq).split("/"),
+         Oq = [];
+       for (const Yq of lq)
+         if ("" !== Yq && "." !== Yq)
+           if (".." !== Yq) Oq.push(Yq);
+           else {
+             if (0 === Oq.length) return;
+             Oq.pop()
+           } const mq = Oq.join("/");
+       for (const xq of [mq, `${mq}.ts`, `${mq}.js`])
+         if (xq in gq && !(0, Yq.l)(xq)) return xq
+     }
+ 
+     function cq(qq) {
+ ... (21 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L46` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/291.js#L63) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/291.js#L46)

```diff
-       return bz
+       return [...Eq].sort()
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L48-L414` → after: `L65-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L65-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/291.js#L65-L79) · [Before (L48-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/291.js#L48-L414)

```diff
-     var wz = bz(1047),
-       Xz = bz(1332),
-       fz = bz(36316),
-       sz = bz(36319);
-     const rz = {
-         clientOptions: {
-           tabStep: "docsClientOptionsTab",
-           tabText: "codeEditor:tutorialClientOptionsTab",
-           pageStep: "docsClientOptions",
-           pageText: "codeEditor:tutorialClientOptions"
-         },
-         apiReference: {
-           tabStep: "docsApiReferenceTab",
-           tabText: "codeEditor:tutorialApiReferenceTab",
-           pageStep: "docsApiReference",
-           pageText: "codeEditor:tutorialApiReference"
- ... (351 more removed lines; see GitHub link above)
+   },
+   41186: qq => {
+     function Eq(qq) {
+       var Eq = new Error("Cannot find module '" + qq + "'");
+       throw Eq.code = "MODULE_NOT_FOUND", Eq
+     }
+     Eq.keys = () => [], Eq.resolve = Eq, Eq.id = 41186, qq.exports = Eq
+   },
+   41170: () => {},
+   41153: () => {},
+   41195: () => {},
+   41162: () => {},
+   41159: () => {},
+   41146: () => {},
+   41177: () => {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/292.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/292.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93)

#### 1. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/292.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/292.js#L4-L6)

```diff
-   40702: (zz, uz, bz) => {
-     bz.d(uz, {
-       ensureLocalBloxdTypes: () => wz
+   41216: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       default: () => yq
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L8-L17` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/292.js#L8-L18) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/292.js#L8-L17)

```diff
-     var Ez = bz(4517),
-       nz = bz(40607),
-       iz = bz(40603),
-       lz = bz(36291),
-       Mz = bz(36294),
-       tz = bz(36308);
-     const Hz = JSON.stringify({
-       name: "@bloxd",
-       types: "index.d.ts"
-     }, null, "\t") + "\n";
+     var Yq = gq(57),
+       lq = gq(4572),
+       Oq = gq(1659),
+       mq = gq(1018),
+       xq = gq.n(mq),
+       Aq = gq(1422),
+       cq = gq(1183),
+       uq = gq(4540),
+       Bq = gq(4553),
+       Wq = gq(4562),
+       Nq = gq(1070);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L20` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/292.js#L21-L27) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/292.js#L20)

```diff
-       return zz.replace(/^\//, "")
+       return qq.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
+     }
+     uq.b.registerLanguage("javascript", Bq.e), uq.b.registerLanguage("typescript", Wq.b);
+ 
+     function Vq(qq, Eq) {
+       const gq = aq(qq).replace(/"/g, "&quot;");
+       return `<button type="button" class="DocsCopyButton ${Eq}" title="${gq}" aria-label="${gq}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" vi … [truncated]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L23-L42` → after: `L30-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L30-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/292.js#L30-L44) · [Before (L23-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/292.js#L23-L42)

```diff
-     function pz(zz) {
-       return Oz((0, Mz.s)(zz.name, "")).replace(/\/$/, "")
-     }
- 
-     function dz(zz) {
-       return zz.typesVfsPath.slice(zz.typesVfsPath.lastIndexOf("/") + 1)
-     }
- 
-     function Fz(zz) {
-       return JSON.stringify({
-         name: zz.specifier,
-         types: dz(zz)
-       }, null, "\t") + "\n"
-     }
-     async function Zz(zz) {
-       let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
- ... (4 more removed lines; see GitHub link above)
+     function dq(qq, Eq) {
+       const gq = [],
+         Yq = qq.toLowerCase(),
+         lq = Eq.toLowerCase();
+       let Oq = 0;
+       for (; Oq < qq.length;) {
+         const mq = Yq.indexOf(lq, Oq);
+         if (-1 === mq) {
+           gq.push(qq.slice(Oq));
+           break
+         }
+         mq > Oq && gq.push(qq.slice(Oq, mq)), gq.push((0, Nq.jsx)("mark", {
+           className: "DocsHighlight",
+           children: qq.slice(mq, mq + Eq.length)
+         }, mq)), Oq = mq + Eq.length
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L46-L90` → after: `L48-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L48-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/292.js#L48-L57) · [Before (L46-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/292.js#L46-L90)

```diff
-     async function Rz(zz, uz, bz) {
-       const Ez = pz(uz),
-         nz = await (0, tz.l)(zz, Ez);
-       if (!nz) return;
-       const iz = new Set([dz(uz), "package.json"]);
-       if (bz)
-         for (const tz of Object.keys(uz.files)) iz.add(tz);
-       const lz = await Zz(nz),
-         Mz = new Set;
-       for (const pz of lz) {
-         if (iz.has(pz)) continue;
-         await (0, tz.A)(zz, `${Ez}/${pz}`);
-         const uz = pz.split("/");
-         for (let zz = 1; zz < uz.length; zz++) Mz.add(uz.slice(0, zz).join("/"))
-       }
-       const Hz = [...Mz].sort(((zz, uz) => uz.split("/").length - zz.split("/").length));
- ... (29 more removed lines; see GitHub link above)
+     var jq = gq(1025),
+       Hq = gq(1341),
+       oq = gq(36931),
+       Pq = gq(36935);
+     const Qq = {
+         clientOptions: {
+           tabStep: "docsClientOptionsTab",
+           tabText: "codeEditor:tutorialClientOptionsTab",
+           pageStep: "docsClientOptions",
+           pageText: "codeEditor:tutorialClientOptions"
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L92-L108` → after: `L59-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L59-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/292.js#L59-L413) · [Before (L92-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/292.js#L92-L108)

```diff
-         include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
-         files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...bz]
-       }, null, "\t") + "\n"
-     }
-     async function wz(zz) {
-       let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
-       const bz = new Set(uz.map((zz => zz.name))),
-         dz = Object.values(lz.i).flatMap((uz => {
-           const Ez = Oz(uz.typesVfsPath),
-             nz = `${pz(uz)}/package.json`;
-           return [...bz.has(uz.name) ? Object.entries(uz.files).map((bz => {
-             let [Ez, nz] = bz;
-             return (0, tz.K)(zz, Oz((0, Mz.s)(uz.name, Ez)), nz)
-           })) : [], (0, tz.K)(zz, Ez, uz.types), (0, tz.K)(zz, nz, Fz(uz))]
-         }));
-       await Promise.all([(0, tz.K)(zz, "node_modules/@bloxd/index.d.ts", Ez.default), (0, tz.K)(zz, "node_modules/@bloxd/globals.d.ts", iz.d), (0, tz.K)(zz, "node_modules/@bloxd/lib.d.ts", nz.d), (0, tz.K)(zz, "node_modules/@bloxd/package.json", Hz), (0, tz.K)(zz, "tsconfig.json" … [truncated]
- ... (1 more removed lines; see GitHub link above)
+         apiReference: {
+           tabStep: "docsApiReferenceTab",
+           tabText: "codeEditor:tutorialApiReferenceTab",
+           pageStep: "docsApiReference",
+           pageText: "codeEditor:tutorialApiReference"
+         },
+         callbacks: {
+           tabStep: "docsCallbacksTab",
+           tabText: "codeEditor:tutorialCallbacksTab",
+           pageStep: "docsCallbacks",
+           pageText: "codeEditor:tutorialCallbacks"
+         }
+       },
+       yq = (0, Yq.memo)((function(qq) {
+         var Eq, gq, mq, Bq, Wq, yq, tq;
+         let {
+ ... (339 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/293.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/293.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22)

#### 1. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/293.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/293.js#L4-L6)

```diff
-   40756: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       installImageBitmapTextureLoader: () => Hz
+   41238: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       ensureLocalBloxdTypes: () => jq
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L8-L10` → after: `L8-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/293.js#L8-L17) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/293.js#L8-L10)

```diff
-     var Ez = bz(39057),
-       nz = bz(40763),
-       iz = bz(2966);
+     var Yq = gq(4583),
+       lq = gq(41120),
+       Oq = gq(41113),
+       mq = gq(36902),
+       xq = gq(36906),
+       Aq = gq(36922);
+     const cq = JSON.stringify({
+       name: "@bloxd",
+       types: "index.d.ts"
+     }, null, "\t") + "\n";
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L12-L17` → after: `L19-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L19-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/293.js#L19-L42) · [Before (L12-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/293.js#L12-L17)

```diff
-     function lz(zz, uz) {
-       if ("string" === typeof zz) {
-         const bz = (0, iz.g)(zz);
-         return bz ? new Blob([(0, iz.d)(bz.base64)], {
-           type: bz.mimeType || uz
-         }) : null
+     function uq(qq) {
+       return qq.replace(/^\//, "")
+     }
+ 
+     function Bq(qq) {
+       return uq((0, xq.o)(qq.name, "")).replace(/\/$/, "")
+     }
+ 
+     function Wq(qq) {
+       return qq.typesVfsPath.slice(qq.typesVfsPath.lastIndexOf("/") + 1)
+     }
+ 
+     function Nq(qq) {
+       return JSON.stringify({
+         name: qq.specifier,
+         types: Wq(qq)
+ ... (8 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L19-L21` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/293.js#L44) · [Before (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/293.js#L19-L21)

```diff
-       return zz instanceof Blob ? zz : new Blob([zz], {
-         type: uz
-       })
+       return gq
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L23-L30` → after: `L46-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L46-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/293.js#L46-L59) · [Before (L23-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/293.js#L23-L30)

```diff
-     const Mz = function(zz, uz, bz, Ez) {
-       let iz, Mz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
-         tz = arguments.length > 5 ? arguments[5] : void 0,
-         Hz = arguments.length > 6 ? arguments[6] : void 0;
-       try {
-         iz = lz(zz, Mz)
-       } catch {
-         iz = null
+     async function Vq(qq, Eq, gq) {
+       const Yq = Bq(Eq),
+         lq = await (0, Aq.k)(qq, Yq);
+       if (!lq) return;
+       const Oq = new Set([Wq(Eq), "package.json"]);
+       if (gq)
+         for (const Aq of Object.keys(Eq.files)) Oq.add(Aq);
+       const mq = await aq(lq),
+         xq = new Set;
+       for (const Bq of mq) {
+         if (Oq.has(Bq)) continue;
+         await (0, Aq.D)(qq, `${Yq}/${Bq}`);
+         const Eq = Bq.split("/");
+         for (let qq = 1; qq < Eq.length; qq++) xq.add(Eq.slice(0, qq).join("/"))
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L32-L42` → after: `L61-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L61-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/293.js#L61-L68) · [Before (L32-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/293.js#L32-L42)

```diff
-       return iz ? (createImageBitmap(iz, {
-         premultiplyAlpha: "none",
-         colorSpaceConversion: "none",
-         ...tz
-       }).then((zz => {
-         uz(zz)
-       }), (() => {
-         (0, nz.g)(zz, uz, bz, Ez, Mz, tz, Hz)
-       })), null) : (0, nz.g)(zz, uz, bz, Ez, Mz, tz, Hz)
-     };
-     let tz = "idle";
+       const cq = [...xq].sort(((qq, Eq) => Eq.split("/").length - qq.split("/").length));
+       for (const Bq of cq) try {
+         await (0, Aq.D)(qq, `${Yq}/${Bq}`)
+       } catch (uq) {
+         if (uq instanceof DOMException && "InvalidModificationError" === uq.name) continue;
+         throw uq
+       }
+     }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L44-L63` → after: `L70-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L70-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/293.js#L70-L94) · [Before (L44-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/293.js#L44-L63)

```diff
-     function Hz() {
-       "idle" === tz && "function" === typeof createImageBitmap && (tz = "pending", async function() {
-         const zz = document.createElement("canvas");
-         zz.width = 1, zz.height = 2;
-         const uz = zz.getContext("2d");
-         if (!uz) throw new Error("2d context unavailable");
-         uz.fillStyle = "#f00", uz.fillRect(0, 0, 1, 1), uz.fillStyle = "#0f0", uz.fillRect(0, 1, 1, 1);
-         const bz = lz(zz.toDataURL(), "");
-         if (!bz) throw new Error("toDataURL did not produce a base64 data URL");
-         const Ez = await createImageBitmap(bz, {
-           premultiplyAlpha: "none",
-           colorSpaceConversion: "none",
-           imageOrientation: "flipY"
-         });
-         uz.drawImage(Ez, 0, 0);
-         const nz = uz.getImageData(0, 0, 1, 1).data;
- ... (4 more removed lines; see GitHub link above)
+     function dq(qq) {
+       const Eq = {
+         "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
+       };
+       for (const Yq of Object.values(mq.i)) Eq[Yq.specifier] = [`.${Yq.typesVfsPath}`];
+       const gq = [];
+       for (const Yq of qq)
+         for (const qq of Object.keys(Yq.files)) gq.push(uq((0, xq.o)(Yq.name, qq)));
+       return JSON.stringify({
+         compilerOptions: {
+           allowJs: !0,
+           checkJs: !1,
+           strict: !1,
+           module: "ESNext",
+           moduleResolution: "bundler",
+           target: "ES2015",
+ ... (9 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L65-L72` → after: `L96-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L96-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/293.js#L96-L108) · [Before (L65-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/293.js#L65-L72)

```diff
-   },
-   40763: (zz, uz, bz) => {
-     bz.d(uz, {
-       d: () => Ez.j,
-       g: () => Ez.t
-     });
-     var Ez = bz(39202);
-     (0, Ez.z)()
+     async function jq(qq) {
+       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
+       const gq = new Set(Eq.map((qq => qq.name))),
+         Wq = Object.values(mq.i).flatMap((Eq => {
+           const Yq = uq(Eq.typesVfsPath),
+             lq = `${Bq(Eq)}/package.json`;
+           return [...gq.has(Eq.name) ? Object.entries(Eq.files).map((gq => {
+             let [Yq, lq] = gq;
+             return (0, Aq.J)(qq, uq((0, xq.o)(Eq.name, Yq)), lq)
+           })) : [], (0, Aq.J)(qq, Yq, Eq.types), (0, Aq.J)(qq, lq, Nq(Eq))]
+         }));
+       await Promise.all([(0, Aq.J)(qq, "node_modules/@bloxd/index.d.ts", Yq.default), (0, Aq.J)(qq, "node_modules/@bloxd/globals.d.ts", Oq.d), (0, Aq.J)(qq, "node_modules/@bloxd/lib.d.ts", lq.c), (0, Aq.J)(qq, "node_modules/@bloxd/package.json", cq), (0, Aq.J)(qq, "tsconfig.json" … [truncated]
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/294.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/294.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79)

#### 1. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L4-L235` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/294.js#L4-L6) · [Before (L4-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/294.js#L4-L235)

```diff
-   40827: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => iz
-     });
-     var Ez = bz(39267),
-       nz = bz(40835);
-     class iz {
-       constructor(zz, uz) {
-         let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
-         this.maxDepth = bz, this.Ubz = [], this._maxBlockCapacity = uz || 64, this._selectionContent = new Ez.b(1024), this._creationFunc = zz
-       }
-       update(zz, uz, bz) {
-         nz.e._CreateBlocks(zz, uz, bz, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
-       }
-       vbz(zz) {
-         for (let uz = 0; uz < this.blocks.length; uz++) {
- ... (216 more removed lines; see GitHub link above)
+   41295: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       installImageBitmapTextureLoader: () => cq
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L237-L486` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/294.js#L8-L10) · [Before (L237-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/294.js#L237-L486)

```diff
-     var Ez = bz(36526),
-       nz = bz(36519),
-       iz = bz(36528),
-       lz = bz(39467),
-       Mz = bz(39296),
-       tz = bz(36543),
-       Hz = bz(39350);
-     const Oz = {
-       internalPickerForMesh: void 0
-     };
-     class pz {
-       constructor(zz, uz) {
-         let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
-           nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ez.b;
-         this.origin = zz, this.direction = uz, this.length = bz, this.epsilon = nz
-       }
- ... (234 more removed lines; see GitHub link above)
+     var Yq = gq(39630),
+       lq = gq(41299),
+       Oq = gq(3108);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L489-L590` → after: `L13-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L13-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/294.js#L13-L17) · [Before (L489-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/294.js#L489-L590)

```diff
-       return "InstancedLinesMesh" === zz || "LinesMesh" === zz ? uz.intersectionThreshold : 0
-     }
- 
-     function fz(zz) {
-       const uz = zz.getClassName();
-       if ("GreasedLineMesh" === uz) return {
-         rawBoundingInfo: null,
-         intersectionThreshold: 0
-       };
-       const bz = zz.rawBoundingInfo;
-       return {
-         rawBoundingInfo: bz,
-         intersectionThreshold: bz ? Xz(uz, zz) : 0
-       }
-     }
- 
- ... (86 more removed lines; see GitHub link above)
+       if ("string" === typeof qq) {
+         const gq = (0, Oq.h)(qq);
+         return gq ? new Blob([(0, Oq.d)(gq.base64)], {
+           type: gq.mimeType || Eq
+         }) : null
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L592-L639` → after: `L19-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L19-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/294.js#L19-L20) · [Before (L592-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/294.js#L592-L639)

```diff
-       return iz
-     }
- 
-     function Nz(zz, uz, bz, Ez, iz, lz) {
-       if (!Mz.c) return null;
-       const tz = rz(zz, (Ez => (zz._tempPickingRay || (zz._tempPickingRay = pz.Zero()), Fz(zz, uz, bz, Ez, zz._tempPickingRay, lz || null), zz._tempPickingRay)), Ez, iz, !0);
-       return tz && (tz.ray = dz(zz, uz, bz, nz.d.Identity(), lz || null)), tz
-     }
- 
-     function vz(zz, uz, bz, Ez, iz, lz, Mz) {
-       const tz = rz(zz, ((Ez, nz) => (zz._tempPickingRay || (zz._tempPickingRay = pz.Zero()), Fz(zz, uz, bz, Ez, zz._tempPickingRay, lz || null, !1, nz), zz._tempPickingRay)), Ez, iz, !1, Mz);
-       return tz && (tz.ray = dz(zz, uz, bz, nz.d.Identity(), lz || null)), tz
-     }
- 
-     function xz(zz, uz, bz, Ez, iz) {
-       const lz = rz(zz, (bz => (zz._pickWithRayInverseMatrix || (zz._pickWithRayInverseMatrix = nz.d.Identity()), bz.invertToRef(zz._pickWithRayInverseMatrix), zz._cachedRayForTransform || (zz._cachedRayForTransform = pz.Zero()), pz.TransformToRef(uz, zz._pickWithRayInverseMatrix … [truncated]
- ... (32 more removed lines; see GitHub link above)
+       return qq instanceof Blob ? qq : new Blob([qq], {
+         type: Eq
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L642-L904` → after: `L23-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L23-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/294.js#L23-L64) · [Before (L642-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/294.js#L642-L904)

```diff
-     pz._TmpVector3 = (0, iz.d)(6, nz.n.Zero), pz._RayDistant = pz.Zero(), pz._Smallnum = 1e-8, pz._Rayl = 1e9
-   },
-   40770: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => iz.x
-     });
-     var Ez = bz(39253),
-       nz = bz(39376),
-       iz = bz(40776);
-     let lz = !1;
-     lz || (lz = !0, (0, iz.c)(Ez.e, nz.d), Ez.e.prototype.createPickingRayToRef = function(zz, uz, bz, Ez, nz) {
-       let lz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         Mz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-       return (0, iz.j)(this, zz, uz, bz, Ez, nz, lz, Mz)
-     }, Ez.e.prototype.createPickingRayInCameraSpace = function(zz, uz, bz) {
-       return (0, iz.h)(this, zz, uz, bz)
- ... (247 more removed lines; see GitHub link above)
+     const xq = function(qq, Eq, gq, Yq) {
+       let Oq, xq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
+         Aq = arguments.length > 5 ? arguments[5] : void 0,
+         cq = arguments.length > 6 ? arguments[6] : void 0;
+       try {
+         Oq = mq(qq, xq)
+       } catch {
+         Oq = null
+       }
+       return Oq ? (createImageBitmap(Oq, {
+         premultiplyAlpha: "none",
+         colorSpaceConversion: "none",
+         ...Aq
+       }).then((qq => {
+         Eq(qq)
+       }), (() => {
+ ... (26 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L906` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/294.js#L66) · [Before (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/294.js#L906)

```diff
-   40798: (zz, uz, bz) => {
+   41299: (qq, Eq, gq) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L908` → after: `L68-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/294.js#L68-L69) · [Before (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/294.js#L908)

```diff
-       c: () => Wu
+       d: () => Yq.m,
+       f: () => Yq.x
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L910-L4405` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/294.js#L71-L72) · [Before (L910-L4405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/294.js#L910-L4405)

```diff
-     var Ez = bz(38089),
-       nz = bz(36547),
-       iz = bz(36519),
-       lz = bz(39299),
-       Mz = bz(40803),
-       tz = bz(36543),
-       Hz = bz(39444),
-       Oz = bz(36715),
-       pz = bz(38096),
-       dz = bz(38054),
-       Fz = bz(36553);
-     class Zz {
-       constructor() {
-         this.direction1 = new iz.n(0, 1, 0), this.direction2 = new iz.n(0, 1, 0)
-       }
-       startDirectionFunction(zz, uz, bz, Ez) {
- ... (3480 more removed lines; see GitHub link above)
+     var Yq = gq(39799);
+     (0, Yq.D)()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/295.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/295.js` (52 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad)

#### 1. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L4)

```diff
-   40924: (zz, uz, bz) => {
+   41361: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6-L11` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L6) · [Before (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L6-L11)

```diff
-       b: () => dz,
-       c: () => wz,
-       d: () => Fz,
-       g: () => Zz,
-       k: () => fz,
-       m: () => Xz
+       c: () => Oq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L13-L56` → after: `L8-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L8-L13) · [Before (L13-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L13-L56)

```diff
-     var Ez = bz(40874);
-     var nz = "Babylon Lite v1.32.0",
-       iz = bz(40928);
- 
-     function lz(zz) {
-       return "clientWidth" in zz
-     }
-     var Mz = 1;
- 
-     function tz(zz, uz, bz) {
-       const tz = uz.getContext("webgpu");
-       tz || (0, Ez.c)(54), lz(uz) && uz.setAttribute("data-engine", nz);
-       const Hz = bz?.format ?? navigator.gpu.getPreferredCanvasFormat(),
-         Oz = bz?.srgb ? (pz = Hz).endsWith("-srgb") ? pz : `${pz}-srgb` : Hz;
-       var pz;
-       const dz = bz?.alphaMode ?? "opaque";
- ... (28 more removed lines; see GitHub link above)
+     var Yq = gq(39858),
+       lq = gq(41369);
+     class Oq {
+       constructor(qq, Eq) {
+         let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
+         this.maxDepth = gq, this.UYq = [], this._maxBlockCapacity = Eq || 64, this._selectionContent = new Yq.b(1024), this._creationFunc = qq
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L58-L84` → after: `L15-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L15-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L15-L47) · [Before (L58-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L58-L84)

```diff
-     }
- 
-     function Hz(zz) {
-       const uz = zz._context.getCurrentTexture(),
-         bz = zz.scRT;
-       bz._colorTexture = uz, bz._colorView = uz.createView({
-         format: zz.format
-       }), bz._width = uz.width, bz._height = uz.height
-     }
- 
-     function Oz(zz) {
-       const uz = zz.canvas;
-       if (!lz(uz)) return;
-       const bz = zz._w ?? uz.clientWidth,
-         Ez = zz._h ?? uz.clientHeight;
-       if (!(bz > 0 && Ez > 0)) return;
- ... (11 more removed lines; see GitHub link above)
+       update(qq, Eq, gq) {
+         lq.c._CreateBlocks(qq, Eq, gq, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
+       }
+       ZYq(qq) {
+         for (let Eq = 0; Eq < this.blocks.length; Eq++) {
+           this.blocks[Eq].addEntry(qq)
+         }
+       }
+       Wk(qq) {
+         for (let Eq = 0; Eq < this.blocks.length; Eq++) {
+           this.blocks[Eq].removeEntry(qq)
+         }
+       }
+       select(qq, Eq) {
+         this._selectionContent.reset();
+         for (let gq = 0; gq < this.blocks.length; gq++) {
+ ... (17 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L87-L165` → after: `L50-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L50-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L50-L54) · [Before (L87-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L87-L165)

```diff
-     var dz = 0;
- 
-     function Fz(zz, uz) {
-       return -1 !== zz._renderingContexts.indexOf(uz)
-     }
- 
-     function Zz(zz, uz) {
-       return -1 === zz._renderingContexts.indexOf(uz) && (zz._renderingContexts.push(uz), !0)
-     }
-     var Rz = null;
-     var Kz = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
-     async function wz(zz, uz) {
-       const iz = await navigator.gpu.requestAdapter({
-         powerPreference: "high-performance",
-         ...Rz ? Rz() : {}
-       });
- ... (63 more removed lines; see GitHub link above)
+     Oq.CreationFuncForMeshes = (qq, Eq) => {
+       const gq = qq.yR();
+       !qq.isBlocked && gq.boundingBox.intersectsMinMax(Eq.SYq, Eq.zYq) && Eq.entries.push(qq)
+     }, Oq.CreationFuncForSubMeshes = (qq, Eq) => {
+       qq.yR().boundingBox.intersectsMinMax(Eq.SYq, Eq.zYq) && Eq.entries.push(qq)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L167-L185` → after: `L56-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L56-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L56-L85) · [Before (L167-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L167-L185)

```diff
- 
-     function sz(zz, uz) {
-       let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zz._surfaces,
-         Ez = 0;
-       for (let iz = bz.length; iz--;) Ez += bz[iz]._renderingContexts.length;
-       if (!Ez) return zz.drawCallCount = 0, zz._flushGpuRetirements?.(zz);
-       const nz = zz._device.createCommandEncoder({
-         label: "frame"
-       });
-       zz._currentEncoder = nz, zz._currentDelta = uz;
-       try {
-         zz._gpuTimerBegin?.(nz), Ez = 0;
-         for (let zz = 0; zz < bz.length; zz++) {
-           const uz = bz[zz];
-           uz._capturePreFrame?.(uz), Hz(uz);
-           const nz = uz._renderingContexts;
- ... (3 more removed lines; see GitHub link above)
+   },
+   41369: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => Oq
+     });
+     var Yq = gq(37139),
+       lq = gq(40060);
+     class Oq {
+       constructor(qq, Eq, gq, Yq, lq, Oq) {
+         this.entries = [], this.FYq = new Array, this._capacity = gq, this._depth = Yq, this._maxDepth = lq, this._creationFunc = Oq, this._minPoint = qq, this._maxPoint = Eq, this.FYq.push(qq.clone()), this.FYq.push(Eq.clone()), this.FYq.push(qq.clone()), this.FYq[2].x = Eq.x, t … [truncated]
+       }
+       get WB() {
+         return this._capacity
+       }
+       get SYq() {
+         return this._minPoint
+ ... (14 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L188` → after: `L89-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L89-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L89-L92) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L188)

```diff
-         const uz = zz._currentEncoder;
+         const Eq = this.entries.indexOf(qq);
+         Eq > -1 && this.entries.splice(Eq, 1)
+       }
+       addEntries(qq) {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L191` → after: `L95-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L95-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L95-L128) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L191)

```diff
-           Ez._captureService?.(Ez, uz)
+           this.addEntry(gq)
+         }
+       }
+       select(qq, Eq, gq) {
+         if (lq.d.IsInFrustum(this.FYq, qq)) {
+           if (this.blocks) {
+             for (let Yq = 0; Yq < this.blocks.length; Yq++) {
+               this.blocks[Yq].select(qq, Eq, gq)
+             }
+             return
+           }
+           gq ? Eq.concat(this.entries) : Eq.concatWithNoDuplicate(this.entries)
+         }
+       }
+       intersects(qq, Eq, gq, Yq) {
+         if (lq.d.IntersectsSphere(this._minPoint, this._maxPoint, qq, Eq)) {
+ ... (18 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L193-L195` → after: `L130-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L130-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L130-L144) · [Before (L193-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L193-L195)

```diff
-         zz._gpuTimerEnd?.(uz), zz._cbs[0] = uz.finish(), zz._device.queue.submit(zz._cbs), zz._flushGpuRetirements?.(zz), zz.drawCallCount = Ez, zz._gpuTimerResolve?.()
-       } finally {
-         zz._currentEncoder = void 0
+       }
+       createInnerBlocks() {
+         Oq._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
+       }
+       static _CreateBlocks(qq, Eq, gq, lq, mq, xq, Aq, cq) {
+         Aq.blocks = new Array;
+         const uq = new Yq.q((Eq.x - qq.x) / 2, (Eq.y - qq.y) / 2, (Eq.z - qq.z) / 2);
+         for (let Yq = 0; Yq < 2; Yq++)
+           for (let Eq = 0; Eq < 2; Eq++)
+             for (let Bq = 0; Bq < 2; Bq++) {
+               const Wq = qq.add(uq.multiplyByFloats(Yq, Eq, Bq)),
+                 Nq = qq.add(uq.multiplyByFloats(Yq + 1, Eq + 1, Bq + 1)),
+                 aq = new Oq(Wq, Nq, lq, mq + 1, xq, cq);
+               aq.addEntries(gq), Aq.blocks.push(aq)
+             }
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L199` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L148) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L199)

```diff
-   40878: (zz, uz, bz) => {
+   41374: (qq, Eq, gq) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L201-L203` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L150) · [Before (L201-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L201-L203)

```diff
-       d: () => nz,
-       g: () => iz,
-       k: () => Ez
+       e: () => uq
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L205-L219` → after: `L152-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L152-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L152-L161) · [Before (L205-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L205-L219)

```diff
-     var Ez = globalThis.GPUTextureUsage,
-       nz = globalThis.GPUBufferUsage,
-       iz = globalThis.GPUShaderStage;
-     globalThis.GPUColorWrite
-   },
-   40944: (zz, uz, bz) => {
-     function Ez(zz) {
-       nz(zz.splice(0))
-     }
- 
-     function nz(zz) {
-       for (const bz of zz) try {
-         bz()
-       } catch (uz) {
-         console.error("GPU resource retirement failed.", uz)
+     var Yq = gq(39838),
+       lq = gq(37139),
+       Oq = gq(40197),
+       mq = gq(41315),
+       xq = gq(39911),
+       Aq = gq(37153),
+       cq = gq(41361);
+     class uq {
+       constructor(qq) {
+         this.name = xq.e.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new mq.A(lq.q.Zero(), new lq.q(1, 1, 1)), (qq = qq || Aq.b.LastCreatedScene) && (this.PV = qq, this.PV.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.PV.getActiveSubMeshCandidat … [truncated]
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L222-L239` → after: `L200-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L200-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L200-L221) · [Before (L222-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L222-L239)

```diff
- 
-     function iz(zz, uz) {
-       zz._flushGpuRetirements ??= lz, (zz._retirements ??= []).push(uz)
-     }
- 
-     function lz(zz) {
-       const uz = zz._retirements;
-       if (!uz) return;
-       zz._retirements = null;
-       const bz = zz._retiring ??= new Set;
-       bz.add(uz), queueMicrotask((() => {
-         zz._device.queue.onSubmittedWorkDone().then((() => {
-           bz.delete(uz), Ez(uz)
-         })).catch((() => {}))
-       }))
-     }
- ... (2 more removed lines; see GitHub link above)
+     let Bq = !1;
+     Bq || (Bq = !0, Yq.i.prototype.createOrUpdateSelectionOctree = function() {
+       let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
+         Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
+         gq = this._getComponent(xq.e.NAME_OCTREE);
+       gq || (gq = new uq(this), this.VYq(gq)), this.IYq || (this.IYq = new cq.c(cq.c.CreationFuncForMeshes, qq, Eq));
+       const Yq = this.getWorldExtends();
+       return this.IYq.update(Yq.min, Yq.max, this.meshes), this.IYq
+     }, Object.defineProperty(Yq.i.prototype, "selectionOctree", {
+       get: function() {
+         return this.IYq
+       },
+       enumerable: !0,
+       configurable: !0
+     }), Oq.c.prototype.createOrUpdateSubmeshesOctree = function() {
+       let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
+ ... (6 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L242` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L224) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L242)

```diff
-   40928: (zz, uz, bz) => {
+   41315: (qq, Eq, gq) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L244` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L226) · [Before (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L244)

```diff
-       d: () => iz,
+       A: () => Bq,
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L246` → after: `L228-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L228-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L228-L235) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L246)

```diff
-       g: () => Mz
+       h: () => Vq,
+       j: () => aq,
+       l: () => Nq,
+       n: () => nq,
+       r: () => hq,
+       v: () => tq,
+       w: () => vq,
+       z: () => rq
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L248-L264` → after: `L237-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L237-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L237-L251) · [Before (L248-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L248-L264)

```diff
-     var Ez = bz(40878);
- 
-     function nz(zz) {
-       const uz = zz.size;
-       return "canvas" in uz ? uz.canvas : uz
-     }
- 
-     function iz(zz) {
-       return {
-         _descriptor: zz,
-         _resolveSize: nz,
-         _colorTexture: null,
-         _colorView: null,
-         _depthTexture: null,
-         _depthView: null,
-         _width: 0,
- ... (1 more removed lines; see GitHub link above)
+     var Yq = gq(37145),
+       lq = gq(37139),
+       Oq = gq(37149),
+       mq = gq(40049),
+       xq = gq(39876),
+       Aq = gq(37153),
+       cq = gq(39932);
+     const uq = {
+       internalPickerForMesh: void 0
+     };
+     class Bq {
+       constructor(qq, Eq) {
+         let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
+           lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Yq.c;
+         this.origin = qq, this.direction = Eq, this.length = gq, this.epsilon = lq
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L266-L271` → after: `L253-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L253-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L253-L312) · [Before (L266-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L266-L271)

```diff
-     }
- 
-     function lz(zz, uz) {
-       if (zz._eager) return void zz._syncEager?.(uz);
-       Mz(zz);
-       const bz = zz._descriptor,
+       clone() {
+         return new Bq(this.origin.clone(), this.direction.clone(), this.length)
+       }
+       intersectsBoxMinMax(qq, Eq) {
+         let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         const Yq = Bq._TmpVector3[0].Vqq(qq.x - gq, qq.y - gq, qq.z - gq),
+           lq = Bq._TmpVector3[1].Vqq(Eq.x + gq, Eq.y + gq, Eq.z + gq);
+         let Oq, mq, xq, Aq, cq = 0,
+           uq = Number.MAX_VALUE;
+         if (Math.abs(this.direction.x) < 1e-7) {
+           if (this.origin.x < Yq.x || this.origin.x > lq.x) return !1
+         } else if (Oq = 1 / this.direction.x, mq = (Yq.x - this.origin.x) * Oq, xq = (lq.x - this.origin.x) * Oq, xq === -1 / 0 && (xq = 1 / 0), mq > xq && (Aq = mq, mq = xq, xq = Aq), cq = Math.max(mq, cq), uq = Math.min(xq, uq), cq > uq) return !1;
+         if (Math.abs(this.direction.y) < 1e-7) {
+           if (this.origin.y < Yq.y || this.origin.y > lq.y) return !1
+         } else if (Oq = 1 / this.direction.y, mq = (Yq.y - this.origin.y) * Oq, xq = (lq.y - this.origin.y) * Oq, xq === -1 / 0 && (xq = 1 / 0), mq > xq && (Aq = mq, mq = xq, xq = Aq), cq = Math.max(mq, cq), uq = Math.min(xq, uq), cq > uq) return !1;
+         if (Math.abs(this.direction.z) < 1e-7) {
+ ... (44 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L273-L307` → after: `L314-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L314-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L314-L430) · [Before (L273-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L273-L307)

```diff
-           width: iz,
-           height: lz
-         } = (zz._resolveSize ?? nz)(bz);
-       zz._width = iz, zz._height = lz;
-       const tz = uz._device;
-       bz.format && (zz._colorTexture = tz.createTexture({
-         label: bz.lbl,
-         size: {
-           width: iz,
-           height: lz
-         },
-         format: bz.format,
-         sampleCount: bz.samples,
-         usage: Ez.k.RENDER_ATTACHMENT | Ez.k.TEXTURE_BINDING | Ez.k.COPY_SRC | Ez.k.COPY_DST
-       }), zz._colorView = zz._colorTexture.createView()), bz.dFormat && (zz._depthTexture = tz.createTexture({
-         label: bz.lbl,
- ... (19 more removed lines; see GitHub link above)
+           const Yq = lq.q.Dot(qq.normal, this.origin);
+           return Eq = (-qq.d - Yq) / gq, Eq < 0 ? Eq < -9.99999997475243e-7 ? null : 0 : Eq
+         }
+       }
+       intersectsAxis(qq) {
+         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         switch (qq) {
+           case "y": {
+             const qq = (this.origin.y - Eq) / this.direction.y;
+             return qq > 0 ? null : new lq.q(this.origin.x + this.direction.x * -qq, Eq, this.origin.z + this.direction.z * -qq)
+           }
+           case "x": {
+             const qq = (this.origin.x - Eq) / this.direction.x;
+             return qq > 0 ? null : new lq.q(Eq, this.origin.y + this.direction.y * -qq, this.origin.z + this.direction.z * -qq)
+           }
+           case "z": {
+ ... (101 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L345-L351` → after: `L434-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L434-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L434-L437) · [Before (L345-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L345-L351)

```diff
-     function nz(zz) {
-       let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const bz = uz.compare,
-         nz = uz.lodMinClamp ?? 0,
-         iz = uz.lodMaxClamp ?? 32,
-         lz = void 0 !== bz || 0 !== nz || 32 !== iz ? `${bz??""}:${nz}:${iz}` : "";
-       return (0, Ez.c)(zz, uz, lz)
+     function Wq(qq, Eq, gq, Yq, lq) {
+       let Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       const mq = Bq.Zero();
+       return Nq(qq, Eq, gq, Yq, mq, lq, Oq), mq
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L360-L362` → after: `L440-L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L440-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L440-L454) · [Before (L360-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L360-L362)

```diff
-     function nz(zz) {
-       const uz = Ez ??= new WeakMap;
-       uz.set(zz, (uz.get(zz) ?? 0) + 1)
+     function Nq(qq, Eq, gq, Yq, Oq, mq) {
+       let xq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         Aq = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
+       const cq = qq.Ba();
+       if (!mq && !(mq = qq.activeCamera) && !(mq = qq.cameraToUseForPointers)) return qq;
+       const uq = mq.viewport,
+         Bq = cq.getRenderHeight(),
+         {
+           x: Wq,
+           y: Nq,
+           width: aq,
+           height: Vq
+         } = uq.toGlobal(cq.getRenderWidth(), Bq),
+         dq = 1 / cq.getHardwareScalingLevel();
+       return Eq = Eq * dq - Wq, gq = gq * dq - (Bq - Nq - Vq), Oq.update(Eq, gq, aq, Vq, Yq || lq.e.IdentityReadOnly, xq ? lq.e.IdentityReadOnly : mq.getViewMatrix(), mq.getProjectionMatrix(), Aq), qq
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L365-L366` → after: `L457-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L457-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L457-L459) · [Before (L365-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L365-L366)

```diff
-     function iz(zz) {
-       nz(zz.texture)
+     function aq(qq, Eq, gq, Yq) {
+       const lq = Bq.Zero();
+       return Vq(qq, Eq, gq, lq, Yq), lq
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L386-L399` → after: `L462-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L462-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L462-L476) · [Before (L386-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L386-L399)

```diff
-     function Mz(zz) {
-       let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
-         bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
-       const nz = zz._device,
-         iz = Ez ??= new WeakMap;
-       let Mz = iz.get(nz);
-       Mz || iz.set(nz, Mz = new Map);
-       let tz = bz;
-       for (const Ez in lz) {
-         const zz = Ez;
-         tz += `:${uz[zz]??lz[zz]}`
-       }
-       let Hz = Mz.get(tz);
-       return Hz || Mz.set(tz, Hz = nz.createSampler(uz)), Hz
+     function Vq(qq, Eq, gq, Yq, Oq) {
+       if (!xq.d) return qq;
+       const mq = qq.Ba();
+       if (!Oq && !(Oq = qq.activeCamera) && !(Oq = qq.cameraToUseForPointers)) throw new Error("Active camera not set");
+       const Aq = Oq.viewport,
+         cq = mq.getRenderHeight(),
+         {
+           x: uq,
+           y: Bq,
+           width: Wq,
+           height: Nq
+         } = Aq.toGlobal(mq.getRenderWidth(), cq),
+         aq = lq.e.Identity(),
+         Vq = 1 / mq.getHardwareScalingLevel();
+       return Eq = Eq * Vq - uq, gq = gq * Vq - (cq - Bq - Nq), Yq.update(Eq, gq, Wq, Nq, aq, aq, Oq.getProjectionMatrix()), qq
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L410-L416` → after: `L479-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L479-L480) · [Before (L410-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L410-L416)

```diff
-     function iz(zz, uz) {
-       uz._passes.length = 0, zz._currentProcessedTask = uz;
-       try {
-         uz.record()
-       } finally {
-         zz._currentProcessedTask = null
-       }
+     function dq(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
+       return jq(qq, gq, Yq, Eq(Yq, gq.enableDistantPicking), lq, Oq, mq, xq)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L420-L434` → after: `L483-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L483-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L483-L485) · [Before (L420-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L420-L434)

```diff
-     function Mz(zz) {
-       const uz = zz.worldMatrixVersion;
-       if (zz._viewVer === uz) return zz._viewCache;
-       const bz = zz._viewCache,
-         Ez = zz.worldMatrix,
-         nz = zz._useFloatingOrigin,
-         iz = nz ? 0 : Ez[12],
-         lz = nz ? 0 : Ez[13],
-         Mz = nz ? 0 : Ez[14];
-       return bz[0] = Ez[0], bz[1] = Ez[4], bz[2] = Ez[8], bz[3] = 0, bz[4] = Ez[1], bz[5] = Ez[5], bz[6] = Ez[9], bz[7] = 0, bz[8] = Ez[2], bz[9] = Ez[6], bz[10] = Ez[10], bz[11] = 0, bz[12] = -(Ez[0] * iz + Ez[1] * lz + Ez[2] * Mz), bz[13] = -(Ez[4] * iz + Ez[5] * lz + Ez[6] * M … [truncated]
-     }
-     var tz = null;
- 
-     function Hz(zz) {
-       return zz._projFov === zz.fov && zz._projNear === zz.nearPlane && zz._projFar === zz.farPlane || (zz._projFov = zz.fov, zz._projNear = zz.nearPlane, zz._projFar = zz.farPlane, zz._projRev = (zz._projRev ?? 0) + 1), zz.worldMatrixVersion + (zz._projRev ?? 0)
+     function jq(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
+       const Aq = Eq.intersects(Yq, lq, mq, Oq, gq, xq);
+       return Aq && Aq.hit ? !lq && null != qq && Aq.distance >= qq.distance ? null : Aq : null
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L438-L490` → after: `L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L489) · [Before (L438-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L438-L490)

```diff
-       const bz = Hz(zz);
-       if (zz._projVer === bz && zz._projAspect === uz) return zz._projCache;
-       const Ez = zz._projCache;
-       return null !== tz && zz.ortho ? tz(zz, uz, Ez) : function(zz, uz, bz, Ez, nz) {
-         const iz = 1 / Math.tan(.5 * uz),
-           lz = nz - Ez;
-         zz[0] = iz / bz, zz[5] = iz, zz[10] = -Ez / lz, zz[11] = 1, zz[14] = nz * Ez / lz
-       }(Ez, zz.fov, uz, zz.nearPlane, zz.farPlane), zz._projVer = bz, zz._projAspect = uz, Ez
-     }
-     var pz = bz(40878);
- 
-     function dz(zz, uz, bz) {
-       return zz._device.createBuffer({
-         label: bz,
-         size: (Ez = uz, nz = 16, Math.ceil(Ez / nz) * nz),
-         usage: pz.d.UNIFORM | pz.d.COPY_DST
- ... (37 more removed lines; see GitHub link above)
+       return "InstancedLinesMesh" === qq || "LinesMesh" === qq ? Eq.intersectionThreshold : 0
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L497-L507` → after: `L493-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L493-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L493-L501) · [Before (L497-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L497-L507)

```diff
-       let uz = 0;
-       for (const bz of zz) uz += bz._lightVersion ?? 0;
-       return uz
-     }
- 
-     function rz(zz, uz) {
-       zz.fill(0);
-       let bz = 0;
-       for (const Ez of uz) {
-         if (bz >= wz.b) break;
-         Ez._writeLightUbo && (Ez._writeLightUbo(zz, 4 + 16 * bz), bz++)
+       const Eq = qq.getClassName();
+       if ("GreasedLineMesh" === Eq) return {
+         rawBoundingInfo: null,
+         intersectionThreshold: 0
+       };
+       const gq = qq.rawBoundingInfo;
+       return {
+         rawBoundingInfo: gq,
+         intersectionThreshold: gq ? Hq(Eq, qq) : 0
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L542-L575` → after: `L506-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L506-L507) · [Before (L542-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L542-L575)

```diff
-       zz.fill(0);
-       const iz = function(zz, uz) {
-           const bz = Hz(zz);
-           if (zz._vpVer === bz && zz._vpAspect === uz) return zz._vpCache;
-           const Ez = zz._vpCache;
-           return function(zz, uz, bz, Ez, nz, iz) {
-             const lz = bz[Ez],
-               Mz = bz[Ez + 1],
-               tz = bz[Ez + 2],
-               Hz = bz[Ez + 3],
-               Oz = bz[Ez + 4],
-               pz = bz[Ez + 5],
-               dz = bz[Ez + 6],
-               Fz = bz[Ez + 7],
-               Zz = bz[Ez + 8],
-               Rz = bz[Ez + 9],
- ... (18 more removed lines; see GitHub link above)
+       const Oq = qq(gq, Eq.enableDistantPicking);
+       return Oq.intersectsSphere(Yq.DYq, lq) && Oq.intersectsBox(Yq.boundingBox, lq) ? Oq : null
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L578-L585` → after: `L510-L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L510-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L510-L548) · [Before (L578-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L578-L585)

```diff
-     function xz(zz, uz) {
-       return {
-         _renderables: zz,
-         _opaqueBindings: [],
-         _directBindings: [],
-         _transparentBindings: [],
-         _ob: [],
-         _lastVersion: uz
+     function Qq(qq, Eq, gq, Yq, Oq, mq) {
+       let Aq = null;
+       const cq = !!(qq.activeCameras && qq.activeCameras.length > 1 && qq.cameraToUseForPointers !== qq.activeCamera),
+         Bq = qq.cameraToUseForPointers || qq.activeCamera,
+         Wq = uq.internalPickerForMesh || dq,
+         Nq = Wq === dq;
+       for (let xq = 0; xq < qq.meshes.length; xq++) {
+         const uq = qq.meshes[xq];
+         if (gq) {
+           if (!gq(uq, -1)) continue
+         } else if (!uq.isEnabled() || !uq.isVisible || !uq.yV) continue;
+         const aq = cq && uq.isWorldMatrixCameraDependent(),
+           Vq = uq.computeWorldMatrix(aq, Bq);
+         if (uq.hasThinInstances && uq.eEq) {
+           const qq = Wq(Aq, Eq, uq, Vq, !0, !0, mq);
+           if (qq) {
+ ... (23 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L589-L688` → after: `L553-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L553-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L553-L585) · [Before (L589-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L589-L688)

```diff
-     function Jz(zz, uz, bz) {
-       zz.clr ??= !0;
-       const nz = zz.rt._descriptor,
-         iz = zz.depth?._descriptor,
-         tz = {
-           _colorFormat: nz.format,
-           _depthStencilFormat: iz?.dFormat ?? nz.dFormat,
-           _depthCompare: nz.depthCompare ?? iz?.depthCompare,
-           _sampleCount: nz.samples
-         },
-         Oz = {
-           loadOp: "clear",
-           storeOp: "store"
-         },
-         pz = {
-           ...xz([], -1),
- ... (84 more removed lines; see GitHub link above)
+     function yq(qq, Eq, gq, Yq) {
+       if (!xq.d) return null;
+       const Oq = [],
+         mq = !!(qq.activeCameras && qq.activeCameras.length > 1 && qq.cameraToUseForPointers !== qq.activeCamera),
+         Aq = qq.cameraToUseForPointers || qq.activeCamera,
+         cq = uq.internalPickerForMesh || dq,
+         Bq = cq === dq;
+       for (let xq = 0; xq < qq.meshes.length; xq++) {
+         const uq = qq.meshes[xq];
+         if (gq) {
+           if (!gq(uq, -1)) continue
+         } else if (!uq.isEnabled() || !uq.isVisible || !uq.yV) continue;
+         const Wq = mq && uq.isWorldMatrixCameraDependent(),
+           Nq = uq.computeWorldMatrix(Wq, Aq);
+         if (uq.hasThinInstances && uq.eEq) {
+           if (cq(null, Eq, uq, Nq, !0, !0, Yq)) {
+ ... (17 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L690` → after: `L587-L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L587-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L587-L591) · [Before (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L690)

```diff
-         };
+         } else {
+           const qq = cq(null, Eq, uq, Nq, !1, !1, Yq);
+           qq && Oq.push(qq)
+         }
+       }
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L694-L695` → after: `L595-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L595-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L595-L598) · [Before (L694-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L694-L695)

```diff
-     function Az(zz, uz) {
-       return uz._sortDistance - zz._sortDistance || zz.renderable.order - uz.renderable.order
+     function tq(qq, Eq, gq, Yq, Oq, mq) {
+       if (!xq.d) return null;
+       const Aq = Qq(qq, (Yq => (qq._tempPickingRay || (qq._tempPickingRay = Bq.Zero()), Nq(qq, Eq, gq, Yq, qq._tempPickingRay, mq || null), qq._tempPickingRay)), Yq, Oq, !0);
+       return Aq && (Aq.ray = Wq(qq, Eq, gq, lq.e.Identity(), mq || null)), Aq
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L698-L699` → after: `L601-L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L601-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L601-L603) · [Before (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L698-L699)

```diff
-     function Tz(zz, uz) {
-       return zz.renderable.order - uz.renderable.order
+     function rq(qq, Eq, gq, Yq, Oq, mq, xq) {
+       const Aq = Qq(qq, ((Yq, lq) => (qq._tempPickingRay || (qq._tempPickingRay = Bq.Zero()), Nq(qq, Eq, gq, Yq, qq._tempPickingRay, mq || null, !1, lq), qq._tempPickingRay)), Yq, Oq, !1, xq);
+       return Aq && (Aq.ray = Wq(qq, Eq, gq, lq.e.Identity(), mq || null)), Aq
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L702-L749` → after: `L606-L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L606-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L606-L608) · [Before (L702-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L702-L749)

```diff
-     function Lz(zz) {
-       let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz._renderables,
-         bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         nz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
-         iz = arguments.length > 4 ? arguments[4] : void 0;
-       const lz = zz._config,
-         Mz = lz.rt,
-         tz = zz._batchState,
-         Hz = xz(uz, zz.tK._renderableVersion);
-       if (bz) {
-         const uz = (uz, bz) => {
-           uz && (bz || zz._ownsTargets || uz._eager) && (0, Ez.e)(uz, zz.engine)
-         };
-         uz(Mz), Mz._descriptor.samples > 1 && uz(lz.rst), uz(lz.depth, !0)
-       }
-       const {
- ... (32 more removed lines; see GitHub link above)
+     function vq(qq, Eq, gq, Yq, Oq) {
+       const mq = Qq(qq, (gq => (qq._pickWithRayInverseMatrix || (qq._pickWithRayInverseMatrix = lq.e.Identity()), gq.invertToRef(qq._pickWithRayInverseMatrix), qq._cachedRayForTransform || (qq._cachedRayForTransform = Bq.Zero()), Bq.TransformToRef(Eq, qq._pickWithRayInverseMatrix … [truncated]
+       return mq && (mq.ray = Eq), mq
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L752-L778` → after: `L611-L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L611-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L611-L612) · [Before (L752-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L752-L778)

```diff
-     function Pz(zz, uz) {
-       const bz = zz.engine,
-         Ez = zz._config,
-         iz = Ez.rt,
-         lz = zz.tK,
-         Mz = zz._opaqueBindings,
-         tz = zz._ob,
-         Hz = zz._sceneBG;
-       if (function(zz, uz, bz, Ez) {
-           const nz = uz?.viewport;
-           if (!nz) return;
-           const iz = Math.floor(nz.x * bz),
-             lz = Math.floor((1 - nz.y - nz.height) * Ez),
-             Mz = Math.ceil((nz.x + nz.width) * bz) - iz,
-             tz = Math.ceil((1 - nz.y) * Ez) - lz;
-           zz.setViewport(iz, lz, Mz, tz, 0, 1), zz.setScissorRect(iz, lz, Mz, tz)
- ... (11 more removed lines; see GitHub link above)
+     function hq(qq, Eq, gq, Yq, lq, Oq) {
+       return yq(qq, (Yq => Wq(qq, Eq, gq, Yq, lq || null)), Yq, Oq)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L781-L799` → after: `L615-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L615-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L615-L616) · [Before (L781-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L781-L799)

```diff
-     function Gz(zz, uz) {
-       let bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
-       const Ez = oz(uz, zz.tK)._buffer;
-       if (Ez === zz._lightsUBO) return;
-       const nz = uz._device.createBindGroup({
-         layout: Rz(uz),
-         entries: [{
-           binding: 0,
-           resource: {
-             buffer: zz._sceneUBO
-           }
-         }, {
-           binding: 1,
-           resource: {
-             buffer: Ez
-           }
- ... (3 more removed lines; see GitHub link above)
+     function nq(qq, Eq, gq, Yq) {
+       return yq(qq, (gq => (qq._pickWithRayInverseMatrix || (qq._pickWithRayInverseMatrix = lq.e.Identity()), gq.invertToRef(qq._pickWithRayInverseMatrix), qq._cachedRayForTransform || (qq._cachedRayForTransform = Bq.Zero()), Bq.TransformToRef(Eq, qq._pickWithRayInverseMatrix, qq … [truncated]
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L803-L862` → after: `L620-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L620-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L620-L627) · [Before (L803-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L803-L862)

```diff
-       for (const bz of zz) bz.update?.(uz)
-     }
- 
-     function Vz(zz, uz, bz) {
-       let Ez = null,
-         nz = 0;
-       for (const iz of uz) {
-         const uz = iz.renderable.mesh;
-         uz && !1 === uz.visible || (iz.pipeline !== Ez && (zz.setPipeline(iz.pipeline), Ez = iz.pipeline), nz += iz.draw(zz, bz))
-       }
-       return nz
-     }
- 
-     function mz(zz) {
-       const uz = zz._materialSwapQueue;
-       if (!uz[0] || zz._runtimeBuilds?.w) return;
- ... (44 more removed lines; see GitHub link above)
+       let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
+         Yq = arguments.length > 3 ? arguments[3] : void 0,
+         Oq = arguments.length > 4 ? arguments[4] : void 0;
+       Yq || (Yq = qq.getWorldMatrix()), Eq.length = gq, Oq ? Eq.origin.WG(Oq) : Eq.origin.WG(qq.position);
+       const mq = lq.o.Na[2];
+       mq.set(0, 0, qq._scene.useRightHandedSystem ? -1 : 1);
+       const xq = lq.o.Na[3];
+       return lq.q.TransformNormalToRef(mq, Yq, xq), lq.q.NormalizeToRef(xq, Eq.direction), Eq
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L867-L985` → after: `L631-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L631-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L631-L642) · [Before (L867-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L867-L985)

```diff
-       const bz = zz.engine,
-         nz = {
-           _kind: "tK",
-           surface: zz,
-           clearColor: {
-             r: .2,
-             g: .2,
-             b: .3,
-             a: 1
-           },
-           camera: null,
-           lights: [],
-           meshes: [],
-           animationGroups: [],
-           fog: null,
-           clipPlane: null,
- ... (103 more removed lines; see GitHub link above)
+       Eq && (Eq.prototype.getForwardRay = function() {
+         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
+           Eq = arguments.length > 1 ? arguments[1] : void 0,
+           gq = arguments.length > 2 ? arguments[2] : void 0;
+         return bq(this, new Bq(lq.q.Zero(), lq.q.Zero(), qq), qq, Eq, gq)
+       }, Eq.prototype.getForwardRayToRef = function(qq) {
+         return bq(this, qq, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
+       }), qq && (cq.b._IsPickingAvailable = !0, qq.prototype.createPickingRay = function(qq, Eq, gq, Yq) {
+         return Wq(this, qq, Eq, gq, Yq, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
+       })
+     }
+     Bq._TmpVector3 = (0, Oq.e)(6, lq.q.Zero), Bq._RayDistant = Bq.Zero(), Bq._Smallnum = 1e-8, Bq._Rayl = 1e9
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L987` → after: `L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L644) · [Before (L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L987)

```diff
-   40915: (zz, uz, bz) => {
+   41311: (qq, Eq, gq) => {
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L989-L990` → after: `L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L646) · [Before (L989-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L989-L990)

```diff
-       c: () => Hz,
-       d: () => Oz
+       d: () => Oq.A
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L992-L1056` → after: `L648-L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L648-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L648-L671) · [Before (L992-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L992-L1056)

```diff
-     var Ez = bz(40874),
-       nz = bz(40878),
-       iz = bz(40886),
-       lz = bz(40890),
-       Mz = bz(40893),
-       tz = bz(40898);
- 
-     function Hz(zz, uz, bz) {
-       let Mz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
-       (uz < 1 || bz < 1) && (0, Ez.c)(676, uz, bz);
-       const Hz = zz._device,
-         Oz = Mz.mipMaps ?? !1,
-         pz = Mz.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
-         dz = Oz ? (0, tz.d)(uz, bz) : 1,
-         Fz = Hz.createTexture({
-           size: {
- ... (49 more removed lines; see GitHub link above)
+     var Yq = gq(39838),
+       lq = gq(39951),
+       Oq = gq(41315);
+     let mq = !1;
+     mq || (mq = !0, (0, Oq.e)(Yq.i, lq.e), Yq.i.prototype.createPickingRayToRef = function(qq, Eq, gq, Yq, lq) {
+       let mq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         xq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
+       return (0, Oq.l)(this, qq, Eq, gq, Yq, lq, mq, xq)
+     }, Yq.i.prototype.createPickingRayInCameraSpace = function(qq, Eq, gq) {
+       return (0, Oq.j)(this, qq, Eq, gq)
+     }, Yq.i.prototype.createPickingRayInCameraSpaceToRef = function(qq, Eq, gq, Yq) {
+       return (0, Oq.h)(this, qq, Eq, gq, Yq)
+     }, Yq.i.prototype.pickWithBoundingInfo = function(qq, Eq, gq, Yq, lq) {
+       return (0, Oq.v)(this, qq, Eq, gq, Yq, lq)
+     }, Yq.i.prototype.zW = function(qq, Eq, gq, Yq, lq, mq) {
+       let xq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
+ ... (8 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1058` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L673) · [Before (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L1058)

```diff
-   40911: (zz, uz, bz) => {
+   41324: (qq, Eq, gq) => {
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1060` → after: `L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L675) · [Before (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L1060)

```diff
-       b: () => tz
+       e: () => uq
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1062-L1152` → after: `L677-L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L677-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L677-L766) · [Before (L1062-L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L1062-L1152)

```diff
-     var Ez = bz(40874),
-       nz = bz(40878),
-       iz = bz(40886),
-       lz = bz(40890),
-       Mz = bz(40898);
-     async function tz(zz, uz) {
-       let tz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-       const [Hz, Oz] = function(zz) {
-         const uz = zz,
-           bz = [
-             [uz.displayWidth, uz.displayHeight],
-             [uz.videoWidth, uz.videoHeight],
-             [uz.naturalWidth, uz.naturalHeight],
-             [uz.width, uz.height]
-           ];
-         for (const [Ez, nz] of bz)
- ... (75 more removed lines; see GitHub link above)
+     var Yq = gq(39757),
+       lq = gq(39759),
+       Oq = gq(37139),
+       mq = gq(39995),
+       xq = gq(41329),
+       Aq = gq(39960),
+       cq = gq(37171);
+     let uq = (() => {
+         var qq;
+         let Eq, gq, Aq, cq, uq, Bq, Wq, Nq, aq = xq.e,
+           Vq = [],
+           dq = [],
+           jq = [],
+           Hq = [],
+           oq = [],
+           Pq = [],
+ ... (74 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1154-L1161` → after: `L768-L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L768-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L768-L904) · [Before (L1154-L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L1154-L1161)

```diff
-           }, xz = await (zz._dlr?.x(Rz, pz, dz, fz, sz, oz, Nz, Zz, vz)) ?? await vz(Rz);
-         return (0, iz.d)(xz), xz
-       } catch (Xz) {
-         throw wz.texture?.destroy(), Xz
-       } finally {
-         Kz?.close()
-       }
-     }
+             const lq = this._orthoRight - this._orthoLeft,
+               mq = this._orthoTop - this._orthoBottom,
+               xq = void 0 !== this.shadowMinZ ? this.shadowMinZ : Yq?.minZ || 0,
+               Aq = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : Yq?.maxZ || 1e4,
+               cq = this.ZJ().Ba().vYq;
+             Oq.e.OrthoOffCenterLHToRef(this._orthoLeft - lq * this.shadowOrthoScale, this._orthoRight + lq * this.shadowOrthoScale, this._orthoBottom - mq * this.shadowOrthoScale, this._orthoTop + mq * this.shadowOrthoScale, cq ? Aq : xq, cq ? xq : Aq, qq, this.ZJ().Ba().isNDCHal … [truncated]
+           }
+           _buildUniformLayout() {
+             this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformB … [truncated]
+           }
+           transferToEffect(qq, Eq) {
+             return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, Eq), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this. … [truncated]
+           }
+           transferToNodeMaterialEffect(qq, Eq) {
+             return this.computeTransformedInformation() ? (qq.setFloat3(Eq, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (qq.setFloat3(Eq, this.direction.x, this.direction.y, this.direction.z), this)
+           }
+ ... (121 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1163-L1166` → after: `L906-L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L906-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L906-L908) · [Before (L1163-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L1163-L1166)

```diff
-   40893: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       generateMipmaps: () => Fz,
-       recordMipmaps: () => Zz
+   41338: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => sE
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1168-L1199` → after: `L910-L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L910-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L910-L956) · [Before (L1168-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L1168-L1199)

```diff
-     var Ez = bz(40878),
-       nz = bz(40890),
-       iz = {
-         magFilter: "linear",
-         minFilter: "linear"
-       };
-     var lz = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*ve … [truncated]
-       Mz = null,
-       tz = null,
-       Hz = null,
-       Oz = null,
-       pz = null;
- 
-     function dz(zz) {
-       const uz = zz._device;
-       uz !== pz && (Mz?.clear(), Mz = null, tz = null, Hz = null, Oz = null, pz = null, pz = uz), tz ??= uz.createShaderModule({
- ... (16 more removed lines; see GitHub link above)
+     var Yq = gq(38677),
+       lq = gq(37156),
+       Oq = gq(37139),
+       mq = gq(39879),
+       xq = gq(41340),
+       Aq = gq(37153),
+       cq = gq(40028),
+       uq = gq(37289),
+       Bq = gq(38679),
+       Wq = gq(38649),
+       Nq = gq(37158);
+     class aq {
+       constructor() {
+         this.direction1 = new Oq.q(0, 1, 0), this.direction2 = new Oq.q(0, 1, 0)
+       }
+       startDirectionFunction(qq, Eq, gq, Yq) {
+ ... (31 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1201-L1205` → after: `L958-L1004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L958-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L958-L1004) · [Before (L1201-L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L1201-L1205)

```diff
- 
-     function Fz(zz, uz, bz) {
-       const Ez = zz._device,
-         nz = Ez.createCommandEncoder();
-       Zz(zz, uz, nz, bz), Ez.queue.submit([nz.finish()])
+     class Vq {
+       constructor() {
+         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.radius = qq, this.radiusRange = Eq, this.directionRandomizer = gq
+       }
+       startDirectionFunction(qq, Eq, gq, Yq) {
+         const lq = gq.position.subtract(qq.getTranslation()).normalize(),
+           mq = (0, Nq.RandomRange)(0, this.directionRandomizer),
+           xq = (0, Nq.RandomRange)(0, this.directionRandomizer),
+           Aq = (0, Nq.RandomRange)(0, this.directionRandomizer);
+         lq.x += mq, lq.y += xq, lq.z += Aq, lq.normalize(), Yq ? Eq.WG(lq) : Oq.q.TransformNormalFromFloatsToRef(lq.x, lq.y, lq.z, qq, Eq)
+       }
+       startPositionFunction(qq, Eq, gq, Yq) {
+         const lq = this.radius - (0, Nq.RandomRange)(0, this.radius * this.radiusRange),
+ ... (31 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1207-L1274` → after: `L1006-L1051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1006-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L1006-L1051) · [Before (L1207-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L1207-L1274)

```diff
- 
-     function Zz(zz, uz, bz, Ez) {
-       if (uz.mipLevelCount <= 1) return;
-       const nz = zz._device,
-         iz = function(zz, uz) {
-           const bz = zz._device;
-           dz(zz), Mz ??= new Map;
-           let Ez = Mz.get(uz);
-           return Ez || (Ez = bz.createRenderPipeline({
-             layout: bz.createPipelineLayout({
-               bindGroupLayouts: [Oz]
-             }),
-             vertex: {
-               module: tz,
-               entryPoint: "vs"
-             },
- ... (52 more removed lines; see GitHub link above)
+     class dq {
+       constructor() {
+         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.radius = qq, this.radiusRange = Eq, this.directionRandomizer = gq
+       }
+       startDirectionFunction(qq, Eq, gq, Yq) {
+         const lq = gq.position.subtract(qq.getTranslation()).normalize(),
+           mq = (0, Nq.RandomRange)(0, this.directionRandomizer),
+           xq = (0, Nq.RandomRange)(0, this.directionRandomizer),
+           Aq = (0, Nq.RandomRange)(0, this.directionRandomizer);
+         lq.x += mq, lq.y += xq, lq.z += Aq, lq.normalize(), Yq ? Eq.WG(lq) : Oq.q.TransformNormalFromFloatsToRef(lq.x, lq.y, lq.z, qq, Eq)
+       }
+       startPositionFunction(qq, Eq, gq, Yq) {
+         const lq = this.radius - (0, Nq.RandomRange)(0, this.radius * this.radiusRange),
+ ... (30 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1277-L1280` → after: `L1054-L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1054-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L1054-L1089) · [Before (L1277-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L1277-L1280)

```diff
-   },
-   40898: (zz, uz, bz) => {
-     function Ez(zz, uz) {
-       return Math.floor(Math.log2(Math.max(zz, uz))) + 1
+     class jq extends dq {
+       constructor() {
+         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Oq.q(0, 1, 0),
+           gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Oq.q(0, 1, 0);
+         super(qq), this.direction1 = Eq, this.direction2 = gq
+       }
+       startDirectionFunction(qq, Eq, gq, Yq) {
+         const lq = (0, Nq.RandomRange)(this.direction1.x, this.direction2.x),
+           mq = (0, Nq.RandomRange)(this.direction1.y, this.direction2.y),
+           xq = (0, Nq.RandomRange)(this.direction1.z, this.direction2.z);
+         Yq ? Eq.Vqq(lq, mq, xq) : Oq.q.TransformNormalFromFloatsToRef(lq, mq, xq, qq, Eq)
+       }
+       clone() {
+         const qq = new jq(this.radius, this.direction1, this.direction2);
+         return Wq.b.DeepCopy(this, qq), qq
+ ... (20 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1282-L1332` → after: `L1091-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1091-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L1091-L1156) · [Before (L1282-L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L1282-L1332)

```diff
-     bz.d(uz, {
-       d: () => Ez
-     })
-   },
-   40866: (zz, uz, bz) => {
-     bz.d(uz, {
-       d: () => Hz,
-       f: () => Oz
-     });
-     var Ez = bz(40874),
-       nz = bz(40878),
-       iz = bz(40886),
-       lz = bz(40890),
-       Mz = bz(40893),
-       tz = bz(40898);
- 
- ... (35 more removed lines; see GitHub link above)
+     var Hq = gq(38646);
+     class oq {
+       get radius() {
+         return this._radius
+       }
+       set radius(qq) {
+         this._radius = qq, this._buildHeight()
+       }
+       get angle() {
+         return this._angle
+       }
+       set angle(qq) {
+         this._angle = qq, this._buildHeight()
+       }
+       _buildHeight() {
+         0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
+ ... (50 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1334-L1347` → after: `L1158-L1561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1158-L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/295.js#L1158-L1561) · [Before (L1334-L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/295.js#L1334-L1347)

```diff
- 
-     function Oz(zz, uz, bz, nz) {
-       let iz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
-       (bz < 0 || bz >= uz.layers || (0 | bz) !== bz) && (0, Ez.c)(723, uz.layers, bz);
-       const lz = iz.invertY ?? !0,
-         tz = iz.premultiplyAlpha ?? !1;
-       zz._device.queue.copyExternalImageToTexture({
-         source: nz,
-         flipY: lz
-       }, {
-         texture: uz.texture,
-         origin: [0, 0, bz],
-         premultipliedAlpha: tz
-       }, [uz.width, uz.height, 1]), uz.texture.mipLevelCount > 1 && (0, Mz.generateMipmaps)(zz, uz.texture, bz)
+     class Pq extends oq {
+       constructor() {
+         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
+           gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Oq.q(0, 1, 0),
+           Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Oq.q(0, 1, 0);
+         super(qq, Eq), this.direction1 = gq, this.direction2 = Yq
+       }
+       startDirectionFunction(qq, Eq, gq, Yq) {
+         const lq = (0, Nq.RandomRange)(this.direction1.x, this.direction2.x),
+           mq = (0, Nq.RandomRange)(this.direction1.y, this.direction2.y),
+           xq = (0, Nq.RandomRange)(this.direction1.z, this.direction2.z);
+         Yq ? Eq.Vqq(lq, mq, xq) : Oq.q.TransformNormalFromFloatsToRef(lq, mq, xq, qq, Eq)
+       }
+       clone() {
+         const qq = new Pq(this.radius, this.angle, this.direction1, this.direction2);
+ ... (388 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/296.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/296.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L4)

```diff
-   40972: (zz, uz, bz) => {
+   41459: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L6` → after: `L6-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L6-L11) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L6)

```diff
-       d: () => Hz
+       e: () => Wq,
+       f: () => jq,
+       i: () => Nq,
+       l: () => aq,
+       o: () => oq,
+       r: () => Hq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L8-L16` → after: `L13-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L13-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L13-L18) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L8-L16)

```diff
-     var Ez = bz(36519),
-       nz = bz(36553),
-       iz = bz(39164),
-       lz = bz(36526),
-       Mz = bz(36715);
-     class tz {
-       constructor(zz, uz, bz, Ez) {
-         this.name = zz, this.worldAxisForNormal = uz, this.worldAxisForFileX = bz, this.worldAxisForFileY = Ez
-       }
+     var Yq = gq(41402);
+     var lq = "Babylon Lite v1.32.0",
+       Oq = gq(41467);
+ 
+     function mq(qq) {
+       return "clientWidth" in qq
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L18-L20` → after: `L20-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L20-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L20-L56) · [Before (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L18-L20)

```diff
-     class Hz {
-       static _NearestPow2Floor(zz) {
-         return zz <= 1 ? 1 : 1 << Math.floor(Math.log2(zz))
+     var xq = 1;
+ 
+     function Aq(qq, Eq, gq) {
+       const Aq = Eq.getContext("webgpu");
+       Aq || (0, Yq.d)(54), mq(Eq) && Eq.setAttribute("data-engine", lq);
+       const cq = gq?.format ?? navigator.gpu.getPreferredCanvasFormat(),
+         uq = gq?.srgb ? (Bq = cq).endsWith("-srgb") ? Bq : `${Bq}-srgb` : cq;
+       var Bq;
+       const Wq = gq?.alphaMode ?? "opaque";
+       Aq.configure({
+         device: qq._device,
+         format: cq,
+         alphaMode: Wq,
+         viewFormats: [uq]
+       });
+       const Nq = 1 === gq?.msaaSamples ? 1 : 4,
+ ... (21 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L22-L61` → after: `L58-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L58-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L58-L84) · [Before (L22-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L22-L61)

```diff
-       static ConvertCubeMapTextureToSphericalPolynomial(zz) {
-         if (!zz.isCube) return null;
-         zz.XT()?.uR().flushFramebuffer();
-         const uz = zz.getSize().width,
-           bz = zz._sphericalPolynomialTargetSize,
-           Ez = bz > 0 ? this._NearestPow2Floor(bz) : 0,
-           nz = !zz.noMipmap && !0 === zz._texture?.generateMipMaps,
-           iz = Ez > 0 && Ez < uz && nz,
-           lz = iz ? Math.max(0, Math.round(Math.log2(uz / Ez))) : 0,
-           Mz = iz ? Math.max(1, Math.floor(uz / Math.pow(2, lz))) : uz,
-           tz = zz.readPixels(0, lz, void 0, !1),
-           Hz = zz.readPixels(1, lz, void 0, !1);
-         let Oz, pz;
-         zz.isRenderTarget ? (Oz = zz.readPixels(3, lz, void 0, !1), pz = zz.readPixels(2, lz, void 0, !1)) : (Oz = zz.readPixels(2, lz, void 0, !1), pz = zz.readPixels(3, lz, void 0, !1));
-         const dz = zz.readPixels(4, lz, void 0, !1),
-           Fz = zz.readPixels(5, lz, void 0, !1),
- ... (24 more removed lines; see GitHub link above)
+     }
+ 
+     function cq(qq) {
+       const Eq = qq._context.getCurrentTexture(),
+         gq = qq.scRT;
+       gq._colorTexture = Eq, gq._colorView = Eq.createView({
+         format: qq.format
+       }), gq._width = Eq.width, gq._height = Eq.height
+     }
+ 
+     function uq(qq) {
+       const Eq = qq.canvas;
+       if (!mq(Eq)) return;
+       const gq = qq._w ?? Eq.clientWidth,
+         Yq = qq._h ?? Eq.clientHeight;
+       if (!(gq > 0 && Yq > 0)) return;
+ ... (11 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L63-L64` → after: `L86-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L86-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L86-L118) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L63-L64)

```diff
-       static _AreaElement(zz, uz) {
-         return Math.atan2(zz * uz, Math.sqrt(zz * zz + uz * uz + 1))
+     }
+     var Wq = 0;
+ 
+     function Nq(qq, Eq) {
+       return -1 !== qq._renderingContexts.indexOf(Eq)
+     }
+ 
+     function aq(qq, Eq) {
+       return -1 === qq._renderingContexts.indexOf(Eq) && (qq._renderingContexts.push(Eq), !0)
+     }
+     var Vq = null;
+     var dq = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
+     async function jq(qq, Eq) {
+       const Oq = await navigator.gpu.requestAdapter({
+         powerPreference: "high-performance",
+         ...Vq ? Vq() : {}
+ ... (17 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L66-L90` → after: `L120-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L120-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L120-L129) · [Before (L66-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L66-L90)

```diff
-       static _DownsampleFace(zz, uz, bz, Ez) {
-         const nz = zz instanceof Float32Array ? zz : Float32Array.from(zz),
-           iz = bz * bz * Ez,
-           lz = new Float32Array(iz),
-           Mz = uz / bz,
-           tz = 1 / (Mz * Mz);
-         for (let Oz = 0; Oz < bz; Oz++) {
-           const zz = Math.floor(Oz * Mz),
-             iz = Math.floor((Oz + 1) * Mz);
-           for (let Hz = 0; Hz < bz; Hz++) {
-             const pz = Math.floor(Hz * Mz),
-               dz = Math.floor((Hz + 1) * Mz),
-               Fz = (Oz * bz + Hz) * Ez;
-             for (let bz = 0; bz < Ez; bz++) {
-               let Mz = 0;
-               for (let lz = zz; lz < iz; lz++)
- ... (9 more removed lines; see GitHub link above)
+       let Nq, aq, jq, Hq;
+       if (Wq) {
+         const [{
+           wrapRenderableForFO: qq,
+           lightFoVersion: Eq,
+           applyLightFoOffset: Yq
+         }, {
+           makePackMeshWorld: lq
+         }] = await Promise.all([gq.e(351).then((() => gq(61207))), gq.e(352).then((() => gq(61212)))]);
+         Nq = qq, aq = lq, jq = Eq, Hq = Yq
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L92-L103` → after: `L131-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L131-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L131-L185) · [Before (L92-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L92-L103)

```diff
-       static ConvertCubeMapToSphericalPolynomial(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const bz = uz > 0 ? this._NearestPow2Floor(uz) : 0;
-         if (bz > 0 && zz.size > bz) {
-           const uz = 5 === zz.format ? 4 : 3,
-             Ez = ["right", "left", "up", "down", "front", "back"],
-             nz = {};
-           for (const iz of Ez) nz[iz] = this._DownsampleFace(zz[iz], zz.size, bz, uz);
-           zz = {
-             ...zz,
-             ...nz,
-             size: bz
+       const oq = {
+           _device: xq
+         },
+         Pq = [oq];
+       return Object.assign(oq, {
+         engine: oq,
+         surfaces: Pq,
+         _surfaces: Pq,
+         _device: xq,
+         _options: Eq,
+         drawCallCount: 0,
+         gpuFrameTimeMs: 0,
+         useHighPrecisionMatrix: Bq,
+         useFloatingOrigin: Wq,
+         _animFrameId: 0,
+         _renderFn: null,
+ ... (39 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L106-L139` → after: `L188-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L188-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L188-L191) · [Before (L106-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L106-L139)

```diff
-         const Ez = new iz.c;
-         let tz = 0;
-         const Hz = 2 / zz.size,
-           Oz = Hz,
-           pz = .5 * Hz,
-           dz = pz - 1;
-         for (let iz = 0; iz < 6; iz++) {
-           const uz = this._FileFaces[iz],
-             bz = zz[uz.name];
-           let Fz = dz;
-           const Zz = 5 === zz.format ? 4 : 3;
-           for (let iz = 0; iz < zz.size; iz++) {
-             let Rz = dz;
-             for (let Oz = 0; Oz < zz.size; Oz++) {
-               const dz = uz.worldAxisForFileX.scale(Rz).add(uz.worldAxisForFileY.scale(Fz)).add(uz.worldAxisForNormal);
-               dz.normalize();
- ... (18 more removed lines; see GitHub link above)
+         const Eq = qq._currentEncoder;
+         for (let qq = 0; qq < gq.length; qq++) {
+           const Yq = gq[qq];
+           Yq._captureService?.(Yq, Eq)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L141-L142` → after: `L193-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L193-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L193-L195) · [Before (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L141-L142)

```diff
-         const Fz = 6 * (4 * Math.PI) / 6 / tz;
-         return Ez.scaleInPlace(Fz), Ez.convertIncidentRadianceToIrradiance(), Ez.convertIrradianceToLambertianRadiance(), iz.g.FromHarmonics(Ez)
+         qq._gpuTimerEnd?.(Eq), qq._cbs[0] = Eq.finish(), qq._device.queue.submit(qq._cbs), qq._flushGpuRetirements?.(qq), qq.drawCallCount = Yq, qq._gpuTimerResolve?.()
+       } finally {
+         qq._currentEncoder = void 0
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L147` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L199) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L147)

```diff
-   40967: (zz, uz, bz) => {
+   41406: (qq, Eq, gq) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L149` → after: `L201-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L201-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L201-L203) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L149)

```diff
-       DDSTools: () => Zz
+       b: () => lq,
+       c: () => Oq,
+       f: () => Yq
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L151-L156` → after: `L205-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L205-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L205-L213) · [Before (L151-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L151-L156)

```diff
-     var Ez = bz(36553),
-       nz = bz(38060),
-       iz = bz(40972),
-       lz = bz(39231);
-     const Mz = 131072,
-       tz = 131072;
+     var Yq = globalThis.GPUTextureUsage,
+       lq = globalThis.GPUBufferUsage,
+       Oq = globalThis.GPUShaderStage;
+     globalThis.GPUColorWrite
+   },
+   41489: (qq, Eq, gq) => {
+     function Yq(qq) {
+       lq(qq.splice(0))
+     }
```
