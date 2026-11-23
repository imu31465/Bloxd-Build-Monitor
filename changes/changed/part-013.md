# Changed — Bundle Modifications Report (Part 013 / 050)

- **Updated at**: `2026-11-24T00:42 JST`
- **Part**: `13 / 50` (**310** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 012](part-012.md) · [Part 014 →](part-014.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/248.js` (bbb6l5.0244a119 → w4ddu.56408518 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/248.js` (73 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016)

#### 43. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L349-L350` → after: `L1339-L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1339-L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1339-L1342) · [Before (L349-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L349-L350)

```diff
-         get _lodTextureMid() {
-           return this._texture ? this._texture._lodTextureMid : null
+         this.open = wC, this.nextCells = nC;
+         for (let fC = 0; fC < ZC.length; fC += 3) {
+           const [CC, zC, wC] = [ZC[fC], ZC[fC + 1], ZC[fC + 2]];
+           Kz(this.api.getBlockId(CC, zC, wC)) || QC.add(CC, zC, wC, CZ, Vz)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L352-L353` → after: `L1344-L1351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1344-L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1344-L1351) · [Before (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L352-L353)

```diff
-         get _lodTextureLow() {
-           return this._texture ? this._texture._lodTextureLow : null
+         this.meshes.show(QC.toArray()), this.burst(bC), this.showNext(), this.turn.retry(performance.now())
+       }
+       burst(CC) {
+         const zC = performance.now(),
+           ZC = [];
+         for (const [wC, bC, nC] of CC) {
+           const CC = [wC, bC, nC];
+           this.lastSeenFilled = CC, this.foreseen.delete(CC.join()) || ZC.push(CC)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L355-L362` → after: `L1353-L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1353-L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1353-L1362) · [Before (L355-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L355-L362)

```diff
-         dispose() {
-           if (this._scene) {
-             this._scene.stopAnimation && this._scene.stopAnimation(this), this._scene.removePendingData(this);
-             const qq = this._scene.textures.indexOf(this);
-             if (qq >= 0 && this._scene.textures.splice(qq, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
-               const qq = this._parentContainer.textures.indexOf(this);
-               qq > -1 && this._parentContainer.textures.splice(qq, 1), this._parentContainer = null
-             }
+         const QC = this.isHolding(zC);
+         for (const wC of ZC) {
+           if (this.lastFilled = wC, QC && this.pressFilled) {
+             this.turn.filled(wC, zC);
+             continue
+           }
+           const CC = this.turn.arrived(wC, zC);
+           if (null !== CC) {
+             this.pressFilled = QC;
+             for (const [zC, ZC] of this.foreseen) ZC <= CC && this.foreseen.delete(zC)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L389-L682` → after: `L1365-L1390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1365-L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1365-L1390) · [Before (L389-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L389-L682)

```diff
-       }, (() => {
-         const Oq = "function" === typeof Symbol && Symbol.metadata ? Object.create(zq[Symbol.metadata] ?? null) : void 0;
-         Eq = [(0, lq.M)()], gq = [(0, lq.M)()], cq = [(0, lq.M)()], Bq = [(0, lq.M)()], Nq = [(0, lq.M)("hasAlpha")], aq = [(0, lq.M)("getAlphaFromRGB")], Vq = [(0, lq.M)()], dq = [(0, lq.M)("coordinatesIndex")], jq = [(0, lq.M)()], Hq = [(0, lq.M)("coordinatesMode")], oq = [(0,  … [truncated]
-           kind: "getter",
-           name: "wrapU",
-           static: !1,
-           private: !1,
-           access: {
-             has: qq => "wrapU" in qq,
-             get: qq => qq.wrapU
-           },
-           metadata: Oq
-         }, null, Sq), (0, Yq.f)(qq, null, Pq, {
-           kind: "getter",
-           name: "wrapV",
-           static: !1,
- ... (278 more removed lines; see GitHub link above)
+         this.juice.filled(CC)
+       }
+       showNext() {
+         var CC;
+         const zC = this.api.getPositionView(this.localPlayerId);
+         this.playerCells.splice(0, 1 / 0, ...qZ(zC));
+         const ZC = this.lastFilled;
+         this.nextCell = this.pickNext(null === ZC ? [zC[0], zC[1] + 1, zC[2]] : (0, sz.e)(ZC), (() => !1)), this.outline.show(null !== (CC = this.aimed) && void 0 !== CC ? CC : this.nextCell)
+       }
+       pickNext(CC, zC) {
+         const ZC = this.api.getPositionView(this.localPlayerId),
+           QC = [ZC[0], ZC[1] + Tz.f.Dp * Tz.f.playerEyeToHeightRatio, ZC[2]],
+           wC = nZ(this.api, this.localPlayerId),
+           {
+             nextCells: bC
+           } = this,
+ ... (10 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L684-L711` → after: `L1392-L1453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1392-L1453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1392-L1453) · [Before (L684-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L684-L711)

```diff
-           },
-           metadata: Oq
-         }, WE, NE), Oq && Object.defineProperty(qq, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: Oq
-         })
-       })(), qq.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, qq
-     })();
-     (Bq = aq.prototype).forceSphericalPolynomialsRecompute ?? (Bq.forceSphericalPolynomialsRecompute = (0, Nq.i)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(aq.prototype, "sphericalPolynomial") || Object.defineProperty(aq.prototype, "sph … [truncated]
-   },
-   40233: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => Qq,
-       d: () => oq
- ... (12 more removed lines; see GitHub link above)
+             return nC
+           }(bC, 4, CC, (CC => 1 === bC[CC + 3]), (CC => {
+             const QC = nC(CC);
+             return az(QC, ZC) || this.foreseen.has(QC.join()) || zC(QC)
+           }), (CC => function(CC, zC, ZC) {
+             return (zC[0] + .5 - CC[0]) ** 2 + (zC[1] + .5 - CC[1]) ** 2 + (zC[2] + .5 - CC[2]) ** 2 <= ZC ** 2
+           }(QC, nC(CC), wC)));
+         return -1 === fC ? null : nC(fC)
+       }
+       afterRender(CC) {
+         var zC;
+         this.turn.look(CC);
+         const ZC = this.api.getTargetedBlock();
+         this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === ZC ? null : ZC.position), this.outline.show(null !== (zC = this.aimed) && void 0 !== zC ? zC : this.nextCell)
+       }
+       isHolding(CC) {
+ ... (46 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L714-L735` → after: `L1456-L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1456-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1456-L1464) · [Before (L714-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L714-L735)

```diff
-       let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-       const Yq = Eq.width,
-         lq = Eq.height;
-       if (qq instanceof Float32Array) {
-         let Eq = qq.byteLength / qq.BYTES_PER_ELEMENT;
-         const gq = new Uint8Array(Eq);
-         for (; --Eq >= 0;) {
-           let Yq = qq[Eq];
-           Yq < 0 ? Yq = 0 : Yq > 1 && (Yq = 1), gq[Eq] = 255 * Yq
-         }
-         qq = gq
-       }
-       const Oq = document.createElement("canvas");
-       Oq.width = Yq, Oq.height = lq;
-       const mq = Oq.getContext("2d");
-       if (!mq) return null;
- ... (6 more removed lines; see GitHub link above)
+       return zC % 4 !== 3
+     }
+ 
+     function WZ(CC, zC, ZC, QC, wC) {
+       if (!CC.isBlockInLoadedChunk(zC, QC - 6, ZC) || !CC.isBlockInLoadedChunk(zC, QC + 6 + wC, ZC) || !CC.canModifyBlockAt(zC, QC, ZC)) return NaN;
+       let bC = QC - 1;
+       if (0 !== CC.getBlockId(zC, bC, ZC)) {
+         for (; bC < QC + 6 && 0 !== CC.getBlockId(zC, bC + 1, ZC);) bC++;
+         return bC
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L737` → after: `L1466-L1474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1466-L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1466-L1474) · [Before (L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L737)

```diff
-       return Oq.toDataURL("image/png")
+       for (; bC > QC - 6;)
+         if (bC--, 0 !== CC.getBlockId(zC, bC, ZC)) return bC;
+       return NaN
+     }
+ 
+     function NZ(CC, zC, ZC, QC, wC) {
+       let bC = 0;
+       for (let nC = QC + 1; nC <= QC + wC; nC++) 0 !== CC.getBlockId(zC, nC, ZC) && bC++;
+       return bC
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L741-L758` → after: `L1478-L1479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1478-L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1478-L1479) · [Before (L741-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L741-L758)

```diff
-       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const Yq = qq.getInternalTexture();
-       if (!Yq) return null;
-       const lq = qq._readPixelsSync(Eq, gq);
-       return lq ? aq(lq, qq.getSize(), Yq.invertY) : null
-     }
-     async function dq(qq) {
-       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const Yq = qq.getInternalTexture();
-       if (!Yq) return null;
-       const lq = await qq.readPixels(Eq, gq);
-       return lq ? aq(lq, qq.getSize(), Yq.invertY) : null
-     }
-     var jq = gq(40190),
- ... (2 more removed lines; see GitHub link above)
+       const zC = new Map;
+       for (const nC of CC) {
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L760-L969` → after: `L1481-L1534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1481-L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1481-L1534) · [Before (L760-L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L760-L969)

```diff
-         let Eq, gq, aq, oq, Pq, Qq, yq, tq, rq, vq, hq, nq, bq, iq = xq.d,
-           Zq = [],
-           fq = [],
-           Mq = [],
-           Tq = [],
-           zq = [],
-           Sq = [],
-           pq = [],
-           Gq = [],
-           Lq = [],
-           Jq = [],
-           kq = [],
-           Rq = [],
-           Uq = [],
-           Fq = [],
-           sq = [],
- ... (194 more removed lines; see GitHub link above)
+         if (Number.isNaN(nC)) return null;
+         zC.set(nC, (null !== (ZC = zC.get(nC)) && void 0 !== ZC ? ZC : 0) + 1)
+       }
+       let QC = NaN,
+         wC = 0;
+       for (const [nC, fC] of zC)(fC > wC || fC === wC && nC < QC) && (QC = nC, wC = fC);
+       let bC = 0;
+       for (const nC of CC) bC += Math.abs(nC - QC);
+       return bC
+     }
+ 
+     function gZ(CC, zC, ZC, QC) {
+       const {
+         eye: wC,
+         forward: bC,
+         tanHalfFovX: nC,
+ ... (38 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L971-L1024` → after: `L1536-L1550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1536-L1550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1536-L1550) · [Before (L971-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L971-L1024)

```diff
-               qq && qq._texture && (lq && !Oq && qq._texture._setUniqueId(Eq.internalTextureUniqueId), qq._texture.label = Eq.internalTextureLabel)
-             };
-             return Hq.d.Parse((() => {
-               let lq = !0;
-               if (Eq.noMipmap && (lq = !1), Eq.mirrorPlane) {
-                 const Yq = qq._CreateMirror(Eq.name, Eq.renderTargetSize, gq, lq);
-                 return Yq._waitingRenderList = Eq.renderList, Yq.mirrorPlane = Wq.d.FromArray(Eq.mirrorPlane), mq(Yq), Yq
-               }
-               if (Eq.isRenderTarget && !Eq.base64String) {
-                 let Yq = null;
-                 if (Eq.isCube) {
-                   if (gq.reflectionProbes)
-                     for (let qq = 0; qq < gq.reflectionProbes.length; qq++) {
-                       const Yq = gq.reflectionProbes[qq];
-                       if (Yq.name === Eq.name) return Yq.cubeTexture
-                     }
- ... (38 more removed lines; see GitHub link above)
+               const GC = [];
+               let RC = null,
+                 AC = 1 / 0;
+               for (let xC = 0; xC + QC <= gC; xC++)
+                 for (let CC = 0; CC + bC <= SC; CC++) {
+                   const [zC, wC] = [NC + xC, MC + CC], fC = Math.hypot(zC + QC / 2 - ZC[0], wC + bC / 2 - ZC[2]);
+                   if (fC > qC || nC >= zC - 2 && nC < zC + QC + 2 && oC >= wC - 2 && oC < wC + bC + 2) continue;
+                   GC.length = 0;
+                   let FC = 0;
+                   for (let ZC = 0; ZC < QC; ZC++)
+                     for (let zC = 0; zC < bC; zC++) GC.push(pC[(xC + ZC) * SC + CC + zC]), FC += PC[(xC + ZC) * SC + CC + zC];
+                   const WC = MZ(GC);
+                   if (null === WC) continue;
+                   const gC = fC + 3 * (WC + FC);
+                   gC < AC && (AC = gC, RC = [zC, wC])
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1026-L1032` → after: `L1552-L1594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1552-L1594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1552-L1594) · [Before (L1026-L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L1026-L1032)

```diff
-                 return xq
-               }
-             }), Eq, gq)
-           }
-           static CreateFromBase64String(Eq, gq, Yq, lq, Oq) {
-             let mq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : qq.TRILINEAR_SAMPLINGMODE;
-             return new qq("data:" + gq, Yq, lq, Oq, mq, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, Eq, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0 … [truncated]
+               return RC
+             }(this.api, fC, oC)) && void 0 !== bC ? bC : this.cornerOnTarget(fC)) && void 0 !== QC ? QC : [Math.floor(oC[0]) + 2, Math.floor(oC[2])];
+           this.placing = {
+             id: CC,
+             rotation: nC,
+             corner: [qC, this.playerLevel(), FC],
+             sent: null,
+             refusals: 0,
+             hover: null,
+             drag: null
+           }, this.update(), this.api.sendCommand(`${wC} preview`)
+         }, this.rotate = () => {
+           const {
+             id: CC,
+             rotation: zC,
+             corner: ZC
+ ... (27 more added lines; see GitHub link above)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1034-L1044` → after: `L1596-L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1596-L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1596-L1716) · [Before (L1034-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L1034-L1044)

```diff
-           static LoadFromDataString(Eq, gq, Yq) {
-             let lq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-               Oq = arguments.length > 4 ? arguments[4] : void 0,
-               mq = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-               xq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : qq.TRILINEAR_SAMPLINGMODE,
-               Aq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
-               cq = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
-               uq = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
-               Bq = arguments.length > 10 ? arguments[10] : void 0,
-               Wq = arguments.length > 11 ? arguments[11] : void 0;
-             return "data:" !== Eq.substring(0, 5) && (Eq = "data:" + Eq), new qq(Eq, Yq, Oq, mq, xq, Aq, cq, gq, lq, uq, void 0, void 0, Bq, Wq)
+         }, this.dragTo = (CC, zC) => {
+           const ZC = this.placing.drag,
+             QC = ZC && gZ(ZC.view, CC, zC, ZC.level);
+           null !== ZC && null !== QC && this.moveTo(ZC.corner[0] + Math.round(QC[0] - ZC.ground[0]), ZC.corner[1] + Math.round(QC[1] - ZC.ground[1]))
+         }, this.endDrag = () => {
+           this.placing.drag = null
+         }, this.tap = () => {
+           const CC = this.view;
+           CC.waiting || (CC.blocked ? this.bp({
+             ...CC,
+             refusals: ++this.placing.refusals
+           }) : this.build())
+         }, this.build = () => {
+           const CC = this.placing,
+             {
+               id: zC,
+ ... (105 more added lines; see GitHub link above)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1046-L1228` → after: `L1718-L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1718-L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1718-L1740) · [Before (L1046-L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L1046-L1228)

```diff
-         }, (() => {
-           const Oq = "function" === typeof Symbol && Symbol.metadata ? Object.create(iq[Symbol.metadata] ?? null) : void 0;
-           Eq = [(0, lq.M)()], gq = [(0, lq.M)()], aq = [(0, lq.M)()], oq = [(0, lq.M)()], Pq = [(0, lq.M)()], Qq = [(0, lq.M)()], yq = [(0, lq.M)()], tq = [(0, lq.M)()], rq = [(0, lq.M)()], vq = [(0, lq.M)()], hq = [(0, lq.M)()], nq = [(0, lq.M)()], bq = [(0, lq.M)()], (0, Yq.f)( … [truncated]
-             kind: "getter",
-             name: "isBlocking",
-             static: !1,
-             private: !1,
-             access: {
-               has: qq => "isBlocking" in qq,
-               get: qq => qq.isBlocking
-             },
-             metadata: Oq
-           }, null, Zq), (0, Yq.f)(null, null, Eq, {
-             kind: "field",
-             name: "url",
-             static: !1,
- ... (167 more removed lines; see GitHub link above)
+           of aC(CC, zC).cells) {
+           const [CC, zC, QC] = [ZC[0] + FC[0], ZC[1] + FC[1], ZC[2] + FC[2]];
+           bC.push(CC, zC, QC);
+           const oC = !this.api.canModifyBlockAt(CC, zC, QC),
+             qC = this.api.getBlockId(CC, zC, QC),
+             NC = !Kz(qC) && !hz(this.api.blockNameToBlockId(WC), qC);
+           nC ||= oC, fC += NC ? 1 : 0, oC || NC ? wC.add(CC, zC, QC, CZ, Vz) : wC.add(CC, zC, QC, dz(WC), pZ, rz(WC))
+         }
+         this.chunkWatch.watch(bC), this.meshes.show(wC.toArray());
+         const oC = this.view,
+           qC = GZ(this.placing);
+         (null === oC || void 0 === oC ? void 0 : oC.id) === CC && oC.blocked === nC && oC.toClear === fC && oC.waiting === qC && oC.refusals === QC || this.bp({
+           id: CC,
+           blocked: nC,
+           toClear: fC,
+           waiting: qC,
+ ... (7 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1230-L1231` → after: `L1742-L1746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1742-L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1742-L1746) · [Before (L1230-L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L1230-L1231)

```diff
-     function Qq() {
-       Pq || (Pq = !0, (0, Aq.g)("BABYLON.Texture", oq), Hq.d._TextureParser = oq.Parse)
+     function GZ(CC) {
+       let {
+         sent: zC
+       } = CC;
+       return null !== zC && !zC.timedOut
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1233-L1237` → after: `L1748-L1798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1748-L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1748-L1798) · [Before (L1233-L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L1233-L1237)

```diff
-   },
-   39774: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => Yq
-     });
+     var RZ = ZC(4179),
+       AZ = ZC(38979);
+ 
+     function xZ(CC, zC, ZC) {
+       const QC = [255 * CC, 255 * zC, 255 * ZC],
+         [wC, bC, nC] = QC.map((CC => CC + .4 * (255 - CC)));
+       return {
+         texture: "square_particle",
+         HW: 48,
+         minLifeTime: .3 / AZ.e,
+         maxLifeTime: .55 / AZ.e,
+         minSize: .07,
+         maxSize: .14,
+         minEmitPower: 1,
+         maxEmitPower: 1,
+         emitRate: 0,
+ ... (35 more added lines; see GitHub link above)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1240` → after: `L1801-L1813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1801-L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1801-L1813) · [Before (L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L1240)

```diff
-         this.width = qq, this.height = Eq
+         this.api = CC, this.localPlayerId = zC, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
+       }
+       filled(CC) {
+         if (this.api.particlesEnabled())
+           for (const [zC, ZC, QC, wC, bC, nC] of CC.slice(0, 3)) {
+             const CC = `${wC},${bC},${nC}`;
+             let fC = this.chips.get(CC);
+             void 0 === fC && (fC = this.api.createParticles(xZ(wC, bC, nC), {
+               pos: [zC + .5, ZC + .5, QC + .5]
+             }), this.chips.set(CC, fC));
+             for (let zC = 0; zC < 8; zC++) this.setPoint(zC, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
+             fC.emitPoints([zC + .5, ZC + .5, QC + .5], this.points, 8)
+           }
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1242-L1243` → after: `L1815-L1828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1815-L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1815-L1828) · [Before (L1242-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L1242-L1243)

```diff
-       toString() {
-         return `{W: ${this.width}, H: ${this.height}}`
+       layerDone(CC) {
+         this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
+         const zC = CC.length / 3;
+         if (0 === zC || !this.api.particlesEnabled()) return;
+         const ZC = Math.min(zC, 48),
+           [QC, wC, bC] = [CC[0] + .5, CC[1] + 1, CC[2] + .5];
+         let nC = 0;
+         for (let fC = 0; fC < ZC; fC++) {
+           const oC = 3 * Math.floor(fC * zC / ZC);
+           for (let zC = 0; zC < 2; zC++) this.setPoint(nC++, CC[oC] + Math.random() - QC, CC[oC + 1] + 1 - wC, CC[oC + 2] + Math.random() - bC, .6 + .8 * Math.random())
+         }
+         this.sparkles ??= this.api.createParticles(JZ, {
+           pos: [QC, wC, bC]
+         }), this.sparkles.emitPoints([QC, wC, bC], this.points, nC)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1245-L1246` → after: `L1830-L1833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1830-L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1830-L1833) · [Before (L1245-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L1245-L1246)

```diff
-       getClassName() {
-         return "Size"
+       dispose() {
+         var CC;
+         for (const zC of this.chips.values()) zC.stop();
+         this.chips.clear(), null === (CC = this.sparkles) || void 0 === CC || CC.stop(), this.sparkles = null
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1248-L1250` → after: `L1835-L1936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1835-L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1835-L1936) · [Before (L1248-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L1248-L1250)

```diff
-       getHashCode() {
-         let qq = 0 | this.width;
-         return qq = 397 * qq ^ this.height, qq
+       setPoint(CC, zC, ZC, QC, wC) {
+         const bC = 4 * CC;
+         this.points[bC] = zC, this.points[bC + 1] = ZC, this.points[bC + 2] = QC, this.points[bC + 3] = wC
+       }
+     }
+     var iZ = ZC(1887);
+     const vZ = "SpecialAction1",
+       eZ = "KeyY",
+       hZ = "KeyX";
+ 
+     function KZ(CC) {
+       let {
+         placement: zC
+       } = CC;
+       const ZC = (0, hC.f)(SZ, zC.getView()),
+         {
+ ... (86 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1253` → after: `L1939-L1940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1939-L1940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1939-L1940) · [Before (L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L1253)

```diff
-         this.width = qq.width, this.height = qq.height
+         const zC = this.press;
+         (null === zC || void 0 === zC ? void 0 : zC.id) === CC.id && (this.move(CC), this.end(), !zC.moved && (zC.mouse || CC.atMs - zC.atMs <= 250) && this.placement.tap())
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1255-L1256` → after: `L1942-L1944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1942-L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1942-L1944) · [Before (L1255-L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L1255-L1256)

```diff
-       Vqq(qq, Eq) {
-         return this.width = qq, this.height = Eq, this
+       cancel(CC) {
+         var zC;
+         (null === (zC = this.press) || void 0 === zC ? void 0 : zC.id) === CC && this.end()
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1258-L1259` → after: `L1946-L1951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1946-L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1946-L1951) · [Before (L1258-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L1258-L1259)

```diff
-       set(qq, Eq) {
-         return this.Vqq(qq, Eq)
+       leave(CC) {
+         let {
+           id: zC,
+           mouse: ZC
+         } = CC;
+         ZC && this.placement.endHover(), this.cancel(zC)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1261-L1262` → after: `L1953-L1954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1953-L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1953-L1954) · [Before (L1261-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L1261-L1262)

```diff
-       multiplyByFloats(qq, Eq) {
-         return new Yq(this.width * qq, this.height * Eq)
+       end() {
+         this.press.mouse || this.placement.endDrag(), this.press = null
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1264-L1265` → after: `L1956-L2011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1956-L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1956-L2011) · [Before (L1264-L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L1264-L1265)

```diff
-       clone() {
-         return new Yq(this.width, this.height)
+     }
+ 
+     function EZ(CC) {
+       let {
+         placement: zC
+       } = CC;
+       return null === (0, hC.f)(SZ, zC.getView()) ? null : (0, DC.jsx)(lZ, {
+         placement: zC
+       })
+     }
+ 
+     function lZ(CC) {
+       let {
+         placement: zC
+       } = CC;
+       (0, mZ.b)(!0, !0, "PlotsPlacementLayer");
+ ... (40 more added lines; see GitHub link above)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1267-L1268` → after: `L2013-L2128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R2013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L2013-L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L2013-L2128) · [Before (L1267-L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L1267-L1268)

```diff
-       equals(qq) {
-         return !!qq && (this.width === qq.width && this.height === qq.height)
+     }
+     var cZ = ZC(2318),
+       uZ = ZC(36564),
+       rZ = ZC(1877),
+       sZ = ZC(1209);
+     const TZ = {
+       own: "crown",
+       shared: "user-group",
+       other: "house"
+     };
+ 
+     function aZ(CC) {
+       let {
+         hud: zC
+       } = CC;
+       const ZC = (0, hC.f)(Fz, zC.getPlot()),
+ ... (100 more added lines; see GitHub link above)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1270-L1271` → after: `L2130-L2172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R2130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L2130-L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L2130-L2172) · [Before (L1270-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L1270-L1271)

```diff
-       get surface() {
-         return this.width * this.height
+     }
+     const yZ = {
+       house: {
+         icon: "house",
+         titleKey: "plotsGame:starterLotHouseTitle",
+         desktop: jZ("starterLotHouseHint", ["alt-fire"]),
+         touch: jZ("starterLotHouseHint", ["alt-fire"]),
+         plainKey: "plotsGame:starterLotHousePlain"
+       },
+       garden: {
+         icon: "sparkle",
+         titleKey: "plotsGame:starterLotGarden",
+         desktop: jZ("starterLotGardenHint", ["alt-fire"]),
+         touch: jZ("starterLotGardenHint", ["alt-fire"]),
+         plainKey: "plotsGame:starterLotGardenPlain"
+       },
+ ... (27 more added lines; see GitHub link above)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1273-L1274` → after: `L2174-L2187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R2174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L2174-L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L2174-L2187) · [Before (L1273-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L1273-L1274)

```diff
-       static Zero() {
-         return new Yq(0, 0)
+     };
+ 
+     function LZ(CC, zC, ZC) {
+       const {
+         translationKey: QC,
+         actions: wC
+       } = ZC ? zC.touch : zC.desktop;
+       if (0 === wC.length) return CC(QC);
+       const bC = [];
+       for (const nC of wC) {
+         const QC = (0, iZ.l)(nC, ZC),
+           wC = iZ.o[nC][0];
+         if (null === QC && void 0 === wC) return CC(zC.plainKey);
+         bC.push(null === QC ? (0, iZ.h)(wC) : CC(QC.translationKey))
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1276-L1277` → after: `L2189-L2333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R2189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L2189-L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L2189-L2333) · [Before (L1276-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L1276-L1277)

```diff
-       add(qq) {
-         return new Yq(this.width + qq.width, this.height + qq.height)
+       return CC(QC, {
+         key: bC.join("")
+       })
+     }
+ 
+     function UZ(CC) {
+       let {
+         hud: zC
+       } = CC;
+       const ZC = (0, hC.f)(qz, zC.getStep()),
+         {
+           t: QC
+         } = (0, YC.y)();
+       return (0, DC.jsxs)(nz.c, {
+         placement: "bottom",
+         children: ["step" === ZC[0] && (0, DC.jsx)(BZ, {
+ ... (129 more added lines; see GitHub link above)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1279-L1280` → after: `L2335-L2348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R2335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L2335-L2348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L2335-L2348) · [Before (L1279-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L1279-L1280)

```diff
-       subtract(qq) {
-         return new Yq(this.width - qq.width, this.height - qq.height)
+     }
+   },
+   38979: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => QC,
+       g: () => bC
+     });
+     const QC = 1 / .6,
+       wC = {
+         kind: "smokePuff"
+       };
+     class bC {
+       constructor(CC, zC, ZC) {
+         this.style = CC, this.HW = zC, this.half = ZC, this.particles = null, this.lastFrame = -1
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1282-L1283` → after: `L2350-L2384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R2350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L2350-L2384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L2350-L2384) · [Before (L1282-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L1282-L1283)

```diff
-       scale(qq) {
-         return new Yq(this.width * qq, this.height * qq)
+       emit(CC, zC, ZC) {
+         let bC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
+         return ZC !== this.lastFrame && (this.lastFrame = ZC, this.particles || (this.particles = CC.createParticles(function(CC, zC) {
+           const [
+             [ZC, bC, nC],
+             [fC, oC, qC]
+           ] = CC.colours;
+           return {
+             texture: CC.soft ? wC : "square_particle",
+             HW: zC,
+             minLifeTime: CC.life[0] / QC,
+             maxLifeTime: CC.life[1] / QC,
+             minEmitPower: CC.power[0] * QC,
+             maxEmitPower: CC.power[1] * QC,
+             minSize: CC.size[0],
+             maxSize: CC.size[1],
+ ... (19 more added lines; see GitHub link above)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1285-L1288` → after: `L2386-L2388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R2386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L2386-L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L2386-L2388) · [Before (L1285-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L1285-L1288)

```diff
-       static Lerp(qq, Eq, gq) {
-         const lq = qq.width + (Eq.width - qq.width) * gq,
-           Oq = qq.height + (Eq.height - qq.height) * gq;
-         return new Yq(lq, Oq)
+       dispose() {
+         var CC;
+         null === (CC = this.particles) || void 0 === CC || CC.stop(), this.particles = null
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/249.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/249.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/249.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/249.js#L4-L7)

```diff
-   39980: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq,
-       f: () => xq
+   39621: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       playDocsSound: () => fC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L9-L15` → after: `L8-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L8-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/249.js#L8-L31) · [Before (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/249.js#L9-L15)

```diff
-     var Yq = gq(38653),
-       lq = gq(39779),
-       Oq = gq(39951),
-       mq = {};
-     class xq {
-       constructor(qq) {
-         this.attachedToElement = !1, this.attached = {}, this.camera = qq, this.checkInputs = () => {}
+     var QC = ZC(4797),
+       wC = ZC(36641),
+       bC = ZC(1149);
+     const nC = new Map;
+ 
+     function fC(CC, zC, ZC, fC, oC) {
+       let qC, FC = null,
+         WC = 0,
+         NC = 0;
+       if (zC) qC = new QC.Howl({
+         src: [`${bC.clientSideServerUrls.staticUrl}/sounds/music/${CC}.mp3`],
+         html5: !0,
+         volume: ZC
+       });
+       else {
+         var MC;
+ ... (8 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L17-L24` → after: `L33-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L33-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/249.js#L33-L73) · [Before (L17-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/249.js#L17-L24)

```diff
-       add(qq) {
-         const Eq = qq.getSimpleName();
-         this.attached[Eq] ? Yq.b.Warn("camera input of type " + Eq + " already exists on camera") : (this.attached[Eq] = qq, qq.camera = this.camera, qq.checkInputs && (this.checkInputs = this._addCheckInputs(qq.checkInputs.bind(qq))), this.attachedToElement && qq.attachControl(t … [truncated]
-       }
-       remove(qq) {
-         for (const Eq in this.attached) {
-           const gq = this.attached[Eq];
-           if (gq === qq) return gq.detachControl(), gq.camera = null, delete this.attached[Eq], void this.rebuildInputCheck()
+       const gC = zC ? qC.play() : qC.play(CC);
+       qC.volume(ZC, gC), fC > 0 && qC.seek(WC + fC, gC);
+       const SC = () => zC ? qC.duration() : NC;
+       let pC = !1;
+       const PC = CC => {
+           pC || (pC = !0, qC.off("play", GC, gC), qC.off("end", RC, gC), qC.off("loaderror", xC), qC.off("playerror", AC, gC), zC && qC.unload(), oC.onEnd(CC))
+         },
+         GC = () => {
+           oC.onPlay(SC())
+         },
+         RC = () => {
+           PC(!1)
+         },
+         AC = (zC, ZC) => {
+           console.error(`Could not play docs sound ${CC}`, ZC), PC(!0)
+         },
+ ... (25 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/250.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/250.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/250.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/250.js#L4-L6)

```diff
-   39941: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => hq
+   39626: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       default: () => LC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L8-L51` → after: `L8-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L8-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/250.js#L8-L144) · [Before (L8-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/250.js#L8-L51)

```diff
-     var Yq = gq(39757),
-       lq = gq(39759),
-       Oq = gq(37139),
-       mq = gq(39943),
-       xq = gq(39980),
-       Aq = gq(39921),
-       cq = gq(39845);
-     let uq = (() => {
-       var qq;
-       let Eq, gq, mq, xq, uq, Bq, Wq, Nq, aq, Vq, dq, jq = [],
-         Hq = [],
-         oq = [],
-         Pq = [],
-         Qq = [],
-         yq = [],
-         tq = [],
- ... (28 more removed lines; see GitHub link above)
+     ZC(6473);
+     var QC = ZC(48),
+       wC = ZC(39635),
+       bC = ZC(39902),
+       nC = ZC(40031),
+       fC = ZC(40076),
+       oC = ZC(40092),
+       qC = ZC(37138),
+       FC = ZC(36961),
+       WC = ZC(40219),
+       NC = ZC(40281),
+       MC = (ZC(40308), ZC(1169)),
+       gC = ZC(184),
+       SC = ZC(1143),
+       pC = ZC(20),
+       PC = ZC(2734),
+ ... (121 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L53-L570` → after: `L146-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L146-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/250.js#L146-L188) · [Before (L53-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/250.js#L53-L570)

```diff
-               } else if (-1 !== this.keysUp.indexOf(gq.keyCode) || -1 !== this.keysDown.indexOf(gq.keyCode) || -1 !== this.keysLeft.indexOf(gq.keyCode) || -1 !== this.keysRight.indexOf(gq.keyCode) || -1 !== this.keysUpward.indexOf(gq.keyCode) || -1 !== this.keysDownward.indexOf(g … [truncated]
-               const Eq = this._keys.indexOf(gq.keyCode);
-               Eq >= 0 && this._keys.splice(Eq, 1), qq || gq.preventDefault()
-             }
-           })))
-         }
-         detachControl() {
-           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
-         }
-         checkInputs() {
-           if (this._onKeyboardObserver) {
-             const qq = this.camera,
-               Eq = qq.movement.input,
-               gq = Eq.getEntry("keyboard", "translate"),
-               Yq = Eq.getEntry("keyboard", "rotate"),
-               lq = Yq?.sensitivity ?? 1,
- ... (502 more removed lines; see GitHub link above)
+                 const QC = (0 - CC[WC]) / zC[WC],
+                   nC = (ZC[WC] - CC[WC]) / zC[WC];
+                 wC = Math.max(wC, Math.min(QC, nC)), bC = Math.min(bC, Math.max(QC, nC))
+               }
+               if (wC > bC) return null;
+               const nC = [0, 1, 2].map((QC => Math.min(ZC[QC] - 1, Math.max(0, Math.floor(CC[QC] + zC[QC] * wC))))),
+                 fC = [0, 1, 2].map((CC => Math.sign(zC[CC]))),
+                 oC = [0, 1, 2].map((ZC => {
+                   if (0 === fC[ZC]) return 1 / 0;
+                   return ((fC[ZC] > 0 ? nC[ZC] + 1 : nC[ZC]) - CC[ZC]) / zC[ZC]
+                 })),
+                 qC = [0, 1, 2].map((CC => 0 === fC[CC] ? 1 / 0 : Math.abs(1 / zC[CC])));
+               let FC = null;
+               for (;;) {
+                 const CC = QC(nC[0], nC[1], nC[2]);
+                 if (CC >= 1) return nC;
+ ... (27 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L572-L582` → after: `L190-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L190-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/250.js#L190-L261) · [Before (L572-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/250.js#L572-L582)

```diff
-           metadata: Oq
-         }, null, aq), (0, Yq.f)(qq, null, gq, {
-           kind: "setter",
-           name: "wheelYMoveRelative",
-           static: !1,
-           private: !1,
-           access: {
-             has: qq => "wheelYMoveRelative" in qq,
-             set: (qq, Eq) => {
-               qq.wheelYMoveRelative = Eq
-             }
+           onZoomChange: Iz
+         });
+       (0, QC.useEffect)((() => {
+         const CC = qz.current;
+         if (!CC) return;
+         let zC;
+         try {
+           zC = function(CC, zC) {
+             const ZC = new wC.d(CC, !0, {
+                 stencil: !1
+               }, !0),
+               QC = new bC.e(ZC),
+               [MC, gC, SC] = AC.L;
+             QC.clearColor = new qC.e(MC / 255, gC / 255, SC / 255, 1);
+             const pC = new nC.d("Heatmap3DCamera", FC.Eg.Zero(), QC);
+             pC.fov = zC, pC.minZ = .05;
+ ... (56 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L584-L594` → after: `L263-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/250.js#L263-L264) · [Before (L584-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/250.js#L584-L594)

```diff
-           metadata: Oq
-         }, null, aq), (0, Yq.f)(qq, null, mq, {
-           kind: "setter",
-           name: "wheelZMoveRelative",
-           static: !1,
-           private: !1,
-           access: {
-             has: qq => "wheelZMoveRelative" in qq,
-             set: (qq, Eq) => {
-               qq.wheelZMoveRelative = Eq
-             }
+           ZC = () => {
+             Gz.current && (Gz.current = !1, Pz(!1))
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L596-L606` → after: `L266-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L266-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/250.js#L266-L359) · [Before (L596-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/250.js#L596-L606)

```diff
-           metadata: Oq
-         }, null, aq), (0, Yq.f)(qq, null, xq, {
-           kind: "setter",
-           name: "wheelXRotateRelative",
-           static: !1,
-           private: !1,
-           access: {
-             has: qq => "wheelXRotateRelative" in qq,
-             set: (qq, Eq) => {
-               qq.wheelXRotateRelative = Eq
-             }
+           QC = zC => {
+             const ZC = !rz.current.canLock && document.activeElement === CC && 0 !== (1 & zC.buttons);
+             if (document.pointerLockElement !== CC && !ZC) return;
+             const QC = rz.current.mouseSensitivity * eC;
+             hz((CC => function(CC, zC, ZC) {
+               const QC = 2 * Math.PI;
+               return {
+                 ...CC,
+                 heading: ((CC.heading + zC) % QC + QC) % QC,
+                 pitch: Math.max(-cC, Math.min(cC, CC.pitch + ZC))
+               }
+             }(null !== CC && void 0 !== CC ? CC : rz.current.fittedView, zC.movementX * QC, zC.movementY * QC)))
+           };
+         return document.addEventListener("pointerlockchange", zC), document.addEventListener("pointerlockerror", ZC), document.addEventListener("pointermove", QC), () => {
+           document.removeEventListener("pointerlockchange", zC), document.removeEventListener("pointerlockerror", ZC), document.removeEventListener("pointermove", QC), document.pointerLockElement === CC && (0, JC.e)()
+         }
+ ... (78 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L608-L618` → after: `L361-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L361-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/250.js#L361-L372) · [Before (L608-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/250.js#L608-L618)

```diff
-           metadata: Oq
-         }, null, aq), (0, Yq.f)(qq, null, Aq, {
-           kind: "setter",
-           name: "wheelYRotateRelative",
-           static: !1,
-           private: !1,
-           access: {
-             has: qq => "wheelYRotateRelative" in qq,
-             set: (qq, Eq) => {
-               qq.wheelYRotateRelative = Eq
-             }
+           tabIndex: 0,
+           "aria-label": LC("3D heatmap"),
+           onClick: () => {
+             const CC = qz.current;
+             if (null === CC) return;
+             if (CC.focus({
+                 preventScroll: !0
+               }), gz || !pz) return;
+             const zC = CC.requestPointerLock();
+             zC instanceof Promise ? zC.catch((CC => {
+               CC instanceof DOMException && ("WrongDocumentError" === CC.name || "NotSupportedError" === CC.name) && Pz(!1)
+             })) : Gz.current = !0
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L620-L630` → after: `L374-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L374-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/250.js#L374-L381) · [Before (L620-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/250.js#L620-L630)

```diff
-           metadata: Oq
-         }, null, aq), (0, Yq.f)(qq, null, cq, {
-           kind: "setter",
-           name: "wheelZRotateRelative",
-           static: !1,
-           private: !1,
-           access: {
-             has: qq => "wheelZRotateRelative" in qq,
-             set: (qq, Eq) => {
-               qq.wheelZRotateRelative = Eq
-             }
+           ...Tz,
+           onKeyDown: CC => {
+             if (xz && hC.has(CC.code)) return CC.preventDefault(), void(() => {
+               const CC = qz.current;
+               null !== CC && document.pointerLockElement === CC ? (0, JC.e)() : null === CC || void 0 === CC || CC.blur()
+             })();
+             const zC = KC[CC.code];
+             return xz && void 0 !== zC ? (CC.preventDefault(), void aC(zC)) : xz && (0, xC.d)("replayPlayPause", CC.code) && !(0, xC.d)("Zoom", CC.code) ? (CC.preventDefault(), void(CC.repeat || DC())) : xz && CC.code === YC ? (CC.preventDefault(), void tC()) : xz && CC.code ===  … [truncated]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L632-L642` → after: `L383-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L383-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/250.js#L383-L384) · [Before (L632-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/250.js#L632-L642)

```diff
-           metadata: Oq
-         }, null, aq), (0, Yq.f)(qq, null, uq, {
-           kind: "setter",
-           name: "wheelXMoveScene",
-           static: !1,
-           private: !1,
-           access: {
-             has: qq => "wheelXMoveScene" in qq,
-             set: (qq, Eq) => {
-               qq.wheelXMoveScene = Eq
-             }
+           onFocus: () => {
+             Az(!0)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L644-L654` → after: `L386-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L386-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/250.js#L386-L409) · [Before (L644-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/250.js#L644-L654)

```diff
-           metadata: Oq
-         }, null, aq), (0, Yq.f)(qq, null, Bq, {
-           kind: "setter",
-           name: "wheelYMoveScene",
-           static: !1,
-           private: !1,
-           access: {
-             has: qq => "wheelYMoveScene" in qq,
-             set: (qq, Eq) => {
-               qq.wheelYMoveScene = Eq
-             }
+           onBlur: () => {
+             Az(!1), Tz.onBlur()
+           }
+         }), Nz && (0, IC.jsx)("div", {
+           className: "StudioHeatmap3DUnavailable SmallTextLight",
+           children: LC("3D view isn't available in this browser.")
+         }), xz && (0, IC.jsx)("div", {
+           className: "StudioHeatmap3DCrosshair"
+         }), (0, IC.jsx)("div", {
+           className: "StudioHeatmap3DCoordinates SmallTextLight",
+           children: uz.position.map(((CC, zC) => (CC + Kz[zC]).toFixed(2))).join(" ")
+         }), iz && (0, IC.jsx)(UC, {
+           heading: uz.heading,
+           pitch: uz.pitch,
+           onViewFrom: CC => {
+             const zC = fz(CC, -1),
+ ... (8 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L656-L666` → after: `L411-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L411-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/250.js#L411-L417) · [Before (L656-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/250.js#L656-L666)

```diff
-           metadata: Oq
-         }, null, aq), (0, Yq.f)(qq, null, Wq, {
-           kind: "setter",
-           name: "wheelZMoveScene",
-           static: !1,
-           private: !1,
-           access: {
-             has: qq => "wheelZMoveScene" in qq,
-             set: (qq, Eq) => {
-               qq.wheelZMoveScene = Eq
-             }
+           onTurn: (CC, zC) => {
+             hz((ZC => function(CC, zC, ZC, QC) {
+               return Qz(CC, zC, {
+                 heading: CC.heading + ZC * jC,
+                 pitch: Math.max(-cC, Math.min(cC, CC.pitch + QC * jC))
+               })
+             }(null !== ZC && void 0 !== ZC ? ZC : rz.current.fittedView, wz(Xz), CC, zC)))
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L668-L811` → after: `L419-L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L419-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/250.js#L419-L609) · [Before (L668-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/250.js#L668-L811)

```diff
-           metadata: Oq
-         }, null, aq), Oq && Object.defineProperty(qq, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: Oq
-         })
-       })(), qq
-     })();
-     xq.d.FreeCameraMouseWheelInput = jq;
-     let Hq = (() => {
-       var qq;
-       let Eq, gq, mq = [],
-         xq = [],
-         Aq = [],
-         uq = [];
- ... (128 more removed lines; see GitHub link above)
+           onFlip: () => {
+             hz((CC => function(CC, zC) {
+               return Qz(CC, zC, {
+                 heading: CC.heading + Math.PI,
+                 pitch: -CC.pitch
+               })
+             }(null !== CC && void 0 !== CC ? CC : rz.current.fittedView, wz(Xz))))
+           }
+         }), null !== sz && (0, IC.jsx)("div", {
+           className: "StudioHeatmapMapReadout SmallTextLight",
+           children: null === yC ? LC("studio:heatmapBlockReadout", {
+             x: sz.x,
+             y: sz.y,
+             z: sz.z,
+             count: (0, MC.Z)(sz.value)
+           }) : yC(sz.x, sz.y, sz.z, sz.value)
+ ... (175 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L813-L814` → after: `L611-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L611-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/250.js#L611-L657) · [Before (L813-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/250.js#L813-L814)

```diff
-       addTouch() {
-         return this.add(new Hq), this
+       nC.sort(((CC, zC) => bC[zC] - bC[CC]));
+       const fC = new Float32Array(3 * ZC.count),
+         oC = new Float32Array(4 * ZC.count);
+       nC.forEach(((CC, zC) => {
+         fC.set(ZC.VS.subarray(3 * CC, 3 * CC + 3), 3 * zC), oC.set(ZC.colours.subarray(4 * CC, 4 * CC + 4), 4 * zC)
+       })), OC(CC.translucentCells, fC, oC, ZC.count), CC.needsRender = !0
+     }
+ 
+     function VC(CC, zC) {
+       const ZC = (ZC, QC, wC) => new FC.Eg(0 === ZC ? CC[0] : zC[0], 0 === QC ? CC[1] : zC[1], 0 === wC ? CC[2] : zC[2]),
+         QC = [];
+       for (const wC of [0, 1])
+         for (const CC of [0, 1]) QC.push([ZC(0, wC, CC), ZC(1, wC, CC)], [ZC(wC, 0, CC), ZC(wC, 1, CC)], [ZC(wC, CC, 0), ZC(wC, CC, 1)]);
+       return QC
+     }
+ 
+ ... (31 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L816-L817` → after: `L659-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L659-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/250.js#L659-L669) · [Before (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/250.js#L816-L817)

```diff
-       clear() {
-         super.clear(), this._mouseInput = null
+     }
+ 
+     function Qz(CC, zC, ZC) {
+       const QC = bz(CC),
+         wC = bz(ZC),
+         bC = nz(CC.position, fz(zC, -1)),
+         nC = [0, 1, 2].reduce(((CC, zC) => nz(CC, fz(wC[zC], oz(bC, QC[zC])))), [0, 0, 0]);
+       return {
+         position: nz(zC, nC),
+         heading: ZC.heading,
+         pitch: ZC.pitch
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L819-L1033` → after: `L671-L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L671-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/250.js#L671-L697) · [Before (L819-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/250.js#L819-L1033)

```diff
-     }(oq = tq.prototype).addDeviceOrientation ?? (oq.addDeviceOrientation = (0, yq.i)("FreeCameraInputsManager", "addDeviceOrientation")), (Pq = tq.prototype).addVirtualJoystick ?? (Pq.addVirtualJoystick = (0, yq.i)("FreeCameraInputsManager", "addVirtualJoystick")), (Qq = tq.prot … [truncated]
-     var rq = gq(39653),
-       vq = gq(37171);
-     let hq = (() => {
-         var qq;
-         let Eq, gq, xq, Aq, uq = mq.h,
-           Bq = [],
-           Wq = [],
-           Nq = [],
-           aq = [],
-           Vq = [],
-           dq = [],
-           jq = [],
-           Hq = [];
-         return qq = class extends uq {
-           get angularSensibility() {
- ... (199 more removed lines; see GitHub link above)
+     }
+ 
+     function wz(CC) {
+       return fz(nz(CC.min, CC.max), .5)
+     }
+ 
+     function bz(CC) {
+       const zC = Cz(CC),
+         ZC = zz(CC.heading);
+       return [zC, ZC, qz(zC, ZC)]
+     }
+ 
+     function nz(CC, zC) {
+       return [CC[0] + zC[0], CC[1] + zC[1], CC[2] + zC[2]]
+     }
+ 
+ ... (11 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/251.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/251.js` (155 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L4)

```diff
-   39995: (qq, Eq, gq) => {
+   40042: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L6)

```diff
-       c: () => Wq
+       d: () => pC,
+       h: () => RC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L8-L16` → after: `L9-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L9-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L9-L21) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L8-L16)

```diff
-     var Yq = gq(39757),
-       lq = gq(39759),
-       Oq = gq(37139),
-       mq = gq(37289),
-       xq = gq(39960),
-       Aq = gq(39870),
-       cq = gq(37171),
-       uq = gq(39938),
-       Bq = gq(39779);
+     var QC = ZC(39811),
+       wC = ZC(39818),
+       bC = ZC(39925),
+       nC = ZC(36987),
+       fC = ZC(36963),
+       oC = ZC(40046),
+       qC = ZC(38507),
+       FC = ZC(37002),
+       WC = ZC(39694),
+       NC = ZC(37931),
+       MC = ZC(37590),
+       gC = ZC(39774),
+       SC = ZC(39842);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L18-L19` → after: `L23-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L23-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L23-L28) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L18-L19)

```diff
-       var qq, Eq;
-       let gq, Wq, Nq, aq, Vq, dq, jq, Hq, oq, Pq, Qq, yq, tq, rq = xq.c,
+       var CC;
+       let zC, ZC, FC, pC, PC, GC, RC, AC, xC, JC, IC, iC, vC, eC, hC, KC, YC, dC, mC = oC.d,
+         HC = [],
+         EC = [],
+         lC = [],
+         XC = [],
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L42-L43` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L51-L52) · [Before (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L42-L43)

```diff
-         get range() {
-           return this._range
+         get position() {
+           return this._position
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L45-L46` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L54-L55) · [Before (L45-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L45-L46)

```diff
-         set range(qq) {
-           this._range = qq, this._inverseSquaredRange = 1 / (this.range * this.range)
+         set position(CC) {
+           this._position = CC
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L48-L49` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L57-L58) · [Before (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L48-L49)

```diff
-         get intensityMode() {
-           return this._intensityMode
+         set upVector(CC) {
+           this._upVector = CC
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L51-L52` → after: `L60-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L60-L61) · [Before (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L51-L52)

```diff
-         set intensityMode(qq) {
-           this._intensityMode = qq, this._computePhotometricScale()
+         get upVector() {
+           return this._upVector
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L54-L58` → after: `L63-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L63-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L63-L71) · [Before (L54-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L54-L58)

```diff
-         get radius() {
-           return this._radius
-         }
-         set radius(qq) {
-           this._radius = qq, this._computePhotometricScale()
+         get screenArea() {
+           let zC, ZC;
+           if (this.mode === CC.PERSPECTIVE_CAMERA) this.fovMode === CC.FOVMODE_VERTICAL_FIXED ? (ZC = 2 * this.minZ * Math.tan(this.fov / 2), zC = this.mg().getAspectRatio(this) * ZC) : (zC = 2 * this.minZ * Math.tan(this.fov / 2), ZC = zC / this.mg().getAspectRatio(this));
+           else {
+             const CC = this.mg().getRenderWidth() / 2,
+               QC = this.mg().getRenderHeight() / 2;
+             zC = (this.orthoRight ?? CC) - (this.orthoLeft ?? -CC), ZC = (this.orthoTop ?? QC) - (this.orthoBottom ?? -QC)
+           }
+           return zC * ZC
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L60-L61` → after: `L73-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L73-L75) · [Before (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L60-L61)

```diff
-         get renderPriority() {
-           return (0, Yq.b)(this, Eq, "f")
+         set orthoLeft(CC) {
+           this._orthoLeft = CC;
+           for (const zC of this._rigCameras) zC.orthoLeft = CC
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L63-L64` → after: `L77-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L77-L78) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L63-L64)

```diff
-         set renderPriority(qq) {
-           (0, Yq.e)(this, Eq, qq, "f")
+         get orthoLeft() {
+           return this._orthoLeft
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L66-L67` → after: `L80-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L80-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L80-L82) · [Before (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L66-L67)

```diff
-         get shadowEnabled() {
-           return this._shadowEnabled
+         set orthoRight(CC) {
+           this._orthoRight = CC;
+           for (const zC of this._rigCameras) zC.orthoRight = CC
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L69-L70` → after: `L84-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L84-L85) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L69-L70)

```diff
-         set shadowEnabled(qq) {
-           this._shadowEnabled !== qq && (this._shadowEnabled = qq, this._markMeshesAsLightDirty())
+         get orthoRight() {
+           return this._orthoRight
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L72-L73` → after: `L87-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L87-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L87-L89) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L72-L73)

```diff
-         get includedOnlyMeshes() {
-           return this._includedOnlyMeshes
+         set orthoBottom(CC) {
+           this._orthoBottom = CC;
+           for (const zC of this._rigCameras) zC.orthoBottom = CC
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L75-L76` → after: `L91-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L91-L92) · [Before (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L75-L76)

```diff
-         set includedOnlyMeshes(qq) {
-           this._includedOnlyMeshes = qq, this._hookArrayForIncludedOnly(qq)
+         get orthoBottom() {
+           return this._orthoBottom
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L78-L79` → after: `L94-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L94-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L94-L96) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L78-L79)

```diff
-         get excludedMeshes() {
-           return this._excludedMeshes
+         set orthoTop(CC) {
+           this._orthoTop = CC;
+           for (const zC of this._rigCameras) zC.orthoTop = CC
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L81-L82` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L98-L99) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L81-L82)

```diff
-         set excludedMeshes(qq) {
-           this._excludedMeshes = qq, this._hookArrayForExcluded(qq)
+         get orthoTop() {
+           return this._orthoTop
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L84-L85` → after: `L101-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L101-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L101-L103) · [Before (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L84-L85)

```diff
-         get excludeWithLayerMask() {
-           return this._excludeWithLayerMask
+         setFocalLength(CC) {
+           let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
+           this.fov = 2 * Math.atan(zC / (2 * CC))
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L87-L88` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L105-L106) · [Before (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L87-L88)

```diff
-         set excludeWithLayerMask(qq) {
-           this._excludeWithLayerMask = qq, this._resyncMeshes()
+         get inertia() {
+           return this._baseInertia
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L90-L91` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L108-L109) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L90-L91)

```diff
-         get includeOnlyWithLayerMask() {
-           return this._includeOnlyWithLayerMask
+         set inertia(CC) {
+           this._baseInertia = CC
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L93-L94` → after: `L111-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L111-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L111-L113) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L93-L94)

```diff
-         set includeOnlyWithLayerMask(qq) {
-           this._includeOnlyWithLayerMask = qq, this._resyncMeshes()
+         set mode(CC) {
+           this._mode = CC;
+           for (const zC of this._rigCameras) zC.mode = CC
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L96-L97` → after: `L115-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L115-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L115-L116) · [Before (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L96-L97)

```diff
-         get lightmapMode() {
-           return this._lightmapMode
+         get mode() {
+           return this._mode
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L99-L100` → after: `L118-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L118-L119) · [Before (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L99-L100)

```diff
-         set lightmapMode(qq) {
-           this._lightmapMode !== qq && (this._lightmapMode = qq, this._markMeshesAsLightDirty())
+         get hasMoved() {
+           return this._hasMoved
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L102-L103` → after: `L121-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L121-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L121-L123) · [Before (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L102-L103)

```diff
-         getViewMatrix(qq) {
-           return null
+         constructor(zC, ZC, wC) {
+           let oC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+           (0, gC.e)(), super(zC, wC, !1), this.inputs = (0, QC.n)(this, HC), this._position = (0, QC.n)(this, EC, fC.r.Zero()), this._upVector = ((0, QC.n)(this, lC), (0, QC.n)(this, XC, fC.r.Up())), this.oblique = ((0, QC.n)(this, cC), null), this._orthoLeft = null, this._orthoR … [truncated]
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L105-L106` → after: `L125-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L125-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L125-L126) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L105-L106)

```diff
-         getProjectionMatrix(qq, Eq) {
-           return null
+         storeState() {
+           return this._stateStored = !0, this._storedFov = this.fov, this
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L108-L109` → after: `L128-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L128-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L128-L129) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L108-L109)

```diff
-         constructor(gq, lq, Oq) {
-           super(gq, lq, !1), this.diffuse = ((0, Yq.i)(this, vq), (0, Yq.i)(this, hq, new mq.d(1, 1, 1))), this.specular = ((0, Yq.i)(this, nq), (0, Yq.i)(this, bq, new mq.d(1, 1, 1))), this.falloffType = ((0, Yq.i)(this, iq), (0, Yq.i)(this, Zq, qq.FALLOFF_DEFAULT)), this.intens … [truncated]
+         hasStateStored() {
+           return !!this._stateStored
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L111-L112` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L131-L132) · [Before (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L111-L112)

```diff
-         transferTexturesToEffect(qq, Eq) {
-           return this
+         _restoreStateValues() {
+           return !!this._stateStored && (this.fov = this._storedFov, !0)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L114-L127` → after: `L134-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L134-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L134-L135) · [Before (L114-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L114-L127)

```diff
-         _bindLight(qq, Eq, gq, Yq) {
-           let lq = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
-           const Oq = qq.toString();
-           let xq = !1;
-           if (this._uniformBuffer.bindToEffect(gq, "Light" + Oq), this._renderId !== Eq.getRenderId() || this._lastUseSpecular !== Yq || !this._uniformBuffer.useUbo) {
-             this._renderId = Eq.getRenderId(), this._lastUseSpecular = Yq;
-             const qq = this.getScaledIntensity();
-             this.transferToEffect(gq, Oq), this.diffuse.scaleToRef(qq, mq.k.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", mq.k.Color3[0], this.range, Oq), Yq && (this.specular.scaleToRef(qq, mq.k.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", mq.k. … [truncated]
-           }
-           if (this.transferTexturesToEffect(gq, Oq), Eq.shadowsEnabled && this.shadowEnabled && lq) {
-             const qq = this.getShadowGenerator(Eq.activeCamera) ?? this.getShadowGenerator();
-             qq && (qq.bindShadowLight(Oq, gq), xq = !0)
-           }
-           xq ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
+         restoreState() {
+           return !!this._restoreStateValues() && (this.onRestoreStateObservable.notifyObservers(this), !0)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L130` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L138) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L130)

```diff
-           return "Light"
+           return "cp"
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L134` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L142) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L134)

```diff
-           if (Eq += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
+           if (zC += ", type: " + this.getClassName(), this.animations)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L138-L139` → after: `L146-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L146-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L146-L148) · [Before (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L138-L139)

```diff
-         _syncParentEnabledState() {
-           super._syncParentEnabledState(), this.bM() || this._resyncMeshes()
+         applyVerticalCorrection() {
+           const CC = this.absoluteRotation.toEulerAngles();
+           this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -CC.x : CC.x
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L141-L142` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L150-L151) · [Before (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L141-L142)

```diff
-         hG(qq) {
-           super.hG(qq), this._resyncMeshes()
+         get globalPosition() {
+           return this._globalPosition
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L144-L146` → after: `L153-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L153-L154) · [Before (L144-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L144-L146)

```diff
-         getShadowGenerator() {
-           let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
-           return null === this._shadowGenerators ? null : this._shadowGenerators.get(qq) ?? null
+         getActiveMeshes() {
+           return this._activeMeshes
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L148-L149` → after: `L156-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L156-L157) · [Before (L148-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L148-L149)

```diff
-         getShadowGenerators() {
-           return this._shadowGenerators
+         isActiveMesh(CC) {
+           return -1 !== this._activeMeshes.indexOf(CC)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L151-L152` → after: `L159-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L159-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L159-L164) · [Before (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L151-L152)

```diff
-         getAbsolutePosition() {
-           return Oq.q.Zero()
+         isReady() {
+           let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+           if (CC)
+             for (const zC of this._postProcesses)
+               if (zC && !zC.isReady()) return !1;
+           return super.isReady(CC)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L154-L155` → after: `L166-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L166-L167) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L154-L155)

```diff
-         canAffectMesh(qq) {
-           return !qq || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(qq)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(qq)) && ((0 === this.includeOnlyWithLayerMask | … [truncated]
+         _initCache() {
+           super._initCache(), this._cache.position = new fC.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new fC.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = voi … [truncated]
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L157-L164` → after: `L169-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L169-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L169-L212) · [Before (L157-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L157-L164)

```diff
-         dispose(qq) {
-           let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-           if (this._shadowGenerators) {
-             const qq = this._shadowGenerators.values();
-             for (let Eq = qq.next(); !0 !== Eq.done; Eq = qq.next()) {
-               Eq.value.dispose()
-             }
-             this._shadowGenerators = null
+         _updateCache(CC) {
+           CC || super._updateCache(), this._cache.position.Av(this.position), this._cache.upVector.Av(this.upVector)
+         }
+         _isSynchronized() {
+           return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
+         }
+         _isSynchronizedViewMatrix() {
+           return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
+         }
+         _isSynchronizedProjectionMatrix() {
+           const zC = this.ignoreCameraMaxZ ? 0 : this.maxZ;
+           let ZC = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === zC;
+           if (!ZC) return !1;
+           const QC = this.mg();
+           return this.mode === CC.PERSPECTIVE_CAMERA ? ZC = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === QC.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (ZC = this._cache.orthoLeft == … [truncated]
+         }
+ ... (28 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L166-L168` → after: `L214-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L214-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L214-L250) · [Before (L166-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L166-L168)

```diff
-           if (this.ZJ().stopAnimation(this), this._parentContainer) {
-             const qq = this._parentContainer.lights.indexOf(this);
-             qq > -1 && this._parentContainer.lights.splice(qq, 1), this._parentContainer = null
+         }
+         attachPostProcess(CC) {
+           let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+           return !CC.isReusable() && this._postProcesses.indexOf(CC) > -1 ? (qC.c.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == zC || zC < 0 ? this._postProcesses.push(CC) : null === this._postProcesses[zC] ? this._postProcesses[zC] = CC : … [truncated]
+         }
+         detachPostProcess(CC) {
+           const zC = this._postProcesses.indexOf(CC); - 1 !== zC && (this._postProcesses[zC] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.YzC(), this._cascadePostProcessesToRigCams()
+         }
+         getWorldMatrix() {
+           return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
+         }
+         _getViewMatrix() {
+           return fC.b.Identity()
+         }
+         getViewMatrix(CC) {
+           return !CC && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.Km().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams & … [truncated]
+ ... (21 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L170-L171` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L252) · [Before (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L170-L171)

```diff
-           for (const gq of this.ZJ().meshes) gq._removeLightSource(this, !0);
-           this._uniformBuffer.dispose(), this.ZJ().removeLight(this), super.dispose(qq, Eq)
+           return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L173-L174` → after: `L254-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L254-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L254-L255) · [Before (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L173-L174)

```diff
-         getTypeID() {
-           return 0
+         getTransformationMatrix() {
+           return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L176-L177` → after: `L257-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L257-L258) · [Before (L176-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L176-L177)

```diff
-         getScaledIntensity() {
-           return this._photometricScale * this.intensity
+         _computeObliqueDistance(CC) {
+           return (this.radius || (this.target ? fC.r.Distance(this.position, this.target) : this.position.length())) + CC
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L179-L184` → after: `L260-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L260-L261) · [Before (L179-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L179-L184)

```diff
-         clone(Eq) {
-           let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-           const Yq = qq.GetConstructorFromName(this.getTypeID(), Eq, this.ZJ());
-           if (!Yq) return null;
-           const lq = Bq.d.Clone(Yq, this);
-           return Eq && (lq.name = Eq), gq && (lq.parent = gq), lq.hG(this.isEnabled()), this.onClonedObservable.notifyObservers(lq), lq
+         _updateFrustumPlanes() {
+           this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? MC.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = MC.e.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L186-L190` → after: `L263-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L263-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L263-L289) · [Before (L186-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L186-L190)

```diff
-         serialize() {
-           const qq = Bq.d.Serialize(this);
-           if (qq.uniqueId = this.uniqueId, qq.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(qq), this.excludedMeshes.length > 0) {
-             qq.excludedMeshesIds = [];
-             for (const Eq of this.excludedMeshes) qq.excludedMeshesIds.push(Eq.id)
+         isInFrustum(CC) {
+           let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+           if (this._updateFrustumPlanes(), zC && this.rigCameras.length > 0) {
+             let zC = !1;
+             for (const ZC of this.rigCameras) ZC._updateFrustumPlanes(), zC = zC || CC.isInFrustum(ZC._frustumPlanes);
+             return zC
+           }
+           return CC.isInFrustum(this._frustumPlanes)
+         }
+         isCompletelyInFrustum(CC) {
+           return this._updateFrustumPlanes(), CC.isCompletelyInFrustum(this._frustumPlanes)
+         }
+         getForwardRay() {
+           throw (0, WC.i)("Ray")
+         }
+         getForwardRayToRef(CC) {
+ ... (11 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L192-L194` → after: `L291-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L291-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L291-L298) · [Before (L192-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L192-L194)

```diff
-           if (this.includedOnlyMeshes.length > 0) {
-             qq.includedOnlyMeshesIds = [];
-             for (const Eq of this.includedOnlyMeshes) qq.includedOnlyMeshesIds.push(Eq.id)
+           if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
+           else if (this.cameraRigMode !== CC.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
+           else {
+             let CC = this._postProcesses.length;
+             for (; --CC >= 0;) {
+               const zC = this._postProcesses[CC];
+               zC && zC.dispose(this)
+             }
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L196` → after: `L300-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L300-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L300-L302) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L196)

```diff
-           return Bq.d.AppendSerializedAnimations(this, qq), qq.zV = this.serializeAnimationRanges(), qq.isEnabled = this.isEnabled(), qq
+           let QC = this.customRenderTargets.length;
+           for (; --QC >= 0;) this.customRenderTargets[QC].dispose();
+           this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.Km().mg().releaseRenderPassId(this.renderPassId), super.dispose(zC, ZC)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L198-L200` → after: `L304-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L304-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L304-L305) · [Before (L198-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L198-L200)

```diff
-         static GetConstructorFromName(qq, Eq, gq) {
-           const Yq = xq.c.Construct("Light_Type_" + qq, Eq, gq);
-           return Yq || null
+         get isLeftCamera() {
+           return this._isLeftCamera
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L202-L248` → after: `L307-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L307-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L307-L308) · [Before (L202-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L202-L248)

```diff
-         static Parse(Eq, gq) {
-           let Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
-           const lq = qq.GetConstructorFromName(Eq.type, Eq.name, gq);
-           if (!lq) return null;
-           const Oq = Bq.d.Parse(lq, Eq, gq, Yq);
-           if (Eq.excludedMeshesIds && (Oq._excludedMeshesIds = Eq.excludedMeshesIds), Eq.includedOnlyMeshesIds && (Oq._includedOnlyMeshesIds = Eq.includedOnlyMeshesIds), void 0 !== Eq.parentId && (Oq._waitingParentId = Eq.parentId), void 0 !== Eq.parentInstanceIndex && (Oq._waiti … [truncated]
-             for (let qq = 0; qq < Eq.animations.length; qq++) {
-               const gq = Eq.animations[qq],
-                 Yq = (0, cq.e)("BABYLON.Animation");
-               Yq && Oq.animations.push(Yq.Parse(gq))
-             }
-             xq.c.ParseAnimationRanges(Oq, Eq, gq)
-           }
-           return Eq.autoAnimate && gq.beginAnimation(Oq, Eq.autoAnimateFrom, Eq.autoAnimateTo, Eq.autoAnimateLoop, Eq.autoAnimateSpeed || 1), void 0 !== Eq.isEnabled && Oq.hG(Eq.isEnabled), Oq._onParsed(Eq, gq, Yq), Oq
-         }
-         _onParsed(qq, Eq) {}
- ... (31 more removed lines; see GitHub link above)
+         get isRightCamera() {
+           return this._isRightCamera
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L250-L252` → after: `L310-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L310-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L310-L311) · [Before (L250-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L250-L252)

```diff
-         _resyncMeshes() {
-           if (!this._clusteredContainer)
-             for (const qq of this.ZJ().meshes) qq._resyncLightSource(this)
+         get leftCamera() {
+           return this._rigCameras.length < 1 ? null : this._rigCameras[0]
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L254-L255` → after: `L313-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L313-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L313-L314) · [Before (L254-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L254-L255)

```diff
-         _markMeshesAsLightDirty() {
-           for (const qq of this.ZJ().meshes) - 1 !== qq.lightSources.indexOf(this) && qq._markSubMeshesAsLightDirty()
+         get rightCamera() {
+           return this._rigCameras.length < 2 ? null : this._rigCameras[1]
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L257-L258` → after: `L316-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L316-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L316-L317) · [Before (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L257-L258)

```diff
-         _computePhotometricScale() {
-           this._photometricScale = this._getPhotometricScale(), this.ZJ().resetCachedMaterial()
+         getLeftTarget() {
+           return this._rigCameras.length < 1 ? null : this._rigCameras[0].getTarget()
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L260-L293` → after: `L319-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L319-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L319-L334) · [Before (L260-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L260-L293)

```diff
-         _getPhotometricScale() {
-           let Eq = 0;
-           const gq = this.getTypeID();
-           let Yq = this.intensityMode;
-           switch (Yq === qq.INTENSITYMODE_AUTOMATIC && (Yq = gq === qq.LIGHTTYPEID_DIRECTIONALLIGHT ? qq.INTENSITYMODE_ILLUMINANCE : qq.INTENSITYMODE_LUMINOUSINTENSITY), gq) {
-             case qq.LIGHTTYPEID_POINTLIGHT:
-             case qq.LIGHTTYPEID_SPOTLIGHT:
-               switch (Yq) {
-                 case qq.INTENSITYMODE_LUMINOUSPOWER:
-                   Eq = 1 / (4 * Math.PI);
-                   break;
-                 case qq.INTENSITYMODE_LUMINOUSINTENSITY:
-                   Eq = 1;
-                   break;
-                 case qq.INTENSITYMODE_LUMINANCE:
-                   Eq = this.radius * this.radius
- ... (18 more removed lines; see GitHub link above)
+         getRightTarget() {
+           return this._rigCameras.length < 2 ? null : this._rigCameras[1].getTarget()
+         }
+         setCameraRigMode(zC, ZC) {
+           if (this.cameraRigMode !== zC) {
+             for (; this._rigCameras.length > 0;) {
+               const CC = this._rigCameras.pop();
+               CC && CC.dispose()
+             }
+             if (this.cameraRigMode = zC, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = ZC.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== CC.RI … [truncated]
+               const CC = this.createRigCamera(this.name + "_L", 0);
+               CC && (CC._isLeftCamera = !0);
+               const zC = this.createRigCamera(this.name + "_R", 1);
+               zC && (zC._isRightCamera = !0), CC && zC && (this._rigCameras.push(CC), this._rigCameras.push(zC))
+             }
+             this._setRigMode(ZC), this._cascadePostProcessesToRigCams(), this.update()
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L297-L299` → after: `L337-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L337-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L337-L378) · [Before (L297-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L297-L299)

```diff
-         _reorderLightsInScene() {
-           const qq = this.ZJ();
-           0 != this._renderPriority && (qq.requireLightSorting = !0), this.ZJ().sortLightsByPriority()
+         _setRigMode(CC) {}
+         _getVRProjectionMatrix() {
+           return fC.b.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.mg().isNDCHalfZRange), this._cameraRigParams.vrW … [truncated]
+         }
+         setCameraRigParameter(CC, zC) {
+           this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[CC] = zC, "interaxialDistance" === CC && (this._cameraRigParams.stereoHalfAngle = zC / .0637 * (Math.PI / 180))
+         }
+         createRigCamera(CC, zC) {
+           return null
+         }
+         _updateRigCameras() {
+           for (let CC = 0; CC < this._rigCameras.length; CC++) this._rigCameras[CC].minZ = this.minZ, this._rigCameras[CC].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[CC].fov = this.fov, this._rigCameras[CC].upVector.Av(this.upVector);
+           this.cameraRigMode === CC.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
+         }
+         _setupInputs() {}
+         serialize() {
+ ... (26 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L301-L302` → after: `L380-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L380-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L380-L381) · [Before (L301-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L301-L302)

```diff
-         areLightTexturesReady() {
-           return !0
+         computeWorldMatrix() {
+           return this.getWorldMatrix()
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L304-L305` → after: `L383-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L383-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L383-L385) · [Before (L304-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L304-L305)

```diff
-         _isReady() {
-           return !0
+         _calculateHandednessMultiplier() {
+           let CC = this.Km().useRightHandedSystem ? -1 : 1;
+           return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (CC *= -1), CC
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L307` → after: `L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L387) · [Before (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L307)

```diff
-       }, Eq = new WeakMap, (() => {
+       }, (() => {
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L309` → after: `L389-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L389-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L389-L419) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L309)

```diff
-         gq = [(0, lq.o)()], Wq = [(0, lq.o)()], Nq = [(0, lq.M)()], aq = [(0, lq.M)()], Vq = [(0, lq.M)()], dq = [(0, lq.M)()], jq = [(0, lq.M)()], Hq = [(0, lq.M)()], oq = [(0, lq.f)("_reorderLightsInScene")], Pq = [(0, lq.M)("shadowEnabled")], Qq = [(0, lq.M)("excludeWithLayerM … [truncated]
+         zC = [(0, wC.J)("position")], ZC = [(0, wC.J)("upVector")], FC = [(0, wC.M)()], pC = [(0, wC.M)()], PC = [(0, wC.M)()], GC = [(0, wC.M)()], RC = [(0, wC.M)()], AC = [(0, wC.M)()], xC = [(0, wC.M)()], JC = [(0, wC.M)()], IC = [(0, wC.M)()], iC = [(0, wC.M)()], vC = [(0, wC … [truncated]
+           kind: "getter",
+           name: "orthoLeft",
+           static: !1,
+           private: !1,
+           access: {
+             has: CC => "orthoLeft" in CC,
+             get: CC => CC.orthoLeft
+           },
+           metadata: bC
+         }, null, HC), (0, QC.j)(CC, null, pC, {
+           kind: "getter",
+           name: "orthoRight",
+           static: !1,
+           private: !1,
+           access: {
+ ... (15 more added lines; see GitHub link above)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L311` → after: `L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L421) · [Before (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L311)

```diff
-           name: "range",
+           name: "orthoTop",
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L315-L316` → after: `L425-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L425-L426) · [Before (L315-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L315-L316)

```diff
-             has: qq => "range" in qq,
-             get: qq => qq.range
+             has: CC => "orthoTop" in CC,
+             get: CC => CC.orthoTop
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L319` → after: `L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L429) · [Before (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L319)

```diff
-         }, null, vq), (0, Yq.f)(qq, null, dq, {
+         }, null, HC), (0, QC.j)(CC, null, IC, {
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L321` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L431) · [Before (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L321)

```diff
-           name: "intensityMode",
+           name: "inertia",
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L325-L326` → after: `L435-L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L435-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L435-L436) · [Before (L325-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L325-L326)

```diff
-             has: qq => "intensityMode" in qq,
-             get: qq => qq.intensityMode
+             has: CC => "inertia" in CC,
+             get: CC => CC.inertia
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L329` → after: `L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L439) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L329)

```diff
-         }, null, vq), (0, Yq.f)(qq, null, jq, {
+         }, null, HC), (0, QC.j)(CC, null, iC, {
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L331` → after: `L441-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L441-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L441-L464) · [Before (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L331)

```diff
-           name: "radius",
+           name: "mode",
+           static: !1,
+           private: !1,
+           access: {
+             has: CC => "mode" in CC,
+             get: CC => CC.mode
+           },
+           metadata: bC
+         }, null, HC), (0, QC.j)(null, null, zC, {
+           kind: "field",
+           name: "_position",
+           static: !1,
+           private: !1,
+           access: {
+             has: CC => "_position" in CC,
+             get: CC => CC._position,
+ ... (8 more added lines; see GitHub link above)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L335-L336` → after: `L468-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L468-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L468-L472) · [Before (L335-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L335-L336)

```diff
-             has: qq => "radius" in qq,
-             get: qq => qq.radius
+             has: CC => "_upVector" in CC,
+             get: CC => CC._upVector,
+             set: (CC, zC) => {
+               CC._upVector = zC
+             }
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L339-L341` → after: `L475-L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L475-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L475-L477) · [Before (L339-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L339-L341)

```diff
-         }, null, vq), (0, Yq.f)(qq, null, oq, {
-           kind: "accessor",
-           name: "renderPriority",
+         }, XC, cC), (0, QC.j)(null, null, RC, {
+           kind: "field",
+           name: "fov",
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L345-L346` → after: `L481-L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L481-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L481-L482) · [Before (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L345-L346)

```diff
-             has: qq => "renderPriority" in qq,
-             get: qq => qq.renderPriority,
+             has: CC => "fov" in CC,
+             get: CC => CC.fov,
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L348` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L484) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L348)

```diff
-               qq.renderPriority = Eq
+               CC.fov = zC
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L352` → after: `L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L488) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L352)

```diff
-         }, pq, Gq), (0, Yq.f)(null, null, gq, {
+         }, uC, rC), (0, QC.j)(null, null, AC, {
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L354` → after: `L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L490) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L354)

```diff
-           name: "diffuse",
+           name: "projectionPlaneTilt",
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L358-L359` → after: `L494-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L494-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L494-L495) · [Before (L358-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L358-L359)

```diff
-             has: qq => "diffuse" in qq,
-             get: qq => qq.diffuse,
+             has: CC => "projectionPlaneTilt" in CC,
+             get: CC => CC.projectionPlaneTilt,
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L361` → after: `L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L497) · [Before (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L361)

```diff
-               qq.diffuse = Eq
+               CC.projectionPlaneTilt = zC
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L365` → after: `L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L501) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L365)

```diff
-         }, hq, nq), (0, Yq.f)(null, null, Wq, {
+         }, sC, TC), (0, QC.j)(null, null, xC, {
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L367` → after: `L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L503) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L367)

```diff
-           name: "specular",
+           name: "minZ",
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L371-L372` → after: `L507-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L507-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L507-L508) · [Before (L371-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L371-L372)

```diff
-             has: qq => "specular" in qq,
-             get: qq => qq.specular,
+             has: CC => "minZ" in CC,
+             get: CC => CC.minZ,
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L374` → after: `L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L510) · [Before (L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L374)

```diff
-               qq.specular = Eq
+               CC.minZ = zC
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L378` → after: `L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L514) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L378)

```diff
-         }, bq, iq), (0, Yq.f)(null, null, Nq, {
+         }, aC, tC), (0, QC.j)(null, null, JC, {
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L380` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L516) · [Before (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L380)

```diff
-           name: "falloffType",
+           name: "maxZ",
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L384-L385` → after: `L520-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L520-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L520-L521) · [Before (L384-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L384-L385)

```diff
-             has: qq => "falloffType" in qq,
-             get: qq => qq.falloffType,
+             has: CC => "maxZ" in CC,
+             get: CC => CC.maxZ,
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L387` → after: `L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L523) · [Before (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L387)

```diff
-               qq.falloffType = Eq
+               CC.maxZ = zC
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L391` → after: `L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L527) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L391)

```diff
-         }, Zq, fq), (0, Yq.f)(null, null, aq, {
+         }, DC, jC), (0, QC.j)(null, null, vC, {
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L393` → after: `L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L529) · [Before (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L393)

```diff
-           name: "intensity",
+           name: "layerMask",
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L397-L398` → after: `L533-L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L533-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L533-L534) · [Before (L397-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L397-L398)

```diff
-             has: qq => "intensity" in qq,
-             get: qq => qq.intensity,
+             has: CC => "layerMask" in CC,
+             get: CC => CC.layerMask,
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L400` → after: `L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L536) · [Before (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L400)

```diff
-               qq.intensity = Eq
+               CC.layerMask = zC
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L404` → after: `L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L540) · [Before (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L404)

```diff
-         }, Mq, Tq), (0, Yq.f)(null, null, Hq, {
+         }, yC, LC), (0, QC.j)(null, null, eC, {
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L406` → after: `L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L542) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L406)

```diff
-           name: "_renderPriority",
+           name: "fovMode",
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L410-L411` → after: `L546-L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L546-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L546-L547) · [Before (L410-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L410-L411)

```diff
-             has: qq => "_renderPriority" in qq,
-             get: qq => qq._renderPriority,
+             has: CC => "fovMode" in CC,
+             get: CC => CC.fovMode,
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L413` → after: `L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L549) · [Before (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L413)

```diff
-               qq._renderPriority = Eq
+               CC.fovMode = zC
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L417` → after: `L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L553) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L417)

```diff
-         }, zq, Sq), (0, Yq.f)(null, null, Pq, {
+         }, UC, BC), (0, QC.j)(null, null, hC, {
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L419` → after: `L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L555) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L419)

```diff
-           name: "_shadowEnabled",
+           name: "cameraRigMode",
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L423-L424` → after: `L559-L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L559-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L559-L560) · [Before (L423-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L423-L424)

```diff
-             has: qq => "_shadowEnabled" in qq,
-             get: qq => qq._shadowEnabled,
+             has: CC => "cameraRigMode" in CC,
+             get: CC => CC.cameraRigMode,
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L426` → after: `L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L562) · [Before (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L426)

```diff
-               qq._shadowEnabled = Eq
+               CC.cameraRigMode = zC
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L430` → after: `L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L566) · [Before (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L430)

```diff
-         }, Lq, Jq), (0, Yq.f)(null, null, Qq, {
+         }, OC, kC), (0, QC.j)(null, null, KC, {
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L432` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L568) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L432)

```diff
-           name: "_excludeWithLayerMask",
+           name: "interaxialDistance",
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L436-L437` → after: `L572-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L572-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L572-L573) · [Before (L436-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L436-L437)

```diff
-             has: qq => "_excludeWithLayerMask" in qq,
-             get: qq => qq._excludeWithLayerMask,
+             has: CC => "interaxialDistance" in CC,
+             get: CC => CC.interaxialDistance,
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L439` → after: `L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L575) · [Before (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L439)

```diff
-               qq._excludeWithLayerMask = Eq
+               CC.interaxialDistance = zC
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L443` → after: `L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L579) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L443)

```diff
-         }, kq, Rq), (0, Yq.f)(null, null, yq, {
+         }, VC, Cz), (0, QC.j)(null, null, YC, {
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L445` → after: `L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L581) · [Before (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L445)

```diff
-           name: "_includeOnlyWithLayerMask",
+           name: "isStereoscopicSideBySide",
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L449-L450` → after: `L585-L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L585-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L585-L586) · [Before (L449-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L449-L450)

```diff
-             has: qq => "_includeOnlyWithLayerMask" in qq,
-             get: qq => qq._includeOnlyWithLayerMask,
+             has: CC => "isStereoscopicSideBySide" in CC,
+             get: CC => CC.isStereoscopicSideBySide,
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L452` → after: `L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L588) · [Before (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L452)

```diff
-               qq._includeOnlyWithLayerMask = Eq
+               CC.isStereoscopicSideBySide = zC
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L456` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L592) · [Before (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L456)

```diff
-         }, Uq, Fq), (0, Yq.f)(null, null, tq, {
+         }, zz, Zz), (0, QC.j)(null, null, dC, {
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L458` → after: `L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L594) · [Before (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L458)

```diff
-           name: "_lightmapMode",
+           name: "ignoreCameraMaxZ",
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L462-L463` → after: `L598-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L598-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L598-L599) · [Before (L462-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L462-L463)

```diff
-             has: qq => "_lightmapMode" in qq,
-             get: qq => qq._lightmapMode,
+             has: CC => "ignoreCameraMaxZ" in CC,
+             get: CC => CC.ignoreCameraMaxZ,
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L465` → after: `L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L601) · [Before (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L465)

```diff
-               qq._lightmapMode = Eq
+               CC.ignoreCameraMaxZ = zC
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L475-L476` → after: `L611-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L611-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L611-L640) · [Before (L475-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L475-L476)

```diff
-       })(), qq.FALLOFF_DEFAULT = uq.c.FALLOFF_DEFAULT, qq.FALLOFF_PHYSICAL = uq.c.FALLOFF_PHYSICAL, qq.FALLOFF_GLTF = uq.c.FALLOFF_GLTF, qq.FALLOFF_STANDARD = uq.c.FALLOFF_STANDARD, qq.LIGHTMAP_DEFAULT = uq.c.LIGHTMAP_DEFAULT, qq.LIGHTMAP_SPECULAR = uq.c.LIGHTMAP_SPECULAR, qq.LIG … [truncated]
-     })()
+       })(), CC._CreateDefaultParsedCamera = (CC, zC) => {
+         throw (0, WC.i)("UniversalCamera")
+       }, CC.PERSPECTIVE_CAMERA = 0, CC.ORTHOGRAPHIC_CAMERA = 1, CC.FOVMODE_VERTICAL_FIXED = 0, CC.FOVMODE_HORIZONTAL_FIXED = 1, CC.RIG_MODE_NONE = 0, CC.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, CC.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, CC.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CRO … [truncated]
+     })();
+ 
+     function PC(CC, zC) {
+       const ZC = CC.type,
+         QC = pC.GetConstructorFromName(ZC, CC.name, zC, CC.interaxial_distance, CC.isStereoscopicSideBySide),
+         wC = SC.d.Parse(QC, CC, zC);
+       if (void 0 !== CC.parentId && (wC._waitingParentId = CC.parentId), void 0 !== CC.parentInstanceIndex && (wC._waitingParentInstanceIndex = CC.parentInstanceIndex), wC.inputs && (wC.inputs.parse(CC), wC._setupInputs()), CC.upVector && (wC.upVector = fC.r.FromArray(CC.upVector … [truncated]
+         const zC = CC.interaxial_distance ? {
+           interaxialDistance: CC.interaxial_distance
+         } : {};
+         wC.setCameraRigMode(CC.cameraRigMode, zC)
+       }
+       if (CC.animations) {
+ ... (14 more added lines; see GitHub link above)
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L478` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L642) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L478)

```diff
-   39960: (qq, Eq, gq) => {
+   40054: (CC, zC, ZC) => {
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L480` → after: `L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L644) · [Before (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L480)

```diff
-       c: () => Bq
+       b: () => wC
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L482-L488` → after: `L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L646) · [Before (L482-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L482-L488)

```diff
-     var Yq = gq(39757),
-       lq = gq(37139),
-       Oq = gq(39759),
-       mq = gq(37156),
-       xq = gq(37153),
-       Aq = gq(39636),
-       cq = gq(39779);
+     var QC = ZC(36963);
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L490-L491` → after: `L648-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L648-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L648-L694) · [Before (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L490-L491)

```diff
-       constructor() {
-         this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new mq.d, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedO … [truncated]
+       constructor(CC, zC, ZC) {
+         this._cameraPosition = zC, this._behavior = ZC, this.activeInput = !1, this.speed = 1, this.RL = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = . … [truncated]
+       }
+       computeCurrentFrameDeltas() {
+         const CC = this._scene.mg().getDeltaTime(),
+           zC = this._getEffectiveDeltaMs(CC);
+         if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 ===  … [truncated]
+         this.panDeltaCurrentFrame.Q_(0), this.rotationDeltaCurrentFrame.Q_(0), this.zoomDeltaCurrentFrame = 0;
+         (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.L_(this._calculateCurrentVelocity(this._pa … [truncated]
+       }
+       resetRotationVelocity() {
+         this._rotationVelocity.Q_(0), this.rotationAccumulatedPixels.Q_(0)
+       }
+       resetPanVelocity() {
+         this._panVelocity.Q_(0), this.panAccumulatedPixels.Q_(0)
+       }
+ ... (31 more added lines; see GitHub link above)
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L494-L512` → after: `L697-L718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L697-L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L697-L718) · [Before (L494-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L494-L512)

```diff
-     let Bq = (() => {
-       var qq;
-       let Eq, gq, Bq, Wq, Nq, aq = [],
-         Vq = [],
-         dq = [],
-         jq = [],
-         Hq = [],
-         oq = [],
-         Pq = [],
-         Qq = [],
-         yq = [],
-         tq = [];
-       return qq = class {
-         static AddNodeConstructor(qq, Eq) {
-           this._NodeConstructors[qq] = Eq
-         }
- ... (3 more removed lines; see GitHub link above)
+   },
+   40061: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => QC
+     });
+     class QC {
+       constructor(CC, zC) {
+         this.inputMap = [], this.handlers = CC, this._createDefaultEntries = zC, this.resetInputMap()
+       }
+       resolveInteraction(CC, zC) {
+         for (const ZC of this.inputMap)
+           if (ZC.source === CC && this._entryMatches(ZC, zC)) return ZC;
+         return null
+       }
+       resetInputMap() {
+         this.inputMap = this._createDefaultEntries?.() ?? []
+ ... (6 more added lines; see GitHub link above)
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L514-L515` → after: `L720-L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L720-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L720-L726) · [Before (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L514-L515)

```diff
-         set accessibilityTag(qq) {
-           this._accessibilityTag = qq, this.onAccessibilityTagChangedObservable.notifyObservers(qq)
+       }
+       getEntries(CC, zC, ZC) {
+         const QC = [],
+           wC = this.inputMap;
+         for (let bC = 0; bC < wC.length; bC++) {
+           const nC = wC[bC];
+           nC.source === CC && nC.interaction === zC && this._entryConditionsMatch(nC, ZC) && QC.push(nC)
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L517-L518` → after: `L728-L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L728-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L728-L757) · [Before (L517-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L517-L518)

```diff
-         get accessibilityTag() {
-           return this._accessibilityTag
+         return QC
+       }
+       addEntry(CC) {
+         const zC = this._entrySpecificity(CC);
+         let ZC = this.inputMap.length;
+         for (let QC = 0; QC < this.inputMap.length; QC++)
+           if (this._entrySpecificity(this.inputMap[QC]) < zC) {
+             ZC = QC;
+             break
+           } this.inputMap.splice(ZC, 0, CC)
+       }
+       setInteraction(CC, zC, ZC) {
+         const QC = this.resolveInteraction(CC, zC);
+         return QC && this._entryCoversAllConditionsOf(QC, zC) ? (QC.interaction = ZC, !0) : (this.addEntry({
+           source: CC,
+           ...zC ?? {},
+ ... (14 more added lines; see GitHub link above)
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L520-L521` → after: `L759-L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L759-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L759-L766) · [Before (L520-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L520-L521)

```diff
-         get doNotSerialize() {
-           return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
+         return !0
+       }
+       setInteractions(CC, zC, ZC) {
+         let QC = 0;
+         const wC = this.inputMap;
+         for (let bC = 0; bC < wC.length; bC++) {
+           const nC = wC[bC];
+           nC.source === CC && this._entryMatches(nC, zC) && (nC.interaction = ZC, QC++)
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L523-L524` → after: `L768-L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L768-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L768-L779) · [Before (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L523-L524)

```diff
-         set doNotSerialize(qq) {
-           this._nodeDataStorage._doNotSerialize = qq
+         return QC
+       }
+       _entryMatches(CC, zC) {
+         switch (CC.source) {
+           case "pointer":
+             return (void 0 === CC.button || CC.button === zC?.button) && this._matchModifiers(CC.modifiers, zC?.modifiers);
+           case "wheel":
+             return this._matchModifiers(CC.modifiers, zC?.modifiers);
+           case "touch":
+             return void 0 === CC.touchCount || CC.touchCount === zC?.touchCount;
+           case "keyboard":
+             return (void 0 === CC.key || (Array.isArray(CC.key) ? -1 !== CC.key.indexOf(zC?.key ?? -1) : CC.key === zC?.key)) && this._matchModifiers(CC.modifiers, zC?.modifiers)
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L526-L527` → after: `L781-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L781-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L781-L796) · [Before (L526-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L526-L527)

```diff
-         bM() {
-           return this._nodeDataStorage._isDisposed
+       }
+       _entryConditionsMatch(CC, zC) {
+         if (!zC) return !0;
+         switch (CC.source) {
+           case "pointer":
+             return (!("button" in zC) || CC.button === zC.button) && (!("modifiers" in zC) || this._entryModifiersMatch(CC.modifiers, zC.modifiers));
+           case "wheel":
+             return !("modifiers" in zC) || this._entryModifiersMatch(CC.modifiers, zC.modifiers);
+           case "touch":
+             return !("touchCount" in zC) || CC.touchCount === zC.touchCount;
+           case "keyboard":
+             if ("key" in zC) {
+               if (void 0 === CC.key) return void 0 === zC.key;
+               if (void 0 === zC.key || (Array.isArray(CC.key) ? -1 === CC.key.indexOf(zC.key) : CC.key !== zC.key)) return !1
+             }
+             return !("modifiers" in zC) || this._entryModifiersMatch(CC.modifiers, zC.modifiers)
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L529-L533` → after: `L798-L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L798-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L798-L833) · [Before (L529-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L529-L533)

```diff
-         set parent(qq) {
-           if (this._parentNode === qq) return;
-           const Eq = this._parentNode;
-           if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
-             const Eq = this._parentNode._children.indexOf(this); - 1 !== Eq && this._parentNode._children.splice(Eq, 1), qq || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
+       }
+       _entrySpecificity(CC) {
+         let zC = 0;
+         return "button" in CC && void 0 !== CC.button && zC++, "key" in CC && void 0 !== CC.key && zC++, "touchCount" in CC && void 0 !== CC.touchCount && zC++, "modifiers" in CC && CC.modifiers && zC++, zC
+       }
+       _matchModifiers(CC, zC) {
+         return !CC || (void 0 === CC.ctrl || CC.ctrl === (zC?.ctrl ?? !1)) && ((void 0 === CC.shift || CC.shift === (zC?.shift ?? !1)) && (void 0 === CC.alt || CC.alt === (zC?.alt ?? !1)))
+       }
+       _entryModifiersMatch(CC, zC) {
+         if (!zC) return !CC;
+         return void 0 !== zC.ctrl || void 0 !== zC.shift || void 0 !== zC.alt ? (void 0 === zC.ctrl || CC?.ctrl === zC.ctrl) && ((void 0 === zC.shift || CC?.shift === zC.shift) && (void 0 === zC.alt || CC?.alt === zC.alt)) : !CC || void 0 === CC.ctrl && void 0 === CC.shift && voi … [truncated]
+       }
+     }
+   },
+   40035: (CC, zC, ZC) => {
+     ZC.d(zC, {
+ ... (20 more added lines; see GitHub link above)
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L535-L562` → after: `L835-L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L835-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L835-L871) · [Before (L535-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L535-L562)

```diff
-           this._parentNode = qq, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), Eq || this._removeFromSceneRootNodes()), this … [truncated]
-         }
-         get parent() {
-           return this._parentNode
-         }
-         get inheritVisibility() {
-           return this._nodeDataStorage._inheritVisibility
-         }
-         set inheritVisibility(qq) {
-           this._nodeDataStorage._inheritVisibility = qq
-         }
-         get isVisible() {
-           return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
-         }
-         set isVisible(qq) {
-           this._nodeDataStorage._isVisible = qq
- ... (12 more removed lines; see GitHub link above)
+         }, (() => this._createDefaultInputMap()))
+       }
+       _createDefaultInputMap() {
+         return [{
+           source: "pointer",
+           interaction: "rotate"
+         }, {
+           source: "keyboard",
+           interaction: "translate"
+         }, {
+           source: "keyboard",
+           interaction: "rotate"
+         }, {
+           source: "touch",
+           interaction: "rotate"
+         }, {
+ ... (21 more added lines; see GitHub link above)
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L564-L667` → after: `L873-L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L873-L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L873-L874) · [Before (L564-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L564-L667)

```diff
-         }
-         get animationPropertiesOverride() {
-           return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
-         }
-         set animationPropertiesOverride(qq) {
-           this._animationPropertiesOverride = qq
-         }
-         getClassName() {
-           return "Node"
-         }
-         set onDispose(qq) {
-           this._onDisposeObserver && this.MJ.remove(this._onDisposeObserver), this._onDisposeObserver = this.MJ.add(qq)
-         }
-         get onEnabledStateChangedObservable() {
-           return this._nodeDataStorage._onEnabledStateChangedObservable
-         }
- ... (88 more removed lines; see GitHub link above)
+           set inertia(CC) {
+             this._targetInertia = CC, this.movement && (this.movement.panInertia = CC, this.movement.rotationInertia = CC)
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L669-L676` → after: `L876-L877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L876-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L876-L877) · [Before (L669-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L669-L676)

```diff
-         }
-         hG(qq) {
-           if (this._nodeDataStorage._isEnabled === qq) return;
-           const Eq = this._hasEffectiveEnabledStateObservers(),
-             gq = Eq ? this.isEnabled() : null;
-           if (this._nodeDataStorage._isEnabled = qq, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(qq), Eq) {
-             const qq = this.isEnabled();
-             qq !== gq && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(qq)
+           constructor(CC, zC, ZC) {
+             super(CC, zC, ZC, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new nC.r(0, 0, 0), this.cameraRotation = new nC.n(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, QC.n)(this, SC, !1), this.rotation =  … [truncated]
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L678-L688` → after: `L879-L889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L879-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L879-L889) · [Before (L678-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L678-L688)

```diff
-         }
-         isDescendantOf(qq) {
-           return !!this.parent && (this.parent === qq || this.parent.isDescendantOf(qq))
-         }
-         _getDescendants(qq) {
-           let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-             gq = arguments.length > 2 ? arguments[2] : void 0;
-           if (this._children)
-             for (let Yq = 0; Yq < this._children.length; Yq++) {
-               const lq = this._children[Yq];
-               gq && !gq(lq) || qq.push(lq), Eq || lq._getDescendants(qq, !1, gq)
+           getFrontPosition(CC) {
+             this.getWorldMatrix();
+             const zC = nC.j.Eg[0],
+               ZC = nC.j.Eg[1];
+             return ZC.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(ZC, zC), zC.scaleInPlace(CC), this.globalPosition.add(zC)
+           }
+           _getLockedTargetPosition() {
+             if (!this.lockedTarget) return null;
+             if (this.lockedTarget.absolutePosition) {
+               const CC = this.lockedTarget;
+               CC.computeWorldMatrix().getTranslationToRef(CC.absolutePosition)
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L691-L704` → after: `L6683-L6684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR6683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L6683-L6684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L6683-L6684) · [Before (L691-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L691-L704)

```diff
-         getDescendants(qq, Eq) {
-           const gq = [];
-           return this._getDescendants(gq, qq, Eq), gq
-         }
-         getChildMeshes(qq, Eq) {
-           const gq = [];
-           return this._getDescendants(gq, qq, (qq => (!Eq || Eq(qq)) && void 0 !== qq.cullingStrategy)), gq
-         }
-         getChildren(qq) {
-           let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-           return this.getDescendants(Eq, qq)
-         }
-         _setReady(qq) {
-           qq !== this._nodeDataStorage._isReady && (qq ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
+         static CreateIcoSphere(CC) {
+           throw (0, nC.i)("icoSphereBuilder")
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L706-L709` → after: `L6686-L6764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR6686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L6686-L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L6686-L6764) · [Before (L706-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L706-L709)

```diff
-         getAnimationByName(qq) {
-           for (let Eq = 0; Eq < this.animations.length; Eq++) {
-             const gq = this.animations[Eq];
-             if (gq.name === qq) return gq
+         static CreatePolyhedron(CC) {
+           throw (0, nC.i)("polyhedronBuilder")
+         }
+         static CreateCapsule() {
+           arguments.length > 0 && void 0 !== arguments[0] || wC.r.Up();
+           throw (0, nC.i)("capsuleBuilder")
+         }
+         static CreateTorusKnot(CC) {
+           throw (0, nC.i)("torusKnotBuilder")
+         }
+         static ComputeNormals(CC, zC, ZC, QC) {
+           let bC, nC, fC, oC, qC, FC, WC, NC, MC, gC, SC, pC, PC, GC, RC, AC, xC, JC, IC, iC, vC = !1,
+             eC = !1,
+             hC = !1,
+             KC = !1,
+             YC = 1,
+ ... (63 more added lines; see GitHub link above)
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L713-L716` → after: `L6767-L6801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR6767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L6767-L6801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L6767-L6801) · [Before (L713-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L713-L716)

```diff
-         createAnimationRange(Eq, gq, Yq) {
-           if (!this._ranges[Eq]) {
-             this._ranges[Eq] = qq._AnimationRangeFactory(Eq, gq, Yq);
-             for (let qq = 0, lq = this.animations.length; qq < lq; qq++) this.animations[qq] && this.animations[qq].createRange(Eq, gq, Yq)
+         static Parse(zC) {
+           const ZC = new CC,
+             QC = zC.positions;
+           QC && ZC.set(QC, bC.k.PositionKind);
+           const wC = zC.normals;
+           wC && ZC.set(wC, bC.k.NormalKind);
+           const nC = zC.tangents;
+           nC && ZC.set(nC, bC.k.TangentKind);
+           const oC = zC.uvs;
+           oC && ZC.set(oC, bC.k.UVKind);
+           const qC = zC.uvs2;
+           qC && ZC.set(qC, bC.k.UV2Kind);
+           const FC = zC.uvs3;
+           FC && ZC.set(FC, bC.k.UV3Kind);
+           const WC = zC.uvs4;
+           WC && ZC.set(WC, bC.k.UV4Kind);
+ ... (19 more added lines; see GitHub link above)
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L719` → after: `L7112-L7194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7112-L7194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7112-L7194) · [Before (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L719)

```diff
-         deleteAnimationRange(qq) {
+         get infiniteDistance() {
+           return this._infiniteDistance
+         }
+         set infiniteDistance(CC) {
+           this._infiniteDistance !== CC && (this._infiniteDistance = CC)
+         }
+         constructor(zC) {
+           let ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+           super(zC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new WC.r(0, 0, 1), this._up = new WC.r(0, 1, 0), this._right = new WC.r(1, 0, 0), this._position = (0, fC.n)(this, PC, WC.r.Zero()), this._rotation = ((0, fC.n)(this, G … [truncated]
+         }
+         getClassName() {
+           return "TransformNode"
+         }
+         get position() {
+           return this._position
+         }
+ ... (67 more added lines; see GitHub link above)
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L721-L722` → after: `L7196-L7335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7196-L7335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7196-L7335) · [Before (L721-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L721-L722)

```diff
-           for (let gq = 0, Yq = this.animations.length; gq < Yq; gq++) this.animations[gq] && this.animations[gq].deleteRange(qq, Eq);
-           this._ranges[qq] = null
+           return this._pivotMatrix.Av(CC), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = zC, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrix … [truncated]
+         }
+         getPivotMatrix() {
+           return this._pivotMatrix
+         }
+         instantiateHierarchy() {
+           let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
+             zC = arguments.length > 1 ? arguments[1] : void 0,
+             ZC = arguments.length > 2 ? arguments[2] : void 0;
+           const QC = this.clone("Clone of " + (this.name || this.id), CC || this.parent, !0);
+           QC && ZC && ZC(this, QC);
+           for (const wC of this.getChildTransformNodes(!0)) wC.instantiateHierarchy(QC, zC, ZC);
+           return QC
+         }
+         gH() {
+           let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+ ... (124 more added lines; see GitHub link above)
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L724-L725` → after: `L7337-L7496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7337-L7496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7337-L7496) · [Before (L724-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L724-L725)

```diff
-         getAnimationRange(qq) {
-           return this._ranges[qq] || null
+         get nonUniformScaling() {
+           return this._nonUniformScaling
+         }
+         _updateNonUniformScalingState(CC) {
+           return this._nonUniformScaling !== CC && (this._nonUniformScaling = CC, !0)
+         }
+         attachToBone(CC, zC) {
+           return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = zC, this.parent = CC, CC.getSkeleton().prepare(!0), CC.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
+         }
+         detachFromBone() {
+           let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+           return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = CC ? this._currentParentWhenAttachingToBone : null, this) : (CC && (this.parent = this._currentParentWhenAttaching … [truncated]
+         }
+         rotate(zC, ZC, QC) {
+           let wC;
+           if (zC.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.Q_(0)), QC && 0 !== QC) {
+ ... (144 more added lines; see GitHub link above)
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L728-L729` → after: `L7499-L7500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7499-L7500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7499-L7500) · [Before (L728-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L728-L729)

```diff
-           const lq = cq.d.Clone((() => new qq(Eq, this.ZJ())), this);
-           if (gq && (lq.parent = gq), !Yq) {
+           const wC = qC.d.Clone((() => new CC(zC, this.Km())), this);
+           if (wC.name = zC, wC.id = zC, ZC && (wC.parent = ZC), !QC) {
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L733` → after: `L7504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7504) · [Before (L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L733)

```diff
-               Yq.clone(Eq + "." + Yq.name, lq)
+               QC.clone && QC.clone(zC + "." + QC.name, wC)
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L738-L746` → after: `L7509-L7511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7509-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7509-L7511) · [Before (L738-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L738-L746)

```diff
-         getAnimationRanges() {
-           const qq = [];
-           let Eq;
-           for (Eq in this._ranges) qq.push(this._ranges[Eq]);
-           return qq
-         }
-         beginAnimation(qq, Eq, gq, Yq) {
-           const lq = this.getAnimationRange(qq);
-           return lq ? this._scene.beginAnimation(this, lq.from, lq.to, Eq, gq, Yq) : null
+         serialize(CC) {
+           const zC = qC.d.Serialize(this, CC);
+           return zC.type = this.getClassName(), zC.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(zC), zC.localMatrix = this.getPivotMatrix().VZC(), zC.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (zC.gH = !0), qC.d.AppendSerializedAnimation … [truncated]
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L748` → after: `L7513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7513) · [Before (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L748)

```diff
-         serializeAnimationRanges() {
+         getChildTransformNodes(zC, ZC) {
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L750-L759` → after: `L7515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7515) · [Before (L750-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L750-L759)

```diff
-           for (const Eq in this._ranges) {
-             const gq = this._ranges[Eq];
-             if (!gq) continue;
-             const Yq = {};
-             Yq.name = Eq, Yq.from = gq.from, Yq.to = gq.to, qq.push(Yq)
-           }
-           return qq
-         }
-         computeWorldMatrix(qq) {
-           return this._worldMatrix || (this._worldMatrix = lq.e.Identity()), this._worldMatrix
+           return this._getDescendants(QC, zC, (zC => (!ZC || ZC(zC)) && zC instanceof CC)), QC
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L763-L765` → after: `L7519-L7525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7519-L7525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7519-L7525) · [Before (L763-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L763-L765)

```diff
-           if (this._nodeDataStorage._isDisposed = !0, !qq) {
-             const gq = this.getDescendants(!0);
-             for (const Yq of gq) Yq.dispose(qq, Eq)
+           if (this.Km().stopAnimation(this), this.Km().removeTransformNode(this), this._parentContainer) {
+             const CC = this._parentContainer.transformNodes.indexOf(this);
+             CC > -1 && this._parentContainer.transformNodes.splice(CC, 1), this._parentContainer = null
+           }
+           if (this.onAfterWorldMatrixUpdateObservable.clear(), CC) {
+             const CC = this.getChildTransformNodes(!0);
+             for (const zC of CC) zC.parent = null, zC.computeWorldMatrix(!0)
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L767-L769` → after: `L7527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7527) · [Before (L767-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L767-L769)

```diff
-           this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.MJ.notifyObservers(this), this.MJ.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
-           for (const gq of this._behaviors) gq.detach();
-           this._behaviors.length = 0, this.metadata = null
+           super.dispose(CC, zC)
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L771-L776` → after: `L7529-L7541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7529-L7541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7529-L7541) · [Before (L771-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L771-L776)

```diff
-         static ParseAnimationRanges(qq, Eq, gq) {
-           if (Eq.zV)
-             for (let Yq = 0; Yq < Eq.zV.length; Yq++) {
-               const gq = Eq.zV[Yq];
-               qq.createAnimationRange(gq.name, gq.from, gq.to)
-             }
+         normalizeToUnitCube() {
+           let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
+             zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+             ZC = arguments.length > 2 ? arguments[2] : void 0,
+             QC = null,
+             wC = null;
+           zC && (this.rotationQuaternion ? (wC = this.rotationQuaternion.clone(), this.rotationQuaternion.L_(0, 0, 0, 1)) : this.rotation && (QC = this.rotation.clone(), this.rotation.L_(0, 0, 0)));
+           const bC = this.getHierarchyBoundingVectors(CC, ZC),
+             nC = bC.max.subtract(bC.min),
+             fC = Math.max(nC.x, nC.y, nC.z);
+           if (0 === fC) return this;
+           const oC = 1 / fC;
+           return this.sq.scaleInPlace(oC), zC && (this.rotationQuaternion && wC ? this.rotationQuaternion.Av(wC) : this.rotation && QC && this.rotation.Av(QC)), this
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L778-L802` → after: `L7543-L7544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7543-L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7543-L7544) · [Before (L778-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L778-L802)

```diff
-         getHierarchyBoundingVectors() {
-           let qq, Eq, gq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
-             Yq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-           this.ZJ().incrementRenderId(), this.computeWorldMatrix(!0);
-           const Oq = this;
-           if (Oq.yR && Oq.fn) {
-             const gq = Oq.yR();
-             qq = gq.boundingBox.minimumWorld.clone(), Eq = gq.boundingBox.maximumWorld.clone()
-           } else qq = new lq.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), Eq = new lq.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
-           if (gq) {
-             const gq = this.getDescendants(!1);
-             for (const Oq of gq) {
-               const gq = Oq;
-               if (gq.computeWorldMatrix(!0), Yq && !Yq(gq)) continue;
-               if (!gq.yR || 0 === gq.getTotalVertices()) continue;
-               const mq = gq.yR().boundingBox,
- ... (9 more removed lines; see GitHub link above)
+         _syncAbsoluteScalingAndRotation() {
+           this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L805-L806` → after: `L7547-L7600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7547-L7600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7547-L7600) · [Before (L805-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L805-L806)

```diff
-         const lq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         Eq = [(0, Oq.M)()], gq = [(0, Oq.M)()], Bq = [(0, Oq.M)()], Wq = [(0, Oq.M)()], Nq = [(0, Oq.M)()], (0, Yq.f)(null, null, Eq, {
+         const qC = "function" === typeof Symbol && Symbol.metadata ? Object.create(pC[Symbol.metadata] ?? null) : void 0;
+         zC = [(0, oC.J)("position")], ZC = [(0, oC.J)("rotation")], QC = [(0, oC.z)("rotationQuaternion")], wC = [(0, oC.J)("sq")], bC = [(0, oC.M)("billboardMode")], nC = [(0, oC.M)()], MC = [(0, oC.M)("infiniteDistance")], gC = [(0, oC.M)()], SC = [(0, oC.M)()], (0, fC.j)(null, … [truncated]
+           kind: "field",
+           name: "_position",
+           static: !1,
+           private: !1,
+           access: {
+             has: CC => "_position" in CC,
+             get: CC => CC._position,
+             set: (CC, zC) => {
+               CC._position = zC
+             }
+           },
+           metadata: qC
+         }, PC, GC), (0, fC.j)(null, null, ZC, {
+           kind: "field",
+ ... (38 more added lines; see GitHub link above)
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L808` → after: `L7602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7602) · [Before (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L808)

```diff
-           name: "name",
+           name: "_billboardMode",
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L812-L813` → after: `L7606-L7607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7606-L7607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7606-L7607) · [Before (L812-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L812-L813)

```diff
-             has: qq => "name" in qq,
-             get: qq => qq.name,
+             has: CC => "_billboardMode" in CC,
+             get: CC => CC._billboardMode,
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L815` → after: `L7609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7609) · [Before (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L815)

```diff
-               qq.name = Eq
+               CC._billboardMode = zC
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L819` → after: `L7613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7613) · [Before (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L819)

```diff
-         }, aq, Vq), (0, Yq.f)(null, null, gq, {
+         }, vC, eC), (0, fC.j)(null, null, nC, {
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L821` → after: `L7615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7615) · [Before (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L821)

```diff
-           name: "id",
+           name: "scalingDeterminant",
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L825-L826` → after: `L7619-L7620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7619-L7620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7619-L7620) · [Before (L825-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L825-L826)

```diff
-             has: qq => "id" in qq,
-             get: qq => qq.id,
+             has: CC => "scalingDeterminant" in CC,
+             get: CC => CC.scalingDeterminant,
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L828` → after: `L7622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7622) · [Before (L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L828)

```diff
-               qq.id = Eq
+               CC.scalingDeterminant = zC
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L832` → after: `L7626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7626) · [Before (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L832)

```diff
-         }, dq, jq), (0, Yq.f)(null, null, Bq, {
+         }, hC, KC), (0, fC.j)(null, null, MC, {
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L834` → after: `L7628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7628) · [Before (L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L834)

```diff
-           name: "uniqueId",
+           name: "_infiniteDistance",
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L838-L839` → after: `L7632-L7633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7632-L7633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7632-L7633) · [Before (L838-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L838-L839)

```diff
-             has: qq => "uniqueId" in qq,
-             get: qq => qq.uniqueId,
+             has: CC => "_infiniteDistance" in CC,
+             get: CC => CC._infiniteDistance,
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L841` → after: `L7635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7635) · [Before (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L841)

```diff
-               qq.uniqueId = Eq
+               CC._infiniteDistance = zC
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L845` → after: `L7639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7639) · [Before (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L845)

```diff
-         }, Hq, oq), (0, Yq.f)(null, null, Wq, {
+         }, YC, dC), (0, fC.j)(null, null, gC, {
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L847` → after: `L7641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7641) · [Before (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L847)

```diff
-           name: "state",
+           name: "ignoreNonUniformScaling",
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L851-L852` → after: `L7645-L7646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7645-L7646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7645-L7646) · [Before (L851-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L851-L852)

```diff
-             has: qq => "state" in qq,
-             get: qq => qq.state,
+             has: CC => "ignoreNonUniformScaling" in CC,
+             get: CC => CC.ignoreNonUniformScaling,
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L854` → after: `L7648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7648) · [Before (L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L854)

```diff
-               qq.state = Eq
+               CC.ignoreNonUniformScaling = zC
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L858` → after: `L7652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7652) · [Before (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L858)

```diff
-         }, Pq, Qq), (0, Yq.f)(null, null, Nq, {
+         }, mC, HC), (0, fC.j)(null, null, SC, {
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L860` → after: `L7654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7654) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L860)

```diff
-           name: "metadata",
+           name: "reIntegrateRotationIntoRotationQuaternion",
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L864-L865` → after: `L7658-L7659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7658-L7659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7658-L7659) · [Before (L864-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L864-L865)

```diff
-             has: qq => "metadata" in qq,
-             get: qq => qq.metadata,
+             has: CC => "reIntegrateRotationIntoRotationQuaternion" in CC,
+             get: CC => CC.reIntegrateRotationIntoRotationQuaternion,
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L867` → after: `L7661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7661) · [Before (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L867)

```diff
-               qq.metadata = Eq
+               CC.reIntegrateRotationIntoRotationQuaternion = zC
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L877-L880` → after: `L7671-L7749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7671-L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/251.js#L7671-L7749) · [Before (L877-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/251.js#L877-L880)

```diff
-       })(), qq._AnimationRangeFactory = (qq, Eq, gq) => {
-         throw (0, Aq.m)("AnimationRange")
-       }, qq._NodeConstructors = {}, qq
-     })()
+       })(), CC.BILLBOARDMODE_NONE = 0, CC.BILLBOARDMODE_X = 1, CC.BILLBOARDMODE_Y = 2, CC.BILLBOARDMODE_Z = 4, CC.BILLBOARDMODE_ALL = 7, CC.BILLBOARDMODE_USE_POSITION = 128, CC.BillboardUseParentOrientation = !1, CC._TmpRotation = WC.f.Zero(), CC._TmpScaling = WC.r.Zero(), CC._Tm … [truncated]
+     })();
+ 
+     function pC(CC, zC, ZC) {
+       const QC = qC.d.Parse((() => new SC(CC.name, zC)), CC, zC, ZC);
+       if (CC.localMatrix ? QC.setPreTransformMatrix(WC.b.FromArray(CC.localMatrix)) : CC.pivotMatrix && QC.setPivotMatrix(WC.b.FromArray(CC.pivotMatrix)), QC.IK(CC.isEnabled), QC._waitingParsedUniqueId = CC.uniqueId, void 0 !== CC.parentId && (QC._waitingParentId = CC.parentId),  … [truncated]
+         for (let zC = 0; zC < CC.animations.length; zC++) {
+           const ZC = CC.animations[zC],
+             wC = (0, MC.c)("BABYLON.Animation");
+           wC && QC.animations.push(wC.Parse(ZC))
+         }
+         NC.d.ParseAnimationRanges(QC, CC, zC)
+       }
+       return CC.autoAnimate && zC.beginAnimation(QC, CC.autoAnimateFrom, CC.autoAnimateTo, CC.autoAnimateLoop, CC.autoAnimateSpeed || 1), QC
+     }
+     let PC = !1;
+ ... (63 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/252.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/252.js` (134 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af)

#### 1. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L4)

```diff
-   40832: (qq, Eq, gq) => {
+   39959: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L6` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L6-L9) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L6)

```diff
-       b: () => Jq
+       c: () => fC,
+       e: () => SC,
+       i: () => qC,
+       k: () => oC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L8-L17` → after: `L11-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L11-L14) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L8-L17)

```diff
-     var Yq = gq(39757),
-       lq = gq(39759),
-       Oq = gq(37156),
-       mq = gq(37139),
-       xq = gq(37158),
-       Aq = gq(39960),
-       cq = gq(40163),
-       uq = gq(39919),
-       Bq = gq(39662),
-       Wq = gq(37145);
+     var QC = ZC(39742),
+       wC = ZC(38507),
+       bC = ZC(39882),
+       nC = ZC(39783);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L19-L20` → after: `L16-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L16-L17) · [Before (L19-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L19-L20)

```diff
-       constructor() {
-         this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / … [truncated]
+       get GJ() {
+         return this._isDisposed
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L22-L23` → after: `L19-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L19-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L19-L26) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L22-L23)

```diff
-       get name() {
-         return "AutoRotation"
+       constructor(CC, zC, ZC) {
+         let wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+           bC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           fC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           oC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+           qC = arguments.length > 7 ? arguments[7] : void 0,
+           FC = arguments.length > 8 ? arguments[8] : void 0;
+         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, nC.e)(), CC && CC.Km ? this._engine = CC.Km().mg() : this._engine = CC, this._updatable = ZC, this._instanced = fC, this._divisor = qC || 1, this._label = FC, zC instanceof QC.d ? (this._data = null, this._buffer = zC) … [truncated]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L25-L26` → after: `L28-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L28-L33) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L25-L26)

```diff
-       set zoomStopsAnimation(qq) {
-         this._zoomStopsAnimation = qq
+       createVertexBuffer(CC, zC, ZC, QC, wC) {
+         let bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           nC = arguments.length > 6 ? arguments[6] : void 0;
+         const fC = bC ? zC : zC * Float32Array.BYTES_PER_ELEMENT,
+           qC = QC ? bC ? QC : QC * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
+         return new oC(this._engine, this, CC, this._updatable, !0, qC, void 0 === wC ? this._instanced : wC, fC, ZC, void 0, void 0, !0, this._divisor || nC)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L28-L29` → after: `L35-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L35-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L35-L36) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L28-L29)

```diff
-       get zoomStopsAnimation() {
-         return this._zoomStopsAnimation
+       isUpdatable() {
+         return this._updatable
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L31-L32` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L38-L39) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L31-L32)

```diff
-       set idleRotationSpeed(qq) {
-         this._idleRotationSpeed = qq
+       getData() {
+         return this._data
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L34-L35` → after: `L41-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L41-L42) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L34-L35)

```diff
-       get idleRotationSpeed() {
-         return this._idleRotationSpeed
+       getBuffer() {
+         return this._buffer
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L37-L38` → after: `L44-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L44-L45) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L37-L38)

```diff
-       set idleRotationWaitTime(qq) {
-         this._idleRotationWaitTime = qq
+       getStrideSize() {
+         return this.byteStride / Float32Array.BYTES_PER_ELEMENT
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L40-L41` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L47-L49) · [Before (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L40-L41)

```diff
-       get idleRotationWaitTime() {
-         return this._idleRotationWaitTime
+       create() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         !CC && this._buffer || (CC = CC || this._data, CC && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, CC), this._data = CC) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(CC, this._label), this._data = CC … [truncated]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L43-L44` → after: `L51-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L51-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L51-L57) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L43-L44)

```diff
-       set idleRotationSpinupTime(qq) {
-         this._idleRotationSpinupTime = qq
+       _rebuild() {
+         if (this._data) this._buffer = null, this.create(this._data);
+         else {
+           if (!this._buffer) return;
+           if (this._buffer.HW > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.HW, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.HW, void 0, this._label));
+           wC.c.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
+         }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L46-L47` → after: `L59-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L59-L60) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L46-L47)

```diff
-       get idleRotationSpinupTime() {
-         return this._idleRotationSpinupTime
+       update(CC) {
+         this.create(CC)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L49-L50` → after: `L62-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L62-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L62-L64) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L49-L50)

```diff
-       get rotationInProgress() {
-         return Math.abs(this._cameraRotationSpeed) > 0
+       updateDirectly(CC, zC, ZC) {
+         let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, CC, QC ? zC : zC * Float32Array.BYTES_PER_ELEMENT, ZC ? ZC * this.byteStride : void 0), this._data = 0 === zC && void 0 === ZC ? CC : null)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L52-L53` → after: `L66-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L66-L67) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L52-L53)

```diff
-       get attachedNode() {
-         return this._attachedCamera
+       _increaseReferences() {
+         this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L55-L69` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L69-L70) · [Before (L55-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L55-L69)

```diff
-       init() {}
-       attach(qq) {
-         this._attachedCamera = qq;
-         const Eq = this._attachedCamera.ZJ();
-         this._onPrePointerObservableObserver = Eq.onPrePointerObservable.add((qq => {
-           qq.type !== uq.b.POINTERDOWN ? qq.type === uq.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
-         })), this._onAfterCheckInputsObserver = qq.onAfterCheckInputsObservable.add((() => {
-           if (this._reachTargetAlpha()) return;
-           const qq = Bq.c.Now;
-           let Eq = 0;
-           null != this._lastFrameTime && (Eq = qq - this._lastFrameTime), this._lastFrameTime = qq, this._applyUserInteraction();
-           const gq = qq - this._lastInteractionTime - this._idleRotationWaitTime,
-             Yq = Math.max(Math.min(gq / this._idleRotationSpinupTime, 1), 0);
-           this._cameraRotationSpeed = this._idleRotationSpeed * Yq, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (Eq / 1e3))
-         }))
+       dispose() {
+         this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L71-L74` → after: `L72-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L72-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L72-L75) · [Before (L71-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L71-L74)

```diff
-       detach() {
-         if (!this._attachedCamera) return;
-         const qq = this._attachedCamera.ZJ();
-         this._onPrePointerObservableObserver && qq.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
+     }
+     class oC {
+       get GJ() {
+         return this._isDisposed
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L76-L77` → after: `L77-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L77-L78) · [Before (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L76-L77)

```diff
-       resetLastInteractionTime(qq) {
-         this._lastInteractionTime = qq ?? Bq.c.Now
+       get instanceDivisor() {
+         return this._instanceDivisor
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L79-L80` → after: `L80-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L80-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L80-L82) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L79-L80)

```diff
-       _reachTargetAlpha() {
-         return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < Wq.c
+       set instanceDivisor(CC) {
+         const zC = 0 != CC;
+         this._instanceDivisor = CC, zC !== this._instanced && (this._instanced = zC, this._computeHashCode())
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L82-L83` → after: `L84-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L84-L86) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L82-L83)

```diff
-       _userIsZooming() {
-         return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
+       get _maxVerticesCount() {
+         const CC = this.getData();
+         return CC ? Array.isArray(CC) ? CC.length / (this.byteStride / 4) - this.byteOffset / 4 : (CC.byteLength - this.byteOffset) / this.byteStride : 0
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L85-L88` → after: `L88-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L88-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L88-L178) · [Before (L85-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L85-L88)

```diff
-       _shouldAnimationStopForInteraction() {
-         if (!this._attachedCamera) return !1;
-         let qq = !1;
-         return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (qq = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? qq : this._userIsZooming()
+       constructor(CC, zC, ZC, QC, wC, nC, WC, NC, MC, gC) {
+         let SC, pC = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
+           PC = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
+           GC = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
+           RC = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
+         if (this._isDisposed = !1, this.engine = CC, "object" === typeof QC && null !== QC ? (SC = QC.updatable ?? !1, wC = QC.postponeInternalCreation, nC = QC.stride, WC = QC.instanced, NC = QC.offset, MC = QC.size, gC = QC.type, pC = QC.normalized ?? !1, PC = QC.useBytes ?? !1 … [truncated]
+           const CC = this.getData();
+           this.type = CC ? FC(CC) : oC.FLOAT
+         } else this.type = gC;
+         const AC = (0, bC.m)(this.type);
+         PC ? (this._size = MC || (nC ? nC / AC : qC(ZC)), this.byteStride = nC || this._buffer.byteStride || this._size * AC, this.byteOffset = NC || 0) : (this._size = MC || nC || qC(ZC), this.byteStride = nC ? nC * AC : this._buffer.byteStride || this._size * AC, this.byteOffse … [truncated]
+       }
+       static _GetTypeHashIndex(CC) {
+         switch (CC) {
+           case oC.BYTE:
+             return 0;
+ ... (75 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L90-L91` → after: `L180-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L180-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L180-L296) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L90-L91)

```diff
-       _applyUserInteraction() {
-         this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = Bq.c.Now)
+       _alignBuffer() {}
+     }
+ 
+     function qC(CC) {
+       switch (CC) {
+         case oC.UVKind:
+         case oC.UV2Kind:
+         case oC.UV3Kind:
+         case oC.UV4Kind:
+         case oC.UV5Kind:
+         case oC.UV6Kind:
+           return 2;
+         case oC.NormalKind:
+         case oC.PositionKind:
+           return 3;
+         case oC.ColorKind:
+ ... (101 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L93-L94` → after: `L298-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L298-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L298-L308) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L93-L94)

```diff
-       _userIsMoving() {
-         return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPannin … [truncated]
+       getTextureCoordinates() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wC.k.UVKind;
+         if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(CC)) return null;
+         const zC = this.pickedMesh.CQC();
+         if (!zC) return null;
+         const ZC = this.pickedMesh.getVerticesData(CC);
+         if (!ZC) return null;
+         let bC = QC.n.FromArray(ZC, 2 * zC[3 * this.faceId]),
+           nC = QC.n.FromArray(ZC, 2 * zC[3 * this.faceId + 1]),
+           fC = QC.n.FromArray(ZC, 2 * zC[3 * this.faceId + 2]);
+         return bC = bC.scale(this.bu), nC = nC.scale(this.bv), fC = fC.scale(1 - this.bu - this.bv), new QC.n(bC.x + nC.x + fC.x, bC.y + nC.y + fC.y)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L97` → after: `L311-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L311-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L311-L333) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L97)

```diff
-     gq(40835);
+   },
+   39783: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => bC
+     });
+     var QC = ZC(39663);
+     let wC = !1;
+ 
+     function bC() {
+       wC || (wC = !0, QC.ThinEngine.prototype.updateDynamicIndexBuffer = function(CC, zC) {
+         let ZC;
+         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(CC), ZC = CC.is32Bits ? zC instanceof Uint32Array ? zC : new Uint32Array(zC) : zC instanceof Uint16Array ? zC : new Uint16Array(zC), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, ZC, … [truncated]
+       }, QC.ThinEngine.prototype.updateDynamicVertexBuffer = function(CC, zC, ZC, QC) {
+         this.bindArrayBuffer(CC), void 0 === ZC && (ZC = 0);
+         const wC = zC.byteLength || zC.length;
+         void 0 === QC || QC >= wC && 0 === ZC ? zC instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ZC, new Float32Array(zC)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ZC, zC) : zC instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ZC, new Floa … [truncated]
+ ... (7 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L100` → after: `L339-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L339-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L339-L342) · [Before (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L100)

```diff
-         this._easingMode = aq.EASINGMODE_EASEIN
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
+           zC = arguments.length > 1 ? arguments[1] : void 0;
+         if (this._MSAARenderBuffers = null, this._context = zC, !CC && (CC = zC.createTexture(), !CC)) throw new Error("Unable to create webGL texture");
+         this.set(CC)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L102-L104` → after: `L344-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L344-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L344-L346) · [Before (L102-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L102-L104)

```diff
-       setEasingMode(qq) {
-         const Eq = Math.min(Math.max(qq, 0), 2);
-         this._easingMode = Eq
+       setUsage() {}
+       set(CC) {
+         this._webGLTexture = CC
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L106-L107` → after: `L348-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L348-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L348-L349) · [Before (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L106-L107)

```diff
-       getEasingMode() {
-         return this._easingMode
+       reset() {
+         this._webGLTexture = null, this._MSAARenderBuffers = null
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L109-L110` → after: `L351-L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L351-L352) · [Before (L109-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L109-L110)

```diff
-       easeInCore(qq) {
-         throw new Error("You must implement this method")
+       addMSAARenderBuffer(CC) {
+         this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(CC)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L112-L117` → after: `L354-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L354-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L354-L357) · [Before (L112-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L112-L117)

```diff
-       ease(qq) {
-         switch (this._easingMode) {
-           case aq.EASINGMODE_EASEIN:
-             return this.easeInCore(qq);
-           case aq.EASINGMODE_EASEOUT:
-             return 1 - this.easeInCore(1 - qq)
+       releaseMSAARenderBuffers() {
+         if (this._MSAARenderBuffers) {
+           for (const CC of this._MSAARenderBuffers) this._context.deleteRenderbuffer(CC);
+           this._MSAARenderBuffers = null
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L119` → after: `L359-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L359-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L359-L365) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L119)

```diff
-         return qq >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - qq))) + .5 : .5 * this.easeInCore(2 * qq)
+       }
+       getMSAARenderBuffer() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
+         return this._MSAARenderBuffers?.[CC] ?? null
+       }
+       release() {
+         this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L122-L123` → after: `L368-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L368-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L368-L378) · [Before (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L122-L123)

```diff
-     aq.EASINGMODE_EASEIN = 0, aq.EASINGMODE_EASEOUT = 1, aq.EASINGMODE_EASEINOUT = 2;
-     var Vq = gq(40844);
+   },
+   39721: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => GC
+     });
+     var QC = ZC(36987),
+       wC = ZC(39666),
+       bC = ZC(36985),
+       nC = ZC(38507),
+       fC = ZC(36977),
+       oC = ZC(39730);
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L126` → after: `L381-L382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L381-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L381-L382) · [Before (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L126)

```diff
-         this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
+         let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, CC && this.reset()
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L128-L129` → after: `L384-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L384-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L384-L385) · [Before (L128-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L128-L129)

```diff
-       get name() {
-         return "Bouncing"
+       get isDirty() {
+         return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L131-L132` → after: `L387-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L387-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L387-L388) · [Before (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L131-L132)

```diff
-       get autoTransitionRange() {
-         return this._autoTransitionRange
+       get zOffset() {
+         return this._zOffset
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L134-L143` → after: `L390-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L390-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L390-L391) · [Before (L134-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L134-L143)

```diff
-       set autoTransitionRange(qq) {
-         if (this._autoTransitionRange === qq) return;
-         this._autoTransitionRange = qq;
-         const Eq = this._attachedCamera;
-         Eq && (qq ? this._onMeshTargetChangedObserver = Eq.onMeshTargetChangedObservable.add((qq => {
-           if (qq && (qq.computeWorldMatrix(!0), qq.yR)) {
-             const Eq = qq.yR().diagonalLength;
-             this.lowerRadiusTransitionRange = .05 * Eq, this.upperRadiusTransitionRange = .05 * Eq
-           }
-         })) : this._onMeshTargetChangedObserver && Eq.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
+       set zOffset(CC) {
+         this._zOffset !== CC && (this._zOffset = CC, this._isZOffsetDirty = !0)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L145-L146` → after: `L393-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L393-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L393-L394) · [Before (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L145-L146)

```diff
-       get attachedNode() {
-         return this._attachedCamera
+       get zOffsetUnits() {
+         return this._zOffsetUnits
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L148-L152` → after: `L396-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L396-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L396-L406) · [Before (L148-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L148-L152)

```diff
-       init() {}
-       attach(qq) {
-         this._attachedCamera = qq, this._onAfterCheckInputsObserver = qq.onAfterCheckInputsObservable.add((() => {
-           this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTra … [truncated]
-         }))
+       set zOffsetUnits(CC) {
+         this._zOffsetUnits !== CC && (this._zOffsetUnits = CC, this._isZOffsetDirty = !0)
+       }
+       get cullFace() {
+         return this._cullFace
+       }
+       set cullFace(CC) {
+         this._cullFace !== CC && (this._cullFace = CC, this._isCullFaceDirty = !0)
+       }
+       get cull() {
+         return this._cull
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L154-L155` → after: `L408-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L408-L409) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L154-L155)

```diff
-       detach() {
-         this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChange … [truncated]
+       set cull(CC) {
+         this._cull !== CC && (this._cull = CC, this._isCullDirty = !0)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L157-L158` → after: `L411-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L411-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L411-L412) · [Before (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L157-L158)

```diff
-       _isRadiusAtLimit(qq) {
-         return !!this._attachedCamera && (this._attachedCamera.radius === qq && !this._radiusIsAnimating)
+       get depthFunc() {
+         return this._depthFunc
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L160-L164` → after: `L414-L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L414-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L414-L415) · [Before (L160-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L160-L164)

```diff
-       _applyBoundRadiusAnimation(qq) {
-         if (!this._attachedCamera) return;
-         this._radiusBounceTransition || (dq.EasingFunction.setEasingMode(dq.EasingMode), this._radiusBounceTransition = Vq.d.CreateAnimation("radius", Vq.d.ANIMATIONTYPE_FLOAT, 60, dq.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attach … [truncated]
-         const Eq = Vq.d.TransitionTo("radius", this._attachedCamera.radius + qq, this._attachedCamera, this._attachedCamera.ZJ(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
-         Eq && this._animatables.push(Eq)
+       set depthFunc(CC) {
+         this._depthFunc !== CC && (this._depthFunc = CC, this._isDepthFuncDirty = !0)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L166-L167` → after: `L417-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L417-L418) · [Before (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L166-L167)

```diff
-       _clearAnimationLocks() {
-         this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
+       get depthMask() {
+         return this._depthMask
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L169-L170` → after: `L420-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L420-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L420-L439) · [Before (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L169-L170)

```diff
-       stopAllAnimations() {
-         for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
+       set depthMask(CC) {
+         this._depthMask !== CC && (this._depthMask = CC, this._isDepthMaskDirty = !0)
+       }
+       get depthTest() {
+         return this._depthTest
+       }
+       set depthTest(CC) {
+         this._depthTest !== CC && (this._depthTest = CC, this._isDepthTestDirty = !0)
+       }
+       get frontFace() {
+         return this._frontFace
+       }
+       set frontFace(CC) {
+         this._frontFace !== CC && (this._frontFace = CC, this._isFrontFaceDirty = !0)
+       }
+       reset() {
+ ... (4 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L173` → after: `L442-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L442-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L442-L517) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L173)

```diff
-     dq.EasingFunction = new class extends aq {
+     class FC {
+       get isDirty() {
+         return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
+       }
+       get func() {
+         return this._func
+       }
+       set func(CC) {
+         this._func !== CC && (this._func = CC, this._isStencilFuncDirty = !0)
+       }
+       get backFunc() {
+         return this._func
+       }
+       set backFunc(CC) {
+         this._backFunc !== CC && (this._backFunc = CC, this._isStencilFuncDirty = !0)
+       }
+ ... (60 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L175-L176` → after: `L519-L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L519-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L519-L523) · [Before (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L175-L176)

```diff
-         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
-         super(), this.amplitude = qq
+         let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, CC && this.reset()
+       }
+       reset() {
+         this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L178-L180` → after: `L525-L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L525-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L525-L528) · [Before (L178-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L178-L180)

```diff
-       easeInCore(qq) {
-         const Eq = Math.max(0, this.amplitude);
-         return Math.pow(qq, 3) - qq * Eq * Math.sin(3.141592653589793 * qq)
+       apply(CC) {
+         if (!CC) return;
+         const zC = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
+         this.enabled = zC ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = zC ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = zC ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = zC ? this.stencilMaterial. … [truncated]
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L182` → after: `L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L530) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L182)

```diff
-     }(.3), dq.EasingMode = aq.EASINGMODE_EASEOUT;
+     }
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L185` → after: `L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L533) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L185)

```diff
-         this.onTargetFramingAnimationEndObservable = new Oq.d, this._mode = jq.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1,  … [truncated]
+         this.reset()
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L187-L188` → after: `L535-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L535-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L535-L536) · [Before (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L187-L188)

```diff
-       get name() {
-         return "Framing"
+       reset() {
+         this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = WC.ALWAYS, this.opStencilFail = WC.KEEP, this.opDepthFail = WC.KEEP, this.opStencilDepthPass = WC.REPLACE, this.backFunc = WC.ALWAYS, this.backOpStencilFail = WC.KEEP, this.backOpDepthF … [truncated]
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L190-L191` → after: `L538-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L538-L539) · [Before (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L190-L191)

```diff
-       set mode(qq) {
-         this._mode = qq
+       get stencilFunc() {
+         return this.func
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L193-L194` → after: `L541-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L541-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L541-L542) · [Before (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L193-L194)

```diff
-       get mode() {
-         return this._mode
+       set stencilFunc(CC) {
+         this.func = CC
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L196-L197` → after: `L544-L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L544-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L544-L545) · [Before (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L196-L197)

```diff
-       set radiusScale(qq) {
-         this._radiusScale = qq
+       get stencilBackFunc() {
+         return this.backFunc
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L199-L200` → after: `L547-L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L547-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L547-L548) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L199-L200)

```diff
-       get radiusScale() {
-         return this._radiusScale
+       set stencilBackFunc(CC) {
+         this.backFunc = CC
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L202-L203` → after: `L550-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L550-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L550-L551) · [Before (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L202-L203)

```diff
-       set positionScale(qq) {
-         this._positionScale = qq
+       get stencilFuncRef() {
+         return this.funcRef
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L205-L206` → after: `L553-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L553-L554) · [Before (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L205-L206)

```diff
-       get positionScale() {
-         return this._positionScale
+       set stencilFuncRef(CC) {
+         this.funcRef = CC
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L208-L209` → after: `L556-L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L556-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L556-L557) · [Before (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L208-L209)

```diff
-       set defaultElevation(qq) {
-         this._defaultElevation = qq
+       get stencilFuncMask() {
+         return this.funcMask
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L211-L212` → after: `L559-L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L559-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L559-L560) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L211-L212)

```diff
-       get defaultElevation() {
-         return this._defaultElevation
+       set stencilFuncMask(CC) {
+         this.funcMask = CC
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L214-L215` → after: `L562-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L562-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L562-L563) · [Before (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L214-L215)

```diff
-       set elevationReturnTime(qq) {
-         this._elevationReturnTime = qq
+       get stencilOpStencilFail() {
+         return this.opStencilFail
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L217-L218` → after: `L565-L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L565-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L565-L566) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L217-L218)

```diff
-       get elevationReturnTime() {
-         return this._elevationReturnTime
+       set stencilOpStencilFail(CC) {
+         this.opStencilFail = CC
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L220-L221` → after: `L568-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L568-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L568-L569) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L220-L221)

```diff
-       set elevationReturnWaitTime(qq) {
-         this._elevationReturnWaitTime = qq
+       get stencilOpDepthFail() {
+         return this.opDepthFail
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L223-L224` → after: `L571-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L571-L572) · [Before (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L223-L224)

```diff
-       get elevationReturnWaitTime() {
-         return this._elevationReturnWaitTime
+       set stencilOpDepthFail(CC) {
+         this.opDepthFail = CC
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L226-L227` → after: `L574-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L574-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L574-L575) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L226-L227)

```diff
-       set zoomStopsAnimation(qq) {
-         this._zoomStopsAnimation = qq
+       get stencilOpStencilDepthPass() {
+         return this.opStencilDepthPass
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L229-L230` → after: `L577-L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L577-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L577-L578) · [Before (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L229-L230)

```diff
-       get zoomStopsAnimation() {
-         return this._zoomStopsAnimation
+       set stencilOpStencilDepthPass(CC) {
+         this.opStencilDepthPass = CC
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L232-L233` → after: `L580-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L580-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L580-L581) · [Before (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L232-L233)

```diff
-       set framingTime(qq) {
-         this._framingTime = qq
+       get stencilBackOpStencilFail() {
+         return this.backOpStencilFail
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L235-L236` → after: `L583-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L583-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L583-L584) · [Before (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L235-L236)

```diff
-       get framingTime() {
-         return this._framingTime
+       set stencilBackOpStencilFail(CC) {
+         this.backOpStencilFail = CC
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L238-L239` → after: `L586-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L586-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L586-L587) · [Before (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L238-L239)

```diff
-       get attachedNode() {
-         return this._attachedCamera
+       get stencilBackOpDepthFail() {
+         return this.backOpDepthFail
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L241-L253` → after: `L589-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L589-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L589-L590) · [Before (L241-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L241-L253)

```diff
-       init() {}
-       attach(qq) {
-         this._attachedCamera = qq;
-         const Eq = this._attachedCamera.ZJ();
-         jq.EasingFunction.setEasingMode(jq.EasingMode), this._onPrePointerObservableObserver = Eq.onPrePointerObservable.add((qq => {
-           qq.type !== uq.b.POINTERDOWN ? qq.type === uq.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
-         })), this._onMeshTargetChangedObserver = qq.onMeshTargetChangedObservable.add((qq => {
-           qq && qq.yR && this.zoomOnMesh(qq, void 0, (() => {
-             this.onTargetFramingAnimationEndObservable.notifyObservers()
-           }))
-         })), this._onAfterCheckInputsObserver = qq.onAfterCheckInputsObservable.add((() => {
-           this._applyUserInteraction(), this._maintainCameraAboveGround()
-         }))
+       set stencilBackOpDepthFail(CC) {
+         this.backOpDepthFail = CC
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L255-L258` → after: `L592-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L592-L593) · [Before (L255-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L255-L258)

```diff
-       detach() {
-         if (!this._attachedCamera) return;
-         const qq = this._attachedCamera.ZJ();
-         this._onPrePointerObservableObserver && qq.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserve … [truncated]
+       get stencilBackOpStencilDepthPass() {
+         return this.backOpStencilDepthPass
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L260-L265` → after: `L595-L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L595-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L595-L596) · [Before (L260-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L260-L265)

```diff
-       zoomOnMesh(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         qq.computeWorldMatrix(!0);
-         const Yq = qq.yR().boundingBox;
-         this.zoomOnBoundingInfo(Yq.minimumWorld, Yq.maximumWorld, Eq, gq)
+       set stencilBackOpStencilDepthPass(CC) {
+         this.backOpStencilDepthPass = CC
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L267-L272` → after: `L598-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L598-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L598-L599) · [Before (L267-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L267-L272)

```diff
-       zoomOnMeshHierarchy(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         qq.computeWorldMatrix(!0);
-         const Yq = qq.getHierarchyBoundingVectors(!0);
-         this.zoomOnBoundingInfo(Yq.min, Yq.max, Eq, gq)
+       get stencilMask() {
+         return this.mask
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L274-L281` → after: `L601-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L601-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L601-L680) · [Before (L274-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L274-L281)

```diff
-       zoomOnMeshesHierarchy(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         const Yq = new mq.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-           lq = new mq.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
-         for (let Oq = 0; Oq < qq.length; Oq++) {
-           const Eq = qq[Oq].getHierarchyBoundingVectors(!0);
-           mq.q.CheckExtends(Eq.min, Yq, lq), mq.q.CheckExtends(Eq.max, Yq, lq)
+       set stencilMask(CC) {
+         this.mask = CC
+       }
+       get stencilTest() {
+         return this.enabled
+       }
+       set stencilTest(CC) {
+         this.enabled = CC
+       }
+     }
+     WC.ALWAYS = 519, WC.KEEP = 7680, WC.REPLACE = 7681;
+     var NC = ZC(39735),
+       MC = ZC(39694),
+       gC = ZC(39650),
+       SC = ZC(39680),
+       pC = ZC(39692);
+ ... (64 more added lines; see GitHub link above)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L285-L296` → after: `L683-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L683-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L683-L694) · [Before (L285-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L285-L296)

```diff
-       zoomOnBoundingInfo(qq, Eq) {
-         let gq, Yq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-         if (!this._attachedCamera) return !1;
-         const Oq = qq.y,
-           xq = Oq + (Eq.y - Oq) * this._positionScale,
-           Aq = Eq.subtract(qq).scale(.5);
-         if (!isFinite(xq)) return !1;
-         if (Yq) gq = new mq.q(0, xq, 0);
-         else {
-           const Eq = qq.add(Aq);
-           gq = new mq.q(Eq.x, xq, Eq.z)
+       _rebuildInternalTextures() {
+         const CC = this._internalTexturesCache.slice();
+         for (const zC of CC) zC._rebuild()
+       }
+       _rebuildRenderTargetWrappers() {
+         const CC = this._renderTargetWrapperCache.slice();
+         for (const zC of CC) zC.textures?.some((CC => 15 === CC.source)) || zC._rebuild()
+       }
+       _rebuildEffects() {
+         for (const CC in this._compiledEffects) {
+           const zC = this._compiledEffects[CC];
+           zC._pipelineContext = null, zC._prepareEffect()
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L298-L349` → after: `L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L696) · [Before (L298-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L298-L349)

```diff
-         this._vectorTransition || (this._vectorTransition = Vq.d.CreateAnimation("target", Vq.d.ANIMATIONTYPE_VECTOR3, 60, jq.EasingFunction)), this._betaIsAnimating = !0;
-         let cq = Vq.d.TransitionTo("target", gq, this._attachedCamera, this._attachedCamera.ZJ(), 60, this._vectorTransition, this._framingTime);
-         cq && this._animatables.push(cq);
-         let uq = 0;
-         if (this._mode === jq.FitFrustumSidesMode) {
-           const gq = this._calculateLowerRadiusFromModelBoundingSphere(qq, Eq);
-           this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = Aq.length() + this._attachedCamera.minZ), uq = gq
-         } else this._mode === jq.IgnoreBoundsSizeMode && (uq = this._calculateLowerRadiusFromModelBoundingSphere(qq, Eq), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera. … [truncated]
-         if (this.autoCorrectCameraLimitsAndSensibility) {
-           const gq = Eq.subtract(qq).length();
-           this._attachedCamera.panningSensibility = 5e3 / gq, this._attachedCamera.wheelPrecision = 100 / uq
-         }
-         return this._radiusTransition || (this._radiusTransition = Vq.d.CreateAnimation("radius", Vq.d.ANIMATIONTYPE_FLOAT, 60, jq.EasingFunction)), cq = Vq.d.TransitionTo("radius", uq, this._attachedCamera, this._attachedCamera.ZJ(), 60, this._radiusTransition, this._framingTime … [truncated]
-           this.stopAllAnimations(), lq && lq(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
-         })), cq && this._animatables.push(cq), !0
-       }
- ... (36 more removed lines; see GitHub link above)
+         wC.b.ResetCache()
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L351-L352` → after: `L698-L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L698-L699) · [Before (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L351-L352)

```diff
-       easeInCore(qq) {
-         return this.exponent <= 0 ? qq : (Math.exp(this.exponent * qq) - 1) / (Math.exp(this.exponent) - 1)
+       _rebuildGraphicsResources() {
+         this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L354-L432` → after: `L701-L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L701-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L701-L922) · [Before (L354-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L354-L432)

```diff
-     }, jq.EasingMode = aq.EASINGMODE_EASEINOUT, jq.IgnoreBoundsSizeMode = 0, jq.FitFrustumSidesMode = 1;
-     var Hq = gq(39951),
-       oq = gq(39943),
-       Pq = gq(39980),
-       Qq = gq(39845);
-     let yq = (() => {
-         var qq;
-         let Eq, gq = [],
-           Oq = [];
-         return qq = class {
-           constructor() {
-             this._currentMousePointerIdDown = -1, this.buttons = (0, Yq.i)(this, gq, [0, 1, 2]), this._pointerInput = (0, Yq.i)(this, Oq)
-           }
-           attachControl(qq) {
-             qq = Qq.f.BackCompatCameraNoPreventDefault(arguments);
-             const Eq = this.camera.Ba(),
- ... (63 more removed lines; see GitHub link above)
+       _flagContextRestored() {
+         nC.c.Warn(this.name + " context successfully restored."), this.Yg.notifyObservers(this), this._contextWasLost = !1
+       }
+       _restoreEngineAfterContextLost(CC) {
+         setTimeout((() => {
+           this._clearEmptyResources();
+           const zC = this._depthCullingState.depthTest,
+             ZC = this._depthCullingState.depthFunc,
+             QC = this._depthCullingState.depthMask,
+             wC = this._stencilState.stencilTest;
+           CC(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = zC, this._depthCullingState.depthFunc = ZC, this._depthCullingState.depthMask = QC, this._stencilState.stencilTest = wC, this._flagContextRestored()
+         }), 0)
+       }
+       get GJ() {
+         return this._isDisposed
+       }
+ ... (206 more added lines; see GitHub link above)
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L434-L449` → after: `L924-L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L924-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L924-L930) · [Before (L434-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L434-L449)

```diff
-             }, this._observer = this.camera.ZJ()._inputManager._addCameraPointerObserver(this._pointerInput, uq.b.POINTERDOWN | uq.b.POINTERUP | uq.b.POINTERMOVE | uq.b.POINTERDOUBLETAP), this._onLostFocus = () => {
-               this._pointA = this._pointB = null, Yq = 0, lq = null, this.onLostFocus()
-             }, this._contextMenuBind = qq => this.onContextMenu(qq), gq && gq.addEventListener("contextmenu", this._contextMenuBind, !1);
-             const Oq = this.camera.ZJ().Ba().getHostWindow();
-             Oq && Qq.f.RegisterTopRootEvents(Oq, [{
-               name: "blur",
-               handler: this._onLostFocus
-             }])
-           }
-           detachControl() {
-             if (this._onLostFocus) {
-               const qq = this.camera.ZJ().Ba().getHostWindow();
-               qq && Qq.f.UnregisterTopRootEvents(qq, [{
-                 name: "blur",
-                 handler: this._onLostFocus
-               }])
+             };
+             WC instanceof ArrayBuffer ? CC(new Uint8Array(WC)) : ArrayBuffer.isView(WC) ? CC(WC) : oC && oC("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
+           } else this._loadFile(CC, (async CC => {
+             try {
+               await zC(new Uint8Array(CC))
+             } catch (ZC) {
+               YC("Failed to parse texture data", ZC)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L451-L456` → after: `L932-L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L932-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L932-L1044) · [Before (L451-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L451-L456)

```diff
-             if (this._observer) {
-               if (this.camera.ZJ()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
-                 const qq = this.camera.ZJ().Ba().getInputElement();
-                 qq && qq.removeEventListener("contextmenu", this._contextMenuBind)
-               }
-               this._onLostFocus = null
+           }), void 0, QC ? QC.offlineProvider : void 0, !0, ((CC, zC) => {
+             YC("Unable to load " + (CC && CC.responseURL, zC))
+           }))
+         } else {
+           const ZC = CC => {
+             xC && !this._doNotHandleContextLost && (IC._buffer = CC), qC(IC, eC, QC, CC, IC.invertY, zC, !1, FC, wC)
+           };
+           !AC || JC ? WC && ("string" === typeof WC.decoding || WC.close) ? ZC(WC) : GC._FileToolsLoadImage(CC || "", ZC, YC, QC ? QC.offlineProvider : null, pC, IC.invertY && this._features.needsInvertingBitmap ? {
+             imageOrientation: "flipY"
+           } : void 0, this) : "string" === typeof WC || WC instanceof ArrayBuffer || ArrayBuffer.isView(WC) || WC instanceof Blob ? GC._FileToolsLoadImage(WC, ZC, YC, QC ? QC.offlineProvider : null, pC, IC.invertY && this._features.needsInvertingBitmap ? {
+             imageOrientation: "flipY"
+           } : void 0, this) : WC && ZC(WC)
+         }
+         return IC
+       }
+       _rebuildBuffers() {
+ ... (97 more added lines; see GitHub link above)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L472-L559` → after: `L1047-L1610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1047-L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L1047-L1610) · [Before (L472-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L472-L559)

```diff
-           onButtonDown(qq) {}
-           onButtonUp(qq) {}
-           onLostFocus() {}
-         }, (() => {
-           const mq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-           Eq = [(0, lq.M)()], (0, Yq.f)(null, null, Eq, {
-             kind: "field",
-             name: "buttons",
-             static: !1,
-             private: !1,
-             access: {
-               has: qq => "buttons" in qq,
-               get: qq => qq.buttons,
-               set: (qq, Eq) => {
-                 qq.buttons = Eq
-               }
- ... (72 more removed lines; see GitHub link above)
+           this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
+         }
+         return !0
+       }
+       createRawTexture(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC) {
+         throw (0, MC.i)("engine.rawTexture")
+       }
+       createRawCubeTexture(CC, zC, ZC, QC, wC, bC, nC, fC) {
+         throw (0, MC.i)("engine.rawTexture")
+       }
+       createRawTexture3D(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC) {
+         throw (0, MC.i)("engine.rawTexture")
+       }
+       createRawTexture2DArray(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC) {
+         throw (0, MC.i)("engine.rawTexture")
+       }
+ ... (548 more added lines; see GitHub link above)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L601-L621` → after: `L1614-L1630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1614-L1630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L1614-L1630) · [Before (L601-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L601-L621)

```diff
-           getClassName() {
-             return "ArcRotateCameraPointersInput"
-           }
-           _computeMultiTouchPanning(qq, Eq) {
-             if (qq && Eq) {
-               const gq = Eq.x - qq.x,
-                 Yq = Eq.y - qq.y,
-                 lq = this.camera.movement.input.getEntry("pointer", "pan"),
-                 Oq = lq?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
-               0 !== Oq && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -gq * Oq, this.camera.movement.panAccumulatedPixels.y += Yq * Oq)
-             }
-           }
-           _computePinchZoom(Eq, gq) {
-             const Yq = this.camera.radius || qq.MinimumRadiusForPinch;
-             if (this.useNaturalPinchZoom) this.camera.radius = Yq * Math.sqrt(Eq) / Math.sqrt(gq);
-             else if (this.pinchDeltaPercentage) {
- ... (5 more removed lines; see GitHub link above)
+           if (this._doNotHandleContextLost ? this._onContextLost = () => {
+               (0, wC.y)(this._gl)
+             } : (this._onContextLost = CC => {
+               CC.preventDefault(), this._contextWasLost = !0, (0, wC.y)(this._gl), fC.c.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
+             }, this._onContextRestored = () => {
+               this._restoreEngineAfterContextLost((() => this._initGLContext()))
+             }, bC.addEventListener("webglcontextrestored", this._onContextRestored, !1), ZC.powerPreference = ZC.powerPreference || "high-performance"), bC.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (ZC.xrCompatible = !1), !ZC.disableWebG … [truncated]
+             this._gl = bC.getContext("webgl2", ZC) || bC.getContext("experimental-webgl2", ZC), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
+           } catch (FC) {}
+           if (!this._gl) {
+             if (!bC) throw new Error("The provided canvas is null or undefined.");
+             try {
+               this._gl = bC.getContext("webgl", ZC) || bC.getContext("experimental-webgl", ZC)
+             } catch (FC) {
+               throw new Error("WebGL not supported", {
+                 cause: FC
+ ... (1 more added lines; see GitHub link above)
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L624-L634` → after: `L1633-L1732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1633-L1732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L1633-L1732) · [Before (L624-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L624-L634)

```diff
-           onTouch(qq, Eq, gq) {
-             const Yq = this._activeEntry ?? (this.camera.Ba().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
-             if (Yq)
-               if ("pan" === Yq.interaction) {
-                 const qq = Yq.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
-                 0 !== qq && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -Eq * qq, this.camera.movement.panAccumulatedPixels.y += gq * qq)
-               } else if ("rotate" === Yq.interaction) {
-               const qq = Yq.zC ?? Yq.sensitivity ?? 1 / this.angularSensibilityX,
-                 lq = Yq.pC ?? Yq.sensitivity ?? 1 / this.angularSensibilityY;
-               this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -Eq * qq, this.camera.movement.rotationAccumulatedPixels.y += -gq * lq
-             }
+           if (!this._gl) throw new Error("WebGL not supported")
+         } else {
+           this._gl = CC, bC = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
+           const zC = this._gl.getContextAttributes();
+           zC && (ZC.stencil = zC.stencil)
+         }
+         this._sharedInit(bC), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== ZC.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = ZC.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
+         for (let wC = 0; wC < this._caps.maxVertexAttribs; wC++) this._currentBufferPointers[wC] = new AC;
+         this._shaderProcessor = this.fS > 1 ? new WC : new qC;
+         const nC = `Babylon.js v${xC.Version}`;
+         fC.c.Log(nC + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", nC);
+         const oC = (0, wC.z)(this._gl);
+         oC.validateShaderPrograms = this.validateShaderPrograms, oC.parallelShaderCompile = this._caps.parallelShaderCompile
+       }
+       _clearEmptyResources() {
+         this._dummyFramebuffer = null, super._clearEmptyResources()
+ ... (84 more added lines; see GitHub link above)
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L636-L637` → after: `L1734-L1757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1734-L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L1734-L1757) · [Before (L636-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L636-L637)

```diff
-           onDoubleTap() {
-             this.camera.useInputToRestoreState && this.camera.restoreState()
+         }
+         if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
+         else {
+           const CC = this._gl.getExtension("WEBGL_depth_texture");
+           null != CC && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = CC.UNSIGNED_INT_24_8_WEBGL)
+         }
+         if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
+         else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
+         else {
+           const CC = this._gl.getExtension("OES_vertex_array_object");
+           null != CC && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = CC.createVertexArrayOES.bind(CC), this._gl.bindVertexArray = CC.bindVertexArrayOES.bind(CC), this._gl.deleteVertexArray = CC.deleteVertexArrayOES.bind(CC))
+         }
+         if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
+         else {
+           const CC = this._gl.getExtension("ANGLE_instanced_arrays");
+           null != CC ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = CC.drawArraysInstancedANGLE.bind(CC), this._gl.drawElementsInstanced = CC.drawElementsInstancedANGLE.bind(CC), this._gl.vertexAttribDivisor = CC.vertexAttribDivisorANGLE.bind(CC)) : this._caps … [truncated]
+ ... (8 more added lines; see GitHub link above)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L639-L806` → after: `L1759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L1759) · [Before (L639-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L639-L806)

```diff
-           onMultiTouch(qq, Eq, gq, Yq, lq, Oq) {
-             this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(Yq) - Math.sqrt(gq)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(qq, Eq, gq, Yq, lq, Oq)
-           }
-           onButtonDown(qq) {
-             this._pointerConditions.button = qq.button, this._pointerModifiers.ctrl = qq.ctrlKey, this._pointerModifiers.alt = qq.altKey, this._pointerModifiers.shift = qq.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditio … [truncated]
-           }
-           onButtonUp(qq) {
-             this._activeEntry = null, super.onButtonUp(qq)
-           }
-           onLostFocus() {
-             this._activeEntry = null, super.onLostFocus()
-           }
-         }, (() => {
-           const tq = "function" === typeof Symbol && Symbol.metadata ? Object.create(uq[Symbol.metadata] ?? null) : void 0;
-           Eq = [(0, lq.M)()], gq = [(0, lq.M)()], Oq = [(0, lq.M)()], mq = [(0, lq.M)()], xq = [(0, lq.M)()], Aq = [(0, lq.M)()], cq = [(0, lq.M)()], (0, Yq.f)(null, null, Eq, {
-             kind: "field",
- ... (152 more removed lines; see GitHub link above)
+           this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L808-L822` → after: `L1761-L1764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1761-L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L1761-L1764) · [Before (L808-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L808-L822)

```diff
-         attachControl(qq) {
-           qq = Qq.f.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.ZJ(), this._engine = this._scene.Ba(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
-             this._keys.length = 0
-           })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((Eq => {
-             const gq = Eq.event;
-             if (!gq.metaKey)
-               if (Eq.type === vq.c.KEYDOWN) {
-                 if (this._ctrlPressed = gq.ctrlKey, this._altPressed = gq.altKey, -1 !== this.keysUp.indexOf(gq.keyCode) || -1 !== this.keysDown.indexOf(gq.keyCode) || -1 !== this.keysLeft.indexOf(gq.keyCode) || -1 !== this.keysRight.indexOf(gq.keyCode) || -1 !== this.keysReset.i … [truncated]
-                   -1 === this._keys.indexOf(gq.keyCode) && this._keys.push(gq.keyCode), gq.preventDefault && (qq || gq.preventDefault())
-                 }
-               } else if (-1 !== this.keysUp.indexOf(gq.keyCode) || -1 !== this.keysDown.indexOf(gq.keyCode) || -1 !== this.keysLeft.indexOf(gq.keyCode) || -1 !== this.keysRight.indexOf(gq.keyCode) || -1 !== this.keysReset.indexOf(gq.keyCode) || -1 !== this.keysZoomIn.indexOf(gq.k … [truncated]
-               const Eq = this._keys.indexOf(gq.keyCode);
-               Eq >= 0 && this._keys.splice(Eq, 1), gq.preventDefault && (qq || gq.preventDefault())
-             }
-           })))
+         if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
+         else {
+           const CC = this._gl.getExtension("EXT_blend_minmax");
+           null != CC && (this._caps.blendMinMax = !0, this._gl.MAX = CC.MAX_EXT, this._gl.MIN = CC.MIN_EXT)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L824-L847` → after: `L1766-L1782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1766-L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L1766-L1782) · [Before (L824-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L824-L847)

```diff
-         detachControl() {
-           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
-         }
-         checkInputs() {
-           if (this._onKeyboardObserver) {
-             const qq = this.camera,
-               Eq = qq.movement.input;
-             this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
-             const gq = this._rotateDirection.set(0, 0),
-               Yq = this._panDirection.set(0, 0);
-             let lq = 0,
-               Oq = 0;
-             for (let mq = 0; mq < this._keys.length; mq++) {
-               const xq = this._keys[mq];
-               if (this._keyboardConditions.key = xq, -1 === this.keysReset.indexOf(xq)) {
-                 const qq = Eq.resolveInteraction("keyboard", this._keyboardConditions);
- ... (8 more removed lines; see GitHub link above)
+         if (!this._caps.supportSRGBBuffers) {
+           if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
+             SRGB: WebGL2RenderingContext.SRGB,
+             SRGB8: WebGL2RenderingContext.SRGB8,
+             SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
+           };
+           else {
+             const CC = this._gl.getExtension("EXT_sRGB");
+             null != CC && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
+               SRGB: CC.SRGB_EXT,
+               SRGB8: CC.SRGB_ALPHA_EXT,
+               SRGB8_ALPHA8: CC.SRGB_ALPHA_EXT
+             })
+           }
+           if (this._creationOptions) {
+             const CC = this._creationOptions.forceSRGBBufferSupportState;
+ ... (1 more added lines; see GitHub link above)
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L850-L854` → after: `L1785-L1816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1785-L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L1785-L1816) · [Before (L850-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L850-L854)

```diff
-         getClassName() {
-           return "ArcRotateCameraKeyboardMoveInput"
-         }
-         getSimpleName() {
-           return "keyboard"
+         this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
+         for (let ZC = 0; ZC < this._maxSimultaneousTextures; ZC++) this._nextFreeTextureSlots.push(ZC);
+         "Mali-G72" === this._glRenderer && (this._caps.disableMorphTargetTexture = !0)
+       }
+       _initFeatures() {
+         this._features = {
+           forceBitmapOverHTMLImageElement: "undefined" === typeof HTMLImageElement,
+           supportRenderAndCopyToLodForFloatTextures: 1 !== this._webGLVersion,
+           supportDepthStencilTexture: 1 !== this._webGLVersion,
+           supportShadowSamplers: 1 !== this._webGLVersion,
+           uniformBufferHardCheckMatrix: !1,
+           allowTexturePrefiltering: 1 !== this._webGLVersion,
+           trackUbosInFrame: !1,
+           checkUbosContentBeforeUpload: !1,
+           supportCSM: 1 !== this._webGLVersion,
+           basisNeedsPOT: 1 === this._webGLVersion,
+ ... (16 more added lines; see GitHub link above)
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L856-L1019` → after: `L1818-L1838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1818-L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L1818-L1838) · [Before (L856-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L856-L1019)

```diff
-       }, (() => {
-         const mq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         Eq = [(0, lq.M)()], gq = [(0, lq.M)()], Oq = [(0, lq.M)()], xq = [(0, lq.M)()], Aq = [(0, lq.M)()], cq = [(0, lq.M)()], uq = [(0, lq.M)()], Bq = [(0, lq.M)()], Wq = [(0, lq.M)()], Nq = [(0, lq.M)()], aq = [(0, lq.M)()], (0, Yq.f)(qq, null, aq, {
-           kind: "getter",
-           name: "useAltToZoom",
-           static: !1,
-           private: !1,
-           access: {
-             has: qq => "useAltToZoom" in qq,
-             get: qq => qq.useAltToZoom
-           },
-           metadata: mq
-         }, null, Vq), (0, Yq.f)(null, null, Eq, {
-           kind: "field",
-           name: "keysUp",
-           static: !1,
- ... (148 more removed lines; see GitHub link above)
+       }
+       get fS() {
+         return this._webGLVersion
+       }
+       getClassName() {
+         return "ThinEngine"
+       }
+       _prepareWorkingCanvas() {
+         if (this._workingCanvas) return;
+         this._workingCanvas = this.createCanvas(1, 1);
+         const CC = this._workingCanvas.getContext("2d");
+         CC && (this._workingContext = CC)
+       }
+       getInfo() {
+         return this.getGlInfo()
+       }
+ ... (5 more added lines; see GitHub link above)
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1021-L1044` → after: `L1840-L1863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1840-L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L1840-L1863) · [Before (L1021-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L1021-L1044)

```diff
-         _computeDeltaFromMouseWheelLegacyEvent(qq, Eq) {
-           let gq;
-           const Yq = .01 * qq * this.wheelDeltaPercentage * Eq;
-           return gq = qq > 0 ? Yq / (1 + this.wheelDeltaPercentage) : Yq * (1 + this.wheelDeltaPercentage), gq
-         }
-         attachControl(qq) {
-           qq = Qq.f.BackCompatCameraNoPreventDefault(arguments), this._wheel = Eq => {
-             if (Eq.type !== uq.b.POINTERWHEEL) return;
-             const gq = Eq.event;
-             let Yq;
-             const lq = gq.deltaMode === bq.b.DOM_DELTA_LINE ? 40 : 1,
-               Oq = -gq.deltaY * lq;
-             if (this.customComputeDeltaFromMouseWheel) Yq = this.customComputeDeltaFromMouseWheel(Oq, this, gq);
-             else if (this.wheelDeltaPercentage) {
-               if (Yq = this._computeDeltaFromMouseWheelLegacyEvent(Oq, this.camera.radius), Yq > 0) {
-                 const qq = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
- ... (8 more removed lines; see GitHub link above)
+       }
+       extractDriverInfo() {
+         const CC = this.getGlInfo();
+         return CC && CC.renderer ? CC.renderer : ""
+       }
+       getRenderWidth() {
+         return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
+       }
+       getRenderHeight() {
+         return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
+       }
+       clear(CC, zC, ZC) {
+         let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+           wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
+         const bC = this.stencilStateComposer.useStencilGlobalOnly;
+         this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = bC;
+ ... (8 more added lines; see GitHub link above)
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1061-L1078` → after: `L1868-L1874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1868-L1874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L1868-L1874) · [Before (L1061-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L1061-L1078)

```diff
-         getClassName() {
-           return "ArcRotateCameraMouseWheelInput"
-         }
-         getSimpleName() {
-           return "mousewheel"
-         }
-         _updateHitPlane() {
-           const qq = this.camera,
-             Eq = qq.target.subtract(qq.position);
-           this._hitPlane = nq.d.FromPositionAndNormal(qq.target, Eq)
-         }
-         _getPosition() {
-           const qq = this.camera,
-             Eq = qq.ZJ(),
-             gq = Eq.createPickingRay(Eq.pointerX, Eq.pointerY, mq.e.Identity(), qq, !1);
-           0 === qq.targetScreenOffset.x && 0 === qq.targetScreenOffset.y || (this._viewOffset.set(qq.targetScreenOffset.x, qq.targetScreenOffset.y, 0), qq.getViewMatrix().invertToRef(qq._cameraTransformMatrix), this._globalOffset = mq.q.TransformNormal(this._viewOffset, qq._camer … [truncated]
- ... (2 more removed lines; see GitHub link above)
+         ZC && (this.BZC ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), nC |= this._gl.DEPTH_BUFFER_BIT), QC && (this._gl.clearStencil(wC), nC |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(nC)
+       }
+       _clearColorAttachment(CC, zC, ZC, QC) {
+         if ((0, GC.l)(ZC)) {
+           const ZC = (0, GC.n)(QC),
+             wC = ZC ? xC._TempClearColorUint32 : xC._TempClearColorInt32;
+           return wC[0] = zC.r, wC[1] = zC.g, wC[2] = zC.b, wC[3] = zC.a, void(ZC ? this._gl.clearBufferuiv(this._gl.COLOR, CC, wC) : this._gl.clearBufferiv(this._gl.COLOR, CC, wC))
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1080-L1095` → after: `L1876-L1902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1876-L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L1876-L1902) · [Before (L1080-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L1080-L1095)

```diff
-         _zoomToMouse(qq) {
-           const Eq = this.camera,
-             gq = 1 - Eq.inertia,
-             Yq = Eq.movement.getFrameIndependentInputScale(Eq.inertia);
-           if (Eq.lowerRadiusLimit) {
-             const lq = Eq.lowerRadiusLimit ?? 0;
-             Eq.radius - (this._zoomToMouseRadiusOffset + qq * Yq) / gq < lq && (qq = ((Eq.radius - lq) * gq - this._zoomToMouseRadiusOffset) / Yq)
-           }
-           if (Eq.upperRadiusLimit) {
-             const lq = Eq.upperRadiusLimit ?? 0;
-             Eq.radius - (this._zoomToMouseRadiusOffset + qq * Yq) / gq > lq && (qq = ((Eq.radius - lq) * gq - this._zoomToMouseRadiusOffset) / Yq)
-           }
-           const lq = qq / gq / Eq.radius,
-             Oq = this._getPosition(),
-             xq = mq.o.Na[6];
-           Oq.subtractToRef(Eq.target, xq), xq.scaleInPlace(lq), xq.scaleInPlace(gq), xq.scaleInPlace(Yq), this._inertialPanning.addInPlace(xq), this._zoomToMouseRadiusOffset += qq * Yq
+         xC._TempClearColorFloat32[0] = zC.r, xC._TempClearColorFloat32[1] = zC.g, xC._TempClearColorFloat32[2] = zC.b, xC._TempClearColorFloat32[3] = zC.a, this._gl.clearBufferfv(this._gl.COLOR, CC, xC._TempClearColorFloat32)
+       }
+       _viewport(CC, zC, ZC, QC) {
+         CC === this._viewportCached.x && zC === this._viewportCached.y && ZC === this._viewportCached.z && QC === this._viewportCached.w || (this._viewportCached.x = CC, this._viewportCached.y = zC, this._viewportCached.z = ZC, this._viewportCached.w = QC, this._gl.viewport(CC, z … [truncated]
+       }
+       yR() {
+         super.yR(), this._badOS && this.flushFramebuffer()
+       }
+       get performanceMonitor() {
+         throw new Error("Not Supported by ThinEngine")
+       }
+       bindFramebuffer(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           ZC = arguments.length > 2 ? arguments[2] : void 0,
+           QC = arguments.length > 3 ? arguments[3] : void 0,
+           wC = arguments.length > 4 ? arguments[4] : void 0,
+ ... (11 more added lines; see GitHub link above)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1097-L1098` → after: `L1904-L1987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1904-L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L1904-L1987) · [Before (L1097-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L1097-L1098)

```diff
-         _zeroIfClose(qq) {
-           Math.abs(qq.x) < Wq.c && (qq.x = 0), Math.abs(qq.y) < Wq.c && (qq.y = 0), Math.abs(qq.z) < Wq.c && (qq.z = 0)
+         oC._MSAAFramebuffer && this._bindUnboundFramebuffer(oC._MSAAFramebuffer), this._cachedViewport && !wC ? this.setViewport(this._cachedViewport, ZC, QC) : (ZC || (ZC = CC.width, bC && (ZC /= Math.pow(2, bC))), QC || (QC = CC.height, bC && (QC /= Math.pow(2, bC))), this._vie … [truncated]
+       }
+       setStateCullFaceType(CC, zC) {
+         const ZC = this.cullBackFaces ?? CC ?? 1 ? this._gl.BACK : this._gl.FRONT;
+         (this._depthCullingState.cullFace !== ZC || zC) && (this._depthCullingState.cullFace = ZC)
+       }
+       setState(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           ZC = arguments.length > 2 ? arguments[2] : void 0,
+           QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+           wC = arguments.length > 4 ? arguments[4] : void 0,
+           bC = arguments.length > 5 ? arguments[5] : void 0,
+           nC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
+         (this._depthCullingState.cull !== CC || ZC) && (this._depthCullingState.cull = CC), this.setStateCullFaceType(wC, ZC), this.setZOffset(zC), this.setZOffsetUnits(nC);
+         const fC = QC ? this._gl.CW : this._gl.CCW;
+         (this._depthCullingState.frontFace !== fC || ZC) && (this._depthCullingState.frontFace = fC), this._stencilStateComposer.stencilMaterial = bC
+ ... (68 more added lines; see GitHub link above)
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1100-L1153` → after: `L1989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L1989) · [Before (L1100-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L1100-L1153)

```diff
-       }, (() => {
-         const mq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         Eq = [(0, lq.M)()], gq = [(0, lq.M)()], Oq = [(0, lq.M)()], (0, Yq.f)(null, null, Eq, {
-           kind: "field",
-           name: "wheelPrecision",
-           static: !1,
-           private: !1,
-           access: {
-             has: qq => "wheelPrecision" in qq,
-             get: qq => qq.wheelPrecision,
-             set: (qq, Eq) => {
-               qq.wheelPrecision = Eq
-             }
-           },
-           metadata: mq
-         }, Aq, cq), (0, Yq.f)(null, null, gq, {
- ... (38 more removed lines; see GitHub link above)
+         return new Uint16Array(CC)
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1155-L1156` → after: `L1991-L1992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1991-L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L1991-L1992) · [Before (L1155-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L1155-L1156)

```diff
-       addMouseWheel() {
-         return this.add(new iq), this
+       bindArrayBuffer(CC) {
+         this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(CC, this._gl.ARRAY_BUFFER)
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1158-L1159` → after: `L1994-L1997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1994-L1997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L1994-L1997) · [Before (L1158-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L1158-L1159)

```diff
-       addPointers() {
-         return this.add(new rq), this
+       bindUniformBlock(CC, zC, ZC) {
+         const QC = CC.program,
+           wC = this._gl.getUniformBlockIndex(QC, zC);
+         this._gl.uniformBlockBinding(QC, wC, ZC)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1161-L1162` → after: `L1999-L2000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1999-L2000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L1999-L2000) · [Before (L1161-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L1161-L1162)

```diff
-       addKeyboard() {
-         return this.add(new hq), this
+       bindIndexBuffer(CC) {
+         this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(CC, this._gl.ELEMENT_ARRAY_BUFFER)
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1164-L1180` → after: `L2002-L2003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR2002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L2002-L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L2002-L2003) · [Before (L1164-L1180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L1164-L1180)

```diff
-     }(Zq = Tq.prototype).addVRDeviceOrientation ?? (Zq.addVRDeviceOrientation = (0, Mq.i)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (fq = Tq.prototype).addGamepad ?? (fq.addGamepad = (0, Mq.i)("ArcRotateCameraInputsManager", "addGamepad"));
-     var zq = gq(37171),
-       Sq = gq(39972),
-       pq = gq(39977);
-     class Gq extends Sq.e {
-       constructor(qq, Eq, gq) {
-         super(qq, Eq, gq), this.input = new pq.b({
-           pan: (qq, Eq) => {
-             this.panAccumulatedPixels.x += qq, this.panAccumulatedPixels.y += Eq
-           },
-           rotate: (qq, Eq) => {
-             this.rotationAccumulatedPixels.x += qq, this.rotationAccumulatedPixels.y += Eq
-           },
-           zoom: qq => {
-             this.zoomAccumulatedPixels += qq
-           }
- ... (1 more removed lines; see GitHub link above)
+       _bindBuffer(CC, zC) {
+         (this._vaoRecordInProgress || this._currentBoundBuffer[zC] !== CC) && (this._gl.bindBuffer(zC, CC ? CC.underlyingResource : null), this._currentBoundBuffer[zC] = CC)
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1182-L1220` → after: `L2005-L2006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR2005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L2005-L2006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L2005-L2006) · [Before (L1182-L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L1182-L1220)

```diff
-       _createDefaultInputMap() {
-         return [{
-           source: "pointer",
-           button: 0,
-           modifiers: {
-             ctrl: !0
-           },
-           interaction: "pan"
-         }, {
-           source: "pointer",
-           button: 0,
-           interaction: "rotate"
-         }, {
-           source: "pointer",
-           button: 2,
-           interaction: "pan"
- ... (23 more removed lines; see GitHub link above)
+       updateArrayBuffer(CC) {
+         this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, CC)
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1222-L1315` → after: `L2008-L2028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR2008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L2008-L2028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L2008-L2028) · [Before (L1222-L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L1222-L1315)

```diff
-     }
- 
-     function Lq(qq, Eq) {
-       return isNaN(qq) ? Eq : qq
-     }
-     let Jq = (() => {
-         var qq;
-         let Eq, gq, Aq, uq, Bq, aq, Vq, Pq, yq, tq, rq, vq, hq, nq, bq, iq, Zq, fq, Mq, zq, Sq, pq, Jq, kq, Rq, Uq, Fq, sq, Xq = oq.h,
-           wq = [],
-           Kq = [],
-           Cq = [],
-           Iq = [],
-           eq = [],
-           Dq = [],
-           qE = [],
-           EE = [],
- ... (78 more removed lines; see GitHub link above)
+       _vertexAttribPointer(CC, zC, ZC, QC, wC, bC, nC) {
+         const fC = this._currentBufferPointers[zC];
+         if (!fC) return;
+         let oC = !1;
+         fC.active ? (fC.buffer !== CC && (fC.buffer = CC, oC = !0), fC.size !== ZC && (fC.size = ZC, oC = !0), fC.type !== QC && (fC.type = QC, oC = !0), fC.normalized !== wC && (fC.normalized = wC, oC = !0), fC.stride !== bC && (fC.stride = bC, oC = !0), fC.offset !== nC && (fC. … [truncated]
+       }
+       _bindIndexBufferWithCache(CC) {
+         null != CC && this._cachedIndexBuffer !== CC && (this._cachedIndexBuffer = CC, this.bindIndexBuffer(CC), this._uintIndicesCurrentlySet = CC.is32Bits)
+       }
+       _bindVertexBuffersAttributes(CC, zC, ZC) {
+         const QC = zC.getAttributesNames();
+         this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
+         for (let wC = 0; wC < QC.length; wC++) {
+           const bC = zC.getAttributeLocation(wC);
+           if (bC >= 0) {
+             const zC = QC[wC];
+ ... (5 more added lines; see GitHub link above)
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1317-L1321` → after: `L2030-L2084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR2030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L2030-L2084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L2030-L2084) · [Before (L1317-L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L1317-L1321)

```diff
-           get inertialBetaOffset() {
-             if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
-             if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
-             const qq = this.movement.rotationDeltaCurrentFrame.y;
-             return Math.abs(qq) < this._rotationEpsilon ? 0 : qq
+         }
+       }
+       recordVertexArrayObject(CC, zC, ZC, QC) {
+         const wC = this._gl.createVertexArray();
+         if (!wC) throw new Error("Unable to create VAO");
+         return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(wC), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(CC, ZC, QC), this.bindIndexBuffer(zC), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), wC
+       }
+       bindVertexArrayObject(CC, zC) {
+         this._cachedVertexArrayObject !== CC && (this._cachedVertexArrayObject = CC, this._gl.bindVertexArray(CC), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != zC && zC.is32Bits, this._mustWipeVertexAttributes = !0)
+       }
+       bindBuffersDirectly(CC, zC, ZC, QC, wC) {
+         if (this._cachedVertexBuffers !== CC || this._cachedEffectForVertexBuffers !== wC) {
+           this._cachedVertexBuffers = CC, this._cachedEffectForVertexBuffers = wC;
+           const zC = wC.getAttributesCount();
+           this._unbindVertexArrayObject(), this.unbindAllAttributes();
+           let bC = 0;
+ ... (39 more added lines; see GitHub link above)
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1323-L1324` → after: `L2086-L2093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR2086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L2086-L2093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L2086-L2093) · [Before (L1323-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L1323-L1324)

```diff
-           set inertialBetaOffset(qq) {
-             this._inertialBetaOffset = qq, 0 === qq && this.movement.resetRotationVelocity()
+       }
+       bindInstancesBuffer(CC, zC) {
+         let ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+         this.bindArrayBuffer(CC);
+         let QC = 0;
+         if (ZC)
+           for (let wC = 0; wC < zC.length; wC++) {
+             QC += 4 * zC[wC].attributeSize
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1326-L1330` → after: `L2095-L2467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR2095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L2095-L2467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L2095-L2467) · [Before (L1326-L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L1326-L1330)

```diff
-           get inertialRadiusOffset() {
-             if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
-             if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
-             const qq = this.movement.zoomDeltaCurrentFrame;
-             return Math.abs(qq) < this._rotationEpsilon ? 0 : qq
+         for (let wC = 0; wC < zC.length; wC++) {
+           const ZC = zC[wC];
+           void 0 === ZC.index && (ZC.index = this._currentEffect.getAttributeLocationByName(ZC.attributeName)), ZC.index < 0 || (this._vertexAttribArraysEnabled[ZC.index] || (this._gl.enableVertexAttribArray(ZC.index), this._vertexAttribArraysEnabled[ZC.index] = !0), this._vertex … [truncated]
+         }
+       }
+       disableInstanceAttributeByName(CC) {
+         if (!this._currentEffect) return;
+         const zC = this._currentEffect.getAttributeLocationByName(CC);
+         this.disableInstanceAttribute(zC)
+       }
+       disableInstanceAttribute(CC) {
+         let zC, ZC = !1;
+         for (; - 1 !== (zC = this._currentInstanceLocations.indexOf(CC));) this._currentInstanceLocations.splice(zC, 1), this._currentInstanceBuffers.splice(zC, 1), ZC = !0;
+         ZC && (this._gl.vertexAttribDivisor(CC, 0), this.disableAttributeByIndex(CC))
+       }
+       disableAttributeByIndex(CC) {
+ ... (357 more added lines; see GitHub link above)
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1332-L1333` → after: `L2469-L2739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR2469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L2469-L2739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L2469-L2739) · [Before (L1332-L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L1332-L1333)

```diff
-           set inertialRadiusOffset(qq) {
-             this._inertialRadiusOffset = qq, 0 === qq && this.movement.resetZoomVelocity()
+           return !0
+         }), oC, qC, FC, WC, NC, MC, pC)
+       }
+       _getTexImageParametersForCreateTexture(CC, zC) {
+         let ZC, QC;
+         return 1 === this.fS ? (ZC = this._getInternalFormat(CC, zC), QC = ZC) : (ZC = this._getInternalFormat(CC, !1), QC = this._getRGBABufferInternalSizedFormat(0, CC, zC)), {
+           internalFormat: QC,
+           format: ZC,
+           type: this._gl.UNSIGNED_BYTE
+         }
+       }
+       _rescaleTexture(CC, zC, ZC, QC, wC) {}
+       _unpackFlipY(CC) {
+         this._unpackFlipYCached !== CC && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, CC ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = CC))
+       }
+       _getUnpackAlignement() {
+ ... (255 more added lines; see GitHub link above)
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1335-L1336` → after: `L2741-L2750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR2741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L2741-L2750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L2741-L2750) · [Before (L1335-L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L1335-L1336)

```diff
-           get panningInertia() {
-             return this._panningInertia
+           ZC._cachedWrapU !== zC.wrapU && (ZC._cachedWrapU = zC.wrapU, this._setTextureParameterInteger(nC, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(zC.wrapU), ZC)), ZC._cachedWrapV !== zC.wrapV && (ZC._cachedWrapV = zC.wrapV, this._setTextureParameterInteger(nC, this._g … [truncated]
+         }
+         return !0
+       }
+       setTextureArray(CC, zC, ZC, QC) {
+         if (void 0 !== CC && zC) {
+           this._textureUnits && this._textureUnits.length === ZC.length || (this._textureUnits = new Int32Array(ZC.length));
+           for (let zC = 0; zC < ZC.length; zC++) {
+             const QC = ZC[zC].getInternalTexture();
+             QC ? (this._textureUnits[zC] = CC + zC, QC._associatedChannel = CC + zC) : this._textureUnits[zC] = -1
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1338-L1339` → after: `L2752-L2827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR2752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L2752-L2827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L2752-L2827) · [Before (L1338-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L1338-L1339)

```diff
-           set panningInertia(qq) {
-             this._panningInertia = qq, this.movement && (this.movement.panInertia = qq)
+           this._gl.uniform1iv(zC, this._textureUnits);
+           for (let CC = 0; CC < ZC.length; CC++) this._setTexture(this._textureUnits[CC], ZC[CC], !0)
+         }
+       }
+       _setAnisotropicLevel(CC, zC, ZC) {
+         const QC = this._caps.textureAnisotropicFilterExtension;
+         11 !== zC.samplingMode && 3 !== zC.samplingMode && 2 !== zC.samplingMode && (ZC = 1), QC && zC._cachedAnisotropicFilteringLevel !== ZC && (this._setTextureParameterFloat(CC, QC.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(ZC, this._caps.maxAnisotropy), zC), zC._cachedAnisotropicF … [truncated]
+       }
+       _setTextureParameterFloat(CC, zC, ZC, QC) {
+         this._bindTextureDirectly(CC, QC, !0, !0), this._gl.texParameterf(CC, zC, ZC)
+       }
+       _setTextureParameterInteger(CC, zC, ZC, QC) {
+         QC && this._bindTextureDirectly(CC, QC, !0, !0), this._gl.texParameteri(CC, zC, ZC)
+       }
+       unbindAllAttributes() {
+         if (this._mustWipeVertexAttributes) {
+ ... (60 more added lines; see GitHub link above)
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1341-L1342` → after: `L2829-L2926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR2829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L2829-L2926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L2829-L2926) · [Before (L1341-L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L1341-L1342)

```diff
-           get inertia() {
-             return this._inertia
+           return this._gl.UNSIGNED_BYTE
+         }
+         switch (CC) {
+           case 3:
+             return this._gl.BYTE;
+           case 0:
+             return this._gl.UNSIGNED_BYTE;
+           case 4:
+             return this._gl.SHORT;
+           case 5:
+             return this._gl.UNSIGNED_SHORT;
+           case 6:
+             return this._gl.INT;
+           case 7:
+             return this._gl.UNSIGNED_INT;
+           case 1:
+ ... (82 more added lines; see GitHub link above)
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1344-L1580` → after: `L2928-L2948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR2928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L2928-L2948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L2928-L2948) · [Before (L1344-L1580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L1344-L1580)

```diff
-           set inertia(qq) {
-             this._inertia = qq, this.movement && (this.movement.rotationInertia = qq, this.movement.zoomInertia = qq)
-           }
-           get angularSensibilityX() {
-             const qq = this.inputs.attached.pointers;
-             return qq ? qq.angularSensibilityX : 0
-           }
-           set angularSensibilityX(qq) {
-             const Eq = this.inputs.attached.pointers;
-             Eq && (Eq.angularSensibilityX = qq)
-           }
-           get angularSensibilityY() {
-             const qq = this.inputs.attached.pointers;
-             return qq ? qq.angularSensibilityY : 0
-           }
-           set angularSensibilityY(qq) {
- ... (221 more removed lines; see GitHub link above)
+           return this._gl.RGBA
+         }
+         switch (CC) {
+           case 3:
+             switch (zC) {
+               case 6:
+                 return this._gl.R8_SNORM;
+               case 7:
+                 return this._gl.RG8_SNORM;
+               case 4:
+                 return this._gl.RGB8_SNORM;
+               case 8:
+                 return this._gl.R8I;
+               case 9:
+                 return this._gl.RG8I;
+               case 10:
+ ... (5 more added lines; see GitHub link above)
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1582-L1621` → after: `L2950-L2975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR2950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L2950-L2975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L2950-L2975) · [Before (L1582-L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L1582-L1621)

```diff
-           }
-           detachControl() {
-             this.inputs.detachElement(), this._reset && this._reset()
-           }
-           _applyRotationAndZoomDelta(qq, Eq, gq) {
-             const Yq = this.invertRotation ? -1 : 1;
-             let lq = qq * this._calculateHandednessMultiplier();
-             this.beta < 0 && (lq *= -1), this.alpha += lq * Yq, this.beta += Eq * Yq, this.radius -= gq
-           }
-           _applyPanDelta(qq, Eq) {
-             const gq = mq.o.Na[0].Vqq(qq, Eq, Eq);
-             if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), gq.multiplyInPlace(this.panningAxis), mq.q.TransformNormalToRef(gq, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
-               const qq = this.upVector,
-                 Eq = mq.q.CrossToRef(this._transformedDirection, qq, this._transformedDirection);
-               mq.q.CrossToRef(qq, Eq, this._transformedDirection)
-             } else this.panningAxis.y || (this._transformedDirection.y = 0);
- ... (24 more removed lines; see GitHub link above)
+           case 0:
+             switch (zC) {
+               case 6:
+                 return this._gl.R8;
+               case 7:
+                 return this._gl.RG8;
+               case 4:
+                 return ZC ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
+               case 5:
+                 return ZC ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
+               case 8:
+                 return this._gl.R8UI;
+               case 9:
+                 return this._gl.RG8UI;
+               case 10:
+                 return this._gl.RGB8UI;
+ ... (10 more added lines; see GitHub link above)
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1623-L1649` → after: `L2977-L2994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR2977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L2977-L2994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L2977-L2994) · [Before (L1623-L1649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L1623-L1649)

```diff
-             if (qq) this.stopInterpolation();
-             else if (this._isInterpolating) {
-               let qq = !1;
-               const Eq = this._scene.Ba().getDeltaTime() / 1e3,
-                 gq = 1 - Math.pow(2, -Eq / this._currentInterpolationFactor),
-                 Yq = Lq(this._goalRadius, this.radius);
-               if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
-                 const Eq = mq.o.Na[0].set(Lq(this._goalTarget.x, this.K3.x), Lq(this._goalTarget.y, this.K3.y), Lq(this._goalTarget.z, this.K3.z));
-                 mq.q.LerpToRef(this.target, Eq, gq, this.K3), 10 * mq.q.Distance(this.target, Eq) / Yq < Wq.c ? (this._goalTarget.set(NaN, NaN, NaN), this.target.WG(Eq), this.setTarget(this.target, !1, !0, !0)) : qq = !0
-               }
-               if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
-                 const Eq = mq.h.RotationAlphaBetaGammaToRef(Lq(this._goalAlpha, this.alpha), Lq(this._goalBeta, this.beta), 0, mq.o.Quaternion[0]),
-                   Yq = mq.h.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, mq.o.Quaternion[1]),
-                   lq = mq.h.SlerpToRef(Yq, Eq, gq, mq.o.Quaternion[2]);
-                 lq.normalize();
-                 const Oq = lq.toAlphaBetaGammaToRef(mq.o.Na[0]);
- ... (11 more removed lines; see GitHub link above)
+           case 4:
+             switch (zC) {
+               case 8:
+                 return this._gl.R16I;
+               case 36760:
+                 return this._gl.R16_SNORM_EXT;
+               case 36761:
+                 return this._gl.RG16_SNORM_EXT;
+               case 36762:
+                 return this._gl.RGB16_SNORM_EXT;
+               case 36763:
+                 return this._gl.RGBA16_SNORM_EXT;
+               case 9:
+                 return this._gl.RG16I;
+               case 10:
+                 return this._gl.RGB16I;
+ ... (2 more added lines; see GitHub link above)
```
